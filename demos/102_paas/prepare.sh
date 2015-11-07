#!/bin/sh
DEMO_NAME=oss-demo102
SCRIPT_PATH=$(cd "${0%/*}" 2>/dev/null; echo "$PWD"/"${0##*/}")
DEMO_HOME=$(dirname $SCRIPT_PATH)
echo Demo Home is $DEMO_HOME

mkdir ~/.tmuxinator
cp $DEMO_HOME/.tmuxinator/* ~/.tmuxinator

tmux kill-session -t $DEMO_NAME
DEMO_ROOT="$DEMO_HOME/../.." mux $DEMO_NAME
