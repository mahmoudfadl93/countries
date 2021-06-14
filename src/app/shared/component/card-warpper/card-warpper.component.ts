import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-warpper',
  templateUrl: './card-warpper.component.html',
  styleUrls: ['./card-warpper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWarpperComponent implements OnInit {
  @Input('linkRoute') linkRoute: any;
  @Input('imagePath') imagePath: any;
  @Input('cardHeader') cardHeader: any;
  @Input('cardDesc') cardDesc: any;



  constructor() { }

  ngOnInit(): void {
  }

}
