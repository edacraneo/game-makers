---
title: "Votre \"multimedia center\" à base d'Odroid N2+ : Impression 3D, Son
  SPDIF, Coreelec et HyperionNG"
slug: votre-multimedia-center-a-base-dodroid-n2
date: 2022-02-27
tags:
  - media-center
authors:
  - Ian57
featured: false
feature: /images/2022/02/IMG_20220225_162852.jpg
excerpt: Cet article va vous permettre de construire votre propre "multimedia
  center" connecté, fournissant l'Ambilight sur votre TV et aussi une sortie son
  SPDIF numérique pour utiliser vo…
visible: true
---
Cet article va vous permettre de construire votre propre "multimedia center" connecté, fournissant l'Ambilight sur votre TV et aussi une sortie son SPDIF numérique pour utiliser votre Home cinéma (en coaxial ou fibre optique). Il sera basé sur un Hardkernel Odroid N2+ et utilisera la distribution Coreelec (basée sur le très bon Kodi).

<figure ><div ><figure class="gm-youtube"><iframe src="https://www.youtube.com/embed/U7QIuv42SUM" title="YouTube video" loading="lazy" allowfullscreen></iframe></figure><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button></div><div ><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span >0:00</span><div >/<span ></span></div><input type="range"  max="100" value="0"><button >1&#215;</button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range"  max="100" value="100"></div></div></div></figure>

# Liste de matériel

