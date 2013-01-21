define(function(){var a=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function c(q){for(var p=q.firstChild;p;p=p.nextSibling){if(p.nodeName=="CODE"){return p}if(!(p.nodeType==3&&p.nodeValue.match(/\s+/))){break}}}function i(q,p){return Array.prototype.map.call(q.childNodes,function(r){if(r.nodeType==3){return p?r.nodeValue.replace(/\n/g,""):r.nodeValue}if(r.nodeName=="BR"){return"\n"}return i(r,p)}).join("")}function b(r){var q=(r.className+" "+(r.parentNode?r.parentNode.className:"")).split(/\s+/);q=q.map(function(s){return s.replace(/^language-/,"")});for(var p=0;p<q.length;p++){if(f[q[p]]||q[p]=="no-highlight"){return q[p]}}}function d(r){var p=[];(function q(s,t){for(var u=s.firstChild;u;u=u.nextSibling){if(u.nodeType==3){t+=u.nodeValue.length}else{if(u.nodeName=="BR"){t+=1}else{if(u.nodeType==1){p.push({event:"start",offset:t,node:u});t=q(u,t);p.push({event:"stop",offset:t,node:u})}}}}return t})(r,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(B){function A(C){return" "+C.nodeName+'="'+m(C.value)+'"'}return"<"+B.nodeName+Array.prototype.map.call(B.attributes,A).join("")+">"}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event=="start"){z+=t(v.node);s.push(v.node)}else{if(v.event=="stop"){var p,r=s.length;do{r--;p=s[r];z+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function g(r){function p(t,s){return RegExp(t,"m"+(r.cI?"i":"")+(s?"g":""))}function q(z,x){if(z.compiled){return}z.compiled=true;var u=[];if(z.k){var s={};function A(B,t){t.split(" ").forEach(function(C){var D=C.split("|");s[D[0]]=[B,D[1]?Number(D[1]):1];u.push(D[0])})}z.lR=p(z.l||a.IR+"(?!\\.)",true);if(typeof z.k=="string"){A("keyword",z.k)}else{for(var y in z.k){if(!z.k.hasOwnProperty(y)){continue}A(y,z.k[y])}}z.k=s}if(x){if(z.bWK){z.b="\\b("+u.join("|")+")\\b(?!\\.)\\s*"}z.bR=p(z.b?z.b:"\\B|\\b");if(!z.e&&!z.eW){z.e="\\B|\\b"}if(z.e){z.eR=p(z.e)}z.tE=z.e||"";if(z.eW&&x.tE){z.tE+=(z.e?"|":"")+x.tE}}if(z.i){z.iR=p(z.i)}if(z.r===undefined){z.r=1}if(!z.c){z.c=[]}for(var w=0;w<z.c.length;w++){if(z.c[w]=="self"){z.c[w]=z}q(z.c[w],z)}if(z.starts){q(z.starts,x)}var v=[];for(var w=0;w<z.c.length;w++){v.push(z.c[w].b)}if(z.tE){v.push(z.tE)}if(z.i){v.push(z.i)}z.t=v.length?p(v.join("|"),true):{exec:function(t){return null}}}q(r)}function e(F,G,D){function p(r,O){for(var N=0;N<O.c.length;N++){var M=O.c[N].bR.exec(r);if(M&&M.index==0){return O.c[N]}}}function t(M,r){if(M.e&&M.eR.test(r)){return M}if(M.eW){return t(M.parent,r)}}function u(r,M){return !D&&M.i&&M.iR.test(r)}function z(N,r){var M=H.cI?r[0].toLowerCase():r[0];return N.k.hasOwnProperty(M)&&N.k[M]}function I(){var M=m(x);if(!B.k){return M}var r="";var P=0;B.lR.lastIndex=0;var N=B.lR.exec(M);while(N){r+=M.substr(P,N.index-P);var O=z(B,N);if(O){w+=O[1];r+='<span class="'+O[0]+'">'+N[0]+"</span>"}else{r+=N[0]}P=B.lR.lastIndex;N=B.lR.exec(M)}return r+M.substr(P)}function A(){if(B.sL&&!f[B.sL]){return m(x)}var r=B.sL?e(B.sL,x):h(x);if(B.r>0){w+=r.keyword_count;C+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function L(){return B.sL!==undefined?A():I()}function K(N,r){var M=N.cN?'<span class="'+N.cN+'">':"";if(N.rB){y+=M;x=""}else{if(N.eB){y+=m(r)+M;x=""}else{y+=M;x=r}}B=Object.create(N,{parent:{value:B}});C+=N.r}function E(M,r){x+=M;if(r===undefined){y+=L();return 0}var N=p(r,B);if(N){y+=L();K(N,r);return N.rB?0:r.length}var O=t(B,r);if(O){if(!(O.rE||O.eE)){x+=r}y+=L();do{if(B.cN){y+="</span>"}B=B.parent}while(B!=O.parent);if(O.eE){y+=m(r)}x="";if(O.starts){K(O.starts,"")}return O.rE?0:r.length}if(u(r,B)){throw"Illegal"}x+=r;return r.length||1}var H=f[F];g(H);var B=H;var x="";var C=0;var w=0;var y="";try{var v,s,q=0;while(true){B.t.lastIndex=q;v=B.t.exec(G);if(!v){break}s=E(G.substr(q,v.index-q),v[0]);q=v.index+s}E(G.substr(q));return{r:C,keyword_count:w,value:y,language:F}}catch(J){if(J=="Illegal"){return{r:0,keyword_count:0,value:m(G)}}else{throw J}}}function h(t){var p={keyword_count:0,r:0,value:m(t)};var r=p;for(var q in f){if(!f.hasOwnProperty(q)){continue}var s=e(q,t,false);s.language=q;if(s.keyword_count+s.r>r.keyword_count+r.r){r=s}if(s.keyword_count+s.r>p.keyword_count+p.r){r=p;p=s}}if(r.language){p.second_best=r}return p}function j(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function n(s,v,q){var w=i(s,q);var u=b(s);if(u=="no-highlight"){return}var x=u?e(u,w,true):h(w);u=x.language;var p=d(s);if(p.length){var r=document.createElement("pre");r.innerHTML=x.value;x.value=k(p,d(r),w)}x.value=j(x.value,v,q);var t=s.className;if(!t.match("(\\s|^)(language-)?"+u+"(\\s|$)")){t=t?(t+" "+u):u}s.innerHTML=x.value;s.className=t;s.result={language:u,kw:x.keyword_count,re:x.r};if(x.second_best){s.second_best={language:x.second_best.language,kw:x.second_best.keyword_count,re:x.second_best.r}}}function o(){if(o.called){return}o.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),c).filter(Boolean).forEach(function(p){n(p,a.tabReplace)})}function l(){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}var f={};this.LANGUAGES=f;this.highlight=e;this.highlightAuto=h;this.fixMarkup=j;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();a.LANGUAGES.clojure=function(m){var f={built_in:"def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"};var g="[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";var b="[\\s:\\(\\{]+\\d+(\\.\\d+)?";var e={cN:"number",b:b,r:0};var l={cN:"string",b:'"',e:'"',c:[m.BE],r:0};var p={cN:"comment",b:";",e:"$",r:0};var o={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"};var d={cN:"comment",b:"\\^"+g};var c={cN:"comment",b:"\\^\\{",e:"\\}"};var i={cN:"attribute",b:"[:]"+g};var n={cN:"list",b:"\\(",e:"\\)"};var h={eW:true,eE:true,k:{literal:"true false nil"},r:0};var j={k:f,l:g,cN:"title",b:g,starts:h};n.c=[{cN:"comment",b:"comment"},j];h.c=[n,l,d,c,p,i,o,e];o.c=[n,l,d,p,i,o,e];return{i:"\\S",c:[p,n]}}(a);return a});