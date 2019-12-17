# Good_Burger
This web application allows you to add your favorite burgers and devour them as you so choose! 

# Live Link
[Visit on Heroku](https://rocky-spire-61563.herokuapp.com/)

# Running Locally
- First run <code>npm install</code> to install of the node modules
- Navigate to the <code>db</code> folder within the directory
- Either open MySQL WorkBench or run <code>mysql -u root -p</code> in the command line. 
- Input your password then while in <code>mysql></code>, run <code>source schema.sql</code> to create the table. 
- Then utilize the provided date by running <code>source seeds.sql</code>. 
- Feel free to update the seeds with your own data. 
- After navigating to the <code>Good_Burger</code> run <code>node server.js </code>
- Visit the port utilized in the code (<code> PORT: 8070 </code>) on your local machine and enjoy!

# Built Using
- Node.js
- Express.js
- jQuery
- [BootStrap](http://getbootstrap.com/)
- MySQL
- Handlebars

