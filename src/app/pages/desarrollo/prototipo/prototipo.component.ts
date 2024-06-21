import { Component } from '@angular/core';

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
  styleUrls: ['./prototipo.component.css']
})
export class PrototipoComponent {

  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'cicod':
        this.contenido =``;
        break;
        case 'info':
        this.contenido =``;
        break;
        case 'domicilio':
          this.contenido='';
          break;
      default:
        this.contenido = '';
    }
  }

}
