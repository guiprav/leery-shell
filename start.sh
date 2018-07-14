#!/bin/sh
set -e

if [ -z "$NODE_ENV" ]; then
  export NODE_ENV=development
fi

./build.sh
electron .
