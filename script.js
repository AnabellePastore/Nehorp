let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")


function abrirFecharMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"

    } else {

        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }


}

const solicitarOrcamento = (event) => {
    //pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value

    let valorEmail = document.getElementById("campo-email").value

    let valorDescricao = document.getElementById("campo-descricao").value

    //organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    //enviar requisição para a api
    //127.0.0.1 -> localhost
    //método HTTP POST - Crate -> cadastrar ou criar
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)

    })
        .then(resposta => {
            console.log(resposta)

            //limpar os campos
            document.querySelector("#formulario form").reset()

            //mostrar alert com mensagem de sucesso
            alert("Solicitação cadastrada")




        })
        //CASO ERRO - alert com mensagem erro
        .catch(erro => {
            console.error(erro)
            alert("Erro na requisição")
        })


    event.preventDefault()


}