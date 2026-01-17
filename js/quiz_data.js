
// ============================================
// QUIZ DATA - ENRICHED FOR EXAM PREPARATION
// ============================================

const quizData = {
    "phase1": {
        title: "Quiz Phase 1 : Fondamentaux & Adressage (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Vous devez connecter le port console d'un routeur au port USB de votre PC portable. Quel câble utilisez-vous ?",
                options: [
                    "Câble Ethernet Droit (Straight-Through)",
                    "Câble Ethernet Croisé (Crossover)",
                    "Câble Console (Rollover)",
                    "Câble Coaxial"
                ],
                correct: [2],
                explanation: "Pour la configuration initiale via le port console, on utilise un câble Console (souvent bleu plat) ou un adaptateur USB-Série."
            },
            {
                id: 2,
                question: "Un PC (192.168.1.10) veut envoyer un paquet à un serveur (8.8.8.8). Quelle sera l'adresse MAC de destination de la trame Ethernet quittant le PC ?",
                options: [
                    "L'adresse MAC du serveur 8.8.8.8",
                    "L'adresse MAC de Broadcast (FF:FF:FF:FF:FF:FF)",
                    "L'adresse MAC de sa passerelle par défaut (Routeur)",
                    "L'adresse MAC du switch"
                ],
                correct: [2],
                explanation: "L'IP destination est hors du réseau local. Le PC encapsule le paquet dans une trame dirigée vers l'adresse MAC de sa passerelle par défaut (Gateway)."
            },
            {
                id: 3,
                question: "Quel sous-réseau permet d'avoir exactement 60 hôtes utilisables avec le moins d'adresses perdues ?",
                options: [
                    "/25",
                    "/26",
                    "/27",
                    "/28"
                ],
                correct: [1],
                explanation: "/26 = 64 adresses totales - 2 (réseau/broadcast) = 62 hôtes utilisables. C'est parfait pour 60 hôtes. /27 ne donne que 30 hôtes."
            },
            {
                id: 4,
                question: "Dans le modèle OSI, à quel niveau opère une adresse IP et à quel niveau opère une adresse MAC ?",
                options: [
                    "IP = Couche 2, MAC = Couche 3",
                    "IP = Couche 4, MAC = Couche 2",
                    "IP = Couche 3, MAC = Couche 2",
                    "IP = Couche 7, MAC = Couche 1"
                ],
                correct: [2],
                explanation: "IP est une adresse logique de Niveau 3 (Réseau). MAC est une adresse physique de Niveau 2 (Liaison de données)."
            },
            {
                id: 5,
                question: "Quelle commande permet de vérifier la connectivité de bout en bout ET le chemin emprunté ?",
                options: [
                    "ping",
                    "traceroute (ou tracert)",
                    "ipconfig",
                    "netstat"
                ],
                correct: [1],
                explanation: "Ping teste la connectivité. Traceroute teste la connectivité ET affiche chaque saut (routeur) traversé."
            },
            {
                id: 6,
                question: "Convertissez l'adresse binaire 11000000.10101000.00001010.00000001 en décimal.",
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
                question: "Quelle plage d'adresses IP est privée (RFC 1918) ?",
                options: [
                    "11.0.0.0/8",
                    "172.32.0.0/12",
                    "192.168.0.0/16",
                    "100.64.0.0/10"
                ],
                correct: [2],
                explanation: "Les plages privées sont 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16."
            },
            {
                id: 9,
                question: "Quel est le masque de sous-réseau par défaut pour une adresse de Classe B ?",
                options: [
                    "255.0.0.0",
                    "255.255.0.0",
                    "255.255.255.0",
                    "255.255.255.252"
                ],
                correct: [1],
                explanation: "La Classe B (128.0.0.0 à 191.255.255.255) utilise par défaut un masque /16 (255.255.0.0)."
            },
            {
                id: 10,
                question: "Combien de bits d'hôte sont nécessaires pour supporter 50 hôtes utilisables ?",
                options: [
                    "5 bits",
                    "6 bits",
                    "7 bits",
                    "8 bits"
                ],
                correct: [1],
                explanation: "2^6 = 64. 64 - 2 = 62 hôtes utilisables. 5 bits ne donneraient que 30 hôtes."
            },
            {
                id: 11,
                question: "Quelle couche du modèle OSI est responsable du chiffrement et de la compression des données ?",
                options: [
                    "Application",
                    "Présentation",
                    "Session",
                    "Transport"
                ],
                correct: [1],
                explanation: "La couche Présentation (6) gère l'aspect visuel, le formatage (JPEG, ASCII) et la sécurité (SSL/TLS)."
            },
            {
                id: 12,
                question: "Quel port utilise le protocole HTTPS par défaut ?",
                options: [
                    "80",
                    "22",
                    "443",
                    "53"
                ],
                correct: [2],
                explanation: "HTTPS utilise le port 443 (TCP). Le port 80 est pour le HTTP non sécurisé."
            },
            {
                id: 13,
                question: "Un switch opère principalement à quelle couche du modèle OSI ?",
                options: [
                    "Couche 1 (Physique)",
                    "Couche 2 (Liaison)",
                    "Couche 3 (Réseau)",
                    "Couche 4 (Transport)"
                ],
                correct: [1],
                explanation: "Un switch classique utilise les adresses MAC pour commuter les trames, ce qui correspond à la Couche 2."
            },
            {
                id: 14,
                question: "Quelle méthode de transmission permet d'envoyer et de recevoir des données SIMULTANÉMENT ?",
                options: [
                    "Simplex",
                    "Half-Duplex",
                    "Full-Duplex",
                    "Auto-MDIX"
                ],
                correct: [2],
                explanation: "Le Full-Duplex permet la communication bidirectionnelle simultanée. Le Half-Duplex (comme les vieux hubs) ne permet qu'un sens à la fois."
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
                explanation: "Les adresses de Classe D (224.0.0.0 à 239.255.255.255) sont réservées au Multicast. 224.0.0.5 est utilisé par OSPF."
            },
            {
                id: 16,
                question: "Le protocole UDP est considéré comme :",
                options: [
                    "Orienté connexion et fiable",
                    "Sans connexion et peu fiable",
                    "Utilisant le 3-way handshake",
                    "Gérant les accusés de réception (ACK)"
                ],
                correct: [1],
                explanation: "UDP est 'Best-effort'. Il n'établit pas de session et ne vérifie pas si les paquets arrivent (contrairement à TCP)."
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
                explanation: "L'adresse 127.0.0.1 (localhost) permet de tester si les protocoles réseau sont bien installés sur la machine."
            },
            {
                id: 18,
                question: "Dans une trame Ethernet, quel champ est utilisé pour la détection d'erreurs ?",
                options: [
                    "Preamble",
                    "Type/Length",
                    "FCS (Frame Check Sequence)",
                    "Source Address"
                ],
                correct: [2],
                explanation: "Le FCS utilise un calcul CRC pour vérifier que la trame n'a pas été corrompue pendant le transport."
            },
            {
                id: 19,
                question: "Quelle est la fonction principale d'un serveur DNS ?",
                options: [
                    "Attribuer des adresses IP dynamiquement",
                    "Traduire des noms de domaine en adresses IP",
                    "Filtrer le trafic entrant",
                    "Router les paquets entre réseaux"
                ],
                correct: [1],
                explanation: "Le DNS permet aux utilisateurs d'utiliser des noms (google.com) au lieu d'adresses IP difficiles à retenir."
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
                explanation: "ARP est utilisé pour trouver l'adresse MAC correspondant à une adresse IP connue sur un réseau local."
            }
        ]
    },
    "phase2": {
        title: "Quiz Phase 2 : Commutation & VLANs (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Un switch reçoit une trame unicast. L'adresse MAC de destination n'est PAS dans sa table MAC. Que fait-il ?",
                options: [
                    "Il jette la trame",
                    "Il envoie la trame à sa passerelle par défaut",
                    "Il inonde (Flood) la trame sur tous les ports sauf celui de réception",
                    "Il envoie une requête ARP"
                ],
                correct: [2],
                explanation: "C'est le comportement 'Unknown Unicast Flooding'. Le switch diffuse pour trouver le destinataire."
            },
            {
                id: 2,
                question: "Vous branchez un téléphone IP Cisco et un PC sur le même port de switch. Quelle fonctionnalité permet de séparer leur trafic ?",
                options: [
                    "VLAN Natif",
                    "Voice VLAN",
                    "Port Security",
                    "LACP"
                ],
                correct: [1],
                explanation: "Le Voice VLAN permet de taguer le trafic voix (souvent avec une priorité QoS) tout en laissant passer les données PC sur le VLAN d'accès."
            },
            {
                id: 3,
                question: "Quelle commande configure un port pour qu'il ne puisse JAMAIS négocier un trunk (DTP off) ?",
                options: [
                    "switchport mode trunk",
                    "switchport nonegotiate",
                    "switchport mode dynamic auto",
                    "switchport mode access"
                ],
                correct: [1, 3], // Allows multiple correct if setup, but usually single choice in simple JS engines. Let's assume standard choice. 'switchport nonegotiate' forces it off. 'mode access' stops trunking. The BEST answer for "DTP OFF" specifically is nonegotiate but context matters. Let's simplify and make 'switchport mode access' + 'nonegotiate' implies trunk context. Let's ask "Quelle commande DESACTIVE le protocole DTP ?" -> switchport nonegotiate.
                // Let's stick to simple clear questions.
                explanation: "La commande 'switchport nonegotiate' désactive l'envoi de trames DTP. 'switchport mode access' force le mode accès."
            },
            // Let's replace Q3 with a clearer one
            {
                id: 3,
                question: "Quelle commande désactive l'envoi de trames de négociation DTP sur une interface ?",
                options: [
                    "no switchport dtp",
                    "switchport nonegotiate",
                    "switchport mode trunk",
                    "switchport trunk encapsulation dot1q"
                ],
                correct: [1],
                explanation: "Pour sécuriser un port, on utilise 'switchport nonegotiate' pour empêcher la négociation automatique."
            },
            {
                id: 4,
                question: "Vous configurez Port Security avec 'maximum 1'. Vous connectez un hub avec 2 PC. Que se passe-t-il quand le 2ème PC parle ?",
                options: [
                    "Le deuxième PC est bloqué, le premier continue",
                    "Les deux PC fonctionnent",
                    "Le port passe en état err-disabled (si mode violation = shutdown)",
                    "Le switch redémarre"
                ],
                correct: [2],
                explanation: "Dès que le switch voit une 2ème adresse MAC source différente, il détecte une violation. Si le mode est shutdown (défaut), le port entier se coupe."
            },
            {
                id: 5,
                question: "Quelle paire de modes DTP va créer un Trunk ?",
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
                question: "Dans STP (802.1D), quel état permet d'apprendre les MACs sans transférer de données ?",
                options: [
                    "Blocking",
                    "Listening",
                    "Learning",
                    "Forwarding"
                ],
                correct: [2],
                explanation: "Learning : le port peuple sa table MAC mais ne forwarde pas encore les trames pour éviter les boucles temporaires."
            },
            {
                id: 7,
                question: "Quelle est la priorité STP par défaut d'un switch Cisco ?",
                options: [
                    "1",
                    "32768",
                    "4096",
                    "65535"
                ],
                correct: [1],
                explanation: "La priorité par défaut est 32768. Avec l'extension System ID (VLAN ID), elle apparaît souvent comme 32768 + VLAN_ID."
            },
            {
                id: 8,
                question: "Deux switches sont connectés via deux liens. Ils utilisent STP. Quel port sera choisi comme 'Root Port' ?",
                options: [
                    "Le port avec l'adresse MAC la plus élevée",
                    "Le port avec le coût vers le Root Bridge le plus bas",
                    "Le port avec le numéro d'interface le plus bas",
                    "Le port configuré en mode trunk"
                ],
                correct: [1],
                explanation: "Le Root Port est toujours celui qui offre le chemin le plus court (coût le plus bas) vers le Root Bridge."
            },
            {
                id: 9,
                question: "Quel protocole est propriétaire Cisco pour la négociation d'EtherChannel ?",
                options: [
                    "LACP (802.3ad)",
                    "PAgP",
                    "STP",
                    "VTP"
                ],
                correct: [1],
                explanation: "PAgP (Port Aggregation Protocol) est spécifique à Cisco. LACP est le standard international."
            },
            {
                id: 10,
                question: "En RSTP (802.1w), quel état remplace les états Blocking et Listening du STP classique ?",
                options: [
                    "Discarding",
                    "Learning",
                    "Forwarding",
                    "Disabled"
                ],
                correct: [0],
                explanation: "RSTP fusionne les états inactifs en un seul état : Discarding."
            },
            {
                id: 11,
                question: "Que se passe-t-il si une Native VLAN mismatch est détectée entre deux switches ?",
                options: [
                    "Le lien trunk se coupe immédiatement",
                    "Le trafic des VLANs concernés peut fuir ou être bloqué par STP",
                    "Le switch redémarre",
                    "Rien, c'est une configuration valide"
                ],
                correct: [1],
                explanation: "Une erreur de native VLAN mismatch génère des logs CDP et peut causer des boucles ou des problèmes de sécurité (VLAN leaking)."
            },
            {
                id: 12,
                question: "Quel mode de violation Port-Security incrémente le compteur de violations sans couper le port ?",
                options: [
                    "Shutdown",
                    "Protect",
                    "Restrict",
                    "Disabled"
                ],
                correct: [2],
                explanation: "Le mode Restrict bloque le trafic non autorisé et incrémente le compteur de violations. Protect bloque mais n'incrémente rien."
            },
            {
                id: 13,
                question: "Quelle est l'adresse MAC de destination utilisée par les BPDU STP ?",
                options: [
                    "FF:FF:FF:FF:FF:FF",
                    "01:80:C2:00:00:00",
                    "01:00:5E:00:00:01",
                    "00:00:0C:07:AC:01"
                ],
                correct: [1],
                explanation: "STP utilise l'adresse multicast de couche 2 01:80:C2:00:00:00 pour ses trames de contrôle."
            },
            {
                id: 14,
                question: "Pour devenir Root Bridge, un switch doit avoir :",
                options: [
                    "L'ID de Bridge (BID) le plus élevé",
                    "L'ID de Bridge (BID) le plus bas",
                    "Le plus grand nombre de ports",
                    "La version d'IOS la plus récente"
                ],
                correct: [1],
                explanation: "Le BID se compose de la priorité + l'adresse MAC. Le switch avec le plus petit BID gagne l'élection."
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
                explanation: "'active' déclenche la négociation LACP. 'desirable' est pour PAgP."
            },
            {
                id: 16,
                question: "Quel est l'ID de VLAN par défaut pour le VLAN Natif sur un switch Cisco ?",
                options: [
                    "VLAN 0",
                    "VLAN 1",
                    "VLAN 100",
                    "VLAN 999"
                ],
                correct: [1],
                explanation: "Par défaut, tout le trafic non tagué est associé au VLAN 1."
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
                explanation: "'show mac address-table' permet de voir où sont branchés les équipements sur le réseau local."
            },
            {
                id: 18,
                question: "En STP, quel rôle de port est assigné sur le switch qui n'est pas le Root Bridge pour pointer vers celui-ci ?",
                options: [
                    "Designated Port",
                    "Root Port",
                    "Alternate Port",
                    "Backup Port"
                ],
                correct: [1],
                explanation: "Chaque switch non-Root possède un seul Root Port pointant vers le Root Bridge."
            },
            {
                id: 19,
                question: "Quel protocole est utilisé pour réduire la taille de la base de données VLAN en ne propageant que les VLANs nécessaires (VLAN Pruning) ?",
                options: [
                    "STP",
                    "VTP",
                    "DTP",
                    "LACP"
                ],
                correct: [1],
                explanation: "VTP (VLAN Trunking Protocol) dispose d'une fonctionnalité de 'pruning' pour économiser de la bande passante sur les trunks."
            },
            {
                id: 20,
                question: "Que se passe-t-il si vous tapez 'switchport port-security' sans options sur un port ?",
                options: [
                    "Rien, la commande est incomplète",
                    "Le port est sécurisé avec les valeurs par défaut (max 1 MAC, mode shutdown)",
                    "Le port se coupe immédiatement",
                    "Toutes les adresses MAC sont apprises en 'sticky'"
                ],
                correct: [1],
                explanation: "Cette commande active la fonctionnalité avec ses paramètres par défaut."
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
                    "Route Hôte",
                    "Gateway of Last Resort (Route par défaut)",
                    "Route Flottante",
                    "Route Dynamique"
                ],
                correct: [1],
                explanation: "C'est une route statique par défaut. Elle permet de router tout le trafic vers une destination inconnue (Internet) via 192.168.1.1."
            },
            {
                id: 2,
                question: "Deux routeurs OSPF sont connectés. Ils restent bloqués en état '2-WAY'. Quelle est la cause probable ?",
                options: [
                    "Mauvais mot de passe",
                    "MTU mismatch",
                    "Les deux routeurs sont configurés avec 'priority 0' (DROTHER)",
                    "C'est un comportement normal sur un lien Point-to-Point"
                ],
                correct: [2],
                explanation: "Sur un réseau multi-accès (Ethernet), si tous les routeurs ont une priorité de 0, aucun ne devient DR/BDR. Ils restent voisins mais ne s'échangent pas de routes (2-WAY)."
            },
            {
                id: 3,
                question: "Quelle est la métrique utilisée par OSPF pour choisir le meilleur chemin ?",
                options: [
                    "Nombre de sauts (Hop Count)",
                    "Bande passante (Calculée via le Coût)",
                    "Délai et Charge",
                    "Fiabilité"
                ],
                correct: [1],
                explanation: "OSPF utilise le Coût = H / Bandwidth. Les liens rapides (Fibre, Gibabit) ont un coût plus faible et sont préférés."
            },
            {
                id: 4,
                question: "Quelle commande affiche les voisins OSPF et leur état ?",
                options: [
                    "show ip route ospf",
                    "show ip ospf neighbors",
                    "show ip ospf interface",
                    "show ip protocols"
                ],
                correct: [1],
                explanation: "'show ip ospf neighbor' est LA commande essentielle pour le dépannage de l'adjacence OSPF."
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
                explanation: "OSPF est 110. Pour qu'une route statique ne soit utilisée QUE si OSPF tombe, elle doit avoir une AD supérieure (ex: 120)."
            },
            {
                id: 6,
                question: "Dans une table de routage, quelle entrée sera choisie pour le paquet destination 10.1.1.1 ?",
                options: [
                    "10.0.0.0/8",
                    "10.1.0.0/16",
                    "10.1.1.0/24",
                    "0.0.0.0/0"
                ],
                correct: [2],
                explanation: "La règle du 'Longest Prefix Match' (Masque le plus long) s'applique toujours. /24 est plus précis que /16 ou /8."
            },
            {
                id: 7,
                question: "Dans OSPF, quel est le rôle de l'Area 0 ?",
                options: [
                    "C'est une zone de test uniquement",
                    "C'est l'aire de Backbone à laquelle toutes les autres zones doivent se connecter",
                    "C'est la zone réservée aux routeurs de marque Cisco",
                    "C'est la zone où le routage est désactivé"
                ],
                correct: [1],
                explanation: "L'Area 0 est le coeur du domaine OSPF. Toutes les communications inter-aires passent par elle."
            },
            {
                id: 8,
                question: "Quel est le masque générique (Wildcard Mask) utilisé pour inclure exactement le réseau 192.168.1.0/24 dans OSPF ?",
                options: [
                    "255.255.255.0",
                    "0.0.0.255",
                    "0.0.0.0",
                    "255.0.0.0"
                ],
                correct: [1],
                explanation: "Un Wildcard Mask est l'inverse d'un masque de sous-réseau. Pour un /24 (255.255.255.0), le Wildcard est 0.0.0.255."
            },
            {
                id: 9,
                question: "Quelle commande OSPF permet d'empêcher l'envoi de Hello packets sur une interface LAN ?",
                options: [
                    "no network",
                    "passive-interface",
                    "silent-interface",
                    "ospf disable"
                ],
                correct: [1],
                explanation: "'passive-interface' permet d'inclure le réseau dans OSPF sans envoyer de trafic de voisinage inutile sur un réseau local d'utilisateurs."
            },
            {
                id: 10,
                question: "Quelle est l'adresse multicast utilisée par les routeurs OSPF 'DR' et 'BDR' pour écouter les mises à jour ?",
                options: [
                    "224.0.0.1",
                    "224.0.0.5",
                    "224.0.0.6",
                    "224.0.0.10"
                ],
                correct: [2],
                explanation: "Les DR et BDR écoutent sur 224.0.0.6. Tous les autres routeurs (DROTHERs) écoutent sur 224.0.0.5."
            },
            {
                id: 11,
                question: "Dans quel état OSPF les routeurs décident-ils qui sera le DR (Designated Router) ?",
                options: [
                    "Down",
                    "Init",
                    "2-Way",
                    "Full"
                ],
                correct: [2],
                explanation: "L'élection du DR/BDR a lieu pendant l'état 2-Way."
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
                explanation: "Un ABR relie une aire normale à l'aire de Backbone Area 0."
            },
            {
                id: 13,
                question: "Quelle commande permet de définir MANUELLEMENT l'ID d'un routeur OSPF ?",
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
                question: "Quelle est l'Administrative Distance (AD) d'une route statique par défaut ?",
                options: [
                    "1",
                    "90",
                    "110",
                    "120"
                ],
                correct: [0],
                explanation: "Une route statique a une AD de 1. Elle est préférée à OSPF (110) ou EIGRP (90)."
            },
            {
                id: 15,
                question: "Si un routeur OSPF possède une interface Loopback 2.2.2.2 et une interface physique 10.0.0.1, quel sera son Router ID par défaut ?",
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
                question: "Dans OSPF, quel type de paquet est utilisé pour envoyer des mises à jour spécifiques sur la topologie ?",
                options: [
                    "Hello",
                    "DBD (Database Description)",
                    "LSR (Link State Request)",
                    "LSU (Link State Update)"
                ],
                correct: [3],
                explanation: "Les LSU contiennent les LSA (Link State Advertisements) qui décrivent l'état des liens."
            },
            {
                id: 18,
                question: "Que signifie une AD (Administrative Distance) de 255 ?",
                options: [
                    "La route est ultra-prioritaire",
                    "La route est inconnue ou non fiable (ne sera jamais installée dans la table de routage)",
                    "C'est une route directe",
                    "C'est une route vers Internet"
                ],
                correct: [1],
                explanation: "Une AD de 255 signifie que la source n'est pas fiable, donc le routeur n'utilisera pas cette route."
            },
            {
                id: 19,
                question: "Quelle commande permet de redistribuer une route par défaut dans OSPF ?",
                options: [
                    "ip route 0.0.0.0 0.0.0.0 loopback0",
                    "default-information originate",
                    "propagate static",
                    "ospf default route"
                ],
                correct: [1],
                explanation: "Cette commande est nécessaire pour annoncer aux autres routeurs OSPF la sortie vers Internet."
            },
            {
                id: 20,
                question: "Quel est l'ID de zone (Area ID) réservé pour le Backbone OSPF ?",
                options: [
                    "Area 0",
                    "Area 1",
                    "Area 100",
                    "Area 255"
                ],
                correct: [0],
                explanation: "Toute architecture OSPF multi-aire doit posséder une Area 0 centrale."
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
                    "Oui, c'est la nouvelle méthode",
                    "Non, l'interface physique ne doit pas avoir d'IP ni d'encapsulation, tout se fait sur les sous-interfaces",
                    "Peu importe tant que l'IP est bonne",
                    "Il faut activer 'ip routing' sur le routeur"
                ],
                correct: [1],
                explanation: "Sur un routeur, l'interface physique doit être 'no shutdown' mais nue. L'encapsulation et l'IP se mettent sur les sous-interfaces (g0/0.10)."
            },
            {
                id: 2,
                question: "Sur un switch L3, vous voulez utiliser un port pour le connecter directement à un routeur FAI (IP publique). Quelle commande utilisez-vous ?",
                options: [
                    "interface vlan 1",
                    "switchport mode trunk",
                    "no switchport",
                    "spanning-tree portfast"
                ],
                correct: [2],
                explanation: "'no switchport' transforme le port du switch en port routé pur, capable de recevoir une adresse IP sans passer par une interface VLAN (SVI)."
            },
            {
                id: 3,
                question: "Un PC dans le VLAN 10 veut contacter un PC dans le VLAN 20. À qui envoie-t-il sa trame ?",
                options: [
                    "Directement au PC du VLAN 20 (ARP Broadcast)",
                    "Au Switch",
                    "À sa passerelle par défaut (Gateway)",
                    "Au serveur DNS"
                ],
                correct: [2],
                explanation: "Pour communiquer entre différents réseaux (VLANs), on doit passer par un routeur (Gateway). Le PC vise la MAC de sa Gateway."
            },
            {
                id: 5,
                question: "Si le VLAN 10 n'existe pas dans la base de données VLAN du switch, que se passe-t-il pour l'interface SVI VLAN 10 ?",
                options: [
                    "Elle reste UP si une IP est configurée",
                    "Elle passe en état DOWN/DOWN",
                    "Elle fonctionne mais lentement",
                    "Elle passe en mode transparent"
                ],
                correct: [1],
                explanation: "L'interface VLAN (SVI) est une interface logique dépendante de l'existence du VLAN. Si le VLAN 10 n'existe pas ou est shutdown, la SVI tombe."
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
                explanation: "Le lien doit être un Trunk pour pouvoir transporter les trames taguées de plusieurs VLANs vers le routeur."
            },
            {
                id: 8,
                question: "Comment appelle-t-on l'interface virtuelle créée sur un switch pour servir de passerelle à un VLAN ?",
                options: [
                    "Sub-interface",
                    "SVI (Switch Virtual Interface)",
                    "Loopback",
                    "Tunnel Interface"
                ],
                correct: [1],
                explanation: "Une SVI (ex: interface vlan 10) est l'IP de passerelle configurée directement sur le switch L3."
            },
            {
                id: 9,
                question: "Quel est l'avantage principal des SVIs par rapport au Router-on-a-Stick ?",
                options: [
                    "C'est moins cher",
                    "Performance beaucoup plus élevée (routage matériel/ASIC)",
                    "Plus facile à configurer sur un routeur",
                    "Plus sécurisé"
                ],
                correct: [1],
                explanation: "Le routage Inter-VLAN sur un switch L3 est effectué au niveau du matériel, ce qui est beaucoup plus rapide que de faire des allers-retours vers un routeur externe ('One-armed router')."
            },
            {
                id: 10,
                question: "Quelle commande est nécessaire sur une sous-interface de routeur pour spécifier le VLAN à router ?",
                options: [
                    "encapsulation dot1q [vlan_id]",
                    "vlan [vlan_id]",
                    "switchport access vlan [vlan_id]",
                    "ip vlan [vlan_id]"
                ],
                correct: [0],
                explanation: "Exemple : 'encapsulation dot1q 10' indique que la sous-interface gère le trafic tagué pour le VLAN 10."
            },
            {
                id: 11,
                question: "Si un hôte dans le VLAN 10 ne reçoit pas d'adresse du serveur DHCP situé dans le VLAN 20, quelle commande manque probablement sur sa passerelle ?",
                options: [
                    "ip dhcp pool",
                    "ip helper-address [IP_DHCP]",
                    "no switchport",
                    "service dhcp"
                ],
                correct: [1],
                explanation: "Comme les requêtes DHCP sont des broadcasts (qui ne traversent pas les routeurs/VLANs), il faut un agent de relais (helper-address) pour les transformer en unicast vers le serveur."
            },
            {
                id: 12,
                question: "Combien de sous-interfaces peut-on théoriquement créer sur une interface physique de routeur ?",
                options: [
                    "2",
                    "10",
                    "Des milliers (limité par les ressources CPU/RAM)",
                    "Aucune"
                ],
                correct: [2],
                explanation: "On peut en créer énormément, même si en pratique on se limite pour éviter de saturer la bande passante du lien physique unique."
            },
            {
                id: 13,
                question: "Que signifie 'Native VLAN Mismatch' dans un environnement Router-on-a-Stick ?",
                options: [
                    "Le routeur et le switch ne parlent pas le même langage",
                    "Le VLAN natif configuré sur le Trunk n'est pas le même des deux côtés",
                    "Le routeur est éteint",
                    "Le switch n'a pas de licence"
                ],
                correct: [1],
                explanation: "Si le switch envoie du trafic non tagué (Native VLAN) et que le routeur attend du tagué (ou vice-versa), le trafic sera perdu ou mal routé."
            },
            {
                id: 14,
                question: "Sur un switch L3, quelle commande permet de transformer un port physique en port routé (port Archer) ?",
                options: [
                    "ip address",
                    "no switchport",
                    "switchport mode route",
                    "interface route"
                ],
                correct: [1],
                explanation: "La commande 'no switchport' désactive les fonctions L2 sur le port, permettant d'y assigner directement une adresse IP."
            },
            {
                id: 15,
                question: "Quelle est la métrique par défaut d'une route statique pointant vers une interface VLAN (SVI) ?",
                options: [
                    "0",
                    "1",
                    "110",
                    "Elle n'a pas de métrique"
                ],
                correct: [1],
                explanation: "Toute route statique a une Distance Administrative de 1."
            },
            {
                id: 16,
                question: "Dans une topologie avec un switch L3, où configure-t-on généralement les adresses de passerelle (Gateways) ?",
                options: [
                    "Sur chaque port du switch",
                    "Sur les interfaces SVI (interface vlan X)",
                    "Sur le serveur DNS",
                    "Sur l'interface de management"
                ],
                correct: [1],
                explanation: "Le switch L3 possède une SVI pour chaque VLAN, qui sert d'IP de sortie pour tous les hôtes de ce VLAN."
            },
            {
                id: 17,
                question: "Quel protocole est utilisé pour automatiser la redondance de passerelle par défaut (First Hop Redundancy) ?",
                options: [
                    "STP",
                    "HSRP / VRRP",
                    "VTP",
                    "OSPF"
                ],
                correct: [1],
                explanation: "HSRP (propriétaire Cisco) ou VRRP (standard) permettent à deux routeurs/switches de partager une IP virtuelle de passerelle."
            },
            {
                id: 18,
                question: "Vous avez configuré 'interface g0/0.10' et 'encapsulation dot1q 10'. Le ping vers la gateway échoue. Quelle commande avez-vous peut-être oublié sur l'interface physique g0/0 ?",
                options: [
                    "ip address",
                    "no shutdown",
                    "switchport mode trunk",
                    "ip routing"
                ],
                correct: [1],
                explanation: "L'interface physique doit être ALLUMÉE (no shutdown) pour que ses sous-interfaces fonctionnent."
            },
            {
                id: 19,
                question: "Pourquoi est-il risqué de laisser 'VLAN 1' comme VLAN natif sur un lien Trunk ?",
                options: [
                    "Parce que c'est trop lent",
                    "Pour éviter les attaques 'VLAN Hopping'",
                    "Parce que le routeur ne supporte pas le VLAN 1",
                    "C'est une recommandation de Microsoft"
                ],
                correct: [1],
                explanation: "Changer le VLAN natif (ex: vers VLAN 99) est une mesure de sécurité standard contre les injections de trames malveillantes."
            },
            {
                id: 20,
                question: "Quelle commande permet de vérifier toutes les routes connues par un switch multicouche ?",
                options: [
                    "show vlan",
                    "show ip route",
                    "show mac address-table",
                    "show running-config"
                ],
                correct: [1],
                explanation: "Si le routage est activé ('ip routing'), 'show ip route' montre la table de routage du switch."
            }
        ]
    },
    "phase5": {
        title: "Quiz Phase 5 : Sécurité & ACLs (Niveau CCNA)",
        questions: [
            {
                id: 1,
                question: "Quelle entrée ACL autorise UNIQUEMENT l'hôte 192.168.1.5 ?",
                options: [
                    "permitip 192.168.1.5 0.0.0.0",
                    "permit ip 192.168.1.5 0.0.0.255",
                    "permit ip host 192.168.1.5",
                    "Les réponses A et C sont correctes"
                ],
                correct: [3],
                explanation: "'host 192.168.1.5' est un raccourci syntaxique pour '192.168.1.5 0.0.0.0' (Wildcard 0)."
            },
            {
                id: 2,
                question: "Quelle est la règle implicite à la fin de TOUTE Access List (ACL) ?",
                options: [
                    "permit ip any any",
                    "deny ip any any",
                    "permit tcp any any established",
                    "log all"
                ],
                correct: [1],
                explanation: "Il y a toujours un 'Implicit Deny' (Tout interdire) caché à la fin. Si un paquet ne matche aucune ligne, il est jeté."
            },
            {
                id: 3,
                question: "Attaque DHCP Starvation : Un attaquant inonde le serveur DHCP de requêtes. Quelle solution atténue cela ?",
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
                explanation: "Port Security limite le nombre d'adresses MAC autorisées sur un port. Cela empêche un attaquant de simuler des milliers de clients DHCP différents (MAC spoofing)."
            },
            {
                id: 4,
                question: "Vous configurez SSH. Quelle commande oblige les utilisateurs à se loguer avec un compte local (login/password) ?",
                options: [
                    "login",
                    "login local",
                    "password cisco",
                    "service password-encryption"
                ],
                correct: [1],
                explanation: "'login' utilise juste le mot de passe de la ligne VTY. 'login local' demande au routeur de vérifier la base de données d'utilisateurs locaux (username/secret)."
            },
            {
                id: 5,
                question: "Quel message indique qu'un port a été désactivé par BPDU Guard ?",
                options: [
                    "Line protocol is down",
                    "Err-disabled state (bpduguard)",
                    "Spanning-tree topology change",
                    "Request timed out"
                ],
                correct: [1],
                explanation: "BPDU Guard (activé sur les ports PortFast) place le port en err-disabled s'il reçoit une BPDU (ce qui signifie qu'un switch a été branché)."
            },
            {
                id: 6,
                question: "Où doit-on placer une ACL Standard pour un filtrage optimal ?",
                options: [
                    "Au plus près de la source du trafic",
                    "Au plus près de la destination",
                    "Sur tous les ports du switch",
                    "Uniquement sur l'interface loopback"
                ],
                correct: [1],
                explanation: "Les ACL standards (1-99) ne filtrent que sur l'IP source. Pour éviter de bloquer du trafic légitime vers d'autres destinations, on les place au plus près de la destination."
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
                explanation: "Il faut d'abord activer le snooping globalement (`ip dhcp snooping`), puis spécifier les VLANs concernés avec `ip dhcp snooping vlan [ID]`."
            },
            {
                id: 8,
                question: "Quel protocole permet de sécuriser les échanges de gestion (management) entre un PC et un commutateur ?",
                options: [
                    "Telnet",
                    "HTTP",
                    "SSH",
                    "SNMP v1"
                ],
                correct: [2],
                explanation: "SSH (Secure Shell) crypte le trafic, contrairement à Telnet qui envoie tout en clair (y compris les mots de passe)."
            },
            {
                id: 9,
                question: "Que signifie l'état 'Sticky' dans la configuration Port-Security ?",
                options: [
                    "Les adresses MAC sont apprises dynamiquement et enregistrées dans la configuration",
                    "Le port est bloqué de manière permanente",
                    "Le port accepte n'importe quelle adresse MAC sans limite",
                    "L'adresse MAC expire après 5 minutes"
                ],
                correct: [0],
                explanation: "L'option 'sticky' permet au switch d'apprendre les MACs dynamiquement et de les ajouter à la configuration (running-config) pour qu'elles survivent à un redémarrage si on sauvegarde."
            },
            {
                id: 10,
                question: "Quel type de NAT permet à plusieurs hôtes internes d'utiliser UNE SEULE adresse IP publique ?",
                options: [
                    "Static NAT",
                    "Dynamic NAT",
                    "PAT (Port Address Translation) ou Overload",
                    "NAT Pooling"
                ],
                correct: [2],
                explanation: "PAT utilise les numéros de ports TCP/UDP pour distinguer les sessions des différents hôtes internes sur une seule IP publique."
            },
            {
                id: 11,
                question: "Dans NAT, quelle adresse désigne l'hôte sur le réseau interne tel qu'il est vu depuis l'extérieur ?",
                options: [
                    "Inside Local",
                    "Inside Global",
                    "Outside Local",
                    "Outside Global"
                ],
                correct: [1],
                explanation: "Inside Global est l'adresse (souvent publique) qui représente votre machine interne sur Internet."
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
                question: "Quelle technologie empêche les attaques de type 'ARP Poisoning' ou 'Man-in-the-Middle' au niveau L2 ?",
                options: [
                    "Port Security",
                    "DHCP Snooping",
                    "Dynamic ARP Inspection (DAI)",
                    "BPDU Guard"
                ],
                correct: [2],
                explanation: "DAI vérifie les paquets ARP par rapport à une base de données de confiance (souvent issue du DHCP Snooping) pour rejeter les faux ARPs."
            },
            {
                id: 14,
                question: "Une ACL étendue permet de filtrer sur quels critères (par rapport à la standard) ?",
                options: [
                    "Source uniquement",
                    "Source, Destination, Protocole (TCP/UDP) et Port",
                    "Adresse MAC uniquement",
                    "VLAN d'origine"
                ],
                correct: [1],
                explanation: "Les ACLs étendues sont beaucoup de plus précises et permettent de bloquer par exemple uniquement le trafic Web (Port 80) tout en laissant passer le Ping."
            },
            {
                id: 15,
                question: "Quel protocole remplace Telnet pour une administration sécurisée car il chiffre les données ?",
                options: [
                    "HTTPs",
                    "FTP",
                    "SSH",
                    "SNMPv1"
                ],
                correct: [2],
                explanation: "SSH (Secure Shell) utilise la cryptographie pour protéger les mots de passe et les commandes envoyées sur le réseau."
            },
            {
                id: 16,
                question: "Que se passe-t-it si vous tapez 'transport input none' sur les lignes VTY d'un routeur ?",
                options: [
                    "Trafic illimité",
                    "Le routeur redémarre",
                    "Plus aucun accès distant (SSH/Telnet) n'est possible",
                    "Le routeur passe en mode sécurisé"
                ],
                correct: [2],
                explanation: "Cette commande bloque toutes les connexions entrantes sur les lignes virtuelles."
            },
            {
                id: 17,
                question: "Quelle commande permet de générer les clés RSA nécessaires pour activer SSH sur Cisco ?",
                options: [
                    "crypto key generate rsa",
                    "ssh key generate",
                    "security key rsa",
                    "ip ssh version 2"
                ],
                correct: [0],
                explanation: "Sans les clés RSA, le service SSH ne peut pas démarrer car il ne peut pas chiffrer la session."
            },
            {
                id: 18,
                question: "Un Wildcard Mask de 0.0.0.3 correspond à :",
                options: [
                    "Un hôte unique",
                    "Un bloc de 4 adresses IP",
                    "Un réseau /24",
                    "Toutes les adresses"
                ],
                correct: [1],
                explanation: "0.0.0.3 signifie que les 2 derniers bits sont ignorés (matchent n'importe quoi). 2^2 = 4 adresses."
            },
            {
                id: 19,
                question: "Comment définit-on un port 'de confiance' pour le DHCP Snooping (vers le serveur) ?",
                options: [
                    "ip dhcp snooping trust",
                    "interface trusted",
                    "switchport mode server",
                    "dhcp-server allow"
                ],
                correct: [0],
                explanation: "On utilise 'ip dhcp snooping trust' sur l'interface branchée vers le serveur DHCP légitime ou vers un autre switch."
            },
            {
                id: 20,
                question: "Quelle est la meilleure pratique pour sécuriser les ports non utilisés d'un switch ?",
                options: [
                    "Les laisser tels quels",
                    "Les mettre en 'shutdown' et les assigner à un VLAN mort (blackhole)",
                    "Activer OSPF dessus",
                    "Mettre un mot de passe sur le port"
                ],
                correct: [1],
                explanation: "C'est la base du 'Switch Port Hardening' : `shutdown` + `switchport access vlan 999`."
            }
        ]
    },
    "phase6": {
        title: "Quiz Phase 6 : Technologies Avancées & Synthèse",
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
                explanation: "LACP (802.3ad) est le standard ouvert. PAgP est propriétaire Cisco."
            },
            {
                id: 2,
                question: "Quelle adresse IPv6 correspond à l'adresse de lien local (Link-Local) générée automatiquement ?",
                options: [
                    "2001::/16",
                    "AE80::/10",
                    "FE80::/10",
                    "FC00::/7"
                ],
                correct: [2],
                explanation: "FE80::... est le préfixe des adresses Link-Local, utilisées pour la communication sur le même segment (comme ARP en IPv4)."
            },
            {
                id: 3,
                question: "NAT Overload (PAT) utilise quel élément pour distinguer les sessions de plusieurs utilisateurs partageant une seule IP publique ?",
                options: [
                    "L'adresse MAC",
                    "Le numéro de séquence TCP",
                    "Le numéro de Port Source",
                    "L'adresse IP de destination"
                ],
                correct: [2],
                explanation: "PAT (Port Address Translation) mappe chaque IP privée interne + Port Source vers l'IP Publique + Port Unique."
            },
            {
                id: 4,
                question: "HSRP : Le routeur Actif tombe. Le routeur Standby prend la relève. Que se passe-t-il quand le routeur Actif revient (délai de préemption activé) ?",
                options: [
                    "Il reste en Standby",
                    "Il reprend son rôle de routeur Actif immédiatement (si sa priorité est supérieure)",
                    "Il redémarre",
                    "Il partage la charge"
                ],
                correct: [1],
                explanation: "Si 'preempt' est configuré, le routeur avec la plus haute priorité reprendra le rôle Actif dès qu'il sera disponible."
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
                explanation: "'ipv6 address autoconfig' dit au routeur de s'auto-configurer en écoutant les Router Advertisements (RA) sur le lien."
            },
            {
                id: 6,
                question: "Quel protocole de découverte est propriétaire Cisco et activé par défaut sur presque tous les équipements Cisco ?",
                options: [
                    "LLDP (Link Layer Discovery Protocol)",
                    "CDP (Cisco Discovery Protocol)",
                    "VTP",
                    "STP"
                ],
                correct: [1],
                explanation: "CDP est utilisé par Cisco pour partager des informations avec ses voisins directs. LLDP est l'équivalent standard ouvert."
            },
            {
                id: 7,
                question: "Dans Syslog, quel niveau de sévérité (Severity Level) correspond à une erreur 'Critical' ?",
                options: [
                    "0",
                    "2",
                    "5",
                    "7"
                ],
                correct: [1],
                explanation: "L'échelle va de 0 (Emergency) à 7 (Debug). Critical est le niveau 2."
            },
            {
                id: 8,
                question: "Quel est l'objectif du protocole NTP (Network Time Protocol) dans un réseau ?",
                options: [
                    "Accélérer le routage",
                    "Synchroniser l'heure de tous les équipements",
                    "Surveiller la bande passante",
                    "Générer des logs"
                ],
                correct: [1],
                explanation: "NTP assure que tous les logs et événements ont un horodatage cohérent, ce qui est crucial pour le troubleshooting et la sécurité."
            },
            {
                id: 9,
                question: "IPv6 EUI-64 : Quelle valeur est insérée au milieu de l'adresse MAC pour créer l'identifiant d'interface ?",
                options: [
                    "FFFF",
                    "FFFE",
                    "FFEE",
                    "C000"
                ],
                correct: [1],
                explanation: "EUI-64 prend l'adresse MAC (48 bits), l'écarte au milieu et insère FFFE (16 bits) pour obtenir un ID d'interface de 64 bits."
            },
            {
                id: 10,
                question: "Quel service Cloud correspond à une application accessible directement via un navigateur (ex: Office 365, Gmail) ?",
                options: [
                    "IaaS (Infrastructure as a Service)",
                    "PaaS (Platform as a Service)",
                    "SaaS (Software as a Service)",
                    "SDN"
                ],
                correct: [2],
                explanation: "SaaS est le modèle où l'utilisateur consomme directement le logiciel sans gérer d'infrastructure."
            },
            {
                id: 11,
                question: "Quelle est l'adresse multicast IPv6 sollicitée pour atteindre 'Tous les Routeurs' (All Routers) ?",
                options: [
                    "FF02::1",
                    "FF02::2",
                    "FF05::1",
                    "FF02::1:FF00:0"
                ],
                correct: [1],
                explanation: "FF02::1 est pour 'tous les noeuds', FF02::2 est réservée aux routeurs."
            },
            {
                id: 12,
                question: "HSRP : Quelle est la priorité par défaut d'un routeur dans un groupe ?",
                options: [
                    "1",
                    "10",
                    "100",
                    "255"
                ],
                correct: [2],
                explanation: "La priorité par défaut est 100. On l'augmente pour forcer un routeur à devenir Actif."
            },
            {
                id: 13,
                question: "Quel protocole est l'équivalent standard (non-propriétaire) de HSRP ?",
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
                question: "SNMP : Quel message est envoyé par un agent SNMP à un manager de manière proactive (sans être sollicité) pour signaler un problème ?",
                options: [
                    "Get-Request",
                    "Set-Request",
                    "Trap",
                    "Inform"
                ],
                correct: [2],
                explanation: "Une 'Trap' SNMP est une notification spontanée envoyée lors d'un événement (ex: lien qui tombe)."
            },
            {
                id: 15,
                question: "Quelle commande permet de vérifier le statut HSRP d'un routeur ?",
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
                question: "IPv6 : Quel préfixe est utilisé pour les adresses de Multicast ?",
                options: [
                    "FE80::/10",
                    "FF00::/8",
                    "2001::/3",
                    "::1/128"
                ],
                correct: [1],
                explanation: "Toutes les adresses commençant par FF sont des adresses de Multicast en IPv6."
            },
            {
                id: 17,
                question: "Que se passe-t-il si un routeur reçoit un paquet IPv6 dépassant le MTU du lien, s'il n'y a pas de fragmentation ?",
                options: [
                    "Il le fragmente lui-même",
                    "Il le jette et envoie un ICMPv6 'Packet Too Big' à l'expéditeur",
                    "Il le compresse",
                    "Il le transfère par petits morceaux"
                ],
                correct: [1],
                explanation: "En IPv6, les routeurs ne fragmentent plus les paquets. C'est l'hôte source qui doit s'adapter (Path MTU Discovery)."
            },
            {
                id: 18,
                question: "Dans le modèle SDN (Software Defined Networking), quel plan de contrôle est centralisé sur un Controller ?",
                options: [
                    "Data Plane",
                    "Control Plane",
                    "Management Plane",
                    "User Plane"
                ],
                correct: [1],
                explanation: "Le SDN sépare le Control Plane (décision) du Data Plane (transfert) et centralise le Control Plane sur un contrôleur logiciel."
            },
            {
                id: 19,
                question: "Quel protocole est utilisé par les contrôleurs SDN pour communiquer 'vers le bas' avec les équipements réseau ?",
                options: [
                    "Restful API",
                    "Northbound API",
                    "Southbound API (ex: OpenFlow)",
                    "Eastbound API"
                ],
                correct: [2],
                explanation: "Les protocoles 'Southbound' relient le contrôleur aux switches/routeurs."
            },
            {
                id: 20,
                question: "Quelle méthode permet de sauvegarder la configuration d'un routeur Cisco sur un serveur distant ?",
                options: [
                    "copy running-config startup-config",
                    "copy running-config tftp:",
                    "save to server",
                    "export config"
                ],
                correct: [1],
                explanation: "On utilise généralement TFTP, FTP ou SCP pour exporter les fichiers de configuration hors de l'équipement."
            }
        ]
    }
};

window.quizData = quizData;
