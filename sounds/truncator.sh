#!/bin/bash

i=1
for FILE in *; do 
	if [[ $FILE != *.sh ]]; then 
		NEW=$(echo $FILE | cut -f 2 -d '0')
		mv $FILE $NEW
	fi
done
