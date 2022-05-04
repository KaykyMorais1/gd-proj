import { LocalStorageService } from '../../services/local-storage.service';
import { AltDepService } from '../../services/alt-dep.service';
import { Component, Input, OnInit } from '@angular/core';
import { Departamento } from 'src/app/modules/dep.model';

@Component({
  selector: 'app-altera-dep',
  templateUrl: './altera-dep.component.html',
  styleUrls: ['./altera-dep.component.css'],
})
export class AlteraDepComponent implements OnInit {
  altsDep = new Departamento();
  localStorage = new LocalStorageService();
  departamento_id: any;
  nm_dep: any;
  sigla_dep: any;

  constructor(private altService: AltDepService) {}

  ngOnInit() {
    this.nm_dep = this.localStorage.get('nm_dep');
    this.sigla_dep = this.localStorage.get('sigla_dep');
  }

  alterDep() {
    this.departamento_id = this.localStorage.get('dep_id');
    this.altService
      .altDep(this.altsDep, this.departamento_id)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
