import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
})
export class HeadersComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: 'home' },
      { label: 'Feed the Missionaries', routerLink: 'feedmissionaries' },
    ];

    this.activeItem = this.items[0];
  }
}
