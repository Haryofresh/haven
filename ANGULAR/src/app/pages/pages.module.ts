import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { CongratsComponent } from './congrats/congrats.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProfileComponent,
    DonationComponent,
    CongratsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
