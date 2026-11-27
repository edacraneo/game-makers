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

#### Présentation du projet :

Nous n'étions pas complètement satisfaits de la première version de notre mini Vewlix. Nous avons donc révisé notre concept initial et échangé quelques nouvelles idées pour aboutir à une nouvelle version : la 2.0.
Je vous laisse découvrir les améliorations que nous lui avons apportées....!

---

#### Le Design :

Sobre et épurée, elle doit conserver les traits spécifiques à la Vewlix, avec un peu de Light Fun !

![](/images/2021/01/vewlix2-img02.JPG) ![](/images/2021/01/vewlix2-img03.JPG) ![](/images/2021/01/vewlix2-img04.JPG)

---

#### Châssis

Contrairement à la V1.0, il nous faut gagner beaucoup de place afin de pouvoir intégrer un écran 9,7", tout en conservant le châssis initialement conçu avec en plus : une alimentation 12/5v ainsi qu'un Solid State Relay (SSR)....Un nouveau challenge sur la gestion de l'espace.
Certaines pièces de la structure sont collées définitivement, d'autres sont aimantées comme la porte arrière, qui permet un accès rapide pour certains réglages

![](/images/2021/01/vewlix2-img05.JPG) ![](/images/2021/01/vewlix2-img06.JPG) ![](/images/2021/01/vewlix2-img07.JPG) ![](/images/2021/01/vewlix2-img08.JPG) ![](/images/2021/01/vewlix2-img09.JPG) ![](/images/2021/01/vewlix2-img10.JPG)

---

#### Sides Lumineuses

Un peu de lumière pour le fun mais aussi pour l'aspect général ! Ce contraste de noir et de bleu discret permet une élégante touche de modernité.
J'utilise 1 Led bleue de 5V avec 1 résistance de 180 ohms que j'ai fixé avec de la colle chaude dans la pièce prévue (cf photos).

J'imprime les petites plaques de protection avec de la "matière translucide/transparente" permettant de laisser passer la lumière de façon discrète. Les leds sont reliées directement aux gpio du Pi.

![](/images/2021/01/vewlix2-img11.JPG) ![](/images/2021/01/vewlix2-img12.JPG) ![](/images/2021/01/vewlix2-img13.JPG) ![](/images/2021/01/vewlix2-img14.JPG) ![](/images/2021/01/vewlix2-img15.JPG) ![](/images/2021/01/vewlix2-img16.JPG) ![](/images/2021/01/vewlix2-img17.JPG) ![](/images/2021/01/vewlix2-img18.JPG) ![](/images/2021/01/vewlix2-img19.JPG) ![](/images/2021/01/vewlix2-img20.JPG) ![](/images/2021/01/vewlix2-img21.JPG) ![](/images/2021/01/vewlix2-img22.JPG) ![](/images/2021/01/vewlix2-img23.JPG) ![](/images/2021/01/vewlix2-img24.JPG) ![](/images/2021/01/vewlix2-img25.JPG)

---

#### Test d'assemblage

Avant d'aller plus loin, je dois m'assurer que tout s'emboîte parfaitement, détecter les problèmes liés aux erreurs de conception et améliorer ce qui peut l'être encore...En l'occurrence tout va bien !

![](/images/2021/01/vewlix2-img26.JPG) ![](/images/2021/01/vewlix2-img27.JPG)

---

#### Panel

Le panel compte 6 boutons d'action, 1 start, 1 select et le Power. Le câblage est réalisé sur les gpio de la même manière que nos autres réalisations.
Je vous rassure, les câbles sont triés et fixés avec des colliers de serrage proprement ! Comme d'habitude, joystick et boutons Sanwa et Seimitsu.

Le panel repose sur la structure et est fixé avec 6 vis 2X10mm et 2X6mm, le bouton power est muni d'une led de 5V, pas besoin d'ajouter une résistance, c'est d'origine.
Le sticker que j'ai utilisé sera disponible dans la section Settings.

