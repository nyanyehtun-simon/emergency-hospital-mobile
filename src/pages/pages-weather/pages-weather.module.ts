import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesWeatherPage } from './pages-weather';

@NgModule({
  declarations: [
    PagesWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesWeatherPage),
  ],
})
export class PagesWeatherPageModule {}
