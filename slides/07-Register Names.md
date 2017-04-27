---
title: Register Names
---

--------------------------------------------------------------

## [Erlang Docs](http://www1.erlang.org/doc/man/global.html)

Terminal 1 (:hello1)
```
:global.register_name(:hello1, self())
```

--------------------------------------------------------------

Terminal 2 (:hello2)
```
:global.register_name(:hello2, self())
```

--------------------------------------------------------------

Either Terminal
```
:global.registered_names()
```
