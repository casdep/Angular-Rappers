import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './albums/album.component';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import {RapperComponent} from './rappers/rappers.component';
import {RapperStartComponent} from './rappers/rapper-start/rapper-start.component';
import {RapperDetailComponent} from './rappers/rapper-detail/rapper-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumComponent, children: [
    { path: '', component: AlbumStartComponent },
    { path: 'new', component: AlbumEditComponent },
    { path: ':id', component: AlbumDetailComponent },
    { path: ':id/edit', component: AlbumEditComponent },
  ] },
  { path: 'rappers', component: RapperComponent, children: [
    { path: '', component: RapperStartComponent },
    { path: ':id', component: RapperDetailComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
