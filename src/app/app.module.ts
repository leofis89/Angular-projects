import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Componente1 } from './components/componente1/componente1.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        Componente1,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClient
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
