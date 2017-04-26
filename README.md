# React Progress Bar

## User Stories
* I can pass a min, max, and current prop value and a progress bar with default styling will be created
* I can input nonsensical values for min, max, or current and an error will be written to the console
* I can pass a value in the range 0 to 100 to the percent prop to create the progress bar
* I can pass a new value for current to the component and it will update to reflect the changes
* I can overwrite out of the box styles with my own

## Installing
Using yarn: `yarn add react-progress-bar`.
Using npm: `npm install react-progress-bar --save`.

Add this stylesheet to the head of your html document: `<link rel="stylesheet" type="text/css" href="https://s3-us-west-1.amazonaws.com/reactprogressbar/progressbar-bundle.css"></link>`

## Demo
Example application here: https://github.com/mdwyer6/react-progress-bar-demo

## Using
There are two ways to use this progress bar. If you already know the percent value you'd like to display you can pass it to the component with the percent prop.
```
<ProgressBar percent={15} />
```

Otherwise, pass the corresponding values to the min, max, and currentval props and the percent will be caluclated and displayed.
```
<ProgressBar min={10} max={110} current={25}/>
```

Use the theme prop to specify a prebuilt theme. There are currently three available themes: "arctic", "cyber" and "default". The "default" is used when theme prop is not used.

## Design choices
I've chosen to move most CSS to an external file to avoid FOUC and because it allows developers to overwrite with inline styles.

## Improvements
* Get Jest tests to transpile correctly
* Min and max props could be more accurately called startVal and endVal
* Allow component to fail silently in production
* Allow passing custom dimensions as props
* Improve code coverage + automatic coverage reports/CI
* Improve responsivenes
* Improve progressbar aesthetics
* Seperate DEV and PROD build code