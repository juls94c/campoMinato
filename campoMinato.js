const prompt=require('prompt-sync')();

let posizioneBomba=3;
let posizioneGiocatore=prompt("scegli posizione");

const array=[10];
const length=array.length-1;

const controlloBomba=(array, posizioneBomba,length)=>{
        
    for(let i=0;i<=length;i++)
    {
    if(posizioneBomba==posizioneGiocatore)
        console.log("hai perso");
      else 
        console.log('Continua');
    }
 

}
controlloBomba(array, posizioneBomba,length);



const controlloVincita=(array, posizioneBomba,length)=>{


    
}

