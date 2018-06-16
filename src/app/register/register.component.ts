import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:any =1;
  nextbtn: boolean =true;
  nextbtn2: boolean =true;
  nextbtn3: boolean =true;

  formVar: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.createForm();
    }
    
    deactivenextbtn(){
      this.nextbtn=true;
      console.log("helloo");
    }
    addNewEntry() {

        const control = <FormArray>this.addForm.controls['itemRows'];
        control.push(this.initItemRows());
    }
    addForm: FormGroup;
    initItemRows() {
        return this._fb.group({

            itemname: ['']
        });
    }


    createForm() {
        this.addForm = this._fb.group({
            itemRows: this._fb.array([])
        });
        this.addForm.setControl('itemRows', this._fb.array([]));
    }


    deleteRow(index: number) {

        const control = <FormArray>this.addForm.controls['itemRows'];
        control.removeAt(index);
    }
   
  ngOnInit() {
    this.formVar = this._fb.group({
      firstname: '',
      middlename: '',
      lastname: '',
      gender: '', 
      dob: '',
      nation: '',
      ssn: '',
      marital: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      landmark: '',
      altphone: '',
      homecountryaddress: '',

        address1: '',
        city1: '',
        state1: '',
        zipcode1: '',
        landmark1: '',
        altphone1: '',

      mobile: '',
      license: '',
      landline: '',
      bankstmt: '',
        email: '',
        YearMonthOfGraduation:'',
        Majorofdegree1:'',
        University1:'',
        UniversityAddress1: '',
        gpa1: '',
        Startym1: '',
        UploadCOT1: '',
        UploadCD1:'',
        YMOfGrad: '',
        Majorofdegree2: '',
        University2: '',
        UniversityAddress2: '',
        gpa2: '',
        Startym2: '',
        UploadCOT2: '',
        UploadCD2: '',
        College: '',
        StartYearndMonth: '',
        EndYearndMonth:'',
        CAdd: '',
        Pin: '',
        Landmark: '',
        UML: '',
        UIC:'',
        COB:'',
        PassportEDate: '',
        PassportIssuedCountry: '',
        I94Number: '',
        CurrentStatus: '',
        CurrentStatusvalidity:'',
        OPTStartDate: '',
        OPTEndDate:'',
        H1StartDate: '',
        H1EndDate:'',
        UploadPassport: '',
        UploadUSVisa: '',
        UploadI94Document: '',
        UploadAllI20s: '',
        UploadPreviousI797:'',
    
       

    });
  }

  onSubmit() {
    console.log(this.formVar.value); 
    this.nextbtn= false;
  }
  onSubmit1(form1: any){
    console.log(form1);
  }

}