(function(){
    const nomeUsuario = "Rafael"
    //document.querySelector(".top-bar p").textContent = "Bem vindo(a), " + nomeUsuario;
    const elemento = document.querySelector(".top-bar p")
    console.log(elemento.textContent)
    //elemento.textContent = elemento.textContent + nomeUsuario
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>" // renderizar meu texto para html
})()