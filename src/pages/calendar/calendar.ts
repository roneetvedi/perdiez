import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ProcessPage } from '../process/process';
import { ListPage } from '../list/list';
import { CalendarModule } from "ion2-calendar";
import {CommonProvider} from '../../providers/common/common';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import{App} from 'ionic-angular';

import jQuery from "jquery";

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
	
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  date: string;
  type: 'string'; 
     loading = this.Loading;
    userids=''; 
    public notedisplayed='';
    public data = {};
    public noteid='';
    public calendardate:any;
  constructor(public navCtrl: NavController,
              public loadingCtrl:LoadingController,
              public common : CommonProvider,
              public app:App,
              private toastCtrl: ToastController,
              public http:Http) {
  this.userids = localStorage.getItem("USERID");
    console.log(this.userids);
	this.dateload();
  }
 

  dateload(){
//	alert('ggggg');
    var data = {
      userid :this.userids
     }
    var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    this.http.post(this.common.base_url +'availability/check', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log('getdates');
	//console.log(data);
	console.log('getdatesend');
    this.Loading.dismiss();
      if(data.error == '0'){
console.log(data);
console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}

jQuery('.forward').click(function(){
	console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}


jQuery('.month-picker button').each(function(){
	
jQuery(this).click(function(){
		console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}
});
});


	
});

jQuery('.back').click(function(){
	console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}
jQuery('.month-picker button').each(function(){
	
jQuery(this).click(function(){
		console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}
});
});
	
});

jQuery('.switch-btn').click(function(){
jQuery('.month-picker button').each(function(){
	
jQuery(this).click(function(){
		console.log(jQuery('#myCalendar .title .switch-btn span').text());
let dd = jQuery.trim(jQuery('#myCalendar .title .switch-btn span').text());
let d = dd.split(' ');
console.log(d)
var val;

if(d[0] == 'Jan')
{
val = 1;
}else
if(d[0] == 'Feb')
{
val = 2;
 
}else
if(d[0] == 'Mar')
{
val = 3;
 
}else
if(d[0] == 'Apr')
{
val = 4;
 
}else
if(d[0] == 'May')
{
val = 5;
 
}else
if(d[0] == 'Jun')
{
val = 6;
}else
if(d[0] == 'Jul')
{
val = 7;
}else
if(d[0] == 'Aug')
{
val = 8;
}else
if(d[0] == 'Sep')
{
val = 9;
}else
if(d[0] == 'Oct')
{
val = 10;
}else
if(d[0] == 'Nov')
{
val = 11;
}else
if(d[0] == 'Dec')
{
val = 12;
}
let datenew = d[1]+'-'+val;

for(var i=0; i<data.data.length; i++){
	let d1 = data.data[i].split('-');
	let d2 = d1[0]+'-'+d1[1];
	if(d2 == datenew){
		
	 jQuery('.days').each(function(){
		 let p = jQuery(this).find('p').text();
		 if(p == d1[2]){
			jQuery(this).addClass('rakhi'); 
		 }
	 });
		
	}
}
});
});
});

      }else{
      
	  let toast = this.toastCtrl.create({
		 message: data.message,
		 duration: 3000,
		 position: 'middle'
	   });
    toast.present();
      }

    })

	
  }
  
 
  
  onChange($event,heroForm) {
//      alert("hiii2");
      console.log($event.date);
      console.log("vikki");
      console.log("hello vikki");
     // this.see_notes(heroForm.value.date._d);
    //console.log("hello vikki");
   var d =heroForm.value.date._d;
    console.log("hello vikki");
   console.log(d.getFullYear());
   console.log(d.getMonth()+1);
   console.log(d.getDate());
   var currentdate=d.getDate();
   var currentyear=d.getFullYear();
   var currentmonth=d.getMonth()+1;
   this.calendardate=currentyear+ '-' +currentmonth+ '-' +currentdate ;
   console.log(this.calendardate);
    this.see_notes(this.calendardate);
  }
  
  calender(heroForm) {
//    console.log($event);
      
    this.loading.present().then(() => {

    var data = {
      userid :this.userids,
      date:this.calendardate,
      note:heroForm.value.notes,
     }
     console.log(data);
    console.log(this.common.options);
var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    console.log(Serialized);
    
    this.http.post(this.common.base_url +'availability/add', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
      if(data.error == '0'){
//       alert("data saved");
        this.app.getRootNav().setRoot(CalendarPage);
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
       })
  }
  
  see_notes(date) {
//    alert("hey");
//    this.loading.present().then(() => {
// let aabc = date
//      let obj = {
//        id: '',
//        status: '',
//      };
//      for (let key in aabc) {
//        
//             obj [aabc[key].split("T")[0]] = [aabc[key].split("T")[1]] ;
//        }
//      alert(JSON.stringify(obj.id));
//      this.aaa=date|date:'dd/MM/yyyy'; 
    var data = {
      userid :this.userids,
      date:this.calendardate
     }
     console.log(data);
    
    console.log(this.common.options);
var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    console.log(Serialized);
    
    this.http.post(this.common.base_url +'availability/mynotes', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
      if(data.error == '0'){
//       alert("data displayed");
        this.notedisplayed=data.data;
//        this.noteid=data.data._id;
//        console.log(this.noteid);
        
//        this.app.getRootNav().setRoot(CalendarPage);
        
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
  
    delete(id) {
//    alert("deleting");
//    this.loading.present().then(() => {

    var data = {
      id :id,
     }
//    alert(JSON.stringify(data));
    console.log(this.common.options);
var optionss = this.common.options;

    var Serialized = this.serializeObj(data);
    console.log(Serialized);
    
    this.http.post(this.common.base_url +'availability/delete', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
      if(data.error == '0'){
//       alert("data deleted");
//        this.notedisplayed=data.data;
        let toast = this.toastCtrl.create({
     message: data.message,
     duration: 3000,
     position: 'middle'
   });
    toast.present();
       // this.app.getRootNav().setRoot(CalendarPage);
         this.app.getRootNav().setRoot(CalendarPage);
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
  
   serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  
  backtoprocess(){
    this.navCtrl.push(ListPage);
   }
}
