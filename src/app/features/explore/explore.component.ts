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

  onSearchChange(searchValue: string){
    const navigationExtras = {
      relativeTo: this.route,
      queryParams: {
        q: searchValue
      }
    };
    this.router.navigate(['search'], navigationExtras);
  }

}
