import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";

/*
  Generated class for the LokalTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lokal-tab',
  templateUrl: 'lokal-tab.html'
})
export class LokalTabPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LokalTabPage');
  }

  back() {
    this.navCtrl.parent.parent.pop();
  }

  addToCart() {
    this._cartService.addProduct(this.item);
    this.back();
  }

}
