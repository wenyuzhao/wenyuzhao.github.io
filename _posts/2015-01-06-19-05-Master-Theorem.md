---
title: Master Theorem
layout: default
---

#Master Theorem
###6 January 2015

Today is my first class after enrolment and orientation. Met a lot of friends, a very strange Japanese girl, and a crazy teacher.

Ok, go back to the topic.

###What is Master Theroem?

It was two days ago when I took an online course called [Algorithm Analysis](https://www.coursera.org/course/algo) in [Coursera.org](https://www.coursera.org/) that I saw the academic word "Master Theroem" at the first time. Then I googled at once. Below is the [explanation from Wikipedia](http://en.wikipedia.org/wiki/Master_theorem):

In the analysis of algorithms, the master theorem provides a solution in asymptotic terms (using Big O notation) for recurrence relations of types that occur in the analysis of many divide and conquer algorithms.

In brief, Master Theorem is a theorem to calculate complexity.

In this program:

```javascript
function T( n /*size of problem*/) {

  if(n < 1) return;
  
  /*Do work of amount f(n)*/
  
   T(n/b);
   T(n/b);
   ...
   /*repeat for a total of a times*/
   ...
   T(n/b);
   
   return;
   
}
```

From this program we can get a recursive formula:

\\(T(n)=aT(\frac{n}{b})+f(n)\\)

  a means the quantity of subproblem
  b means the size of each subproblem

What Master Theorem can do is calculate the time complexity of the recursive function above.

###How to use Master Theroem?

Master Theroem is used to calculate the formula of complexity. You just need to ignore lower order terms.

There are three cases of Master Theroem:

Case 1: 
If it exists an \\(\epsilon>0\\) so that \\(T(n)=\theta(n^(\log_b{a}-\epsilion))\\)
If ![](http://upload.wikimedia.org/math/7/9/a/79a7ecad7f97f19240be140f505ddbed.png)

Then ![](http://upload.wikimedia.org/math/8/3/5/83551c0953b5c391e3fdeb90b81deee2.png)

Case 2: If k>0, k++

If ![](http://upload.wikimedia.org/math/5/e/c/5ec7448a407893b0364e72e624e56a26.png)

Then ![](http://upload.wikimedia.org/math/f/4/b/f4bebc5698e39bdae898ce959e9e5428.png)

Case 3:

If it exists an ![](http://upload.wikimedia.org/math/e/7/7/e778429d8769714354b1994984a23fe5.png) so that ![](http://upload.wikimedia.org/math/1/5/5/155fcd52bbd5a31ed4d61bff0405bedd.png)

If ![](http://upload.wikimedia.org/math/6/7/a/67ad62611c82b235d6cf0b0cedab740b.png) for some constant c < 1 and sufficiently large n,

Then ![](http://upload.wikimedia.org/math/4/7/5/4753885194212a420f0126c6896f0ad9.png)

T(n) = \Theta\left( n^{\log_b a} \right)

###Proof

###The End.

That's all for Master Theorem. Quite easy to understand.

Sorry for not giving more examples. Because I have to complite homeworks which the carzy teacher I met this afternoon left me. And welcome to comment^_^
