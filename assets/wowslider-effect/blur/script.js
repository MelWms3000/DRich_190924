// blur
// options.noCanvas - stop using canvas
function ws_blur(n,T,R){function U(m,p,e){wowAnimate(m.css({visibility:"visible"}),{opacity:0},{opacity:1},p,e)}function V(m,p,e){wowAnimate(m,{opacity:1},{opacity:0},p,e)}function S(m,p,e,n){var q=(parseInt(m.parent().css("z-index"))||0)+1;if(H){q=n.getContext("2d");q.drawImage(m.get(0),0,0,p.width,p.height);var g;a:if(m=n.width,p=n.height,isNaN(e)||1>e)g=void 0;else{e|=0;try{g=q.getImageData(0,0,m,p)}catch(D){console.log("error:unable to access image data: "+D);g=!1;break a}var d=g.data,z,G,a,c,
f,E,h,k,l,A,B,C,r,t,u,w,x,y,I;z=e+e+1;var P=m-1,J=p-1,v=e+1,K=v*(v+1)/2,L=new Q,b=L;for(a=1;a<z;a++)if(b=b.next=new Q,a==v)var O=b;b.next=L;b=a=null;E=f=0;var M=Z[e],N=aa[e];for(G=0;G<p;G++){r=t=u=h=k=l=0;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;for(a=1;a<v;a++)c=f+((P<a?P:a)<<2),h+=(b.r=w=d[c])*(I=v-a),k+=(b.g=x=d[c+1])*I,l+=(b.b=y=d[c+2])*I,r+=w,t+=x,u+=y,b=b.next;a=L;b=O;for(z=0;z<m;z++)d[f]=h*M>>N,d[f+1]=k*M>>N,d[f+2]=l*M>>
N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=E+((c=z+e+1)<P?c:P)<<2,r+=a.r=d[c],t+=a.g=d[c+1],u+=a.b=d[c+2],h+=r,k+=t,l+=u,a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=4;E+=m}for(z=0;z<m;z++){t=u=r=k=l=h=0;f=z<<2;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;c=m;for(a=1;a<=e;a++)f=c+z<<2,h+=(b.r=w=d[f])*(I=v-a),k+=(b.g=x=d[f+1])*I,l+=(b.b=y=d[f+2])*I,r+=w,t+=x,u+=y,b=b.next,a<J&&(c+=m);f=z;a=L;b=O;for(G=0;G<p;G++)c=f<<2,
d[c]=h*M>>N,d[c+1]=k*M>>N,d[c+2]=l*M>>N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=z+((c=G+v)<J?c:J)*m<<2,h+=r+=a.r=d[c],k+=t+=a.g=d[c+1],l+=u+=a.b=d[c+2],a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=m}q.putImageData(g,0,0);g=!0}return g?F(n):0}n=F("<div></div>").css({position:"absolute","z-index":q,left:0,top:0,display:"none"}).css(p).appendTo(X);g=(Math.sqrt(5)+1)/2;O=1-g/2;for(c=0;O*c<e;c++)d=Math.PI*g*c,J=O*c+1,p=J*Math.cos(d),d=J*Math.sin(d),F(document.createElement("img")).attr("src",
m.attr("src")).css({opacity:1/(c/1.8+1),position:"absolute","z-index":q,left:Math.round(p)+"px",top:Math.round(d)+"px",width:"100%",height:"100%"}).appendTo(n);return n}function Q(){this.a=this.b=this.g=this.r=0;this.next=null}var F=jQuery,Y=F(this),X=F("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(R),H=!n.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(H)try{document.createElement("canvas").getContext("2d").getImageData(0,
0,1,1)}catch(ba){H=0}var D,E;this.go=function(m,p){if(E)return-1;E=1;var e=F(T.get(p)),Q=F(T.get(m)),q={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")},g;H&&(D||(D='<canvas width="'+q.width+'" height="'+q.height+'"/>',D=F(D+D).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(X)),D.css(q).attr({width:q.width,height:q.height}),g=S(e,q,30,D.get(0)));if(H&&g){var W=S(Q,q,30,D.get(1));U(g,n.duration/3,function(){R.find(".ws_list").css({visibility:"hidden"});
V(g,n.duration/6);U(W,n.duration/6,function(){g.css({visibility:"hidden"});R.find(".ws_list").css({visibility:"visible"});Y.trigger("effectEnd",{delay:n.duration/2});V(W,n.duration/2,function(){E=0})})})}else H=0,g=S(e,q,8),g.fadeIn(n.duration/3,"linear",function(){Y.trigger("effectEnd",{delay:n.duration/3});g.fadeOut(n.duration/3,"linear",function(){g.remove();E=0})})};var Z=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,
512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,
337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],aa=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,
24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]};
