import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../routes/app-routing.module';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, BodyComponent, FooterComponent]
})
export class LayoutModule { }
