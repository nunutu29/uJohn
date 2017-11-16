//Controlla ogni due secondi se è inziato l'evento oppure no

$(document).ready(
    function(){
        Check();
    }    
);


function Check(){
    if($("#bf_boxActive").hasClass("sel")){
        console.log("Evento In Corso");
    }
    else if($("#bf_boxEnd").hasClass("sel")){
        console.log("Evento Finito");
    }
    setTimeout(Check, 2000);
}