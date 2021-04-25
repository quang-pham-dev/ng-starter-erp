import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { regex, regexErrors, markFormGroupTouched } from '@shared/utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    loading!: Observable<boolean>;

    form!: FormGroup;
    regexErrors = regexErrors;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            email: [
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                        Validators.maxLength(128),
                        Validators.pattern(regex.email)
                    ]
                }
            ],
            password: [
                null,
                {
                    updateOn: 'change',
                    validators: [Validators.required]
                }
            ]
        });
    }
    public onSubmit(): void {
        if (this.form.valid) {
            const value = this.form.value;
        } else {
            markFormGroupTouched(this.form);
        }
    }
}
