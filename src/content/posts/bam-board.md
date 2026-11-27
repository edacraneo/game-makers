---
title: Bam! Board V3.1
slug: bam-board
date: 2019-04-09
tags:
  - pcb
authors:
  - BudDevil
featured: false
feature: /images/2021/01/img06-3.JPG
excerpt: "Genèse : Après avoir mené à terme différents projets longs et
  ambitieux, nous avons constaté lors du montage, que certaines étapes étaient
  coûteuses en temps et pouvaient être simp…"
visible: true
---
![](/images/2021/03/img01-62.JPG)

---

## Genèse :

Après avoir mené à terme différents projets longs et ambitieux, nous avons constaté lors du montage, que certaines étapes étaient coûteuses en temps et pouvaient être simplifiées !
Nous nous sommes focalisés sur les différentes phases qui entourent le Raspberry Pi et constatons que certaines sont assez chronophages comme :

\- **Le câblage des boutons** qui nous impose d'avoir le schéma de montage des connecteurs gpio sous les yeux pour ne pas faire d'erreur.
\- **Fabriquer des câbles** avec des cosses et des connecteurs Dupont afin de pouvoir relier le Pi aux différents boutons et joysticks.
\- Il est souvent nécessaire de **souder**.
\- Les réglages de **l'intensité des Leds** et **la vitesse du ventilateur** qui fait souvent trop de bruit.
\- **Dénuder** l'une des extrémités d'un câble jack, afin de récupérer le Ground, Left, Right pour l'amplificateur (PAM8403).

Nous avons ensuite cherché un moyen de simplifier au maximum toutes ces étapes, une solution nous est alors parue évidente...

---

## Présentation du projet :

**"PCB"** signifie Printed Circuit Board, en Français un circuit imprimé ! C'est le meilleur choix selon nous pour simplifier un peu plus la fabrication de nos bartops.
Pour ça nous avons réfléchi et posé nos idées, nous en avons gardé certaines, jeté d'autres.... puis nous avons rédigé un cahier des charges en respectant ces maîtres mots : **simple, pratique, rapide**.

La **BAM! Board V3.1 est le fruit de cette réflexion.**
Nous avons soumis notre projet à l'équipe de **Recalbox©** qui a trouvé l'idée plutôt bonne ! Il n'en fallait pas plus pour nous lancer dans cette nouvelle aventure......

Maisss concrètement, il fait quoi ce **PCB** !?

![](/images/2021/01/img02-2.JPG) ![](/images/2021/01/img03-2.JPG) ![](/images/2021/01/img04-2.JPG)

#### La BAM! Board V3.1 :

Cette petite carte est avant tout **pratique**, elle permet un câblage **simple** et **rapide**. Elle est spécifique à **Recalbox©** et se **"BAM !**" (plug) directement sur les ports GPIO du raspberry PI (modèle 1,2,3 et 4).

Elle permet :

**\- D'identifier clairement toutes les touches de fonctionnement de Recalbox© pour 1 ou 2 joueurs avec la configuration de base des GPIO (map1,2) de Recalbox©**. Plus besoin d'avoir le schéma de câblage des gpio sous les yeux, tout est écrit sur la carte, Il suffit de plug les connecteurs rapides sur les boutons correspondants. C'est simple, rapide et sans erreurs ! (PS: Si vous utilisez une configuration custom des gpio, certaines touches risquent de ne plus être aux emplacements indiqués sur la carte.)

**\- De plugger facilement vos joysticks**. La carte dispose de 2 types de connecteurs pour brancher vos joys : des borniers à vis ou des pins. Peu importe le câblage que vous avez , vous pouvez le brancher facilement dessus. Les directions sont clairement identifiées, vous ne pouvez pas vous tromper lors des branchements.

**\- De brancher et gérer l'intensité de Leds**. Un emplacement est prévu pour le branchement de Leds (attention à la limitation du courant par pin imposée par le chipset du raspberry pi, sous peine d'endommager celui-ci), une résistance variable vous permet de régler facilement la luminosité, il suffit de tourner la vis de réglage à l'aide d'un tournevis jusqu'à l'intensité désirée et Hop! C'est fini !

**\- De brancher et gérer la vitesse de rotation du ventilateur (bruit)**. Un emplacement est prévu pour le branchement d'un ventilateur 5v, une résistance variable vous permet de régler facilement la vitesse de rotation de celui-ci, il suffit de tourner la vis de réglage à l'aide d'un tournevis jusqu'à la vitesse désirée et Hop! C'est fini !

**\- De disposer de 2 sorties audio (jack et bornier à vis) équipée de bobines qui filtrent les parasites dus à la boucle de masse**. Plus besoin de dénuder l'extrémité d'un câble jack pour récupérer les fils à mettre sur l'ampli (L.G.R), il suffit simplement de brancher votre câble jack sortant du Raspberry Pi dans l'entrée audio de la carte pour ressortir sur des borniers à vis ou une prise jack (la carte dispose de 2 sorties son), vous n'avez plus qu'à brancher 3 fils ou le câble jack dans la sortie dédiée jusqu'à votre amplificateur. le filtre GLI réduira de 80 à 90% les parasites, le son est légèrement atténué mais de meilleure qualité.

