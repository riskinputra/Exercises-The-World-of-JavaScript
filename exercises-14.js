// https://jsbin.com/fonemif/edit?js,console

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4,1,"Pria", "SMA Internasional Metro");
  console.log(input);

  var bulan = input[3].split("/");
  if(bulan[1]=="01"){
      console.log("Januari");
  }else if(bulan[1]=="02"){
      console.log("Februari");
  }else if(bulan[1]=="03"){
      console.log("Maret");
  }else if(bulan[1]=="04"){
      console.log("April");
  }else if(bulan[1]=="05"){
      console.log("Mei");
  }else if(bulan[1]=="06"){
      console.log("Juni");
  }else if(bulan[1]=="07"){
      console.log("Juli");
  }else if(bulan[1]=="08"){
      console.log("Agustus");
  }else if(bulan[1]=="09"){
      console.log("September");
  }else if(bulan[1]=="10"){
      console.log("Oktober");
  }else if(bulan[1]=="11"){
      console.log("November");
  }else{
    console.log("Desember");
  }

  var tgl = input[3].split("/").map(function(item) {
    return parseInt(item, 10);
   });
  tgl.sort(function(value1, value2) { return value1 < value2 });
  console.log(tgl);

  console.log(tgl.join("-"));

  var max = input[1].split("");
  var max1= max.slice(0,15);
  console.log(max1.join(""));

}

dataHandling2(input);
