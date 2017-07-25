// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/VertexArrayObject",["require","exports"],function(q,r){return function(){function c(b,p,g,f,d){this._locations=this._layout=this._glName=this._context=null;this._indexBuffer=this._buffers=void 0;this._initialized=!1;this._context=b;this._layout=g;this._buffers=f;this._locations=p;d&&(this._indexBuffer=d);this._id=c._nextId++}Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"locations",{get:function(){return this._locations},
enumerable:!0,configurable:!0});c.prototype.dispose=function(b){void 0===b&&(b=!0);var c=this._context.extensions.vao;c&&this._glName&&(c.deleteVertexArrayOES(this._glName),this._glName=null);this._context.getBoundVAO()===this&&this._context.bindVAO(null);if(b){for(var g in this._buffers)this._buffers[g].dispose(),delete this._buffers[g];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}};c.prototype.initialize=function(){if(!this._initialized){var b=this._context.extensions.vao;
if(b){var c=b.createVertexArrayOES();b.bindVertexArrayOES(c);this._bindLayout();b.bindVertexArrayOES(null);this._glName=c}this._initialized=!0}};c.prototype.bind=function(){this.initialize();var b=this._context.extensions.vao;b?b.bindVertexArrayOES(this.glName):(this._context.bindVAO(null),this._bindLayout())};c.prototype._bindLayout=function(){var b=this._buffers,c=this._context.extensions.vao,g=this._layout,f=this._indexBuffer;b||console.error("Vertex buffer dictionary is empty!");var d=this._context.gl,
a,l,m=0,h;for(h in b){(a=b[h])||console.error("Vertex buffer is uninitialized!");(l=g[h])||console.error("Vertex element descriptor is empty!");this._context.bindBuffer(a);for(m=0;m<l.length;++m){a=l[m];var e=this._locations[a.name];void 0===e&&console.error("There is no location for vertex attribute '"+a.name+" defined.");if(4>=a.count){if(d.enableVertexAttribArray(e),d.vertexAttribPointer(e,a.count,a.type,a.normalized,a.stride,a.offset),a.divisor&&0<a.divisor){var k=this._context.extensions.angleInstancedArrays;
k&&k.vertexAttribDivisorANGLE(e,a.divisor)}}else if(16===a.count&&5126===a.type)for(var n=0;4>n;n++)d.enableVertexAttribArray(e+n),d.vertexAttribPointer(e+n,4,a.type,a.normalized,a.stride,a.offset+16*n),a.divisor&&0<a.divisor&&(k=this._context.extensions.angleInstancedArrays)&&k.vertexAttribDivisorANGLE(e+n,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}f&&(c?d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,f.glName):this._context.bindBuffer(f))};c.prototype.unbind=function(){this.initialize();
var b=this._context.extensions.vao;b?b.bindVertexArrayOES(null):this._unbindLayout()};c.prototype._unbindLayout=function(){var b=this._buffers,c=this._layout,g=this._locations,f=this._context;b||console.error("Vertex buffer dictionary is empty!");var d=f.gl,a,l,m,h=0,e=0,k;for(k in b){(a=b[k])||console.error("Vertex buffer is uninitialized!");l=c[k];h=0;for(e=l.length;h<e;++h)m=l[h],d.disableVertexAttribArray(g[m.name]);f.unbindBuffer(a.bufferType)}(b=this._indexBuffer)&&f.unbindBuffer(b.bufferType)};
c._nextId=0;return c}()});