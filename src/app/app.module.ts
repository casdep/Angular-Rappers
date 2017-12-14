import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumComponent } from './albums/album.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumItemComponent } from './albums/album-list/album-item/album-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { AlbumsService } from './albums/albums.service';
import {RapperDetailComponent} from './rappers/rapper-detail/rapper-detail.component';
import {RapperComponent} from './rappers/rappers.component';
import {RapperListComponent} from './rappers/rapper-list/rapper-list.component';
import {RapperItemComponent} from './rappers/rapper-list/rapper-item/rapper-item.component';
import {RapperStartComponent} from './rappers/rapper-start/rapper-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumItemComponent,
    DropdownDirective,
    AlbumStartComponent,
    AlbumEditComponent,
    RapperComponent,
    RapperListComponent,
    RapperDetailComponent,
    RapperItemComponent,
    RapperStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
