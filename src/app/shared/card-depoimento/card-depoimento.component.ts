import { Component, Input, OnInit } from '@angular/core';
import { Depoimento } from 'src/app/core/types/depoimento';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
})
export class CardDepoimentoComponent implements OnInit {
  @Input() depoimento!: Depoimento;

  constructor() {}

  ngOnInit(): void {}
}
