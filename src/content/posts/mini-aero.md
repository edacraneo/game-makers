---
title: Mini Aero City
slug: mini-aero
date: 2019-07-19
tags:
  - creations
  - bartops
authors:
  - Frakasss
  - BudDevil
featured: false
feature: /images/2021/01/img01.JPG
excerpt: Matériel Système - Raspberry Pi 3 - Lot radiateurs pour PI - Carte
  micro SD - 1 alimentation 12V 3A/5V 3A - Câbles 20 AWG - 1 connecteur C14
  femelle - 1 rallonge micro SD > Matéri…
visible: true
---
![](/images/2021/03/img01-61.JPG)

---

> **Matériel Système**
> \- Raspberry Pi 3
> \- Lot radiateurs pour PI
> \- Carte micro SD
> \- 1 alimentation 12V 3A/5V 3A
> \- Câbles 20 AWG
> \- 1 connecteur C14 femelle
> \- 1 rallonge micro SD
>

> **Matériel Image**
> \- 1 LCD I2C
> \- 1 LCD 9,7"
> \- 1 Câble HDMI
>

> **Matériel Son**
> \- 2 Mini Haut-parleurs 4 ou 8 Ohms
> \- 1 PAM 8403 avec potentiomètre
> \- 1 sortie jack
>

> **Matériel Divers**
> \- 1 Joystick SANWA
> \- 6 boutons SANWA diam 30
> \- 1 capuchon de potentiomètre bleu/noir
> \- Vis 2&#42;10mm
> \- Vis 2&#42;6mm
> \- Patins
> \- 1 BAM Board
> \- 1 interrupteur lumineux 5v
> \- 2 interrupteurs métal
> \- 2 Leds bleues
> \- 1 ventilateur 40X40
> \- 1 plexi sur mesure fumé
>

---

