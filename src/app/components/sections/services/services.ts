import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_IMAGES, CONTACT_INFO } from '../../../data/data';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal';

interface DisplayService {
  name: string;
  price: string;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, GalleryModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- SEÇÃO: SERVICES & PRICING (COM CARROSSEL HORIZONTAL) -->
    <section id="services" class="py-24 sm:py-32 bg-brand-bg px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <!-- Background organic wave decoration -->
      <div class="absolute inset-x-0 bottom-0 h-40 bg-brand-bg-dark opacity-40 z-0 pointer-events-none">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C360,90 720,10 1080,90 C1260,50 1380,70 1440,50 L1440,100 L0,100 Z" fill="#EFEAE4"/>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="mb-16 text-center">
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
            Serviços
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight mb-4">
            Services & Pricing
          </h2>
          <p class="font-sans text-sm text-brand-primary/60 font-light max-w-md mx-auto">
            Explore a nossa lista completa de cuidados e serviços especializados navegando pelo carrossel.
          </p>
        </div>

        <!-- Carousel Container com as Setas Flutuantes Laterais de Navegação -->
        <div class="relative max-w-5xl mx-auto px-4 sm:px-10">
          <!-- Botão Seta Esquerda -->
          <button 
            (click)="scrollLeft(carousel)"
            class="absolute -left-2 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-bg-dark/80 text-brand-primary hover:bg-brand-primary hover:text-brand-bg shadow-md transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Anterior"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <!-- Botão Seta Direita -->
          <button 
            (click)="scrollRight(carousel)"
            class="absolute -right-2 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-bg-dark/80 text-brand-primary hover:bg-brand-primary hover:text-brand-bg shadow-md transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Próximo"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <!-- Esteira Rolante do Carrossel (Nativa com scroll-snap) -->
          <div 
            #carousel 
            class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-6 px-2 -mx-2"
          >
            <!-- Card de Serviço Individual -->
            <div 
              *ngFor="let s of allServices" 
              class="flex-shrink-0 w-[290px] sm:w-[320px] snap-start bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgba(61,46,39,0.015)] border border-brand-bg-dark/40 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(61,46,39,0.05)]"
            >
              <!-- Ícone Redondo no Topo -->
              <div class="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-accent mb-6 flex-shrink-0">
                <span class="text-2xl">{{ s.icon }}</span>
              </div>

              <!-- Categoria -->
              <span class="font-sans text-[9px] font-bold tracking-widest text-brand-accent/70 uppercase mb-2">
                {{ s.category }}
              </span>

              <!-- Título Serifado -->
              <h3 class="font-serif text-lg font-bold text-brand-primary mb-3 leading-tight min-h-[50px] flex items-center justify-center">
                {{ s.name }}
              </h3>

              <!-- Descrição -->
              <p class="font-sans text-xs text-brand-primary/70 font-light leading-relaxed mb-6 flex-grow min-h-[72px]">
                {{ s.description }}
              </p>

              <!-- Preço destacado -->
              <span class="font-serif text-base font-bold text-brand-primary mb-6">
                {{ s.price }}
              </span>

              <!-- Botão pill de agendamento -->
              <button
                (click)="openBooking()"
                class="px-6 py-2.5 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg rounded-full transition-all duration-300 font-sans text-[10px] font-semibold tracking-widest uppercase shadow-sm"
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO: MY WORK (GALERIA INTEGRADA) -->
    <section id="gallery" class="py-24 sm:py-32 bg-brand-bg px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <!-- Background Wave curve top -->
      <div class="absolute inset-x-0 top-0 h-40 bg-brand-bg-dark opacity-20 z-0 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="mb-20 text-center">
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
            Portfolio
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
            Meu Trabalho
          </h2>
        </div>

