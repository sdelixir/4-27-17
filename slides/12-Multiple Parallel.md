---
title: Parallel Processes (part 3)
---

--------------------------------------------------------------

How to handle multiple messages in parallel?

--------------------------------------------------------------

Terminal 1 (:hello1)
```
server1 = spawn(fn() ->
  loop = fn() ->
    receive do
      msg -> IO.puts msg
    end
    loop.()
  end
end)
:global.re_register_name(Server1, server1)
```

--------------------------------------------------------------

Terminal 2 (:hello2)
```
:global.send(Server1, “Hello from 2”)
```
