---
title: Neo Geo X
slug: neo-geo-x
date: 2017-05-21
tags:
  - creations
  - consoles
authors:
  - BudDevil
featured: false
feature: /images/2021/01/img01-5.JPG
excerpt: Matériel Prérequis - 1 Extension RJ45 - 1 Raspberry pi3 B+ - 1
  Ventilateur 40x40x7mm - 1 Micro switch 12mm - 1 Lot de radiateurs - 1 Slot
  micro SD femelle - 1 Connecteur DC 4mmX1.7…
visible: true
---
> **Matériel Prérequis**
> \- 1 Extension RJ45
> \- 1 Raspberry pi3 B+
> \- 1 Ventilateur 40x40x7mm
> \- 1 Micro switch 12mm
> \- 1 Lot de radiateurs
> \- 1 Slot micro SD femelle
> \- 1 Connecteur DC 4mmX1.7mm
> \- 1 Câble FLAT HDMI 90° &lt;=&gt; MINI USB femelle
> \- 1 Câble micro SD 20 awg
> \- 1 Résistance variable
>

---

#### Présentation

La Neo Geo....c'est LA console mythique que tout le monde a rêvé un jour d'avoir dans son salon ! Une réédition plutôt ratée a été réalisée il y a quelques années avec un concept plutôt sympa : Une console portable que l'on peut insérer dans un boitier quasiment identique à celui d'origine, pour jouer sur sa TV avec des sticks !
Malheureusement, les fans ont été déçus par l'émulation qui est loin d'être réussie et la qualité générale du produit plutôt basse.

Tout n'est pas négatif dans cette histoire car des petits malins ont eu l'idée d'intégrer un Raspberry dans le boîtier plastique, on exploite alors tout le potentiel de la console avec ses deux sticks USB, La Classe !

![](/images/2021/01/img02-14.JPG)

---

#### Projet

Il existe un 'MOD' simple de la Neo Geo X qui consiste à se servir du boîtier afin d'y intégrer un Raspberry PI. Il suffit simplement d'acheter un câble qui permet de relier le PI à la connectique d'origine de la console, sans modifier quoi que ce soit, le TOP quoi!

Sauf qu'en réalité, on se heurte rapidement à quelques complications :

---

#### La chaleur

Le Raspberry pi ne dispose que de très peu de place, il est enfermé dans le boitier sans aérations, l'air ne circule pas, ce qui provoque rapidement des problèmes de surchauffe. Certains utilisent un ventilateur directement positionné au-dessus du processeur, mais l'air brassé reste chaude...

---

**Le port USB**
Le câble se branche sur un des ports USB du Raspberry, ce qui nous force à positionner le PI en bas du boitier, là où la hauteur est la plus basse, le couvercle appuie donc sur celui-ci et ce n'est pas top.

---

**L'alimentation**
Il faut une alimentation de 5v 3a pour faire fonctionner le PI 3 correctement, il est donc nécessaire de choisir un modèle de qualité et de remplacer le connecteur micro USB par un connecteur DC 4mm X 1.7mm pour se servir de la prise d'origine.
Ce n'est pas tout ! Le fil utilisé pour le câblage interne du boitier et la mauvaise qualité du câble fourni font qu'à l'arrivée, nous n'avons pas 5V mais 4,80 aux bornes du Raspberry, le petit éclair de 'sous-alimentation' apparaît à l'écran...

---

**Port RJ45**
Pour profiter du NetPlay, on nous conseille d'être connecté 'par câble', le wifi est proscrit. Or, il n'y a pas d'emplacement permettant de glisser un RJ45 sauf peut-être en laissant le capot ouvert..

Bref, il est temps d'optimiser tout ça ! **Je vais donc tout faire pour essayer de corriger ces problèmes !**

---

#### Les pièces 3D

J'ai donc conçu de nouvelles pièces qui vont s'intégrer à la console afin d'améliorer la circulation de l'air à l'intérieur du boîtier et de fixer le Raspberry correctement.

![](/images/2021/01/img03-13.JPG) ![](/images/2021/01/img04-11.JPG)

---

#### Les orifices

La première étape consiste à faire des 'trous' dans le boitier pour y intégrer le système de ventilation et de maintien du Raspberry. Pour ça, il faut commencer par démonter le boitier en retirant toutes les vis qui se trouvent en dessous, il sera nécessaire de retirer les patins pour trouver celles qui se cachent en dessous.
Il faut ensuite prendre les gabarits que j'ai réalisés et les positionner correctement comme sur les photos, ils vont m'aider à créer des orifices sur mesure, ainsi, les pièces entreront parfaitement.

Pour réaliser les orifices, il faut bien maintenir les gabarits en place et tracer la forme centrale avec un feutre à pointe fine, percer ensuite des trous dans les 4 angles avec un foret adapté.
Découper la forme au dremel ou à la pince coupante proprement.

