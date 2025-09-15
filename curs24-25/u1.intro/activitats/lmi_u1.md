---
# Informació general del document
title: 1. Classificació dels llenguatge de marques
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de Marques
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

# Com parlen els ordinadors?

Els ordinadors són màquines molt complexes que ens permeten fer moltes coses. Però per comunicar-nos amb ells, necessitem parlar el seu idioma. Aquest idioma es coneix com a **llenguatge informàtic**.

!!! note ""
    En el seu nivell més bàsic, els ordinadors només entenen dos valors: 0 i 1, que formen el llenguatge màquina. Aquests dígits binaris són la base de tota la comunicació i les operacions que realitzen els ordinadors. Però d'això se n'ocuparen en altres mòduls.

La Wikipedia ens defineix el terme [**llenguatge informàtic**](https://es.wikipedia.org/wiki/Lenguaje_inform%C3%A1tico) de la següent forma:

!!! note "Llenguatge informàtic"
    Un llenguatge informàtic és un llenguatge usat per ordinadors. Moltes vegades, aquest terme s’usa com a sinònim de llenguatge de programació, però un llenguatge informàtic no ha de ser necessàriament un llenguatge de programació.

En aquest video, extret de l'article [¿Qué es un Lenguaje Informático?](https://newsletter.cuarzo.dev/p/que-es-un-lenguaje-informatico), se us planteja també una bona definció:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PfBBYt9bEec?si=WpyLUAU8gXmA5U1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Com veiem, hi ha diferents tipus de llenguatges informàtics, cadascun amb un propòsit específic. Entre aquests tipus destaquem:

* Els **llenguatges de programació**, com Python, Java o C++, utilitzats per escriure programes que executen tasques específiques en un ordinador, com les aplicacions o el propi sistema operatiu,
* Els **llenguatges de consulta**, com SQL o XQuery, que permeten recuperar i manipular dades emmagatzemades en bases de dades,
* Els **llenguatges de marques**, com XML, HTML o Markdown, que s'utilitzen per definir l'estructura i el contingut dels documents. Dins d'aquests, també s'ubiquen llenguatges con CSS, que podriem definir com llenguatges de representació, i que defineixen la forma en què es mostra aquesta informació.
* Els **llenguatges de transformació**, com XSLT, que s'utiliten per convertir dades d'un format a altre,
* Els **protocols de comunicació**, com HTTP, que defineixen les regles per a l'intercanvi de dades entre es dispositius d'una xarxa.

!!! note "Per què són importants els llenguatges informàtics?"
    Els llenguatges informàtics són important perquè ens permeten comunicar-nos amb els ordinadors i dir-los què han de fer o com han de mostrar la informació. Sense aquests llenguatges, no podríem crear aplicacions, pàgines web, ni gestionar dades de manera eficient.

# Llenguatges de marques

Com hem avançat els llenguatges de marques s'utilitzen per definir l'estructura, el format i el contingut de documents.

??? note "Examinant alguns documents"

      A continuació se't presenten alguns documents que utilitzen llenguatges de marques per representar la informació. Anem a examinar-los.

      * El fitxer [recursos/logo.svg](recursos/logo.svg) és un fitxer vectorial (en format SVG) amb el logotip del nostre centre. Si l'obres, el sistema l'associa a aplicacions de disseny vectorial, com l'Inkscape, però... prova a obrir-lo en un editor de text...

      * El fitxer [recursos/llenguatges.odt](recursos/llenguatges.odt) és un document del processador LibreOffice, pel que pots obrir-lo amb aquesta eina i examinar el seu contingut. Una vegada fet, tanca'l i intenta tractar-lo com un fitxer comprimit, per exemple amb l'eina *Ark*...  Una vegada veges l'estructura de carpetes del comprimit, examina el fitxer `content.xml`.

      * Fes ara el mateix amb el fitxer [recursos/llenguatges.docx](recursos/llenguatges.docx), un document de MS Office. Buscarem ara dins el comprimit el fitxer `word/document.xml`.

      * I en el fitxer [recursos/llenguatges.html](recursos/llenguatges.html) tens aquest mateix contingut en format web. Pots obrir-lo amb el navegador web, però prova a obrir-lo també amb un editor de text.

      Alguns altres exemple de documents escrits en llenguatge de marques són els següents:

      * El fitxer [`AndroidManifest.xml`](recursos/AndroidManifest.xml) que s'utilitza per definir les propietats d'una app per a Android
      * Els fitxers de [descripció de les interfícies en Android](recursos/MainActivity.xml).


# Classificació dels llenguatges de marques

La classificació més habitual dels llenguatges de marcat es basa en classificar aquests segons el seu propòsit; és a dir, quina és la seua utilitat. 

Segons aquesta classificació, podem distingir les següents categoríes ***no excloents***:

1. **Llenguatges de marques de presentació**
    - Estableixen el format del text, és a dir, com es vorà aquest
    - Exemples: 
         * Els fitxers de tipus LibreOffice (.odt) i MS Word (.docx) que hem vist, fan ús internament de marques de format en el text,
         * Els fitxers HTML, que mostren el seu contingut en un navegador web

2. **Llenguatges de marques de procediment**
    - També estableixen el format del text, però a més, indiquen als programes les accions que ha de realitzar per mostrar el text. 
    - Exemples: 
         * LateX, usat generalment en textos científics ,inclou instruccions per processar el text
         * PostScript, que s'usa per tal de descriure l'aparença de textos impresos.

3. **Llenguatges de marques descriptius o semàntics**
    - Utilitzen marques per descriure els fragments de text però no determinen com es presentarà el text.
    - Exemples: SGML, XML, SVG

4. **Llenguatges de marques lleugers (LML)**
    - Utilitzen un tipus de format de text estandarditzat i generen arxius que ocupen poc espai.
    - Exemple: Markdown, ReStructured Text, Textile.

També existeixen altres llenguatges de marques més específics per a algunes aplicacions, com *MathML*, per representar fòrmules matemàtiques, o *VoiceXML*, per crear aplicacions de veu.


# Característiques dels llenguatges de marques.

Les característiques principals dels llenguatges de marques són:

1. **Documents en Text Pla**
    - Els documents creats amb llenguatges de marques són en text pla, el que els fa independents del software utilitzat. Això significa que es poden editar amb qualsevol editor de text.

2. **Marques Inserides en el Contingut**
    - Les marques o etiquetes estan inserides directament en el contingut del document. Aquestes marques defineixen l'estructura, el format i el contingut del text.

3. **Components Senzills i Intuïtius**
    - Els llenguatges de marques es componen d'elements senzills i intuïtius, el que facilita la creació de documents estructurats. Això permet la creació de llenguatges específics depenent del tipus de document.

4. **Versatilitat i Àmbit d'Utilització Extens**
    - Els llenguatges de marques són molt versàtils i tenen un àmbit d'utilització molt extens. S'utilitzen en pàgines web, llibres, gràfics, fórmules matemàtiques, vídeos, sindicació de continguts, etc.

5. **Etiquetes Identificatives del Tipus de Contingut**
    - Les etiquetes o marques identifiquen clarament el tipus de contingut que representen. Per exemple, una etiqueta `<titol>` indica que el text entre les etiquetes és un títol.

## Avantatges

Les característiques anteriors, fan que l'ús de llenguatges de marques presenten certs avantatges:

1. **Interoperabilitat**
    - Els llenguatges de marques com XML permeten la interoperabilitat entre diferents sistemes i aplicacions. Això facilita l'intercanvi de dades entre plataformes diverses.

2. **Extensibilitat**
    - Els llenguatges de marques com XML són extensibles, el que significa que es poden crear noves etiquetes segons les necessitats específiques. Això permet adaptar el llenguatge a diferents aplicacions i contextos.

3. **Separació de Contingut i Presentació**
    - En llenguatges com HTML i XML, el contingut i la presentació es poden separar. Això permet que el mateix contingut es pugua presentar de diferents maneres segons les necessitats de l'usuari o del dispositiu.

4. **Accessibilitat**
    - Els documents creats amb llenguatges de marques són més accessibles perquè es poden llegir i processar fàcilment per diferents tipus de programari, incloent-hi lectors de pantalla per a persones amb discapacitat visual.

5. **Facilitat de Manteniment**
    - Els documents estructurats amb llenguatges de marques són més fàcils de mantenir i actualitzar. Les modificacions es poden fer de manera més eficient perquè l'estructura del document és clara i ben definida.

??? question "Activitat"
  
    Intenta identificar alguns exemples de les característiques comentades anteriorment en els documents que se t'han proporcionat.

    Serà interessant que vages guardant les teues respostes en un document de text pla, al que posteriorment li dinarem format.


# Evolució dels Llenguatges de Marques

Els llenguatges de marques existeixen bàsicament des dels inicis de la informàtica, i han anat evolucionant i millorant al llarg dels anys. Fem una breu síntesi de la seua història i evolució.

## **A. SGML (Standard Generalized Markup Language)**

- **Origen**: Millora del llenguatge GML (Generalized Markup Language) creat per Charles Goldfarb el 1970.
- **Característiques**:
    - No és un llenguatge de marques en si, sinó un metalenguatge que permet definir altres llenguatges de marques.
    -Facilita la gestió, publicació i intercanvi de documents digitals independentment del hardware i software utilitzat.
    -No incorpora informació sobre la presentació del document; això s'ha d'adjuntar per separat.
    -Utilitza codificació descriptiva i introdueix el concepte de "tipus de document".
    -És un estàndard internacional no propietari.

## **B. HTML (HyperText Markup Language)**
- **Origen**: Desenvolupat per Tim Berners-Lee a principis dels anys 90 com a part del projecte World Wide Web (WWW).
- **Característiques**:

    - Basat en SGML però molt més senzill.
    - Utilitzat per descriure documents web.
    - Conjunt limitat d'etiquetes predefinides.
    - Conté tant la estructura com el disseny del document.
    - No permet mostrar contingut dinàmic (les versions més recents comencen a incorporar-ho).
    - Senzill per a la presentació d'informació però no per al seu processament o emmagatzematge.

## **C. XML (eXtensible Markup Language)**
- **Origen**: Apareix el 1996 com una simplificació de SGML.
- **Característiques**:
    - És un metalenguatge, no un llenguatge de marques en si.
    - Permet la creació de llenguatges de marques específics per a diferents usos.
    - Separa la estructura del document del seu disseny.
    - Permet exportar documents a altres formats com HTML, PDF, RTF, etc.
    - Facilita la compartició de documents entre diferents sistemes operatius i plataformes.
    - És un estàndard obert i lliure de llicències.
<!--
## **Comparativa entre XML i HTML**
- **XML**:
    - És un metalenguatge.
    - Descriu informació.
    - Dinàmic i utilitzat per transferir dades.
    - Permet la definició de noves etiquetes.
    - Obliga a tancar les etiquetes.
    - Imprimeix els espais en blanc.
    - Utilitza el navegador com a plataforma per al desenvolupament d'aplicacions.
    - Proporciona interoperabilitat amb SGML i HTML.
    - Objectiu principal: emmagatzemar i transferir dades.

- **HTML**:
    - És un llenguatge de marques.
    - Dona format i mostra informació.
    - Estàtic i utilitzat per mostrar dades.
    - Conjunt limitat d'etiquetes predefinides.
    - Les etiquetes poden funcionar sense necessitat de tancar-les.
    - No conserva els espais en blanc.
    - Utilitza el navegador només per mostrar informació.
    - Objectiu principal: presentar dades.

#### **Comparativa entre XML i SGML**
- **XML**:
    - Subconjunt de la funcionalitat de SGML però més senzill.
    - No requereix validació del document.
    - Molt utilitzat en diferents àrees.
    - Compatible amb HTML.
    - Formateig i estil relativament fàcils d'aplicar.

- **SGML**:
    - Molt complex.
    - Requereix la validació del document.
    - Ús molt restringit per la seva complexitat.
    - No hi ha compatibilitat específica amb HTML.
    - Formateig i estil relativament difícils d'aplicar.

-->---
# Informació general del document
title: 2. Estructura i Sintaxi
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de marques
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

# Conceptes bàsics

Un document, en general, es compon del propi contingut del document (les dades) i una sèrie d'informacions que es superposen al contingut, que són les que aporten estructura al document i es diuen **etiquetes**. Aquestes etiquetes *marquen* el document, i li donen estructura.

Un dels avantatges d'utilitzar aquesta informació afegida és que la representació del document serà independent del sistema informàtic utilitzat i millora l'accessibilitat, manteniment i reutilització del mateix.

Anem a veure els diferents components dels llenguatges de marques i les seues principals característiques: *etiquetes* o *marques*, *elements*, *propietats* i *metadades*.

## Etiquetes o marques

Les *marques* són un conjunt de codis que s'afigen al text per establir el seu format de visualització, la forma com s'ha d'imprimir o l'estructura que té. S'afigen al text però no formen part d'aquest.

Cada llenguatge té la seva pròpia col·lecció de marques amb la seva classificació i significat. Existeixen tres tipus d'etiquetes:

- **Apertura**: S'expressen entre els caràcters `<` i `>`, i indiquen l'inicia d'un *element*. Per exemple: `<p>`, `<h1>`.
- **Tancament**: S'expressen entre `</` i  `>`, i indiquen el final d'un *element. Exemple: `</p>`. En alguns llenguatges concrets, les marques de tancament no són requerides.
- **Buida**: S'expressent entre `<` i `/>`, i no tenen continut. Exemple: `<br/>`.

Veiem un exemple en HTML:

```html
<p>Hola món, açò és un paràgraf<br/> que té un salt de línia al mig</p>
```

On `<p>` i `</p>` són les marques que delimiten un element de tipus paràgraf, i a més, a dins, conté una etiqueta de salt de línia. El resultat seria el següent:

```
Hola món, açò és un paràgraf
que té un salt de línia al mig
```

!!! note ""
    En un document tot el que no són marques és contingut. Les etiquetes es poden escriure tant en majúscules (Ex: `<HTML>`) com en minúscules (ex: `<html>`). El navegador les interpreta igual, però **la recomanació és fer ús de les minúscules**.

!!! note "Referències a entitats"

    Les referències a entitats són un tipus especial de marques, que serveixen per representar caracters especials que d'altra manera podrien ser interpretats incorrectament pel processador del llenguatge de marques.

    Aquestes referències són seqüències de caràcters que comencen amb un símbol `&` i acaben amb un punt i coma `;`, i es fan servir per representar caràcters que tenen un significat especial en el llenguatge de marques, com ara `<`, `>`, `&`, `"`, i `'`.

    Veiem les més habituals:

    |  Referència a entitat  | Significat |
    |------------------------|-----------|
    |  `&lt;` | representa el caràcter `<` |
    | `&gt;` | representa el caràcter `>` |
    | `&amp;` | representa el caràcter `&` |
    | `&quot;` | representa el caràcter `"` |
    | `&apos;` | representa el caràcter `'` |

    A més, aquestes referències a entitats també s'utilitzen per mostrar per exemple accents. Si volem mostrar un accent, utilitzarem una referència consistent la lletra a accentuar seguida del text `cute` per a accents tancats o `grave` per a accents oberts. Per exemple el caràcter `à` seria `&agrave;` o `Ó`seria `&Ocute`.

    Veiem un exemple pràctic. Per mostrar el següent text en una pàgina HTML:

    ```html
    <p> Per delimitar etiquetes en HTML farem ús de < i > </p>
    ```

    Per tal que funcione correctament i el processador HTML del navegador interprete bé les etiquetes, haurem de fer ús de referències a entitats com:

    ```html
    <p> Per delimitar etiquetes en HTML farem &ucute;s de &lt; i &gt; </p>
    ```

!!! note "Processadors XML o HTML"

    Quan parlem de processador XML o HTML ens referim al programa o component que s'encarrega de llegir, interpretar i processar els documents expressats en llenguatges de marques, com XML o HTML. Aquest component s'encarrega de comprovar que el document siga vàlid, interpretar el seu contingut, i en el cas d'HTML, mostrar-lo. Els navegadors web, per exemple, realitzen aquesta funció.

## Elements

Els **elements** són les unitats bàsiques dels documents, que defineix una part del contingut i la seva estructura. 

Els elements es component d'una **etiqueta d'inici**, el **contingut** i una **etiqueta final**.

Veiem un exemple en HTML que representa una llista, amb diversos ítems:

```html
<ul>
    <li>arros</li>
    <li>pollastre</li>
    <li>bajoqueta</li>
</ul>
```

En aquest codi tenim un element de tipus *llista no ordenada* (`<ul>`), que es compon de tres elements més de tipus *ítem de llista* (`<li>`).

L'exemple anterior, podria també haver-se expressat com a:

```html
<ul>
    <li>arros
    <li>pollastre
    <li>bajoqueta
</ul>
```

És a dir, sense utilitzar etiquetes de tancament per als elements `<li>`. En aquest tipus d'etiquetes, igual que en `<p>`, es considera com a tancament l'aparició d'altre element amb la mateixa etiqueta.

!!! warning "Important!"
    No hem de confondre *element* amb *etiqueta*. Els elements són estructures completes que contenen etiquetes o marques i contingut.

## Atributs

Els elements poden tindre atributs, amb uns determinats valors, que s'expressen entre cometes dobles `"` o entre cometes simples `'`. Aquests atributs, a més poden tindre valors predeterminats assignats pel programador.

Els atributs han d'anar inclosos dins els caràcters `<` `>` i si s'inclouen diverses parelles atribut/valor han d'anar separades per un espai en blanc. L'ordre en què apareixen els atributs és indiferent.

Poden haver-hi atributs en les etiquetes d'apertura i en les etiquetes buides però no en les de tancament.

En l'exemple següent l'element `<html>` indica el començament o arrel del document, el qual conté l'atribut `lang` (llengua) amb el valor `es` (espanyol), per indicar que aquest serà l'idioma del document.

```html
<html lang="es">
```

En aquest altre exemple l'element `<meta>`, que és un atribut buit, incorpora l'atribut `charset` que indica que el joc de caràcters a utilitzar és `utf-8`.

```html
<meta charset="utf-8">
```

Si s'inclouen dos atributs quedaria:

```html
<meta name="author" content="Nom de l'autor" />
```

## Metadades

Les metadades, en general, proporcionen informació sobre les pròpies dades.

En una pàgina HTML les metadades donen informació relativa al contingut de la pàgina, com puga ser exemple la temàtica, la descripció, la codificació utilitzada, paraules que descriuen la pàgina, etc.

Aquestes metadades són utilitzades pels cercadors d'Internet per conéixer el continguts de la pàgina (temàtica, descripció) i és molt important que estiguen ben definides si volem que s'indexen correctament.

L'element HTML associat a les metadades és `meta`. Per exemple:

```html
<meta name="author" content="Nom de l'autor" />
```

L'element de matadades `meta` conté l'atribut `name` que indica que l'atribut `content` serà el nom de l'autor. Ho veurem en més detall a l unitat sobr HTML.

!!! question "Detecció d'errors en el codi HTML"
    Observar el següent codi HTML amb les diferents etiquetes d'apertura i tancament. Hi ha algun error?

    ```html
    <html>
    <head>
      <title>Exemple de codi HTML</title>
    </head>
    <body>
      <p><b>Llenguatges de Marques</b></p>
      <p>El Llenguatge de Marques (Markup Language) defineix l'estructura del text...<br/>
      <p><b>Continguts</b></p>
      <ul>
        <li>Classificació i caraacterístiques</li>
        <li>Estructura i sintaxi</li>
        <li>Eines d'edició</li>
      </ul>
      </p>
    </body>
    </html>
    ```

    ??? note "Consulta la resposta"

        Observa que després de tancar `</ul>`, s'està tancant un `</p>` que no s'ha obert.---
# Informació general del document
title: 1. Presentació
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Guia Didàctica LMI
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

# Eines d'Edició

Les eines d'edició ens permeten la creació, modificació i gestió de documents escrits en llenguatges de marques. Aquestes eines poden variar des de simples editors de text fins a entorns de desenvolupament integrats (IDE) més complexos. Anem a veure algunes de les eines més utilitzades

## Editors de Text

1. **Visual Studio Code (VS Code)**: És un editor de codi font desenvolupat per Microsoft, que suporta una gran varietat de llenguatges de programació i de marques. A més, ens permet l'ús d'extensions, que fan que aquest puga fer les funcions d'un entorn integrat complet. Les principals característiques d'aquest són:

     - Suporta extensions per a HTML, XML, Markdown, entre altres.
     - Permet autocompletat de codi i suggeriments.
     - Suport aintegració amb sistemes de control de versions com Git.
     - Permet la visualització en viu de documents HTML i Markdown.

2. **Sublime Text**: És un editor de text sofiscicat per a codi font i llenguatges de marques, o qualsevol tiipus de document. Les seues principals característiques són:
     - Interfície d'usuari minimalista i ràpida.
     - Suport per a múltiples llenguatges de marques.
     - Sistema de plugins extensible.
     - Funcionalitats avançades com la selecció múltiple i la cerca ràpida.

3. **Notepad++**: És un editor de text lliure pe a Windows que suporta diversos llenguatges de programació i de marques. Les principals caracerístiques són:

     - Interfície d'usuari personalitzable.
     - Suport per a macros i plugins.
     - Funcionalitats de cerca i reemplaçament avançades.
     - Visualització de documents en pestanyes.

## Entorns de Desenvolupament Integrats (IDE)

Un entorn de desenvolupament integrat, a més de capacitats d'edició suporta altres funcionalitats, com veurem més endavant a la segona unitat d'EDD.

Entre els entorns Integrats de desenvolupament més usuals tenim:

* **IntelliJ IDEA**: Un IDE desenvolupat per JetBrains, i pensat especialment per al desenvolupament en Java i Kotlin. Entre d'altres suporta HTML, XML i altres llenguatges de marques.

* **Eclipse**: És un IDE de codi obert amb suport per a diversos llenguatges de programació i marques, entre elles HTML i XML.

<!-- ## Editors en Línia

A més dels editors i els IDEs, també podem fer ús d'editors en línia


< !-- I si pose això al primer punt i au??-- >
















1. **XML Viewer**
   - **Descripció**: Un editor en línia per a documents XML.
   - **Característiques**:
     - Visualització i edició de documents XML.
     - Validació de l'estructura XML.
     - Conversió a altres formats com JSON.

2. **Markdown Live Preview**
   - **Descripció**: Un editor en línia per a documents Markdown.
   - **Característiques**:
     - Visualització en temps real del document Markdown.
     - Suport per a la sintaxi estesa de Markdown.
     - Exportació a HTML i altres formats.

### Eines de Conversió

1. **Pandoc**
   - **Descripció**: Una eina de conversió de documents que suporta una gran varietat de formats de marques.
   - **Característiques**:
     - Conversió entre formats com Markdown, HTML, LaTeX, i més.
     - Suport per a plantilles personalitzades.
     - Integració amb scripts i automatització de tasques.

2. **XMLGrid**
   - **Descripció**: Un editor i convertidor en línia per a documents XML.
   - **Característiques**:
     - Edició visual de documents XML.
     - Conversió a formats com CSV, JSON, i Excel.
     - Validació i formatació de documents XML.

### Altres Eines

1. **Typora**
   - **Descripció**: Un editor de Markdown que proporciona una experiència de visualització en viu.
   - **Característiques**:
     - Visualització en temps real del document Markdown.
     - Suport per a la sintaxi estesa de Markdown.
     - Exportació a HTML, PDF, i altres formats.

2. **Atom**
   - **Descripció**: Un editor de text de codi obert desenvolupat per GitHub.
   - **Característiques**:
     - Suport per a múltiples llenguatges de marques.
     - Sistema de plugins extensible.
     - Integració amb Git i GitHub.
     - Funcionalitats avançades com la selecció múltiple i la cerca ràpida.

---

Espero que aquest apartat completi els teus apunts de manera satisfactòria. Si necessites més informació o alguna altra cosa, no dubtes en dir-m'ho!

Origen: conversa amb el Copilot, 15/9/2024
(1) undefined. https://es.wikipedia.org/wiki/Lenguaje_inform%C3%A1tico%29.
(2) undefined. https://newsletter.cuarzo.dev/p/que-es-un-lenguaje-informatico%29.
(3) undefined. https://www.youtube.com/embed/PfBBYt9bEec?si=WpyLUAU8gXmA5U1g.
(4) undefined. https://bing.com/search?q=.
(5) undefined. http://www.example.com/estudiant.dtd.
(6) undefined. https://markdown.es/.
(7) undefined. https://markdown.es/%29.
(8) undefined. https://www.markdownguide.org/extended-syntax.

#### `eines_edicio.md`

## Eines d'edició de llenguatges de marques
- **Visual Studio Code**: Editor de codi amb suport per a múltiples llenguatges.
- **Notepad++**: Editor de text per a Windows.
- **Sublime Text**: Editor de text sofisticat per a codi, marcatge i prosa.
- **XML Viewer**: Editor en línia per a documents XML.
- **XMLGrid**: Editor en línia per a documents XML.

### Conversors XML
- **Code Beautify**: https://codebeautify.org/
- **Online Convert Free**: https://onlineconvertfree.com/es/convert/xml/
- **Aconvert**: https://www.aconvert.com/es/format/xml/
- **PDF Mall**: https://pdfmall.com/es/xml-to-pdf
- **Altova MapForce**: https://www.altova.com
- **Advanced XML Converter**: http://www.xml-converter.com/

-->


---
# Informació general del document
title: 4. Elaboració de documents ben formats
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de marques
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

# Introducció a XML

L'any 1989, Tim Berners-Lee, conegut com el pare de la *Web*, va crear el llenguatge HTML, per a l'intercanvi de documentació en el MIT (Institut Tecnològic de Massachusetts). Per a això es va basar en SGML (*Standard Generalized Markup Language*).

Posteriorment, la ***W3C*** (*World Wide Web Consortium*), un conjunt d'organitzacions per a l'estandarització de tot allò relacionat amb la web, el 1998, va crer el llenguatge ***XML*** (*eXtensible Markup Language*), com a una simplificació d'SGML, amb l'objectiu de facilitar la compatibilitat amb HTML i proporcionar una plataforma base per generar diferents llenguatges de marques.

## Característiques del Metallenguatge XML

Les característiques general d'XML són:

- **Descriptiu o Semàntic**: XML és un metallenguatge que estructura la informació en documents utilitzant etiquetes pròpies i una gramàtica determinada per la **DTD** (Document Type Definition).
- **Interoperabilitat**: XML permet la compartició de documents entre diferents sistemes operatius i aplicacions.
- **Estàndard Obert**: XML és lliure de llicències i optimitzat per a la web.
- **Estructura en Arbre**: Els documents XML tenen una estructura jeràrquica amb un únic element arrel.

## Marcat del Document

Els elements que componen un document, com en tot llenguatge de marques són;

- **Etiquetes**, que delimiten parts del text i es representen entre els caràcters `<` i `>`.
- **Elements**, compostos per una etiqueta d'obertura, un contingut i una etiqueta de tancament.
- **Atributs**, que afigen propietats als elements i es defineixen dins de les etiquetes d'obertura.

Veiem un exemple senzill de document XML:

```xml
  <?xml version="1.0" encoding="utf-8"?>
  <!DOCTYPE estudiant SYSTEM "http://www.example.com/estudiant.dtd">
  <estudiant>
    <nom>Paco</nom>
    <poblacio>Tavernes de la Valldigna</poblacio>
    <cicle>DAM</cicle>
  </estudiant>
```

També pots veure exemples més complets als documents [AndroidManifest.xml](recursos/AndroidManifest.xml) i [MainActivity.xml](recursos/MainActivity.xml) vistos anteriorment.

##  Parts d'un Document XML

Un document XML consta de les següents parts:

1. Un **Pròleg**, que inclou la declaració XML i la declaració de tipus de document:

   - **Declaració XML**: Indica que es tracta d'un document XML, la versió i la codificació del document.

     ```xml
     <?xml version="1.0" encoding="utf-8"?>
     ```

   - **Declaració de Tipus de Document (DOCTYPE)**: Defineix el tipus de document i pot incloure una referència a una definició del tipus de document o DTD (*Document Type Definition*) que especifica les regles per a la validació del document XML. És opcional i s’utilitza principalment per a documents que necessiten validació. Aquest pot indicar-se al mateix document, o en un lloc extern. En aquest últim cas, farem ús de la paraula `SYSTEM` per indicar-ho:

     ```xml
     <!DOCTYPE estudiant SYSTEM "http://www.example.com/estudiant.dtd">
     ```

2. El **cos del document** conté les dades o el text del document XML, estructurat en elements anidats (un dins d'altre).

      Les regles bàsiques que ha de complir aquest són:

      - Els elements han de tindre una estructura jeràrquica, és a dir, uns elements dins d'altres, anidats, en forma d'*arbre*.
      - Només pot haver-hi un element arrel (al principi de l'estructura).
      - Els elements han d'estar correctament anidats.
      - Els elements no es poden superposar, és a dir, que no podem tancar una etiqueta fins que no tanquem totes les que hem obert a dins.

## Què és un document XML ben format?

Un document XML es considera ben format quan compleix les següents regles sintàctiques definides per la W3C:

- **Pròleg**: Ha de tenir una declaració XML completa.
- **Element Arrel**: Només ha d'existir un únic element arrel que anide la resta d'elements.
- **Etiquetes**: Un element ha de començar i acabar amb la mateixa etiqueta.
- **Atributs**: Els valors dels atributs han d'anar entre cometes dobles ("") o simples ('').
- **Diferenciació entre Majúscules i Minúscules**: Cal tindre en compte que, **en XML, `<etiqueta>` no és el mateix que `<ETIQUETA>`**.

Veiem alguns exemples de documents XML que **no** estarien ben formats:

!!! alert "Exemple amb un error d'anidament"

    ```xml
    <?xml version="1.0" ?>
    <estudiant>
      <nom> Paco </nom>
      <poblacio> 
          <provincia> 
              Tavernes o València
          </poblacio>
      </provincia>
    </estudiant>
    ```

??? question "Com resoldries l'exemple anterior?"

    El document anterior és incorrecte perquè l’etiqueta <provincia> està tancada abans que l’etiqueta <poblacio>, la qual cosa no és vàlida en XML.

    Una solució sería:

      ```xml
      <?xml version="1.0" ?>
      <estudiant>
        <nom> Paco </nom>
        <poblacio> 
            <nom>
              Tavernes
            </nom>
            <provincia> 
                València
            </provincia>
        </poblacio>
      </estudiant>
      ```

      Podríem pensar també en la següent solució:

      ```xml
      <?xml version="1.0" ?>
      <estudiant>
        <nom> Paco </nom>
        <poblacio> 
              Tavernes
            <provincia> 
                València
            </provincia>
        </poblacio>
      </estudiant>
      ```

      La qual **no seria correcte segons les regles d'XML pur** (encar aque en HTML sí que s'accepten construccions similars). En XML, una etiqueta no pot tenir contingut de tipus text i altres etiquetes filles al mateix nivell. Així que, en aquest cas, no és vàlid tenir el text “Tavernes” i l’etiqueta `<provincia>` dins de `<poblacio>`.

!!! alert "Exemple amb múltiples arrels"

    ```xml
    <?xml version="1.0" ?>
    <estudiant>
      <nom> Paco </nom>
    </estudiant>
    <estudiant>
      <nom> Pepe </nom>
    </estudiant>
    ```

??? question "Com resoldries l'exemple anterior?"

    El document anterior és incorrecte conté dos elements arrel, concretament de tipus `<estudiant>`.

    És un cas que se'ns pot plantejar habitualment quan tenim una col·lecció d'elements iguals que volem representar en un document. La solució passa per afegir un element arrel únic (en aquest cas `<estudiants>`), que faça de de la col·lecció.

      ```xml
      <?xml version="1.0" ?>
      <estudiants>
        <estudiant>
          <nom> Paco </nom>
        </estudiant>
        <estudiant>
          <nom> Pepe </nom>
        </estudiant>
      </estudiants>
      ```

---
# Informació general del document
title: 5. Espais de noms
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

# Espais de noms en XML

Els espais de noms en XML són una recomanació del *W3C* per resoldre els conflictes que puguen aparéixer quan diferents vocabularis XML utilitzen els mateixos noms per a elements o atributs. Això es fa assignant un *espai semàntic* únic a cada vocabulari XML, evitant així ambigüitats.

Per tant, els objectius dels espais de noms són:

1. **Diferenciar elements i atributs** de vocabularis diferents que comparteixen el mateix nom però tenen significats diferents.
2. **Agrupar elements i atributs relacionats** d'un document XML perquè el programari els puga reconèixer fàcilment.

Per declarar un espai de noms, s'utilitza l'atribut `xmlns` en qualsevol element XML. Aquest atribut associa un prefix amb un URI (Uniform Resource Identifier) que actua com a identificador únic de l'espai de noms.

Veiem-ho amb un exemple:

```xml
<capital xmlns:capital="http://lmsgi/UD1/capital">
  <capital:pais>França</capital:pais>
  <capital:nom>París</capital:nom>
</capital>
```
En aquest exemple, el prefix `capital` s'associa amb l'URI `http://exempleLMI/capital`, i tots els elements que utilitzen aquest prefix pertanyen a aquest *espai de noms*.

Quins són doncs els beneficis de fer ús dels espais de noms? Principalmen dos:

- **Eviten conflictes de noms**, ja que permeten utilitzar els mateixos noms per a elements o atributs en diferents contextos sense ambigüitats.
- **Milloren l'organització**, ja que agrupen elements i atributs relacionats, facilitant la seva gestió i reconeixement pel programari.


!!! info "Un exemple pràctic"

    Suposem que volem representar en un mateix document alumnes i professor, els quals tenen en comú l'etiqueta *nom*. Per tal de diferenciar-los, fariem ús de dos espais de noms diferents:

      ```xml
        <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
        <comunitat_educativa xmlns:alumnes="http://exemplesLMI/alumnes" xmlns:professors="http://exemplesLMI/professors">
            <persona>
                <alumnes:nom>Paco</alumnes:nom>
            </persona>
            <persona>
                <alumnes:nom>Pepe</alumnes:nom>
            </persona>
            <persona>
                <professors:nom>Anna</professors:nom>
            </persona>
            <persona>
                <professors:nom>Maria</professors:nom>
            </persona>
        </comunitat_educativa>

      ```

      En aquest exemple, les etiquetes `<persona>` contenen noms que poden ser d’alumnes o professors, i els espais de noms s’utilitzen per diferenciar-los.


!!! question ""

    Revisa el fitxer [AndroidManifest.xml](recursos/AndroidManifest.xml) i intenta identificar algun espai de noms.---
# Informació general del document
title: 6. Altrers llenguatges de marques
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

A més d'XML i HTML, hi ha altres llenguatges de marques que són útils per a diferents aplicacions, especialment en la configuració i la serialització de dades. A continuació veurem alguns d'aquests llenguatges, com TOML i YAML, entre altres.

# TOML (Tom's Obvious Minimal Language)

**TOML** és un llenguatge de marques dissenyat per ser fàcil de llegir i escriure. Va ser creat per Tom Preston-Werner i està pensat per a la configuració de fitxers. La seva sintaxi és minimalista i clara, la qual cosa facilita la seva comprensió i ús.

Les principals característiques d'aquest llenguatge són:

- **Sintaxi clara i minimalista,** ja que utilitza parelles clau-valor, seccions i comentaris.
- **Tipus de dades suportats:** Inclou cadenes de text, números enters, en coma flotant flotant, valors lògics, dates i hores, així com col·leccions de dades.
- **Compatibilitat:** És fàcil de convertir a diverses estructures de dades en molts llenguatges de programació.

Veiem in exemple d'aquest:

```toml
# Aquest és un document TOML
[comunitat_educativa]

[[comunitat_educativa.alumnes.persona]]
nom = "Paco"

[[comunitat_educativa.alumnes.persona]]
nom = "Pepe"

[[comunitat_educativa.professors.persona]]
nom = "Anna"

[[comunitat_educativa.professors.persona]]
nom = "Maria"

```

# YAML (YAML Ain't Markup Language)

**YAML** és un llenguatge de serialització de dades, que a més té la capacitat de ser legible. Quan parlem de *serialització* fem referència a la transformació de les dades de les aplicacions, per tal de poder emmagatzemar-les o transmetre-les.

Aquest llenguatge és àmpliament utilitzat per a fitxers de configuració i en aplicacions on es necessita emmagatzemar o transmetre dades. La seva sintaxi és minimalista i utilitza la indentació per indicar la jerarquia.

Les principal característiques de YAML són:

- **Sintaxi llegible per humans:** Utilitza indentació per a la jerarquia i no requereix cometes per a la majoria de valors de cadena.
- **Tipus de dades suportats:** Inclou cadenes de text, números enters, en coma flotant, valors lògics, llistes i mapes associatius.
- **Compatibilitat:** És compatible amb molts llenguatges de programació i té suport per a la lectura i escriptura en molts editors de codi.

Veiem un exemple amb YAML:

```yaml
comunitat_educativa:
  alumnes:
    - persona:
        nom: "Paco"
    - persona:
        nom: "Pepe"
  professors:
    - persona:
        nom: "Anna"
    - persona:
        nom: "Maria"
```

# JSON (JavaScript Object Notation)

**JSON** és un format de text per a l'intercanvi de dades, fàcil de llegir i escriure per les persones i fàcil de tractar i generar pels ordinadors. És àmpliament utilitzat en aplicacions web per a la transmissió de dades entre el servidor i el client.

Les principals característiques de JSON són:

- **Sintaxi simple i llegible,** mitjançant parelles clau-valor i llistes d'elements.
- **Tipus de dades suportats:** Inclou cadenes de text, números, objectes, llistes, valors lògics i valors nuls.
- **Compatibilitat:** És un llenguatge natiu de JavaScript i té suport en molts altres llenguatges de programació.

Veiem un exemple:

```json
{
  "comunitat_educativa": {
    "alumnes": [
      {
        "persona": {
          "nom": "Paco"
        }
      },
      {
        "persona": {
          "nom": "Pepe"
        }
      }
    ],
    "professors": [
      {
        "persona": {
          "nom": "Anna"
        }
      },
      {
        "persona": {
          "nom": "Maria"
        }
      }
    ]
  }
}

```

Un altre llenguatge de marques molt interessant és Markdown, que estaria en la categoría de documents de marcat lleugers, i que veurem al següent i últim apartat.---
# Informació general del document
title: 7. Markdown
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

# Introducció a Markdown {#introduccio}

Markdown és un **llenguatge de marques lleuger**, pensat per tal d'escriure documentació fent ús d'un format de text pla, fàcil d'escriure i de llegir, i que puga convertir-se a altres formats, com HTML, epub o pdf de forma senzilla.

!!! note ""
    El llenguatge Markdown va ser creat per John Gruber, amb la finalitat d'aconseguir la màxima legibilitat i facilitat de publicació, i es va inspirar en moltes convencions existents per al marcat de misstges de correu electrònic utilitzant text pla. Segon John Gruber *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s’ha marcat amb etiquetes o instruccions de format.* 

Actualment, Markdown s'utilitza en molts àmbits, especialment en la generació de documentació i contingut web, en llocs com Github, o sistemes de gestió de continguts com Jekyll, Hugo o Gitbook.

!!! note ""

    La versió original de Gruber podríem dir que és el format estàndard. Aporta format de text (negretes i cursives), així com marques de continguts (títols, imatges, enllaços, cites, línies horitzontals o blocs de codi), llistes ordenades i desordenades, etc.

    A banda d'aquesta versió original, han anat apareixent diverses variants, entre les que podem destacar:

    * **CommonMark**: Variant centrada en la conversió a HTML.
    * **Github Flavored Markdown**: Markdown utilitzat a la plataforma d'allotjament de projectes Github, que afig sintaxi relacionada amb el contingut relatiu al control de versions, revisions, etc.
    * **Multimarkdown**, Variant que afig altres funcionalitats i continguts,
    * **Pandoc Markdown**: Variant basada en l'estàndard, però amb extensions que ens permeten afegir marques d'altres variants, i que incorpora diverses millores. Aquesta serà la versió que utilitzem quan utilitzem *Pandoc* per a la generació de documents.

# Sintaxi de Markdown

Com hem dit, Markdown es basa en fitxers de tipus text, que no contenen cap informació *interna* sobre el format. Aquesta informació, s'especificarà de forma explícita mitjançant etiquetes, que seran visibles en tot moment, i que facilitaran, per una banda la seua interpretació a l'hora d'exportar-los a altre format, però també la seua lectura per part de les persones.

En aquet apartat, anem a veure quins són els diferents elements que podem utilitzar en un text en format Markdown, així com les principals marques de format.

## Paràgrafs

Un paràgraf, tal i com l'entén Markdown, és un bloc de text definit entre **dos salts de línia** (tecla `Intro/Enter/Entrar`). 

Si utilitzem només un salt de línia, es sobreentén que és el mateix paràgraf, i a l'hora de generar el document, el veurem com a tal.

Si el que desitgem, per altra banda és afegir només un salt de línia a la meitat d'un paràgraf, afegirem almenys dos espais al final de la línia, i ara sí que utilitzarem un (només un) salt de línia.

Veiem-ho amb algun exemple.

```markdown
Aquest és el primer paràgraf, com veieu, necessita dos salts de línia, o el que sería el mateix, una línia en blanc després del paràgraf.

Aquest és un altre paràgrar,   
en el que hem forçat salts de línia,    
i encara que no es veja, aquestes línies  
acaben amb dos o més espais en blanc.
```    

## Capçaleres

Hi ha diverses formes de marcar capçaleres:

* Utilitzant al menys un símbol `=`o `-` després del text per indicar capçaleres de primer i segon nivell:

```markdown
Açò sería una capçalera de primer nivell
========================================

Açò sería una capçalera de segon nivell
---------------------------------------

Recordeu que només cal un = o un -, encara que se'n poden utilitzar més, com és el cas d'aquest exemple, on s'han utilitzat tants símbols com longitud té el títol.
```

* Utilitzant l'**Estil ATX**, al qual, utilitzem el símbol `#` abans del text per indicar el nivell de la capçalera. S'admeten fins a sis nivells de profunditat (`######`).

```markdown

# Capçalera de primer nivell

## Capçalera de segon nivell nivell

### Capçalera de tercer nivell nivell

...

###### Capçalera de nivell 6
```

!!! note "A tenir amb compte"
    La versió estàndard de Markdown no requereix d'una línia en blanc abans d'una capçalera, però d'altres versions, com per exemple la de *Pandoc* sí que la requereix. No obstant això, encara que l'estàndard no ho utilitze, convé afegir-la ja que facilita així la lectura i localització d'aquestes.

    Algunes implementacions, tampoc requereixen d'un espai entre el símbol `#` inicial i el primer caràcter del títol. *Pandoc* sí que demana aquest espai, de manera que podem posar un `#hastag` al principi d'un paràgraf sense que l'interprete com una capçalera.
    
### Atributs a la capçalera

Quan es genera un document, ja siga PDF, HTML o altre format a partir d'un document en Markdown, a les capçaleres se'ls assigna un identificador de manera automàtica, per a que es puga fer referència a elles des d'altres parts del document. Aquest identificador s'obté a partir del text de la capçalera, pel que si aquesta és llarga, l'identificador també ho serà. La versió de Pandoc, ens permet afegir certs atributs a les capçaleres, entre les que es troba l'identificador. 

Veiem-ho amb un exemple. Donada, per exemple la primera capçalera d'aquest document:

```markdown
#  Introducció a Markdown
```

L'identificador que es genera és: `id="introducció-a-markdown"`. 

Aquesta capçalera, la podriem haver escrit també de la següent forma:

```markdown
# Introducció a Markdown { #introduccio }
```

Sent l'identificador de la capçalera només `#introduccio`, de manera que podem fer referència a l'apartat mitjançant aquest.

## Formatació de text

Markdown ens permet fer ús del símbol de l'asterisc com a marca de format per tal d'indicar textos tant en cursiva, com en negreta o ambdós. Per a això farem ús d'ún, dos o tres asteriscs al principi i al final del text que volem remarcar. A més, cal tindre en compte que **no hem d'afegir cap espai entre els asteriscs del principi i la primera paraula i els asteriscs del final i la última.**

Veiem-ho amb exemples:

```markdown
Amb un asterisc marquem un *text en cursiva*
Amb dos asteriscs marquem un **text en negreta** 
Amb tres asteriscs marqiem un ***text en cursiva i negreta***

En canvi, si afegim algun espai entre mig, ** no s'interpretarà correctament**
```

Resultat:

Amb un asterisc marquem un *text en cursiva*  
Amb dos asteriscs marquem un **text en negreta**   
Amb tres asteriscs marqiem un ***text en cursiva i negreta***

En canvi, si afegim algun espai entre mig, ** no s'interpretarà correctament**


## Línies horitzontals

Una línia horitzontal es defineix mitjançant tres o més símbols `*`, `-` o `_`, separats o no per espais:

```markdown
- - -

* * *

_ _ _
```

Resultat:

- - -

* * *

_ _ _


## Llistes

Markdown permet fer ús tant de llistes ordenades com llistes no ordenades.

### Llistes no ordenades

Les llistes no ordenades es marquen fent ús dels símbols `*`, `+` o `-` al principi de cada element, i incloent cada ítem en una línia diferent (i no fan falta dos salts de línia).

```markdown
* Element 1
* Element 2
...
```

Cada element de la llista pot contindre diversos paràgrafs, i altres continguts a nivell de bloc. Quan volem incloure diversos paràgrafs a un ítem de la llista, el segon paràgraf i posterior hauran d'anar **precedits per una línia en blanc, i sagnats per aliniar-se amb el contingut que no siga l'espai després del marcador de la llista**.

Per exemple:

```
* Primer element de la llista
* Segon element de la llista

  Altre paràgraf corresponent al segon element de la llista.
  No cal un espai en blanc entre l'últim paràgraf i el següent element,
  però el podem afegir per facilitar la lectura de la llista.

* Tercer element de la llista.
```

Una llista pot contindre dins altres llistes. En aquest cas, podem o no incloure una línia en blanc al davant. Per utilitzar una llista dins d'una altra només haurem de *sagnar* la llista que està dins l'altra per aliniar-la amb el primer caràcter de text de l'element que la conté. Podem tindre tantes llistes dins d'altres com volguem.

```markdown
* Element 1
  * subelement 1.1
    * subelement 1.1.1
    * subelement 1.1.2
  * subelement 1.2
  * subelement 1.3
* Element 2
```

En aquests casos, com que podem utilitzar diversos símbols per indicar llistes, se sol utilitzar un element per cada nivell de la llista, amb la finalitat de facilitar la lectura del text pla:

```markdown
* Element 1
  + subelement 1.1
    - subelement 1.1.1
    - subelement 1.1.2
  + subelement 1.2
  + subelement 1.3
* Element 2
```

Resultat:

* Element 1
  + subelement 1.1
    - subelement 1.1.1
    - subelement 1.1.2
  + subelement 1.2
  + subelement 1.3
* Element 2

### Llistes ordenades

El funcionament de les llistes ordenades és el mateix que les no ordenades, llevat que cada element de la llista porta un número en lloc d'una *vinyeta*.

En la versió estàndard de Markdown els elements que indiquen l'ordre han de ser **números decimals seguits d'un punt i un espai**. En l'estàndard, **aquests números s'ignoren**, pel que la llista:

```markdown
1. Element 1
2. Element 2
3. Element 3
```

Serà la mateixa que:

```markdown
4. Element 1
5. Element 2
6. Element 3
```

El Markdown de Pandoc, afig un parell d'extensions a aquesta forma d'utilitzar les llistes ordenades.

En primer lloc, a més de números, permet marcar els elements d'una llista ordenada amb lletres majúscules, minúscules o números romans. Per a això utilitzarem com a marcadors de llista la lletra entre parèntesi o bé només amb el parèntesi dret, seguit d'almenys un espai. També podem utilitzar el punt, però en aquest cas, afegint dos espais com a mínim rere el punt en lloc d'un.

Per exemple:

```markdown
(A) Element 1
(B) Element 2

A) Element 1
B) Element 2

I.  Element 1, amb dos espais mínims després del punt
II.  Element 2, amb dos espais mínims després del punt
```

## Llistes de tasques

Una extensió més que afigen algunes versions de Markdown a l'estàndard és la possibilitat d'utilitzar llistes de tasques, introduïdes al Markdown de Github.

Per utilitzar aquest tipus de llistes utilitzem el guió com a marcador de llista seguit d'un espai i les seqüències de caràcters `[ ]`i `[x]` per indicar un element de llista no marcat i marcat respectivament. Per exemple:


```markdown
- [ ] Element de llista com a tasca sense marcar
- [x] Element de llista com a tasca marcada.
```

Obtindría com a resultat:

- [ ] Element de llista com a tasca sense marcar
- [x] Element de llista com a tasca marcada.

## Taules

Les taules ens serveixen per tal de presentar informació de manera organitzada.

La versió original de Markdown de John Gruber no inclou la definició de taules en la sintaxi de Markdown. Com que inicialment es va concebir com una eina per fer la conversió a HTML, per afegir taules s'utilitzava directament aquest llenguatge.

No obstant això, les diferents variants de Markdown han anat afegint notacions i extensions al Markdown original per suportar taules.

La sintaxi per crear taules del Markdown de Github és una de les més esteses, i fa ús de barres verticals (`|`) i guions (`-`) per crear les taules. Els guions s'utilitzen per creat l'encapçalament de cada columna, i les barres verticals serveixen de separador de cada columna. A més, per a que la taula es represente correctament, cal una línia en blanc abans de la taula.

Les taules, en aquest format **han de tindre necessàriament una capçalera i un cos**, i seguiran la següent sintaxi:

```markdown
| Capçalera 1 | Capçalera 2 |
|-------------|-------------|
| Valor 1     | Valor 2     |
| Valor 3     | Valor 4     |
```
Que té com a resultat:

 Capçalera 1 | Capçalera 2 
-------------|-------------
 Valor 1     | Valor 2     
 Valor 3     | Valor 4    

  

Algunes consideracions:

* Podem afegir tants camps (columnes) com volguem. 
* La línia que separa la capçalera del cos `|---|---|` és obligatòria, però no és necessari que tinga tants caràcters com tinguen les capçaleres, pel que no cal que la taula estiga completament aliniada. 
* Les barres verticals (`|`) del principi i del final són opcionals.

### Formatat el contingut d'una taula

Dins una taula podem utilitzar també certes marques de format, com negretes, cursives, enllaços, imatges...

A més, podem aliniar el text a l'esquerra, a la dreta o al centre de la columna, afegint la marca dos punts `:`, al costat esquerra, dret, o als dos, dels guions de l'encapçalament.

Veiem-ho amb un exemple. La següent definició de taula:

```markdown
| Text a l'esquerra | Text centrat | Text a la dreta |
|        :---       |     :---:    |      ---:       |
| xxx               | xxx          | xxx             |
| xxxxx             | xxxxx        | xxxxx           |
```

Té el següent resultat:

| Text a l'esquerra | Text centrat | Text a la dreta |
|        :---       |     :---:    |      ---:       |
| xxx               | xxx          | xxx             |
| xxxxx             | xxxxx        | xxxxx           |


!!! note ""
   Si el que volem és afegir dins una taula una barra vertical com a contingut, hem de posar abans el símbol `\`, per indicar que el caràcter següent no s'ha d'interpretar com a marca de format Markdown. Aquesta barra invertida s'anomena caràcter d'*escapament*, i a la combinació d'ella amb qualsevol marca que volguem que no s'interprete es coneix com *seqüència d'escapament*.
    
### Fragments de codi

Markdown té un ampli ús en la documentació tècnica de projectes informàtics, on és habitual incloure fragments del codi font dels programes. Per tal de ressaltar aquests tipus de fragments, Markdown utilitza una sintaxi especial, fent ús dels caràcters de l'accent obert: \`.

Quan es tracta de fragments de codi que han d'anar en la mateixa línia que el text, per exemple si volem indicar una etiqueta HTML, ho fem, \`d'aquesta manera\`, fent ús d'un únic caràcter d'accent, mentre que si el que volem és escriure un bloc de codi, utilitzaríem tres símbols d'accent obert \`\`\`. A més, rere els primers símbols, podem especificar de quin llenguatge es tracta. Per exemple, per indicar el codi HTML d'una pàgina web, faríem:

```markdown
 ```html
 <html>
  <body>
    <h1>Títol de la pàgina web</h1>
    <p>Paràgraf</p>
  </body>
 </html>
 ```
```


Que ens generaría:

```html
<html>
  <body>
    <h1>Títol de la pàgina web</h1>
    <p>Paràgraf</p>
  </body>
</html>
```

Cal remarcar que el nom del llenguatge rere les cometes fa que al mostrar el resultat, es tinga en compte el llenguatge de programació per tal de ressaltar-ne la sintaxi pròpia del llenguatge.

## Cites

En Markdown un bloc de text en forma de cita consisteix en un o més paràgrafs o altres elements de bloc (com per exemple llistes o capçaleres), on cada línia es troba precedira del caràcter `>` i opcionalment un espai.

Veiem alguns exemples:

**Exemple 1**:

```markdown
    > *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s'ha marcat amb etiquetes o instruccions de format.*
    > John Gruber
```

Genera el següent:

> *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s’ha marcat amb etiquetes o instruccions de format.*
> John Gruber


**Exemple 2**

El següent contingut:

```markdown
    > # Títol de la cita
    > Una cita també por contindre altres elements de bloc, com ara:
    > - llistes
> - capçaleres
> - imatges
```

Genera:

> # Títol de la cita
> Una cita també por contindre altres elements de bloc, com ara:
> - llistes
> - capçaleres
> - imatges

A més, podem afegir cites dins d'altres. Amb:

```markdown
    > Paràgraf de la cita.
    > > Cita dins la cita
```

Generem el següent:

> Paràgraf de la cita.
> > Cita dins la cita
    
Per altra banda, podem especificar les cites de forma *mandrosa*, afeging només el caràcter `>` en la primera línia de cada bloc:

```markdown
> Aquesta és una cita, dins un
paràgragraf de dos línies.
```

Tot i ser possible, aquesta opció no és massa recomanada perquè lleva legibilitat al text en cru. 

## Enllaços

Markdown ens permet generar enllaços tant a adreces d'Internet, com fer referència a fitxers locals, mitjançant la seua ruta relativa o fins i tot dins el propi doument.

El format general per afegir un enllaç és el següent:

```
[Text de l'enllaç](URL_o_adreça_relativa)
```

Per exemple, per afegir un enllaç a un lloc web, escriurem:

```
Aci afegim un [enllaç a la web de l'insitut](http://ieseljust.com/)
```

Que genera:

Aci afegim un [enllaç a la web de l'insitut](http://ieseljust.com/)

Per tal d'afegir un enllaç a una seccíó del nostre document, farem ús de l'identificador que s'assigna automàticament, o bé que li hem assignat nosaltres. Per exemple, si per a l'apartat introductori vam afegir un identificador de la següent forma:

```markdown
# Introducció a Markdown {#introduccio}
```

Podem fer referència a ell de la manera següent:

```markdown
Feu click [al següent enllaç](#introduccio) per tornar a la secció d'Introducció.
```
Que generaría:

Feu click [al següent enllaç](#introduccio) per tornar a la secció d'Introducció.


## Imatges

La sintaxi per afegir una imatge és semblant a la de l'enllaç, predecida d'una exclamació `!`:

```
![Text alternatiu o peu de la imatge](Ubicació de la imatge)
```

A l'igual que els enllaços, la ubicació pot ser una adreça d'Internet o bé la ruta a un fitxer local al nostre ordinador:

```markdown
![Logotip de Markdown a la Wikipèdia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png)

![Logotip de l'institut](imatges/logo.svg)
```

En aquest segon cas, busca la imatge *logo.svg* en una carpeta *imatges* ubicada a la mateixa carpeta on es troba el nostre arxiu de text Markdown.

### Afegint tamany a les imatges

Algunes versions de Markdown a més permeten afegir certs atributs a les imatges. Entre aquests  destaquen especialment `width` i `height`, que permeten especificar la grandària de la imatge. 

Si no s'indica res, el tamany s'entén que s'especifica en píxels, però podem utilitzar altres unitats com *px, cm, mm, in, inch i %*, sense incloure espais entre el número i les unitat. 

Veiem alguns exemples:

```markdown
![Imatge 1 - 100px](recursos/logo.svg){ width=100px }

![Imatge 2 - 30%](recursos/logo.svg){ width=30% }
```

Que generen el següent:

![Imatge 1 - 100px](recursos/logo.svg){ width=100px }

![Imatge 2 - 50%](recursos/logo.svg){ width=30% }

!!! note "Referències i informnació addicional"

    Per a més informació sobre Markdown podeu consultar:

    * La guía de markdown en espanyol: [https://markdown.es/](https://markdown.es/) 
    * La sintaxi estesa de markdown a la web: [https://www.markdownguide.org/extended-syntax](https://www.markdownguide.org/extended-syntax)
    * La secció dedicada a Markdown al [Manual de Pandoc](https://pandoc.org/MANUAL.html#pandocs-markdown)
    * L'article de John Gruber [sobre la seua versió de Markdown](https://daringfireball.net/projects/markdown/syntax).
---
# Informació general del document
title: 1. Classificació dels llenguatge de marques
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de Marques
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

# Com parlen els ordinadors?

Els ordinadors són màquines molt complexes que ens permeten fer moltes coses. Però per comunicar-nos amb ells, necessitem parlar el seu idioma. Aquest idioma es coneix com a **llenguatge informàtic**.

!!! note ""
    En el seu nivell més bàsic, els ordinadors només entenen dos valors: 0 i 1, que formen el llenguatge màquina. Aquests dígits binaris són la base de tota la comunicació i les operacions que realitzen els ordinadors. Però d'això se n'ocuparen en altres mòduls.

La Wikipedia ens defineix el terme [**llenguatge informàtic**](https://es.wikipedia.org/wiki/Lenguaje_inform%C3%A1tico) de la següent forma:

!!! note "Llenguatge informàtic"
    Un llenguatge informàtic és un llenguatge usat per ordinadors. Moltes vegades, aquest terme s’usa com a sinònim de llenguatge de programació, però un llenguatge informàtic no ha de ser necessàriament un llenguatge de programació.

En aquest video, extret de l'article [¿Qué es un Lenguaje Informático?](https://newsletter.cuarzo.dev/p/que-es-un-lenguaje-informatico), se us planteja també una bona definció:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PfBBYt9bEec?si=WpyLUAU8gXmA5U1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Com veiem, hi ha diferents tipus de llenguatges informàtics, cadascun amb un propòsit específic. Entre aquests tipus destaquem:

* Els **llenguatges de programació**, com Python, Java o C++, utilitzats per escriure programes que executen tasques específiques en un ordinador, com les aplicacions o el propi sistema operatiu,
* Els **llenguatges de consulta**, com SQL o XQuery, que permeten recuperar i manipular dades emmagatzemades en bases de dades,
* Els **llenguatges de marques**, com XML, HTML o Markdown, que s'utilitzen per definir l'estructura i el contingut dels documents. Dins d'aquests, també s'ubiquen llenguatges con CSS, que podriem definir com llenguatges de representació, i que defineixen la forma en què es mostra aquesta informació.
* Els **llenguatges de transformació**, com XSLT, que s'utiliten per convertir dades d'un format a altre,
* Els **protocols de comunicació**, com HTTP, que defineixen les regles per a l'intercanvi de dades entre es dispositius d'una xarxa.

! note "Per què són importants els llenguatges informàtics?"

  Els llenguatges informàtics són important perquè ens permeten comunicar-nos amb els ordinadors i dir-los què han de fer o com han de mostrar la informació. Sense aquests llenguatges, no podríem crear aplicacions, pàgines web, ni gestionar dades de manera eficient.


# Llenguatges de marques

Com hem avançat els llenguatges de marques s'utilitzen per definir l'estructura, el format i el contingut de documents.

??? note "Examinant alguns documents"

      A continuació se't presenten alguns documents que utilitzen llenguatges de marques per representar la informació. Anem a examinar-los.

      * El fitxer [recursos/logo.svg](recursos/logo.svg) és un fitxer vectorial (en format SVG) amb el logotip del nostre centre. Si l'obres, el sistema l'associa a aplicacions de disseny vectorial, com l'Inkscape, però... prova a obrir-lo en un editor de text...

      * El fitxer [recursos/llenguatges.odt](recursos/llenguatges.odt) és un document del processador LibreOffice, pel que pots obrir-lo amb aquesta eina i examinar el seu contingut. Una vegada fet, tanca'l i intenta tractar-lo com un fitxer comprimit, per exemple amb l'eina *Ark*...  Una vegada veges l'estructura de carpetes del comprimit, examina el fitxer `content.xml`.

      * Fes ara el mateix amb el fitxer [recursos/llenguatges.docx](recursos/llenguatges.docx), un document de MS Office. Buscarem ara dins el comprimit el fitxer `word/document.xml`.

      * I en el fitxer [recursos/llenguatges.html](recursos/llenguatges.html) tens aquest mateix contingut en format web. Pots obrir-lo amb el navegador web, però prova a obrir-lo també amb un editor de text.

      Alguns altres exemple de documents escrits en llenguatge de marques són els següents:

      * El fitxer [`AndroidManifest.xml`](recursos/AndroidManifest.xml) que s'utilitza per definir les propietats 
      * Els fitxers de [descripció de les interfícies en Android](recursos/MainActivity.xml).


# Classificació dels llenguatges de marques

La classificació més habitual dels llenguatges de marcat es basa en classificar aquests segons el seu propòsit; és a dir, quina és la seua utilitat. 

Segons aquesta classificació, podem distingir les següents categoríes ***no excloents***:

1. **Llenguatges de marques de presentació**
    - Estableixen el format del text, és a dir, com es vorà aquest
    - Exemples: 
         * Els fitxers de tipus LibreOffice (.odt) i MS Word (.docx) que hem vist, fan ús internament de marques de format en el text,
         * Els fitxers HTML, que mostren el seu contingut en un navegador web

2. **Llenguatges de marques de procediment**
    - També estableixen el format del text, però a més, indiquen als programes les accions que ha de realitzar per mostrar el text. 
    - Exemples: 
         * LateX, usat generalment en textos científics ,inclou instruccions per processar el text
         * PostScript, que s'usa per tal de descriure l'aparença de textos impresos.

3. **Llenguatges de marques descriptius o semàntics**
    - Utilitzen marques per descriure els fragments de text però no determinen com es presentarà el text.
    - Exemples: SGML, XML, SVG

4. **Llenguatges de marques lleugers (LML)**
    - Utilitzen un tipus de format de text estandarditzat i generen arxius que ocupen poc espai.
    - Exemple: Markdown, ReStructured Text, Textile.

També existeixen altres llenguatges de marques més específics per a algunes aplicacions, com *MathML*, per representar fòrmules matemàtiques, o *VoiceXML*, per crear aplicacions de veu.


# Característiques dels llenguatges de marques.

Les característiques principals dels llenguatges de marques són:

1. **Documents en Text Pla**
    - Els documents creats amb llenguatges de marques són en text pla, el que els fa independents del software utilitzat. Això significa que es poden editar amb qualsevol editor de text.

2. **Marques Inserides en el Contingut**
    - Les marques o etiquetes estan inserides directament en el contingut del document. Aquestes marques defineixen l'estructura, el format i el contingut del text.

3. **Components Senzills i Intuïtius**
    - Els llenguatges de marques es componen d'elements senzills i intuïtius, el que facilita la creació de documents estructurats. Això permet la creació de llenguatges específics depenent del tipus de document.

4. **Versatilitat i Àmbit d'Utilització Extens**
    - Els llenguatges de marques són molt versàtils i tenen un àmbit d'utilització molt extens. S'utilitzen en pàgines web, llibres, gràfics, fórmules matemàtiques, vídeos, sindicació de continguts, etc.

5. **Etiquetes Identificatives del Tipus de Contingut**
    - Les etiquetes o marques identifiquen clarament el tipus de contingut que representen. Per exemple, una etiqueta `<titol>` indica que el text entre les etiquetes és un títol.

## Avantatges

Les característiques anteriors, fan que l'ús de llenguatges de marques presenten certs avantatges:

1. **Interoperabilitat**
    - Els llenguatges de marques com XML permeten la interoperabilitat entre diferents sistemes i aplicacions. Això facilita l'intercanvi de dades entre plataformes diverses.

2. **Extensibilitat**
    - Els llenguatges de marques com XML són extensibles, el que significa que es poden crear noves etiquetes segons les necessitats específiques. Això permet adaptar el llenguatge a diferents aplicacions i contextos.

3. **Separació de Contingut i Presentació**
    - En llenguatges com HTML i XML, el contingut i la presentació es poden separar. Això permet que el mateix contingut es pugua presentar de diferents maneres segons les necessitats de l'usuari o del dispositiu.

4. **Accessibilitat**
    - Els documents creats amb llenguatges de marques són més accessibles perquè es poden llegir i processar fàcilment per diferents tipus de programari, incloent-hi lectors de pantalla per a persones amb discapacitat visual.

5. **Facilitat de Manteniment**
    - Els documents estructurats amb llenguatges de marques són més fàcils de mantenir i actualitzar. Les modificacions es poden fer de manera més eficient perquè l'estructura del document és clara i ben definida.

??? question "Activitat"
  
    Intenta identificar alguns exemples de les característiques comentades anteriorment en els documents que se t'han proporcionat.

    Serà interessant que vages guardant les teues respostes en un document de text pla, al que posteriorment li dinarem format.


# Evolució dels Llenguatges de Marques

Els llenguatges de marques existeixen bàsicament des dels inicis de la informàtica, i han anat evolucionant i millorant al llarg dels anys. Fem una breu síntesi de la seua història i evolució.

## **A. SGML (Standard Generalized Markup Language)**

- **Origen**: Millora del llenguatge GML (Generalized Markup Language) creat per Charles Goldfarb el 1970.
- **Característiques**:
    - No és un llenguatge de marques en si, sinó un metalenguatge que permet definir altres llenguatges de marques.
    -Facilita la gestió, publicació i intercanvi de documents digitals independentment del hardware i software utilitzat.
    -No incorpora informació sobre la presentació del document; això s'ha d'adjuntar per separat.
    -Utilitza codificació descriptiva i introdueix el concepte de "tipus de document".
    -És un estàndard internacional no propietari.

## **B. HTML (HyperText Markup Language)**
- **Origen**: Desenvolupat per Tim Berners-Lee a principis dels anys 90 com a part del projecte World Wide Web (WWW).
- **Característiques**:

    - Basat en SGML però molt més senzill.
    - Utilitzat per descriure documents web.
    - Conjunt limitat d'etiquetes predefinides.
    - Conté tant la estructura com el disseny del document.
    - No permet mostrar contingut dinàmic (les versions més recents comencen a incorporar-ho).
    - Senzill per a la presentació d'informació però no per al seu processament o emmagatzematge.

## **C. XML (eXtensible Markup Language)**
- **Origen**: Apareix el 1996 com una simplificació de SGML.
- **Característiques**:
    - És un metalenguatge, no un llenguatge de marques en si.
    - Permet la creació de llenguatges de marques específics per a diferents usos.
    - Separa la estructura del document del seu disseny.
    - Permet exportar documents a altres formats com HTML, PDF, RTF, etc.
    - Facilita la compartició de documents entre diferents sistemes operatius i plataformes.
    - És un estàndard obert i lliure de llicències.
<!--
## **Comparativa entre XML i HTML**
- **XML**:
    - És un metalenguatge.
    - Descriu informació.
    - Dinàmic i utilitzat per transferir dades.
    - Permet la definició de noves etiquetes.
    - Obliga a tancar les etiquetes.
    - Imprimeix els espais en blanc.
    - Utilitza el navegador com a plataforma per al desenvolupament d'aplicacions.
    - Proporciona interoperabilitat amb SGML i HTML.
    - Objectiu principal: emmagatzemar i transferir dades.

- **HTML**:
    - És un llenguatge de marques.
    - Dona format i mostra informació.
    - Estàtic i utilitzat per mostrar dades.
    - Conjunt limitat d'etiquetes predefinides.
    - Les etiquetes poden funcionar sense necessitat de tancar-les.
    - No conserva els espais en blanc.
    - Utilitza el navegador només per mostrar informació.
    - Objectiu principal: presentar dades.

#### **Comparativa entre XML i SGML**
- **XML**:
    - Subconjunt de la funcionalitat de SGML però més senzill.
    - No requereix validació del document.
    - Molt utilitzat en diferents àrees.
    - Compatible amb HTML.
    - Formateig i estil relativament fàcils d'aplicar.

- **SGML**:
    - Molt complex.
    - Requereix la validació del document.
    - Ús molt restringit per la seva complexitat.
    - No hi ha compatibilitat específica amb HTML.
    - Formateig i estil relativament difícils d'aplicar.

-->---
# Informació general del document
title: 2. Estructura i Sintaxi
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de marques
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

# Conceptes bàsics

Un document, en general, es compon del propi contingut del document (les dades) i una sèrie d'informacions que es superposen al contingut, que són les que aporten estructura al document i es diuen **etiquetes**. Aquestes etiquetes *marquen* el document, i li donen estructura.

Un dels avantatges d'utilitzar aquesta informació afegida és que la representació del document serà independent del sistema informàtic utilitzat i millora l'accessibilitat, manteniment i reutilització del mateix.

Anem a veure els diferents components dels llenguatges de marques i les seues principals característiques: *etiquetes* o *marques*, *elements*, *propietats* i *metadades*.

## Etiquetes o marques

Les *marques* són un conjunt de codis que s'afigen al text per establir el seu format de visualització, la forma com s'ha d'imprimir o l'estructura que té. S'afigen al text però no formen part d'aquest.

Cada llenguatge té la seva pròpia col·lecció de marques amb la seva classificació i significat. Existeixen tres tipus d'etiquetes:

- **Apertura**: S'expressen entre els caràcters `<` i `>`, i indiquen l'inicia d'un *element*. Per exemple: `<p>`, `<h1>`.
- **Tancament**: S'expressen entre `</` i  `>`, i indiquen el final d'un *element. Exemple: `</p>`. En alguns llenguatges concrets, les marques de tancament no són requerides.
- **Buida**: S'expressent entre `<` i `/>`, i no tenen continut. Exemple: `<br/>`.

Veiem un exemple en HTML:

```html
<p>Hola món, açò és un paràgraf<br/> que té un salt de línia al mig</p>
```

On `<p>` i `</p>` són les marques que delimiten un element de tipus paràgraf, i a més, a dins, conté una etiqueta de salt de línia. El resultat seria el següent:

```
Hola món, açò és un paràgraf
que té un salt de línia al mig
```

!!! note ""
    En un document tot el que no són marques és contingut. Les etiquetes es poden escriure tant en majúscules (Ex: `<HTML>`) com en minúscules (ex: `<html>`). El navegador les interpreta igual, però **la recomanació és fer ús de les minúscules**.

!!! note "Referències a entitats"

    Les referències a entitats són un tipus especial de marques, que serveixen per representar caracters especials que d'altra manera podrien ser interpretats incorrectament pel processador del llenguatge de marques.

    Aquestes referències són seqüències de caràcters que comencen amb un símbol `&` i acaben amb un punt i coma `;`, i es fan servir per representar caràcters que tenen un significat especial en el llenguatge de marques, com ara `<`, `>`, `&`, `"`, i `'`.

    Veiem les més habituals:

    |  Referència a entitat  | Significat |
    |------------------------|-----------|
    |  `&lt;` | representa el caràcter `<` |
    | `&gt;` | representa el caràcter `>` |
    | `&amp;` | representa el caràcter `&` |
    | `&quot;` | representa el caràcter `"` |
    | `&apos;` | representa el caràcter `'` |

    A més, aquestes referències a entitats també s'utilitzen per mostrar per exemple accents. Si volem mostrar un accent, utilitzarem una referència consistent la lletra a accentuar seguida del text `cute` per a accents tancats o `grave` per a accents oberts. Per exemple el caràcter `à` seria `&agrave;` o `Ó`seria `&Ocute`.

    Veiem un exemple pràctic. Per mostrar el següent text en una pàgina HTML:

    ```html
    <p> Per delimitar etiquetes en HTML farem ús de < i > </p>
    ```

    Per tal que funcione correctament i el processador HTML del navegador interprete bé les etiquetes, haurem de fer ús de referències a entitats com:

    ```html
    <p> Per delimitar etiquetes en HTML farem &ucute;s de &lt; i &gt; </p>
    ```

!!! note "Processadors XML o HTML"

    Quan parlem de processador XML o HTML ens referim al programa o component que s'encarrega de llegir, interpretar i processar els documents expressats en llenguatges de marques, com XML o HTML. Aquest component s'encarrega de comprovar que el document siga vàlid, interpretar el seu contingut, i en el cas d'HTML, mostrar-lo. Els navegadors web, per exemple, realitzen aquesta funció.

## Elements

Els **elements** són les unitats bàsiques dels documents, que defineix una part del contingut i la seva estructura. 

Els elements es component d'una **etiqueta d'inici**, el **contingut** i una **etiqueta final**.

Veiem un exemple en HTML que representa una llista, amb diversos ítems:

```html
<ul>
    <li>arros</li>
    <li>pollastre</li>
    <li>bajoqueta</li>
</ul>
```

En aquest codi tenim un element de tipus *llista no ordenada* (`<ul>`), que es compon de tres elements més de tipus *ítem de llista* (`<li>`).

L'exemple anterior, podria també haver-se expressat com a:

```html
<ul>
    <li>arros
    <li>pollastre
    <li>bajoqueta
</ul>
```

És a dir, sense utilitzar etiquetes de tancament per als elements `<li>`. En aquest tipus d'etiquetes, igual que en `<p>`, es considera com a tancament l'aparició d'altre element amb la mateixa etiqueta.

!!! warning "Important!"
    No hem de confondre *element* amb *etiqueta*. Els elements són estructures completes que contenen etiquetes o marques i contingut.

## Atributs

Els elements poden tindre atributs, amb uns determinats valors, que s'expressen entre cometes dobles `"` o entre cometes simples `'`. Aquests atributs, a més poden tindre valors predeterminats assignats pel programador.

Els atributs han d'anar inclosos dins els caràcters `<` `>` i si s'inclouen diverses parelles atribut/valor han d'anar separades per un espai en blanc. L'ordre en què apareixen els atributs és indiferent.

Poden haver-hi atributs en les etiquetes d'apertura i en les etiquetes buides però no en les de tancament.

En l'exemple següent l'element `<html>` indica el començament o arrel del document, el qual conté l'atribut `lang` (llengua) amb el valor `es` (espanyol), per indicar que aquest serà l'idioma del document.

```html
<html lang="es">
```

En aquest altre exemple l'element `<meta>`, que és un atribut buit, incorpora l'atribut `charset` que indica que el joc de caràcters a utilitzar és `utf-8`.

```html
<meta charset="utf-8">
```

Si s'inclouen dos atributs quedaria:

```html
<meta name="author" content="Nom de l'autor" />
```

## Metadades

Les metadades, en general, proporcionen informació sobre les pròpies dades.

En una pàgina HTML les metadades donen informació relativa al contingut de la pàgina, com puga ser exemple la temàtica, la descripció, la codificació utilitzada, paraules que descriuen la pàgina, etc.

Aquestes metadades són utilitzades pels cercadors d'Internet per conéixer el continguts de la pàgina (temàtica, descripció) i és molt important que estiguen ben definides si volem que s'indexen correctament.

L'element HTML associat a les metadades és `meta`. Per exemple:

```html
<meta name="author" content="Nom de l'autor" />
```

L'element de matadades `meta` conté l'atribut `name` que indica que l'atribut `content` serà el nom de l'autor. Ho veurem en més detall a l unitat sobr HTML.

!!! question "Detecció d'errors en el codi HTML"
    Observar el següent codi HTML amb les diferents etiquetes d'apertura i tancament. Hi ha algun error?

    ```html
    <html>
    <head>
      <title>Exemple de codi HTML</title>
    </head>
    <body>
      <p><b>Llenguatges de Marques</b></p>
      <p>El Llenguatge de Marques (Markup Language) defineix l'estructura del text...<br/>
      <p><b>Continguts</b></p>
      <ul>
        <li>Classificació i caraacterístiques</li>
        <li>Estructura i sintaxi</li>
        <li>Eines d'edició</li>
      </ul>
      </p>
    </body>
    </html>
    ```

    ??? note "Consulta la resposta"

        Observa que després de tancar `</ul>`, s'està tancant un `</p>` que no s'ha obert.---
# Informació general del document
title: 1. Presentació
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Guia Didàctica LMI
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


#### `eines_edicio.md`

## Eines d'edició de llenguatges de marques
- **Visual Studio Code**: Editor de codi amb suport per a múltiples llenguatges.
- **Notepad++**: Editor de text per a Windows.
- **Sublime Text**: Editor de text sofisticat per a codi, marcatge i prosa.
- **XML Viewer**: Editor en línia per a documents XML.
- **XMLGrid**: Editor en línia per a documents XML.

### Conversors XML
- **Code Beautify**: https://codebeautify.org/
- **Online Convert Free**: https://onlineconvertfree.com/es/convert/xml/
- **Aconvert**: https://www.aconvert.com/es/format/xml/
- **PDF Mall**: https://pdfmall.com/es/xml-to-pdf
- **Altova MapForce**: https://www.altova.com
- **Advanced XML Converter**: http://www.xml-converter.com/




---
# Informació general del document
title: 4. Elaboració de documents ben formats
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: Llenguatges de marques
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

# Introducció a XML

L'any 1989, Tim Berners-Lee, conegut com el pare de la *Web*, va crear el llenguatge HTML, per a l'intercanvi de documentació en el MIT (Institut Tecnològic de Massachusetts). Per a això es va basar en SGML (*Standard Generalized Markup Language*).

Posteriorment, la ***W3C*** (*World Wide Web Consortium*), un conjunt d'organitzacions per a l'estandarització de tot allò relacionat amb la web, el 1998, va crer el llenguatge ***XML*** (*eXtensible Markup Language*), com a una simplificació d'SGML, amb l'objectiu de facilitar la compatibilitat amb HTML i proporcionar una plataforma base per generar diferents llenguatges de marques.

## Característiques del Metallenguatge XML

Les característiques general d'XML són:

- **Descriptiu o Semàntic**: XML és un metallenguatge que estructura la informació en documents utilitzant etiquetes pròpies i una gramàtica determinada per la **DTD** (Document Type Definition).
- **Interoperabilitat**: XML permet la compartició de documents entre diferents sistemes operatius i aplicacions.
- **Estàndard Obert**: XML és lliure de llicències i optimitzat per a la web.
- **Estructura en Arbre**: Els documents XML tenen una estructura jeràrquica amb un únic element arrel.

## Marcat del Document

Els elements que componen un document, com en tot llenguatge de marques són;

- **Etiquetes**, que delimiten parts del text i es representen entre els caràcters `<` i `>`.
- **Elements**, compostos per una etiqueta d'obertura, un contingut i una etiqueta de tancament.
- **Atributs**, que afigen propietats als elements i es defineixen dins de les etiquetes d'obertura.

Veiem un exemple senzill de document XML:

```xml
  <?xml version="1.0" encoding="utf-8"?>
  <!DOCTYPE estudiant SYSTEM "http://www.example.com/estudiant.dtd">
  <estudiant>
    <nom>Paco</nom>
    <poblacio>Tavernes de la Valldigna</poblacio>
    <cicle>DAM</cicle>
  </estudiant>
```

També pots veure exemples més complets als documents [AndroidManifest.xml](recursos/AndroidManifest.xml) i [MainActivity.xml](recursos/MainActivity.xml) vistos anteriorment.

##  Parts d'un Document XML

Un document XML consta de les següents parts:

1. Un **Pròleg**, que inclou la declaració XML i la declaració de tipus de document:

   - **Declaració XML**: Indica que es tracta d'un document XML, la versió i la codificació del document.

     ```xml
     <?xml version="1.0" encoding="utf-8"?>
     ```

   - **Declaració de Tipus de Document (DOCTYPE)**: Defineix el tipus de document i pot incloure una referència a una definició del tipus de document o DTD (*Document Type Definition*) que especifica les regles per a la validació del document XML. És opcional i s’utilitza principalment per a documents que necessiten validació. Aquest pot indicar-se al mateix document, o en un lloc extern. En aquest últim cas, farem ús de la paraula `SYSTEM` per indicar-ho:

     ```xml
     <!DOCTYPE estudiant SYSTEM "http://www.example.com/estudiant.dtd">
     ```

2. El **cos del document** conté les dades o el text del document XML, estructurat en elements anidats (un dins d'altre).

      Les regles bàsiques que ha de complir aquest són:

      - Els elements han de tindre una estructura jeràrquica, és a dir, uns elements dins d'altres, anidats, en forma d'*arbre*.
      - Només pot haver-hi un element arrel (al principi de l'estructura).
      - Els elements han d'estar correctament anidats.
      - Els elements no es poden superposar, és a dir, que no podem tancar una etiqueta fins que no tanquem totes les que hem obert a dins.

## Què és un document XML ben format?

Un document XML es considera ben format quan compleix les següents regles sintàctiques definides per la W3C:

- **Pròleg**: Ha de tenir una declaració XML completa.
- **Element Arrel**: Només ha d'existir un únic element arrel que anide la resta d'elements.
- **Etiquetes**: Un element ha de començar i acabar amb la mateixa etiqueta.
- **Atributs**: Els valors dels atributs han d'anar entre cometes dobles ("") o simples ('').
- **Diferenciació entre Majúscules i Minúscules**: Cal tindre en compte que, **en XML, `<etiqueta>` no és el mateix que `<ETIQUETA>`**.

Veiem alguns exemples de documents XML que **no** estarien ben formats:

!!! alert "Exemple amb un error d'anidament"

    ```xml
    <?xml version="1.0" ?>
    <estudiant>
      <nom> Paco </nom>
      <poblacio> 
          <provincia> 
              Tavernes o València
          </poblacio>
      </provincia>
    </estudiant>
    ```

??? question "Com resoldries l'exemple anterior?"

    El document anterior és incorrecte perquè l’etiqueta <provincia> està tancada abans que l’etiqueta <poblacio>, la qual cosa no és vàlida en XML.

    Una solució sería:

      ```xml
      <?xml version="1.0" ?>
      <estudiant>
        <nom> Paco </nom>
        <poblacio> 
            <nom>
              Tavernes
            </nom>
            <provincia> 
                València
            </provincia>
        </poblacio>
      </estudiant>
      ```

      Podríem pensar també en la següent solució:

      ```xml
      <?xml version="1.0" ?>
      <estudiant>
        <nom> Paco </nom>
        <poblacio> 
              Tavernes
            <provincia> 
                València
            </provincia>
        </poblacio>
      </estudiant>
      ```

      La qual **no seria correcte segons les regles d'XML pur** (encar aque en HTML sí que s'accepten construccions similars). En XML, una etiqueta no pot tenir contingut de tipus text i altres etiquetes filles al mateix nivell. Així que, en aquest cas, no és vàlid tenir el text “Tavernes” i l’etiqueta `<provincia>` dins de `<poblacio>`.

!!! alert "Exemple amb múltiples arrels"

    ```xml
    <?xml version="1.0" ?>
    <estudiant>
      <nom> Paco </nom>
    </estudiant>
    <estudiant>
      <nom> Pepe </nom>
    </estudiant>
    ```

??? question "Com resoldries l'exemple anterior?"

    El document anterior és incorrecte conté dos elements arrel, concretament de tipus `<estudiant>`.

    És un cas que se'ns pot plantejar habitualment quan tenim una col·lecció d'elements iguals que volem representar en un document. La solució passa per afegir un element arrel únic (en aquest cas `<estudiants>`), que faça de de la col·lecció.

      ```xml
      <?xml version="1.0" ?>
      <estudiants>
        <estudiant>
          <nom> Paco </nom>
        </estudiant>
        <estudiant>
          <nom> Pepe </nom>
        </estudiant>
      </estudiants>
      ```

---
# Informació general del document
title: 5. Espais de noms
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

# Espais de noms en XML

Els espais de noms en XML són una recomanació del *W3C* per resoldre els conflictes que puguen aparéixer quan diferents vocabularis XML utilitzen els mateixos noms per a elements o atributs. Això es fa assignant un *espai semàntic* únic a cada vocabulari XML, evitant així ambigüitats.

Per tant, els objectius dels espais de noms són:

1. **Diferenciar elements i atributs** de vocabularis diferents que comparteixen el mateix nom però tenen significats diferents.
2. **Agrupar elements i atributs relacionats** d'un document XML perquè el programari els puga reconèixer fàcilment.

Per declarar un espai de noms, s'utilitza l'atribut `xmlns` en qualsevol element XML. Aquest atribut associa un prefix amb un URI (Uniform Resource Identifier) que actua com a identificador únic de l'espai de noms.

Veiem-ho amb un exemple:

```xml
<capital xmlns:capital="http://lmsgi/UD1/capital">
  <capital:pais>França</capital:pais>
  <capital:nom>París</capital:nom>
</capital>
```
En aquest exemple, el prefix `capital` s'associa amb l'URI `http://exempleLMI/capital`, i tots els elements que utilitzen aquest prefix pertanyen a aquest *espai de noms*.

Quins són doncs els beneficis de fer ús dels espais de noms? Principalmen dos:

- **Eviten conflictes de noms**, ja que permeten utilitzar els mateixos noms per a elements o atributs en diferents contextos sense ambigüitats.
- **Milloren l'organització**, ja que agrupen elements i atributs relacionats, facilitant la seva gestió i reconeixement pel programari.


!!! info "Un exemple pràctic"

    Suposem que volem representar en un mateix document alumnes i professor, els quals tenen en comú l'etiqueta *nom*. Per tal de diferenciar-los, fariem ús de dos espais de noms diferents:

      ```xml
        <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
        <comunitat_educativa xmlns:alumnes="http://exemplesLMI/alumnes" xmlns:professors="http://exemplesLMI/professors">
            <persona>
                <alumnes:nom>Paco</alumnes:nom>
            </persona>
            <persona>
                <alumnes:nom>Pepe</alumnes:nom>
            </persona>
            <persona>
                <professors:nom>Anna</professors:nom>
            </persona>
            <persona>
                <professors:nom>Maria</professors:nom>
            </persona>
        </comunitat_educativa>

      ```

      En aquest exemple, les etiquetes `<persona>` contenen noms que poden ser d’alumnes o professors, i els espais de noms s’utilitzen per diferenciar-los.


!!! question ""

    Revisa el fitxer [AndroidManifest.xml](recursos/AndroidManifest.xml) i intenta identificar algun espai de noms.---
# Informació general del document
title: 6. Altrers llenguatges de marques
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

A més d'XML i HTML, hi ha altres llenguatges de marques que són útils per a diferents aplicacions, especialment en la configuració i la serialització de dades. A continuació veurem alguns d'aquests llenguatges, com TOML i YAML, entre altres.

# TOML (Tom's Obvious Minimal Language)

**TOML** és un llenguatge de marques dissenyat per ser fàcil de llegir i escriure. Va ser creat per Tom Preston-Werner i està pensat per a la configuració de fitxers. La seva sintaxi és minimalista i clara, la qual cosa facilita la seva comprensió i ús.

Les principals característiques d'aquest llenguatge són:

- **Sintaxi clara i minimalista,** ja que utilitza parelles clau-valor, seccions i comentaris.
- **Tipus de dades suportats:** Inclou cadenes de text, números enters, en coma flotant flotant, valors lògics, dates i hores, així com col·leccions de dades.
- **Compatibilitat:** És fàcil de convertir a diverses estructures de dades en molts llenguatges de programació.

Veiem in exemple d'aquest:

```toml
# Aquest és un document TOML
[comunitat_educativa]

[[comunitat_educativa.alumnes.persona]]
nom = "Paco"

[[comunitat_educativa.alumnes.persona]]
nom = "Pepe"

[[comunitat_educativa.professors.persona]]
nom = "Anna"

[[comunitat_educativa.professors.persona]]
nom = "Maria"

```

# YAML (YAML Ain't Markup Language)

**YAML** és un llenguatge de serialització de dades, que a més té la capacitat de ser legible. Quan parlem de *serialització* fem referència a la transformació de les dades de les aplicacions, per tal de poder emmagatzemar-les o transmetre-les.

Aquest llenguatge és àmpliament utilitzat per a fitxers de configuració i en aplicacions on es necessita emmagatzemar o transmetre dades. La seva sintaxi és minimalista i utilitza la indentació per indicar la jerarquia.

Les principal característiques de YAML són:

- **Sintaxi llegible per humans:** Utilitza indentació per a la jerarquia i no requereix cometes per a la majoria de valors de cadena.
- **Tipus de dades suportats:** Inclou cadenes de text, números enters, en coma flotant, valors lògics, llistes i mapes associatius.
- **Compatibilitat:** És compatible amb molts llenguatges de programació i té suport per a la lectura i escriptura en molts editors de codi.

Veiem un exemple amb YAML:

```yaml
comunitat_educativa:
  alumnes:
    - persona:
        nom: "Paco"
    - persona:
        nom: "Pepe"
  professors:
    - persona:
        nom: "Anna"
    - persona:
        nom: "Maria"
```

# JSON (JavaScript Object Notation)

**JSON** és un format de text per a l'intercanvi de dades, fàcil de llegir i escriure per les persones i fàcil de tractar i generar pels ordinadors. És àmpliament utilitzat en aplicacions web per a la transmissió de dades entre el servidor i el client.

Les principals característiques de JSON són:

- **Sintaxi simple i llegible,** mitjançant parelles clau-valor i llistes d'elements.
- **Tipus de dades suportats:** Inclou cadenes de text, números, objectes, llistes, valors lògics i valors nuls.
- **Compatibilitat:** És un llenguatge natiu de JavaScript i té suport en molts altres llenguatges de programació.

Veiem un exemple:

```json
{
  "comunitat_educativa": {
    "alumnes": [
      {
        "persona": {
          "nom": "Paco"
        }
      },
      {
        "persona": {
          "nom": "Pepe"
        }
      }
    ],
    "professors": [
      {
        "persona": {
          "nom": "Anna"
        }
      },
      {
        "persona": {
          "nom": "Maria"
        }
      }
    ]
  }
}

```

Un altre llenguatge de marques molt interessant és Markdown, que estaria en la categoría de documents de marcat lleugers, i que veurem al següent i últim apartat.---
# Informació general del document
title: 7. Markdown
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
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
header-left: U1
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

# Introducció a Markdown {#introduccio}

Markdown és un **llenguatge de marques lleuger**, pensat per tal d'escriure documentació fent ús d'un format de text pla, fàcil d'escriure i de llegir, i que puga convertir-se a altres formats, com HTML, epub o pdf de forma senzilla.

!!! note ""
    El llenguatge Markdown va ser creat per John Gruber, amb la finalitat d'aconseguir la màxima legibilitat i facilitat de publicació, i es va inspirar en moltes convencions existents per al marcat de misstges de correu electrònic utilitzant text pla. Segon John Gruber *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s’ha marcat amb etiquetes o instruccions de format.* 

Actualment, Markdown s'utilitza en molts àmbits, especialment en la generació de documentació i contingut web, en llocs com Github, o sistemes de gestió de continguts com Jekyll, Hugo o Gitbook.

!!! note ""

    La versió original de Gruber podríem dir que és el format estàndard. Aporta format de text (negretes i cursives), així com marques de continguts (títols, imatges, enllaços, cites, línies horitzontals o blocs de codi), llistes ordenades i desordenades, etc.

    A banda d'aquesta versió original, han anat apareixent diverses variants, entre les que podem destacar:

    * **CommonMark**: Variant centrada en la conversió a HTML.
    * **Github Flavored Markdown**: Markdown utilitzat a la plataforma d'allotjament de projectes Github, que afig sintaxi relacionada amb el contingut relatiu al control de versions, revisions, etc.
    * **Multimarkdown**, Variant que afig altres funcionalitats i continguts,
    * **Pandoc Markdown**: Variant basada en l'estàndard, però amb extensions que ens permeten afegir marques d'altres variants, i que incorpora diverses millores. Aquesta serà la versió que utilitzem quan utilitzem *Pandoc* per a la generació de documents.

# Sintaxi de Markdown

Com hem dit, Markdown es basa en fitxers de tipus text, que no contenen cap informació *interna* sobre el format. Aquesta informació, s'especificarà de forma explícita mitjançant etiquetes, que seran visibles en tot moment, i que facilitaran, per una banda la seua interpretació a l'hora d'exportar-los a altre format, però també la seua lectura per part de les persones.

En aquet apartat, anem a veure quins són els diferents elements que podem utilitzar en un text en format Markdown, així com les principals marques de format.

## Paràgrafs

Un paràgraf, tal i com l'entén Markdown, és un bloc de text definit entre **dos salts de línia** (tecla `Intro/Enter/Entrar`). 

Si utilitzem només un salt de línia, es sobreentén que és el mateix paràgraf, i a l'hora de generar el document, el veurem com a tal.

Si el que desitgem, per altra banda és afegir només un salt de línia a la meitat d'un paràgraf, afegirem almenys dos espais al final de la línia, i ara sí que utilitzarem un (només un) salt de línia.

Veiem-ho amb algun exemple:

```markdown
Aquest és el primer paràgraf, com veieu, necessita dos salts de línia, o el que sería el mateix, una línia en blanc després del paràgraf.

Aquest és un altre paràgrar,   
en el que hem forçat salts de línia,    
i encara que no es veja, aquestes línies  
acaben amb dos o més espais en blanc.
```    

## Capçaleres

Hi ha diverses formes de marcar capçaleres:

* Utilitzant al menys un símbol `=`o `-` després del text per indicar capçaleres de primer i segon nivell:

```markdown
Açò sería una capçalera de primer nivell
========================================

Açò sería una capçalera de segon nivell
---------------------------------------

Recordeu que només cal un = o un -, encara que se'n poden utilitzar més, com és el cas d'aquest exemple, on s'han utilitzat tants símbols com longitud té el títol.
```

* Utilitzant l'**Estil ATX**, al qual, utilitzem el símbol `#` abans del text per indicar el nivell de la capçalera. S'admeten fins a sis nivells de profunditat (`######`).

```markdown

# Capçalera de primer nivell

## Capçalera de segon nivell nivell

### Capçalera de tercer nivell nivell

...

###### Capçalera de nivell 6
```

!!! note "A tenir amb compte"
    La versió estàndard de Markdown no requereix d'una línia en blanc abans d'una capçalera, però d'altres versions, com per exemple la de *Pandoc* sí que la requereix. No obstant això, encara que l'estàndard no ho utilitze, convé afegir-la ja que facilita així la lectura i localització d'aquestes.

    Algunes implementacions, tampoc requereixen d'un espai entre el símbol `#` inicial i el primer caràcter del títol. *Pandoc* sí que demana aquest espai, de manera que podem posar un `#hastag` al principi d'un paràgraf sense que l'interprete com una capçalera.
    
### Atributs a la capçalera

Quan es genera un document, ja siga PDF, HTML o altre format a partir d'un document en Markdown, a les capçaleres se'ls assigna un identificador de manera automàtica, per a que es puga fer referència a elles des d'altres parts del document. Aquest identificador s'obté a partir del text de la capçalera, pel que si aquesta és llarga, l'identificador també ho serà. La versió de Pandoc, ens permet afegir certs atributs a les capçaleres, entre les que es troba l'identificador. 

Veiem-ho amb un exemple. Donada, per exemple la primera capçalera d'aquest document:

```markdown
#  Introducció a Markdown
```

L'identificador que es genera és: `id="introducció-a-markdown"`. 

Aquesta capçalera, la podriem haver escrit també de la següent forma:

```markdown
# Introducció a Markdown { #introduccio }
```

Sent l'identificador de la capçalera només `#introduccio`, de manera que podem fer referència a l'apartat mitjançant aquest.

## Formatació de text

Markdown ens permet fer ús del símbol de l'asterisc com a marca de format per tal d'indicar textos tant en cursiva, com en negreta o ambdós. Per a això farem ús d'ún, dos o tres asteriscs al principi i al final del text que volem remarcar. A més, cal tindre en compte que **no hem d'afegir cap espai entre els asteriscs del principi i la primera paraula i els asteriscs del final i la última.**

Veiem-ho amb exemples:

```markdown
Amb un asterisc marquem un *text en cursiva*
Amb dos asteriscs marquem un **text en negreta** 
Amb tres asteriscs marqiem un ***text en cursiva i negreta***

En canvi, si afegim algun espai entre mig, ** no s'interpretarà correctament**
```

Resultat:

Amb un asterisc marquem un *text en cursiva*  
Amb dos asteriscs marquem un **text en negreta**   
Amb tres asteriscs marqiem un ***text en cursiva i negreta***

En canvi, si afegim algun espai entre mig, ** no s'interpretarà correctament**


## Línies horitzontals

Una línia horitzontal es defineix mitjançant tres o més símbols `*`, `-` o `_`, separats o no per espais:

```markdown
- - -

* * *

_ _ _
```

Resultat:

- - -

* * *

_ _ _


## Llistes

Markdown permet fer ús tant de llistes ordenades com llistes no ordenades.

### Llistes no ordenades

Les llistes no ordenades es marquen fent ús dels símbols `*`, `+` o `-` al principi de cada element, i incloent cada ítem en una línia diferent (i no fan falta dos salts de línia).

```markdown
* Element 1
* Element 2
...
```

Cada element de la llista pot contindre diversos paràgrafs, i altres continguts a nivell de bloc. Quan volem incloure diversos paràgrafs a un ítem de la llista, el segon paràgraf i posterior hauran d'anar **precedits per una línia en blanc, i sagnats per aliniar-se amb el contingut que no siga l'espai després del marcador de la llista**.

Per exemple:

```
* Primer element de la llista
* Segon element de la llista

  Altre paràgraf corresponent al segon element de la llista.
  No cal un espai en blanc entre l'últim paràgraf i el següent element,
  però el podem afegir per facilitar la lectura de la llista.

* Tercer element de la llista.
```

Una llista pot contindre dins altres llistes. En aquest cas, podem o no incloure una línia en blanc al davant. Per utilitzar una llista dins d'una altra només haurem de *sagnar* la llista que està dins l'altra per aliniar-la amb el primer caràcter de text de l'element que la conté. Podem tindre tantes llistes dins d'altres com volguem.

```markdown
* Element 1
  * subelement 1.1
    * subelement 1.1.1
    * subelement 1.1.2
  * subelement 1.2
  * subelement 1.3
* Element 2
```

En aquests casos, com que podem utilitzar diversos símbols per indicar llistes, se sol utilitzar un element per cada nivell de la llista, amb la finalitat de facilitar la lectura del text pla:

```markdown
* Element 1
  + subelement 1.1
    - subelement 1.1.1
    - subelement 1.1.2
  + subelement 1.2
  + subelement 1.3
* Element 2
```

Resultat:

* Element 1
  + subelement 1.1
    - subelement 1.1.1
    - subelement 1.1.2
  + subelement 1.2
  + subelement 1.3
* Element 2

### Llistes ordenades

El funcionament de les llistes ordenades és el mateix que les no ordenades, llevat que cada element de la llista porta un número en lloc d'una *vinyeta*.

En la versió estàndard de Markdown els elements que indiquen l'ordre han de ser **números decimals seguits d'un punt i un espai**. En l'estàndard, **aquests números s'ignoren**, pel que la llista:

```markdown
1. Element 1
2. Element 2
3. Element 3
```

Serà la mateixa que:

```markdown
4. Element 1
5. Element 2
6. Element 3
```

El Markdown de Pandoc, afig un parell d'extensions a aquesta forma d'utilitzar les llistes ordenades.

En primer lloc, a més de números, permet marcar els elements d'una llista ordenada amb lletres majúscules, minúscules o números romans. Per a això utilitzarem com a marcadors de llista la lletra entre parèntesi o bé només amb el parèntesi dret, seguit d'almenys un espai. També podem utilitzar el punt, però en aquest cas, afegint dos espais com a mínim rere el punt en lloc d'un.

Per exemple:

```markdown
(A) Element 1
(B) Element 2

A) Element 1
B) Element 2

I.  Element 1, amb dos espais mínims després del punt
II.  Element 2, amb dos espais mínims després del punt
```

## Llistes de tasques

Una extensió més que afigen algunes versions de Markdown a l'estàndard és la possibilitat d'utilitzar llistes de tasques, introduïdes al Markdown de Github.

Per utilitzar aquest tipus de llistes utilitzem el guió com a marcador de llista seguit d'un espai i les seqüències de caràcters `[ ]`i `[x]` per indicar un element de llista no marcat i marcat respectivament. Per exemple:


```markdown
- [ ] Element de llista com a tasca sense marcar
- [x] Element de llista com a tasca marcada.
```

Obtindría com a resultat:

- [ ] Element de llista com a tasca sense marcar
- [x] Element de llista com a tasca marcada.

## Taules

Les taules ens serveixen per tal de presentar informació de manera organitzada.

La versió original de Markdown de John Gruber no inclou la definició de taules en la sintaxi de Markdown. Com que inicialment es va concebir com una eina per fer la conversió a HTML, per afegir taules s'utilitzava directament aquest llenguatge.

No obstant això, les diferents variants de Markdown han anat afegint notacions i extensions al Markdown original per suportar taules.

La sintaxi per crear taules del Markdown de Github és una de les més esteses, i fa ús de barres verticals (`|`) i guions (`-`) per crear les taules. Els guions s'utilitzen per creat l'encapçalament de cada columna, i les barres verticals serveixen de separador de cada columna. A més, per a que la taula es represente correctament, cal una línia en blanc abans de la taula.

Les taules, en aquest format **han de tindre necessàriament una capçalera i un cos**, i seguiran la següent sintaxi:

```markdown
| Capçalera 1 | Capçalera 2 |
|-------------|-------------|
| Valor 1     | Valor 2     |
| Valor 3     | Valor 4     |
```
Que té com a resultat:

 Capçalera 1 | Capçalera 2 
-------------|-------------
 Valor 1     | Valor 2     
 Valor 3     | Valor 4    

  

Algunes consideracions:

* Podem afegir tants camps (columnes) com volguem. 
* La línia que separa la capçalera del cos `|---|---|` és obligatòria, però no és necessari que tinga tants caràcters com tinguen les capçaleres, pel que no cal que la taula estiga completament aliniada. 
* Les barres verticals (`|`) del principi i del final són opcionals.

### Formatat el contingut d'una taula

Dins una taula podem utilitzar també certes marques de format, com negretes, cursives, enllaços, imatges...

A més, podem aliniar el text a l'esquerra, a la dreta o al centre de la columna, afegint la marca dos punts `:`, al costat esquerra, dret, o als dos, dels guions de l'encapçalament.

Veiem-ho amb un exemple. La següent definició de taula:

```markdown
| Text a l'esquerra | Text centrat | Text a la dreta |
|        :---       |     :---:    |      ---:       |
| xxx               | xxx          | xxx             |
| xxxxx             | xxxxx        | xxxxx           |
```

Té el següent resultat:

| Text a l'esquerra | Text centrat | Text a la dreta |
|        :---       |     :---:    |      ---:       |
| xxx               | xxx          | xxx             |
| xxxxx             | xxxxx        | xxxxx           |


!!! note ""
   Si el que volem és afegir dins una taula una barra vertical com a contingut, hem de posar abans el símbol `\`, per indicar que el caràcter següent no s'ha d'interpretar com a marca de format Markdown. Aquesta barra invertida s'anomena caràcter d'*escapament*, i a la combinació d'ella amb qualsevol marca que volguem que no s'interprete es coneix com *seqüència d'escapament*.
    
### Fragments de codi

Markdown té un ampli ús en la documentació tècnica de projectes informàtics, on és habitual incloure fragments del codi font dels programes. Per tal de ressaltar aquests tipus de fragments, Markdown utilitza una sintaxi especial, fent ús dels caràcters de l'accent obert: \`.

Quan es tracta de fragments de codi que han d'anar en la mateixa línia que el text, per exemple si volem indicar una etiqueta HTML, ho fem, \`d'aquesta manera\`, fent ús d'un únic caràcter d'accent, mentre que si el que volem és escriure un bloc de codi, utilitzaríem tres símbols d'accent obert \`\`\`. A més, rere els primers símbols, podem especificar de quin llenguatge es tracta. Per exemple, per indicar el codi HTML d'una pàgina web, faríem:

```markdown
 ```html
 <html>
  <body>
    <h1>Títol de la pàgina web</h1>
    <p>Paràgraf</p>
  </body>
 </html>
 ```
```


Que ens generaría:

```html
<html>
  <body>
    <h1>Títol de la pàgina web</h1>
    <p>Paràgraf</p>
  </body>
</html>
```

Cal remarcar que el nom del llenguatge rere les cometes fa que al mostrar el resultat, es tinga en compte el llenguatge de programació per tal de ressaltar-ne la sintaxi pròpia del llenguatge.

## Cites

En Markdown un bloc de text en forma de cita consisteix en un o més paràgrafs o altres elements de bloc (com per exemple llistes o capçaleres), on cada línia es troba precedira del caràcter `>` i opcionalment un espai.

Veiem alguns exemples:

**Exemple 1**:

```markdown
    > *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s'ha marcat amb etiquetes o instruccions de format.*
    > John Gruber
```

Genera el següent:

> *Un document amb format Markdown hauria de ser publicable tal qual, com a text pla, sense que semble que s’ha marcat amb etiquetes o instruccions de format.*
> John Gruber


**Exemple 2**

El següent contingut:

```markdown
    > # Títol de la cita
    > Una cita també por contindre altres elements de bloc, com ara:
    > - llistes
> - capçaleres
> - imatges
```

Genera:

> # Títol de la cita
> Una cita també por contindre altres elements de bloc, com ara:
> - llistes
> - capçaleres
> - imatges

A més, podem afegir cites dins d'altres. Amb:

```markdown
    > Paràgraf de la cita.
    > > Cita dins la cita
```

Generem el següent:

> Paràgraf de la cita.
> > Cita dins la cita
    
Per altra banda, podem especificar les cites de forma *mandrosa*, afeging només el caràcter `>` en la primera línia de cada bloc:

```markdown
> Aquesta és una cita, dins un
paràgragraf de dos línies.
```

Tot i ser possible, aquesta opció no és massa recomanada perquè lleva legibilitat al text en cru. 

## Enllaços

Markdown ens permet generar enllaços tant a adreces d'Internet, com fer referència a fitxers locals, mitjançant la seua ruta relativa o fins i tot dins el propi doument.

El format general per afegir un enllaç és el següent:

```
[Text de l'enllaç](URL_o_adreça_relativa)
```

Per exemple, per afegir un enllaç a un lloc web, escriurem:

```
Aci afegim un [enllaç a la web de l'insitut](http://ieseljust.com/)
```

Que genera:

Aci afegim un [enllaç a la web de l'insitut](http://ieseljust.com/)

Per tal d'afegir un enllaç a una seccíó del nostre document, farem ús de l'identificador que s'assigna automàticament, o bé que li hem assignat nosaltres. Per exemple, si per a l'apartat introductori vam afegir un identificador de la següent forma:

```markdown
# Introducció a Markdown {#introduccio}
```

Podem fer referència a ell de la manera següent:

```markdown
Feu click [al següent enllaç](#introduccio) per tornar a la secció d'Introducció.
```
Que generaría:

Feu click [al següent enllaç](#introduccio) per tornar a la secció d'Introducció.


## Imatges

La sintaxi per afegir una imatge és semblant a la de l'enllaç, predecida d'una exclamació `!`:

```
![Text alternatiu o peu de la imatge](Ubicació de la imatge)
```

A l'igual que els enllaços, la ubicació pot ser una adreça d'Internet o bé la ruta a un fitxer local al nostre ordinador:

```markdown
![Logotip de Markdown a la Wikipèdia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png)

![Logotip de l'institut](imatges/logo.svg)
```

En aquest segon cas, busca la imatge *logo.svg* en una carpeta *imatges* ubicada a la mateixa carpeta on es troba el nostre arxiu de text Markdown.

### Afegint tamany a les imatges

Algunes versions de Markdown a més permeten afegir certs atributs a les imatges. Entre aquests  destaquen especialment `width` i `height`, que permeten especificar la grandària de la imatge. 

Si no s'indica res, el tamany s'entén que s'especifica en píxels, però podem utilitzar altres unitats com *px, cm, mm, in, inch i %*, sense incloure espais entre el número i les unitat. 

Veiem alguns exemples:

```markdown
![Imatge 1 - 100px](recursos/logo.svg){ width=100px }

![Imatge 2 - 30%](recursos/logo.svg){ width=30% }
```

Que generen el següent:

![Imatge 1 - 100px](recursos/logo.svg){ width=100px }

![Imatge 2 - 50%](recursos/logo.svg){ width=30% }

!!! note "Referències i informnació addicional"

    Per a més informació sobre Markdown podeu consultar:

    * La guía de markdown en espanyol: [https://markdown.es/](https://markdown.es/) 
    * La sintaxi estesa de markdown a la web: [https://www.markdownguide.org/extended-syntax](https://www.markdownguide.org/extended-syntax)
    * La secció dedicada a Markdown al [Manual de Pandoc](https://pandoc.org/MANUAL.html#pandocs-markdown)
    * L'article de John Gruber [sobre la seua versió de Markdown](https://daringfireball.net/projects/markdown/syntax).
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
</style>



# UD1. Característiques dels llenguatges de marques

Benvinguts a la unitat didàctica sobre les característiques dels llenguatges de marques. En aquesta unitat, explorarem els diferents tipus de llenguatges de marques, les seues característiques, àmbits d'aplicació, estructura, sintaxi, eines d'edició, i com elaborar documents ben formats utilitzant espais de noms.

[Comencem!](1.classificacio.md){ .md-button .centrat }---
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


Benvinguts a la unitat didàctica sobre les característiques dels llenguatges de marques. En aquesta unitat, explorarem els diferents tipus de llenguatges de marques, les seues característiques, àmbits d'aplicació, estructura, sintaxi, eines d'edició, i com elaborar documents ben formats utilitzant espais de noms.

# Resultats d'aprenentatge

* **RA1**. Reconeix les característiques de llenguatges de marques analitzant i interpretant fragments de codi.

# Criteris d'avaluació 

* **RA1.a)** S'han identificat les característiques generals dels llenguatges de marques.
* **RA1.b)** S'han reconegut els avantatges que proporcionen en el tractament de la informació.
* **RA1.c)** S'han classificat els llenguatges de marques i identificat els més rellevants.
* **RA1.d)** S'han diferenciat els seus àmbits d'aplicació.
* **RA1.e)** S'han reconegut la necessitat i els àmbits específics d'aplicació d'un llenguatge de marques de propòsit general.
* **RA1.f)** S'han analitzat les característiques pròpies de diferents llenguatges de marques.
* **RA1.g)** S'ha identificat l'estructura d'un document i les seues regles sintàctiques.
* **RA1.h)** S'ha contrastat la necessitat de crear documents ben formats i la influència en el seu processament.
* **RA1.i)** S'han identificat els avantatges que aporten els espais de noms.



[Comencem!](1.classificacio_característiques.md){ .md-button .centrat }