import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './_services/user.service';
import { WatchesComponent } from './watches/watches.component';
import { AdComponent } from './ad/ad.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    WatchesComponent,
    AdComponent,
    UserPanelComponent,
    CreateAdComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
