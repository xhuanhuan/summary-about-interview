// import './part.html'
// import './style.css'
// var e1=require('./part.html');
// function component1 () {
//   var element = document.createElement('div');
//   let arr=[1,2,3];
//   element.innerHTML =  arr.map(item=>item*3).join(",")
//   return element;
// }
// function component2 () {
//   var element = document.createElement('div');
//   element.innerHTML = e1;
//   return element;
// }
// document.body.appendChild(component1());
// document.body.appendChild(component2());

const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;
    return div;
  }

class Component{
  constructor(props={}){
    this.props=props
  }
  setState(state){
      this.state=state;
      const oldel=this.el;
      this.el=this.renderDOM();
      this.onStateChage(oldel,this.el);
  }


  renderDOM(){
    this.el=createDOMFromString(this.render());
    this.el.addEventListener('click', this.onClick.bind(this), false);
    return this.el;
  }
}

const mont=function(wrapper,elm){
  wrapper.appendChild(elm.renderDOM());
  elm.onStateChage=(oldEl,newEl)=>{
    wrapper.insertBefore(newEl, oldEl);
    wrapper.removeChild(oldEl);
  }
}

class likeButton extends Component{
  constructor(){
    super();
    this.state={isLiked:false}
  }
  onClick(){
    this.setState({
      isLiked:!this.state.isLiked
    })
  }
  render(){
    return `
        <button class='like-btn'>
          <span class='like-text'>${this.props.word || ''} ${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `
  }
}


class colorButton extends Component{
  constructor(){
    super();
    this.state={color:'blue'}
  }
  onClick(){
    this.setState({
      color:this.state.color==='blue'?'orange':'blue'
    })
  }
  render(){
    return `<button style='color:${this.state.color}'>点我改变颜色</button>`
  }
}



const element = document.querySelector('.container');
mont(element,new likeButton());
mont(element,new colorButton());



// const target=document.querySelector('.like-btn');
// const target1=document.querySelector('.like-text');
//  target.addEventListener('click',function(){
//    if(target1.innerHTML==="赞"){
//      target1.innerHTML="取消";
//    }else{
//      target1.innerHTML="赞";
//    }
//  });
