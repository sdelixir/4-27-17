---
title: Responding to Messages
---

--------------------------------------------------------------

Terminal 1 AND Terminal 2
```
defmodule MyModule do
  def loop() do
    receive do
      {:msg, from, msg} ->
        Process.sleep(1500)
        
        IO.puts("Received message")
        Process.sleep(1500)

        IO.puts("Processing...")
        Process.sleep(1500)

        from = :global.whereis_name(from)

        IO.puts("Responding...")
        Process.sleep(1500)

        send(from, "Your message, #{msg}, was received")
      msg -> IO.puts msg
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

--------------------------------------------------------------

Terminal 2
```
server2 = spawn(MyModule, :loop, [])
:global.re_register_name(Server2, server2)
```
