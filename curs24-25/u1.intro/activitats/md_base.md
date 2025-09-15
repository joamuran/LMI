# Creació d'un lloc web estàtic amb MkDocs

## Introducció a MkDocs

MkDocs és un generador de llocs web estàtics dissenyat per crear documentació de projectes de manera senzilla i eficient. Utilitza el llenguatge de marcat lleuger Markdown per escriure el contingut i YAML per configurar el lloc. 

## Per a què s'utilitza?

MkDocs s'utilitza principalment per:

- Crear documentació tècnica per a projectes de programari, manuals o tutorials,
- Generar llocs web estàtics que poden ser allotjats fàcilment en serveis com GitHub Pages.
- Facilitar la col·laboració en projectes mitjançant una estructura de documentació clara i ben organitzada.

Al nostre cas, realitzarem un *blog* tècnic, on anirem documentant el que anem aprenent als mòduls d'Entorns de Desevolupament i Llenguatges de Marques, i que pot acabar convertint-se en els nostres propis apunts del mòdul.

# Al lio!

## Instal·lació 

En primer lloc, hem de realitzar la instal·lació d'MkDocs.

Els passos per realitzar la instal·lació s'han de realitzar des de la terminal (*Menu > Sistema > Konsole*).

!!! note ""
    Si fem ús de Windows, caldrà que instal·leu python prèviament. Això ho farem descarregant-lo des de [https://www.python.org/](https://www.python.org/), i assegurant-nos durant la instal·lació que marquem l'opció *Add Python to PATH.*.

1. **Creació d'un entorn virtual de python**: El primer que hem de fer és crear un entorn virtual de Python. Això ens servirà per disposar d'un entorn propi per instal·lar components en python sense interferir en els components del sistema. Per a això llançarem la següent ordre (l'escriurem a la terminal i posarem *Intro*):

    ```bash
    sudo apt install python3-venv
    ```

    !!! note ""

        No es preocupeu si no enteneu massa el que estem fent ara. Amb `sudo` el que fem és llançar l'ordre com a administradors, i amb `apt install`, el que fem és utilitzar el gestor de paquets `apt` per instal·lar programari.

    !!! warning "Accés com a sudo"

        En els ordinadors de l'aula, no podreu fer aquest pas com a alumnes. Aviseu el professor perquè realitze la instal·lació.
    
    Una vegada instal·lat el paquet `python3-venv`, que és el qui ens proporciona la capacitat de crear aquests entorns virtuals, anem a crear un entorn virtual per treballar amb *MkDocs*. 

    Per a això, ens situem primer a la carpeta on instal·larem l'entorn. Per exemple en `~/.local`:

    ```bash
    cd .local
    ```

    I llancem l'ordre:
    
    ```
    python3 -m venv mkdocsenv
    ```

2. **Instal·lació dels paquets d'MkDocs amb `pip`.** Una vegada tenim creat l'entorn, l'hem d'activar, fent un `source` del fitxer d'activació:

  ```bash
  source mkdocsenv/bin/activate
  ```

  !!! note ""
    En Windows, haureu d'activar-lo llançant directament l'script:

    ```
    mkdocsenv\Scripts\activate
    ```

  Veurem com el *prompt* ara canvia indicant que estem dins l'entorn.

  !!! waring "Important!"
      Recordeu que cada vegada que aneu a utilitzar mkdocs haureu d'activar aquest entorn!

  Una vegada dins l'entorn, ja podem instal·lar mkdocs, com a llibreria de python, amb l'ordre:

  ```bash
  pip install mkdocs
  ```

  !!! note "Què és pip*"

      *Pip* (Package Installer for Pyton) és un sistema de gestió de programari propi de Python. Així com `apt` ens serveix per descarregar programari dels repositoris del sistema operatiu, `pip` ho fa des del repositori de programari Python.

  Amb aquesta base, ja podrem fer ús d'mkdocs, i anar instal·lant altres components a mesura que els anem necessitant.


## Creació d'un Projecte

Per començar a treballar amb mkdocs, necessitarem abans que res un projecte. Per a això, farem ús de l'ordre `mkdocs new`, de la següent manera.

Ens situem en la carpeta on desitgem crear el projecte, i llancem, per exemple:

```bash
mkdocs new tasques_LMI_EDD
```

Això ens crearà una carpeta `tasques_LMI_EDD` o amb el nom que hem indicat. Per accedir a ella, fem:

```
cd tasques_LMI_EDD
```

## Estructura del contingut

L'ordre anterior ens haurà generat la següent estructura de carpetes:

```
tasques_LMI_EDD/
├── docs
│   └── index.md
└── mkdocs.yml
```

Com veieu, tenim una carpeta `docs`, que conté un document en Markdown anomenat `index.md`, que serà la pàgina principal dels continguts. Tenim també un document `mkdocs.yml`, que serà on afegirem les propietats del projecte i definirem la seua estructura. Si accedim al contingut d'aquest, veurem que de moment, només té la línia:

```yaml
site_name: My Docs
```

Que defineix amb l'etiqueta `site_name` el nom del lloc, i que podem canviar per posar el nom que desitgem.

## Visualització del lloc

Per tal de veure la documentació que estem generant, farem ús de l'ordre:

```
mkdocs serve
```

Que ens crearà un servidor web local on allotjarà la documentació que estem generant. Si tot va bé, ens traurà un resultat semblant a aquest:

```
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.23 seconds
INFO    -  [06:27:36] Watching paths for changes: 'docs', 'mkdocs.yml'
INFO    -  [06:27:36] Serving on http://127.0.0.1:8000/
```

On ens diu que està servint la documentació en l'adreça http://127.0.0.1:8000/. Per accedir-hi, podem copiar i apegar l'adreça a la barra d'adreces del navegador o bé fer Ctrl+Clic amb el ratolí sobre l'adreça.

De moment, la única cosa que veurem és la pàgina d'índex que s'ha generat automàticament:

![](img/inici.png)

## Ara sí... mans a l'obra

Per tal d'anar generant continguts en aquest lloc, anirem creant diferents documents Markdown dins la carpeta `docs`. També és una bona idea organitzar aquests en subcarpetes, de manera que sapiguem on trobar els documents quan el lloc comence a créixer.

### Configuració del lloc web

Anem a configurar el lloc web a través del fitxer `mkdocs.yml`.

Obrirem amb VSCode la carpeta on tenim el projecte, i seleccionarem aquest fitxer.

Una primera configuració molt bàsica serà:


```yaml
site_name: 'Documentació de les tasques'
theme:
  name: 'mkdocs'
```

A més del `site_name` que ja coneixem, hem definit les propietats del tema d'aquest (`theme`). Entre d'altres coses, definirem el nom del tema, en aquest cas `mkdocs`, que és el tema per defecte (si no haverem posat res, utilitzaria aquest). Podem provar a canviar-lo per l'altre tema que ve preinstal·lat `readthedocs`.

!!! warning "Compte amb les tabulacions!"

    Tingueu en compte que YAML no utilitza marques anidades per definir les diferents seccions i continguts del document, sinò que fa ús de tabulacions. En aquest cas, com que `name` està tabulat dins de `theme` significa que és una propieta d'aquest. Si volguérem afefir més propietats al tema, caldria que estigueren tabulats de la mateixa manera que `name`.

### Afegint documents i navegació

A mesura que anem afegint documents al lloc, ho farem, com hem comentat dins la carpeta `docs`, i en l'organització de carpetes que desitgem.

Per exemple, imagineu que tenim la següent organització de carpetes:

```
docs/
├── edd
│   ├── document_1.md
│   ├── document_2.md
│   └── document_3.md
├── index.md
└── lmi
    ├── document_1.md
    └── document_2.md
```

Com veieu, hem cret dos carpetes, una per als articles d'EDD i altra per als articles d'LMI. La primera conté tres documents, i la segona dos.

Per tal de plasmar això en la navegació del nostre lloc, caldria afegit una categoria `nav` a dins la configuració, de la següent manera:

```yaml
site_name: 'Documentació de les tasques'
theme:
  name: 'mkdocs'

nav:
  - Inici: index.md
  - Articles EDD:
    - Article 1: edd/document_1.md
    - Article 2: edd/document_2.md
    - Article 3: edd/document_3.md
  - Articles LMI:
    - Article 1: lmi/document_1.md
    - Article 2: lmi/document_2.md
```
Com veieu, dins de `nav`, afegim una *llista* de categories (Inici, Articles EDD i Articles LMI), i dins de cada categoria, els diferents articles. 

Això ens mostrarà el següent a la pàgina:

![](img/nav.png)

!!! note "Important!"
  Encara que en aquest cas l'estructura de navegació que hem creat coincideix amb l'organització de carpetes, no té per què ser així, i poden tindre organitzacions diferents.

Fixeu-vos també que per especificar una *llista* d'elements iguals dins d'una categoria fem d'utilitzar els guions `-`. En cas contrari, mkdocs ho interpretarà com etiquetes, i ens donarà error.












5. **Visualització del Lloc Web**
   - Crear un servidor de desenvolupament local:
     ```bash
     mkdocs serve
     ```

6. **Generació de la Documentació**
   - Generar la documentació estàtica:
     ```bash
     mkdocs build
     ```

7. **Publicació en GitHub Pages**
   - Publicar el lloc web:
     ```bash
     mkdocs gh-deploy
     ```

#### Reflexió
Cada alumne haurà de redactar un article reflexionant sobre el que ha après en les unitats, relacionant els conceptes amb les activitats realitzades en aquesta pràctica.

#### Avaluació
La pràctica es valorarà en funció de la correcta instal·lació de MkDocs, la creació de contingut en Markdown, la configuració del fitxer YAML i la publicació exitosa del lloc web.




### Pràctica: Creació d'un lloc web estàtic amb MkDocs i GitHub Pages

#### Índex
1. [Pràctica: Creació d'un lloc web estàtic amb MkDocs i GitHub Pages](#pràctica-creació-dun-lloc-web-estàtic-amb-mkdocs-i-github-pages)
    1. [Themes per a MkDocs](#themes-per-a-mkdocs)
    2. [Material for MkDocs](#material-for-mkdocs)
    3. [Ús d'un contenidor Docker amb MkDocs i el theme Material](#ús-dun-contenidor-docker-amb-mkdocs-i-el-theme-material)
        1. [Crear un nou projecte (Comando: new)](#crear-un-nou-projecte-comando-new)
        2. [Contingut en Markdown](#contingut-en-markdown)
        3. [Arxiu de configuració mkdocs.yml](#arxiu-de-configuració-mkdocsyml)
        4. [Crear un servidor de desenvolupament local (Comando: serve)](#crear-un-servidor-de-desenvolupament-local-comando-serve)
        5. [Personalització del theme Material](#personalització-del-theme-material)
        6. [Generar la documentació (Comando: build)](#generar-la-documentació-comando-build)
        7. [Publicar la documentació en GitHub Pages (Comando: gh-deploy)](#publicar-la-documentació-en-github-pages-comando-gh-deploy)
    4. [Creació d'un workflow de CI/CD en GitHub Actions per publicar un lloc web en GitHub Pages](#creació-dun-workflow-de-cicd-en-github-actions-per-publicar-un-lloc-web-en-github-pages)
2. [Referències](#referències)
3. [Llicència](#llicència)

#### 1. Pràctica: Creació d'un lloc web estàtic amb MkDocs i GitHub Pages
MkDocs és un generador de llocs web estàtics que ens permet crear de forma senzilla un lloc web per documentar un projecte. El contingut del lloc web està escrit en text pla en format Markdown i es configura amb un únic arxiu de configuració en format YAML.

##### 1.1 Themes per a MkDocs
Els themes que s'inclouen per defecte en MkDocs són:
- mkdocs
- readthedocs

És possible utilitzar altres themes desenvolupats per terceres parts o desenvolupar el nostre propi theme. En la wiki del projecte MkDocs es pot trobar un llistat de tots els themes disponibles actualment. En aquesta pràctica utilitzarem el theme Material desenvolupat per Martin Donath.

##### 1.2 Material for MkDocs
En la web oficial de Material for MkDocs trobem una guia de referència sobre com utilitzar i configurar el theme. En aquesta pràctica utilitzarem una imatge Docker que conté MkDocs i el theme Material.

##### 1.3 Ús d'un contenidor Docker amb MkDocs i el theme Material
En aquesta pràctica utilitzarem una imatge Docker que conté MkDocs i el theme Material. Aquesta imatge Docker ens permet:
- Crear un nou projecte (Comando: new).
- Crear un servidor de desenvolupament local (Comando: serve).
- Generar la documentació (Comando: build).
- Publicar la documentació en GitHub Pages (Comando: gh-deploy).

A continuació, es mostren les opcions i els comandos que es poden utilitzar amb la imatge Docker squidfunk/mkdocs-material.

Usage: mkdocs [OPTIONS] COMMAND [ARGS]...
MkDocs - Project documentation with Markdown.

Options:
  -V, --version  Show the version and exit.
  -q, --quiet    Silence warnings
  -v, --verbose  Enable verbose output
  -h, --help     Show this message and exit.

Commands:
  build    Build the MkDocs documentation
  gh-deploy  Deploy your documentation to GitHub Pages
  new      Create a new MkDocs project
  serve    Run the builtin development server
###### 1.3.1 Crear un nou projecte (Comando: new)
En primer lloc, ens situarem en el directori on volem crear el nostre projecte. En el nostre cas serà el directori projecte. Per crear l'estructura d'arxius del projecte MkDocs podem fer ús del comando new, com es mostra en l'exemple següent.

docker run --rm -it -p 8000:8000 -v "$PWD":/docs squidfunk/mkdocs-material new .
Nota: Crearem el contenidor des del directori principal del projecte perquè necessitem crear un volum de tipus bind mount entre la nostra màquina i el contenidor Docker.

###### 1.3.2 Contingut en Markdown

###### 1.3.2 Contingut en Markdown
El contingut del lloc web es crea en format Markdown. Per defecte, MkDocs crea un fitxer index.md en el directori docs. Aquest fitxer conté el contingut de la pàgina principal del lloc web. Podem crear tants fitxers Markdown com necessitem i organitzar-los en subdirectoris dins del directori docs.

###### 1.3.3 Arxiu de configuració mkdocs.yml
L'arxiu de configuració mkdocs.yml és un fitxer en format YAML que conté la configuració del lloc web. Aquest fitxer es crea en el directori principal del projecte i conté la configuració bàsica del lloc web, com ara el nom del lloc, el tema utilitzat, i la llista de pàgines que formen el lloc web.

###### 1.3.4 Crear un servidor de desenvolupament local (Comando: serve)
Per visualitzar el lloc web mentre l'estem desenvolupant, podem utilitzar el comando serve per crear un servidor de desenvolupament local. Aquest servidor es crea en el port 8000 per defecte i ens permet veure els canvis en temps real mentre editem els fitxers Markdown.

docker run --rm -it -p 8000:8000 -v "$PWD":/docs squidfunk/mkdocs-material serve
###### 1.3.5 Personalització del theme Material
El theme Material es pot personalitzar mitjançant l'arxiu de configuració mkdocs.yml. Podem canviar els colors, les fonts, i altres aspectes visuals del lloc web. La documentació oficial del theme Material conté una guia completa sobre com personalitzar el theme.

###### 1.3.6 Generar la documentació (Comando: build)
Un cop hem acabat de crear el contingut del lloc web, podem utilitzar el comando build per generar la documentació estàtica. Aquest comando crea un directori site que conté tots els fitxers HTML, CSS, i JavaScript necessaris per al lloc web.

docker run --rm -it -v "$PWD":/docs squidfunk/mkdocs-material build
###### 1.3.7 Publicar la documentació en GitHub Pages (Comando: gh-deploy)
Per publicar el lloc web en GitHub Pages, podem utilitzar el comando gh-deploy. Aquest comando crea una branca gh-pages en el repositori de GitHub i puja els fitxers generats en el directori site a aquesta branca.

docker run --rm -it -v "$PWD":/docs squidfunk/mkdocs-material gh-deploy
##### 1.4 Creació d'un workflow de CI/CD en GitHub Actions per publicar un lloc web en GitHub Pages
Podem automatitzar el procés de publicació del lloc web en GitHub Pages utilitzant GitHub Actions. A continuació es mostra un exemple de workflow de CI/CD que es pot utilitzar per publicar el lloc web automàticament cada vegada que es fa un push a la branca main.

name: Deploy MkDocs to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'

    - name: Install dependencies
      run: |
        pip install mkdocs-material

    - name: Build MkDocs site
      run: |
        mkdocs build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./site
#### 2. Referències
- [Documentació oficial de MkDocs](https://www.mkdocs.org/)
- [Documentació oficial del theme Material](https://squidfunk.github.io/mkdocs-material/)

#### 3. Llicència
Aquest contingut es distribueix sota una llicència Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional.









# Objectius
- Aprendre a utilitzar MkDocs per crear documentació en línia.
- Practicar amb Markdown i YAML per estructurar contingut.
- Reflexionar sobre les activitats realitzades en les unitats anteriors.
