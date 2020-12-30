webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21NYXAudnVlPzg5NmYiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUm9vbU1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tTWFwLnZ1ZT8wMWIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxpQkFBaUIsK0JBQStCLCtCQUErQixHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLFNBQVMsMENBQTBDLEdBQUcsYUFBYSwrQkFBK0IsR0FBRyxXQUFXLHNGQUFzRixNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsZ3NCQUFnc0IsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsdXJCQUF1ckIsZ2hCQUFnaEIsZ0RBQWdELHVDQUF1QyxpSEFBaUgsb0JBQW9CLGdCQUFnQixxQkFBcUIsU0FBUyxtQkFBbUIsaUNBQWlDLGdEQUFnRCxhQUFhLFNBQVMsS0FBSyw0Q0FBNEMsK0JBQStCLCtCQUErQixLQUFLLHNCQUFzQixvQkFBb0IsMEJBQTBCLHNCQUFzQixLQUFLLGVBQWUsMENBQTBDLEtBQUssZUFBZSwrQkFBK0IsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5QkFBeUI7QUFDckUsbUNBQW1DO0FBQ25DLDhDQUE4QyxTQUFTLG9CQUFvQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsZUFBZSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUJBQXlCO0FBQ3JFLG1DQUFtQztBQUNuQyw4Q0FBOEMsU0FBUyxvQkFBb0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS45ZWNjOTAzZWY4YTQ1NzU3Mzg0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRTdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcbi5jYXJkQ29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXG59XFxuLnBhZ2Uge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLnBhZ2VTdGFja3tcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvUm9vbU1hcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdiQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7O0lBRUEseUJBQUE7QUFDQTtBQUNBO0lBQ0Esc0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPFBhZ2UgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSb29tTWFwXFxcIj5cXHJcXG4gICAgICAgIDwhLS0gPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiB0ZXh0PVxcXCJIb21lXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuICAgIDxTY3JvbGxWaWV3PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0ICAgIGNsYXNzPVxcXCJwYWdlU3RhY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxXcmFwTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIDxDYXJkVmlldyByaXBwbGU9XFxcInRydWVcXFwiIHBhZGRpbmc9XFxcIjVcXFwiIG1hcmdpbj1cXFwiNVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgMVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVxcXCIyNSVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaW5mb1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dC5kZWNvZGU9XFxcIiYjeGYxMzU7IFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIm1lc3NhZ2UgNFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQnV0dG9uXFxcIiBAdGFwPVxcXCJnb1RvUm9vbU1hcERldGFpbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cXFwiMjUlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImluZm9cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQuZGVjb2RlPVxcXCImI3hmMTM1OyBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJtZXNzYWdlIDRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJ1dHRvblxcXCIgQHRhcD1cXFwiZ29Ub1Jvb21NYXBEZXRhaWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XFxcIjI1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpbmZvXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0LmRlY29kZT1cXFwiJiN4ZjEzNTsgXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwibWVzc2FnZSA0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiNDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIEB0YXA9XFxcImdvVG9Sb29tTWFwRGV0YWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICA8L1dyYXBMYXlvdXQ+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1Njcm9sbFZpZXc+XFxyXFxuPC9QYWdlPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgYXhpb3MgZnJvbSBcXFwiYXhpb3NcXFwiO1xcclxcbmltcG9ydCBSb29tTWFwRGV0YWlsIGZyb20gJy4vUm9vbU1hcERldGFpbCc7XFxyXFxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcXHJcXG5WdWUucmVnaXN0ZXJFbGVtZW50KFxcclxcbiAgICAnQ2FyZFZpZXcnLFxcclxcbiAgICAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnKS5DYXJkVmlld1xcclxcbik7XFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHt9XFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgIGdvVG9Sb29tTWFwRGV0YWlsKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUm9vbU1hcERldGFpbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbi5jYXJkU3R5bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlIHtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi5wYWdlU3RhY2t7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcblxuICAgIGNvbnN0IHsgQXBwbGljYXRpb24gfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7XG4gICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKF9fX0NTU19MT0FERVJfRVhQT1JUX19fICYmIHR5cGVvZiBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUm9vbU1hcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIjx0ZW1wbGF0ZT5cclxuPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUm9vbU1hcFwiPlxyXG4gICAgICAgIDwhLS0gPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJIb21lXCI+PC9MYWJlbD4gLS0+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgIDxTdGFja0xheW91dCAgICBjbGFzcz1cInBhZ2VTdGFja1wiPlxyXG4gICAgICAgICAgICA8V3JhcExheW91dD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPENhcmRWaWV3IHJpcHBsZT1cInRydWVcIiBwYWRkaW5nPVwiNVwiIG1hcmdpbj1cIjVcIiBoZWlnaHQ9XCIzMDBcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSAxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImluZm9cIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYVwiIHRleHQuZGVjb2RlPVwiJiN4ZjEzNTsgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwibWVzc2FnZSA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cImdvVG9Sb29tTWFwRGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cclxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaW5mb1wiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhXCIgdGV4dC5kZWNvZGU9XCImI3hmMTM1OyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJtZXNzYWdlIDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwiZ29Ub1Jvb21NYXBEZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbmZvXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFcIiB0ZXh0LmRlY29kZT1cIiYjeGYxMzU7IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIm1lc3NhZ2UgNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJnb1RvUm9vbU1hcERldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XHJcbiAgICAgICAgICAgIDwvV3JhcExheW91dD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9TY3JvbGxWaWV3PlxyXG48L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSb29tTWFwRGV0YWlsIGZyb20gJy4vUm9vbU1hcERldGFpbCc7XHJcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XHJcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXHJcbiAgICAnQ2FyZFZpZXcnLFxyXG4gICAgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXdcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ29Ub1Jvb21NYXBEZXRhaWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUm9vbU1hcERldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZFN0eWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG59XHJcblxyXG4uY2FyZENvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucGFnZVN0YWNre1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJSb29tTWFwXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlU3RhY2tcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIldyYXBMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSAxXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJkVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjI1JVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiN4ZjEzNTsgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwibWVzc2FnZSA0XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1Jvb21NYXBEZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=