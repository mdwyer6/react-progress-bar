#!/bin/bash

read -p "Version (major, minor, or patch):" version
if [$version == "major"] || [$version == "minor"] || [$version == "patch"]
then 
	npm run build
	npm version $version
	npm publish
else
	echo "Invalid input"
fi
