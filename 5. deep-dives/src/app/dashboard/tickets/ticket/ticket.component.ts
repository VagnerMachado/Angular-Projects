import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output()
  detailsVisible = signal(false);
  
  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible)
  }

  onMarkAsCompleted()
  {
    this.close.emit();
  }
}
