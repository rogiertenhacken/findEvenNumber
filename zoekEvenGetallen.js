const numbers = [1,2,3,5,7,6,9,4,8,0]

  const evenNumbers = numbers.filter(number => {
    //console.log(number, ' gaat door de filter functie heen')
    if(number % 2 === 0) {
      return number
    }
})

console.log(evenNumbers);
