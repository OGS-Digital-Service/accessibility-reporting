# Results - Back to Top Feature

## Pages Tested
- https://empirestateplaza2.nysits.acsitefactory.com/
- https://empirestateplaza2.nysits.acsitefactory.com/convention-center-available-space

## Lighthouse
- [Desktop results](/audit_results/ACSF/back-top/lighthouse/desktop/)
- No issues related to this component
- [Mobile results](/audit_results/ACSF/back-top/lighthouse/mobile/)
- No issues related to this component

## Pa11y
- [plaza](/audit_results/ACSF/back-top/pa11y/)
- No issues related to this component
- This component is identical across sites, so a single site was used for testing

## IBM Equal Access
- No issues related to this component

## WAVE
- No issues related to this component

## ANDI
- Issue with name mismatch and aria-label intent described in manual testing

## Manual & Screen Reader Testing Issues
1. Aria-label vs. screen reader only text

### Aria-label use
The enclosing anchor element has both a `title` and `aria-label` attribute with values as well as an inner span that uses an `sr-only` class to hide text commonly exposed to screen readers. Because the interactive element has an `aria-label` the *only* text that will get read out to screen readers is that value. The text in the inner span with `sr-only` will never be exposed to a screen reader because an `aria-label` takes precedence. See https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/ for an explanation of how accessible names and descriptions are calculated.

Current code
```
<a href="#main-content" class="webny-back-to-top webny-back-to-top-show" title="Back to Top" aria-label="Back to Top" data-once="backToTopButton removeHashFromUrl">
    <span class="fa fa-chevron-up" aria-hidden="true"></span>
    <span class="sr-only">Scroll back to the top of the page</span>
</a>

```
> The aria-label="Back to Top" is what is read to screen reader users. Confirmed in VoiceOver and NVDA. The inner text of "scroll back to the top of the page" is never available to screen readers in this structure.

Suggested code from ny.gov
```
<a href="#main-content" class="nygov-back-to-top nygov-back-to-top-show" data-once="nygovExitModal backToTopButton">
        <span class="fa fa-chevron-up" aria-hidden="true"></span>
        <span class="sr-only">Scroll back to the top of the page</span>
</a>
```
> Remove the title and aria-label attributes from the containing anchor