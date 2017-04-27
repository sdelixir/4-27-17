---
title: Parallel Processes
---

--------------------------------------------------------------

Terminal 1 (:hello1)
```
server1 = spawn(fn() ->
  receive do
    msg -> IO.puts msg
  end
end)
```

--------------------------------------------------------------

```
:global.register_name(Server1, server1)
:global.registered_names()
```

--------------------------------------------------------------

Terminal 2 (:hello2)
```
:global.send(Server1, "Hello from 2")
```
