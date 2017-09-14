// https://jsbin.com/fikadiq/edit?js,console

function reverseString(inputString) {
  return inputString.split('').reverse().join('').split(' ').join(' ,');
}
console.log(reverseString('hello world!'));
