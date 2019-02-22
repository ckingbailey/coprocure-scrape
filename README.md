# This is a Node project
To run it make sure you have [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed.

Then do `npm install` to install the dependencies and `npm start` to print the results of scraping the query target to your terminal.

### Known issues
On my machine the `contacts` prop prints as `[Object]`. It is possible to print the props of this object by digging down into it, like `console.log(output.vendor.contacts)`, but providing the user a means to do this was beyond the scope of this assignment. If you return the `output` object all the data is there.

### Answers to additional questions
Q: **Is there more information on each page that might be relevant to people who want to use this contract?**  
A: There are lots of other files that could be grabbed from this page. I'm not sure which would be most relevant to the user, perhaps the Competitive Solicatation Documentation stuff? I think the products and services information could be useful for sorting vendors and contracts in a database so that a user could search for, say, fabric awning installation. The pricing section also seems highly pertinent, but skimming through some of the contract pages it seems like there is not specific cost data in here.

Q: **How would you retrieve all the information on this site?**
A: The manual way I would do would be to start by requesting the `/contract-search` page on the backend, and then cataloging all the links off all the pages there. I see I can page through and filter it with `/contract-search?category=All&keyword=&page=2`. Then I would follow each of the links I'd collected, requesting and parsing one afte another. 
I believe this process would be made easier with a tool like [crawler](https://www.npmjs.com/package/crawler). It would probably take me 30-90 minutes to learn crawler basics and get it working for my use case.

💚,  
ckb