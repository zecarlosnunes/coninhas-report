import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coninhas-form',
  templateUrl: './coninhas-form.component.html',
  styleUrls: ['./coninhas-form.component.scss']
})
export class ConinhasFormComponent implements OnInit {

  public reportForm: FormGroup = new FormGroup({
    date: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', this.locale)),
    hour: new FormControl(formatDate(new Date(), 'HH:mm', this.locale)),
    offense: new FormControl(null),
    tears: new FormControl(null),
    forget: new FormControl(null),
    reasons: new FormGroup({
      pussy: new FormControl(false),
      envy: new FormControl(false),
      idiot: new FormControl(false),
      sensible: new FormControl(false),
      moral_superior: new FormControl(false),
      blah: new FormControl(false),
      sexualy_frustrated: new FormControl(false),
      no_likes: new FormControl(false),
      puritane: new FormControl(false),
      shitty_life: new FormControl(false),
      miss_mom: new FormControl(false),
      another: new FormControl(false),
    })
  });

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.reportForm.valueChanges.subscribe(form => {
      console.log(form);
    });
  }

  public onSubmit(): void {
    console.log(this.reportForm.value);
  }
}
