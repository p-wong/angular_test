import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  locations = 'Locations';
  plans = 'Plans';
  mission = 'Mission';
  enterprise = 'Enterprise';
  labs = 'Labs';

  constructor() { }

  ngOnInit() {
  }

}
