import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './message.model';

/**
* This class provides the Message service 
*/
@Injectable()
export class MessageService {
    private messages: Message[] = [];

    addMessage(message) {
        this.messages.push(message);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}