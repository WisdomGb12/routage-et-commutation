
// ============================================
// QUIZ DATA - ENRICHED FOR EXAM PREPARATION
// ============================================

const quizData = {
    "phase1": {
        title: "Quiz Phase 1 : Fondamentaux & Adressage (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Vous devez connecter le port console d'un routeur au port USB de votre PC portable. Quel c?ble utilisez-vous ?",
                options: [
                    "C?ble Ethernet Droit (Straight-Through)",
                    "C?ble Ethernet Crois? (Crossover)",
                    "C?ble Console (Rollover)",
                    "C?ble Coaxial"
                ],
                correct: [2],
                explanation: "Pour la configuration initiale via le port console, on utilise un c?ble Console (souvent bleu plat) ou un adaptateur USB-S?rie."
            },
            {
                id: 2,
                question: "Un PC (192.168.1.10) veut envoyer un paquet ? un serveur (8.8.8.8). Quelle sera l'adresse MAC de destination de la trame Ethernet quittant le PC ?",
                options: [
                    "L'adresse MAC du serveur 8.8.8.8",
                    "L'adresse MAC de Broadcast (FF:FF:FF:FF:FF:FF)",
                    "L'adresse MAC de sa passerelle par d?faut (Routeur)",
                    "L'adresse MAC du switch"
                ],
                correct: [2],
                explanation: "L'IP destination est hors du r?seau local. Le PC encapsule le paquet dans une trame dirig?e vers l'adresse MAC de sa passerelle par d?faut (Gateway)."
            },
            {
                id: 3,
                question: "Quel sous-r?seau permet d'avoir exactement 60 h?tes utilisables avec le moins d'adresses perdues ?",
                options: [
                    "/25",
                    "/26",
                    "/27",
                    "/28"
                ],
                correct: [1],
                explanation: "/26 = 64 adresses totales - 2 (r?seau/broadcast) = 62 h?tes utilisables. C'est parfait pour 60 h?tes. /27 ne donne que 30 h?tes."
            },
            {
                id: 4,
                question: "Dans le mod?le OSI, ? quel niveau op?re une adresse IP et ? quel niveau op?re une adresse MAC ?",
                options: [
                    "IP = Couche 2, MAC = Couche 3",
                    "IP = Couche 4, MAC = Couche 2",
                    "IP = Couche 3, MAC = Couche 2",
                    "IP = Couche 7, MAC = Couche 1"
                ],
                correct: [2],
                explanation: "IP est une adresse logique de Niveau 3 (R?seau). MAC est une adresse physique de Niveau 2 (Liaison de donn?es)."
            },
            {
                id: 5,
                question: "Quelle commande permet de v?rifier la connectivit? de bout en bout ET le chemin emprunt? ?",
                options: [
                    "ping",
                    "traceroute (ou tracert)",
                    "ipconfig",
                    "netstat"
                ],
                correct: [1],
                explanation: "Ping teste la connectivit?. Traceroute teste la connectivit? ET affiche chaque saut (routeur) travers?."
            },
            {
                id: 6,
                question: "Convertissez l'adresse binaire 11000000.10101000.00001010.00000001 en d?cimal.",
                options: [
                    "192.168.10.1",
                    "192.168.1.10",
                    "172.16.10.1",
                    "10.10.10.1"
                ],
                correct: [0],
                explanation: "11000000=192, 10101000=168, 00001010=10, 00000001=1 -> 192.168.10.1"
            },
            {
                id: 7,
                question: "Quel est le PDU (Protocol Data Unit) de la couche Transport (Couche 4) ?",
                options: [
                    "Trame (Frame)",
                    "Paquet (Packet)",
                    "Segment",
                    "Bit"
                ],
                correct: [2],
                explanation: "Couche 1 = Bit, Couche 2 = Trame, Couche 3 = Paquet, Couche 4 = Segment."
            },
            {
                id: 8,
                question: "Quelle plage d'adresses IP est priv?e (RFC 1918) ?",
                options: [
                    "11.0.0.0/8",
                    "172.32.0.0/12",
                    "192.168.0.0/16",
                    "100.64.0.0/10"
                ],
                correct: [2],
                explanation: "Les plages priv?es sont 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16."
            },
            {
                id: 9,
                question: "Quel est le masque de sous-r?seau par d?faut pour une adresse de Classe B ?",
                options: [
                    "255.0.0.0",
                    "255.255.0.0",
                    "255.255.255.0",
                    "255.255.255.252"
                ],
                correct: [1],
                explanation: "La Classe B (128.0.0.0 ? 191.255.255.255) utilise par d?faut un masque /16 (255.255.0.0)."
            },
            {
                id: 10,
                question: "Combien de bits d'h?te sont n?cessaires pour supporter 50 h?tes utilisables ?",
                options: [
                    "5 bits",
                    "6 bits",
                    "7 bits",
                    "8 bits"
                ],
                correct: [1],
                explanation: "2^6 = 64. 64 - 2 = 62 h?tes utilisables. 5 bits ne donneraient que 30 h?tes."
            },
            {
                id: 11,
                question: "Quelle couche du mod?le OSI est responsable du chiffrement et de la compression des donn?es ?",
                options: [
                    "Application",
                    "Pr?sentation",
                    "Session",
                    "Transport"
                ],
                correct: [1],
                explanation: "La couche Pr?sentation (6) g?re l'aspect visuel, le formatage (JPEG, ASCII) et la s?curit? (SSL/TLS)."
            },
            {
                id: 12,
                question: "Quel port utilise le protocole HTTPS par d?faut ?",
                options: [
                    "80",
                    "22",
                    "443",
                    "53"
                ],
                correct: [2],
                explanation: "HTTPS utilise le port 443 (TCP). Le port 80 est pour le HTTP non s?curis?."
            },
            {
                id: 13,
                question: "Un switch op?re principalement ? quelle couche du mod?le OSI ?",
                options: [
                    "Couche 1 (Physique)",
                    "Couche 2 (Liaison)",
                    "Couche 3 (R?seau)",
                    "Couche 4 (Transport)"
                ],
                correct: [1],
                explanation: "Un switch classique utilise les adresses MAC pour commuter les trames, ce qui correspond ? la Couche 2."
            },
            {
                id: 14,
                question: "Quelle m?thode de transmission permet d'envoyer et de recevoir des donn?es SIMULTAN?MENT ?",
                options: [
                    "Simplex",
                    "Half-Duplex",
                    "Full-Duplex",
                    "Auto-MDIX"
                ],
                correct: [2],
                explanation: "Le Full-Duplex permet la communication bidirectionnelle simultan?e. Le Half-Duplex (comme les vieux hubs) ne permet qu'un sens ? la fois."
            },
            {
                id: 15,
                question: "Quelle adresse est une adresse de Multicast IPv4 valide ?",
                options: [
                    "192.168.1.255",
                    "172.16.0.0",
                    "224.0.0.5",
                    "127.0.0.1"
                ],
                correct: [2],
                explanation: "Les adresses de Classe D (224.0.0.0 ? 239.255.255.255) sont r?serv?es au Multicast. 224.0.0.5 est utilis? par OSPF."
            },
            {
                id: 16,
                question: "Le protocole UDP est consid?r? comme :",
                options: [
                    "Orient? connexion et fiable",
                    "Sans connexion et peu fiable",
                    "Utilisant le 3-way handshake",
                    "G?rant les accus?s de r?ception (ACK)"
                ],
                correct: [1],
                explanation: "UDP est 'Best-effort'. Il n'?tablit pas de session et ne v?rifie pas si les paquets arrivent (contrairement ? TCP)."
            },
            {
                id: 17,
                question: "Quelle est l'adresse de loopback standard pour tester la pile TCP/IP locale ?",
                options: [
                    "127.0.0.1",
                    "0.0.0.0",
                    "255.255.255.255",
                    "192.168.0.1"
                ],
                correct: [0],
                explanation: "L'adresse 127.0.0.1 (localhost) permet de tester si les protocoles r?seau sont bien install?s sur la machine."
            },
            {
                id: 18,
                question: "Dans une trame Ethernet, quel champ est utilis? pour la d?tection d'erreurs ?",
                options: [
                    "Preamble",
                    "Type/Length",
                    "FCS (Frame Check Sequence)",
                    "Source Address"
                ],
                correct: [2],
                explanation: "Le FCS utilise un calcul CRC pour v?rifier que la trame n'a pas ?t? corrompue pendant le transport."
            },
            {
                id: 19,
                question: "Quelle est la fonction principale d'un serveur DNS ?",
                options: [
                    "Attribuer des adresses IP dynamiquement",
                    "Traduire des noms de domaine en adresses IP",
                    "Filtrer le trafic entrant",
                    "Router les paquets entre r?seaux"
                ],
                correct: [1],
                explanation: "Le DNS permet aux utilisateurs d'utiliser des noms (google.com) au lieu d'adresses IP difficiles ? retenir."
            },
            {
                id: 20,
                question: "Que signifie l'acronyme 'ARP' ?",
                options: [
                    "Address Routing Protocol",
                    "Address Resolution Protocol",
                    "Automatic Reset Procedure",
                    "Advanced Routing Path"
                ],
                correct: [1],
                explanation: "ARP est utilis? pour trouver l'adresse MAC correspondant ? une adresse IP connue sur un r?seau local."
            }
        ]
    },
    "phase2": {
        title: "Quiz Phase 2 : Commutation & VLANs (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Un switch re?oit une trame unicast. L'adresse MAC de destination n'est PAS dans sa table MAC. Que fait-il ?",
                options: [
                    "Il jette la trame",
                    "Il envoie la trame ? sa passerelle par d?faut",
                    "Il inonde (Flood) la trame sur tous les ports sauf celui de r?ception",
                    "Il envoie une requ?te ARP"
                ],
                correct: [2],
                explanation: "C'est le comportement 'Unknown Unicast Flooding'. Le switch diffuse pour trouver le destinataire."
            },
            {
                id: 2,
                question: "Vous branchez un t?l?phone IP Cisco et un PC sur le m?me port de switch. Quelle fonctionnalit? permet de s?parer leur trafic ?",
                options: [
                    "VLAN Natif",
                    "Voice VLAN",
                    "Port Security",
                    "LACP"
                ],
                correct: [1],
                explanation: "Le Voice VLAN permet de taguer le trafic voix (souvent avec une priorit? QoS) tout en laissant passer les donn?es PC sur le VLAN d'acc?s."
            },
            {
                id: 3,
                question: "Quelle commande configure un port pour qu'il ne puisse JAMAIS n?gocier un trunk (DTP off) ?",
                options: [
                    "switchport mode trunk",
                    "switchport nonegotiate",
                    "switchport mode dynamic auto",
                    "switchport mode access"
                ],
                correct: [1, 3], // Allows multiple correct if setup, but usually single choice in simple JS engines. Let's assume standard choice. 'switchport nonegotiate' forces it off. 'mode access' stops trunking. The BEST answer for "DTP OFF" specifically is nonegotiate but context matters. Let's simplify and make 'switchport mode access' + 'nonegotiate' implies trunk context. Let's ask "Quelle commande DESACTIVE le protocole DTP ?" -> switchport nonegotiate.
                // Let's stick to simple clear questions.
                explanation: "La commande 'switchport nonegotiate' d?sactive l'envoi de trames DTP. 'switchport mode access' force le mode acc?s."
            },
            // Let's replace Q3 with a clearer one
            {
                id: 3,
                question: "Quelle commande d?sactive l'envoi de trames de n?gociation DTP sur une interface ?",
                options: [
                    "no switchport dtp",
                    "switchport nonegotiate",
                    "switchport mode trunk",
                    "switchport trunk encapsulation dot1q"
                ],
                correct: [1],
                explanation: "Pour s?curiser un port, on utilise 'switchport nonegotiate' pour emp?cher la n?gociation automatique."
            },
            {
                id: 4,
                question: "Vous configurez Port Security avec 'maximum 1'. Vous connectez un hub avec 2 PC. Que se passe-t-il quand le 2?me PC parle ?",
                options: [
                    "Le deuxi?me PC est bloqu?, le premier continue",
                    "Les deux PC fonctionnent",
                    "Le port passe en ?tat err-disabled (si mode violation = shutdown)",
                    "Le switch red?marre"
                ],
                correct: [2],
                explanation: "D?s que le switch voit une 2?me adresse MAC source diff?rente, il d?tecte une violation. Si le mode est shutdown (d?faut), le port entier se coupe."
            },
            {
                id: 5,
                question: "Quelle paire de modes DTP va cr?er un Trunk ?",
                options: [
                    "Dynamic Auto + Dynamic Auto",
                    "Dynamic Auto + Dynamic Desirable",
                    "Access + Trunk",
                    "Access + Dynamic Desirable"
                ],
                correct: [1],
                explanation: "Auto attend. Desirable propose. Donc Auto + Desirable = Trunk. Auto + Auto = Access."
            },
            {
                id: 6,
                question: "Dans STP (802.1D), quel ?tat permet d'apprendre les MACs sans transf?rer de donn?es ?",
                options: [
                    "Blocking",
                    "Listening",
                    "Learning",
                    "Forwarding"
                ],
                correct: [2],
                explanation: "Learning : le port peuple sa table MAC mais ne forwarde pas encore les trames pour ?viter les boucles temporaires."
            },
            {
                id: 7,
                question: "Quelle est la priorit? STP par d?faut d'un switch Cisco ?",
                options: [
                    "1",
                    "32768",
                    "4096",
                    "65535"
                ],
                correct: [1],
                explanation: "La priorit? par d?faut est 32768. Avec l'extension System ID (VLAN ID), elle appara?t souvent comme 32768 + VLAN_ID."
            },
            {
                id: 8,
                question: "Deux switches sont connect?s via deux liens. Ils utilisent STP. Quel port sera choisi comme 'Root Port' ?",
                options: [
                    "Le port avec l'adresse MAC la plus ?lev?e",
                    "Le port avec le co?t vers le Root Bridge le plus bas",
                    "Le port avec le num?ro d'interface le plus bas",
                    "Le port configur? en mode trunk"
                ],
                correct: [1],
                explanation: "Le Root Port est toujours celui qui offre le chemin le plus court (co?t le plus bas) vers le Root Bridge."
            },
            {
                id: 9,
                question: "Quel protocole est propri?taire Cisco pour la n?gociation d'EtherChannel ?",
                options: [
                    "LACP (802.3ad)",
                    "PAgP",
                    "STP",
                    "VTP"
                ],
                correct: [1],
                explanation: "PAgP (Port Aggregation Protocol) est sp?cifique ? Cisco. LACP est le standard international."
            },
            {
                id: 10,
                question: "En RSTP (802.1w), quel ?tat remplace les ?tats Blocking et Listening du STP classique ?",
                options: [
                    "Discarding",
                    "Learning",
                    "Forwarding",
                    "Disabled"
                ],
                correct: [0],
                explanation: "RSTP fusionne les ?tats inactifs en un seul ?tat : Discarding."
            },
            {
                id: 11,
                question: "Que se passe-t-il si une Native VLAN mismatch est d?tect?e entre deux switches ?",
                options: [
                    "Le lien trunk se coupe imm?diatement",
                    "Le trafic des VLANs concern?s peut fuir ou ?tre bloqu? par STP",
                    "Le switch red?marre",
                    "Rien, c'est une configuration valide"
                ],
                correct: [1],
                explanation: "Une erreur de native VLAN mismatch g?n?re des logs CDP et peut causer des boucles ou des probl?mes de s?curit? (VLAN leaking)."
            },
            {
                id: 12,
                question: "Quel mode de violation Port-Security incr?mente le compteur de violations sans couper le port ?",
                options: [
                    "Shutdown",
                    "Protect",
                    "Restrict",
                    "Disabled"
                ],
                correct: [2],
                explanation: "Le mode Restrict bloque le trafic non autoris? et incr?mente le compteur de violations. Protect bloque mais n'incr?mente rien."
            },
            {
                id: 13,
                question: "Quelle est l'adresse MAC de destination utilis?e par les BPDU STP ?",
                options: [
                    "FF:FF:FF:FF:FF:FF",
                    "01:80:C2:00:00:00",
                    "01:00:5E:00:00:01",
                    "00:00:0C:07:AC:01"
                ],
                correct: [1],
                explanation: "STP utilise l'adresse multicast de couche 2 01:80:C2:00:00:00 pour ses trames de contr?le."
            },
            {
                id: 14,
                question: "Pour devenir Root Bridge, un switch doit avoir :",
                options: [
                    "L'ID de Bridge (BID) le plus ?lev?",
                    "L'ID de Bridge (BID) le plus bas",
                    "Le plus grand nombre de ports",
                    "La version d'IOS la plus r?cente"
                ],
                correct: [1],
                explanation: "Le BID se compose de la priorit? + l'adresse MAC. Le switch avec le plus petit BID gagne l'?lection."
            },
            {
                id: 15,
                question: "Quelle commande permet d'activer un EtherChannel en mode LACP actif ?",
                options: [
                    "channel-group 1 mode on",
                    "channel-group 1 mode active",
                    "channel-group 1 mode desirable",
                    "channel-group 1 mode auto"
                ],
                correct: [1],
                explanation: "'active' d?clenche la n?gociation LACP. 'desirable' est pour PAgP."
            },
            {
                id: 16,
                question: "Quel est l'ID de VLAN par d?faut pour le VLAN Natif sur un switch Cisco ?",
                options: [
                    "VLAN 0",
                    "VLAN 1",
                    "VLAN 100",
                    "VLAN 999"
                ],
                correct: [1],
                explanation: "Par d?faut, tout le trafic non tagu? est associ? au VLAN 1."
            },
            {
                id: 17,
                question: "Quelle commande affiche la table de correspondance Adresses MAC / Ports ?",
                options: [
                    "show ip route",
                    "show mac address-table",
                    "show interfaces status",
                    "show vlan brief"
                ],
                correct: [1],
                explanation: "'show mac address-table' permet de voir o? sont branch?s les ?quipements sur le r?seau local."
            },
            {
                id: 18,
                question: "En STP, quel r?le de port est assign? sur le switch qui n'est pas le Root Bridge pour pointer vers celui-ci ?",
                options: [
                    "Designated Port",
                    "Root Port",
                    "Alternate Port",
                    "Backup Port"
                ],
                correct: [1],
                explanation: "Chaque switch non-Root poss?de un seul Root Port pointant vers le Root Bridge."
            },
            {
                id: 19,
                question: "Quel protocole est utilis? pour r?duire la taille de la base de donn?es VLAN en ne propageant que les VLANs n?cessaires (VLAN Pruning) ?",
                options: [
                    "STP",
                    "VTP",
                    "DTP",
                    "LACP"
                ],
                correct: [1],
                explanation: "VTP (VLAN Trunking Protocol) dispose d'une fonctionnalit? de 'pruning' pour ?conomiser de la bande passante sur les trunks."
            },
            {
                id: 20,
                question: "Que se passe-t-il si vous tapez 'switchport port-security' sans options sur un port ?",
                options: [
                    "Rien, la commande est incompl?te",
                    "Le port est s?curis? avec les valeurs par d?faut (max 1 MAC, mode shutdown)",
                    "Le port se coupe imm?diatement",
                    "Toutes les adresses MAC sont apprises en 'sticky'"
                ],
                correct: [1],
                explanation: "Cette commande active la fonctionnalit? avec ses param?tres par d?faut."
            }
        ]
    },
    "phase3": {
        title: "Quiz Phase 3 : Routage OSPF & Statique (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Vous ajoutez la commande 'ip route 0.0.0.0 0.0.0.0 192.168.1.1'. Quel est ce type de route ?",
                options: [
                    "Route H?te",
                    "Gateway of Last Resort (Route par d?faut)",
                    "Route Flottante",
                    "Route Dynamique"
                ],
                correct: [1],
                explanation: "C'est une route statique par d?faut. Elle permet de router tout le trafic vers une destination inconnue (Internet) via 192.168.1.1."
            },
            {
                id: 2,
                question: "Deux routeurs OSPF sont connect?s. Ils restent bloqu?s en ?tat '2-WAY'. Quelle est la cause probable ?",
                options: [
                    "Mauvais mot de passe",
                    "MTU mismatch",
                    "Les deux routeurs sont configur?s avec 'priority 0' (DROTHER)",
                    "C'est un comportement normal sur un lien Point-to-Point"
                ],
                correct: [2],
                explanation: "Sur un r?seau multi-acc?s (Ethernet), si tous les routeurs ont une priorit? de 0, aucun ne devient DR/BDR. Ils restent voisins mais ne s'?changent pas de routes (2-WAY)."
            },
            {
                id: 3,
                question: "Quelle est la m?trique utilis?e par OSPF pour choisir le meilleur chemin ?",
                options: [
                    "Nombre de sauts (Hop Count)",
                    "Bande passante (Calcul?e via le Co?t)",
                    "D?lai et Charge",
                    "Fiabilit?"
                ],
                correct: [1],
                explanation: "OSPF utilise le Co?t = H / Bandwidth. Les liens rapides (Fibre, Gibabit) ont un co?t plus faible et sont pr?f?r?s."
            },
            {
                id: 4,
                question: "Quelle commande affiche les voisins OSPF et leur ?tat ?",
                options: [
                    "show ip route ospf",
                    "show ip ospf neighbors",
                    "show ip ospf interface",
                    "show ip protocols"
                ],
                correct: [1],
                explanation: "'show ip ospf neighbor' est LA commande essentielle pour le d?pannage de l'adjacence OSPF."
            },
            {
                id: 5,
                question: "Quelle Distance Administrative (AD) permet de configurer une 'Route Flottante' de secours pour OSPF ?",
                options: [
                    "1",
                    "90",
                    "100",
                    "120"
                ],
                correct: [3],
                explanation: "OSPF est 110. Pour qu'une route statique ne soit utilis?e QUE si OSPF tombe, elle doit avoir une AD sup?rieure (ex: 120)."
            },
            {
                id: 6,
                question: "Dans une table de routage, quelle entr?e sera choisie pour le paquet destination 10.1.1.1 ?",
                options: [
                    "10.0.0.0/8",
                    "10.1.0.0/16",
                    "10.1.1.0/24",
                    "0.0.0.0/0"
                ],
                correct: [2],
                explanation: "La r?gle du 'Longest Prefix Match' (Masque le plus long) s'applique toujours. /24 est plus pr?cis que /16 ou /8."
            },
            {
                id: 7,
                question: "Dans OSPF, quel est le r?le de l'Area 0 ?",
                options: [
                    "C'est une zone de test uniquement",
                    "C'est l'aire de Backbone ? laquelle toutes les autres zones doivent se connecter",
                    "C'est la zone r?serv?e aux routeurs de marque Cisco",
                    "C'est la zone o? le routage est d?sactiv?"
                ],
                correct: [1],
                explanation: "L'Area 0 est le coeur du domaine OSPF. Toutes les communications inter-aires passent par elle."
            },
            {
                id: 8,
                question: "Quel est le masque g?n?rique (Wildcard Mask) utilis? pour inclure exactement le r?seau 192.168.1.0/24 dans OSPF ?",
                options: [
                    "255.255.255.0",
                    "0.0.0.255",
                    "0.0.0.0",
                    "255.0.0.0"
                ],
                correct: [1],
                explanation: "Un Wildcard Mask est l'inverse d'un masque de sous-r?seau. Pour un /24 (255.255.255.0), le Wildcard est 0.0.0.255."
            },
            {
                id: 9,
                question: "Quelle commande OSPF permet d'emp?cher l'envoi de Hello packets sur une interface LAN ?",
                options: [
                    "no network",
                    "passive-interface",
                    "silent-interface",
                    "ospf disable"
                ],
                correct: [1],
                explanation: "'passive-interface' permet d'inclure le r?seau dans OSPF sans envoyer de trafic de voisinage inutile sur un r?seau local d'utilisateurs."
            },
            {
                id: 10,
                question: "Quelle est l'adresse multicast utilis?e par les routeurs OSPF 'DR' et 'BDR' pour ?couter les mises ? jour ?",
                options: [
                    "224.0.0.1",
                    "224.0.0.5",
                    "224.0.0.6",
                    "224.0.0.10"
                ],
                correct: [2],
                explanation: "Les DR et BDR ?coutent sur 224.0.0.6. Tous les autres routeurs (DROTHERs) ?coutent sur 224.0.0.5."
            },
            {
                id: 11,
                question: "Dans quel ?tat OSPF les routeurs d?cident-ils qui sera le DR (Designated Router) ?",
                options: [
                    "Down",
                    "Init",
                    "2-Way",
                    "Full"
                ],
                correct: [2],
                explanation: "L'?lection du DR/BDR a lieu pendant l'?tat 2-Way."
            },
            {
                id: 12,
                question: "Un routeur OSPF avec une interface dans l'Area 0 et une interface dans l'Area 5 est un :",
                options: [
                    "Internal Router",
                    "ASBR",
                    "ABR (Area Border Router)",
                    "Root Router"
                ],
                correct: [2],
                explanation: "Un ABR relie une aire normale ? l'aire de Backbone Area 0."
            },
            {
                id: 13,
                question: "Quelle commande permet de d?finir MANUELLEMENT l'ID d'un routeur OSPF ?",
                options: [
                    "ip ospf id 1.1.1.1",
                    "router-id 1.1.1.1",
                    "ospf router-id 1.1.1.1",
                    "name router 1.1.1.1"
                ],
                correct: [1],
                explanation: "Dans le mode de configuration 'router ospf', on utilise 'router-id X.X.X.X'."
            },
            {
                id: 14,
                question: "Quelle est l'Administrative Distance (AD) d'une route statique par d?faut ?",
                options: [
                    "1",
                    "90",
                    "110",
                    "120"
                ],
                correct: [0],
                explanation: "Une route statique a une AD de 1. Elle est pr?f?r?e ? OSPF (110) ou EIGRP (90)."
            },
            {
                id: 15,
                question: "Si un routeur OSPF poss?de une interface Loopback 2.2.2.2 et une interface physique 10.0.0.1, quel sera son Router ID par d?faut ?",
                options: [
                    "10.0.0.1",
                    "2.2.2.2",
                    "L'ID du switch voisin",
                    "0.0.0.0"
                ],
                correct: [1],
                explanation: "L'adresse IP de l'interface Loopback est prioritaire sur les interfaces physiques pour devenir le Router ID."
            },
            {
                id: 16,
                question: "Quel protocole de routage est de type 'Distance Vector' et utilise le nombre de sauts ?",
                options: [
                    "OSPF",
                    "BGP",
                    "RIPv2",
                    "EIGRP"
                ],
                correct: [2],
                explanation: "RIP (Routing Information Protocol) utilise les 'hop counts'. OSPF est de type 'Link-State'."
            },
            {
                id: 17,
                question: "Dans OSPF, quel type de paquet est utilis? pour envoyer des mises ? jour sp?cifiques sur la topologie ?",
                options: [
                    "Hello",
                    "DBD (Database Description)",
                    "LSR (Link State Request)",
                    "LSU (Link State Update)"
                ],
                correct: [3],
                explanation: "Les LSU contiennent les LSA (Link State Advertisements) qui d?crivent l'?tat des liens."
            },
            {
                id: 18,
                question: "Que signifie une AD (Administrative Distance) de 255 ?",
                options: [
                    "La route est ultra-prioritaire",
                    "La route est inconnue ou non fiable (ne sera jamais install?e dans la table de routage)",
                    "C'est une route directe",
                    "C'est une route vers Internet"
                ],
                correct: [1],
                explanation: "Une AD de 255 signifie que la source n'est pas fiable, donc le routeur n'utilisera pas cette route."
            },
            {
                id: 19,
                question: "Quelle commande permet de redistribuer une route par d?faut dans OSPF ?",
                options: [
                    "ip route 0.0.0.0 0.0.0.0 loopback0",
                    "default-information originate",
                    "propagate static",
                    "ospf default route"
                ],
                correct: [1],
                explanation: "Cette commande est n?cessaire pour annoncer aux autres routeurs OSPF la sortie vers Internet."
            },
            {
                id: 20,
                question: "Quel est l'ID de zone (Area ID) r?serv? pour le Backbone OSPF ?",
                options: [
                    "Area 0",
                    "Area 1",
                    "Area 100",
                    "Area 255"
                ],
                correct: [0],
                explanation: "Toute architecture OSPF multi-aire doit poss?der une Area 0 centrale."
            }
        ]
    },
    "phase4": {
        title: "Quiz Phase 4 : Routage Inter-VLAN (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Vous configurez 'Router-on-a-Stick'. Les PCs ne peuvent pas pinger leur passerelle. Vous voyez 'Encapsulation dot1Q 10' sur l'interface physique du routeur au lieu de la sous-interface. Est-ce correct ?",
                options: [
                    "Oui, c'est la nouvelle m?thode",
                    "Non, l'interface physique ne doit pas avoir d'IP ni d'encapsulation, tout se fait sur les sous-interfaces",
                    "Peu importe tant que l'IP est bonne",
                    "Il faut activer 'ip routing' sur le routeur"
                ],
                correct: [1],
                explanation: "Sur un routeur, l'interface physique doit ?tre 'no shutdown' mais nue. L'encapsulation et l'IP se mettent sur les sous-interfaces (g0/0.10)."
            },
            {
                id: 2,
                question: "Sur un switch L3, vous voulez utiliser un port pour le connecter directement ? un routeur FAI (IP publique). Quelle commande utilisez-vous ?",
                options: [
                    "interface vlan 1",
                    "switchport mode trunk",
                    "no switchport",
                    "spanning-tree portfast"
                ],
                correct: [2],
                explanation: "'no switchport' transforme le port du switch en port rout? pur, capable de recevoir une adresse IP sans passer par une interface VLAN (SVI)."
            },
            {
                id: 3,
                question: "Un PC dans le VLAN 10 veut contacter un PC dans le VLAN 20. ? qui envoie-t-il sa trame ?",
                options: [
                    "Directement au PC du VLAN 20 (ARP Broadcast)",
                    "Au Switch",
                    "? sa passerelle par d?faut (Gateway)",
                    "Au serveur DNS"
                ],
                correct: [2],
                explanation: "Pour communiquer entre diff?rents r?seaux (VLANs), on doit passer par un routeur (Gateway). Le PC vise la MAC de sa Gateway."
            },
            {
                id: 5,
                question: "Si le VLAN 10 n'existe pas dans la base de donn?es VLAN du switch, que se passe-t-il pour l'interface SVI VLAN 10 ?",
                options: [
                    "Elle reste UP si une IP est configur?e",
                    "Elle passe en ?tat DOWN/DOWN",
                    "Elle fonctionne mais lentement",
                    "Elle passe en mode transparent"
                ],
                correct: [1],
                explanation: "L'interface VLAN (SVI) est une interface logique d?pendante de l'existence du VLAN. Si le VLAN 10 n'existe pas ou est shutdown, la SVI tombe."
            },
            {
                id: 6,
                question: "Quelle commande permet d'activer le routage sur un switch multicouche (L3) ?",
                options: [
                    "router ospf 1",
                    "ip routing",
                    "enable routing",
                    "switchport routing"
                ],
                correct: [1],
                explanation: "Sans 'ip routing', le switch L3 se comporte comme un switch L2 simple et ne peut pas router entre les VLANs."
            },
            {
                id: 7,
                question: "Dans une configuration Router-on-a-Stick, quel type de lien connecte le routeur au switch ?",
                options: [
                    "Lien Access",
                    "Lien Trunk (802.1Q)",
                    "Lien Console",
                    "Lien USB"
                ],
                correct: [1],
                explanation: "Le lien doit ?tre un Trunk pour pouvoir transporter les trames tagu?es de plusieurs VLANs vers le routeur."
            },
            {
                id: 8,
                question: "Comment appelle-t-on l'interface virtuelle cr??e sur un switch pour servir de passerelle ? un VLAN ?",
                options: [
                    "Sub-interface",
                    "SVI (Switch Virtual Interface)",
                    "Loopback",
                    "Tunnel Interface"
                ],
                correct: [1],
                explanation: "Une SVI (ex: interface vlan 10) est l'IP de passerelle configur?e directement sur le switch L3."
            },
            {
                id: 9,
                question: "Quel est l'avantage principal des SVIs par rapport au Router-on-a-Stick ?",
                options: [
                    "C'est moins cher",
                    "Performance beaucoup plus ?lev?e (routage mat?riel/ASIC)",
                    "Plus facile ? configurer sur un routeur",
                    "Plus s?curis?"
                ],
                correct: [1],
                explanation: "Le routage Inter-VLAN sur un switch L3 est effectu? au niveau du mat?riel, ce qui est beaucoup plus rapide que de faire des allers-retours vers un routeur externe ('One-armed router')."
            },
            {
                id: 10,
                question: "Quelle commande est n?cessaire sur une sous-interface de routeur pour sp?cifier le VLAN ? router ?",
                options: [
                    "encapsulation dot1q [vlan_id]",
                    "vlan [vlan_id]",
                    "switchport access vlan [vlan_id]",
                    "ip vlan [vlan_id]"
                ],
                correct: [0],
                explanation: "Exemple : 'encapsulation dot1q 10' indique que la sous-interface g?re le trafic tagu? pour le VLAN 10."
            },
            {
                id: 11,
                question: "Si un h?te dans le VLAN 10 ne re?oit pas d'adresse du serveur DHCP situ? dans le VLAN 20, quelle commande manque probablement sur sa passerelle ?",
                options: [
                    "ip dhcp pool",
                    "ip helper-address [IP_DHCP]",
                    "no switchport",
                    "service dhcp"
                ],
                correct: [1],
                explanation: "Comme les requ?tes DHCP sont des broadcasts (qui ne traversent pas les routeurs/VLANs), il faut un agent de relais (helper-address) pour les transformer en unicast vers le serveur."
            },
            {
                id: 12,
                question: "Combien de sous-interfaces peut-on th?oriquement cr?er sur une interface physique de routeur ?",
                options: [
                    "2",
                    "10",
                    "Des milliers (limit? par les ressources CPU/RAM)",
                    "Aucune"
                ],
                correct: [2],
                explanation: "On peut en cr?er ?norm?ment, m?me si en pratique on se limite pour ?viter de saturer la bande passante du lien physique unique."
            },
            {
                id: 13,
                question: "Que signifie 'Native VLAN Mismatch' dans un environnement Router-on-a-Stick ?",
                options: [
                    "Le routeur et le switch ne parlent pas le m?me langage",
                    "Le VLAN natif configur? sur le Trunk n'est pas le m?me des deux c?t?s",
                    "Le routeur est ?teint",
                    "Le switch n'a pas de licence"
                ],
                correct: [1],
                explanation: "Si le switch envoie du trafic non tagu? (Native VLAN) et que le routeur attend du tagu? (ou vice-versa), le trafic sera perdu ou mal rout?."
            },
            {
                id: 14,
                question: "Sur un switch L3, quelle commande permet de transformer un port physique en port rout? ?",
                options: [
                    "ip address",
                    "no switchport",
                    "switchport mode route",
                    "interface route"
                ],
                correct: [1],
                explanation: "La commande 'no switchport' d?sactive les fonctions L2 sur le port, permettant d'y assigner directement une adresse IP."
            },
            {
                id: 15,
                question: "Quelle est la m?trique par d?faut d'une route statique pointant vers une interface VLAN (SVI) ?",
                options: [
                    "0",
                    "1",
                    "110",
                    "Elle n'a pas de m?trique"
                ],
                correct: [1],
                explanation: "Toute route statique a une Distance Administrative de 1."
            },
            {
                id: 16,
                question: "Dans une topologie avec un switch L3, o? configure-t-on g?n?ralement les adresses de passerelle (Gateways) ?",
                options: [
                    "Sur chaque port du switch",
                    "Sur les interfaces SVI (interface vlan X)",
                    "Sur le serveur DNS",
                    "Sur l'interface de management"
                ],
                correct: [1],
                explanation: "Le switch L3 poss?de une SVI pour chaque VLAN, qui sert d'IP de sortie pour tous les h?tes de ce VLAN."
            },
            {
                id: 17,
                question: "Quel protocole est utilis? pour automatiser la redondance de passerelle par d?faut (First Hop Redundancy) ?",
                options: [
                    "STP",
                    "HSRP / VRRP",
                    "VTP",
                    "OSPF"
                ],
                correct: [1],
                explanation: "HSRP (propri?taire Cisco) ou VRRP (standard) permettent ? deux routeurs/switches de partager une IP virtuelle de passerelle."
            },
            {
                id: 18,
                question: "Vous avez configur? 'interface g0/0.10' et 'encapsulation dot1q 10'. Le ping vers la gateway ?choue. Quelle commande avez-vous peut-?tre oubli? sur l'interface physique g0/0 ?",
                options: [
                    "ip address",
                    "no shutdown",
                    "switchport mode trunk",
                    "ip routing"
                ],
                correct: [1],
                explanation: "L'interface physique doit ?tre ALLUM?E (no shutdown) pour que ses sous-interfaces fonctionnent."
            },
            {
                id: 19,
                question: "Pourquoi est-il risqu? de laisser 'VLAN 1' comme VLAN natif sur un lien Trunk ?",
                options: [
                    "Parce que c'est trop lent",
                    "Pour ?viter les attaques 'VLAN Hopping'",
                    "Parce que le routeur ne supporte pas le VLAN 1",
                    "C'est une recommandation de Microsoft"
                ],
                correct: [1],
                explanation: "Changer le VLAN natif (ex: vers VLAN 99) est une mesure de s?curit? standard contre les injections de trames malveillantes."
            },
            {
                id: 20,
                question: "Quelle commande permet de v?rifier toutes les routes connues par un switch multicouche ?",
                options: [
                    "show vlan",
                    "show ip route",
                    "show mac address-table",
                    "show running-config"
                ],
                correct: [1],
                explanation: "Si le routage est activ? ('ip routing'), 'show ip route' montre la table de routage du switch."
            }
        ]
    },
    "phase5": {
        title: "Quiz Phase 5 : S?curit? & ACLs (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Quelle entr?e ACL autorise UNIQUEMENT l'h?te 192.168.1.5 ?",
                options: [
                    "permitip 192.168.1.5 0.0.0.0",
                    "permit ip 192.168.1.5 0.0.0.255",
                    "permit ip host 192.168.1.5",
                    "Les r?ponses A et C sont correctes"
                ],
                correct: [3],
                explanation: "'host 192.168.1.5' est un raccourci syntaxique pour '192.168.1.5 0.0.0.0' (Wildcard 0)."
            },
            {
                id: 2,
                question: "Quelle est la r?gle implicite ? la fin de TOUTE Access List (ACL) ?",
                options: [
                    "permit ip any any",
                    "deny ip any any",
                    "permit tcp any any established",
                    "log all"
                ],
                correct: [1],
                explanation: "Il y a toujours un 'Implicit Deny' (Tout interdire) cach? ? la fin. Si un paquet ne matche aucune ligne, il est jet?."
            },
            {
                id: 3,
                question: "Attaque DHCP Starvation : Un attaquant inonde le serveur DHCP de requ?tes. Quelle solution att?nue cela ?",
                options: [
                    "Port Security avec mac-limit",
                    "DHCP Snooping avec rate-limit",
                    "Dynamic ARP Inspection",
                    "BPDU Guard"
                ],
                correct: [0, 1], // Both help, but DHCP snooping rate limit is specific to DHCP packets. Port security limits macs. Let's chose Port Security for starvation specifically (filling CAM/MACs is starvation too, but DHCP starvation targets the IP pool).
                // Actually Port Security limits MACs, which stops the simulation of NEW clients. DHCP Snooping Rate Limit stops the SPEED of packets.
                // The most direct answer usually taught for Starvation (running out of IPs) is Port Security (limits unique source MACs request per port).
                // Let's refine. "DHCP Starvation" often uses random Source MACs. Port Security stops random MAC generation.
                // Let's stick to simple "Port Security". 
                // Wait, DHCP Snooping "limit rate" is for DoS on the CPU, Port Security is for Starvation of the Scope.
                correct: [0],
                explanation: "Port Security limite le nombre d'adresses MAC autoris?es sur un port. Cela emp?che un attaquant de simuler des milliers de clients DHCP diff?rents (MAC spoofing)."
            },
            {
                id: 4,
                question: "Vous configurez SSH. Quelle commande oblige les utilisateurs ? se loguer avec un compte local (login/password) ?",
                options: [
                    "login",
                    "login local",
                    "password cisco",
                    "service password-encryption"
                ],
                correct: [1],
                explanation: "'login' utilise juste le mot de passe de la ligne VTY. 'login local' demande au routeur de v?rifier la base de donn?es d'utilisateurs locaux (username/secret)."
            },
            {
                id: 5,
                question: "Quel message indique qu'un port a ?t? d?sactiv? par BPDU Guard ?",
                options: [
                    "Line protocol is down",
                    "Err-disabled state (bpduguard)",
                    "Spanning-tree topology change",
                    "Request timed out"
                ],
                correct: [1],
                explanation: "BPDU Guard (activ? sur les ports PortFast) place le port en err-disabled s'il re?oit une BPDU (ce qui signifie qu'un switch a ?t? branch?)."
            },
            {
                id: 6,
                question: "O? doit-on placer une ACL Standard pour un filtrage optimal ?",
                options: [
                    "Au plus pr?s de la source du trafic",
                    "Au plus pr?s de la destination",
                    "Sur tous les ports du switch",
                    "Uniquement sur l'interface loopback"
                ],
                correct: [1],
                explanation: "Les ACL standards (1-99) ne filtrent que sur l'IP source. Pour ?viter de bloquer du trafic l?gitime vers d'autres destinations, on les place au plus pr?s de la destination."
            },
            {
                id: 7,
                question: "Quelle commande active le DHCP Snooping sur le VLAN 10 ?",
                options: [
                    "ip dhcp snooping vlan 10",
                    "switchport dhcp snooping 10",
                    "dhcp-snooping 10 enable",
                    "ip vlan 10 dhcp trust"
                ],
                correct: [0],
                explanation: "Il faut d'abord activer le snooping globalement (`ip dhcp snooping`), puis sp?cifier les VLANs concern?s avec `ip dhcp snooping vlan [ID]`."
            },
            {
                id: 8,
                question: "Quel protocole permet de s?curiser les ?changes de gestion (management) entre un PC et un commutateur ?",
                options: [
                    "Telnet",
                    "HTTP",
                    "SSH",
                    "SNMP v1"
                ],
                correct: [2],
                explanation: "SSH (Secure Shell) crypte le trafic, contrairement ? Telnet qui envoie tout en clair (y compris les mots de passe)."
            },
            {
                id: 9,
                question: "Que signifie l'?tat 'Sticky' dans la configuration Port-Security ?",
                options: [
                    "Les adresses MAC sont apprises dynamiquement et enregistr?es dans la configuration",
                    "Le port est bloqu? de mani?re permanente",
                    "Le port accepte n'importe quelle adresse MAC sans limite",
                    "L'adresse MAC expire apr?s 5 minutes"
                ],
                correct: [0],
                explanation: "L'option 'sticky' permet au switch d'apprendre les MACs dynamiquement et de les ajouter ? la configuration (running-config) pour qu'elles survivent ? un red?marrage si on sauvegarde."
            },
            {
                id: 10,
                question: "Quel type de NAT permet ? plusieurs h?tes internes d'utiliser UNE SEULE adresse IP publique ?",
                options: [
                    "Static NAT",
                    "Dynamic NAT",
                    "PAT (Port Address Translation) ou Overload",
                    "NAT Pooling"
                ],
                correct: [2],
                explanation: "PAT utilise les num?ros de ports TCP/UDP pour distinguer les sessions des diff?rents h?tes internes sur une seule IP publique."
            },
            {
                id: 11,
                question: "Dans NAT, quelle adresse d?signe l'h?te sur le r?seau interne tel qu'il est vu depuis l'ext?rieur ?",
                options: [
                    "Inside Local",
                    "Inside Global",
                    "Outside Local",
                    "Outside Global"
                ],
                correct: [1],
                explanation: "Inside Global est l'adresse (souvent publique) qui repr?sente votre machine interne sur Internet."
            },
            {
                id: 12,
                question: "Quelle commande permet d'appliquer une ACL sur une interface pour filtrer le trafic ENTRANT ?",
                options: [
                    "ip access-group 10 in",
                    "ip access-list 10 in",
                    "access-class 10 in",
                    "filter ip 10 entry"
                ],
                correct: [0],
                explanation: "On utilise 'ip access-group' sur les interfaces physiques et 'access-class' sur les lignes VTY."
            },
            {
                id: 13,
                question: "Quelle technologie emp?che les attaques de type 'ARP Poisoning' ou 'Man-in-the-Middle' au niveau L2 ?",
                options: [
                    "Port Security",
                    "DHCP Snooping",
                    "Dynamic ARP Inspection (DAI)",
                    "BPDU Guard"
                ],
                correct: [2],
                explanation: "DAI v?rifie les paquets ARP par rapport ? une base de donn?es de confiance (souvent issue du DHCP Snooping) pour rejeter les faux ARPs."
            },
            {
                id: 14,
                question: "Une ACL ?tendue permet de filtrer sur quels crit?res (par rapport ? la standard) ?",
                options: [
                    "Source uniquement",
                    "Source, Destination, Protocole (TCP/UDP) et Port",
                    "Adresse MAC uniquement",
                    "VLAN d'origine"
                ],
                correct: [1],
                explanation: "Les ACLs ?tendues sont beaucoup de plus pr?cises et permettent de bloquer par exemple uniquement le trafic Web (Port 80) tout en laissant passer le Ping."
            },
            {
                id: 15,
                question: "Quel protocole remplace Telnet pour une administration s?curis?e car il chiffre les donn?es ?",
                options: [
                    "HTTPs",
                    "FTP",
                    "SSH",
                    "SNMPv1"
                ],
                correct: [2],
                explanation: "SSH (Secure Shell) utilise la cryptographie pour prot?ger les mots de passe et les commandes envoy?es sur le r?seau."
            },
            {
                id: 16,
                question: "Que se passe-t-it si vous tapez 'transport input none' sur les lignes VTY d'un routeur ?",
                options: [
                    "Trafic illimit?",
                    "Le routeur red?marre",
                    "Plus aucun acc?s distant (SSH/Telnet) n'est possible",
                    "Le routeur passe en mode s?curis?"
                ],
                correct: [2],
                explanation: "Cette commande bloque toutes les connexions entrantes sur les lignes virtuelles."
            },
            {
                id: 17,
                question: "Quelle commande permet de g?n?rer les cl?s RSA n?cessaires pour activer SSH sur Cisco ?",
                options: [
                    "crypto key generate rsa",
                    "ssh key generate",
                    "security key rsa",
                    "ip ssh version 2"
                ],
                correct: [0],
                explanation: "Sans les cl?s RSA, le service SSH ne peut pas d?marrer car il ne peut pas chiffrer la session."
            },
            {
                id: 18,
                question: "Un Wildcard Mask de 0.0.0.3 correspond ? :",
                options: [
                    "Un h?te unique",
                    "Un bloc de 4 adresses IP",
                    "Un r?seau /24",
                    "Toutes les adresses"
                ],
                correct: [1],
                explanation: "0.0.0.3 signifie que les 2 derniers bits sont ignor?s (matchent n'importe quoi). 2^2 = 4 adresses."
            },
            {
                id: 19,
                question: "Comment d?finit-on un port 'de confiance' pour le DHCP Snooping (vers le serveur) ?",
                options: [
                    "ip dhcp snooping trust",
                    "interface trusted",
                    "switchport mode server",
                    "dhcp-server allow"
                ],
                correct: [0],
                explanation: "On utilise 'ip dhcp snooping trust' sur l'interface branch?e vers le serveur DHCP l?gitime ou vers un autre switch."
            },
            {
                id: 20,
                question: "Quelle est la meilleure pratique pour s?curiser les ports non utilis?s d'un switch ?",
                options: [
                    "Les laisser tels quels",
                    "Les mettre en 'shutdown' et les assigner ? un VLAN mort (blackhole)",
                    "Activer OSPF dessus",
                    "Mettre un mot de passe sur le port"
                ],
                correct: [1],
                explanation: "C'est la base du 'Switch Port Hardening' : `shutdown` + `switchport access vlan 999`."
            }
        ]
    },
    "phase6": {
        title: "Quiz Phase 6 : Technologies Avanc?es & Synth?se",
        questions: [
            {
                id: 1,
                question: "Quelle combinaison de protocoles EtherChannel est standard IEEE et compatible non-Cisco ?",
                options: [
                    "PAgP (Port Aggregation Protocol)",
                    "LACP (Link Aggregation Control Protocol)",
                    "GLBP",
                    "STP"
                ],
                correct: [1],
                explanation: "LACP (802.3ad) est le standard ouvert. PAgP est propri?taire Cisco."
            },
            {
                id: 2,
                question: "Quelle adresse IPv6 correspond ? l'adresse de lien local (Link-Local) g?n?r?e automatiquement ?",
                options: [
                    "2001::/16",
                    "AE80::/10",
                    "FE80::/10",
                    "FC00::/7"
                ],
                correct: [2],
                explanation: "FE80::... est le pr?fixe des adresses Link-Local, utilis?es pour la communication sur le m?me segment (comme ARP en IPv4)."
            },
            {
                id: 3,
                question: "NAT Overload (PAT) utilise quel ?l?ment pour distinguer les sessions de plusieurs utilisateurs partageant une seule IP publique ?",
                options: [
                    "L'adresse MAC",
                    "Le num?ro de s?quence TCP",
                    "Le num?ro de Port Source",
                    "L'adresse IP de destination"
                ],
                correct: [2],
                explanation: "PAT (Port Address Translation) mappe chaque IP priv?e interne + Port Source vers l'IP Publique + Port Unique."
            },
            {
                id: 4,
                question: "HSRP : Le routeur Actif tombe. Le routeur Standby prend la rel?ve. Que se passe-t-il quand le routeur Actif revient (d?lai de pr?emption activ?) ?",
                options: [
                    "Il reste en Standby",
                    "Il reprend son r?le de routeur Actif imm?diatement (si sa priorit? est sup?rieure)",
                    "Il red?marre",
                    "Il partage la charge"
                ],
                correct: [1],
                explanation: "Si 'preempt' est configur?, le routeur avec la plus haute priorit? reprendra le r?le Actif d?s qu'il sera disponible."
            },
            {
                id: 5,
                question: "Quelle commande permet d'attribuer une adresse IPv6 globale automatiquement via SLAAC ?",
                options: [
                    "ipv6 address dhcp",
                    "ipv6 address autoconfig",
                    "ip address dhcp",
                    "ipv6 enable"
                ],
                correct: [1],
                explanation: "'ipv6 address autoconfig' dit au routeur de s'auto-configurer en ?coutant les Router Advertisements (RA) sur le lien."
            },
            {
                id: 6,
                question: "Quel protocole de d?couverte est propri?taire Cisco et activ? par d?faut sur presque tous les ?quipements Cisco ?",
                options: [
                    "LLDP (Link Layer Discovery Protocol)",
                    "CDP (Cisco Discovery Protocol)",
                    "VTP",
                    "STP"
                ],
                correct: [1],
                explanation: "CDP est utilis? par Cisco pour partager des informations avec ses voisins directs. LLDP est l'?quivalent standard ouvert."
            },
            {
                id: 7,
                question: "Dans Syslog, quel niveau de s?v?rit? (Severity Level) correspond ? une erreur 'Critical' ?",
                options: [
                    "0",
                    "2",
                    "5",
                    "7"
                ],
                correct: [1],
                explanation: "L'?chelle va de 0 (Emergency) ? 7 (Debug). Critical est le niveau 2."
            },
            {
                id: 8,
                question: "Quel est l'objectif du protocole NTP (Network Time Protocol) dans un r?seau ?",
                options: [
                    "Acc?l?rer le routage",
                    "Synchroniser l'heure de tous les ?quipements",
                    "Surveiller la bande passante",
                    "G?n?rer des logs"
                ],
                correct: [1],
                explanation: "NTP assure que tous les logs et ?v?nements ont un horodatage coh?rent, ce qui est crucial pour le troubleshooting et la s?curit?."
            },
            {
                id: 9,
                question: "IPv6 EUI-64 : Quelle valeur est ins?r?e au milieu de l'adresse MAC pour cr?er l'identifiant d'interface ?",
                options: [
                    "FFFF",
                    "FFFE",
                    "FFEE",
                    "C000"
                ],
                correct: [1],
                explanation: "EUI-64 prend l'adresse MAC (48 bits), l'?carte au milieu et ins?re FFFE (16 bits) pour obtenir un ID d'interface de 64 bits."
            },
            {
                id: 10,
                question: "Quel service Cloud correspond ? une application accessible directement via un navigateur (ex: Office 365, Gmail) ?",
                options: [
                    "IaaS (Infrastructure as a Service)",
                    "PaaS (Platform as a Service)",
                    "SaaS (Software as a Service)",
                    "SDN"
                ],
                correct: [2],
                explanation: "SaaS est le mod?le o? l'utilisateur consomme directement le logiciel sans g?rer d'infrastructure."
            },
            {
                id: 11,
                question: "Quelle est l'adresse multicast IPv6 sollicit?e pour atteindre 'Tous les Routeurs' (All Routers) ?",
                options: [
                    "FF02::1",
                    "FF02::2",
                    "FF05::1",
                    "FF02::1:FF00:0"
                ],
                correct: [1],
                explanation: "FF02::1 est pour 'tous les noeuds', FF02::2 est r?serv?e aux routeurs."
            },
            {
                id: 12,
                question: "HSRP : Quelle est la priorit? par d?faut d'un routeur dans un groupe ?",
                options: [
                    "1",
                    "10",
                    "100",
                    "255"
                ],
                correct: [2],
                explanation: "La priorit? par d?faut est 100. On l'augmente pour forcer un routeur ? devenir Actif."
            },
            {
                id: 13,
                question: "Quel protocole est l'?quivalent standard (non-propri?taire) de HSRP ?",
                options: [
                    "GLBP",
                    "VRRP (Virtual Router Redundancy Protocol)",
                    "VTP",
                    "IPSEC"
                ],
                correct: [1],
                explanation: "VRRP est le protocole standard IEEE pour la redondance de passerelle."
            },
            {
                id: 14,
                question: "SNMP : Quel message est envoy? par un agent SNMP ? un manager de mani?re proactive (sans ?tre sollicit?) pour signaler un probl?me ?",
                options: [
                    "Get-Request",
                    "Set-Request",
                    "Trap",
                    "Inform"
                ],
                correct: [2],
                explanation: "Une 'Trap' SNMP est une notification spontan?e envoy?e lors d'un ?v?nement (ex: lien qui tombe)."
            },
            {
                id: 15,
                question: "Quelle commande permet de v?rifier le statut HSRP d'un routeur ?",
                options: [
                    "show hsrp",
                    "show standby",
                    "show vrrp",
                    "show interface virtual"
                ],
                correct: [1],
                explanation: "La commande de base pour HSRP est `show standby`."
            },
            {
                id: 16,
                question: "IPv6 : Quel pr?fixe est utilis? pour les adresses de Multicast ?",
                options: [
                    "FE80::/10",
                    "FF00::/8",
                    "2001::/3",
                    "::1/128"
                ],
                correct: [1],
                explanation: "Toutes les adresses commen?ant par FF sont des adresses de Multicast en IPv6."
            },
            {
                id: 17,
                question: "Que se passe-t-il si un routeur re?oit un paquet IPv6 d?passant le MTU du lien, s'il n'y a pas de fragmentation ?",
                options: [
                    "Il le fragmente lui-m?me",
                    "Il le jette et envoie un ICMPv6 'Packet Too Big' ? l'exp?diteur",
                    "Il le compresse",
                    "Il le transf?re par petits morceaux"
                ],
                correct: [1],
                explanation: "En IPv6, les routeurs ne fragmentent plus les paquets. C'est l'h?te source qui doit s'adapter (Path MTU Discovery)."
            },
            {
                id: 18,
                question: "Dans le mod?le SDN (Software Defined Networking), quel plan de contr?le est centralis? sur un Controller ?",
                options: [
                    "Data Plane",
                    "Control Plane",
                    "Management Plane",
                    "User Plane"
                ],
                correct: [1],
                explanation: "Le SDN s?pare le Control Plane (d?cision) du Data Plane (transfert) et centralise le Control Plane sur un contr?leur logiciel."
            },
            {
                id: 19,
                question: "Quel protocole est utilis? par les contr?leurs SDN pour communiquer 'vers le bas' avec les ?quipements r?seau ?",
                options: [
                    "Restful API",
                    "Northbound API",
                    "Southbound API (ex: OpenFlow)",
                    "Eastbound API"
                ],
                correct: [2],
                explanation: "Les protocoles 'Southbound' relient le contr?leur aux switches/routeurs."
            },
            {
                id: 20,
                question: "Quelle m?thode permet de sauvegarder la configuration d'un routeur Cisco sur un serveur distant ?",
                options: [
                    "copy running-config startup-config",
                    "copy running-config tftp:",
                    "save to server",
                    "export config"
                ],
                correct: [1],
                explanation: "On utilise g?n?ralement TFTP, FTP ou SCP pour exporter les fichiers de configuration hors de l'?quipement."
            }
        ]
    }
};

window.quizData = quizData;


