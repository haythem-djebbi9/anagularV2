import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarquesComponent } from './marques/MarquesComponent';
import { AddMarqueComponent } from './add-marques/add-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { RechercheParPaysComponent } from './recherche-par-pays/recherche-par-pays.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListePaysComponent } from './liste-pays/liste-pays.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MaruqueGuard } from './marque.guard';

const routes: Routes = [

  {path: "marques", component : MarquesComponent},
  {path: "add-marque", component : AddMarqueComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "updateMarque/:id", component: UpdateMarqueComponent},
  {path: "rechercheParPays", component : RechercheParPaysComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listePays", component :ListePaysComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-produit", component : AddMarqueComponent, canActivate:[MaruqueGuard]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
