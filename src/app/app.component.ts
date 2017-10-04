import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpeakersPage } from '../pages/speakers/speakers';
import { PicuPanelPage } from '../pages/picuPanel/picuPanel';
import { EndocrinePanelPage } from '../pages/endocrinePanel/endocrinePanel';
import { PediatricSurgeryPanelPage } from '../pages/pediatricSurgeryPanel/pediatricSurgeryPanel';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { PediatricCardiologyPanelPage } from '../pages/pediatricCardiologyPanel/pediatricCardiologyPanel';
import { OrganisersPage } from '../pages/organisers/organisers';
import { ChairpersonsPage } from '../pages/chairpersons/chairpersons';
import { PollPage } from '../pages/poll/poll';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'assets/icons/home.png' },
      { title: 'Organisers', component: OrganisersPage, icon: 'assets/icons/organiser.png'  },
      { title: 'Chairpersons', component: ChairpersonsPage, icon: 'assets/icons/chairperson.png'  },
      { title: 'Speakers', component: SpeakersPage, icon: 'assets/icons/speaker.png'  },
      { title: 'PICU/NICU Panel', component: PicuPanelPage, icon: 'assets/icons/picu.png'  },
      { title: 'Endocrine Panel', component: EndocrinePanelPage, icon: 'assets/icons/endocrine.png'  },
      { title: 'Pediatric Surgery Panel', component: PediatricSurgeryPanelPage, icon: 'assets/icons/psp.png'  },
      { title: 'Pediatric Cardiology Panel', component: PediatricCardiologyPanelPage, icon: 'assets/icons/pcp.png'  },
      { title: 'Poll', component: PollPage, icon: 'assets/icons/poll.png'  },
      { title: 'Sponsors', component: SponsorsPage, icon: 'assets/icons/sponsor.png'  },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
