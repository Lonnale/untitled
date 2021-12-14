import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {SliderComponent} from "./slider/slider.component";
import {ReactiveformComponent} from "./reactiveform/reactiveform.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {LoginComponent} from "./login/login.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {TemplateformComponent} from "./templateform/templateform.component";
import {TenttisliderComponent} from "./tenttislider/tenttislider.component";


const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'reactiveform', component: ReactiveformComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'templateform', component: TemplateformComponent},
  {path: 'tenttislider', component: TenttisliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
