const nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const filtering = function (inisial, max, callback) {
  let filterNama = nama
    .filter((nama) => nama.includes(inisial.toLowerCase()))
    .slice(0, max);
  callback(filterNama);
};

const callback = function (filterNama) {
  console.log(filterNama);
};

const searchName = function (inisial, max, callback) {
  try {
    if (typeof inisial != "string" && typeof max != "number")
      throw "inisial harus string dan max harus number";
    if (typeof inisial != "string") throw "inisial harus string";
    if (typeof max != "number") throw "max harus number";
    if (!inisial) throw "inisial harus diisi";
    filtering(inisial, max, callback);
  } catch (err) {
    console.log(err);
  }
};

searchName("a", 5, callback);
searchName(2, "2", callback);
searchName(2, 2, callback);
searchName("el", "2", callback);
searchName("", 2, callback);
