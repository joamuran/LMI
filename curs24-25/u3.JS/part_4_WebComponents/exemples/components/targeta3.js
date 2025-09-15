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


class TargetaNom extends HTMLElement {}
class TargetaCarrec extends HTMLElement {}


// Registre de components
customElements.define('targeta-usuari', TargetaUsuari);
customElements.define('targeta-nom', TargetaNom);
customElements.define('targeta-carrec', TargetaCarrec);