- 1 odroid N2+
- 1 alimentation 3A
- 1 carte SD 8Go minimum
- 1 carte d'extension pour sortie SPDIF (l'odroid N2+ possède déjà la carte son et la sortie SPDIF mais cette dernière n'a pas la connectique [https://fr.aliexpress.com/item/4000237199660.html?gatewayAdapt=glo2fra&spm=a2g0o.9042311.0.0.6ef06c37H90aO9](https://fr.aliexpress.com/item/4000237199660.html?gatewayAdapt=glo2fra&spm=a2g0o.9042311.0.0.6ef06c37H90aO9)
- 1 bande de LEDs RGB APA201 de 5m avec une densité de 30 LEDS au mètre [https://fr.aliexpress.com/item/32322326979.html?spm=a2g0o.productlist.0.0.2aa57a6cERK05v&algo\_pvid=d8ecad15-ba9b-4950-8840-549a42935e2e&algo\_exp\_id=d8ecad15-ba9b-4950-8840-549a42935e2e-0&pdp\_ext\_f={"sku\_id"%3A"67111131794"}&pdp\_pi=-1%3B46.32%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32322326979.html?spm=a2g0o.productlist.0.0.2aa57a6cERK05v&algo_pvid=d8ecad15-ba9b-4950-8840-549a42935e2e&algo_exp_id=d8ecad15-ba9b-4950-8840-549a42935e2e-0&pdp_ext_f=%7B%22sku_id%22%3A%2267111131794%22%7D&pdp_pi=-1%3B46.32%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)
- 1 alimentation 5V 10A pour la bande de LEDs (pour 102 Leds -&gt; 6.7 A) ([https://fr.aliexpress.com/item/32810906485.html?spm=a2g0o.productlist.0.0.6462f9c2ho6SEk&algo\_pvid=20dbc81e-991d-449d-a950-08bcf1128537&algo\_exp\_id=20dbc81e-991d-449d-a950-08bcf1128537-1&pdp\_ext\_f={"sku\_id"%3A"10000004015605428"}&pdp\_pi=-1%3B18.64%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32810906485.html?spm=a2g0o.productlist.0.0.6462f9c2ho6SEk&algo_pvid=20dbc81e-991d-449d-a950-08bcf1128537&algo_exp_id=20dbc81e-991d-449d-a950-08bcf1128537-1&pdp_ext_f=%7B%22sku_id%22%3A%2210000004015605428%22%7D&pdp_pi=-1%3B18.64%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)
- des fils avec connecteur dupont male et femelle
- 1 télécommande IR pour piloter l'application Kodi [https://fr.aliexpress.com/item/32829833568.html?spm=a2g0o.productlist.0.0.3c55432bHotNsE&algo\_pvid=39007215-c876-41a3-9d1d-96d6f3cccbbf&algo\_exp\_id=39007215-c876-41a3-9d1d-96d6f3cccbbf-16&pdp\_ext\_f={"sku\_id"%3A"64971523679"}&pdp\_pi=-1%3B4.96%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch](https://fr.aliexpress.com/item/32829833568.html?spm=a2g0o.productlist.0.0.3c55432bHotNsE&algo_pvid=39007215-c876-41a3-9d1d-96d6f3cccbbf&algo_exp_id=39007215-c876-41a3-9d1d-96d6f3cccbbf-16&pdp_ext_f=%7B%22sku_id%22%3A%2264971523679%22%7D&pdp_pi=-1%3B4.96%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch)

# Design et impression du boitier

Le boitier est un remix de [https://www.thingiverse.com/thing:4731369](https://www.thingiverse.com/thing:4731369) et est disponible à l'adresse : [https://www.thingiverse.com/thing:5265172](https://www.thingiverse.com/thing:5265172)

La conception a été réalisée sous Fusion 360 en modifiant les STL du projet initial. Impression réalisée sur une imprimante Creality Ender 5, en 0.2 et PLA noir

![](/images/2022/02/Capture-d--cran-2022-02-25-103216.png) ![](/images/2022/02/Capture-d--cran-2022-02-25-103810.png) ![](/images/2022/02/Capture-d--cran-2022-02-25-103828.png)
![](/images/2022/02/Capture-d--cran-2022-02-25-103847.png) ![](/images/2022/02/Capture-d--cran-2022-02-25-103900.png) ![](/images/2022/02/IMG_20220222_132453--1-.jpg)
![](/images/2022/02/IMG_20220222_132512--1-.jpg) ![](/images/2022/02/IMG_20220222_132520--1-.jpg) ![](/images/2022/02/IMG_20220222_132531--1-.jpg)

# Montage des composants dans le boitier

On commence par récupérer la PCB de la sortie SPDIF afin de la fixer sur la face arrière du boitier

![](/images/2022/02/IMG_20220225_105337.jpg)

Les pieds de l'odroid N2 sont à fixer directement sur le radiateur à l'aide de vis. J'ai utilisé des vis Teflon pour éviter tout problème de contact électrique du fait de vis métalliques.

![](/images/2022/02/IMG_20220222_132531--1--1.jpg)

Nous allons ensuite câbler les GPIOs de la sortie son.  La sortie SPDIF est localisée sur le pin 7 (GPIO 13). Il faudra aussi cabler un +5V et une masse. J'ai choisi les Pin 4 (+5V) et Pin 6 (GND). 

![](/images/2022/02/n2_pinmap.png)

La câblage de la PCB est donc très simple :

![](/images/2022/02/IMG_20220130_164335.jpg)

On prépare ensuite le câblage de notre futur système ambilight via HyperionNG. Pour cela on va utiliser le même schéma que pour le Pi3 (cf. article précédent) car le GPIO de l'Odroid N2 est identique à celui du Pi3

Pour piloter la bande de LEDs APA102 avec HyperionNG

- Pin 19 SPI0 MOSI
- Pin 20 Masse
- Pin 23 SPI0 SCLK

Le câble est donc le suivant :

![](/images/2022/02/IMG_20220225_105243.jpg) ![](/images/2022/02/IMG_20220225_105305-1.jpg)

Tout est prêt on peut refermer le boitier

![](/images/2022/02/IMG_20220225_120820.jpg) ![](/images/2022/02/IMG_20220225_121031.jpg)

![](/images/2022/02/hyperionAPA102SPI_odroidN2_bb.png)
<figcaption>Schéma de câblage</figcaption>

# Installation et configuration de LibreElec

## Création SD et premier boot

CoreELEC est une distribution Linux légère conçue pour Kodi pour les matériels AMlogic 

![](/images/2022/02/coreelecsupport.png)

La version pour Odroid N2 est disponible à l'adresse : [https://github.com/CoreELEC/CoreELEC/releases/](https://github.com/CoreELEC/CoreELEC/releases/) et la version à l'écriture de ces lignes est la 19.4\_RC3 [https://github.com/CoreELEC/CoreELEC/releases/download/19.4-Matrix\_rc3/CoreELEC-Amlogic-ng.arm-19.4-Matrix\_rc3-Odroid\_N2.img.gz](https://github.com/CoreELEC/CoreELEC/releases/download/19.4-Matrix_rc3/CoreELEC-Amlogic-ng.arm-19.4-Matrix_rc3-Odroid_N2.img.gz)

On commence par désarchiver l'image de la distribution et on crée la SD:

```
gunzip CoreELEC-Amlogic-ng.arm-19.4-Matrix_rc3-Odroid_N2.img
sudo dd bs=1M if=CoreELEC-Amlogic-ng.arm-19.4-Matrix_rc3-Odroid_N2.img of=/dev/sdg status=progress
```

Voilà c'est prêt. Si vous n'aimez pas trop Linux, vous pouvez passer par un utilitaire Windows, comme [Win32DiskImager ](https://sourceforge.net/projects/win32diskimager/)ou encore [BalenaEtcher ](https://www.balena.io/etcher/)pour créer la SD.

On peut insérer la SD dans notre joli boitier, brancher la connectique : alimentation, HDMI, câble coaxial ou fibre pour votre ampli audio/vidéo. Je vous conseille, dans la phase de configuration de brancher un clavier USB pour pouvoir naviguer simplement dans les menus de Kodi.

L'installation est très rapide et les questions posées sont peu nombreuses et concernent principalement la sélection de la langue.

Dans un premier temps on passe l'interface de Kodi en mode "Expert" afin d'avoir l'ensemble des réglages à disposition.

Normalement, la résolution graphique s'est ajustée automatiquement à votre matériel et vous n'avez rien à configurer.

![](/images/2022/02/screenshot00001.png) ![](/images/2022/02/screenshot00002.png) ![](/images/2022/02/screenshot00003.png)

## Configuration de la sortie son

Pour cela il suffit de se rendre dans la partie système de kodi et d'activer la sortie SPDIF. Mais peut-être que celle-ci fonctionne-t-elle déjà :

![](/images/2022/02/screenshot00004.png)

Normalement vous pouvez alors obtenir le son soit par la sortie Coaxiale, soit par la sortie fibre optique.

# Ambilight et hyperion

Pour la partie explication et matériel, je vous renvoie à l'article suivant

<figure ><a  href="/projets/creez-votre-multimedia-center-pi3-son-spdif-librelec-et-hyperion/"><div ><div >Créez votre “multimedia center” : Impression 3D, Pi3, Son SPDIF, Librelec et Hyperion</div><div >Cet article va vous permettre de construire votre propre “multimedia center” connecté, fournissant l’Ambilight sur votre TV et aussi une sortie son SPDIF numérique pour utiliser votre Home cinéma (en coaxial ou fibre optique). Il sera basé sur un Raspberry Pi 3 et utilisera la distribution LibreElec…</div><div ><img  src="/favicon.ico" alt=""><span >Game Makers</span><span >Ian57</span></div></div><div ><img src="/images/2022/02/IMG_9772.JPG" alt=""></div></a></figure>

La seule différence, mais de taille, est que nous utiliserons HyperionNG le successeur d’Hypérion qui ne nécessite plus d'application dédiée pour la configuration, mais utilise un service web directement accessible sur notre centre multimédia.

Après avoir réalisé le câblage des LEDS comme indiqué sur le schéma ci après

![](/images/2022/02/hyperionAPA102SPI_odroidN2_bb-1.png)

On installe l'extension Hyperion NG directement accessible depuis les dépôts Coreelec.

![](/images/2022/02/screenshot00007.png)

Puis on active le bus SPI de l'Odroid directement depuis l'interface Kodi. Ceci va nous permettre de rendre accessible le bus SPI qui permet de piloter la bande de LEDs :

![](/images/2022/02/screenshot00005.png)

Un redémarrage est nécessaire pour prendre en compte les modifications. Une fois le système redémarré, on utilise un navigateur depuis une machine dans le même réseau que votre Coreelec et on se rend à l'adresse :

```
http://adresseIPCoreElec:8090
```

ce qui donne pour moi :

```
http://192.168.1.41:8090
```

Vous obtenez normalement l'interface suivante :

![](/images/2022/02/image-3.png)

On passe l'interface en mode "Expert" en cliquant sur la petite clé en haut à gauche et en choisissant "Niveau de paramètres" :

![](/images/2022/02/image-8.png)

On va réaliser la configuration de notre bande de LED que l'on n'aura pas encore placée sur la TV.

On commence par configurer le type de leds et de controleur :

 

![](/images/2022/02/image-4.png)

Dans mon cas j'ai 102 LEDs, mais pour une bande de 5m avec 30 LEDs au mètre, vous pouvez utiliser par défaut 150 LEDs avant de recouper à la dimension nécessaire à votre TV.

Dans la partie source, on utilise une capture locale de l'image via notre processeur Amlogic

![](/images/2022/02/image-6.png)

Il est possible de configurer finement cette capture :

![](/images/2022/02/image-7.png)

Lorsque vous réalisez vos réglages, utilisez le tableau de bord pour activer/désactiver Hyperion :

![](/images/2022/02/image-5.png)

Ci dessous un petit test de validation avec une vidéo spécifique disponible sur la page [http://insaneboard.de/blog/?page\_id=24](http://insaneboard.de/blog/?page_id=24)

![](/images/2022/02/IMG_20220225_105321.jpg)

On peut alors mettre en place directement sur la TV et couper la bande de LEDs à la bonne dimension :

![](/images/2022/02/IMG_20220225_165015.jpg)

Une fois la bande collée et le système rebranché, on se rend dans la partie disposition des LEDs pour réaliser la configuration spécifique à notre TV et au montage  : nombre de leds et position de la première LEDs afin de synchroniser le système Ambilight et l'image :

Dans mon cas, ma première LEDs est en bas au centre de l'écran et j'ai déroulé la bande autour de l'écran dans le sens des aiguilles d'une montre. J'ai compté les LEDs de côté et Haut/Bas afin de renseigner les champs. Ensuite j'ai cherché la position de la première LEDs par tâtonnement afin de faire correspondre l'image de la TV avec l'éclairage Ambilight.

![](/images/2022/02/image-10.png)

Une fois le tout réglé et fonctionnel, il est possible d'exporter le fichier de configuration :

![](/images/2022/02/image-11.png)

Voici mon fichier :

<div >
<a  href="/files/2022/02/Hyperion-2.0.12-Backup--My-Hyperion-Config--2022.02.25--1-.json" title="Download" download>
<div >
<div >Hyperion 2012 Backup My Hyperion Config 20220225 1</div>

<div >
<div >Hyperion-2.0.12-Backup (My Hyperion Config) 2022.02.25 (1).json</div>
<div >12 KB</div>
</div>
</div>
<div >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>download-circle</title><polyline class="a" points="8.25 14.25 12 18 15.75 14.25"/><line class="a" x1="12" y1="6.75" x2="12" y2="18"/><circle class="a" cx="12" cy="12" r="11.25"/></svg>
</div>
</a>
</div>

Quelques images de tests :

![](/images/2022/02/IMG_20220225_162630.jpg) ![](/images/2022/02/IMG_20220225_162850.jpg) ![](/images/2022/02/IMG_20220225_162852-1.jpg)

<figure ><div ><figure class="gm-youtube"><iframe src="https://www.youtube.com/embed/cwX0lw-YV80" title="YouTube video" loading="lazy" allowfullscreen></iframe></figure><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button></div><div ><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span >0:00</span><div >/<span ></span></div><input type="range"  max="100" value="0"><button >1&#215;</button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range"  max="100" value="100"></div></div></div></figure>

<figure ><div ><figure class="gm-youtube"><iframe src="https://www.youtube.com/embed/hbcL70qUNm0" title="YouTube video" loading="lazy" allowfullscreen></iframe></figure><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button></div><div ><div ><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span >0:00</span><div >/<span ></span></div><input type="range"  max="100" value="0"><button >1&#215;</button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range"  max="100" value="100"></div></div></div></figure>

# Chorus 2 l'interface web pour Kodi

Afin de profiter de cette interface web de Kodi, il faut l'activer dans "Services" de la configuration de Kodi. Je vous conseille d'activer l'authentification

![](/images/2022/02/screenshot00012.png)

Ensuite le service web est accessible depuis l'adresse:

```
http://adresseIPCoreelec:8080
```

Pour moi cela donne :

```
http://192.168.1.41:8080
```

et j'obtiens l'interface suivante après la phase d'authentification :

![](/images/2022/02/image-12.png)

Il est alors possible d'écouter de la musique ou encore regarder un film localement depuis le client web (le navigateur Firefox ne semble pas supporter le format vidéo, préférez donc chrome)

![](/images/2022/02/image-13.png)

Je vous laisse découvrir ce formidable outil par vous-même en vous baladant dans les différents menus.
