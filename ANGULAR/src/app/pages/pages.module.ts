import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DonationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
