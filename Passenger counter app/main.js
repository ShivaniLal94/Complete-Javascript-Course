let count=0
let countEl= document.getElementById("countelement")
let saveEl=document.getElementById("save-el")
// console.log(saveEl)

function increment(){ //function declaration
    count=count+1
    countEl.innerText=count
}
increment() //function call/invoke

function save(){ 
    let countStr = count+ " - "
    saveEl.innerText += countStr

    //click the save button, set the value to 0 again and then run
    
    countEl.innerText=0
    count=0
    
    console.log(count)
}
save()

//Rendering error messages
let errorMessage = document.getElementById("error")

function purchase(){
errorMessage.innerText = "Something went wrong"
console.log(errorMessage)
}
purchase()