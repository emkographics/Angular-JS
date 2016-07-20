import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from "./contact";

@Component({
    selector: 'contact',

    template: `
        <div class="contact-wrapper">
            <div>
              <label for="first-name">First Name:</label>
              <input [(ngModel)]="contact.firstname" type="text">
            </div>
            <div>
              <label for="last-name">Last Name:</label>
              <input [(ngModel)]="contact.lastname" type="text">
            </div>
            <div>
              <label for="phone">Phone Number:</label>
              <input [(ngModel)]="contact.phone" type="text">
            </div>
            <div>
              <label for="email">E-Mail:</label>
              <input [(ngModel)]="contact.email" type="text">
            <div>
            <button (click)="onCreateNew()">Create new Contact from this Contact</button>
        </div>
    `,
    inputs: ["contact"]
})
export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {}

    onCreateNew() {
        this._router.navigate(['NewContact', {lastname: this.contact.lastname}])
    }
}