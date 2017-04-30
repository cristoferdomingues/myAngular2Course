import { Component } from '@angular/core';


@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
    constructor() {

    }

    onLogout() {
        console.log('Logout.component - onLogout');
    }
}