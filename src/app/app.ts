import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../portafolio/shared/components/navbar-component/navbar-component';
import { AboutMePage } from '../portafolio/pages/about-me-page/about-me-page';
import { HomePage } from '../portafolio/pages/home-page/home-page';
import { CertificatesPage } from '../portafolio/pages/certificates-page/certificates-page';
import { ProjectsPage } from '../portafolio/pages/projects-page/projects-page';
import { FooterComponent } from "../portafolio/shared/components/footer-component/footer-component";
import { ContactPage } from '../portafolio/pages/contact-page/contact-page';

@Component({
  selector: 'app-root',
  imports: [ContactPage, RouterOutlet, NavbarComponent, AboutMePage, HomePage, CertificatesPage, ProjectsPage, FooterComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-igni');
}
