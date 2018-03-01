import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {
  id: number;
  editMode = false;
  albumForm: FormGroup;
  albumRapper: FormGroup;
  albumRecordCompany: FormGroup;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.albumForm.value);
    if (this.editMode) {
      this.albumsService.updateAlbum(this.id, this.albumForm.value);
    } else {
      this.albumsService.addAlbum(this.albumForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let albumBand = '';
    let albumName = '';
    let albumPictureURL = '';
    let albumTracks = 0;
    let albumLength = 0;
    // let albumRapperName = '';
    // let albumRapperBreakThroughTrack = '';
    // let albumRapperDateOfBirth = '';
    // let albumRecordCompanyLabelName = '';

    if (this.editMode) {
      const album = this.albumsService.getAlbum(this.id);
      albumBand = album.band;
      albumName = album.name;
      albumPictureURL = album.pictureURL;
      albumTracks = album.tracks;
      // albumLength = album.lengthMin;
      // albumRapperName = album.band.name;
      // albumRapperBreakThroughTrack = album.band.bestTrack;
      // albumRapperDateOfBirth = album.band.artists;
      // albumRecordCompanyLabelName = album.recordcompany.labelName;
    }

this.albumForm = new FormGroup({
  "band": new FormControl(albumBand, Validators.required),
  'name': new FormControl(albumName, Validators.required),
  'pictureURL': new FormControl(albumPictureURL, Validators.required),
  'tracks': new FormControl(albumTracks, Validators.required),
  'lengthMin': new FormControl(albumLength, Validators.required),
  // 'rapper': this.albumRapper = new FormGroup({
  //   'rapperName': new FormControl(albumRapperName, Validators.required),
  //   'breakthroughTrack': new FormControl(albumRapperBreakThroughTrack, Validators.required),
  //   'dateOfBirth': new FormControl(albumRapperDateOfBirth, Validators.required)
  // }),
  // 'recordcompany': this.albumRecordCompany = new FormGroup({
  //   'labelName': new FormControl(albumRecordCompanyLabelName, Validators.required)
  //     })
    });
  }
}
