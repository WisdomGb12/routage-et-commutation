
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
                id: 4,
                question: "Quelle commande de dépannage permet de voir l'état des sous-interfaces IP ?",
                options: [
                    "show vlan brief",
                    "show ip interface brief",
                    "show interfaces trunk",
                    "show running-config"
                ],
                correct: [1],
                explanation: "'show ip interface brief' montre un résumé de toutes les interfaces L3, y compris les sous-interfaces et les SVIs, avec leur état (up/up ou down)."
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
            }
        ]
    }
};

window.quizData = quizData;
