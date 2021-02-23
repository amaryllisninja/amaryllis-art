import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-character-design',
  templateUrl: './character-design.component.html',
  styleUrls: ['./character-design.component.css']
})
export class CharacterDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private urls: string[] = [
    '../assets/character-design/vegeta.png',
    '../assets/character-design/hisoka.png',
    '../assets/character-design/blue witch.jpg',
    '../assets/character-design/twd_science_guy.jpg',
    '../assets/character-design/cyborg girl.jpg',
    '../assets/character-design/frisk_is_shy.jpg',
    '../assets/character-design/katana girl.jpg',
    '../assets/character-design/team_world_domination.jpg',
    '../assets/character-design/josh_jojo.jpg',
    '../assets/character-design/link_jojo.jpg',
    '../assets/character-design/amy.jpg',
    '../assets/character-design/character_sketches01.jpg',
    '../assets/character-design/samis dojo main cast.jpg',
    '../assets/character-design/samis dojo antagonists.jpg',
    '../assets/character-design/tina.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
