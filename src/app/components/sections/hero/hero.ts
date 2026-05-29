import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFO } from '../../../data/data';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative min-h-[90vh] flex items-center bg-brand-bg px-6 sm:px-12 lg:px-20 pt-24 pb-16 overflow-hidden">
      <!-- Decorative Organic Wave (Background) -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96 C240,160 480,192 720,160 C960,128 1200,32 1440,64 L1440,200 L0,200 Z" fill="#EFEAE4"/>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        <!-- Esquerda: Text Content -->
        <div class="md:col-span-6 flex flex-col items-start text-left">
          <!-- Tag Pre-title -->
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4">
            Rafa Alves Nails
          </span>

          <!-- Main Serif Title -->
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.1] mb-6">
            Beleza Única,<br />
            Desenhada para Você
          </h1>

          <!-- Description -->
          <p class="font-sans text-base text-brand-primary/80 font-light leading-relaxed mb-8 max-w-lg">
            Esmaltação em gel, alongamentos de fibra de vidro e nail art exclusivas criadas com excelência e carinho, em um ambiente privado e acolhedor.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              (click)="openBooking()"
              class="px-8 py-3.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase shadow-md flex items-center justify-center gap-2 group"
            >
              <p>Agendar Horário</p>
              <span class="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            <a
              [href]="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-3.5 border border-brand-primary text-brand-primary hover:bg-brand-bg-dark rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-1.5"
            >
              💬 Fale Conosco
            </a>
          </div>
          
        </div>

        <!-- Direita: Image Content -->
        <div class="md:col-span-6 flex justify-center md:justify-end relative">
          <!-- Main Premium Image with Pill-Arredondamento -->
          <div class="relative w-full max-w-[460px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/40">
            <img
              src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1000&auto=format&fit=crop&q=80"
              alt="Unhas impecáveis com detalhes delicados"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          <!-- Micro Elemento Decorativo Flutuante -->
          <div class="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-brand-bg-dark flex items-center gap-3">
            <span class="text-2xl">💅</span>
            <div>
              <p class="font-serif text-sm font-bold text-brand-primary leading-none">Premium</p>
              <p class="font-sans text-[10px] text-brand-accent tracking-wider uppercase font-semibold mt-1">Nails & Art</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class Hero {
  readonly bookingLink = CONTACT_INFO.bookingLink;
  readonly whatsappLink = CONTACT_INFO.whatsappLink;
  bookingService = inject(BookingService);

  openBooking() {
    this.bookingService.openModal();  
  }
}
