import { DelDepService } from '../../services/del-dep.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Departamento } from '../../modules/dep.model';
import { DepService } from '../../services/dep.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css'],
})
export class DepComponent implements OnInit {
  users: any;
  error: any;
  id_del: any;
  index: any;
  nm_dep: any;
  sigla_dep: any;
  localStorage = new LocalStorageService();

  /*a instância de um objeto também é feita da seguinte maneira*/
  constructor(
    private depService: DepService,
    public delService: DelDepService
  ) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.depService.getUsers().subscribe(
      (data: Departamento) => {
        this.users = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }

  public getId(index: any, @Input() dep_id: any) {
    dep_id = this.users[index].id;
    this.nm_dep = this.users[index].nome;
    this.sigla_dep = this.users[index].sigla;

    this.localStorage.set('sigla_dep', this.sigla_dep);
    this.localStorage.set('nm_dep', this.nm_dep);
    this.localStorage.set('dep_id', dep_id);
  }

  deleta(nome: string, index: any, dep_id: any) {
    if (confirm('Você tem certeza que deseja apagar ' + nome + '?')) {
      dep_id = this.users[index].id;
      this.localStorage.set('del_id', dep_id);
      this.id_del = this.localStorage.get('del_id');
      this.delService.delDep(this.id_del).subscribe();
    }
  }
}
