var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20180814_syb_cb_crawl*/window.__wcc_version__='v0.5vv_20180814_syb_cb_crawl';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1321aa0c'])
Z([3,'_div data-v-2fc337a2 cartcontrol'])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'count']],[1,1]])
Z([3,'handleProxy'])
Z([3,'_div data-v-2fc337a2 cart-decrease'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'_span data-v-2fc337a2 inner icon-remove_circle_outline'])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'count']],[1,0]])
Z([3,'_div data-v-2fc337a2 cart-count'])
Z([a,[[6],[[7],[3,'food']],[3,'count']]])
Z(z[3])
Z([3,'_div data-v-2fc337a2 cart-add'])
Z(z[5])
Z([1,'1'])
Z([3,'_span data-v-2fc337a2 icon-add_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7a5e86ff'])
Z([3,'_view data-v-09d1f594 container'])
Z([[2,'=='],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
Z([3,'_view data-v-09d1f594 view-empty'])
Z([3,'_image data-v-09d1f594'])
Z([3,'../../static/imgs/empty_cart.png'])
Z([3,'_text data-v-09d1f594 hint'])
Z([3,'购物车还是空的'])
Z([3,'handleProxy'])
Z([3,'_text data-v-09d1f594 btn'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'马上逛逛'])
Z([3,'_view data-v-09d1f594 body-container'])
Z([3,'idx'])
Z([3,'cart'])
Z([[7],[3,'cartList']])
Z(z[14])
Z([3,'_view data-v-09d1f594 cart'])
Z([[7],[3,'idx']])
Z([3,'_image data-v-09d1f594 cart-image'])
Z([[6],[[7],[3,'cart']],[3,'image']])
Z([3,'_view data-v-09d1f594 cart-info'])
Z([3,'_view data-v-09d1f594 cart-title'])
Z([a,[[6],[[7],[3,'cart']],[3,'title']]])
Z([3,'_view data-v-09d1f594'])
Z([3,'_text data-v-09d1f594 cart-price'])
Z([a,[3,'￥'],[[6],[[7],[3,'cart']],[3,'price']]])
Z([3,'_text data-v-09d1f594 cart-unit'])
Z([a,[3,'/'],[[6],[[7],[3,'cart']],[3,'unit']]])
Z(z[8])
Z([3,'_image data-v-09d1f594 cart-del'])
Z(z[10])
Z([[2,'+'],[1,'1-'],[[7],[3,'idx']]])
Z([3,'../../static/imgs/delete.png'])
Z(z[8])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0-']],[[7],[3,'idx']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[10])
Z([[2,'+'],[1,'2-'],[[7],[3,'idx']]])
Z([3,'1321aa0c'])
Z([[2,'>'],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
Z([3,'_view data-v-09d1f594 foot-container'])
Z([3,'_view data-v-09d1f594 foot-info'])
Z(z[25])
Z([a,[3,'共计'],[[6],[[7],[3,'cartList']],[3,'length']],[3,'种'],[[7],[3,'foods_count']],[3,'件商品']])
Z([3,'_view data-v-09d1f594 foods_price'])
Z([a,z[27][1],[[7],[3,'foods_price']]])
Z(z[8])
Z([3,'_button data-v-09d1f594 foot-btn'])
Z(z[10])
Z([1,'3'])
Z([3,'mini'])
Z([3,'warn'])
Z([3,'提交订单'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7a5e86ff'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3eb11e7f'])
Z([3,'_view data-v-51935736 container'])
Z([3,'_view data-v-51935736 body-container'])
Z([3,'_scroll-view data-v-51935736'])
Z([3,'height: 200rpx;width: 100%'])
Z([3,'_view data-v-51935736 scroll-view-item_H bc_green'])
Z([3,'green'])
Z([3,'background: green;'])
Z([3,'_view data-v-51935736 scroll-view-item_H bc_red'])
Z([3,'red'])
Z([3,'background: red;'])
Z([3,'_view data-v-51935736 scroll-view-item_H bc_yellow'])
Z([3,'yellow'])
Z(z[7])
Z([3,'_view data-v-51935736 scroll-view-item_H bc_blue'])
Z([3,'blue'])
Z([3,'background: blue;'])
Z([3,'_view data-v-51935736'])
Z([a,[3,'分类 '],[[7],[3,'badgeCount']]])
Z([3,'_view data-v-51935736 icon-add_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3eb11e7f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3881165f'])
Z([3,'_view data-v-8d8cd6d4 container'])
Z([3,'_view data-v-8d8cd6d4 body-container'])
Z([[7],[3,'autoplay']])
Z([[7],[3,'circular']])
Z([3,'_swiper data-v-8d8cd6d4 banner-container'])
Z([[7],[3,'duration']])
Z([[7],[3,'gcolor']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemList']])
Z(z[11])
Z([3,'_swiper-item data-v-8d8cd6d4'])
Z([[7],[3,'item']])
Z([3,'_image data-v-8d8cd6d4 swiper-image'])
Z(z[15])
Z([3,'_view data-v-8d8cd6d4 group-container'])
Z([3,'_image data-v-8d8cd6d4 group-big'])
Z([3,'../../static/imgs/group0.jpg'])
Z([3,'_view data-v-8d8cd6d4 group-small'])
Z([3,'_image data-v-8d8cd6d4 group-img-small'])
Z([3,'../../static/imgs/group1.jpg'])
Z(z[22])
Z(z[23])
Z([3,'_view data-v-8d8cd6d4 new-container'])
Z([3,'_image data-v-8d8cd6d4 new-img'])
Z([3,'../../static/imgs/newPush.jpg'])
Z([3,'_view data-v-8d8cd6d4 hot-container'])
Z([3,'_view data-v-8d8cd6d4 hot-header'])
Z([3,'_image data-v-8d8cd6d4 hot-logo'])
Z([3,'../../static/imgs/hot.png'])
Z([3,'_text data-v-8d8cd6d4'])
Z([3,'火爆热销'])
Z([3,'_view data-v-8d8cd6d4 hot-content'])
Z([3,'idx'])
Z([3,'hot'])
Z([[7],[3,'hotList']])
Z(z[36])
Z([3,'_view data-v-8d8cd6d4 hot-list'])
Z([[7],[3,'idx']])
Z([3,'_image data-v-8d8cd6d4 hot-image'])
Z([[6],[[7],[3,'hot']],[3,'image']])
Z([3,'_view data-v-8d8cd6d4 hot-title'])
Z([a,[[6],[[7],[3,'hot']],[3,'title']]])
Z([3,'_view data-v-8d8cd6d4 hot-price-wrap'])
Z([3,'handleProxy'])
Z([3,'_radio-group data-v-8d8cd6d4 radio-group'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'0-'],[[7],[3,'idx']]])
Z([3,'idx_sub'])
Z(z[11])
Z([[6],[[7],[3,'hot']],[3,'buy_chioce']])
Z(z[11])
Z([3,'_view data-v-8d8cd6d4'])
Z(z[15])
Z([3,'_view data-v-8d8cd6d4 price-row'])
Z([[2,'>'],[[6],[[6],[[7],[3,'hot']],[3,'buy_chioce']],[3,'length']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'price']],[[6],[[7],[3,'hot']],[3,'price']]])
Z([3,'_radio data-v-8d8cd6d4'])
Z([3,'#D43030'])
Z([[7],[3,'idx_sub']])
Z([3,'_text data-v-8d8cd6d4 hot-price'])
Z([a,[3,'￥'],[[6],[[7],[3,'item']],[3,'price']]])
Z(z[33])
Z([a,[3,'/'],[[6],[[7],[3,'item']],[3,'unit']]])
Z(z[55])
Z(z[47])
Z([3,'_button data-v-8d8cd6d4'])
Z(z[49])
Z([1,'1'])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'button'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3881165f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'15c46b62'])
Z([3,'_view data-v-2e61a318 container'])
Z([3,'_view data-v-2e61a318 body-container'])
Z([3,'index'])
Z([3,'list'])
Z([[7],[3,'msgList']])
Z(z[3])
Z([3,'_view data-v-2e61a318 lists'])
Z([[7],[3,'index']])
Z([3,'_view data-v-2e61a318 name'])
Z([a,[[6],[[7],[3,'list']],[3,'name']]])
Z([3,'_view data-v-2e61a318 date'])
Z([a,[[6],[[7],[3,'list']],[3,'date']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'15c46b62'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b0d59f02'])
Z([3,'_view data-v-24bd1976'])
Z([3,'\n	我的\n'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b0d59f02'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'36caed1e'])
Z([3,'_view data-v-38a5ba62 container'])
Z([3,'_view data-v-38a5ba62 body-container'])
Z([3,'\n		shopping_list\n	'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'36caed1e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/cartcontrol.vue.wxml','./components/slots.wxml','/components/cartcontrol.vue.wxml','./pages/cart/cart.vue.wxml','./pages/cart/cart.wxml','/pages/cart/cart.vue.wxml','./pages/classify/classify.vue.wxml','./pages/classify/classify.wxml','/pages/classify/classify.vue.wxml','./pages/home/home.vue.wxml','./pages/home/home.wxml','/pages/home/home.vue.wxml','./pages/home/message/message.vue.wxml','./pages/home/message/message.wxml','/pages/home/message/message.vue.wxml','./pages/me/me.vue.wxml','./pages/me/me.wxml','/pages/me/me.vue.wxml','./pages/shopping_list/shopping_list.vue.wxml','./pages/shopping_list/shopping_list.wxml','/pages/shopping_list/shopping_list.vue.wxml'];d_[x[0]]={}
d_[x[0]]["1321aa0c"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':1321aa0c'
r.wxVkey=b
gg.f=$gdc(f_["./components/cartcontrol.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./components/cartcontrol.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/cartcontrol.vue.wxml:view:1:74")
cs.push("./components/cartcontrol.vue.wxml:view:1:74")
var fE=_mz(z,'view',['bindtap',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/cartcontrol.vue.wxml:label:1:214")
var cF=_n('label')
_rz(z,cF,'class',7,e,s,gg)
cs.pop()
_(fE,cF)
cs.pop()
_(xC,fE)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
cs.push("./components/cartcontrol.vue.wxml:view:1:300")
cs.push("./components/cartcontrol.vue.wxml:view:1:300")
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
var oH=_oz(z,10,e,s,gg)
_(hG,oH)
cs.pop()
_(oD,hG)
cs.pop()
}
cs.push("./components/cartcontrol.vue.wxml:view:1:393")
var cI=_mz(z,'view',['bindtap',11,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/cartcontrol.vue.wxml:label:1:503")
var oJ=_n('label')
_rz(z,oJ,'class',15,e,s,gg)
cs.pop()
_(cI,oJ)
cs.pop()
_(oB,cI)
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=e_[x[1]].i
_ai(xC,x[2],e_,x[1],2,2)
xC.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
d_[x[3]]["7a5e86ff"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':7a5e86ff'
r.wxVkey=b
gg.f=$gdc(f_["./pages/cart/cart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./pages/cart/cart.vue.wxml:view:1:76")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/cart/cart.vue.wxml:view:1:122")
cs.push("./pages/cart/cart.vue.wxml:view:1:122")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
cs.push("./pages/cart/cart.vue.wxml:image:1:200")
var cF=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.push("./pages/cart/cart.vue.wxml:text:1:286")
var hG=_n('text')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(fE,hG)
cs.push("./pages/cart/cart.vue.wxml:text:1:356")
var cI=_mz(z,'text',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_oz(z,12,e,s,gg)
_(cI,oJ)
cs.pop()
_(fE,cI)
cs.pop()
_(xC,fE)
cs.pop()
}
cs.push("./pages/cart/cart.vue.wxml:view:1:489")
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
var aL=_v()
_(lK,aL)
cs.push("./pages/cart/cart.vue.wxml:view:1:540")
var tM=function(bO,eN,oP,gg){
cs.push("./pages/cart/cart.vue.wxml:view:1:540")
var oR=_mz(z,'view',['class',18,'key',1],[],bO,eN,gg)
cs.push("./pages/cart/cart.vue.wxml:image:1:668")
var fS=_mz(z,'image',['mode',-1,'class',20,'src',1],[],bO,eN,gg)
cs.pop()
_(oR,fS)
cs.push("./pages/cart/cart.vue.wxml:view:1:752")
var cT=_n('view')
_rz(z,cT,'class',22,bO,eN,gg)
cs.push("./pages/cart/cart.vue.wxml:view:1:798")
var hU=_n('view')
_rz(z,hU,'class',23,bO,eN,gg)
var oV=_oz(z,24,bO,eN,gg)
_(hU,oV)
cs.pop()
_(cT,hU)
cs.push("./pages/cart/cart.vue.wxml:view:1:867")
var cW=_n('view')
_rz(z,cW,'class',25,bO,eN,gg)
cs.push("./pages/cart/cart.vue.wxml:text:1:903")
var oX=_n('text')
_rz(z,oX,'class',26,bO,eN,gg)
var lY=_oz(z,27,bO,eN,gg)
_(oX,lY)
cs.pop()
_(cW,oX)
cs.push("./pages/cart/cart.vue.wxml:text:1:974")
var aZ=_n('text')
_rz(z,aZ,'class',28,bO,eN,gg)
var t1=_oz(z,29,bO,eN,gg)
_(aZ,t1)
cs.pop()
_(cW,aZ)
cs.pop()
_(cT,cW)
cs.pop()
_(oR,cT)
cs.push("./pages/cart/cart.vue.wxml:image:1:1056")
var e2=_mz(z,'image',['mode',-1,'bindtap',30,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],bO,eN,gg)
cs.pop()
_(oR,e2)
var b3=_v()
_(oR,b3)
cs.push("./pages/cart/cart.vue.wxml:template:1:1223")
var o4=_oz(z,39,bO,eN,gg)
var x5=_gd(x[3],o4,e_,d_)
if(x5){
var o6=_1z(z,36,bO,eN,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[3],1,1352)
cs.pop()
cs.pop()
_(oP,oR)
return oP
}
aL.wxXCkey=2
_2z(z,16,tM,e,s,gg,aL,'cart','idx','idx')
cs.pop()
cs.pop()
_(oB,lK)
var oD=_v()
_(oB,oD)
if(_oz(z,40,e,s,gg)){oD.wxVkey=1
cs.push("./pages/cart/cart.vue.wxml:view:1:1390")
cs.push("./pages/cart/cart.vue.wxml:view:1:1390")
var f7=_n('view')
_rz(z,f7,'class',41,e,s,gg)
cs.push("./pages/cart/cart.vue.wxml:view:1:1471")
var c8=_n('view')
_rz(z,c8,'class',42,e,s,gg)
cs.push("./pages/cart/cart.vue.wxml:view:1:1517")
var h9=_n('view')
_rz(z,h9,'class',43,e,s,gg)
var o0=_oz(z,44,e,s,gg)
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./pages/cart/cart.vue.wxml:view:1:1613")
var cAB=_n('view')
_rz(z,cAB,'class',45,e,s,gg)
var oBB=_oz(z,46,e,s,gg)
_(cAB,oBB)
cs.pop()
_(c8,cAB)
cs.pop()
_(f7,c8)
cs.push("./pages/cart/cart.vue.wxml:button:1:1694")
var lCB=_mz(z,'button',['bindtap',47,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var aDB=_oz(z,53,e,s,gg)
_(lCB,aDB)
cs.pop()
_(f7,lCB)
cs.pop()
_(oD,f7)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[3]].i
_ai(fE,x[2],e_,x[3],1,1)
fE.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=e_[x[4]].i
_ai(hG,x[5],e_,x[4],1,1)
var oH=_v()
_(r,oH)
cs.push("./pages/cart/cart.wxml:template:1:43")
var cI=_oz(z,1,e,s,gg)
var oJ=_gd(x[4],cI,e_,d_)
if(oJ){
var lK=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[4],1,55)
cs.pop()
hG.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["3eb11e7f"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[6]+':3eb11e7f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/classify/classify.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./pages/classify/classify.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/classify/classify.vue.wxml:view:1:73")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/classify/classify.vue.wxml:scroll-view:1:124")
var oD=_mz(z,'scroll-view',['scrollX',-1,'class',3,'style',1],[],e,s,gg)
cs.push("./pages/classify/classify.vue.wxml:view:1:218")
var fE=_mz(z,'view',['class',5,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.push("./pages/classify/classify.vue.wxml:view:1:328")
var cF=_mz(z,'view',['class',8,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oD,cF)
cs.push("./pages/classify/classify.vue.wxml:view:1:432")
var hG=_mz(z,'view',['class',11,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oD,hG)
cs.push("./pages/classify/classify.vue.wxml:view:1:544")
var oH=_mz(z,'view',['class',14,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oD,oH)
cs.pop()
_(xC,oD)
cs.push("./pages/classify/classify.vue.wxml:view:1:665")
var cI=_n('view')
_rz(z,cI,'class',17,e,s,gg)
var oJ=_oz(z,18,e,s,gg)
_(cI,oJ)
cs.pop()
_(xC,cI)
cs.push("./pages/classify/classify.vue.wxml:view:1:730")
var lK=_n('view')
_rz(z,lK,'class',19,e,s,gg)
cs.pop()
_(xC,lK)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var eN=e_[x[7]].i
_ai(eN,x[8],e_,x[7],1,1)
var bO=_v()
_(r,bO)
cs.push("./pages/classify/classify.wxml:template:1:51")
var oP=_oz(z,1,e,s,gg)
var xQ=_gd(x[7],oP,e_,d_)
if(xQ){
var oR=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[7],1,63)
cs.pop()
eN.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["3881165f"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[9]+':3881165f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/home/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/home/home.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/home/home.vue.wxml:view:1:73")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/home/home.vue.wxml:swiper:1:124")
var oD=_mz(z,'swiper',['autoplay',3,'circular',1,'class',2,'duration',3,'indicatorActiveColor',4,'indicatorDots',5,'interval',6],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/home/home.vue.wxml:swiper-item:1:348")
var cF=function(oH,hG,cI,gg){
cs.push("./pages/home/home.vue.wxml:swiper-item:1:348")
var lK=_mz(z,'swiper-item',['class',14,'key',1],[],oH,hG,gg)
cs.push("./pages/home/home.vue.wxml:image:1:489")
var aL=_mz(z,'image',['mode',-1,'class',16,'src',1],[],oH,hG,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,12,cF,e,s,gg,fE,'item','index','item')
cs.pop()
cs.pop()
_(xC,oD)
cs.push("./pages/home/home.vue.wxml:view:1:592")
var tM=_n('view')
_rz(z,tM,'class',18,e,s,gg)
cs.push("./pages/home/home.vue.wxml:image:1:644")
var eN=_mz(z,'image',['mode',-1,'class',19,'src',1],[],e,s,gg)
cs.pop()
_(tM,eN)
cs.push("./pages/home/home.vue.wxml:view:1:741")
var bO=_n('view')
_rz(z,bO,'class',21,e,s,gg)
cs.push("./pages/home/home.vue.wxml:image:1:789")
var oP=_mz(z,'image',['mode',-1,'class',22,'src',1],[],e,s,gg)
cs.pop()
_(bO,oP)
cs.push("./pages/home/home.vue.wxml:image:1:892")
var xQ=_mz(z,'image',['mode',-1,'class',24,'src',1],[],e,s,gg)
cs.pop()
_(bO,xQ)
cs.pop()
_(tM,bO)
cs.pop()
_(xC,tM)
cs.push("./pages/home/home.vue.wxml:view:1:1009")
var oR=_n('view')
_rz(z,oR,'class',26,e,s,gg)
cs.push("./pages/home/home.vue.wxml:image:1:1059")
var fS=_mz(z,'image',['mode',-1,'class',27,'src',1],[],e,s,gg)
cs.pop()
_(oR,fS)
cs.pop()
_(xC,oR)
cs.push("./pages/home/home.vue.wxml:view:1:1162")
var cT=_n('view')
_rz(z,cT,'class',29,e,s,gg)
cs.push("./pages/home/home.vue.wxml:view:1:1212")
var hU=_n('view')
_rz(z,hU,'class',30,e,s,gg)
cs.push("./pages/home/home.vue.wxml:image:1:1259")
var oV=_mz(z,'image',['mode',-1,'class',31,'src',1],[],e,s,gg)
cs.pop()
_(hU,oV)
cs.push("./pages/home/home.vue.wxml:text:1:1352")
var cW=_n('text')
_rz(z,cW,'class',33,e,s,gg)
var oX=_oz(z,34,e,s,gg)
_(cW,oX)
cs.pop()
_(hU,cW)
cs.pop()
_(cT,hU)
cs.push("./pages/home/home.vue.wxml:view:1:1415")
var lY=_n('view')
_rz(z,lY,'class',35,e,s,gg)
var aZ=_v()
_(lY,aZ)
cs.push("./pages/home/home.vue.wxml:view:1:1463")
var t1=function(b3,e2,o4,gg){
cs.push("./pages/home/home.vue.wxml:view:1:1463")
var o6=_mz(z,'view',['class',40,'key',1],[],b3,e2,gg)
cs.push("./pages/home/home.vue.wxml:image:1:1593")
var f7=_mz(z,'image',['mode',-1,'class',42,'src',1],[],b3,e2,gg)
cs.pop()
_(o6,f7)
cs.push("./pages/home/home.vue.wxml:view:1:1675")
var c8=_n('view')
_rz(z,c8,'class',44,b3,e2,gg)
var h9=_oz(z,45,b3,e2,gg)
_(c8,h9)
cs.pop()
_(o6,c8)
cs.push("./pages/home/home.vue.wxml:view:1:1742")
var o0=_n('view')
_rz(z,o0,'class',46,b3,e2,gg)
cs.push("./pages/home/home.vue.wxml:radio-group:1:1793")
var cAB=_mz(z,'radio-group',['bindchange',47,'class',1,'data-comkey',2,'data-eventid',3],[],b3,e2,gg)
var oBB=_v()
_(cAB,oBB)
cs.push("./pages/home/home.vue.wxml:view:1:1929")
var lCB=function(tEB,aDB,eFB,gg){
cs.push("./pages/home/home.vue.wxml:view:1:1929")
var oHB=_mz(z,'view',['class',55,'key',1],[],tEB,aDB,gg)
cs.push("./pages/home/home.vue.wxml:view:1:2064")
var xIB=_n('view')
_rz(z,xIB,'class',57,tEB,aDB,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,58,tEB,aDB,gg)){oJB.wxVkey=1
cs.push("./pages/home/home.vue.wxml:radio:1:2110")
cs.push("./pages/home/home.vue.wxml:radio:1:2110")
var fKB=_mz(z,'radio',['checked',59,'class',1,'color',2,'value',3],[],tEB,aDB,gg)
cs.pop()
_(oJB,fKB)
cs.pop()
}
cs.push("./pages/home/home.vue.wxml:text:1:2258")
var cLB=_n('text')
_rz(z,cLB,'class',63,tEB,aDB,gg)
var hMB=_oz(z,64,tEB,aDB,gg)
_(cLB,hMB)
cs.pop()
_(xIB,cLB)
cs.push("./pages/home/home.vue.wxml:text:1:2328")
var oNB=_n('text')
_rz(z,oNB,'class',65,tEB,aDB,gg)
var cOB=_oz(z,66,tEB,aDB,gg)
_(oNB,cOB)
cs.pop()
_(xIB,oNB)
oJB.wxXCkey=1
cs.pop()
_(oHB,xIB)
cs.pop()
_(eFB,oHB)
return eFB
}
oBB.wxXCkey=2
_2z(z,53,lCB,b3,e2,gg,oBB,'item','idx_sub','item')
cs.pop()
cs.pop()
_(o0,cAB)
cs.pop()
_(o6,o0)
cs.pop()
_(o4,o6)
return o4
}
aZ.wxXCkey=2
_2z(z,38,t1,e,s,gg,aZ,'hot','idx','idx')
cs.pop()
cs.pop()
_(cT,lY)
cs.pop()
_(xC,cT)
cs.push("./pages/home/home.vue.wxml:view:1:2442")
var oPB=_n('view')
_rz(z,oPB,'class',67,e,s,gg)
cs.push("./pages/home/home.vue.wxml:button:1:2478")
var lQB=_mz(z,'button',['bindtap',68,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var aRB=_oz(z,74,e,s,gg)
_(lQB,aRB)
cs.pop()
_(oPB,lQB)
cs.pop()
_(xC,oPB)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hU=e_[x[10]].i
_ai(hU,x[11],e_,x[10],1,1)
var oV=_v()
_(r,oV)
cs.push("./pages/home/home.wxml:template:1:43")
var cW=_oz(z,1,e,s,gg)
var oX=_gd(x[10],cW,e_,d_)
if(oX){
var lY=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[10],1,55)
cs.pop()
hU.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["15c46b62"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[12]+':15c46b62'
r.wxVkey=b
gg.f=$gdc(f_["./pages/home/message/message.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/home/message/message.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/home/message/message.vue.wxml:view:1:73")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/home/message/message.vue.wxml:view:1:124")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/home/message/message.vue.wxml:view:1:124")
var oJ=_mz(z,'view',['class',7,'key',1],[],hG,cF,gg)
cs.push("./pages/home/message/message.vue.wxml:view:1:258")
var lK=_n('view')
_rz(z,lK,'class',9,hG,cF,gg)
var aL=_oz(z,10,hG,cF,gg)
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./pages/home/message/message.vue.wxml:view:1:320")
var tM=_n('view')
_rz(z,tM,'class',11,hG,cF,gg)
var eN=_oz(z,12,hG,cF,gg)
_(tM,eN)
cs.pop()
_(oJ,tM)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,5,fE,e,s,gg,oD,'list','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e2=e_[x[13]].i
_ai(e2,x[14],e_,x[13],1,1)
var b3=_v()
_(r,b3)
cs.push("./pages/home/message/message.wxml:template:1:54")
var o4=_oz(z,1,e,s,gg)
var x5=_gd(x[13],o4,e_,d_)
if(x5){
var o6=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[13],1,66)
cs.pop()
e2.pop()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["b0d59f02"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[15]+':b0d59f02'
r.wxVkey=b
gg.f=$gdc(f_["./pages/me/me.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./pages/me/me.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_oz(z,2,e,s,gg)
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var h9=e_[x[16]].i
_ai(h9,x[17],e_,x[16],1,1)
var o0=_v()
_(r,o0)
cs.push("./pages/me/me.wxml:template:1:39")
var cAB=_oz(z,1,e,s,gg)
var oBB=_gd(x[16],cAB,e_,d_)
if(oBB){
var lCB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0.wxXCkey=3
oBB(lCB,lCB,o0,gg)
gg.f=cur_globalf
}
else _w(cAB,x[16],1,51)
cs.pop()
h9.pop()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["36caed1e"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[18]+':36caed1e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shopping_list/shopping_list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
cs.push("./pages/shopping_list/shopping_list.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/shopping_list/shopping_list.vue.wxml:view:1:73")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var eFB=e_[x[19]].i
_ai(eFB,x[20],e_,x[19],1,1)
var bGB=_v()
_(r,bGB)
cs.push("./pages/shopping_list/shopping_list.wxml:template:1:61")
var oHB=_oz(z,1,e,s,gg)
var xIB=_gd(x[19],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[19],1,73)
cs.pop()
eFB.pop()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[x[20]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [["body{min-height:100%}\n.",[1],"header-container{-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;padding:",[0,60]," ",[0,10]," ",[0,20],";font-size:",[0,28],";position:fixed;width:100%;height:",[0,40],";left:0;top:0;z-index:999}\n.",[1],"header-btns,.",[1],"header-container{display:-webkit-box;display:-webkit-flex;display:flex}\n.",[1],"header-btns{width:",[0,100],";text-align:center;font-size:",[0,24],";-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"header-back{width:",[0,40],";height:",[0,40],";margin-left:",[0,10],"}\n.",[1],"header-title{width:100%;line-height:",[0,52],";text-align:center}\n.",[1],"header-container .",[1],"icon{color:#fff;padding:0 ",[0,10],"}\n.",[1],"header-search-wrapper{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-radius:",[0,30],"}\n.",[1],"header-search-icon{width:",[0,30],";height:",[0,30],";margin:0 ",[0,20],"}\n.",[1],"header-search-content{width:100%}\n.",[1],"body-container{font-size:",[0,28],"}\n@font-face{font-family:icomoon;src:url(\x22https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot\x22);src:url(\x22https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot\x22) format(\x22embedded-opentype\x22),url(\x22https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.ttf\x22) format(\x22truetype\x22),url(\x22https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.woff\x22) format(\x22woff\x22),url(\x22https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.svg\x22) format(\x22svg\x22);font-weight:400;font-style:normal}\n[class*\x3d\x22 icon-\x22],[class^\x3dicon-]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.",[1],"icon-add_circle:before{content:\x22\\E900\x22}\n.",[1],"icon-arrow_lift:before{content:\x22\\E901\x22}\n.",[1],"icon-check_circle:before{content:\x22\\E902\x22}\n.",[1],"icon-close:before{content:\x22\\E903\x22}\n.",[1],"icon-favorite:before{content:\x22\\E904\x22}\n.",[1],"icon-keyboard_arrow_right:before{content:\x22\\E905\x22}\n.",[1],"icon-remove_circle_outline:before{content:\x22\\E906\x22}\n.",[1],"icon-shopping_cart:before{content:\x22\\E907\x22}\n.",[1],"icon-thumb_down:before{content:\x22\\E908\x22}\n.",[1],"icon-thumb_up:before{content:\x22\\E909\x22}\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:1619)",{path:"./app.wxss"})();

;var __pageFrameEndTime__ = Date.now();