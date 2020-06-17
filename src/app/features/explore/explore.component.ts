import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  /**
   * When the search change redirect to the correct url
   *
   * @param {string} searchValue
   * @memberof ExploreComponent
   */
  onSearchChange(searchValue: string){
    let navigationExtras;
    if (!searchValue) {
      navigationExtras = {
        relativeTo: this.route
      };
      this.router.navigate(['schedule'], navigationExtras);
    } else {
      navigationExtras = {
        relativeTo: this.route,
        queryParams: {
          q: searchValue
        }
      };
      this.router.navigate(['search'], navigationExtras);
    }
  }

}
