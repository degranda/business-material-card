class businessMaterialCard extends HTMLElement {
    constructor() {
        super() 
        this.attachShadow({
            mode: 'open'
        });
            
    }
    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML = `
            <style>
                h1 {
                    color: white;
                    margin: 0;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
                p {
                    color: white;
                    font-size: .8rem;
                }
                span {
                    float: right;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    transition: opacity .4s;
                    position: relative;
                    margin-right: -5%;
                    margin-top: -5%;
                    background-image: url(${this.getAttribute('img')});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .container .inner {
                    background-color: #4CAF50;
                    padding: 1em;
                    border-radius: 10px;
                    width: 250px;
                    min-height: 150px;
                    clip-path: circle(10% at 90% 14%);
                    transition: all .5s ease-in-out;
                    cursor: pointer;
                }
                .container .info-container {
                    width: 100%;
                    margin-top: 20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                .inner:hover {
                    clip-path: circle(75%);
                    background-color: #00b6ff;
                }
                .inner:hover span {
                    opacity: 0;
                }
            </style>
            <div class="container">
                <div class="inner">
                    <span></span>
                    <h1>${this.getAttribute('title')}</h1>
                    <p>${this.getAttribute('body')}</p>
                    <div class="info-container">
                        <a href=${this.getAttribute('twitter')} target="_blank">Twitter</a>
                        <a href=${this.getAttribute('instagram')} target="_blank">Instagram</a>
                    </div>
                </div>
            </div>`;
        
        this.shadowRoot.appendChild(
            template.content.cloneNode(true)
            );
    }
    
}

customElements.define('business-material-card', businessMaterialCard);