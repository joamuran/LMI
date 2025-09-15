---
# Informació general del document
title: 1. Programes informàtics
subtitle: Entorns de Desenvolupament
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Entorns de Desenvolupament
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---

# Programes informàtics

En la societat del coneixement en què vivim, el tractament de la informació juga un paper de gran importància en tots els àmbits: industrial, social, domèstic, etcètera. Tota aquesta informació que ens envolta és emmagatzemada i processada per sistemes informàtics. La part d'aquests sistemes encarregada del tractament de la informació és el que es coneix com a **software**.

En aquest apartat introductori, abordarem els conceptes de programa informàtic i software, així com la seua funció dins d'un sistema informàtic. Per a això, ens basarem en algunes definicions proposades en els estàndards de l'IEEE/ISO/IEC (Institut d'Enginyers Elèctrics i Electrònics; Organització Internacional per a la Normalització i Comissió Electrònica Internacional), dedicades a la creació i difusió d'estàndards.

# Software i programes informàtics

Segons l'estàndard internacional *ISO/IEC/IEEE 24765:2017*, un programa informàtic es defineix com:

!!! note ""
    1. Una combinació d'instruccions i definicions de dades que permeten al maquinari de l'ordinador realitzar funcions computacionals o de control.
    2. Una unitat sintàctica que s'ajusta a les regles d'un llenguatge de programació en particular, i que es compon de declaracions i sentències o instruccions necessàries per a realitzar determinada funció, tasca o solució d'un problema.

En aquestes dues accepcions, cal remarcar que es tracta de combinació d'instruccions o sentències, així com de definicions o declaracions de dades. Es podria establir un símil entre un programa d'ordinador i una recepta de cuina. En aquesta última, s'indiquen per una part els ingredients (dades en un programa d'ordinador), i per altra els passos ordenats (instruccions) que s'han de seguir per a treballar els ingredients (dades).

Per altra banda, el software es defineix en aquest mateix estàndard com:

!!! note ""
    1. Programes informàtics, procediments i possible documentació associada i dades relacionades amb el funcionament d'un sistema informàtic.
    2. Tot o part dels programes, procediments, regles i documentació associada d'un sistema de processament de la informació.
    3. Programa o conjunt de programes utilitzats per a fer funcionar un ordinador.

Com podem comprovar, el concepte de software, a més dels programes, inclou un altre tipus de contingut, com pot ser la documentació i altres tipus de dades (imatges, icones, fitxers de configuració, etcètera).

El terme **software** o **programari** es complementa amb el de **hardware** o **maquinari** per a compondre el que seria un sistema informàtic. El maquinari fa referència a allò físic i tangible, que podem tocar, mentre que el software seria la part intangible. En les diferents accepcions que ens proporciona l'IEEE, es remarca la relació entre aquests, i se'ns indica que el software és el que fa funcionar el maquinari o sistema informàtic. Com veiem, es tracta de termes complementaris, ja que un sense l'altre no tenen sentit. Per altra banda, altres autors també inclouen un tercer element en el sistema informàtic, el que afecta al component humà d'aquest o **peopleware**, i que abasta tots els aspectes relacionats amb el paper de les persones tant en el desenvolupament com en l'ús de software i maquinari.

Quan parlem de ***software***, també és comú fer una classificació d'aquest en dos grans blocs, el *software de sistema* i el *software d'aplicació*. Vegem a què es refereix cadascun d'ells segons les definicions de l'IEEE 24765, incloent també el software de suport:

- **Software de sistema**: Software dissenyat per a facilitar el funcionament i manteniment d'un sistema informàtic i els seus programes associats. Seria software de sistema, per exemple, els sistemes operatius, les utilitats del sistema o els drivers.
- **Software d'aplicació**: Software dissenyat per a ajudar l'usuari a realitzar tasques concretes o a resoldre determinats tipus de problemes. Es tracta de les aplicacions en si, i contemplarien software com els processadors de text, fulls de càlcul, aplicacions de disseny, videojocs, etc.
- **Software de suport**: Es tracta del software dedicat al desenvolupament i manteniment d'altre software, com ara els compiladors, intèrprets o editors, entre d'altres.

# Algorismes i la seua representació

Com hem vist, un programa és una combinació d'ordres o instruccions que poden ser processades per un ordinador, i que generalment, tenen com a finalitat facilitar o automatitzar algun procediment que sense ells seria bastant tediós.

Aquests procediments s'expressen mitjançant el que coneixem com a **algoritmes**, que segons l'IEEE es defineix com:

!!! note ""

    1. Conjunt finit de regles ben definides per a la solució d'un problema en un nombre finit de passos.
    2. Seqüència d'operacions per a realitzar una tasca específica.


