---
title: Guard Clauses
---

--------------------------------------------------------------

But no. No recursion in anonymous functions, due to the need to evaluate guard clauses.

Guard Clauses
```
def foo(term) when is_integer(term), do: term
def foo(term) when is_float(term), do: round(term)
```

--------------------------------------------------------------

```
(foo1, foo2) = fn(term) do
  if is_integer(term) do
    term
  end

  if is_float(term) do
    round(term)
  end
end
```
