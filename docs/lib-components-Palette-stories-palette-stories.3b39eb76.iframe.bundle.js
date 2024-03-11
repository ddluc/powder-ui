"use strict";(self.webpackChunkpowder_ui=self.webpackChunkpowder_ui||[]).push([[996],{"./src/lib/components/Palette/stories/palette.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>palette_stories});var templateObject_1,templateObject_2,PaletteRow_templateObject_1,react=__webpack_require__("./node_modules/react/index.js"),Block=__webpack_require__("./src/lib/components/Block/index.ts"),Typography=__webpack_require__("./src/lib/components/Typography/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},getThemeColor=function(_a){var color=_a.color,_b=_a.shade,shade=void 0===_b?null:_b,theme=_a.theme;return"primary"===color||"accent"===color||"danger"===color||"warning"===color||"success"===color?null!==shade?theme.palette[color].shades[shade]:theme.palette[color].main:"visualization"===color||"neutral"===color?theme.palette[color][shade]:theme.palette[color]},ColorBox=styled_components_browser_esm.cp.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: relative;\n  height: 40px;\n  width: 40px;\n  margin: 5px 5px 5px 5px;\n  border: ",";\n  background-color: ",";\n  &::after {\n    color: ",";\n    content: '","';\n    font-size: 9px;\n    width: 60px;\n    position: absolute;\n    bottom: -20px;\n  }\n"],["\n  position: relative;\n  height: 40px;\n  width: 40px;\n  margin: 5px 5px 5px 5px;\n  border: ",";\n  background-color: ",";\n  &::after {\n    color: ",";\n    content: '","';\n    font-size: 9px;\n    width: 60px;\n    position: absolute;\n    bottom: -20px;\n  }\n"])),function(_a){var border=_a.border;return border?"solid 1px ".concat(border):""},getThemeColor,function(_a){return _a.theme.palette.foreground},getThemeColor),BrandColorBox=styled_components_browser_esm.cp.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  position: relative;\n  height: 60px;\n  width: 60px;\n  margin: 5px 20px 5px 5px;\n  border: ",";\n  background-color: ",";\n  &::after {\n    content: '","';\n    color: ",";\n    font-size: 9px;\n    width: 60px;\n    position: absolute;\n    bottom: -20px;\n  }\n"],["\n  position: relative;\n  height: 60px;\n  width: 60px;\n  margin: 5px 20px 5px 5px;\n  border: ",";\n  background-color: ",";\n  &::after {\n    content: '","';\n    color: ",";\n    font-size: 9px;\n    width: 60px;\n    position: absolute;\n    bottom: -20px;\n  }\n"])),function(_a){var border=_a.border;return border?"solid 1px ".concat(border):""},getThemeColor,getThemeColor,function(_a){return _a.theme.palette.background});try{getThemeColor.displayName="getThemeColor",getThemeColor.__docgenInfo={description:"",displayName:"getThemeColor",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"accent"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"neutral"'},{value:'"foreground"'},{value:'"grey"'},{value:'"background"'},{value:'"lightgrey"'},{value:'"visualization"'}]}},shade:{defaultValue:{value:"null"},description:"",name:"shade",required:!1,type:{name:"number"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Palette/bin/ColorBox.tsx#getThemeColor"]={docgenInfo:getThemeColor.__docgenInfo,name:"getThemeColor",path:"src/lib/components/Palette/bin/ColorBox.tsx#getThemeColor"})}catch(__react_docgen_typescript_loader_error){}try{ColorBox.displayName="ColorBox",ColorBox.__docgenInfo={description:"",displayName:"ColorBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Palette/bin/ColorBox.tsx#ColorBox"]={docgenInfo:ColorBox.__docgenInfo,name:"ColorBox",path:"src/lib/components/Palette/bin/ColorBox.tsx#ColorBox"})}catch(__react_docgen_typescript_loader_error){}try{BrandColorBox.displayName="BrandColorBox",BrandColorBox.__docgenInfo={description:"",displayName:"BrandColorBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Palette/bin/ColorBox.tsx#BrandColorBox"]={docgenInfo:BrandColorBox.__docgenInfo,name:"BrandColorBox",path:"src/lib/components/Palette/bin/ColorBox.tsx#BrandColorBox"})}catch(__react_docgen_typescript_loader_error){}var PaletteRow=styled_components_browser_esm.cp.div(PaletteRow_templateObject_1||(PaletteRow_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  display: flex;\n  flex-direction: row;\n  margin: 0px 0px 30px 0px;\n"],["\n  display: flex;\n  flex-direction: row;\n  margin: 0px 0px 30px 0px;\n"])));try{PaletteRow.displayName="PaletteRow",PaletteRow.__docgenInfo={description:"",displayName:"PaletteRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Palette/bin/PaletteRow.tsx#PaletteRow"]={docgenInfo:PaletteRow.__docgenInfo,name:"PaletteRow",path:"src/lib/components/Palette/bin/PaletteRow.tsx#PaletteRow"})}catch(__react_docgen_typescript_loader_error){}var Scroll=__webpack_require__("./src/lib/components/Scroll/index.ts"),Text=Typography.O.Text;let Palette_Palette=function(){return react.createElement(Scroll.o,{direction:"y",height:"96vh"},react.createElement(Block.k,{p:"20px 0px"},react.createElement(Text,null,"Primary"),react.createElement(PaletteRow,null,react.createElement(BrandColorBox,{color:"primary"}),react.createElement(ColorBox,{color:"primary",shade:0}),react.createElement(ColorBox,{color:"primary",shade:1}),react.createElement(ColorBox,{color:"primary",shade:2}),react.createElement(ColorBox,{color:"primary",shade:3}),react.createElement(ColorBox,{color:"primary",shade:4})),react.createElement(Text,null,"Accent"),react.createElement(PaletteRow,null,react.createElement(BrandColorBox,{color:"accent"}),react.createElement(ColorBox,{color:"accent",shade:0}),react.createElement(ColorBox,{color:"accent",shade:1}),react.createElement(ColorBox,{color:"accent",shade:2}),react.createElement(ColorBox,{color:"accent",shade:3}),react.createElement(ColorBox,{color:"accent",shade:4})),react.createElement(Text,null,"Success"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"success"}),react.createElement(ColorBox,{color:"success",shade:0}),react.createElement(ColorBox,{color:"success",shade:1}),react.createElement(ColorBox,{color:"success",shade:2})),react.createElement(Text,null,"Warning"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"warning"}),react.createElement(ColorBox,{color:"warning",shade:0}),react.createElement(ColorBox,{color:"warning",shade:1}),react.createElement(ColorBox,{color:"warning",shade:2})),react.createElement(Text,null,"Danger"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"danger"}),react.createElement(ColorBox,{color:"danger",shade:0}),react.createElement(ColorBox,{color:"danger",shade:1}),react.createElement(ColorBox,{color:"danger",shade:2})),react.createElement(Text,null,"Common"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"background",border:"#EDEDED"}),react.createElement(ColorBox,{color:"foreground"}),react.createElement(ColorBox,{color:"grey"}),react.createElement(ColorBox,{color:"lightgrey"})),react.createElement(Text,null,"Neutral"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"neutral",shade:0}),react.createElement(ColorBox,{color:"neutral",shade:1}),react.createElement(ColorBox,{color:"neutral",shade:2}),react.createElement(ColorBox,{color:"neutral",shade:3}),react.createElement(ColorBox,{color:"neutral",shade:4}),react.createElement(ColorBox,{color:"neutral",shade:5})),react.createElement(Text,null,"Visualizations"),react.createElement(PaletteRow,null,react.createElement(ColorBox,{color:"visualization",shade:0}),react.createElement(ColorBox,{color:"visualization",shade:1}),react.createElement(ColorBox,{color:"visualization",shade:2}),react.createElement(ColorBox,{color:"visualization",shade:3}),react.createElement(ColorBox,{color:"visualization",shade:4}),react.createElement(ColorBox,{color:"visualization",shade:5}))))},palette_stories={title:"Theme/Palette",component:Palette_Palette};var Default=(function(){return react.createElement(Palette_Palette,null)}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Palette />",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/lib/components/Scroll/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Scroll_Scroll});var templateObject_1,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Block=__webpack_require__("./src/lib/components/Block/index.ts"),Scroll=(0,styled_components_browser_esm.cp)(Block.k)(templateObject_1||(templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  ",";\n  ",";\n"],["\n  ",";\n  ",";\n"])),function(_a){return"x"===_a.direction&&"overflow-x: scroll"},function(_a){return"y"===_a.direction&&"overflow-y: scroll"});let Scroll_Scroll=Scroll;try{Scroll.displayName="Scroll",Scroll.__docgenInfo={description:"",displayName:"Scroll",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Scroll/Scroll.tsx#Scroll"]={docgenInfo:Scroll.__docgenInfo,name:"Scroll",path:"src/lib/components/Scroll/Scroll.tsx#Scroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/components/Skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Skeleton_Skeleton,y:()=>isSkeleton});var templateObject_1,wave_templateObject_1,pulse_templateObject_1,shimmer_templateObject_1,WaveSkeleton_templateObject_1,ShimmerSkeleton_templateObject_1,DefaultSkeleton_templateObject_1,PulseSkeleton_templateObject_1,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components_browser_esm.cp.div(templateObject_1||(templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  width: ",";\n  height: ",";\n  ",";\n  ","\n"],["\n  width: ",";\n  height: ",";\n  ",";\n  ","\n"])),function(_a){var fluid=_a.fluid,width=_a.width;return fluid?"100%":"".concat(width,"px")},function(_a){var height=_a.height;return"".concat(height,"px")},function(_a){var margin=_a.margin;return margin&&"margin: ".concat(margin[0],"px ").concat(margin[1],"px ").concat(margin[2],"px ").concat(margin[3],"px")},function(_a){var _b=_a.type;return"circle"===(void 0===_b?"box":_b)?"clip-path: circle(50% at 50% 50%)":""});let animations={wave:(0,styled_components_browser_esm.xZ)(wave_templateObject_1||(wave_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n    0% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  20% {\n    opacity: 1;\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  28% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  51% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  58% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  82% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  83% {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  96% {\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  100% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n"],["\n    0% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  20% {\n    opacity: 1;\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  28% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  51% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  58% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  82% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  83% {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  96% {\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  100% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n"]))),pulse:(0,styled_components_browser_esm.xZ)(pulse_templateObject_1||(pulse_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n\n  0% { \n    opacity: 1\n  }\n\n  25% { \n    opacity: 0\n  }\n\n  50% { \n    opacity: 1\n  }\n\n  75% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n\n"],["\n\n  0% { \n    opacity: 1\n  }\n\n  25% { \n    opacity: 0\n  }\n\n  50% { \n    opacity: 1\n  }\n\n  75% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n\n"]))),shimmer:(0,styled_components_browser_esm.xZ)(shimmer_templateObject_1||(shimmer_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  0% {\n    background-position: -800px 0;\n  }\n  \n  100% {\n    background-position: 800px 0; \n  }\n"],["\n  0% {\n    background-position: -800px 0;\n  }\n  \n  100% {\n    background-position: 800px 0; \n  }\n"])))};var WaveSkeleton=styled_components_browser_esm.cp.div(WaveSkeleton_templateObject_1||(WaveSkeleton_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 3000ms ease-in-out "," infinite;\n    background-color: ",";\n    content: '';\n  }\n"],["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 3000ms ease-in-out "," infinite;\n    background-color: ",";\n    content: '';\n  }\n"])),function(_a){return _a.colors[0]},function(_a){return _a.theme.border.radius.sm},animations.wave,function(_a){return _a.colors[1]}),ShimmerSkeleton=styled_components_browser_esm.cp.div(ShimmerSkeleton_templateObject_1||(ShimmerSkeleton_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 800px 800px;\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  animation: 1000ms linear forwards "," infinite;\n"],["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 800px 800px;\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  animation: 1000ms linear forwards "," infinite;\n"])),function(_a){return _a.colors[1]},function(_a){var colors=_a.colors;return"linear-gradient(to right, ".concat(colors[1]," 0%, ").concat(colors[0]," 20%, ").concat(colors[0]," 40%, ").concat(colors[1]," 100%)")},function(_a){return _a.theme.border.radius.sm},animations.shimmer),DefaultSkeleton=styled_components_browser_esm.cp.div(DefaultSkeleton_templateObject_1||(DefaultSkeleton_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  background-repeat: no-repeat;\n  background-size: 800px 800px;\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n"],["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  background-repeat: no-repeat;\n  background-size: 800px 800px;\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n"])),function(_a){return _a.colors[1]},function(_a){return _a.theme.border.radius.sm}),PulseSkeleton=styled_components_browser_esm.cp.div(PulseSkeleton_templateObject_1||(PulseSkeleton_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 2000ms ease-in "," forwards infinite;\n    background-color: ",";\n    content: '';\n  }\n"],["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  position: relative;\n  padding: 0;\n  box-shadow: none;\n  pointer-events: none;\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 2000ms ease-in "," forwards infinite;\n    background-color: ",";\n    content: '';\n  }\n"])),function(_a){return _a.colors[0]},function(_a){return _a.theme.border.radius.sm},animations.pulse,function(_a){return _a.colors[1]}),isSkeleton=function(props){return"skeleton"in props&&props.skeleton},Skeleton=function(props){var animation,height,width,size,fluid,_a=props.type,margin=props.margin,primaryColor=props.primaryColor,secondaryColor=props.secondaryColor;"circle"===props.type&&(size=props.size),"box"===props.type&&(height=props.height,width=props.width,fluid=props.fluid);var theme=(0,styled_components_browser_esm.qG)(),colors=primaryColor&&secondaryColor?[primaryColor,secondaryColor]:theme.skeleton.colors;return react.createElement(Container,{height:size||height,width:size||width,fluid:fluid,margin:margin,type:void 0===_a?"box":_a},"shimmer"===(animation=props.animation?props.animation:theme.skeleton.animation)?react.createElement(ShimmerSkeleton,{colors:colors}):"pulse"===animation?react.createElement(PulseSkeleton,{colors:colors}):"wave"===animation?react.createElement(WaveSkeleton,{colors:colors}):react.createElement(DefaultSkeleton,{colors:colors}))};let Skeleton_Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"box"'}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"wave"'},{value:'"pulse"'},{value:'"shimmer"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"[number, number, number, number]"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},fluid:{defaultValue:null,description:"",name:"fluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/lib/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/components/Typography/bin/TextSkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>TextSkeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/components/Skeleton/index.ts"),TextSkeleton=function(props){var _a=props.lines,_b=props.lineHeight,lineHeight=void 0===_b?10:_b,_c=props.width,width=void 0===_c?null:_c,items=Array.from(Array(void 0===_a?1:_a).keys()),getWidth=function(){if(!width)return null;var min=width-.25*width;return Math.random()*(width-min)+min};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map(function(i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.W,{key:i,type:"box",fluid:!width,width:getWidth(),height:lineHeight,margin:[10,0,10,0]})}))};try{TextSkeleton.displayName="TextSkeleton",TextSkeleton.__docgenInfo={description:"",displayName:"TextSkeleton",props:{lines:{defaultValue:null,description:"",name:"lines",required:!1,type:{name:"number"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Typography/bin/TextSkeleton.tsx#TextSkeleton"]={docgenInfo:TextSkeleton.__docgenInfo,name:"TextSkeleton",path:"src/lib/components/Typography/bin/TextSkeleton.tsx#TextSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/components/Typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Typography});var templateObject_1,Mono_templateObject_1,Body=__webpack_require__("./src/lib/components/Typography/bin/Body.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),AbstractText=__webpack_require__("./src/lib/components/Typography/bin/AbstractText.tsx"),Text=styled_components_browser_esm.cp.span(templateObject_1||(templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  ","\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  & strong {\n    font-weight: ",";\n  }\n"],["\n  ","\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  & strong {\n    font-weight: ",";\n  }\n"])),AbstractText.k,function(_a){var size=_a.size,theme=_a.theme;return size||"".concat(theme.fonts.size.normal,"px")},function(_a){var lineHeight=_a.lineHeight,theme=_a.theme;return lineHeight||"".concat(Math.floor(1.5*theme.fonts.size.normal),"px")},function(_a){var weight=_a.weight,theme=_a.theme;return weight||theme.fonts.weight.normal},function(_a){return _a.theme.fonts.weight.bold});try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Typography/bin/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/lib/components/Typography/bin/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var Heading=__webpack_require__("./src/lib/components/Typography/bin/Heading.tsx"),Link=__webpack_require__("./src/lib/components/Typography/bin/Link.tsx"),List=__webpack_require__("./src/lib/components/Typography/bin/List.tsx"),Mono=styled_components_browser_esm.cp.p(Mono_templateObject_1||(Mono_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  ","\n  font-family: ",";\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n"],["\n  ","\n  font-family: ",";\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n"])),AbstractText.k,function(_a){return _a.theme.fonts.family.mono},function(_a){var size=_a.size,theme=_a.theme;return size||"".concat(theme.fonts.size.normal,"px")},function(_a){var lineHeight=_a.lineHeight,theme=_a.theme;return lineHeight||"".concat(Math.floor(1.5*theme.fonts.size.normal),"px")},function(_a){var weight=_a.weight,theme=_a.theme;return weight||theme.fonts.weight.normal});try{Mono.displayName="Mono",Mono.__docgenInfo={description:"",displayName:"Mono",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Typography/bin/Mono.tsx#Mono"]={docgenInfo:Mono.__docgenInfo,name:"Mono",path:"src/lib/components/Typography/bin/Mono.tsx#Mono"})}catch(__react_docgen_typescript_loader_error){}var TextSkeleton=__webpack_require__("./src/lib/components/Typography/bin/TextSkeleton.tsx"),Typography={Body:Body.E,Link:Link.c,H1:Heading.H1,H2:Heading.H2,H3:Heading.H3,H4:Heading.H4,H5:Heading.H5,H6:Heading.H6,Mono:Mono,Text:Text,List:{Ordered:List.Ad,Unordered:List.AV,Item:List._W},Skeleton:TextSkeleton.W}}}]);