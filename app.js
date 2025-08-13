function criacartao(categoria,pergunta,resposta){
const container = document.getElementById("container")
const cartao = document.createElement("article")
 cartao.classname = 'cartao'

 cartao.innerHTML =`<div class="cartao_conteudo"> 
                <h3>${ categoria} </h3>
                <div class="pergunta"> 
                    ${pergunta}
                </div>
                <div class="resposta"> 
                    ${resposta}

                </div>
            </div> `

        let respostaVisivel = false


        function viraCartao(){
        respostaVisivel = !respostaVisivel
        
        cartao.classList.toggle("active",respostaVisivel)
        }

        cartao.addEventListener("click", viraCartao)

        container.appendChild(cartao)


}