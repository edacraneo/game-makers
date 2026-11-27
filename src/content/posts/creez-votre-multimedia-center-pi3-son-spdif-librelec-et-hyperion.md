---
title: 'Créez votre "multimedia center" : Impression 3D, Pi3, Son SPDIF,
  Librelec et Hyperion'
slug: creez-votre-multimedia-center-pi3-son-spdif-librelec-et-hyperion
date: 2022-02-03
tags:
  - media-center
authors:
  - Ian57
featured: false
feature: /images/2022/02/IMG_9772.JPG
excerpt: Cet article va vous permettre de construire votre propre "multimedia
  center" connecté, fournissant l'Ambilight sur votre TV et aussi une sortie son
  SPDIF numérique pour utiliser vo…
visible: true
---
Cet article va vous permettre de construire votre propre "multimedia center" connecté, fournissant l'Ambilight sur votre TV et aussi une sortie son SPDIF numérique pour utiliser votre Home cinéma (en coaxial ou fibre optique). Il sera basé sur un Raspberry Pi 3 et utilisera la distribution LibreElec (basée sur le très bon Kodi).

<figure ><div ><iframe src="https://www.youtube.com/embed/MMUp8Uuw6pI" frameborder="0" allowfullscreen></iframe><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button></div><div ><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span >0:00</span><div >/<span ></span></div><input type="range"  max="100" value="0"><button >1&#215;</button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range"  max="100" value="100"></div></div></div></figure>

# Liste de matériel

