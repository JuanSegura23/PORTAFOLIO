
const burger = document.querySelector(".burger")

function vizualizarLista(){
    const lista = document.querySelector(".lista")
    const listaLI = document.querySelectorAll(".lista__li")
    
    lista.classList.toggle("lista--activada")
    burger.classList.toggle("toggle")

    listaLI.forEach((li, index) => (li.style.transition = `all ${2*index+2}s`))
}

burger.addEventListener("click",vizualizarLista)


// ---------------------------------------------------crear botones de colores


let boton = document.querySelector(".colorido");
let recipiente = document.querySelector(".colores__colores")
boton.addEventListener("click", cambiaColor)

function cambiaColor(){
   let colorAleatorio = "#" + generarNuevoColor() + generarNuevoColor() + generarNuevoColor()
   let divdiv = document.createElement("div");
   divdiv.innerHTML = "🕸️"
   divdiv.classList = "color__nuevo"
   divdiv.style.background = colorAleatorio
   boton.after(divdiv);
}

function generarNuevoColor(){
	
	return Math.round(Math.random()*255).toString(16);
}
