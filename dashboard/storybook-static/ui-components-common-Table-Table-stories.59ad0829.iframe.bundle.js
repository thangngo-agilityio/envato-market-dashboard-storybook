"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[2462],{"./app/ui/components/common/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),chunk_PULVB27S=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_T2WCTPDH=__webpack_require__("./node_modules/.pnpm/@chakra-ui+table@2.1.0_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs"),chunk_KRPLQIP4=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),chunk_X3PS6RUF=__webpack_require__("./node_modules/.pnpm/@chakra-ui+image@2.1.0_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/image/dist/chunk-X3PS6RUF.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.11.3_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.11.3_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Img=(0,chunk_ZJJGQIVY.G)(((props,ref)=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.img,{ref,as:chunk_X3PS6RUF.Z,className:"chakra-image",...props}))),chunk_2OOHT3W5=__webpack_require__("./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_react@18.2.0/node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),components=__webpack_require__("./app/ui/components/index.ts"),Icons=__webpack_require__("./app/ui/components/Icons/index.ts"),mocks=__webpack_require__("./app/lib/mocks/index.ts"),__jsx=react.createElement;const Table_stories={title:"Custom Components/Table",tags:["autodocs"],component:components.iA,argTypes:{columns:{description:"The columns list to display in the table"},dataSource:{description:"The data list to display in the table data cells"}},parameters:{controls:{expanded:!0}},render:function render(props){return __jsx(chunk_PULVB27S.xu,{bgColor:"background.component.primary",w:"full",h:"50vh",padding:10},__jsx(components.iA,props))}};var Default={args:{columns:[{title:"Customer name",key:"name",renderBody:function renderBody(_ref){var image=_ref.image,name=_ref.name;return __jsx(chunk_T2WCTPDH.Td,{py:5,px:0,fontSize:"md",color:"text.primary",fontWeight:"semibold",textAlign:"left"},__jsx(chunk_KRPLQIP4.k,{alignItems:"center",gap:"10px"},__jsx(Img,{src:"".concat(image),alt:"Image of ".concat(name),w:10,h:10,borderRadius:"full"}),__jsx(chunk_2OOHT3W5.x,{fontSize:"md",fontWeight:"semibold"},name)))}},{title:"Email",key:"email"},{title:"Location",key:"location"},{title:"Spent",key:"spent"},{title:"",key:"action",renderBody:function renderBody(){return __jsx(chunk_T2WCTPDH.Td,{py:5,px:0,fontSize:"md",color:"text.primary",fontWeight:"semibold",textAlign:"left"},__jsx(Icons.oT,null))}}],dataSource:mocks.nb}},Secondary={args:{variant:"secondary",columns:[{key:"name",renderBody:function renderBody(_ref2){var image=_ref2.image,name=_ref2.name;return __jsx(chunk_T2WCTPDH.Td,{py:5,px:2,fontSize:"md",color:"text.primary",fontWeight:"semibold",textAlign:"left"},__jsx(chunk_KRPLQIP4.k,{alignItems:"center",gap:4},__jsx(Img,{src:"".concat(image),alt:"Image of ".concat(name),w:16,h:16,objectFit:"cover",borderRadius:"lg"}),__jsx(chunk_2OOHT3W5.x,{fontSize:"md",fontWeight:"semibold"},name)))},renderHead:function renderHead(){return __jsx(react.Fragment,null)}},{key:"email",renderHead:function renderHead(){return __jsx(react.Fragment,null)}},{key:"location",renderHead:function renderHead(){return __jsx(react.Fragment,null)}},{key:"spent",renderHead:function renderHead(){return __jsx(react.Fragment,null)}},{title:"",key:"action",renderHead:function renderHead(){return __jsx(react.Fragment,null)},renderBody:function renderBody(){return __jsx(chunk_T2WCTPDH.Td,{py:5,px:0,fontSize:"md",color:"text.primary",fontWeight:"semibold",textAlign:"left"},__jsx(Icons.oT,null))}}],dataSource:mocks.nb}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns: [{\n      title: \'Customer name\',\n      key: \'name\',\n      renderBody: ({\n        image,\n        name\n      }) => <Td py={5} px={0} fontSize="md" color="text.primary" fontWeight="semibold" textAlign="left">\r\n            <Flex alignItems="center" gap="10px">\r\n              <Img src={`${image}`} alt={`Image of ${name}`} w={10} h={10} borderRadius="full" />\r\n              <Text fontSize="md" fontWeight="semibold">\r\n                {(name as string)}\r\n              </Text>\r\n            </Flex>\r\n          </Td>\n    }, {\n      title: \'Email\',\n      key: \'email\'\n    }, {\n      title: \'Location\',\n      key: \'location\'\n    }, {\n      title: \'Spent\',\n      key: \'spent\'\n    }, {\n      title: \'\',\n      key: \'action\',\n      renderBody: () => <Td py={5} px={0} fontSize="md" color="text.primary" fontWeight="semibold" textAlign="left">\r\n            <Dot />\r\n          </Td>\n    }],\n    dataSource: USERS\n  }\n}',...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: \'secondary\',\n    columns: [{\n      key: \'name\',\n      renderBody: ({\n        image,\n        name\n      }) => <Td py={5} px={2} fontSize="md" color="text.primary" fontWeight="semibold" textAlign="left">\r\n            <Flex alignItems="center" gap={4}>\r\n              <Img src={`${image}`} alt={`Image of ${name}`} w={16} h={16} objectFit="cover" borderRadius="lg" />\r\n              <Text fontSize="md" fontWeight="semibold">\r\n                {(name as string)}\r\n              </Text>\r\n            </Flex>\r\n          </Td>,\n      renderHead: () => <></>\n    }, {\n      key: \'email\',\n      renderHead: () => <></>\n    }, {\n      key: \'location\',\n      renderHead: () => <></>\n    }, {\n      key: \'spent\',\n      renderHead: () => <></>\n    }, {\n      title: \'\',\n      key: \'action\',\n      renderHead: () => <></>,\n      renderBody: () => <Td py={5} px={0} fontSize="md" color="text.primary" fontWeight="semibold" textAlign="left">\r\n            <Dot />\r\n          </Td>\n    }],\n    dataSource: USERS\n  }\n}',...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary"]}}]);