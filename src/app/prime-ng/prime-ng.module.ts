import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule
  ],
  exports: [
    AutocompleteComponent 
  ]
})
export class PrimeNgModule { }
