#!/bin/bash

for FILE in *; do 
	if [[ $FILE != *.sh ]]; then 
		NEW=$(printf "%s.png" "$FILE" )
		mv $FILE $NEW
	fi
done
