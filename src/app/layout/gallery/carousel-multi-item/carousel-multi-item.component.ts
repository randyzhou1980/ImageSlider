import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { GalleryItem, GalleryService } from '../gallery.service';

@Component({
  selector: 'app-carousel-multi-item',
  templateUrl: './carousel-multi-item.component.html',
  styleUrls: ['./carousel-multi-item.component.scss']
})
export class CarouselMultiItemComponent implements OnInit {
  galleryItems: GalleryItem[];
  itemIndex = 0;
  offset = 0;
  lastItemIndex = 0;

  @Output() selectedImgSrc = new EventEmitter<string>();

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.galleryItems = this.galleryService.getGalleryItems();
  }

  onSelectImage(selectedSrc: string) {
    this.selectedImgSrc.emit(selectedSrc);
  }

  onSlide(direction: number, itemList: any) {
    if (direction < 0 && this.itemIndex === 0) {
      return;
    }

    this.lastItemIndex = itemList.children.length - Math.floor(itemList.offsetWidth / itemList.children[0].offsetWidth);

    if (this.lastItemIndex <= this.itemIndex && direction > 0) {
      return;
    }

    this.itemIndex += direction;

    this.calculateOffset(itemList);
  }

  private calculateOffset(itemList: any) {
    let counter = 0;

    for (let i = this.itemIndex - 1; i >= 0; i--) {
      const item = itemList.children[i];
      const style = item.currentStyle || window.getComputedStyle(item);

      counter += item.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }

    this.offset = -counter;
  }
}
