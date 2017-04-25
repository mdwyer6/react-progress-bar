#React Progress Bar

##User Stories
* I can pass a min, max, and current prop value and a progress bar with default syling will be created
* I can input nonsensical values for min, max, or current and an error will be written to the console
* I can pass a value in the range 0 to 100 to the percent prop to create the progress bar
* I can pass a new value for current to the component and it will update to reflect the changes
* I can overwrite out of the box styles with my own

##Using
There are two ways to use this progress bar. If you already know the percent value you'd like to display you can pass it to the component with the percent prop. Otherwise, pass the corresponding values to the min, max, and currentval props and the percent will be caluclated and displayed.

##Improvements
* Min and max props could be more accurately called startVal and endVal
