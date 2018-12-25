---
title: "Setting up Coding Environment"
description: Getting started on Python Setup
date: '2018-12-31'
---

## Code Support

```python
def wrap_poke(pokemon):
  def choose_pokemon():
    return "I choose you {}".format(str(pokemon))
  return choose_pokemon
  
@wrap_poke
def chosen_pokemon():
  return "Pikachu!"
  
# Executing function.
print(chosen_pokemon())
```

## Math Support

$$
 ||f_n(x_n) - f(x)|| \rightarrow 0
$$

as $n \rightarrow \infty$.

Recall that the bootstrap is when you sample with replacement from the data you currently have. The big idea is that the empirical distirbution generated from this will converge to the true distribution and hence any test statistics you get from this test will also be the correct distribution.

Generally, you would resort to the bootstrap when you have unknown parameters in your model and hence the need to use these simulation techniques in order to figure out what is actually going on with the data.