"use strict";
function guardar() {
}

window.onload=function() {
    var habilitar=localStorage.getItem("habilitar"),
        reemplazar=localStorage.getItem("reemplazar"),
        url=localStorage.getItem("url"),
        radioHabilitarSi=document.querySelector("#habilitar-si"),
        radioHabilitarNo=document.querySelector("#habilitar-no"),
        radioReemplazarSi=document.querySelector("#reemplazar-si"),
        radioReemplazarNo=document.querySelector("#reemplazar-no"),
        inputUrl=document.querySelector("#url");

    if(habilitar=="s") {
        radioHabilitarSi.checked=true;
    } else {
        radioHabilitarNo.checked=true;
    }

    if(reemplazar=="s") {
        radioReemplazarSi.checked=true;
    } else {
        radioReemplazarNo.checked=true;
    }

    inputUrl.value=url;

    document.querySelector("#btn-ok").addEventListener("click",function(event) {
        habilitar=radioHabilitarSi.checked?"s":"n";
        reemplazar=radioReemplazarSi.checked?"s":"n";
        url=inputUrl.value;
       
        if(habilitar=="s"&&url=="") {
            alert("Please, enter the URL.");
            inputUrl.focus();
            return;
        }

        localStorage.setItem("habilitar",habilitar);
        localStorage.setItem("reemplazar",reemplazar);
        localStorage.setItem("url",url);

        alert("Setting saved.");
    });
};
