import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesHomeIonicPage } from './pages-home-ionic';

@NgModule({
  declarations: [
    PagesHomeIonicPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesHomeIonicPage),
  ],
})
export class PagesHomeIonicPageModule {}
