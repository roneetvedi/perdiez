import { Component } from '@angular/core';
import { NavController ,App} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {CommonProvider} from '../../providers/common/common';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
// import { ModalController } from 'ionic-angular';
// import { ConfirmationPage } from '../confirmation/confirmation';

@Component({   
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
     public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
   loading = this.Loading;
  userids='';
  url;
  public hospdata : any;
  constructor(public navCtrl: NavController, 
              public menu: MenuController, 
               public app:App,
              private toastCtrl: ToastController,
              public http:Http,
              public loadingCtrl:LoadingController,
              public common : CommonProvider,
              public alertCtrl: AlertController) {
       this.hosprequest();
    this.menu.swipeEnable(false);
    this.userids = localStorage.getItem("USERID");
    console.log(this.userids);
   
  }
  
    hosprequest(){
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

    this.http.post(this.common.base_url +'requestlist', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
//     alert("hosp req 2");
    
      if(data.error == '0'){
//       alert("data displayed");
       this.hospdata=data.data;
       console.log(this.hospdata);
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
   
  cnfrmatn(_id) {
      console.log(_id);
    let confirm = this.alertCtrl.create({
      title: ' <div class="ttl">Confirmation</div> ',
      message: '<p class="msg">Do you really want to  accept?</p>',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
            
          }
        },
     
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
            alert("Request Acepted")
               var data = {
            req_id:_id
            }
            console.log(data);
            console.log(this.common.options);
            var optionss = this.common.options;

            var Serialized = this.serializeObj(data);
            console.log(Serialized);
//     alert("hosp req 1");

            this.http.post(this.common.base_url +'request_accept', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
            console.log(data);
            this.Loading.dismiss();
//     alert("hosp req 2");
      
            if(data.error == '0'){
                this.app.getRootNav().setRoot(NotificationPage);
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'middle'
              });
              toast.present();
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
          }
        }
        
      ],
      cssClass: 'alertCustomCss'
    });
    // confirm.setCssClass('custom-confirm');
    confirm.present();
  }
  
  
  confirmation(_id) {
      console.log(_id);
    let confirm = this.alertCtrl.create({
      title: ' <div class="ttl">Confirmation</div> ',
      message: '<p class="msg">Do you really want to Reject?</p>',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          
          }
        },
     
        {
          text: 'OK',
          handler: () => {
//            console.log('Agree clicked');
               alert("req reject");
             var data = {
            req_id:_id
            }
            console.log(data);
            console.log(this.common.options);
            var optionss = this.common.options;

            var Serialized = this.serializeObj(data);
            console.log(Serialized);
//     alert("hosp req 1");

            this.http.post(this.common.base_url +'request_reject', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
            console.log(data);
            this.Loading.dismiss();
//     alert("hosp req 2");
      
            if(data.error == '0'){
                this.app.getRootNav().setRoot(NotificationPage);
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'middle'
              });
              toast.present();
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
          }
        }
        
      ],
      cssClass: 'alertCustomCss'
    });
    // confirm.setCssClass('custom-confirm');
    confirm.present();
  }
    serializeObj(obj) {
    var result = []; 
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}