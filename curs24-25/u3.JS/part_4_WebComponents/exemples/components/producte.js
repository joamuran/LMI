class ProducteCard extends HTMLElement {
    constructor() {
        super();

        // Crea el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Crea la plantilla HTML dins de JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px 0;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 250px;
                    
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
                <h3>Producte</h3>
                <span class="preu">preu €</span>
                <p>Ací la descripció del producte</p>
            </div>
        `;

        // Clonem la plantilla i l'afegim al shadow DOM
        shadow.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('producte-card', ProducteCard);