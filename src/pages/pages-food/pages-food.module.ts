import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesFoodPage } from './pages-food';

@NgModule({
  declarations: [
    PagesFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesFoodPage),
  ],
})
export class PagesFoodPageModule {}
