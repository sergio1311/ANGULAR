import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TitleComponent } from './shared/title/title.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { appRouting } from './app.routes';
import { ZombiesComponent } from './zombies/zombies.component';
import { ZombiesModalsComponent } from './modals/zombies/zombies.component';
import { CerebrosModalsComponent } from './modals/cerebros/cerebros.component';
import { CerebrosComponent } from './cerebros/cerebros.component';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './modals/usuarios/usuarios.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    HeaderComponent,
    SidemenuComponent,
    TitleComponent,
    SettingsComponent,
    ZombiesComponent,
    ZombiesModalsComponent,
    CerebrosComponent,
    CerebrosModalsComponent,
    UsuariosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [SettingsService, ZombiesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
