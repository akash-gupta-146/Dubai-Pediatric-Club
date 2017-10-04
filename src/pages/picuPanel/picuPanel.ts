import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewSpeakerPage } from '../viewSpeaker/viewSpeaker';

@Component({
  selector: 'picuPanel',
  templateUrl: 'picuPanel.html'
})
export class PicuPanelPage {
    speakersList: { name: string; designation: string; venue: string; image: string; type: string; }[];
    speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [
        {name: 'PICU Member 1', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/picu1.png' , type: 'Panel Member'},
        {name: 'PICU Member 2', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/picu2.png' , type: 'Panel Member'},
        {name: 'PICU Member 3', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/picu3.png' , type: 'Panel Member'},
        {name: 'PICU Member 4', designation: 'Consultant Pediatric Surgeon', venue: ' Le Meridien Hotel', image: 'assets/images/picu4.png' , type: 'Panel Member'},

    ]
  }

  viewSpeaker(speaker){
    this.speaker = speaker;
    this.navCtrl.push(ViewSpeakerPage,{ 'speaker': this.speaker });
  }


}
