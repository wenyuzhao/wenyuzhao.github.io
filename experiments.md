---
title: Play with New Techs
nav: experiments
description: My experiments on Lambda Calculus, Parsing Expression Grammar, Machine Learning and Neural Networks.
keywords: Experiments,New Technologies,Lambda,Lambda Calculus,Interpreter,Ocaml,Parser,Parsing Expression Grammar,Neural Network,Machine Learning
---

# Lambda

Untyped [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) interpreter in OCaml

*See [GitHub](https://github.com/wenyuzhao/Lambda)*.

Example:
```
# 1 + 1 = 2
(λm.λn.λf.λx.m f (n f x)) (λf.λx.f x) (λf.λx.f x)
= (λn.λf2.λx2.(λf.λx.f x) f2 (n f2 x2)) (λf.λx.f x)
= λf2.λx2.(λf3.λx3.f3 x3) f2 ((λf.λx.f x) f2 x2)
= λf2.λx2.(λx3.f2 x3) ((λx.f2 x) x2)
= λf2.λx2.f2 ((λx.f2 x) x2)
= λf2.λx2.f2 (f2 x2)
```


# Parsing Expression Grammar

Parsing Expression Grammar in c++14 based on parser combinators.

*See [GitHub](https://github.com/wenyuzhao/PEG-Combinator)*.

Example:
```c++
// ...
Number = NUMBER >> [](auto x) {
    return std::stod(x);
}
;
Term = (Number, *(_, MUL | DIV, _, Number)) >> [](auto t) {
    auto ans = get<0>(t);
    for (auto& term : get<1>(t)) {
        get<1>(term) == "*" ? ans *= get<3>(term) : ans /= get<3>(term);
    }
    return ans;
}
;
Expr = (Term , *(_ , ADD | SUB, _, Term)) >> [](auto t) {
    auto ans = get<0>(t);
    for (auto& term : get<1>(t)) {
        ans += get<3>(term) * (get<1>(term) == "+" ? 1 : -1);
    }
    return ans;
}
;
// ...
```

# Multilayer Perceptron

Forward Neural Network based **only** on NumPy. Using Backpropagation with Stochastic gradient descent to optimize networks.

Supported Layers:
* InputLayer
* TanhLayer
* SigmoidLayer
* ReLULayer
* LeakyReLULayer
* DropoutLayer

*See: [GitHub](https://github.com/wenyuzhao/Multilayer-Perceptron), [Example](https://github.com/wenyuzhao/Multilayer-Perceptron/blob/master/test.py).*
