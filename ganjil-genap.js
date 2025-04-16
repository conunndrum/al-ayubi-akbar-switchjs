
let platnomor = ["B 1284 YAM"] 
let tanggal = 21
let kendaraan = platnomor[0].split (" ")

let ganjil = kendaraan [1] % 2 === 1 && tanggal %2 === 1
let genap = kendaraan [1] % 2 == 0 && tanggal %2 == 0

switch (true){
    case ganjil:
        console.log("lolos")
        break;

    case genap:
            console.log("lolos")
            break;

    default:
        console.log("tidak boleh lewat")
}
