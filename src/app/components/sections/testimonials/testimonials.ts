import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../../data/data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="testimonials" class="py-24 sm:py-32 bg-brand-bg-dark/40 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-bg rounded-full filter blur-3xl opacity-60 z-0"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="mb-20 text-center">
          <span class="font-sans text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
            Feedback dos Clientes
          </h2>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            *ngFor="let t of testimonials"
            class="bg-white p-8 rounded-[2rem] border border-brand-bg-dark/60 shadow-[0_4px_20px_rgba(61,46,39,0.01)] hover:shadow-[0_10px_30px_rgba(61,46,39,0.04)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <!-- 5 Estrelas Terrosas/Chic -->
            <div class="flex gap-1 mb-6">
              <svg 
                *ngFor="let star of [1,2,3,4,5]" 
                class="w-4 h-4 text-brand-accent" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <!-- Testimonial Text -->
            <p class="font-sans text-brand-primary/80 font-light text-sm leading-relaxed mb-8 flex-grow">
              "{{ t.text }}"
            </p>

            <!-- Author Info -->
            <div class="pt-6 border-t border-brand-bg-dark flex flex-col">
              <span class="font-serif text-sm font-bold text-brand-primary mb-0.5">
                {{ t.author }}
              </span>
              <span class="font-sans text-[10px] text-brand-accent font-semibold tracking-wider uppercase">
                {{ t.profession }}
              </span>
            </div>
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
export class TestimonialsComponent {
  readonly testimonials = TESTIMONIALS;
}
