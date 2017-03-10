var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
//Promise构造函数
function Promise(fn){
    var self = this;
    self.state = PENDING;//初始化状态
    self.value = null;//存储异步结果的对象变量
    self.handlers = [];//存储回调函数，这里没保存失败回调函数，因为这是一个dome
    //异步任务成功后处理，这不是回调函数
    function fulfill(result){
        if(self.state === PENDING){
            self.state = FULFILLED;
            self.value = result;
            for(var i=0;i<self.handlers.length;i++){
                self.handlers[i](result);
            }

        }
    }

    //异步任务失败后的处理，
    function reject(err){
        if(self.state === PENDING){
            self.state = REJECTED;
            self.value = err;
        }
    }
    fn&&fn(fulfill,reject);
};

Promise.isPromise=function(a){
  return typeof(a)==='Promise';
};


Promise.prototype.then = function(onResolved, onRejected){
    var self = this;
    return new Promise(function(resolve, reject){

        var onResolvedFade = function(val){
            var ret = onResolved?onResolved(val):val;//这一步主要是then方法中传入的成功回调函数通过return来进行链式传递结果参数
            if(Promise.isPromise(ret)){//回调函数返回值也是promise的时候
                ret.then(function(val){
                    resolve(val);
                });
            }
            else{
                resolve(ret);
            }
        };

        var onRejectedFade = function(val){
            var ret = onRejected?onRejected(val):val;
            reject(ret);
        };

        self.handlers.push(onResolvedFade);
        // if(self.state === FULFILLED){
        //     onResolvedFade(self.value);
        // }
        //
        // if(self.state === REJECTED){
        //     onRejectedFade(self.value);
        // }
    });
}

function async(value){
    var pms = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(value);;
        }, 1000);
    });
    return pms;
}
console.log(1111111);
async(1).then(function(result){
    console.log('the result is ',result);//the result is 1
    return 5;
}).then(function(result){
    console.log(++result);//2
});
