# hw4
How many times does the loop body run each frame, once the x and y arrays are full?
5

What are two ways of increasing the spacing between rings?
1.I changed i=i+10 to i=i+30 and also changed x.slice and y.slice to -150
2.If I only changed 
x.length-i to x.length-2*i
and changed 
x = x.slice(-60); 
  y = y.slice(-30);

 
How can you make the ellipse trail longer?
If the numbers in (i=i+10) decreased and x.slice and y.slice decreased, the trail will be longer.

