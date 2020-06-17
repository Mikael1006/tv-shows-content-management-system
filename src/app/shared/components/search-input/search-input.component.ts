import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output()
  searchChange: EventEmitter<string>;

  constructor() {
    this.searchChange = new EventEmitter<string>();
  }

  /**
   * emit the new value
   *
   * @param {string} searchValue
   * @memberof SearchInputComponent
   */
  onSearchChange(searchValue: string){
    this.searchChange.emit(searchValue);
  }

}
