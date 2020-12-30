require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .page {\n\nalign-items: center;\n\nflex-direction: column;\n\t} */\n.form[data-v-45ba5ed4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-45ba5ed4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-45ba5ed4] {\n    /* horizontal-align: center; */\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-45ba5ed4] {\n    margin-bottom: 25;\n}\n.input[data-v-45ba5ed4] {\n    font-size: 18;\n    /* placeholder-color: #A8A8A8; */\n}\n.input-field .input[data-v-45ba5ed4] {\n    font-size: 54;\n}\n.btn-primary[data-v-45ba5ed4] {\n    height: 50;\n    margin: 30 5 15 5;\n    background-color: #D51A1A;\n    border-radius: 5;\n    font-size: 20;\n    font-weight: 600;\n    color: white;\n}\n.login-label[data-v-45ba5ed4] {\n    /* horizontal-align: center; */\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-45ba5ed4] {\n    margin-bottom: 20;\n}\n.bold[data-v-45ba5ed4] {\n    color: #000000;\n}\n", "",{"version":3,"sources":["webpack://../components/App.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiJA;;;;;IAKA;AAEA;IACA,eAAA;IACA,gBAAA;IACA,YAAA;IACA,sBAAA;AACA;AAEA;IACA,iBAAA;IACA,UAAA;IACA,iBAAA;AACA;AAEA;IACA,8BAAA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;IACA,aAAA;IACA,gCAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,UAAA;IACA,iBAAA;IACA,yBAAA;IACA,gBAAA;IACA,aAAA;IACA,gBAAA;IACA,YAAA;AACA;AAEA;IACA,8BAAA;IACA,cAAA;IACA,aAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;IACA,cAAA;AACA","sourcesContent":["<template>\n<Page actionBarHidden=\"true\">\n    <ActionBar title=\"Login\" />\n    <FlexboxLayout class=\"page\">\n        <StackLayout class=\"form\">\n            <!-- <Image class=\"logo\" src=\"~/images/logo.png\" /> -->\n            <Label class=\"header\" text=\"SMILE\" />\n\n            <StackLayout class=\"input-field\" marginBottom=\"25\">\n                <TextField class=\"input\" hint=\"UserName\" keyboardType=\"text\" autocorrect=\"false\" autocapitalizationType=\"none\" v-model=\"user\" returnKeyType=\"next\" fontSize=\"18\" />\n                <StackLayout class=\"hr-light\" />\n            </StackLayout>\n\n            <StackLayout class=\"input-field\" marginBottom=\"25\">\n                <TextField ref=\"password\" class=\"input\" hint=\"Password\" secure=\"true\" v-model=\"pass\" :returnKeyType=\"isLoggingIn ? 'done' : 'next'\" fontSize=\"18\" />\n                <StackLayout class=\"hr-light\" />\n            </StackLayout>\n\n            <Button :text=\"isLoggingIn ? 'Log In' : 'Sign Up'\" @tap=\"goToLogin\" class=\"btn btn-primary m-t-20\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>\n</template>\n\n<script>\nimport Vue from \"nativescript-vue\";\nimport Home from './Home';\nimport axios from \"axios\";\nconst toasty = require('nativescript-toasty').Toasty;\nexport default {\n    data() {\n        return {\n            isLoggingIn: true,\n            user: \"\",\n            pass: \"\",\n        }\n    },\n    methods: {\n        goToLogin() {\n            // let dataLogin = {\n            //   \"uid\": \"sml\",\n            //   \"pwd\": \"0cc175b9c0f1b6a831c399e269772661\",\n            //   \"lang\": \"vi\"\n            // };\n            // let config = {\n            //     headers: {\n            //             act:\"token\",\n            //             papp:\"SVR\"\n            //             // ,\n            //             // origin:\"http://localhost:44330\"\n            //     }\n            // };\n            // axios.post(\"http://192.168.3.111/sml_svr_api/api/1.0/receivedata\", dataLogin, config)\n            //     .then(response  => {                     \n            //       console.log(response.data);\n            //        console.log('abcc');\n            //        console.log(response);\n            //         if (response.data.success == true) {\n            //             var toast = new toasty({ text: 'Login success!' });\n            //             toast.show();                            \n            //             this.$navigateTo(Home);                 \n            //         } else {                            \n            //              var toast = new toasty({ text: 'Login false!' });\n            //             toast.show();  \n            //         } \n            //     })\n            //     .catch(error  => {\n            //         console.log(error )\n            //     }); \n            // let dataLogin = {\n            //   username: \"username\",\n            //   password: \"password\"\n            // };\n            // let config = {\n            //     headers: { \"Content-Type\": \"application/json\" },\n            // };\n            // axios.post(\"https://httpbin.org/post\", dataLogin, config)\n            //     .then(response  => {                     \n            //       console.log(response.data);\n            //        console.log('abcc');\n            //        console.log(response);\n            //         if (response.data.success == true) {\n            //             var toast = new toasty({ text: 'Login success!' });\n            //             toast.show();                            \n            //             this.$navigateTo(Home);                 \n            //         } else {                            \n            //              var toast = new toasty({ text: 'Login false!' });\n            //             toast.show();  \n            //         } \n            //     })\n            //     .catch(error  => {\n            //         console.log(error )\n            //     });  \n            //    axios({ method: \"GET\", \"url\": \"http://dummy.restapiexample.com/api/v1/employees\" }).then(result => {\n            //    var pokemon =result.data;\n            //     console.log(pokemon);                \n            // }, error => {\n            //     console.error(error);\n            // });\n            // const requestOptions = {\n            //     method: 'Get'\n            //     // ,\n            //     // headers: {\n            //     //                     Authorization: \"Basic c21pbGU6c21pbGVAMTIz\"\n            //     //                 },\n            //     // body: JSON.stringify({\n            //     //                  hcode: \"MT1001\"\n            //     //             })\n            // };\n            // fetch('http://192.168.3.147:8083/api/v1.0/ping', requestOptions)\n            //     .then(async response => {\n            //         const data = await response.json();\n            //         console.log('abc');\n            //         console.log(data);\n            //     })\n            //     .catch(error => {\n            //         console.error('There was an error!', error);\n            //     });\n            this.$navigateTo(Home); \n            // http.request({\n            //     url: \"https://httpbin.org/post\",\n            //     method: \"POST\",\n            //     headers: { \"Content-Type\": \"application/json\", origin: '123231'},\n            //     content: JSON.stringify({\n            //         username: \"username\",\n            //         password: \"password\"\n            //     })\n            // }).then(response => {\n            //   console.log(JSON.stringify( response.headers));\n            //     var result = response.content.toJSON();\n            //     console.log(result);\n            // }, error => {\n            //     console.error(error);\n            // });\n            // http.getJSON(\"http://dummy.restapiexample.com/api/v1/employees\").then(result => {\n            //   console.log(result);\n            // }, error => {\n            //     console.log(error);\n            // });\n        }\n    }\n}\n</script>\n\n<style scoped>\n/* .page {\n\nalign-items: center;\n\nflex-direction: column;\n\t} */\n\n.form {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n\n.logo {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n\n.header {\n    /* horizontal-align: center; */\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n\n.input-field {\n    margin-bottom: 25;\n}\n\n.input {\n    font-size: 18;\n    /* placeholder-color: #A8A8A8; */\n}\n\n.input-field .input {\n    font-size: 54;\n}\n\n.btn-primary {\n    height: 50;\n    margin: 30 5 15 5;\n    background-color: #D51A1A;\n    border-radius: 5;\n    font-size: 20;\n    font-weight: 600;\n    color: white;\n}\n\n.login-label {\n    /* horizontal-align: center; */\n    color: #A8A8A8;\n    font-size: 16;\n}\n\n.sign-up-label {\n    margin-bottom: 20;\n}\n\n.bold {\n    color: #000000;\n}\n</style>\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.page[data-v-63806493]{\n  background-color:#ffffff;\n}\n", "",{"version":3,"sources":["webpack://../components/Chart.vue"],"names":[],"mappings":";AAuDA;EACA,wBAAA;AACA","sourcesContent":["<template>\r\n    <Page>\r\n    <ActionBar title=\"Chart\"/>\r\n    <RadCartesianChart>\r\n      <CategoricalAxis v-tkCartesianHorizontalAxis />\r\n      <LinearAxis v-tkCartesianVerticalAxis />\r\n      <LineSeries v-tkCartesianSeries\r\n                  :items=\"favoriteFruits\"\r\n                  categoryProperty=\"type\"\r\n                  valueProperty=\"count\" />\r\n    </RadCartesianChart>\r\n  </Page>\r\n</template>\r\n\r\n<script>\r\n    import Vue from \"nativescript-vue\";\r\n    import RadChart from \"nativescript-ui-chart/vue\";\r\n    Vue.use(RadChart);\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                favoriteFruits: [{\r\n                        type: \"🍎\",\r\n                        count: 7\r\n                    },\r\n                    {\r\n                        type: \"🍌\",\r\n                        count: 15\r\n                    },\r\n                    {\r\n                        type: \"🍍\",\r\n                        count: 12\r\n                    },\r\n                    {\r\n                        type: \"🍒\",\r\n                        count: 30\r\n                    },\r\n                    {\r\n                        type: \"🍇\",\r\n                        count: 16\r\n                    }\r\n                ]\r\n            };\r\n        },\r\n        methods: {\r\n            onNavigationButtonTap() {\r\n              Frame.topmost().goBack();\r\n              console.log('adasda')\r\n            }\r\n        }\r\n    };\r\n</script>\r\n\r\n<style scoped>\r\n    .page{\r\n      background-color:#ffffff;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Chart.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.btn-primary[data-v-67410f3a] {\n    height: 50;\n    margin: 30 5 15 5;\n    background-color: #D51A1A;\n    border-radius: 5;\n    font-size: 20;\n    font-weight: 600;\n    color: white;\n}\n", "",{"version":3,"sources":["webpack://../components/Home.vue"],"names":[],"mappings":";AA6BA;IACA,UAAA;IACA,iBAAA;IACA,yBAAA;IACA,gBAAA;IACA,aAAA;IACA,gBAAA;IACA,YAAA;AACA","sourcesContent":["<template>\r\n    <Page >\r\n       <ActionBar title=\"Home\"/>\r\n          <FlexboxLayout class=\"page\" flexDirection=\"column\" backgroundColor=\"white\">\r\n            <Button text=\"RoomMap\" class=\"btn-primary\" @tap=\"goToRoomMap\" />\r\n            <Button text=\"Chart\" class=\"btn-primary\" @tap=\"goToChart\" />\r\n          </FlexboxLayout>\r\n    </Page>\r\n</template>\r\n\r\n<script >\r\nimport RoomMap from './RoomMap';\r\nimport Chart from './Chart';\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    methods: {\r\n      goToRoomMap() {\r\n        this.$navigateTo(RoomMap);\r\n      },\r\n      goToChart() {\r\n        this.$navigateTo(Chart);\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  .btn-primary {\r\n    height: 50;\r\n    margin: 30 5 15 5;\r\n    background-color: #D51A1A;\r\n    border-radius: 5;\r\n    font-size: 20;\r\n    font-weight: 600;\r\n    color: white;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.cardStyle {\r\n    background-color: #fff;\r\n    color: rgb(43, 43, 43);\n}\n.cardContent {\r\n    padding: 20;\r\n    font-weight: bold;\r\n    font-size: 30;\n}\n.page {\r\n    \r\n    background-color: #ffffff;\n}\n.pageStack{\r\n    vertical-align: center;\n}\r\n", "",{"version":3,"sources":["webpack://../components/RoomMap.vue"],"names":[],"mappings":";AAgbA;IACA,sBAAA;IACA,sBAAA;AACA;AAEA;IACA,WAAA;IACA,iBAAA;IACA,aAAA;AACA;AAEA;;IAEA,yBAAA;AACA;AACA;IACA,sBAAA;AACA","sourcesContent":["<template>\r\n<Page class=\"page\">\r\n    <ActionBar title=\"RoomMap\">\r\n        <!-- <Label class=\"action-bar-title\" text=\"Home\"></Label> -->\r\n    </ActionBar>\r\n    <ScrollView>\r\n        <StackLayout    class=\"pageStack\">\r\n            <WrapLayout>\r\n                <!-- <CardView ripple=\"true\" padding=\"5\" margin=\"5\" height=\"300\"> -->\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 1\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n                <CardView width=\"25%\">\r\n                    <StackLayout>\r\n                        <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                            <FormattedString>\r\n                                <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                                <Span text=\"message 4\" />\r\n                            </FormattedString>\r\n                        </Label>\r\n                        <Image stretch=\"aspectFit\" height=\"40\" />\r\n                        <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n                    </StackLayout>\r\n                </CardView>\r\n            </WrapLayout>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</Page>\r\n</template>\r\n\r\n<script>\r\nimport axios from \"axios\";\r\nimport RoomMapDetail from './RoomMapDetail';\r\nimport Vue from 'nativescript-vue';\r\nVue.registerElement(\r\n    'CardView',\r\n    () => require('@nstudio/nativescript-cardview').CardView\r\n);\r\nexport default {\r\n    data() {\r\n        return {}\r\n    },\r\n    methods: {\r\n        goToRoomMapDetail() {\r\n            this.$navigateTo(RoomMapDetail);\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style>\r\n.cardStyle {\r\n    background-color: #fff;\r\n    color: rgb(43, 43, 43);\r\n}\r\n\r\n.cardContent {\r\n    padding: 20;\r\n    font-weight: bold;\r\n    font-size: 30;\r\n}\r\n\r\n.page {\r\n    \r\n    background-color: #ffffff;\r\n}\r\n.pageStack{\r\n    vertical-align: center;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/RoomMap.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=style&index=0&id=1d7d2032&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.page[data-v-1d7d2032]{\n  background-color:#ffffff;\n}\n", "",{"version":3,"sources":["webpack://../components/RoomMapDetail.vue"],"names":[],"mappings":";AAkBA;EACA,wBAAA;AACA","sourcesContent":["<template>\r\n    <Page class=\"page\">\r\n       <ActionBar title=\"RoomMapDetail\"/>\r\n        <StackLayout>\r\n            <Button @tap=\"this.$navigateBack\" text=\"Go Back\"></Button>\r\n        </StackLayout>\r\n    </Page>\r\n</template>\r\n\r\n<script >\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n    .page{\r\n      background-color:#ffffff;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/RoomMapDetail.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var toasty = __webpack_require__("../node_modules/nativescript-toasty/toasty.js").Toasty;

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      user: "",
      pass: ""
    };
  },

  methods: {
    goToLogin() {
      // let dataLogin = {
      //   "uid": "sml",
      //   "pwd": "0cc175b9c0f1b6a831c399e269772661",
      //   "lang": "vi"
      // };
      // let config = {
      //     headers: {
      //             act:"token",
      //             papp:"SVR"
      //             // ,
      //             // origin:"http://localhost:44330"
      //     }
      // };
      // axios.post("http://192.168.3.111/sml_svr_api/api/1.0/receivedata", dataLogin, config)
      //     .then(response  => {                     
      //       console.log(response.data);
      //        console.log('abcc');
      //        console.log(response);
      //         if (response.data.success == true) {
      //             var toast = new toasty({ text: 'Login success!' });
      //             toast.show();                            
      //             this.$navigateTo(Home);                 
      //         } else {                            
      //              var toast = new toasty({ text: 'Login false!' });
      //             toast.show();  
      //         } 
      //     })
      //     .catch(error  => {
      //         console.log(error )
      //     }); 
      // let dataLogin = {
      //   username: "username",
      //   password: "password"
      // };
      // let config = {
      //     headers: { "Content-Type": "application/json" },
      // };
      // axios.post("https://httpbin.org/post", dataLogin, config)
      //     .then(response  => {                     
      //       console.log(response.data);
      //        console.log('abcc');
      //        console.log(response);
      //         if (response.data.success == true) {
      //             var toast = new toasty({ text: 'Login success!' });
      //             toast.show();                            
      //             this.$navigateTo(Home);                 
      //         } else {                            
      //              var toast = new toasty({ text: 'Login false!' });
      //             toast.show();  
      //         } 
      //     })
      //     .catch(error  => {
      //         console.log(error )
      //     });  
      //    axios({ method: "GET", "url": "http://dummy.restapiexample.com/api/v1/employees" }).then(result => {
      //    var pokemon =result.data;
      //     console.log(pokemon);                
      // }, error => {
      //     console.error(error);
      // });
      // const requestOptions = {
      //     method: 'Get'
      //     // ,
      //     // headers: {
      //     //                     Authorization: "Basic c21pbGU6c21pbGVAMTIz"
      //     //                 },
      //     // body: JSON.stringify({
      //     //                  hcode: "MT1001"
      //     //             })
      // };
      // fetch('http://192.168.3.147:8083/api/v1.0/ping', requestOptions)
      //     .then(async response => {
      //         const data = await response.json();
      //         console.log('abc');
      //         console.log(data);
      //     })
      //     .catch(error => {
      //         console.error('There was an error!', error);
      //     });
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]); // http.request({
      //     url: "https://httpbin.org/post",
      //     method: "POST",
      //     headers: { "Content-Type": "application/json", origin: '123231'},
      //     content: JSON.stringify({
      //         username: "username",
      //         password: "password"
      //     })
      // }).then(response => {
      //   console.log(JSON.stringify( response.headers));
      //     var result = response.content.toJSON();
      //     console.log(result);
      // }, error => {
      //     console.error(error);
      // });
      // http.getJSON("http://dummy.restapiexample.com/api/v1/employees").then(result => {
      //   console.log(result);
      // }, error => {
      //     console.log(error);
      // });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-chart/vue/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      favoriteFruits: [{
        type: "🍎",
        count: 7
      }, {
        type: "🍌",
        count: 15
      }, {
        type: "🍍",
        count: 12
      }, {
        type: "🍒",
        count: 30
      }, {
        type: "🍇",
        count: 16
      }]
    };
  },

  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
      console.log('adasda');
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/RoomMap.vue");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Chart.vue");
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  methods: {
    goToRoomMap() {
      this.$navigateTo(_RoomMap__WEBPACK_IMPORTED_MODULE_0__["default"]);
    },

    goToChart() {
      this.$navigateTo(_Chart__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RoomMapDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/RoomMapDetail.vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default.a.registerElement('CardView', () => __webpack_require__("../node_modules/@nstudio/nativescript-cardview/cardview.js").CardView);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  methods: {
    goToRoomMapDetail() {
      this.$navigateTo(_RoomMapDetail__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c("ActionBar", { attrs: { title: "Login" } }),
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Label", { staticClass: "header", attrs: { text: "SMILE" } }),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "UserName",
                      keyboardType: "text",
                      autocorrect: "false",
                      autocapitalizationType: "none",
                      returnKeyType: "next",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.user,
                      callback: function($event) {
                        _vm.user = $event.object["text"]
                      },
                      expression: "user"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    ref: "password",
                    staticClass: "input",
                    attrs: {
                      hint: "Password",
                      secure: "true",
                      returnKeyType: _vm.isLoggingIn ? "done" : "next",
                      fontSize: "18"
                    },
                    model: {
                      value: _vm.pass,
                      callback: function($event) {
                        _vm.pass = $event.object["text"]
                      },
                      expression: "pass"
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: { text: _vm.isLoggingIn ? "Log In" : "Sign Up" },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=template&id=63806493&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Chart" } }),
      _c(
        "RadCartesianChart",
        [
          _c("CategoricalAxis", {
            directives: [
              {
                name: "tkCartesianHorizontalAxis",
                rawName: "v-tkCartesianHorizontalAxis"
              }
            ]
          }),
          _c("LinearAxis", {
            directives: [
              {
                name: "tkCartesianVerticalAxis",
                rawName: "v-tkCartesianVerticalAxis"
              }
            ]
          }),
          _c("LineSeries", {
            directives: [
              { name: "tkCartesianSeries", rawName: "v-tkCartesianSeries" }
            ],
            attrs: {
              items: _vm.favoriteFruits,
              categoryProperty: "type",
              valueProperty: "count"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Home" } }),
      _c(
        "FlexboxLayout",
        {
          staticClass: "page",
          attrs: { flexDirection: "column", backgroundColor: "white" }
        },
        [
          _c("Button", {
            staticClass: "btn-primary",
            attrs: { text: "RoomMap" },
            on: { tap: _vm.goToRoomMap }
          }),
          _c("Button", {
            staticClass: "btn-primary",
            attrs: { text: "Chart" },
            on: { tap: _vm.goToChart }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=template&id=4839ea76&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("ActionBar", { attrs: { title: "RoomMap" } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "pageStack" },
            [
              _c(
                "WrapLayout",
                [
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 1" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "CardView",
                    { attrs: { width: "25%" } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "Label",
                            {
                              staticClass: "info",
                              attrs: {
                                horizontalAlignment: "center",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    staticClass: "fa",
                                    attrs: { "text.decode": "&#xf135; " }
                                  }),
                                  _c("Span", { attrs: { text: "message 4" } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Image", {
                            attrs: { stretch: "aspectFit", height: "40" }
                          }),
                          _c("Button", {
                            attrs: { text: "Button" },
                            on: { tap: _vm.goToRoomMapDetail }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("ActionBar", { attrs: { title: "RoomMapDetail" } }),
      _c(
        "StackLayout",
        [
          _c("Button", {
            attrs: { text: "Go Back" },
            on: { tap: this.$navigateBack }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45ba5ed4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Chart.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Chart.vue?vue&type=template&id=63806493&scoped=true&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63806493",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('63806493')) {
      api.createRecord('63806493', component.options)
    } else {
      api.reload('63806493', component.options)
    }
    module.hot.accept("./components/Chart.vue?vue&type=template&id=63806493&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Chart.vue?vue&type=template&id=63806493&scoped=true&");
(function () {
      api.rerender('63806493', {
        render: _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Chart.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/Chart.vue?vue&type=template&id=63806493&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=template&id=63806493&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/RoomMap.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/RoomMap.vue?vue&type=template&id=4839ea76&");
/* harmony import */ var _RoomMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/RoomMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RoomMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/RoomMap.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoomMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4839ea76')) {
      api.createRecord('4839ea76', component.options)
    } else {
      api.reload('4839ea76', component.options)
    }
    module.hot.accept("./components/RoomMap.vue?vue&type=template&id=4839ea76&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/RoomMap.vue?vue&type=template&id=4839ea76&");
(function () {
      api.rerender('4839ea76', {
        render: _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/RoomMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/RoomMap.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/RoomMap.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/RoomMap.vue?vue&type=template&id=4839ea76&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/RoomMap.vue?vue&type=template&id=4839ea76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMap_vue_vue_type_template_id_4839ea76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/RoomMapDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&");
/* harmony import */ var _RoomMapDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/RoomMapDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RoomMapDetail_vue_vue_type_style_index_0_id_1d7d2032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/RoomMapDetail.vue?vue&type=style&index=0&id=1d7d2032&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoomMapDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d7d2032",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1d7d2032')) {
      api.createRecord('1d7d2032', component.options)
    } else {
      api.reload('1d7d2032', component.options)
    }
    module.hot.accept("./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&");
(function () {
      api.rerender('1d7d2032', {
        render: _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/RoomMapDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/RoomMapDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/RoomMapDetail.vue?vue&type=style&index=0&id=1d7d2032&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_style_index_0_id_1d7d2032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=style&index=0&id=1d7d2032&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/RoomMapDetail.vue?vue&type=template&id=1d7d2032&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomMapDetail_vue_vue_type_template_id_1d7d2032_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-vue-devtools/index.js");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./store.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        



if (true) {
  nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3___default.a);
}

 // Prints Vue logs when --env.production is *NOT* set while building

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.silent = "development" === 'production';
new nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: h => h('frame', [h(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {},
  mutations: {},
  actions: {}
}));

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/NDg2YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZT80Y2VlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/ZTEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXAudnVlPzg5NmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZT9mNWY0Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2hhcnQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Jvb21NYXAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83Y2YxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQudnVlPzYxMjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWU/MDFiMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlPzMzODYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/M2I0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTgyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZT8yZGZhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQudnVlPzc1OGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFydC52dWU/ZmQ0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzRhNjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwLnZ1ZT83MzI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWU/OGQzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXAudnVlPzJkZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlPzk5MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZT9jMmZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcERldGFpbC52dWU/M2UzZiIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJtdXRhdGlvbnMiLCJhY3Rpb25zIl0s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Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFHLDBDQUFHLENBQUNDLEdBQUosQ0FBUU0sNENBQVI7QUFFZSxtRUFBSUEsNENBQUksQ0FBQ0MsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUUsRUFEcUI7QUFJNUJDLFdBQVMsRUFBRSxFQUppQjtBQU81QkMsU0FBTyxFQUFFO0FBUG1CLENBQWYsQ0FBZixFOzs7Ozs7O0FDTEEsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogLnBhZ2Uge1xcblxcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9ICovXFxuLmZvcm1bZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubG9nb1tkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICAgIGhlaWdodDogOTA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICAvKiBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7ICovXFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRDUxQTFBO1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIC8qIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4OyAqL1xcbn1cXG4uaW5wdXQtZmllbGQgLmlucHV0W2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICBmb250LXNpemU6IDU0O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIGhlaWdodDogNTA7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxQTFBO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5sb2dpbi1sYWJlbFtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgLyogaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBjb2xvcjogI0E4QThBODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWxbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9jb21wb25lbnRzL0FwcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlKQTs7Ozs7SUFLQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0FBQ0E7QUFFQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtJQUNBLDhCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7QUFDQTtBQUVBO0lBQ0EsaUJBQUE7QUFDQTtBQUVBO0lBQ0EsYUFBQTtJQUNBLGdDQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7QUFDQTtBQUVBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7QUFDQTtBQUVBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7SUFDQSxpQkFBQTtBQUNBO0FBRUE7SUFDQSxjQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbjxQYWdlIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvZ2luXFxcIiAvPlxcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIiAvPiAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiU01JTEVcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgbWFyZ2luQm90dG9tPVxcXCIyNVxcXCI+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJVc2VyTmFtZVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJ0ZXh0XFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIHYtbW9kZWw9XFxcInVzZXJcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIGZvbnRTaXplPVxcXCIxOFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIG1hcmdpbkJvdHRvbT1cXFwiMjVcXFwiPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJlZj1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgdi1tb2RlbD1cXFwicGFzc1xcXCIgOnJldHVybktleVR5cGU9XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIiBmb250U2l6ZT1cXFwiMThcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVxcXCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXFxcIiBAdGFwPVxcXCJnb1RvTG9naW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvUGFnZT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IFZ1ZSBmcm9tIFxcXCJuYXRpdmVzY3JpcHQtdnVlXFxcIjtcXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xcbmltcG9ydCBheGlvcyBmcm9tIFxcXCJheGlvc1xcXCI7XFxuY29uc3QgdG9hc3R5ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXRvYXN0eScpLlRvYXN0eTtcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxcbiAgICAgICAgICAgIHVzZXI6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIHBhc3M6IFxcXCJcXFwiLFxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBnb1RvTG9naW4oKSB7XFxuICAgICAgICAgICAgLy8gbGV0IGRhdGFMb2dpbiA9IHtcXG4gICAgICAgICAgICAvLyAgIFxcXCJ1aWRcXFwiOiBcXFwic21sXFxcIixcXG4gICAgICAgICAgICAvLyAgIFxcXCJwd2RcXFwiOiBcXFwiMGNjMTc1YjljMGYxYjZhODMxYzM5OWUyNjk3NzI2NjFcXFwiLFxcbiAgICAgICAgICAgIC8vICAgXFxcImxhbmdcXFwiOiBcXFwidmlcXFwiXFxuICAgICAgICAgICAgLy8gfTtcXG4gICAgICAgICAgICAvLyBsZXQgY29uZmlnID0ge1xcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYWN0OlxcXCJ0b2tlblxcXCIsXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcGFwcDpcXFwiU1ZSXFxcIlxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICxcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBvcmlnaW46XFxcImh0dHA6Ly9sb2NhbGhvc3Q6NDQzMzBcXFwiXFxuICAgICAgICAgICAgLy8gICAgIH1cXG4gICAgICAgICAgICAvLyB9O1xcbiAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoXFxcImh0dHA6Ly8xOTIuMTY4LjMuMTExL3NtbF9zdnJfYXBpL2FwaS8xLjAvcmVjZWl2ZWRhdGFcXFwiLCBkYXRhTG9naW4sIGNvbmZpZylcXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgID0+IHsgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcXG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ2FiY2MnKTtcXG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBzdWNjZXNzIScgfSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpOyAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBmYWxzZSEnIH0pO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRvYXN0LnNob3coKTsgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBcXG4gICAgICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yICA9PiB7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciApXFxuICAgICAgICAgICAgLy8gICAgIH0pOyBcXG4gICAgICAgICAgICAvLyBsZXQgZGF0YUxvZ2luID0ge1xcbiAgICAgICAgICAgIC8vICAgdXNlcm5hbWU6IFxcXCJ1c2VybmFtZVxcXCIsXFxuICAgICAgICAgICAgLy8gICBwYXNzd29yZDogXFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgIC8vIH07XFxuICAgICAgICAgICAgLy8gbGV0IGNvbmZpZyA9IHtcXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczogeyBcXFwiQ29udGVudC1UeXBlXFxcIjogXFxcImFwcGxpY2F0aW9uL2pzb25cXFwiIH0sXFxuICAgICAgICAgICAgLy8gfTtcXG4gICAgICAgICAgICAvLyBheGlvcy5wb3N0KFxcXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcXFwiLCBkYXRhTG9naW4sIGNvbmZpZylcXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgID0+IHsgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcXG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ2FiY2MnKTtcXG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBzdWNjZXNzIScgfSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpOyAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBmYWxzZSEnIH0pO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRvYXN0LnNob3coKTsgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBcXG4gICAgICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yICA9PiB7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciApXFxuICAgICAgICAgICAgLy8gICAgIH0pOyAgXFxuICAgICAgICAgICAgLy8gICAgYXhpb3MoeyBtZXRob2Q6IFxcXCJHRVRcXFwiLCBcXFwidXJsXFxcIjogXFxcImh0dHA6Ly9kdW1teS5yZXN0YXBpZXhhbXBsZS5jb20vYXBpL3YxL2VtcGxveWVlc1xcXCIgfSkudGhlbihyZXN1bHQgPT4ge1xcbiAgICAgICAgICAgIC8vICAgIHZhciBwb2tlbW9uID1yZXN1bHQuZGF0YTtcXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9rZW1vbik7ICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIH0sIGVycm9yID0+IHtcXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgLy8gfSk7XFxuICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ0dldCdcXG4gICAgICAgICAgICAvLyAgICAgLy8gLFxcbiAgICAgICAgICAgIC8vICAgICAvLyBoZWFkZXJzOiB7XFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXFxcIkJhc2ljIGMyMXBiR1U2YzIxcGJHVkFNVEl6XFxcIlxcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgIGhjb2RlOiBcXFwiTVQxMDAxXFxcIlxcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC8vIH07XFxuICAgICAgICAgICAgLy8gZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjMuMTQ3OjgwODMvYXBpL3YxLjAvcGluZycsIHJlcXVlc3RPcHRpb25zKVxcbiAgICAgICAgICAgIC8vICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2FiYycpO1xcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XFxuICAgICAgICAgICAgLy8gICAgIH0pXFxuICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xcbiAgICAgICAgICAgIC8vICAgICB9KTtcXG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpOyBcXG4gICAgICAgICAgICAvLyBodHRwLnJlcXVlc3Qoe1xcbiAgICAgICAgICAgIC8vICAgICB1cmw6IFxcXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcXFwiLFxcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6IFxcXCJQT1NUXFxcIixcXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczogeyBcXFwiQ29udGVudC1UeXBlXFxcIjogXFxcImFwcGxpY2F0aW9uL2pzb25cXFwiLCBvcmlnaW46ICcxMjMyMzEnfSxcXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xcbiAgICAgICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IFxcXCJ1c2VybmFtZVxcXCIsXFxuICAgICAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDogXFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoIHJlc3BvbnNlLmhlYWRlcnMpKTtcXG4gICAgICAgICAgICAvLyAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XFxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XFxuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICAvLyB9KTtcXG4gICAgICAgICAgICAvLyBodHRwLmdldEpTT04oXFxcImh0dHA6Ly9kdW1teS5yZXN0YXBpZXhhbXBsZS5jb20vYXBpL3YxL2VtcGxveWVlc1xcXCIpLnRoZW4ocmVzdWx0ID0+IHtcXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XFxuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgLy8gfSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiAucGFnZSB7XFxuXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH0gKi9cXG5cXG4uZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIC8qIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICAvKiBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODsgKi9cXG59XFxuXFxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogNTQ7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICAgIGhlaWdodDogNTA7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxQTFBO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dpbi1sYWJlbCB7XFxuICAgIC8qIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgY29sb3I6ICNBOEE4QTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcblxcbi5zaWduLXVwLWxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcblxcbi5ib2xkIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LTYzODA2NDkzXXtcXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvQ2hhcnQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1REE7RUFDQSx3QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPFBhZ2U+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkNoYXJ0XFxcIi8+XFxyXFxuICAgIDxSYWRDYXJ0ZXNpYW5DaGFydD5cXHJcXG4gICAgICA8Q2F0ZWdvcmljYWxBeGlzIHYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcyAvPlxcclxcbiAgICAgIDxMaW5lYXJBeGlzIHYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXMgLz5cXHJcXG4gICAgICA8TGluZVNlcmllcyB2LXRrQ2FydGVzaWFuU2VyaWVzXFxyXFxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJmYXZvcml0ZUZydWl0c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeVByb3BlcnR5PVxcXCJ0eXBlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk9XFxcImNvdW50XFxcIiAvPlxcclxcbiAgICA8L1JhZENhcnRlc2lhbkNoYXJ0PlxcclxcbiAgPC9QYWdlPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFxcXCJuYXRpdmVzY3JpcHQtdnVlXFxcIjtcXHJcXG4gICAgaW1wb3J0IFJhZENoYXJ0IGZyb20gXFxcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcXFwiO1xcclxcbiAgICBWdWUudXNlKFJhZENoYXJ0KTtcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgZGF0YSgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZUZydWl0czogW3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwi8J+NjlxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDdcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcIvCfjYxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxNVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwi8J+NjVxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEyXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCLwn42SXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMzBcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcIvCfjYdcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxNlxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBdXFxyXFxuICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xcclxcbiAgICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xcclxcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkYXNkYScpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5wYWdle1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQ2hhcnQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLXByaW1hcnlbZGF0YS12LTY3NDEwZjNhXSB7XFxuICAgIGhlaWdodDogNTA7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxQTFBO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9jb21wb25lbnRzL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPFBhZ2UgPlxcclxcbiAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIi8+XFxyXFxuICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGJhY2tncm91bmRDb2xvcj1cXFwid2hpdGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiUm9vbU1hcFxcXCIgY2xhc3M9XFxcImJ0bi1wcmltYXJ5XFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNoYXJ0XFxcIiBjbGFzcz1cXFwiYnRuLXByaW1hcnlcXFwiIEB0YXA9XFxcImdvVG9DaGFydFxcXCIgLz5cXHJcXG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0ID5cXHJcXG5pbXBvcnQgUm9vbU1hcCBmcm9tICcuL1Jvb21NYXAnO1xcclxcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIGdvVG9Sb29tTWFwKCkge1xcclxcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhSb29tTWFwKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdvVG9DaGFydCgpIHtcXHJcXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ2hhcnQpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuYnRuLXByaW1hcnkge1xcclxcbiAgICBoZWlnaHQ6IDUwO1xcclxcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1MUExQTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hvbWUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZFN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuLmNhcmRDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDMwO1xcbn1cXG4ucGFnZSB7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ucGFnZVN0YWNre1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vY29tcG9uZW50cy9Sb29tTWFwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ2JBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtBQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTs7SUFFQSx5QkFBQTtBQUNBO0FBQ0E7SUFDQSxzQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG48UGFnZSBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlJvb21NYXBcXFwiPlxcclxcbiAgICAgICAgPCEtLSA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG4gICAgPFNjcm9sbFZpZXc+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgICAgY2xhc3M9XFxcInBhZ2VTdGFja1xcXCI+XFxyXFxuICAgICAgICAgICAgPFdyYXBMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gPENhcmRWaWV3IHJpcHBsZT1cXFwidHJ1ZVxcXCIgcGFkZGluZz1cXFwiNVxcXCIgbWFyZ2luPVxcXCI1XFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+IC0tPlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSAxXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgIDwvV3JhcExheW91dD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvU2Nyb2xsVmlldz5cXHJcXG48L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBheGlvcyBmcm9tIFxcXCJheGlvc1xcXCI7XFxyXFxuaW1wb3J0IFJvb21NYXBEZXRhaWwgZnJvbSAnLi9Sb29tTWFwRGV0YWlsJztcXHJcXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xcclxcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXFxyXFxuICAgICdDYXJkVmlldycsXFxyXFxuICAgICgpID0+IHJlcXVpcmUoJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldycpLkNhcmRWaWV3XFxyXFxuKTtcXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge31cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgZ29Ub1Jvb21NYXBEZXRhaWwoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhSb29tTWFwRGV0YWlsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuLmNhcmRTdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Uge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLnBhZ2VTdGFja3tcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Sb29tTWFwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LTFkN2QyMDMyXXtcXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvUm9vbU1hcERldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtCQTtFQUNBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8UGFnZSBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlJvb21NYXBEZXRhaWxcXFwiLz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIEB0YXA9XFxcInRoaXMuJG5hdmlnYXRlQmFja1xcXCIgdGV4dD1cXFwiR28gQmFja1xcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0ID5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5wYWdle1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUm9vbU1hcERldGFpbC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIjx0ZW1wbGF0ZT5cbjxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTG9naW5cIiAvPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICA8IS0tIDxJbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIC8+IC0tPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIlNNSUxFXCIgLz5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJVc2VyTmFtZVwiIGtleWJvYXJkVHlwZT1cInRleHRcIiBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlclwiIHJldHVybktleVR5cGU9XCJuZXh0XCIgZm9udFNpemU9XCIxOFwiIC8+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJwYXNzXCIgOnJldHVybktleVR5cGU9XCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1wiIGZvbnRTaXplPVwiMThcIiAvPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCIgQHRhcD1cImdvVG9Mb2dpblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCB0b2FzdHkgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9hc3R5JykuVG9hc3R5O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IFwiXCIsXG4gICAgICAgICAgICBwYXNzOiBcIlwiLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdvVG9Mb2dpbigpIHtcbiAgICAgICAgICAgIC8vIGxldCBkYXRhTG9naW4gPSB7XG4gICAgICAgICAgICAvLyAgIFwidWlkXCI6IFwic21sXCIsXG4gICAgICAgICAgICAvLyAgIFwicHdkXCI6IFwiMGNjMTc1YjljMGYxYjZhODMxYzM5OWUyNjk3NzI2NjFcIixcbiAgICAgICAgICAgIC8vICAgXCJsYW5nXCI6IFwidmlcIlxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYWN0OlwidG9rZW5cIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHBhcHA6XCJTVlJcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gb3JpZ2luOlwiaHR0cDovL2xvY2FsaG9zdDo0NDMzMFwiXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4zLjExMS9zbWxfc3ZyX2FwaS9hcGkvMS4wL3JlY2VpdmVkYXRhXCIsIGRhdGFMb2dpbiwgY29uZmlnKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlICA9PiB7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYWJjYycpO1xuICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIHN1Y2Nlc3MhJyB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRvYXN0LnNob3coKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUpOyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiAnTG9naW4gZmFsc2UhJyB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRvYXN0LnNob3coKTsgIFxuICAgICAgICAgICAgLy8gICAgICAgICB9IFxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yICA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yIClcbiAgICAgICAgICAgIC8vICAgICB9KTsgXG4gICAgICAgICAgICAvLyBsZXQgZGF0YUxvZ2luID0ge1xuICAgICAgICAgICAgLy8gICB1c2VybmFtZTogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgLy8gICBwYXNzd29yZDogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgLy8gbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgLy8gYXhpb3MucG9zdChcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCBkYXRhTG9naW4sIGNvbmZpZylcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSAgPT4geyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ2FiY2MnKTtcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBzdWNjZXNzIScgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIGZhbHNlIScgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICBcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciAgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciApXG4gICAgICAgICAgICAvLyAgICAgfSk7ICBcbiAgICAgICAgICAgIC8vICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kdW1teS5yZXN0YXBpZXhhbXBsZS5jb20vYXBpL3YxL2VtcGxveWVlc1wiIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIC8vICAgIHZhciBwb2tlbW9uID1yZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ0dldCdcbiAgICAgICAgICAgIC8vICAgICAvLyAsXG4gICAgICAgICAgICAvLyAgICAgLy8gaGVhZGVyczoge1xuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCYXNpYyBjMjFwYkdVNmMyMXBiR1ZBTVRJelwiXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAgaGNvZGU6IFwiTVQxMDAxXCJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIGZldGNoKCdodHRwOi8vMTkyLjE2OC4zLjE0Nzo4MDgzL2FwaS92MS4wL3BpbmcnLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC8vICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdhYmMnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTsgXG4gICAgICAgICAgICAvLyBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgLy8gICAgIHVybDogXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIixcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIG9yaWdpbjogJzEyMzIzMSd9LFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoIHJlc3BvbnNlLmhlYWRlcnMpKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyBodHRwLmdldEpTT04oXCJodHRwOi8vZHVtbXkucmVzdGFwaWV4YW1wbGUuY29tL2FwaS92MS9lbXBsb3llZXNcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiAucGFnZSB7XG5cbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH0gKi9cblxuLmZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgaGVpZ2h0OiA5MDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciB7XG4gICAgLyogaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyAqL1xuICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNENTFBMUE7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XG59XG5cbi5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxODtcbiAgICAvKiBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODsgKi9cbn1cblxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiA1NDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBoZWlnaHQ6IDUwO1xuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENTFBMUE7XG4gICAgYm9yZGVyLXJhZGl1czogNTtcbiAgICBmb250LXNpemU6IDIwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbGFiZWwge1xuICAgIC8qIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBjb2xvcjogI0E4QThBODtcbiAgICBmb250LXNpemU6IDE2O1xufVxuXG4uc2lnbi11cC1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XG59XG5cbi5ib2xkIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG5cbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkNoYXJ0XCIvPlxyXG4gICAgPFJhZENhcnRlc2lhbkNoYXJ0PlxyXG4gICAgICA8Q2F0ZWdvcmljYWxBeGlzIHYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcyAvPlxyXG4gICAgICA8TGluZWFyQXhpcyB2LXRrQ2FydGVzaWFuVmVydGljYWxBeGlzIC8+XHJcbiAgICAgIDxMaW5lU2VyaWVzIHYtdGtDYXJ0ZXNpYW5TZXJpZXNcclxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiZmF2b3JpdGVGcnVpdHNcIlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeVByb3BlcnR5PVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk9XCJjb3VudFwiIC8+XHJcbiAgICA8L1JhZENhcnRlc2lhbkNoYXJ0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbiAgICBpbXBvcnQgUmFkQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcclxuICAgIFZ1ZS51c2UoUmFkQ2hhcnQpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVGcnVpdHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwi8J+NjlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogN1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIvCfjYxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDE1XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwi8J+NjVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMTJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCLwn42SXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAzMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIvCfjYdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDE2XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XHJcbiAgICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGFzZGEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBhZ2V7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSA+XHJcbiAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSG9tZVwiLz5cclxuICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJSb29tTWFwXCIgY2xhc3M9XCJidG4tcHJpbWFyeVwiIEB0YXA9XCJnb1RvUm9vbU1hcFwiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNoYXJ0XCIgY2xhc3M9XCJidG4tcHJpbWFyeVwiIEB0YXA9XCJnb1RvQ2hhcnRcIiAvPlxyXG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCA+XHJcbmltcG9ydCBSb29tTWFwIGZyb20gJy4vUm9vbU1hcCc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnb1RvUm9vbU1hcCgpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFJvb21NYXApO1xyXG4gICAgICB9LFxyXG4gICAgICBnb1RvQ2hhcnQoKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhDaGFydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBoZWlnaHQ6IDUwO1xyXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxQTFBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTtcclxuICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUm9vbU1hcFwiPlxyXG4gICAgICAgIDwhLS0gPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJIb21lXCI+PC9MYWJlbD4gLS0+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgIDxTdGFja0xheW91dCAgICBjbGFzcz1cInBhZ2VTdGFja1wiPlxyXG4gICAgICAgICAgICA8V3JhcExheW91dD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPENhcmRWaWV3IHJpcHBsZT1cInRydWVcIiBwYWRkaW5nPVwiNVwiIG1hcmdpbj1cIjVcIiBoZWlnaHQ9XCIzMDBcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSAxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgIDwvV3JhcExheW91dD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9TY3JvbGxWaWV3PlxyXG48L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSb29tTWFwRGV0YWlsIGZyb20gJy4vUm9vbU1hcERldGFpbCc7XHJcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XHJcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXHJcbiAgICAnQ2FyZFZpZXcnLFxyXG4gICAgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXdcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ29Ub1Jvb21NYXBEZXRhaWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUm9vbU1hcERldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZFN0eWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG59XHJcblxyXG4uY2FyZENvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucGFnZVN0YWNre1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJSb29tTWFwRGV0YWlsXCIvPlxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwidGhpcy4kbmF2aWdhdGVCYWNrXCIgdGV4dD1cIkdvIEJhY2tcIj48L0J1dHRvbj5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCA+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGFnZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkxvZ2luXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiLCBhdHRyczogeyB0ZXh0OiBcIlNNSUxFXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlVzZXJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0uaXNMb2dnaW5nSW4gPyBcImRvbmVcIiA6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3MgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIlNpZ24gVXBcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Mb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkNoYXJ0XCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZENhcnRlc2lhbkNoYXJ0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkNhdGVnb3JpY2FsQXhpc1wiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXNcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxpbmVhckF4aXNcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0a0NhcnRlc2lhblZlcnRpY2FsQXhpc1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a0NhcnRlc2lhblZlcnRpY2FsQXhpc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxpbmVTZXJpZXNcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7IG5hbWU6IFwidGtDYXJ0ZXNpYW5TZXJpZXNcIiwgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuU2VyaWVzXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZmF2b3JpdGVGcnVpdHMsXG4gICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk6IFwidHlwZVwiLFxuICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5OiBcImNvdW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUm9vbU1hcFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvUm9vbU1hcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2hhcnRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0NoYXJ0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJSb29tTWFwXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlU3RhY2tcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIldyYXBMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSAxXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlJvb21NYXBEZXRhaWxcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiR28gQmFja1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IHRoaXMuJG5hdmlnYXRlQmFjayB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9tYWluLmpzXCIsXG5cdFwiLi9zdG9yZS5qc1wiOiBcIi4vc3RvcmUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbXSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NWJhNWVkNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHNtaWxlX2dpdFxcXFxhcHAtbW9iaWxlLXNtbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NWJhNWVkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4MDY0OTMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjM4MDY0OTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYzODA2NDkzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcc21pbGVfZ2l0XFxcXGFwcC1tb2JpbGUtc21sXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYzODA2NDkzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYzODA2NDkzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYzODA2NDkzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4MDY0OTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjM4MDY0OTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MzgwNjQ5MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4MDY0OTMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHNtaWxlX2dpdFxcXFxhcHAtbW9iaWxlLXNtbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODM5ZWE3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUm9vbU1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUm9vbU1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcc21pbGVfZ2l0XFxcXGFwcC1tb2JpbGUtc21sXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ4MzllYTc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ4MzllYTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ4MzllYTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODM5ZWE3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ODM5ZWE3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Sb29tTWFwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jvb21NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jvb21NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9vbU1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgzOWVhNzYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jvb21NYXBEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkN2QyMDMyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jvb21NYXBEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFkN2QyMDMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxZDdkMjAzMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHNtaWxlX2dpdFxcXFxhcHAtbW9iaWxlLXNtbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxZDdkMjAzMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZDdkMjAzMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZDdkMjAzMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ3ZDIwMzImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWQ3ZDIwMzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUm9vbU1hcERldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFkN2QyMDMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jvb21NYXBEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkN2QyMDMyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5cbmlmKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBWdWUudXNlKFZ1ZURldnRvb2xzKVxufVxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuVnVlLnVzZShWdWV4KTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZToge1xuXG4gIH0sXG4gIG11dGF0aW9uczoge1xuXG4gIH0sXG4gIGFjdGlvbnM6IHtcblxuICB9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=