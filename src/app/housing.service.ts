import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  private url = "http://localhost:3000/locations";

  public async getAllHousingLocations(): Promise<Housinglocation[]> {
    const housingLocation: Response = await(fetch(this.url));
    return await housingLocation.json() ?? [];
  }

  public async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const housingLocation: Response = await fetch(`${this.url}/${id}`)

    return await housingLocation.json() ?? undefined;
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
