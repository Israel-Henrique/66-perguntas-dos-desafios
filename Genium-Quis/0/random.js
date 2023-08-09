let caminhos = ["0-que-isso", "0-mais-o-que-fazer", "0-afim", "1"];
window.onload = () => 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html")}
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
    window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
    "0"+ "/genium.html";
}