La liste du matériel utilisé est disponible : [ici](https://drive.google.com/file/d/1QZ5vFzIVutqlJvgIRpkarysDOp05bQpu/view?usp=sharing)

---

Les fichiers .STL, les stickers, etc  sont disponibles : 

[**Mini bartop : Sega Aero City**](https://cults3d.com/fr/mod%C3%A8le-3d/jeu/mini-sega-aero-city-game-makers)

![](https://files.cults3d.com/uploaders/13841606/illustration-file/91d42c01-578b-4dbb-9eb7-3c2612000847/0_large.JPG)

---

## Présentation du projet :

Nous réalisons cette fois un hommage à la mythique **SEGA Aero City** sortie en juillet 1988 au Japon, en la transformant en version "mini bartop".

Nous tenons à remercier [**Art'Cab**](https://www.artcab.fr/) pour nous avoir fourni le matériel "arcade" et bien plus encore, ainsi qu' [**Atomic City**](https://www.facebook.com/Atomic.City/) pour les fichiers d'excellente qualité qui nous ont permis de faire nos stickers.

---

## Le Design :

Nous y avons mis tout notre coeur, notre but étant de la rendre la plus fidèle possible à l'originale

![](/images/2021/01/img02-1.JPG) ![](/images/2021/01/img03-1.JPG) ![](/images/2021/01/img04-1.JPG)

---

## Châssis

C'est la plus grosse pièce de la borne, elle est imprimée sur une S5 d'un seul tenant ce qui permet d'avoir une plus jolie finition, sans raccords.

Il aura fallu plus de 72h en 0,12 mm, mais le résultat est plutôt satisfaisant !.

![](/images/2021/01/img05-1.JPG) ![](/images/2021/01/img06-1.JPG) ![](/images/2021/01/img07-1.JPG)

---

## Test d'assemblage

Avant d'aller plus loin, je dois m'assurer que tout s'emboîte parfaitement, détecter les problèmes liés aux erreurs de conception et améliorer ce qui peut l'être encore...En l'occurrence tout va bien !

Pas de décalages disgracieux ou d'anomalies visibles.

![](/images/2021/01/img08-1.JPG) ![](/images/2021/01/img09-1.JPG) ![](/images/2021/01/img10-1.JPG)

---

## Peinture

Après une séance de ponçage intensive, on passe les pièces à la peinture.
J'utilise de l'apprêt, de la peinture et du vernis en bombe de qualité.

Attention à l'excédent de peinture qui risque d'empêcher certains emboîtements.

![](/images/2021/01/img11-1.JPG) ![](/images/2021/01/img12-1.JPG)

---

## Montage du Raspberry Pi

Installation du Pi et de la rallonge SD sur les supports dédiés, en profiter pour fixer le ventilateur au châssis.

![](/images/2021/01/aero-img13.JPG) ![](/images/2021/01/aero-img14.JPG)

---

## Montage de la BAM! Board

Installation de la BAM! Board, elle permet le câblage rapide de tous les éléments importants du bartop.

![](/images/2021/01/aero-img15.JPG) ![](/images/2021/01/aero-img16.JPG) ![](/images/2021/01/aero-img17.JPG) ![](/images/2021/01/aero-img18.JPG) ![](/images/2021/01/aero-img19.JPG)

---

## L'amplificateur PAM 8403

Souder les fils directement sur la PCB du PAM 8403, placez le ensuite dans son logement. Les fils seront reliés dans les prochaines étapes.  
Fixer ensuite le petit ampli à la structure avec l'écrou.

![](/images/2021/01/aero-img20.JPG) ![](/images/2021/01/aero-img21.JPG) ![](/images/2021/01/aero-img22.JPG) ![](/images/2021/01/aero-img23.JPG) ![](/images/2021/01/aero-img24.JPG)

---

## La sortie Jack

3 fils (audio) partent de la BAM! Board (L.G.R) pour rejoindre le connecteur jack femelle 3,5 mm placé en façade de la console.  
Repartir ensuite du connecteur avec les 3 fils audio que l'on a soudé sur l'ampli au préalable.

![](/images/2021/01/aero-img25.JPG) ![](/images/2021/01/aero-img26.JPG) ![](/images/2021/01/aero-img27.JPG) ![](/images/2021/01/aero-img28.JPG) ![](/images/2021/01/aero-img29.JPG)

---

## Mini LCD I2C

Le petit LCD permettra d'afficher fièrement notre logo Game Makers avec une petite animation mais sa principale fonction est de donner le nom des jeux, systèmes, genre, nombre de joueurs etc etc !  
Il est relié aux pins 2 (5v), 6 (ground), 3 (SDA), 5 (SCL) mais grâce à la BAM! Board, j'ai juste à PLUG les câbles du mini LCD à la BAM!. Il faut bien penser à régler le contraste avec la petite vis à l'arrière.

Pour fixer celui-ci à la pièce imprimée : 2 vis 2X6mm.  
Nous avons déjà réalisé cette étape sur notre mini Vewlix 2.0.

![](/images/2021/01/aero-img30.JPG)

---

## Carte vidéo

Pour alimenter la carte vidéo, souder directement les fils dessus : +5v en rouge, neutre en noir.  
Brancher ensuite les 2 fils sur le bornier 12V de l'alimentation.

![](/images/2021/01/aero-img31.JPG)

---

## Script Python de Frakasss

Pour fonctionner, notre mini LCD a besoin aussi d'un script qui va chercher les informations (dans un fichier .XML) que nous souhaitons voir s'afficher sur le fronton. Pour ça, nous avons repris un script qui a été réalisé par **CHOUM** du forum Recalbox, avec l'aide d'autres personnes. Il nous a servi de base pour réaliser le nôtre...

Nous avons trié les informations que nous souhaitions garder, changé la vitesse de défilement, ajouté notre logo avec des petites animations sympathiques.  
C'est **Frakasss** qui s'est coltiné tout le taff (en plus de l'étude du design !), le langage utilisé est le "Python", toutes les images et animations sont codées "en binaire" à partir de paint et d'un logiciel disponible sur le net.

Il a passé de longues heures à trouver le bon rythme et à corriger les bugs pour me satisfaire Ah ah ah ! Bref, c'est dans ce genre de défi que nous sommes encore plus complémentaires, ses compétences valent de l'or !  
J'ai suivi cette procédure afin d'installer et faire fonctionner celui-ci : [>>>>>>ici<<<<<<](https://github.com/recalbox/recalbox-os/wiki/Connectez-un-afficheur-LCD-avec-I2C-%C3%A0-votre-recalbox-(FR))

---

## Custom GPIO Recalbox

Pour faire fonctionner le mini LCD I2C en mode GPIO=1, il est nécessaire de faire quelques modifications dans recalbox. En effet, les PINs utilisées par le mini LCD sont en conflit avec les Hot Keys... Aie, c'est un Big Trouble !

Pour résoudre ce problème, la team RB ont ajouté la possibilité de customiser les GPIO pour nos joysticks et boutons.

Cette nouvelle fonctionnalité me permet de libérer les 2 pins indispensables au fonctionnement du mini LCD.... Elle est décrite sur le forum et est disponible sur la R6 **"DragonBlaze"**.

Voici le post en question — mk_arcade_customGPIO : [>>>>>>ici<<<<<<](https://forum.recalbox.com/topic/5628/ecran-3-2-boutons-sur-ports-gpio/27)

---

## Plexi fumé

Commander sur le net une plaque de plexi fumée sur mesure, elle cachera l'écran principal ainsi que le mini LCD.  
Les couleurs sont atténuées légèrement, ce qui donne un petit effet visuel sympa et un super look à la borne !

![](/images/2021/01/aero-img32.JPG) ![](/images/2021/01/aero-img33.JPG)

---

## Le panel

Stickers réalisés sur mesure à partir des fichiers fournis par **"ATOMIC CITY"** et **ART'CAB**, nous les remercions beaucoup pour ça.  
Pose du sticker, montage des boutons puis pour finir : le câblage.

![](/images/2021/01/aero-img34.JPG) ![](/images/2021/01/aero-img35.JPG) ![](/images/2021/01/aero-img36.JPG) ![](/images/2021/01/aero-img37.JPG) ![](/images/2021/01/aero-img38.JPG) ![](/images/2021/01/aero-img39.JPG)

---

## Assemblage des autres éléments

***Fixer les différents éléments :***  
- La carte vidéo sur son support.
- L'écran sur le bezel.

***Fixer ensuite :***  
- Le bezel sur la borne.
- Le plexi fumé sur le bezel avec 4 petits points de colle dans chaque angle.
- Le panel sur la borne.
- Plugger la nappe (fils) entre l'écran et la carte vidéo.

- Relier les différents câbles du panel jusqu'à la BAM! Board et plugger ceux-ci aux emplacements prévus.
- Mettre le câble HDMI entre le PI et la carte vidéo.
- Installer le bouton "Power" et la prise C14 femelle sur face arrière de la borne.

***Il faut maintenant :***  
- Réaliser les divers branchements comme la carte vidéo à l'alimentation 12v, le Raspberry Pi au bouton Power sur le panel ainsi que l'amplificateur jusqu'à l'alimentation 5V.
- Câbler de la prise C14 : "la phase" au bouton POWER général (celui derrière la borne), puis de ce bouton jusqu'à l'alimentation sur le bornier 220v.
- Le neutre lui va directement de la prise C14 à la borne "-" de l'alimentation.
- Une fois que tout est branché, on teste **"prudemment"** le fonctionnement, l'alimentation reste hors de la borne pour le moment "ATTENTION AU 220v et aux manipulations" qui pourraient s'avérer mortelles.

***Pour finir :***  
- Si ok, on insère l'alimentation dans le logement prévu et on la fixe avec 4 vis 6X2mm.
- Assembler les diverses pièces qui composent le "support HP".
- Fixer les haut-parleurs, sous le support HP et les 4 fils +- -+ soudés préalablement sur l'ampli aux HP.
- Coller le support HP sur les 2 points de fixations prévus pour.
- Coller les aimants dans les points prévus sur le carter et sur les points prévus sur le corps de la borne.
- Coller le marquee sur le Header de la borne avec le sticker posé dessus au préalable.

La borne est prête !

![](/images/2021/01/aero-img40.JPG) ![](/images/2021/01/aero-img41.JPG)

![](/images/2021/01/aero-img42.JPG)

![](/images/2021/01/aero-img43.JPG) ![](/images/2021/01/aero-img44.JPG) ![](/images/2021/01/aero-img45.JPG) ![](/images/2021/01/aero-img46.JPG) ![](/images/2021/01/aero-img47.JPG)

![](/images/2021/01/aero-img48.JPG) ![](/images/2021/01/aero-img49.JPG)

![](/images/2021/01/aero-img50.JPG) ![](/images/2021/01/aero-img51.JPG) ![](/images/2021/01/aero-img52.JPG)

![](/images/2021/01/aero-img53.JPG)

---

## Résultat

Je crois que c'est un de nos plus beaux projets !

![](/images/2021/01/aero-img54.JPG) ![](/images/2021/01/aero-img55.JPG) ![](/images/2021/01/aero-img56.JPG) ![](/images/2021/01/aero-img57.JPG) ![](/images/2021/01/aero-img58.JPG) ![](/images/2021/01/aero-img59.JPG)

![](/images/2021/01/aero-img60.JPG)

![](/images/2021/01/aero-img61.JPG) ![](/images/2021/01/aero-img62.JPG)

![](/images/2021/01/aero-img63.JPG)

![](/images/2021/01/aero-img64.JPG)

![](/images/2021/01/aero-img65.JPG) ![](/images/2021/01/aero-img66.JPG) ![](/images/2021/01/aero-img67.JPG) ![](/images/2021/01/aero-img68.JPG) ![](/images/2021/01/aero-img69.JPG) ![](/images/2021/01/aero-img70.JPG)

![](/images/2021/01/aero-img71.JPG) ![](/images/2021/01/aero-img72.JPG) ![](/images/2021/01/aero-img73.JPG) ![](/images/2021/01/aero-img74.JPG)

![](/images/2021/01/aero-img75.JPG) ![](/images/2021/01/aero-img75.JPG) ![](/images/2021/01/aero-img76.JPG) ![](/images/2021/01/aero-img77.JPG) ![](/images/2021/01/aero-img78.JPG)

---

## Les fichiers .STL

Tu as envie de réaliser ta Mini Aero City ? Les fichiers .STL sont disponibles sur la [page Cults3D du projet](https://cults3d.com/fr/mod%C3%A8le-3d/jeu/mini-sega-aero-city-game-makers).
