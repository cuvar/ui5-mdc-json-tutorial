"use strict";sap.ui.define(["sap/ui/mdc/TableDelegate","sap/m/Text","sap/ui/core/Element","mdc/tutorial/model/metadata/JSONPropertyInfo","sap/ui/mdc/table/Column","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,a,n,r,o,s){"use strict";function l(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const i=l(n);const c=Object.assign({},e);c.fetchProperties=async()=>i.filter(e=>e.name!=="$search");const d=(e,n)=>{const o=e.name;const s=n.getId()+"---col-"+o;return a.getElementById(s)??new r(s,{propertyKey:o,header:e.label,template:new t({text:{path:"mountains>"+o,type:e.dataType}})})};c.addItem=async(e,t)=>{const a=i.find(e=>e.name===t);return d(a,e)};c.updateBindingInfo=(t,a)=>{e.updateBindingInfo.call(c,t,a);a.path=t.getPayload().bindingPath;a.templateShareable=true};const u=(e,t)=>{const a=t.map(t=>new o({path:t,operator:s.Contains,value1:e}));return[new o(a,false)]};c.getFilters=t=>{const n=a.getElementById(t.getFilter()).getSearch();const r=t.getPayload().searchKeys;let o=e.getFilters(t);if(n&&r){o=o.concat(u(n,r))}return o};return c});
//# sourceMappingURL=JSONTableDelegate.js.map