import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filmes: Filme[];

  constructor(private service: FilmeService) {
    
  }

  ngOnInit() {

    this.filmes = this.service.listarFilmes();

  }

}
