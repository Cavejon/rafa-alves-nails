import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFO } from '../../../data/data';
import { BookingService } from '../../../services/booking.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-bg-dark/50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="group">
              <h1 class="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-brand-primary uppercase transition-colors">
                Rafa Alves Nails
              </h1>
            </a>
          </div>

          <!-- Navigation Links (Center) -->
          <div class="hidden md:flex items-center space-x-10">
            <a href="#about" class="text-brand-primary/80 hover:text-brand-primary transition-colors font-sans font-medium text-xs tracking-[0.15em] uppercase">
              Sobre
            </a>
            <a href="#services" class="text-brand-primary/80 hover:text-brand-primary transition-colors font-sans font-medium text-xs tracking-[0.15em] uppercase">
              Serviços
            </a>
            <a href="#gallery" class="text-brand-primary/80 hover:text-brand-primary transition-colors font-sans font-medium text-xs tracking-[0.15em] uppercase">
              Galeria
            </a>
            <a href="#contact" class="text-brand-primary/80 hover:text-brand-primary transition-colors font-sans font-medium text-xs tracking-[0.15em] uppercase">
              Contato
            </a>
          </div>

          <!-- CTA Buttons (Right) -->
          <div class="hidden md:flex items-center gap-6">
            <a
              [href]="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand-primary hover:text-brand-accent transition-colors font-sans font-semibold text-xs tracking-[0.1em] uppercase inline-flex items-center gap-1.5"
            >
              💬 WhatsApp
            </a>
            <button
              (click)="openBooking()"
              class="px-6 py-2.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-[0.15em] uppercase shadow-sm"
            >
              Agendar
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-brand-bg-dark transition-colors text-brand-primary"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        *ngIf="isMobileMenuOpen" 
        class="md:hidden bg-brand-bg border-b border-brand-bg-dark px-6 py-6 space-y-4 shadow-inner"
      >
        <a 
          href="#about" 
          (click)="toggleMobileMenu()" 
          class="block text-brand-primary font-medium text-xs tracking-[0.15em] uppercase py-2"
        >
          Sobre
        </a>
        <a 
          href="#services" 
          (click)="toggleMobileMenu()" 
          class="block text-brand-primary font-medium text-xs tracking-[0.15em] uppercase py-2"
        >
          Serviços
        </a>
        <a 
          href="#gallery" 
          (click)="toggleMobileMenu()" 
          class="block text-brand-primary font-medium text-xs tracking-[0.15em] uppercase py-2"
        >
          Galeria
        </a>
        <a 
          href="#contact" 
          (click)="toggleMobileMenu()" 
          class="block text-brand-primary font-medium text-xs tracking-[0.15em] uppercase py-2"
        >
          Contato
        </a>
        <div class="pt-4 flex flex-col gap-3">
          <a
            [href]="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full text-center py-2.5 border border-brand-primary text-brand-primary hover:bg-brand-bg-dark rounded-full transition-all text-xs font-semibold tracking-[0.1em] uppercase"
          >
            💬 WhatsApp
          </a>
          <button
            (click)="openBooking(); toggleMobileMenu()"
            class="w-full py-2.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all text-xs font-semibold tracking-[0.15em] uppercase shadow-sm"
          >
            Agendar Horário
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class Navbar {
  readonly whatsappLink = CONTACT_INFO.whatsappLink;
  isMobileMenuOpen = false;
  bookingService = inject(BookingService);

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openBooking() {
    this.bookingService.openModal();
  }
}
