import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Produtos } from 'src/app/core/models/produtos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string = '';

  constructor(
    private http: HttpClient
  ) {
    //FIXME Nao esquecer de tirar url MOCK
    this.apiURL = `${environment.mockAPI}/produtos`;
  }


  getAll() {
    return firstValueFrom(
      this.http.get<any>(`${this.apiURL}`)
    )
      .then(response => response);
  }
  getById(id: string) {
    return firstValueFrom(
      this.http.get<any>(`${this.apiURL}/${id}`)
    )
  }

  create(produto: Produtos) {
    return firstValueFrom(
      this.http.post<any>(`${this.apiURL}`, produto)
    )
  }
  update(id: string, produto: Produtos) {
    return firstValueFrom(
      this.http.put<any>(`${this.apiURL}/${id}`, produto)
    )
  }

  delete(id: string) {
    return firstValueFrom(
      this.http.delete(`${this.apiURL}/${id}`)
    )
  }
}
