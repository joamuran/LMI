# Desenvolupament del Sprint 1: Consulta del catàleg de pizzes

## Introducció

En aquest primer sprint s'ha implementat la funcionalitat de **consulta del catàleg de pizzes** d'una pizzeria. L'objectiu principal era permetre que els usuaris consultaren les pizzes disponibles mitjançant una interfície web basada en **WebComponents**.

Aquest sprint es basa en la [descripció funcional i els diagrames UML definits en la fase de disseny](https://joamuran.net/curs24_25/edd/u5/Sprint1_Pizzes/). Veiem les implementacions clau i la relació amb el model definit prèviament.


## Objectius i funcionalitats desenvolupades

En aquest sprint s'ha implementat:

- **La consulta de pizzes mitjançant una API REST.**
- La **renderització de pizzes en la interfície** amb WebComponents.
- S'ha **Modularitzat el codi** per a una fàcil extensió en futurs sprints.

## Implementació

### Estructura de carpetes del projecte

El projecte té la següent estructura de carpetes:

```text
.
├── img
│   └── ...
├── index.html                      // Pàgina principal
└── js
    ├── components                  // WebComponents
    │   ├── LlistaAlergens.js
    │   └── pizzaCard.js
    ├── main.js                     //Script principal
    ├── models                      // Capa de models del domini
    │   └── pizza.js
    └── services                    // Capa de serveis
        └── pizzaService.js
```

Com veiem, tenim diverses carpetes amb un propòsit diferent. Tot i que ho veurem més endavant, la forma en què organitzem els diferents mòduls del nostre projecte determinarà el que es coneix com l'arquitectura de la nostra aplicació. En aquest cas, estem seguin una arquitectura basada en components, inspirada en el model CLEAN, on cada part de l'aplicació té una responsabilitat clara:

* **Models (`models/`):** Defineixen les estructures de dades com pizza.js.
* **Components (`components/`):** Representen la interfície d'usuari amb WebComponents (PizzaCard.js).
* **Serveis (`services/`):** Gestionen la comunicació amb la API (PizzaService.js).
* **Capa d'orquestració (`main.js`)**: Inicia l'aplicació i connecta els components.

Més endavant incorporarem altres capes a aquesta arquitectura, la qual facilita la modularitat i l'escalabilitat, assegurant que cada component tinga una funció ben definida i reutilitzable.

### **Comunicació amb el servidor: `PizzaService.js`**

El mòdul `PizzaService.js` encapsula la lògica per obtindre la llista de pizzes des del servidor mitjançant una crida a una API REST:

```javascript
import  { Pizza } from '../models/pizza.js';

export class PizzaService {
    static API_URL = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes';
    
    static async getAllPizzes() {
        const resposta = await fetch(this.API_URL);
        
        if (!resposta.ok) throw new Error('No s\'han pogut carregar les pizzes');
        const dadesPG = await resposta.json();
        const dades=dadesPG.records;

        // Llista de pizzes
        const pizzes = [];

        // Recorrem les dades i generem la llista de pizzes
        for (let i = 0; i < dades.length; i++) {
            const pizza = new Pizza(dades[i]);
            pizzes.push(pizza);
        }

        return pizzes;

        
    }
}
```

Aquesta classe s'encarrega de consultar la informació de l'API, i transformar la resposta (un JSON) en una llista de pizzes.

En relació amb els diagrames UML, aquest mètode es correspon amb la classe `PizzaService` definida al diagrama de classes.

---

### **Representació d'una pizza: `PizzaCard.js`** i `LlistaAlergens.js`

Cada pizza es representa amb un WebComponent `PizzaCard`, que rep les dades d'una pizza i les mostra dinàmicament en la interfície:

```javascript
// components/PizzaCard.js
import './LlistaAlergens.js';

    class PizzaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.serverURL="https://pizza-rest-server-production.up.railway.app/";
    }

    connectedCallback() {

        // Funció del cicle de vida que s'invoca quan el component s'afig al DOM
        // Aci agafem els atributs

        const nom = this.getAttribute('pizza-nom') || 'Pizza desconeguda';
        const preu = this.getAttribute('pizza-preu') || '0.00';
        const img = this.serverURL+this.getAttribute('pizza-img') || '';
        const desc = this.getAttribute('pizza-desc') || '';
        const id = this.getAttribute('pizza-id') || '';
        const vegetariana = this.getAttribute('pizza-vegetariana') || '';
        const alergens = this.getAttribute('pizza-alergens') || '';

        this.shadowRoot.innerHTML = `
           ...`

    }
}

customElements.define('pizza-card', PizzaCard);

```

Recordem que `PizzaCard` es va definir en el diagrama de classes com a WebComponent per visualitzar en forma de targeta la informació sobre la pizza.

!!!note "Sobre la llista d'alergens"
    L'etiqueta `<pizza-card>` conté dins una etiqueta/component `<llista-alergens>`, per mostrar la llista d'alergens, que li proporcionem a través de l'atribut `pizza-alergens`.

    Com veieu, aquest component no s'ha reflexat al diagrama de classes (encara que després apareix al diagrama de seqüència). El motiu per no representar-lo és perquè es tracta només d'un element d'interfície, i no té un pes excessiu en l'arquitectura del sistema. Si aquest tinguera una lògia pròpia  (com per exemple, processar o filtrar al·lèrgens), sí que caldria incorporar-lo al diagrama de classes.

    Per altra banda, aquest component sí que apareix al diagrama de seqüència, per reflexar el procés de generació de les targetes per mostrat pizzes.

### 🔹 **Gestió dinàmica del catàleg: `main.js`**

El fitxer `main.js` gestiona la càrrega de dades i la creació dinàmica de les targetes de pizza en el DOM. En primer lloc, obté a partir del servei que acedeix a l'API la llista de pizzes, i després, per a cada pizza va generant els cards i afegint-los al seu lloc en l'HTML (observeu la seua relació amb el diagrama de seqüència)

```javascript
// Imoportem els components
import './components/pizzaCard.js';

// Importem el servei
import { PizzaService } from './services/pizzaService.js';

document.addEventListener('DOMContentLoaded', async () => {

    try {
        const pizzes = await PizzaService.getAllPizzes();
        const llista = document.getElementById('llista-pizzes');

        pizzes.forEach(p => {
            const pizzaElement = document.createElement('pizza-card');
            pizzaElement.setAttribute('pizza-id', p.id);
            pizzaElement.setAttribute('pizza-desc', p.desc);
            // Resta d'atributs...

            llista.appendChild(pizzaElement);
        });
    } catch (error) {
        console.error('Error carregant les pizzes:', error);
    }
});
```
