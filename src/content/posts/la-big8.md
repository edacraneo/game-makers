---
title: La Big8"
slug: la-big8
date: 2017-03-05
tags:
  - creations
  - consoles
authors:
  - BudDevil
  - Frakasss
featured: false
feature: /images/2021/01/mini01-15.JPG
excerpt: Matériel Système - Raspberry Pi 3 ou 2. - Lot radiateurs pour PI -
  Carte SD - 1 Power Bank - 1 Ventilateur 20*20*10 5v - Vis 2*6mm - 1 Bouton 4
  dpst - 3 câbles High speed USB 20 AW…
visible: true
---
![](/images/2021/03/img01-59.JPG)

---

> **Matériel Système**
> \- Raspberry Pi 3 ou 2.
> \- Lot radiateurs pour PI
> \- Carte SD
> \- 1 Power Bank
> \- 1 Ventilateur 20&#42;20&#42;10 5v
> \- Vis 2&#42;6mm
> \- 1 Bouton 4 dpst
> \- 3 câbles High speed USB 20 AWG
> \- Connecteur DC mâle + femelle
>

> **Matériel Image**
> \- TFT 8" LCD + carte
> \- 1 Câble HDMI court
>

> **Matériel Divers**
> \- Vis 2&#42;6mm.
> \- 1 Manette SNES usb mod 1
> \- 1 Manette SNES usb mod 2
>

> **Matériel Son**
> \- 1 PAM 8403 avec potentiomètre
> \- 3.5mm Mini Stereo Jack
> \- Chassis Panel Mount Headphone
> \- 1 Câble Jack 3.5
> \- 2 Mini Haut-parleurs 8 Ohms
>

---

