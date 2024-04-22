try{
var Je=__STORYBOOKAPI__,{ActiveTabs:Qe,Consumer:Xe,ManagerContext:et,Provider:tt,addons:q,combineParameters:rt,controlOrMetaKey:at,controlOrMetaSymbol:nt,eventMatchesShortcut:ot,eventToShortcut:it,isMacLike:st,isShortcutTaken:lt,keyToSymbol:pt,merge:dt,mockChannel:ft,optionOrAltSymbol:ut,shortcutMatchesShortcut:ct,shortcutToHumanString:gt,types:ht,useAddonState:mt,useArgTypes:bt,useArgs:yt,useChannel:Ct,useGlobalTypes:vt,useGlobals:xt,useParameter:Ft,useSharedState:wt,useStoryPrepared:St,useStorybookApi:Pt,useStorybookState:kt}=__STORYBOOKAPI__;var N=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Ht=__STORYBOOKCLIENTLOGGER__,{deprecate:Et,logger:G,once:zt,pretty:At}=__STORYBOOKCLIENTLOGGER__;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},v(e,t)}function ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(e)}function oe(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ie(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e,t,r){return ie()?S=Reflect.construct.bind():S=function(a,n,o){var i=[null];i.push.apply(i,n);var l=Function.bind.apply(a,i),p=new l;return o&&v(p,o.prototype),p},S.apply(null,arguments)}function A(e){var t=typeof Map=="function"?new Map:void 0;return A=function(r){if(r===null||!oe(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return S(r,arguments,z(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),v(a,r)},A(e)}var se={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function le(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var f=function(e){ne(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,le.apply(void 0,[se[r]].concat(o)))||this,ae(a)}return t}(A(Error));function B(e){return Math.round(e*255)}function pe(e,t,r){return B(e)+","+B(t)+","+B(r)}function x(e,t,r,a){if(a===void 0&&(a=pe),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),l=0,p=0,d=0;n>=0&&n<1?(l=o,p=i):n>=1&&n<2?(l=i,p=o):n>=2&&n<3?(p=o,d=i):n>=3&&n<4?(p=i,d=o):n>=4&&n<5?(l=i,d=o):n>=5&&n<6&&(l=o,d=i);var b=r-o/2,y=l+b,u=p+b,j=d+b;return a(y,u,j)}var Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function de(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Y[t]?"#"+Y[t]:e}var fe=/^#[a-fA-F0-9]{6}$/,ue=/^#[a-fA-F0-9]{8}$/,ce=/^#[a-fA-F0-9]{3}$/,ge=/^#[a-fA-F0-9]{4}$/,_=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,he=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,me=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,be=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function T(e){if(typeof e!="string")throw new f(3);var t=de(e);if(t.match(fe))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ue)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ce))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ge)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=_.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=he.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=me.exec(t);if(i){var l=parseInt(""+i[1],10),p=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+x(l,p,d)+")",y=_.exec(b);if(!y)throw new f(4,t,b);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var u=be.exec(t.substring(0,50));if(u){var j=parseInt(""+u[1],10),te=parseInt(""+u[2],10)/100,re=parseInt(""+u[3],10)/100,Z="rgb("+x(j,te,re)+")",w=_.exec(Z);if(!w)throw new f(4,t,Z);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new f(5)}function ye(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l,p=n-o,d=i>.5?p/(2-n-o):p/(n+o);switch(n){case t:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-t)/p+2;break;default:l=(t-r)/p+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:d,lightness:i,alpha:e.alpha}:{hue:l,saturation:d,lightness:i}}function W(e){return ye(T(e))}var Ce=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},D=Ce;function m(e){var t=e.toString(16);return t.length===1?"0"+t:t}function R(e){return m(Math.round(e*255))}function ve(e,t,r){return D("#"+R(e)+R(t)+R(r))}function k(e,t,r){return x(e,t,r,ve)}function xe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return k(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return k(e.hue,e.saturation,e.lightness);throw new f(1)}function Fe(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?k(e,t,r):"rgba("+x(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?k(e.hue,e.saturation,e.lightness):"rgba("+x(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}function L(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return D("#"+m(e)+m(t)+m(r));if(typeof e=="object"&&t===void 0&&r===void 0)return D("#"+m(e.red)+m(e.green)+m(e.blue));throw new f(6)}function F(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=T(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?L(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?L(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}var we=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Se=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Pe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ke=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function U(e){if(typeof e!="object")throw new f(8);if(Se(e))return F(e);if(we(e))return L(e);if(ke(e))return Fe(e);if(Pe(e))return xe(e);throw new f(8)}function J(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):J(e,t,a)}}function I(e){return J(e,e.length,[])}function M(e,t,r){return Math.max(e,Math.min(t,r))}function Oe(e,t){if(t==="transparent")return t;var r=W(t);return U(C({},r,{lightness:M(0,1,r.lightness-parseFloat(e))}))}var Te=I(Oe),Ie=Te;function Me(e,t){if(t==="transparent")return t;var r=W(t);return U(C({},r,{lightness:M(0,1,r.lightness+parseFloat(e))}))}var je=I(Me),Be=je;function _e(e,t){if(t==="transparent")return t;var r=T(t),a=typeof r.alpha=="number"?r.alpha:1,n=C({},r,{alpha:M(0,1,(a*100+parseFloat(e)*100)/100)});return F(n)}var qt=I(_e);function Re(e,t){if(t==="transparent")return t;var r=T(t),a=typeof r.alpha=="number"?r.alpha:1,n=C({},r,{alpha:M(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}var He=I(Re),Ee=He,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},K={app:"#F6F9FC",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:Ee(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},O={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},ze={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:K.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},V=ze,Ae={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},De=Ae,{window:H}=N;var Le=e=>typeof e!="string"?(G.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,$e=e=>!/(gradient|var|calc)/.test(e),Ze=(e,t)=>e==="darken"?F(`${Ie(1,t)}`,.95):e==="lighten"?F(`${Be(1,t)}`,.95):t,Q=e=>t=>{if(!Le(t)||!$e(t))return t;try{return Ze(e,t)}catch{return t}},Yt=Q("lighten"),Kt=Q("darken"),qe=()=>!H||!H.matchMedia?"light":H.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",P={light:V,dark:De,normal:V},E=qe(),$=(e={base:E},t)=>{let r={...P[E],...P[e.base]||{},...e,base:P[e.base]?e.base:E};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var X='data:image/svg+xml,<svg%0D%0A    class="logo-ndt"%0D%0A    viewBox="0 0 204 32"%0D%0A    fill="none"%0D%0A    xmlns="http://www.w3.org/2000/svg"%0D%0A    width="230px"%0D%0A  >%0D%0A    <path%0D%0A      class="letra-1"%0D%0A      d="M21.82 13.2788C26.2661 13.2788 26.6171 17.9588 26.6171 19.3629V31.4726H31.2971V18.1343C31.2971 15.0923 30.6536 12.8692 29.4836 11.5822C28.0796 10.0612 25.9735 9.24219 23.2825 9.24219C21.001 9.24219 18.8949 10.1197 17.0814 11.8162C17.0229 11.8747 16.8474 11.9332 16.7889 11.8747C16.6719 11.8162 16.6134 11.6992 16.6134 11.5822V9.8272H11.7578V31.4141H16.6134V21.0594C16.6719 17.2568 16.9644 16.4378 17.7834 15.2678C18.6609 13.9223 20.0649 13.2788 21.82 13.2788Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      data-svg-origin="11.757800102233887 9.24219036102295"%0D%0A      transform="matrix(1,0,0,1,0,0)"%0D%0A      style="transform-origin: 0px 0px"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-2"%0D%0A      d="M46.3331 8.83398C43.1155 8.83398 40.3075 9.9455 38.0845 12.1685C35.8614 14.3916 34.6914 17.0826 34.6914 20.2417C34.6914 23.5762 35.8029 26.3843 38.026 28.6073C40.249 30.8303 42.9985 32.0004 46.2746 32.0004C49.6091 32.0004 52.4172 30.8888 54.6402 28.6658C56.8633 26.4428 58.0333 23.6932 58.0333 20.4172C58.0333 17.1996 56.9218 14.3916 54.6402 12.1685C52.3587 9.9455 49.6091 8.83398 46.3331 8.83398ZM51.4227 25.7993C50.1357 27.1448 48.4391 27.8468 46.3331 27.8468C44.2271 27.8468 42.5305 27.1448 41.2435 25.7408C40.015 24.3952 39.3715 22.5232 39.3715 20.2417C39.3715 18.0771 40.015 16.3221 41.302 14.9766C42.589 13.5726 44.2856 12.8706 46.3331 12.8706C48.4391 12.8706 50.1357 13.5726 51.4227 14.9766C52.7097 16.3221 53.2947 18.1356 53.2947 20.3587C53.2947 22.6402 52.6512 24.4537 51.4227 25.7993Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      style="opacity: 1"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-4"%0D%0A      d="M105.243 31.2982V9.41881H100.563V12.1684C100.563 12.2269 100.504 12.2854 100.446 12.2854C100.387 12.2854 100.329 12.2854 100.27 12.2269L99.9193 11.8758C97.8133 9.76981 95.4733 8.7168 92.8992 8.7168C89.8572 8.7168 87.3416 9.82832 85.3526 11.9929C83.3636 14.1574 82.3105 16.9069 82.3105 20.183C82.3105 23.5175 83.3636 26.3256 85.3526 28.5486C87.4001 30.7132 89.9742 31.8247 93.0747 31.8247C95.5318 31.8247 97.8133 30.8302 99.9778 28.8996L100.329 28.6071C100.387 28.5486 100.446 28.5486 100.504 28.6071C100.563 28.6071 100.563 28.6656 100.563 28.7241V31.1812H105.243V31.2982ZM98.9833 25.8576C97.6963 27.2616 95.9998 27.9636 93.8937 27.9636C91.9632 27.9636 90.2667 27.2616 88.9797 25.7991C87.7511 24.3366 87.1076 22.523 87.1076 20.3C87.1076 18.194 87.7511 16.3804 89.0382 14.9764C90.3252 13.5724 92.0217 12.8119 93.9522 12.8119C95.9998 12.8119 97.6963 13.5139 98.9833 14.9179C100.27 16.3804 100.914 18.194 100.914 20.3585C100.914 22.5815 100.27 24.4536 98.9833 25.8576Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      style="opacity: 1"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-5"%0D%0A      d="M132.739 31.298V0H128.059V12.1682C128.059 12.2267 128 12.2852 127.942 12.2852C127.883 12.2852 127.825 12.2852 127.766 12.2267L127.415 11.8757C125.309 9.76966 122.969 8.71664 120.337 8.71664C117.295 8.71664 114.779 9.82816 112.79 11.9927C110.801 14.1572 109.748 16.9653 109.748 20.1828C109.748 23.5174 110.801 26.3254 112.79 28.5485C114.838 30.713 117.412 31.8245 120.454 31.8245C123.028 31.8245 125.368 30.83 127.415 28.8995L127.766 28.5485C127.825 28.49 127.883 28.49 127.942 28.49C128 28.49 128.059 28.5485 128.059 28.607V31.1225H132.739V31.298ZM126.479 25.8574C125.192 27.2614 123.496 27.9635 121.39 27.9635C119.459 27.9635 117.763 27.2614 116.476 25.7989C115.247 24.3364 114.604 22.5229 114.604 20.2998C114.604 18.1938 115.247 16.3803 116.534 14.9762C117.821 13.5722 119.518 12.8117 121.448 12.8117C123.496 12.8117 125.192 13.5137 126.479 14.9177C127.766 16.3803 128.41 18.1938 128.41 20.3583C128.41 22.5814 127.766 24.4534 126.479 25.8574Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      data-svg-origin="109.74800109863281 0"%0D%0A      transform="matrix(1,0,0,1,0,0)"%0D%0A      style="transform-origin: 0px 0px"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-6"%0D%0A      d="M159.591 31.2982V9.41881H154.91V12.1684C154.91 12.2269 154.852 12.2854 154.793 12.2854C154.735 12.2854 154.676 12.2854 154.618 12.2269L154.267 11.8758C152.161 9.76981 149.821 8.7168 147.247 8.7168C144.205 8.7168 141.689 9.82832 139.7 11.9929C137.711 14.1574 136.658 16.9069 136.658 20.183C136.658 23.5175 137.711 26.3256 139.7 28.5486C141.748 30.7132 144.322 31.8247 147.422 31.8247C149.879 31.8247 152.161 30.8302 154.325 28.8996L154.676 28.6071C154.735 28.5486 154.794 28.5486 154.852 28.6071C154.911 28.6071 154.91 28.6656 154.91 28.7241V31.1812H159.591V31.2982ZM153.331 25.8576C152.044 27.2616 150.347 27.9636 148.241 27.9636C146.311 27.9636 144.614 27.2616 143.327 25.7991C142.099 24.3951 141.455 22.523 141.455 20.3C141.455 18.194 142.099 16.3804 143.386 14.9764C144.673 13.5724 146.369 12.8119 148.3 12.8119C150.347 12.8119 152.044 13.5139 153.331 14.9179C154.618 16.3804 155.262 18.194 155.262 20.3585C155.262 22.5815 154.618 24.4536 153.331 25.8576Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      style="opacity: 1"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-7"%0D%0A      d="M203.35 31.2982V9.41881H198.67V12.1684C198.67 12.2269 198.612 12.2854 198.553 12.2854C198.495 12.2854 198.436 12.2854 198.378 12.2269L198.027 11.8758C195.921 9.76981 193.581 8.7168 191.007 8.7168C187.965 8.7168 185.449 9.82832 183.46 11.9929C181.471 14.1574 180.418 16.9069 180.418 20.183C180.418 23.5175 181.471 26.3256 183.46 28.5486C185.508 30.7132 188.082 31.8247 191.182 31.8247C193.639 31.8247 195.921 30.8302 198.085 28.8996L198.436 28.6071C198.495 28.5486 198.553 28.5486 198.612 28.6071C198.67 28.6071 198.67 28.6656 198.67 28.7241V31.1812H203.35V31.2982ZM197.032 25.8576C195.745 27.2616 194.049 27.9636 191.943 27.9636C190.012 27.9636 188.316 27.2616 187.029 25.7991C185.8 24.3366 185.157 22.523 185.157 20.3C185.157 18.194 185.8 16.3804 187.087 14.9764C188.374 13.5724 190.071 12.8119 192.001 12.8119C194.049 12.8119 195.745 13.5139 197.032 14.9179C198.319 16.3804 198.963 18.194 198.963 20.3585C198.963 22.5815 198.319 24.4536 197.032 25.8576Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      style="opacity: 1"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-3"%0D%0A      d="M70.0834 22.3468C70.0249 22.3468 69.9664 22.2883 69.9664 22.2883L63.8823 9.47656H58.6172L69.6154 31.5899H70.4344L81.5496 9.47656H76.2845L70.2004 22.2883C70.2004 22.3468 70.1419 22.3468 70.0834 22.3468Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      style="opacity: 1"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-8"%0D%0A      d="M172.578 31.9428C174.333 31.9428 175.678 31.8843 176.907 31.2993V27.1457C176.205 27.3212 175.386 27.4382 174.625 27.4382C172.461 27.4382 171.232 26.2097 171.232 23.9867V13.8075C171.232 13.749 171.291 13.6905 171.349 13.6905H176.965V9.36144H171.349C171.291 9.36144 171.232 9.30294 171.232 9.24444V3.27734H166.552V9.24444C166.552 9.30294 166.493 9.36144 166.435 9.36144H163.627V13.6905H166.435C166.493 13.6905 166.552 13.749 166.552 13.8075V24.3377C166.552 29.1933 168.775 31.9428 172.578 31.9428Z"%0D%0A      fill="var(--logo-color, white)"%0D%0A      data-svg-origin="163.6269989013672 3.2773399353027344"%0D%0A      transform="matrix(1,0,0,1,0,0)"%0D%0A      style="transform-origin: 0px 0px"%0D%0A    ></path>%0D%0A    <path%0D%0A      class="letra-0"%0D%0A      d="M3.51006 31.8834C5.44861 31.8834 7.02012 30.3119 7.02012 28.3733C7.02012 26.4348 5.44861 24.8633 3.51006 24.8633C1.57151 24.8633 0 26.4348 0 28.3733C0 30.3119 1.57151 31.8834 3.51006 31.8834Z"%0D%0A      fill="%2306F784"%0D%0A      data-svg-origin="0 24.863300323486328"%0D%0A      transform="matrix(1,0,0,1,0,0)"%0D%0A      style="transform-origin: 0px 0px"%0D%0A    ></path>%0D%0A  </svg>%0D%0A';var ee=$({base:"dark",brandTitle:"Design System da Novadata",brandImage:X,brandTarget:"_self",fontBase:'"Inter", sans-serif',fontCode:'"Fira Code", sans-serif',colorPrimary:"#11d276",colorSecondary:"#444444",inputBorderRadius:4});q.setConfig({theme:ee});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
