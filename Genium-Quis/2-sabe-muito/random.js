window.onload = () => 
{

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