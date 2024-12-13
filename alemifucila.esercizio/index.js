//memorizzo tab e contenuti
const tabs = document.querySelectorAll(`.tab`);
const contents = document.querySelectorAll(`.tab-content`);

//funzione che mostra la tab con il contenuto a lei associato
function showTab(index) {
    //rimuovo classe active a tutte le tab
    tabs.forEach(tab => tab.classList.remove(`active`));
    //aggiungo classe active alla tab selezionata
    tabs[index].classList.add(`active`);
    //rimuovo classe active da tutti i contenuti 
    contents.forEach(content => content.classList.remove(`active`));
    //aggiungo classe active al contenuto corrispondente
    contents[index].classList.add(`active`);
}

showTab(0);