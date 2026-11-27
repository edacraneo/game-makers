---
title: Naomi Netboot
slug: pidimmboot-naomi
date: 2021-10-02
tags:
  - creations
authors:
  - Ian57
featured: false
feature: /images/2021/09/NaomiNetBootNBanniere-1.png
excerpt: Naomi NetBoot https://gitlab.com/ian57/pidimboot est basé sur
  l'excellent projet PiDimBoot (https://gitlab.com/ezechiel/pidimboot) de
  ezechiel, également basé sur PiforceTools (htt…
visible: true
---
Naomi NetBoot [https://gitlab.com/ian57/pidimboot](https://gitlab.com/ian57/pidimboot) est basé sur l'excellent projet PiDimBoot ([https://gitlab.com/ezechiel/pidimboot](https://gitlab.com/ezechiel/pidimboot)) de ezechiel, également basé sur PiforceTools ([https://github.com/travistyoj/piforcetools](https://github.com/travistyoj/piforcetools)) pour charger des jeux sur Sega Netdimm (Naomi 1 et 2, TriForce, Chihiro) avec Raspberry et un écran Lcd tactile résistif 3.5" (320x480).
J'ai utilisé un écran geekcreit 3.5" 480x320 bon marché de [https://fr.banggood.com/3\_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html](https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html) qui est un clone du waveshare [https://www.waveshare.com/wiki/3.5inch\_RPi\_LCD\_(A)](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(A)) (le rétro-éclairage ne peut pas être réglé, vous aurez besoin du revB ou revC pour le faire [https://www.waveshare.com/wiki/3.5inch\_RPi\_LCD\_(B)](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B)), [https://www.waveshare.com/wiki/3.5inch\_RPi\_LCD\_(C)](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C)))
Mon code source est 100% GRATUIT, OPEN SOURCE, et FORKABLE :)
Merci pas de business, pas d'argent pour cette application, c'est seulement GRATUIT.

---

## Quoi de neuf ?

Ce fork utilise le dernier Raspbian OS Lite (Raspbian GNU/Linux 10) pour éviter les logiciels inutiles (comme xorg), et faire une image plus légère (1.6 GB sans roms).

```
Sys. de fichiers blocs de 1K Utilisé Disponible Uti% Monté sur
/dev/root 7261112 1626564 5306428 24% / 
/dev/mmcblk0p1 258095 48804 209292 19% /boot
```

J'ai changé le thème pour me rapprocher des couleurs originales de Naomi. J'ai changé les polices de caractères pour qu'elles soient plus lisibles (IMHO).
Ce projet peut être lancé sur un PC (pour le développement, ou l'utilisation) grâce au switch "osType" dans _const.py_. Il suffit d'adapter les répertoires à vos besoins.


Le patch "DIMM\_CheckOff" est ajouté, évitant à la borne de vérifier la ram avant de lancer le jeu, ce qui permet de gagner un temps précieux.


J'ai ajouté un "sleep mode" qui éteint l'écran après un temps fixe, et une simple pression sur l'écran tactile le rallume. Dans le cas d'un écran tft qui permet la gestion du rétro-éclairage (waveshare 3.5 revB ou revC) l'extinction est progressive par rétro-éclairage de l'écran. Dans le cas d'un écran sans gestion du rétro-éclairage, une image noire est affichée pour simuler l'extinction.
voir section "Activation du mode veille".

## Nouvelle interface

![](/images/2021/10/screen9.png) ![](/images/2021/10/screen8.png) ![](/images/2021/10/screen7.png)
![](/images/2021/10/screen6.png) ![](/images/2021/10/screen5.png) ![](/images/2021/10/screen4.png)
![](/images/2021/10/screen3.png) ![](/images/2021/10/screen2.png) ![](/images/2021/10/screen1.png)

![](/images/2021/10/screen18.png) ![](/images/2021/10/screen17.png) ![](/images/2021/10/screen16.png)
![](/images/2021/10/screen15.png) ![](/images/2021/10/screen14.png) ![](/images/2021/10/screen13.png)
![](/images/2021/10/screen12.png) ![](/images/2021/10/screen11.png) ![](/images/2021/10/screen10.png)

## Vidéos

### Boot

<figure class="gm-embed "><iframe width="200" height="113" src="https://www.youtube.com/embed/fM5QfNOL61w?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>Boot écran 3.5 Waveshare RevA</figcaption></figure>

<figure class="gm-embed "><iframe width="200" height="113" src="https://www.youtube.com/embed/Uuy6FNywZF4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>Boot écran Waveshare 3.5 RevC</figcaption></figure>

### Interface

<figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/FzK1-MPqmy4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

## Informations importantes

1. Liste des jeux compatibles : [https://drive.google.com/file/d/1AhWIBGnlyyTDlshie6sODfSJadcdYxgx/view](https://drive.google.com/file/d/1AhWIBGnlyyTDlshie6sODfSJadcdYxgx/view)

Vidéos montrant les fonctionnalités principales (avec l'ancienne interface) :

1. Démarrage : [https://youtu.be/7DgBk39FfiE](https://youtu.be/7DgBk39FfiE)
2. Configuration Virtual Zero Key Chip : [https://youtu.be/M7UVBQ0CILQ](https://youtu.be/M7UVBQ0CILQ)
3. Configuration adresse IP par système : [https://youtu.be/dNdGQEcgTYQ](https://youtu.be/dNdGQEcgTYQ)
4. Navigation dans PiDimBoot, par système et par genre : [https://youtu.be/xq9jMqT8gOU](https://youtu.be/xq9jMqT8gOU)
5. Téléverser un jeu : [https://youtu.be/vflhOEDOe5Q](https://youtu.be/vflhOEDOe5Q)
6. Gestion des jeux favoris : [https://youtu.be/9S-s0mjNalg](https://youtu.be/9S-s0mjNalg)
7. Téléverser un jeu unique au boot : [https://youtu.be/cApJJM8fajM](https://youtu.be/cApJJM8fajM)
8. Arrêt de PiDimBoot et Raspberry : [https://youtu.be/XCpo7qEe0-U](https://youtu.be/XCpo7qEe0-U)

## Mise en route


Vous aurez besoin des éléments suivants pour utiliser Naomi Netboot :

- Un Raspberry Pi 3 - [http://www.raspberrypi.org/](http://www.raspberrypi.org/) (n'utilisez pas le Pi4, il est en fait impossible de faire tourner l'écran sans Xorg !)
- Une carte SD (Minimum 4GB, mais je recommande 8GB ou 64GB pour les jeux full-set)Un écran tactile LCD résistif 320x480 - (exemples : [https://fr.banggood.com/3\_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html](https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html) [https://www.amazon.fr/gp/product/B07NTH1JWH/ref=ppx\_yo\_dt\_b\_asin\_image\_o00\_s00?ie=UTF8&psc=1](https://www.amazon.fr/gp/product/B07NTH1JWH/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&psc=1), un autre qui est moins cher est ici [https://fr.aliexpress.com/item/4001248404892.html](https://fr.aliexpress.com/item/4001248404892.html). Je vais donner la configuration dans la suite.
- Un système d'arcade Naomi, Triforce, ou Chihiro. Une Netdimm avec un Zero Key Chip installé. Je ne peux pas fournir de liens pour cela, mais une simple recherche Google vous permettra d'obtenir ce dont vous avez besoin.  Le Netdimm devra être configuré.
- Un câble croisé RJ45 see ([https://en.wikipedia.org/wiki/Ethernet\_crossover\_cable](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)). Il est impératif qu'il soit croisé.

![](/images/2021/10/naomieeprompic.jpg) ![](/images/2021/10/naomieeprom4.02.jpg) ![](/images/2021/10/naomizerokey.jpg)
![](/images/2021/10/naomiCheck.jpg) ![](/images/2021/10/netdimm.jpg)

## Installation

![](/images/2021/10/warning.png)

**_Pour éviter un repartitionnement et déplacement hasardeux des FAT32 et EXT4 pour permettre la dépose des roms depuis un OS Windows, sur mon image, les roms sont à déposer sur la partition EXT4. Vous ne pourrez pas donc le faire directement depuis un poste Windows en insérant la carte SD dans votre lecteur. Vous devrez soit utiliser un poste Linux pour effectuer votre copie, ou encore connecter votre Raspberry à votre réseau personnel et téléverser les roms comme décrit plus bas._** 

### Installation facile avec le fichier img


Voici un lien vers une image avec Naomi Netboot  déjà installée, basée sur RaspbianOS Lite (Debian10) :

![](/images/2021/10/sdNaomiNetboot.png)

[https://mega.nz/file/o5UxXAzI#9PnPvnSd2mBdtCQsdxuxhTX19hvLYNJiyKRTCyd6jQM](https://mega.nz/file/o5UxXAzI#9PnPvnSd2mBdtCQsdxuxhTX19hvLYNJiyKRTCyd6jQM)

Dézippez et gravez simplement l'image sur une carte µSD de 8GB, branchez-la et démarrez le Raspberry Pi 3.

```
unzip NaomiNetboot_Pi3_8Go.zip
sudo dd if=NaomiNetboot_Pi3_8Go.img of=/dev/mmcblk0 bs=1M status=progress && sync
```

sur mon NUC, `/dev/mmcblk0`   est le lecteur de carte SD. Vous pouvez utiliser win32diskimager ou Raspberry Pi Imager [https://www.raspberrypi.org/software/](https://www.raspberrypi.org/software/) pour créer la carte SD.

**Attention** En fonction de votre écran, vous aurez peut-être besoin de recalibrer l'écran tactile. Veuillez vous référer au paragraphe sur la calibration ci-dessous pour connaître la procédure.

Une fois tout ceci réalisé, il faut ensuite ajouter les roms sur la carte SD.

## Manuellement

### Installer l'OS et les paquets utiles sur SD

Téléchargez et installez le dernier Raspbian OS Lite [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/), en fait Debian 10 Lite : [https://downloads.raspberrypi.org/raspios\_lite\_armhf/images/raspios\_lite\_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip](https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip)

Avec linux vous pouvez utiliser dd pour graver votre SD :

```
unzip 2021-05-07-raspios-buster-armhf-lite.zip 
sudo dd if=2021-05-07-raspios-buster-armhf-lite.img of=/dev/mmcblk0 bs=1M status=progress && sync
```

**En fait, vous devriez connecter un écran et un clavier à votre pi ou utiliser SSH depuis un autre ordinateur pour effectuer toutes les configurations avant de mettre en place l'écran tft.**

![](/images/2021/10/bothscreens.jpg)

### Installation de paquets utiles


Afin d'installer Naomi Netboot et d'utiliser l'écran TFT, nous aurons besoin de quelques nouveaux paquets

```
sudo apt-get remove --purge bluez bluez-firmware pi-bluetooth triggerhappy build-essential
sudo apt autoremove
sudo apt install --no-install-recommends evtest raspi-config libts-bin python-pygame fbi wiringpi libjpeg8 omxplayer 
```

Installation de Git pour télécharger Naomi NetBoot

```
sudo apt-get install git
```

### Configuration de l'autologin

Pour exécuter Naomi Netboot au démarrage, nous devons nous authentifier, pour cela il suffit d'exécuter `raspi-config` :

```
sudo raspi-config
```

Choisissez System Option -&gt; Boot / Auto login -&gt; Console Autologin, validez et quittez. Vous pouvez redémarrer pour voir si cela fonctionne.

### Installation de Naomi NetBoot dans /opt

On commence par devenir `root` :

```
sudo -s
```

Installez le système Naomi NetBoot dans `/opt`

```
cd /opt
git clone https://gitlab.com/ian57/pidimboot.git pidimboot
```

En faisant cela, il sera facile d'obtenir la prochaine mise à jour avec un simple `git pull`.

### Installation des pilotes TFT

(la plupart des écrans 480x320 utilisent le pilote de superposition waveshare35a)Les pilotes Waveshare sont disponibles sur [https://github.com/swkim01/waveshare-dtoverlays](https://github.com/swkim01/waveshare-dtoverlays)

```
git clone https://github.com/swkim01/waveshare-dtoverlays
cd waveshare-dtoverlays
sudo cp *.dtbo /boot/overlays/
```

Dans le cas de la Waveshare 3.5 rev C il y a un problème avec les overlays swkim01 (l'écran tactile ne peut pas être initialisé voir [https://github.com/swkim01/waveshare-dtoverlays/issues/34](https://github.com/swkim01/waveshare-dtoverlays/issues/34)). Vous devrez utiliser l'overlay original de [https://github.com/waveshare/LCD-show](https://github.com/waveshare/LCD-show) ou du répertoire `waveshare-overlays` du projet Naomi Netboot. Ce répertoire contient des versions renommées des fichiers dtb de waveshare github).

```
cd /opt/pidimboot/waveshare-dtoverlays
sudo cp waveshare35c.dtbo /boot/overlays/
```

### Installation de binaires et de scripts utiles

J'ai utilisé  `fbcp` avec `omxplayer` et `fbv` pour afficher respectivement la vidéo et l'image de démarrage. Ils ne sont pas inclus dans le paquetage du système d'exploitation Raspbian, nous devons donc les copier dans le répertoire `/usr/bin` :

```
cd /opt/pidimboot/binariessudo 
cp fbcp fbv2 /usr/bin
```

J'ai créé un petit script pour lier toutes les commandes afin d'afficher la vidéo et l'image de démarrage.

```
cd /opt/pidimboot/binariescp splash.sh /home/pi
chmod 755 /home/pi/splash.sh
```

Script `splash.sh`

```
#!/bin/bash
(/usr/bin/fbcp &) && /usr/bin/omxplayer --aspect-mode stretch /opt/pidimboot/splashscreen/introNaomiNetbootV2.mp4 &> /dev/null && /usr/bin/killall fbcp &> /dev/null
#clear
#sleep(1)
#FRAMEBUFFER=/dev/fb1 /usr/bin/fbv2 -e #/opt/pidimboot/splashscreen/splashscreen3.png &> /dev/null
```

### Configuration de l'écran TFT

Ajoutez les lignes suivantes au fichier `/boot/config.txt`, nous devons faire tourner l'écran de 90°, car la résolution du matériel est de 320x480, et non de 480x320 !

commentez les lignes `hdmi*` suivantes pour obtenir les deux écrans (hdmi + tft sur spi)

```
#hdmi_force_hotplug=1
#hdmi_cvt=480 320 60 6 0 0 0
#hdmi_group=2
#hdmi_mode=87
dtparam=spi=on
dtoverlay=waveshare35a:rotate=90,speed=27000000
```

Maintenant vous pouvez redémarrer, votre écran devrait passer du blanc au noir au démarrage. Rien de plus. S'il passe au noir, l'écran est configuré, sinon, quelque chose s'est mal passé! Vous devez vérifier que vous utilisez le bon overlay. Si vous utilisez une Rev B ou une Rev C de l'écran waveshare, pensez à modifier la variable dtoverlay avec les bons overlays

```
#Rev A
#dtoverlay=waveshare35a:rotate=90,speed=27000000
#Rev B
#dtoverlay=waveshare35b:rotate=90,speed=27000000
#Rev C speed=125000000 -> 125MHz HighSpeed SPI
#dtoverlay=waveshare35c:rotate=270,speed=2400000000
```

Cette image utilise les overlays `waveshare35a.dtbo`, qui est un "standard" pour les écrans chinois 3.5" 320x480 tft. Si vous utilisez un écran adafruit, pensez à changer pour `pitft35-resistive.dtbo` dans le fichier  `/boot/config.txt` comme ceci :

```
dtparam=spi=on
dtoverlay=pitft35-resistive,rotate=90,speed=20000000,fps=20
```

Vous pouvez vérifier que le bon overlay est chargé au démarrage avec la commande suivante :

```
sudo vcdbg log msg
```

une ligne comme la suivante devrait se trouver ici :

```
001462.509 : brfs : Fichier lu : /mfs/sd/overlays/waveshare35a.dtbo
001473.419 : Chargement de l'overlay 'waveshare35a'.
001473.436 : dtparam : rotate=90
001474.280 : dtparam : speed=27000000
```

après vous pouvez vérifier que l'écran est correctement configuré avec :

```
$ dmesg | grep fb1
[8.306043] graphics fb1 : fb_ili9486 frame buffer, 480x320, 300 KiB mémoire vidéo, 32 KiB mémoire tampon, fps=33, spi0.0 at 27 MHz
```

Ça devrait être bon.

### Créer des règles udev (Exemple : Pour mon écran, Adafruit est une valeur différente)

Ceci permet au système de reconnaître l'écran tactile comme une entrée.

```
sudo nano /etc/udev/rules.d/29-ads7846.rules
```

ajoutez

```
SUBSYSTEM=="input", KERNEL=="event[0-9]*", ATTRS{name}=="Ecran tactile ADS7846", SYMLINK+="input/touchscreen"
```

recharger les règles udev :

```
sudo udevadm control --reload-rules
```

Vérifiez que `/dev/input/touchscreen` existe et vous pouvez utiliser `evtest` pour vérifier que l'écran tactile fonctionne.

```
# evtest 
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:	ADS7846 Touchscreen
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x0 vendor 0x0 product 0x0 version 0x0
Input device name: "ADS7846 Touchscreen"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 330 (BTN_TOUCH)
  Event type 3 (EV_ABS)
    Event code 0 (ABS_X)
      Value   2357
      Min        0
      Max     4095
    Event code 1 (ABS_Y)
      Value   3593
      Min        0
      Max     4095
    Event code 24 (ABS_PRESSURE)
      Value      0
      Min        0
      Max      255
Properties:
```

### Passage de l'architecture PC à l'architecture RPI

Il suffit de modifier le fichier `const.py` comme suit

```
osType = "RPI" # "PC" ou "RPI".
```

C'est tout !

**IMPORTANT :** Remplacement de la libsdl1.2

Il y a un bug avec l'écran tactile entre libsdl 1.2 et pygame. La libsdl debian originale empêche Naomi Netboot de fonctionner, car l'écran tactile ne fonctionne pas bien ! Nous devons installer une version corrigée de la bibliothèque.Voir [https://www.raspberrypi.org/forums/viewtopic.php?t=250001](https://www.raspberrypi.org/forums/viewtopic.php?t=250001) pour plus de détails.

```
sudo -scd /opt/pidimboot/SDLLibDebian
sudo dpkg -i libsdl1.2debian_1.2.15+veloci1-1_armhf.deb
```

et vérifiez la bonne installation

```
dpkg -l | grep sdl1.2
ii libsdl1.2debian:armhf 1.2.15+veloci1-1 armhf Simple DirectMedia Layer
```

### Calibrage de l'écran tactile

L'écran tactile doit être calibré pour obtenir les bonnes coordonnées de votre doigt :

```
sudo -s
TSLIB_FBDEVICE=/dev/fb1 TSLIB_TSDEVICE=/dev/input/touchscreen ts_calibrate
xres = 480, yres = 320
Took 14 samples...
Top left : X =  856 Y = 3560
Took 11 samples...
Top right : X =  888 Y =  640
Took 9 samples...
Bot right : X = 3155 Y =  591
Took 6 samples...
Bot left : X = 3222 Y = 3506
Took 4 samples...
Center : X = 2009 Y = 2082
516.207764 -0.002900 -0.130231
-31.107666 0.094908 -0.000567
Calibration constants: 33830192 -190 -8534 -2038672 6219 -37 65536
```

Les valeurs de calibrage sont stockées dans le fichier `/etc/pointercal`

![](/images/2021/10/screenCal5.png) ![](/images/2021/10/screenCal4.png) ![](/images/2021/10/screenCal3.png)
![](/images/2021/10/screenCal2.png) ![](/images/2021/10/screenCal.png)

Vous pouvez tester la bonne calibration avec le programme `ts_test`.

Pour Waveshare 3.5 rev A, si vous ne voulez pas calibrer vous pouvez créer le fichier `/etc/pointercal` avec les valeurs suivantes

```
-90 -8340 33390348 6009 -220 -1079364 65536 480 320 0
```

Pour Waveshare 3.5 rev C, si vous ne voulez pas calibrer vous pouvez créer le fichier `/etc/pointercal` avec ces valeurs

```
184 8565 -2704012 -5589 -130 22035352 65536 480 320 0
```

```
sudo -s
TSLIB_FBDEVICE=/dev/fb1 TSLIB_TSDEVICE=/dev/input/touchscreen ts_test
```

![](/images/2021/10/screenTest2.png) ![](/images/2021/10/screenTest.png)

### Logging en Ram

Pour éviter de nombreux Read/Write sur la carte SD, ce qui n'est pas bon pour sa durée de vie, il est préférable de mettre les logs dans la RAM.

```
sudo nano /etc/fstab
```

et ajoutez

```
tmpfs /tmp tmpfs defaults,noatime,nosuid,size=10m 0 0
tmpfs /var/tmp tmpfs defaults,noatime,nosuid,size=10m 0 0
tmpfs /var/log tmpfs defaults,noatime,nosuid,mode=0755,size=10m 0 0
```

### Configuration IP statique

Nous devons mettre notre raspberry pi et la Netdimm dans le même réseau pour les connecter. Nous allons donc fixer l'IP du raspberry pi à `192.168.1.99` et il faut fixer l'IP de la netdimm dans ce même réseau (par exemple `192.168.1.2`.

Nous devons éditer le fichier `/etc/dhcpcd.conf`

```
sudo nano /etc/dhcpcd.conf
```

et ajouter à la fin du fichier

```
# fallback to static profile on eth0
interface eth0
#fallback static_eth0
static ip_address=192.168.1.99/24
static routers=192.168.1.254
# in case of a local network connected and configured to internet
# to be able to get packages and make updates (google DNS ip address)
static domain_name_servers=8.8.8.8
```

### Ajouter les roms dans Naomi Netboot

Les roms sont stockées dans `/home/pi/pidimboot/roms` et nous créons le fichier `autoboot.txt` qui est utilisé pour lancer un seul jeu au démarrage.

```
mkdir -p /home/pi/pidimboot/roms
sudo mkdir /boot/pidimboot
sudo touch /boot/pidimboot/autoboot.txt
```

Pour installer des roms sur votre SD, vous aurez besoin d'un OS linux pour pouvoir lire/écrire le système de fichiers ext4 à partir d'un lecteur de carte. Vous pouvez transférer des roms par SSH depuis un ordinateur linux dans le même réseau en utilisant `scp`.

Depuis un ordinateur windows dans le même réseau, vous pouvez transférer avec SSH à travers le réseau avec `winscp` grâce au protocole SFTP.

![](/images/2021/10/winscp.png)

Utilisez l'IP de raspberry pi `192.168.1.99` identifiant `pi` mot de passe  `raspberry`.

![](/images/2021/10/winscp2.png)

Acceptez la connexion

![](/images/2021/10/winscp3.png)

Maintenant vous pouvez transférer simplement vos roms dans le répertoire `/home/pi/pidimboot/roms`.

### Lancement automatique de l'application Naomi Netboot au démarrage

```
cd ~
nano .bashrc
```

ajoutez en fin de fichier

```
if [ -n "$SSH_CLIENT" ] || [ -n "$SSH_TTY" ]; then
	echo "Welcome SSH"
else
  clear
  sudo python /opt/pidimboot/main.py
fi
```

### Ajout vidéo de boot

Voici le fichier `splashscreen.service`

```
[Unit]
Description=Splash screen
DefaultDependencies=no
After=local-fs.target

[Service]
#ExecStart=/usr/bin/fbi -d /dev/fb1 --noverbose -a /opt/pidimboot/splashscreen/splashscreen.png
ExecStart=/home/pi/splash.sh
StandardInput=tty
StandardOutput=tty

[Install]
WantedBy=sysinit.target
```

On le copie dans le répertoire `/etc/systemd/system` et on active le service

```
cd /opt/pidimboot/
sudo cp splashscreen.service /etc/systemd/system
sudo systemctl enable splashscreen.service
```

### Réglage de /boot/cmdline.txt

Pour éviter que les logs n'apparaissent au boot, on ajoute en fin de ligne

`logo.nologo`

```
console=serial0,115200 console=tty1 loglevel=3 vt.global_cursor_default=0 root=PARTUUID=74f8f662-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait logo.nologo quiet
```

### Activation du mode veille

Il existe deux façons de faire fonctionner le mode veille :

- avec la gestion du rétroéclairage (pour les écrans qui gèrent cette fonction)
- en affichant une image noire à l'écran (pour les écrans sans gestion du rétro-éclairage)

Pour utiliser la première fonctionnalité, vous aurez besoin d'un écran tft avec gestion du rétro-éclairage. La plupart du temps, cela se fait par le biais du GPIO 18 et d'une commande PWM.

Cette fonctionnalité a été développée pour les écrans tft Waveshare 3.5 revB et revC :

[https://www.waveshare.com/wiki/3.5inch\_RPi\_LCD\_(B)](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B))

[https://www.waveshare.com/wiki/3.5inch\_RPi\_LCD\_(C)](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C))

Selon le wiki Waveshare, pour permettre la gestion du rétro-éclairage, il faut souder une résistance 0R sur ce pad ou souder directement pour le connecter (voir ci-dessous).

![](/images/2021/10/waveshareRevCSoldering.jpg)

Ensuite il suffit de configurer la variable `timout` dans le fichier `/opt/pidimboot/consts.py` en passant de :

```
timeout = -1 #in ms. -1 -> no sleep mode
backlightPWM = False # True for screen with backlight management on gpio 18
```

à

```
timeout = 90000 #in ms. -1 -> no sleep mode here we have 1 minute 30s before sleep mode
backlightPWM = True # True for screen with backlight management on gpio 18
```

pour activer l'extinction de l'écran 1m30s timeout après la dernière action sur l'écran tactile.

<figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/i3WND4TNgwk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

Pour utiliser cette fonction avec le deuxième type d'écran (waveshare 3.5" revA par exemple)

```
timeout = 90000 #in ms. -1 -> no sleep mode here we have 1 minute 30s before sleep mode
backlightPWM = False # True for screen with backlight management on gpio 18
```

Vous obtiendrez un écran noir après 1m30s d'inactivité.

<figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/yP-XVZBVGYY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

## Projet en fonctionnement

![](/images/2021/10/netboot2Gens.jpg) ![](/images/2021/10/netbootUploadBorderDown.jpg) ![](/images/2021/10/netbootUploadDOA3.jpg)
![](/images/2021/10/netbootUploadDOA2.jpg) ![](/images/2021/10/netbootUploadDOA.jpg)
![](/images/2021/10/netbootUploadMS6.jpg) ![](/images/2021/10/netbootUpload.jpg)

# Credits

- Thanks ezechiel for his great job on pidimboot [https://gitlab.com/ezechiel/pidimboot](https://gitlab.com/ezechiel/pidimboot)
- Thanks inquisitom for his new UI and new snapshots
- Thanks triforcetools and travistyoj for PiforceTools.
- Thanks darksoft for killer Atomiswave conversions.
- Thanks Mr\_lune (NeoArcadia) for Covers Picture artset game.
- Thanks Aetios, Squallrs et Pourq (NeoArcadia) for design and create STL Naomi Cabinet Integration.
