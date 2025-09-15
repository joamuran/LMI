### **6. Web Components**


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

------------------------------


# **Reactivitat avançada en Web Components**

Fins ara, hem vist com crear Web Components que encapsulen estils, estructures HTML i atributs personalitzables. Ara explorarem com fer que els nostres components siguen **reactius** i es comporten de manera més dinàmica, sense necessitat d'utilitzar frameworks externs.  

Aquesta secció es basarà en dos conceptes clau:  

1. **Mantenir la UI sincronitzada amb les dades** (*binding d’estat*).
2. **Detectar i reaccionar a canvis d’atributs o elements interns** (*observers i Property Setters*).

## **Reactivitat amb Custom Elements**

Els Custom Elements, per defecte, **no es tornen a renderitzar automàticament** quan es modifiquen els seus atributs o propietats. Hem de definir un mecanisme perquè, quan es produïsquen canvis en les dades, el component s’actualitze automàticament.

### **Mètode `attributeChangedCallback` per a la reactivitat**

Com hem vist anteriorment, podem observar atributs amb `attributeChangedCallback()`, però ara millorarem el sistema.  

#### **Exemple: Targeta reactiva amb atributs observables**

Modifiquem el component `targeta-usuari` per a reaccionar a canvis en **nom** i **càrrec**:

```js
class TargetaUsuari extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .targeta {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 250px;
                    background: #f9f9f9;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
            </style>
            <div class="targeta">
                <h2 id="nom"></h2>
                <p id="carrec"></p>
            </div>
        `;    }

    static get observedAttributes() {
        return ["nom", "carrec"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.querySelector("#nom").textContent = this.getAttribute("nom") || "Usuari desconegut";
        this.shadowRoot.querySelector("#carrec").textContent = this.getAttribute("carrec") || "Sense càrrec";
    }
}

customElements.define("targeta-usuari", TargetaUsuari);
```

El funcionament d'aquest codi és el següent:

1. **El navegador consulta `observedAttributes()`** i sap que ha de vigilar `nom` i `carrec`.
2. **Si es modifica un atribut**, el navegador invoca `attributeChangedCallback()`.
3. **Si el nou valor és diferent de l’anterior**, invoquem `render()` per actualitzar el component.  
4. **Es renderitza automàticament** amb el nou contingut.

## **Reactivitat amb `MutationObserver`**

L'exemple anterior funciona bé per a **atributs**, però...  

* **Com podem detectar canvis en elements interns del Web Component?**  
* **Com podem reaccionar si el text d’un `<slot>` canvia?**  

Una solució és fer ús de `MutationObserver`, que ens permet **observar i reaccionar a canvis en el DOM del component**.

Veiem com fer-ho al següent exemple.

#### **Exemple: Targeta reactiva amb `MutationObserver`**

```js
class TargetaUsuari extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .targeta {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 250px;
                    background: #f9f9f9;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
            </style>
            <div class="targeta">
                <slot name="nom"></slot>
                <slot name="carrec"></slot>
            </div>
        `;

        // Definim l'observador de canvis
        this.observer = new MutationObserver(() => this.updateRender());
    }

    connectedCallback() {
        this.updateRender();
        this.observer.observe(this, { childList: true, subtree: true, characterData: true });
    }

    updateRender() {
        const nom = this.querySelector("targeta-nom")?.textContent || "Usuari desconegut";
        const carrec = this.querySelector("targeta-carrec")?.textContent || "Sense càrrec";

        this.shadowRoot.querySelector("slot[name='nom']").innerHTML = `<h2>${nom}</h2>`;
        this.shadowRoot.querySelector("slot[name='carrec']").innerHTML = `<p>${carrec}</p>`;
    }
}

customElements.define("targeta-usuari", TargetaUsuari);
``
En aquest exemple, quan creem el component, creem també un *observador* amb `MutationObserver`:

```js
this.observer = new MutationObserver(() => this.updateRender());
```

Amb això, aquest observador invocarà el mètode `updateRender()` quan es detecten canvis en el component.

Una vegada afegim el component al document, s'invoca el mètode `connectedCallback()`, dins el qual trobem la següent línia:

```js
this.observer.observe(this, { childList: true, subtree: true, characterData: true });
```

Amb `.observe(target, options)` indiquen **què** volem observar i **quines modificacions** hem de vigilar. Concretament:

    * `target` val `this`, de maner aque el que volem observar és el propi web Component (`<targeta-usuari>`).
    * Hem configurat les opcions de vigilància amb:
      * `childList: true`: Detecta quan s'**afigen o eliminen elements fills** en `this` (el Web Component).
      *  `subtree: true`: Fa que l'observador vigile **tots els nodes descendents**, no només fills directes.
      *  `characterData: true`: Detecta canvis en **el text** dels nodes (per exemple, si es modifica el contingut d’un `<slot>` o `targeta-nom`).

Amb aquesta configuració, el `MutationObserver` estarà vigilant **qualsevol canvi** dins del component `<targeta-usuari>`. Això inclou:

* Afegir nous elements (`<targeta-nom>` o `<targeta-carrec>`)  
* Modificar el text dins de `<targeta-nom>` o `<targeta-carrec>`  
* Esborrar elements del component  

Cada vegada que es detecte un canvi, el navegador cridarà automàticament la funció `this.updateRender()`, la qual refresca el contingut del component i manté la UI actualitzada.


## 📌 **Exemple en acció**
Si tenim aquest codi HTML:
```html
<targeta-usuari>
    <targeta-nom>Jose</targeta-nom>
    <targeta-carrec>Professor de LMI</targeta-carrec>
</targeta-usuari>
```

I després executem aquest JavaScript:
```js
document.querySelector("targeta-nom").textContent = "Maria López";
```
🔹 **Gràcies a `MutationObserver`**, el component detecta aquest canvi i **automàticament** actualitza la targeta mostrada!

---

## 🚀 **Resum**
👉 `this.observer.observe(this, { childList: true, subtree: true, characterData: true });`  
**🌟 Traducció a llenguatge humà:**  
**"Estigues atent a qualsevol canvi dins del component, incloent-hi afegir o eliminar elements i modificar text, i actualitza la UI quan passe."** 🚀

Això ens permet tindre **Web Components realment reactius**, sense frameworks com React o Angular! 🎯





En aquest cas, quan l'objecte s'afig dins el DOM, s'invoca el mètode `connectedCallback`, dins el qual establim un `MutationObserver`, el qual bserva **canvis dins del component** (text, nodes, nous elements...).



---

## 📌 **3️⃣ Reactivitat amb `Proxy`**
Una altra forma **molt potent i avançada** de fer components reactius és utilitzar **`Proxy`**. Aquesta tècnica ens permet **detectar canvis en un objecte d'estat** i **actualitzar la UI automàticament**.

#### **📝 Exemple: Reactivitat amb Proxy**
```js
class TargetaUsuari extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.state = new Proxy(
            { nom: "Usuari desconegut", carrec: "Sense càrrec" },
            {
                set: (target, prop, value) => {
                    target[prop] = value;
                    this.render();
                    return true;
                }
            }
        );

