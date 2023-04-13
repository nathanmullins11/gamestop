import { Component, OnInit } from '@angular/core';
import { VideoGamesService } from 'src/app/videogames.service';
import { VerticalCardItemModel } from '../../verticalcard-item.model';

@Component({
  selector: 'app-video-games-ps5-layout',
  templateUrl: './video-games-ps5-layout.component.html',
  styleUrls: ['./video-games-ps5-layout.component.css']
})
export class VideoGamesPS5LayoutComponent implements OnInit {
    products: VerticalCardItemModel [] = [];
  
    constructor(private videoGamesService:VideoGamesService) {
      
    }
  ngOnInit(): void {
    this.videoGamesService.getVideoGames().subscribe((data: VerticalCardItemModel[]) => {
      console.log("Fetching data");
      for (var product of data) {
        console.log(product);
        this.products.push(product);
      }
    });
  }
}

