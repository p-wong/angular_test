import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HomepageComponent } from './main-body/homepage/homepage.component';
import { HomepageImgComponent } from './main-body/homepage-img/homepage-img.component';
import { WorkspaceComponent } from './main-body/workspace/workspace.component';

declare var require: any;

const appRoutes: Routes = [
  { path: '', component: MainBodyComponent },
  { path: 'workspaces', component: WorkspaceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainBodyComponent,
    HomepageComponent,
    HomepageImgComponent,
    WorkspaceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
