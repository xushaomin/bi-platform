define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.cubeList,f=(b.$value,b.$index,c.$escape),g="";return g+='<div class="con-report-edit">\n    <div class="data-sources-setting overflow j-data-sources-setting">\n        <div class="overflow j-scroll-data-sources">\n            <div class="con-data-table p-r c-f">\n                <select class="data-table-select j-cube-select">\n                    ',d(e,function(a){g+='\n                    <option value="',g+=f(a.id),g+='">',g+=f(a.name),g+="</option>\n                    "}),g+='\n                </select>\n                <span class="icon-data-sources j-icon-data-sources" title="数据模型相关设置"></span>\n            </div>\n            <div class="con-ind j-data-sources-setting-con-ind"></div>\n            <div class="con-dim j-data-sources-setting-con-dim"></div>\n        </div>\n    </div>\n    <div class="canvas j-canvas">\n        <div class="j-globalbtn"></div>\n        <div class="comp-setting j-con-comp-setting"></div>\n        <div class="report j-report"></div>\n        <span class="button button-flat-primary button-save-report j-button-save-report">保存</span>\n        <span class="button button-flat-primary button-publish-report j-button-publish-report">发布</span>\n    </div>\n</div>'}return{render:b}});