import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // O sinal começa como 'false' (modal fechado)
  readonly isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
    // Impede o scroll da página de fundo quando o modal abrir
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.isModalOpen.set(false);
    // Devolve o scroll para a página
    document.body.style.overflow = 'auto'; 
  }
}