import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.scss']
})
export class AsyncValidatorComponent implements OnInit, AfterViewInit {

  @ViewChild('username') username!:ElementRef;

  userForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.userForm = this.fb.group({
      userName: ['',[Validators.required],this.checkUser]
    })

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  checkUser(control:FormControl): Promise<any> {
    return new Promise((rs,re) => {
      control.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(res => {
        let names = ['testname','admin','name','test','user','superuser'].filter(name => name==res)
        setTimeout(() => {
          rs(names.length>0? {emailExist:true}:null)
        }, 2000)
      });

    })
  }

}
