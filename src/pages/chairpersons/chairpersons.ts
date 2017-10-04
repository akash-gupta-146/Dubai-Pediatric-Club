import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'chairpersons',
  templateUrl: 'chairpersons.html'
})
export class ChairpersonsPage {
  speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
  speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Chairpersons 1', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/chairperson1.png' , type: 'Chairpersons'},
        {name: 'Chairpersons 2', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/chairperson2.png' , type: 'Chairpersons'},
        {name: 'Chairpersons 3', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/chairperson3.png' , type: 'Chairpersons'},
    ]
  }

  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }

}
