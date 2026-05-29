import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/layout/navbar/navbar';
import { Hero } from './components/sections/hero/hero';
import { AboutComponent } from './components/sections/about/about';
import { Services } from './components/sections/services/services';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials';
import { ContactComponent } from './components/sections/contact/contact';
import { Footer } from './components/layout/footer/footer';
import { BookingModalComponent } from './components/layout/booking-modal/booking-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    AboutComponent,
    Services,
    TestimonialsComponent,
    ContactComponent,
    Footer,
    BookingModalComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-booking-modal></app-booking-modal>
    `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class App {}
