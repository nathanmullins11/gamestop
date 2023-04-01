import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VerticalCardItemModel } from "./verticalcard-item.model";

@Injectable(
  {providedIn: 'root'}
)

export class VideoGamesService {
  private baseUrl: string ='https://gamestop-app-6140e-default-rtdb.firebaseio.com/';
  private videogamesEndpoint: string ='VideoGames.json';

  constructor(private http:HttpClient) {

  }

  getVideoGames() {
    return this.http.get<VerticalCardItemModel[]>(this.baseUrl + this.videogamesEndpoint);
  }
}