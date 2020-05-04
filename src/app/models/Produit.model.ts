export class Produit {

    constructor(
        public id: number,
        public photo: string,
        public titre: string,
        public description: string,
        public prix: {euro:number, centimes:number, total:number}
        ) {}
    
}