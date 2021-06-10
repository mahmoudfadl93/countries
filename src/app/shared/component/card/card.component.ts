import { Component, Input, OnInit } from '@angular/core';
import { Country } from '@core/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() country!: Country;
  constructor() { }

  ngOnInit(): void {
  }

}
