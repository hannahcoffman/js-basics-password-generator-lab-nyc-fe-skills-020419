window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  function onSubmit(event){
    console.log('hi')
    event.preventDefault()
    const input =document.getElementById('password-length')
    const howManyCharacters = input.value
    
  }

  document.addEventListener('submit', onSubmit)
  
});
