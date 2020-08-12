#!/bin/bash

for FILE in *; do 
	if [[ $FILE != *.sh ]]; then 
		NEW=${FILE:0:1}
		mv $FILE $NEW
	fi
done
