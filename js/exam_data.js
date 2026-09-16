// ====================================================================
// BANQUE DE QUESTIONS — EXAMEN BLANC FINAL
// Formation Routage & Commutation — Cisco CCNA 200-301
// 100 Questions INÉDITES (10 par phase) — Jamais vues dans les quiz de cours
// ====================================================================

const examData = {

  phase1: {
    title: "Phase 1 — Fondamentaux Réseaux & Adressage IP",
    color: "#4f46e5",
    questions: [
      {
        id: "e1_01",
        question: "Un administrateur observe que deux périphériques connectés directement (PC vers PC) ne communiquent pas. Les câbles Ethernet droits (straight-through) ont été utilisés. Quelle est la cause la plus probable ?",
        options: [
          "Les cartes réseau ont des vitesses différentes",
          "Un câble croisé (crossover) aurait dû être utilisé sur les anciens équipements ne supportant pas l'Auto-MDIX",
          "Le protocole IP n'est pas activé sur les deux PC",
          "Les adresses MAC sont identiques"
        ],
        correct: [1],
        explanation: "Un câble droit est conçu pour relier des équipements de types différents (PC ↔ Switch). Pour relier deux équipements de même type (PC ↔ PC, Switch ↔ Switch) sans la fonctionnalité Auto-MDIX, un câble croisé est nécessaire afin que les broches TX d'un côté soient connectées aux broches RX de l'autre."
      },
      {
        id: "e1_02",
        question: "Quelle est l'adresse de sous-réseau d'un hôte dont l'adresse IP est 172.16.45.200 avec le masque /20 ?",
        options: [
          "172.16.32.0",
          "172.16.44.0",
          "172.16.45.0",
          "172.16.48.0"
        ],
        correct: [0],
        explanation: "/20 signifie 20 bits de réseau. En convertissant : le 3ème octet est 45 (0010 1101). En gardant les 4 premiers bits du 3ème octet (masque 11110000 = 240), on obtient 0010 0000 = 32. Donc l'adresse de sous-réseau est 172.16.32.0/20."
      },
      {
        id: "e1_03",
        question: "Un ingénieur réseau doit diviser le réseau 10.0.0.0/8 en sous-réseaux pouvant chacun accueillir 500 hôtes au maximum. Quel préfixe doit-il utiliser ?",
        options: [
          "/21",
          "/22",
          "/23",
          "/24"
        ],
        correct: [2],
        explanation: "Un /23 laisse 9 bits pour les hôtes, soit 2^9 - 2 = 510 adresses utilisables, ce qui couvre les 500 hôtes requis avec un minimum de gaspillage. Un /24 donne 254 hôtes (insuffisant) et un /22 donne 1022 hôtes (surcapacité)."
      },
      {
        id: "e1_04",
        question: "Dans le modèle TCP/IP, quel protocole de la couche Application est responsable de la résolution d'un nom de domaine (ex. www.cisco.com) en adresse IP ?",
        options: [
          "DHCP",
          "ARP",
          "DNS",
          "ICMP"
        ],
        correct: [2],
        explanation: "Le DNS (Domain Name System) opère en couche Application et traduit les noms de domaine lisibles (FQDN) en adresses IP numériques. ARP traduit les IP en adresses MAC (couche Liaison), DHCP attribue dynamiquement des configurations IP, et ICMP gère les messages de contrôle réseau."
      },
      {
        id: "e1_05",
        question: "Quel type d'adresse IPv4 est utilisé pour envoyer un paquet à un seul destinataire spécifique ?",
        options: [
          "Multicast",
          "Broadcast",
          "Unicast",
          "Anycast"
        ],
        correct: [2],
        explanation: "L'adresse Unicast désigne un seul hôte précis. Broadcast envoie à tous les hôtes du réseau local. Multicast envoie à un groupe d'abonnés. Anycast est un concept IPv6 qui achemine vers le nœud le plus proche d'un groupe."
      },
      {
        id: "e1_06",
        question: "Quel port TCP est utilisé par défaut par le protocole HTTPS pour des communications Web sécurisées ?",
        options: [
          "Port 80",
          "Port 21",
          "Port 443",
          "Port 8080"
        ],
        correct: [2],
        explanation: "HTTPS (HTTP Secure) utilise le port TCP 443 par défaut. Le port 80 est réservé à HTTP non chiffré, le port 21 à FTP, et le port 8080 est un port alternatif HTTP souvent utilisé pour les proxies."
      },
      {
        id: "e1_07",
        question: "Un PC envoie un message ARP Request. Quelle est la caractéristique principale de ce message ?",
        options: [
          "Il est envoyé en unicast vers la passerelle par défaut",
          "Il est encapsulé dans un paquet IP",
          "Il est envoyé en broadcast de couche 2 (FF:FF:FF:FF:FF:FF)",
          "Il contient l'adresse MAC de destination inconnue"
        ],
        correct: [2],
        explanation: "Un ARP Request est diffusé en broadcast Ethernet (MAC destination FF:FF:FF:FF:FF:FF) pour demander 'Qui possède cette adresse IP ?' Tous les hôtes du segment reçoivent la requête. ARP opère en couche 2 et n'est pas encapsulé dans IP."
      },
      {
        id: "e1_08",
        question: "Quelle couche du modèle OSI est responsable de la segmentation des données en segments et du contrôle de flux bout-en-bout ?",
        options: [
          "Couche 3 (Réseau)",
          "Couche 4 (Transport)",
          "Couche 5 (Session)",
          "Couche 6 (Présentation)"
        ],
        correct: [1],
        explanation: "La couche Transport (couche 4) segmente les données en segments, assure la fiabilité (TCP), le contrôle de flux (fenêtre glissante) et la multiplexage via les numéros de port. La couche Réseau (3) gère le routage et l'adressage IP logique."
      },
      {
        id: "e1_09",
        question: "Quelle plage d'adresses IPv4 correspond aux adresses de liaison locale (APIPA) que Windows attribue automatiquement lorsqu'un serveur DHCP est indisponible ?",
        options: [
          "192.168.0.0 – 192.168.255.255",
          "169.254.0.0 – 169.254.255.255",
          "172.16.0.0 – 172.31.255.255",
          "10.0.0.0 – 10.255.255.255"
        ],
        correct: [1],
        explanation: "Les adresses APIPA (Automatic Private IP Addressing) appartiennent à la plage 169.254.0.0/16 (RFC 3927). Un hôte qui ne reçoit pas de réponse DHCP s'auto-attribue une adresse dans cette plage. Ces adresses ne sont pas routables sur Internet."
      },
      {
        id: "e1_10",
        question: "Combien de bits constituent une adresse MAC Ethernet standard ?",
        options: [
          "32 bits",
          "48 bits",
          "64 bits",
          "128 bits"
        ],
        correct: [1],
        explanation: "Une adresse MAC (Media Access Control) est composée de 48 bits (6 octets), généralement représentés en hexadécimal (ex: 00:1A:2B:3C:4D:5E). Les 3 premiers octets identifient le fabricant (OUI) et les 3 derniers l'interface spécifique."
      }
    ]
  },

  phase2: {
    title: "Phase 2 — Commutation & VLANs",
    color: "#7c3aed",
    questions: [
      {
        id: "e2_01",
        question: "Un switch reçoit une trame dont l'adresse MAC destination est inconnue dans sa table CAM. Quelle action effectue-t-il ?",
        options: [
          "Il supprime la trame (drop)",
          "Il envoie la trame uniquement vers le port où la MAC source a été apprise",
          "Il diffuse la trame sur tous ses ports sauf le port d'entrée (flooding)",
          "Il envoie une requête ARP pour retrouver la MAC destination"
        ],
        correct: [2],
        explanation: "Lorsqu'un switch ne trouve pas l'adresse MAC destination dans sa table CAM (Unknown Unicast), il effectue un 'Unknown Unicast Flood' : il retransmet la trame sur tous ses ports actifs sauf le port d'entrée. Ce comportement est appelé 'flooding'."
      },
      {
        id: "e2_02",
        question: "Quelle commande Cisco IOS permet de vérifier qu'un port de switch est bien configuré en mode Access sur le VLAN 30 ?",
        options: [
          "show interfaces trunk",
          "show vlan brief",
          "show interfaces switchport",
          "show mac address-table"
        ],
        correct: [2],
        explanation: "'show interfaces switchport' affiche le mode d'administration et de fonctionnement du port (Access/Trunk/Dynamic), ainsi que le VLAN d'accès assigné et les VLANs autorisés sur les trunks. 'show vlan brief' montre quels ports appartiennent à quel VLAN mais ne précise pas le mode du port."
      },
      {
        id: "e2_03",
        question: "Qu'est-ce que le VLAN natif dans une configuration 802.1Q ?",
        options: [
          "Le VLAN par défaut pour tous les ports d'accès",
          "Le VLAN dont les trames ne sont pas étiquetées (taggées) sur un lien trunk",
          "Un VLAN réservé au trafic de gestion du switch",
          "Le premier VLAN créé sur le switch (VLAN 1 uniquement)"
        ],
        correct: [1],
        explanation: "Le VLAN natif sur un lien trunk 802.1Q est le seul VLAN dont les trames sont transmises sans balise (tag). Par défaut, c'est le VLAN 1. Il est recommandé de le changer pour améliorer la sécurité et d'éviter le VLAN hopping. Les deux extrémités du trunk doivent partager le même VLAN natif."
      },
      {
        id: "e2_04",
        question: "Quel est le rôle du protocole VTP (VLAN Trunking Protocol) dans un réseau commuté ?",
        options: [
          "Prévenir les boucles de switching en bloquant certains ports",
          "Synchroniser automatiquement la base de données VLAN entre les switches d'un même domaine VTP",
          "Chiffrer le trafic sur les liens trunk entre switches",
          "Assigner dynamiquement les VLANs aux ports selon l'adresse MAC des hôtes"
        ],
        correct: [1],
        explanation: "VTP est un protocole propriétaire Cisco qui propage automatiquement les informations de VLANs (création, suppression, renommage) depuis un serveur VTP vers tous les switches clients du même domaine. Cela évite de reconfigurer les VLANs sur chaque switch manuellement."
      },
      {
        id: "e2_05",
        question: "Dans STP (Spanning Tree Protocol), quel port est élu sur chaque segment non-racine pour assurer la connectivité vers le Root Bridge ?",
        options: [
          "Le Root Port",
          "Le Designated Port",
          "Le Blocked Port",
          "Le Alternate Port"
        ],
        correct: [1],
        explanation: "Sur chaque segment réseau, le port Désigné (Designated Port) est le port du switch qui offre le meilleur chemin vers le Root Bridge pour ce segment. Il reste en état Forwarding. Le Root Port est le meilleur port de chaque switch NON-racine vers le Root Bridge (un seul par switch)."
      },
      {
        id: "e2_06",
        question: "Un administrateur crée un VLAN 50 et l'affecte à plusieurs ports. Après redémarrage du switch, les ports sont actifs mais les hôtes VLAN 50 ne peuvent plus communiquer entre eux. Quelle est la cause la plus probable ?",
        options: [
          "Le VLAN 50 n'a pas été sauvegardé dans la NVRAM (write memory oublié)",
          "Le VLAN 50 a été supprimé du VLAN Database car il n'est pas dans la plage commerciale",
          "Il n'y a pas de SVI (interface VLAN) associée au VLAN 50",
          "Le VLAN 50 a été désactivé par VTP"
        ],
        correct: [0],
        explanation: "Les VLANs sont stockés dans le fichier vlan.dat en Flash, mais si le mode VTP est Server ou Transparent, la configuration doit aussi être sauvegardée. Si 'write memory' (ou 'copy run start') n'a pas été exécuté, les VLANs créés en session courante peuvent être perdus après redémarrage."
      },
      {
        id: "e2_07",
        question: "Quelle fonctionnalité de sécurité des switches Cisco permet de limiter le nombre de trames DHCP Discover/Offer acceptées sur un port et protège contre les attaques DHCP Starvation ?",
        options: [
          "Port Security",
          "DHCP Snooping",
          "Dynamic ARP Inspection",
          "IEEE 802.1X"
        ],
        correct: [1],
        explanation: "DHCP Snooping valide les messages DHCP et limite le débit des requêtes DHCP sur les ports non approuvés (untrusted). Il protège contre le DHCP Starvation (épuisement du pool DHCP par faux clients) et les rogue DHCP servers. Port Security limite uniquement le nombre de MACs appris sur un port."
      },
      {
        id: "e2_08",
        question: "Pourquoi recommande-t-on de désactiver les ports inutilisés sur un switch et de les assigner à un VLAN 'poubelle' inactif ?",
        options: [
          "Pour améliorer les performances de la table CAM",
          "Pour empêcher tout accès non autorisé au réseau via ces ports",
          "Pour activer le mode trunk sur tous les ports actifs",
          "Pour réduire la consommation électrique du switch"
        ],
        correct: [1],
        explanation: "Les ports inutilisés représentent un vecteur d'attaque : n'importe qui peut brancher un appareil non autorisé. En les désactivant ('shutdown') et en les assignant à un VLAN non routable, on empêche l'accès réseau non autorisé. Cette pratique fait partie des best practices de durcissement (hardening) des switches."
      },
      {
        id: "e2_09",
        question: "Quel mécanisme STP (802.1D) permet à un port configuré en PortFast de passer directement de l'état Blocking à l'état Forwarding sans attendre les délais STP standard ?",
        options: [
          "BPDU Filter",
          "Loop Guard",
          "PortFast + BPDU Guard",
          "Rapid STP (802.1w)"
        ],
        correct: [2],
        explanation: "PortFast permet à un port connecté à un hôte final (non-switch) de passer immédiatement à l'état Forwarding, évitant le délai STP de ~30 secondes. BPDU Guard est activé conjointement : si le port reçoit un BPDU (signe qu'un switch est branché), il passe en état err-disabled pour éviter les boucles."
      },
      {
        id: "e2_10",
        question: "Quelle est la plage des VLANs étendus (Extended Range VLANs) dans les switches Cisco Catalyst ?",
        options: [
          "VLAN 1 à 1005",
          "VLAN 1006 à 4094",
          "VLAN 2001 à 4000",
          "VLAN 4000 à 4096"
        ],
        correct: [1],
        explanation: "Les VLANs 1 à 1005 sont les VLANs standard supportés par VTP. Les VLANs 1006 à 4094 sont les VLANs étendus, supportés uniquement en mode VTP Transparent ou en VTP version 3. Ils ne sont pas propagés par VTP version 1 ou 2."
      }
    ]
  },

  phase3: {
    title: "Phase 3 — Routage Statique & OSPF",
    color: "#059669",
    questions: [
      {
        id: "e3_01",
        question: "Un routeur possède deux routes vers 192.168.10.0/24 : une route OSPF avec une distance administrative de 110 et une métrique de 5, et une route RIP avec une distance administrative de 120 et une métrique de 2. Laquelle sera installée dans la table de routage ?",
        options: [
          "La route RIP, car sa métrique (2) est plus faible",
          "La route OSPF, car sa distance administrative (110) est plus faible",
          "Les deux routes seront installées en load balancing",
          "Aucune des deux ; le routeur attend une route statique"
        ],
        correct: [1],
        explanation: "La Distance Administrative (DA) est le premier critère de sélection entre routes apprises par différents protocoles. OSPF (DA=110) est préféré à RIP (DA=120) car sa DA est plus faible = plus fiable. La métrique n'est comparée que pour des routes apprises par le MÊME protocole."
      },
      {
        id: "e3_02",
        question: "Quelle commande permet de créer une route statique par défaut sur un routeur Cisco, forçant tout trafic non-correspondant vers 10.0.0.1 ?",
        options: [
          "ip route 0.0.0.0 255.255.255.255 10.0.0.1",
          "ip route default 10.0.0.1",
          "ip route 0.0.0.0 0.0.0.0 10.0.0.1",
          "ip default-gateway 10.0.0.1"
        ],
        correct: [2],
        explanation: "'ip route 0.0.0.0 0.0.0.0 10.0.0.1' crée la route par défaut (quad-zero route). Elle correspond à n'importe quelle destination non trouvée dans la table. 'ip default-gateway' est utilisé sur les switches Layer 2, pas sur les routeurs. Le masque doit être 0.0.0.0 (et non /32 = 255.255.255.255)."
      },
      {
        id: "e3_03",
        question: "Quel est le rôle du Router ID (RID) dans OSPF et comment est-il sélectionné si non configuré manuellement ?",
        options: [
          "Il identifie l'Area OSPF ; il est sélectionné automatiquement en prenant la plus haute adresse IP des interfaces",
          "Il identifie de façon unique le routeur dans le domaine OSPF ; il est choisi en priorité depuis la plus haute adresse IP d'une interface Loopback, puis la plus haute IP active",
          "Il est le numéro de priorité pour l'élection DR/BDR ; il est aléatoire",
          "Il est identique pour tous les routeurs dans la même Area OSPF"
        ],
        correct: [1],
        explanation: "Le Router ID OSPF identifie de manière unique chaque routeur OSPF. Sélection automatique (sans 'router-id') : 1) Priorité absolue à la plus haute adresse IP d'interface Loopback active. 2) Si aucune Loopback, la plus haute adresse IP d'une interface physique active (up/up). Une configuration manuelle via 'router-id X.X.X.X' est toujours recommandée."
      },
      {
        id: "e3_04",
        question: "Deux routeurs OSPF ne forment pas d'adjacence. La commande 'show ip ospf neighbor' ne montre aucun voisin. Parmi les causes suivantes, laquelle est la plus probable ?",
        options: [
          "Les deux routeurs ont des Router IDs différents",
          "Les interfaces ont des Hello Intervals ou Dead Intervals différents",
          "Les routeurs sont dans des Areas différentes mais toutes deux de type Backbone (Area 0)",
          "Les interfaces ont des adresses IP dans des sous-réseaux différents"
        ],
        correct: [3],
        explanation: "Pour former une adjacence OSPF, les interfaces des deux routeurs doivent être dans le même sous-réseau (réseau et masque identiques). Les Hello/Dead intervals doivent aussi correspondre (autre cause fréquente). Les Router IDs différents sont normaux et requis. Être dans deux Areas différentes non-backbone peut poser problème, mais les IPs sur des sous-réseaux différents reste la cause la plus fréquente."
      },
      {
        id: "e3_05",
        question: "Qu'indique le code 'O IA' dans la table de routage d'un routeur OSPF ?",
        options: [
          "Une route OSPF externe de type 1 (importée d'un autre protocole)",
          "Une route OSPF Inter-Area, apprise via un Area Border Router (ABR)",
          "Une route OSPF interne à la zone locale (Intra-Area)",
          "Une route OSPF vers un autre système autonome (ASBR Summary)"
        ],
        correct: [1],
        explanation: "'O' = route OSPF Intra-Area (même zone que le routeur). 'O IA' = route OSPF Inter-Area, apprise d'une autre zone via un ABR (Area Border Router). 'O E1' ou 'O E2' = route OSPF externe (importée via redistribution depuis un autre protocole de routage ou route statique par un ASBR)."
      },
      {
        id: "e3_06",
        question: "Quel mécanisme OSPF évite les problèmes de topologie en boucle dans les réseaux multi-accès (Ethernet) en réduisant le nombre d'adjacences nécessaires ?",
        options: [
          "Split Horizon",
          "Élection d'un Designated Router (DR) et Backup Designated Router (BDR)",
          "Authentification MD5 entre voisins OSPF",
          "La métrique basée sur la bande passante (coût)"
        ],
        correct: [1],
        explanation: "Sur les réseaux multi-accès (Ethernet), tous les routeurs s'adjacenteraient entre eux (n(n-1)/2 adjacences). OSPF élit un DR et un BDR : tous les autres routeurs (DROthers) n'établissent d'adjacence complète qu'avec le DR et BDR, réduisant considérablement le nombre d'adjacences et la quantité de LSAs échangés."
      },
      {
        id: "e3_07",
        question: "Un routeur a une interface 'FastEthernet 0/0' avec un coût OSPF de 10 et une 'Serial 0/0/0' avec un coût de 64. Quelle est la formule utilisée pour calculer le coût OSPF d'une interface ?",
        options: [
          "Coût = Bande passante de référence (100 Mbps) × Bande passante de l'interface",
          "Coût = Bande passante de référence (100 000 000 bps) / Bande passante de l'interface (bps)",
          "Coût = Délai de propagation en millisecondes × 10",
          "Coût = MTU de l'interface / 100"
        ],
        correct: [1],
        explanation: "Le coût OSPF par défaut = 100 000 000 / Bande passante en bps. FastEthernet (100 Mbps) = 100M/100M = 1... mais Cisco l'ajuste. Serial T1 (1.544 Mbps) ≈ 64. GigabitEthernet (1 Gbps) donnerait 0.1, donc Cisco recommande d'augmenter la bande passante de référence (via 'auto-cost reference-bandwidth') pour différencier les interfaces rapides."
      },
      {
        id: "e3_08",
        question: "Quelle est la distance administrative d'une route statique configurée sur un routeur Cisco (valeur par défaut) ?",
        options: [
          "0",
          "1",
          "5",
          "90"
        ],
        correct: [1],
        explanation: "La distance administrative par défaut d'une route statique est 1 sur les routeurs Cisco. La valeur 0 est réservée aux routes directement connectées (connected). Les protocoles dynamiques ont des DA supérieures : OSPF=110, RIP=120, EIGRP=90 (interne), BGP=20 (eBGP)."
      },
      {
        id: "e3_09",
        question: "Quel type de route statique est parfois appelée 'route flottante' et quand est-elle utilisée ?",
        options: [
          "Une route statique vers 0.0.0.0/0 utilisée comme route de secours Internet",
          "Une route statique avec une distance administrative élevée qui n'est active que si la route préférée disparaît",
          "Une route statique pointant vers une interface Loopback pour la stabilité",
          "Une route statique distribuée dans OSPF via la redistribution"
        ],
        correct: [1],
        explanation: "Une 'floating static route' est une route statique configurée avec une DA plus haute que celle du protocole de routage dynamique utilisé. Exemple : si OSPF utilise DA=110, la route flottante peut avoir DA=115. Tant que la route OSPF existe, la statique reste inactive. Si OSPF tombe, la route flottante s'active comme chemin de secours (failover)."
      },
      {
        id: "e3_10",
        question: "Lors d'une transition d'état OSPF, un routeur passe par les états 'Down → Init → 2-Way → Exstart → Exchange → Loading → Full'. Que signifie l'état '2-Way' ?",
        options: [
          "Le routeur a reçu un Hello de son voisin et son propre Router ID est visible dans le Hello reçu",
          "Les deux routeurs ont complètement synchronisé leurs bases LSDB",
          "L'élection DR/BDR vient de se terminer",
          "Le routeur est en train d'envoyer ses LSAs au DR"
        ],
        correct: [0],
        explanation: "L'état 2-Way signifie que la communication bidirectionnelle est établie : le routeur a reçu un Hello de son voisin ET voit son propre Router ID dans la liste des voisins du Hello reçu. C'est à cet état que l'élection DR/BDR se produit sur les réseaux multi-accès. Les DROthers restent en état 2-Way entre eux (pas Full)."
      }
    ]
  },

  phase4: {
    title: "Phase 4 — Routage Inter-VLAN",
    color: "#0284c7",
    questions: [
      {
        id: "e4_01",
        question: "Quelle est la différence principale entre 'Router-on-a-Stick' et le routage Inter-VLAN via un Switch Layer 3 (SVI) ?",
        options: [
          "Router-on-a-Stick nécessite plusieurs interfaces physiques sur le routeur, une par VLAN",
          "Router-on-a-Stick utilise des sous-interfaces sur un seul lien trunk vers un switch, tandis que le Switch L3 utilise des SVI pour router en interne sans passer par un routeur externe",
          "Le Switch L3 ne supporte que le routage statique, pas OSPF",
          "Les deux méthodes sont identiques mais Router-on-a-Stick est plus performant"
        ],
        correct: [1],
        explanation: "Router-on-a-Stick (RoaS) : un seul lien physique trunk entre le routeur et le switch, avec des sous-interfaces (subinterfaces) sur le routeur, une par VLAN. Simple mais le lien devient un goulot d'étranglement. Switch L3 avec SVI : le routage se fait directement dans le hardware du switch, bien plus performant. Chaque SVI est une interface virtuelle représentant un VLAN."
      },
      {
        id: "e4_02",
        question: "Sur un switch Cisco Catalyst Layer 3, quelle commande globale est nécessaire pour activer le routage IP et permettre le forwarding inter-VLAN via les SVI ?",
        options: [
          "ip routing",
          "router ospf 1",
          "spanning-tree portfast default",
          "switchport mode access"
        ],
        correct: [0],
        explanation: "'ip routing' est la commande globale indispensable pour activer le routage IP sur un switch multicouche (Layer 3). Sans cette commande, le switch L3 fonctionne comme un switch L2 standard et ne route pas les paquets entre les VLANs, même si les SVI sont configurées."
      },
      {
        id: "e4_03",
        question: "Dans une configuration Router-on-a-Stick, quelle commande crée la sous-interface pour le VLAN 20 sur GigabitEthernet 0/0 et configure l'encapsulation 802.1Q ?",
        options: [
          "interface GigabitEthernet0/0 vlan 20",
          "interface GigabitEthernet0/0.20 + encapsulation dot1q 20",
          "interface vlan 20 + ip address ...",
          "switchport trunk allowed vlan 20"
        ],
        correct: [1],
        explanation: "La syntaxe correcte : 1) 'interface GigabitEthernet0/0.20' crée la sous-interface (le .20 est par convention = numéro de VLAN, mais ce n'est pas obligatoire). 2) 'encapsulation dot1q 20' associe cette sous-interface au VLAN 20 en utilisant 802.1Q. 3) Puis 'ip address ...' assigne l'adresse IP passerelle pour ce VLAN."
      },
      {
        id: "e4_04",
        question: "Un hôte dans le VLAN 10 (192.168.10.0/24) ne peut pas communiquer avec un hôte dans le VLAN 20 (192.168.20.0/24). Le switch L3 est configuré avec les SVI correspondantes et 'ip routing' est activé. Quelle est la cause probable ?",
        options: [
          "Les deux VLANs doivent avoir le même masque de sous-réseau",
          "Les hôtes n'ont pas de passerelle par défaut configurée pointant vers les SVI respectives",
          "Le switch L3 ne supporte pas le routage entre plus de 2 VLANs",
          "Les SVI doivent être dans le même sous-réseau pour pouvoir router"
        ],
        correct: [1],
        explanation: "Même si le switch L3 peut router inter-VLAN, les hôtes doivent pointer vers la SVI de leur propre VLAN comme passerelle par défaut. Si un hôte VLAN 10 n'a pas 192.168.10.1 (la SVI VLAN 10) comme gateway, il ne saura pas comment envoyer ses paquets vers d'autres sous-réseaux."
      },
      {
        id: "e4_05",
        question: "Quel est l'avantage principal du routage via un Switch Layer 3 par rapport à Router-on-a-Stick dans un réseau d'entreprise avec des centaines de VLANs et beaucoup de trafic inter-VLAN ?",
        options: [
          "Le Switch L3 supporte plus de VLANs (jusqu'à 8000)",
          "Le routage est effectué dans le hardware (ASICs) du switch, offrant des performances en wire-speed bien supérieures",
          "Le Switch L3 n'a pas besoin de configuration IP sur les interfaces",
          "Le Switch L3 peut utiliser NAT/PAT pour masquer les VLANs internes"
        ],
        correct: [1],
        explanation: "Le routage sur Switch L3 utilise des ASICs (Application-Specific Integrated Circuits) pour le forwarding matériel à la vitesse du câble (wire-speed), sans les limitations CPU d'un routeur externe. Router-on-a-Stick concentre tout le trafic inter-VLAN sur un seul lien physique et un seul processeur de routeur, créant un goulot d'étranglement à grande échelle."
      },
      {
        id: "e4_06",
        question: "Sur un switch L3 Cisco, qu'est-ce qu'un 'routed port' (port routé) par opposition à une SVI ?",
        options: [
          "Un port physique qui agit comme une interface Layer 3 (IP) directement, sans être associé à un VLAN de switching",
          "Un port qui appartient à plusieurs VLANs simultanément",
          "Un port uniquement utilisable pour les connexions WAN vers Internet",
          "Un port trunk configuré avec une adresse IP"
        ],
        correct: [0],
        explanation: "Un Routed Port sur switch L3 est configuré avec 'no switchport', ce qui le transforme en interface Layer 3 pure (comme sur un routeur). Il a une adresse IP directement et ne fait pas partie du domaine de switching L2. Il est typiquement utilisé pour les connexions point-à-point vers d'autres routeurs ou switches L3 dans le cœur du réseau."
      },
      {
        id: "e4_07",
        question: "Comment le protocole ROAS (Router-on-a-Stick) gère-t-il le VLAN natif sur la sous-interface ?",
        options: [
          "Le VLAN natif ne peut pas être configuré sur une sous-interface",
          "Il faut utiliser 'encapsulation dot1q [vlan-id] native' sur la sous-interface correspondante",
          "Le VLAN natif est automatiquement géré par l'interface principale (sans sous-interface)",
          "Il faut créer une ACL pour identifier les trames non-taggées"
        ],
        correct: [2],
        explanation: "Dans une configuration Router-on-a-Stick, les trames du VLAN natif arrivent non-taggées sur le routeur. Elles sont reçues par l'interface principale (ex: G0/0 sans sous-interface) plutôt que par les sous-interfaces. On peut aussi utiliser 'encapsulation dot1q [vlan-id] native' sur une sous-interface pour traiter explicitement le trafic natif."
      },
      {
        id: "e4_08",
        question: "Qu'est-ce qu'une SVI (Switch Virtual Interface) ?",
        options: [
          "Une interface physique spéciale sur les switches haut de gamme",
          "Une interface logique représentant un VLAN, utilisée pour le routage inter-VLAN ou la gestion du switch",
          "Un port virtuel créé par le protocole VTP pour synchroniser les VLANs",
          "Une interface créée automatiquement pour chaque port trunk"
        ],
        correct: [1],
        explanation: "Une SVI est une interface Layer 3 virtuelle associée à un VLAN (ex: 'interface Vlan10'). Elle peut servir à deux usages : 1) Routage inter-VLAN sur switch L3 (avec 'ip routing'). 2) Interface de gestion du switch (Management SVI) pour l'accès Telnet/SSH/SNMP. La SVI est 'up' uniquement si le VLAN existe et qu'au moins un port actif lui appartient."
      },
      {
        id: "e4_09",
        question: "Dans quelle situation serait-il plus approprié d'utiliser Router-on-a-Stick plutôt qu'un Switch L3 ?",
        options: [
          "Dans un réseau d'entreprise avec 500 VLANs et 10 Gbps de trafic inter-VLAN",
          "Dans un petit réseau de bureau avec peu de VLANs et faible trafic inter-VLAN, ou quand on ne dispose que de switches L2 et d'un routeur",
          "Quand la sécurité inter-VLAN est critique et nécessite un pare-feu dédié",
          "Quand tous les VLANs doivent accéder à Internet simultanément"
        ],
        correct: [1],
        explanation: "Router-on-a-Stick est adapté aux petits réseaux : économique (pas besoin d'un switch L3 coûteux), simple à configurer. Il est acceptable quand le volume de trafic inter-VLAN est faible et que le nombre de VLANs est limité. Pour de grands réseaux avec beaucoup de trafic inter-VLAN, le Switch L3 est indispensable pour ses performances hardware."
      },
      {
        id: "e4_10",
        question: "Sur un switch L3 avec SVI, quel est l'état de la SVI VLAN 30 si le VLAN 30 est créé mais qu'aucun port du switch n'est assigné à ce VLAN ?",
        options: [
          "Up/Up — La SVI est toujours active dès que le VLAN est créé",
          "Down/Down — La SVI est inactive car aucun port actif n'appartient au VLAN",
          "Administratively Down — La SVI doit être activée manuellement avec 'no shutdown'",
          "Up/Down — Problème de protocole de ligne"
        ],
        correct: [1],
        explanation: "Une SVI passe à l'état 'up/up' uniquement si : 1) Le VLAN correspondant existe dans la base de données VLAN, ET 2) Au moins un port physique actif (up/up) est assigné à ce VLAN. Si aucun port n'est membre du VLAN ou que le VLAN n'existe pas, la SVI reste 'down/down'."
      }
    ]
  },

  phase5: {
    title: "Phase 5 — Sécurité Réseau & ACLs",
    color: "#d97706",
    questions: [
      {
        id: "e5_01",
        question: "Quelle est la différence entre une ACL standard et une ACL étendue sur les routeurs Cisco ?",
        options: [
          "Les ACL standard filtrent uniquement le trafic entrant ; les ACL étendues filtrent uniquement le trafic sortant",
          "Les ACL standard filtrent uniquement sur l'adresse IP source ; les ACL étendues filtrent sur la source, la destination, le protocole et les ports",
          "Les ACL standard sont numérotées 100-199 ; les ACL étendues sont numérotées 1-99",
          "Les ACL étendues sont plus performantes car elles utilisent le hardware ASICs du routeur"
        ],
        correct: [1],
        explanation: "ACL Standard (1-99, 1300-1999) : filtre uniquement sur l'adresse IP source. À placer près de la destination. ACL Étendue (100-199, 2000-2699) : filtre sur IP source ET destination, protocole (TCP/UDP/ICMP) et numéros de port. Plus précise et placée près de la source pour minimiser le trafic inutile."
      },
      {
        id: "e5_02",
        question: "Quelle est la règle implicite à la fin de toute ACL Cisco qu'il faut absolument connaître ?",
        options: [
          "Un 'permit any any' implicite permettant tout le trafic non matché",
          "Un 'deny any' implicite (implicit deny all) bloquant tout trafic non explicitement permis",
          "Un 'log any' implicite enregistrant tous les paquets non matchés",
          "Une redirection vers l'interface de management pour inspection"
        ],
        correct: [1],
        explanation: "Toutes les ACL Cisco se terminent par un 'deny any' implicite et invisible. Tout trafic qui ne correspond à aucune règle explicite de l'ACL est automatiquement bloqué et jeté. C'est pourquoi on doit toujours vérifier qu'une ACL n'est pas trop restrictive et bloquer du trafic légitime."
      },
      {
        id: "e5_03",
        question: "Un administrateur souhaite bloquer uniquement le trafic Telnet (TCP port 23) venant de 10.1.1.0/24 vers 192.168.1.0/24. Quel type d'ACL doit-il utiliser ?",
        options: [
          "Une ACL standard numérotée",
          "Une ACL standard nommée",
          "Une ACL étendue (standard ou nommée)",
          "Une ACL de type MAC address"
        ],
        correct: [2],
        explanation: "Pour filtrer sur un numéro de port (TCP 23 = Telnet) ET des adresses source et destination spécifiques, seule une ACL étendue est capable de ce niveau de granularité. Une ACL standard ne peut filtrer que sur l'adresse IP source, sans distinction de protocole ou de port."
      },
      {
        id: "e5_04",
        question: "Quelle est la position recommandée pour l'application d'une ACL étendue sur une interface de routeur ?",
        options: [
          "Sur l'interface la plus proche de la DESTINATION, en direction 'in'",
          "Sur l'interface la plus proche de la SOURCE, en direction 'in', pour éviter que le trafic indésirable ne traverse le réseau inutilement",
          "Sur toutes les interfaces du routeur en direction 'out' simultanément",
          "Sur l'interface WAN uniquement, dans les deux directions"
        ],
        correct: [1],
        explanation: "Une ACL étendue doit être placée le plus près possible de la SOURCE du trafic à filtrer, appliquée en direction 'in' sur l'interface d'entrée. Ainsi, le trafic non désiré est bloqué immédiatement et ne consomme pas de ressources réseau inutilement. Une ACL standard se place près de la destination car elle ne connaît pas l'IP destination."
      },
      {
        id: "e5_05",
        question: "Quelle attaque de sécurité tente d'apprendre l'adresse MAC d'un switch pour se faire passer pour lui et ainsi intercepter le trafic destiné aux hôtes légitimes ?",
        options: [
          "ARP Poisoning / ARP Spoofing",
          "MAC Flooding Attack",
          "VLAN Hopping",
          "STP Manipulation"
        ],
        correct: [0],
        explanation: "L'ARP Spoofing (ou ARP Poisoning) consiste à envoyer de fausses réponses ARP pour associer l'adresse MAC de l'attaquant à l'adresse IP d'une passerelle légitime. Les hôtes envoient alors leur trafic à l'attaquant (Man-in-the-Middle). Dynamic ARP Inspection (DAI) sur les switches Cisco protège contre cette attaque."
      },
      {
        id: "e5_06",
        question: "Quelle fonctionnalité Cisco permet de sécuriser les ports SSH en n'acceptant des connexions que depuis un sous-réseau d'administration spécifique ?",
        options: [
          "Une ACL appliquée sur les lignes VTY avec 'access-class'",
          "Une ACL appliquée sur l'interface de management avec 'ip access-group'",
          "La commande 'ip ssh version 2' avec restriction de subnet",
          "Le protocole 802.1X avec authentification RADIUS"
        ],
        correct: [0],
        explanation: "'access-class [ACL] in' appliqué sur les lignes VTY (Telnet/SSH) restreint les connexions de gestion à distance aux seules adresses IP autorisées par l'ACL. C'est la méthode standard pour sécuriser l'accès distant. Exemple : 'line vty 0 4 / access-class 10 in'."
      },
      {
        id: "e5_07",
        question: "Quel est le masque générique (wildcard mask) équivalent au masque de sous-réseau 255.255.252.0 ?",
        options: [
          "0.0.3.255",
          "0.0.252.0",
          "255.255.3.255",
          "0.0.0.255"
        ],
        correct: [0],
        explanation: "Le masque générique (wildcard mask) est le complément binaire du masque de sous-réseau. 255 - 252 = 3, donc le masque générique de 255.255.252.0 est 0.0.3.255. Dans un wildcard mask, un bit à 0 signifie 'doit correspondre' et un bit à 1 signifie 'ignorer ce bit' (inverse de la logique du masque de sous-réseau)."
      },
      {
        id: "e5_08",
        question: "Quelle protection sur les switches Cisco surveille et valide les messages DHCP pour empêcher un serveur DHCP frauduleux (rogue) de distribuer de fausses configurations réseau ?",
        options: [
          "Port Security",
          "DHCP Snooping",
          "Dynamic ARP Inspection",
          "IP Source Guard"
        ],
        correct: [1],
        explanation: "DHCP Snooping distingue les ports 'trusted' (serveur DHCP légitime) et 'untrusted' (ports d'accès clients). Les messages DHCP Offer et Ack ne sont autorisés que depuis les ports trusted. Sur les ports untrusted, seuls les messages DHCP Discover et Request des clients sont acceptés. Tout message serveur sur un port untrusted est bloqué."
      },
      {
        id: "e5_09",
        question: "Quelle commande SSH permet de générer les clés cryptographiques RSA nécessaires à l'activation de SSH sur un routeur Cisco ?",
        options: [
          "crypto key generate rsa",
          "ssh-keygen -t rsa -b 2048",
          "ip ssh rsa-keypair-name",
          "crypto pki trustpoint"
        ],
        correct: [0],
        explanation: "'crypto key generate rsa' génère la paire de clés RSA requise pour SSH sur IOS Cisco. La taille minimale recommandée est 1024 bits (2048 pour SSH version 2). Prérequis : un nom d'hôte et un nom de domaine configurés ('hostname' et 'ip domain-name'). Sans ces clés, SSH ne peut pas s'activer."
      },
      {
        id: "e5_10",
        question: "Quel est l'impact de la commande 'no service password-recovery' sur un routeur Cisco ?",
        options: [
          "Elle supprime tous les mots de passe configurés sur le routeur",
          "Elle empêche la récupération du mot de passe via la console en mode ROMMON, rendant la récupération impossible sans effacer la configuration",
          "Elle force l'utilisation de mots de passe complexes (majuscules, chiffres, caractères spéciaux)",
          "Elle désactive l'accès Telnet et force l'utilisation de SSH"
        ],
        correct: [1],
        explanation: "'no service password-recovery' est une commande de durcissement extrême : elle désactive la procédure standard de récupération de mot de passe via la console (mode ROMMON). Si le mot de passe est oublié, la seule option est d'effacer complètement la configuration. À utiliser avec extrême prudence et uniquement dans des environnements sécurisés physiquement."
      }
    ]
  },

  phase6: {
    title: "Phase 6 — Technologies Avancées (EtherChannel, HSRP, NAT)",
    color: "#dc2626",
    questions: [
      {
        id: "e6_01",
        question: "Quels sont les deux protocoles de négociation automatique d'EtherChannel supportés par les switches Cisco ?",
        options: [
          "STP et RSTP",
          "PAgP (Port Aggregation Protocol) et LACP (Link Aggregation Control Protocol)",
          "VTP et DTP",
          "HSRP et VRRP"
        ],
        correct: [1],
        explanation: "EtherChannel peut être négocié via : PAgP (protocole Cisco propriétaire) avec les modes 'auto' et 'desirable'. LACP (IEEE 802.3ad, standard ouvert) avec les modes 'passive' et 'active'. On peut aussi configurer EtherChannel manuellement ('mode on') sans négociation, mais c'est risqué (boucles possibles si un côté ne s'agrège pas correctement)."
      },
      {
        id: "e6_02",
        question: "Dans HSRP (Hot Standby Router Protocol), quel routeur prend en charge le routage du trafic lorsque le routeur actif (Active) tombe ?",
        options: [
          "Le routeur avec la priorité la plus basse",
          "N'importe quel routeur du groupe HSRP en ordre aléatoire",
          "Le routeur Standby (celui avec la deuxième priorité la plus élevée)",
          "Le routeur avec l'adresse IP la plus haute dans le groupe HSRP"
        ],
        correct: [2],
        explanation: "Dans HSRP, le routeur Standby est en attente permanente. Si l'Active ne répond plus aux messages Hello (après le hold time), le Standby assume le rôle Active et reprend l'adresse IP et MAC virtuelle du groupe. La transition est transparente pour les hôtes qui conservent la même passerelle par défaut virtuelle."
      },
      {
        id: "e6_03",
        question: "Quelle est la différence principale entre NAT statique et NAT dynamique ?",
        options: [
          "NAT statique est plus sécurisé car il masque toutes les adresses internes",
          "NAT statique crée une correspondance fixe et permanente entre une IP privée et une IP publique ; NAT dynamique associe les IPs privées à un pool d'IPs publiques de façon temporaire",
          "NAT dynamique supporte IPv6 et IPv4 ; NAT statique supporte uniquement IPv4",
          "NAT statique fonctionne uniquement sur les routeurs hauts de gamme"
        ],
        correct: [1],
        explanation: "NAT statique : association 1-à-1 fixe et permanente (ex: serveur Web interne accessible depuis Internet). NAT dynamique : les hôtes internes se partagent un pool d'adresses publiques, chaque association est temporaire. PAT (Port Address Translation) est une variante NAT dynamique qui permet à beaucoup d'hôtes de partager une seule IP publique via des numéros de port différents."
      },
      {
        id: "e6_04",
        question: "Quelle commande configure EtherChannel en mode LACP actif sur les interfaces fa0/1 et fa0/2 d'un switch Cisco, en créant le Port-Channel 1 ?",
        options: [
          "channel-group 1 mode active (sur chaque interface du groupe)",
          "lacp mode active (sur l'interface port-channel 1)",
          "etherchannel group 1 lacp",
          "interface port-channel 1 / mode lacp active"
        ],
        correct: [0],
        explanation: "La configuration EtherChannel se fait sur chaque interface physique membre du groupe, pas sur l'interface port-channel. Sur fa0/1 et fa0/2 : 'channel-group 1 mode active' (LACP actif). L'interface Port-Channel 1 est créée automatiquement. Les configurations VLAN/trunk se font ensuite sur l'interface port-channel, qui propage aux membres."
      },
      {
        id: "e6_05",
        question: "Qu'est-ce que la préemption (preemption) dans HSRP et pourquoi est-elle désactivée par défaut ?",
        options: [
          "La préemption permet au routeur Standby de reprendre le rôle Active dès que l'Active revient, réduisant les coupures",
          "La préemption permet au routeur ayant la priorité la plus haute de reprendre automatiquement le rôle Active si l'ancien Active revient en ligne — désactivée par défaut pour éviter les basculements répétés qui perturbent le trafic",
          "La préemption est le mécanisme de suivi d'interface (track) qui réduit la priorité HSRP si une interface WAN tombe",
          "La préemption force une réélection HSRP toutes les 30 secondes"
        ],
        correct: [1],
        explanation: "Sans préemption, si le routeur Active tombe et que le Standby prend le relais, l'ancien Active ne reprend PAS automatiquement le rôle Active quand il revient. Avec 'standby [group] preempt', il reprend son rôle si sa priorité est plus haute. La préemption est désactivée par défaut pour éviter les micro-coupures lors des redémarrages planifiés."
      },
      {
        id: "e6_06",
        question: "Lors de la configuration d'EtherChannel, quelles conditions doivent être identiques sur toutes les interfaces membres ?",
        options: [
          "Uniquement la vitesse et le duplex",
          "La vitesse, le duplex, le mode (access/trunk), le VLAN natif et les VLANs autorisés",
          "Uniquement le mode (access/trunk) et les VLANs",
          "L'adresse IP et le masque de sous-réseau"
        ],
        correct: [1],
        explanation: "Toutes les interfaces membres d'un EtherChannel doivent avoir des configurations identiques : vitesse, duplex, mode switchport (access ou trunk), VLAN d'accès ou natif (si trunk), VLANs autorisés sur le trunk, et spanning-tree settings. Une incompatibilité entraîne l'erreur 'err-disabled' sur les interfaces concernées."
      },
      {
        id: "e6_07",
        question: "Quel est l'avantage du PAT (Port Address Translation) par rapport au NAT dynamique classique ?",
        options: [
          "Le PAT est plus sécurisé car il chiffre les données",
          "Le PAT permet à des milliers d'hôtes internes de partager UNE SEULE adresse IP publique en différenciant les sessions par le numéro de port source",
          "Le PAT supporte IPv6 nativement contrairement au NAT dynamique",
          "Le PAT est plus rapide car il ne modifie pas les en-têtes IP"
        ],
        correct: [1],
        explanation: "Le PAT (aussi appelé NAT Overload) est la forme la plus répandue de NAT. Il permet à un très grand nombre d'hôtes privés de partager une seule adresse IP publique. Chaque connexion interne est distinguée par un numéro de port source unique dans la table de traduction. C'est le mécanisme utilisé dans pratiquement tous les routeurs de box Internet."
      },
      {
        id: "e6_08",
        question: "Quelle version de HSRP supporte IPv6 et quelle est la différence entre HSRP v1 et HSRP v2 ?",
        options: [
          "Les deux versions supportent IPv6 ; v2 est juste plus rapide",
          "HSRP v2 : supporte IPv6, étend le nombre de groupes (0-4095 vs 0-255 pour v1), utilise une adresse MAC virtuelle différente",
          "HSRP v1 supporte IPv6 ; v2 supporte uniquement IPv4",
          "HSRP v2 ajoute la préemption automatique non disponible en v1"
        ],
        correct: [1],
        explanation: "HSRP v1 : groupes 0-255, MAC virtuelle 0000.0c07.acXX, IPv4 uniquement. HSRP v2 : groupes 0-4095, MAC virtuelle 0000.0c9f.fXXX (autre plage), supporte IPv6, meilleure cohabitation en environnement multi-vLAN. VRRP (standard IEEE) et GLBP sont des alternatives. Pour IPv6, on utilise plutôt HSRP v2 ou GLBP."
      },
      {
        id: "e6_09",
        question: "Sur un switch Cisco, comment vérifier que le port-channel 1 est bien formé et quels membres sont actifs dans l'EtherChannel ?",
        options: [
          "show interfaces port-channel 1 status",
          "show etherchannel summary",
          "show lacp neighbor",
          "show channel-group 1 detail"
        ],
        correct: [1],
        explanation: "'show etherchannel summary' affiche un résumé de tous les port-channels : le numéro de groupe, les interfaces membres, leur état (P=bundled, D=down, I=individual non bundled, s=suspended), le protocole de négociation (PAgP/LACP/Static) et l'état global du port-channel."
      },
      {
        id: "e6_10",
        question: "Quelle commande Cisco active le NAT Overload (PAT) sur l'interface WAN d'un routeur en utilisant l'adresse IP de cette interface comme adresse publique ?",
        options: [
          "ip nat inside source list 1 interface Serial0/0/0 overload",
          "ip nat outside source interface Serial0/0/0 pool PAT",
          "ip nat overload interface Serial0/0/0 list 1",
          "nat ip pool inside Serial0/0/0 list 1 overload"
        ],
        correct: [0],
        explanation: "La commande complète pour le PAT avec interface : 1) 'ip nat inside source list [ACL] interface [WAN_interface] overload'. L'ACL identifie les hôtes internes autorisés, 'interface' utilise l'IP de l'interface WAN comme IP publique, et 'overload' active le PAT (plusieurs-vers-un). Il faut aussi marquer 'ip nat inside' sur les interfaces LAN et 'ip nat outside' sur l'interface WAN."
      }
    ]
  },

  phase7: {
    title: "Phase 7 — Réseaux Sans Fil (Wireless)",
    color: "#0d9488",
    questions: [
      {
        id: "e7_01",
        question: "Quelle est la différence entre le mode Infrastructure et le mode Ad-Hoc (IBSS) dans les réseaux Wi-Fi ?",
        options: [
          "Le mode Infrastructure utilise des canaux plus larges (80 MHz) que le mode Ad-Hoc (20 MHz)",
          "En mode Infrastructure, les clients communiquent via un AP central ; en Ad-Hoc, les clients communiquent directement entre eux sans AP",
          "Le mode Ad-Hoc est plus sécurisé car il n'y a pas de point d'accès central vulnérable",
          "Le mode Infrastructure ne supporte que WEP ; le mode Ad-Hoc supporte WPA3"
        ],
        correct: [1],
        explanation: "Mode Infrastructure (BSS) : tous les clients passent par un Access Point (AP) central qui gère les communications. Mode Ad-Hoc (IBSS - Independent BSS) : les clients communiquent directement entre eux sans AP. L'Ad-Hoc est peu utilisé en entreprise car il est difficile à gérer et sécuriser. Le mode Infrastructure est la norme dans les déploiements professionnels."
      },
      {
        id: "e7_02",
        question: "Sur quelle fréquence opère la norme Wi-Fi 6 (802.11ax) et quelle est son amélioration principale par rapport au Wi-Fi 5 (802.11ac) ?",
        options: [
          "Uniquement 5 GHz ; amélioration de la sécurité avec WPA3 obligatoire",
          "2.4 GHz et 5 GHz (et optionnellement 6 GHz avec Wi-Fi 6E) ; introduction de OFDMA et MU-MIMO 8x8 pour une meilleure efficacité spectrale en environnement dense",
          "Uniquement 6 GHz ; vitesse augmentée à 40 Gbps théoriques",
          "2.4 GHz uniquement ; rétrocompatibilité totale avec 802.11b/g/n"
        ],
        correct: [1],
        explanation: "Wi-Fi 6 (802.11ax) opère en 2.4 GHz et 5 GHz (et 6 GHz pour Wi-Fi 6E). L'amélioration principale est OFDMA (Orthogonal Frequency-Division Multiple Access) qui permet de servir plusieurs clients simultanément dans une même transmission, plus MU-MIMO 8x8 et Target Wake Time (TWT) pour économiser l'énergie des IoT. Idéal pour les environnements denses."
      },
      {
        id: "e7_03",
        question: "Qu'est-ce que le SSID (Service Set Identifier) et peut-il constituer une mesure de sécurité efficace si on le masque ?",
        options: [
          "C'est l'adresse MAC de l'AP ; le masquer est une sécurité efficace car les clients ne peuvent pas le détecter",
          "C'est le nom du réseau Wi-Fi ; le masquer (hidden SSID) n'est PAS une mesure de sécurité efficace car il peut être découvert par les outils d'analyse Wi-Fi",
          "C'est la clé de chiffrement WPA2 partagée entre l'AP et les clients",
          "C'est l'identifiant unique de la cellule radio en BSS, numéroté de 1 à 100"
        ],
        correct: [1],
        explanation: "Le SSID est simplement le nom du réseau Wi-Fi. Masquer le SSID (ne pas le diffuser dans les Beacon frames) est considéré comme de la 'sécurité par l'obscurité' et n'est pas efficace : les outils d'analyse passifs capturent les SSID lors des associations client-AP. La vraie sécurité repose sur WPA2/WPA3 avec des clés robustes, pas sur le masquage du SSID."
      },
      {
        id: "e7_04",
        question: "Dans une architecture Wi-Fi d'entreprise avec WLC (Wireless LAN Controller), quel protocole est utilisé pour le tunnel de contrôle et de données entre les APs légers (Lightweight APs) et le WLC ?",
        options: [
          "802.1Q Trunking",
          "CAPWAP (Control And Provisioning of Wireless Access Points)",
          "LWAPP (Lightweight Access Point Protocol) — protocole actuel Cisco",
          "GRE (Generic Routing Encapsulation)"
        ],
        correct: [1],
        explanation: "CAPWAP (RFC 5415) est le protocole standard utilisé pour le tunnel entre les Lightweight APs et le WLC. Il remplace l'ancien LWAPP propriétaire Cisco. CAPWAP crée deux tunnels UDP : un pour le plan de contrôle (configuration, gestion) et un pour le plan de données (trafic des clients). Le WLC centralise ainsi la configuration et la politique de sécurité."
      },
      {
        id: "e7_05",
        question: "Quel est le principal avantage de WPA3 par rapport à WPA2 dans un réseau Wi-Fi d'entreprise ?",
        options: [
          "WPA3 utilise des clés de 512 bits contre 256 bits pour WPA2",
          "WPA3 introduit SAE (Simultaneous Authentication of Equals) qui protège contre les attaques de dictionnaire hors-ligne même si la clé PSK est capturée",
          "WPA3 est deux fois plus rapide que WPA2 grâce à un chiffrement matériel",
          "WPA3 élimine le besoin d'un serveur RADIUS pour l'authentification"
        ],
        correct: [1],
        explanation: "WPA3 remplace le handshake à 4 voies de WPA2 par SAE (Simultaneous Authentication of Equals), basé sur l'échange Dragonfly. SAE fournit la 'Perfect Forward Secrecy' : même si un attaquant capture le handshake et obtient la PSK plus tard, il ne peut pas déchiffrer les communications passées. WPA2 est vulnérable aux attaques de dictionnaire offline sur les handshakes capturés."
      },
      {
        id: "e7_06",
        question: "Quels sont les canaux non-chevauchants recommandés pour déployer plusieurs APs 802.11b/g (2.4 GHz) sans interférences mutuelles ?",
        options: [
          "Canaux 1, 5, 9",
          "Canaux 1, 6, 11",
          "Canaux 2, 6, 10",
          "Canaux 1, 7, 13"
        ],
        correct: [1],
        explanation: "En 2.4 GHz, les canaux ont une largeur de 22 MHz et se chevauchent. Les seuls canaux non-chevauchants en Europe et Amérique du Nord sont les canaux 1, 6, et 11 (espacement de 5 canaux × 5 MHz = 25 MHz > 22 MHz de largeur). Pour maximiser la couverture sans interférences co-canal, on utilise ces trois canaux en les assignant aux APs adjacents."
      },
      {
        id: "e7_07",
        question: "Qu'est-ce que le Roaming Wi-Fi et comment les APs d'une même infrastructure WLC facilitent-ils cette transition ?",
        options: [
          "Le roaming est la capacité de changer de protocole de sécurité (WPA2 vers WPA3) sans se reconnecter",
          "Le roaming est la transition d'un client Wi-Fi d'un AP à un autre dans le même réseau sans perte de session, facilitée par la WLC qui partage les informations d'association entre APs",
          "Le roaming est uniquement possible entre APs de même fabricant et de même modèle",
          "Le roaming Wi-Fi nécessite une authentification complète à chaque changement d'AP"
        ],
        correct: [1],
        explanation: "Le roaming permet à un client mobile (ex: smartphone en réunion) de passer d'un AP à l'autre sans déconnecter ses sessions actives. Avec une WLC, toutes les infos d'authentification et d'association sont centralisées. Lors d'un roaming Layer 2 (même sous-réseau), la transition est quasi-instantanée. Layer 3 roaming (changement de sous-réseau) utilise des tunnels pour maintenir la session."
      },
      {
        id: "e7_08",
        question: "Pourquoi la bande 5 GHz est-elle généralement préférée à la bande 2.4 GHz pour les déploiements Wi-Fi d'entreprise en environnement dense ?",
        options: [
          "La bande 5 GHz a une portée plus longue, permettant de couvrir de plus grandes surfaces",
          "La bande 5 GHz offre plus de canaux non-chevauchants (jusqu'à 24 canaux de 20 MHz), moins d'interférences avec les appareils non-Wi-Fi et des débits plus élevés",
          "La bande 5 GHz est compatible avec les appareils IoT qui ne supportent pas le 2.4 GHz",
          "La bande 5 GHz consomme moins d'énergie pour les APs"
        ],
        correct: [1],
        explanation: "La bande 5 GHz offre bien plus de canaux non-chevauchants (jusqu'à 24 canaux de 20 MHz aux USA, moins en Europe) vs 3 en 2.4 GHz. Elle est moins sujette aux interférences (micro-ondes, téléphones DECT, Bluetooth opèrent en 2.4 GHz). Sa portée plus courte est un avantage en environnement dense car les cellules se chevauchent moins. Son principal inconvénient est la pénétration réduite à travers les murs."
      },
      {
        id: "e7_09",
        question: "Qu'est-ce que le MU-MIMO (Multi-User Multiple Input Multiple Output) et comment améliore-t-il les performances Wi-Fi ?",
        options: [
          "C'est une technique de compression de données qui réduit la taille des trames Wi-Fi",
          "C'est une technique permettant à un AP d'envoyer des flux de données à plusieurs clients simultanément en utilisant plusieurs antennes, augmentant l'efficacité spectrale",
          "C'est un protocole de Load Balancing entre plusieurs APs",
          "C'est une méthode de sécurité pour chiffrer individuellement les communications avec chaque client"
        ],
        correct: [1],
        explanation: "MU-MIMO (Multi-User MIMO) permet à un AP équipé de plusieurs antennes d'envoyer des flux de données à plusieurs clients en même temps (spatial multiplexing). Sans MU-MIMO, l'AP communique avec un seul client à la fois (Round-Robin), les autres attendent. Avec MU-MIMO (ex: 4x4:4), l'AP peut servir jusqu'à 4 clients simultanément, augmentant considérablement le débit agrégé."
      },
      {
        id: "e7_10",
        question: "Dans un réseau Wi-Fi d'entreprise utilisant 802.1X (WPA2-Enterprise), quel composant authentifie les utilisateurs et délivre les clés de chiffrement individuelles ?",
        options: [
          "Le Switch Layer 2 qui porte les APs",
          "Le WLC (Wireless LAN Controller)",
          "Un serveur AAA (RADIUS) comme Cisco ISE ou FreeRADIUS",
          "L'AP lui-même via une base de données locale"
        ],
        correct: [2],
        explanation: "Dans WPA2/WPA3-Enterprise avec 802.1X : le client présente ses credentials à l'AP, qui les relaie via RADIUS au serveur AAA (ex: Cisco ISE, Microsoft NPS, FreeRADIUS). Le serveur RADIUS vérifie l'identité et renvoie une décision Access-Accept/Reject. Si accepté, il génère des clés de chiffrement individuelles (PMK) pour chaque session, contrairement à WPA2-Personal où tous partagent la même PSK."
      }
    ]
  },

  phase8: {
    title: "Phase 8 — Automatisation & SDN",
    color: "#db2777",
    questions: [
      {
        id: "e8_01",
        question: "Quelle est la différence fondamentale entre le plan de contrôle (Control Plane) et le plan de données (Data Plane) dans un équipement réseau traditionnel ?",
        options: [
          "Le plan de contrôle gère le trafic utilisateur ; le plan de données gère les mises à jour logiciel",
          "Le plan de contrôle prend les décisions de routage/commutation (calcul des tables) ; le plan de données forward les paquets selon ces tables",
          "Le plan de contrôle est le CPU ; le plan de données est la RAM de l'équipement",
          "Le plan de contrôle gère IPv6 ; le plan de données gère IPv4"
        ],
        correct: [1],
        explanation: "Plan de contrôle : intelligence de l'équipement — calcule les tables de routage/commutation via les protocoles (OSPF, STP, ARP...), gère les configurations. Plan de données (Data Plane / Forwarding Plane) : exécution — forward les paquets/trames selon les tables calculées par le plan de contrôle. En SDN, ces plans sont séparés : le contrôleur SDN centralise le plan de contrôle, les équipements n'assurent que le forwarding."
      },
      {
        id: "e8_02",
        question: "Qu'est-ce que l'Infrastructure-as-Code (IaC) dans le contexte de l'automatisation réseau ?",
        options: [
          "Un langage de programmation propriétaire Cisco pour configurer les équipements",
          "La pratique de définir et déployer des configurations d'infrastructure réseau via des fichiers de code (YAML, JSON) gérés comme du code source, permettant versioning, reproductibilité et automatisation",
          "Un outil permettant de simuler un réseau entier sur un serveur virtuel",
          "Une API REST pour accéder aux équipements réseau via HTTP"
        ],
        correct: [1],
        explanation: "L'Infrastructure-as-Code applique les principes de développement logiciel à la gestion réseau : les configurations sont décrites dans des fichiers (YAML, JSON, HCL...) stockés dans Git, versionnés, testés et déployés via des pipelines CI/CD. Les outils comme Ansible, Terraform, ou Nornir permettent de déployer des configurations identiques et reproductibles sur des centaines d'équipements automatiquement."
      },
      {
        id: "e8_03",
        question: "Dans le contexte des API REST, quelle méthode HTTP est utilisée pour créer une nouvelle ressource sur un équipement réseau ?",
        options: [
          "GET — pour créer et récupérer simultanément",
          "PUT — pour créer une ressource avec un ID défini par le client",
          "POST — pour créer une nouvelle ressource sur le serveur",
          "PATCH — pour créer une ressource partielle"
        ],
        correct: [2],
        explanation: "Les méthodes HTTP REST : GET (récupérer une ressource), POST (créer une nouvelle ressource — le serveur assigne l'ID), PUT (créer ou remplacer complètement une ressource avec un ID connu), PATCH (modifier partiellement une ressource), DELETE (supprimer). En réseau, une API REST sur un routeur Cisco utilise POST pour créer une interface, un VLAN, une route, etc."
      },
      {
        id: "e8_04",
        question: "Qu'est-ce qu'un Playbook Ansible et comment définit-on les tâches à exécuter sur les équipements réseau ?",
        options: [
          "Un Playbook est un script Python qui utilise l'API Netmiko pour se connecter aux équipements",
          "Un Playbook est un fichier YAML contenant des 'plays' qui définissent les hôtes cibles et les 'tasks' (modules) à exécuter, comme l'envoi de commandes IOS ou la configuration d'interfaces",
          "Un Playbook est une configuration JSON poussée via RESTCONF sur les équipements Cisco",
          "Un Playbook est une liste de commandes CLI Cisco regroupées dans un fichier texte .txt"
        ],
        correct: [1],
        explanation: "Un Playbook Ansible est un fichier YAML structuré en 'plays'. Chaque play cible un groupe d'hôtes (inventory) et liste des 'tasks' utilisant des modules Ansible. Pour les réseaux Cisco, on utilise des modules comme 'cisco.ios.ios_config', 'cisco.ios.ios_vlans', etc. Ansible se connecte via SSH, exécute les tâches, et retourne un rapport de changements."
      },
      {
        id: "e8_05",
        question: "Quelle est la différence entre NETCONF et RESTCONF pour la gestion automatisée des équipements réseau ?",
        options: [
          "NETCONF utilise XML/SSH ; RESTCONF utilise JSON ou XML sur HTTP/HTTPS — les deux permettent des opérations CRUD sur les configurations",
          "NETCONF est propriétaire Cisco ; RESTCONF est un standard ouvert IETF",
          "NETCONF ne supporte pas les transactions ; RESTCONF les supporte",
          "RESTCONF est une version obsolète de NETCONF"
        ],
        correct: [0],
        explanation: "NETCONF (RFC 6241) : protocole de gestion réseau basé sur XML, transporté sur SSH (port 830), supporte les transactions et les rollbacks, très puissant pour les configurations complexes. RESTCONF (RFC 8040) : utilise les mêmes modèles YANG que NETCONF mais avec une API de style REST sur HTTP/HTTPS, avec données en JSON ou XML. RESTCONF est plus simple à intégrer avec les outils web modernes."
      },
      {
        id: "e8_06",
        question: "Dans un environnement SDN (Software-Defined Networking), quel est le rôle de l'interface 'Southbound' (Southbound Interface) ?",
        options: [
          "L'interface entre le contrôleur SDN et les applications métier (North)",
          "L'interface entre le contrôleur SDN et les équipements réseau physiques (switches, routeurs), utilisant des protocoles comme OpenFlow, NETCONF ou RESTCONF",
          "L'interface entre le contrôleur SDN et le système de surveillance réseau",
          "L'interface de sauvegarde des configurations vers le Cloud"
        ],
        correct: [1],
        explanation: "Architecture SDN à 3 couches : Applications (haut) → Contrôleur SDN (milieu) → Infrastructure réseau (bas). L'interface Southbound connecte le contrôleur aux équipements physiques/virtuels via OpenFlow, NETCONF, RESTCONF, gRPC. L'interface Northbound connecte le contrôleur aux applications métier via des APIs REST/GraphQL. L'interface East-West synchronise plusieurs contrôleurs entre eux."
      },
      {
        id: "e8_07",
        question: "Qu'est-ce que le JSON (JavaScript Object Notation) et pourquoi est-il utilisé pour les APIs réseau ?",
        options: [
          "C'est un format binaire compact pour transmettre les configurations réseau rapidement",
          "C'est un format texte léger de représentation de données structurées (paires clé-valeur, tableaux, objets) lisible par l'humain et facilement parseable par les programmes",
          "C'est un langage de script pour automatiser les configurations sur les équipements Cisco",
          "C'est un protocole de transport sécurisé pour les données de configuration"
        ],
        correct: [1],
        explanation: "JSON est un format de sérialisation de données texte, standardisé (RFC 8259). Sa syntaxe simple (objects {}, arrays [], strings, numbers, booleans, null) le rend facile à lire/écrire pour les humains et très rapide à parser pour les programmes. Il est devenu le format dominant des APIs REST, y compris les APIs de gestion réseau (Cisco RESTCONF, DNA Center API, Meraki API, Junos REST API...)."
      },
      {
        id: "e8_08",
        question: "Qu'est-ce que Cisco DNA Center et quel problème résout-il dans la gestion des réseaux d'entreprise ?",
        options: [
          "C'est un système de surveillance réseau qui remplace Wireshark pour l'analyse de trafic",
          "C'est une plateforme d'automatisation et de gestion centralisée (Intent-Based Networking) qui permet de configurer, surveiller et dépanner des milliers d'équipements réseau via une interface unique et des APIs",
          "C'est un simulateur réseau pour tester les configurations avant déploiement",
          "C'est un système d'exploitation alternatif à IOS pour les routeurs Cisco nouvelle génération"
        ],
        correct: [1],
        explanation: "Cisco DNA Center (désormais Catalyst Center) est une plateforme IBN (Intent-Based Networking) : l'administrateur exprime son intention de haut niveau ('créer un réseau sécurisé pour les invités') et DNA Center traduit cela en configurations sur tous les équipements. Il fournit automation, analytics, assurance réseau (détection proactive des anomalies), et une API REST complète pour l'intégration avec d'autres outils."
      },
      {
        id: "e8_09",
        question: "Dans Python, quel module est couramment utilisé pour effectuer des requêtes HTTP vers des APIs REST d'équipements réseau ?",
        options: [
          "json",
          "subprocess",
          "requests",
          "socket"
        ],
        correct: [2],
        explanation: "Le module 'requests' de Python est la bibliothèque HTTP de référence pour les APIs REST. Il simplifie les appels GET, POST, PUT, DELETE avec gestion des headers (ex: Content-Type: application/json, Authorization: Bearer token), des paramètres et du corps de requête. 'json' parse les réponses. Netmiko et NAPALM utilisent SSH/CLI directement, différent des APIs REST."
      },
      {
        id: "e8_10",
        question: "Quelle est la principale différence entre un modèle YANG (Yet Another Next Generation) et un format comme JSON ou XML ?",
        options: [
          "YANG est un format de données comme JSON/XML ; il définit la structure des paquets réseau",
          "YANG est un LANGAGE DE MODÉLISATION qui définit la structure, les types et les contraintes des données de configuration réseau ; JSON/XML sont des FORMATS de représentation — YANG définit le 'schéma', JSON/XML transportent les 'données'",
          "YANG remplace entièrement JSON et XML dans les réseaux modernes",
          "YANG est un protocole de transport réseau similaire à SSH mais plus sécurisé"
        ],
        correct: [1],
        explanation: "YANG (RFC 6020, 7950) est un langage de modélisation des données réseau utilisé par NETCONF et RESTCONF. Il définit le 'schéma' : quels paramètres existent, leurs types (string, int, enum), leurs contraintes et relations. Les données réelles sont ensuite encodées en XML (pour NETCONF) ou JSON/XML (pour RESTCONF). C'est comme la différence entre un schéma de base de données et les données elles-mêmes."
      }
    ]
  },

  phase9: {
    title: "Phase 9 — Réseaux Cloud & Virtualisation",
    color: "#2563eb",
    questions: [
      {
        id: "e9_01",
        question: "Quelle est la différence entre IaaS, PaaS et SaaS dans le modèle de service Cloud ?",
        options: [
          "IaaS fournit des applications prêtes à l'emploi ; PaaS fournit des serveurs virtuels ; SaaS fournit des API",
          "IaaS fournit l'infrastructure (VMs, stockage, réseau) ; PaaS fournit une plateforme de développement (runtime, bases de données) ; SaaS fournit des applications complètes prêtes à l'emploi (ex: Office 365, Salesforce)",
          "Les trois modèles sont identiques mais avec des niveaux de prix différents",
          "IaaS est pour les petites entreprises ; PaaS pour les moyennes ; SaaS pour les grandes"
        ],
        correct: [1],
        explanation: "IaaS (Infrastructure) : le client gère OS, middleware, applications sur des VMs louées (ex: AWS EC2, Azure VMs). PaaS (Platform) : le client déploie son code, le provider gère l'infrastructure ET le runtime (ex: Heroku, Google App Engine). SaaS (Software) : application complète gérée par le provider, le client utilise simplement (ex: Gmail, Salesforce, Office 365). Responsabilité décroissante pour le client : IaaS > PaaS > SaaS."
      },
      {
        id: "e9_02",
        question: "Dans AWS, qu'est-ce qu'un VPC (Virtual Private Cloud) et comment isole-t-il les ressources ?",
        options: [
          "C'est un réseau privé virtuel qui utilise IPsec pour chiffrer tout le trafic entre instances AWS",
          "C'est un réseau virtuel isolé logiquement dans le Cloud AWS, avec son propre espace d'adressage IP, ses sous-réseaux, tables de routage et règles de sécurité (Security Groups, NACLs)",
          "C'est un cluster de machines physiques dédiées à un client dans un datacenter AWS",
          "C'est le réseau de distribution de contenu (CDN) d'AWS pour accélérer les applications web"
        ],
        correct: [1],
        explanation: "Un VPC AWS est un réseau virtuel isolé dans le Cloud. Vous définissez : un bloc CIDR (ex: 10.0.0.0/16), des sous-réseaux publics et privés, des tables de routage, une Internet Gateway (pour accès Internet), des NAT Gateways. Les Security Groups agissent comme pare-feux au niveau instance, les NACLs au niveau sous-réseau. Plusieurs VPCs peuvent se connecter via VPC Peering ou Transit Gateway."
      },
      {
        id: "e9_03",
        question: "Qu'est-ce que la virtualisation réseau par NFV (Network Function Virtualization) et quel problème résout-elle ?",
        options: [
          "NFV virtualise les câbles réseau physiques, permettant de les reconfigurer à distance",
          "NFV consiste à faire tourner des fonctions réseau traditionnellement exécutées sur des équipements dédiés (firewalls, load balancers, IPS) sur des serveurs x86 standard, réduisant les coûts et ajoutant de l'agilité",
          "NFV est une technique de compression des paquets réseau pour réduire la bande passante",
          "NFV remplace le protocole IP par un système de routage basé sur les noms"
        ],
        correct: [1],
        explanation: "NFV déplace les fonctions réseau (Firewall, IDS/IPS, Load Balancer, VPN Gateway, DNS, DHCP...) des appliances physiques propriétaires coûteuses vers des VMs ou containers sur serveurs x86 standards. Avantages : réduction des coûts CAPEX/OPEX, déploiement rapide (minutes vs mois), scalabilité élastique, mise à jour facile. Combiné avec SDN, NFV est la base des architectures réseau cloud-native."
      },
      {
        id: "e9_04",
        question: "Quelle est la différence entre le Cloud Public, Privé et Hybride ?",
        options: [
          "Cloud Public = non sécurisé ; Cloud Privé = sécurisé ; Cloud Hybride = semi-sécurisé",
          "Cloud Public : ressources partagées entre plusieurs clients (ex: AWS, Azure) ; Cloud Privé : infrastructure dédiée à une seule organisation (on-premise ou hébergée) ; Cloud Hybride : combine les deux avec une connectivité sécurisée",
          "Cloud Public utilise IPv6 ; Cloud Privé utilise IPv4 ; Cloud Hybride supporte les deux",
          "La différence est uniquement géographique : Public = international, Privé = national, Hybride = régional"
        ],
        correct: [1],
        explanation: "Cloud Public (AWS, Azure, GCP) : ressources mutualisées, facturation à l'usage, scalabilité maximale. Cloud Privé : infrastructure dédiée à une organisation (on-premise avec VMware/OpenStack, ou hébergée chez un provider en tenant isolé). Cloud Hybride : combinaison intentionnelle des deux, avec des workloads distribués selon les besoins (données sensibles en privé, charges variables en public), connectés via VPN/Direct Connect/ExpressRoute."
      },
      {
        id: "e9_05",
        question: "Dans un réseau SD-WAN (Software-Defined WAN), comment le trafic est-il acheminé différemment par rapport à un WAN traditionnel ?",
        options: [
          "SD-WAN utilise uniquement des liens MPLS dédiés pour garantir la QoS, contrairement aux WAN traditionnels qui utilisent l'Internet",
          "SD-WAN utilise un contrôleur centralisé pour router intelligemment le trafic sur plusieurs types de liaisons (MPLS, Internet, 4G/5G) selon des politiques applicatives en temps réel, contrairement au WAN statique basé sur des routes fixes",
          "SD-WAN chiffre systématiquement tout le trafic WAN contrairement aux WAN traditionnels",
          "SD-WAN ne supporte que les connexions point-à-point contrairement aux WAN traditionnels qui supportent le multipoint"
        ],
        correct: [1],
        explanation: "Le WAN traditionnel utilise des routes statiques ou protocoles de routage classiques, sans visibilité applicative. SD-WAN ajoute : sélection de chemin dynamique en temps réel basée sur la santé des liens (latence, gigue, perte), policies per-application (ex: Teams sur MPLS, best-effort sur Internet), chiffrement automatique via overlay (IPsec), gestion centralisée via un orchestrateur cloud. Réduction significative des coûts WAN vs MPLS pur."
      },
      {
        id: "e9_06",
        question: "Qu'est-ce qu'un 'Availability Zone' (AZ) dans le contexte AWS et pourquoi en avoir plusieurs ?",
        options: [
          "C'est une zone géographique mondiale comme l'Europe ou l'Asie-Pacifique",
          "C'est un datacenter distinct au sein d'une même Région AWS, avec alimentation, réseau et refroidissement indépendants — utiliser plusieurs AZs protège contre les pannes d'un datacenter unique",
          "C'est une zone de cache distribué pour accélérer les accès aux données",
          "C'est un groupe de serveurs dédiés aux applications critiques avec garantie de disponibilité de 99.999%"
        ],
        correct: [1],
        explanation: "Une Region AWS (ex: eu-west-1 Irlande) contient plusieurs Availability Zones (typiquement 3). Chaque AZ est un datacenter physiquement séparé (différent bâtiment, alimentation, réseau) mais connecté aux autres AZs de la région via des liens fibre haute vitesse. Déployer ses ressources sur plusieurs AZs assure la Haute Disponibilité (HA) : si l'AZ-1 tombe, l'AZ-2 et l'AZ-3 continuent. Fondamental pour les architectures fault-tolerant."
      },
      {
        id: "e9_07",
        question: "Dans AWS, quelle est la différence entre un 'Security Group' et une 'Network ACL' (NACL) ?",
        options: [
          "Les Security Groups sont plus restrictifs ; les NACLs sont plus permissives par défaut",
          "Security Group : pare-feu stateful au niveau instance (suit les connexions), rules allow uniquement. NACL : pare-feu stateless au niveau sous-réseau, rules allow ET deny, numérotées, évaluées dans l'ordre",
          "Les deux sont identiques mais les NACLs s'appliquent aux services managés AWS",
          "Les Security Groups fonctionnent en IPv6 ; les NACLs uniquement en IPv4"
        ],
        correct: [1],
        explanation: "Security Group (SG) : Stateful — le retour du trafic autorisé est automatiquement permis, même sans règle de retour. S'applique aux instances EC2/ENI. Seules des règles 'allow'. NACL : Stateless — le trafic retour doit être explicitement autorisé. S'applique à un sous-réseau entier. Permet des règles 'allow' ET 'deny', évaluées par numéro (premier match gagne). Utilisés complémentairement : SG pour la granularité instance, NACL pour la protection périmètre sous-réseau."
      },
      {
        id: "e9_08",
        question: "Qu'est-ce que le Transit Gateway dans AWS et quel problème d'architecture résout-il ?",
        options: [
          "C'est un service de CDN (Content Delivery Network) pour accélérer le trafic entre régions AWS",
          "C'est un hub réseau centralisé qui connecte plusieurs VPCs et réseaux on-premise entre eux, évitant la complexité du mesh VPC Peering (n(n-1)/2 connexions)",
          "C'est une passerelle VPN pour connecter uniquement les utilisateurs mobiles aux ressources AWS",
          "C'est un service de chiffrement de bout-en-bout pour les communications inter-VPC"
        ],
        correct: [1],
        explanation: "Avec VPC Peering seul, 10 VPCs nécessitent 10×9/2=45 connexions de peering à gérer. Transit Gateway agit comme un hub central : chaque VPC et réseau on-premise (via VPN ou Direct Connect) se connecte une seule fois au TGW. Le TGW route le trafic entre tous les réseaux attachés. Plus simple à gérer, supporte le routage transitive (impossible avec VPC Peering simple), et supporte le multi-compte via RAM."
      },
      {
        id: "e9_09",
        question: "Quelle est la principale différence entre une connexion VPN Site-to-Site standard vers AWS et AWS Direct Connect ?",
        options: [
          "Le VPN est plus sécurisé car il chiffre les données ; Direct Connect ne chiffre pas",
          "VPN Site-to-Site : connexion IPsec chiffrée sur l'Internet public (latence variable, bande passante partagée). Direct Connect : connexion physique privée dédiée (fibre) vers AWS avec latence prévisible et bande passante garantie, sans passer par Internet",
          "VPN supporte uniquement IPv4 ; Direct Connect supporte IPv4 et IPv6",
          "VPN est limité à 1 Gbps ; Direct Connect commence à 1 Mbps"
        ],
        correct: [1],
        explanation: "VPN Site-to-Site : rapide à déployer, économique, mais dépend de la qualité d'Internet (latence et gigue variables, partage de bande passante). Idéal pour débuter ou faibles volumes. AWS Direct Connect : connexion dédiée physique (1, 10 ou 100 Gbps) dans un datacenter partenaire Direct Connect, sans passer par Internet. Latence ultra-prévisible, bande passante dédiée, mais délai de déploiement (semaines/mois) et coût plus élevé. Choix selon les SLAs et volumes de données."
      },
      {
        id: "e9_10",
        question: "Qu'est-ce que la conteneurisation (avec Docker/Kubernetes) et en quoi diffère-t-elle de la virtualisation traditionnelle (VMs) dans un contexte réseau ?",
        options: [
          "La conteneurisation est une technologie plus ancienne que les VMs, moins performante mais plus simple",
          "Les containers partagent le kernel de l'OS hôte et sont plus légers/rapides à démarrer (secondes) que les VMs (qui virtualisent le hardware complet et nécessitent un OS invité) ; mais les VMs offrent un meilleur isolement sécurité",
          "Les containers nécessitent des équipements réseau physiques dédiés ; les VMs fonctionnent sur tout hardware",
          "Kubernetes et Docker sont uniquement utilisables sur des serveurs Linux ; les VMs fonctionnent sur Windows et Linux"
        ],
        correct: [1],
        explanation: "VM : virtualise le hardware complet, inclut un OS invité complet (gigabytes, minutes à démarrer). Container : partage le kernel de l'hôte, encapsule uniquement l'application et ses dépendances (megabytes, secondes à démarrer). Avantages containers : légèreté, déploiement rapide, densité plus haute. Avantages VMs : isolement plus fort, compatibilité OS diverse. Pour le réseau : les VMs/containers nécessitent des réseaux virtuels (vSwitch, Overlay VXLAN, CNI pour K8s)."
      }
    ]
  },

  phase10: {
    title: "Phase 10 — Supervision & Monitoring Réseau",
    color: "#ea580c",
    questions: [
      {
        id: "e10_01",
        question: "Quel port UDP est utilisé par défaut par SNMP pour les requêtes de gestion (Get, Set) et pour les notifications Trap ?",
        options: [
          "Port 161 pour Get/Set, Port 162 pour Trap",
          "Port 162 pour Get/Set, Port 161 pour Trap",
          "Port 161 pour toutes les opérations SNMP",
          "Port 514 pour Get/Set, Port 161 pour Trap"
        ],
        correct: [0],
        explanation: "SNMP utilise UDP port 161 pour les requêtes du NMS (Network Management System) vers les agents (Get, GetNext, GetBulk, Set). Les agents envoient des Traps (notifications asynchrones) vers le NMS sur UDP port 162. Retenir : 161 = requêtes (manager vers agent), 162 = traps/notifications (agent vers manager)."
      },
      {
        id: "e10_02",
        question: "Quelle est la différence principale entre SNMP v2c et SNMP v3 en termes de sécurité ?",
        options: [
          "SNMPv2c utilise TCP ; SNMPv3 utilise UDP",
          "SNMPv2c utilise des community strings en clair (aucun chiffrement ni authentification forte) ; SNMPv3 introduit authentification (MD5/SHA) et chiffrement optionnel (AES/DES)",
          "SNMPv3 ne supporte plus les traps, remplacées par des INFORM",
          "SNMPv2c est plus rapide car il n'a pas de mécanisme d'authentification"
        ],
        correct: [1],
        explanation: "SNMPv1 et v2c utilisent des 'community strings' (ex: 'public', 'private') transmises en clair — quiconque capture le trafic réseau peut lire et modifier la configuration des équipements. SNMPv3 résout ce problème avec : Authentication (MD5 ou SHA pour l'intégrité et l'origine), Privacy/Encryption (DES ou AES pour la confidentialité), et Access Control. SNMPv3 est obligatoire pour toute infrastructure sécurisée."
      },
      {
        id: "e10_03",
        question: "Qu'est-ce que NetFlow et pour quelle utilisation est-il principalement conçu ?",
        options: [
          "NetFlow est un protocole de surveillance de la disponibilité des équipements réseau (comme ping étendu)",
          "NetFlow capture des statistiques sur les flux de trafic réseau (IP source/dest, ports, protocole, byte count) permettant l'analyse de bande passante, la détection d'anomalies et la facturation",
          "NetFlow est un protocole de synchronisation du temps entre équipements réseau",
          "NetFlow est un outil de configuration automatisée des interfaces réseau"
        ],
        correct: [1],
        explanation: "NetFlow (Cisco, RFC 3954) capture des 'flow records' : chaque flux unique (même IP src/dst, même port src/dst, même protocole) est enregistré avec des statistiques (nombre de paquets, bytes, timestamps). Utilisations : analyse de la consommation de bande passante (qui consomme quoi ?), détection des anomalies de trafic (DDoS, exfiltration de données), facturation, capacity planning. Alternatif standard : IPFIX."
      },
      {
        id: "e10_04",
        question: "Sur un routeur Cisco, quel protocole est configuré pour synchroniser l'horloge sur un serveur de temps public (ex: pool.ntp.org) ?",
        options: [
          "SNTP (Simple Network Time Protocol)",
          "NTP (Network Time Protocol) — commande 'ntp server [IP]'",
          "Syslog avec timestamp activé",
          "ICMP Timestamp Request"
        ],
        correct: [1],
        explanation: "NTP (Network Time Protocol, RFC 5905) synchronise les horloges des équipements réseau sur des serveurs de référence. Sur Cisco IOS : 'ntp server [IP_ou_DNS]'. La synchronisation précise de l'heure est critique pour : la corrélation des logs Syslog (sans NTP, les timestamps sont décalés et l'analyse d'incidents devient impossible), les certificats SSL/TLS, les protocoles d'authentification Kerberos, et la traçabilité forensique."
      },
      {
        id: "e10_05",
        question: "Un équipement réseau Cisco envoie des messages Syslog de sévérité 3 (Error). Qu'est-ce que cela signifie et comment la sévérité est-elle numérotée ?",
        options: [
          "Sévérité 3 est la plus critique (système en panne) ; la numérotation va de 1 (moins critique) à 7 (plus critique)",
          "Sévérité 3 (Error) indique des conditions d'erreur nécessitant attention ; la numérotation va de 0 (Emergency, plus critique) à 7 (Debug, moins critique)",
          "Sévérité 3 est un avertissement mineur qui n'affecte pas le trafic ; de 1 à 10",
          "La numérotation Syslog est propriétaire Cisco, différente du standard RFC"
        ],
        correct: [1],
        explanation: "Les niveaux de sévérité Syslog (RFC 5424) : 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Informational, 7=Debug. La règle : plus le chiffre est bas, plus c'est grave. Une erreur de sévérité 3 indique un problème affectant le fonctionnement qui mérite intervention. Sur Cisco : 'logging trap [level]' définit le niveau minimum à envoyer au serveur Syslog."
      },
      {
        id: "e10_06",
        question: "Quel outil est utilisé pour créer des tableaux de bord de supervision réseau avec des métriques collectées par Prometheus et visualisées graphiquement ?",
        options: [
          "Wireshark",
          "Grafana",
          "PRTG Network Monitor",
          "Nagios Core"
        ],
        correct: [1],
        explanation: "Grafana est une plateforme open-source de visualisation et d'analytics qui se connecte à de nombreuses sources de données, dont Prometheus. Elle permet de créer des tableaux de bord personnalisés avec graphiques, jauges, alertes. La combinaison Prometheus (collecte de métriques time-series) + Grafana (visualisation) est devenue le standard de facto pour la supervision des infrastructures modernes (réseau, serveurs, Kubernetes)."
      },
      {
        id: "e10_07",
        question: "Qu'est-ce qu'un OID (Object Identifier) dans le contexte SNMP ?",
        options: [
          "C'est le nom d'utilisateur SNMP v3 pour l'authentification",
          "C'est un identifiant unique sous forme d'arbre hiérarchique de chiffres (ex: 1.3.6.1.2.1.1.1) qui identifie chaque variable/métrique disponible dans la MIB d'un équipement réseau",
          "C'est l'adresse IP du NMS (Network Management Station) dans la configuration SNMP",
          "C'est le numéro de version du protocole SNMP en cours d'utilisation"
        ],
        correct: [1],
        explanation: "Un OID est un identifiant hiérarchique unique (arbre d'objets, similaire à un filesystem) défini dans les MIBs (Management Information Bases). Ex: 1.3.6.1.2.1.1.1.0 = sysDescr (description système). Les NMS utilisent les OIDs pour interroger des métriques spécifiques via SNMP Get. Les fabricants publient leurs MIBs propriétaires avec les OIDs de leurs équipements (interfaces, CPU, mémoire, températures...)."
      },
      {
        id: "e10_08",
        question: "Quelle est la différence entre le monitoring passif et le monitoring actif dans la supervision réseau ?",
        options: [
          "Monitoring actif = surveille uniquement les équipements allumés ; Monitoring passif = surveille également les équipements éteints",
          "Monitoring actif : envoie des sondes (ping, SNMP poll, requêtes test) pour mesurer la disponibilité et les performances — proactif. Monitoring passif : collecte les données générées par les équipements eux-mêmes (Syslog, SNMP Traps, NetFlow) sans sollicitation",
          "Monitoring actif utilise SNMP v3 ; Monitoring passif utilise SNMP v1",
          "Monitoring passif consomme plus de bande passante que le monitoring actif"
        ],
        correct: [1],
        explanation: "Monitoring actif : le système de supervision envoie régulièrement des tests (ICMP ping, SNMP poll, synthétique transaction) pour vérifier la disponibilité et mesurer les métriques. Proactif mais génère du trafic. Monitoring passif : les équipements pushent eux-mêmes leurs événements et métriques (Syslog, SNMP Traps, NetFlow/IPFIX, streaming telemetry). Moins de trafic généré mais dépend de la configuration des équipements. En pratique, les deux méthodes sont complémentaires."
      },
      {
        id: "e10_09",
        question: "Qu'est-ce que l'ICMP (Internet Control Message Protocol) et quelle commande l'utilise pour tester la connectivité bout-en-bout ?",
        options: [
          "ICMP est un protocole de couche Application ; utilisé par 'telnet'",
          "ICMP est un protocole de couche Réseau (Layer 3) qui transmet des messages de contrôle et d'erreur ; utilisé par 'ping' (ICMP Echo Request/Reply) et 'traceroute' (ICMP TTL Exceeded)",
          "ICMP est un protocole de couche Transport ; utilisé par 'netstat'",
          "ICMP est propriétaire Cisco ; il n'existe pas d'équivalent sur les systèmes Linux"
        ],
        correct: [1],
        explanation: "ICMP (RFC 792) est un protocole de couche réseau (encapsulé directement dans IP, protocole numéro 1). Il transporte des messages de contrôle : Echo Request/Reply (ping), Destination Unreachable, Time Exceeded (utilisé par traceroute pour cartographier les sauts), Redirect. Il n'a pas de numéro de port car il n'est pas de la couche Transport. Fondamental pour le diagnostic réseau."
      },
      {
        id: "e10_10",
        question: "Dans le cadre de la supervision réseau, qu'est-ce que la 'streaming telemetry' et en quoi est-elle supérieure au SNMP polling traditionnel pour les réseaux modernes ?",
        options: [
          "La streaming telemetry est un flux vidéo pour surveiller visuellement les salles serveurs",
          "La streaming telemetry pousse en continu les métriques réseau depuis les équipements vers un collecteur (push model) avec une granularité sub-seconde, contrairement au SNMP polling (pull model) qui interroge périodiquement et peut manquer des anomalies transitoires",
          "La streaming telemetry est uniquement disponible sur les équipements cloud AWS",
          "La streaming telemetry remplace NetFlow pour l'analyse de bande passante uniquement"
        ],
        correct: [1],
        explanation: "Le SNMP polling traditionnel interroge les équipements toutes les 5 minutes — une anomalie de 30 secondes peut passer inaperçue. La streaming telemetry (gRPC/gNMI, NETCONF) adopte un modèle push : les équipements envoient continuellement leurs métriques (CPU, interfaces, BGP, OSPF...) avec une granularité de 1 à 30 secondes. Résultat : visibilité en quasi-temps réel, détection d'anomalies fugaces, scalabilité bien supérieure (pas de charge CPU du polling sur l'équipement)."
      }
    ]
  }

};

// Export pour utilisation dans exam.js
if (typeof module !== "undefined") module.exports = { examData };
