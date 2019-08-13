import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'pl1',
      'President\'s Palace',
      'In the heart of Dhaka',
      'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/dhaka_29.jpg?itok=cIt0Bgyb',
      150),
      new Place(
        'pl2',
        'City Inn Hotel',
        'In the heart of Khulna',
        'https://www.greenchannelbd.com/wp-content/uploads/2016/10/1-3.jpg',
        50
      ),
      new Place(
        'pl3',
        'The Palace',
        'The 5 star hotel at Sylhet ',
        'http://hotjobs.bdjobs.com/jobs/palaceresort/head24.jpg',
        250
      ),
      new Place(
        'pl4',
        'Ruposhi Bangla Hotel',
        'The first 5 star hotel in Bangladesh',
        'https://www.royaltoursbangladesh.com/images/hotels/Ruposhi%20Bangla%20Hotel%203.jpg',
        450
      )
  ];
  get places() {
    return [...this._places];
  }
  get offers() {
    return [...this._places];
  }
  getOffer(placeId: string) {
    return {...this._places.find(p => p.id === placeId)};
  }
  getPlace(placeId: string) {
    return {...this._places.find(p => p.id === placeId)};
  }
  constructor() { }
}