Il faut à présent vérifier que chaque pièce entre parfaitement, si tout est OK, on peut coller celles-ci à la colle forte.
Une fois que tout est collé, on peut glisser les 4 clips autour des cylindres sur lesquels le Raspberry sera vissé.

![](/images/2021/01/img05-11.JPG) ![](/images/2021/01/img06-11.JPG) ![](/images/2021/01/img07-11.JPG)
![](/images/2021/01/img08-12.JPG) ![](/images/2021/01/img09-13.JPG) ![](/images/2021/01/img10-13.JPG)
![](/images/2021/01/img11-12.JPG) ![](/images/2021/01/img12-13.JPG)

---

#### Raspberry Pi et câble USB

Je vais commencer par corriger le problème du port USB et du câble qui prend trop de place.
Pour ça, je vais créer un câble qui sera soudé directement sur les pins d'un des ports USB sous le Raspberry, l'autre extrémité sera soudé sur un connecteur micro SD femelle, je pourrais donc positionner le PI le plus haut possible dans le boitier car plus rien ne gênera à l'extrémité.

Ce câble a pour fonction de récupérer les ports USB du boitier (dans lesquels seront pluggés les joysticks USB) jusqu'au Raspberry.

**Hop, un problème de moins !**

![](/images/2021/01/img19-11.JPG) ![](/images/2021/01/img13-13.JPG) ![](/images/2021/01/img14-12.JPG)
![](/images/2021/01/img15-12.JPG) ![](/images/2021/01/img16-12.JPG)
![](/images/2021/01/img17-12.JPG) ![](/images/2021/01/img18-12.JPG)

---

#### La ventilation

Pour faire circuler l'air à l'intérieur de la console, rien de mieux qu'un ventilateur !
Je soude et tire 2 fils qui partent du + et du - de la carte USB du boîtier en suivant les contours, comme le câblage d'origine, pour arriver jusqu'à l'angle en haut à droite de la coque inférieure.

