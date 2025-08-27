# accessibility-reporting
A micro-site and repo to manage automated accessibility reports, generated scans, and general compliance with WCAG 2.2 AA across NYS Digital Service managed websites and tools.

## What tools are we using?
- pa11y (aXe core and HTMLCS)
- lighthouse
- IBM Equal Access
- ANDI
- WAVE
- VoiceOver
- NVDA (when possible)

## Checks in browser
1. Text Spacing - using bookmarklet https://cdpn.io/stevef/debug/YLMqbo 
2. Tap Target Size - using bookmarklets https://cdpn.io/pen/debug/YzdwWZw and https://accessibility-tools.github.io/target-size-highlighter/

## What standards are the automated tools using?
- WCAG 2.1 AA for htmlcs ruleset
- WCAG 2.1 AA + some 2.2 rulsets that are in axecore (lighthouse and pa11y)
- IBM uses WCAG 2.2 AA 
- Manual testing to WCAG 2.2 AA

## NYS Digital Service Severity Scale
Issues ranked as severe, moderate, or low should be remediated in order to promote equal access. 
1. **Severe** 
> Issues at this level represent signficant (or total) barriers to equal access for all users and have WCAG A and AA failures. 
2. **Moderate**
> Issues at this level represent some impact to equal access, accessibility patterns, screen reader usage, and/or contain WCAG A and AA failures.
3. **Low**
> Issues at this level represent minimal barriers to access, but often still contain lesser WCAG A and AA failures. 
4. **Best Practice**
> Issues at this level are web development best practices and do not contain measurable WCAG failures. 
5. **None**
> No issues identified as of this audit. Congrats!

## Developer Details
Notes and commands for running the tests.

### pa11y
- npm run pa11y 
- figuring out the list of urls for mobile vs desktop

### lighthouse
- using the ignore invalid cert flag for chrome
- cd into the correct directory for the report (this seems insane, but the --output-path arg can't write to any other directory?)
- npm run lighthouse {url to run against}
- working on the mobile vs. desktop testing suite

### IBM equal access
- still working on getting this up and running from cli
- for now these are manual, exported browser audits due to invalid cert in the testing env

### automated tool effectiveness
- https://alphagov.github.io/accessibility-tool-audit/index.html


### flags for lighthouse
- --chrome-flags='--ignore-certificate-errors' in order to run against non-https urls