![](/images/2021/01/vewlix2-img28.JPG) ![](/images/2021/01/vewlix2-img29.JPG) ![](/images/2021/01/vewlix2-img30.JPG) ![](/images/2021/01/vewlix2-img31.JPG) ![](/images/2021/01/vewlix2-img32.JPG) ![](/images/2021/01/vewlix2-img33.JPG) ![](/images/2021/01/vewlix2-img34.JPG) ![](/images/2021/01/vewlix2-img35.JPG)

---

#### Mini LCD I2C

Le petit LCD permettra d'afficher fièrement notre logo Game Makers avec une petite animation mais sa principale fonction est de donner le nom des jeux, systèmes, genre, nombre de joueurs etc etc !
Il est relié aux pins 2 (5v), 6 (ground), 3 (SDA), 5 (SCL). Il faut bien penser à régler le contraste avec la petite vis à l'arrière.

Pour fixer celui-ci à la pièce imprimée (fronton) : 4 vis 2X6mm.
C'est un peu la nouveauté, notre nouveau challenge d'intégrer ce mini LCD car il nous impose des modifications dans Recalbox : driver, script etc.

![](/images/2021/01/vewlix2-img36.JPG) ![](/images/2021/01/vewlix2-img37.JPG) ![](/images/2021/01/vewlix2-img38.JPG) ![](/images/2021/01/vewlix2-img39.JPG) ![](/images/2021/01/vewlix2-img40.JPG) ![](/images/2021/01/vewlix2-img41.JPG)

![](/images/2021/01/vewlix2-img42.JPG) ![](/images/2021/01/vewlix2-img43.JPG)

---

#### Script Python de Frakasss

Pour fonctionner, notre mini LCD a besoin aussi d'un script qui va chercher les informations (dans un fichier .XML) que nous souhaitons voir s'afficher sur le fronton. Pour ça, nous avons repris un script qui a été réalisé par **CHOUM** du forum Recalbox, avec l'aide d'autres personnes. Il nous a servi de base pour réaliser le nôtre...

Nous avons trié les informations que nous souhaitions garder, changé la vitesse de défilement, ajouté notre logo avec des petites animations sympathiques.
C'est **Frakasss** qui s'est coltiné tout le taff (en plus de l'étude du design !), le langage utilisé est le "Python", toutes les images et animations sont codées "en binaire" à partir de paint et d'un logiciel disponible sur le net.

Il a passé de longues heures à trouver le bon rythme et à corriger les bugs pour me satisfaire Ah ah ah ! Bref, c'est dans ce genre de défi que nous sommes encore plus complémentaires, ses compétences valent de l'or !
J'ai suivi cette procédure afin d'installer et faire fonctionner celui-ci : [>>>>>>ici<<<<<<](https://wiki.recalbox.com/fr/tutorials/video/tft/lcd-display-with-i2c)

---
#### Custom GPIO Recalbox

Pour faire fonctionner le mini LCD I2C en mode GPIO=1, il est nécessaire de faire quelques modifications dans recalbox. En effet, les PINs utilisées par le mini LCD sont en conflit avec les Hot Keys... Aïe, c'est un Big Trouble !

Pour résoudre ce problème, j'ai fait appel à **Ian57** de la Team Recalbox qui a déjà été confronté à ce type de situation. En résumant un peu, lui et la team RB ont ajouté la possibilité de customiser les GPIO pour nos joysticks et boutons.

Cette nouvelle fonctionnalité me permet de libérer les 2 pins indispensables au fonctionnement du mini LCD.... cette fonctionnalité est décrite sur le forum et est disponible sur la R6 **"DragonBlaze"**.

Voici le post en question :

mk\_arcade\_customGPIO :[ &gt;&gt;&gt;&gt;&gt;&gt;ici&lt;&lt;&lt;&lt;&lt;&lt;](https://wiki.recalbox.com/fr/tutorials/controllers/gpio/gpio-controllers)

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
