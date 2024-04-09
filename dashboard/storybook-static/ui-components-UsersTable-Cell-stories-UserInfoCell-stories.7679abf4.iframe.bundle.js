"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[9659],{"./app/ui/components/UsersTable/Cell/stories/UserInfoCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs"),_ui_components_UsersTable_Cell_UserInfoCell__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/ui/components/UsersTable/Cell/UserInfoCell.tsx"),_lib_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/lib/mocks/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Custom Components/Users/Cell/UserInfoCell",tags:["autodocs"],component:_ui_components_UsersTable_Cell_UserInfoCell__WEBPACK_IMPORTED_MODULE_1__.Z,decorators:[function(Story){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xu,{bgColor:"background.component.primary"},__jsx(Story,null))}],parameters:{controls:{expanded:!0}},render:function render(props){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.i,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tr,null,__jsx(_ui_components_UsersTable_Cell_UserInfoCell__WEBPACK_IMPORTED_MODULE_1__.Z,props)))}};var Default={args:{name:_lib_mocks__WEBPACK_IMPORTED_MODULE_2__.nb[0].name,imageURL:_lib_mocks__WEBPACK_IMPORTED_MODULE_2__.nb[0].image}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: USERS[0].name,\n    imageURL: USERS[0].image\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/ui/components/UsersTable/Cell/UserInfoCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var C_asnet_envato_storybook_envato_market_dashboard_storybook_dashboard_node_modules_pnpm_babel_runtime_7_23_7_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.7/node_modules/@babel/runtime/helpers/esm/extends.js"),C_asnet_envato_storybook_envato_market_dashboard_storybook_dashboard_node_modules_pnpm_babel_runtime_7_23_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.6.7_@swc+core@1.3.102_esbuild@0.18.20_next@14.0.4_react-dom@18.2.0_react@_xel4fib6bqvpf7d3jviwshmmsm/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+tooltip@2.3.1_@chakra-ui+system@2.6.2_framer-motion@10.17.4_react-dom@18.2.0_react@18.2.0/node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/lib/utils/index.ts"),_excluded=["imageURL","name","email"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,UserInfoComponent=function UserInfoComponent(_ref){var imageURL=_ref.imageURL,name=_ref.name,email=_ref.email,imageProps=(0,C_asnet_envato_storybook_envato_market_dashboard_storybook_dashboard_node_modules_pnpm_babel_runtime_7_23_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Td,{py:5,px:4,fontSize:"md",color:"text.primary",fontWeight:"semibold",textAlign:"left",minW:{base:470,xl:270}},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.k,{alignItems:"center",gap:"10px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.xu,{w:"50px",h:"50px",pos:"relative",borderRadius:8,overflow:"hidden"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z,(0,C_asnet_envato_storybook_envato_market_dashboard_storybook_dashboard_node_modules_pnpm_babel_runtime_7_23_7_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.Z)({src:"".concat(imageURL),alt:"Image of ".concat(name),fill:!0,sizes:"100vw",blurDataURL:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.IZ)(50,50),placeholder:"blur",quality:75,objectFit:"cover"},imageProps))),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.xu,{flex:1},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.u,{minW:"max-content",placement:"bottom-start",label:name},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.x,{as:"h4",fontSize:"md",fontWeight:"bold",whiteSpace:"break-spaces",maxW:300,noOfLines:1},name)),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.u,{minW:"max-content",placement:"bottom-start",label:"".concat(email)},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.x,{as:next_link__WEBPACK_IMPORTED_MODULE_1___default(),href:"mailto:".concat(email),fontSize:"xs",fontWeight:"medium",color:"secondary.350",flex:1,whiteSpace:"break-spaces",noOfLines:1},email)))))};UserInfoComponent.displayName="UserInfoComponent";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(UserInfoComponent)}}]);