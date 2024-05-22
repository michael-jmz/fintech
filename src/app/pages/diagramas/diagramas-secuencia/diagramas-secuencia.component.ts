import { Component } from '@angular/core';

@Component({
  selector: 'app-diagramas-secuencia',
  templateUrl: './diagramas-secuencia.component.html',
  styleUrls: ['./diagramas-secuencia.component.css']
})
export class DiagramasSecuenciaComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'dsAperturaCuenta':
        this.contenido =``;
        break;
      case 'dsAperturaCuentaOnline':
        this.contenido =` `;
        break;
      default:
        this.contenido = '';
    }
  }


}
