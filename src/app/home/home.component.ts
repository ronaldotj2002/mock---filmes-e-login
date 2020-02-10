import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Filme[] = [];
  usuario: Usuario;

  constructor(private service : FilmeService) {

      this.usuario = new Usuario();

   }

  ngOnInit() {

    this.filmes = this.service.listarFilmes();

  }

}
