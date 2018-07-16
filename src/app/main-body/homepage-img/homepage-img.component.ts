import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-img',
  templateUrl: './homepage-img.component.html',
  styleUrls: ['./homepage-img.component.css']
})
export class HomepageImgComponent implements OnInit {

  // images: string[] = ["./assets/wework_shanghai.png", "./assets/wework_ny.png", "./assets/wework_la.png"]
  // i: number = 2
  IMAGE = require("./assets/wework_shanghai.png")
  caption = "Members' common area in WeWork Weihai Lu, Shanghai";

  constructor() { }

  ngOnInit() {
  }

}
