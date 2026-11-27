---
title: Duck Hunt
slug: duck-hunt
date: 2016-09-28
tags:
  - jeux
authors:
  - Frakasss
featured: false
feature: /images/2021/01/img00.JPG
excerpt: Avec l'expérience acquise sur les jeux Gamebuino d'un côté, et sur le
  développement des fonctions javascript du site GameMakers de l'autre, je me
  pense à la hauteur du développemen…
visible: true
---
![](/images/2021/03/img00-1.JPG)

---

Avec l'expérience acquise sur les jeux Gamebuino d'un côté, et sur le développement des fonctions javascript du site GameMakers de l'autre, je me pense à la hauteur du développement d'un petit jeu simple.
Duck Hunt , que j'adore, semble avoir une mécanique très simple, et donc pas trop compliquée à reproduire.

---

#### LES SPRITES

Je n'avais pas trop envie ni la patience de tout redessiner. Je suis donc allé rechercher des planches de sprites sur Internet.
J'ai ensuite joué avec msPaint et Gimp pour isoler chaque image.


Au final, ça fait une belle petite collection d'images...
Et qui dit beaucoup d'images dit autant de code pour toutes les intégrer au bon moment dans le jeu!

![](/images/2021/01/img01-1.PNG) ![](/images/2021/01/img02-3.PNG) ![](/images/2021/01/img03-10.PNG)

---

#### LES SONS

Pareil pour les sons...
Ils sont facilement trouvables sur le net!
Et pour les musiques, je trouve des vidéos Youtube qui les reprennent toutes.

---

#### L'ANALYSE DU JEU

Le déroulement du jeu semble simple: il suffit de tirer sur des canards et ça fait monter les points.
Je trouve une vidéo que je regarde, encore et encore, pour bien voir toutes les mécaniques.


Du coup je vois que le jeu commence par une vidéo avec le chien qui saute au-dessus de la haie...
Et aussi que quand on a tiré 3 balles, le canard s'en va et le chien se fiche de nous!.
Et aussi le score qui n'est pas le même en fonction du canard ou de la balle qui le tue (tuer du premier coup rapporte plus de points)
Et aussi qu'au bout de 10 canards, on change de Level.
Et aussi, et aussi, et aussi...


Au final, le développement ne sera pas si simple...

![](/images/2021/01/img04-10.PNG) ![](/images/2021/01/img05-11.PNG)

![](/images/2021/01/img06-11.PNG)

![](/images/2021/01/img08-9.PNG)

![](/images/2021/01/img09-8.PNG)

![](/images/2021/01/img10-5.PNG)

![](/images/2021/01/img11-7.PNG)

![](/images/2021/01/img12-6.PNG)

![](/images/2021/01/img13-8.PNG)

![](/images/2021/01/img14-7.PNG)

![](/images/2021/01/img15-4.PNG)

![](/images/2021/01/img16-2.PNG)

![](/images/2021/01/img17-2.PNG)

![](/images/2021/01/img18-3.PNG)

![](/images/2021/01/img19-2.PNG)

![](/images/2021/01/img19.GIF)

---

#### LES GRANDES LIGNES DU DEVELOPPEMENT

Je commence donc par afficher le décor. Il faut le séparer en deux parties : un background ( avec l'arbre) et un foreground (les herbes, et toute la barre de score.

Ensuite, je code l'animation du chien. C'est long car il faut ralentir le code pour que ça n'aille pas trop vite par rapport à la musique.

Puis je m'attaque au jeu proprement dit.

Il faut gérer les trajectoires des canards, et faire en sorte qu'ils changent de direction aléatoirement au bout d'un certain temps.
Il faut également penser à regarder où clique le joueur.

Si c'est sur un canard, alors on passe à l'animation où le canard tombe, et se fait ramasser par le chien. Une fois cette animation terminée, on enregistre le score et le fait que ce canard a été tué. Puis on passe au canard suivant.
Si on a tiré à côté, on retire une balle du chargeur, et on recommence. S'il n'y a plus de balle, l'animation se lance : le canard s'envole et le chien se fiche de nous.

![](/images/2021/01/img20.GIF)

---

#### RESULTAT

Après avoir débugué, ajouté de petits détails, j'estime que le jeu est "fini". 
Il faudrait encore coder le Game Over, ajouter de la difficulté au fur et à mesure des niveaux...
Mais d'autres projets se bousculent, et je passe à autre chose.

Un jour peut-être, je finirai!
