//用纯js实现react

//1,抽象出一个类，需要包含公用的方法 constructor,setState,renderDOM,
// constructor获取传入的属性；
//setState设置当前状态，触发重新渲染，调用状态改变函数 onStateChage （插入新节点，移除旧结点）.
//renderDOM 渲染结点(获取子类的render())，绑定事件监听函数

//2.定义组件，通过集成抽象类来构建
//需包括 constructor，onClick，render方法；
//constructor:首先super()获取父类的this，然后可以获取props，设置自己的 state
//onClick:改变state，调用父类的setState实现
//render: 返回自定义结点

//额外的 mount 的方法，其实就是把组件的 DOM 元素插入页面，并且绑定onStateChage,使 setState 的时候更新页面：

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

const mont=(wrapper,elm)=>{
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



class hellow extends Component{
  constructor(props){
    super();
    this.props=props
      this.state={color:'blue'}
  }
  onClick(){
    this.setState({
      color:this.state.color==='blue'?'orange':'blue'
    })
  }
  render(){
      return `<button style='color:${this.state.color}'>${this.props.word}</button>`
  }
}

const element = document.querySelector('.container');
mont(element,new likeButton());
mont(element,new hellow({word:'hellow'}));

// const target=document.querySelector('.like-btn');
// const target1=document.querySelector('.like-text');
//  target.addEventListener('click',function(){
//    if(target1.innerHTML==="赞"){
//      target1.innerHTML="取消";
//    }else{
//      target1.innerHTML="赞";
//    }
//  });
