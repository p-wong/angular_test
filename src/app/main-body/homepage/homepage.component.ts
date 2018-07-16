import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CITIES } from './cities';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  header = 'Where Businesses Thrive'
  subtitle = 'Whether you need a desk, office suite, or entire HQ, we create environments that increase productivity, innovation, and collaboration.'
  location = "Where you'd like space"
  employees = 'How many employees are in your company'

  selectedValue: string;
  cities = CITIES;

  constructor(private router: Router) { }

  navigate() {
      this.router.navigate(["workspaces"] );
  }

  ngOnInit() {

  }



}
