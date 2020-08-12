#!/bin/bash

for FILE in *; do
	if [[ $FILE != *.sh ]]; then
		NEW=$(printf "%s.mp3" "$FILE" )
		mv -i "$FILE" "$NEW"
	fi
done
