
export class Band {
  public name: string;
  public bestTrack: string;
  public artists: string;

  constructor(bandName: string, bestTrack: string, artists: string) {
    this.name = bandName;
    this.bestTrack = bestTrack;
    this.artists = artists;
  }
}
