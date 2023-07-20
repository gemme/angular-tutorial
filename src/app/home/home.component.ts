import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numberList = [1,2,3,4,5,6,7,8,9,10];
  // housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[];
  starwarsActor: string = '';

  constructor(
    private housingService: HousingService,
    /**
     * private housingService: HousingService,
     * private housingService: HousingService,
     * private housingService: HousingService,
     * private housingService: HousingService,
     */
    ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingService.getStarwarsActor().then(actor => this.starwarsActor = actor.name);
  }

  /* constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  } */

}
