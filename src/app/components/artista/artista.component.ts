import{Component} from '@angular/core';
import{ActivatedRoute} from '@angular/router';

import{SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent{
    artista: any = {};
    loadingArtist: boolean;

    constructor(private router: ActivatedRoute, private spotify: SpotifyService ){

        this.loadingArtist = true;
        this.router.params.subscribe( params =>{
              //console.log(params['id']);
              this.getArtista(params['id']);
        });
    }

     getArtista(id: string){
        this.loadingArtist = true;
        this.spotify.getArtista( id ).subscribe( artista => {
              console.log(artista);
              this.artista = artista;
              this.loadingArtist = false;
        })
     }  
}