//Modèle du formulaire de contact

export class Contact {

    constructor(
        
        public titre: string,
        public prenom: string,
        public nom: string,
        public pays: string,
        public ville: string,
        public email: string,
        public sujet: string,
        public message: string,
        
        ) {}
    
}