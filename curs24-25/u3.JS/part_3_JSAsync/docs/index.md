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

Ara que ja sabem realitzar modificacions al DOM i treballar amb formularis, anem a introduir alguns aspectes més avançats sobre Javascript: l'asincronisme.

Sovint, un document web necessita informació que es troba allotjada al servidor per completar la construcció de la pàgina. Aquestes operacions no són immediates, i per tal d'evitar esperes que poden donar una mala experiència d'usuari, Javascript permet llançar la petició, i reaccionar quan es rep la resposta.

# Resultats d'aprenentatge

* **RA3**. Accedeix i manipula documents web utilitzant llenguatges de script de client.

# Criteris d'avaluació 

* **RA3.a)** S'han identificat i classificat els llenguatges de script de client relacionats amb la web i les seues diferents versions i estàndards.
* **RA3.b)** S'ha identificat la sintaxi bàsica dels llenguatges de script de client.
* **RA3.c)** S'han utilitzat mètodes per a la selecció i accés dels diferents elements d'un document web.
* **RA3.d)** S'han creat i modificat elements de documents web.
* **RA3.e)** S'han eliminat elements de documents web.
* **RA3.f)** S'han realitzat modificacions sobre els estils d'un document web.

[Comencem!](1.intro.md){ .md-button .centrat }

<!-- 

Per a organitzar tot el material i activitats que proposes, podem dividir el contingut en seccions progressives, de manera que els alumnes puguen anar assimilant els conceptes i aplicant-los en exercicis pràctics. Ací tens una proposta d'organització:

---

### **1. Introducció al JavaScript asíncron**
- **Objectiu**: Entendre com funciona l'asíncron en JavaScript per gestionar operacions com l'accés a APIs.
- **Contingut a incloure**:
  - Callbacks: introducció i problemes (callback hell).
  - Promeses (`Promise`): sintaxi bàsica (`then`, `catch`).
  - `async/await`: simplificació de codi asíncron.
  - Exercicis:
    - Fer ús de `setTimeout` per crear una seqüència d'operacions simulades.
    - Crear una promesa que simule la resposta d'un servidor i consumir-la amb `then` i `async/await`.

---

### **2. Treballar amb APIs REST**
- **Objectiu**: Aprendre a consumir APIs REST per obtenir dades i generar contingut dinàmic.
- **Contingut a incloure**:
  - Explicació de com funciona una API REST (mètodes HTTP: `GET`, `POST`, `PUT`, `DELETE`).
  - La funció `fetch`: com fer peticions i manejar respostes (JSON, errors).
  - Exercicis:
    - Accedir a una API pública (p. ex., [OpenWeather](https://openweathermap.org/api)).
    - Mostrar dades senzilles al DOM, com la previsió meteorològica.

---

### **3. Generació dinàmica de contingut amb el DOM**
- **Objectiu**: Fer ús de la informació rebuda per l'API per modificar el DOM.
- **Contingut a incloure**:
  - Repassar com generar elements dinàmicament (`document.createElement`, `appendChild`, `innerHTML`).
  - Exercici:
    - Consumir l'API de la pizzeria i mostrar el menú de pizzes en una llista dinàmica.
    - Mostrar una taula amb informació de les pizzes.

---

### **4. Formularis i gestió del carret**
- **Objectiu**: Gestionar un carret de compra amb interacció de l'usuari.
- **Contingut a incloure**:
  - Crear formularis per seleccionar pizzes i afegir-les al carret.
  - Utilitzar esdeveniments (`addEventListener`) per gestionar clics, submits, etc.
  - Exercici:
    - Afegir funcionalitat al botó "Afegir al carret" perquè les pizzes seleccionades es mostren al carret (una taula o llista dinàmica).
    - Calcular el total del carret.

---

### **5. Autenticació local i registre**
- **Objectiu**: Crear un sistema bàsic de registre i autenticació d'usuaris per simular una experiència completa.
- **Contingut a incloure**:
  - Introduir la idea d'emmagatzematge local (`localStorage` o `sessionStorage`) com una alternativa bàsica a un servidor.
  - Formulari per al registre i login.
  - Exercici:
    - Crear un formulari de registre que guarde dades en `localStorage`.
    - Validar dades d'usuari al login abans de permetre realitzar un encàrrec.

---

### **6. Introducció a Web Components**
- **Objectiu**: Modularitzar el codi de la pizzeria amb Web Components.
- **Contingut a incloure**:
  - Crear components reutilitzables, com una targeta per a cada pizza o el resum del carret.
  - Exercici:
    - Implementar un component `pizza-card` que mostre la informació de cada pizza.
    - Crear un component per al carret que calcule i mostre el total.

---

### **7. Opcional: Backend amb ExpressJS o Servidor Java**
- **Objectiu**: Introduir breument com interactuar amb un servidor real.
- **Contingut a incloure**:
  - Configuració bàsica d'un servidor local amb ExpressJS o el servidor Java.
  - Consumir els endpoints de l'API de la pizzeria per obtenir i enviar dades.
  - Exercici:
    - Implementar el registre i login amb l'API real.
    - Enviar l'encàrrec al servidor i mostrar una confirmació.

---

### **Recursos i enllaços útils**
- **Documentació oficial**:
  - [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- **Tutorials**:
  - [Introduction to Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
  - [ExpressJS Getting Started](https://expressjs.com/en/starter/installing.html)

-->