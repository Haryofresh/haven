import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { StepsToDonateComponent } from './steps-to-donate/steps-to-donate.component';
import { CategoryComponent } from './category/category.component';
import { CategoryMenuComponent } from './category/category-menu/category-menu.component';
import { CategoryCardComponent } from './category/category-card/category-card.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideshowComponent,
    CallToActionComponent,
    StepsToDonateComponent,
    CategoryComponent,
    CategoryMenuComponent,
    CategoryCardComponent,
    OurStoryComponent,
    OurTeamComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
