import { Component } from '@angular/core';

@Component({
  selector: 'app-diagramas-robustez',
  templateUrl: './diagramas-robustez.component.html',
  styleUrls: ['./diagramas-robustez.component.css']
})
export class DiagramasRobustezComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'drAperturaCuentaOnline':
        this.contenido =``;
        break;
      default:
        this.contenido = '';
    }
  }


}
