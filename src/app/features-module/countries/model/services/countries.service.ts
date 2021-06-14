import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { map } from 'rxjs/operators';
import { ICountry } from '../country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private api = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  getAllCountries() {
    return this.http.get<ICountry[]>(this.api + '/all');
  }

  getCountryByName(name: string) {
    return this.http
      .get<ICountry[]>(this.api + '/name/' + name)
      .pipe(map(([res]) => res));
  }

  getCountriesByName(name: string) {
    return this.http
      .get<ICountry[]>(this.api + '/name/' + name);
  }

  getCountriesRegion(regionName: string) {
    return this.http
      .get<ICountry[]>(this.api + '/region/' + regionName);
  }


  getCountriesByCodes(codes: string[]) {
    return this.http.get<ICountry[]>(
      this.api + '/alpha?codes=' + codes.join(';')
    );
  }

}
