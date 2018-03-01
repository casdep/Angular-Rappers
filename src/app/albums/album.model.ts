import {Band} from '../shared/RockBand.model';
import {RecordCompany} from '../shared/recordcompany.model';

export class Album {
  public _id: string;
  public band: string;
  public name: string;
  public pictureURL: string;
  public tracks: number;
  public lengthMin: number;
  // public band: band;
  // public recordcompany: RecordCompany;

  constructor(
    albumBand: string, name: string, pictureURL: string, tracks: number, lengthMin: number,
    // band: list, recordcompany: RecordCompany
  )
  {
    this.band = albumBand;
    this.name = name;
    this.pictureURL = pictureURL;
    this.tracks = tracks;
    this.lengthMin = lengthMin;
    // this.band = band;
    // this.recordcompany = recordcompany;
  }
}
