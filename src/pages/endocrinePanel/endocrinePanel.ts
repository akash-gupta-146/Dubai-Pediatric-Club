import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'endocrinePanel',
  templateUrl: 'endocrinePanel.html'
})
export class EndocrinePanelPage {
    speaker: any;
    speakersList: { name: string; designation: string; venue: string; image: string; }[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Dr.Diarymohammed Mohammed', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker1.png'},
        {name: 'Dr.Diarymohammed Mohammed', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker2.png'},
        {name: 'Dr.Diarymohammed Mohammed', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker3.png'},
        {name: 'Dr.Diarymohammed Mohammed', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/spkeaker4.png'},

    ]
  }
  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }


}
