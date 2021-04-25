import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PasswordComponent],
    imports: [CommonModule, MatIconModule],
    exports: [PasswordComponent]
})
export class PasswordModule {}
