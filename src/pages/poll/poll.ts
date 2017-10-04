import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'poll',
  templateUrl: 'poll.html',
  styles: [`
  .item-radio-checked{
    background: #bfbfbf !important;
    color:white; 
  }
  `]
})
export class PollPage {
  polls: { question: string; option1: string; option2: string; option3: string; option4: string; }[];

  constructor(public navCtrl: NavController) {
    this.polls = [
      {question: 'Have you attended last conferences?', option1: 'Yes, Both', option2: 'Second one', option3:'First One', option4:'No'},
      {question: 'Which speakers did you like the most?', option1: 'Speaker 1', option2: 'Speaker 2', option3:'Speaker 3', option4:'Speaker 4'},
      {question: 'Are you part of organisers?', option1: 'Yes', option2: 'No', option3:'Relative', option4:null},
      {question: 'Would you like to attend next conference?', option1: 'Yes', option2: 'No', option3:'Not Sure', option4:null},
    ]
  }

}
