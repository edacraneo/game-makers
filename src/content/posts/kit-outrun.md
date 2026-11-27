---
title: Kit OutRun
slug: kit-outrun
date: 2021-01-25
tags:
  - pcb
authors:
  - BudDevil
featured: false
feature: /images/2021/01/IMG_20201023_173712.jpg
excerpt: "Afin de faciliter la fabrication de notre mini OutRun, nous avons
  réalisé 5 PCB : * D-Pad : pour la navigation dans les menus, elle se trouve
  sur le tableau de bord * PCB de Contrô…"
visible: true
---
Afin de faciliter la fabrication de notre mini OutRun, nous avons réalisé 5 PCB :

- **D-Pad** : pour la navigation dans les menus, elle se trouve sur le tableau de bord
- **PCB de Contrôle** : pour les boutons A-B-X-Y-START-SELECT, qui se trouve en façade de la borne
- **OutRun Master Board (OMB)** : sur laquelle toutes les autres PCB sont raccordées, elle se branche directement sur les ports GPIO d'un Raspberry Pi modèle 2-3-4.
- **D-Sub IN** : qui se fixe à l'intérieur de la borne et permet de communiquer avec les différents éléments du pédalier à l'aide d'un câble DB-9 (RS232).
- **D-Sub OUT** : qui se fixe à l'intérieur du pédalier et permet de communiquer avec la borne.

![](/images/2021/03/IMG_20201023_173702.jpg) ![](/images/2021/01/IMG_20201023_173712-1.jpg)

---

**Principe de fonctionnement :**

La simplicité même ! Il suffit de plugger les nappes de câbles JST sur les différentes PCB jusqu'à la Master Board qui est elle-même pluggée sur les GPIO du Raspberry Pi.


On active ensuite l'option GPIO=1 dans le Recalbox.conf et c'est terminé !


![](/images/2021/01/IMG_20201023_174308.jpg) ![](/images/2021/01/IMG_20201023_174310.jpg)
![](/images/2021/01/IMG_20201023_174314.jpg) ![](/images/2021/01/IMG_20201023_174318.jpg)

![](/images/2021/01/IMG_20201023_173846-1.jpg) ![](/images/2021/01/IMG_20201023_173841-1.jpg)

---

**OutRun Master Board  (OMB) :**

C'est la PCB principale, la Master Board est alimentée par du 5V à travers les connecteurs bleus et permet :

\- D'alimenter le Raspberry Pi en 5v à travers les GPIO. (s'assurer de la bonne tension de l'alimentation)
\- De brancher et contrôler la vitesse d'un ventilateur 5v, vous pouvez réduire le bruit et contrôler le flux d'air.
\- De brancher et d'alimenter directement les leds de la borne (Topper)
\- De supprimer les parasites sonores grâce aux filtres incorporés, il suffit de brancher la prise jack sortie du Raspberry Pi à la Master Board puis repartir vers l'amplificateur. Le son sera atténué mais pur !
\- Vous pouvez à partir d'un bouton branché sur le slot ON/OFF de la carte, utiliser la fonction Shut down présente dans Recalbox, en appuyant sur celui-ci, la borne s'éteint. ( il faut activer cette option dans le recalbox.conf)

![](/images/2021/01/IMG_20201023_173841-2.jpg) ![](/images/2021/01/IMG_20201023_173846-2.jpg)

---

**&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;**

**\[Attention\] - Corrections à apporter sur deux PCB  :**

Sur les photos ci-dessus les connecteurs JST (blancs et rectangulaires) des PCB nommées : "D~SUB-Inside" et "Controls" sont dans le mauvais sens. Il est donc impératif de les positionner dans l'autre sens comme sur les photos ci-dessous.

![](/images/2021/07/erreur.jpg) ![](/images/2021/07/eazeza.png)

**&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;&gt;**

---

**Quelques photos supplémentaires :**

![](/images/2021/01/IMG_20210111_122635.jpg) ![](/images/2021/01/IMG_20210111_122544.jpg)

---

**PCB à l'intérieur de la borne :**

![](/images/2021/01/IMG_20201222_145900.jpg) ![](/images/2021/01/20201130_205941.jpg) ![](/images/2021/01/20201130_210023.jpg)
![](/images/2021/01/IMG_20201130_205912.jpg) ![](/images/2021/01/IMG_20201201_160721.jpg) ![](/images/2021/01/IMG_20201201_160740.jpg)
![](/images/2021/01/IMG_20201221_210856.jpg) ![](/images/2021/01/IMG_20201221_210900.jpg)

![](/images/2021/01/IMG_20201227_183340.jpg) ![](/images/2021/01/IMG_20201222_153802.jpg) ![](/images/2021/01/IMG_20201221_210120.jpg)
![](/images/2021/01/IMG_20201226_135134.jpg) ![](/images/2021/01/IMG_20201226_135138.jpg)

---
