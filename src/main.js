let html = document.querySelector("#html")
let style = document.querySelector("#style")

let string =`/*你好，我叫小郭
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{ 
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把这个div变成一个八卦图
 *主要看好了
 *首先把div变成一个圆
*/
#div1{ 
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none

}
/*  
*八卦是阴阳形成的
*一黑一白
*/

#div1{ 
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 51%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
}
/*加两个抽象的小球*/
#div1::before{
    width: 100px;
    height:100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width: 100px;
    height:100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);}


`;
let String2 = " " ;
let n = 0

function step() {
    setTimeout(() => {
            //如果是回车就不照搬       
            //如果不是回车就照搬
        if (string[n] === "\n") {
            String2 += "<br>"
        } else if (string[n] === " ") {
           String2 += "&nbsp" 
        } else{ 
            String2 += string[n]
            
        }
          
        html.innerHTML = String2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if (n < string.length -1 ) { 
            //如果n不是最后一个就继续
            n += 1 
            step();
        }
    }, 50);
}
step(); // 1=>2


setTimeout(() => {
    style.innerHTML = `
body{  
    color: red
    }    
    `;
}, 100)