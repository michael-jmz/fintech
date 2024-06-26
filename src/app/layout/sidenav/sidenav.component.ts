import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {

  isSidebarVisible = true;
  selectedMenuItem: string | null = null; // Variable para mantener el elemento seleccionado

  // Objeto para el estado de los submenús
  submenus: { [key: string]: boolean } = {
    analisis: false,
    desarrollo: false,
    bancaMinorista: false,
    serviciosBancarios: false,
    diagramas: false
  };

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarService.toggleSidebar(); // Toggle sidebar state
  }

  // Método para alternar submenús
  toggleSubmenu(menu: string) {
    console.log(`Toggling menu: ${menu}`); // Debug
    // Alterna el submenú seleccionado
    this.submenus[menu] = !this.submenus[menu];
    console.log(this.submenus); // Debug
  }

  // Método para verificar si un submenú está abierto
  isSubmenuOpen(menu: string): boolean {
    return this.submenus[menu];
  }

  // Método para establecer el elemento seleccionado
  selectMenuItem(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}
