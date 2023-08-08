import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
           HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
    <section class="results">
      <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public housingLocationList: Housinglocation[] = [];
  public housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