**\- De disposer de 2 ports : 5v et 3,3v.** Vous avez à disposition 2 borniers à vis qui délivrent du 5v et du 3,3v (attention à la limitation du courant par pin imposée par le chipset du raspberry pi, sous peine d'endommager celui-ci). ils peuvent être utilisés pour alimenter d'autres modules comme par exemple un mini LCD I2C en 5v.

**\- De choisir parmi 2 modes d'alimentation :**

**1°) SOIT le Raspberry Pi alimente la BAM! board.** Si vous alimentez le Raspberry Pi via son port micro usb dédié (avec une alimentation 3 ampères), la BAM! Board et ses divers éléments seront alimentés également.

**2°) SOIT la BAM! board alimente le Raspberry Pi.** Si vous alimentez la BAM! Board avec une alimentation à découpage sur le bornier 5V de celle-ci (bornier bleu), le Raspberry Pi sera alimenté également.

**ATTENTION**, si vous alimentez votre Raspberry Pi par la BAM! Board, vous devez **impérativement contrôler la tension de sortie de votre alimentation à 5,15v max** sous peine de griller votre Raspberry Pi. En effet, en passant par ce mode d'alimentation, le Pi ne dispose pas de protection contre les surtensions.

=&gt; Cette nouvelle version de la BAM! Board concentre **les 2 cartes de la V2 en une**, l'épaisseur des **pistes en cuivre est doublée** pour diminuer la production de chaleur, la carte dispose maintenant de **plusieurs perforations** qui permettent de dissiper la chaleur de manière plus efficace.


Vous l'aurez compris, notre **BAM! Board** est avant tout pratique, permet un câblage propre et rapide, sans erreurs de branchement, vous dispense de certaines soudures, permet de changer de Raspberry Pi facilement (plug/deplug). Fabriquer un bartop 1 ou 2 joueurs devient alors plus facile pour ceux qui ne sont pas à l'aise avec certaines parties techniques.

![](/images/2021/01/img09-2.JPG) ![](/images/2021/01/img05-2.JPG) ![](/images/2021/01/img06-2.JPG)
![](/images/2021/01/img07-2.JPG) ![](/images/2021/01/img08-2.JPG)

---

#### Caractéristiques :

Carte complète et assemblée, spécifique à **Recalbox©**, qui se branche sur les ports GPIO d'un Raspberry Pi modèle (1,2,3,4), vous devez activer l'option GPIO=1 dans le fichier .conf disponible dans **Recalbox©**.

\- Livrée avec 18 câbles doubles avec connecteurs rapides type JST pour les boutons (**Fournis par Art'Cab**).
\- Livrée avec 2 jumpers. (**Ne pas laisser les jumpers sur la carte si vous n'utilisez pas les sorties LED et FAN**).
**\- Isolateur de boucle de masse intégré**.

**Bam! Board n'est pas compatible avec les autres modèles de Raspberry Pi.**

![](/images/2021/01/img10-2.JPG) ![](/images/2021/01/img11-2.JPG) ![](/images/2021/01/img12-2.JPG)
![](/images/2021/01/img13-2.JPG) ![](/images/2021/01/img14-2.JPG) ![](/images/2021/01/img15-2.JPG)
![](/images/2021/01/img16-2.JPG) ![](/images/2021/01/img17-2.JPG) ![](/images/2021/01/img18-3.JPG)

---

#### Isolateur de boucle de masse (GLI) intégré :

Le son analogique des raspberry Pi n'a pas très bonne réputation, des parasites perturbent la qualité du signal et on se retrouve souvent avec un bourdonnement désagréable. Certains de ces parasites sont dus à l'effet boucle de masse qui prend effet lorsque l'on branche le Raspberry Pi et l'amplificateur sur la même alimentation.

Pour résoudre ce problème, nous avons réalisé notre propre **"Isolateur de boucle de masse"** qui filtre ces parasites, le son est légèrement atténué mais de meilleure qualité. Ce petit module est intégré directement dans notre **BAM! Board V3.1**.

---

#### Montage :

Voici quelques exemples de montages réalisés avec :

**\- Notre BAM! Board V2.0 :**

![](/images/2021/01/img19-2.JPG) ![](/images/2021/01/img20-3.JPG)
![](/images/2021/01/img21-2.JPG) ![](/images/2021/01/img22-2.JPG)

**\- Notre BAM! Board V3.0 :** (prototype sans perforations)

![](/images/2021/01/img23-2.JPG) ![](/images/2021/01/img24-3.JPG) ![](/images/2021/01/img25-2.JPG)

---

#### Où se la procurer ? :

Cette fois, nous avons voulu rendre ce projet accessible à tous en passant par des professionnels de l'Arcade.
Notre nouvelle **BAM! Board** est disponible chez [**Art'Cab**](https://www.artcab.fr/interface-usb/369-bam-board-v3.html).
