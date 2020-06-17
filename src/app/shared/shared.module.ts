import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

const sharedComponents = [
  NavigationBarComponent, SearchInputComponent
];

@NgModule({
  declarations: [
    sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    sharedComponents
  ]
})
export class SharedModule { }
