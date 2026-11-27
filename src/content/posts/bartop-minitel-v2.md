---
title: Bartop Minitel (v2)
slug: bartop-minitel-v2
date: 2016-12-15
tags:
  - creations
  - bartops
authors:
  - BudDevil
featured: false
feature: /images/2021/01/mini01-16.JPG
excerpt: Specs Techniques - SANWA JLF-TPRG-8AYT, super silencieux - Seimitsu
  PS-15, pour leur petite profondeur super silencieux
  ------------------------------------------------------------…
visible: true
---
![](/images/2021/03/img01-63.JPG)

---

> **Specs Techniques**
> \- SANWA JLF-TPRG-8AYT, _super silencieux_
> \- Seimitsu PS-15, _pour leur petite profondeur_ super silencieux

---

La liste du matériel utilisé est disponible : [ici](https://drive.google.com/file/d/1l5tS8FNTS1o98fFkQCBPfjkZsKgZbArF/view?usp=sharing)

---

Les fichiers .STL, les stickers, etc sont disponibles :

[**[Kit] pour : Minitel Arcade (Bartel)**](https://cults3d.com/fr/mod%C3%A8le-3d/jeu/kit-minitel-arcade-bartel)

![](https://files.cults3d.com/uploaders/13841606/illustration-file/16e74147-2ca2-454e-a362-530df0053894/img57_large.JPG)

---

La taille restreinte de l'appareil me donnait envie d'y jouer n'importe où et n'importe quand.
Je me suis donc lancé dans une version autonome qui fonctionne sur secteur ET batteries !

---

#### La nouvelle structure

La nouvelle structure est réalisée en 3 parties:

#### _Support bas (en bleu) :_

C'est une des pièces maîtresses de la structure, les deux autres parties y sont fixées.
Au centre j'ai placé le bloc de batteries, ventilé correctement grâce aux aérations.
Devant, la carte de gestion d’énergie.

![](/images/2021/01/img02-5.JPG) ![](/images/2021/01/img03-4.JPG) ![](/images/2021/01/img04-3.JPG)

#### _Support middle(en jaune) :_

Le middle repose et maintient fermement les batteries qui se trouvent en dessous.
Il accueille aussi l'alim 5V 5A sur secteur et sur la droite la carte de split HDMI qui distribue la vidéo sur l’écran principal et sur la sortie HDMI.

![](/images/2021/01/img05-3.JPG) ![](/images/2021/01/img06-4.JPG) ![](/images/2021/01/img07-3.JPG)

#### _Support haut (en vert) :_

Sur le support haut, je fixe le RPI3 ainsi que la carte de contrôle vidéo.

![](/images/2021/01/img08-4.JPG) ![](/images/2021/01/img09-4.JPG) ![](/images/2021/01/img10-4.JPG)

#### _Support des haut-parleurs :_

Pour assurer l'extraction de l'air, je prévois de mettre un ventilateur 5V de 40&#42;40&#42;10 au centre. A gauche et à droite, il reste pile poil la place des Haut Parleurs qui se positionneront en face de la grille d'aération de la coque.

![](/images/2021/01/img11-4.JPG) ![](/images/2021/01/img12-4.JPG) ![](/images/2021/01/img13-4.JPG)

#### _Support connectique :_

Plutôt que de tout percer avec précision, reboucher, et poncer comme sur la version précédente, ben j'ai préféré créer une plaque arrière avec tous les trous de prêts ! Elle se fixe sur la partie arrière et est faite pour accueillir :
\- Une prise HDMI
\- Une prise électrique
\- Une prise USB
\- Une entrée Micro SD, super pratique : on peut changer de système sans rouvrir tout le minitel!
Avec un sticker sur mesure, ça habille bien!

![](/images/2021/01/img14-3.JPG) ![](/images/2021/01/img15-3.JPG) ![](/images/2021/01/img16-3.JPG)
![](/images/2021/01/img17-3.JPG) ![](/images/2021/01/img18-4.JPG)

---

#### Le Panel :

Pour des questions pratiques, je reviens sur mon idée de panel fixé à la partie supérieure. Le rendre solidaire de la partie inférieure me permettra de gagner quelques centimètres de fils (économie d'énergie!), et la maintenance intérieure sera plus simple.

Une fois imprimé, séance mastic et ponçage! C'était un peu risqué d'imprimer une longueur pareille dans une petite machine (le plastique a tendance à se replier sur lui-même, on appelle ça le warping). Mais imprimer en un seul bloc augmente vraiment la solidité. J'suis content que ça ait marché!

![](/images/2021/01/img19-3.JPG) ![](/images/2021/01/img20-4.JPG)
![](/images/2021/01/img21-3.JPG) ![](/images/2021/01/img22-3.JPG)

---

#### _Le Bezel :_

Une fois imprimé, séance mastic et ponçage! 

J'innove un peu en faisant un Bezel avec le logo S..A en triangle.

![](/images/2021/01/img23-3.JPG)

---

#### _La @#&#42;! de vitre de protection_

Je redoute cette étape: le thermoformage, c'est une punition! Si je chauffe trop ça marque le plexi, si je chauffe pas assez ça risque de fissurer... J'en ai flingué une paire de vitre sur le précédent Minitel
Je cherche une solution alternative qui m'évitera de me faire (encore plus) des cheveux blancs!

J'incorpore donc 4 vis sur la face que je camoufle en faisant un trou conique et en rebouchant avec du mastic. Et après la peinture, on n'y voit que du feu!
Mettre ou changer la vitre est maintenant super simple: une vis, une rondelle, un écrou. Lorsque je serre l'écrou, ça appuie sur la rondelle qui répartit la force sur une plus grande surface de plexy, qui finit par épouser les courbures.

Une fois les 4 vis bien serrées, on retrouve l'aspect bombé, ça fait propre et ça évite les galères de fissures sur le Plexy.

![](/images/2021/01/img24-4.JPG) ![](/images/2021/01/img25-3.JPG) ![](/images/2021/01/img26-2.JPG)

---

#### _L'écran et sa télécommande_

Ma commande d'écrans est une histoire en soi! Après une première commande qui n'est jamais arrivée, je dois recommander, et re-patienter une vingtaine de jours pour être livré!
Une fois les écrans arrivés, je vire tout de suite la LED qui ne sert à rien! L'énergie est précieuse et 20mA c'est toujours ça de gagné!

La télécommande filaire permet d'éteindre l’écran ou changer les paramètres facilement. Pourquoi éteindre l'écran ? Parce que ça ne sert à rien de le laisser allumé lorsque je branche le bartop sur un écran HD pour jouer à 5!
Je décide de l'encastrer sur le côté du Bartop, à l'opposé de la molette de réglage du son.

Pour que les boutons sortent par les trous dans la coque, il faut qu'ils soient plus longs. Je dessoude les microswitchs de la pcb et je les remplace par des plus longs.
&gt;A l'aide d'un gabarit de perçage que j'ai conceptualisé, je perce la coque. Je peaufine les trous côté intérieur avec une fraise conique pour que les boutons soient bien libres et n'accrochent pas les bords.
Je fabrique aussi une fixation pour qu'on ne voit pas les vis à l’extérieur.

![](/images/2021/01/img27-2.JPG) ![](/images/2021/01/img28-2.JPG) ![](/images/2021/01/img29-2.JPG)
![](/images/2021/01/img30-2.JPG) ![](/images/2021/01/img32-2.JPG)
![](/images/2021/01/img31-2.JPG) ![](/images/2021/01/img34-2.JPG)

---

#### L'alim

Pour suivre de près l'état de la batterie, j'ajoute 4 LEDs sur le côté. Toutes allumées, la batterie est full. Eteintes, il est temps de recharger!

![](/images/2021/01/img35-2.JPG) ![](/images/2021/01/img36-2.JPG) ![](/images/2021/01/img37-2.JPG)

---

#### La peinture

Pour un résultat de qualité, je fais à nouveau peindre toute la coque par un carrossier. Après quelques essais ( je suis perfectionniste, et pour le prix demandé, je n'attends pas moins que la perfection! ), le résultat est là!

![](/images/2021/01/img38-9.JPG) ![](/images/2021/01/img39-9.JPG)
![](/images/2021/01/img40-9.JPG) ![](/images/2021/01/img41-9.JPG)

---

#### L'assemblage

Dernière ligne droite: rassembler toutes les pièces! Ecran, structure, câblage, boutons, joystick, stickers...

![](/images/2021/01/img42-2.JPG) ![](/images/2021/01/img43-2.JPG) ![](/images/2021/01/img44-2.JPG)
![](/images/2021/01/img45-2.JPG) ![](/images/2021/01/img46-2.JPG)
![](/images/2021/01/img47-2.JPG) ![](/images/2021/01/img48-2.JPG)

---

#### Schéma électrique simple des principaux éléments

**Dans la version sans batteries :** L'interrupteur principal gère 2 lignes simultanément, lorsque vous appuyez sur le bouton, les 2 lignes sont alimentées en même temps. J'ai séparé les composants électroniques sur deux lignes séparées dans un ordre précis car au démarrage, le Raspberry et l’écran créent un pic de consommation de courant (Ampères) qui diminue quelques instants après mais provoque durant ce laps de temps une sous alimentation, ce qui n'est pas très bon pour notre alim 5V et les appareils eux-mêmes... Certains diront que ça n'a aucun intérêt de faire ça, moi j'ai remarqué la différence au multimètre et dans le comportement général.

**Dans la version avec batteries :** Un premier interrupteur gère la source, on sélectionne soit l'alimentation, soit la batterie. Le deuxième interrupteur permet le démarrage global des appareils. Dans mon schéma (ouais je sais il est moche !) on remarque que j'utilise un câble USB en "Y" qui part de 2 ports USB de la power bank jusqu'au bouton de sélection, j'ai choisi ce principe de fonctionnement pour équilibrer un peu la consommation, car notre power bank est équipée de 2 ports USB pouvant supporter jusqu'à 3,5 ampères chacun, un seul aurait été un peu limite. Je conseille aussi d'utiliser du fil de qualité ayant une section suffisante pour alimenter tout l'appareillage.

Je conseille aussi de mettre un **filtre** à la sortie de l'ampli afin de supprimer les grésillements ou de **la ferrite**.

![](/images/2021/01/img49-2.JPG)

![](/images/2021/01/img50-2.JPG)

---

#### Le câblage GPIO sur le Raspberry PI 3

Sur les GPIO du Raspberry PI 3

Vous pouvez utiliser des connecteurs Dupont sur le Raspberry et des cosses côté boutons et joysticks.
Il faut bien activer le mode GPIO sur le fichier .config de Recalbox.

![](/images/2021/01/img51-2.JPG)

---

#### Bilan

Voilà c'est fini, je suis un peu déçu de l’autonomie qui finalement n'est que d'environ 3 heures, j'avais espéré un peu plus ! Tant pis.

Ce point mis à part, le résultat reste à la hauteur de mes attentes.

![](/images/2021/01/img52-2.JPG) ![](/images/2021/01/img53-2.JPG) ![](/images/2021/01/img55-2.JPG)
![](/images/2021/01/img56-2.JPG) ![](/images/2021/01/img57-2.JPG) ![](/images/2021/01/mini01-24.JPG)

---

#### Vidéos

<figure class="gm-embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZzBUWbPvURo" frameborder="0" allowfullscreen=""></iframe></figure>

<figure class="gm-embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/d8cqBIEfH-o" frameborder="0" allowfullscreen=""></iframe></figure>

---
