import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  @ViewChild('f') form: NgForm;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel', 'mod1');
  }
  onBookPlace() {
    if (!this.form.valid || !this.datesValid) {
      return;
    }
    this.modalCtrl.dismiss({
      message: 'This is a dummy message.',
      firstName: this.form.value['first-name']
    }, 'confirm', 'mod1');
  }
  datesValid() {
     const startFrom = new Date(this.form.value['date-from']);
     const endDate = new Date(this.form.value['date-to']);
     return endDate > startFrom;
  }
}
