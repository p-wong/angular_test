import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Neighborhood } from './neighborhood';
import { NEIGHBORHOODS } from './neighborhoods';
// import React from 'react';
// import ReactDOM from 'react-dom'
//
// import { react2angular } from 'react2angular'


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})

export class WorkspaceComponent implements OnInit {

  city = 'New York City'
  noOfPeople = 'How many people need workspace?'
  whenMoveIn = 'When would you like to move in?'
  neighborhood = 'In which neighborhoods?'

  neighborhoods = NEIGHBORHOODS;

  W14 = require("./assets/wework-w14.png")
  W29 = require("./assets/wework-w29.png")
  DOCK72 = require("./assets/wework-dock72.png")

  constructor() { }

  ngOnInit() {
  }

}
