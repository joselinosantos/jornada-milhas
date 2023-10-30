import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaPromocoes: Promocao[] = [];

  constructor(private servicoPromocao: PromocaoService) {}

  ngOnInit(): void {
    this.listarPromocoes();
  }

  listarPromocoes() {
    this.servicoPromocao.listar().subscribe((res) => {
      this.listaPromocoes = res;
    });
  }
}
