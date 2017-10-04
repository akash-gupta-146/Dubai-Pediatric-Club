import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'viewSpeaker',
  templateUrl: 'viewSpeaker.html'
})
export class ViewSpeakerPage {
  speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.speaker = navParams.get('speaker');
  }



}
