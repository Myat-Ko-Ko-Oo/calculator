result_screen = document.querySelector("#result_screen")
li = document.querySelectorAll("li")
equal  = document.getElementById("equal")
// input = document.getElementsByName("minus")[0]
// for(el of li){
//    console.log(el.value)
// }
// console.log(input.dataset.cal)
Array  = ["0",".","+","-","*","/"]
 Arraynum = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*","=","."]
i =0
// if((Arraynum.indexOf(result_screen.value))<=-1){
//  console.log("shit")   
// }
document.addEventListener("keypress",(e)=>{
    //   if ((Arraynum.indexOf(e.key))<0){
    //  return result_screen.value = ""
       
        
    // }else{
  
        switch(e.key) {
            case e.key = 'Enter':
                result_screen.value = eval(result_screen.value)
              break;
    
            //   break;
            default:
                
                break;
              // code block
          }


        // }
//     if ( e.key==="Enter"){
//    result_screen.value = eval(result_screen.value)
//    }
         
})


li.forEach((el) => {
// result_screen.value = ""
el.addEventListener("click",(e)=>{
    
   if(i<1 && Array.indexOf(`${e.target.textContent}`)>=0){
 
    
    return result_screen.value = ""

   }else{
    if(e.target.textContent === "="){
        
 result_screen.value = eval(result_screen.value)
 return 
    }
   
    result_screen.value += e.target.textContent
   i++
}
})
});

