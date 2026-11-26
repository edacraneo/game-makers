# Récupération en cas d'erreur

Tout le site est versionné dans Git. Rien n'est jamais vraiment perdu : même un
fichier supprimé via `/admin` reste dans l'historique des commits.

## Restaurer une page ou un article supprimé

```bash
# 1. Trouver quand le fichier a été supprimé
git log --diff-filter=D --summary -- src/content/

# 2. Le restaurer depuis le commit d'avant la suppression
git checkout <SHA_DU_COMMIT>~1 -- src/content/pages/ma-page.md

# 3. Valider et pousser (redeploy automatique)
git commit -m "Restauration de ma-page"
git push
```

## Revenir à un état antérieur du site entier

```bash
# Annuler le dernier commit (crée un commit inverse — sûr)
git revert HEAD
git push

# Ou revenir au tag de référence v1.0 (état stable du site)
git checkout v1.0
```

## Repères

- `v1.0` — tag posé sur l'état stable (migration + design + CMS + déploiement)
- Les fichiers supprimés ne disparaissent jamais de l'historique tant qu'ils ont
  été commit une fois.
- Sur GitHub : onglet **Commits** permet de voir chaque modification et de
  restaurer via l'interface (bouton « revert » sur un commit).

## Protection recommandée (une fois, sur GitHub)

Repo → Settings → Rules → Rulesets → **New ruleset** sur `main` :
interdire les « deletions » et « force pushes ». Empêche toute perte
d'historique même par accident.
