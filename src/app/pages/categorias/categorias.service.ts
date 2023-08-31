
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from 'src/app/core/models/categorias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiUrl: string = '';
constructor(
  private http: HttpClient
) { }


 getAll(){
  return this.http.get(`${environment.mockAPI}/categorias`)
  .toPromise()
  .then(response => response);
 }

 create(categoria: Categorias){
  return this.http.post<any>(`${environment.mockAPI}/categorias`,  categoria)
  .toPromise();

 }
}
