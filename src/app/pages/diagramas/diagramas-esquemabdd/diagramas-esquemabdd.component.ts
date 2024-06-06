import { Component } from '@angular/core';

@Component({
  selector: 'app-diagramas-esquemabdd',
  templateUrl: './diagramas-esquemabdd.component.html',
  styleUrls: ['./diagramas-esquemabdd.component.css']
})
export class DiagramasEsquemabddComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'esquemabdd':
        this.contenido =``;
        break;
      default:
        this.contenido = '';
    }
  }

}