La liste du matériel utilisé est disponible : [ici](https://drive.google.com/file/d/1sQz4Z-AQ6wk2CU3UldW5kQF1QjPcG4_H/view?usp=sharing)

---

Les fichiers .STL, les stickers, etc sont disponibles :

[**Console portable : Big 8″**](https://cults3d.com/fr/mod%C3%A8le-3d/jeu/console-portable-big-8)

![](https://files.cults3d.com/uploaders/13841606/illustration-file/925cf18f-12bd-479d-8b59-4c7152ee3d2b/img52_large.JPG)

---

Le projet Big8" a vu le jour en coopération avec mon pote Frakasss; de discussion en discussion, on a monté le projet ensemble. Moi, en concepteur, ingénieur, chef de projet et technicien et lui en designer (comme les vrais, avec des idées irréalisables et tout!

Voici, en résumé, les étapes par lesquelles nous sommes passés:

---

#### Le design

Tout au long de la conception, nous avons beaucoup échangé. Je lui indiquais les contraintes techniques, mais aussi les points sur lesquels je ne négocierais pas ( un BIG ECRAN! ). Il revenait avec des idées que je gardais ou pas. Comme il est toujours difficile d'expliquer par les mots un concept de design, il m'envoyait des schémas dessinés rapidement sur le coin d'un bureau, et envoyé par mail.

![](/images/2021/01/img02-7.JPG) ![](/images/2021/01/img03-6.JPG) ![](/images/2021/01/img04-5.JPG)
![](/images/2021/01/img05-5.JPG) ![](/images/2021/01/img06-5.JPG) ![](/images/2021/01/img07-4.JPG)
![](/images/2021/01/img08-5.JPG) ![](/images/2021/01/img09-5.JPG) ![](/images/2021/01/img10-5.JPG)

![](/images/2021/01/img11-5.JPG) ![](/images/2021/01/img12-5.JPG)

---

#### Le cahier des charges

Au cours de ces conversations, nous avons également validé le cahier des charges que voici:

#### _Descriptif:_

Console _nomade_ équipée d'un grand écran qui permettra de faire tourner principalement les jeux 8 et 16 bits (peut être 32, mais à la manette).

#### _Détails techniques:_

En facade, on trouvera un afficheur LCD (indiquant en pourcentages le niveau de batterie), un grand écran LCD de 8 pouces en 4/3, un pad digital, six boutons (A, B, X, Y, select et start), deux sorties hauts-parleurs. Une 'casquette' viendra entourer l'écran sur trois côté pour une meilleure protection, mais aussi améliorer la visibilité.

Sur le dessus, molette de réglage du volume, prise casque, connectique Raspberry, grille pour l'extracteur d'air, connectique de rechargement de la batterie.
Au dos, quatre boutons (L1, R1, et deux boutons hotkey pour l'accès aux options de la RecalBox) et un réceptacle pour la batterie de 26.000 mah.

#### _Mesures:_

Longueur: 280.90 mm
Largeur: 148.65 mm
Epaisseur: 36 mm _(sans coque batterie et casquette)_
Poids: entre 800g et 1kg

#### _Aperçu:_

![](/images/2021/01/img13-5.JPG)

---

#### La structure

A l'aide des schémas et du cahier des charges, j'ai réalisé en 3D la structure à construire avec l'imprimante 3D. J'ai même modélisé les différents éléments (Rasp, batterie, cartes diverses) pour ajuster les dimensions au mieux. Pour optimiser, j'ai réduit le nombre de pièces au maximum!

![](/images/2021/01/img18-5.JPG) ![](/images/2021/01/img14-4.JPG) ![](/images/2021/01/img15-4.JPG)
![](/images/2021/01/img16-4.JPG) ![](/images/2021/01/img17-4.JPG)

![](/images/2021/01/img19-4.JPG)

---

#### L'impression

Je commence par imprimer les trois plus grosses pièces de la console: la coque inférieure, le stockage des accus, et le couvercle supérieur. Presque six heures d'impression chacune!

![](/images/2021/01/img20-5.JPG) ![](/images/2021/01/img21-4.JPG)

---

#### Les batteries

Pour alimenter la bête, je décortique une Power Bank et je récupère les accumulateurs, la carte _(en rouge sur l'image)_ et l'affichage LCD _(en jaune sur l'image)_. Je désoude ce dernier pour pouvoir le déporter sur la coque supérieure. Je rallonge également les câbles entre les accus et la carte. C'est petit tous ces composants, je soude donc à la loupe!

**_Modifier une power bank est déconseillé car particulièrement dangereux ! Ce type de batterie est relativement instable en cas de perforation ou de mauvaise utilisation. Quelques vidéos visionnées sur internet montrent qu'elles peuvent s'enflammer ou exploser... Bref, à manipuler avec beaucoup de précautions!!_**

![](/images/2021/01/img22-4.JPG)

---

#### Le montage

Une fois la batterie dans son emplacement, je referme le couvercle et commence à installer l'électronique.

D'abord je positionne le Raspberry Pi3 avec ses ports accessibles du haut de la console.
Ensuite vient le ventilateur qui va extraire l'air chaud et créer un flux d'air sur le Rasp (qui chauffe hard!)
Suivent le PAM 8403 et la carte TfT (qui chauffe aussi, mais raisonnablement).
Au moment où j'installe la carte de la power bank, quelques pattes cassent. Je re-soude tout ça à même la carte, à la loupe!
Je vire les plastiques sur les câbles USB, HDMI, micro USB pour gagner de la place.
Je mets en place la prise jack casque et l'entrée DC pour le rechargement des batteries.

![](/images/2021/01/mini23.JPG) ![](/images/2021/01/mini24.JPG) ![](/images/2021/01/mini25.JPG)
![](/images/2021/01/mini26.JPG) ![](/images/2021/01/mini27.JPG) ![](/images/2021/01/mini28.JPG)
![](/images/2021/01/mini29.JPG) ![](/images/2021/01/mini30.JPG) ![](/images/2021/01/mini31.JPG)

![](/images/2021/01/mini32.JPG) ![](/images/2021/01/mini33.JPG) ![](/images/2021/01/mini34.JPG)

Coté supérieur de la console je positionne les hauts-parleurs.

Pour les contrôles, je démonte deux manettes Super Nes et récupère la carte que je découpe en 3 parties : le D-Pad, les boutons Start et Select, et les quatre boutons.
Je perce puis soude les fils sur les pistes... Une bonne galère, lors de la mise en place, car les soudures pètent les unes après les autres! Une fois toutes les soudures réparées, je fixe enfin chaque carte à l'emplacement prévu.
Je mets en place l'écran LCD pour l'affichage batterie, et enfin l'écran LCD 8" !

![](/images/2021/01/mini35.JPG) ![](/images/2021/01/mini36.JPG) ![](/images/2021/01/mini37.JPG)
![](/images/2021/01/mini38.JPG) ![](/images/2021/01/mini39.JPG) ![](/images/2021/01/mini40.JPG)
![](/images/2021/01/mini41.JPG) ![](/images/2021/01/mini42.JPG) ![](/images/2021/01/mini43.JPG)

![](/images/2021/01/mini44.JPG) ![](/images/2021/01/mini45.JPG)

Tout est branché et logiquement fonctionnel. Je n'ai pas la patience de faire des tests, alors je referme tout à l'arrache en vérifiant quand même que les fils ne touchent pas les radiateurs du Raspberry.

Le moment de la révélation est arrivé! J'appuie sur le bouton "ON"... _YEAH ÇA MARCHE!_

Quelques contrôles rapides:
LCD = Ok
Afficheur batterie = Ok
Boutons = Ok
D-Pad = Ok
Son et molette = Ok

---

#### Le bilan

Au final c'est un monstre! L'écran est gigantesque! C'est génial!

Au niveau du poids, elle fait quand même 1Kg200... Il faut poser les avant-bras sur les genoux ou sur la table, mais c'est jouable.
Niveau autonomie, j'avais un peu peur au vu des résultats du minitel v2... Mais avec une moyenne de 7% de la batterie consommée par heure de jeux, on arrive à près de 14 heures de jeu par charge!!

Pour moi, c'est un succès! Après deux mois de travail intensif, le résultat correspond bien à ce qu'on avait défini au départ! Et j'avoue, je prends mon pied à voir la tête des amis à qui je la montre!!!

![](/images/2021/01/mini53.JPG) ![](/images/2021/01/mini46.JPG) ![](/images/2021/01/mini47.JPG)
![](/images/2021/01/mini48.JPG) ![](/images/2021/01/mini49.JPG) ![](/images/2021/01/mini50.JPG)
![](/images/2021/01/mini51-1.JPG) ![](/images/2021/01/mini52.JPG)

---

#### La Vidéo

<figure class="gm-embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/MMy5dT1t47w" frameborder="0" allowfullscreen=""></iframe></figure>

---
