import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="bookingService.isModalOpen()" 
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-bg-dark/80 backdrop-blur-sm p-4 sm:p-6"
    >
      <div class="absolute inset-0" (click)="bookingService.closeModal()"></div>

      <div class="relative w-full max-w-4xl h-[85vh] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
        
        <div class="flex justify-between items-center p-4 border-b border-brand-bg-dark/20 bg-brand-bg/50">
          <h3 class="font-serif text-lg font-bold text-brand-primary">Agendamento Online</h3>
          <button 
            (click)="bookingService.closeModal()"
            class="w-8 h-8 flex items-center justify-center rounded-full bg-brand-bg hover:bg-brand-accent hover:text-white transition-colors text-brand-primary"
          >
            ✕
          </button>
        </div>

        <div class="flex-1 w-full bg-white relative">
          <div class="absolute inset-0 flex items-center justify-center text-brand-primary/50 text-sm">
            Carregando sistema de agendamento...
          </div>
          <iframe 
            src="https://colavo.link/r/SSSCgW?channel=colavo_booklink&expire=1780123914" 
            class="relative z-10 w-full h-full border-0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.3s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class BookingModalComponent {
  // Injeta o serviço para poder ler o estado e usar a função de fechar
  bookingService = inject(BookingService);
}