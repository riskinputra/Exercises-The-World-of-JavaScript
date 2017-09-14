// https://jsbin.com/wehecu/edit?js,console

var nama = "riski"; //Masukkan nama anda
var peran = "Penyihir"; // Input peran dengan 'Ksatria', 'Penyihir', 'Tabib'
var tahunLahir = 1993;
var umur = 2016 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if(nama === "" || peran === ""){
  peran = "Kacung"
  console.log("Nama atau Peran harus diisi jika tidak peranmu sebagai "+ peran);
}else if(nama === nama && peran === "Ksatria"){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", kamu dapat menyerang dengan senjatamu!");
}else if(nama === nama && peran === "Tabib"){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", kamu akan membantu temanmu yang terluka.");
}else if(nama === nama && peran === "Penyihir"){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", kamu akan membantu temanmu yang terluka.");
}else{
  console.log("Error !!");
}

for (var i=1; i <= tahunLahir; i++) {
  if (i % umur === 0 ) {
   console.log(peran + ' ' + nama + ' menyerang monster!');
   monsterHealth = monsterHealth - umur;
  }else if (i % kodeMonster === 0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  }else if (i % umur === 0 && i % kodeMonster === 0){
    console.log('Health keduanya bertambah')
    monsterHealth = monsterHealth + umur;
    playerHealth = playerHealth + kodeMonster;
  }
}


if(playerHealth > monsterHealth ){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}else{
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
