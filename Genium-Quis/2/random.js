let caminhos = ["2-sabe-muito", "3", "2-errou", "2-errou"];
window.onload = () => 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.replace("file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html")}
    }

    document.getElementsByClassName("debug")[0].onclick = () => {debug();}
}

function debug () 
{
    let opcao = document.getElementsByClassName("opcao");
    for (let op = 0; op < opcao.length; op++)
    {
        opcao[op].onclick = () => {window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
        `${caminhos[op]}` + "/genium.html";}
    }
}

function voltar()
{
    window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
    "0"+ "/genium.html";
}