import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  image1 = 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2016/02/27/ST_20160227_FARRER186VPV_2073629.jpg?itok=9P6Bfp7L&timestamp=1456506905';

  constructor() {

  }

  makeCall (hospital_name) {
    if (hospital_name == 'ferrer_park') {
      console.log('hospital name: ' + hospital_name);
    } else if (hospital_name == 'mount_elizabeth') {
      console.log(hospital_name);
    } else if (hospital_name == 'Tan_Tock_Seng') {
      console.log(hospital_name);
    }


    console.log('makeCall gets clicked');
  }
}
