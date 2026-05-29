import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-brand-footer text-brand-bg/90 py-12 px-6 lg:px-12 border-t border-brand-primary/10">
      <div class="max-w-7xl mx-auto">
        <!-- Top Row -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-brand-bg/10">
          <!-- Logo / Brand -->
          <div class="text-center md:text-left">
            <h3 class="font-serif text-base font-bold tracking-[0.2em] text-brand-bg uppercase">
              Rafa Alves Nails
            </h3>
          </div>

          <!-- Social Links (Center) -->
          <div class="flex items-center gap-6">
            <!-- Instagram -->
            <a 
              href="https://www.instagram.com/studio.rafaellaalves/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-brand-bg/70 hover:text-brand-bg transition-colors p-2 hover:bg-brand-primary/50 rounded-full"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center md:text-right">
            <p class="font-sans text-xs tracking-wider text-brand-bg/50">
              © {{ currentYear }} Rafa Alves Nails. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
}
