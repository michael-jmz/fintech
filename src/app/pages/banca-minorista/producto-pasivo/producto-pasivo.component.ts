import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-pasivo',
  templateUrl: './producto-pasivo.component.html',
  styleUrls: ['./producto-pasivo.component.css']
})
export class ProductoPasivoComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'inversiones':
        this.contenido = `
        <p>
          <b>1.1.1 Intereses</b><br>
          Generar ganancias por el capital depositado en una cuenta o instrumento financiero, pagadas a los depositantes según las tasas acordadas.<br><br>

          <b>1.1.2 Depósito a plazo fijo</b><br>
          Inversión en la que el cliente deposita una cantidad de dinero en una cuenta por un tiempo específico, a cambio de una tasa de interés fija.<br><br>

          <b>1.1.3 Fondos de inversión</b><br>
          Conjunto de fondos recaudados de varios inversores para invertir en valores como acciones, bonos u otros activos financieros.<br><br>

          <b>1.1.4 Rentabilidad</b><br>
          Generar la medida del rendimiento financiero obtenido de una inversión, expresada como un porcentaje de la inversión original.
        </p>`;
        break;
      case 'ahorros':
        this.contenido =` <p>
        <b>1.2.1 Plan de ahorros objetivo</b><br>
        Establecer un plan de ahorro con un objetivo específico en mente, como la compra de un automóvil, unas vacaciones, o la adquisición de una propiedad.<br><br>

        <b>1.2.2 Plan de ahorros automático</b><br>
        Autorizar a la entidad financiera, deducir automáticamente una cantidad fija de dinero de su cuenta corriente o de nómina y depositarla en una cuenta de ahorros designada durante la fecha establecida.<br><br>

        <b>1.2.3 Ahorros a largo plazo</b><br>
        Establecer un plan de ahorro a largo plazo para metas financieras importantes, como la jubilación o la compra de una casa. Realizan depósitos regulares en una cuenta de ahorros de alto rendimiento.<br><br>

        <b>Ahorro educativo</b><br>
        Establecer un plan de ahorro específico para cubrir los gastos relacionados con su educación.
      </p>`;
        break;
      case 'renta':
        this.contenido = `
        <p>
          <b>1.3.1 Créditos Militares</b><br>
          Crédito de consumo versátil diseñado para satisfacer diversos tipos de necesidades, con la mejor tasa. Beneficios: Aprobación inmediata y acreditación del dinero en tu cuenta en máximo 48 horas una vez entregada la documentación, tasa fija durante el primer año, cuotas mensuales a través de débito a cuenta BGR, pre – cancelaciones y bonos extraordinarios sin penalización, seguro de desgravamen para titular y cónyuge, montos desde USD 300 hasta USD 50.000.<br><br>

          <b>1.3.2 Créditos Civiles</b><br>
          Crédito de consumo versátil diseñado para satisfacer diversos tipos de necesidades, con la mejor tasa. Beneficios: Tasa fija durante el primer año, cuotas mensuales a través de débito a cuenta BGR, pre – cancelaciones y abonos extraordinarios sin penalización, seguro de desgravamen para titular y cónyuge, montos desde USD 1.000 hasta 20.000.<br><br>

          <b>1.3.3 Créditos Fuerzas</b><br>
          Crédito de consumo versátil diseñado para satisfacer diversos tipos de necesidades. Beneficios: Tasa fija durante el primer año, cuotas mensuales a través de débito a cuenta BGR, pre - cancelaciones y abonos extraordinarios sin penalización, seguro de desgravamen para titular y cónyuge, montos hasta 25.000.<br><br>

          <b>1.3.4 Consolidación de deudas</b><br>
          Crédito de consolidación de deudas con el objetivo de ahorrar tiempo y dinero al simplificar pagos, obteniendo una tasa de interés más favorable. Beneficios: Realizar un solo pago mensual teniendo un mejor control sobre las finanzas, una tasa fija para pagar todas las deudas, cuotas mensuales a través de débito a cuenta BGR, pre - cancelaciones y abonos extraordinarios sin penalización, seguro de desgravamen para titular y cónyuge, montos desde USD 300 hasta USD 60.000.<br><br>

          <b>1.3.5 Crédito Digital</b><br>
          Crédito preaprobado sin garante, 100% en línea. Beneficios: sin firma del conyugue, desembolso inmediato, rápido, fácil y seguro, montos hasta USD 40.000.<br><br>

          <b>1.3.6 Microcrédito militares</b><br>
          Crédito pensado para impulsar negocios propios, diseñado para satisfacer diversos tipos de necesidades con la mejor tasa. Beneficios: Aprobación inmediata y acreditación del dinero en la cuenta en máximo 48 horas una vez entregada la documentación, tasa fija durante el primer año, pre - cancelaciones y abonos extraordinarios sin penalización, seguro de desgravamen para titular y cónyuge.<br><br>

          <b>1.3.7. Crédito VIP y VIS Militares</b><br>
          Crédito hipotecario destinado a personas que deseen adquirir su primera casa con una tasa de interés del 4.88% y con montos disponibles para VIS hasta USD 81.880 y desde USD 81.881 hasta USD 105.340 para VIP. Beneficios: vivienda terminada, Certificado de calificación de proyectos emitido por el ente rector de desarrollo urbano y vivienda (para garantías), se hipoteca el bien a adquirir.<br><br>

          <b>1.3.8 Crédito Tu Casa Militar</b><br>
          Crédito hipotecario para adquirir una propiedad. Beneficios: Posibilidad de pagar la primera cuota a los 90 días del desembolso, Los créditos hipotecarios cuentan con un seguro de desgravamen para titular y cónyuge, además del seguro de incendio y terremoto cuyo costo se incluye en las cuotas mensuales, selección de la fecha mensual de pago, pre - cancelaciones y abonos extraordinarios sin penalización, Asistencia hogar gratuito, incluido en el seguro de incendio; servicios de electricista, plomero, cerrajero, etc.<br><br>

          <b>1.3.9 Crédito Multidestino</b><br>
          Crédito de consumo disponible para compra de bienes inmuebles nuevos o usados o para cubrir necesidades de consumo a largo plazo, con una garantía hipotecaria para militares. Beneficios: posibilidad de financiar estudios, vacaciones, compra de locales comerciales, terrenos, oficinas, segunda vivienda, entre otros, montos desde USD 10.000 hasta USD 120.000.<br><br>

          <b>1.3.10 Créditos para empresas</b><br>
          Crédito para apoyar el financiamiento de los activos fijos de los negocios con crédito para la adquisición, mejora, remodelación de activos fijos, con financiamiento a largo plazo acorde a las necesidades. Beneficios: Fomenta el crecimiento del negocio acorde a las inversiones proyectadas, abonos o pre - cancelaciones de deuda de acuerdo con el flujo de caja del negocio, montos hasta el 80% de la inversión total de activos fijos del negocio.
        </p>`;
        break;
      case 'apertura-premium':
        this.contenido = `
        <p>
          <b>1.4.1 Cuentas corrientes premium para clientes de alto patrimonio neto:</b><br>
          Diseñadas para clientes con un alto patrimonio neto, ofrecen servicios de gestión de inversiones y planificación patrimonial personalizados.<br><br>

          <b>1.4.2 Cuentas corrientes premium con beneficios exclusivos:</b><br>
          Ofrecen beneficios exclusivos como acceso a salas VIP en aeropuertos, programas de recompensas exclusivos y asistencia personalizada.<br><br>

          <b>1.4.3 Cuentas corrientes premium para profesionales y empresarios:</b><br>
          Orientadas a profesionales y empresarios, ofrecen herramientas financieras específicas como líneas de crédito comerciales y servicios de nómina para empleados.<br><br>

          <b>1.4.4 Cuentas corrientes premium para viajeros frecuentes:</b><br>
          Dirigidas a viajeros frecuentes, ofrecen beneficios relacionados con los viajes como seguros de viaje y acceso a programas de lealtad de aerolíneas y hoteles.<br><br>

          <b>1.4.5 Cuentas corrientes premium para estudiantes:</b><br>
          Diseñadas para estudiantes universitarios, ofrecen beneficios como tasas de interés preferenciales y herramientas de gestión financiera.
        </p>`;
        break;
      case 'apertura-ahorros':
        this.contenido = `
        <p>
          <b>1.5.1 Cuentas de ahorro estándar:</b><br>
          Son las cuentas básicas ofrecidas por la mayoría de los bancos y ofrecen tasas de interés competitivas y acceso limitado a los fondos.<br><br>

          <b>1.5.2 Cuentas de ahorro de alto rendimiento:</b><br>
          Ofrecen tasas de interés más altas que las cuentas de ahorro estándar, pero pueden requerir un saldo mínimo más alto y ofrecer menos acceso a los fondos.<br><br>

          <b>1.5.3 Cuentas de ahorro para la jubilación (IRA):</b><br>
          Diseñadas específicamente para ayudar a las personas a ahorrar para la jubilación, ofrecen ventajas fiscales como contribuciones deducibles de impuestos o crecimiento libre de impuestos.<br><br>

          <b>1.5.4 Cuentas de ahorro para objetivos específicos:</b><br>
          Orientadas a ayudar a los clientes a ahorrar para objetivos específicos como la compra de una casa o la educación universitaria, ofrecen herramientas y servicios adicionales para ayudar a alcanzar esos objetivos.<br><br>

          <b>1.5.5 Cuentas de ahorro para niños:</b><br>
          Diseñadas para ayudar a los padres a ahorrar para el futuro de sus hijos, ofrecen beneficios especiales como tasas de interés preferenciales y herramientas de educación financiera para los niños.
        </p>`;
        break;
      default:
        this.contenido = '';
    }
  }

}
