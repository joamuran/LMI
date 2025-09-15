class ProducteCard extends HTMLElement {
    constructor() {
        super();

        this.quantitat=0;
        this.nom="Producte";
        this.desc="Descripció";
        this.preu=3;
        this.subtotal=0;

        // Crea el Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Crea la plantilla HTML dins de JavaScript
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px 0;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 350px;
                    
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;

                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);

                }

                :host .preu{
                    background-color: #ffdd00;
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #efcd00;
                    margin: 2px;

                }

            </style>
            <div>
                <h3 id="nom">Producte</h3>
                <span class="preu"> Preu/u &nbsp;<span id="preu">preu</span><span>€</span></span>
                <span class="preu"> Subtotal &nbsp;<span id="subtotal"></span><span>€</span></span>
                <p id="desc">Ací la descripció del producte</p>
                <button id="btAdd">+</button><span id="quantitat">quantitat</span><button id="btSupr">-</button>
            </div>
        `;

        // Clonem la plantilla i l'afegim al shadow DOM
        //shadow.appendChild(template.content.cloneNode(true));

    }

    static get observedAttributes() {
        return ["nom", "preu", "desc", "quantitat"]; // Escoltem canvis en aquest atribut
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'nom' || name === 'desc' || name==='preu' || name==='quantitat' ) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {

        // Netegem el contingut anterior
        this.shadowRoot.innerHTML = "";
        // Afegim la plantilla
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        

        const nom = this.getAttribute('nom') || 'Producte';
        this.shadowRoot.getElementById('nom').innerHTML=nom;

        const desc = this.getAttribute('desc') || 'Descripció del producte';
        this.shadowRoot.getElementById('desc').innerHTML=desc;

        const preu = this.getAttribute('preu') || 'Preu del producte';
        this.shadowRoot.getElementById('preu').innerHTML=preu;

        this.shadowRoot.getElementById('quantitat').innerHTML=this.quantitat;

        this.shadowRoot.getElementById('btAdd').addEventListener("click", (event)=>{
            this.quantitat++;
            this.subtotal=this.quantitat*this.preu;
            this.shadowRoot.getElementById('quantitat').innerHTML=this.quantitat;
            this.shadowRoot.getElementById('subtotal').innerHTML=this.subtotal;
        });

        this.shadowRoot.getElementById('btSupr').addEventListener("click", (event)=>{
            if (this.quantitat>0) this.quantitat--;
            this.subtotal=this.quantitat*this.preu;
            this.shadowRoot.getElementById('quantitat').innerHTML=this.quantitat;
            this.shadowRoot.getElementById('subtotal').innerHTML=this.subtotal;
        });


    }


}

customElements.define('producte-card', ProducteCard);