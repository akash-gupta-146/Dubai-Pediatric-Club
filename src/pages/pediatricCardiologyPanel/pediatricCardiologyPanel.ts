import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'pediatricCardiologyPanel',
  templateUrl: 'pediatricCardiologyPanel.html'
})
export class PediatricCardiologyPanelPage {
  speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
  speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Dr.Pediatric', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/pcp1.png', type: 'Panel Member'},
        {name: 'Dr.Name 2', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/pcp2.png', type: 'Panel Member'},
    ]
  }
  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }


}
