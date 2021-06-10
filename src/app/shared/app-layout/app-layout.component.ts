import { Component, OnInit } from '@angular/core';
import { Theme } from '@core/model';
import { ThemesService } from '@core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  theme!: Observable<Theme | null | undefined>;
  constructor(
    private _ThemesService: ThemesService
  ) {

   }

  ngOnInit(): void {
    this.theme = this._ThemesService.mode$;
  }
  toggleTheme() {
    this._ThemesService.toggleMode();
  }
}
