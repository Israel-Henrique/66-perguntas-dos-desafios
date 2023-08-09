window.onload = () => 
{
    document.getElementsByClassName("debug")[0].onclick = () => {debug();}
}

function debug () 
{
    let opcao = document.getElementsByClassName("opcao");

    opcao[1].onclick = () => {window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
    "0-mais-o-que-fazer"+ "/genium.html";}

    opcao[2].onclick = () => {window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
    "0-afim"+ "/genium.html";}
}

function voltar()
{
    window.location.href = "file:///C:/Users/adria/OneDrive/Documentos/ISRAEL/Exes/Genium-Quis/" + 
    "0"+ "/genium.html";
}