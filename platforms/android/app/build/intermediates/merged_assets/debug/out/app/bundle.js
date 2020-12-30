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
___CSS_LOADER_EXPORT___.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /* .page {\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t} */\n", "",{"version":3,"sources":["webpack://../components/Home.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BA;;;IAGA","sourcesContent":["<template>\r\n    <Page >\r\n       <ActionBar title=\"Home\"/>\r\n          <FlexboxLayout class=\"page\" flexDirection=\"column\" backgroundColor=\"#3c495e\">\r\n            <Button text=\"RoomMap\" class=\"my-button\" @tap=\"goToRoomMap\" />\r\n            <Button text=\"Chart\" class=\"my-button\" @tap=\"goToChart\" />\r\n          </FlexboxLayout>\r\n    </Page>\r\n</template>\r\n\r\n<script >\r\nimport RoomMap from './RoomMap';\r\nimport Chart from './Chart';\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    methods: {\r\n      goToRoomMap() {\r\n        this.$navigateTo(RoomMap);\r\n      },\r\n      goToChart() {\r\n        this.$navigateTo(Chart);\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n    /* .page {\r\n\t\talign-items: center;\r\n\t\tflex-direction: column;\r\n\t} */\r\n</style>\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "\n.cardStyle {\r\n    background-color: #fff;\r\n    color: rgb(43, 43, 43);\n}\n.cardContent {\r\n    padding: 20;\r\n    font-weight: bold;\r\n    font-size: 30;\n}\n.page {\r\n    background-color: #ffffff;\n}\r\n", "",{"version":3,"sources":["webpack://../components/RoomMap.vue"],"names":[],"mappings":";AAwDA;IACA,sBAAA;IACA,sBAAA;AACA;AAEA;IACA,WAAA;IACA,iBAAA;IACA,aAAA;AACA;AAEA;IACA,yBAAA;AACA","sourcesContent":["<template>\r\n<Page class=\"page\">\r\n    <ActionBar title=\"RoomMap\">\r\n        <!-- <Label class=\"action-bar-title\" text=\"Home\"></Label> -->\r\n    </ActionBar>\r\n    <AbsoluteLayout>\r\n        <!-- <CardView ripple=\"true\" padding=\"5\" margin=\"5\" height=\"300\"> -->\r\n        <CardView left=\"10\" top=\"10\" width=\"100\" height=\"100\">\r\n            <StackLayout>\r\n                <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                    <FormattedString>\r\n                        <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                        <Span text=\"message 1\" />\r\n                    </FormattedString>\r\n                </Label>\r\n                <Image stretch=\"aspectFit\" height=\"40\" />\r\n                <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n            </StackLayout>\r\n        </CardView>\r\n        <CardView left=\"120\" top=\"10\" width=\"100\" height=\"100\">\r\n            <StackLayout>\r\n                <Label class=\"info\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n                    <FormattedString>\r\n                        <Span class=\"fa\" text.decode=\"&#xf135; \" />\r\n                        <Span text=\"message 4\" />\r\n                    </FormattedString>\r\n                </Label>\r\n                <Image stretch=\"aspectFit\" height=\"40\" />\r\n                <Button text=\"Button\" @tap=\"goToRoomMapDetail\" />\r\n            </StackLayout>\r\n        </CardView>\r\n    </AbsoluteLayout>\r\n</Page>\r\n</template>\r\n\r\n<script>\r\nimport axios from \"axios\";\r\nimport RoomMapDetail from './RoomMapDetail';\r\nimport Vue from 'nativescript-vue';\r\nVue.registerElement(\r\n    'CardView',\r\n    () => require('@nstudio/nativescript-cardview').CardView\r\n);\r\nexport default {\r\n    data() {\r\n        return {}\r\n    },\r\n    methods: {\r\n        goToRoomMapDetail() {\r\n            this.$navigateTo(RoomMapDetail);\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style>\r\n.cardStyle {\r\n    background-color: #fff;\r\n    color: rgb(43, 43, 43);\r\n}\r\n\r\n.cardContent {\r\n    padding: 20;\r\n    font-weight: bold;\r\n    font-size: 30;\r\n}\r\n\r\n.page {\r\n    background-color: #ffffff;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
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
          attrs: { flexDirection: "column", backgroundColor: "#3c495e" }
        },
        [
          _c("Button", {
            staticClass: "my-button",
            attrs: { text: "RoomMap" },
            on: { tap: _vm.goToRoomMap }
          }),
          _c("Button", {
            staticClass: "my-button",
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
        "AbsoluteLayout",
        [
          _c(
            "CardView",
            { attrs: { left: "10", top: "10", width: "100", height: "100" } },
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
            { attrs: { left: "120", top: "10", width: "100", height: "100" } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/NDg2YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZT80Y2VlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/ZTEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXAudnVlPzg5NmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZT9mNWY0Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2hhcnQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Jvb21NYXAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83Y2YxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQudnVlPzYxMjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWU/MDFiMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlPzMzODYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/M2I0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTgyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnZ1ZT8yZGZhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQudnVlPzc1OGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFydC52dWU/ZmQ0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzRhNjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwLnZ1ZT83MzI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcC52dWU/OGQzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXAudnVlPzJkZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlPzk5MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwRGV0YWlsLnZ1ZT9jMmZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbU1hcERldGFpbC52dWU/M2UzZiIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJtdXRhdGlvbnMiLCJhY3Rpb25zIl0s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LEVBQVUsQ0FBQ0EsQ0FBQyxDQUFDVCxHQUFELENBQUYsQ0FBVjtBQUZoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUcsMENBQUcsQ0FBQ0MsR0FBSixDQUFRTSw0Q0FBUjtBQUVlLG1FQUFJQSw0Q0FBSSxDQUFDQyxLQUFULENBQWU7QUFDNUJDLE9BQUssRUFBRSxFQURxQjtBQUk1QkMsV0FBUyxFQUFFLEVBSmlCO0FBTzVCQyxTQUFPLEVBQUU7QUFQbUIsQ0FBZixDQUFmLEU7Ozs7Ozs7QUNMQSwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiAucGFnZSB7XFxuXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH0gKi9cXG4uZm9ybVtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIC8qIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgLyogcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7ICovXFxufVxcbi5pbnB1dC1maWVsZCAuaW5wdXRbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIGZvbnQtc2l6ZTogNTQ7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgaGVpZ2h0OiA1MDtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENTFBMUE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICAvKiBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7ICovXFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUpBOzs7OztJQUtBO0FBRUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7QUFDQTtBQUVBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7QUFDQTtBQUVBO0lBQ0EsOEJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtBQUNBO0FBRUE7SUFDQSxpQkFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0lBQ0EsZ0NBQUE7QUFDQTtBQUVBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtBQUNBO0FBRUE7SUFDQSw4QkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtJQUNBLGNBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTG9naW5cXFwiIC8+XFxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiIC8+IC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJTTUlMRVxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiBtYXJnaW5Cb3R0b209XFxcIjI1XFxcIj5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlVzZXJOYW1lXFxcIiBrZXlib2FyZFR5cGU9XFxcInRleHRcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgdi1tb2RlbD1cXFwidXNlclxcXCIgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgZm9udFNpemU9XFxcIjE4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgbWFyZ2luQm90dG9tPVxcXCIyNVxcXCI+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiB2LW1vZGVsPVxcXCJwYXNzXFxcIiA6cmV0dXJuS2V5VHlwZT1cXFwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcXFwiIGZvbnRTaXplPVxcXCIxOFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gOnRleHQ9XFxcImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcXFwiIEB0YXA9XFxcImdvVG9Mb2dpblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuPC9QYWdlPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgVnVlIGZyb20gXFxcIm5hdGl2ZXNjcmlwdC12dWVcXFwiO1xcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XFxuaW1wb3J0IGF4aW9zIGZyb20gXFxcImF4aW9zXFxcIjtcXG5jb25zdCB0b2FzdHkgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9hc3R5JykuVG9hc3R5O1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXFxuICAgICAgICAgICAgdXNlcjogXFxcIlxcXCIsXFxuICAgICAgICAgICAgcGFzczogXFxcIlxcXCIsXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGdvVG9Mb2dpbigpIHtcXG4gICAgICAgICAgICAvLyBsZXQgZGF0YUxvZ2luID0ge1xcbiAgICAgICAgICAgIC8vICAgXFxcInVpZFxcXCI6IFxcXCJzbWxcXFwiLFxcbiAgICAgICAgICAgIC8vICAgXFxcInB3ZFxcXCI6IFxcXCIwY2MxNzViOWMwZjFiNmE4MzFjMzk5ZTI2OTc3MjY2MVxcXCIsXFxuICAgICAgICAgICAgLy8gICBcXFwibGFuZ1xcXCI6IFxcXCJ2aVxcXCJcXG4gICAgICAgICAgICAvLyB9O1xcbiAgICAgICAgICAgIC8vIGxldCBjb25maWcgPSB7XFxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBhY3Q6XFxcInRva2VuXFxcIixcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwYXBwOlxcXCJTVlJcXFwiXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gLFxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIG9yaWdpbjpcXFwiaHR0cDovL2xvY2FsaG9zdDo0NDMzMFxcXCJcXG4gICAgICAgICAgICAvLyAgICAgfVxcbiAgICAgICAgICAgIC8vIH07XFxuICAgICAgICAgICAgLy8gYXhpb3MucG9zdChcXFwiaHR0cDovLzE5Mi4xNjguMy4xMTEvc21sX3N2cl9hcGkvYXBpLzEuMC9yZWNlaXZlZGF0YVxcXCIsIGRhdGFMb2dpbiwgY29uZmlnKVxcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSAgPT4geyAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYWJjYycpO1xcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIHN1Y2Nlc3MhJyB9KTtcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7ICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIGZhbHNlIScgfSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgXFxuICAgICAgICAgICAgLy8gICAgICAgICB9IFxcbiAgICAgICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgID0+IHtcXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yIClcXG4gICAgICAgICAgICAvLyAgICAgfSk7IFxcbiAgICAgICAgICAgIC8vIGxldCBkYXRhTG9naW4gPSB7XFxuICAgICAgICAgICAgLy8gICB1c2VybmFtZTogXFxcInVzZXJuYW1lXFxcIixcXG4gICAgICAgICAgICAvLyAgIHBhc3N3b3JkOiBcXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgLy8gfTtcXG4gICAgICAgICAgICAvLyBsZXQgY29uZmlnID0ge1xcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7IFxcXCJDb250ZW50LVR5cGVcXFwiOiBcXFwiYXBwbGljYXRpb24vanNvblxcXCIgfSxcXG4gICAgICAgICAgICAvLyB9O1xcbiAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoXFxcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFxcXCIsIGRhdGFMb2dpbiwgY29uZmlnKVxcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSAgPT4geyAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYWJjYycpO1xcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIHN1Y2Nlc3MhJyB9KTtcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7ICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIGZhbHNlIScgfSk7XFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgXFxuICAgICAgICAgICAgLy8gICAgICAgICB9IFxcbiAgICAgICAgICAgIC8vICAgICB9KVxcbiAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgID0+IHtcXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yIClcXG4gICAgICAgICAgICAvLyAgICAgfSk7ICBcXG4gICAgICAgICAgICAvLyAgICBheGlvcyh7IG1ldGhvZDogXFxcIkdFVFxcXCIsIFxcXCJ1cmxcXFwiOiBcXFwiaHR0cDovL2R1bW15LnJlc3RhcGlleGFtcGxlLmNvbS9hcGkvdjEvZW1wbG95ZWVzXFxcIiB9KS50aGVuKHJlc3VsdCA9PiB7XFxuICAgICAgICAgICAgLy8gICAgdmFyIHBva2Vtb24gPXJlc3VsdC5kYXRhO1xcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTsgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICAvLyB9KTtcXG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnR2V0J1xcbiAgICAgICAgICAgIC8vICAgICAvLyAsXFxuICAgICAgICAgICAgLy8gICAgIC8vIGhlYWRlcnM6IHtcXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcXFwiQmFzaWMgYzIxcGJHVTZjMjFwYkdWQU1USXpcXFwiXFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7XFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAgaGNvZGU6IFxcXCJNVDEwMDFcXFwiXFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLy8gfTtcXG4gICAgICAgICAgICAvLyBmZXRjaCgnaHR0cDovLzE5Mi4xNjguMy4xNDc6ODA4My9hcGkvdjEuMC9waW5nJywgcmVxdWVzdE9wdGlvbnMpXFxuICAgICAgICAgICAgLy8gICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnYWJjJyk7XFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcXG4gICAgICAgICAgICAvLyAgICAgfSlcXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XFxuICAgICAgICAgICAgLy8gICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7IFxcbiAgICAgICAgICAgIC8vIGh0dHAucmVxdWVzdCh7XFxuICAgICAgICAgICAgLy8gICAgIHVybDogXFxcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFxcXCIsXFxuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogXFxcIlBPU1RcXFwiLFxcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7IFxcXCJDb250ZW50LVR5cGVcXFwiOiBcXFwiYXBwbGljYXRpb24vanNvblxcXCIsIG9yaWdpbjogJzEyMzIzMSd9LFxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XFxuICAgICAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogXFxcInVzZXJuYW1lXFxcIixcXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhc3N3b3JkOiBcXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgLy8gICAgIH0pXFxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSggcmVzcG9uc2UuaGVhZGVycykpO1xcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgICAgICAvLyB9LCBlcnJvciA9PiB7XFxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIC8vIH0pO1xcbiAgICAgICAgICAgIC8vIGh0dHAuZ2V0SlNPTihcXFwiaHR0cDovL2R1bW15LnJlc3RhcGlleGFtcGxlLmNvbS9hcGkvdjEvZW1wbG95ZWVzXFxcIikudGhlbihyZXN1bHQgPT4ge1xcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgICAgICAvLyB9LCBlcnJvciA9PiB7XFxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAvLyB9KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIC5wYWdlIHtcXG5cXG5hbGlnbi1pdGVtczogY2VudGVyO1xcblxcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fSAqL1xcblxcbi5mb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICAgIGhlaWdodDogOTA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgLyogaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0Q1MUExQTtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIC8qIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4OyAqL1xcbn1cXG5cXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiA1NDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gICAgaGVpZ2h0OiA1MDtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENTFBMUE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ2luLWxhYmVsIHtcXG4gICAgLyogaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBjb2xvcjogI0E4QThBODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuXFxuLnNpZ24tdXAtbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuXFxuLmJvbGQge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuPC9zdHlsZT5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtNjM4MDY0OTNde1xcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vY29tcG9uZW50cy9DaGFydC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVEQTtFQUNBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8UGFnZT5cXHJcXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2hhcnRcXFwiLz5cXHJcXG4gICAgPFJhZENhcnRlc2lhbkNoYXJ0PlxcclxcbiAgICAgIDxDYXRlZ29yaWNhbEF4aXMgdi10a0NhcnRlc2lhbkhvcml6b250YWxBeGlzIC8+XFxyXFxuICAgICAgPExpbmVhckF4aXMgdi10a0NhcnRlc2lhblZlcnRpY2FsQXhpcyAvPlxcclxcbiAgICAgIDxMaW5lU2VyaWVzIHYtdGtDYXJ0ZXNpYW5TZXJpZXNcXHJcXG4gICAgICAgICAgICAgICAgICA6aXRlbXM9XFxcImZhdm9yaXRlRnJ1aXRzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk9XFxcInR5cGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eT1cXFwiY291bnRcXFwiIC8+XFxyXFxuICAgIDwvUmFkQ2FydGVzaWFuQ2hhcnQ+XFxyXFxuICA8L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQgVnVlIGZyb20gXFxcIm5hdGl2ZXNjcmlwdC12dWVcXFwiO1xcclxcbiAgICBpbXBvcnQgUmFkQ2hhcnQgZnJvbSBcXFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVxcXCI7XFxyXFxuICAgIFZ1ZS51c2UoUmFkQ2hhcnQpO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBkYXRhKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlRnJ1aXRzOiBbe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCLwn42OXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogN1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwi8J+NjFxcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDE1XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCLwn42NXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMTJcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcIvCfjZJcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAzMFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwi8J+Nh1xcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDE2XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIF1cXHJcXG4gICAgICAgICAgICB9O1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XFxyXFxuICAgICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XFxyXFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRhc2RhJylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLnBhZ2V7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9DaGFydC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiAgICAvKiAucGFnZSB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vY29tcG9uZW50cy9Ib21lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCQTs7O0lBR0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8UGFnZSA+XFxyXFxuICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiLz5cXHJcXG4gICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiIGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjM2M0OTVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlJvb21NYXBcXFwiIGNsYXNzPVxcXCJteS1idXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ2hhcnRcXFwiIGNsYXNzPVxcXCJteS1idXR0b25cXFwiIEB0YXA9XFxcImdvVG9DaGFydFxcXCIgLz5cXHJcXG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0ID5cXHJcXG5pbXBvcnQgUm9vbU1hcCBmcm9tICcuL1Jvb21NYXAnO1xcclxcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIGdvVG9Sb29tTWFwKCkge1xcclxcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhSb29tTWFwKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdvVG9DaGFydCgpIHtcXHJcXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ2hhcnQpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC8qIC5wYWdlIHtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0fSAqL1xcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkU3R5bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG4uY2FyZENvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxufVxcbi5wYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvUm9vbU1hcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdEQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7SUFDQSx5QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG48UGFnZSBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlJvb21NYXBcXFwiPlxcclxcbiAgICAgICAgPCEtLSA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG4gICAgPEFic29sdXRlTGF5b3V0PlxcclxcbiAgICAgICAgPCEtLSA8Q2FyZFZpZXcgcmlwcGxlPVxcXCJ0cnVlXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiBtYXJnaW49XFxcIjVcXFwiIGhlaWdodD1cXFwiMzAwXFxcIj4gLS0+XFxyXFxuICAgICAgICA8Q2FyZFZpZXcgbGVmdD1cXFwiMTBcXFwiIHRvcD1cXFwiMTBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIj5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgMVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICA8Q2FyZFZpZXcgbGVmdD1cXFwiMTIwXFxcIiB0b3A9XFxcIjEwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCI+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IGF4aW9zIGZyb20gXFxcImF4aW9zXFxcIjtcXHJcXG5pbXBvcnQgUm9vbU1hcERldGFpbCBmcm9tICcuL1Jvb21NYXBEZXRhaWwnO1xcclxcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XFxyXFxuVnVlLnJlZ2lzdGVyRWxlbWVudChcXHJcXG4gICAgJ0NhcmRWaWV3JyxcXHJcXG4gICAgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXdcXHJcXG4pO1xcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7fVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICBnb1RvUm9vbU1hcERldGFpbCgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFJvb21NYXBEZXRhaWwpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4uY2FyZFN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDMwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUm9vbU1hcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi0xZDdkMjAzMl17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrQkE7RUFDQSx3QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPFBhZ2UgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSb29tTWFwRGV0YWlsXFxcIi8+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVxcXCJ0aGlzLiRuYXZpZ2F0ZUJhY2tcXFwiIHRleHQ9XFxcIkdvIEJhY2tcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9QYWdlPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCA+XFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAucGFnZXtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCI8dGVtcGxhdGU+XG48UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkxvZ2luXCIgLz5cbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiAvPiAtLT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJTTUlMRVwiIC8+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiVXNlck5hbWVcIiBrZXlib2FyZFR5cGU9XCJ0ZXh0XCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXJcIiByZXR1cm5LZXlUeXBlPVwibmV4dFwiIGZvbnRTaXplPVwiMThcIiAvPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJlZj1cInBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwicGFzc1wiIDpyZXR1cm5LZXlUeXBlPVwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcIiBmb250U2l6ZT1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiIEB0YXA9XCJnb1RvTG9naW5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvRmxleGJveExheW91dD5cbjwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QgdG9hc3R5ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXRvYXN0eScpLlRvYXN0eTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgICAgICB1c2VyOiBcIlwiLFxuICAgICAgICAgICAgcGFzczogXCJcIixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnb1RvTG9naW4oKSB7XG4gICAgICAgICAgICAvLyBsZXQgZGF0YUxvZ2luID0ge1xuICAgICAgICAgICAgLy8gICBcInVpZFwiOiBcInNtbFwiLFxuICAgICAgICAgICAgLy8gICBcInB3ZFwiOiBcIjBjYzE3NWI5YzBmMWI2YTgzMWMzOTllMjY5NzcyNjYxXCIsXG4gICAgICAgICAgICAvLyAgIFwibGFuZ1wiOiBcInZpXCJcbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAvLyBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFjdDpcInRva2VuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwYXBwOlwiU1ZSXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIG9yaWdpbjpcImh0dHA6Ly9sb2NhbGhvc3Q6NDQzMzBcIlxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAvLyBheGlvcy5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMy4xMTEvc21sX3N2cl9hcGkvYXBpLzEuMC9yZWNlaXZlZGF0YVwiLCBkYXRhTG9naW4sIGNvbmZpZylcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSAgPT4geyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ2FiY2MnKTtcbiAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBzdWNjZXNzIScgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lKTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ0xvZ2luIGZhbHNlIScgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b2FzdC5zaG93KCk7ICBcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciAgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciApXG4gICAgICAgICAgICAvLyAgICAgfSk7IFxuICAgICAgICAgICAgLy8gbGV0IGRhdGFMb2dpbiA9IHtcbiAgICAgICAgICAgIC8vICAgdXNlcm5hbWU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIC8vICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIiwgZGF0YUxvZ2luLCBjb25maWcpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgID0+IHsgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCdhYmNjJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiAnTG9naW4gc3VjY2VzcyEnIH0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6ICdMb2dpbiBmYWxzZSEnIH0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9hc3Quc2hvdygpOyAgXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gXG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IgKVxuICAgICAgICAgICAgLy8gICAgIH0pOyAgXG4gICAgICAgICAgICAvLyAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZHVtbXkucmVzdGFwaWV4YW1wbGUuY29tL2FwaS92MS9lbXBsb3llZXNcIiB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyAgICB2YXIgcG9rZW1vbiA9cmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9rZW1vbik7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdHZXQnXG4gICAgICAgICAgICAvLyAgICAgLy8gLFxuICAgICAgICAgICAgLy8gICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgYzIxcGJHVTZjMjFwYkdWQU1USXpcIlxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgIGhjb2RlOiBcIk1UMTAwMVwiXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAvLyBmZXRjaCgnaHR0cDovLzE5Mi4xNjguMy4xNDc6ODA4My9hcGkvdjEuMC9waW5nJywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnYWJjJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7IFxuICAgICAgICAgICAgLy8gaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIC8vICAgICB1cmw6IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0XCIsXG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCBvcmlnaW46ICcxMjMyMzEnfSxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHVzZXJuYW1lOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KCByZXNwb25zZS5oZWFkZXJzKSk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIC8vIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gaHR0cC5nZXRKU09OKFwiaHR0cDovL2R1bW15LnJlc3RhcGlleGFtcGxlLmNvbS9hcGkvdjEvZW1wbG95ZWVzXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIC8vIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLyogLnBhZ2Uge1xuXG5hbGlnbi1pdGVtczogY2VudGVyO1xuXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9ICovXG5cbi5mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICBmbGV4LWdyb3c6IDI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDEyO1xuICAgIGhlaWdodDogOTA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXIge1xuICAgIC8qIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBmb250LXNpemU6IDI1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRDUxQTFBO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDI1O1xufVxuXG4uaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgLyogcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7ICovXG59XG5cbi5pbnB1dC1maWVsZCAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogNTQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgaGVpZ2h0OiA1MDtcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxQTFBO1xuICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWxhYmVsIHtcbiAgICAvKiBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7ICovXG4gICAgY29sb3I6ICNBOEE4QTg7XG4gICAgZm9udC1zaXplOiAxNjtcbn1cblxuLnNpZ24tdXAtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwO1xufVxuXG4uYm9sZCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG48L3N0eWxlPlxuXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJDaGFydFwiLz5cclxuICAgIDxSYWRDYXJ0ZXNpYW5DaGFydD5cclxuICAgICAgPENhdGVnb3JpY2FsQXhpcyB2LXRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXMgLz5cclxuICAgICAgPExpbmVhckF4aXMgdi10a0NhcnRlc2lhblZlcnRpY2FsQXhpcyAvPlxyXG4gICAgICA8TGluZVNlcmllcyB2LXRrQ2FydGVzaWFuU2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cImZhdm9yaXRlRnJ1aXRzXCJcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5PVwiY291bnRcIiAvPlxyXG4gICAgPC9SYWRDYXJ0ZXNpYW5DaGFydD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xyXG4gICAgaW1wb3J0IFJhZENoYXJ0IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCI7XHJcbiAgICBWdWUudXNlKFJhZENoYXJ0KTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlRnJ1aXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIvCfjY5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCLwn42MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxNVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIvCfjY1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwi8J+NklwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMzBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCLwn42HXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxNlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xyXG4gICAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRhc2RhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5wYWdle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgPlxyXG4gICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIi8+XHJcbiAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYmFja2dyb3VuZENvbG9yPVwiIzNjNDk1ZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJSb29tTWFwXCIgY2xhc3M9XCJteS1idXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDaGFydFwiIGNsYXNzPVwibXktYnV0dG9uXCIgQHRhcD1cImdvVG9DaGFydFwiIC8+XHJcbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0ID5cclxuaW1wb3J0IFJvb21NYXAgZnJvbSAnLi9Sb29tTWFwJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdvVG9Sb29tTWFwKCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUm9vbU1hcCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdvVG9DaGFydCgpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENoYXJ0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAvKiAucGFnZSB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9ICovXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUm9vbU1hcFwiPlxyXG4gICAgICAgIDwhLS0gPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJIb21lXCI+PC9MYWJlbD4gLS0+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuICAgIDxBYnNvbHV0ZUxheW91dD5cclxuICAgICAgICA8IS0tIDxDYXJkVmlldyByaXBwbGU9XCJ0cnVlXCIgcGFkZGluZz1cIjVcIiBtYXJnaW49XCI1XCIgaGVpZ2h0PVwiMzAwXCI+IC0tPlxyXG4gICAgICAgIDxDYXJkVmlldyBsZWZ0PVwiMTBcIiB0b3A9XCIxMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSAxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICA8Q2FyZFZpZXcgbGVmdD1cIjEyMFwiIHRvcD1cIjEwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgPC9BYnNvbHV0ZUxheW91dD5cclxuPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUm9vbU1hcERldGFpbCBmcm9tICcuL1Jvb21NYXBEZXRhaWwnO1xyXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xyXG5WdWUucmVnaXN0ZXJFbGVtZW50KFxyXG4gICAgJ0NhcmRWaWV3JyxcclxuICAgICgpID0+IHJlcXVpcmUoJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldycpLkNhcmRWaWV3XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdvVG9Sb29tTWFwRGV0YWlsKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFJvb21NYXBEZXRhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmNhcmRTdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxufVxyXG5cclxuLmNhcmRDb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIlJvb21NYXBEZXRhaWxcIi8+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCJ0aGlzLiRuYXZpZ2F0ZUJhY2tcIiB0ZXh0PVwiR28gQmFja1wiPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0ID5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5wYWdle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiTG9naW5cIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIsIGF0dHJzOiB7IHRleHQ6IFwiU01JTEVcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiVXNlck5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlciA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IG1hcmdpbkJvdHRvbTogXCIyNVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IF92bS5pc0xvZ2dpbmdJbiA/IFwiZG9uZVwiIDogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzcyA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJMb2cgSW5cIiA6IFwiU2lnbiBVcFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0xvZ2luIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQ2hhcnRcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiUmFkQ2FydGVzaWFuQ2hhcnRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQ2F0ZWdvcmljYWxBeGlzXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpc1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a0NhcnRlc2lhbkhvcml6b250YWxBeGlzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGluZWFyQXhpc1wiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuVmVydGljYWxBeGlzXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuVmVydGljYWxBeGlzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGluZVNlcmllc1wiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJ0a0NhcnRlc2lhblNlcmllc1wiLCByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5TZXJpZXNcIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaXRlbXM6IF92bS5mYXZvcml0ZUZydWl0cyxcbiAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk6IFwiY291bnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJIb21lXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2VcIixcbiAgICAgICAgICBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNjNDk1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LWJ1dHRvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSb29tTWFwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Sb29tTWFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteS1idXR0b25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2hhcnRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0NoYXJ0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJSb29tTWFwXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkFic29sdXRlTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiQ2FyZFZpZXdcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbGVmdDogXCIxMFwiLCB0b3A6IFwiMTBcIiwgd2lkdGg6IFwiMTAwXCIsIGhlaWdodDogXCIxMDBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJtZXNzYWdlIDFcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdHJldGNoOiBcImFzcGVjdEZpdFwiLCBoZWlnaHQ6IFwiNDBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCdXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvUm9vbU1hcERldGFpbCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkNhcmRWaWV3XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGxlZnQ6IFwiMTIwXCIsIHRvcDogXCIxMFwiLCB3aWR0aDogXCIxMDBcIiwgaGVpZ2h0OiBcIjEwMFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwidGV4dC5kZWNvZGVcIjogXCImI3hmMTM1OyBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIm1lc3NhZ2UgNFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Sb29tTWFwRGV0YWlsIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJSb29tTWFwRGV0YWlsXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkdvIEJhY2tcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiB0aGlzLiRuYXZpZ2F0ZUJhY2sgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vbWFpbi5qc1wiOiBcIi4vbWFpbi5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDViYTVlZDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxzbWlsZV9naXRcXFxcYXBwLW1vYmlsZS1zbWxcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDViYTVlZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDViYTVlZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzODA2NDkzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzODA2NDkzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MzgwNjQ5M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHNtaWxlX2dpdFxcXFxhcHAtbW9iaWxlLXNtbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MzgwNjQ5MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MzgwNjQ5MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MzgwNjQ5MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzODA2NDkzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYzODA2NDkzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0NoYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjM4MDY0OTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzODA2NDkzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc0MTBmM2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxzbWlsZV9naXRcXFxcYXBwLW1vYmlsZS1zbWxcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUm9vbU1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgzOWVhNzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUm9vbU1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jvb21NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Jvb21NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHNtaWxlX2dpdFxcXFxhcHAtbW9iaWxlLXNtbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ODM5ZWE3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ODM5ZWE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ODM5ZWE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUm9vbU1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgzOWVhNzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDgzOWVhNzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUm9vbU1hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9vbU1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jvb21NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4MzllYTc2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDdkMjAzMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZDdkMjAzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWQ3ZDIwMzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxzbWlsZV9naXRcXFxcYXBwLW1vYmlsZS1zbWxcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWQ3ZDIwMzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWQ3ZDIwMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWQ3ZDIwMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Jvb21NYXBEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkN2QyMDMyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFkN2QyMDMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1Jvb21NYXBEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jvb21NYXBEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9vbU1hcERldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZDdkMjAzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb29tTWFwRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDdkMjAzMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuXG5pZihUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goQXBwKV0pXG59KS4kc3RhcnQoKVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RhdGU6IHtcblxuICB9LFxuICBtdXRhdGlvbnM6IHtcblxuICB9LFxuICBhY3Rpb25zOiB7XG5cbiAgfVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9