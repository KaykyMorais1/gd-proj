import { DelFuncService } from './../../services/del-func.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DepComponent } from '../dep/dep.component';
import { Func } from '../../modules/func.model';
import { FuncService } from '../../services/func.service';
import { Component, OnInit, Input } from '@angular/core';
import { Departamento } from '../../modules/dep.model';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  users: any;
  error: any;
  localStorage = new LocalStorageService();
  dep_id: any;
  func_id: any;
  nm_func: any;
  ft_func: any;
  rg_func: any;
  id_del: any;

  constructor(
    private funcService: FuncService,
    public delFuncService: DelFuncService
  ) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.dep_id = this.localStorage.get('dep_id');
    this.funcService.getFunc(this.dep_id).subscribe(
      (data: Func[]) => {
        this.users = data;
      },
      (error: any) => {
        this.error = error;
        console.error("ERROR: '" + error);
      }
    );
  }

  public getId(index: any, @Input() func_id: any) {
    this.func_id = this.users[index].id;
    this.nm_func = this.users[index].nome;
    this.ft_func = this.users[index].foto;
    this.rg_func = this.users[index].rg;

    this.localStorage.set('func_id', func_id);
    this.localStorage.set('nm_func', this.nm_func);
    this.localStorage.set('ft_func', this.ft_func);
    this.localStorage.set('rg_func', this.rg_func);
  }

  deleta(nome: string, index: any, func_id: any) {
    if (confirm('Você tem certeza que deseja apagar ' + nome + '?')) {
      func_id = this.users[index].id;
      this.localStorage.set('del_func_id', func_id);
      this.id_del = this.localStorage.get('del_func_id');
      this.delFuncService.delFunc(this.id_del).subscribe();
    }
  }
}
