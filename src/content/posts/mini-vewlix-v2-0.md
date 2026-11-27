---
title: Mini Vewlix v2.0
slug: mini-vewlix-v2-0
date: 2018-09-21
tags:
  - creations
  - bartops
authors:
  - Frakasss
  - BudDevil
featured: false
feature: /images/2021/01/img01-7.JPG
excerpt: Matériel Système - Raspberry Pi 3 - Lot radiateurs pour PI - Lot
  radiateurs pour PI - Carte micro SD - 1 alimentation 12V 3A/5V 3A - Câbles 20
  AWG - 1 connecteur C14 femelle - 1 r…
visible: true
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

---

> **Matériel Image**
> \- 1 LCD I2C
> \- LCD 9,7"
> \- 1 Câble HDMI
>

---

> **Matériel Son**
> \- 2 Mini Haut-parleurs 4 ou 8 Ohms
> \- 1 PAM 8403 avec potentiomètre
> \- 1 sortie jack

---

> Matériel Divers
> \- 1 Joystick SANWA
> \- 6 boutons SANWA diam 30
> \- 1 capuchon de potentiomètre bleu/noir
> \- Vis 2&#42;10mm
> \- Vis 2&#42;6mm
> \- Patins
> \- 1 interrupteur lumineux 5v
> \- 2 interrupteurs métal
> \- 2 Leds bleues
> \- 1 SSR 25 DD
> \- 1 ventilateur 40X40

---

---

#### Custom GPIO Recalbox

Pour faire fonctionner le mini LCD I2C en mode GPIO=1, il est nécessaire de faire quelques modifications dans recalbox. En effet, les PINs utilisées par le mini LCD sont en conflit avec les Hot Keys... Aïe, c'est un Big Trouble !

Pour résoudre ce problème, j'ai fait appel à **Ian57** de la Team Recalbox qui a déjà été confronté à ce type de situation. En résumant un peu, lui et la team RB ont ajouté la possibilité de customiser les GPIO pour nos joysticks et boutons.

Cette nouvelle fonctionnalité me permet de libérer les 2 pins indispensables au fonctionnement du mini LCD.... cette fonctionnalité est décrite sur le forum et est disponible sur la R6 **"DragonBlaze"**.

Voici le post en question :

mk\_arcade\_customGPIO :[ &gt;&gt;&gt;&gt;&gt;&gt;ici&lt;&lt;&lt;&lt;&lt;&lt;](https://forum.recalbox.com/topic/5628/ecran-3-2-boutons-sur-ports-gpio/27)

Sans cette option, notre projet serait tombé à l'eau ! J'adresse **"Un grand MERCI"** à tous ceux qui bossent, dans l'ombre, chez Recalbox afin que nous puissions en jouir ! Un spécial "Thanks" to **Ian57** pour sa gentillesse et son aide précieuse.

---

#### SSR (Solid-State Relay)

Notre choix d'utiliser un écran 9,7" nous impose de travailler avec 2 tensions : le 5v (raspberry pi etc) et 12v (écran), nous avons donc utilisé une alimentation proposant ces deux tensions.
Pour que l'ensemble des éléments soit alimenté en même temps que l'on appuie sur le bouton power, j'utilise un SSR (SSR-25 DD).

Ce relais permet à partir d'une basse tension de laisser passer une tension plus forte. En gros, lorsque le 5V circule le 12V aussi ! Donc lorsque je presse mon bouton power, le 5V circule partout et ordonne au SSR de laisser passer le 12v, destiné à alimenter l'écran.

![](/images/2021/01/img44-9.JPG)

---

#### Bezel

L'écran 9,7" se loge dans le bezel, il faut cependant couper les pattes de fixation métalliques qui dépassent de celui-ci sur les côtés.
Mettre ensuite 2 vis dans les 2 pattes restantes et déposer de la colle chaude dans les orifices de la partie inférieure du bezel afin que notre écran soit bien calé.

Le bezel sera fixé un peu plus tard sur le bartop.

![](/images/2021/01/img45-10.JPG) ![](/images/2021/01/img46-10.JPG) ![](/images/2021/01/img47-10.JPG)
![](/images/2021/01/img48-8.JPG) ![](/images/2021/01/img49-8.JPG) ![](/images/2021/01/img50-8.JPG)

---

#### Raspberry PI et Audio

En gros, 3 fils à souder du Raspberry pi sur PP6 (ground), PP26 et PP25 que l'on relie ensuite au "connecteur". Celui-ci permet de commuter le son lorsque l'on branche un casque..

On repart ensuite du connecteur jusqu'au PAM8403 (l'ampli) puis on soude 4 fils ( -+ +-) de notre PAM jusqu'aux enceintes.

