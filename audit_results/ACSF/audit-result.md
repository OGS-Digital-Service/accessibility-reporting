# Audit of New Component Features

## Components Tested
1. [Back to top feature](https://github.com/OGS-Digital-Service/accessibility-reporting/blob/main/audit_results/ACSF/back-top/results.md)
> (1) recommended **Low** priority fix
2. [Event Cards](https://github.com/OGS-Digital-Service/accessibility-reporting/blob/main/audit_results/ACSF/event-cards/results.md)
> (2) recommended **Low** priority fixes
3. [Heroes](https://github.com/OGS-Digital-Service/accessibility-reporting/blob/main/audit_results/ACSF/heroes/results.md)
> (x) recommended 
4. Popular Services
5. Photo Gallery
6. Quick Links Styled Link
7. Table of Contents

## No testable considerations
1. rounded corners
2. font awesome icons

## Testing *not* included
1. Wholesale color audit of all color options for all new components in the updated theme. 

## Automated Test Runners
1. **Lighthouse:** mobile and desktop, no performance flags
2. **Pa11y:** 360px and 1280px for mobile and desktop. aXecore and HTMLCS.
3. **IBM Equal Access** for complex layouts, browser test

## Manual & Screen Reader Testing
1. Manual code inspection
2. VoiceOver screen reader
3. Keyboard navigation
4. ANDI: for accessible names, interactions, and states
5. WAVE: manual browser test

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
