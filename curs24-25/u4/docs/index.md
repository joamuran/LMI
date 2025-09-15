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


Avui dia, la quantitat de documents i dades que es comparteixen en tots els àmbits és molt elevada, així com els diferents formats i representacions d'aquesta.

Un flux de treball habitual en una empres que treballa amb grans volums de dades necessita, en primer lloc, obtenir aquestes dades, generalment de bases de dades en diferents formats; després realitza un processament d'aquestes, per tal de comprovar que siguen correctes, i finalment, genera uns documents (PDF, HTML, etc.) per a la seua distribució.

Així, per tal d'assegurar una comunicació eficaç necessitem que:

* Les dades siguen **íntegres**, i no falte informació que s'espera. Això requereix d'una validació prèvia, que es realitza en base a certes regles. Aquestes regles vindran marcades per diferents esquemes, com els DTD o els XSD.
* Les dades siguen **compatibles** entre diferents sistemes i estàndards,
* I han de ser **eficaces**, de manera que puguem *transformar* els documents per presentar-los en altre format (PDF, HTML...) per facilitar l'accés ràpid a la informació i optimitazr processos com la impressió.

En aquesta unitat veurem tant mecanismes per descriure i validar tipus de documents com la transformació entre formats.

# Resultats d'aprenentatge

* **RA4**. Estableix mecanismes de **validació** de documents per a l'intercanvi d'informació utilitzant mètodes per definir la seua sintaxi i estructura.
* **RA5**. Realitza **conversions** sobre documents per a l'intercanvi d'informació utilitzant tècniques, llenguatges i eines de processament.

# Criteris d'avaluació

* **RA4.a)** S'ha establert la necessitat de descriure la informació transmesa en els documents i les seues regles.
* **RA4.b)** S'han identificat les tecnologies relacionades amb la definició de documents.
* **RA4.c)** S'ha analitzat l'estructura i sintaxi específica utilitzada en la descripció.
* **RA4.d)** S'han creat descripcions de documents.
* **RA4.e)** S'han utilitzat descripcions en l'elaboració i validació de documents.
* **RA4.f)** S'han associat les descripcions amb els documents.
* **RA4.g)** S'han utilitzat eines específiques.

* **RA5.a)** S'ha identificat la necessitat de la conversió de documents per a l'intercanvi de la informació.
* **RA5.b)** S'han establert àmbits d'aplicació.
* **RA5.c)** S'han analitzat les tecnologies implicades i el seu mode de funcionament.
* **RA5.d)** S'ha descrit la sintaxi específica utilitzada en la conversió i adaptació de documents per a l'intercanvi d'informació.
* **RA5.e)** S'han creat especificacions de conversió.
* **RA5.f)** S'han identificat i caracteritzat eines específiques relacionades amb la conversió de documents per a l'intercanvi d'informació.
* **RA5.g)** S'han realitzat conversions sobre documents per a l'intercanvi d'informació.



[Comencem!](1.validacio.md){ .md-button .centrat }