n soude ensuite les fils qui vont alimenter le PI 'rouge et noir', PP2 et PP5. Même chose pour la carte de gestion de l'écran.
Je ne rentre pas plus dans les détails de cette étape car c'est la même procédure que pour nos autres créations, je vous laisse donc le soin d'aller y jeter un œil.

![](/images/2021/01/img53-7.JPG) ![](/images/2021/01/img54-5.JPG)
![](/images/2021/01/img51-8.JPG) ![](/images/2021/01/img52-7.JPG)

---

#### Assemblage

Je réalise les branchements sur les gpio du pi, puis relie les câbles d'alimentation au bouton power et au SSR.
Je prépare ensuite la prise C14 qui se sera connectée à l'alimentation.

e place chaque élément sur leurs emplacements respectifs.

![](/images/2021/01/img55-8.JPG) ![](/images/2021/01/img56-7.JPG) ![](/images/2021/01/img57-7.JPG)
![](/images/2021/01/img58-6.JPG) ![](/images/2021/01/img60-6.JPG) ![](/images/2021/01/img61-5.JPG)
![](/images/2021/01/img59-6.JPG) ![](/images/2021/01/img62-5.JPG)

Je mets en place mon écran en fixant le bezel proprement, 2 vis de chaque côté puis 2 en bas, qui rendront solidaire le panel et le bezel.

Je place le Raspberry, les cartes de gestion de l'écran sur le socle, j'en profite pour bien ranger mon câblage avec des colliers de serrage.

Je fixe mon SSR, mets en place le fronton avec le mini LCD fixé dessus.

Je règle bien mon alimentation sur 5.15 V et relie les différents câbles dessus.

C'est le moment de tester ! POWER ON !

![](/images/2021/01/img63-6.JPG) ![](/images/2021/01/img64-6.JPG) ![](/images/2021/01/img65-6.JPG)
![](/images/2021/01/img66-6.JPG) ![](/images/2021/01/img67-7.JPG) ![](/images/2021/01/img68-6.JPG)
![](/images/2021/01/img69-5.JPG) ![](/images/2021/01/img70-5.JPG) ![](/images/2021/01/img71-4.JPG)

L'écran est **"de toute beauté"** et bien lumineux ! Le son est top et puissant, la commutation se fait correctement lorsque je branche un casque.

Après un rapide check =&gt; Tout est OK !

![](/images/2021/01/img72-4.JPG)

---

#### Résultat

Cette fois, c'est concluant ! La vewlix est à notre goût. Les sides lumineuses offrent une touche de modernité, mais restent discrètes comme voulu.
L'écran est fabuleux et parfaitement homogène, il offre un confort visuel indéniable, c'est vraiment un Big Up.

Le mini LCD en jette un max, il ne pollue pas la visibilité de l'écran principal et offre le petit plus attendu ! J'en suis ravi. Pour finir, la porte arrière aimantée est bien pratique pour les accès rapides aux composants, surtout pour les ajustements ou les contrôles.

Allez, c'est à vous de juger !

![](/images/2021/01/img80-2.JPG) ![](/images/2021/01/img73-4.JPG) ![](/images/2021/01/img74-4.JPG)
![](/images/2021/01/img75-3.JPG) ![](/images/2021/01/img76-3.JPG) ![](/images/2021/01/img77-3.JPG)
![](/images/2021/01/img78-3.JPG) ![](/images/2021/01/img79-2.JPG)

![](/images/2021/01/img80-3.JPG) ![](/images/2021/01/img81-2.JPG) ![](/images/2021/01/img82-2.JPG)
![](/images/2021/01/img83-2.JPG) ![](/images/2021/01/img84-2.JPG) ![](/images/2021/01/img85-2.JPG)

![](/images/2021/01/mini01-25.JPG) ![](/images/2021/01/img86-2.JPG) ![](/images/2021/01/img87-2.JPG)
![](/images/2021/01/img88-2.JPG) ![](/images/2021/01/img89-2.JPG)

---
