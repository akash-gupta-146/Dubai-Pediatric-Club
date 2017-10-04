import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'organisers',
  templateUrl: 'organisers.html'
})
export class OrganisersPage {
  speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
  speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Organiser 1', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/organizer1.png' , type: 'Organiser'},
        {name: 'Organiser 2', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/organizer2.png' , type: 'Organiser'},
        {name: 'Organiser 3', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/organizer3.png' , type: 'Organiser'},
    ]
  }

  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }

}
