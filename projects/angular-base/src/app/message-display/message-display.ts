import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-display',
  standalone: true,
  templateUrl: './message-display.html',
  styleUrl: './message-display.css'
})
export class MessageDisplayComponent {
  @Input() message: string = ''; // vstupný property
  @Output() clear = new EventEmitter<void>(); // vystupný event

  requestClear() {
    this.clear.emit();
  }
}
