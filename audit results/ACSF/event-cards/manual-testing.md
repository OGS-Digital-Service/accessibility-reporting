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
> This example reads the entire time as a single string element

### Recommendations
1. Try to use fewer distinct DOM elements to represent the structure of a time block to improve readability for screen reader users.
2. Consider using screen reader only text to represent timezones or range attributes

## Event Location Structure
The event location structure also uses several distinct DOM elements to represent a single string of location inner text, which causes screen reader users to hear jumbled or incomplete location data. 

Current Code:
```
<div class="event-address">
    <div>
        <p class="address" translate="no">
            <span class="address-line1">775 Potic Creek Road</span><br>
            <span class="locality">Earlton</span>, 
            <span class="administrative-area">NY</span> 
            <span class="postal-code">12058</span><br>
            <span class="country">United States</span>
        </p>
    </div>
</div>
```
> This example has each element distinctly read out, which leads to confusion when reading "NY 12058" which reads as "nye twelve thousand and fifty eight" 

Suggested example from NY.gov:
```
<div class="field field--name-field-se-venue field--type-string field--label-hidden field__item">
    The Michigan Street Baptist Church, 511 Michigan Ave., Buffalo, NY 14203
</div>
```
> this example has the entire location set as one string of inner text that reads out parsed correctly by the screen reading cadence. 

### Recommendations
1. Consider rendering the location as a single string of inner text inside one DOM element for readability