!!! note "Per exemple, i tornant a la nostra analogia gastronòmica, l'[algorisme per a preparar una paella sería](https://concursodepaella.com/la-recepta/)"

    **Dades:**

    - 400 gr. d’arròs de Sueca.
    - 800 gr. de pollastre.
    - 400 gr. de conill.
    - 1 dotzena de “vaquetes” (caragols).
    - 400 gr. de garrofó.
    - 150 gr. de tavella.
    - 300 gr. de bajoqueta.
    - oli d’oliva.
    - 1 gra d’all pelat i picat.
    - 1 tomaca madura triturada.
    - 1 cullerada de pebre roig.
    - safrà en brins, sal, rameta de romer (optatiu).

    **Procediment:**

    1. Tallem el pollastre i el conill a trossos regulars, els salem, posem l’oli a calfar en la paella i el sofregim molt bé i lentament els trossos de carn.
    2. Una vegada sofregida la carn, afegim la verdura i la sofregim.
    3. A continuació s’afig l’all, el pebre roig i la tomaca.
    4. Seguidament se li afigen 2 litres d’aigua, els caragols enganyats al sol. Tot això es deixa coure durant 10 minuts.
    5. Després es posen els brins de safrà i l’arròs repartit per tota la superfície de la paella i es deixa coure a foc molt viu durant 8 minuts.
    6. A continuació es lleva el foc amb la finalitat que es coga a foc lent durant 10 minuts més, perquè agafe el punt de socarrat.

    Com veiem, es tracta d'una representació de la recepta en llenguatge natural. Tal com veureu en el mòdul de programació, els algoritmes es poden expressar d'una manera més propera a l'ordinador mitjançant el que es coneix com a pseudocodi, i també de forma gràfica, bé mitjançant diagrames de flux o mitjançant diagrames d'activitats en UML.

Com veurem en els següents apartats, una vegada tenim definit l'algoritme que resol un problema, ja siga de forma gràfica o en pseudocodi, passarem a la seua codificació en determinat llenguatge de programació.

!!! question "Un algoritme per a saltar el riu"

    Una granota es troba a la vora d'un riu, i vol creuar a la vora oposada saltant sobre les pedres.

    ![](img/granota.png)

    Suponent que les operacions que pot realitzar la granota són:

    - Saltar 1, 2 o 3 posicions
    
    - Girar 90º a esquerra o dreta

    Quin seria l'algoritme o sèrie de passos que hauria de realitzar per a arribar a l'altre extrem.

    ??? info "Solució"

        Si la granota es troba ja mirant cap a la part superior, la seqüència de passos seria:

        1. Saltar 2 posicions
        2. Girar 90º dreta
        3. Saltar 2 posicions
        4. Saltar 3 posicions
        5. Girar 90º esquerra
        6. Saltar 1 posició
        7. Girar 90º dreta
        8. Saltar 2 posicions
        9. Girar 90º esquerra
        10. Saltar 2 posicions
        11. Girar 90º esquerra
        12. Saltar 3 posicions
        13. Saltar 3 posicions
        14. Girar 90º dreta
        15. Saltar 3 posicions (o Saltar 1 i saltar 2)---
# Informació general del document
title: Llenguatge de programació
subtitle: Entorns de Desenvolupament
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Entorns de Desenvolupament
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---

# Llenguatge de Programació

En l’apartat anterior hem parlat dels algoritmes, com una seqüència de passos que descriuen com resoldre determinat problema. Aquests algoritmes els podem representar mitjançant llenguatge natural, pseudocodi o diagrames, fàcilment comprensibles per les persones, però difícilment per un ordinador.

En el següent apartat abordarem els llenguatges de programació, mitjançant els quals expressarem els nostres algoritmes perquè puguen ser entesos per un ordinador.

## Què és un llenguatge de programació?

Segons l’estàndard ISO/IEC/IEEE 24765:2017, un llenguatge de programació es defineix com:

!!! note ""
    Un llenguatge artificial dissenyat per a expressar programes informàtics.

És a dir, es tracta d’un llenguatge dissenyat per a especificar el conjunt de regles que ha de realitzar un sistema informàtic per a resoldre un problema.

Per altra banda, no hem de confondre el terme llenguatge de programació amb llenguatge informàtic. Aquest últim fa referència a qualsevol llenguatge utilitzat per un ordinador. Així doncs, un llenguatge de programació sí que seria un llenguatge informàtic, però no a la inversa. Per exemple, els llenguatges de marques com XML o YAML, utilitzats per a especificar estructures de documents o configuracions, són llenguatges informàtics, però no llenguatges de programació, ja que no ens permeten especificar aquesta sèrie de regles.

## Classificació dels llenguatges de programació

Els llenguatges de programació es poden classificar de diverses maneres, atenent a diferents criteris. Encara que en la pràctica aquesta classificació no és tan senzilla, ja que la majoria de llenguatges incorporen característiques d’altres llenguatges, establir una classificació ens pot resultar útil per a conéixer les possibilitats de certs llenguatges.

### Classificació segons el nivell d’abstracció

Amb el nivell d’abstracció ens referim a la proximitat o llunyania al llenguatge que entén un ordinador. Segons això, podem classificar-los en:

* **Llenguatges de baix nivell**: Es tracta dels llenguatges amb un nivell d’abstracció més baix, o el que és el mateix, més propers a l’ordinador i específics per a cada tipus de processador. L’exemple més clar seria el llenguatge ensamblador.
* **Llenguatges d’alt nivell**: Són els de major nivell d’abstracció, per la qual cosa es troben més propers al llenguatge humà. Llenguatges com Java o Python entrarien dins d’aquesta classe.
* **Llenguatges de nivell intermedi**: Es tracta de llenguatges amb capacitats d’alt nivell però que mantenen algunes de les qualitats dels llenguatges de baix nivell. El llenguatge de nivell intermedi per excel·lència seria el llenguatge C.

