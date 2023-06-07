function SeleksiNilai(nilaiAwal, nilaiAkhir, arr, callback) {
  try {
    if (typeof nilaiAwal != "number" || typeof nilaiAkhir != "number")
      throw "parameter harus number";
    if (nilaiAwal > nilaiAkhir)
      throw "Nilai akhir harus lebih besar dari nilai awal";
    if (arr.length < 5) throw "Jumlah angka dalam dataArray harus lebih dari 5";
    seleksi(nilaiAwal, nilaiAkhir, arr, callback);
  } catch (error) {
    console.log(error);
  }
}

function seleksi(nilaiAwal, nilaiAkhir, arr, callback) {
  arr.sort(function (a, b) {
    return a - b;
  });
  const fil = arr.filter((batas) => batas >= nilaiAwal && batas <= nilaiAkhir);
  if (!fil.length) throw "Nilai tidak ditemukan";
  callback(fil);
}

function callback(fil) {
  console.log(fil);
}

SeleksiNilai(5, 20, [2, 25, 14, 17, 30, 8], callback);
SeleksiNilai(15, 3, [2, 25, 14, 17, 30, 8], callback);
SeleksiNilai(5, 17, [2, 25, 14], callback);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18], callback);
