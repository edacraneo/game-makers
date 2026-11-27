---
title: BAM! Board V2.0
slug: bam-board-v2-0
date: 2018-01-22
tags:
  - pcb
authors:
  - BudDevil
feature: /images/2021/01/img01-9.JPG
excerpt: "Genèse : Après avoir mené à terme différents projets longs et
  ambitieux, nous avons constaté lors du montage, que certaines étapes étaient
  coûteuses en temps et pouvaient être simp..."
featured: false
visible: true
---
![](/images/2021/03/img01-47.JPG)

---

#### Genèse :

Après avoir mené à terme différents projets longs et ambitieux, nous avons constaté lors du montage, que certaines étapes étaient coûteuses en temps et pouvaient être simplifiées !
Nous nous sommes focalisés sur les différentes phases qui entourent le Raspberry Pi et constatons que certaines sont assez chronophages comme :

\- **Le câblage des boutons** qui nous impose d'avoir le schéma de montage des connecteurs gpio sous les yeux pour ne pas faire d'erreur.
\- **Fabriquer des câbles** avec des cosses et des connecteurs Dupont afin de pouvoir relier le Pi aux différents boutons et joysticks.
\- Il est souvent nécessaire de **souder**.
\- Les réglages de **l'intensité des Leds** et **la vitesse du ventilateur** qui fait souvent trop de bruit.
\- **Dénuder** l'une des extrémités d'un câble jack, afin de récupérer le Ground, Left, Right pour l'amplificateur (PAM8403).

Nous avons ensuite cherché un moyen de simplifier au maximum toutes ces étapes, une solution nous est alors parue évidente...

---

#### Présentation du projet :

**"PCB"** signifie Printed Circuit Board, en Français un circuit imprimé ! C'est le meilleur choix selon nous pour simplifier un peu plus la fabrication de nos bartops.
Pour ça nous avons réfléchi et posé nos idées, nous en avons gardé certaines, jeté d'autres.... puis nous avons rédigé un cahier des charges en respectant ces maîtres mots : **simple, pratique, rapide**.

La **BAM! Board V2.0 est le fruit de cette réflexion.**
Nous avons soumis notre projet à l'équipe de **Recalbox©** qui a trouvé l'idée plutôt bonne ! Il n'en fallait pas plus pour nous lancer dans cette nouvelle aventure......

Maisss concrètement, il fait quoi ce **PCB** !?

![](/images/2021/01/img02-18.JPG) ![](/images/2021/01/img03-17.JPG) ![](/images/2021/01/img04-15.JPG)

---

#### La BAM! Board :

Cette petite carte est avant tout **pratique**, elle permet un câblage **simple** et **rapide**. Elle est spécifique à **Recalbox©** et se **"BAM !**" (plug) directement sur les ports GPIO du raspberry PI (modèle 1,2,3 et 4).

Elle permet :

**\- D'identifier clairement toutes les touches de fonctionnement de Recalbox© pour 1 ou 2 joueurs**. Plus besoin d'avoir le schéma de câblage des gpio sous les yeux, tout est écrit sur la carte, Il suffit de plug les connecteurs rapides sur les boutons correspondants. C'est simple, rapide et sans erreurs !

**\- De plugger facilement vos joysticks**. La carte dispose de 2 types de connecteurs pour brancher vos joys : des borniers à vis ou des pins. Peu importe le câblage que vous avez , vous pouvez le brancher facilement dessus. Les directions sont clairement identifiées, vous ne pouvez pas vous tromper lors des branchements.

**\- De brancher et gérer l'intensité de Leds**. Un emplacement est prévu pour le branchement de Leds (attention à la limitation du courant par pin imposée par le chipset du raspberry pi, sous peine d'endommager celui-ci), une résistance variable vous permet de régler facilement la luminosité, il suffit de tourner la vis de réglage à l'aide d'un tournevis jusqu'à l'intensité désirée et Hop! C'est fini !

