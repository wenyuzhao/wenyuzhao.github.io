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
\\((a\ge1, b>1)\\)

  a means the quantity of subproblem
  b means the size of each subproblem

What Master Theorem can do is calculate the time complexity of the recursive function above.

###How to use Master Theroem?

Master Theroem is used to calculate the formula of complexity. You just need to ignore lower order terms.

There are three cases of Master Theroem:

Case 1: 
If it exists an \\(\epsilon>0\\) and \\(f(n)=O(n^{\log_ba-\epsilon})\\)

Then \\(T(n)=O(n^{\log_ba})\\)

Case 2:
If it exists an \\(k\ge0\\) and \\(f(n)=\theta(n^{\log_ba}\log^kn)\\)

Then \\(T(n)=\theta(n^{\log_ba}\log^{k+1}n)\\)

Case 3:

If it exists an \\(\epsilon>0\\) and \\(f(n)=\omega(n^{\log_ba+\epsilon})\\)

And it exists an \\(c<1\\) and sufficiently large \\(n\\),

so that \\(af(\frac{n}{b})\le cf(n)\\)

Then \\(T(n)=\theta(f(n))\\)

###Proof

###The End.

That's all for Master Theorem. Quite easy to understand.

Sorry for not giving more examples. Because I have to complite homeworks which the carzy teacher I met this afternoon left me. And welcome to comment^_^
