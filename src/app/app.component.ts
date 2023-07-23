import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

let template = `
<main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: template,
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = 'Homes';
}
