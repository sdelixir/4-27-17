---
title: Connecting Nodes
---

--------------------------------------------------------------

## Start multiple terminals

Terminal 1
```
iex --name hello1 --cookie cookie
```

Terminal 2
```
iex --name hello2 --cookie cookie
```

--------------------------------------------------------------

## Connect Nodes

Terminal 1
```
Node.connect(:"hello2@Kevins-MBP.airbitz.co")
Node.list()
```
