import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import {BancaMinoristaComponent} from './pages/banca-minorista/banca-minorista.component'
import {ProductoPasivoComponent} from './pages/banca-minorista/producto-pasivo/producto-pasivo.component'
import { InversionesComponent } from './pages/banca-minorista/producto-pasivo/inversiones/inversiones.component';
import { AhorrosComponent } from './pages/banca-minorista/producto-pasivo/ahorros/ahorros.component';
import { ServiciosBancariosComponent } from './pages/servicios-bancarios/servicios-bancarios.component';
import { CasosUsoComponent } from './pages/diagramas/casos-uso/casos-uso.component';
import { DiagramasClasesComponent } from './pages/diagramas/diagramas-clases/diagramas-clases.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'banca-minorista', component: BancaMinoristaComponent },
  { path: 'banca-minorista/producto-pasivo', component: ProductoPasivoComponent },
  { path: 'servicios', component: ServiciosBancariosComponent },


  //pasivo
  { path: 'inversiones', component: InversionesComponent },
  { path: 'ahorros', component: AhorrosComponent },

  //Diagramas
  { path: 'casos_uso', component: CasosUsoComponent },
  { path: 'diagramas_clases', component: DiagramasClasesComponent },


  // { path: 'renta', component: ComponenteRenta },
  // { path: 'apertura-premium', component: ComponenteAperturaPremium },
  // { path: 'apertura-ahorros', component: ComponenteAperturaAhorros },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
