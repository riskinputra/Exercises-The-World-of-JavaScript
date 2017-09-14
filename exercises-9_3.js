//Tugas 3
var tahun = 1992;
if(tahun % 4 === 0){
  if(tahun % 100 !== 0){
    console.log("Tahun "+tahun+" adalah tahun kabisat");
  }else if(tahun % 400){
    console.log("Tahun "+tahun+" adalah tahun kabisat");
  }else{
    console.log("Tahun "+tahun+" adalah bukan tahun kabisat");
  }
}else{
  console.log("Tahun "+tahun+" adalah bukan tahun kabisat");
}