import { Component } from '@angular/core';
import { NavController,NavParams,Events } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {CommonProvider} from '../../providers/common/common';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { ListPage } from '../list/list';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-referralcode',
  templateUrl: 'referralcode.html'
})
export class ReferralcodePage {
     public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  constructor(public navCtrl: NavController,private socialSharing: SocialSharing,
    public navParams: NavParams,public http:Http,public events:Events,
    public common : CommonProvider, private toastCtrl: ToastController,
    public loadingCtrl:LoadingController) {
    this.userid = localStorage.getItem("USERID");
    console.log(this.userid);
    this.show_details();
  }
  nextlist(){
    this.navCtrl.push(ListPage);
   }
show_details(){
var Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
Loading.present().then(() => {

    var data = {
      id :this.userid,
      
    }
    console.log(this.common.options);
var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    console.log(Serialized);
    
    this.http.post(this.common.base_url +'users/userdetailbyid', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
       // alert(JSON.stringify(data));
    console.log(data);
    Loading.dismiss();
      if(data.error == 0){
        this.showdata=data.data.reffral_code;
         }else{
        alert(data.message);
         let toast = this.toastCtrl.create({
     message: "Error in fetching referral code",
     duration: 3000,
     position: 'middle'
   });
    toast.present();
      }

    })
       })
 }
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
shareCode() {
alert("rere");
  this.socialSharing.shareWithOptions({
    
    message: `"Referral Code" - " ${this.showdata}:"Thank You Team Perdiez."`
  }).then(() => {
    console.log('Shared!');
  }).catch((err) => {
    alert('Oops, something went wrong:', JSON.stringify(err));
  });
}
}
