import{Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html', 
})
export class TarjetasComponent {

    @Input() items: any[] = [];
    
    constructor(){}

    verArtista( item: any){
        let artistaId;
        if( item.type === 'artist'){
            artistaId = item.id;
        } else {
          artistaId = item.artist[0].id;
        }
        console.log(artistaId);
    }
 
}