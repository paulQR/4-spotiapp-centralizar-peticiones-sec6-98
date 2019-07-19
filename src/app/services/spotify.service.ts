import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// operador Map
import { map } from 'rxjs/operators';

/*
 forma automatica de importar servicio, no es necesario (es opcional) importarlo en el fichero
 "app.module.app"
 */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService{
    constructor( private http: HttpClient){
        console.log('Spotify service listo');
    }

    getNewReleases(){
        const headers = new HttpHeaders({
          'Authorization': 'Bearer BQAi0_UkT3m2tjJWsTXEKHSp.....'
        });
        /*
          this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers }).subscribe(data =>{
            console.log(data);
          });        
        */
        /*
        this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data =>{
          console.log(data);
        });
        */

        /*
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).pipe( map( data => {
              return data['albums'].items;
        } ));     
        */  

        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).pipe( map( data => data['albums'].items ));

    }

    getArtista(termino: string){
        const headers = new HttpHeaders({
          'Authorization': 'Bearer BQAi0_UkT3m2tjJWsTXEKHSp.....'
        });   
        //return this.http.get('https://api.spotify.com/v1/search?q=ed%20sheeran&type=artist&limit=15', { headers });
        /*
        return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });          
        */

        // se puede poner en una linea "=> data['artists'].items"
        /*
        return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers }).pipe( map( data => {
              return data['artists'].items;
        } ));        
        */
        return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers }).pipe( map( data => data['artists'].items));          

    }
}