import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DropboxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DropboxProvider {

  accessToken: any;
folderHistory: any = [];
appKey: any;
redirectURI: any;
url: any;
 
constructor(public http: HttpClient, public iab: InAppBrowser) {
 
    //OAuth
    this.appKey = 'b4tucj2g56vm0qs';
    this.redirectURI = 'http://localhost';
    this.url = 'https://www.dropbox.com/1/oauth2/authorize?client_id=' + this.appKey + '&redirect_uri=' + this.redirectURI + '&response_type=token';
 
}
login(){
 
  return new Promise((resolve, reject) => {
 
    let browser = this.iab.create(this.url, '_blank');
 
    let listener = browser.on('loadstart').subscribe((event: any) => {
 
      //Ignore the dropbox authorize screen
      if(event.url.indexOf('oauth2/authorize') > -1){
        return;
      }
 
      //Check the redirect uri
      if(event.url.indexOf(this.redirectURI) > -1 ){
        listener.unsubscribe();
        browser.close();
        let token = event.url.split('=')[1].split('&')[0];
        this.accessToken = token;
        resolve(event.url);
      } else {
        reject("Could not authenticate");
      }
 
    });
 
  });
}

}
