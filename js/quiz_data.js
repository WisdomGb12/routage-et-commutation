// ====================================================================
// BANQUE DE QUESTIONS DU QUIZ - FORMATION ROUTAGE & COMMUTATION
// Conforme aux exigences du programme Cisco CCNA 200-301
// 150 Questions certifiantes (15 questions détaillées par phase)
// ====================================================================

const quizData = {
    "phase1": {
        "title": "Quiz Phase 1 : Fondamentaux Réseau & Adressage (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Vous devez connecter le port console d'un routeur Cisco au port USB de votre PC pour une première configuration. Quel câble ou accessoire utilisez-vous ?",
                "options": [
                    "Un câble Ethernet Droit (Straight-Through)",
                    "Un câble Ethernet Croisé (Crossover)",
                    "Un câble Console (Rollover) avec adaptateur USB-Série ou câble direct Console-USB",
                    "Un câble coaxial avec connecteur BNC"
                ],
                "correct": [
                    2
                ],
                "explanation": "Pour la configuration initiale hors bande (out-of-band) via le port console, on utilise un câble Console (souvent bleu plat, brochage rollover RJ45-DB9) avec adaptateur USB-Série ou un câble direct USB-RJ45/USB-mini-B."
            },
            {
                "id": 2,
                "question": "Un PC (192.168.1.10/24) doit transmettre un paquet IP vers un serveur Web situé sur Internet (8.8.8.8). Quelle adresse MAC sera inscrite dans le champ 'MAC Destination' de la trame Ethernet émise par le PC ?",
                "options": [
                    "L'adresse MAC publique du serveur 8.8.8.8",
                    "L'adresse MAC de broadcast (FF:FF:FF:FF:FF:FF)",
                    "L'adresse MAC de la passerelle par défaut (interface LAN du routeur local)",
                    "L'adresse MAC de la carte réseau du switch local"
                ],
                "correct": [
                    2
                ],
                "explanation": "L'adresse IP de destination (8.8.8.8) n'appartient pas au sous-réseau local (192.168.1.0/24). Le PC envoie donc la trame à sa passerelle par défaut en résolvant son adresse MAC via ARP."
            },
            {
                "id": 3,
                "question": "Quel masque de sous-réseau IPv4 permet d'accueillir au minimum 60 hôtes utilisables tout en gaspillant le moins d'adresses possible ?",
                "options": [
                    "/25 (255.255.255.128)",
                    "/26 (255.255.255.192)",
                    "/27 (255.255.255.224)",
                    "/28 (255.255.255.240)"
                ],
                "correct": [
                    1
                ],
                "explanation": "La formule du nombre d'hôtes est 2^h - 2. Pour un /26, il reste 32 - 26 = 6 bits d'hôtes, soit 2^6 - 2 = 62 adresses utilisables. Un /27 ne fournit que 30 adresses (insuffisant) et un /25 en fournit 126 (gaspillage)."
            },
            {
                "id": 4,
                "question": "Dans le modèle OSI, à quelle couche respective opère une adresse IP logique et une adresse MAC physique ?",
                "options": [
                    "IP en Couche 2 (Liaison), MAC en Couche 3 (Réseau)",
                    "IP en Couche 4 (Transport), MAC en Couche 2 (Liaison)",
                    "IP en Couche 3 (Réseau), MAC en Couche 2 (Liaison de données)",
                    "IP en Couche 3 (Réseau), MAC en Couche 1 (Physique)"
                ],
                "correct": [
                    2
                ],
                "explanation": "L'adresse IP est un identifiant logique universel de Couche 3 (Réseau). L'adresse MAC est un identifiant physique de Couche 2 (Liaison de données) utilisé pour le transit local sur un même segment."
            },
            {
                "id": 5,
                "question": "Quelle commande permet de vérifier la connectivité IP de bout en bout ET d'identifier chaque saut (routeur) traversé ?",
                "options": [
                    "ping",
                    "traceroute (ou tracert sous Windows)",
                    "ipconfig /all",
                    "netstat -r"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande traceroute incrémente le champ TTL (Time to Live) de 1 en 1 pour forcer chaque routeur traversé à retourner un message ICMP Time Exceeded, révélant ainsi le chemin complet."
            },
            {
                "id": 6,
                "question": "Convertissez l'adresse binaire 11000000.10101000.00001010.00000001 en notation décimale à point.",
                "options": [
                    "192.168.10.1",
                    "192.168.1.10",
                    "172.16.10.1",
                    "10.10.10.1"
                ],
                "correct": [
                    0
                ],
                "explanation": "11000000 = 128+64 = 192; 10101000 = 128+32+8 = 168; 00001010 = 8+2 = 10; 00000001 = 1. L'adresse est 192.168.10.1."
            },
            {
                "id": 7,
                "question": "Quel est le nom de l'Unité de Données de Protocole (PDU) manipulée au niveau de la Couche 4 (Transport) du modèle OSI ?",
                "options": [
                    "Trame (Frame)",
                    "Paquet (Packet)",
                    "Segment (pour TCP) ou Datagramme (pour UDP)",
                    "Bit"
                ],
                "correct": [
                    2
                ],
                "explanation": "Les PDU sont : Couche 1 = Bits, Couche 2 = Trames, Couche 3 = Paquets, Couche 4 = Segments (TCP) / Datagrammes (UDP), Couches 5-7 = Données applicatives."
            },
            {
                "id": 8,
                "question": "Laquelle des plages d'adresses suivantes est une plage d'adresses IPv4 privées selon la RFC 1918 ?",
                "options": [
                    "11.0.0.0/8",
                    "172.32.0.0/16",
                    "192.168.0.0/16",
                    "169.254.0.0/16"
                ],
                "correct": [
                    2
                ],
                "explanation": "Les plages privées RFC 1918 sont : 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 à 172.31.255.255) et 192.168.0.0/16. 169.254.0.0/16 est la plage Link-Local (APIPA), non routable."
            },
            {
                "id": 9,
                "question": "Quelle plage d'adresses IPv6 correspond aux adresses Link-Local (locales au lien), indispensables au fonctionnement des protocoles de découverte et de routage ?",
                "options": [
                    "2000::/3",
                    "FE80::/10",
                    "FC00::/7",
                    "FF00::/8"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les adresses IPv6 Link-Local commencent par le préfixe FE80::/10 (les 10 premiers bits sont 1111 1110 10). 2000::/3 sont les Global Unicast (GUA), FC00::/7 sont les Unique Local (ULA), et FF00::/8 sont les adresses Multicast."
            },
            {
                "id": 10,
                "question": "Quelle séquence de drapeaux TCP représente le mécanisme de poignée de main à trois voies (Three-Way Handshake) pour établir une connexion fiable ?",
                "options": [
                    "ACK → SYN → SYN-ACK",
                    "SYN → SYN-ACK → ACK",
                    "FIN → ACK → FIN-ACK",
                    "RST → SYN → ACK"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'établissement d'une session TCP se fait en 3 étapes : l'émetteur envoie un SYN, le récepteur répond avec un SYN-ACK, et l'émetteur finalise avec un ACK."
            },
            {
                "id": 11,
                "question": "Quelle est la distance maximale recommandée par les normes TIA/EIA pour une liaison Ethernet sur câble à paires torsadées (UTP Cat5e / Cat6) sans répéteur ?",
                "options": [
                    "50 mètres",
                    "100 mètres (90m horizontal + 10m de cordons de brassage)",
                    "250 mètres",
                    "500 mètres"
                ],
                "correct": [
                    1
                ],
                "explanation": "La norme Ethernet sur cuivre (100BASE-TX, 1000BASE-T) limite la longueur maximale d'un canal UTP à 100 mètres au total pour garantir l'intégrité du signal et respecter les contraintes de collision et d'atténuation."
            },
            {
                "id": 12,
                "question": "Quelle adresse MAC de diffusion (Broadcast) est utilisée en Couche 2 pour envoyer une trame à tous les équipements du segment local ?",
                "options": [
                    "00:00:00:00:00:00",
                    "FF:FF:FF:FF:FF:FF",
                    "01:00:5E:00:00:01",
                    "33:33:00:00:00:01"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'adresse MAC broadcast FF:FF:FF:FF:FF:FF est composée uniquement de bits à 1 (48 bits). Elle est transmise par les commutateurs sur tous les ports du VLAN concerné."
            },
            {
                "id": 13,
                "question": "Quelle commande permet d'afficher la table de correspondance entre les adresses IP et les adresses MAC apprises sur un routeur Cisco ?",
                "options": [
                    "show mac address-table",
                    "show ip arp",
                    "show ip route",
                    "show interfaces status"
                ],
                "correct": [
                    1
                ],
                "explanation": "'show ip arp' affiche la table ARP du routeur (résolution IP -> MAC). 'show mac address-table' est utilisé sur les commutateurs pour voir les correspondances Port -> MAC."
            },
            {
                "id": 14,
                "question": "Sur un sous-réseau point-à-point 192.168.50.248/29, quelle est la dernière adresse IP d'hôte utilisable ?",
                "options": [
                    "192.168.50.253",
                    "192.168.50.254",
                    "192.168.50.255",
                    "192.168.50.250"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le masque /29 a un pas de 8 (256 - 248 = 8). Le bloc est 192.168.50.248 à .255. L'adresse réseau est .248, le broadcast est .255. Les hôtes utilisables vont de 192.168.50.249 à 192.168.50.254. La dernière est 192.168.50.254."
            },
            {
                "id": 15,
                "question": "Quels sont les numéros de port de Couche 4 bien connus (Well-Known Ports) respectivement utilisés par les protocoles SSH, DNS et HTTPS ?",
                "options": [
                    "SSH : 23 | DNS : 67 | HTTPS : 80",
                    "SSH : 22 | DNS : 53 (UDP/TCP) | HTTPS : 443 (TCP)",
                    "SSH : 21 | DNS : 69 | HTTPS : 8080",
                    "SSH : 22 | DNS : 123 | HTTPS : 443"
                ],
                "correct": [
                    1
                ],
                "explanation": "SSH utilise le port TCP 22. DNS utilise le port UDP/TCP 53. HTTPS utilise le port TCP 443. (23 est Telnet, 80 est HTTP, 67/68 est DHCP, 123 est NTP)."
            }
        ]
    },
    "phase2": {
        "title": "Quiz Phase 2 : Commutation, VLANs & Spanning Tree (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Comment un commutateur (switch) Ethernet alimente-t-il sa table d'adresses MAC (table CAM) ?",
                "options": [
                    "En analysant l'adresse MAC destination de chaque trame reçue",
                    "En analysant l'adresse MAC source de chaque trame entrante sur un port",
                    "En interrogeant périodiquement le serveur DNS local",
                    "En exécutant le protocole ARP en broadcast toutes les 30 secondes"
                ],
                "correct": [
                    1
                ],
                "explanation": "Un commutateur apprend dynamiquement les correspondances port-MAC en observant l'adresse MAC source de chaque trame qui entre sur ses interfaces."
            },
            {
                "id": 2,
                "question": "Quel est le comportement d'un switch lorsqu'il reçoit une trame unicast dont l'adresse MAC de destination n'est PAS présente dans sa table CAM ?",
                "options": [
                    "Il rejette immédiatement la trame (Drop)",
                    "Il diffuse la trame sur tous les ports du même VLAN sauf le port d'entrée (Flooding unicast inconnu)",
                    "Il envoie une requête ICMP Destination Unreachable à la source",
                    "Il bascule le port en état err-disable"
                ],
                "correct": [
                    1
                ],
                "explanation": "Lors d'un 'Unknown Unicast Flooding', le switch inonde la trame sur tous les ports appartenant au même VLAN, à l'exclusion du port de réception."
            },
            {
                "id": 3,
                "question": "À quoi sert le protocole 802.1Q sur un lien Trunk entre deux commutateurs ?",
                "options": [
                    "À chiffrer les trames circulant sur la fibre optique",
                    "À insérer un en-tête de 4 octets (Tag) contenant le VLAN ID (VID) pour multiplexer plusieurs VLANs",
                    "À attribuer automatiquement des adresses IP aux commutateurs",
                    "À remplacer le protocole Spanning Tree"
                ],
                "correct": [
                    1
                ],
                "explanation": "La norme IEEE 802.1Q insère un tag de 4 octets (comprenant le TPID 0x8100 et le VLAN ID sur 12 bits) dans la trame Ethernet pour identifier le VLAN d'appartenance sur les liens trunks."
            },
            {
                "id": 4,
                "question": "Que devient une trame transmise sur un trunk 802.1Q si elle appartient au VLAN Natif (Native VLAN) configuré ?",
                "options": [
                    "Elle est chiffrée avec une clé asymétrique",
                    "Elle est transmise sans tag 802.1Q (Untagged)",
                    "Elle est systématiquement rejetée par le switch récepteur",
                    "Elle est automatiquement assignée au VLAN 999"
                ],
                "correct": [
                    1
                ],
                "explanation": "Par défaut, le trafic appartenant au VLAN natif (par défaut VLAN 1 sur Cisco) circule sans étiquette (untagged) sur le trunk 802.1Q."
            },
            {
                "id": 5,
                "question": "Dans le protocole Spanning Tree (STP 802.1D), quel critère détermine quel commutateur devient le Root Bridge (pont racine) du réseau ?",
                "options": [
                    "Le switch qui possède le débit global le plus élevé",
                    "Le switch avec le Bridge ID (BID) le plus faible (Priorité + MAC)",
                    "Le switch avec l'adresse IP la plus élevée",
                    "Le switch qui a démarré en premier"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le Root Bridge est élu sur la base du Bridge ID le plus faible. Le BID se compose d'une priorité (par défaut 32768 + Sys-ID-Ext) et de l'adresse MAC du commutateur."
            },
            {
                "id": 6,
                "question": "Quels sont les rôles de port introduits par le protocole Rapid Spanning Tree Protocol (RSTP 802.1w) pour remplacer les états bloquants de 802.1D ?",
                "options": [
                    "Root Port et Designated Port uniquement",
                    "Alternate Port (secours du Root Port) et Backup Port (secours d'un Designated Port)",
                    "Master Port et Slave Port",
                    "Active Port et Passive Port"
                ],
                "correct": [
                    1
                ],
                "explanation": "RSTP définit le rôle Alternate Port (chemin de secours vers le Root Bridge) et Backup Port (chemin redondant vers le même segment partagé), permettant une convergence en moins d'une seconde."
            },
            {
                "id": 7,
                "question": "Quelle fonctionnalité Cisco permet à un port de passer immédiatement de l'état Blocking à Forwarding sans attendre les délais Listening et Learning ?",
                "options": [
                    "BPDU Filter",
                    "PortFast",
                    "UplinkFast",
                    "Root Guard"
                ],
                "correct": [
                    1
                ],
                "explanation": "PortFast est activé sur les ports d'accès connectés à des hôtes finaux (PC, serveurs). Il fait passer le port directement en Forwarding pour éviter les timeouts DHCP."
            },
            {
                "id": 8,
                "question": "Quel est le comportement de la fonctionnalité BPDU Guard lorsqu'elle est activée sur un port où PortFast est configuré et qu'une trame BPDU y est reçue ?",
                "options": [
                    "Le port ignore simplement la trame BPDU et continue d'acheminer le trafic",
                    "Le port passe immédiatement en état d'erreur 'err-disable' et se désactive",
                    "Le switch devient automatiquement le Root Bridge",
                    "Le switch supprime le VLAN associé"
                ],
                "correct": [
                    1
                ],
                "explanation": "BPDU Guard protège la topologie STP : si un switch non autorisé ou un utilisateur malveillant branche un commutateur sur un port PortFast, le port reçoit un BPDU et se place instantanément en 'err-disable'."
            },
            {
                "id": 9,
                "question": "Dans le protocole VTP (VLAN Trunking Protocol), quel mode permet à un switch de créer/modifier des VLANs locaux sans les propager ni écraser sa base avec celle des autres switches ?",
                "options": [
                    "Mode Server",
                    "Mode Client",
                    "Mode Transparent",
                    "Mode Off"
                ],
                "correct": [
                    2
                ],
                "explanation": "En mode VTP Transparent, le commutateur ne synchronise pas sa base avec les autres et n'émet pas de modifications, mais il relaie les annonces VTP reçues sur ses trunks."
            },
            {
                "id": 10,
                "question": "Quelle commande Cisco IOS permet de vérifier l'état des trunks, les VLANs autorisés et le VLAN natif configuré sur chaque interface ?",
                "options": [
                    "show ip interface brief",
                    "show interfaces trunk",
                    "show mac address-table",
                    "show vlan brief"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande 'show interfaces trunk' affiche en détail le mode de négociation, l'encapsulation (802.1Q), le statut du trunk, le VLAN natif et la liste des VLANs autorisés et actifs."
            },
            {
                "id": 11,
                "question": "Quelle commande globale sous Cisco IOS réactive automatiquement un port commutateur placé en état 'err-disable' après un délai d'attente (sans intervention manuelle d'extinction/rallumage) ?",
                "options": [
                    "errdisable recovery cause all",
                    "switchport port-security auto-recover",
                    "spanning-tree portfast auto",
                    "clear mac address-table dynamic"
                ],
                "correct": [
                    0
                ],
                "explanation": "La commande 'errdisable recovery cause <cause|all>' permet au switch de tenter de sortir automatiquement un port de l'état err-disable après un délai configurable (par défaut 300 secondes via 'errdisable recovery interval <secondes>')."
            },
            {
                "id": 12,
                "question": "Lors du raccordement d'un téléphone IP Cisco sur un port de switch avec un PC branché derrière le téléphone, quelle configuration garantit la séparation du trafic voix et données ?",
                "options": [
                    "Configurer deux trunks 802.1Q distincts sur le port",
                    "Configurer un VLAN d'accès pour les données et un Voice VLAN pour le téléphone (ex: switchport access vlan 10, switchport voice vlan 20)",
                    "Désactiver le protocole Spanning Tree",
                    "Attribuer une adresse MAC statique au téléphone"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande 'switchport voice vlan 20' configure le port pour taguer le trafic vocal en 802.1p/Q avec une priorité CoS 5, tandis que le PC échange ses trames en mode non-tagué sur le VLAN d'accès (ex: VLAN 10)."
            },
            {
                "id": 13,
                "question": "Quelle est la commande globale pour activer PortFast et BPDU Guard par défaut sur l'ensemble des ports d'accès d'un commutateur Catalyst ?",
                "options": [
                    "spanning-tree portfast default ET spanning-tree portfast bpduguard default",
                    "switchport mode access default",
                    "spanning-tree mode rapid-pvst all",
                    "spanning-tree guard root"
                ],
                "correct": [
                    0
                ],
                "explanation": "Ces deux commandes globales appliquent instantanément PortFast et la protection BPDU Guard sur tout port configuré en mode d'accès, simplifiant la sécurisation STP à l'échelle du commutateur."
            },
            {
                "id": 14,
                "question": "En quoi la protection STP 'Root Guard' diffère-t-elle de 'BPDU Guard' ?",
                "options": [
                    "Root Guard éteint le commutateur en cas de problème",
                    "Root Guard empêche un port de devenir Root Port en le plaçant temporairement en état 'root-inconsistent' dès réception d'un BPDU supérieur, sans désactiver physiquement le port",
                    "Root Guard est propriétaire Huawei",
                    "BPDU Guard n'opère que sur la fibre optique"
                ],
                "correct": [
                    1
                ],
                "explanation": "Root Guard garantit la stabilité de la racine STP : si un switch externe envoie un meilleur BPDU sur un port désigné protégé, le port devient 'root-inconsistent' (bloqué au trafic) jusqu'à ce que les annonces anormales cessent, évitant le basculement err-disable."
            },
            {
                "id": 15,
                "question": "Quel est le rôle de la fonctionnalité VTP Pruning sur les liens Trunk ?",
                "options": [
                    "Supprimer définitivement les VLANs de la base locale",
                    "Économiser la bande passante en bloquant la diffusion des trames de broadcast, multicast et unicast inconnu sur les trunks vers les switches n'ayant aucun port actif dans ce VLAN",
                    "Chiffrer le protocole VTP avec AES-256",
                    "Remplacer le routage inter-VLAN"
                ],
                "correct": [
                    1
                ],
                "explanation": "VTP Pruning optimise l'utilisation des liens trunks : si un switch n'a aucun utilisateur dans le VLAN 20, le switch voisin cesse de lui envoyer les trames inondées de ce VLAN."
            }
        ]
    },
    "phase3": {
        "title": "Quiz Phase 3 : Routage IP & OSPFv2 (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Lorsqu'un routeur compare plusieurs routes candidates vers la même destination, quelle règle a la priorité absolue pour déterminer la route choisie ?",
                "options": [
                    "La Distance Administrative la plus faible",
                    "La métrique la plus faible",
                    "Le préfixe le plus long et spécifique (Longest Prefix Match)",
                    "L'interface la plus rapide physiquement"
                ],
                "correct": [
                    2
                ],
                "explanation": "Le principe du Longest Prefix Match (masque le plus précis, ex: /28 avant /24) prime sur tout le reste dans le choix du routage, avant même d'examiner la distance administrative."
            },
            {
                "id": 2,
                "question": "Quelles sont les valeurs par défaut respectives de Distance Administrative (AD) pour une route directement connectée, une route statique et une route OSPF ?",
                "options": [
                    "Connectée : 0 | Statique : 1 | OSPF : 110",
                    "Connectée : 1 | Statique : 10 | OSPF : 90",
                    "Connectée : 0 | Statique : 5 | OSPF : 120",
                    "Connectée : 10 | Statique : 100 | OSPF : 110"
                ],
                "correct": [
                    0
                ],
                "explanation": "Les AD par défaut sont : Directement connectée = 0, Statique = 1, EIGRP interne = 90, OSPF = 110, IS-IS = 115, RIP = 120, eBGP = 20."
            },
            {
                "id": 3,
                "question": "Quelle syntaxe Cisco configure une route statique flottante de secours vers 10.0.0.0/8 via 192.168.1.2 avec une Distance Administrative de 150 ?",
                "options": [
                    "ip route 10.0.0.0 255.0.0.0 192.168.1.2 metric 150",
                    "ip route 10.0.0.0 255.0.0.0 192.168.1.2 150",
                    "router ospf 1 -> network 10.0.0.0 0.255.255.255 distance 150",
                    "ip route 192.168.1.2 255.255.255.255 10.0.0.0 150"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande 'ip route <réseau> <masque> <prochain-saut> [distance]' permet de définir une AD personnalisée (ici 150), qui restera en sommeil tant qu'une route d'AD inférieure est active."
            },
            {
                "id": 4,
                "question": "Comment le protocole à état de lien OSPF calcule-t-il la métrique de coût (Cost) d'une interface ?",
                "options": [
                    "Nombre de sauts (Hop Count)",
                    "Délai cumulé de l'interface en microsecondes",
                    "Bande passante de référence (par défaut 100 Mbps) / Bande passante réelle de l'interface",
                    "Charge de l'interface divisée par la fiabilité"
                ],
                "correct": [
                    2
                ],
                "explanation": "Le coût OSPF est : Reference Bandwidth / Interface Bandwidth. Par défaut, 100 Mbps / Bande passante (ex: 100M/100M = 1 pour FastEthernet, 100M/10M = 10 pour Ethernet)."
            },
            {
                "id": 5,
                "question": "Dans un réseau broadcast multi-accès (Ethernet), quels routeurs OSPF sont élus pour centraliser les échanges de LSAs ?",
                "options": [
                    "Le Root Router et le Alternate Router",
                    "Le Designated Router (DR) et le Backup Designated Router (BDR)",
                    "L'Autonomous System Boundary Router (ASBR)",
                    "Le Master Router et le Standby Router"
                ],
                "correct": [
                    1
                ],
                "explanation": "Sur les segments multi-accès (broadcast), OSPF élit un DR et un BDR pour éviter le maillage complet d'adjacences (n*(n-1)/2). Les autres routeurs (DROther) ne forment une adjacence FULL qu'avec le DR et le BDR."
            },
            {
                "id": 6,
                "question": "Quels paramètres doivent impérativement concorder entre deux routeurs voisins pour qu'une adjacence OSPF s'établisse avec succès ?",
                "options": [
                    "Même Area ID, même sous-réseau/masque, mêmes Hello/Dead timers et même MTU",
                    "Même Router-ID, même hostname et même version de Cisco IOS",
                    "Même adresse MAC et même type de câble",
                    "Même quantité de mémoire vive (RAM) sur les deux routeurs"
                ],
                "correct": [
                    0
                ],
                "explanation": "Pour former une adjacence OSPF, les routeurs doivent partager le même Area ID, être dans le même sous-réseau IP avec le même masque, avoir les mêmes timers Hello/Dead, la même authentification et des Router-IDs uniques."
            },
            {
                "id": 7,
                "question": "Quel état de voisinage OSPF indique que les routeurs ont échangé leurs bases de données topologiques (LSDB) et sont parfaitement synchronisés ?",
                "options": [
                    "2-Way",
                    "ExStart",
                    "Loading",
                    "Full"
                ],
                "correct": [
                    3
                ],
                "explanation": "L'état FULL indique que les routeurs sont totalement synchronisés et possèdent une base de données de l'état des liens (LSDB) strictement identique pour l'area."
            },
            {
                "id": 8,
                "question": "Quelle adresse IPv4 multicast est utilisée par les routeurs DROther pour envoyer leurs mises à jour Link-State au DR et au BDR ?",
                "options": [
                    "224.0.0.1",
                    "224.0.0.5 (AllSPFRouters)",
                    "224.0.0.6 (AllDRouters)",
                    "224.0.0.9"
                ],
                "correct": [
                    2
                ],
                "explanation": "224.0.0.6 (AllDRouters) est écoutée exclusivement par le DR et le BDR. Les paquets envoyés par le DR à destination de tous les routeurs OSPF utilisent l'adresse 224.0.0.5 (AllSPFRouters)."
            },
            {
                "id": 9,
                "question": "Pourquoi configure-t-on la commande 'passive-interface' sur une interface LAN connectée à des postes utilisateurs sous OSPF ?",
                "options": [
                    "Pour désactiver le routage IP sur ce sous-réseau",
                    "Pour empêcher l'émission de paquets Hello OSPF sur ce LAN tout en continuant d'annoncer son réseau aux autres routeurs",
                    "Pour convertir l'interface en interface de loopback",
                    "Pour bloquer les attaques par déni de service SYN flood"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande 'passive-interface' supprime l'émission inutile et risquée de paquets Hello OSPF vers les utilisateurs finaux (évite l'injection de fausses routes OSPF) tout en annonçant le préfixe dans la LSDB."
            },
            {
                "id": 10,
                "question": "Quelle commande Cisco permet d'injecter automatiquement la route par défaut d'un routeur de bordure dans tout le domaine OSPF ?",
                "options": [
                    "ip route 0.0.0.0 0.0.0.0 null0",
                    "default-information originate",
                    "redistribute static subnets metric-type 1",
                    "area 0 default-cost 10"
                ],
                "correct": [
                    1
                ],
                "explanation": "Dans la configuration 'router ospf <process>', la commande 'default-information originate' génère un LSA Type 5 externe injectant la passerelle de dernier recours (0.0.0.0/0) dans tout le réseau OSPF."
            },
            {
                "id": 11,
                "question": "Dans quel ordre de priorité un routeur Cisco détermine-t-il son identifiant de routeur OSPF (Router-ID) s'il n'est pas spécifié manuellement ?",
                "options": [
                    "L'IP la plus faible sur une interface physique, puis l'adresse MAC",
                    "1. Commande 'router-id' | 2. IP active la plus élevée sur une Loopback | 3. IP active la plus élevée sur une interface physique",
                    "L'adresse IP de la passerelle par défaut",
                    "Un numéro aléatoire généré par le processeur"
                ],
                "correct": [
                    1
                ],
                "explanation": "La priorité absolue est la configuration explicite via 'router-id X.X.X.X'. À défaut, le routeur choisit la plus haute adresse IP parmi ses interfaces Loopback actives. Sinon, il prend la plus haute IP parmi ses interfaces physiques actives."
            },
            {
                "id": 12,
                "question": "Quelles sont les valeurs par défaut des temporisateurs Hello et Dead d'OSPF sur un réseau multi-accès broadcast (ex: Ethernet Gigabit) ?",
                "options": [
                    "Hello : 5 secondes | Dead : 15 secondes",
                    "Hello : 10 secondes | Dead : 40 secondes",
                    "Hello : 30 secondes | Dead : 120 secondes",
                    "Hello : 60 secondes | Dead : 180 secondes"
                ],
                "correct": [
                    1
                ],
                "explanation": "Sur les segments de type Broadcast et Point-to-Point, le timer Hello est de 10 secondes et le Dead timer est de 4 fois le Hello (40 secondes). Sur les réseaux Non-Broadcast (NBMA), ils sont de 30s / 120s."
            },
            {
                "id": 13,
                "question": "Quel avantage apporte la configuration du type de réseau OSPF 'point-to-point' ('ip ospf network point-to-point') sur une liaison directe entre deux routeurs ?",
                "options": [
                    "Elle permet d'utiliser le protocole RIP simultanément",
                    "Elle supprime l'élection de DR/BDR, accélérant ainsi la formation de l'adjacence et la convergence",
                    "Elle double automatiquement la bande passante",
                    "Elle active le chiffrement matériel"
                ],
                "correct": [
                    1
                ],
                "explanation": "Sur un lien point-à-point, il n'y a que deux routeurs : élire un DR/BDR est inutile. Le mode point-to-point élimine ce délai et les routeurs passent immédiatement à l'état FULL."
            },
            {
                "id": 14,
                "question": "Dans la table de routage ('show ip route'), que signifie la lettre 'O' et la mention 'O IA' devant une route ?",
                "options": [
                    "O = Route externe RIP | O IA = Route statique",
                    "O = Route intra-area (même zone OSPF) | O IA = Route inter-area (apprise d'une autre zone OSPF)",
                    "O = Route désactivée | O IA = Route active",
                    "O = Route optimisée | O IA = Route inaccessible"
                ],
                "correct": [
                    1
                ],
                "explanation": "Dans la table de routage : 'O' désigne une route intra-zone (dans la même zone que le routeur). 'O IA' (Inter-Area) désigne une route injectée par un ABR depuis une autre zone."
            },
            {
                "id": 15,
                "question": "Sur un segment Ethernet partagé où plusieurs routeurs OSPF sont présents, quel état d'adjacence normal observe-t-on entre deux routeurs de statut 'DROther' ?",
                "options": [
                    "FULL / DROTHER",
                    "2-WAY / DROTHER",
                    "INIT / DROTHER",
                    "DOWN / DROTHER"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les routeurs DROther n'établissent de relation FULL qu'avec le DR et le BDR. Entre eux, ils s'arrêtent à l'état 2-WAY (ils se reconnaissent via les Hello mais n'échangent pas de LSDB directement)."
            }
        ]
    },
    "phase4": {
        "title": "Quiz Phase 4 : Routage Inter-VLAN (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Dans une architecture 'Router-on-a-Stick' (RoaS), comment le routeur gère-t-il le trafic de plusieurs VLANs sur une seule liaison physique ?",
                "options": [
                    "En créant des sous-interfaces logiques (ex: g0/0.10) associées chacune à un tag 802.1Q",
                    "En attribuant plusieurs adresses MAC physiques à la carte",
                    "En désactivant le Spanning Tree sur le port du switch",
                    "En utilisant le protocole VTP en mode serveur"
                ],
                "correct": [
                    0
                ],
                "explanation": "Le Router-on-a-Stick utilise une interface physique découpée en sous-interfaces virtuelles, chacune configurée avec 'encapsulation dot1Q <vlan-id>' et une adresse IP faisant office de passerelle."
            },
            {
                "id": 2,
                "question": "Lors de la configuration d'une sous-interface de routage inter-VLAN sur un routeur Cisco, quelle commande DOIT être saisie AVANT d'assigner l'adresse IP ?",
                "options": [
                    "no shutdown",
                    "encapsulation dot1Q <vlan-id>",
                    "ip routing",
                    "switchport mode trunk"
                ],
                "correct": [
                    1
                ],
                "explanation": "Cisco IOS refuse l'attribution d'une adresse IP sur une sous-interface tant que le type d'encapsulation 802.1Q et son ID de VLAN ne sont pas définis avec 'encapsulation dot1Q <id>'."
            },
            {
                "id": 3,
                "question": "Quelle commande globale est indispensable sur un commutateur multicouche (Switch L3) pour activer sa capacité de routage de paquets IP ?",
                "options": [
                    "ip routing",
                    "router ospf 1",
                    "ip forward-protocol",
                    "spanning-tree mode rapid-pvst"
                ],
                "correct": [
                    0
                ],
                "explanation": "Par défaut, les commutateurs Catalyst opèrent en Couche 2. La commande globale 'ip routing' est requise pour initialiser la table de routage et le moteur CEF (Cisco Express Forwarding)."
            },
            {
                "id": 4,
                "question": "Qu'est-ce qu'une SVI (Switched Virtual Interface) sur un switch de niveau 3 ?",
                "options": [
                    "Un port physique dédié à la connexion d'un routeur",
                    "Une interface logique de niveau 3 associée à un VLAN (ex: interface vlan 10) servant de passerelle par défaut",
                    "Une interface de loopback utilisée pour tester la stack IP",
                    "Un port trunk agrégé via EtherChannel"
                ],
                "correct": [
                    1
                ],
                "explanation": "Une SVI ('interface vlan X') est une interface virtuelle L3 qui permet au switch de router les paquets entre VLANs directement à vitesse de câble (wire-speed) via ses circuits ASIC."
            },
            {
                "id": 5,
                "question": "Quelles conditions doivent être réunies pour qu'une interface SVI (ex: 'interface vlan 20') passe dans l'état opérationnel 'Up/Up' ?",
                "options": [
                    "Le VLAN 20 doit exister dans la base de données VLAN et au moins un port du VLAN 20 (accès ou trunk) doit être en état 'Up'",
                    "Le protocole OSPF doit être activé sur le switch",
                    "Toutes les interfaces physiques du switch doivent être actives",
                    "Le switch doit impérativement être configuré en Root Bridge STP"
                ],
                "correct": [
                    0
                ],
                "explanation": "Pour qu'une SVI soit active (Up/Up), le VLAN doit exister et être actif dans la base du switch, et au moins un port physique associé à ce VLAN doit être actif et non bloqué par STP."
            },
            {
                "id": 6,
                "question": "Comment transforme-t-on un port de commutation physique (Couche 2) en port routé (Couche 3) sur un switch multicouche Cisco ?",
                "options": [
                    "switchport mode access",
                    "no switchport",
                    "ip address dhcp",
                    "encapsulation dot1Q"
                ],
                "correct": [
                    1
                ],
                "explanation": "La commande d'interface 'no switchport' désactive les fonctions de commutation L2 sur le port et permet d'y assigner directement une adresse IP comme sur une interface de routeur."
            },
            {
                "id": 7,
                "question": "Des PC du VLAN 10 n'arrivent pas à obtenir d'adresse IP d'un serveur DHCP situé dans le VLAN 20. Quelle commande d'interface résout ce problème sur la passerelle du VLAN 10 ?",
                "options": [
                    "ip dhcp snooping",
                    "ip helper-address <IP_du_serveur_DHCP>",
                    "ip routing",
                    "dhcp-relay enable"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les requêtes DHCP Discover sont des broadcasts (255.255.255.255) non routés. 'ip helper-address' transforme le broadcast UDP en paquet unicast routable vers l'adresse du serveur DHCP."
            },
            {
                "id": 8,
                "question": "Quel est le principal inconvénient d'une architecture inter-VLAN 'Router-on-a-Stick' par rapport à un switch de niveau 3 ?",
                "options": [
                    "Le routeur ne supporte pas le protocole 802.1Q",
                    "Le lien physique unique entre le switch et le routeur constitue un goulet d'étranglement (goulot) car le trafic aller et retour emprunte le même câble",
                    "Les adresses IP privées ne sont pas supportées",
                    "Elle nécessite obligatoirement de la fibre optique"
                ],
                "correct": [
                    1
                ],
                "explanation": "En RoaS, tout le trafic inter-VLAN doit remonter au routeur puis redescendre sur le même lien trunk physique, créant une contention de bande passante et une latence accrue."
            },
            {
                "id": 9,
                "question": "Quelle commande permet de vérifier sur un switch L3 que les routes entre les SVIs sont bien actives et installées ?",
                "options": [
                    "show ip route",
                    "show vlan brief",
                    "show interfaces status",
                    "show arp"
                ],
                "correct": [
                    0
                ],
                "explanation": "'show ip route' affiche la table de routage du switch L3. On y retrouve les réseaux connectés associés aux interfaces Vlan (code 'C' pour Directement Connecté)."
            },
            {
                "id": 10,
                "question": "Sur un routeur RoaS, l'interface physique g0/0 est 'down / down'. Quel sera l'état des sous-interfaces g0/0.10 et g0/0.20 ?",
                "options": [
                    "Elles restent Up/Up car elles sont virtuelles",
                    "Elles passent également à l'état Down / Down",
                    "Elles passent en état Up / Down",
                    "Elles sont automatiquement supprimées de la configuration"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les sous-interfaces dépendent directement de l'état matériel de l'interface parente. Si l'interface physique est inactive ou déconnectée, toutes les sous-interfaces associées passent à Down."
            },
            {
                "id": 11,
                "question": "Quelle commande permet à un commutateur de Couche 2 d'être administrable à distance (via SSH ou SNMP) depuis un sous-réseau distant ?",
                "options": [
                    "ip route 0.0.0.0 0.0.0.0 g0/1",
                    "ip default-gateway <adresse_IP_de_la_passerelle>",
                    "ip helper-address",
                    "default-router"
                ],
                "correct": [
                    1
                ],
                "explanation": "Un commutateur L2 pur ne route pas les paquets. Pour que sa SVI de gestion puisse répondre à des requêtes provenant d'autres sous-réseaux, il a besoin de 'ip default-gateway <IP>'."
            },
            {
                "id": 12,
                "question": "Sur un switch L3, les interfaces SVI 'Vlan 10' et 'Vlan 20' sont configurées avec leurs IP et sont Up/Up. Pourtant, les hôtes des deux VLANs ne peuvent pas communiquer. Quelle commande a très probablement été oubliée ?",
                "options": [
                    "no shutdown sur le switch",
                    "ip routing (en mode de configuration globale)",
                    "spanning-tree mode rapid-pvst",
                    "vlan 10 name data"
                ],
                "correct": [
                    1
                ],
                "explanation": "Sur les commutateurs Catalyst, les fonctions de routage sont inactives par défaut. Sans la commande globale 'ip routing', le switch agit comme un switch L2 classique et ignore les transferts de paquets entre ses SVIs."
            },
            {
                "id": 13,
                "question": "Quelle est la commande pour configurer la route statique par défaut vers Internet sur un commutateur multicouche (L3) où 'ip routing' est activé ?",
                "options": [
                    "ip default-gateway 192.168.1.1",
                    "ip route 0.0.0.0 0.0.0.0 <IP_du_routeur_suivant>",
                    "default-information originate",
                    "gateway 0.0.0.0"
                ],
                "correct": [
                    1
                ],
                "explanation": "Dès lors que 'ip routing' est actif, le switch L3 utilise la commande de routage standard 'ip route 0.0.0.0 0.0.0.0 <next-hop>' exactement comme un routeur Cisco."
            },
            {
                "id": 14,
                "question": "Quel est le bénéfice d'utiliser des ports routés ('no switchport') pour relier les commutateurs de distribution et de cœur de réseau (Core) ?",
                "options": [
                    "Éliminer le protocole Spanning Tree entre les switches, supprimant les risques de boucles L2 et permettant une convergence instantanée via OSPF/ECMP",
                    "Permettre l'utilisation de câbles USB à la place d'Ethernet",
                    "Désactiver le pare-feu du switch",
                    "Supprimer l'adressage IP"
                ],
                "correct": [
                    0
                ],
                "explanation": "Dans un cœur de réseau L3, chaque lien entre switches est un lien routé point-à-point avec son sous-réseau IP dédié. STP n'est pas actif sur ces liens, ce qui supprime tout risque de boucle de commutation et permet le multi-chemin (ECMP)."
            },
            {
                "id": 15,
                "question": "Sur un routeur configuré en Router-on-a-Stick, quelle erreur de configuration empêche les machines du VLAN 30 d'atteindre leur passerelle ?",
                "options": [
                    "Avoir configuré une adresse IP publique",
                    "Avoir configuré 'encapsulation dot1Q 40' sur la sous-interface g0/0.30 au lieu de 'encapsulation dot1Q 30'",
                    "Avoir activé PortFast sur le routeur",
                    "Avoir nommé l'interface g0/0.30"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le numéro de sous-interface (ex: .30) est purement local. C'est la commande 'encapsulation dot1Q <VID>' qui détermine quel tag 802.1Q est accepté et traité par la sous-interface."
            }
        ]
    },
    "phase5": {
        "title": "Quiz Phase 5 : Sécurité Réseau & Listes de Contrôle d'Accès (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Quelle est la plage de numérotation standard pour les listes de contrôle d'accès (ACL) IPv4 standard sous Cisco IOS ?",
                "options": [
                    "1 à 99 et 1300 à 1999",
                    "100 à 199 et 2000 à 2699",
                    "1 à 50 uniquement",
                    "1000 à 1500"
                ],
                "correct": [
                    0
                ],
                "explanation": "Les ACLs Standard utilisent les numéros 1-99 et 1300-1999 (plage étendue). Les ACLs Étendues utilisent les numéros 100-199 et 2000-2699."
            },
            {
                "id": 2,
                "question": "Sur quel critère unique une ACL IPv4 Standard peut-elle filtrer le trafic réseau ?",
                "options": [
                    "L'adresse IP destination et le port de couche 4",
                    "L'adresse IP source uniquement",
                    "L'adresse MAC source et le protocole TCP",
                    "Le protocole applicatif (HTTP, DNS)"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les ACLs Standard ne peuvent filtrer les paquets que sur la base de leur adresse IP source. Elles ne peuvent pas examiner la destination ni les numéros de ports L4."
            },
            {
                "id": 3,
                "question": "Que contient de manière invisible et automatique la fin de chaque liste de contrôle d'accès (ACL) Cisco ?",
                "options": [
                    "Une autorisation universelle (permit any)",
                    "Un refus implicite de tout le trafic (deny any / deny ip any any)",
                    "Une redirection vers le port console",
                    "Un redémarrage du routeur en cas de non-concordance"
                ],
                "correct": [
                    1
                ],
                "explanation": "Toute ACL Cisco comporte un 'implicit deny' final. Si un paquet ne correspond à aucune des règles explicites de la liste, il est automatiquement rejeté."
            },
            {
                "id": 4,
                "question": "Quel masque générique (Wildcard Mask) correspond exactement au sous-réseau IPv4 192.168.10.0 avec un masque 255.255.255.240 (/28) ?",
                "options": [
                    "0.0.0.15",
                    "0.0.0.255",
                    "0.0.0.31",
                    "255.255.255.0"
                ],
                "correct": [
                    0
                ],
                "explanation": "Le masque générique s'obtient en inversant le masque de sous-réseau : 255.255.255.255 - 255.255.255.240 = 0.0.0.15."
            },
            {
                "id": 5,
                "question": "Selon les bonnes pratiques Cisco, où est-il recommandé de positionner une ACL Standard et une ACL Étendue ?",
                "options": [
                    "Standard au plus près de la source | Étendue au plus près de la destination",
                    "Standard au plus près de la destination | Étendue au plus près de la source",
                    "Les deux doivent toujours être placées sur le switch central",
                    "Sur toutes les interfaces en mode entrant et sortant"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les ACLs Standard filtrent sur l'IP source : placées trop tôt, elles bloqueraient tout le trafic de la source. Les ACLs Étendues filtrent précisément source et destination et doivent être placées au plus près de la source pour économiser la bande passante."
            },
            {
                "id": 6,
                "question": "Sous Port Security, quel mode de violation désactive complètement le port (état err-disable) et incrémente le compteur de sécurité lors d'une infraction ?",
                "options": [
                    "Protect",
                    "Restrict",
                    "Shutdown",
                    "Drop"
                ],
                "correct": [
                    2
                ],
                "explanation": "Le mode Shutdown (par défaut sous Port Security) désactive l'interface ('err-disable'), éteint la LED du port, génère un message Syslog/SNMP et incrémente le compteur de violation."
            },
            {
                "id": 7,
                "question": "Quelle option de Port Security permet au commutateur d'apprendre dynamiquement l'adresse MAC connectée et de l'enregistrer dans la configuration courante (running-config) ?",
                "options": [
                    "switchport port-security mac-address dynamic",
                    "switchport port-security mac-address sticky",
                    "switchport port-security mac-address persistent",
                    "switchport port-security mac-address auto"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'option 'sticky' apprend les adresses MAC dynamiquement et les convertit en entrées statiques enregistrées dans la running-config, évitant la saisie manuelle de chaque adresse MAC."
            },
            {
                "id": 8,
                "question": "Quel rôle joue la fonctionnalité DHCP Snooping pour sécuriser un commutateur face aux serveurs DHCP pirates ?",
                "options": [
                    "Elle chiffre les trames DHCP avec TLS",
                    "Elle classe les ports en 'Trusted' (serveurs DHCP légitimes) et 'Untrusted' (clients), bloquant les messages DHCP Offer/Ack sur les ports Untrusted",
                    "Elle attribue des adresses IP fixes aux serveurs de fichiers",
                    "Elle empêche les collisions sur le réseau local"
                ],
                "correct": [
                    1
                ],
                "explanation": "DHCP Snooping n'autorise les réponses de serveurs DHCP (DHCPOFFER, DHCPACK) que sur les ports configurés comme 'trusted' (de confiance). Toute tentative de serveur DHCP pirate sur un port untrusted est bloquée."
            },
            {
                "id": 9,
                "question": "Contre quelle attaque le protocole Dynamic ARP Inspection (DAI) protège-t-il le réseau local en s'appuyant sur la base DHCP Snooping ?",
                "options": [
                    "L'attaque par déni de service SYN Flood",
                    "L'empoisonnement de cache ARP (ARP Spoofing / Man-in-the-Middle)",
                    "L'inondation de trames unicast inconnues",
                    "L'attaque par force brute sur SSH"
                ],
                "correct": [
                    1
                ],
                "explanation": "DAI inspecte les paquets ARP pour vérifier la concordance entre l'adresse IP et l'adresse MAC grâce à la table construite par DHCP Snooping, bloquant ainsi le vol d'identité par ARP Poisoning."
            },
            {
                "id": 10,
                "question": "Quelle commande permet de chiffrer l'ensemble des mots de passe en texte clair présents dans le fichier de configuration d'un équipement Cisco ?",
                "options": [
                    "service password-encryption",
                    "enable secret level 15",
                    "crypto key generate rsa",
                    "security passwords enable"
                ],
                "correct": [
                    0
                ],
                "explanation": "La commande 'service password-encryption' applique un algorithme de hachage (Type 7) pour masquer les mots de passe définis en clair (ex: console, vty) dans la running-config."
            },
            {
                "id": 11,
                "question": "Quelle est la différence fondamentale entre appliquer une ACL avec le mot-clé 'in' (entrant) et le mot-clé 'out' (sortant) sur une interface de routeur ?",
                "options": [
                    "'in' filtre les paquets dès réception avant toute décision de routage | 'out' filtre les paquets après consultation de la table de routage, avant l'émission sur le média",
                    "'in' ne fonctionne que pour les adresses MAC, 'out' pour les adresses IP",
                    "'in' autorise tout, 'out' bloque tout",
                    "'out' consomme systématiquement plus de mémoire RAM"
                ],
                "correct": [
                    0
                ],
                "explanation": "Une ACL 'in' est évaluée dès qu'un paquet arrive sur l'interface : s'il est rejeté, le routeur ne perd pas de CPU à chercher dans sa table de routage. Une ACL 'out' s'applique après le routage, juste avant l'envoi."
            },
            {
                "id": 12,
                "question": "Quelle commande permet de restreindre l'accès de gestion à distance (lignes VTY) aux seules adresses IP autorisées par l'ACL 10 ?",
                "options": [
                    "line vty 0 4 -> ip access-group 10 in",
                    "line vty 0 4 -> access-class 10 in",
                    "line vty 0 4 -> transport input acl 10",
                    "line vty 0 4 -> permit host 10"
                ],
                "correct": [
                    1
                ],
                "explanation": "Pour les lignes VTY (terminal virtuel Telnet/SSH), la commande est 'access-class <num> in' (et non 'ip access-group' qui est réservée aux interfaces physiques et logiques)."
            },
            {
                "id": 13,
                "question": "Dans une règle d'ACL étendue TCP, à quoi sert le mot-clé 'established' (ex: permit tcp any 192.168.1.0 0.0.0.255 established) ?",
                "options": [
                    "À vérifier que le mot de passe de session est correct",
                    "À n'autoriser que les paquets de retour faisant partie d'une connexion TCP déjà établie (flags ACK ou RST positionnés)",
                    "À bloquer les attaques par déni de service UDP",
                    "À forcer l'utilisation de TLS 1.3"
                ],
                "correct": [
                    1
                ],
                "explanation": "'established' vérifie les drapeaux ACK ou RST dans l'en-tête TCP. Cela permet aux clients internes d'initier des connexions vers l'extérieur et d'en recevoir les réponses sans autoriser les connexions entrantes directes."
            },
            {
                "id": 14,
                "question": "Quelle est la différence majeure entre les protocoles de sécurité AAA RADIUS et TACACS+ ?",
                "options": [
                    "RADIUS sépare l'authentification et l'autorisation, TACACS+ les fusionne",
                    "RADIUS est un standard IETF (UDP ports 1812/1813) chiffrant uniquement le mot de passe | TACACS+ est un protocole Cisco (TCP port 49) chiffrant l'intégralité du paquet",
                    "TACACS+ ne permet pas de tracer les commandes de l'administrateur",
                    "RADIUS n'est compatible qu'avec les switches HP"
                ],
                "correct": [
                    1
                ],
                "explanation": "TACACS+ utilise TCP (port 49) et chiffre tout le corps du paquet tout en séparant strictement Authentification, Autorisation et Accounting. RADIUS utilise UDP et ne chiffre que le mot de passe."
            },
            {
                "id": 15,
                "question": "Comment appelle-t-on l'attaque réseau où un pirate usurpe des milliers d'adresses MAC aléatoires pour épuiser toutes les adresses disponibles d'un serveur DHCP ?",
                "options": [
                    "DHCP Starvation",
                    "DHCP Poisoning",
                    "MAC Flooding de CAM",
                    "Smurf Attack"
                ],
                "correct": [
                    0
                ],
                "explanation": "L'attaque par épuisement DHCP (DHCP Starvation Attack) sature le pool d'adresses du serveur légitime, préparant souvent l'introduction d'un serveur DHCP pirate (Rogue DHCP Server)."
            }
        ]
    },
    "phase6": {
        "title": "Quiz Phase 6 : Technologies Avancées & Synthèse (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Quelle est la différence fondamentale entre les protocoles d'agrégation de liens EtherChannel PAgP et LACP ?",
                "options": [
                    "PAgP supporte jusqu'à 16 liens, LACP seulement 2",
                    "PAgP est un protocole propriétaire Cisco, tandis que LACP est un standard ouvert (IEEE 802.3ad)",
                    "PAgP fonctionne en Couche 3, LACP uniquement en Couche 2",
                    "LACP ne permet pas de faire du trunking"
                ],
                "correct": [
                    1
                ],
                "explanation": "PAgP (Port Aggregation Protocol) est propriétaire Cisco. LACP (Link Aggregation Control Protocol, IEEE 802.3ad/802.1ax) est le standard ouvert universellement interopérable."
            },
            {
                "id": 2,
                "question": "Quels modes LACP permettent d'établir avec succès un EtherChannel entre deux commutateurs connectés ?",
                "options": [
                    "Passive d'un côté et Passive de l'autre",
                    "Active d'un côté et soit Active soit Passive de l'autre",
                    "Desirable et Auto",
                    "On et Desirable"
                ],
                "correct": [
                    1
                ],
                "explanation": "En LACP, au moins un des deux côtés doit initier activement la négociation (mode Active). Deux côtés en mode Passive s'attendent mutuellement et le canal ne montera jamais."
            },
            {
                "id": 3,
                "question": "Dans le protocole de redondance de passerelle HSRP (Hot Standby Router Protocol), quel est le rôle de la commande 'standby <group> preempt' ?",
                "options": [
                    "Elle supprime le groupe de redondance",
                    "Elle permet à un routeur possédant une priorité plus élevée de reprendre automatiquement le rôle de routeur Actif après un redémarrage",
                    "Elle force le chiffrement des échanges HSRP",
                    "Elle partage équitablement la charge entre les deux routeurs"
                ],
                "correct": [
                    1
                ],
                "explanation": "Par défaut, HSRP ne préempte pas : un routeur actif qui revient en ligne reste en standby même si sa priorité est supérieure. 'standby preempt' lui permet de reprendre le rôle actif."
            },
            {
                "id": 4,
                "question": "Quelle adresse MAC virtuelle est utilisée par HSRP Version 1 pour le groupe HSRP numéro 10 ?",
                "options": [
                    "0000.0c07.ac0a",
                    "0000.5e00.010a",
                    "ffff.ffff.ffff",
                    "0007.0c00.ac10"
                ],
                "correct": [
                    0
                ],
                "explanation": "L'adresse MAC HSRPv1 est 0000.0c07.acXX, où XX est le numéro de groupe en hexadécimal. 10 en décimal = 0a en hexadécimal, d'où 0000.0c07.ac0a. (0000.5e00.01XX est l'adresse de VRRP)."
            },
            {
                "id": 5,
                "question": "Dans une architecture OSPF multi-zones (Multi-Area), quel nom porte le routeur qui possède des interfaces connectées à la fois dans la Backbone Area 0 et dans une autre zone ?",
                "options": [
                    "ASBR (Autonomous System Boundary Router)",
                    "ABR (Area Border Router)",
                    "DR (Designated Router)",
                    "Internal Router"
                ],
                "correct": [
                    1
                ],
                "explanation": "Un ABR (Area Border Router) se situe à la frontière entre la zone backbone (Area 0) et les zones périphériques (ex: Area 1). Il maintient une LSDB distincte pour chaque zone à laquelle il appartient."
            },
            {
                "id": 6,
                "question": "Comment s'obtient la partie identifiant d'interface (Interface ID de 64 bits) selon la méthode EUI-64 en IPv6 à partir d'une adresse MAC de 48 bits ?",
                "options": [
                    "On génère un nombre aléatoire de 64 bits",
                    "On insère 'FFFE' au milieu de l'adresse MAC et on inverse le 7ème bit (bit Universel/Local)",
                    "On double l'adresse MAC en la copiant deux fois",
                    "On applique un masque générique de 64 bits"
                ],
                "correct": [
                    1
                ],
                "explanation": "La méthode EUI-64 divise l'adresse MAC de 48 bits en deux moitiés de 24 bits, insère la valeur hexadécimale 'FFFE' au centre, et inverse le 7ème bit du premier octet (bit U/L)."
            },
            {
                "id": 7,
                "question": "Quelle technologie de translation d'adresses permet à des centaines de postes locaux de partager une seule adresse IP publique en multiplexant les numéros de ports ?",
                "options": [
                    "Static NAT (1:1)",
                    "Dynamic NAT",
                    "PAT (Port Address Translation / NAT Overload)",
                    "Dual-Stack IPv6"
                ],
                "correct": [
                    2
                ],
                "explanation": "PAT (Port Address Translation), configuré sous Cisco via le mot-clé 'overload', associe chaque connexion privée sortante à un numéro de port source unique sur l'adresse IP publique."
            },
            {
                "id": 8,
                "question": "Dans la terminologie Cisco NAT, que désigne l'adresse 'Inside Global' ?",
                "options": [
                    "L'adresse IP privée attribuée à l'hôte sur le réseau local interne",
                    "L'adresse IP publique vue depuis l'extérieur qui représente l'hôte interne sur Internet",
                    "L'adresse IP du serveur distant sur Internet",
                    "L'adresse de broadcast du fournisseur d'accès"
                ],
                "correct": [
                    1
                ],
                "explanation": "Inside Local = IP privée interne de l'hôte. Inside Global = IP publique (traduite) représentant l'hôte interne sur Internet. Outside Global = IP réelle du serveur externe."
            },
            {
                "id": 9,
                "question": "Quel marquage de Qualité de Service (QoS) au niveau de l'en-tête IP DSCP (Couche 3) est réservé et recommandé pour les flux de voix sur IP (VoIP) ?",
                "options": [
                    "CS0 (Best Effort)",
                    "AF11 (Assured Forwarding)",
                    "EF (Expedited Forwarding - valeur 46)",
                    "CoS 5"
                ],
                "correct": [
                    2
                ],
                "explanation": "Le marquage DSCP EF (Expedited Forwarding, code binaire 101110 = décimal 46) garantit un traitement prioritaire à faible latence, faible gigue et perte minimale pour le trafic vocal."
            },
            {
                "id": 10,
                "question": "Pourquoi la version 3 de SNMP (SNMPv3) est-elle la seule version autorisée en production sécurisée par rapport à SNMPv1 et SNMPv2c ?",
                "options": [
                    "Elle supporte les réseaux sans fil Wi-Fi 6",
                    "Elle apporte une authentification robuste des utilisateurs et le chiffrement cryptographique des données (modèle USM)",
                    "Elle remplace les requêtes UDP par des connexions TCP chiffrées",
                    "Elle supprime la base d'informations MIB"
                ],
                "correct": [
                    1
                ],
                "explanation": "SNMPv1 et v2c envoient les Community Strings en clair sur le réseau. SNMPv3 introduit le modèle de sécurité basé sur les utilisateurs (USM) offrant authentification (MD5/SHA) et chiffrement (DES/AES)."
            },
            {
                "id": 11,
                "question": "Quelle fonctionnalité Spanning Tree détecte automatiquement les incohérences de configuration EtherChannel entre deux commutateurs et place les interfaces en err-disable pour prévenir les boucles ?",
                "options": [
                    "spanning-tree etherchannel guard misconfig",
                    "loop-guard default",
                    "bpdu-filter enable",
                    "etherchannel auto-repair"
                ],
                "correct": [
                    0
                ],
                "explanation": "'EtherChannel Guard' (activé par défaut) vérifie que tous les ports d'un canal partagent les mêmes paramètres. Si un côté est configuré en trunk et l'autre en access, le switch bloque les ports pour éviter une boucle catastrophique."
            },
            {
                "id": 12,
                "question": "Dans le protocole de redondance HSRP, à quoi sert la commande 'standby 1 track GigabitEthernet0/0/1 30' sur le routeur actif ?",
                "options": [
                    "À mesurer le débit de l'interface en temps réel",
                    "À décrémenter automatiquement la priorité HSRP de 30 si l'interface WAN g0/0/1 tombe, déclenchant le basculement vers le routeur de secours",
                    "À interdire le passage du trafic de secours",
                    "À forcer le routeur à redémarrer"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'Object Tracking HSRP surveille une interface montante (ex: vers le FAI). Si celle-ci devient inactive, la priorité HSRP diminue (ex: de 110 à 80), permettant au routeur Standby (priorité 100 avec preempt) de prendre le relais."
            },
            {
                "id": 13,
                "question": "Quelle est la différence fondamentale entre les protocoles de redondance de passerelle HSRP, VRRP et GLBP ?",
                "options": [
                    "HSRP est actif/actif, VRRP est propriétaire Cisco, GLBP n'existe pas",
                    "HSRP (Cisco) et VRRP (Standard) sont Actif/Passif | GLBP (Gateway Load Balancing Protocol) permet une vraie répartition de charge active/active entre plusieurs routeurs",
                    "VRRP ne fonctionne qu'avec IPv6",
                    "GLBP ne supporte qu'un seul routeur"
                ],
                "correct": [
                    1
                ],
                "explanation": "Tandis que HSRP et VRRP n'utilisent qu'un seul routeur actif à la fois pour la passerelle, GLBP (propriétaire Cisco) répond aux requêtes ARP avec des adresses MAC virtuelles distinctes (AVF), répartissant la charge entre routeurs."
            },
            {
                "id": 14,
                "question": "Lors de la configuration d'une route statique IPv6 pointant vers une adresse de prochain saut de type Link-Local (FE80::), que doit-on obligatoirement spécifier sous Cisco IOS ?",
                "options": [
                    "Le mot-clé 'eui-64'",
                    "L'interface de sortie locale en plus de l'adresse Link-Local (ex: ipv6 route ... g0/0/0 fe80::1)",
                    "Un numéro de VLAN supérieur à 100",
                    "Le mot de passe de chiffrement"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les adresses Link-Local n'ont de portée que locale au lien et ne sont pas routables globalement. Le routeur ne peut pas savoir par quelle interface joindre 'FE80::1' sans que l'interface de sortie locale ne soit explicitement nommée."
            },
            {
                "id": 15,
                "question": "Dans une architecture OSPF multi-zones, quel type de LSA est généré par un routeur frontière de zone (ABR) pour propager les réseaux d'une zone vers une autre zone ?",
                "options": [
                    "LSA Type 1 (Router LSA)",
                    "LSA Type 2 (Network LSA)",
                    "LSA Type 3 (Summary LSA)",
                    "LSA Type 5 (External LSA)"
                ],
                "correct": [
                    2
                ],
                "explanation": "Les LSAs Type 1 et 2 restent confinés à l'intérieur de leur zone d'origine. C'est l'ABR qui génère des LSAs Type 3 (Summary LSA) pour annoncer les réseaux de chaque zone aux autres zones via la Backbone Area 0."
            }
        ]
    },
    "phase7": {
        "title": "Quiz Phase 7 : Réseaux Sans Fil & Mobilité (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Quelle est la principale différence architecturale entre un point d'accès Wi-Fi Autonome et un point d'accès Léger (Lightweight AP - LAP) ?",
                "options": [
                    "Le point d'accès autonome gère les fonctions radio et de gestion de manière isolée, tandis que le LAP délègue la gestion, la sécurité et la configuration à un contrôleur centralisé (WLC)",
                    "Le LAP fonctionne sans antenne radio",
                    "Le point d'accès autonome ne supporte pas le chiffrement WPA2",
                    "Le LAP ne peut pas être connecté en Ethernet"
                ],
                "correct": [
                    0
                ],
                "explanation": "Dans l'architecture Split-MAC, un LAP gère uniquement les opérations radio en temps réel (Real-Time MAC) et transfère toutes les fonctions d'administration, d'authentification et de politique au WLC (Wireless LAN Controller)."
            },
            {
                "id": 2,
                "question": "Quel protocole réseau encapsule et achemine le trafic de contrôle et de données entre les bornes LAP et le WLC via des tunnels sécurisés ?",
                "options": [
                    "GRE",
                    "CAPWAP (Control and Provisioning of Wireless Access Points)",
                    "IPsec VTI",
                    "L2TP"
                ],
                "correct": [
                    1
                ],
                "explanation": "CAPWAP utilise deux tunnels UDP : le tunnel de contrôle (UDP 5246 chiffré en DTLS) et le tunnel de données (UDP 5247 pour transporter les trames utilisateurs)."
            },
            {
                "id": 3,
                "question": "Quels canaux de 20 MHz dans la bande de fréquence 2,4 GHz sont couramment utilisés en Europe et en Amérique pour éviter tout chevauchement spectral ?",
                "options": [
                    "Canaux 1, 2 et 3",
                    "Canaux 1, 6 et 11",
                    "Canaux 6, 8 et 10",
                    "Canaux 2, 7 et 12"
                ],
                "correct": [
                    1
                ],
                "explanation": "En 2,4 GHz, les canaux ont une largeur de 20 ou 22 MHz mais ne sont espacés que de 5 MHz. Seuls les canaux 1, 6 et 11 (ainsi que 1, 5, 9, 13 dans certaines zones) ne se chevauchent pas."
            },
            {
                "id": 4,
                "question": "Quelle innovation majeure introduite par la norme IEEE 802.11ax (Wi-Fi 6) permet de diviser un canal radio en sous-porteuses (RU) pour communiquer avec plusieurs clients simultanément ?",
                "options": [
                    "OFDMA (Orthogonal Frequency Division Multiple Access)",
                    "MIMO 2x2",
                    "WEP 128 bits",
                    "CSMA/CD"
                ],
                "correct": [
                    0
                ],
                "explanation": "OFDMA divise les canaux en Resource Units (RU) allouables à différents clients simultanément, améliorant considérablement l'efficacité spectrale dans les environnements haute densité."
            },
            {
                "id": 5,
                "question": "Quelle est la différence fondamentale entre le SSID et le BSSID en réseau sans fil ?",
                "options": [
                    "Le SSID est l'adresse MAC de l'AP, le BSSID est le mot de passe",
                    "Le SSID est le nom logique lisible du réseau Wi-Fi diffusé, tandis que le BSSID est l'adresse MAC radio de l'antenne émettrice de l'AP",
                    "Le SSID est réservé aux fréquences 5 GHz",
                    "Le BSSID est attribué par le serveur DHCP"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le SSID (Service Set Identifier) est le nom texte convivial du réseau (ex: 'Entreprise-WiFi'). Le BSSID (Basic Service Set Identifier) est l'adresse MAC de 48 bits de l'interface radio de la borne."
            },
            {
                "id": 6,
                "question": "Comment fonctionne l'authentification WPA2/WPA3 Enterprise par rapport au mode Personal (Pre-Shared Key) ?",
                "options": [
                    "Elle utilise un mot de passe partagé plus long",
                    "Elle s'appuie sur le standard 802.1X avec un serveur d'authentification centralisé (RADIUS/TACACS+) pour fournir des identifiants et des clés uniques par utilisateur",
                    "Elle ne chiffre pas les données sur les ondes",
                    "Elle nécessite de désactiver le SSID Broadcast"
                ],
                "correct": [
                    1
                ],
                "explanation": "WPA Enterprise utilise le protocole 802.1X/EAP couplé à un serveur RADIUS (ex: Cisco ISE). Chaque utilisateur s'authentifie avec ses propres identifiants d'annuaire (Active Directory/LDAP)."
            },
            {
                "id": 7,
                "question": "Quel protocole d'authentification WPA3 remplace l'échange à 4 voies vulnérable aux attaques par dictionnaire hors-ligne du mode WPA2-Personal ?",
                "options": [
                    "SAE (Simultaneous Authentication of Equals)",
                    "TKIP",
                    "EAP-MD5",
                    "PAP"
                ],
                "correct": [
                    0
                ],
                "explanation": "WPA3 Personal utilise SAE (algorithme Dragonfly). Il offre une confidentialité persistante (Forward Secrecy) et empêche les attaques par force brute hors ligne même avec un mot de passe faible."
            },
            {
                "id": 8,
                "question": "Dans quel mode de fonctionnement une borne Cisco FlexConnect continue-t-elle de commuter le trafic localement si la liaison WAN vers le contrôleur WLC tombe en panne ?",
                "options": [
                    "Mode Sniffer",
                    "Mode Local Switching / Standalone",
                    "Mode Rogue Detector",
                    "Mode Monitor"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le mode FlexConnect (anciennement H-REAP) permet de commuter le trafic localement sur le site distant (Local Switching). En cas de rupture du lien WAN vers le WLC, la borne continue de fonctionner en autonomie."
            },
            {
                "id": 9,
                "question": "Quelle norme d'amendement IEEE permet une transition rapide et transparente des clients sans fil entre plusieurs bornes (Fast Roaming) indispensable pour la VoIP ?",
                "options": [
                    "IEEE 802.11r",
                    "IEEE 802.11b",
                    "IEEE 802.11d",
                    "IEEE 802.11h"
                ],
                "correct": [
                    0
                ],
                "explanation": "802.11r (Fast BSS Transition) permet de pré-authentifier le client sur les bornes voisines avant même le basculement, réduisant le temps de roaming en dessous de 50 ms pour éviter toute coupure audio."
            },
            {
                "id": 10,
                "question": "Quel compromis technique implique l'agrégation de canaux (ex: passer de 20 MHz à 80 ou 160 MHz en 5 GHz) ?",
                "options": [
                    "Elle augmente le débit théorique mais réduit le nombre de canaux non chevauchants disponibles et augmente la sensibilité aux interférences",
                    "Elle réduit la portée sans augmenter la vitesse",
                    "Elle empêche l'utilisation du protocole IPv6",
                    "Elle oblige les clients à utiliser WPA au lieu de WPA3"
                ],
                "correct": [
                    0
                ],
                "explanation": "L'élargissement des canaux (bonding) augmente le débit binaire, mais consomme une plus grande partie du spectre, augmentant le risque d'interférences co-canal et réduisant le nombre de cellules réutilisables."
            },
            {
                "id": 11,
                "question": "Dans la bande radio 5 GHz, quel mécanisme obligatoire (Dynamic Frequency Selection - DFS) permet aux points d'accès Wi-Fi d'éviter de perturber les radars civils et militaires ?",
                "options": [
                    "L'AP bascule automatiquement de fréquence dès qu'il détecte un signal radar sur le canal",
                    "L'AP double sa puissance d'émission",
                    "L'AP désactive le chiffrement WPA",
                    "L'AP convertit le signal en onde lumineuse"
                ],
                "correct": [
                    0
                ],
                "explanation": "Les canaux 5 GHz des bandes UNII-2 et UNII-2 Extended partagent le spectre avec les radars météo/aériens. Les équipements Wi-Fi doivent surveiller le canal (DFS) et changer de fréquence s'ils captent une impulsion radar."
            },
            {
                "id": 12,
                "question": "Quelle mesure exprime la différence de puissance entre le signal Wi-Fi utile reçu par un client et le bruit de fond électromagnétique ambiant ?",
                "options": [
                    "L'atténuation dBm",
                    "Le rapport Signal-sur-Bruit (SNR - Signal-to-Noise Ratio)",
                    "Le jitter de propagation",
                    "Le taux de modulation QAM"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le SNR (exprimé en dB) représente la clarté du signal : plus le SNR est élevé (idéalement > 25 dB pour la voix), plus le client peut négocier des schémas de modulation rapides (MCS) sans erreurs."
            },
            {
                "id": 13,
                "question": "Sur un contrôleur sans fil Cisco (WLC), quelle interface logique est dédiée à la gestion du WLC par l'administrateur (accès Web HTTPS, SSH, requêtes AAA/RADIUS) ?",
                "options": [
                    "Virtual Interface",
                    "Management Interface",
                    "Service Port Interface",
                    "AP-Manager Interface"
                ],
                "correct": [
                    1
                ],
                "explanation": "La 'Management Interface' est l'adresse IP statique principale du WLC utilisée pour l'administration hors-bande/en-bande, la communication avec les serveurs RADIUS/Syslog et la découverte initiale par les APs."
            },
            {
                "id": 14,
                "question": "À quoi sert la 'Virtual Interface' d'un contrôleur WLC Cisco (souvent configurée avec une IP fictive comme 1.1.1.1 ou 192.0.2.1) ?",
                "options": [
                    "À router les paquets vers Internet",
                    "À supporter l'authentification Web des invités (Captive Portal), le relais DHCP et les redirections de mobilité des clients",
                    "À alimenter électriquement les bornes en PoE",
                    "À stocker les sauvegardes de firmware"
                ],
                "correct": [
                    1
                ],
                "explanation": "La Virtual Interface sert de point d'ancrage local pour rediriger les navigateurs web des utilisateurs vers la page de login du portail captif invité et pour faciliter les échanges de clés de roaming."
            },
            {
                "id": 15,
                "question": "Quelle bande de fréquences supplémentaire est exploitée par la norme Wi-Fi 6E (802.11ax étendu) et Wi-Fi 7 pour offrir des canaux de 160/320 MHz sans congestion ?",
                "options": [
                    "La bande 900 MHz",
                    "La bande 6 GHz (5925 à 7125 MHz)",
                    "La bande 60 GHz",
                    "La bande 3.5 GHz"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le Wi-Fi 6E et le Wi-Fi 7 ouvrent jusqu'à 1200 MHz de spectre continu dans la bande 6 GHz, exempte de tout ancien équipement 2,4/5 GHz, autorisant jusqu'à 7 canaux ultra-larges de 160 MHz sans interférence."
            }
        ]
    },
    "phase8": {
        "title": "Quiz Phase 8 : Automatisation, Programmabilité & SDN (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Dans une architecture Software-Defined Networking (SDN), quel plan réseau est extrait des équipements individuels pour être centralisé dans le contrôleur ?",
                "options": [
                    "Le Data Plane (Forwarding Plane)",
                    "Le Control Plane",
                    "Le Physical Plane",
                    "Le User Plane"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le SDN sépare le Control Plane (décision de routage, calcul de topologie) du Data Plane (commutation physique des trames et paquets). Le Control Plane est centralisé dans un contrôleur logiciel."
            },
            {
                "id": 2,
                "question": "Comment qualifie-t-on les interfaces de communication d'un contrôleur SDN selon qu'elles communiquent vers les applications supérieures ou vers les équipements réseau inférieurs ?",
                "options": [
                    "Northbound APIs vers les applications | Southbound APIs vers les équipements",
                    "Eastbound APIs vers les équipements | Westbound APIs vers les applications",
                    "Inbound vers les utilisateurs | Outbound vers les serveurs",
                    "Uplink vers Internet | Downlink vers le LAN"
                ],
                "correct": [
                    0
                ],
                "explanation": "Les Northbound APIs (souvent REST/JSON) relient le contrôleur aux applications de gestion et portails métiers. Les Southbound APIs (NETCONF, RESTCONF, OpenFlow) relient le contrôleur aux commutateurs et routeurs."
            },
            {
                "id": 3,
                "question": "Pourquoi la topologie Spine-Leaf (Clos network) est-elle aujourd'hui privilégiée dans les Data Centers modernes par rapport au modèle hiérarchique classique 3-tiers ?",
                "options": [
                    "Elle utilise le protocole STP pour bloquer la moitié des liaisons",
                    "Chaque commutateur Leaf est connecté à tous les commutateurs Spine, garantissant une latence constante et prévisible à 1 bond pour le trafic est-ouest (serveur à serveur) via ECMP",
                    "Elle ne supporte que des liaisons 100 Mbps économiques",
                    "Elle élimine le besoin d'adresses IP"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'architecture Spine-Leaf élimine STP au profit d'un routage L3 avec ECMP (Equal-Cost Multi-Path). Tout serveur connecté à une Leaf atteint n'importe quel autre serveur en exactement 2 sauts (Leaf -> Spine -> Leaf)."
            },
            {
                "id": 4,
                "question": "Quel format de sérialisation de données utilise une syntaxe épurée basée strictement sur l'indentation par espaces et est le format standard des playbooks Ansible ?",
                "options": [
                    "JSON",
                    "XML",
                    "YAML",
                    "CSV"
                ],
                "correct": [
                    2
                ],
                "explanation": "YAML (YAML Ain't Markup Language) utilise une indentation stricte sans accolades ni balises fermantes. C'est le format privilégié pour les playbooks Ansible et les configurations Kubernetes."
            },
            {
                "id": 5,
                "question": "Dans une API RESTful, quelle méthode HTTP est utilisée pour mettre à jour partiellement une ressource existante sans remplacer l'intégralité de l'objet ?",
                "options": [
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH"
                ],
                "correct": [
                    3
                ],
                "explanation": "GET lit les données, POST crée une nouvelle ressource, PUT remplace l'intégralité de la ressource, PATCH met à jour partiellement certains attributs d'une ressource existante, et DELETE la supprime."
            },
            {
                "id": 6,
                "question": "Quel code de statut HTTP indique qu'une requête REST a été traitée avec succès et qu'une nouvelle ressource réseau a été créée sur l'équipement ?",
                "options": [
                    "200 OK",
                    "201 Created",
                    "400 Bad Request",
                    "404 Not Found"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le code 200 indique un succès générique (ex: GET). Le code 201 Created confirme la création réussie d'une nouvelle ressource suite à une requête POST."
            },
            {
                "id": 7,
                "question": "Que signifie la notion d'idempotence dans les outils d'automatisation d'infrastructure tels qu'Ansible ?",
                "options": [
                    "Le script s'exécute indéfiniment en boucle",
                    "Une tâche appliquée plusieurs fois produit exactement le même résultat et ne modifie rien si le système est déjà dans l'état souhaité",
                    "Les configurations sont chiffrées avec une clé asymétrique",
                    "Le script s'arrête dès la première erreur"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'idempotence garantit qu'exécuter un playbook une ou dix fois sur une cible déjà conforme n'applique aucune modification superflue (état 'ok' sans 'changed') et ne provoque pas d'interruption."
            },
            {
                "id": 8,
                "question": "Comment l'outil d'automatisation Ansible communique-t-il par défaut avec les équipements réseau Cisco sans nécessiter d'agent logiciel sur ces derniers ?",
                "options": [
                    "En installant un démon en langage C sur chaque switch",
                    "Via des sessions SSH standard (ou des appels d'API HTTPS) en mode 'agentless'",
                    "Via le protocole TFTP uniquement",
                    "Via le port console série"
                ],
                "correct": [
                    1
                ],
                "explanation": "Ansible est 'agentless' (sans agent) : il n'installe aucun logiciel résident sur les équipements réseau. Il se connecte via SSH ou via les API REST/NETCONF existantes de l'équipement."
            },
            {
                "id": 9,
                "question": "Quel langage de modélisation standardisé (RFC 6020) est utilisé par les protocoles NETCONF et RESTCONF pour décrire formellement la structure des données de configuration et d'état des équipements réseau ?",
                "options": [
                    "Python",
                    "YANG",
                    "HTML5",
                    "SQL"
                ],
                "correct": [
                    1
                ],
                "explanation": "YANG (Yet Another Next Generation) est un langage de modélisation de données standardisé. Il définit la structure, les types et les contraintes des configurations réseau exploitées par NETCONF (XML) et RESTCONF (JSON/XML)."
            },
            {
                "id": 10,
                "question": "Quel est le rôle principal de la solution Intent-Based Networking (IBN) Cisco DNA Center (désormais Cisco Catalyst Center) ?",
                "options": [
                    "Traduire une intention métier globale en configurations réseau automatisées, tout en fournissant l'assurance et l'analyse continue de conformité",
                    "Remplacer les commutateurs physiques par des routeurs virtuels",
                    "Héberger les boîtes mails des utilisateurs",
                    "Désactiver le protocole OSPF"
                ],
                "correct": [
                    0
                ],
                "explanation": "Cisco Catalyst Center (DNA Center) applique le paradigme IBN : l'administrateur définit une politique (intention), et la plateforme orchestre, configure et vérifie automatiquement la conformité et la santé du réseau (Assurance)."
            },
            {
                "id": 11,
                "question": "Parmi les outils d'automatisation et de gestion de configuration suivants, lequel fonctionne en mode 'Agentless' (sans aucun agent installé sur les switchs/routeurs) via SSH et Python ?",
                "options": [
                    "Puppet",
                    "Chef",
                    "Ansible",
                    "SaltStack (en mode standard)"
                ],
                "correct": [
                    2
                ],
                "explanation": "Ansible se distingue en étant purement 'agentless' : il s'exécute depuis une machine de contrôle et pousse les configurations via SSH standard, NETCONF ou des API HTTP, sans rien installer sur les cibles réseau."
            },
            {
                "id": 12,
                "question": "Dans la syntaxe du format de données JSON, laquelle des structures suivantes est un objet valide représentant une interface réseau ?",
                "options": [
                    "interface = GigabitEthernet0/1, status = up",
                    "{\"name\": \"GigabitEthernet0/1\", \"enabled\": true, \"mtu\": 1500}",
                    "<'name': 'GigabitEthernet0/1', 'enabled': 'yes'>",
                    "[GigabitEthernet0/1: {enabled: true}]"
                ],
                "correct": [
                    1
                ],
                "explanation": "En JSON, les objets sont entourés d'accolades `{}`, les clés et chaînes utilisent impérativement des guillemets doubles `\"\"`, les paires sont séparées par deux-points `:`, et les booléens s'écrivent `true` ou `false` sans guillemets."
            },
            {
                "id": 13,
                "question": "Quel protocole réseau basé sur HTTPS (RFC 8040) permet de manipuler les données de configuration et d'état modélisées en YANG en utilisant les verbes REST et le format JSON/XML ?",
                "options": [
                    "SNMPv1",
                    "RESTCONF",
                    "Telnet",
                    "TFTP"
                ],
                "correct": [
                    1
                ],
                "explanation": "RESTCONF est une version allégée et moderne de NETCONF : il opère sur HTTPS avec des URI REST standardisées et des formats de payload JSON ou XML pour manipuler les arbres de données YANG."
            },
            {
                "id": 14,
                "question": "Quel outil graphique open-source très populaire est utilisé par les ingénieurs réseau pour tester, documenter et automatiser des requêtes d'API REST (GET, POST, PUT, DELETE) vers un contrôleur Cisco ?",
                "options": [
                    "Wireshark",
                    "Postman",
                    "Putty",
                    "Cisco Packet Tracer"
                ],
                "correct": [
                    1
                ],
                "explanation": "Postman est l'outil de référence pour composer des requêtes HTTP, tester les en-têtes d'authentification (Bearer tokens), visualiser les corps de réponses JSON et automatiser les collections d'appels d'API."
            },
            {
                "id": 15,
                "question": "Dans l'architecture Cisco Software-Defined Access (SD-Access), quel protocole d'encapsulation est utilisé dans l'Overlay pour transporter le trafic utilisateur et les étiquettes de politique de sécurité (SGT) ?",
                "options": [
                    "GRE",
                    "VXLAN (avec en-tête d'extension de groupe)",
                    "IPsec tunnel mode",
                    "MPLS LDP"
                ],
                "correct": [
                    1
                ],
                "explanation": "Cisco SD-Access utilise VXLAN dans le plan de données Overlay. L'en-tête VXLAN transporte le segment de réseau virtuel (VNI) et le tag de groupe de sécurité scalable (SGT) pour appliquer les micro-segmentations."
            }
        ]
    },
    "phase9": {
        "title": "Quiz Phase 9 : Réseaux & Cloud Computing (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Dans le modèle de responsabilité partagée du Cloud Computing, quelle responsabilité incombe au client dans un modèle IaaS (Infrastructure as a Service) ?",
                "options": [
                    "La maintenance physique des serveurs et de l'alimentation du Data Center",
                    "La mise à jour du système d'exploitation, la configuration réseau (routage/pare-feu) et la sécurité des données",
                    "La fabrication des puces processeurs",
                    "Aucune, le fournisseur de cloud gère 100% de la pile"
                ],
                "correct": [
                    1
                ],
                "explanation": "En IaaS (ex: AWS EC2), le fournisseur assure la sécurité DE l'infrastructure cloud (matériel, hyperviseur, datacenter). Le client est responsable de la sécurité DANS le cloud (OS, réseau virtuel, pare-feu, applications, données)."
            },
            {
                "id": 2,
                "question": "Qu'est-ce qu'un VPC (Virtual Private Cloud) dans les environnements cloud publics comme AWS ou Azure ?",
                "options": [
                    "Un serveur dédié loué physiquement à un client",
                    "Un réseau virtuel isolé et logiquement dédié à un compte client au sein de l'infrastructure publique partagée",
                    "Un tunnel VPN chiffré vers un smartphone",
                    "Un nom de domaine Internet réservé"
                ],
                "correct": [
                    1
                ],
                "explanation": "Un VPC est une section réseau virtuelle privée et isolée du cloud public dans laquelle le client déploie des sous-réseaux, tables de routage, passerelles et instances de calcul."
            },
            {
                "id": 3,
                "question": "Quelle est la différence fondamentale entre un Security Group et une Network ACL (NACL) dans un VPC AWS ?",
                "options": [
                    "Security Group est Stateful et s'applique à l'instance (ENI) | NACL est Stateless et s'applique au niveau du sous-réseau",
                    "Security Group ne filtre que l'IPv6, NACL filtre l'IPv4",
                    "Security Group s'applique à tout le continent, NACL s'applique aux serveurs physiques",
                    "Ils sont strictement identiques sous deux noms différents"
                ],
                "correct": [
                    0
                ],
                "explanation": "Les Security Groups sont 'stateful' (le trafic retour d'une connexion autorisée passe automatiquement) et s'associent aux cartes réseau virtuelles. Les NACLs sont 'stateless' (les flux retour doivent être explicitement autorisés) et filtrent à la frontière du subnet."
            },
            {
                "id": 4,
                "question": "Quel équipement virtuel permet à des instances situées dans un sous-réseau privé d'accéder à Internet (ex: mises à jour logicielles) sans que les serveurs Internet puissent initier une connexion vers elles ?",
                "options": [
                    "Internet Gateway (IGW)",
                    "NAT Gateway",
                    "Customer Gateway",
                    "VPC Endpoint"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le NAT Gateway permet aux instances d'un sous-réseau privé de sortir vers Internet tout en bloquant toute tentative de connexion entrante initiée depuis l'extérieur, exactement comme le PAT d'un routeur."
            },
            {
                "id": 5,
                "question": "Pourquoi deux VPCs dont les blocs d'adresses CIDR se chevauchent (ex: 10.0.0.0/16 sur les deux VPCs) ne peuvent-ils pas être reliés par un VPC Peering ?",
                "options": [
                    "Parce que le chiffrement IPSec est incompatible",
                    "Parce que le routage IP deviendrait totalement ambigu (destinations en double conflit d'adresses)",
                    "Parce que le protocole BGP refuse les masques inférieurs à /24",
                    "Parce que les VPCs doivent obligatoirement être dans la même ville"
                ],
                "correct": [
                    1
                ],
                "explanation": "Tout comme en réseau physique traditionnel, l'interconnexion de deux domaines possédant les mêmes adresses IP rend le routage impossible car les tables ne sauraient déterminer vers quel VPC diriger le paquet."
            },
            {
                "id": 6,
                "question": "Le routage via VPC Peering est-il transitif ? Si le VPC A est relié au VPC B et le VPC B au VPC C, le VPC A peut-il communiquer avec le VPC C sans lien direct ?",
                "options": [
                    "Oui, le VPC Peering est transitif par défaut",
                    "Non, le VPC Peering n'est jamais transitif : pour que A et C communiquent, un peering direct A-C ou un Transit Gateway est nécessaire",
                    "Oui, mais uniquement pour les requêtes DNS",
                    "Oui, si on active le protocole RIP sur le VPC B"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le peering n'est pas transitif. Pour interconnecter de multiples VPCs et des sites on-premise de manière transitive sans multiplier les peerings en toile (n*(n-1)/2), on déploie un Transit Gateway (TGW)."
            },
            {
                "id": 7,
                "question": "Quelle solution d'interconnexion hybride offre une liaison dédiée physique privée sans emprunter l'Internet public entre une entreprise et le Cloud ?",
                "options": [
                    "VPN IPSec Site-to-Site",
                    "AWS Direct Connect (ou Azure ExpressRoute)",
                    "Connexion 4G/5G sécurisée",
                    "Tunnel SSH avec port forwarding"
                ],
                "correct": [
                    1
                ],
                "explanation": "AWS Direct Connect (ou Azure ExpressRoute) relie directement le réseau d'entreprise au cloud via un circuit télécom dédié (fibre privée), garantissant une bande passante élevée, une gigue minime et une sécurité physique sans passer par l'Internet public."
            },
            {
                "id": 8,
                "question": "Dans quel cas utilise-t-on un Application Load Balancer (ALB) de Couche 7 plutôt qu'un Network Load Balancer (NLB) de Couche 4 ?",
                "options": [
                    "Lorsque l'on a besoin de performances extrêmes à plus de 10 millions de connexions/sec",
                    "Lorsque l'on souhaite router les requêtes selon le contenu HTTP/HTTPS (chemin d'URL, en-têtes ou nom d'hôte)",
                    "Lorsque l'on n'utilise que le protocole UDP",
                    "Lorsque le trafic est du routage BGP"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'ALB inspecte la Couche 7 (HTTP/HTTPS) pour aiguiller intelligemment le trafic (ex: '/api' vers un groupe de serveurs et '/static' vers un autre). Le NLB opère en Couche 4 (TCP/UDP) pour une latence ultra-faible."
            },
            {
                "id": 9,
                "question": "Dans la table de routage d'un sous-réseau public de VPC, vers quelle cible pointe la route par défaut 0.0.0.0/0 ?",
                "options": [
                    "Vers la passerelle Internet (Internet Gateway - IGW)",
                    "Vers l'interface de loopback du serveur",
                    "Vers l'adresse MAC du switch virtuel",
                    "Vers le serveur DNS public"
                ],
                "correct": [
                    0
                ],
                "explanation": "Un sous-réseau est qualifié de 'public' précisément lorsque sa table de routage contient une route 0.0.0.0/0 orientée vers l'Internet Gateway (IGW) attachée au VPC."
            },
            {
                "id": 10,
                "question": "À quoi sert un VPC Endpoint (ou PrivateLink) dans une architecture Cloud sécurisée ?",
                "options": [
                    "À connecter un câble console USB sur une instance virtuelle",
                    "À accéder aux services managés du Cloud (ex: stockage S3) de manière privée sans passer par une passerelle Internet publique",
                    "À transformer les adresses IPv4 en adresses IPv6",
                    "À augmenter la fréquence des processeurs"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les VPC Endpoints permettent aux ressources privées de joindre les services du cloud (comme AWS S3 ou DynamoDB) directement via le réseau dorsal (backbone) interne du fournisseur sans transiter par Internet."
            },
            {
                "id": 11,
                "question": "Quels deux composants sont nécessaires pour établir un tunnel VPN IPSec Site-to-Site entre le réseau de votre entreprise et un VPC AWS ?",
                "options": [
                    "Une Virtual Private Gateway (VGW) côté AWS et une Customer Gateway (CGW) représentant votre routeur/firewall sur site",
                    "Deux cartes Wi-Fi 6",
                    "Un serveur DHCP externe",
                    "Une passerelle NAT Gateway publique"
                ],
                "correct": [
                    0
                ],
                "explanation": "Le VPN managé AWS nécessite un point de terminaison virtuel côté Cloud (Virtual Private Gateway - VGW ou Transit Gateway) et la définition de l'IP publique de votre équipement sur site (Customer Gateway - CGW)."
            },
            {
                "id": 12,
                "question": "Dans l'architecture du Cloud public (AWS, Azure, GCP), que représente une 'Availability Zone' (AZ) au sein d'une région ?",
                "options": [
                    "Un pays entier",
                    "Un ou plusieurs centres de données (Data Centers) physiques isolés avec alimentations, réseaux et refroidissements redondants et indépendants",
                    "Un câble sous-marin",
                    "Une adresse IP publique partagée"
                ],
                "correct": [
                    1
                ],
                "explanation": "Une Zone de Disponibilité (AZ) est un complexe de datacenters physiquement distinct au sein d'une région métropolitaine, relié par une fibre optique ultra-rapide à très faible latence (< 1ms)."
            },
            {
                "id": 13,
                "question": "Comment un sous-réseau au sein d'un VPC détermine-t-il comment acheminer le trafic sortant ?",
                "options": [
                    "En exécutant le protocole OSPF avec les autres serveurs",
                    "Chaque sous-réseau est obligatoirement associé à une Route Table (table de routage virtuelle) qui définit les routes pour chaque destination",
                    "En envoyant des requêtes ARP en broadcast sur Internet",
                    "En utilisant le fichier hosts local"
                ],
                "correct": [
                    1
                ],
                "explanation": "Dans un VPC, le routage est géré par les Route Tables virtuelles. Chaque subnet est lié à une table qui dicte la passerelle de destination (ex: `10.0.0.0/16 -> local`, `0.0.0.0/0 -> igw-xxx`)."
            },
            {
                "id": 14,
                "question": "Quel service managé AWS fait office de hub centralisé de routage réseau pour interconnecter des centaines de VPCs et les réseaux locaux de l'entreprise avec prise en charge du routage transitif ?",
                "options": [
                    "AWS Transit Gateway (TGW)",
                    "Internet Gateway",
                    "Route 53",
                    "CloudFront"
                ],
                "correct": [
                    0
                ],
                "explanation": "L'AWS Transit Gateway simplifie radicalement les topologies d'interconnexion : il sert de routeur virtuel centralisé (hub-and-spoke) supportant les attachements VPC, VPN et Direct Connect, avec routage transitif complet."
            },
            {
                "id": 15,
                "question": "Comment permet-on aux serveurs de votre entreprise sur site de résoudre les noms de domaine DNS internes d'un VPC privé dans le Cloud ?",
                "options": [
                    "En publiant les adresses privées sur un serveur DNS public",
                    "En configurant des Route 53 Resolver Endpoints (Inbound Endpoints) permettant de relayer les requêtes DNS internes vers le résolveur du VPC",
                    "En désactivant le DNS",
                    "En modifiant le masque de sous-réseau"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les Route 53 Inbound Endpoints fournissent des adresses IP privées dans le VPC vers lesquelles vos serveurs DNS d'entreprise sur site peuvent transférer (forward) les requêtes des domaines cloud privés."
            }
        ]
    },
    "phase10": {
        "title": "Quiz Phase 10 : Monitoring, Supervision & Haute Disponibilité (CCNA 200-301)",
        "questions": [
            {
                "id": 1,
                "question": "Dans le protocole SNMP, quel composant logiciel s'exécute sur le commutateur ou le routeur pour répondre aux requêtes de la station de supervision ?",
                "options": [
                    "Le SNMP Manager (NMS)",
                    "L'Agent SNMP",
                    "Le Syslog Collector",
                    "Le démon NTP"
                ],
                "correct": [
                    1
                ],
                "explanation": "L'Agent SNMP est le programme embarqué dans l'équipement réseau (Cisco IOS) qui collecte les compteurs locaux et répond aux requêtes 'Get' du SNMP Manager (le serveur de supervision central)."
            },
            {
                "id": 2,
                "question": "Comment les objets et compteurs de performance (ex: débit d'interface, utilisation CPU) sont-ils structurés et identifiés dans la MIB SNMP ?",
                "options": [
                    "Sous forme de tables SQL relationnelles",
                    "Sous forme d'une arborescence hiérarchique d'identifiants d'objets numériques (OID - Object Identifiers)",
                    "Dans un fichier plat XML non hiérarchisé",
                    "Via des adresses MAC virtuelles"
                ],
                "correct": [
                    1
                ],
                "explanation": "La MIB (Management Information Base) est une base de données arborescente universelle où chaque variable porte un OID unique en pointillés (ex: 1.3.6.1.2.1.2.2.1.10 pour ifInOctets)."
            },
            {
                "id": 3,
                "question": "Quelle est la différence essentielle entre un message SNMP Trap et un message SNMP Inform ?",
                "options": [
                    "Le Trap est acquitté par le Manager, l'Inform n'est jamais acquitté",
                    "Le Trap est envoyé sans acquittement (UDP non fiable), tandis que l'Inform exige un accusé de réception du Manager",
                    "Le Trap utilise le protocole TCP, l'Inform utilise UDP",
                    "Le Trap ne contient aucune information de sécurité"
                ],
                "correct": [
                    1
                ],
                "explanation": "Un SNMP Trap est envoyé spontanément par l'agent vers le port UDP 162 sans confirmation. Un SNMP Inform requiert un accusé de réception (InformResponse) ; si le manager ne répond pas, l'agent réémet le message."
            },
            {
                "id": 4,
                "question": "Quel niveau de sévérité Syslog standard (0 à 7) correspond au niveau 'Warning' (Avertissement) sous Cisco IOS ?",
                "options": [
                    "Niveau 1",
                    "Niveau 4",
                    "Niveau 6",
                    "Niveau 7"
                ],
                "correct": [
                    1
                ],
                "explanation": "Les 8 niveaux Syslog sont : 0-Emergency, 1-Alert, 2-Critical, 3-Error, 4-Warning, 5-Notification, 6-Informational, 7-Debugging."
            },
            {
                "id": 5,
                "question": "Sur quel port UDP standard un serveur Syslog centralisé écoute-t-il les messages de journalisation émis par les équipements réseau ?",
                "options": [
                    "Port UDP 53",
                    "Port UDP 161",
                    "Port UDP 514",
                    "Port UDP 123"
                ],
                "correct": [
                    2
                ],
                "explanation": "Syslog écoute traditionnellement sur le port UDP 514. (53 est réservé au DNS, 123 au NTP, et 161 aux requêtes SNMP)."
            },
            {
                "id": 6,
                "question": "Quel protocole de télémétrie réseau capture et exporte des statistiques de trafic basées sur le 7-tuple (IP source/dest, ports L4, protocole, interface) sans capturer l'intégralité du contenu applicatif ?",
                "options": [
                    "Wireshark (PCAP)",
                    "NetFlow (ou IPFIX standardisé)",
                    "SNMPv1",
                    "CDP (Cisco Discovery Protocol)"
                ],
                "correct": [
                    1
                ],
                "explanation": "Cisco NetFlow (et sa version normalisée IETF IPFIX) extrait des métadonnées statistiques sur les flux IP traversant les équipements, permettant d'identifier les plus gros consommateurs de bande passante."
            },
            {
                "id": 7,
                "question": "Dans le protocole NTP (Network Time Protocol), que désigne un serveur de temps d'horloge de 'Stratum 1' ?",
                "options": [
                    "Un serveur directement relié à une horloge de référence atomique ou GPS (Stratum 0)",
                    "Un PC de bureau synchronisé via Internet",
                    "Un équipement dont l'horloge n'est pas fiable",
                    "Le switch de niveau d'accès du réseau"
                ],
                "correct": [
                    0
                ],
                "explanation": "Stratum 0 représente la source de temps physique (horloge atomique, GPS). Les serveurs Stratum 1 y sont directement attachés et diffusent l'heure aux clients Stratum 2, et ainsi de suite."
            },
            {
                "id": 8,
                "question": "Quelle technologie Cisco IOS permet d'effectuer des mesures actives et régulières de métriques réseau (latence, jitter, perte de paquets) en simulant des flux applicatifs ?",
                "options": [
                    "Cisco IP SLA (Service Level Agreement)",
                    "Port Mirroring (SPAN)",
                    "Proxy ARP",
                    "Dynamic Trunking Protocol"
                ],
                "correct": [
                    0
                ],
                "explanation": "Cisco IP SLA génère du trafic synthétique continu (pings, flux voix UDP, requêtes HTTP) pour mesurer la qualité de service en temps réel et peut déclencher des basculements de routage automatique."
            },
            {
                "id": 9,
                "question": "Comment le moteur de supervision moderne Prometheus collecte-t-il les métriques auprès des cibles supervisées ?",
                "options": [
                    "Par un modèle exclusivement 'Push' initié par les clients vers une base SQL",
                    "Par un modèle 'Pull' (Scraping HTTP régulier d'endpoints exposant les métriques au format texte)",
                    "En écoutant les broadcasts ARP sur le LAN",
                    "Par capture de paquets promiscuous"
                ],
                "correct": [
                    1
                ],
                "explanation": "Prometheus utilise le modèle 'Pull' : son serveur central interroge périodiquement (scrape) les agents/exportateurs via des requêtes HTTP GET sur une URI standard (ex: '/metrics')."
            },
            {
                "id": 10,
                "question": "Quel outil open-source très populaire est couramment associé à Prometheus pour visualiser les métriques réseau sous forme de tableaux de bord graphiques interactifs ?",
                "options": [
                    "Grafana",
                    "Packet Tracer",
                    "Notepad++",
                    "Putty"
                ],
                "correct": [
                    0
                ],
                "explanation": "Grafana est la référence pour la visualisation de séries temporelles : il se connecte à Prometheus (ou InfluxDB) pour afficher des graphiques de trafic, de charge CPU et d'alertes en temps réel."
            },
            {
                "id": 11,
                "question": "Quelle commande Cisco IOS configure un mot de passe de communauté SNMPv2c en lecture seule tout en le restreignant aux seules stations autorisées par l'ACL 25 ?",
                "options": [
                    "snmp-server community SuperSecretRO ro 25",
                    "snmp-server password SuperSecretRO readonly",
                    "snmp community 25 permit SuperSecretRO",
                    "enable secret snmp 25"
                ],
                "correct": [
                    0
                ],
                "explanation": "La syntaxe correcte est 'snmp-server community <string> [ro | rw] [acl-number]'. Lier une ACL à la communauté SNMP est une règle de durcissement indispensable pour bloquer les sondes pirates."
            },
            {
                "id": 12,
                "question": "Dans le format standard des messages de logs Syslog Cisco, quelle information représente le chiffre '3' dans '%LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to down' ?",
                "options": [
                    "Le numéro du port de switch",
                    "Le niveau de sévérité du message (Error)",
                    "Le nombre de paquets perdus",
                    "L'ID du processus OSPF"
                ],
                "correct": [
                    1
                ],
                "explanation": "La structure d'un log Cisco est `%FACILITY-SEVERITY-MNEMONIC: Message`. Le chiffre 3 correspond au niveau de sévérité 3 (Error - conditions d'erreur)."
            },
            {
                "id": 13,
                "question": "Quelle commande Cisco IOS configure la rétention des messages Syslog dans la mémoire tampon RAM du routeur avec une taille de 64 Ko pour pouvoir les consulter avec 'show logging' ?",
                "options": [
                    "logging host 192.168.1.100",
                    "logging buffered 65536",
                    "logging trap 4",
                    "service timestamps log datetime"
                ],
                "correct": [
                    1
                ],
                "explanation": "'logging buffered <octets>' alloue un espace en mémoire vive locale pour enregistrer l'historique des événements réseau récents, lisible directement via la commande 'show logging'."
            },
            {
                "id": 14,
                "question": "Quelle est la différence fondamentale entre les protocoles de découverte de voisins CDP et LLDP ?",
                "options": [
                    "CDP est propriétaire Cisco | LLDP (IEEE 802.1AB) est le standard ouvert interopérable entre tous les constructeurs",
                    "CDP opère en Couche 3, LLDP en Couche 2",
                    "LLDP ne fonctionne que sur le Wi-Fi",
                    "CDP est chiffré par défaut"
                ],
                "correct": [
                    0
                ],
                "explanation": "CDP (Cisco Discovery Protocol) ne fonctionne qu'entre équipements Cisco. LLDP (Link Layer Discovery Protocol, IEEE 802.1AB) est le standard universel reconnu par Cisco, HP, Dell, serveurs et téléphones IP tiers."
            },
            {
                "id": 15,
                "question": "Dans les méthodologies modernes de monitoring d'infrastructure (SRE / DevOps), que désigne le temps moyen de réparation (MTTR - Mean Time To Repair) ?",
                "options": [
                    "Le délai nécessaire pour commander une pièce de rechange",
                    "Le temps moyen écoulé entre le signalement ou la détection d'une panne et le rétablissement complet du service opérationnel",
                    "La durée de vie totale d'un routeur",
                    "Le temps de latence d'un ping ICMP"
                ],
                "correct": [
                    1
                ],
                "explanation": "Le MTTR est un indicateur clé de performance (KPI) mesurant l'efficacité des équipes et de l'outillage de supervision pour diagnostiquer, corriger et restaurer le fonctionnement normal d'un équipement ou service en panne."
            }
        ]
    }
};

// Exposer explicitement sur window pour le moteur quiz.js
if (typeof window !== 'undefined') {
    window.quizData = quizData;
}
