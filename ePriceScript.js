//Controlla ogni due secondi se è inziato l'evento oppure no

var Emails;

$(document).ready(
    function(){
        emailjs.init("user_gYkiwCJv1rvW8EUwu7e7A");
        Emails = 2;
        Check();
    }    
);



function Check(){
    if($("#bf_boxActive").hasClass("sel")){
        console.log("Evento In Corso");
        if(Emails >= 0)
        {
            Emails--;
            emailjs.send("gmail","eprice_johnny", {});
        }
    }
    else if($("#bf_boxEnd").hasClass("sel")){
        console.log("Evento Finito");        
    }
    setTimeout(Check, 2000);
}
