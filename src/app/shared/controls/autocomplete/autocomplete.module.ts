import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteComponent } from './autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HighlightPipe } from '@shared/pipes/highlight/highlight.pipe';

@NgModule({
    declarations: [AutocompleteComponent, HighlightPipe],
    imports: [CommonModule, ReactiveFormsModule, MatAutocompleteModule],
    exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