Alguns autors únicament distingeixen entre llenguatges d’alt i baix nivell. En aquest cas, el llenguatge C es classifica com un llenguatge d’alt nivell.

### Classificació segons el propòsit

Segons per a què estiguen dissenyats, els llenguatges de programació es poden classificar en:

* **Llenguatges de propòsit general**: Dissenyats per a realitzar qualsevol tipus de tasca, i que comprendrien llenguatges com C, C++, C#, Python o Java.
* **Llenguatges de propòsit específic**: Pensats per a una tasca més específica. Per posar algun exemple, tenim PHP per al desenvolupament web o R, orientat a l’anàlisi estadística, i utilitzat en camps com l’aprenentatge automàtic o la bioinformàtica.

### Classificació segons l’evolució històrica

Els llenguatges de programació han evolucionat amb la informàtica, incrementant el seu nivell d’abstracció. Atenent a això, podem diferenciar cinc generacions de llenguatges:

* **1GL**: Llenguatges de primera generació. Codi màquina, interpretable directament pel processador i el codi del qual era emmagatzemat en targetes perforades.
* **2GL**: Llenguatges de segona generació. S’introdueix l’assemblador, amb mnemotècnics per a representar les instruccions màquina.
* **3GL**: Llenguatge de tercera generació. Llenguatges moderns dissenyats per a facilitar la programació. Es tracta dels més actuals hui en dia, com C o Java.
* **4GL**: Llenguatges de quarta generació. Inclouen llenguatges amb un major nivell d’abstracció (propers al llenguatge natural), i amb capacitat per a treballar amb conjunts d’informació més grans. Com a exemples tenim NATURAL i PL/SQL.
* **5GL**: Llenguatges de cinquena generació. Més propers a la lògica humana, pensats per a l’especificació del problema i les seues condicions, deixant la seua resolució a l’ordinador. Un exemple d'estos llenguatges és Prolog.

### Classificació segons la forma d'executar-se

Segons la forma d'execució, podem distingir entre:

- **Llenguatges compilats**: Passen per un procés de traducció (compilació) que converteix el codi complet en llenguatge de programació a codi en llenguatge màquina. C i C++ són llenguatges compilats.
- **Llenguatges interpretats**: No necessiten un procés de compilació, però requereixen d'un intèrpret que tradueix instrucció a instrucció a codi màquina. Python, per exemple, és un llenguatge interpretat.

Com podem veure, no s'han mencionat llenguatges com Java o C#, ja que aquests requereixen realment d'ambdós processos: Són compilats, però en lloc de fer-ho a codi màquina ho fan a un codi intermedi (bytecode) que és interpretat per una màquina virtual.

### Classificació segons l'estil o paradigma de programació

Encara que els llenguatges més moderns suporten ambdós estils de programació, podem distingir llenguatges basats en:

- **Programació imperativa**: S'indica com realitzar una tasca, indicant els seus passos. Dins d'aquesta podem distingir entre:
    - **Programació estructurada**: Que inclou estructures de control condicionals i repetitives als passos per resoldre un problema (Ex. C).
    - **Programació procedimental/modular**: On es divideix un problema en parts més xicotetes o subprogrames (Ex. C).
    - **Programació orientada a objectes**: Que aborda la resolució de problemes mitjançant el modelatge d'objectes amb determinat comportament (Ex. C#, Java).
- **Programació declarativa**: S'indica què fer, sense preocupar-se de com. Dins de la programació declarativa trobem:
    - **Programació funcional**: Realitzen les seues tasques mitjançant l'avaluació de funcions de forma recursiva (Ex. Lisp/Haskell).
    - **Programació lògica**: Realitzen operacions mitjançant l'ús de la lògica formal matemàtica (Ex. Prolog).

### Classificació segons el lloc d'execució

Segurament, has sentit parlar de desenvolupadors de backend, frontend o full-stack. Aquests perfils estan associats generalment al món d'aplicacions web, o més en general a aplicacions client-servidor. En aquests tipus d'aplicació, la tecnologia utilitzada per programar la part client d'una aplicació pot ser diferent de la utilitzada en el servidor. Així doncs, distingim:

- **Llenguatges de servidor (server-side o backend)**: Utilitzats potencialment en aplicacions de servidor, com puga ser PHP.
- **Llenguatges de client (client-side o frontend)**: S'executen potencialment en el client. Per als serveis web, el client seria el propi navegador web, que executaria codi JavaScript.

A la combinació d'ambdues tecnologies se li sol conéixer com a fullstack.

