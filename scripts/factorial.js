const iterativeFactorial = num => {
  let factorial = 1;
  for(let i = 1; i <= num; i++)
    factorial *= i;
  return factorial;
}

const recursiveFactorial = num => {
  return (num == 0) ? 1 : num * recursiveFactorial(num - 1);
}

console.log('iterativeFactorial:', iterativeFactorial(0));
console.log('iterativeFactorial:', iterativeFactorial(1));
console.log('iterativeFactorial:', iterativeFactorial(6));

console.log('recursiveFactorial:', recursiveFactorial(0));
console.log('recursiveFactorial:', recursiveFactorial(1));
console.log('recursiveFactorial:', recursiveFactorial(6));