#!/usr/bin/env bash
jekyll build && rsync -avz --delete _site/ iest.co:/srv/www/iest.co/