# accessibility-reporting
A micro-site and repo to manage automated accessibility and performance reports, generated scans, and general compliance with WCAG 2.2 AA across NYS Digital Service managed websites and tools.

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
> Issues at this level are NYS Digital web development best practices and do not contain measurable WCAG failures. 
5. **None**
> No issues identified as of this audit. Congrats!

## Developer Details
Notes and commands for running the tests.

### pa11y
- npm run pa11y
- make sure to either replace the .pa11yci file at the root with the copy of the one you want to run tests against, or path the run command to a custom .pa11yci file in the test configuration folder. 
- figuring out the list of urls for mobile vs desktop

### lighthouse
- using the ignore invalid cert flag for chrome
- cd into the correct directory for the report (this seems insane, but the --output-path arg can't write to any other directory?)
- npm run lighthouse {url to run against}
- working on the mobile vs. desktop testing suite

### IBM equal access
- these tests are configured using puppeteer and run from a js file included in the test_configurations
- to run a test, use "node {{path to test file}}" don't run the npm ibm test since we're not using the aceconfig or achecker.yml 
- manually move the test files into their _results directory (fix this at some point)
- currently the overally summary number is totally borked, no idea why it doesn't match the browser runs. The violations, needs review, and recommendations are still correct.

### automated tool effectiveness
- https://alphagov.github.io/accessibility-tool-audit/index.html

### Create Test Runners
- Use the batch-create.njk to create test runner scripts for each type of test 

### flags for lighthouse
- --chrome-flags='--ignore-certificate-errors' in order to run against non-https urls
- --output json --output html for multiple outputs
- --output-path for <path><name>
- helpful https://medium.com/@giezendanenner/running-lighthouse-reports-on-the-command-line-1691a1b06a56 

## How to get data to display in the report cards
- create a data file in the _data directory that the card templates can pull from.
- create a directory for the site audited, inlcude an index, and one page for each accessibility and performance if needed.