### **6. Web Components**

Els Web Components són una tecnologia estàndard de la web que permet crear components reutilitzables, encapsulats i amb un estil i funcionalitat independents de la resta de la pàgina. Aquesta tecnologia és essencial per construir interfícies modulars i mantenibles.

#### **6.1. Característiques principals dels Web Components**

1. **Encapsulació amb Shadow DOM**:
   - Permet que l'estil i la funcionalitat del component estiguin aïllats del DOM global, evitant conflictes d'estils o scripts.
   - Es pot utilitzar per encapsular estils i evitar que elements externs interfereixin.

2. **HTML Templates**:
   - Utilitza la etiqueta `<template>` per definir estructures HTML que es poden clonar i reutilitzar al component.

3. **Custom Elements**:
   - Defineix etiquetes HTML personalitzades amb funcionalitats específiques. Per exemple, `<cistella-producte>`.

4. **Reutilització**:
   - Els components creats poden reutilitzar-se en diferents aplicacions web.

---

#### **6.2. Composició dels Web Components**

Els Web Components es basen en tres tecnologies clau:
1. **Custom Elements**: Defineixen noves etiquetes HTML.
2. **Shadow DOM**: Encapsulen l'estil i el DOM del component.
3. **Templates i Slots**: Permeten estructures HTML reutilitzables i dinàmiques.

---

#### **6.3. Exemple: Crear un Web Component**

Anem a construir un component reutilitzable per a un producte de la cistella.

##### **HTML inicial**

Aquest exemple és compatible amb el que ja hem treballat:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cistella amb Web Components</title>
</head>
<body>
    <h1>🎄 Cistella amb Web Components 🎄</h1>
    <producte-card nom="Torró de Xixona" preu="12.50" quantitat="2"></producte-card>
    <producte-card nom="Neules" preu="3.20" quantitat="4"></producte-card>

    <script src="components.js"></script>
</body>
</html>
```

---

##### **JavaScript: Definir un Web Component**

El següent codi crea un component personalitzat per als productes:

```javascript
class ProducteCard extends HTMLElement {
    constructor() {
        super();

        // Crea el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Crea l'estructura HTML del component
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px 0;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                }
                .preu {
                    color: green;
                    font-weight: bold;
                }
                .quantitat {
                    color: blue;
                }
            </style>
            <div>
                <h3></h3>
                <p>Preu: <span class="preu"></span> €</p>
                <p>Quantitat: <span class="quantitat"></span></p>
                <p>Subtotal: <span class="subtotal"></span> €</p>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        // Assignar propietats inicials
        this.updateContent();
    }

    static get observedAttributes() {
        return ['nom', 'preu', 'quantitat'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateContent();
    }

    updateContent() {
        const shadow = this.shadowRoot;

        const nom = this.getAttribute('nom') || 'Producte desconegut';
        const preu = parseFloat(this.getAttribute('preu') || '0').toFixed(2);
        const quantitat = parseInt(this.getAttribute('quantitat') || '0');
        const subtotal = (preu * quantitat).toFixed(2);

        shadow.querySelector('h3').textContent = nom;
        shadow.querySelector('.preu').textContent = preu;
        shadow.querySelector('.quantitat').textContent = quantitat;
        shadow.querySelector('.subtotal').textContent = subtotal;
    }
}

// Registra el Custom Element
customElements.define('producte-card', ProducteCard);
```

---

#### **6.4. Recursos i articles recomanats**

1. **Documentació oficial del MDN**:
   - [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
   - [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
   - [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

2. **Tutorials i guies**:
   - [CSS-Tricks: A Complete Guide to Web Components](https://css-tricks.com/an-introduction-to-web-components/)
   - [Google Developers: Web Components Fundamentals](https://developers.google.com/web/fundamentals/web-components)

3. **Eines i llibreries per facilitar el treball amb Web Components**:
   - [Lit](https://lit.dev/): Llibreria lleugera per crear components.
   - [StencilJS](https://stenciljs.com/): Generador de components reutilitzables.

---

### **Conclusió**

Amb els Web Components, podem modularitzar i encapsular la lògica i el disseny d'una aplicació web d'una manera més robusta. La seva integració amb el DOM natiu facilita l'escalabilitat i el manteniment dels projectes.