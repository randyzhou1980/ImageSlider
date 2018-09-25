import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selectedImgSrc: string;

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.selectedImgSrc = this.galleryService.getDefaultItem().src;
  }

  onSelectImage(selectedSrc: string) {
    this.selectedImgSrc = selectedSrc;
  }
}
