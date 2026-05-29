import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_IMAGES, CONTACT_INFO } from '../../../data/data';

@Component({
  selector: 'app-gallery-modal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Modal Overlay -->
    <div
      *ngIf="isOpen()"
      class="fixed inset-0 bg-brand-primary/40 backdrop-blur-md z-40 transition-all duration-300"
      (click)="closeModal()"
    ></div>

    <!-- Modal Content -->
    <div
      *ngIf="isOpen()"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      (click)="closeModal()"
    >
      <div
        class="bg-brand-bg rounded-[2.5rem] max-w-4xl w-full my-8 overflow-hidden shadow-2xl border border-brand-bg-dark flex flex-col transform transition-all duration-500 scale-100"
        (click)="$event.stopPropagation()"
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between px-8 py-6 border-b border-brand-bg-dark">
          <h2 class="font-serif text-xl sm:text-2xl font-bold text-brand-primary">Galeria de Trabalhos</h2>
          <button
            (click)="closeModal()"
            class="text-brand-primary/70 hover:text-brand-primary transition-colors p-2 hover:bg-brand-bg-dark rounded-full"
            aria-label="Fechar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="p-8 max-h-[50vh] overflow-y-auto">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
              *ngFor="let image of galleryImages"
              class="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-sm border border-brand-bg-dark/50"
              (click)="selectImage(image); $event.stopPropagation()"
            >
              <img
                [src]="image.src"
                [alt]="image.alt"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750"
              />
              <div
                class="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3"
              >
                <span
                  class="bg-white/90 backdrop-blur-sm text-brand-primary text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md"
                >
                  {{ image.service }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Selected Image Preview -->
        <div *ngIf="selectedImage()" class="border-t border-brand-bg-dark px-8 py-6 bg-brand-bg-dark/30">
          <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              [src]="selectedImage()!.src"
              [alt]="selectedImage()!.alt"
              class="w-32 h-32 object-cover rounded-2xl border-2 border-white shadow-md flex-shrink-0"
            />
            <div class="flex-grow text-center sm:text-left">
              <h3 class="font-serif text-lg font-bold text-brand-primary mb-2">
                {{ selectedImage()!.service }}
              </h3>
              <p class="font-sans text-xs text-brand-primary/80 font-light leading-relaxed mb-4">
                {{ selectedImage()!.alt }}
              </p>
              <button
                (click)="openBooking()"
                class="px-6 py-2.5 bg-brand-primary text-brand-bg hover:bg-brand-accent rounded-full transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase shadow-sm"
              >
                Agendar este serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class GalleryModalComponent {
  readonly isOpen = signal(false);
  readonly selectedImage = signal<any>(null);
  readonly galleryImages = GALLERY_IMAGES;
  readonly bookingLink = CONTACT_INFO.bookingLink;

  openModal() {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isOpen.set(false);
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }

  selectImage(image: any) {
    this.selectedImage.set(image);
  }

  openBooking() {
    window.open(this.bookingLink, '_blank');
    this.closeModal();
  }
}
