
function Dialog(title,content){
  this.title=title;
  this.content=content;
  this.first=true;
}
Dialog.prototype={
  _addStyle:function(){
    var style=document.createElement('style');
    style.innerHTML=`.mask{visibility: hidden;background-color: black;position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.5;}
    .block{visibility: hidden;display:flex;flex-direction:column;background-color: white;width:300px;height:200px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:5px;overflow: hidden;}
    .title{display:flex;flex-direction: row;justify-content: space-between;align-items: center;height:3em;line-height:3em;padding:0 1em;background-color: rgb(180,190,207);}
    .del{width:1em;height:1em;line-height:1em;background-color:rgb(245,180,170);text-align:center;border-radius: 50%;}
    .content{flex-grow: 1;padding:1em;background-color:rgb(245,215,215);}
    .foot{height:3em;padding:0 1em;background-color: rgb(253,231,198);display:flex;flex-direction:row;justify-content: space-between;align-items: center;}
    .btn1{height:2em;background-color: rgb(0,170,160);}
    .btn2{height:2em;background-color: rgb(230,180,90);}`
    document.head.appendChild(style);
  },
  _creatMask:function(){
    var mask=document.createElement('div');
    mask.className='mask';
    document.body.appendChild(mask);
    return mask;
  },
  _creatBlock:function(){
    var block=document.createElement('div');
    block.className='block';
    document.body.appendChild(block);
    return block;
  },
  _createTitle:function(block){
    var title=document.createElement('div');
    title.className='title';
    title.innerHTML='<span>'+this.title+'</span>'+'<div class="del">x</div>';
    block.appendChild(title);
  },
  _creatContent:function(block){
    var content=document.createElement('div');
    content.className='content';
    content.innerHTML=this.content;
    block.appendChild(content);
  },
  _creatFoot:function(block){
    var foot=document.createElement('div');
    foot.className='foot';
    block.appendChild(foot);
    var btn1=document.createElement('button');
    btn1.className="btn1";
    btn1.innerHTML="确定";
    foot.appendChild(btn1);
    var btn2=document.createElement('button');
    btn2.className="btn2";
    btn2.innerHTML="取消";
    foot.appendChild(btn2);
  },
  _init:function(){
    var c1=document.getElementsByClassName('mask')[0];
    var c2=document.getElementsByClassName('block')[0];
    var c3=document.head.getElementsByTagName('style')[0];
    if(c1){
          document.body.removeChild(c1);
    }
    if(c2){
          document.body.removeChild(c2);
    }
    if(c3){
          document.head.removeChild(c3);
    }

    this._addStyle();
    var mask=this._creatMask();
    var block=this. _creatBlock();
    this._createTitle(block);
    this._creatContent(block);
    this._creatFoot(block);
    block.addEventListener('click',function(e){
      if(e.target.className==="btn1"||e.target.className==="btn2"||e.target.className==="del"){
        mask.style.visibility='hidden';
        block.style.visibility='hidden';
      }
      e.stopPropagation();
    },false);
    mask.style.visibility='visible';
    block.style.visibility='visible';
}

  }



function showDialog(){
  var D=new Dialog("this is title","this is content");
  console.log(D);
  D._init();
}
//
//
// function createEl(title,text){
//   var style=document.createElement('style');
//   style.innerHTML=`.mask{visibility: hidden;background-color: black;position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.5;}
//   .block{visibility: hidden;display:flex;flex-direction:column;background-color: white;width:300px;height:200px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:5px;overflow: hidden;}
//   .title{display:flex;flex-direction: row;justify-content: space-between;align-items: center;height:3em;line-height:3em;padding:0 1em;background-color: rgb(180,190,207);}
//   .del{width:1em;height:1em;line-height:1em;background-color:rgb(245,180,170);text-align:center;border-radius: 50%;}
//   .content{flex-grow: 1;padding:1em;background-color:rgb(245,215,215);}
//   .foot{height:3em;padding:0 1em;background-color: rgb(253,231,198);display:flex;flex-direction:row;justify-content: space-between;align-items: center;}
//   .btn1{height:2em;background-color: rgb(0,170,160);}
//   .btn2{height:2em;background-color: rgb(230,180,90);}`
//   document.head.appendChild(style);
//
//   var mask=document.createElement('div');
//   mask.className='mask';
//   document.body.appendChild(mask);
//
//   var block=document.createElement('div');
//   block.className='block';
//   document.body.appendChild(block);
//
//   var title=document.createElement('div');
//   title.className='title';
//   title.innerHTML='<span>'+title+'</span>';
//   block.appendChild(title);
//
//   var del=document.createElement('div');
//   del.className='del';
//   del.innerHTML='x';
//   title.appendChild(del);
//
//   var content=document.createElement('div');
//   content.className='content';
//   content.innerHTML=text;
//   block.appendChild(content);
//
//
//   var foot=document.createElement('div');
//   foot.className='foot';
//   block.appendChild(foot);
//
//
//   var btn1=document.createElement('button');
//   btn1.className="btn1";
//   btn1.innerHTML="确定";
//   foot.appendChild(btn1);
//
//   var btn2=document.createElement('button');
//   btn2.className="btn2";
//   btn2.innerHTML="取消";
//   foot.appendChild(btn2);
// }
//
// function addEvent(){
//   block.addEventListener('click',function(e){
//     if(e.target.className==="btn1"||e.target.className==="btn2"||e.target.className==="del"){
//       mask.style.visibility='hidden';
//       block.style.visibility='hidden';
//     }
//     e.stopPropagation();
//   },false);
// }
