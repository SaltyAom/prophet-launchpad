import{S as a,i as n,s as e,e as t,t as o,k as m,c as p,a as i,g as r,d as s,n as l,b as g,I as h,f as d,F as c,J as k,H as u,K as f,j as w,m as j,o as b,v as y,r as v,w as $,E,u as B,L as x,B as A}from"../chunks/vendor-73cfc107.js";function L(a){let n,e,w,j,b,y,v,$;return{c(){n=t("button"),e=t("h6"),w=o(a[3]),j=m(),b=t("div"),this.h()},l(t){n=p(t,"BUTTON",{class:!0,style:!0});var o=i(n);e=p(o,"H6",{class:!0});var m=i(e);w=r(m,a[3]),m.forEach(s),j=l(o),b=p(o,"DIV",{class:!0}),i(b).forEach(s),o.forEach(s),this.h()},h(){g(e,"class","title svelte-1rrdn6t"),g(b,"class",y="overlay "+(a[0]?"--playing":"")+" "+(a[1]?"--loading":"")+" svelte-1rrdn6t"),g(n,"class","button svelte-1rrdn6t"),h(n,"--duration",a[4]+"s")},m(t,o){d(t,n,o),c(n,e),c(e,w),c(n,j),c(n,b),v||($=k(n,"click",(function(){f(a[2])&&a[2].apply(this,arguments)})),v=!0)},p(n,[e]){a=n,3&e&&y!==(y="overlay "+(a[0]?"--playing":"")+" "+(a[1]?"--loading":"")+" svelte-1rrdn6t")&&g(b,"class",y)},i:u,o:u,d(a){a&&s(n),v=!1,$()}}}function T(a,n,e){let{sound:t}=n,o=!1,m=!0,[p,i,r]=t;const s=`/assets/sound/${i}`;let l,g=()=>{};if("undefined"!=typeof window){const a=new AudioContext;let n;fetch(s).then((a=>a.arrayBuffer())).then((n=>a.decodeAudioData(n))).then((t=>{n=t,e(1,m=!1),e(2,g=()=>{l&&clearTimeout(l),e(0,o=!1);const t=a.createBufferSource();t.buffer=n,t.connect(a.destination),requestAnimationFrame((()=>{e(0,o=!0),t.start(),l=setTimeout((()=>{e(0,o=!1),l=null}),1e3*r+750)}))})}))}return a.$$set=a=>{"sound"in a&&e(5,t=a.sound)},[o,m,g,p,r,t]}class C extends a{constructor(a){super(),n(this,a,T,L,e,{sound:5})}}const H=[["สวัสดีครับ","sà-wàt-dee kráp.mp3",1.35],["ท่านสมาชิก","tân sà-maa-chík.mp3",1.35],["ชมรมคนชอบหมี","chom-rom kon chôp mĕe.mp3",1.35],["วันพระวันเจ้าไม่เว้นกันเล้ย","wan prá wan jâo mâi wáyn gan lóie.mp3",3.6],["อยากจะดูแต่หมี","yàak jà doo dtàe mĕe.mp3",1.5],["ทั้งเด็กทั้งผู้ใหญ่","táng dèk táng pôo yài.mp3",1.36],["ตะโกนหาสรรหา","dtà-gohn hăa săn-hăa.mp3",1.75],["ตะโกนหาสรรหาแต่หมี","dtà-gohn hăa săn-hăa dtàe mĕe.mp3",2.55],["ไม่เข้าใจ","mâi kâo jai.mp3",1.9],["ไม่เข้าใจเลยจริงๆ เลย","mâi kâo jai loie jing jing loie.mp3",1.9],["เห้ย","hôie.mp3",1.1],["ทั้งวันเลยวันเนี่ย","táng wan loie wan nîa.mp3",1.3],["ทำงานมีแต่หมีโผล่มาทั้งวันเลย","tam ngaan mee dtàe mĕe plòh maa táng wan loie.mp3",2.9],["ส่งไปให้แล้วก็ยังจะให้ดูอีก","sòng bpai hâi láew gôr yang jà hâi doo èek.mp3",1.8],["หมายความว่าไงเนี่ย คนจังหวัดไหน คนจังหวัดอะไร พวกท่านเนี่ย","măai kwaam wâa ngai nîa kon jang-wàt năi kon jang-wàt à-rai pûak tân nîa.mp3",4.64],["เห้ย ตายแล้ว","hôie dtaai láew.mp3",1.48],["ดูธรรมะธรรมโมมั่งดิ๊ ดูปรัชญาคำคม วิถีชีวิต ปรัชญา ข่มใจข่มกิเลสตัณหา","doo tam-má-tam moh mâng dí doo bpràt-yaa kam kom wí-tĕe chee-wít bpà-ràt-yom kòm jai kòm gì-làyt dtan-hăa.mp3",9.1],["ดูกันมั่งหรือเปล่า","doo gan mâng rĕu bplào.mp3",1.26],["ดูแต่หมี","doo dtàe mĕe.mp3",1.26],["วันพระใหญ่นะ","wan-prá-yài ná.mp3",1.44],["หมีระงบกันทั้งวันทั้งคืนเลย","mĕe rá ngóp gan táng wan táng keun loie.mp3",2.4],["ไม่เข้าใจเลย พวกท่านเป็นยังไง","mâi kâo jai loie pûak tân bpen yang ngai.mp3",2.4],["จัดมาดิ์ เอาแบบเบิ้มๆ น่ะ คือลือน่ะ","jàt maa ao bàep-bêrm nâ keu leu nâ.mp3",4.92],["เป็นอะไรกัน","bpen à-rai gan.mp3",1.26],["ผมไม่เข้าใจจริงเลย","pŏm mâi kâo jai jing loie.mp3",4.12],["เฮ้ยคนที่ใหนพวกท่านเป็นคนจังหวัดอะไรเกิดวันไหนเกิดปีไหนเกิดปีจอหรือปีอะไรครับผมไม่เข้าใจ","hóie kon têe năi pûak tân bpen kon jang-wàt à-rai gèrt wan năi gèrt bpee năi gèrt bpee jor rĕu bpee à-rai kráp pŏm mâi kâo jai.mp3",7.8],["ทำงานทั้งวันละหมีโผล่ทั้งวันเลย","tam ngaan táng wan lá mĕe plòh táng wan loie.mp3",3.56],["ผมไม่เข้าใจเลยจริงๆ","pŏm mâi kâo jai loie jing jing.mp3",4.4],["ตายแล้วพวกท่านมวยกูมาละลาก่อน ดูหมีไปก่อนผมจะดูมวย","dtaai láew pûak tân muay goo maa lá laa gòn doo mĕe bpai gòn pŏm jà doo muay.mp3",4.4],["เจริญในธรรม","jà-rern nai tam.mp3",.5],["ท่านผู้เจริญซึ่งมากไปด้วยปัญญา","tân pôo jà-rern sêung mâak bpai dûay bpan-yaa.mp3",2.4],["ก็เป็นโอกาสอันดีที่ผมจะเอาเบนซ์ CLS 53 มาถ่ายธรรมะ","gôr bpen oh gàat an-dee têe pŏm jà ao bayn CLH hâa-săam maa tàai tam-má.mp3",8],["นี้เป็นการสอนธรรมะนะผู้เจริญ","née bpen gaan sŏn tam-má ná pôo jà-rern.mp3",3.5],["ธรรมะกระตุกจิดกระชากใจ","tam-má grà-dtùk jì-dòk rá chaa jai.mp3",2.5],["มันเป็นแบบนี้ ต้องมีอุปกรณ์","man bpen yàang née dtông mee ù-bpà-gon.mp3",2.7],["หยิบออกมา หยิบออกมา","yìp òk maa yìp òk maa.mp3",3.6],["เห็นแล้วยัง ที่เห็นนี้คือ พลาสติก ที่แขวงผ้า","hĕn láew yang têe hĕn née keu pláat-dtìk têe kwăeng pâa.mp3",8],["มีหมีมีนมนิ","mee hĕe meen-má-née.mp3",1.5],["นี้เป็นการแสดงให้ดูนะท่านผู้เจริญ","née bpen gaan sà-daeng hâi doo ná tân pôo jà-rern.mp3",3],["แบบนี้เรียกว่าชนฉิ่งตีฉิ่ง","bàep née rîak wâa chon chìng dtee-chìng.mp3",3.7],["ท่าทางอย่างนี้เรียกว่ากระเด้าคู่","tâa taang yàang née rîak wâa grà dâo kôo.mp3",3.85],["กระเด้าคนนี้ที่ กระเด้าคนนี้ที","grà dâo-kon-née têe grà dâo-kon-née tee.mp3",3.25],["มันดีไหม?","man dee măi.mp3",.8],["ท่าอย่างนี้เรียกว่าดูดนม","tâa yàang née rîak wâa dòot nom.mp3",2.5],["ดูดนมหน่อย","dòot nom nòi.mp3",2],["ดูดขวาดูดซ้าย","dòot kwăa dòot sáai.mp3",6.1],["แบบนี้เรียกว่าเลียหมี","bàep née rîak wâa lia hĕe.mp3",8.5],["เพราะหมีมันหอมดี","prór hĕe man hŏm dee.mp3",2],["กูมีสองหมี","goo mee sŏng-hĕe.mp3",2],["ดับเบิ้ลหมี","dàp-bêrn hĕe.mp3",1],["หมีหอม หมีอร่อย หมีอร่อยมากเลย น่าเลีย","hĕe-hŏm hĕe-a-long  hĕe-a-long mâak loie nâa lia.mp3",6.5],["ใครจะไปเลียหมีหมา เลียหมีคน เลียหมีหมูหมีควาย กูไม่รู้แต่กูชอบเลียหมีคน","krai jà bpai lia hĕe măa lia hĕe kon lia hĕe mŏo hĕe kwaai goo mâi róo dtàe goo chôp lia hĕe kon.mp3",7.8],["ถ้ามึงชอบเลียหมีหมามึงก็เลียไปไป","tâa meung chôp lia hĕe măa meung gôr lia bpai bpai.mp3",3.1],["เงื่อนโว้ย","ngîan wói.mp3",2.1],["เงื่อนจริงจริ๊ง","ngîan jing jà-ríng.mp3",2.1],["ตรงนี้ก็ฮีๆ ตรงนั้นก็ฮีๆ นี่ก็ฮีนั่นก็ฮีทุกๆที่ก็ฮีๆ","trong née kor hĕe hĕe trong nun kor hĕe hĕe nee kor hĕe nun kor hĕe took took tée kor hĕe hĕe.mp3",5.5],["คุณพี่อยู่ที่ไหนคะ","where are you.mp3",2.1]];function I(a,n,e){const t=a.slice();return t[0]=n[e],t}function S(a){let n,e;return n=new C({props:{sound:a[0]}}),{c(){w(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){b(n,a,t),e=!0},p:u,i(a){e||(y(n.$$.fragment,a),e=!0)},o(a){v(n.$$.fragment,a),e=!1},d(a){$(n,a)}}}function D(a){let n,e,o,r=H,h=[];for(let t=0;t<r.length;t+=1)h[t]=S(I(a,r,t));const c=a=>v(h[a],1,1,(()=>{h[a]=null}));return{c(){n=m(),e=t("main");for(let a=0;a<h.length;a+=1)h[a].c();this.h()},l(a){E('[data-svelte="svelte-k21yd7"]',document.head).forEach(s),n=l(a),e=p(a,"MAIN",{id:!0,class:!0});var t=i(e);for(let n=0;n<h.length;n+=1)h[n].l(t);t.forEach(s),this.h()},h(){document.title="Prophet Launchpad",g(e,"id","launchpad"),g(e,"class","py-2 gap-1 svelte-schaab")},m(a,t){d(a,n,t),d(a,e,t);for(let n=0;n<h.length;n+=1)h[n].m(e,null);o=!0},p(a,[n]){if(0&n){let t;for(r=H,t=0;t<r.length;t+=1){const o=I(a,r,t);h[t]?(h[t].p(o,n),y(h[t],1)):(h[t]=S(o),h[t].c(),y(h[t],1),h[t].m(e,null))}for(A(),t=r.length;t<h.length;t+=1)c(t);B()}},i(a){if(!o){for(let a=0;a<r.length;a+=1)y(h[a]);o=!0}},o(a){h=h.filter(Boolean);for(let n=0;n<h.length;n+=1)v(h[n]);o=!1},d(a){a&&s(n),a&&s(e),x(h,a)}}}export default class extends a{constructor(a){super(),n(this,a,null,D,e,{})}}