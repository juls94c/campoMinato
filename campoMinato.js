//const prompt=require('prompt-sync')();

let posizioneBomba=3;
let posizioneGiocatore=prompt("scegli posizione");
let randomIndex;
const array=[1,1,1,1];
const length=array.length-1;


randomIndex = Math.floor(Math.random() * posizioneBomba);
const inserisciBomba=(array,posizioneBomba)=>{
 
      for(let i=0; i < length; i++)
  
 {
    

       array.splice(randomIndex, 1, posizioneBomba)
      
    }

}
 inserisciBomba(array,posizioneBomba);
  console.log(array);


const controlloBomba=(array)=>{
        
    for(let i=0;i<=length;i++)
    {
      
    if(array[posizioneBomba]==array[posizioneGiocatore]){
        console.log("hai perso");
        return true;
    }
      else 
        {
        
        console.log('Continua');
          return false;
    }
    }

}
controlloBomba(array);

/*
const controlloVincita=(array)=>{
  let i=0;
  while(array[i]==1)

}*/

