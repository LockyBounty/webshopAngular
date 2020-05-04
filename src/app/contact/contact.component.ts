import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Contact} from '../models/Contact.model';
import {ContactService} from '../services/contact.service';
import { Subscription } from 'rxjs';


// interface Titre { // à placer avant @Component, ici, pour faire une liste où on va boucler pour un select
//   value: string;
//   viewValue: string;
// }
interface Titre { 
    value: string;
  }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  
  contactReview : Contact[];
  contactSubscription : Subscription;

  
  titres :Titre[] = [
    {value: 'Service Commercial'},
    {value: 'Support Technique'},
    {value: 'Autre'}
  ];

  constructor(private formBuilder : FormBuilder, private contactService: ContactService) { }

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    champFormControl = new FormControl( '', Validators.required);

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.contactSubscription = this.contactService.contactSubject.subscribe(
      (contact:Contact[])=>{
        this.contactReview = contact;
      }
    )
    this.contactForm = this.formBuilder.group({
      prenom : ['', Validators.required],
      titre : ['', Validators.required],
      nom : ['', Validators.required],
      pays : ['', Validators.required],
      ville : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      sujet : ['', Validators.required],
      message : ['', Validators.required]
    });
    this.contactService.emitContact();
  }

  onSubmitForm(){
    const formValue = this.contactForm.value;
    const contactFormEnvoi = new Contact (
      formValue["titre"],
      formValue['prenom'],
      formValue["nom"],
      formValue["pays"],
      formValue["ville"],
      formValue["email"],
      formValue["sujet"],
      formValue["message"]
    );
    // this.tester = contactFormEnvoi;
    // console.log(this.tester);
    this.contactService.addContact(contactFormEnvoi);
    console.log(this.contactReview);
  }

  test(){
    console.log(this.emailFormControl);
  }
}
