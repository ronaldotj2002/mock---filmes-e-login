import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';

@Injectable()
export class FilmeService {

  filmes: Filme[];

    static FILME = [
      { id: 1, nome: "Adoráveis mulheres"      , categoria: "Melhor atriz"     , imagem: "https://media.metrolatam.com/2019/11/25/amcartazregular3-982578071b459548c2d2d3f4430b6df6-1200x600.jpg" },
      { id: 2, nome: "Ford vs Ferrari"         , categoria: "Melhor direcao"   , imagem: "https://cdn.ome.lt/tNnbQKz4_dKN8q9_HGjOyzCsMaw=/fit-in/837x500/smart/uploads/conteudo/fotos/ford-vs-ferrari-2_eiy2tKJ.jpg" },
      { id: 3, nome: "O Irlandes"              , categoria: "Melhor direcao"   , imagem: "https://i.ytimg.com/vi/ZxuTltUvvkI/maxresdefault.jpg" },
      { id: 4, nome: "Coringa"                 , categoria: "Melhor direcao"   , imagem: "https://i.ytimg.com/vi/jfVTJm9NilA/maxresdefault.jpg" },
      { id: 5, nome: "Historia de um casamento", categoria: "Melhor atriz"     , imagem: "https://i0.wp.com/valkirias.com.br/wp-content/uploads/2019/11/Marriage-Story-1.png" },
      { id: 6, nome: "1917"                    , categoria: "Melhor direcao"   , imagem: "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/01/10154231/1917.jpg" },
      { id: 7, nome: "Era uma vez em Hollywood", categoria: "Melhor direcao"   , imagem: "https://abrilsuperinteressante.files.wordpress.com/2019/08/eraumavez.png" },
      { id: 8, nome: "Parasita"                , categoria: "Melhor direcao"   , imagem: "https://conteudo.imguol.com.br/blogs/88/files/2019/11/0588081.jpg-r_1920_1080-f_jpg-q_x-xxyxx-1024x682.jpg" },
      { id: 9, nome: "Jojo Rabbit"             , categoria: "O melhor de todos", imagem: "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2020/01/Jojo-Rabbit-01.jpg" }
    ] as Filme[];

    listarFilmes(): Filme[]{
      this.filmes = FilmeService.FILME;
      return this.filmes;
    }

}
