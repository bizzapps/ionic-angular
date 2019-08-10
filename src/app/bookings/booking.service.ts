import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'bk1',
      placeId: 'pl1',
      guestNumber: 2,
      placeTitle: 'City Inn Hotel',
      userId: 'usr1'
    },
    {
      id: 'bk2',
      placeId: 'pl1',
      guestNumber: 4,
      placeTitle: 'City Inn Hotel',
      userId: 'usr3'
    }
  ];
  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
