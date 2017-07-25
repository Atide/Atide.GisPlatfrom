// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/layers/vectorTiles/views/2d/engine/webgl/bitblit.vs.glsl":"attribute vec2 a_pos;\r\nattribute vec2 a_tex;\r\n\r\nvarying mediump vec2 v_uv;\r\n\r\nvoid main(void) {\r\n  gl_Position \x3d vec4(a_pos, 0.0, 1.0);\r\n  v_uv \x3d a_tex;\r\n}\r\n","url:esri/layers/vectorTiles/views/2d/engine/webgl/bitblit.fs.glsl":"\tuniform lowp sampler2D u_tex;\r\n\tuniform lowp float u_opacity;\r\n\r\n\tvarying mediump vec2 v_uv;\r\n\r\n\tvoid main() {\r\n\t\tlowp vec4 color \x3d texture2D(u_tex, v_uv);\r\n\r\n    // Note: output in pre-multiplied alpha for correct alpha compositing\r\n\t\tgl_FragColor \x3d color *  u_opacity;\r\n\t}\r\n"}});
define("esri/layers/vectorTiles/views/2d/engine/webgl/BitBlitRenderer","require exports dojo/text!./bitblit.vs.glsl dojo/text!./bitblit.fs.glsl ../../../webgl/Program ../../../webgl/VertexArrayObject ../../../webgl/BufferObject".split(" "),function(m,n,f,g,h,k,l){return function(){function e(){this._initialized=!1}e.prototype.render=function(b,c,d,a){b&&c&&(this._initialized||this._initialize(b),b.setBlendFunctionSeparate(1,771,1,771),b.bindVAO(this._vertexArrayObject),b.bindProgram(this._program),
c.setSamplingMode(d),b.bindTexture(c,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",a),b.drawArrays(5,0,4),b.bindVAO())};e.prototype._initialize=function(b){if(this._initialized)return!0;var c={a_pos:0,a_tex:1},d=new h(b,f,g,c);if(!d)return!1;var a=new Int8Array(16);a[0]=-1;a[1]=-1;a[2]=0;a[3]=0;a[4]=1;a[5]=-1;a[6]=1;a[7]=0;a[8]=-1;a[9]=1;a[10]=0;a[11]=1;a[12]=1;a[13]=1;a[14]=1;a[15]=1;b=new k(b,c,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,
divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:l.createVertex(b,35044,a)});this._program=d;this._vertexArrayObject=b;return this._initialized=!0};return e}()});