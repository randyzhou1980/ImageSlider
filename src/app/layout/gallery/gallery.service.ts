import { Injectable } from '@angular/core';

import { ConfigService } from 'src/app/core/_services/config.service';

export class GalleryItem {
  src: string;
  title: string;
  description: string;
  sort: number;

  constructor(src: string, title: string, description: string, sort: number) {
    this.src = src;
    this.title = title;
    this.description = description;
    this.sort = sort;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private configService: ConfigService
  ) { }

  public getGalleryItems(): GalleryItem[] {
    const items = new Array<GalleryItem>();

    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide1.jpg', 'Image 1', 'Gallery testing image 1', 1));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide2.jpg', 'Image 2', 'Gallery testing image 2', 2));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide3.jpg', 'Image 3', 'Gallery testing image 3', 3));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide4.jpg', 'Image 4', 'Gallery testing image 4', 4));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide5.jpg', 'Image 5', 'Gallery testing image 5', 5));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide6.jpg', 'Image 6', 'Gallery testing image 6', 6));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide7.jpg', 'Image 7', 'Gallery testing image 7', 7));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide8.jpg', 'Image 8', 'Gallery testing image 8', 8));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide9.jpg', 'Image 9', 'Gallery testing image 9', 9));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide10.jpg', 'Image 10', 'Gallery testing image 10', 10));
    items.push(new GalleryItem(this.configService.imageBaseUrl + 'slide11.jpg', 'Image 11', 'Gallery testing image 11', 11));

    return items;
  }

  public getDefaultItem(): GalleryItem {
    return new GalleryItem(this.configService.imageBaseUrl + 'slide1.jpg', 'Image 1', 'Gallery testing image 1', 1);
  }
}
