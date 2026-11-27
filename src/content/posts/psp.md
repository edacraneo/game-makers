---
title: PSπ
slug: psp
date: 2017-06-21
tags:
  - creations
  - consoles
authors:
  - BudDevil
  - Frakasss
featured: false
feature: /images/2021/01/img59-4-1.JPG
excerpt: Matériel Prérequis - .1 kit Retro-Emulation
  [https://retro-emulation.com/shop/index.php?id_product=12&controller=product&id_lang=6]
  - 1 Raspberry pi3 B+ - 1 Ventilateur 40x40x7mm -…
visible: true
---
> **Matériel Prérequis**
> \- .1 kit [Retro-Emulation](https://retro-emulation.com/shop/index.php?id_product=12&controller=product&id_lang=6)
> \- 1 Raspberry pi3 B+
> \- 1 Ventilateur 40x40x7mm
> \- 1 Micro switch 12mm
> \- 1 lot de radiateurs
> \- 1 Rallonge USB double
> \- 1 led blanche
> \- 1 Interrupteur
>

---

#### Présentation

Lors d'une expédition à la déchèterie, je suis tombé sur l'un des premiers modèles de Playstation (SCPH-1001) dans un sale état. Triste fin pour cette console...?
Je ne crois pas, il est temps de lui donner une seconde vie.

Je sais que Frakasss adore la PS1, qu'il en a déjà quelques unes originales, mais aucune reconditionnée. En plus j'ai déjà repéré un mod sympa de PS1 sur le net : Retro-Emulation propose un kit de composants qui contient toute la partie électronique. Je n'ai qu'à imprimer en 3D les différents supports dispos sur Thingiverse, assembler le tout et le tour est joué!
En somme, un petit projet simple et rapide !

![](/images/2021/01/img02-13.JPG)

---

#### Projet à la Frakasss

**/!/ Erreur /!/**

J'ai oublié que réaliser un projet pour Frakasss, c'est se tirer une balle dans le pied!
Frakasss n'aime pas trop l'aspect général de la console avec le kit tout fait... Il souhaite le même aspect que la vraie, avec les ports USB camouflés dans des prises similaires aux prises des manettes PS1 et que la façade reprenne les trous des cartes mémoires.

J'essaie vaguement de le raisonner, sachant parfaitement que c'est peine perdue... Après tout il n'a pas tout à fait tort, ça fera sympa une belle façade comme sur la vraie. Et puis refaire quelques modifs sur un projet existant ne me coutera pas trop de temps; le projet reste simple.

#### /!/ Erreur /!/

Et le voila qui rallonge la liste...

_Le bouton reset il sera fonctionnel hein? Je pourrai faire un reboot en appuyant dessus?._ 
Euh... Mais ça te servira à quoi au juste?
_Je sais pas, pour faire comme l'originale. Et dans le capot qui s'ouvrira, tu pourras me mettre les ports USB pour les joueurs 3 et 4?_
Mais... Aucun des projets de reconditionnement de PS1 que j'ai vu n'a gardé la fonctionnalité du capot!
_J'ai confiance, surprend moi!_
Fait chier... C'est plus du tout un projet simple ça...

#### /!/ Fatal Error /!/

Après les premiers tests d'impression, je me rends compte que les pièces 3D proposées dans le kit ne sont pas compatibles avec ma version de PS1 (SCPH-1001)...
Je suis fait comme un rat.

#### \[i\] Reboot \[i\]

Du coup, nous avons essayé d'améliorer le concept initial :

\- on garde l'ouverture du capot afin d'y incorporer quelques fonctions utiles.
\- on garde toutes les fonctionnalités des boutons d'origine
\- on essaie de se rapprocher au plus près de l'esthétique de la facade de la PS1 (slots cartes mémoires et prises manettes originales)

---

#### La base du MOD: le Kit

En 3 commandes sur Internet, j'ai tout ce qu'il me faut: le kit complet de composants, la rallonge double USB et le Raspberry PI3B+. Voici le contenu du kit :

\- RJ-45 extension câble 0,3m
\- micro SD card extension câble 0,25m
\- 3,5mm audio extension câble 0,3m
\- 4x USB 3.0 extension câble 0,3m
\- HDMI extension câble 0,3m
\- DC power jack 5,5/2,1mm
\- Switch
\- 5mm LED, Color green/yellow
\- Circuit board
\- USB-A socket
\- Rotatable potentiometer 100 Ohm
\- Rotatable potentiometer 5kOhm
\- 2,2µF capacitor
\- 3-Pole connector
\- 1m H05V-K 0,5mm² black
\- 1m H05V-K 0,5mm² red
\- micro USB câble
\- Screws.

![](/images/2021/01/img03-12.JPG) ![](/images/2021/01/img04-10.JPG) ![](/images/2021/01/img05-10.JPG)

---

#### Préparation de la coque

Je vide la console complètement, et je coupe la patte du côté droit (cf Photo).

Je fais la même chose pour les 3 pattes du lecteur CD de la coque supérieure en faisant attention à ne couper que la partie supérieure.
Dans ce qui reste des pattes, je perce des trous avec un forêt de 2mm.

![](/images/2021/01/img06-10.JPG)

![](/images/2021/01/img07-10.JPG) ![](/images/2021/01/img08-11.JPG) ![](/images/2021/01/img09-11.JPG)
![](/images/2021/01/img10-12.JPG) ![](/images/2021/01/img11-11.JPG) ![](/images/2021/01/img12-12.JPG)
![](/images/2021/01/img13-12.JPG) ![](/images/2021/01/img14-11.JPG) ![](/images/2021/01/img15-11.JPG)

---

#### Les pièces imprimées en 3D

Je conçois un nouvel ensemble de pièces 3D qui s'adapte parfaitement à la SCPH-1001.
J'en profite pour apporter quelques améliorations surtout au niveau des fixations que je trouve un peu limite. 
La partie électronique déjà commandée, j'adapte toutes mes pièces à ces composants.

Le fait que le capot s'ouvre m'oblige à concevoir un carter pour remplacer le lecteur CD de la console.
La forme du trou étant un peu compliquée à reproduire à vue d'oeil, j'improvise une technique un peu barbare mais qui a l'avantage de marcher: je calque les contours sur un papier, je colorie l'intérieur de cette forme et je la scanne. Une fois importée dans l'outil de modélisation 3D, j'ajoute les divers éléments réclamés par Frakasss:


\- emplacement pour les deux ports USB
\- six emplacements pour des cartes micro-SD (il souhaite séparer ses systèmes de jeux "une SD pour les jeux PS, une SD pour N64 etc etc")
\- emplacement pour une LED et son interrupteur (les cartes SD sont stockées à l'intérieur, l'éclairage permettra de choisir sa carte dans le noir)

Je fixe le carter avec trois vis 6x2mm à mettre dans les trous percés lors de la préparation de la coque.
j'ai rogné légèrement le bas du gros bloc USB de la rallonge double afin qu'il ne touche pas la coque inférieure lorsque j'assemblerai les deux coques. J'ai ensuite utilisé des serre-câbles pour bien maintenir les câbles ensemble.

![](/images/2021/01/img16-11.JPG) ![](/images/2021/01/img17-11.JPG) ![](/images/2021/01/img18-11.JPG)
![](/images/2021/01/img19-10.JPG) ![](/images/2021/01/img20-11.JPG)
![](/images/2021/01/img21-10.JPG) ![](/images/2021/01/img22-10.JPG)

---

#### Les boutons

**Le bouton Open**

Il conserve sa fonction et le mécanisme d'origine. Je n'ai rien à faire de ce côté là.

#### Le bouton Power

Le montage est simple : le bouton rouge va au centre du support, la LED va devant et le condensateur va derrière.
Je soude les différents éléments en faisant attention à la polarité de la LED \[Grande patte : +\]. Pas de polarité pour le condo.
Rien de plus simple en suivant les [instructions vidéos](https://www.youtube.com/watch?v=6eOFiuv2PGQ&t=1232s) du fournisseur.

#### Le bouton Reset

Sur le support du bouton power, il y a un second emplacement pour le microswitch. Je l'installe, et je soude deux fils dessus; ils iront sur Raspberry plus tard.
Le bouton Reset fonctionnera avec un script disponible dans la Recalbox.

#### Mise en place

Je mets enfin le support à sa place, dans la coque inférieure de la console.

![](/images/2021/01/img23-9.JPG) ![](/images/2021/01/img24-10.JPG) ![](/images/2021/01/img25-10.JPG)
![](/images/2021/01/img26-8.JPG) ![](/images/2021/01/img27-8.JPG) ![](/images/2021/01/img28-8.JPG)
![](/images/2021/01/img29-8.JPG) ![](/images/2021/01/img30-9.JPG)

---

#### Raspberry Pi et câblage

Je visse le raspberry sur son support et je pose l'ensemble dans la coque inférieure.

Après un passage en peinture, je prends les différents supports et j'y insére les câbles que je fixe ensuite sur la coque inférieure.

![](/images/2021/01/img31-9.JPG) ![](/images/2021/01/img32-9.JPG)
![](/images/2021/01/img33-8.JPG) ![](/images/2021/01/img34-9.JPG)

---

#### PCB d'alimentation

La PCB fournie avec le Kit est top car elle est équipée de résistances variables, on peut contrôler facilement la puissance des LEDs et la vitesse de ventilation.
Le montage est simple avec les [instructions vidéo](https://www.youtube.com/watch?v=6eOFiuv2PGQ&t=1232s).

![](/images/2021/01/img35-7.JPG) ![](/images/2021/01/img36-8.JPG)

---

#### LED et interruteur du carter

J'installe l'interrupteur sur le carter et je soude un fil rouge sur l'une de ses pattes.
Je soude l'autre bout du fil rouge au _plus (+)_ sur la PCB d'alim (slot réservé au ventilateur).

J'installe la LED dans le trou prévu dans le carter.
Je soude un fil rouge sur la patte longue _plus (+)_ de la LED
Je soude l'autre bout de ce fil sur la deuxième patte de l'interrupteur.

Je soude un fil noir à la patte courte _moins (-)_ de la LED.
L'autre bout du fil noir va sur la PCB, sur le slot _moins (-)_ réservé au ventilateur.

_Pour mieux repérer les câbles, j'ai changé les couleurs: rouge devient violet, noir devient bleu._

![](/images/2021/01/img37-8.JPG) ![](/images/2021/01/img38-6.JPG)

---

#### Fixer les supports amovibles

Certains supports bougent encore. Je les immobilise à coup de pistolet à colle.

![](/images/2021/01/img39-6.JPG) ![](/images/2021/01/img40-6.JPG) ![](/images/2021/01/img41-6.JPG)

---

#### Les slots pour les manettes

Une fois imprimés, j'insère les deux câbles USB dans les slots puis je visse les plaques de maintien derrière. 
Je les fixe ensuite sur la coque inférieure puis je relie les câbles USB au Raspberry.

![](/images/2021/01/img42-7.JPG) ![](/images/2021/01/img43-7.JPG) ![](/images/2021/01/img44-7.JPG)

Le ventilateur s'insère dans le double support qui permet de tenir à la fois la PCB et le ventilateur. Le flux d'air traverse la console. Il refroidit au passage les résistances variables et le Raspberry PI 3B+. L'air ressort enfin par les aérateurs latéraux.
La console est parfaitement ventilée.

![](/images/2021/01/img45-7.JPG) ![](/images/2021/01/img46-7.JPG)

---

#### Colliers de serrage

J'utilise un maximum de colliers de serrage pour rendre solidaire les câbles entre eux.
Le manque de place implique une organisation parfaite; tout doit être en ordre et à sa place.

![](/images/2021/01/img47-7.JPG) ![](/images/2021/01/img48-6.JPG) ![](/images/2021/01/img49-6.JPG)
![](/images/2021/01/img50-6.JPG) ![](/images/2021/01/img51-6.JPG)
![](/images/2021/01/img52-5.JPG) ![](/images/2021/01/img53-5.JPG)

---

#### Le résultat

La PlayStation est fonctionnelle. Je la présente à Frakasss et il l'adore!
Tous les défis ont été relevés :

\- Rendre le bouton Reset fonctionnel 
\- Garder le bouton d'ouverture du capot fonctionnel
\- Dissimuler le trou du lecteur CDrom et exploiter l'espace sous le capot
\- Ventiler correctement le Raspberry PI 3B+
\- Gérer l'espace correctement pour ne pas gêner les différents mécanismes

La gestion de l'espace n'était pas une étape évidente, dans les différents 'Mod' PlayStation disponibles sur le net, le 'Capot' et le bouton 'Reset' étaient condamnés tout simplement. Nous avons étudié minutieusement la disposition des différents éléments afin de ne pas gêner les mécanismes d'ouverture et fermeture de la console. Je pense qu'on a réussi !

![](/images/2021/01/img55-5.JPG) ![](/images/2021/01/img56-5.JPG) ![](/images/2021/01/img57-5.JPG)
![](/images/2021/01/img58-4.JPG) ![](/images/2021/01/img59-4.JPG) ![](/images/2021/01/img60-4.JPG)

---

La liste en détail du matériel utilisé est disponible : [ici](https://drive.google.com/file/d/1Z8mNumL19-XvTOuLYjCFbXt2udMEXYwH/view?usp=sharing)
