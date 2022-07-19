const template = document.createElement('template');
template.innerHTML = `
    <style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
      }
      
      .title {
        color: grey;
        font-size: 18px;
      }
      
      button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
      }
      
      a {
        text-decoration: none;
        font-size: 22px;
        color: black;
      }
      
      button:hover, a:hover {
        opacity: 0.7;
      }
    </style>

    <div class="myTile-container">
        <div class="card">
            <img src="https://w3schools.com/w3images/team2.jpg" alt="John" style="width:100%">
            <h1 contenteditable="true">Editable</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
        </div>
    </div>
`;

class myTile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        // title.innerHTML = `my title: ${userInput}`
    }
}

window.customElements.define('my-tile', myTile)