!!! question "Els llenguatges més importants"

    Voleu aprendre un nou llenguatge de programació. Per on comencem? Quin llenguatge utilitzaríeu?

    Per a respondre a això, hauríem en primer lloc de plantejar-nos quin tipus d'aplicacions desitgem programar, i després, veure quina és la millor opció entre elles.

    Un bon punt de partida és observar les tendències de mercat i quins llenguatges de programació tenen major ús i projecció en l'actualitat.

    Consulta en Internet (l'informe [The State of the Octoverse de Github](https://octoverse.github.com/), o l'[índex TIOBE](https://www.tiobe.com/tiobe-index/) poden ser un punt de partida) quins són els 5 llenguatges de programació més utilitzats actualment, i crea una llista amb la següent informació sobre cadascun d'ells: Llenguatge, nivell d'abstracció, propòsit, si és compilat o interpretat i quin paradigma o paradigmes de programació utilitza.

!!! question "Un projecte informàtic"

    Un company té en ment un projecte que podria canviar-nos la vida! Ens conta que es tracta d'una aplicació per a dispositius mòbils que posa en contacte a persones amb interessos comuns en la seua zona, per a organitzar quedades i esdeveniments.

    La idea del nostre company és posar-la en marxa com més prompte millor, i vol que l'ajudem en el desenvolupament. El primer que ens pregunta és: Quin llenguatge de programació utilitzem? Quina seria la teua resposta?

    **Claus de resolució**

    La idea del nostre company, tot cal dir-ho, és poc concreta però bastant ambiciosa. Observeu que vol una aplicació per a dispositius mòbils, però que a més, a través d'Internet connecte a diversos usuaris. Això ens porta a pensar que haurem d'oferir algun tipus de servei en Internet. Entren doncs el que serien dues parts ben diferenciades. Per una part, una aplicació client, que és la que s'utilitzarà en els mòbils, i una part de servidor. Aquestes dues parts, no hauran de ser desenvolupades en el mateix llenguatge, ja que existeixen unes tecnologies específiques per al desenvolupament d'aplicacions mòbils, i altres específiques per a servidors o aplicacions de servidor.
---
# Informació general del document
title: Del codi font a l'executable
subtitle: Entorns de Desenvolupament
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Entorns de Desenvolupament
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---

# Del codi font al codi executable

Els desenvolupadors solen expressar els programes en llenguatges de programació d'alt nivell, que no poden ser executats directament per un ordinador. Aquests programes requeriran d'un procés de traducció d'aquest codi d'alt nivell a un llenguatge que puga entendre i interpretar el propi ordinador, conegut com a llenguatge màquina. En aquest apartat anem a veure les diferents aproximacions que existeixen per generar aquests programes executables.

## Traductors, compiladors i intèrprets

Els programes encarregats de la traducció de llenguatges d'alt nivell a codi màquina es coneixen com a traductors i poden ser de dos tipus:

- **Compiladors**: Tradueixen un programa expressat en llenguatge d'alt nivell en la seua totalitat a codi màquina. En aquest procés de traducció, podem detectar certs errors en els programes abans de generar els executables. Alguns dels llenguatges compilats més comuns són C o C++.
- **Intèrprets**: Realitzen la traducció i l'execució línia a línia, per la qual cosa no generaran un nou fitxer executable. En aquests traductors, si no hi ha un pre-processat previ, els errors de programació no es detecten fins que el programa ja està en execució.

## Codi font, codi objecte i codi executable

L'estàndard ISO/IEC/IEEE 24765:2017 ofereix les següents definicions sobre codi, llenguatge i programa font:

!!! note ""
    - **Codi font**: Instruccions de computadora i definicions de dades expressades en una forma adequada per a l'entrada a un assemblador, compilador o altre traductor.
    - **Llenguatge font**: Idioma en el qual es representa l'entrada a un procés de traducció assistida per la màquina.
    - **Programa font**: Programa d'ordinador que ha de ser compilat, assemblat o traduït d'una altra manera per ser executat per un ordinador.

Per altra banda, l'estàndard defineix el codi objecte com:

!!! note ""
    - **Codi objecte**: Instruccions d'un ordinador i definicions de dades produïdes per un assemblador o compilador.

En altres paraules, el codi objecte és el que obtenim mitjançant un procés de compilació del codi font. Aquest codi objecte generalment és llenguatge màquina o bytecode, i es distribueix en un o diversos fitxers, però no és encara executable per l'ordinador. Perquè siga executable, requereix d'una última fase d'enllaçat on es combinen els diferents fitxers en codi objecte, juntament amb les biblioteques del sistema necessàries.

Aquest procés general es mostra en el següent diagrama:

![Diagrama del procés](img/edicio_traduccio_enllaçat.png){ width=90% }

Com podem veure, el procés per obtenir un executable passa per tres fases:

1. **Fase d'edició**: Generem el codi font del programa en un llenguatge d'alt nivell i utilitzant un editor de codi.
2. **Fase de traducció o compilació**: Un compilador genera el codi objecte a partir del codi font.
3. **Fase d'enllaçat**: Es combinen els diferents fitxers en codi objecte, enllaçant les biblioteques necessàries i generant el codi executable de l'aplicació.

## Tecnologies de virtualització: Java i .NET

Quan parlem de virtualització, ens referim a la possibilitat d'executar una o diverses màquines virtuals sobre una única màquina física, abstraient així els seus recursos hardware.

Aquesta virtualització pot ser de dos tipus: de sistema o de procés. Les màquines virtuals de sistema, o de hardware, permeten que cada màquina posseïsca el seu propi sistema operatiu, mentre que les màquines virtuals de procés o aplicació s'executen com un procés més del sistema operatiu, i serveixen com a pont entre el codi font d'alt nivell i el codi màquina. Aquestes màquines ens proporcionen un entorn d'execució (runtime) independent del hardware i del sistema operatiu, de manera que permeten el desenvolupament multiplataforma.

Basant-se en aquesta idea de màquina virtual de procés, tenim dos grans entorns d'execució: *La màquina virtual de Java* (Java Virtual Machine, JVM) d'Oracle, i el *Runtime de llenguatge comú* (Common Language Runtime, CLR) de l'entorn .Net de Microsoft.

El funcionament d'aquests runtimes es basa en compilar els fonts per a una màquina virtual de procés determinada (JVM o CLR). El resultat d'aquesta compilació és un codi intermedi, anomenat bytecode: Java bytecode en el cas de la JVM i Common Intermediate Language o CIL en el cas del CLR de Microsoft.

Aquest codi intermedi és el mateix per a qualsevol plataforma, sent la pròpia màquina virtual (JVM o CLR) la que s'encarrega d'interpretar-lo i executar-lo en el sistema operatiu subjacent.

![Diagrama del codi intermedi](img/edicio_traduccio_execucio.png){ width=90% }

!!!note "El concepte de multiplataforma"

    En informàtica, amb el terme **plataforma** ens referim a la combinació entre l'ordinador o dispositiu hardware i el seu sistema operatiu, sobre el qual podrem instal·lar i executar software.

    Així doncs, quan parlem de multiplataforma, ens referim a aquell software que pot ser executat en diferents plataformes. Una aplicació multiplataforma serà doncs aquella que puga executar-se en diferents plataformes. Com a exemple d'algunes de les aplicacions multiplataforma més comunes, podríem citar LibreOffice, Mozilla Firefox o l'editor gràfic Gimp.

## Sobre codi font i software lliure

En Sistemes Informàtics es parla de *software lliure* i propietari. Recordeu que el software lliure es basa en quatre llibertats: d'execució, d'adaptació, de redistribució i de millora. Algunes d'elles, com la d'adaptació i millora, es diu que requereixen del codi font.

Després del que hem vist en aquest apartat, has d'entendre millor aquest concepte de software lliure o de fonts obertes, enfront del software propietari, on l'únic que es distribueix és el codi executable, i no el font.

# Exemples pràctics

Anem a començar amb alguna cosa pràctica ja. A continuació se us proporcionaran diversos fragments de codi font en diferents llenguatges. No és necessari que enteneu ara el què fan, només els necessitarem per veure el procés per arribar als executables.

## Exemple 1. Python

El següent fragment, escriu el missatge "Hola Món" per la pantalla:

```py
print ("Hola Món!")
```

Copieu el contingut a un fitxer anomentat `hola.py`, i obriu una *terminal* en la carpet aon es troba. 

Per llançar l'intèrpret de *Python*, escriviu:

```bash
$ python3 hola.py
```

!!! question ""

    Obseveu el resultat de l'execució anteror. S'ha generat algun fitxer addicional?

    Executeu l'ordre `file` sobre el fitxer (`file hola.py`). De quin tipus de fitxer es tracta?

## Exemple 2. C

Creeu altre fitxer de text amb el següent contingut:

```c
#include <stdio.h>
int main() {
   printf("Hello World!\n");
   return 0;
}
```

Guardeu-lo amb el nom `hola.c`, i executeu el següent des de la mateixa carpeta on es troba el fitxer:

```bash
cc hola.c
```

!!! question ""

    Ha fet alguna cosa? Comproveu ara si s'ha generat algun fitxer. Si és així, podríeu provar a executar-lo directament? Quin tipus de fitxer és cadascun?

!!! note ""
    Si voleu que en lloc de generar `a.out` genere altre nom, podem fer ús del paràmetre `-o`, per exemple: `cc hola.c -o hola.exe`

## Exemple 3. Java

Fem ara el mateix amb el següent contingut, i el guardem com a `Hola.java` (la majúscula és important!):

```java
public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola Món!");
    }
}
```

Fet això, ens tornem a situar en la mateixa carpeta on tinguem guardat l'arxiu i llancem la següent ordre:

```bash
javac Hola.java
```

!!! question ""
    S'ha generat algun fitxer nou? Quin contingut té? De quin tipus és?

Ara podeu llançar:

```bash
java Hola
```

Per veure'n el resultat. S'ha generat algun fitxer nou en aquest cas?

!!! question "Conclussions"

    Quines conclussions extreus dels exemples anteriors? Per a què serveix l'ordre `python3`? I `cc`? I `java` i `javac`?


!!! note "Curiositat: examinant el bytecode"

    Si voleu examinar el bytecode generat per Java, podeu fer ús de:

    ```
    $ javap -c Hola.class 
    ```
---
# Informació general del document
title: Desenvolupament d'aplicacions
subtitle: Entorns de Desenvolupament
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Entorns de Desenvolupament
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---

# Fases en el desenvolupament d'una aplicació

El desenvolupament d'una aplicació passa per diferents fases, que abasten des de la concepció d'aquesta fins al resultat final. A grans trets, diferenciem cinc fases: Anàlisi, Disseny, Codificació, Implantació i Manteniment.

En general, tots els models seguiran d'una manera o altra aquestes fases. A més, segons el paradigma de programació en què ens basem, utilitzaran diferents tècniques i eines.

## Fase d'anàlisi

Es determinen els requisits que tindrà l'aplicació, a través d'una anàlisi del problema. També s'inclou una cerca de possibles solucions en el mercat. A més dels requisits funcionals de l'aplicació, es especificaran els models de dades i comportament que aquesta tindrà. En aquesta fase, s'utilitzen principalment eines de tipus gràfic:

- Per especificar el comportament del sistema, podem utilitzar **Diagrames de flux de dades** en anàlisi estructurat, o bé **Diagrames de casos d'ús**, **diagrames de seqüència** o **diagrames d'estats**, en metodologies orientades a objectes.
- Per especificar el model de dades i conèixer així les estructures de dades de l'aplicació i les seues relacions, podem utilitzar **diagrames Entitat-Relació** en l'àmbit de les bases de dades, **diagrames de classes** en metodologies orientades a objectes, o **Diccionaris de dades** en programació estructurada.
- Per descriure les interfícies d'usuari, podem utilitzar **prototips** mitjançant representacions de baixa fidelitat o **wireframes**, prototips o representacions estètiques en forma de maqueta o **mockup**.

## Fase de disseny

A partir dels requeriments de la fase d'anàlisi, i tenint en compte els recursos del sistema (hardware i software), creem la solució al problema. Així com en la fase d'anàlisi es determinava "Què" es vol implementar, en aquesta fase s'establirà "Com". Segons el paradigma utilitzat, disposarem de diverses eines:

- Per al disseny de les estructures de dades i la seua persistència, utilitzarem **fitxers**, **bases de dades relacionals**, **orientades a objectes** o **noSQL**. Per altra banda, haurem de dissenyar també les estructures de dades i les classes de les quals es componga l'aplicació.
- Per al disseny del comportament, s'utilitzen tècniques de disseny modular com la **divisió descendent en mòduls funcionals**, i de **disseny de procediments**, on especifiquem els algoritmes de cada mòdul mitjançant diagrames de flux o pseudocodi. En el cas de la programació orientada a objectes, dissenyem el funcionament dels mètodes que suporten els objectes, mitjançant diagrames d'**estats i d'activitats**.

## Fase de codificació o implementació

Es transformen els algoritmes dissenyats en la fase anterior en programes expressats en determinat llenguatge de programació. A més, s'han de realitzar proves per assegurar la qualitat del software.

## Fase d'implantació

Implica la posada en producció del producte software, la seua instal·lació en els sistemes, realització de proves d'acceptació, migració de la informació i reemplaçament del sistema anterior. A més, s'haurà de proveir a l'usuari final de la documentació per a l'explotació i el bon ús del sistema.

## Fase de manteniment

On es corregeixen errors no detectats prèviament, es realitzen millores en la funcionalitat de l'aplicació o s'afegeixen noves. Diferenciem el manteniment correctiu, en el qual es detecten errors de codificació no detectats, el manteniment adaptatiu, en el qual adaptem l'aplicació a nous entorns, i el manteniment perfectiu, on s'afegeixen noves funcionalitats a l'aplicació.

# Models de desenvolupament de software

Els models de desenvolupament de software suposen diferents marcs de treball per abordar el cicle de vida del software.

## Cicle de vida en cascada

Es tracta del model clàssic, segons el qual les diferents fases del cicle de vida s'ordenen de forma seqüencial, de manera que la documentació generada en una fase serveix com a punt de partida per a la següent. En aquest model, per començar una fase, hem d'haver acabat completament l'anterior.

![Figura del model en cascada](img/cascada.png){ width=90% }

Es tracta d'un procés metòdic, i que permet establir punts de control intermedis per comprovar l'avanç del projecte. El principal inconvenient que presenta és que és poc realista, ja que pressuposa que el client tindrà clars els requisits de l'aplicació des d'un primer moment, i això rara vegada és així.

## Models de desenvolupament evolutiu

Es tracta de models on el software va evolucionant a través d'ajustos i millores contínues per part del client. Dins d'aquest model existeixen diversos enfocaments:

### Construcció de prototips

Es basa en la introducció del prototipat com una eina per a la validació de requisits per part del client. Es construeix un prototip de l'aplicació, de manera que el client puga corregir errors en la presa de requisits abans de començar amb el desenvolupament.

En tot cas, el client ha de ser conscient que es tracta d'un prototip per a la validació de requisits, i no el producte en si. En alguns desenvolupaments, el prototip es desenvolupa mitjançant eines específiques per a això, sent descartat una vegada validat per donar pas al desenvolupament.

![Figura del prototipat](img/cascada_prototipat.png){ width=90% }

### Model iteratiu i incremental

Aquest model combina les fases del model en cascada, aplicades de forma repetida, juntament amb la interactivitat amb el client que aporten el desenvolupament de prototips.

En aquest cas, el prototip no es descarta, sinó que es reutilitza, i en diferents iteracions del model en cascada, va incrementant la seua funcionalitat fins a convertir-se en l'aplicació final (prototipat evolutiu).

En aquest model, en un primer moment es realitza una anàlisi general del sistema i es especifiquen les funcionalitats que aquest haurà de tenir, de manera que segons aquestes es planifiquen les diferents iteracions que es realitzaran durant el desenvolupament.

![Figura del model iteratiu](img/iteracions.png){ width=90% }

### Model en espiral

Es tracta d'un model similar a l'iteratiu, amb la principal diferència que es tracta d'un procés continu durant tota la vida útil del software. Així com en el model iteratiu i incremental es coneixia d'antuvi quantes iteracions es farien, en el model en espiral no existeix un nombre preestablert d'iteracions.

![Figura del model en espiral](img/espiral.png){ width=90% }

En aquest model, cada iteració es pot plantejar com un projecte diferent, fins i tot utilitzant qualsevol dels models anteriors, i no requereix d'una planificació completa inicialment, podent-se adaptar el desenvolupament al ritme de l'equip de treball i als requeriments del client.

!!! question "Cas pràctic: L'efecte bola de neu"

    En una empresa de desenvolupament de software s'acaba de descartar un projecte en el qual es porten mesos treballant, i amb això s'han perdut diverses desenes de milers d'euros d'inversió i moltes hores de treball. Quan es van començar els contactes amb el client, es van especificar uns requisits concrets per a l'aplicació, i després de mesos de treball, seguint un model de desenvolupament en cascada, el client no ha quedat satisfet amb el resultat, perquè no és el que esperava i ha decidit cancel·lar el contracte. Quin ha estat el problema? Com es podria haver resolt?

!!! question "Cas pràctic 4: La web de l'empresa"

    Anem a desenvolupar un projecte per a l'empresa, i hem d'organitzar el nostre equip de treball. El projecte consistirà a crear una pàgina web per a l'empresa, amb la informació necessària sobre els diferents departaments, a què es dedica, etcètera. En quines fases dividiries el procés? Quin model de desenvolupament elegiries?

    **A tenir en compte**

    Per abordar amb èxit un projecte d'aquestes característiques podríem adoptar qualsevol dels models evolutius. Les reunions amb els responsables de l'empresa haurien de ser freqüents, i donar-los l'oportunitat de validar tot el treball que es va fent. Caberia tant un desenvolupament iteratiu-incremental com en espiral. Les fases serien les habituals: un primer anàlisi del que es vol afegir a la web, un disseny de com volem que aquesta es veja i es comporte, una de codificació, i la implantació i el manteniment.

---
# Informació general del document
title: Metodologies de desenvolupament àgils
subtitle: Entorns de Desenvolupament
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Entorns de Desenvolupament
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---


La nostra societat es troba en constant canvi, i els sectors productius han d'adaptar-se a això. Hui en dia, les empreses i els equips de desenvolupament requereixen formes d'organitzar-se que siguen capaces d'adaptar-se ràpidament a aquests canvis.

Les metodologies tradicionals, encara que són molt sistemàtiques, són massa rígides per a enfrontar-se a aquesta necessitat d'adaptació al canvi, per la qual cosa són necessàries noves metodologies de desenvolupament, més àgils i amb capacitat d'assumir els reptes que planteja la societat actual.

# Metodologies de desenvolupament àgil

Les metodologies de desenvolupament àgils sorgeixen com a resposta a la necessitat de respondre de forma més ràpida als constants canvis en els requisits que pot patir un projecte.

El desenvolupament àgil té en consideració que els requisits d'un producte poden evolucionar, i que per tant, les solucions han d'evolucionar amb ells. Així doncs, recull idees del desenvolupament iteratiu i evolutiu, i divideix el procés de desenvolupament en xicotets blocs que aporten valor al producte final. Aquests blocs seran abordats per diferents equips organitzats, que col·laboraran entre ells. El principal mecanisme de control d'aquests desenvolupaments serà la retroalimentació amb el client, sent sotmesos a freqüents revisions i adaptacions, a través de lliuraments freqüents del producte.

En essència, la idea d'aquestes metodologies és disposar d'un producte avaluable i amb valor per al client com més prompte millor.

# Scrum

Una de les metodologies àgils més conegudes és Scrum, que ens ofereix un marc de treball per a la gestió de projectes de forma àgil.

L'èxit d'aquest marc o framework està en assumir que els requisits d'un projecte no estaran completament definits, que el client pot canviar de criteri en un moment donat, i s'adapta a això.

Scrum se centra doncs en maximitzar la rapidesa dels lliuraments en els termes previstos, en la capacitat d'adaptació de l'equip i en els canvis que poden patir els requisits.

## 1. Com funciona Scrum?

Scrum funciona dividint el projecte en xicotetes tasques, cadascuna amb uns objectius molt concrets i que siguen assumibles en un espai de temps predeterminat. Aquest espai de temps es coneix com a sprint, i solen ser de dues setmanes, o com a molt d'un mes.

Aquest marc de treball dóna molta importància a la col·laboració i la comunicació entre els membres de l'equip, així com amb el client, el que implica la realització de reunions de forma periòdica.

## 2. Organització de l'equip de treball

Scrum és apropiada per a equips de treball relativament xicotets, d'al voltant de 10 persones.

Els rols que s'adopten en aquest marc de treball són els següents:

- **Scrum Master**: És el membre de l'equip que s'assegura que el framework s'aplica correctament. És qui dirigeix les reunions, organitza els sprints, i protegeix l'equip de desenvolupament de qualsevol influència externa que el distraiga. No hem de confondre aquest rol amb el líder de l'equip (els equips són autoorganitzats) o el gestor del projecte, ja que el Scrum Master és una guia en el procés, però no indica què ni com s'ha de fer.
- **Product Owner**: Es tracta d'un representant del client, que defineix les necessitats del producte, les prioritza, i s'assegura que els resultats de l'equip són els adequats des de la perspectiva del negoci. Es tracta d'un rol més comercial, i que no interfereix en aspectes tècnics amb l'equip de desenvolupament, servint d'enllaç entre aquest i el client.
- **Equip de desenvolupament**: És el responsable de lliurar les diferents parts del producte en cada sprint, així com el producte final. Es tracta d'equips autogestionats i autosuficients. Com hem comentat, solen ser equips xicotets, d'entre 3 i 10 membres, amb capacitats transversals a tot el cicle de vida (d'anàlisi, disseny, programació, proves i documentació), i que generalment es divideix en subequips de dues persones per abordar cada tasca.

## 3. Reunions

Encara que Scrum assumeix que els requisits d'un projecte poden variar durant el seu desenvolupament, necessitem planificar uns objectius, per a dividir-los en les diferents tasques a realitzar.

El nostre punt de partida és una llista de tasques ja ordenades segons la prioritat, coneguda com a Product Backlog. Aquesta llista ha estat generada pel Product Owner atenent als objectius inicials plantejats pel client.

A partir d'aquesta situació, les diferents reunions que planteja Scrum són:

- **Reunió de planificació de l'sprint (Sprint planning)**: Es realitza abans de començar l'sprint, i en ella es plantegen les tasques i objectius d'aquest, a partir de les tasques més prioritàries del Product Backlog, així com el temps necessari per lliurar el producte al final de l'sprint. A la llista de tasques de l'sprint se li coneix com a Sprint Backlog. El temps suggerit per Scrum per a aquesta reunió de planificació és de 4 hores.

- **Scrum diari (Daily Scrum)**: Es realitza generalment al començament de cada jornada laboral, a una hora determinada, i en ell es sincronitzen les tasques de l'equip, comentant l'estat en què està el treball de cada membre: què es va fer durant la jornada d'ahir, què es pretén fer en la jornada actual i quins problemes han sorgit. Normalment es recomana una duració d'uns 15 minuts per a aquesta reunió.

- **Revisió del treball realitzat (Sprint Review)**: En finalitzar cada sprint es fa una revisió de tot el procés, es mostren els resultats i es valora si s'han assolit els objectius. Sol incloure una demo per mostrar els resultats a la resta de l'equip, així com al client. La duració recomanada en Scrum per a aquesta reunió és de 2 hores.
- **Retrospectiva (Sprint Retrospective)**: Es realitza també en finalitzar cada sprint, i té per objectiu millorar el flux de treball del propi equip. En aquesta reunió, d'un temps estimat d'1 hora i mitja, s'analitza la forma de treballar, els problemes sorgits en l'sprint anterior i es busquen solucions a aplicar en el següent sprint.

!!! question "Cas pràctic: Conflicte d'interessos"

    En una reunió de revisió de sprint hem tingut alguns problemes amb determinades tasques que no s'han dut a terme correctament o no s'han acabat a temps. En la reunió de planificació inicial, el Scrum Master ja va suggerir que determinats equips estaven sobrecarregats de treball, però el Product Owner va insistir que hi havia tasques que el client esperava veure prompte fetes. Què creieu que ha passat?

!!! question "Cas pràctic: Seguim amb la web"

    Seguint amb el cas anterior, quines modificacions faries en la forma de treballar per aplicar Scrum?

    **A tenir en compte...**

    Com hem comentat, Scrum no és una metodologia com a tal, sinó que suposa un marc de treball per a aquesta. Els principals canvis que suposaria en la nostra forma de treballar afectarien principalment a les reunions i la planificació. Una vegada reunits amb els responsables de l'empresa i definides les tasques, hauríem de començar a planificar els sprints, dividir en subequips l'equip de desenvolupament i assignar tasques a cada subgrup. Es plantejarien reunions diàries per revisar l'estat del projecte i al final de cada sprint avaluaríem el treball i mostraríem la demo de la web als responsables de l'empresa.

---
hide:
  - navigation
  - toc
---

<style>
  .centrat{
    background-color: var(--md-accent-fg-color);
    /*color: var(--md-default-fg-color--lighter) !important;*/
    color: #ffffff !important;
    text-align: center !important;
    display: block !important;
    width: 200px !important;
    margin: 0 auto !important;
  }
  body{
    background-image: none !important;
  }
</style>


# Resultats d'aprenentatge vinculats a la unitat

* **RA1**. Reconeix els elements i eines que intervenen en el desenvolupament d'un programa informàtic, analitzant les seues característiques i les fases en les quals actuen fins a arribar a la seua posada en funcionament.

# Criteris d'avaluació 

* **RA1.a)** S'ha reconegut la relació dels programes amb els components del sistema informàtic: (memòria, processador, perifèrics, entre altres.
* **RA1.b)** S'han identificat les fases de desenvolupament d'una aplicació informàtica.
* **RA1.c)** S'han diferenciat els conceptes de codi font, objecte i executable.
* **RA1.d)** S'han reconegut les característiques de la generació de codi intermedi per a la seua execució en màquines virtuals.
* **RA1.e)** S'han classificat els llenguatges de programació, identificant les seues característiques.
* **RA1.f)** S'ha avaluat la funcionalitat oferida per les eines utilitzades en el desenvolupament de programari.
* **RA1.g)** S'han identificat les característiques i escenaris d'ús de les metodologies àgils de desenvolupament de programari.


[Comencem!](1.programes_informatics.md){ .md-button .centrat }