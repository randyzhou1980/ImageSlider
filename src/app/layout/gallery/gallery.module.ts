import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { CarouselMultiItemComponent } from './carousel-multi-item/carousel-multi-item.component';

import { GalleryService } from './gallery.service';

@NgModule({
  imports: [
    SharedModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    CarouselMultiItemComponent
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
