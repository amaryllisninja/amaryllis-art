import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private urls: string[] = [
    '../assets/illustration/genius.png',
    '../assets/illustration/deadline.png',
    '../assets/illustration/cash.png',
    '../assets/illustration/skeleton cat sticker (1).jpg',
    '../assets/illustration/Potion Pals (1).jpg',
    '../assets/illustration/A Gift for Ghosts Color.jpg',
    '../assets/illustration/Mushroom Witch.jpg',
    '../assets/illustration/pumpkin witch sticker (1).jpg',
    '../assets/illustration/snackitalism.jpg',
    '../assets/illustration/Turkey Witch.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
