let caminhos = ["3-sabo-muito", "3-mentira", "4", "link"];
window.onload = () => 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.replace("https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html")}
    }
    opcao[3].onclick = () => {window.location.replace("https://www.youtube.com/watch?v=Oxs29Dbtdc0");}

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