import { CriaFuncComponent } from './components/cria-func/cria-func.component';
import { DepComponent } from './components/dep/dep.component';
import { AlteraDepComponent } from './components/altera-dep/altera-dep.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaDepComponent } from './components/cria-dep/cria-dep.component';
import { AlteraFuncComponent } from './components/altera-func/altera-func.component';

const routes: Routes = [
  { path: 'departamentos', component: DepComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'criar-departamento', component: CriaDepComponent },
  { path: 'altera-departamento', component: AlteraDepComponent },
  { path: 'criar-funcionario', component: CriaFuncComponent },
  { path: 'altera-funcionario', component: AlteraFuncComponent },
  { path: '', redirectTo: '/departamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
