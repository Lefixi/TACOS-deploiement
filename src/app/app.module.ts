import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TacosComponent } from './tacos/tacos.component';
import { EuroPipe } from './euro.pipe';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuPanierComponent } from './menu-panier/menu-panier.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TacosComponent,
    EuroPipe,
    MenuDetailComponent,
    MenuPanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
