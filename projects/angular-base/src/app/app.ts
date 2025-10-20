import { Component } from '@angular/core';
import { MessageDisplayComponent } from './message-display/message-display';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MessageDisplayComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // text in input field
  draftMessage = '';

  // message send to child component (@Input)
  messageToChild = '';

  // number of sent messages
  sentCount = 0;

  // value change in input (view -> model)
  onDraftChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.draftMessage = target.value;
  }

  // click "SEND" (model -> view)
  sendMessage() {
    this.messageToChild = this.draftMessage;
    this.sentCount++;
  }

  // event from child to erase message
  onClearFromChild() {
    this.messageToChild = '';
    this.draftMessage = '';
  }
  get isDraftValid(): boolean {
    return this.draftMessage.trim().length > 0;
  }

}
