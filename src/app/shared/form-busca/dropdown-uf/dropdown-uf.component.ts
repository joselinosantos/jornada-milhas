import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa';
import { UnidadeFederativaService } from './../../../core/servicos/unidade-federativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions?: Observable<string[]>;
  origemControl: FormControl = new FormControl();
  opcoes = [];
  auto: MatAutocomplete | undefined;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.filteredOptions = this.origemControl.valueChanges;

    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });
  }
}
