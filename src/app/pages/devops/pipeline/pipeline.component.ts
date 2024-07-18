import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'credito':
        this.contenido = `
        <p>
          <b>2.1.1 Análisis de Riesgo Crediticio Avanzado:</b><br>
          Evaluación detallada de la solvencia financiera de la empresa, considerando factores como la capacidad de generación de flujo de efectivo, la estabilidad de los ingresos y la diversificación de los clientes.<br><br>

          <b>2.1.2 Gestión de Garantías y Colaterales Específicos:</b><br>
          Evaluación detallada de los activos ofrecidos como garantía, incluyendo propiedades inmobiliarias, equipos, inventario y cuentas por cobrar, para determinar su valor y liquidez.<br><br>

          <b>2.1.3 Desarrollo de Estrategias de Segmentación de Clientes:</b><br>
          Segmentación avanzada de la cartera de clientes empresariales en función de criterios como el tamaño de la empresa, el sector industrial, la ubicación geográfica y el riesgo crediticio.
        </p>`;
        break;
      case 'visa':
        this.contenido =`
        <p>
          <b>2.2.1 Desarrollo de Estrategias de Expansión de la Franquicia:</b><br>
          Diseño e implementación de estrategias para expandir la presencia de la franquicia Visa en nuevos mercados y segmentos de clientes.<br><br>

          <b>2.2.2 Gestión de Alianzas y Asociaciones Estratégicas:</b><br>
          Negociación y gestión de alianzas estratégicas con instituciones financieras, comerciantes y otras partes interesadas para fortalecer la posición de la franquicia Visa en el mercado.<br><br>

          <b>2.2.3 Implementación de Programas de Fidelización de Clientes Visa:</b><br>
          Desarrollo e implementación de programas de fidelización de clientes para promover el uso continuo de tarjetas Visa y fortalecer la lealtad de los clientes hacia la marca.
        </p>`;
        break;
      default:
        this.contenido = '';
    }

}

}
