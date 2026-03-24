let bulb =  document.querySelector('#bulb')
let btn = document.querySelector('button')

let flag = 0 

 btn.addEventListener('click' , ()=>{
    if(flag == 0){
         bulb.style.backgroundColor = "yellow"
         console.log('clicked');
         flag = 1
         
     }else {
         bulb.style.backgroundColor = "transparent"
         console.log('reclick');
         flag = 0    
    }
    
})
