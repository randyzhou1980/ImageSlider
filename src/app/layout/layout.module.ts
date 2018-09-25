import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
