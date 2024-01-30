let boxes = document.querySelectorAll(".box") ;

let result = document.querySelector("#resut")

let thewinner = true ; 
var turnO = true ;//player X
let winpatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],

[1,4,7],
[2,5,8],
[0,3,6],
[2,4,6]
] ;

boxes.forEach((box) => {

  box.addEventListener("click" , () => {
  
  console.log("RADHE RADHE")  ;
  
  if ( turnO === true) {
    box.innerText = "O" ;
    turnO = false ;

    box.style.backgroundColor = "rgb(255, 148, 148)"
    box.style.border  = "2px dashed black"
    box.style.color = "black"
    box.style.borderRadius ="10px";
  }
  
  else if (turnO === false) {
  box.innerText= "X";
  turnO= true ;

  box.style.backgroundColor = "rgb(142, 255, 142)"
  box.style.border  = "2px dashed black"
  box.style.color = "black"
  box.style.borderRadius ="10px";
}
  box.disabled = true ;  

  checkwinner();
    } )                             
    } )   

let boxdisable = () => {

for (let box of boxes) {
  box.disabled = true ;
}

}

showwinner = (winner) => {
 result.innerText = `winner is ${winner}` ; 
      result.style.backgroundColor = "grey" ;
      result.style.scale = "1";
      result.style.transition = "1s";

      boxdisable();
}

    const checkwinner = () => {
      for ( let patterns of winpatterns ) {
       
       console.log( 
          patterns[0] ,  
         patterns[1] , 
         patterns[2] ,
         patterns[3] ,
         patterns[4] ,             ) ;
      
         console.log(
         boxes[patterns[0]].innerText ,
          boxes[patterns[1]].innerText, 
          boxes[patterns[2] ].innerText ,
         
         );

let pos1 = boxes[patterns[0]].innerText ;
let pos2 = boxes[patterns[1]].innerText ;
let pos3 = boxes[patterns[2]].innerText ;


  if ( pos1 != "" || pos2 != "" || pos3 != ""  ){  

   if ( pos1 === pos2 && pos3 ===pos2  ){
      console.log(  "RADHA ji winner" , pos1 ) ;
   
      showwinner(pos1) ; 
      
      thewinner = false ;
    }

else if (thewinner){
  result.innerText = " DRAW ";
  result.style.scale = "1";
      result.style.transition = "1s";
}    

  } 
     }  
   };






























































































