// SOAL 1

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objDaftarPeserta = {
    nama : 'Asep',
    'jenis kelamin' : 'laki - laki',
    hobi : 'baca buku',
    'tahun lahir' : 1992
}


// SOAL 2

var namaBuah = [
    { nama : 'strawberry', warna : 'merah', 'ada bijinya' : 'tidak', harga : 9000},
    { nama : 'jeruk', warna : 'oranye', 'ada bijinya' : 'ada', harga : 8000},
    { nama : 'semangka', warna : 'Hijau & merah', 'ada bijinya' : 'ada', harga : 10000},
    { nama : 'pisang', warna : 'kuning', 'ada bijinya' : 'tidak', harga : 5000}
]

console.log(namaBuah[0]);

// SOAL 3
var dataFilm = [];
function objDataFilm(nama, durasi, genre, tahun){

    var namaFilm = {};

    namaFilm.nama = nama;
    namaFilm.durasi = durasi;
    namaFilm.genre = genre;
    namaFilm.tahun = tahun;

    dataFilm.push(namaFilm);

    return namaFilm;

}

var film = objDataFilm('Imperfect: Karier, Cinta & Timbangan', 113 + ' Menit', 'Drama Komedi', 2019);

//SOAL 4

// release 0
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2
    }
    yell() {
        return 'Auooo'
    }

}

class Frog extends Animal{
    constructor (name){
        super(name)
    }
    jump(){
        return 'hop hop';
    }
}

var kodok = new Frog("Buduk");
console.log(kodok.jump());

var sungokong = new Ape("Sungokong");
console.log(sungokong.yell());

// SOAL 5
class Clock{
    constructor({template}){
        
var timer;

function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
}

this.stop = function () {
    clearInterval(timer);
};

this.start = function () {
    render();
    timer = setInterval(render, 1000);
};
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();