**\- De brancher et gérer la vitesse de rotation du ventilateur (bruit)**. Un emplacement est prévu pour le branchement d'un ventilateur 5v, une résistance variable vous permet de régler facilement la vitesse de rotation de celui-ci, il suffit de tourner la vis de réglage à l'aide d'un tournevis jusqu'à la vitesse désirée et Hop! C'est fini !

\- De disposer d'une sortie audio sur 3 fils (L.G.R). Plus besoin de dénuder l'extrémité d'un câble jack pour récupérer les fils à mettre sur l'ampli (L.G.R), il suffit simplement de brancher votre câble jack sortant du Raspberry Pi3 dans l'entrée audio de la carte pour ressortir sur des borniers à vis, vous n'avez plus qu'à brancher 3 fils dans la sortie dédiée jusqu'à votre amplificateur.

**\- De disposer de 2 ports : 5v et 3,3v** . Vous avez à disposition 2 borniers à vis qui délivrent du 5v et du 3,3v (attention à la limitation du courant par pin imposée par le chipset du raspberry pi, sous peine d'endommager celui-ci). ils peuvent être utilisés pour alimenter d'autres modules comme par exemple un mini LCD I2C en 5v.

Vous l'aurez compris, notre **BAM! Board** est avant tout pratique, permet un câblage propre et rapide, sans erreurs de branchement, vous dispense de certaines soudures, permet de changer de Raspberry Pi facilement (plug/deplug). Fabriquer un bartop 1 ou 2 joueurs devient alors plus facile pour ceux qui ne sont pas à l'aise avec certaines parties techniques.

![](/images/2021/01/img05-15.JPG) ![](/images/2021/01/img06-15.JPG) ![](/images/2021/01/img07-15.JPG)
![](/images/2021/01/img08-16.JPG) ![](/images/2021/01/img09-17.JPG)

---

#### Caractéristiques :

Carte complète et assemblée, spécifique à **Recalbox©**, qui se branche sur les ports GPIO d'un Raspberry Pi modèle (1,2,3,4), vous devez activer l'option GPIO=1 dans le fichier .conf disponible dans **Recalbox©**.

\- Livrée avec 18 câbles (longueur 30 cm) doubles avec connecteur rapide type JST pour les boutons.
\- Livrée avec 2 jumpers. (**Ne pas laisser les jumpers sur la carte si vous n'utilisez pas les sorties LED et FAN**).

\-**1 Isolateur de boucle de masse (GLI) inclus**.

**Bam! Board n'est pas compatible avec les autres modèles de Raspberry Pi.**

![](/images/2021/01/img16-15.JPG) ![](/images/2021/01/img10-17.JPG) ![](/images/2021/01/img11-16.JPG)
![](/images/2021/01/img12-17.JPG) ![](/images/2021/01/img13-17.JPG)
![](/images/2021/01/img14-15.JPG) ![](/images/2021/01/img15-15.JPG)

---

#### Isolateur de boucle de masse (GLI) (fourni avec la BAM! Board) :

Le son analogique des raspberry Pi n'a pas très bonne réputation, des parasites perturbent la qualité du signal et on se retrouve souvent avec un bourdonnement désagréable. Certains de ces parasites sont dus à l'effet boucle de masse qui prend effet lorsque l'on branche le Raspberry Pi et l'amplificateur sur la même alimentation.

Pour résoudre ce problème, nous avons réalisé notre propre **"Isolateur de boucle de masse"** qui filtre ces parasites, le son est légèrement atténué mais de meilleure qualité. Ce petit module est complémentaire à notre carte et se branche directement de la sortie jack du Raspberry Pi à l'entrée jack de la **BAM! Board**.
Vous pouvez aussi le brancher directement entre le Raspberry Pi et l'amplificateur.

![](/images/2021/01/img17-15.JPG) ![](/images/2021/01/img18-15.JPG) ![](/images/2021/01/img19-14.JPG)
![](/images/2021/01/img20-15.JPG) ![](/images/2021/01/img21-14.JPG) ![](/images/2021/01/img22-14.JPG)
