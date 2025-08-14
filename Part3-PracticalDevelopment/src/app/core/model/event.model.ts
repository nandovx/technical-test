import { Person } from './person.model';

export interface Event {
  subscribers: Person[];
}
