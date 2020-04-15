var speedDialUrl="chrome://startpageshared/",   //Opera
    newTaburl="chrome://newtab/";               //Chrome

chrome.tabs.onCreated.addListener(function(tab) {
    var url=localStorage.getItem("url"); console.log(tab)
    if(url&&(tab.pendingUrl==speedDialUrl||tab.pendingUrl==newTaburl)) {
        chrome.tabs.update(tab.id, {
            url: url
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var reemplazar=localStorage.getItem("reemplazar"),
        url=localStorage.getItem("url");
    if(reemplazar=="s"&&url&&(tab.pendingUrl==speedDialUrl||tab.pendingUrl==newTaburl)) {
        chrome.tabs.update(tab.id, {
            url: url
        });
    }
});

//Valores predeterminados
var habilitar=localStorage.getItem("habilitar"),
    reemplazar=localStorage.getItem("reemplazar"),
    url=localStorage.getItem("url");
if(url===null) localStorage.setItem("url","https://es.wikipedia.org/wiki/Especial:Aleatoria");
if(habilitar===null) localStorage.setItem("habilitar","s");
if(reemplazar===null) localStorage.setItem("reemplazar","n");