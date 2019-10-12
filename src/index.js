module.exports = function multiply(first, second) {
  first = first.split('');
  second = second.split('');
  var f=[],s=[],result=[],t=0,r=0,add=0,flag = false,str='';

  if (first.length > second.length){
      for (var i=first.length-1;i>=0;i--) f.push(parseInt(first[i]));
      for (var i=second.length-1;i>=0;i--) s.push(parseInt(second[i]));
  } else {
      for (var i=first.length-1;i>=0;i--) s.push(parseInt(first[i]));
      for (var i=second.length-1;i>=0;i--) f.push(parseInt(second[i]));            
  }
  var c1=f.length, c2 = s.length;

  for (var i=0;i<(c1+c2);i++)result[i]=0; 


  for (var offset=0;offset<c2;offset++){ 

      var current = s[offset];
      if (current==0) continue;

      for (var i=0;i<c1;i++){ 
          t = current*f[i]+result[i+offset];
          r = t %10;
          add = Math.floor(t/10);

          result[i+offset]=r;
          result[i+1+offset] += add;
          if (result[i+1+offset]>9){
              result[i+1+offset] = result[i+1+offset] %10;
              result[i+2+offset] ++;
          }
      }
  }

  while (result.length){
      n = result.pop()
      if (!flag && n==0) continue;
      str += n;
      flag=true;
  }

  return str;
}
