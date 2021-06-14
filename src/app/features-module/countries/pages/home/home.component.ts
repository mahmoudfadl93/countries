import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../model/country.model';
import { CountriesService } from '../../model/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading!: boolean;
  CountryResponse!: ICountry[];
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
    this.isLoading = true;
    this._CountriesService.getAllCountries().subscribe((countries) => {
      this.isLoading = false;
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
    this.isLoading = true;
    this._CountriesService.getCountriesRegion(this.regionFilter).subscribe(
      (countries) => {
        this.CountryResponse = countries
          .filter((country) =>
            this.searchFilter
              ? country.name
                .toLowerCase()
                .includes(this.searchFilter.toLowerCase())
              : country
          );
        this.isLoading = false;
      }

    );
  }

  onSearch(event: any) {
    this.searchFilter = this.searchFilter.trim();

    if (this.searchFilter) {
      this._CountriesService.getCountriesByName(this.searchFilter).subscribe((countries) => {
        this.isLoading = true;
        this.CountryResponse = countries
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          );
        this.isLoading = false;
      },
        (err) => {
          this.isLoading = false;
          this.CountryResponse = null!;
          console.log("🚀 ~ file: home.component.ts ~ line 62 ~ HomeComponent ~ onSelectRegion ~ err")

        });
    } else {
      this.loadData()
    }
  }

}
