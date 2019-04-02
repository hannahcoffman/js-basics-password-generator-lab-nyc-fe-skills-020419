window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = ""
  
  function onSubmit(event){
    event.preventDefault()
    const input =document.getElementById('password-length')
    const howManyCharacters = input.value
    // we want to loop and make a random letter every time 
    // like saying start from 0, finish at 9 
    let startingString = ''
    
    for (let i = 0; i <howManyCharacters; i++) {
    const randomIndex = Math.floor(Math.random() * 26)
    startingString += lowerCaseLetters[randomIndex]
    }
   const output = document.getElementById('result')
   output.innerHTML = startingString
  }

  document.addEventListener('submit', onSubmit)
  
});
