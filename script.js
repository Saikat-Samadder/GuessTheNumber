let enter = document.getElementById('enterbtn')
let again = document.getElementById('againbtn')
let output = document.getElementById('outputtext')

let randomnumber = Math.floor(Math.random()*100);

function checkNumber(){
    let input = document.getElementById('userinput').value;
    
       if(input == randomnumber){
        output.innerHTML = "You guess right"  + " , " + randomnumber; 
        output.style.color ='green';
       }
       else if
          (input>randomnumber && input<100){
            output.innerHTML = "You guessed too high"
          }
       else if
       (input<randomnumber){
           output.innerHTML = "You guessed too low"
       }
        else if
       (input<1){
           output.innerHTML = "Higher, it has to be between 1 and 100 "
       }
       else if
       (isNaN(input)){
           output.innerHTML = "That is not a number !"
       }
       else{
        output.innerHTML = "Lower, it has to be between 1 and 100 "
       }
}

enter.addEventListener('click', checkNumber);
again.addEventListener('click', function(){
       location.reload();
})
