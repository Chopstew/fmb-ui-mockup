import { Component } from '@angular/core';
import { SharedModule } from "@shared/shared.module";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class ChatComponent {
  selectedChat: string = "Alle";
}
