import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class ContactService {

    private contactFormEnvoyes : Contact[] = [
        {
            titre : "",
            prenom : "",
            nom : "",
            pays : "",
            ville : "",
            email : "",
            sujet : "",
            message : "",
        },    
    ];

    contactSubject = new Subject<Contact[]>();

    emitContact(){
        this.contactSubject.next(this.contactFormEnvoyes.slice());
    }

    addContact(contact : Contact){
        this.contactFormEnvoyes.push(contact);
        this.emitContact();
    }
    // test(){
    //   console.log(this.produits[1].prix.euro);
    // }


    constructor() { }
}
