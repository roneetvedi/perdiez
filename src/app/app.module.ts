import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { FilterPage } from '../pages/filter/filter';
import { HospitaldetailPage } from '../pages/hospitaldetail/hospitaldetail';
import { FavouritePage } from '../pages/favourite/favourite';
import { NotificationPage } from '../pages/notification/notification';
import { ProcessPage } from '../pages/process/process';
import { CalendarPage } from '../pages/calendar/calendar';
import { ReferralcodePage } from '../pages/referralcode/referralcode';
import { GalleryPage } from '../pages/gallery/gallery';
import { RatePage } from '../pages/rate/rate';
import { SignupsocialPage } from '../pages/signupsocial/signupsocial';
import { BasicinformationPage } from '../pages/basicinformation/basicinformation';
import { ResumeformPage } from '../pages/resumeform/resumeform';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CalendarModule } from "ion2-calendar";
import { Geolocation } from '@ionic-native/geolocation';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ResumeoptionPage } from '../pages/resumeoption/resumeoption';
import { ContactusPage } from '../pages/contactus/contactus';
import { AcceptlistPage } from '../pages/acceptlist/acceptlist';
import { InformationPage } from '../pages/information/information';
import { Ionic2RatingModule } from 'ionic2-rating';
import { DropboxProvider } from '../providers/dropbox/dropbox';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {ImageZoomModule} from 'angular2-image-zoom';
import {File} from '@ionic-native/file';
import { FileTransfer } from "@ionic-native/file-transfer";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileChooser } from '@ionic-native/file-chooser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FilePath } from '@ionic-native/file-path';


@NgModule({
  declarations: [
    MyApp,
    PrivacypolicyPage,
    TermsandconditionsPage,
    AboutusPage,
    ResumeoptionPage,
    ContactusPage,
    HomePage,
    ListPage,
    MainPage,
    SignupPage,
    SigninPage,
    ForgetpasswordPage,
    ChangepasswordPage,
    ProfilePage,
    EditprofilePage,
    FilterPage,
    HospitaldetailPage,
    FavouritePage,
    NotificationPage,
    ProcessPage,
    CalendarPage,
    ReferralcodePage,
    RatePage,
    GalleryPage,
    SignupsocialPage,
    InformationPage,
    AcceptlistPage,
	BasicinformationPage,
	ResumeformPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpModule,
      HttpClientModule,
        CalendarModule,
        Ionic2RatingModule,
        IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    SignupPage,
    SigninPage,
    ForgetpasswordPage,
    ChangepasswordPage,
    ProfilePage,
    EditprofilePage,
    FilterPage,
    HospitaldetailPage,
    FavouritePage,
    NotificationPage,
    ProcessPage,
    CalendarPage,
    ReferralcodePage,
    RatePage,
    GalleryPage,
    PrivacypolicyPage,
    TermsandconditionsPage,
    AboutusPage,
    ResumeoptionPage,
    ContactusPage,
    SignupsocialPage,
    InformationPage,
    AcceptlistPage,
	BasicinformationPage,
	ResumeformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Facebook,
    NativeStorage,
    GooglePlus,
    TwitterConnect,
    HttpClientModule,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    DropboxProvider,
    ImageZoomModule,
    File, 
    Storage, 
    FileTransfer,
    InAppBrowser,
    FileChooser,
    AndroidPermissions,
    SocialSharing,
    FilePath
  ]
})
export class AppModule {}
