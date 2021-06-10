import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country, Currency, Language } from '@core/model';
import { CountriesService } from '@core/services';
import { Observable, of } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  country$!: Observable<Country>;
  borderCountries$!: Observable<Country[]>;
  constructor(
    private route: ActivatedRoute,
    private _CountriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this._CountriesService.getCountryByName(params.country).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          this.borderCountries$ = this._CountriesService.getCountriesByCodes(res.borders);
          return of(res);
        })
      );
    });
  }



  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }

}
