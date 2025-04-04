import { Component } from '@angular/core';
import { PollComponent } from './poll/poll.component';

@Component({
  selector: 'app-root',
  imports: [PollComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poll-App-Frontend';
}
