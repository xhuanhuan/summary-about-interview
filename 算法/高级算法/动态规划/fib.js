//递归
//缺点是会重复计算，速度慢
function fib1(n){
	if(n<2){
		return n;
	}else{
		return fib1(n-1)+fib1(n-2);
	}
}
console.log(fib1(6));

//动态规划（迭代），每次将计算的值保存下来
function fib2(n){
	var last1=0;
	var last2=1;
	var result=0;
	if(n<2){
		return n;
	}else{
		for(var i=2;i<=n;i++){
			result=last1+last2;
			last1=last2;
			last2=result;
		}
		return result;
	}
}
console.log(fib2(6));
