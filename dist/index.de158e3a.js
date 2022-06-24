let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let string = `/*你好，我是周某
 *我新学了点东西
 *学习完总要显摆一下
 *首先，我需要搞一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
  }
/*然后我要搞一个太极图
 *众所周知，太极图是个圆形
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
  }
/*易有太极，
 *始生两仪，
**/
#div1 {
    background: linear-gradient(
      90deg,
      rgba(254, 254, 254, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
}
/*两仪生四象，
 *四象生八卦。
**/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(254,254,254,1) 100%);
    border-radius: 50%;
  }
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
  }
  
`;
let string2 = "";
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 = string2 + "<br>";
        else if (string[n] === " ") string2 = string2 + "&nbsp;";
        else string2 = string2 + string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scroll(0, 9999);
        html.scroll(0, 9999);
        if (n < string.length - 1) {
            step();
            n = n + 1;
        }
    }, 50);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
