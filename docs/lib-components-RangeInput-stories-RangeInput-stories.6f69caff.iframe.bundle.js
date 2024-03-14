"use strict";(self.webpackChunkpowder_ui=self.webpackChunkpowder_ui||[]).push([[776],{"./src/lib/components/RangeInput/stories/RangeInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsControlledInput:()=>AsControlledInput,AsDefault:()=>AsDefault,AsSkeleton:()=>AsSkeleton,WithErrorMessage:()=>WithErrorMessage,WithInvalidValue:()=>WithInvalidValue,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RangeInput_stories});var templateObject_1,Slider_templateObject_1,Indicator_templateObject_1,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),util=__webpack_require__("./src/lib/util/index.ts"),Label=styled_components_browser_esm.cp.label(templateObject_1||(templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  color: ",";\n  font-size: ",";\n  cursor: pointer;\n\n  > span {\n    display: ",";\n    height: 18px;\n  }\n"],["\n  color: ",";\n  font-size: ",";\n  cursor: pointer;\n\n  > span {\n    display: ",";\n    height: 18px;\n  }\n"])),function(_a){var theme=_a.theme,error=_a.error,disabled=_a.disabled;return error?theme.palette.danger.main:disabled?theme.palette.neutral[2]:theme.palette.neutral[1]},function(_a){var theme=_a.theme;return(0,util.px)(theme.fonts.size.small)},function(_a){var _b=_a.show;return void 0===_b||_b?"block":"none"}),getThumbColor=function(theme,error,disabled){return disabled?theme.palette.neutral[2]:error?theme.palette.danger.main:theme.palette.primary.main},Slider=styled_components_browser_esm.cp.input(Slider_templateObject_1||(Slider_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 20px 0px 0px 0px;\n  width: 100%;\n  height: 8px;\n  background: ",";\n  border-radius: ",";\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n    &::-webkit-slider-thumb {\n      box-shadow: ",";\n    }\n    &::-moz-range-thumb {\n      box-shadow: ",";\n    }\n  }\n\n  &::-webkit-slider-thumb {\n    opacity: 1;\n    -webkit-appearance: none;\n    appearance: none;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background: ",";\n    cursor: pointer;\n    transition: box-shadow 250ms ease-out;\n  }\n\n  &::-moz-range-thumb {\n    border: 0px;\n    opacity: 1;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: ",";\n    cursor: pointer;\n  }\n"],["\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 20px 0px 0px 0px;\n  width: 100%;\n  height: 8px;\n  background: ",";\n  border-radius: ",";\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n    &::-webkit-slider-thumb {\n      box-shadow: ",";\n    }\n    &::-moz-range-thumb {\n      box-shadow: ",";\n    }\n  }\n\n  &::-webkit-slider-thumb {\n    opacity: 1;\n    -webkit-appearance: none;\n    appearance: none;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background: ",";\n    cursor: pointer;\n    transition: box-shadow 250ms ease-out;\n  }\n\n  &::-moz-range-thumb {\n    border: 0px;\n    opacity: 1;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: ",";\n    cursor: pointer;\n  }\n"])),function(_a){var theme=_a.theme,error=_a.error;return _a.disabled?theme.palette.lightgrey:error?theme.palette.danger.shades[2]:theme.palette.neutral[4]},function(_a){return _a.theme.border.radius},function(_a){var theme=_a.theme,error=_a.error;return!_a.disabled&&(0,util.mc)(error,theme)},function(_a){var theme=_a.theme,error=_a.error;return!_a.disabled&&(0,util.mc)(error,theme)},function(_a){var thumbSize=_a.thumbSize;return(0,util.px)(thumbSize)},function(_a){var thumbSize=_a.thumbSize;return(0,util.px)(thumbSize)},function(_a){return getThumbColor(_a.theme,_a.error,_a.disabled)},function(_a){return getThumbColor(_a.theme,_a.error,_a.disabled)}),Form=__webpack_require__("./src/lib/components/Form/index.ts"),Flex=__webpack_require__("./src/lib/components/Flex/index.ts"),getIndicatorColor=function(theme,error,disabled){return disabled?theme.palette.neutral[3]:error?theme.palette.danger.shades[2]:"dark"===theme.mode?theme.palette.neutral[4]:"light"===theme.mode?theme.palette.primary.shades[4]:void 0},Indicator=styled_components_browser_esm.cp.div(Indicator_templateObject_1||(Indicator_templateObject_1=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 18px;\n  width: 36px;\n  padding: 2px 4px;\n  font-size: 12px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  text-align: center;\n  position: absolute;\n  top: 4px;\n  transform: translateX(-50%);\n  will-change: left;\n  left: ",";\n  opacity: ",";\n\n  span:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid\n      ",";\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -8px;\n    margin-top: -1px;\n  }\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 18px;\n  width: 36px;\n  padding: 2px 4px;\n  font-size: 12px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  text-align: center;\n  position: absolute;\n  top: 4px;\n  transform: translateX(-50%);\n  will-change: left;\n  left: ",";\n  opacity: ",";\n\n  span:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid\n      ",";\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -8px;\n    margin-top: -1px;\n  }\n"])),function(_a){return getIndicatorColor(_a.theme,_a.error,_a.disabled)},function(_a){return _a.theme.palette.foreground},function(_a){return _a.theme.border.radius.sm},function(_a){return _a.position},function(_a){return _a.disabled?0:1},function(_a){return getIndicatorColor(_a.theme,_a.error,_a.disabled)}),Skeleton=__webpack_require__("./src/lib/components/Skeleton/index.ts"),RangeInput=function(props){if((0,Skeleton.y)(props)){var hideLabel_1=props.hideLabel;return react.createElement(Flex.C,{column:!0,gap:"5px"},!hideLabel_1&&react.createElement(Skeleton.W,{skeleton:!0,type:"box",width:120,height:20}),react.createElement(Skeleton.W,{skeleton:!0,type:"box",fluid:!0,height:20}))}var id=props.id,label=props.label,name=props.name,_a=props.min,min=void 0===_a?0:_a,_b=props.max,max=void 0===_b?0:_b,_c=props.step,_d=props.thumbSize,thumbSize=void 0===_d?18:_d,_e=props.value,value=void 0===_e?0:_e,units=props.units,_f=props.touched,touched=void 0!==_f&&_f,error=props.error,help=props.help,_g=props.disabled,disabled=void 0!==_g&&_g,_h=props.hideLabel,hideLabel=void 0!==_h&&_h,onChange=props.onChange,tooltipPosition=react.useMemo(function(){var fraction=(value-min)/(max-min);return"calc(".concat(100*fraction,"% + ").concat((.5-fraction)*thumbSize,"px)")},[value,min,max]);return value>max||value<min?react.createElement(Flex.C,{column:!0,gap:"5px"},!hideLabel&&react.createElement(Skeleton.W,{skeleton:!0,type:"box",width:120,height:20}),react.createElement(Skeleton.W,{skeleton:!0,type:"box",fluid:!0,height:20}),react.createElement(Form.ML,{touched:!0,error:"Please provide a value between ".concat(min," and ").concat(max)})):react.createElement(Flex.C,{column:!0,gap:"5px",width:"100%"},react.createElement(Label,{htmlFor:"range",disabled:disabled,error:!!(touched&&error),show:!hideLabel},react.createElement("span",null,label),react.createElement(Flex.C,{column:!0,padding:["20px","0px","0px","0px"],position:"relative"},react.createElement(Indicator,{position:tooltipPosition,error:!!(touched&&error),disabled:disabled},react.createElement("span",null,value," ",units)),react.createElement(Slider,{type:"range",name:name,id:id,min:min,max:max,step:void 0===_c?1:_c,thumbSize:thumbSize,value:value,error:!!(touched&&error),disabled:!!disabled,onChange:onChange}))),react.createElement(Form.ML,{error:error,touched:touched,help:help}))};try{RangeInput.displayName="RangeInput",RangeInput.__docgenInfo={description:"",displayName:"RangeInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},thumbSize:{defaultValue:null,description:"",name:"thumbSize",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},units:{defaultValue:null,description:"",name:"units",required:!1,type:{name:"string"}},touched:{defaultValue:null,description:"",name:"touched",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/RangeInput/RangeInput.tsx#RangeInput"]={docgenInfo:RangeInput.__docgenInfo,name:"RangeInput",path:"src/lib/components/RangeInput/RangeInput.tsx#RangeInput"})}catch(__react_docgen_typescript_loader_error){}var Block=__webpack_require__("./src/lib/components/Block/index.ts"),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};let RangeInput_stories={title:"Forms/RangeInput",component:RangeInput,args:{label:"Range Input",value:55,min:0,max:100,units:"%",hideLabel:!1,help:"This is some help text!"},argTypes:{value:{control:{type:"range"}}}};var Template=function(args){return react.createElement(Block.k,{width:"400px"},react.createElement(RangeInput,__assign({},args)))},AsDefault=Template.bind({}),AsControlledInput=(function(args){var _a=react.useState(25),value=_a[0],setValue=_a[1];return react.createElement(Block.k,{width:"400px"},react.createElement(RangeInput,__assign({},args,{onChange:function(e){return setValue(parseFloat(e.target.value))},value:value})))}).bind({});AsControlledInput.args={hideLabel:!0};var WithLabel=Template.bind({});WithLabel.args={label:"Range Input",value:55,hideLabel:!1};var WithErrorMessage=Template.bind({});WithErrorMessage.args={label:"Range Input",value:25,hideLabel:!1,error:"Whoops! something went wrong!",touched:!0};var AsSkeleton=Template.bind({});AsSkeleton.args={skeleton:!0,hideLabel:!1};var WithInvalidValue=Template.bind({});WithInvalidValue.args={label:"Range Input",value:150,min:0,max:100,hideLabel:!1,error:"Whoops! something went wrong!",touched:!0},AsDefault.parameters={...AsDefault.parameters,docs:{...AsDefault.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => <Block width="400px">\n    <RangeInput {...args} />\n  </Block>',...AsDefault.parameters?.docs?.source}}},AsControlledInput.parameters={...AsControlledInput.parameters,docs:{...AsControlledInput.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => {\n  const [value, setValue] = React.useState(25);\n  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value));\n  return <Block width="400px">\n      <RangeInput {...args} onChange={onChange} value={value} />\n    </Block>;\n}',...AsControlledInput.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => <Block width="400px">\n    <RangeInput {...args} />\n  </Block>',...WithLabel.parameters?.docs?.source}}},WithErrorMessage.parameters={...WithErrorMessage.parameters,docs:{...WithErrorMessage.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => <Block width="400px">\n    <RangeInput {...args} />\n  </Block>',...WithErrorMessage.parameters?.docs?.source}}},AsSkeleton.parameters={...AsSkeleton.parameters,docs:{...AsSkeleton.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => <Block width="400px">\n    <RangeInput {...args} />\n  </Block>',...AsSkeleton.parameters?.docs?.source}}},WithInvalidValue.parameters={...WithInvalidValue.parameters,docs:{...WithInvalidValue.parameters?.docs,source:{originalSource:'(args: RangeInputProps) => <Block width="400px">\n    <RangeInput {...args} />\n  </Block>',...WithInvalidValue.parameters?.docs?.source}}};let __namedExportsOrder=["AsDefault","AsControlledInput","WithLabel","WithErrorMessage","AsSkeleton","WithInvalidValue"]}}]);