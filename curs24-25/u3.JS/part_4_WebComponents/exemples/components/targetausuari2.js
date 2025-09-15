class TargetaUsuari extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const nom = this.querySelector('targeta-nom')?.textContent || "Usuari desconegut";
        const carrec = this.querySelector('targeta-carrec')?.textContent || "Sense càrrec";

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
                .targeta h2, .targeta p {
                    margin: 5px 0;
                }
            </style>
            <div class="targeta">
                <h2>${nom}</h2>
                <p>${carrec}</p>
            </div>
        `;
    }
}

class TargetaNom extends HTMLElement {}
class TargetaCarrec extends HTMLElement {}


// Registre de components
customElements.define('targeta-usuari', TargetaUsuari);
customElements.define('targeta-nom', TargetaNom);
customElements.define('targeta-carrec', TargetaCarrec);
