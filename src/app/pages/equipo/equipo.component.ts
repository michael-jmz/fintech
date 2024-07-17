import { Component } from '@angular/core';


interface TeamMember {
  name: string;
  role: string;
  photoUrl: string; // Propiedad para la URL de la foto
}


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  equipo: TeamMember[] = [
    { name: 'MICHAEL JIMÉNEZ', role: 'Backend- Administrador del sistemas', photoUrl: 'assets/equipo/michael.jpeg' },
    { name: 'MARCO BRICEÑO​', role: 'Analista de sistemas', photoUrl: 'assets/equipo/marco.jpeg' },
    { name: 'MIGUEL MOROCHO', role: 'Arquitecto', photoUrl: 'assets/equipo/predeterminada.png' },
    { name: 'GILBERT SOLANO', role: 'Tester QA', photoUrl: 'assets/equipo/predeterminada.png' },
    { name: 'DENNIS JIMÉNEZ', role: 'Seguridad- UI Frontend Developer', photoUrl: 'assets/equipo/predeterminada.png' },
    { name: 'LUIS DIAZ', role: 'UI Frontend- Administrador Base de datos', photoUrl: 'assets/equipo/predeterminada.png' },
    // Agrega las demás propiedades según sea necesario
  ];

}
