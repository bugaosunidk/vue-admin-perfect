(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217928"],{c6fe:function(e,t,r){"use strict";r.r(t);var n=r("1da1"),c=(r("b0c0"),r("96cf"),r("7a23")),o=(r("d3b7"),r("ac1f"),r("00b4"),r("a90d")),l=r("3ef4"),a=["src"],u=Object(c["defineComponent"])({props:{modelValue:Array},emits:["update:modelValue"],setup:function(e,t){var r=t.emit,n=e,u=Object(c["ref"])([]),d=Object(c["ref"])(""),i=Object(c["ref"])(!1),b=function(e,t){console.log(e,t)},f=function(e,t){return new Promise((function(t,n){var c=new FileReader,o=/\.jpg$|\.jpeg$|\.gif$|\.png$/i;c.readAsDataURL(e);var a=e.name;o.test(a)?c.onload=function(e){u.value.push({name:a,url:e.target.result}),r("update:modelValue",u.value),t(e.target.result)}:(l["a"].error("请上传图片"),n())}))},j=function(e){d.value=e.url,i.value=!0};return Object(c["onMounted"])((function(){Object(c["watch"])((function(){return n.modelValue}),(function(e){u.value=e}))})),function(e,t){var r=Object(c["resolveComponent"])("el-icon"),n=Object(c["resolveComponent"])("el-upload"),l=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(n,{action:"","before-upload":f,"list-type":"picture-card","on-preview":j,"on-remove":b,"file-list":Object(c["unref"])(u)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(o["a"]))]})),_:1})]})),_:1},8,["file-list"]),Object(c["createVNode"])(l,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.value=e}),width:"80%",top:"80px"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("img",{"w-full":"",src:d.value,alt:"预览图片",style:{width:"100%"}},null,8,a)]})),_:1},8,["modelValue"])],64)}}});const d=u;var i=d,b={style:{"max-width":"800px"}},f=Object(c["createElementVNode"])("span",{class:"text-gray-500"},"-",-1),j=Object(c["createTextVNode"])("立即创建"),O=Object(c["createTextVNode"])("重置"),p=Object(c["defineComponent"])({setup:function(e){var t=Object(c["ref"])("default"),r=Object(c["ref"])(),o=Object(c["reactive"])({name:"跑步",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",img:[]}),l=Object(c["reactive"])({name:[{required:!0,message:"请输入活动名称活动区域",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],img:[{required:!0,message:"请上传图片",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源\n",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}),a=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("--FORM---",o),t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.validate((function(e,t){e?console.log("submit!"):console.log("error submit!",t)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){e&&e.resetFields()};return function(e,n){var d=Object(c["resolveComponent"])("el-input"),p=Object(c["resolveComponent"])("el-form-item"),m=Object(c["resolveComponent"])("el-option"),s=Object(c["resolveComponent"])("el-select"),V=Object(c["resolveComponent"])("el-date-picker"),g=Object(c["resolveComponent"])("el-col"),v=Object(c["resolveComponent"])("el-time-picker"),h=Object(c["resolveComponent"])("el-switch"),w=Object(c["resolveComponent"])("el-checkbox"),C=Object(c["resolveComponent"])("el-checkbox-group"),N=Object(c["resolveComponent"])("el-radio"),x=Object(c["resolveComponent"])("el-radio-group"),y=Object(c["resolveComponent"])("el-button"),_=Object(c["resolveComponent"])("el-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[Object(c["createVNode"])(_,{ref_key:"ruleFormRef",ref:r,model:Object(c["unref"])(o),rules:Object(c["unref"])(l),"label-width":"120px",class:"demo-ruleForm",size:t.value},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{label:"活动名称",prop:"name"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{modelValue:Object(c["unref"])(o).name,"onUpdate:modelValue":n[0]||(n[0]=function(e){return Object(c["unref"])(o).name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"活动区域",prop:"region"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{modelValue:Object(c["unref"])(o).region,"onUpdate:modelValue":n[1]||(n[1]=function(e){return Object(c["unref"])(o).region=e}),placeholder:"活动区域"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{label:"区域1",value:"上海"}),Object(c["createVNode"])(m,{label:"区域2",value:"北京"})]})),_:1},8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"即时配送",required:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{span:11},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{prop:"date1"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{modelValue:Object(c["unref"])(o).date1,"onUpdate:modelValue":n[2]||(n[2]=function(e){return Object(c["unref"])(o).date1=e}),type:"date",placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(g,{class:"text-center",span:2,style:{"text-align":"center"}},{default:Object(c["withCtx"])((function(){return[f]})),_:1}),Object(c["createVNode"])(g,{span:11},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{prop:"date2"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{modelValue:Object(c["unref"])(o).date2,"onUpdate:modelValue":n[3]||(n[3]=function(e){return Object(c["unref"])(o).date2=e}),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(p,{label:"即时配送",prop:"delivery"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{modelValue:Object(c["unref"])(o).delivery,"onUpdate:modelValue":n[4]||(n[4]=function(e){return Object(c["unref"])(o).delivery=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"活动性质",prop:"type"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{modelValue:Object(c["unref"])(o).type,"onUpdate:modelValue":n[5]||(n[5]=function(e){return Object(c["unref"])(o).type=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{label:"美食/餐厅线上活动",name:"type"}),Object(c["createVNode"])(w,{label:"地推活动",name:"type"}),Object(c["createVNode"])(w,{label:"线下主题活动",name:"type"}),Object(c["createVNode"])(w,{label:"单纯品牌曝光",name:"type"})]})),_:1},8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"特殊资源",prop:"resource"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{modelValue:Object(c["unref"])(o).resource,"onUpdate:modelValue":n[6]||(n[6]=function(e){return Object(c["unref"])(o).resource=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(N,{label:"线上品牌商赞助"}),Object(c["createVNode"])(N,{label:"线下场地免费"})]})),_:1},8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"上传图片",prop:"img"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{modelValue:Object(c["unref"])(o).img,"onUpdate:modelValue":n[7]||(n[7]=function(e){return Object(c["unref"])(o).img=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,{label:"备注",prop:"desc"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{modelValue:Object(c["unref"])(o).desc,"onUpdate:modelValue":n[8]||(n[8]=function(e){return Object(c["unref"])(o).desc=e}),type:"textarea"},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(p,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{type:"primary",onClick:n[9]||(n[9]=function(e){return a(r.value)})},{default:Object(c["withCtx"])((function(){return[j]})),_:1}),Object(c["createVNode"])(y,{onClick:n[10]||(n[10]=function(e){return u(r.value)})},{default:Object(c["withCtx"])((function(){return[O]})),_:1})]})),_:1})]})),_:1},8,["model","rules","size"])])}}});const m=p;t["default"]=m}}]);
//# sourceMappingURL=chunk-2d217928.2d8e8acc.js.map