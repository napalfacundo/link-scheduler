function createTile() {
    let grid = document.getElementById("gridID")
    let url = prompt("Type a link: ")
    let link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("target", "_blank")
    link.innerText = url
    let newTile = document.createElement("button")
    newTile.setAttribute("class", "tile")
    newTile.appendChild(link);
    grid.appendChild(newTile);
}

let linkList = "";

createTileLoop = () => {
    // let newLink = prompt("Ingrese su link: ");
    createTile()
    // alert(`Ud. ingresó el siguiente link: ${url}`);
    // linkList += `${url} \n`;
    // console.log(linkList);
    let addingAnotherLink = confirm("Desea agregar otro link?");
    addingAnotherLink ? createTileLoop() : "";
  }