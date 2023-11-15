const botaoNao = document.querySelector("#botaoNao");
const c = document.querySelector(".container");
const botoes = document.querySelector("button");
const h4 = document.querySelector("h4");
const iniciar = document.querySelector("#iniciar");
const jogo = document.querySelector(".jogo");
const botaoSim = document.querySelector("#botaoSim");
const tempo=document.querySelector("#tempo");
const time=document.querySelector(".time");

setInterval(() => {
    botoes.style.color = "orange";
    botoes.style.border = "1px solid orange";
    h4.style.color = "rgb(53, 53, 53)";
}, 100)
setInterval(() => {
    botoes.style.color = "green";
    botoes.style.border = "1px solid black";
    h4.style.color = "rgb(60, 60, 60)";
}, 200);

botaoNao.addEventListener("click", (e) => {
    e.preventDefault();
    alert("PARABÉNS, VOCÊ VAI PAGAR O LANCHE HOJE");

});
botaoSim.addEventListener("click", (e) => {
    e.preventDefault();
    botaoNao.style.display = "none";
});
iniciar.addEventListener("click", (e) => {
    e.preventDefault();
    let contador = 4;
    let contagem=24;
    setTimeout(()=>{
        c.style.display="none";
        alert("TEMPO ESGOTADO")
    }, 24000);
    
    let segundos=setInterval(() => {
        contador -= 1;
        contagem -= 1;
        tempo.innerText=contagem;
        if(contagem===0){
            clearInterval(segundos);
        }
        iniciar.innerText = contador;
        if (contador === 0) {
            jogo.style.display = "none";
            time.style.display="block";
            setInterval(() => {
                const altura = Math.floor(Math.random() * 110);
                const largura = Math.floor(Math.random() * 2000) - 1000;
                botaoNao.style.marginTop = `${altura}px`;
                botaoNao.style.marginLeft = `${largura}px`;
            }, 10);
        }
        else if (contador === 2) {
            iniciar.style.color = "orange";
            iniciar.style.border = "1px solid orange";
        }
        else if (contador === 1) {
            iniciar.style.color = "red";
            iniciar.style.border = "1px solid red";
        }
    }, 1000);
});