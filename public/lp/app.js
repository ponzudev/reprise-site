'use strict';
const appStore='https://apps.apple.com/jp/app/reprise-%E3%83%AA%E3%83%97%E3%83%A9%E3%82%A4%E3%82%BA/id6825080777';
document.querySelectorAll('.store-link').forEach(link=>link.href=appStore);
const audio=document.querySelector('#audio');
const ranges=[[.15,2.352],[2.402,8.467],[8.517,14.006]];
const sentences=[...document.querySelectorAll('.sentence')];
const play=document.querySelector('#play'),status=document.querySelector('#status');
let current=0,playing=false,loop=false,gapTimer=null,request=0;
function display(){
 sentences.forEach((b,i)=>{b.classList.toggle('active',i===current);b.setAttribute('aria-current',String(i===current));});
 play.innerHTML=playing?'<svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor"/></svg>':'<svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7z" fill="currentColor"/></svg>';play.setAttribute('aria-label',playing?'一時停止':'再生');
}
function stop(){request++;playing=false;clearTimeout(gapTimer);gapTimer=null;audio.pause();display();}
async function start(index,fromStart=true){
 stop();const id=request;current=index;playing=true;display();
 if(fromStart||audio.currentTime<ranges[index][0]||audio.currentTime>=ranges[index][1])audio.currentTime=ranges[index][0];
 status.textContent=`${index+1}文目を再生中${loop?' · リピート ON':''}`;
 try{await audio.play();if(id!==request&&!playing)audio.pause();}
 catch(error){if(id!==request)return;stop();status.textContent='再生できませんでした。もう一度、再生をタップしてください。';}
}
sentences.forEach((button,i)=>button.addEventListener('click',()=>start(i)));
play.addEventListener('click',()=>{if(playing){stop();status.textContent='一時停止中';}else start(current,false);});
document.querySelector('#previous').addEventListener('click',()=>start((current+2)%3));
document.querySelector('#next').addEventListener('click',()=>start((current+1)%3));
document.querySelector('#loop').addEventListener('click',event=>{loop=!loop;event.currentTarget.setAttribute('aria-pressed',String(loop));event.currentTarget.querySelector('span').textContent=`リピート ${loop?'ON':'OFF'}`;if(!loop&&gapTimer){stop();status.textContent='リピートを停止しました';}else status.textContent=loop?'一文のあと、2秒の間を挟んで繰り返します':'リピートをオフにしました';});
const speeds=[1,.8,1.2];let speedIndex=0;
document.querySelector('#speed').addEventListener('click',event=>{speedIndex=(speedIndex+1)%speeds.length;audio.playbackRate=speeds[speedIndex];event.currentTarget.textContent=speeds[speedIndex].toFixed(1)+'×';event.currentTarget.setAttribute('aria-label',`再生速度 ${speeds[speedIndex]}倍`);});
document.querySelector('#hide-text').addEventListener('click',event=>{const hidden=document.querySelector('#sentences').classList.toggle('hidden-text');event.currentTarget.setAttribute('aria-pressed',String(hidden));event.currentTarget.textContent=hidden?'本文を表示':'本文を隠す';});
function tick(){
 const [startTime,endTime]=ranges[current];
 const percent=Math.max(0,Math.min(100,(audio.currentTime-startTime)/(endTime-startTime)*100));
 document.querySelector('#progress').style.width=percent+'%';document.querySelector('.progress-track').setAttribute('aria-valuenow',String(Math.round(percent)));
 if(playing&&!gapTimer&&audio.currentTime>=endTime-.035){audio.pause();if(loop){status.textContent='声に出してみましょう · 2秒後にリピート';gapTimer=setTimeout(()=>{gapTimer=null;start(current);},2000);}else{stop();status.textContent='もう一度聞くか、次の文をタップ';}}
 requestAnimationFrame(tick);
}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();status.textContent='一時停止中';}});
window.addEventListener('pagehide',stop);audio.addEventListener('error',()=>{stop();status.textContent='音声を読み込めません。接続を確認して再度お試しください。';});
display();requestAnimationFrame(tick);
