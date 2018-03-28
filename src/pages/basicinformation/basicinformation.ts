import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResumeformPage} from '../resumeform/resumeform';
import {HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CommonProvider} from '../../providers/common/common';
import {ResumeoptionPage} from '../resumeoption/resumeoption';

@Component({
    selector: 'page-basicinformation',
    templateUrl: 'basicinformation.html'
})
export class BasicinformationPage {


    public data = {
        prev_physical: '',
        phy_date: '',
        phy_copy: '',
        tb_test: '',
        tb_date: '',
        tb_copy: '',
        cpr_cer: '',
        cpr_exp_date: '',
        cpr_card: '',
        nursing_lic: '',
        nur_lic_exp: '',
        fmlycre_reg: '',
        drug_screen: '',

    }

    public user_id;


    constructor(
        public navCtrl: NavController,
        public http: HttpClient,
        public common: CommonProvider,
    ) {
        this.user_id = localStorage.getItem("USERID");

    }
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    nextsubmit(formdata) { 
        formdata.value.user_id = this.user_id
        console.log(formdata.value)
        var optionss = this.common.options;
        var Serialized = this.serializeObj(formdata.value);

        this.http.post(this.common.base_url + 'userphysicalinfo', formdata.value).subscribe(
            res => {
                console.log(res); 
//                alert(JSON.stringify(res)); 
                if (res.error == 0) {
                    this.navCtrl.push(ResumeoptionPage);
                }
 
            },
            err => {
                console.log("Error occured");
            }
            )


    //  this.navCtrl.push(BasicinformationPage);


        // this.navCtrl.push(ResumeformPage);
    }
}
