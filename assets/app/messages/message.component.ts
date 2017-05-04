import { MessageService } from './message.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [require('./messages.css')]
})
export class MessageComponent {

    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {

    }

    onEdit() {
        this.message.editMode = true;
        this.editClicked.emit('A new Value');
        console.log(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }

    color = 'silver';
}