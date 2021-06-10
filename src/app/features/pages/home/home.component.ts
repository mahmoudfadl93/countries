import { Component, OnInit } from '@angular/core';
import { Country } from '@core/model';
import { CountriesService } from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CountryResponse!: Country[];
  searchFilter!: string;
  regionFilter!: string;
  regionOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  constructor(
    private _CountriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this._CountriesService.getAllCountries().subscribe((countries) => {
      this.CountryResponse = countries;
    });
  }


  // get countries() {
  //   return this.CountryResponse
  //     ? this.CountryResponse
  //       .filter((country) =>
  //         this.searchFilter
  //           ? country.name
  //             .toLowerCase()
  //             .includes(this.searchFilter.toLowerCase())
  //           : country
  //       )
  //       .filter((country) =>
  //         this.regionFilter
  //           ? country.region.includes(this.regionFilter)
  //           : country
  //       )
  //     : this.CountryResponse;
  // }


  onSelectRegion(event: any) {
    this._CountriesService.getCountriesRegion(this.regionFilter).subscribe((countries) => {
      this.CountryResponse = countries
        .filter((country) =>
          this.searchFilter
            ? country.name
              .toLowerCase()
              .includes(this.searchFilter.toLowerCase())
            : country
        );;
    });
  }

  onSearch(event: any) {
    if (this.searchFilter) {
      this._CountriesService.getCountriesByName(this.searchFilter).subscribe((countries) => {
        this.CountryResponse = countries
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      });
    } else {
      this.loadData()
    }
  }

}
