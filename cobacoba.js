
function caripanjang(array,callback) {
    let arr = array
    console.log(typeof arr); 
    callback(arr)
}

function callback(arr) {
    console.log(arr);
}

caripanjang([2, 25, 4, 14, 17, 30, 8],callback)

















