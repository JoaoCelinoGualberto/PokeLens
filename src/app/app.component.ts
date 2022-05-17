import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeLens';
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  //Busca por Pokemons
  getPokemon() {
    this.dataService.getPokemon(10, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach(result => {
          this.dataService.getPokemonData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            });
        });
      });
  }

}
