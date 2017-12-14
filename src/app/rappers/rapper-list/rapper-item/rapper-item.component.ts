import { Component, OnInit, Input } from '@angular/core';

import {Album} from '../../../albums/album.model';

@Component({
  selector: 'app-rapper-item',
  templateUrl: './rapper-item.component.html',
  styleUrls: ['./rapper-item.component.css']
})
export class RapperItemComponent implements OnInit {
  @Input() album: Album;
  @Input() index: number;

  ngOnInit() {
  }
}
