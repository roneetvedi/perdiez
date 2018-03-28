import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {CommonProvider} from '../../providers/common/common';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import { HospitaldetailPage } from '../hospitaldetail/hospitaldetail';
// import { ModalController } from 'ionic-angular';
// import { ConfirmationPage } from '../confirmation/confirmation';

@Component({
  selector: 'page-acceptlist',
  templateUrl: 'acceptlist.html'
})
export class AcceptlistPage {
     public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
   loading = this.Loading;
  userids='';
  url;
  public acceptlist : any;
  constructor(public navCtrl: NavController, 
              public menu: MenuController, 
              public alertCtrl:AlertController,
              public app:App,
              private toastCtrl:ToastController,
              public http:Http,
              public loadingCtrl:LoadingController,
              public common:CommonProvider) {
      this.acceptList();
    this.menu.swipeEnable(false);
   this.userids = localStorage.getItem("USERID");
    console.log(this.userids);
  }

detail(ids){
    this.navCtrl.push(HospitaldetailPage,{hosp_id:ids});
}
  
acceptList(){
           this.loading.present().then(() => {
//       alert("hosp req");
    
       var data = {
       user_id:this.userids
     }
     console.log(data);
    console.log(this.common.options);
var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    console.log(Serialized);
//     alert("hosp req 1");

    this.http.post(this.common.base_url +'request_accept_list', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
//     alert("hosp req 2");
    
      if(data.error == '0'){
//       alert("data displayed");
       this.acceptlist=data.data;
       console.log(this.acceptlist);
       this.url = this.common.banner_url;
      }else{
        //alert(data.message);
  let toast = this.toastCtrl.create({
     message: data.message,
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
}