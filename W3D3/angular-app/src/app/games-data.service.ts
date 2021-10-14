import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './games-list/games-list.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl = 'http://localhost:5353/api';
  constructor(private http: HttpClient) { }

  public getGames() {
    const url: string = this.apiBaseUrl + "/games";
    return this.http.get(url);
  }

  private handleError(error: any): Promise<any> {
    console.log("Something went wrong ", error);
    return Promise.reject(error.message || error);
  }

}