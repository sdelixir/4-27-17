---
title: Install Erlang
---
--------------------------------------------------------------

## Add erlang plugin to asdf
```
asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git
```

--------------------------------------------------------------

## Install latest version of erlang
```
asdf install erlang 19.3
```

--------------------------------------------------------------

## Set erlang version globally
```
asdf global erlang 19.3
```

--------------------------------------------------------------

## Check if installed correctly
```
which erl
/Users/kevinsullivan/.asdf/shims/erl
```
