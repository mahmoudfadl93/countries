import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../model/country.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input('ListCard') ListCard!: ICountry[];



  constructor() { }

  ngOnInit(): void {
  }

}
