// soal 1

var nilaiAwal = 1;
var awal = 'looping pertama';
var kedua = 'looping kedua';

console.log(awal.toUpperCase());
while (nilaiAwal <= 20) {

    if (nilaiAwal % 2 === 0) {
        console.log(nilaiAwal + ' - I love coding');
    } else {

    }
    nilaiAwal++;
}

console.log(kedua.toUpperCase());
while (nilaiAwal > 0) {

    if (nilaiAwal % 2 === 0) {
        console.log(nilaiAwal + ' - I will become a frontend developer');
    } else {

    }
    nilaiAwal--;
}

// soal 2

var jmlhAngka = 20;
var noAngka = 1;

for (var noAngka; noAngka <= jmlhAngka; noAngka++) {
    if ((noAngka % 3 === 0) && (noAngka % 2 !== 0)) {
        console.log(noAngka + ' - I Love Coding');
    } else if (noAngka % 2 !== 0) {
        console.log(noAngka + ' - Santai');
    } else if (noAngka % 2 === 0) {
        console.log(noAngka + ' - Berkualitas');
    }
}

//soal 3

var x = "";

for (var i = 0; i < 7; i++) {
    for (var u = 0; u <= i; u++) {
        x += '#'
    }
    x += "\n"
}

console.log(x);

//soal 4

var kalimat = "saya sangat senang belajar javascript";

var kalimat_1 = kalimat.split(" ");
console.log(kalimat_1);

//soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuah_1 = daftarBuah.sort();
var z = ""
for (var i = 0; i <= 4; i++) {
    console.log(daftarBuah[i]);
}