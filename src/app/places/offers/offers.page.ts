import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Place[];
  constructor(private placesService: PlacesService, private route: Router) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.offers;
  }
  onEditClick(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.route.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing Item, ', offerId);
  }
}
