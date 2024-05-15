import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-bancarios',
  templateUrl: './servicios-bancarios.component.html',
  styleUrls: ['./servicios-bancarios.component.css']
})
export class ServiciosBancariosComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'reclamo':
        this.contenido = `
        <p>
          <b>3.1.1 Reclamos ATM:</b><br>
          <b>3.1.2 Reclamos de inconsistencias operativas:</b><br>
          <b>3.1.3 Quejas:</b><br>
        </p>`;
        break;
      case 'requerimientos':
        this.contenido =`
        <p>
          <b>3.2.1 Actualizaciones de datos y firmas</b><br>
          <b>3.2.2 Prohibición de cheques y libretas de ahorros</b><br>
          <b>3.2.3 Cancelación de cuenta</b><br>
        </p>`;
        break;
        case 'emergencia':
        this.contenido =`
        <p>
          <b>3.3.1 Emisión y entrega de chequeras </b><br>
          <b>3.3.2 Emisión de cheques </b><br>
          <b>3.3.3 Entrega de cheques </b><br>
          <b>3.4.3 Anulación de cheques </b><br>

        </p>`;
        break;
        case 'certificados':
        this.contenido =`
        <p>
          <b>3.4.1 Entrega de estado de cuenta  </b><br>

        </p>`;
        break;
        case 'canales':
        this.contenido =`
        <p>
          <b>3.5.1 Banca digital App  </b><br>
          <b>3.5.2 Banca digital Web  </b><br>
          <b>3.5.3 Call center  </b><br>
        </p>`;
        break;
      default:
        this.contenido = '';
    }

}

}
