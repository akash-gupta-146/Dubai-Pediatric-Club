import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'pediatricSurgeryPanel',
  templateUrl: 'pediatricSurgeryPanel.html'
})
export class PediatricSurgeryPanelPage {
  speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
  speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'Member 1', designation: 'Pediatric Surgen', venue: ' Le Meridien Hotel', image: 'assets/images/psp1.png' ,  type: 'Panel Member'},
        {name: 'Member 2', designation: 'Pediatric Surgen', venue: ' Le Meridien Hotel', image: 'assets/images/psp2.png' ,  type: 'Panel Member'},
        {name: 'Member 3', designation: 'Pediatric Surgen', venue: ' Le Meridien Hotel', image: 'assets/images/psp3.png' ,  type: 'Panel Member'},
        {name: 'Member 4', designation: 'Pediatric Surgen', venue: ' Le Meridien Hotel', image: 'assets/images/psp4.png' ,  type: 'Panel Member'}
    ]
  }
  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }


}
