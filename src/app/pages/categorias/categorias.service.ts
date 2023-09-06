
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Categorias } from 'src/app/core/models/categorias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL: string = '';

  constructor(
    private http: HttpClient
  ) {
    //FIXME Nao esquecer de tirar url MOCK
    this.apiURL = `${environment.mockAPI}/categorias`;
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

  create(categoria: Categorias) {
    return firstValueFrom(
      this.http.post<any>(`${this.apiURL}`, categoria)
    )
  }
  update(id: string, categoria: Categorias) {
    return firstValueFrom(
      this.http.put<any>(`${this.apiURL}/${id}`, categoria)
    )
  }

  delete(id: string) {
    return firstValueFrom(
      this.http.delete(`${this.apiURL}/${id}`)
    )
  }
}
