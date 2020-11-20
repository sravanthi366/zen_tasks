//






var n = [1,2,3,4];

function powerOfTwo(n) {
    let res=0;
    
for (i=0; i<n.length;i++)
     for (j=i; j<n.length;j++)
            res = Math.pow(2, n[i]);

        console.log(res);
    
}
powerOfTwo(n);

