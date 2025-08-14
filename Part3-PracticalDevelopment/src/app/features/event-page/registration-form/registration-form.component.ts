import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../../core/model/person.model';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from '../../../core/services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  person: Person = {
    name: '',
    email: '',
  };

  private eventService = inject(EventService);
  private toastr = inject(ToastrService);

  submitForm() {
    if (!this.person.name || this.person.name.length < 3) {
      this.toastr.warning(`Nome inválido`);
      return;
    }

    if (!this.person.email || this.emailVerify()) {
      this.toastr.warning(`Email inválido`);

      return;
    }
    this.eventService.addSubscriber(this.person);
  }

  emailVerify(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !regex.test(this.person.email);
  }
}
