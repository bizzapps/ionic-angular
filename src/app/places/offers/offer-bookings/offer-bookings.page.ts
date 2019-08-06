import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel } from '@angular/router';
import { Place } from '../../place.model';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Place;
  constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this.placesService.getOffer(paramMap.get('offerId'));
    });
  }

}
