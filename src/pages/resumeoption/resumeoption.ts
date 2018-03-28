import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,Platform } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CommonProvider} from '../../providers/common/common';
import { ProcessPage } from '../process/process';
import { ResumeformPage } from '../resumeform/resumeform';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';
import { DropboxProvider } from '../../providers/dropbox/dropbox';
import { FileChooser } from '@ionic-native/file-chooser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { FilePath } from '@ionic-native/file-path';

/**
 * Generated class for the ResumeoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumeoption',
  templateUrl: 'resumeoption.html',
})
export class ResumeoptionPage {

public GO:any = '';
public accessToken: any;
public folderHistory: any = [];
public appKey: any;
public redirectURI: any;
public url: any;
public fileSelected: any;
public docUri: any;
public showname: any;
    public data={
    resume_copy:'',
}

  constructor(
      public navCtrl: NavController,
      private platform:Platform,private FilePath: FilePath,
      private transfer: FileTransfer, private androidPermissions: AndroidPermissions,
      private file: File,private iab:InAppBrowser,
      public actionSheetCtrl: ActionSheetController,
      public navParams: NavParams,
      public dropbox: DropboxProvider,
      private fileChooser: FileChooser,
      public common: CommonProvider,
       ) {
       this.GO = "GO";
       //OAuth
    this.appKey = 'b4tucj2g56vm0qs';
    this.redirectURI = 'http://localhost';
    this.url = 'https://www.dropbox.com/1/oauth2/authorize?client_id=' + this.appKey + '&redirect_uri=' + this.redirectURI + '&response_type=token';
 
  }
  
  public radioChecked(data){
      if(data=='Y'){
          this.GO = "Upload";
      }else{
          this.GO = "GO";
      }
  }
  public nextsubmit(resume){
      if(resume==''){
          alert('Select option')
      }else if(resume=='Y'){
          this.presentActionSheet();
//           this.navCtrl.push(ProcessPage);
      }else if(resume=='N'){
           this.navCtrl.push(ResumeformPage);
      }
      console.log(resume)
  }
  
  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Upload your Resume',
     buttons: [
       
       {
         text: 'Gallery',
         handler: () => {
             this.browseAttachment();
           console.log('Destructive clicked');
           }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }
 
browseAttachment() {
 alert("open");
 if (this.platform.is('android')) {
 this.chooseFileAndroid();
 } else if (this.platform.is('ios')) {
 this.chooseFileIOS();
 } else {
 }
 }
  chooseFileAndroid() {
 var hh=this;
 this.fileChooser.open()
 .then(uri => {
 this.checkPermission(uri)
 })
 .catch(e => console.log('error'));
 }
 
checkPermission(uri) 
    {
 this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
 success => {
 try {
 (<any>window).FilePath.resolveNativePath(uri, (result) => {
     
  alert('result ' + result)
 this.fileSelected = 1;
 this.docUri = result;
 }, error => {
//  alert("hdbh"+error);
 })
 } catch (error) {
  alert("roneet"+error);
 }
 },
 err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
 );
 
 this.androidPermissions.requestPermissions(
 [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE])
 .then(suucess=>{
 try {
 (<any>window).FilePath.resolveNativePath(uri, (result) => {
  alert('result ' + result)
 this.fileSelected = 1;
 this.docUri = result;
 this.resumeupload();
 this.showname=this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
 }, error => {
//  alert("sdyhuydf"+error);
 })
 } catch (error) {
// alert(error);
 }
 }
 )
}
 
 resumeupload()
     {
     alert("upload")
        const fileTransfer: TransferObject = this.transfer.create();   
          let currentName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);    
//alert('currentName ' + currentName);    
 let options1: FileUploadOptions = {      
  fileKey: 'resume',        
   fileName: currentName,        
   headers: {},       
    mimeType:"application/pdf",     
       params: {      
            action: "docupload",      
   
             
                },      
  chunkedMode: false    
}  
    //alert('data '+options1);    
      this.commonProvider = new CommonProvider(this.loadingCtrl);  
        //  this.commonProvider.Loader.present();  
          var Loading = this.loadingCtrl.create({    
            spinner: 'bubbles',  
                showBackdrop: false,     
                 cssClass: 'loader'   
                      });    
                      
//Loading.present().then(() => {    
    alert("ghjgj");
  fileTransfer.upload(this.docUri, "http://rupak.crystalbiltech.com/hospital/api.php", options1)  
      .then((data) => {      
          console.log('data ' + JSON.stringify(data));     
               alert('data ' + JSON.stringify(data));   
//                    Loading.dismiss()   
                    this.nxtapi();  
                }).catch((error)=>{     
               Loading.dismiss()        
          alert("error" + JSON.stringify(error));          
   });    
//})
 }
 nxtapi()
     {
     alert("galal");
 }
 chooseFileIOS()
     {
     
 }
  ionViewDidLoad() 
      {
    console.log('ionViewDidLoad ResumeoptionPage');
  }

}
