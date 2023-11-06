import { Component } from '@angular/core';
import { DepoimentoService } from 'src/app/core/servicos/depoimento.service';
import { Depoimento } from 'src/app/core/types/depoimento';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent {
  depoimentos!: Depoimento[];

  constructor(private service: DepoimentoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
