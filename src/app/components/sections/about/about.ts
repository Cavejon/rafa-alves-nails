import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HIGHLIGHTS } from '../../../data/data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="py-24 sm:py-32 bg-brand-bg px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <!-- Decorative background element -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-brand-bg-dark rounded-full filter blur-3xl opacity-50 z-0"></div>

      <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center relative z-10">
        <!-- Esquerda: Content Column -->
        <div class="md:col-span-6 flex flex-col items-start text-left">
          <!-- Tag Category -->
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4">
            Sobre Nós
          </span>

          <!-- Section Title -->
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight mb-8">
            The Studio
          </h2>

          <!-- Main Descriptions -->
          <div class="font-sans text-brand-primary/80 font-light leading-relaxed space-y-6 mb-10 text-base">
            <p>
              Somos apaixonados por realçar a beleza feminina, oferecendo um espaço sofisticado, acolhedor e totalmente exclusivo para o cuidado refinado com as suas unhas.
            </p>
            <p>
              Acreditamos que fazer as unhas não é apenas uma rotina de estética, mas um momento especial de relaxamento e autoestima. Por isso, nosso estúdio foi projetado para oferecer uma experiência calma, silenciosa e sem pressa — apenas você, um bom café e unhas deslumbrantes.
            </p>
            <p class="italic font-medium text-brand-primary">
              "Beleza e perfeição esculpidas em cada pequeno detalhe."
            </p>
          </div>

          <!-- Highlights/Tags -->
          <div class="flex flex-wrap gap-3 mb-4 w-full">
            <span 
              *ngFor="let highlight of highlights" 
              class="px-4 py-2 bg-brand-bg-dark text-brand-primary font-sans text-xs font-semibold tracking-wider rounded-lg border border-brand-primary/5 uppercase"
            >
              {{ highlight }}
            </span>
          </div>
        </div>

        <!-- Direita: Image Column -->
        <div class="md:col-span-6 flex justify-center md:justify-end">
          <div class="relative w-full max-w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border border-brand-bg-dark/50">
            <img
              src="assets/images/unha6.jpeg"
              alt="Ambiente do nosso estúdio de manicure"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutComponent {
  readonly highlights = HIGHLIGHTS;
}
