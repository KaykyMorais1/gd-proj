import { LocalStorageService } from './../../services/local-storage.service';
import { DepService } from './../../services/dep.service';
import { AddFuncService } from './../../services/add-func.service';
import { Component, Input, OnInit } from '@angular/core';
import { Func } from 'src/app/modules/func.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Departamento } from 'src/app/modules/dep.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cria-func',
  templateUrl: './cria-func.component.html',
  styleUrls: ['./cria-func.component.css'],
})
export class CriaFuncComponent implements OnInit {
  novoFunc = new Func();
  deps: any;
  selectedFile: any;
  error: any;
  index: any;
  default = 'assets/mais.png';
  assets: any;
  novoUrl: any;
  localStorage = new LocalStorageService();

  constructor(
    private addService: AddFuncService,
    public depService: DepService,
    private sanitizer: DomSanitizer
  ) {
    this.getter();
  }

  public getSantizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {}

  getter() {
    this.depService.getUsers().subscribe(
      (data: Departamento) => {
        this.deps = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }

  public getId(index: any, @Input() dep_id: any) {
    dep_id = this.deps[index].id;
    this.localStorage.set('dep_id', dep_id);
    console.log('INDEX: ', index + ', ' + dep_id);
  }

  addFunc() {
    this.addService.addFunc(this.novoFunc).subscribe((data) => {
      console.log(data);
    });
  }

  teste(event: any) {
    this.assets = 'assets/fotos-func/';
    this.selectedFile = event.target.files[0];
    this.novoUrl = this.assets + this.selectedFile.name;
    this.novoFunc.foto = this.novoUrl;
    this.default = this.novoUrl;
    console.log(this.novoUrl);
  }
}
