import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches.component';
import { HomeComponent } from './home/home.component';
import { AdComponent } from './ad/ad.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'watches', component: WatchesComponent},
  {path: 'ad', component: AdComponent},
  {path: 'user', component: UserPanelComponent},
  {path: 'create', component: CreateAdComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
