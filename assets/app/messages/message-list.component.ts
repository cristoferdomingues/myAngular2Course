import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit {
    messages: Message[]

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {
        this.messages = this.messageService.getMessage();
    }
}