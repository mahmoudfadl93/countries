import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ICountry, ICurrency, ILanguage } from '../../model/country.model';
import { CountriesService } from '../../model/services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  isLoading!: boolean;
  country$!: Observable<ICountry>;
  borderCountries$!: Observable<ICountry[]>;
  constructor(
    private route: ActivatedRoute,
    private _CountriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this._CountriesService.getCountryByName(params.country).pipe(
        mergeMap((res) => {
          this.borderCountries$ = this._CountriesService.getCountriesByCodes(res.borders);
          return of(res);
        })
      );
    });

    this.isLoading = true;
    this.country$.subscribe(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 100);

    })
  }



  displayCurrencies(currencies: ICurrency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: ILanguage[]) {
    return languages.map((language) => language.name).join(', ');
  }
}
