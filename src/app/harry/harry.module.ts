import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarryListaComponent } from './harry-lista/harry-lista.component';
import { HarryDetalheComponent } from './harry-detalhe/harry-detalhe.component';




@NgModule({
  declarations: [
    HarryListaComponent,
    HarryDetalheComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HarryListaComponent,
    HarryDetalheComponent
  ]
})
export class HarryModule { }
