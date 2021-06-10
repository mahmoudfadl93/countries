import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Country } from '@core/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private api = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  getAllCountries() {
    return this.http.get<Country[]>(this.api + '/all');
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(this.api + '/name/' + name)
      .pipe(map(([res]) => res));
  }

  getCountriesByName(name: string) {
    return this.http
      .get<Country[]>(this.api + '/name/' + name);
  }

  getCountriesRegion(regionName: string) {
    return this.http
      .get<Country[]>(this.api + '/region/' + regionName);
  }


  getCountriesByCodes(codes: string[]) {
    return this.http.get<Country[]>(
      this.api + '/alpha?codes=' + codes.join(';')
    );
  }

}
