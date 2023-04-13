import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VerticalCardItemModel } from "./verticalcard-item.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable(
  {providedIn: 'root'}
)

export class VideoGamesService {
  // private baseUrl: string ='https://gamestop-app-6140e-default-rtdb.firebaseio.com/';
  // private videogamesEndpoint: string ='VideoGames.json';

  constructor(private db:AngularFireDatabase) {

  }

  getVideoGames() {
    return this.db.list<VerticalCardItemModel>("VideoGames").valueChanges();
  }
}