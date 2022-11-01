result_screen = document.querySelector("#result_screen")
li = document.querySelectorAll("li")
// input = document.getElementsByName("minus")[0]
// for(el of li){
//    console.log(el.value)
// }
// console.log(input.dataset.cal)
Array  = ["0",".","+","-","*","="]
i =0
li.forEach((el) => {
el.addEventListener("click",(e)=>{

   if(i<1 && Array.indexOf(`${e.target.textContent}`)>=0){
 

    return

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

