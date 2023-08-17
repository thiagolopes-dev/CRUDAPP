import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Produtos', url: 'produtos', icon: 'fast-food' },
    { title: 'Categorias', url: '/folder/outbox', icon: 'list' },
    { title: 'Vendas', url: '/folder/favorites', icon: 'card' }
  ];
  constructor() { }
}
