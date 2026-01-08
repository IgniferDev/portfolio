import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit , OnDestroy{
  phrases: string[] = [
    'Amante de la tecnología',
    'Solucionador de contratiempos',
    'Desarrollador Fullstack',
    'Creativo por naturaleza'
  ];

  typedText: string = '';
  phraseIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  timeoutId: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.typedText = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 50; // Más rápido al borrar
    } else {
      this.typedText = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pausa al final de la frase
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.typingSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
  }
}