        <!-- Grid 3x3 de Imagens Premium -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div 
            *ngFor="let img of galleryImages"
            (click)="galleryModal.openModal(); galleryModal.selectImage(img)"
            class="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md cursor-pointer border-2 border-white/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5"
          >
            <!-- Image -->
            <img 
              [src]="img.src" 
              [alt]="img.alt" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <!-- Dark Overlay on Hover -->
            <div class="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md text-brand-primary font-sans text-[10px] font-semibold tracking-widest uppercase">
                🔍 Detalhes
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Below Gallery -->
        <div class="text-center">
          <button 
            (click)="galleryModal.openModal()"
            class="px-8 py-3.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase shadow-md inline-flex items-center gap-2 group"
          >
            Ver Portfólio Completo
            <span class="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Modal (Custom Premium Reestilizado) -->
    <app-gallery-modal #galleryModal></app-gallery-modal>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      /* Oculta a barra de rolagem horizontal nativa nos navegadores */
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;  /* IE e Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `
  ]
})
export class Services {
  readonly galleryImages = GALLERY_IMAGES;
  readonly bookingLink = CONTACT_INFO.bookingLink;

  // Lista Completa com os 14 Serviços e Preços fornecidos pelo usuário
  readonly allServices: DisplayService[] = [
    // Manicure
    {
      name: 'Manicure',
      price: 'R$ 40,00',
      description: 'Manicure clássica com cutilagem detalhada, esfoliação leve e esmaltação profissional.',
      icon: '💅',
      category: 'Manicure'
    },
    // Pedicure
    {
      name: 'Pedicure',
      price: 'R$ 50,00',
      description: 'Cuidado completo para os pés, com foco na cutilagem, hidratação profunda e acabamento impecável.',
      icon: '👣',
      category: 'Pedicure'
    },
    {
      name: 'Spa dos Pés',
      price: 'R$ 90,00',
      description: 'Experiência relaxante de alto padrão com esfoliação artesanal, pedicure completa e massagem.',
      icon: '🌸',
      category: 'Pedicure'
    },
    // Gel para as Mãos
    {
      name: 'Esmaltação em Gel Mão',
      price: 'R$ 80,00',
      description: 'Esmaltação inovadora sob luz UV com secagem instantânea e durabilidade de até 3 semanas.',
      icon: '✨',
      category: 'Gel para as Mãos'
    },
    {
      name: 'Esmaltação em Gel Pé',
      price: 'R$ 80,00',
      description: 'A praticidade do esmalte em gel aplicada aos pés. Brilho permanente e secagem na hora.',
      icon: '👣',
      category: 'Gel para os Pés'
    },
    {
      name: 'Banho em Gel com Esmaltação',
      price: 'R$ 120,00',
      description: 'Camada estruturada de gel sobre a unha natural. Fortalece, evita quebras e inclui esmaltação.',
      icon: '🛡️',
      category: 'Gel para as Mãos'
    },
    // Extensões de Unhas
    {
      name: 'Alongamento Fibra de Vidro + Gel',
      price: 'R$ 190,00',
      description: 'Alongamento resistente, leve e extremamente natural em fibra de vidro com esmaltação em gel inclusa.',
      icon: '💎',
      category: 'Extensões de Unhas'
    },
    {
      name: 'Alongamento F1',
      price: 'R$ 150,00',
      description: 'Alongamento moderno e simétrico utilizando a técnica ágil de molde F1 para unhas impecáveis.',
      icon: '⚡',
      category: 'Extensões de Unhas'
    },
    {
      name: 'Manutenção de Extensão',
      price: 'R$ 150,00',
      description: 'Manutenção necessária para reequilibrar a estrutura do alongamento e renovar a finalização.',
      icon: '🔧',
      category: 'Extensões de Unhas'
    },
    {
      name: 'Postiça Realista Soft Gel',
      price: 'R$ 120,00',
      description: 'Aplicação confortável e duradoura de unhas soft gel pré-moldadas com esmaltação em gel.',
      icon: '🌟',
      category: 'Extensões de Unhas'
    },
    // Pacote
    {
      name: 'Pacote 4 Mãos',
      price: 'R$ 110,00',
      description: 'Plano mensal com 4 sessões de manicure exclusivas para manter suas mãos sempre perfeitas.',
      icon: '🎁',
      category: 'Pacotes'
    },
    {
      name: 'Pacote 4 Mãos & 2 Pés',
      price: 'R$ 180,00',
      description: 'Combo completo de cuidado recorrente contendo 4 atendimentos de mão e 2 atendimentos de pé.',
      icon: '✨',
      category: 'Pacotes'
    },
    {
      name: 'Pacote 4 Mãos & 1 Pé',
      price: 'R$ 150,00',
      description: 'Cuidado sob medida contendo 4 atendimentos para as mãos e 1 spa relaxante para os pés.',
      icon: '💎',
      category: 'Pacotes'
    },
    {
      name: 'Pacote 2 Pés',
      price: 'R$ 70,00',
      description: 'Plano mensal recorrente contendo 2 sessões focadas na beleza, hidratação e cutilagem dos pés.',
      icon: '👣',
      category: 'Pacotes'
    }
  ];

  scrollLeft(carouselElement: HTMLDivElement) {
    const cardWidth = carouselElement.firstElementChild ? (carouselElement.firstElementChild as HTMLElement).offsetWidth + 24 : 340;
    carouselElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  scrollRight(carouselElement: HTMLDivElement) {
    const cardWidth = carouselElement.firstElementChild ? (carouselElement.firstElementChild as HTMLElement).offsetWidth + 24 : 340;
    carouselElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }

  openBooking() {
    window.open(this.bookingLink, '_blank');
  }
}
