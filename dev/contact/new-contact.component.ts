import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from "./contact";

@Component({
    template: `
      <form #myForm="ngForm" (ngSubmit)="onSubmit()" class="contact-wrapper">
            <div>
              <label for="first-name">First Name:</label>
              <input id="first-name" type="text"
                ngControl="firstname"
                [(ngModel)]="newContact.firstname"
                required
              >
            </div>
            <div>
              <label for="last-name">Last Name:</label>
              <input id="last-name" type="text" 
                ngControl="lastname"
                [(ngModel)]="newContact.lastname"
                required
              >
            </div>
            <div>
              <label for="phone">Phone Number:</label>
              <input id="phone" type="text"
                ngControl="phone"
                [(ngModel)]="newContact.phone"
                required
              >
            </div>
            <div>
              <label for="email">E-Mail:</label>
              <input id="email" type="text"
                ngControl="email"
                [(ngModel)]="newContact.email"
                required
              >
            <div>
            <button type="submit" [disabled]="!myForm.form.valid"> Create Contact </button>
        </div>
    `,
    providers: [ContactService]
})
export class NewContactComponent implements OnInit {

   // public passedlastname = "";

   newContact: Contact;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {

    }

    onSubmit() {
      this._contactService.insertContact(this.newContact);
      this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
      this.newContact = {firstname: '', lastname: this._routeParams.get('lastname'), phone: '', email: ''};
    }
}