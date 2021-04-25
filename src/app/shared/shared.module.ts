import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from './directives/files-upload/files-upload.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LangPipe } from './pipes/lang/lang.pipe';
import { FileSizePipe } from './pipes/file-size/file-size.pipe';
import { HighlightPipe } from './pipes/highlight/highlight.pipe';
import { ButtonComponent } from './buttons/button/button.component';

@NgModule({
    declarations: [
        FilesUploadDirective,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ButtonComponent,
        LangPipe,
        FileSizePipe,
        HighlightPipe
    ],
    imports: [CommonModule]
})
export class SharedModule {}
