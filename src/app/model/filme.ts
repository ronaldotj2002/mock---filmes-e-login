export class Filme {

  id        : number;
  nome      : string;
  categoria : string;
  imagem    : string;

  constructor(id?:number, nome?:string, categoria?:string, imagem?:string){

      this.id        = id;
      this.nome      = nome;
      this.categoria = categoria;
      this.imagem    = imagem;
      
  }

}
