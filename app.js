const fecha = new Date().getFullYear()
const fechaDiv = document.querySelector(".derechos-de-autor")
fechaDiv.innerHTML += ` ${fecha} &#169;`
