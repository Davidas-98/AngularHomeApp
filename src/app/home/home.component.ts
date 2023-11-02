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
      <input type="text" placeholder="Filter by city" (keyup)="filterResults($any($event)?.target?.value)">
    </form>
    <section class="results">
      <app-housing-location
      *ngFor="let housingLocation of filteredLocationList"
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
  public filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  public filterResults(searchText: string | null): void {
    console.log(searchText);
    if (searchText === null) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
