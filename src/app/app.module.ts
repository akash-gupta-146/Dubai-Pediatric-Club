import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpeakersPage } from '../pages/speakers/speakers';
import { PicuPanelPage } from '../pages/picuPanel/picuPanel';
import { EndocrinePanelPage } from '../pages/endocrinePanel/endocrinePanel';
import { ViewSpeakerPage } from '../pages/viewSpeaker/viewSpeaker';
import { PediatricSurgeryPanelPage } from '../pages/pediatricSurgeryPanel/pediatricSurgeryPanel';
import { PediatricCardiologyPanelPage } from '../pages/pediatricCardiologyPanel/pediatricCardiologyPanel';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { OrganisersPage } from '../pages/organisers/organisers';
import { ChairpersonsPage } from '../pages/chairpersons/chairpersons';
import { PollPage } from '../pages/poll/poll';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SpeakersPage,
    ViewSpeakerPage,
    PicuPanelPage,
    EndocrinePanelPage,
    PediatricSurgeryPanelPage,
    PediatricCardiologyPanelPage,
    SponsorsPage,
    OrganisersPage,
    ChairpersonsPage,
    PollPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SpeakersPage,
    ViewSpeakerPage,
    PicuPanelPage,
    EndocrinePanelPage,
    PediatricSurgeryPanelPage,
    PediatricCardiologyPanelPage,
    SponsorsPage,
    OrganisersPage,
    ChairpersonsPage,
    PollPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
