import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ListPage } from '../list/list';
import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu: MenuController,) {
 if(localStorage.getItem('USERID') != null){
          this.navCtrl.push(ListPage);
        }
        this.menu.swipeEnable(false);
  }
  lgin(){
      this.navCtrl.push(SigninPage);
  }

  main(){
    this.navCtrl.push(MainPage);
   }
  

}
