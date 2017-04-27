---
title: Send Some Messages
---

--------------------------------------------------------------

Terminal 1
```
:global.send(Server2, {:msg, Server1, "Hello from 1"})
```

--------------------------------------------------------------

Terminal 2
```
:global.send(Server1, {:msg, Server2, "Hey, it worked!!!"})
```
