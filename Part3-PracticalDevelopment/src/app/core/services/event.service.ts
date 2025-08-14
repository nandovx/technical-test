import { inject, Injectable } from '@angular/core';
import { Event } from '../model/event.model';
import { Person } from '../model/person.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class EventService {
  private toastr = inject(ToastrService);
  private event: Event = { subscribers: [] };
  private eventSubject: BehaviorSubject<Event> = new BehaviorSubject(
    this.event
  );

  event$: Observable<Event> = this.eventSubject.asObservable();

  addSubscriber(person: Person) {
    const exists = this.event.subscribers.find((s) => s.email === person.email);
    if (!exists) {
      this.event.subscribers.push({ ...person });
      this.eventSubject.next({ ...this.event });
      this.toastr.success(`Usuario registrado com sucesso!`);
    } else {
      this.toastr.error(`O email ${person.email} já está sendo usado.`);
    }
  }

  getEvent(): Event {
    return { ...this.event };
  }
}
