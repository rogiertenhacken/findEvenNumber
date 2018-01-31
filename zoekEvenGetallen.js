const numbers = [1,2,3,5,7,6,9,4,8,0]

  const evenNumbers = numbers.filter(number => {
    if(number % 2 === 0) {
      return number
    }
});

console.log(evenNumbers);
