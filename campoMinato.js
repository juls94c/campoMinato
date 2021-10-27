

const prompt=require('prompt-sync')();

let boolean=new Boolean(false);
let posizione;
let Bomba=1;
let posizioneGiocatore=prompt("scegli posizione");


const array=[0,0,0];
const length=array.length;


posizione = Math.floor(Math.random()*length);
const inserisciBomba=(array,Bomba)=>{
 
     

        array.splice( posizione,1,Bomba)

     
  
}

 inserisciBomba(array,Bomba);
console.log("posizionegiocatore"+posizioneGiocatore)

console.log(array);


const controlloBomba=(array)=>{
        
    for(let i=0;i<=length;i++)
    {
      
    if(posizione==posizioneGiocatore){
    

      boolean=true; 
      return boolean;
        
    }
 
    }

}
controlloBomba(array);
if(boolean==true)
  console.log('hai perso')
  



