let linkList = "";

function init() {
  let option = "";

  do {
    option = prompt(
      "Elija una opcion para continuar: Ingresar = i | Listar = ls | Salir = s");
    if (option === "i") {
      addingLink();
    } else if (option === "ls")
      showingList();
  } while (option !== "s");
}

// Helpers //

addingLink = () => {
  let newLink = prompt("Ingrese su link: ");
  alert(`Ud. ingresó el siguiente link: ${newLink}`);

  linkList += `${newLink} \n`;

  let addingAnotherLink = confirm("Desea agregar otro link?");
  addingAnotherLink ? addingLink() : init();
}

showingList = (list) => {
    list = linkList;
    alert(`LISTA de LINKS:
           ******************\n${linkList}`);
}
init();
