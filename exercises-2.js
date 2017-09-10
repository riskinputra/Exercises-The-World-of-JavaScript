var nama = "riski";
var peran = "Penyihir";

if(nama === "" && peran === ""){
  console.log("Nama tidak boleh kosong");
  console.log("Pilih peranmu untuk memulai game");
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
