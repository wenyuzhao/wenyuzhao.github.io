---
title: Master Theorem
layout: blog
# others ...
tags: 
- Algorithms
---

#The Master Theory - Introduction
###6 January 2015

In this article I'm going to give a brief introduction about The Master Theory(also called Master Theorem).

###What is The Master Theory?

The Master Theory is a way to analyse the time complexity of Divide and Conquer Algorithms. But in this article I will not talk much about the Divide and Conquer Algorithm.

When analyzing the Mergesort algorithm, a tree is often used to calculate the time complexity(usually a full binary tree). The Master Theory is also based on a tree.

In the following program:

```javascript
function T( n /*size of problem*/) {

  if( n < 1 ) return;
  
  /*extra work*/
  
  T( n / b );
  T( n / b );
  ...
  /*repeat for a total of a times*/
  ...
  T( n / b );
   
  return;
}
```

From this program we can get a recursive formula:

$$T(n)\le aT(\frac{n}{b})+O(n^d)$$

  \\(a\\) is the quantity of subproblem
  \\(b\\) is the size of each subproblem
  \\(O(n^d)\\) is the extra time of each subproblem of size \\(n\\). 

What The Master Theory can do is calculate the time complexity by using the recursive function above.

###How to use Master Theroem?

$$
\begin{equation}
  T(n)=
  \begin{cases}
    n^d \log n &a>0\\\\
    n^d \log n &a\le0
  \end{cases}
\end{equation}
$$
Case 1: 
If it exists an \\(\epsilon>0\\) and \\(f(n)=O(n^{\log_ba-\epsilon})\\)

Then \\(T(n)=\Theta(n^{\log_ba})\\)

Case 2:
If it exists an \\(k\ge0\\) and \\(f(n)=\Theta(n^{\log_ba}\log^kn)\\)

Then \\(T(n)=\Theta(n^{\log_ba}\log^{k+1}n)\\)

Case 3:

If it exists an \\(\epsilon>0\\) and \\(f(n)=\Omega(n^{\log_ba+\epsilon})\\)

And it exists an \\(c<1\\) and sufficiently large \\(n\\),

so that \\(af(\frac{n}{b})\le cf(n)\\)

Then \\(T(n)=\Theta(f(n))\\)

###Proof

Please wait, I'm lazy

###The End.

That's all for Master Theorem. Quite easy to understand.

Sorry for not giving more examples. Because I have to complite homeworks which the carzy teacher I met this afternoon left me. And welcome to comment^_^
