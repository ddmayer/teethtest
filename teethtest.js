document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = next;
})

var a = ['右上','左上','左下','右下'];
var b = ['正中門齒','正乳門齒','側門齒','側乳門齒','犬齒','乳犬齒',
        '第一乳臼齒','第二乳臼齒','第一小臼齒','第二小臼齒','第一大臼齒','第二大臼齒'];
var c = ['近心面','遠心面','舌側面','頰側面','咬合面'];
var d = ['齲齒','填補且有蛀牙','填補'];
var e = ['健全','蛀牙掉落','外傷掉落','窩溝封閉劑','未萌發','只剩殘根','Trauma'];

function next() {
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 12);

    var que = Math.floor(Math.random() * 2);
    if (que === 0) {
        if (y < 6) {
            var z = Math.floor(Math.random() * 4);
        } else {
            var z = Math.floor(Math.random() * 5);
        }
        var s = Math.floor(Math.random() * 3);
        document.querySelector('#teethtest').innerHTML = a[x] + b[y] + c[z] + d[s];
    } else {
        var s = Math.floor(Math.random() * 7);
        document.querySelector('#teethtest').innerHTML = a[x] + b[y] + e[s];
    }
}
