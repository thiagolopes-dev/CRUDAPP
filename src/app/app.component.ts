import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Categorias', url: 'categorias', icon: 'list' },
    { title: 'Produtos', url: 'produtos', icon: 'fast-food' },
  ];
  constructor() { }
}
