import { ReportProvider } from '../../providers/report/report';
import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceiveMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receive-m',
  templateUrl: 'receive-m.html',
})
export class ReceiveMPage {
  badge: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loading: LoadingController,
    public service: ReportProvider
  ) {
    this.loadBadge();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveMPage');
  }

  loadBadge() {
    let loading = this.loading.create();
    loading.present();
    this.service.getBadge().then((data) => {
      loading.dismiss();
      this.badge = data;
    }, (err) => {
      loading.dismiss();
      console.log(err);
    });
  }
  reportList() {
    this.navCtrl.push('ReceiveReportListPage');
  }
}
