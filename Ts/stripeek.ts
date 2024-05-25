class Urun {
    ad: string;
    fiyat: number;

    constructor(ad: string, fiyat: number) {
        this.ad = ad;
        this.fiyat = fiyat;
    }
}

class Sepet {
    urunler: Urun[] = [];

    urunEkle(urun: Urun) {
        this.urunler.push(urun);
    }

    toplamTutar() {
        let toplam = 0;
        for(let urun of this.urunler) {
            toplam += urun.fiyat;
        }
        return toplam;
    }
}


let urun1 = new Urun('Urun 1', 10);
let urun2 = new Urun('Urun 2', 20);
let urun3 = new Urun('Urun 3', 40);

let sepet = new Sepet();
sepet.urunEkle(urun1);
sepet.urunEkle(urun2);


console.log(`Toplam tutar: ${sepet.toplamTutar()} dolar`);
