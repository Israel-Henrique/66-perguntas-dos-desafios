let caminhos = ["6-alma", "7", "6-errou", "6-malamen"];
window.onload = () => 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html")}
    }

    opcao[1].onclick = () =>
    {
        document.querySelector("h1").innerHTML = "VOCÊ ACERTOU!";
        document.querySelector("img").remove();

        for (let op = 0; op < opcao.length; op++)
        {
            opcao[op].style.cursor = "default";
            opcao[op].style.backgroundColor = "#c6c6c6";
            opcao[op].onclick = () => {}
        }
        opcao[1].style.backgroundColor = "#eeeeee";
        opcao[1].onclick = () => {};

        let maal = document.createElement("iframe");
        maal.width = "560";
        maal.height = "315";
        maal.src = "https://www.youtube.com/embed/_F_oAKyQPXM?autoplay=1";
        maal.title = "YouTube video player";
        maal.frameborder = "0";
        maal.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        maal.allowFullscreen = true;

        document.querySelector(".conteudo").insertBefore(maal, document.querySelectorAll("br")[0]);

        let admL = document.createElement("div");
        admL.setAttribute("class", "opcao");
        admL.innerHTML = "PRÓXIMA PERGUNTA";
        admL.onclick = () =>
        {
            window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
            `${caminhos[1]}` + "/genium.html");
        }

        document.querySelector(".conteudo").insertBefore(admL, document.querySelector("section"));

        document.querySelector("p").innerHTML = "";
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