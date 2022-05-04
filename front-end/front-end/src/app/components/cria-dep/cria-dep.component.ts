import { AddDepService } from '../../services/add-dep.service';
import { Departamento } from '../../modules/dep.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cria-dep',
  templateUrl: './cria-dep.component.html',
  styleUrls: ['./cria-dep.component.css'],
})
export class CriaDepComponent implements OnInit {
  novoDep = new Departamento();

  constructor(private addService: AddDepService) {}

  ngOnInit() {}

  addDep() {
    this.addService.addDep(this.novoDep).subscribe((data) => {
      console.log(data);
    });
  }
}
