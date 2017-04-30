import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms'


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {

    }

    onSubmit(form: NgForm) {
        const message: Message = new Message(form.value.content, 'Crístofer');
        this.messageService.addMessage(message);
        form.resetForm();
    }
}