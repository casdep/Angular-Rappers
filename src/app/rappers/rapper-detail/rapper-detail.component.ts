import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Album} from '../../albums/album.model';
import {AlbumsService} from "../../albums/albums.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-rapper-detail',
  templateUrl: './rapper-detail.component.html',
  styleUrls: ['./rapper-detail.component.css']
})
export class RapperDetailComponent implements OnInit {
  private subscription: Subscription;
  album: Album[];
  id: number;

  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.albumsService.getRapperAlbums(this.id)
              .then(albums => this.album = albums)
              .catch(error => console.log(error));
            this.subscription = this.albumsService.albumsChanged
              .subscribe(
                (albums: Album[]) => {
                  this.album = albums;
                }
              );
          });
    //     );

  }


}
