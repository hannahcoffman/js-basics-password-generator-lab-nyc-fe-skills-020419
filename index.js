window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  function onSubmit(event){
    event.preventDefault()
    const input =document.getElementById('password-length')
    const howManyCharacters = input.value
    // we want to loop and make a random letter every time 
    // like saying start from 0, finish at 9 
    for (let i = 0; i <howManyCharacters; i++) {
      console.log('hi')
    }
  }

  document.addEventListener('submit', onSubmit)
  
});
