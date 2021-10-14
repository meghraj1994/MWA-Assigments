import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})


export class GamesListComponent implements OnInit {
  title = "GameList"
  // game: Game = {
  //   title: "Mr. Jack",
  //   price: 33.96,
  //   year: 2006
  // };
  games: any;
  constructor(service: GamesDataService) {
    service.getGames().subscribe(data => {
      console.log(data);
      this.games = data

    })
  }

  ngOnInit(): void {
  }

}

export class Game {
  title!: string;
  price!: number;
  year!: number;
}
