# Hexadecimal Time
Hexadecimal time is an alternative to the conventional 24-hour clock. It uses hexadecimal to represent the current time. There are 256 hexadecimal minutes in 24 decimal hours and 5.625 minutes in one hexadecimal minute. As this system uses a base 16 counting system the time can be displayed on 2 digits instead of 4.

# Conversion of decimal time into hexadecimal
<p>The below formula is for calculating the current hexadecimal time.</p><br>
<p><img src="https://tex.s2cms.ru/svg/t%3Dround%5Cleft(%5Cfrac%7B%5Cleft(h%5Ccdot60%2Bm%5Cright)%7D%7Bq%7D%5Cright)" alt="t=round\left(\frac{\left(h\cdot60+m\right)}{q}\right)" /><br>
<img src="https://tex.s2cms.ru/svg/h" alt="h" /> = hours since the start of the day<br>
<img src="https://tex.s2cms.ru/svg/m" alt="m" /> = minutes since the start of the hour<br>
<img src="https://tex.s2cms.ru/svg/q" alt="q" /> = 5.625 = <img src="https://tex.s2cms.ru/svg/%5Cfrac%7B1440%7D%7B256%7D" alt="\frac{1440}{256}" /></p><br>
<p><img src="https://tex.s2cms.ru/svg/q" alt="q" /> is the number of decimal minutes in one hexadecimal minute. To get <img src="https://tex.s2cms.ru/svg/q" alt="q" /> you divide 1440 (the number of minutes in 24 hour decimal day a day) by 256.</p>
