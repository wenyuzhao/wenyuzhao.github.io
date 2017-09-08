---
title: Play with New Techs
nav: experiments
description: My experiments on Parsing Expression Grammar, Machine Learning and Neural Networks.
keywords: Experiments,New Technologies,Parser,Parsing Expression Grammar,Neural Network,Machine Learning
---

# Parsing Expression Grammar

Parsing Expression Grammar in c++14 based on parser combinators.

*See [GitHub](https://github.com/wenyuzhao/PEG-Combinator)*.

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