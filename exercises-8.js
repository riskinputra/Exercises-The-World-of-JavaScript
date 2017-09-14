// https://jsbin.com/hijudun/edit?js,console

//Tugas 1
function shoutOut(){
  console.log("Halo Function!");
}

shoutOut();

//Tugas 2
var num1 = 5;
var num2 = 6;

var hasilPerkalian = function calculateMultiply(num1,num2){
  return num1 * num2;
}
console.log(hasilPerkalian(num1,num2));

//Tugas 3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = function processSentence(name,age,address,hobby){
  console.log("Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby);
}
fullSentence(name,age,address,hobby);
