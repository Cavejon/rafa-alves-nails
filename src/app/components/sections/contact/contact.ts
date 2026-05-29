import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONTACT_INFO } from '../../../data/data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-24 sm:py-32 bg-brand-bg px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <!-- Decorativo Ondas de Fundo -->
      <div class="absolute inset-x-0 top-0 h-40 bg-brand-bg-dark/20 opacity-40 z-0 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="mb-20 text-center">
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
            Contato
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
            Entre em contato
          </h2>
        </div>

        <!-- Contact Content (2 Colunas) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto items-start">
          <!-- Coluna Esquerda: Informações estruturadas -->
          <div class="lg:col-span-5 space-y-10">
            <!-- Opening Hours -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-serif text-base font-bold text-brand-primary mb-1">Horário de Funcionamento</h4>
                <p class="font-sans text-xs text-brand-primary/80 font-light leading-relaxed">
                  {{ contactInfo.schedule.weekday }}<br />
                  {{ contactInfo.schedule.saturday }}<br />
                  <span class="text-brand-accent/80 font-medium">{{ contactInfo.schedule.sunday }}</span>
                </p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-serif text-base font-bold text-brand-primary mb-1">Endereço</h4>
                <p class="font-sans text-xs text-brand-primary/80 font-light leading-relaxed">
                  Rua Ana Dirce de Medeiros, 86 — João Costa<br />
                  Joinville — SC
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-accent flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.189-4.167-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 2.25v4.5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-serif text-base font-bold text-brand-primary mb-1">Telefone</h4>
                <a 
                  [href]="'tel:' + contactInfo.phone"
                  class="font-sans text-xs text-brand-accent hover:text-brand-primary transition-colors font-medium"
                >
                  {{ contactInfo.phone }}
                </a>
              </div>
            </div>

            <p class="font-sans text-xs text-brand-primary/60 font-light pt-4 border-t border-brand-bg-dark/80">
              Mande uma mensagem ou faça o agendamento online — adoraremos receber você!
            </p>
          </div>

          <!-- Coluna Direita: Formulário de Contato Premium -->
          <div class="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_4px_20px_rgba(61,46,39,0.02)] border border-brand-bg-dark/40">
            <h3 class="font-serif text-xl font-bold text-brand-primary mb-6">Envie uma Mensagem</h3>

            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block font-sans text-xs font-semibold text-brand-primary/80 uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  [(ngModel)]="formData.name"
                  name="name"
                  class="w-full px-4 py-3 bg-brand-bg/50 border border-brand-bg-dark rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all font-sans text-sm font-light text-brand-primary"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block font-sans text-xs font-semibold text-brand-primary/80 uppercase tracking-wider mb-2">
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  [(ngModel)]="formData.message"
                  name="message"
                  rows="4"
                  class="w-full px-4 py-3 bg-brand-bg/50 border border-brand-bg-dark rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all font-sans text-sm font-light text-brand-primary resize-none"
                  placeholder="Olá! Gostaria de esclarecer uma dúvida..."
                  required
                ></textarea>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                class="w-full py-3.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase shadow-sm"
              >
                Enviar Mensagem
              </button>
            </form>

            <!-- Success Alert -->
            <div 
              *ngIf="successMessage()" 
              class="mt-6 p-4 bg-brand-light border border-brand-accent/20 rounded-xl transition-all duration-500"
            >
              <p class="text-brand-primary text-xs font-semibold flex items-center gap-2">
                <span class="text-lg">✓</span> Mensagem enviada com sucesso! Retornaremos em breve.
              </p>
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
export class ContactComponent {
  readonly contactInfo = CONTACT_INFO;
  readonly successMessage = signal(false);

  formData = {
    name: '',
    message: ''
  };

  onSubmit() {
    // Valida apenas os campos que realmente existem no formulário
    if (this.formData.name && this.formData.message) {
      
      // 1. Monta o texto que será enviado no WhatsApp
      const textoPersonalizado = `Olá, meu nome é ${this.formData.name}.\n\n${this.formData.message}`;
      
      // 2. Define o número do WhatsApp (apenas números, com código do país 55 e DDD)
      // Peguei o número que estava no print da sua tela. 
      // Se preferir, pode puxar isso do seu CONTACT_INFO se ele estiver limpo (apenas números)
      const numeroWhatsApp = '5547992335859'; 
      
      // 3. Monta o link do WhatsApp com o texto codificado para URL
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoPersonalizado)}`;
      
      // 4. Abre o WhatsApp em uma nova aba
      window.open(url, '_blank');

      // 5. Feedback visual no site (opcional, mas mantém a boa experiência)
      this.successMessage.set(true);

      // Reseta o formulário
      this.formData = {
        name: '',
        message: ''
      };

      // Esconde a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        this.successMessage.set(false);
      }, 5000);
    }
  }

  openBooking() {
    window.open(CONTACT_INFO.bookingLink, '_blank');
  }
}
