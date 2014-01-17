Captain
=======

A tiny wrapper around the awesome [node-github-hook](https://github.com/nlf/node-github-hook) for easy deployment.

## Install

1. `git clone git@github.com:iest/Captain.git`
2. `npm install`
3. ???
4. PROFIT!!

## Setup

1. Make sure you have a webhook setup for whatever repo you want `POST`s from on github (you might need to specify port `3030`)
2. Change the `REPONAME` inside `captain.js` to the name of your repo
3. Edit `hook.sh` to do whatever you need to do when whatever happens inside `captain.js`.
4. Run `node captain.js &` and you're good to go!
