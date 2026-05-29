import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRICING_CARDS } from '../../../data/data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="py-20 sm:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="mb-16 text-center">
          <h2 class="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 mb-2">
            Tabela de <span class="font-semibold">Valores</span>
          </h2>
          <p class="text-neutral-600 font-light tracking-wide text-lg">
            Veja nossos preços especiais
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <div
            *ngFor="let card of pricingCards"
            [class]="'group border rounded-sm p-8 transition-all duration-300 hover:shadow-lg ' +
                     (card.highlight ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-white')"
          >
            <!-- Badge -->
            <div *ngIf="card.highlight" class="inline-block mb-4">
              <span class="text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-white/20 text-white rounded-sm">
                {{ card.highlight }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-semibold mb-2 tracking-tight">
              {{ card.title }}
            </h3>

            <!-- Category -->
            <p [class]="'text-sm font-light mb-6 ' + (card.highlight ? 'text-white/80' : 'text-neutral-600')">
              {{ card.category }}
            </p>

            <!-- Price -->
            <div class="mb-8">
              <span class="text-4xl font-light">R$</span>
              <span class="text-5xl font-semibold ml-2">{{ card.price }}</span>
            </div>

            <!-- Services List -->
            <ul class="space-y-3 mb-8">
              <li *ngFor="let service of card.services" class="flex items-start gap-3">
                <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-light">{{ service }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button
              [class]="'w-full py-3 rounded-sm font-light tracking-wide transition-all duration-300 ' +
                       (card.highlight
                         ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                         : 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-50')"
              aria-label="Agendar"
            >
              Agendar
            </button>
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
export class PricingComponent {
  readonly pricingCards = PRICING_CARDS;
}