- 1 raspberry pi 3 ou 4
- 1 alimentation 3A
- 1 carte SD 8Go minimum
- 1 carte Hat PiFI+ (clone chinois de la carte HiFiBerry Digi) [https://fr.aliexpress.com/item/32755080476.html?gatewayAdapt=glo2fra&spm=a2g0o.9042311.0.0.30146c37n6MOyy](https://fr.aliexpress.com/item/32755080476.html?gatewayAdapt=glo2fra&spm=a2g0o.9042311.0.0.30146c37n6MOyy)
- 1 bande de LEDs RGB APA201 de 5m avec une densité de 30 LEDS au mètre [https://fr.aliexpress.com/item/32322326979.html?spm=a2g0o.productlist.0.0.2aa57a6cERK05v&algo\_pvid=d8ecad15-ba9b-4950-8840-549a42935e2e&algo\_exp\_id=d8ecad15-ba9b-4950-8840-549a42935e2e-0&pdp\_ext\_f={"sku\_id"%3A"67111131794"}&pdp\_pi=-1%3B46.32%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32322326979.html?spm=a2g0o.productlist.0.0.2aa57a6cERK05v&algo_pvid=d8ecad15-ba9b-4950-8840-549a42935e2e&algo_exp_id=d8ecad15-ba9b-4950-8840-549a42935e2e-0&pdp_ext_f=%7B%22sku_id%22%3A%2267111131794%22%7D&pdp_pi=-1%3B46.32%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)
- 1 alimentation 5V 10A pour la bande de LEDs [https://fr.aliexpress.com/item/32810906485.html?spm=a2g0o.productlist.0.0.6462f9c2ho6SEk&algo\_pvid=20dbc81e-991d-449d-a950-08bcf1128537&algo\_exp\_id=20dbc81e-991d-449d-a950-08bcf1128537-1&pdp\_ext\_f={"sku\_id"%3A"10000004015605428"}&pdp\_pi=-1%3B18.64%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32810906485.html?spm=a2g0o.productlist.0.0.6462f9c2ho6SEk&algo_pvid=20dbc81e-991d-449d-a950-08bcf1128537&algo_exp_id=20dbc81e-991d-449d-a950-08bcf1128537-1&pdp_ext_f=%7B%22sku_id%22%3A%2210000004015605428%22%7D&pdp_pi=-1%3B18.64%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)
- des fils avec connecteur dupont male et femelle
- 1 ventilateur 40mm en 12V (on le fera fonctionner en 5V, il sera plus lent mais fera beaucoup moins de bruit)
- 1 télécommande IR pour piloter l'application Kodi [https://fr.aliexpress.com/item/32829833568.html?spm=a2g0o.productlist.0.0.3c55432bHotNsE&algo\_pvid=39007215-c876-41a3-9d1d-96d6f3cccbbf&algo\_exp\_id=39007215-c876-41a3-9d1d-96d6f3cccbbf-16&pdp\_ext\_f={"sku\_id"%3A"64971523679"}&pdp\_pi=-1%3B4.96%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32829833568.html?spm=a2g0o.productlist.0.0.3c55432bHotNsE&algo_pvid=39007215-c876-41a3-9d1d-96d6f3cccbbf&algo_exp_id=39007215-c876-41a3-9d1d-96d6f3cccbbf-16&pdp_ext_f=%7B%22sku_id%22%3A%2264971523679%22%7D&pdp_pi=-1%3B4.96%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)

# Design et impression du boitier

Le boitier est un remix de [https://www.thingiverse.com/thing:4073281](https://www.thingiverse.com/thing:4073281) et est disponible à l'adresse : [https://www.thingiverse.com/thing:5229262](https://www.thingiverse.com/thing:5229262)

La conception a été réalisée sous Fusion 360 en modifiant les STL du projet initial. Impression réalisée sur une imprimante Creality Ender 5, en 0.2 et PLA noir

![](/images/2022/02/Capture_d--cran_2022-01-30_122717.jpg) ![](/images/2022/02/Capture_d--cran_2022-01-30_211737.jpg) ![](/images/2022/02/Capture_d--cran_2022-02-02_161757.jpg)
![](/images/2022/02/Capture_d--cran_2022-01-30_211805.jpg) ![](/images/2022/02/Capture_d--cran_2022-01-30_122617.jpg) ![](/images/2022/02/IMG_20220116_123013_1024.jpg)
![](/images/2022/02/IMG_20220130_211524_1024.jpg) ![](/images/2022/02/IMG_20220130_211547_1024.jpg) ![](/images/2022/02/IMG_20220202_162712_1024.jpg)

# Montage des composants dans le boitier

Installation et fixation du Raspberry Pi dans le boitier

![](/images/2022/02/IMG_20220202_170306_1024.jpg)

Comme il faut ajouter une ventilation alimentée par le raspberry pi et que le Hat PiFi ne fournit pas de report du GPIO, il faut souder 5 fils Dupont femelles directement sur le GPIO comme décrit dans les images suivantes.

![](/images/2022/02/pi3GPIOPinout.png)
<figcaption>GPIO Pinout</figcaption>

Pour alimenter le ventilateur

- Pin 2 +5V
- Pin 6 Masse

Pour piloter la bande de LEDs pour hyperion

- Pin 19 SPI0 MOSI
- Pin 20 Masse
- Pin 23 SPI0 SCLK

![](/images/2022/02/IMG_20220202_170356_1024.jpg) ![](/images/2022/02/IMG_20220202_170452_1024.jpg)

Voici le schéma de câblage global :

![](/images/2022/02/hyperionAPA102SPI_Pi3_bb.png)

On insère ensuite le hat au-dessus du raspberry pi : Attention à bien mettre des entretoises sur le hat, sur le côté opposé au GPIO afin que la carte repose sur la carte du raspberry pi et ne soit pas en porte-à-faux. Ceci est matérialisé par les écrous en Teflon sur le bas de la photo suivante.

![](/images/2022/02/IMG_20220202_170529_1024.jpg)

On peut ensuite positionner le ou les ventilateurs...

![](/images/2022/02/IMG_20220202_172453_1024.jpg)

# Installation et configuration de LibreElec

## Création SD et premier boot

LibreELEC est une distribution Linux légère conçue pour Kodi pour tout type de matériel  actuel et populaire : PC, raspberry pi et clone etc...

![](/images/2022/02/libreelecArch.png)

La version pour Pi 3 est disponible à l'adresse [https://libreelec.tv/downloads/raspberry/](https://libreelec.tv/downloads/raspberry/)

A l'heure de l'écriture de l'article il s'agit de la version  LibreELEC-RPi2.arm-9.2.8.img.gz, la version 10 n'étant pas disponible pour pi3.

On commence par désarchiver l'image de la distribution : 

```
gunzip LibreELEC-RPi2.arm-9.2.8.img.gz"
```

On crée ensuite la SD bootable :

```
sudo dd bs=1M if=LibreELEC-RPi2.arm-9.2.8.img of=/dev/sdg status=progress
```

Voilà c'est prêt. Si vous n'aimez pas trop Linux, vous pouvez passer par un utilitaire Windows, comme [Win32DiskImager ](https://sourceforge.net/projects/win32diskimager/)ou encore [BalenaEtcher ](https://www.balena.io/etcher/)pour créer la SD.

On peut insérer la SD dans notre joli boitier, brancher la connectique : alimentation, HDMI, câble coaxial ou fibre pour votre ampli audio/vidéo. Je vous conseille, dans la phase de configuration de brancher un clavier USB pour pouvoir naviguer simplement dans les menus de Kodi.

L'installation est très rapide et les questions posées sont peu nombreuses et concernent principalement la sélection de la langue.

![](/images/2022/02/screenshot012.png)

Dans un premier temps on passe on passe l'interface de Kodi en mode "Expert" afin d'avoir l'ensemble des réglages à disposition.

Normalement, le résolution graphique s'est ajustée automatiquement à votre matériel et vous n'avez rien à configurer.

## Configuration de la carte PiFi

On va s'interesser à la partie audio. Par défaut la carte PiFi n'est pas reconnue par le système, il faut ajouter un "overlay" spécifique pour que lors du démarrage du Raspberry, les pilotes de la carte son soient chargés. Pour cela il faut modifier le fichier config.txt de la distribution Libreelec. On va le faire à travers le réseau et une connexion SSH. Si votre Raspberry n'est pas connecté au réseau de votre maison, il faudra retirer la carte SD et éditer le fichier depuis un autre ordinateur.

Dans notre cas, il va nous falloir configurer plus finement LibreElec afin de pouvoir y accéder depuis une autre machine. Pour cela nous allons activer le shell sécurisé SSH.

Pour cela on se rend dans la partie "Système -&gt; LibreELEC" puis dans le sous menu "services".

![](/images/2022/02/raspberry-pi-libreelec-parametres-systeme-1024x572.jpg)

Vous pouvez alors activer le service SSH et configurer son mot de passe afin de pouvoir accéder à votre centre multimédia depuis un autre ordinateur. 

Il est aussi possible de configurer Samba afin d'accéder aux disques des autres machines (Windows et Linux) qui se trouveraient sur votre réseau. 

![](/images/2022/02/screenshot009.png)

![](/images/2022/02/screenshot010.png)

Une fois SSH activé, on récupère l'adresse IP de notre LibreElec grâce au menu "Infos du Système" et le sousmenu "Réseau"

![](/images/2022/02/screenshot002.png)

On peut alors accéder à notre LibreElec depuis un autre ordinateur grâce à la commande suivante :

```
ssh root@192.168.1.37
```

Ensuite il faut passer la partition /flash en écriture afin de modifier le fichier confix.txt

```
mount -o rw,remount /flash
nano /flash/config.txt
```

ensuite on édite le fichier config.txt et l'on ajoute à la fin le support de la carte PiFi

```
#PiFi and Hifiberry Digi support 
dtoverlay=hifiberry-digi
dtoverlay=lirc-rpi:gpio_in_pin=26
```

Après un reboot, la carte son Pifi devrait apparaitre dans la liste des possibles configurations :

![](/images/2022/02/screenshot006.png)

![](/images/2022/02/screenshot005.png)

Voilà vous pouvez maintenant utiliser votre sortie numérique coaxiale ou optique et profiter des multiples canaux audio proposés par votre home cinéma.

## Overclocking

Il est possible d'overclocker un peu le Raspberry Pi 3 afin de gagner un peu de puissance. Attention, il faudra mettre en place un radiateur sur le CPU et une ventilation afin de refroidir votre système.

Comme pour l'activation de la carte son, on va éditer le fichier config.txt

```
mount -o rw,remount /flash
nano /flash/config.txt
```

et on ajoute le code suivant dans le fichier :

```
#Overclock at 1400mhz:
 
arm_freq=1400
over_voltage=4
sdram_freq=575
sdram_schmoo=0x02000020
over_voltage_sdram_p=6
over_voltage_sdram_i=4
over_voltage_sdram_c=4
core_freq=500
v3d_freq=500
h264_freq=333
```

On peut alors rebooter et profiter de la puissance supplémentaire :

![](/images/2022/02/screenshot004.png)

Votre système est maintenant fonctionnel , nous allons maintenant ajouter l'Ambilight à votre télévision.

# Ambilight avec Hyperion

L'Ambilight (pour « ambient lighting » éclairage d’ambiance) est une technologie spécifique à Philips qui consiste à entourer le cadre du téléviseur d'un halo lumineux dynamique reprenant les codes couleurs de l'image affichée. Elle a été inventée en 2002 mais est apparue pour la première fois sur la gamme 2004 du constructeur. On retrouve 2 types d'Ambilight : Ambilight Spectra 2, les LEDs sont positionnées à gauche et à droite du téléviseur sur la face arrière et Ambilight Spectra 3, les LEDs sont positionnées à gauche, à droite et au-dessus du téléviseur sur la face arrière.

L’intérêt d’Ambilight est de créer une meilleure immersion lors de l’affichage. Dans le noir, il crée une atmosphère qui vous implique encore davantage dans le film en transformant le mur derrière l’écran en une extension de l’image : elle semble plus large et plus haute. L’image semble alors sortir du cadre de l’écran, et les limites de celui-ci semblent disparaître. De plus ce halo lumineux permet de réduire l’agressivité de l’image et donc la fatigue oculaire. Ceci vous évitera d’allumer une lampe si vous regardez la TV dans une pièce plongée dans le noir.

![](/images/2022/02/IMG_9782.JPG)

Le projet Hyperion est une implémentation opensource de la technologie Ambilight et fonctionne sur de nombreuses plateformes matérielles et logicielles. Ces principales caractéristiques sont les suivantes :

- Faible charge du processeur. Par exemple, le contrôle d’une bande de 50 LEDs, n’utilise que 2% du processeur d’un Raspberry Pi de première génération non overclocké ;
- Une interface JSON (JavaScript Object Notation) qui permet une intégration facile dans les scripts;
- Un utilitaire de ligne de commande permet de tester et de configurer facilement les transformations de couleurs;
- HyperCon, un outil écrit en Java et donc portable, qui permet de générer le fichier de configuration Hyperion. L'outil mémorisera également les paramètres de la précédente exécution;
- Télécommande Android pour définir une couleur statique;
- Kodi-checker qui vérifie le statut de lecture et d'économiseur d'écran de Kodi et décide de capturer ou non l'écran. Le vérificateur détecte également si Kodi joue du contenu vidéo 3 ;
- Détecteur de bordure noire;
- Transmetteur Json / Proto pour envoyer l'image en cours à une seconde instance d'hyperion;
- Un moteur d'effets scriptable;
- De nombreux matériels compatibles avec Hyperion: PhilipsHue, AtmoOrb, etc.

## Matériel requis

Il nous faut une bande de LEDs qui soit compatible avec le logiciel Hyperion. Une simple bande de LEDs RGB ne convient pas, il faut qu’elles soient pilotables par intermédiaire soit d’une PWM (Pulse Width Modulation) soit du bus SPI (Serial Peripheral Interface) disponibles sur le port GPIO du Raspberry PI. Sur ce type de bande de LEDs, chaque LEDs possède son circuit intégré de contrôle. Pour faire simple vous pouvez utiliser des bandes de LEDs à 3 connecteurs ou 4 connecteurs. Je présente ici les 2 types de bandes les plus utilisées dans les projets Ambilight.

La première à 3 connecteurs (+5V, GND et DATA) se pilotera en PWM ou SPI et utilise des LEDs WS2812B couplées à un contrôleur WS2811. 

![](/images/2022/02/WS2812B-1.png)

La seconde version utilise 4 connecteurs (+5V, GND, DATA et CLOCK) et se pilotera exclusivement via le bus SPI, elle est référencée sous le nom APA102 « SuperLED ». Les principaux avantages par rapport aux LEDs WS2812B sont qu’elles permettent des fréquences de pilotage plus importantes et que leur refroidissement est meilleur. Elles sont cependant plus chères.

![](/images/2022/02/APA102.png)

Il existe plusieurs possibilités pour connecter une bande de LEDs au Raspberry Pi. La meilleure connexion dépend du type de matériel et Hyperion prend en charge les connexions suivantes:

- WS281X-PWM: utilisé pour connecter directement des périphériques WS2812b et LED compatibles. Certaines plateformes rencontrent des problèmes avec ce type de connexion. Pour une mise en œuvre sans souci il est recommandé d’utiliser des LEDs de type APA102 (4 broches) pilotées en SPI;
- Bus SPI: Utilisé pour connecter directement les bandes LPD6803, LPD8806, APA102 et WS2801, Ce type de connexion est recommandé à la place de PWM si vous le pouvez.
- USB: utilisé pour AdaLight et SEDU;
- GPIO: utilisé pour se connecter avec Pi-Blaster;
- UART: utilisé pour connecter directement WS2812b (mais la configuration s'est révélée être instable).

Même si les LEDs ne consomment pas beaucoup, il vous faudra une alimentation externe pour alimenter la bande car la puissance délivrée par le Raspberry Pi ne sera pas suffisante. Ainsi pour une bande de 50 LEDs, il est nécessaire de prévoir une alimentation de 2A.

Dernière chose, suivant la taille de votre téléviseur, il vous faudra un nombre suffisant de LEDs pour faire le tour complet et obtenir un éclairage suffisant. Pour cela les bandes de LEDs sont vendues avec différentes densités au mètre allant de 30 à 144 LEDs. A titre d’exemple, pour une TV de 50 pouces, il faut un peu plus de 3m de bandes avec une densité de 30 LEDs au mètre. On approche alors la centaine de LEDs et vous devrez utiliser une alimentation plus puissante pour alimenter la bande (4-5A).

## Mise en oeuvre matérielle

Le câblage est décrit dans la figure suivante. La broche 19 du GPIO est reliée à la broche **DataIn**(DI) de la bande de LEDs et la broche 23 du GPIO reliée à la broche **ClockIn**(CI). Les masses de l’alimentation externe pour les LEDS et celle du Raspberry Pi sont reliées.

C'est ici que nos soudures sur le port GPIO de la carte PiFI nous permettent de connecter la bande de LEDs.

![](/images/2022/02/hyperionAPA102SPI_Pi3_bb-1.png)

![](/images/2022/02/IMG_20220129_112944.jpg)

## Hypercon pour la configuration

Avant de passer à l’installation d’Hyperion dans Kodi sur notre Raspberry Pi, nous allons configurer notre future installation Ambilight à l’aide du logiciel dédié Hypercon.

En effet, Hyperion dispose d'un outil externe appelé HyperCon qui permet de créer facilement le fichier de configuration via une interface graphique. Il sera aussi possible de réaliser l’installation directement depuis une machine distante. Il est écrit en Java et est utilisable à l’aide de Java 1.7 et ultérieur.

La procédure d'installation est décrite dans la page [https://wiki.libreelec.tv/configuration/hypercon](https://wiki.libreelec.tv/configuration/hypercon)

Sous linux son installation et utilisation est très simple :

```
sudo apt-get install openjdk-7-jre
wget http://releases.libreelec.tv/hypercon-LE.jar
java -jar ./hypercon-LE.jar
```

Vous obtenez l'interface suivante :

![](/images/2022/02/hypercon1-1.png)

L’interface comporte 2 parties : la zone à gauche contient les 5 onglets qui vont nous permettre de configurer  notre système Ambilight et l’installer sur notre Raspberry Pi.

On y retrouve la configuration du matériel (Onglet « hardware ») : type de connexion, type, nombre et positionnement des LEDs autour de l’écran.

L’onglet « process » va nous permettre de configurer la calibration des couleurs et le lissage au changement de couleur.

L’onglet « Grabber » permet de choisir le système d’acquisition d’image pour réaliser les calculs nécessaires au rendu des couleurs autour de l’écran. Dans le cas de Kodi, on utilise le système d’acquisition interne qui va lire directement dans la mémoire graphique du Raspberry Pi. Mais il est possible d’utiliser un système externe pour permettre l’utilisation du système Ambilight avec une source externe comme un lecteur DVD/BlueRay, une box TV ou encore une console de jeux vidéo.

L’onglet « External » contient la configuration de l’effet lumineux de démarrage d’Hyperion. « Json Server » permet de se connecter avec une télécommande (webapp/ios/android) pour contrôler les effets et la transformation des couleurs de votre système. « Proto server » permet d’envoyer des images à Hyperion via le port TCP proto pour un traitement ultérieur grâce au "Kodi Addon". « Kodi Checker » permet d'activer et de désactiver votre système Ambilight en fonction de l'état de Kodi.

L’onglet « SSH » va nous permettre d’installer et mettre à jour Hyperion en un seul clic, de téléverser votre fichier « **hyperion.config.json** », de démarrer et arrêter le service Hyperion, de réaliser des captures, de tester les couleurs à l’aide du sélecteur de couleurs.

Sur le côté droit de l’interface on retrouve un exemple de la configuration TV réalisée. L'image utilisée peut être modifiée en cliquant sur le téléviseur avec le bouton droit de la souris. Chaque petit rectangle représente une LED : le numéro représente sa position sur la bande de LEDs, et la position du rectangle indique la position d’éclairage autour de l’écran.

Dans un premier temps, j’ai positionné physiquement ma bande de LEDs autour de l’écran et câblé cette dernière sur le Raspberry Pi en utilisant la méthode de pilotage par bus SPI. J’ai utilisé un écran de TV en 16/9. Vues les dimensions de la télévision (42") j’ai utilisé une bande de LEDs APA201 de 5m avec une densité de 30 LEDS au mètre. Cette bande LEDs consomme 10W au mètre et j’ai donc utilisé un peu plus de 3,6m de bande ce qui correspond à 108 LEDS. La consommation totale sera donc de 36W, j’ai donc opté pour une alimentation 5V 10A.Pour un meilleur rendu, il est bien sûr préférable de positionner les LEDs à l’arrière de l’écran et non autour.

![](/images/2022/02/IMG_2513.JPG)

![](/images/2022/02/IMG_2515.JPG)

![](/images/2022/02/IMG_2514.JPG)

Une fois la bande positionnée (ici 108 LEDs sur 4 côté de l’écran), on repère et compte le nombre de LEDs par côté, cela est impératif pour la configuration et le bon fonctionnement du système Ambilight. Dans mon cas j’ai 18 LEDs de chaque côté, 22 au-dessus et 1 LED sur chaque coin supérieur (22 + 18+18 +2 =60, et les LEDs sont numérotées sur l’image de 0 à 107). J’ai donc configuré comme suis dans la partie Hardware (cf : les captures ci-dessous):

- « Type » → WS2801 ;
- « RGB Byte Order » → RBG. L’ordre des couleurs sur mes LEDs n’était pas celui par défaut et il fallait inverser les couleurs verte et rouge ;
- Dans « Construction », j’ai coché « Led top left », « Led top right », « Led bottom left » et « Led bottom right » ;
- « Direction » → « Clockwise » car la première LED de la bande est en bas à gauche de l’écran ;
- « Leds horizontal » → 31 ;
- « Leds Left » → 21 ;
- « Leds Right» → 21 ;
- « Bottom Gap » → 0, pour indiquer qu’il n’y a pas de LEDs sur la partie inférieure de l’écran. Le « Bottom Gap » sera nul si vous avez placé une bande en dessous de votre écran ;
- « First Led Offset » → -36, afin de positionner la première LED de ma bande en bas à gauche de mon écran. J’ai laissé les paramètres par défaut dans la partie « Image Process » et configuré la détection des bandes noires comme suit :
- « Black Border detection » → activé ;
- « Threshold » → 5 %
- « Mode » → osd

J’ai ensuite laissé la configuration par défaut dans les onglets « Process », « Grabber » et « External ».

On peut alors enregistrer nos paramètres à l’aide du bouton « save » (le fichier HyperCon\_settings.dat est alors créé) et générer le fichier de configuration pour Hyperion à l’aide du bouton « Create Hyperion Configuration ». Le fichier « hyperion.config.json » est alors créé à l’endroit de votre choix par l’intermédiaire d’une boite de dialogue.

![](/images/2022/02/hypercon1.png)

![](/images/2022/02/hypercon2.png)

## Mise en oeuvre dans LibreElec

Dans un premier temps on va activer le bus SPI du Raspberry Pi afin de pouvoir piloter la bande de LEDs. Pour cela il faut de nouveau éditer le fichier config.txt :

```
mount -o remount,rw /flash
nano /flash/config.txt
```

puis on ajoute la configuration suivante :

```
dtparam=spi=on
```

On reboote le raspberry pi puis on installe hyperion dans Kodi par l'intermédiaire du gestionnaire d'extensions :

![](/images/2022/02/screenshot013.png)

![](/images/2022/02/screenshot014.png)

Normalement hyperion est activé, mais le fichier de configuration de votre installation n'est pas encore téléversé sur le système LibreElec.

On se rend dans l’onglet « SSH » et on configure comme suit :

- « System » → « LibreELEC/LE » ;
- « Target IP » → l’adresse IP de votre Raspberry Pi récupérée précédemment (192.168.1.37 pour moi) ;
- « Port » → « 22 » ;
- « Username » → « root » ;
- « Password » → « mot de passe ssh de LibreElec».

On clique ensuite sur le bouton « connect », et normalement les boutons permettant la gestion d’Hyperion grisés au départ sur la partie basse, deviennent actifs si la connexion a réussi.

![](/images/2022/02/hypercon7.png)

![](/images/2022/02/hyperion108Config-2.png)

Pour l’instant, les LEDs ne s’allument pas, et c’est tout à fait normal, nous n’avons pas donné à Hyperion la configuration matérielle de notre installation (positions des LEDS et mode de pilotage). On commence par stopper Hyperion à l’aide du bouton idoine. Ensuite on téléverse le fichier de configuration généré dans la section précédente par l’intermédiaire du bouton « Send Config ». Ensuite on relance Hyperion à l’aide du bouton « Start ». Normalement vous devriez observer la séquence lumineuse de boot que vous avez choisie. Puis un éclairage statique bleuté si vous êtes dans l’interface de Kodi. Si ce n’est pas le cas vérifiez votre câblage ainsi que la fenêtre de log. L’erreur y est sûrement décrite.

Afin de tester le bon fonctionnement de votre installation, il est préférable d’utiliser des vidéos de test comme celles présentes sur la page [http://insaneboard.de/blog/?page\_id=24](http://insaneboard.de/blog/?page_id=24). Elles vous permettront de vérifier que le système Ambilight est bien synchrone avec l’image de votre téléviseur.

![](/images/2022/02/IMG_9773.JPG) ![](/images/2022/02/IMG_9774.JPG)
![](/images/2022/02/IMG_9775.JPG) ![](/images/2022/02/IMG_9776.JPG)

![](/images/2022/02/IMG_9776-1.JPG) ![](/images/2022/02/IMG_9777.JPG)
![](/images/2022/02/IMG_9778-1.JPG) ![](/images/2022/02/IMG_9779.JPG)

[/creez-votre-multimedia-center-pi3-son-spdif-librelec-et-hyperion/](/projets/creez-votre-multimedia-center-pi3-son-spdif-librelec-et-hyperion/)

![](/images/2022/02/IMG_9780.JPG) ![](/images/2022/02/IMG_9781.JPG)
![](/images/2022/02/IMG_9782-1.JPG) ![](/images/2022/02/IMG_9783.JPG)

![](/images/2022/02/IMG_9785.JPG) ![](/images/2022/02/IMG_9786.JPG)
