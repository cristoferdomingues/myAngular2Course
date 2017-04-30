import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [require('./messages.css')]
})
export class MessageComponent {
    constructor() {

    }

    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit('A new Value');
    }

    color = 'red';
}