import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {
    speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
    speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Speaker 1', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker1.png' , type: 'Speaker'},
        {name: 'Speaker 2', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker2.png' , type: 'Speaker'},
        {name: 'Speaker 3', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker3.png' , type: 'Speaker'},
        {name: 'Speaker 4', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker4.png' , type: 'Speaker'},
    ]
  }

  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }

}
