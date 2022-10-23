var input = document.querySelector('input')
var button = document.querySelector('button')
var pered = document.querySelector('.pered')

var result = []

button.addEventListener('click', function (){
   if(input.value.trim()!=='') {
       var newDiv = document.createElement('div')
       result.push(input.value)
       console.log(result)
       newDiv.innerHTML = input.value
       document.body.insertBefore(newDiv,pered)
   }else{
       return
   }
   input.value=''
})