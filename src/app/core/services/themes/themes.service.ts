import { Injectable } from '@angular/core';
import { Theme } from '@core/model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private mode = new BehaviorSubject(Theme.light);
  constructor() { }

  get mode$(): Observable<Theme> {
    return this.mode.asObservable();
  }

  toggleMode() {
    console.log("🚀 ~ file: themes.service.ts ~ line 18 ~ ThemesService ~ toggleMode ~ Theme.ligh", Theme)
    console.log("🚀 ~ file: themes.service.ts ~ line 18 ~ ThemesService ~ toggleMode ~   this.mode",   this.mode)
    if (this.mode.value === Theme.light) {

      this.mode.next(Theme.dark);
    } else {
      this.mode.next(Theme.light);
    }
  }
}
