import { Component } from '@angular/core';
import { EventDetailComponent } from './event-details/event-detail.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    EventDetailComponent,
    RegistrationFormComponent,
    MatIconModule,
  ],
})
export class EventPageComponent {}
