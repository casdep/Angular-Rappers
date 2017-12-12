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

  onAddRapper() {
    (<FormArray>this.albumForm.get('rappers')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'breakthroughTrack': new FormControl(null, Validators.required),
        'dateOfBirth': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onAddRecordcompany() {
    (<FormArray>this.albumForm.get('recordcompanies')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteRapper(index: number) {
    (<FormArray>this.albumForm.get('rappers')).removeAt(index);
  }

  onDeleteRecordcompany(index: number) {
    (<FormArray>this.albumForm.get('recordcompanies')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let albumArtist = '';
    let albumName = '';
    let albumPictureURL = '';
    let albumTracks = 0;
    let albumLength = 0;
    let albumRappers = new FormArray([]);
    let albumRecordcompanies = new FormArray([]);

    if (this.editMode) {
      const album = this.albumsService.getAlbum(this.id);
      albumArtist = album.artist;
      albumName = album.name;
      albumPictureURL = album.pictureURL;
      albumTracks = album.tracks;
      albumLength = album.lengthMin;
      if (album['rappers']) {
        for (let rapper of album.rappers) {
          albumRappers.push(
            new FormGroup({
              'name': new FormControl(rapper.name, Validators.required),
              'breakthroughTrack': new FormControl(rapper.name, Validators.required),
              'dateOfBirth': new FormControl(rapper.dateOfBirth, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
      if (album['recordcompanies']) {
        for (let recordcompany of album.recordcompanies) {
          albumRecordcompanies.push(
            new FormGroup({
              'name': new FormControl(recordcompany.name)
            })
          );
        }

      }
    }

    this.albumForm = new FormGroup({
      'artist': new FormControl(albumArtist, Validators.required),
      'name': new FormControl(albumName, Validators.required),
      'pictureURL': new FormControl(albumPictureURL, Validators.required),
      'tracks': new FormControl(albumTracks, Validators.required),
      'length': new FormControl(albumLength, Validators.required),
      'rappers': albumRappers,
      'recordcompanies': albumRecordcompanies
    });
  }
}
