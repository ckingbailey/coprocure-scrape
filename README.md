# This is a Node project
To run it make sure you have [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed.

Then do `npm install` to install the dependencies and `npm start` to print the results of scraping the query target to your terminal.

### Known issues
On my machine the `contacts` prop prints as `[Object]`. It is possible to print the props of this object by digging down into it, like `console.log(output.vendor.contacts)`, but providing the user a means to do this was beyond the scope of this assignment. If you return the `output` object all the data is there.

💚,  
ckb