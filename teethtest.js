var a = ['右上','左上','左下','右下'];
var b = ['正中門齒','正乳門齒','側門齒','側乳門齒','犬齒','乳犬齒',
        '第一乳臼齒','第二乳臼齒','第一小臼齒','第二小臼齒','第一大臼齒','第二大臼齒'];
var c = ['近心','遠心','舌側','頰側','咬合'];
var d = ['齲齒','填補且有蛀牙','填補'];

var x = Math.floor(Math.random()*4);
var y = Math.floor(Math.random()*12);
if (y < 6) {
    var z = Math.floor(Math.random() * 4);
}else {
    var z = Math.floor(Math.random() * 5);
}
var s = Math.floor(Math.random()*3);
teethtest.textContent = a[x] + b[y] + c[z] + d[s];