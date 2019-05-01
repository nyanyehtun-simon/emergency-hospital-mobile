webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesFoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PagesFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesFoodPage = /** @class */ (function () {
    function PagesFoodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagesFoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesFoodPage');
    };
    PagesFoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages-food',template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/pages-food/pages-food.html"*/'<!--\n  Generated template for the PagesFoodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Food Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Healthy Food Patients should consider</h2>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <img src="veg-image1.jpg" height="250px">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="veg-image2.jpg" height="250px">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="veg-image3.jpg" height="250px">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/pages-food/pages-food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PagesFoodPage);
    return PagesFoodPage;
}());

//# sourceMappingURL=pages-food.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pages-food/pages-food.module": [
		274,
		2
	],
	"../pages/pages-home-ionic/pages-home-ionic.module": [
		272,
		0
	],
	"../pages/pages-weather/pages-weather.module": [
		273,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
        this.image1 = 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2016/02/27/ST_20160227_FARRER186VPV_2073629.jpg?itok=9P6Bfp7L&timestamp=1456506905';
    }
    HelloIonicPage.prototype.makeCall = function (hospital_name) {
        if (hospital_name == 'ferrer_park') {
            console.log('hospital name: ' + hospital_name);
        }
        else if (hospital_name == 'mount_elizabeth') {
            console.log(hospital_name);
        }
        else if (hospital_name == 'Tan_Tock_Seng') {
            console.log(hospital_name);
        }
        console.log('makeCall gets clicked');
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Health Care Application</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="./new_ferrer_park_hospital.jpg" />\n    <ion-card-header>\n      <ion-card-title>Farrer Park Hospital</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Farrer Park Hospital is a private tertiary healthcare institution in Farrer Park, Singapore opened in March 2016\n      by Health Minister Gan Kim Yong. It is part of Singapore’s first fully integrated healthcare-hospitality complex,\n      Connexion, a 20 storey building which is developed and managed by The Farrer Park Company.\n    </ion-card-content>\n\n    <!-- <button (click)="makeCall(\'ferrer_park\')" ion-button color="primary" slot="end" style="margin-bottom: 10px;">\n      <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n      Call to Farrer Park Hospital\n    </button> -->\n\n    <a href="tel:6363 1818">\n        <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n      Call to Farrer Park Hospital\n    </a>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="./mount_elizabeth.jpg" />\n    <ion-card-header>\n      <ion-card-title>Farrer Park Hospital</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Mount Elizabeth Hospital, known colloquially as Mount E, is a 345-bed private hospital in Singapore operated by\n      Parkway Health. Construction began in 1976 and the hospital officially opened on 8 December 1979. The hospital\n      specialises in cardiology, oncology, and neuroscience, among other tertiary services.\n    </ion-card-content>\n\n    <!-- <button (click)="makeCall(\'mount_elizabeth\')" ion-button color="primary" slot="end" style="margin-bottom: 10px;">\n      <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n      Call to Mount Elizabeth Hospital\n    </button> -->\n\n    <a href="tel:6737 2666">\n        <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n      Call to Farrer Park Hospital\n    </a>\n\n  </ion-card>\n\n  <ion-card>\n\n      <img src="./TanTockSeng.jpeg" />\n      <ion-card-header>\n        <ion-card-title>Tan Tock Seng Hospital</ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n          Tan Tock Seng Hospital is one of Singapore’s largest multi-disciplinary hospitals. The hospital has 45 clinical and allied health departments, 16 specialist centres and is powered by more than 8,000 healthcare staff. \n      </ion-card-content>\n  \n      <!-- <button (click)="makeCall(\'Tan_Tock_Seng\')" ion-button color="primary" slot="end" style="margin-bottom: 10px;">\n        <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n        Call to Tan Tock Seng Hospital\n      </button> -->\n      \n      <a href="tel:6256 6011">\n          <ion-icon name="call" style="font-size: 20px; margin-right: 20px;"></ion-icon>\n        Call to Farrer Park Hospital\n      </a>\n  \n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages_food_pages_food__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_weather_pages_weather__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_weather_pages_weather__["a" /* PagesWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pages_food_pages_food__["a" /* PagesFoodPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pages-home-ionic/pages-home-ionic.module#PagesHomeIonicPageModule', name: 'PagesHomeIonicPage', segment: 'pages-home-ionic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pages-weather/pages-weather.module#PagesWeatherPageModule', name: 'PagesWeatherPage', segment: 'pages-weather', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pages-food/pages-food.module#PagesFoodPageModule', name: 'PagesFoodPage', segment: 'pages-food', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_weather_pages_weather__["a" /* PagesWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pages_food_pages_food__["a" /* PagesFoodPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages_food_pages_food__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages_weather_pages_weather__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Medicine', component: __WEBPACK_IMPORTED_MODULE_4__pages_pages_weather_pages_weather__["a" /* PagesWeatherPage */] },
            { title: 'Food', component: __WEBPACK_IMPORTED_MODULE_3__pages_pages_food_pages_food__["a" /* PagesFoodPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PagesWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesWeatherPage = /** @class */ (function () {
    function PagesWeatherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagesWeatherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesWeatherPage');
    };
    PagesWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pages-weather',template:/*ion-inline-start:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/pages-weather/pages-weather.html"*/'<!--\n  Generated template for the PagesWeatherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Weather Page</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Multi-Nutrients Patients should consider</h2>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <img src="medicine1.jpg" height="250px">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="medicine2.jpeg" height="250px">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="medicine3.jpeg" height="250px">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/nyanyehtun/angular_projects/ChoToo/emergency-hospital-mobile-app/src/pages/pages-weather/pages-weather.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], PagesWeatherPage);
    return PagesWeatherPage;
}());

//# sourceMappingURL=pages-weather.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map