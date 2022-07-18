let listLink = [];

const grid = document.querySelector('[class="main__grid"]');
const addLinkButton = document.querySelector('[data="addLinkButton"]');

addLinkButton.addEventListener("click", addLink);

function addLink() {
  let newLink = prompt("Ingrese link");
  
  if (newLink === "") 
  {
    alert("Type something");
    addLink();
  } 
  else 
  {
    alert(`Ud. ingresó el siguiente link: ${newLink}`);
    let keepAdding = confirm("Desea ingresar otro link?");
    keepAdding ? addLink() : alert("Gracias");
    
    listLink.push(newLink);
    
    const createTile = () => {
        let newTileButton = document.createElement("button");
        newTileButton.setAttribute("class", "tile")
        
        let newTileLink = document.createElement("a");
        newTileLink.setAttribute("href", `${newLink}`);
        newTileLink.setAttribute("target", "_blank");
        
        newTileLink.innerText = `${newLink}`;
        newTileButton.appendChild(newTileLink);
        grid.appendChild(newTileButton);
    };
    createTile();
}
}

// TODO: create handler for 'Add a bunch of links' button
// TODO: refactor tile buttons to be flip cards https://www.w3schools.com/howto/howto_css_flip_card.asp


/* A button
  that when pressed a function is dispatched
  that function changes the display 
  of a hidden modal
  which contains an input
  and 2 buttons cancel / ok
  that when confirmed another function is dispatched
  that function adds the new link to a list
  and the new link added inject it to a new button element created
  and rendered into a grid
  */
