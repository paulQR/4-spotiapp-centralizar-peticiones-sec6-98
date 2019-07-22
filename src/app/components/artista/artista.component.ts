import{Component} from '@angular/core';
import{ActivatedRoute} from '@angular/router';

import{SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent{
    artista: any = {};
    constructor(private router: ActivatedRoute, private spotify: SpotifyService ){
        this.router.params.subscribe( params =>{
              //console.log(params['id']);
              this.getArtista(params['id']);
        });
    }

     getArtista(id: string){
        this.spotify.getArtista( id ).subscribe( artista => {
              console.log(artista);
              this.artista = artista;
        })
     }  
}