import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CommonProvider} from '../../providers/common/common';
import { ProcessPage } from '../process/process';
@Component({
    selector: 'page-resumeform',
    templateUrl: 'resumeform.html'
})
export class ResumeformPage {

    resume_Form: FormGroup;


    public resumedata = {
        education: {
            voc_edu: {
                name_address: '',
                date: '',
                graduate: '',
                degree_earned: ''
            },
            hospital: {
                name_address: '',
                date: '',
                graduate: '',
                degree_earned: ''
            },
            college: {
                name_address: '',
                date: '',
                graduate: '',
                degree_earned: ''
            },
            additional_edu: {
                name_address: '',
                date: '',
                graduate: '',
                degree_earned: ''
            }
        },
        professional_ref: {
            ref_1: {
                degree_earned: '',
                phone: '',
                address: '',
                certification: '',
            },
            ref_2: {
                degree_earned: '',
                phone: '',
                address: '',
                certification: '',
            },
            ref_3: {
                degree_earned: '',
                phone: '',
                address: '',
                certification: '',
            },
            ref_4: {
                degree_earned: '',
                phone: '',
                address: '',
                certification: '',
            }
        },
        work_his: {
            pres_emp: {
                name: '',
                unit_floor: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                supervisor_name: '',
                date: '',
                title: '',
                position_duties: '',
                shift_worked: '',
                leav_reason: '',
                sal_pay: '',
            },
            prev_1: {
                name: '',
                unit_floor: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                supervisor_name: '',
                date: '',
                title: '',
                position_duties: '',
                shift_worked: '',
                leav_reason: '',
                sal_pay: '',
            },
            prev_2: {
                name: '',
                unit_floor: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                supervisor_name: '',
                date: '',
                title: '',
                position_duties: '',
                shift_worked: '',
                leav_reason: '',
                sal_pay: '',
            },
            prev_3: {
                name: '',
                unit_floor: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                supervisor_name: '',
                date: '',
                title: '',
                position_duties: '',
                shift_worked: '',
                leav_reason: '',
                sal_pay: '',
            },
        },
        user_id: ''
    }






    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public common: CommonProvider,
        public http: HttpClient,
        public platform: Platform,
    ) {
        platform.ready().then(() => {

        })

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ResumeoptionPage');
    }


    ngOnInit(): any {
        this.resume_Form = this.formBuilder.group({
            education: this.formBuilder.group({
                voc_edu: this.formBuilder.group({
                    name_address: ['', [Validators.required, Validators.minLength(3)]],
                    date: ['', [Validators.required]],
                    graduate: ['', [Validators.required]],
                    degree_earned: ['', [Validators.required]],
                }),
                hospital: this.formBuilder.group({
                    name_address: ['', [Validators.required, Validators.minLength(4)]],
                    date: ['', [Validators.required]],
                    graduate: ['', [Validators.required]],
                    degree_earned: ['', [Validators.required]],
                }),
                college: this.formBuilder.group({
                    name_address: ['', [Validators.required, Validators.minLength(4)]],
                    date: ['', [Validators.required]],
                    graduate: ['', [Validators.required]],
                    degree_earned: ['', [Validators.required]],
                }),
                additional_edu: this.formBuilder.group({
                    name_address: ['', [Validators.required, Validators.minLength(4)]],
                    date: ['', [Validators.required]],
                    graduate: ['', [Validators.required]],
                    degree_earned: ['', [Validators.required]],
                }),
            }),
            professional_ref: this.formBuilder.group({
                ref_1: this.formBuilder.group({
                    degree_earned: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    certification: ['', [Validators.required]],
                }),
                ref_2: this.formBuilder.group({
                    degree_earned: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    certification: ['', [Validators.required]],
                }),
                ref_3: this.formBuilder.group({
                    degree_earned: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    certification: ['', [Validators.required]],
                }),
                ref_4: this.formBuilder.group({
                    degree_earned: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    certification: ['', [Validators.required]],
                })
            }),
            work_his: this.formBuilder.group({
                pres_emp: this.formBuilder.group({
                    name: ['', [Validators.required]],
                    unit_floor: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    city: ['', [Validators.required]],
                    state: ['', [Validators.required]],
                    zip: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    supervisor_name: ['', [Validators.required]],
                    date: ['', [Validators.required]],
                    title: ['', [Validators.required]],
                    position_duties: ['', [Validators.required]],
                    shift_worked: ['', [Validators.required]],
                    leav_reason: ['', [Validators.required]],
                    sal_pay: ['', [Validators.required]],
                }),
                prev_1: this.formBuilder.group({
                    name: ['', [Validators.required]],
                    unit_floor: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    city: ['', [Validators.required]],
                    state: ['', [Validators.required]],
                    zip: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    supervisor_name: ['', [Validators.required]],
                    date: ['', [Validators.required]],
                    title: ['', [Validators.required]],
                    position_duties: ['', [Validators.required]],
                    shift_worked: ['', [Validators.required]],
                    leav_reason: ['', [Validators.required]],
                    sal_pay: ['', [Validators.required]],
                }),
                prev_2: this.formBuilder.group({
                    name: ['', [Validators.required]],
                    unit_floor: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    city: ['', [Validators.required]],
                    state: ['', [Validators.required]],
                    zip: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    supervisor_name: ['', [Validators.required]],
                    date: ['', [Validators.required]],
                    title: ['', [Validators.required]],
                    position_duties: ['', [Validators.required]],
                    shift_worked: ['', [Validators.required]],
                    leav_reason: ['', [Validators.required]],
                    sal_pay: ['', [Validators.required]],
                }),
                prev_3: this.formBuilder.group({
                    name: ['', [Validators.required]],
                    unit_floor: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    city: ['', [Validators.required]],
                    state: ['', [Validators.required]],
                    zip: ['', [Validators.required]],
                    phone: ['', [Validators.required]],
                    supervisor_name: ['', [Validators.required]],
                    date: ['', [Validators.required]],
                    title: ['', [Validators.required]],
                    position_duties: ['', [Validators.required]],
                    shift_worked: ['', [Validators.required]],
                    leav_reason: ['', [Validators.required]],
                    sal_pay: ['', [Validators.required]],
                }),
            }),
            user_id: localStorage.getItem('USERID'),
        });
        this.get_resumedata()
    }

    public get_resumedata() {

        var usr = {
            user_id: localStorage.getItem('USERID')
        }

        this.http.post(this.common.base_url + 'resumes/get', usr).subscribe(
            res => {
                console.log(res)
                if (res.error == 0) {
                    this.resume_Form.patchValue({
                        education: {
                            voc_edu: {
                                name_address: res.data.education[0].voc_edu[0].name_address,
                                date: res.data.education[0].voc_edu[0].date,
                                graduate: res.data.education[0].voc_edu[0].graduate,
                                degree_earned: res.data.education[0].voc_edu[0].degree_earned,
                                _id: res.data.education[0].voc_edu[0]._id,
                            },
                            hospital: {
                                name_address: res.data.education[0].hospital[0].name_address,
                                date: res.data.education[0].hospital[0].date,
                                graduate: res.data.education[0].hospital[0].graduate,
                                degree_earned: res.data.education[0].hospital[0].degree_earned,
                                _id: res.data.education[0].hospital[0]._id,
                            },
                            college: {
                                name_address: res.data.education[0].college[0].name_address,
                                date: res.data.education[0].college[0].date,
                                graduate: res.data.education[0].college[0].graduate,
                                degree_earned: res.data.education[0].college[0].degree_earned,
                                _id: res.data.education[0].college[0]._id,
                            },
                            additional_edu: {
                                name_address: res.data.education[0].additional_edu[0].name_address,
                                date: res.data.education[0].additional_edu[0].date,
                                graduate: res.data.education[0].additional_edu[0].graduate,
                                degree_earned: res.data.education[0].additional_edu[0].degree_earned,
                                _id: res.data.education[0].additional_edu[0]._id,
                            },
                            _id: res.data.education[0]._id,

                        },
                        
                         professional_ref: {
                ref_1:{
                    degree_earned: res.data.professional_ref[0].ref_1[0].degree_earned,
                    phone: res.data.professional_ref[0].ref_1[0].phone,
                    address: res.data.professional_ref[0].ref_1[0].address,
                    certification: res.data.professional_ref[0].ref_1[0].certification,
                },
                ref_2:{
                    degree_earned: res.data.professional_ref[0].ref_2[0].degree_earned,
                    phone: res.data.professional_ref[0].ref_2[0].phone,
                    address: res.data.professional_ref[0].ref_2[0].address,
                    certification: res.data.professional_ref[0].ref_2[0].certification,
                },
                ref_3: {
                    degree_earned: res.data.professional_ref[0].ref_3[0].degree_earned,
                    phone: res.data.professional_ref[0].ref_3[0].phone,
                    address: res.data.professional_ref[0].ref_3[0].address,
                    certification: res.data.professional_ref[0].ref_3[0].certification,
                },
                ref_4: {
                  degree_earned: res.data.professional_ref[0].ref_4[0].degree_earned,
                    phone: res.data.professional_ref[0].ref_4[0].phone,
                    address: res.data.professional_ref[0].ref_4[0].address,
                    certification: res.data.professional_ref[0].ref_4[0].certification,
                }
            },
               work_his: {
                            pres_emp: {
                                name: res.data.work_his[0].pres_emp[0].name,
                                unit_floor: res.data.work_his[0].pres_emp[0].unit_floor,
                                address: res.data.work_his[0].pres_emp[0].address,
                                city: res.data.work_his[0].pres_emp[0].city,
                                state: res.data.work_his[0].pres_emp[0].state,
                                zip: res.data.work_his[0].pres_emp[0].zip,
                                phone: res.data.work_his[0].pres_emp[0].phone,
                                supervisor_name: res.data.work_his[0].pres_emp[0].supervisor_name,
                                date: res.data.work_his[0].pres_emp[0].date,
                                title: res.data.work_his[0].pres_emp[0].title,
                                position_duties: res.data.work_his[0].pres_emp[0].position_duties,
                                shift_worked: res.data.work_his[0].pres_emp[0].shift_worked,
                                leav_reason: res.data.work_his[0].pres_emp[0].leav_reason,
                                sal_pay: res.data.work_his[0].pres_emp[0].sal_pay,
                                _id: res.data.work_his[0].pres_emp[0]._id,
                            },
                            prev_1: {
                                name: res.data.work_his[0].prev_1[0].name,
                                unit_floor: res.data.work_his[0].prev_1[0].unit_floor,
                                address: res.data.work_his[0].prev_1[0].address,
                                city: res.data.work_his[0].prev_1[0].city,
                                state: res.data.work_his[0].prev_1[0].state,
                                zip: res.data.work_his[0].prev_1[0].zip,
                                phone: res.data.work_his[0].prev_1[0].phone,
                                supervisor_name: res.data.work_his[0].prev_1[0].supervisor_name,
                                date: res.data.work_his[0].prev_1[0].date,
                                title: res.data.work_his[0].prev_1[0].title,
                                position_duties: res.data.work_his[0].prev_1[0].position_duties,
                                shift_worked: res.data.work_his[0].prev_1[0].shift_worked,
                                leav_reason: res.data.work_his[0].prev_1[0].leav_reason,
                                sal_pay: res.data.work_his[0].prev_1[0].sal_pay,
                                _id: res.data.work_his[0].prev_1[0]._id,
                            },
                            prev_2: {
                                name: res.data.work_his[0].prev_2[0].name,
                                unit_floor: res.data.work_his[0].prev_2[0].unit_floor,
                                address: res.data.work_his[0].prev_2[0].address,
                                city: res.data.work_his[0].prev_2[0].city,
                                state: res.data.work_his[0].prev_2[0].state,
                                zip: res.data.work_his[0].prev_2[0].zip,
                                phone: res.data.work_his[0].prev_2[0].phone,
                                supervisor_name: res.data.work_his[0].prev_2[0].supervisor_name,
                                date: res.data.work_his[0].prev_2[0].date,
                                title: res.data.work_his[0].prev_2[0].title,
                                position_duties: res.data.work_his[0].prev_2[0].position_duties,
                                shift_worked: res.data.work_his[0].prev_2[0].shift_worked,
                                leav_reason: res.data.work_his[0].prev_2[0].leav_reason,
                                sal_pay: res.data.work_his[0].prev_2[0].sal_pay,
                                _id: res.data.work_his[0].prev_2[0]._id,
                            },
                            prev_3: {
                                name: res.data.work_his[0].prev_3[0].name,
                                unit_floor: res.data.work_his[0].prev_3[0].unit_floor,
                                address: res.data.work_his[0].prev_3[0].address,
                                city: res.data.work_his[0].prev_3[0].city,
                                state: res.data.work_his[0].prev_3[0].state,
                                zip: res.data.work_his[0].prev_3[0].zip,
                                phone: res.data.work_his[0].prev_3[0].phone,
                                supervisor_name: res.data.work_his[0].prev_3[0].supervisor_name,
                                date: res.data.work_his[0].prev_3[0].date,
                                title: res.data.work_his[0].prev_3[0].title,
                                position_duties: res.data.work_his[0].prev_3[0].position_duties,
                                shift_worked: res.data.work_his[0].prev_3[0].shift_worked,
                                leav_reason: res.data.work_his[0].prev_3[0].leav_reason,
                                sal_pay: res.data.work_his[0].prev_3[0].sal_pay,
                                _id: res.data.work_his[0].prev_3[0]._id,
                            },
                            _id: res.data.work_his[0]._id,
                        },
                        action: 'update',
                        _id: res.data._id,
                    })
                }
            }
        )



        //      var         usr={
        //          user_id:'5a8aaf4db0fe5f0d405d        df3a'
        //      }


    }






    resume_submit(formdata) {
        console.log(formdata.value)
        console.log(this.resumedata)

        this.resumedata.user_id = localStorage.getItem('USERID');//'5a67226bae56410fc8b6e503';
        console.log(this.resumedata)
        this.http.post(this.common.base_url + 'resumes/add', formdata.value).subscribe(
            res => {
                console.log(res);
                if (res.error == 0) {
                   this.navCtrl.push(ProcessPage);
                }

            },
            err => {
                console.log("Error occured");
            }
        )


    }
}
