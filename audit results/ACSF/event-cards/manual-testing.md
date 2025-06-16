# Manual Testing 
## Problematic Patterns
1. Event Time structure
2. Event Location structure 

## Event Time structure
Currently the event time is not a single structured element with readable inner text, rather it's broken up into several distinct elements that are read separately, causing possible confusion for screen reader users.

Current code:
```
<div class="time-full-time">
    <div class="start_date">10:00</div>
    <div class="meridiem">AM EST</div>
    <div class="dash">—</div>
    <div class="end-date">4:00</div>
    <div class="meridiem">PM EST</div>
</div>
```
> For example, the above code reads out "AM estate" for "AM EST" as well as the dash.

Suggested example from NY.gov:
```
<div class="time-inner-wrap">
     12:00 PM - 01:30 PM
</div>
```