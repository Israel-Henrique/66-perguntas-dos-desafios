let caminhos = ["5", "4-sombra", "4-sonic-preto", "link"];
window.onload = () => 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html")}
    }

    opcao[3].onclick = () => {window.location.replace("https://www.urbandictionary.com/define.php?term=Edgy%20the%20Hedgy");}
    opcao[0].onclick = () => {
        document.getElementsByTagName("img")[0].src = "./recursos/shash.png";
        document.getElementsByTagName("p")[0].innerHTML = "Voce sente o Shadow no seu...";
        document.getElementsByTagName("h1")[0].innerHTML = "VOCÊ ACERTOU!";

        for (let op = 0; op < opcao.length; op++)
        {
            opcao[op].style.cursor = "default";
            opcao[op].style.backgroundColor = "#c6c6c6";
            opcao[op].onclick = () => {console.log("Não funfa mais");}
        }

        opcao[0].style.backgroundColor = "#eeeeee";

        
        let agr = document.createElement("a");
        agr.href = "https://funnyjunk.com/Edgy+the+hedgy/ungjMha/";
        document.querySelector(".conteudo").insertBefore(agr, document.querySelector("img"));
        agr.appendChild(document.querySelector("img"));

        let proxima = document.createElement("div");
        proxima.classList.add("opcao");
        let parag = document.createElement("p");
        parag.innerHTML = "PROXIMA PERGUNTA";
        proxima.appendChild(parag);
        proxima.onclick = () => {
            window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
            `${caminhos[0]}` + "/genium.html");
        }
        document.querySelector(".conteudo").insertBefore(proxima, document.querySelector("section"));
    }


    document.getElementsByClassName("debug")[0].onclick = () => {debug();}
}

function debug () 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.href = "https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html";}
    }
}

function voltar()
{
    window.location.href = "https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
    "0"+ "/genium.html";
}