        this.shadowRoot.innerHTML = `
            <style>
                .targeta {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 250px;
                    background: #f9f9f9;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
            </style>
            <div class="targeta">
                <h2 id="nom"></h2>
                <p id="carrec"></p>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    set nom(value) {
        this.state.nom = value;
    }

    set carrec(value) {
        this.state.carrec = value;
    }

    render() {
        this.shadowRoot.querySelector("#nom").textContent = this.state.nom;
        this.shadowRoot.querySelector("#carrec").textContent = this.state.carrec;
    }
}

customElements.define("targeta-usuari", TargetaUsuari);
```

#### 🚀 **Ara podem modificar la UI simplement així:**
```js
const targeta = document.querySelector("targeta-usuari");
targeta.nom = "Anna Pérez";
targeta.carrec = "Enginyera Software";
```
💡 **Amb `Proxy`, el component s’actualitza automàticament quan canviem `state`!**

---

## 🏆 **Conclusió: Quin sistema és millor?**
| 🔹 Sistema | 📌 Per a què serveix? | 🔥 Quan utilitzar-ho? |
|------------|----------------------|----------------|
| `attributeChangedCallback` | Reaccionar a canvis d’atributs (`<targeta-usuari nom="Maria">`) | Quan el component utilitza atributs HTML simples. |
| `MutationObserver` | Detectar canvis dins del component (`<slot>`, nous elements, text intern...) | Quan volem observar modificacions internes de contingut. |
| `Proxy` | Fer el component totalment reactiu, basat en un estat intern (`this.state`) | Quan volem una reactivitat completa sense atributs HTML. |

---

## 🚀 **Cap a un Mini-Framework en Web Components**
Ara que tenim Web Components **reactius**, podem començar a pensar en **un sistema modular i reutilitzable** per a aplicacions com la nostra pizzeria o la cistella de Nadal.

### **📌 Quin serà el pròxim pas?**
1️⃣ Implementar **events personalitzats** (`CustomEvent`).  
2️⃣ Crear **una estructura de components modulars**.  
3️⃣ Explorar com gestionar **dades asíncrones amb `fetch` i APIs**.  

Ara ja tenim Web Components **realment útils** i **semblants a Flutter**! 🚀🔥