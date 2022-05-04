import { AltFuncService } from './../../services/alt-func.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Func } from 'src/app/modules/func.model';

@Component({
  selector: 'app-altera-func',
  templateUrl: './altera-func.component.html',
  styleUrls: ['./altera-func.component.css'],
})
export class AlteraFuncComponent implements OnInit {
  altsFunc = new Func();
  localStorage = new LocalStorageService();
  func_id: any;
  nm_func: any;
  ft_func: any;
  rg_func: any;
  assets: any;
  selectedFile: any;
  novoUrl: any;
  novoFunc: any;
  default: any;

  constructor(private altService: AltFuncService) {}

  ngOnInit(): void {
    this.nm_func = this.localStorage.get('nm_func');
    this.ft_func = this.localStorage.get('ft_func');
    this.rg_func = this.localStorage.get('rg_func');
    this.default = this.ft_func;
  }

  alteraFunc() {
    this.func_id = this.localStorage.get('func_id');
    this.altService.altFunc(this.altsFunc, this.func_id).subscribe((data) => {
      console.log(data);
      alert(data);
    });
  }

  teste(event: any) {
    this.assets = 'assets/fotos-func/';
    this.selectedFile = event.target.files[0];
    this.novoUrl = this.assets + this.selectedFile.name;
    this.default = this.novoUrl;
    console.log(this.novoUrl);
  }
}
