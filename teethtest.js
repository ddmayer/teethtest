var a = ['右上','左上','左下','右下']
var b = ['正門齒','側門齒','第一乳臼齒','第二乳臼齒','犬齒','第一小臼齒','第二小臼齒','第一大臼齒','第二大臼齒']
var c = ['近心','遠心','舌側','頰側','咬合']
teethtest.textContent = a[Math.floor(Math.random()*4)] +
                        b[Math.floor(Math.random()*9)] +
                        c[Math.floor(Math.random()*5)];