Je perce un trou dans la partie supérieure du boitier (tjs dans l'angle, comme sur les photos) dans lequel je passe le fil d'origine du ventilateur, je coupe le connecteur de celui-ci qui ne servira pas.
Pour régler le flux d'air et réduire le bruit du ventilateur, j'utilise une résistance variable que je colle proprement dans l'angle droit, de façon à ne pas gêner la coque supérieure lors du remontage de celle-ci.

Je soude ensuite le fil + de mon ventilateur au + de la résistance variable puis soude le fil - sur la masse de la carte d'alimentation de la console.
Je dois maintenant régler le flux d'air du ventilo, pour ça, je branche une alimentation de sony PSP sur la console et à l'aide de mon tournevis, je tourne sur la vis de réglage sur la résistance variable jusqu'à satisfaction. Je précise que le ventilateur sera dans une position qui lui permettra d'extraire l'air.

![](/images/2021/01/img26-9.JPG) ![](/images/2021/01/img20-12.JPG) ![](/images/2021/01/img21-11.JPG)
![](/images/2021/01/img22-11.JPG) ![](/images/2021/01/img23-10.JPG) ![](/images/2021/01/img24-11.JPG)
![](/images/2021/01/img25-11.JPG) ![](/images/2021/01/img27-9.JPG)

---

#### Câble d\`'alimentation

J'ai précisé un peu plus haut que la tension aux bornes du Raspberry n'était pas de 5v mais de 4,80v, certainement à cause des pertes dues à la qualité et au nombre de brins des 2 câbles. Il est donc nécessaire d'adopter une autre méthode.
Le connecteur jack d'origine destiné à la sortie vidéo ne me servira à rien, je décide donc de le supprimer pour laisser la place au câble d'alimentation destiné à alimenter le Raspberry.

Je soude et tire une seconde ligne qui part du + et du - de la carte USB du boîtier (comme pour le ventilateur), sauf que j'utilise du câble de qualité de 20 AWG avec, à son extrémité, un connecteur micro USB, il servira uniquement à alimenter le Raspberry.

---

#### Port RJ45

Pour intégrer un port RJ45 à la console, je découpe proprement un rectangle dans la coque, aux dimensions légèrement inférieures au port RJ45 du Raspberry puis je perce un trou bien centré de 5,5mm, à l'arrière.
Je prends et coupe ma rallonge RJ45 de façon à garder une dizaine de cm de longueur, je passe le câble dans le trou et dénude celui-ci afin de rendre visibles les fils qui sont à l'intérieur.

![](/images/2021/01/img28-9.JPG) ![](/images/2021/01/img29-9.JPG) ![](/images/2021/01/img30-10.JPG)
![](/images/2021/01/img31-10.JPG) ![](/images/2021/01/img32-10.JPG)

Je prends ensuite un connecteur RJ45 à sertir, plug les fils en respectant l'ordre des couleurs puis sertir le connecteur.
Je plug ensuite mon câble RJ45 au Raspberry pi.

![](/images/2021/01/img33-9.JPG) ![](/images/2021/01/img34-10.JPG) ![](/images/2021/01/img35-8.JPG)
![](/images/2021/01/img36-9.JPG) ![](/images/2021/01/img37-9.JPG) ![](/images/2021/01/img38-7.JPG)
![](/images/2021/01/img39-7.JPG) ![](/images/2021/01/img40-7.JPG) ![](/images/2021/01/img41-7.JPG)

![](/images/2021/01/img42-8.JPG) ![](/images/2021/01/img43-8.JPG) ![](/images/2021/01/img44-8.JPG)

---

**Montage des éléments**

Je plug le câble micro sd destiné à l'alimentation sur le Raspberry et je fixe celui-ci, sur les 4 plots de fixation avec des vis 6X2mm.
J'emboîte les coques inférieures et supérieures ensemble en faisant attention de ne pas pincer les différents câbles et je remets les vis.

Je plug le câble micro sd 'femelle' (celui qui est soudé au Raspberry) dans celui de la console 'mâle'.
Je plug ensuite le câble HDMI &lt;=&gt; mini HDMI entre le Pi et la console.

Je pose et fixe mon ventilateur sur le support avec 4 vis courtes et je rentre, en poussant avec une pince, le surplus de fil dans le trou.
Je rajoute des patins plus épais sous la console pour la surélever un peu afin que l'air passe plus facilement.
Voilà, tout est en place, la console est prête !

![](/images/2021/01/img45-9.JPG) ![](/images/2021/01/img46-9.JPG) ![](/images/2021/01/img47-9.JPG)
![](/images/2021/01/img48-7.JPG) ![](/images/2021/01/img49-7.JPG)
![](/images/2021/01/img50-7.JPG) ![](/images/2021/01/img51-7.JPG)

---

#### L'alimentation

Je prends mon alimentation de qualité et je coupe le connecteur micro sd à l'extrémité.
Je dénude les fils et les soude en respectant les polarités sur mon connecteur DC 4 X 1,7mm.

Mon alim est prête elle aussi, c'est le moment de réaliser quelques tests !

![](/images/2021/01/img52-6.JPG) ![](/images/2021/01/img53-6.JPG)

---

#### 'BONUS' Power OFF-ON

Après une longue nuit courte de sommeil, une idée me vint à l'esprit : Exploiter le bouton MENU pour allumer ou éteindre la console.
Un peu de réflexion ... et je conçois un support qui s'emboîte dans le support de fixation du Raspberry, (patte en bas à droite). Il contient un microswitch positionné juste en dessous l'axe contrôlé par le bouton menu, sur lequel j'ai soudé 2 fils reliés aux GPIO 3 et Ground du Pi.

Je vais maintenant dans le .conf de ma Recalbox afin d'activer le script permettant le power OFF et ON.
Lorsque l'on presse ce bouton, la console s'allume ou s'éteint, c'est plutôt pratique !

![](/images/2021/01/img54-4.JPG) ![](/images/2021/01/img55-6.JPG) ![](/images/2021/01/img56-6.JPG)
![](/images/2021/01/img57-6.JPG) ![](/images/2021/01/img58-5.JPG) ![](/images/2021/01/img59-5.JPG)
![](/images/2021/01/img60-5.JPG) ![](/images/2021/01/img61-4.JPG)

![](/images/2021/01/img67-3.JPG) ![](/images/2021/01/img62-4.JPG) ![](/images/2021/01/img63-4.JPG)
![](/images/2021/01/img64-4.JPG) ![](/images/2021/01/img65-4.JPG) ![](/images/2021/01/img66-4.JPG)

---

#### Le résultat

Je branche mon alimentation, j'appuie sur 'ON', le ventilateur tourne, le Raspberry fonctionne, je vois le logo Recalbox apparaître sur ma TV. J'arrive à naviguer dans les menus, donc mon câble USB &lt;=&gt; micro sd fait maison fonctionne !
La température interne est de 46°c, l'éclair de sous-alimentation a disparu, le pi est donc parfaitement alimenté ! (contrôlé à 5,10v). Je plug ensuite mon câble RJ45, parfait j'ai bien le net !

![](/images/2021/01/img68-3.JPG) ![](/images/2021/01/img69-3.JPG) ![](/images/2021/01/img70-3.JPG)
![](/images/2021/01/img71-3.JPG) ![](/images/2021/01/img72-3.JPG) ![](/images/2021/01/img73-3.JPG)

Je teste à présent mon bouton power off-on, il fonctionne parfaitement !
Je peux donc affirmer que tous les problèmes ont été résolus !

Ma Neo Geo est opérationnelle pour de longues heures de netplay, dans de bonnes conditions ! Comme à la bonne époque ...

![](/images/2021/01/img74-3.JPG)

---

La liste en détail du matériel utilisé est disponible : [ici](https://drive.google.com/file/d/14A-QFgu-zZbDdfksLUgNYzwukUtL9pg4/view?usp=sharing)
