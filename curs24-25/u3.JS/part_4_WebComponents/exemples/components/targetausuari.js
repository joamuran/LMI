class TargetaUsuari extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['nom', 'descripcio'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
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
                .targeta h2 {
                    margin: 5px 0;
                    color: #333;
                }
                .targeta p {
                    color: #777;
                    font-size: 14px;
                }
            </style>
            <div class="targeta">
                <h2><slot name="nom">Usuari desconegut</slot></h2>
                <p><slot name="descripcio">Sense descripció</slot></p>
            </div>
        `;
    }
}

customElements.define('targeta-usuari', TargetaUsuari);
