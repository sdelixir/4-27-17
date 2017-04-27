---
title: Pattern Matching
---

--------------------------------------------------------------

## Receive multiple message formats (convention only)

```
defmodule MyModule do
  def loop() do
    receive do
      {:hello, msg}   -> IO.puts "Received Greeting: #{msg}"
      {:goodbye, msg} -> IO.puts "Received Farewell: #{msg}"
      msg             -> IO.puts msg
    end

    loop()
  end  
end
```

--------------------------------------------------------------

Terminal 1
```
server1 = spawn(MyModule, :loop, [])
:global.re_register_name(Server1, server1)
```
