# accessibility-reporting
A micro-site and repo to manage automated accessibility reports, generated scans, and general compliance with WCAG 2.2 AA across Digital Service managed websites and tools.

## What tools are we using?
- pa11y (aXe core and HTMLCS)
- lighthouse
- IBM Equal Access


## pa11y
- npm run pa11y 
- figuring out the list of urls for mobile vs desktop

## lighthouse
- using the ignore invalid cert flag for chrome
- cd into the correct directory for the report (this seems insane, but the --output-path arg can't write to any other directory?)
- npm run lighthouse {url to run against}
- working on the mobile vs. desktop testing suite

## IBM equal access
- 

## automated tool effectiveness
- https://alphagov.github.io/accessibility-tool-audit/index.html