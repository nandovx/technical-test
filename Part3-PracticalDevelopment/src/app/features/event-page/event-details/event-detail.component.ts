import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { EventService } from '../../../core/services/event.service';
import { Person } from '../../../core/model/person.model';
import { Event } from '../../../core/model/event.model';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent {
  private eventService = inject(EventService);
  subscribers: Person[] = [];

  ngOnInit() {
    this.eventService.event$.subscribe((event: Event) => {
      this.subscribers = event.subscribers;
    });
  }
}
