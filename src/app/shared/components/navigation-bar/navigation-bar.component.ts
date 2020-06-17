import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output()
  searchChange: EventEmitter<string>;
  @Output()
  homeClick: EventEmitter<void>;

  constructor() {
    this.searchChange = new EventEmitter<string>();
    this.homeClick = new EventEmitter<void>();
  }

  /**
   * emit the new value
   *
   * @param {string} searchValue
   * @memberof NavigationBarComponent
   */
  onSearchChange(searchValue: string){
    this.searchChange.emit(searchValue);
  }

  /**
   * emit when click on home
   *
   * @memberof NavigationBarComponent
   */
  onHomeClick(){
    this.homeClick.emit();
  }

}
