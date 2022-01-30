let total = null
let operands = []
let operators = []

let inp = document.getElementById("in")
let in0 = document.getElementById("in0")
let in1 = document.getElementById("in1")
let in2 = document.getElementById("in2")
let in3 = document.getElementById("in3")
let in4 = document.getElementById("in4")
let in5 = document.getElementById("in5")
let in6 = document.getElementById("in6")
let in7 = document.getElementById("in7")
let in8 = document.getElementById("in8")
let in9 = document.getElementById("in9")
let addbtn = document.getElementById("add")
let subbtn = document.getElementById("subtract")
let multbtn = document.getElementById("multiply")
let divbtn = document.getElementById("divide")
let powbtn = document.getElementById("power")
let sqrtbtn = document.getElementById("sqrt")
let clrbtn = document.getElementById("clear")
let eqbtn = document.getElementById("equals")
let negbtn = document.getElementById("neg")
let curr = document.getElementById("inputbar")
let logbtn = document.getElementById("log")

in0.addEventListener("click",function(){input(0)})
in1.addEventListener("click",function(){input(1)})
in2.addEventListener("click",function(){input(2)})
in3.addEventListener("click",function(){input(3)})
in4.addEventListener("click",function(){input(4)})
in5.addEventListener("click",function(){input(5)})
in6.addEventListener("click",function(){input(6)})
in7.addEventListener("click",function(){input(7)})
in8.addEventListener("click",function(){input(8)})
in9.addEventListener("click",function(){input(9)})
addbtn.addEventListener("click",function(){add()})
subbtn.addEventListener("click",function(){sub()})
divbtn.addEventListener("click",function(){div()})
multbtn.addEventListener("click",function(){mult()})
powbtn.addEventListener("click",function(){pow()})
sqrtbtn.addEventListener("click",function(){sqrt()})
negbtn.addEventListener("click",function(){negate()})
eqbtn.addEventListener("click",function(){eq()})
clrbtn.addEventListener("click",function(){clr()})
logbtn.addEventListener("click",function(){log()})

function input(num){
	inp.value+=num
}
function negate(){
	if(!isNaN(inp.value)&&inp.value!="")
	{
		inp.value = Number(inp.value)*-1
	}
}
function add(){
	
	if(!isNaN(inp.value)&&inp.value!="")
	{
		operands.push(inp.value)
		operators.push("+")
	}
	inp.value = ""
	render()

}
function sub(){
	
	if(!isNaN(inp.value)&&inp.value!="")
	{
		operands.push(inp.value)
		operators.push("-")
	}
	inp.value = ""
	render()

}
function mult(){
	
	if(!isNaN(inp.value)&&inp.value!="")
	{
		operands.push(inp.value)
		operators.push("*")
	}
	inp.value = ""
	render()

}
function div(){
	
	if(!isNaN(inp.value)&&inp.value!="")
	{
		operands.push(inp.value)
		operators.push("/")
	}
	inp.value = ""
	render()

}
function pow(){
	
	if(!isNaN(inp.value)&&inp.value!="")
	{
		operands.push(inp.value)
		operators.push("^")
	}
	inp.value = ""
	render()

}
function sqrt(){
	if(Number(inp.value)<0)throw "NO COMPLEX NUMBERS!"
	else if(!isNaN(inp.value)&&inp.value!="")
	{
		inp.value = Math.sqrt(Number(inp.value))
	}

}
function eq(){
	if(!isNaN(inp.value) && inp.value!="")
	{
		operands.push(inp.value)
	}
	render()
	while(operands.length > 0 && operators.length > 0)
	{
		if(total==null)total = operands.length>0?Number(operands.shift()):0;
		else{
		let temp = operators.shift()
		if(temp=="+")
		{	total += Number(operands.shift())
			continue;
		}
		if(temp=="-")
		{	total -= Number(operands.shift())
			continue;
		}
		if(temp=="*")
		{	total *= Number(operands.shift())
			continue;
		}
		if(temp=="/")
		{   let notzero = Number(operands.shift())
			if(notzero == 0)throw "CANNOT DIVIDE BY ZERO!"
			else{total /= Number(notzero)}
			continue;
		}
		if(temp=="^")
		{	total = Math.pow(total,Number(operands.shift()))
			continue;
		}
		}
	}
	if(operands.length > 0)total = operands.pop()
	inp.value = total
	operands = []
	operators = []
	total = null
}
function clr(){
	inp.value = ""
	operands = []
	operators = []
	total = null
	render()
}
function render(){
	let str = ""
	for(let i = 0;i<operands.length;i++)
	{
		str += operands[i]
		if(operators[i]!== undefined)str+=operators[i]
	}
	curr.value = str
}
function log(){
	if(Number(inp.value)<=0)throw "CAN'T DO THAT"
	else if(!isNaN(inp.value)&&inp.value!="")
	{
		inp.value = Math.log10(Number(inp.value))
	}
}