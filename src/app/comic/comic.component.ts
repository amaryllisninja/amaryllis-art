import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private urls: string[] = [
    '../assets/comic/batman colored page capullo alessi amaryllis.jpg',
    '../assets/comic/Battle-Chasers-comic-1-page-17-McWeeney-Madureira-ink-m-color-amaryllis-both.jpg',
    '../assets/comic/committed comics page 1 sample amaryllis.jpg',
    '../assets/comic/committed comics page 2 sample amaryllis.jpg',
    '../assets/comic/committed comics page 3 sample amaryllis.jpg',
    '../assets/comic/frank miller batman page both.jpg'
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
