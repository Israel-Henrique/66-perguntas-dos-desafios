let caminhos = ["5-girafa", "5-ornitorrinco", "6", "5-chupacabra"];
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
    window.location.href = "https://israel-henrique.github.io/66-perguntas-dos-desafios/Genium-Quis/" + 
    "0"+ "/genium.html";
}