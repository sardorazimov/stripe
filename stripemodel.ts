class Araba {
    marka: string;
    model: string;
    yil: number;

    constructor(marka: string, model: string, yil: number) {
        this.marka = marka;
        this.model = model;
        this.yil = yil;
    }

    bilgiGoster() {
        return `${this.marka} ${this.model}, ${this.yil} modeldir.`;
    }
}

let araba = new Araba('Toyota', 'Corolla', 2020);
console.log(araba.bilgiGoster());  // Çıktı: Toyota Corolla, 2020 modeldir.
