import { Component } from '@angular/core';

@Component({
  selector: 'app-diagramas-clases',
  templateUrl: './diagramas-clases.component.html',
  styleUrls: ['./diagramas-clases.component.css']
})
export class DiagramasClasesComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'claseAperturaCuenta':
        this.contenido =``;
        break;
      case 'dcAperturaCuentaOnline':
        this.contenido =` `;
        break;
      default:
        this.contenido = '';
    }
  }

}
