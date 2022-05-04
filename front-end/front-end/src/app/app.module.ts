import { CriaFuncComponent } from './components/cria-func/cria-func.component';
import { AlteraDepComponent } from './components/altera-dep/altera-dep.component';
import { CriaDepComponent } from './components/cria-dep/cria-dep.component';
import { DepComponent } from './components/dep/dep.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlteraFuncComponent } from './components/altera-func/altera-func.component'

@NgModule({
  declarations: [
    AppComponent,
    DepComponent,
    FuncionariosComponent,
    CriaDepComponent,
    AlteraDepComponent,
    CriaFuncComponent,
    AlteraFuncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
