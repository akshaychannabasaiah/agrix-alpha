#!/bin/sh

name="f"
for x in `heroku config`; do
  echo $x
  if [[ $name == t ]]; then
    echo "va"
    echo "export var MapKey = '$x'" > ../keys/keys.ts
    echo $x
    value=$x
    name="f"
  fi
  if [[ $x == GMAP_KEY* ]]; then
    name="t"
  fi
  #  echo "export var MapKey = '$value'" > ../keys/keys.ts
  #  echo "export var MapKey = '$value'"
  #fi
done
