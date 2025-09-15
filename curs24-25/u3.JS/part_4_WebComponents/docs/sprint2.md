# Desenvolupament de l'Sprint 2: Consulta del catàleg de pizzes

## Introducció

En aquest segon sprint s'ha implementat la funcionalitat de **consulta del catàleg d'entrants** de la pizzeria. L'objectiu principal era permetre que els usuaris consultaren els entrants disponibles, seguint la mateixa estructura de desenvolupament utilitzada en el Sprint 1 per a les pizzes.

Aquesta implementació es basa en la [descripció funcional i els diagrames UML definits en la fase de disseny](https://joamuran.net/curs24_25/edd/u5/8.Sprint2/).

## Objectius i funcionalitats desenvolupades

En aquest sprint s'ha implementat doncs la funcionalitat de **consulta d'entrants mitjançant una API REST.** i la seua **Renderització en la interfície** mitjançant WebComponents, tot **mantenint la mateixa estructura modular que en la fase anterior** per tal de facilitar la reutilització de codi.

A més, en aquest *sprint* s'ha incorporat una llibreria de componens pe tal d'estructurar la interfície, s'ha afegit el component *CounterComponent* per afegir un comptador i gestionar la quantitat d'entrants i pizzes per a una futura comanda, i s'ha refactoritzat  (reorganitzat el codi per extraure funcionalitats comunes) *PizzaCard* i *EntrantCard*, obtenint la classe *CardComponent* amb la funcionalitat comuna.

## Implementació

### **Estructura de carpetes del projecte**

El projecte manté la mateixa estructura de carpetes que en Sprint 1, afegint nous components i serveis:

```text
.
├── img
│   └── ...
├── index.html
└── js
    ├── components
    │   ├── CardComponent.js        // Component amb característiques comunes a les targetes
    │   ├── CounterComponent.js     // Comptador de productes
    │   ├── entrantCard.js
    │   ├── LlistaAlergens.js
    │   └── pizzaCard.js
    ├── libcomponents               // Llibreria de components genèrics
    │   ├── base_component.js
    │   ├── scaffold_component.js
    │   └── tab_component.js
    ├── main.js
    ├── models
    │   ├── entrant.js             // Classe que modela l'entrant
    │   ├── pizza.js
    │   └── producte.js
    └── services
        └── pizzeriaService.js
```

### **Modificació de la gestió d'API: `PizzeriaService.js`**

S'ha afegit un nou mètode en *PizzeriaService* per obtenir també la llista d'entrants:

```javascript
export class PizzeriaService {
    static API_URL = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria';

    
    static async getAllPizzes() {...}

    static async getAllEntrants() {
        const resposta = await fetch(`${this.API_URL}/entrants`);
        
        if (!resposta.ok) throw new Error('No s\'han pogut carregar els entrants');
        const dadesPG = await resposta.json();
        const dades=dadesPG.records;

        // Llista d'entrants
        const entrants = [];

        // Recorrem les dades i generem la llista d'entrants
        for (let i = 0; i < dades.length; i++) {
            const entrant = new Entrant(dades[i]);
            entrants.push(entrant);
        }

        return entrants;

    }
}
```

### **Refactorització de les targetes: `CardComponent.js`**

Per evitar duplicació de codi, s'ha creat `CardComponent`, del qual deriven `PizzaCard` i `EntrantCard`. A més, ara, en lloc d'`HTMLElement`, tots els components derivaran de `BaseComponent`, que centralitzarà l'aspecte comú de tots els components. (Així si volem modificar l'aspecte eneral, només cal modificar `BaseComponent`):

```javascript
export class CardComponent extends BaseComponent {
    constructor() {
        super();
        // No afegim shadowDOM, ja que l'hereta de la base
        this.serverURL = "https://pizza-rest-server-production.up.railway.app/";
    }

    static get styles() {
        // Definim els estils principals de la targeta

        return `
        ${BaseComponent.styles} /* Afegim estils del component base !! */
        .card {...}
        /* Ara defineix la resta d'estils */
        
        `;
    }
}
```

**Com veiem, no exportem la classe per crear una etiqueta, ja que aquesta per sí sola no serveix com a tal, sinò que serveix per definir altres etiquetes.**

### **Nou component `CounterComponent`**

S'ha afegit `CounterComponent`, que permet als usuaris modificar la quantitat de cada producte directament des de la interfície.

```javascript
class CounterComponent extends BaseComponent {
    constructor() {
        super();
        // Valor inicial (si no s'especifica, és 0)
        this.count = parseInt(this.getAttribute('valor-inicial')) || 0;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {...}
                // Resta d'estils..

        `;

        // Assignem esdeveniments als botons
        this.shadowRoot.getElementById('increment').addEventListener('click', () => this.afigProducte());
        this.shadowRoot.getElementById('decrement').addEventListener('click', () => this.eliminaProducte());
    }

    afigProducte() {
        this.count++;
        this.shadowRoot.querySelector('.counter-value').textContent = this.count;
    }

    eliminaProducte() {
        if (this.count>0) this.count--;
        this.shadowRoot.querySelector('.counter-value').textContent = this.count;
    }
}

// Registrar el component
customElements.define('counter-component', CounterComponent);

```

Com veieu, el component fa ús de les funcions `afigProducte` i `eliminaProducte` per incrementar i decrementar la quantitat de cada producte, i d'actualizar el contingut de la interfície.

Això preserva l'estat a nivell de component, però, com veurem al tercer sprint, necessitarem d'altres mecanismes per tal de preservar l'estat global.
