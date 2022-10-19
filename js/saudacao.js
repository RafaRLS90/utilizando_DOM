(function(){
    const nomeUsuario = "Rafael"
    //const elemento = document.querySelector(".top-bar p")
    //document.querySelector(".top-bar p").textContent = "Bem vindo(a), " + nomeUsuario;
   
   /* if (nomeUsuario) {
        console.log(elemento.textContent)
    //elemento.textContent = elemento.textContent + nomeUsuario
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>" // renderizar meu texto para html
    } else {
        //elemento.parentElement.style.display = "none"
        //A linha acima tem como comando deixar o elemento invisivel para o usuário, fazendo com que ele não veja na tela. Mas ainda existe
       // elemento.remove() //paragrafo do DOM removido
       const elementoParaRemover = elemento.parentElement
       elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
    console.log(elemento)
})()

//*(function (){
    //const nomeUsuario2 = "Rafael"*/

    if(nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "tob-bar"
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario}</b></p>`
        
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)

    }
})()

    const txtEmail = document.getElementById("txtEmail")
    const msgFeedback = document.getElementById("newsletterFeedback")

    function cadastrarEmail() {
        let email = txtEmail.value //email = "" elemento vazio
        msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`
    }