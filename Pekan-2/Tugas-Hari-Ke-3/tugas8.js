// SOAL 1

//LUAS LINGKARAN
let jari = 10
const luasLingkaran = jari => 3.14 * jari * jari;
console.log(luasLingkaran(jari));

//KELILING LINGKARAN
let diameter = 20
const kelilingLingkaran = diameter => 3.14 * diameter;
console.log(kelilingLingkaran(diameter)); 


// SOAL 2
let kalimat = ""

const tambahKata = (satu, dua, tiga, empat, lima) =>{
    
    kalimat = `${satu} ${dua} ${tiga} ${empat} ${lima}`

    return kalimat;

}
console.log(tambahKata('saya', 'adalah', 'seorang', 'frontend', 'developer'));

// SOAL 3

class Book {
    constructor(name, totalPage, price){
        this.name = name;
        this.totalPage = totalPage;
        this.price = price
    }
    present (){
        return `
        Name : ${this.name}
        Total Page : ${this.totalPage}
        price : ${this.price}`;
    }
}

class Comic extends Book{
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price)
        this.isColorful = isColorful;
    }
    show(){
        return `
        ${this.present()} 
        Berwarna atau tidak : ${this.isColorful}`;
    }
}

myComic = new Comic('Hunter X Hunter', 89, 12000, false)
console.log(myComic.show());