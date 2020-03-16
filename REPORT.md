## Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technology Processes for completion

## Technology

These are the technology ans steps I used in order to copleate this challenge,

### `redux-thunk`

This app initializes redux thunk as a middleware for my store

### `bootstrap`

Used bootstrp 4

### `Material UI`

Used material UI

### `used es6`

Used es6 for javacript programming

### `linter and huskey`

Used linter for code prettir and used huskey to pretty codes at commit stage so that no code is un linted.

## Process

### `css grid`

The challenge was to make a responsive ui design with rearranged components when it comes to modile view.
I initiated a grid with grid-template-column for both header and body
column template `1fr 2fr 4fr 15px .8fr` for desktop
when it came to mobile I re arragenged the template upon media query in the css
the new template for header was `60px 50px 70px 60px`
and for body `1fr 3fr 4fr 15px 4fr`

For rearrangement i used `grid-area`
For example to was suppose be below the from column for that, 
I used `grid-area: 2 / 2 / 3 / 6;`

And the position rearrangement was `grid-area: 1 / 1 / 3 / 1`
`start:first row/ start:first column / end: third row/ end: firt column`

Finally There ws an email icon and right arrow when it was mobile view I displayed it `none` for desktop and `inline-block` for mobile.

I used `border-right` to the header items as shown on the pdf file.

I minimized the grids `grid-gap` from `1em` to `0.3em` for mobile view

Please find all the re positions under `/EmailTable/index.css`

Used grid-area short hand to achive re position of the components.

### `Date Range Picker`

Used moment js to set `startDate` and `endDate` states

While selecting the dates using calender view it sets new `startDate` and `endDate` to the parent component's state.

### `Search button funtions`

Upon clicking search button it calls an action to reducer and filter the `email` data 
`greater than equal >= startDate` and `less than equal <= endDate` and updated the state for email data

### `Sorting columns`

For sorting I created header array with the exact id to the data keys for the emails.

By default I set `date` as an orderBy and `desc` as order

when clicking header colums for sorting it sets the column id as `orderBy` and toggles the order `asc` or `desc`

then this `order` and `orderBy` state is sent to table body component

When the body component loads for the very first time it follows the the `date` order

the data array is sorted for creating the child components based upon `order` and `orderBy` state

the comparator is created by the `order` and `orderBy` values

### `Selection of emails from search`

Upon Clicking the row from the search data grid it sets state for select mail ids and their respective details.

A Detail span is visible on the top of the page by clicking the span user can see the detils of the email like `Details: 2 email(s)`

This selection is multiple selection and refuses to push to selected array if id is present already.

Selected emails gets font style changed to `italic` for better visibility

### `Detail Email view`

Material ui list is used to show email details as list

Detail list has typography used for showing from, to, subject and body of the email

Data is fed from the email reducer.

Once the dialog is closed all the selection is reset to empty