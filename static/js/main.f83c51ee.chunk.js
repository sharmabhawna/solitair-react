(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),o=a.n(c),i=a(1),s=a(2),u=a(5),d=a(4),l=a(6),h=a(10),p=a.n(h),f="blue",b="\ud83c\udca0",g={color:"black",unicode:"\u21ba"},k={color:"black",unicode:"\u034f"},m=function e(t){Object(i.a)(this,e),this.suit=t.suit,this.range=t.range,this.color=t.color,this.unicode=t.unicode},v=function(){function e(t){Object(i.a)(this,e),this.faceDownCards=t,this.openCards=[]}return Object(s.a)(e,[{key:"openCard",value:function(){var e=this.faceDownCards.splice(-1);this.openCards=this.openCards.concat(e)}},{key:"drawCards",value:function(){return this.openCards.slice(-1)}},{key:"removeCards",value:function(e){this.openCards.splice(-e)}},{key:"isEmpty",value:function(){return 0===this.faceDownCards.length}},{key:"refill",value:function(){var e=this.openCards.splice(0).reverse();this.faceDownCards=this.faceDownCards.concat(e)}}]),e}(),C=function(){function e(){Object(i.a)(this,e),this.cards=[]}return Object(s.a)(e,[{key:"addCards",value:function(e){return!!this.canBeAdded(e[0])&&(this.cards=this.cards.concat(e),!0)}},{key:"drawCards",value:function(){return this.cards.slice(-1)}},{key:"removeCards",value:function(e){return this.cards.splice(-e)}},{key:"getTopCard",value:function(){return this.cards[this.cards.length-1]}},{key:"canBeAdded",value:function(e){if(0===this.cards.length)return 1===+e.range;var t=this.getTopCard();return e.suit===t.suit&&+e.range-1===+t.range}}]),e}(),O=function(){function e(t){Object(i.a)(this,e),this.openCards=t.slice(-1),this.faceDownCards=t.slice(0,t.length-1)}return Object(s.a)(e,[{key:"openCard",value:function(){var e=this.faceDownCards.splice(-1);this.openCards=this.openCards.concat(e)}},{key:"addCards",value:function(e){return!!this.canBeAdded(e[0])&&(this.openCards=this.openCards.concat(e),!0)}},{key:"drawCards",value:function(e){return this.openCards.slice(-e)}},{key:"removeCards",value:function(e){this.openCards.splice(-e),0===this.openCards.length&&this.openCard()}},{key:"getTopCard",value:function(){return this.openCards[this.openCards.length-1]}},{key:"canBeAdded",value:function(e){if(0===this.faceDownCards.length&&0===this.openCards.length)return 13===+e.range;var t=this.getTopCard();return e.color!==t.color&&+e.range+1===+t.range}}]),e}(),j=function(){function e(t){Object(i.a)(this,e),this.deck=t,this.startGame()}return Object(s.a)(e,[{key:"createStack",value:function(){return new v(this.deck.splice(0,24))}},{key:"createFoundations",value:function(){for(var e=[],t=1;t<=4;)e.push(new C(t)),t++;return e}},{key:"createWastepiles",value:function(){for(var e=[],t=1;t<=7;)e.push(new O(this.deck.splice(0,t),t)),t++;return e}},{key:"startGame",value:function(){this.stack=this.createStack(),this.wastePiles=this.createWastepiles(),this.foundations=this.createFoundations()}}]),e}(),w=a(11),y=a(3),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.card,a=e.id,r=e.onClick,c=e.className;return n.a.createElement("div",{className:"card "+c,id:a,onClick:r},t.unicode)}}]),t}(r.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.card,a=e.id,r=e.className,c=e.drag;return n.a.createElement("div",{key:t.id,id:a,className:"card "+t.color+" "+r,draggable:"true",onDragStart:c},t.unicode)}}]),t}(r.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.className,r=e.onClick;return n.a.createElement("div",{id:t,className:"card "+f+a,onClick:r},b)}}]),t}(r.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={stack:e.stack},a.openCard=a.openCard.bind(Object(y.a)(Object(y.a)(a))),a.refillStack=a.refillStack.bind(Object(y.a)(Object(y.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"openCard",value:function(){this.state.stack.openCard(),this.updateStack()}},{key:"refillStack",value:function(){this.state.stack.refill(),this.updateStack()}},{key:"updateStack",value:function(){this.setState({stack:this.state.stack})}},{key:"renderFaceDownCard",value:function(e,t){return 0===this.state.stack.faceDownCards.length?n.a.createElement(D,{card:g,className:"smaller-font",onClick:t}):n.a.createElement(N,{className:" clickable",onClick:e})}},{key:"renderOpenCard",value:function(e){if(0===this.state.stack.openCards.length)return n.a.createElement(D,{card:k,className:"transparent"});var t=this.state.stack.openCards.length-1;return n.a.createElement(E,{card:this.state.stack.openCards[t],id:"stack",drag:e})}},{key:"render",value:function(){var e=this.props.drag;return n.a.createElement("div",{className:"stack"},this.renderFaceDownCard(this.openCard,this.refillStack),this.renderOpenCard(e))}}]),t}(r.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={foundation:e.foundation},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderCard",value:function(e,t){if(0===this.state.foundation.cards.length)return n.a.createElement(D,{card:k,id:e,className:"transparent"});var a=this.state.foundation.cards.length-1;return n.a.createElement(E,{card:this.state.foundation.cards[a],id:e+"_1",drag:t})}},{key:"render",value:function(){var e=this.props,t=e.drag,a=e.allowDrop,r=e.drop,c=e.id;return n.a.createElement("div",{id:c,className:"foundation",onDragOver:a,onDrop:r},this.renderCard(c,t))}}]),t}(r.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).foundations=e.foundations,a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.drag,a=e.allowDrop,r=e.drop;return n.a.createElement("div",{className:"foundations"},this.foundations.map(function(e,c){return n.a.createElement(P,{key:"foundation"+c,id:"foundation_"+c,foundation:e,drag:t,allowDrop:a,drop:r})}))}}]),t}(r.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={wastePile:e.wastePile},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderCards",value:function(e,t){var a=this.state.wastePile.openCards.length,r=this.state.wastePile.faceDownCards.map(function(e,t){return n.a.createElement(N,{key:"wastepile_facedown"+t,className:" adjustable"})}),c=this.state.wastePile.openCards.map(function(r,c){return n.a.createElement(E,{key:"wastepile_open"+c,id:e+"_"+(a-c),card:r,className:"adjustable",drag:t})}),o=r.concat(c);return 0===o.length?n.a.createElement(D,{card:k,id:e,className:"adjustable transparent"}):o}},{key:"render",value:function(){var e=this.props,t=e.drag,a=e.allowDrop,r=e.drop,c=e.id;return n.a.createElement("div",{id:c,className:"waste-pile",onDragOver:a,onDrop:r},this.renderCards(c,t))}}]),t}(r.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).wastePiles=e.wastePiles,a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.drag,a=e.allowDrop,r=e.drop;return n.a.createElement("div",{className:"waste-piles"},this.wastePiles.map(function(e,c){return n.a.createElement(_,{key:"wastepile"+c,id:"wastepile_"+c,wastePile:e,drag:t,allowDrop:a,drop:r})}))}}]),t}(r.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={game:e.game},a.drag=a.drag.bind(Object(y.a)(Object(y.a)(a))),a.drop=a.drop.bind(Object(y.a)(Object(y.a)(a))),a.allowDrop=a.allowDrop.bind(Object(y.a)(Object(y.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"drag",value:function(e){e.dataTransfer.setData("text",e.target.id)}},{key:"drop",value:function(e){e.preventDefault();var t=e.dataTransfer.getData("text");this.moveCards(t,e.target.parentNode.id),this.setState({game:this.state.game})}},{key:"getSource",value:function(e){if("stack"===e)return this.state.game.stack;var t=e.split("_"),a=Object(w.a)(t,2),r=a[0],n=a[1];return"wastepile"===r?this.state.game.wastePiles[n]:this.state.game.foundations[n]}},{key:"getNumberOfCardsToDraw",value:function(e){return e.split("_")[2]}},{key:"moveCards",value:function(e,t){var a=this.getSource(e),r=this.getSource(t);if(r){var n=this.getNumberOfCardsToDraw(e),c=a.drawCards(n);r.addCards(c)&&a.removeCards(c.length)}}},{key:"render",value:function(){return n.a.createElement("main",null,n.a.createElement("nav",null,n.a.createElement(S,{stack:this.state.game.stack,drag:this.drag}),n.a.createElement(T,{foundations:this.state.game.foundations,drag:this.drag,allowDrop:this.allowDrop,drop:this.drop})),n.a.createElement("section",null,n.a.createElement(B,{wastePiles:this.state.game.wastePiles,drag:this.drag,allowDrop:this.allowDrop,drop:this.drop})))}}]),t}(r.Component),F=new j(p.a.shuffle([{suit:"spade",range:"1",color:"black",unicode:"\ud83c\udca1"},{suit:"spade",range:"2",color:"black",unicode:"\ud83c\udca2"},{suit:"spade",range:"3",color:"black",unicode:"\ud83c\udca3"},{suit:"spade",range:"4",color:"black",unicode:"\ud83c\udca4"},{suit:"spade",range:"5",color:"black",unicode:"\ud83c\udca5"},{suit:"spade",range:"6",color:"black",unicode:"\ud83c\udca6"},{suit:"spade",range:"7",color:"black",unicode:"\ud83c\udca7"},{suit:"spade",range:"8",color:"black",unicode:"\ud83c\udca8"},{suit:"spade",range:"9",color:"black",unicode:"\ud83c\udca9"},{suit:"spade",range:"10",color:"black",unicode:"\ud83c\udcaa"},{suit:"spade",range:"11",color:"black",unicode:"\ud83c\udcab"},{suit:"spade",range:"12",color:"black",unicode:"\ud83c\udcad"},{suit:"spade",range:"13",color:"black",unicode:"\ud83c\udcae"},{suit:"club",range:"1",color:"black",unicode:"\ud83c\udcd1"},{suit:"club",range:"2",color:"black",unicode:"\ud83c\udcd2"},{suit:"club",range:"3",color:"black",unicode:"\ud83c\udcd3"},{suit:"club",range:"4",color:"black",unicode:"\ud83c\udcd4"},{suit:"club",range:"5",color:"black",unicode:"\ud83c\udcd5"},{suit:"club",range:"6",color:"black",unicode:"\ud83c\udcd6"},{suit:"club",range:"7",color:"black",unicode:"\ud83c\udcd7"},{suit:"club",range:"8",color:"black",unicode:"\ud83c\udcd8"},{suit:"club",range:"9",color:"black",unicode:"\ud83c\udcd9"},{suit:"club",range:"10",color:"black",unicode:"\ud83c\udcda"},{suit:"club",range:"11",color:"black",unicode:"\ud83c\udcdb"},{suit:"club",range:"12",color:"black",unicode:"\ud83c\udcdd"},{suit:"club",range:"13",color:"black",unicode:"\ud83c\udcde"},{suit:"diamond",range:"1",color:"red",unicode:"\ud83c\udcc1"},{suit:"diamond",range:"2",color:"red",unicode:"\ud83c\udcc2"},{suit:"diamond",range:"3",color:"red",unicode:"\ud83c\udcc3"},{suit:"diamond",range:"4",color:"red",unicode:"\ud83c\udcc4"},{suit:"diamond",range:"5",color:"red",unicode:"\ud83c\udcc5"},{suit:"diamond",range:"6",color:"red",unicode:"\ud83c\udcc6"},{suit:"diamond",range:"7",color:"red",unicode:"\ud83c\udcc7"},{suit:"diamond",range:"8",color:"red",unicode:"\ud83c\udcc8"},{suit:"diamond",range:"9",color:"red",unicode:"\ud83c\udcc9"},{suit:"diamond",range:"10",color:"red",unicode:"\ud83c\udcca"},{suit:"diamond",range:"11",color:"red",unicode:"\ud83c\udccb"},{suit:"diamond",range:"12",color:"red",unicode:"\ud83c\udccd"},{suit:"diamond",range:"13",color:"red",unicode:"\ud83c\udcce"},{suit:"heart",range:"1",color:"red",unicode:"\ud83c\udcb1"},{suit:"heart",range:"2",color:"red",unicode:"\ud83c\udcb2"},{suit:"heart",range:"3",color:"red",unicode:"\ud83c\udcb3"},{suit:"heart",range:"4",color:"red",unicode:"\ud83c\udcb4"},{suit:"heart",range:"5",color:"red",unicode:"\ud83c\udcb5"},{suit:"heart",range:"6",color:"red",unicode:"\ud83c\udcb6"},{suit:"heart",range:"7",color:"red",unicode:"\ud83c\udcb7"},{suit:"heart",range:"8",color:"red",unicode:"\ud83c\udcb8"},{suit:"heart",range:"9",color:"red",unicode:"\ud83c\udcb9"},{suit:"heart",range:"10",color:"red",unicode:"\ud83c\udcba"},{suit:"heart",range:"11",color:"red",unicode:"\ud83c\udcbb"},{suit:"heart",range:"12",color:"red",unicode:"\ud83c\udcbd"},{suit:"heart",range:"13",color:"red",unicode:"\ud83c\udcbe"}]).map(function(e){return new m(e)})),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(A,{game:F})}}]),t}(r.Component);a(18);o.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f83c51ee.chunk.js.map