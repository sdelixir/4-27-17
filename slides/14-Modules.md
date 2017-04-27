---
title: Modules
---

--------------------------------------------------------------

Terminal 1
```
defmodule MyModule do
  def loop() do
    receive do
      msg -> IO.puts msg
    end

    loop()
  end  
end
```

```
server1 = spawn(MyModule, :loop, [])
:global.re_register_name(Server1, server1)
```

--------------------------------------------------------------

Terminal 2
```
:global.send(Server1, "Hello from 2")
```
