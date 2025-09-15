class MissatgeBenvinguda extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['nom']; // Escoltem canvis en aquest atribut
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'nom') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const nom = this.getAttribute('nom') || 'Usuari';
        this.shadowRoot.innerHTML = `<h2>Hola, ${nom}!</h2>`;
    }
}

customElements.define('missatge-benvinguda', MissatgeBenvinguda);


/*class MissatgeBenvinguda extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const nom = this.getAttribute('nom') || 'Usuari';
        this.shadowRoot.innerHTML = `<h2>Hola, ${nom}!</h2>`;
    }
}

customElements.define('missatge-benvinguda', MissatgeBenvinguda);
*/