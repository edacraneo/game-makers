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
<p>Naomi NetBoot <a href="https://gitlab.com/ian57/pidimboot">https://gitlab.com/ian57/pidimboot</a> est basé sur l'excellent projet PiDimBoot (<a href="https://gitlab.com/ezechiel/pidimboot">https://gitlab.com/ezechiel/pidimboot</a>) de ezechiel, également basé sur PiforceTools (<a href="https://github.com/travistyoj/piforcetools">https://github.com/travistyoj/piforcetools</a>) pour charger des jeux sur Sega Netdimm (Naomi 1 et 2, TriForce, Chihiro) avec Raspberry et un écran Lcd tactile résistif 3.5" (320x480).<br>J'ai utilisé un écran geekcreit 3.5" 480x320 bon marché de <a href="https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html">https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html</a> qui est un clone du waveshare <a href="https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(A)">https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(A)</a> (le rétro-éclairage ne peut pas être réglé, vous aurez besoin du revB ou revC pour le faire <a href="https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B)">https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B)</a>, <a href="https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C)">https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C)</a>)<br>Mon code source est 100% GRATUIT, OPEN SOURCE, et FORKABLE :)<br>Merci pas de business, pas d'argent pour cette application, c'est seulement GRATUIT.</p><hr><h2 id="quoi-de-neuf">Quoi de neuf ?</h2><p>Ce fork utilise le dernier Rasbian OS Lite (Raspbian GNU/Linux 10) pour éviter les logiciels inutiles (comme xorg), et faire une image plus légère (1.6 GB sans roms).</p><!--: markdown--><pre><code>Sys. de fichiers blocs de 1K Utilisé Disponible Uti% Monté sur
/dev/root 7261112 1626564 5306428 24% / 
/dev/mmcblk0p1 258095 48804 209292 19% /boot
</code></pre>
<!--: markdown--><p>J'ai changé le thème pour me rapprocher des couleurs originales de Naomi. J'ai changé les polices de caractères pour qu'elles soient plus lisibles (OMHO).<br>Ce projet peut être lancé sur un PC (pour le développement, ou l'utilisation) grâce au switch "osType" dans <em>const.py</em>. Il suffit d'adapter les répertoires à vos besoins.</p><p><br>Le patch "DIMM_CheckOff" est ajouté, évitant à la borne de vérifier la ram avant de lancer le jeu, ce qui permet de gagner un temps précieux.</p><p><br>J'ai ajouté un "sleep mode" qui éteint l'écran après un temps fixe, et une simple pression sur l'écran tactile le rallume. Dans le cas d'un écran tft qui permet la gestion du rétro-éclairage (waveshare 3.5 revB ou revC) l'extinction est progressive par rétro-éclairage de l'écran. Dans le cas d'un écran sans gestion du rétro-éclairage, une image noire est affichée pour simuler l'extinction.<br>voir section "Activation du mode veille".</p><h2 id="nouvelle-interface">Nouvelle interface</h2><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/screen9.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen8.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen7.png" width="480" height="320" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/screen6.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen5.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen4.png" width="480" height="320" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/screen3.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen2.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen1.png" width="480" height="320" loading="lazy" alt></div></div></div></figure><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/screen18.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen17.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen16.png" width="480" height="320" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/screen15.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen14.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen13.png" width="480" height="320" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/screen12.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen11.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screen10.png" width="480" height="320" loading="lazy" alt></div></div></div></figure><h2 id="vid%C3%A9os">Vidéos</h2><h3 id="boot">Boot </h3><figure class="gm-embed "><iframe width="200" height="113" src="https://www.youtube.com/embed/fM5QfNOL61w?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>Boot écran 3.5 Waveshare RevA</figcaption></figure><figure class="gm-embed "><iframe width="200" height="113" src="https://www.youtube.com/embed/Uuy6FNywZF4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>Boot écran Waveshare 3.5 RevC</figcaption></figure><h3 id="interface">Interface</h3><figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/FzK1-MPqmy4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure><h2 id="informations-importantes">Informations importantes</h2><ol><li>Liste des jeux compatibles : <a href="https://drive.google.com/file/d/1AhWIBGnlyyTDlshie6sODfSJadcdYxgx/view" rel="nofollow noreferrer noopener">https://drive.google.com/file/d/1AhWIBGnlyyTDlshie6sODfSJadcdYxgx/view</a></li></ol><p>Vidéos montrant les fonctionnalités principales (avec l'ancienne interface) :</p><ol><li>Démarrage : <a href="https://youtu.be/7DgBk39FfiE" rel="nofollow noreferrer noopener">https://youtu.be/7DgBk39FfiE</a></li><li>Configuration Virtual Zero Key Chip : <a href="https://youtu.be/M7UVBQ0CILQ" rel="nofollow noreferrer noopener">https://youtu.be/M7UVBQ0CILQ</a></li><li>Configuration adresse IP par système : <a href="https://youtu.be/dNdGQEcgTYQ" rel="nofollow noreferrer noopener">https://youtu.be/dNdGQEcgTYQ</a></li><li>Navigation dans PiDimBoot, par système et par genre : <a href="https://youtu.be/xq9jMqT8gOU" rel="nofollow noreferrer noopener">https://youtu.be/xq9jMqT8gOU</a></li><li>Téléverser un jeu : <a href="https://youtu.be/vflhOEDOe5Q" rel="nofollow noreferrer noopener">https://youtu.be/vflhOEDOe5Q</a></li><li>Gestion des jeux favoris : <a href="https://youtu.be/9S-s0mjNalg" rel="nofollow noreferrer noopener">https://youtu.be/9S-s0mjNalg</a></li><li>Téléverser un jeu unique au boot : <a href="https://youtu.be/cApJJM8fajM" rel="nofollow noreferrer noopener">https://youtu.be/cApJJM8fajM</a></li><li>Arrêt de PiDimBoot et Raspberry : <a href="https://youtu.be/XCpo7qEe0-U" rel="nofollow noreferrer noopener">https://youtu.be/XCpo7qEe0-U</a></li></ol><h2 id="mise-en-route">Mise en route</h2><p><br>Vous aurez besoin des éléments suivants pour utiliser Naomi Netboot :</p><!--: markdown--><ul>
<li>Un Raspberry Pi 3 - <a href="http://www.raspberrypi.org/">http://www.raspberrypi.org/</a> (n'utilisez pas le Pi4, il est en fait impossible de faire tourner l'écran sans Xorg !)</li>
<li>Une carte SD (Minimum 4GB, mais je recommande à 8GB ou 64GB pour les jeux full-set)Un écran tactile LCD résistif 320x480 - (exemples : <a href="https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html">https://fr.banggood.com/3_5-Inch-320-X-480-TFT-LCD-Display-Touch-Board-For-Raspberry-Pi-2-Model-B-RPI-B-p-1023432.html</a> <a href="https://www.amazon.fr/gp/product/B07NTH1JWH/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&amp;psc=1">https://www.amazon.fr/gp/product/B07NTH1JWH/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&amp;psc=1</a>, un autre qui est moins cher est ici <a href="https://fr.aliexpress.com/item/4001248404892.html">https://fr.aliexpress.com/item/4001248404892.html</a>. Je vais donner la configuration dans la suite.</li>
<li>Un système d'arcade Naomi, Triforce, ou Chihiro. Une Netdimm avec un Zero Key Chip installé. Je ne peux pas fournir de liens pour cela, mais une simple recherche Google vous permettra d'obtenir ce dont vous avez besoin.  Le Netdimm devra être configuré.</li>
<li>Un cable croisé RJ45 see (<a href="https://en.wikipedia.org/wiki/Ethernet_crossover_cable">https://en.wikipedia.org/wiki/Ethernet_crossover_cable</a>). Il est impératif qu'il soit croisé.</li>
</ul>
<!--: markdown--><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/naomieeprompic.jpg" width="600" height="338" loading="lazy" alt></div><div ><img src="/images/2021/10/naomieeprom4.02.jpg" width="600" height="338" loading="lazy" alt></div><div ><img src="/images/2021/10/naomizerokey.jpg" width="600" height="338" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/naomiCheck.jpg" width="600" height="338" loading="lazy" alt></div><div ><img src="/images/2021/10/netdimm.jpg" width="600" height="763" loading="lazy" alt></div></div></div></figure><h2 id="installation">Installation</h2><figure class="gm-figure"><img src="/images/2021/10/warning.png"  alt loading="lazy" width="200" height="167"></figure><p><strong><em>Pour éviter un repartionnement et déplacement hasardeux des FAT32 et EXT4 pour permettre la dépose des roms depuis un OS Windows, sur mon image, les roms sont à déposer sur la partition EXT4. Vous ne pourrez pas donc le faire directement depuis une poste Windows en insérant la carte SD dans votre lecteur. Vous devrez soit utiliser une poste Linux pour effectuer votre copie, ou encore connecter votre Raspberry à votre réseau personnel et téléverser les roms comme décrit plus bas. </em></strong></p><h3 id="installation-facile-avec-le-fichier-img">Installation facile avec le fichier img</h3><p><br>Voici un lien vers une image avec Naomi Netboot  déjà installée, basée sur RaspbianOS Lite (Debian10) :</p><figure class="gm-figure"><img src="/images/2021/10/sdNaomiNetboot.png"  alt loading="lazy" width="200" height="263"></figure><p><a href="https://mega.nz/file/o5UxXAzI#9PnPvnSd2mBdtCQsdxuxhTX19hvLYNJiyKRTCyd6jQM">https://mega.nz/file/o5UxXAzI#9PnPvnSd2mBdtCQsdxuxhTX19hvLYNJiyKRTCyd6jQM</a></p><!--: markdown--><p>Dézippez et gravez simplement l'image sur une carte µSD de 8GB, branchez-la et démarrez le Raspberry Pi 3.</p>
<pre><code>unzip NaomiNetboot_Pi3_8Go.zip
sudo dd if=NaomiNetboot_Pi3_8Go.img of=/dev/mmcblk0 bs=1M status=progress &amp;&amp; sync
</code></pre>
<p>sur mon NUC, <code>/dev/mmcblk0</code>   est le lecteur de carte SD. Vous pouvez utiliser win32diskimager ou Raspberry Pi Imager <a href="https://www.raspberrypi.org/software/">https://www.raspberrypi.org/software/</a> pour créer la carte SD.</p>
<p><strong>Attention</strong> En fonction de votre écran, vous aurez peut-être besoin de recalibrer l'écran tactile. Veuillez vous référer au paragraphe sur la calibration ci-dessous pour connaître la procédure.</p>
<!--: markdown--><p>Un fois tout ceci réalisé, il faut ensuite ajouter les roms sur la carte SD.</p><h2 id="manuellement">Manuellement</h2><h3 id="installer-los-et-les-paquets-utiles-sur-sd">Installer l'OS et les paquets utiles sur SD</h3><p>Téléchargez et installez le dernier Raspbian OS Lite <a href="https://www.raspberrypi.org/downloads/raspbian/">https://www.raspberrypi.org/downloads/raspbian/</a>, en fait Debian 10 Lite : <a href="https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip">https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip</a></p><p>Avec linux vous pouvez utiliser dd pour graver votre SD :</p><!--: markdown--><pre><code>unzip 2021-05-07-raspios-buster-armhf-lite.zip 
sudo dd if=2021-05-07-raspios-buster-armhf-lite.img of=/dev/mmcblk0 bs=1M status=progress &amp;&amp; sync
</code></pre>
<!--: markdown--><p><strong>En fait, vous devriez connecter un écran et un clavier à votre pi ou utiliser SSH depuis un autre ordinateur pour effectuer toutes les configurations avant de mettre en place l'écran tft.</strong></p><figure class="gm-figure"><img src="/images/2021/10/bothscreens.jpg"  alt loading="lazy" width="600" height="1067"></figure><h3 id="installation-de-paquets-utiles">Installation de paquets utiles</h3><p><br>Afin d'installer Naomi Netboot et d'utiliser l'écran TFT, nous aurons besoin de quelques nouveaux paquets</p><!--: markdown--><pre><code>sudo apt-get remove --purge bluez bluez-firmware pi-bluetooth triggerhappy build-essential
sudo apt autoremove
sudo apt install --no-install-recommends evtest raspi-config libts-bin python-pygame fbi wiringpi libjpeg8 omxplayer 
</code></pre>
<!--: markdown--><p>Installation de Git pour télécharger Naomi NetBoot</p><!--: markdown--><pre><code>sudo apt-get install git
</code></pre>
<!--: markdown--><h3 id="configuration-de-lautologin">Configuration de l'autologin</h3><!--: markdown--><p>Pour exécuter Naomi Netboot au démarrage, nous devons nous authentifier, pour cela il suffit d'exécuter <code>raspi-config</code> :</p>
<pre><code>sudo raspi-config
</code></pre>
<p>Choisissez System Option -&gt; Boot / Auto login -&gt; Console Autologin, validez et quittez. Vous pouvez redémarrer pour voir si cela fonctionne.</p>
<!--: markdown--><h3 id="installation-de-naomi-netboot-dans-opt">Installation de Naomi NetBoot dans /opt</h3><!--: markdown--><p>On commence par devenir <code>root</code> :</p>
<pre><code>sudo -s
</code></pre>
<p>Installez le système Naomi NetBoot dans <code>/opt</code></p>
<pre><code>cd /opt
git clone https://gitlab.com/ian57/pidimboot.git pidimboot
</code></pre>
<p>En faisant cela, il sera facile d'obtenir la prochaine mise à jour avec un simple <code>git pull</code>.</p>
<!--: markdown--><h3 id="installation-des-pilotes-tft">Installation des pilotes TFT<br></h3><!--: markdown--><p>(la plupart des écrans 480x320 utilisent le pilote de superposition waveshare35a)Les pilotes Waveshare sont disponibles sur <a href="https://github.com/swkim01/waveshare-dtoverlays">https://github.com/swkim01/waveshare-dtoverlays</a></p>
<pre><code>git clone https://github.com/swkim01/waveshare-dtoverlays
cd waveshare-dtoverlays
sudo cp *.dtbo /boot/overlays/
</code></pre>
<p>Dans le cas de la Waveshare 3.5 rev C il y a un problème avec les overlays swkim01 (l'écran tactile ne peut pas être initialisé voir <a href="https://github.com/swkim01/waveshare-dtoverlays/issues/34">https://github.com/swkim01/waveshare-dtoverlays/issues/34</a>). Vous devrez utiliser l'overlay original de <a href="https://github.com/waveshare/LCD-show">https://github.com/waveshare/LCD-show</a> ou du répertoire <code>waveshare-overlays</code> du projet Naomi Netboot. Ce répertoire contient des versions renommées des fichiers dtb de waveshare github).</p>
<pre><code>cd /opt/pidimboot/waveshare-dtoverlays
sudo cp waveshare35c.dtbo /boot/overlays/
</code></pre>
<!--: markdown--><h3 id="installation-de-binaires-et-de-scripts-utiles">Installation de binaires et de scripts utiles</h3><!--: markdown--><p>J'ai utilisé  <code>fbcp</code> avec <code>omxplayer</code> et <code>fbv</code> pour afficher respectivement la vidéo et l'image de démarrage. Ils ne sont pas inclus dans le paquetage du système d'exploitation Raspbian, nous devons donc les copier dans le répertoire <code>/usr/bin</code> :</p>
<pre><code>cd /opt/pidimboot/binariessudo 
cp fbcp fbv2 /usr/bin
</code></pre>
<p>J'ai créé un petit script pour lier toutes les commandes afin d'afficher la vidéo et l'image de démarrage.</p>
<pre><code>cd /opt/pidimboot/binariescp splash.sh /home/pi
chmod 755 /home/pi/splash.sh
</code></pre>
<p>Script <code>splash.sh</code></p>
<pre><code>#!/bin/bash
(/usr/bin/fbcp &amp;) &amp;&amp; /usr/bin/omxplayer --aspect-mode stretch /opt/pidimboot/splashscreen/introNaomiNetbootV2.mp4 &amp;&gt; /dev/null &amp;&amp; /usr/bin/killall fbcp &amp;&gt; /dev/null
#clear
#sleep(1)
#FRAMEBUFFER=/dev/fb1 /usr/bin/fbv2 -e #/opt/pidimboot/splashscreen/splashscreen3.png &amp;&gt; /dev/null
</code></pre>
<!--: markdown--><h3 id="configuration-de-l%C3%A9cran-tft">Configuration de l'écran TFT</h3><!--: markdown--><p>Ajoutez les lignes suivantes au fichier <code>/boot/config.txt</code>, nous devons faire tourner l'écran de 90°, car la résolution du matériel est de 320x480, et non de 480x320 !<br>
commentez les lignes <code>hdmi*</code> suivantes pour obtenir les deux écrans (hdmi + tft sur spi)</p>
<pre><code>#hdmi_force_hotplug=1
#hdmi_cvt=480 320 60 6 0 0 0
#hdmi_group=2
#hdmi_mode=87
dtparam=spi=on
dtoverlay=waveshare35a:rotate=90,speed=27000000
</code></pre>
<p>Maintenant vous pouvez redémarrer, votre écran devrait passer du blanc au noir au démarrage. Rien de plus. S'il passe au noir, l'écran est configuré, sinon, quelque chose s'est mal passé! Vous devez vérifier que vous utilisez le bon overlay. Si vous utilisez une Rev B ou une Rev C de l'écran waveshare, pensez à modifier la variable dtoverlay avec les bons overlays</p>
<pre><code>#Rev A
#dtoverlay=waveshare35a:rotate=90,speed=27000000
#Rev B
#dtoverlay=waveshare35b:rotate=90,speed=27000000
#Rev C speed=125000000 -&gt; 125MHz HighSpeed SPI
#dtoverlay=waveshare35c:rotate=270,speed=2400000000
</code></pre>
<p>Cette image utilise les overlays <code>waveshare35a.dtbo</code>, qui est un &quot;standard&quot; pour les écrans chinois 3.5&quot; 320x480 tft. Si vous utilisez un écran adafruit, pensez à changer pour <code>pitft35-resistive.dtbo</code> dans le fichier  <code>/boot/config.txt</code> comme ceci :</p>
<pre><code>dtparam=spi=on
dtoverlay=pitft35-resistive,rotate=90,speed=20000000,fps=20
</code></pre>
<p>Vous pouvez vérifier que le bon overlay est chargé au démarrage avec la commande suivante :</p>
<pre><code>sudo vcdbg log msg
</code></pre>
<p>une ligne comme la suivante devrait se trouver ici :</p>
<pre><code>001462.509 : brfs : Fichier lu : /mfs/sd/overlays/waveshare35a.dtbo
001473.419 : Chargement de l'overlay 'waveshare35a'.
001473.436 : dtparam : rotate=90
001474.280 : dtparam : speed=27000000
</code></pre>
<p>après vous pouvez vérifier que l'écran est correctement configuré avec :</p>
<pre><code>$ dmesg | grep fb1
[8.306043] graphics fb1 : fb_ili9486 frame buffer, 480x320, 300 KiB mémoire vidéo, 32 KiB mémoire tampon, fps=33, spi0.0 at 27 MHz
</code></pre>
<p>Ça devrait être bon.</p>
<!--: markdown--><h3 id="cr%C3%A9er-des-r%C3%A8gles-udev-exemple-pour-mon-%C3%A9cran-adafruit-est-une-valeur-diff%C3%A9rente">Créer des règles udev (Exemple : Pour mon écran, Adafruit est une valeur différente)</h3><!--: markdown--><p>Ceci permet au système de reconnaître l'écran tactile comme une entrée.</p>
<pre><code>sudo nano /etc/udev/rules.d/29-ads7846.rules
</code></pre>
<p>ajoutez</p>
<pre><code>SUBSYSTEM==&quot;input&quot;, KERNEL==&quot;event[0-9]*&quot;, ATTRS{name}==&quot;Ecran tactile ADS7846&quot;, SYMLINK+=&quot;input/touchscreen&quot;
</code></pre>
<p>recharger les règles udev :</p>
<pre><code>sudo udevadm control --reload-rules
</code></pre>
<p>Vérifiez que <code>/dev/input/touchscreen</code> existe et vous pouvez utiliser <code>evtest</code> pour vérifier que l'écran tactile fonctionne.</p>
<pre><code># evtest 
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:	ADS7846 Touchscreen
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x0 vendor 0x0 product 0x0 version 0x0
Input device name: &quot;ADS7846 Touchscreen&quot;
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
</code></pre>
<!--: markdown--><h3 id="passage-de-larchitecture-pc-%C3%A0-larchitecture-rpi">Passage de l'architecture PC à l'architecture RPI</h3><!--: markdown--><p>Il suffit de modifier le fichier <code>const.py</code> comme suit</p>
<pre><code>osType = &quot;RPI&quot; # &quot;PC&quot; ou &quot;RPI&quot;.
</code></pre>
<p>C'est tout !</p>
<p><strong>IMPORTANT :</strong> Remplacement de la libsdl1.2</p>
<p>Il y a un bug avec l'écran tactile entre libsdl 1.2 et pygame. La libsdl debian originale empêche Naomi Netboot de fonctionner, car l'écran tactile ne fonctionne pas bien ! Nous devons installer une version corrigée de la bibliothèque.Voir <a href="https://www.raspberrypi.org/forums/viewtopic.php?t=250001">https://www.raspberrypi.org/forums/viewtopic.php?t=250001</a> pour plus de détails.</p>
<pre><code>sudo -scd /opt/pidimboot/SDLLibDebian
sudo dpkg -i libsdl1.2debian_1.2.15+veloci1-1_armhf.deb
</code></pre>
<p>et vérifiez la bonne installation</p>
<pre><code>dpkg -l | grep sdl1.2
ii libsdl1.2debian:armhf 1.2.15+veloci1-1 armhf Simple DirectMedia Layer
</code></pre>
<!--: markdown--><h3 id="calibrage-de-l%C3%A9cran-tactile">Calibrage de l'écran tactile</h3><p>L'écran tactile doit être calibré pour obtenir les bonnes coordonnées de votre doigt :</p><!--: markdown--><pre><code>sudo -s
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
</code></pre>
<p>Les valeurs de calibrage sont stockées dans le fichier <code>/etc/pointercal</code></p>
<!--: markdown--><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/screenCal5.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screenCal4.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screenCal3.png" width="480" height="320" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/screenCal2.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screenCal.png" width="480" height="320" loading="lazy" alt></div></div></div></figure><!--: markdown--><p>Vous pouvez tester la bonne calibration avec le programme <code>ts_test</code>.<br>
Pour Waveshare 3.5 rev A, si vous ne voulez pas calibrer vous pouvez créer le fichier <code>/etc/pointercal</code> avec les valeurs suivantes</p>
<pre><code>-90 -8340 33390348 6009 -220 -1079364 65536 480 320 0
</code></pre>
<p>Pour Waveshare 3.5 rev C, si vous ne voulez pas calibrer vous pouvez créer le fichier <code>/etc/pointercal</code> avec ces valeurs</p>
<pre><code>184 8565 -2704012 -5589 -130 22035352 65536 480 320 0
</code></pre>
<pre><code>sudo -s
TSLIB_FBDEVICE=/dev/fb1 TSLIB_TSDEVICE=/dev/input/touchscreen ts_test
</code></pre>
<!--: markdown--><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/screenTest2.png" width="480" height="320" loading="lazy" alt></div><div ><img src="/images/2021/10/screenTest.png" width="480" height="320" loading="lazy" alt></div></div></div></figure><h3 id="logging-en-ram">Logging en Ram</h3><!--: markdown--><p>Pour éviter de nombreux Read/Write sur la carte SD, ce qui n'est pas bon pour sa durée de vie, il est préférable de mettre les logs dans la RAM.</p>
<pre><code>sudo nano /etc/fstab
</code></pre>
<p>et ajoutez</p>
<pre><code>tmpfs /tmp tmpfs defaults,noatime,nosuid,size=10m 0 0
tmpfs /var/tmp tmpfs defaults,noatime,nosuid,size=10m 0 0
tmpfs /var/log tmpfs defaults,noatime,nosuid,mode=0755,size=10m 0 0
</code></pre>
<!--: markdown--><h3 id="configuration-ip-statique">Configuration IP statique</h3><!--: markdown--><p>Nous devons mettre notre raspberry pi et la Netdimm dans le même réseau pour les connecter. Nous allons donc fixer l'IP du raspberry pi à <code>192.168.1.99</code> et il faut fixer l'IP de la netdimm dans ce même réseau (par exemple <code>192.168.1.2</code>.<br>
Nous devons éditer le fichier <code>/etc/dhcpcd.conf</code></p>
<pre><code>sudo nano /etc/dhcpcd.conf
</code></pre>
<p>et ajouter à la fin du fichier</p>
<pre><code># fallback to static profile on eth0
interface eth0
#fallback static_eth0
static ip_address=192.168.1.99/24
static routers=192.168.1.254
# in case of a local network connected and configured to internet
# to be able to get packages and make updates (google DNS ip address)
static domain_name_servers=8.8.8.8
</code></pre>
<!--: markdown--><h3 id="ajouter-les-roms-dans-naomi-netboot">Ajouter les roms dans Naomi Netboot</h3><!--: markdown--><p>Les roms sont stockées dans <code>/home/pi/pidimboot/roms</code> et nous créons le fichier <code>autoboot.txt</code> qui est utilisé pour lancer un seul jeu au démarrage.</p>
<pre><code>mkdir -p /home/pi/pidimboot/roms
sudo mkdir /boot/pidimboot
sudo touch /boot/pidimboot/autoboot.txt
</code></pre>
<!--: markdown--><!--: markdown--><p>Pour installer des roms sur votre SD, vous aurez besoin d'un OS linux pour pouvoir lire/écrire le système de fichiers ext4 à partir d'un lecteur de carte. Vous pouvez transférer des roms par SSH depuis un ordinateur linux dans le même réseau en utilisant <code>scp</code>.<br>
Depuis un ordinateur windows dans le même réseau, vous pouvez transférer avec SSH à travers le réseau avec <code>winscp</code> grâce au protocole SFTP.</p>
<!--: markdown--><figure class="gm-figure"><img src="/images/2021/10/winscp.png"  alt loading="lazy" width="626" height="423"></figure><!--: markdown--><p>Utilisez l'IP de raspberry pi <code>192.168.1.99</code> identifiant <code>pi</code> mot de passe  <code>raspberry</code>.</p>
<!--: markdown--><figure class="gm-figure"><img src="/images/2021/10/winscp2.png"  alt loading="lazy" width="462" height="275"></figure><!--: markdown--><p>Acceptez la connexion</p>
<!--: markdown--><figure class="gm-figure"><img src="/images/2021/10/winscp3.png"  alt loading="lazy" width="1076" height="693"></figure><!--: markdown--><p>Maintenant vous pouvez transférer simplement vos roms dans le répertoire <code>/home/pi/pidimboot/roms</code>.</p>
<!--: markdown--><h3 id="lancement-automatique-de-lapplication-naomi-netboot-au-d%C3%A9marrage">Lancement automatique de l'application Naomi Netboot au démarrage</h3><!--: markdown--><pre><code>cd ~
nano .bashrc
</code></pre>
<p>ajoutez en fin de fichier</p>
<pre><code>if [ -n &quot;$SSH_CLIENT&quot; ] || [ -n &quot;$SSH_TTY&quot; ]; then
	echo &quot;Welcome SSH&quot;
else
  clear
  sudo python /opt/pidimboot/main.py
fi
</code></pre>
<!--: markdown--><h3 id="ajout-vid%C3%A9o-de-boot">Ajout vidéo de boot</h3><!--: markdown--><p>Voici le fichier <code>splashscreen.service</code></p>
<pre><code>[Unit]
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

</code></pre>
<p>On le copie dans le répertoire <code>/etc/systemd/system</code> et on active le service</p>
<pre><code>cd /opt/pidimboot/
sudo cp splashscreen.service /etc/systemd/system
sudo systemctl enable splashscreen.service
</code></pre>
<!--: markdown--><h3 id="r%C3%A9glage-de-bootcmdlinetxt">Réglage de /boot/cmdline.txt</h3><!--: markdown--><p>Pour éviter que les logs n'apparaissent au boot, on ajoute en fin de ligne<br>
<code>logo.nologo</code></p>
<pre><code>console=serial0,115200 console=tty1 loglevel=3 vt.global_cursor_default=0 root=PARTUUID=74f8f662-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait logo.nologo quiet
</code></pre>
<!--: markdown--><h3 id="activation-du-mode-veille">Activation du mode veille</h3><!--: markdown--><p>Il existe deux façons de faire fonctionner le mode veille :</p>
<ul>
<li>avec la gestion du rétroéclairage (pour les écrans qui gèrent cette fonction)</li>
<li>en affichant une image noire à l'écran (pour les écrans sans gestion du rétro-éclairage)</li>
</ul>
<p>Pour utiliser la première fonctionnalité, vous aurez besoin d'un écran tft avec gestion du rétro-éclairage. La plupart du temps, cela se fait par le biais du GPIO 18 et d'une commande PWM.<br>
Cette fonctionnalité a été développée pour les écrans tft Waveshare 3.5 revB et revC :</p>
<p><a href="https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B)">https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(B)</a><br>
<a href="https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C)">https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(C)</a></p>
<p>Selon le wiki Waveshare, pour permettre la gestion du rétro-éclairage, il faut souder une résistance 0R sur ce pad ou souder directement pour le connecter (voir ci-dessous).</p>
<!--: markdown--><figure class="gm-figure"><img src="/images/2021/10/waveshareRevCSoldering.jpg"  alt loading="lazy" width="2000" height="1656"></figure><!--: markdown--><p>Ensuite il suffit de configurer la variable <code>timout</code> dans le fichier <code>/opt/pidimboot/consts.py</code> en passt de :</p>
<pre><code>timeout = -1 #in ms. -1 -&gt; no sleep mode
backlightPWM = False # True for screen with backlight management on gpio 18
</code></pre>
<p>à</p>
<pre><code>timeout = 90000 #in ms. -1 -&gt; no sleep mode here we have 1 minutes 30s before sleep mode
backlightPWM = True # True for screen with backlight management on gpio 18
</code></pre>
<p>pour activer l'extinction de l'écran 1m30s timeout après la dernière action sur l'écran tactile.</p>
<!--: markdown--><figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/i3WND4TNgwk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure><!--: markdown--><p>Pour utiliser cette fonction avec le deuxième type d'écran (waveshare 3.5&quot; revA par exemple)</p>
<pre><code>timeout = 90000 #in ms. -1 -&gt; no sleep mode here we have 1 minutes 30s before sleep mode
backlightPWM = False # True for screen with backlight management on gpio 18
</code></pre>
<p>Vous obtiendrez un écran noir après 1m30s d'inactivité.</p>
<!--: markdown--><figure class="gm-embed"><iframe width="200" height="113" src="https://www.youtube.com/embed/yP-XVZBVGYY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure><h2 id="projet-en-fonctionnement">Projet en fonctionnement</h2><figure class="gm-gallery "><div ><div ><div ><img src="/images/2021/10/netboot2Gens.jpg" width="600" height="338" loading="lazy" alt></div><div ><img src="/images/2021/10/netbootUploadBorderDown.jpg" width="600" height="1067" loading="lazy" alt></div><div ><img src="/images/2021/10/netbootUploadDOA3.jpg" width="600" height="1067" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/netbootUploadDOA2.jpg" width="600" height="1067" loading="lazy" alt></div><div ><img src="/images/2021/10/netbootUploadDOA.jpg" width="600" height="743" loading="lazy" alt></div></div><div ><div ><img src="/images/2021/10/netbootUploadMS6.jpg" width="600" height="1067" loading="lazy" alt></div><div ><img src="/images/2021/10/netbootUpload.jpg" width="600" height="1067" loading="lazy" alt></div></div></div></figure><!--: markdown--><h1 id="credits">Credits</h1>
<ul>
<li>Thanks ezechiel for his great job on pidimboot <a href="https://gitlab.com/ezechiel/pidimboot">https://gitlab.com/ezechiel/pidimboot</a></li>
<li>Thanks inquisitom for his new UI and new snapshots</li>
<li>Thanks triforcetools and travistyoj for PiforceTools.</li>
<li>Thanks darksoft for killer Atomiswave conversions.</li>
<li>Thanks Mr_lune (NeoArcadia) for Covers Picture artset game.</li>
<li>Thanks Aetios, Squallrs et Pourq (NeoArcadia) for design and create STL Naomi Cabinet Integration.</li>
</ul>
<!--: markdown-->