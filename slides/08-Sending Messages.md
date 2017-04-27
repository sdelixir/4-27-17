---
title: Sending Messages
---

--------------------------------------------------------------

Terminal 1 (:hello1)
```
receive do
  msg -> IO.puts(msg)
end
```

--------------------------------------------------------------

Terminal 2 (:hello2)
```
:global.send(:hello1, "Hello from 2")
```
