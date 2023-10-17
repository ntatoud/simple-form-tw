# simple-form-tw
Just an exercise from one of my courses

## Prerequisites
- Have Node > 18.0 and npm installed.
- Have mysql installed on your computer.

## Setup the project 
1. Go to the folder 'backend' and in the terminal, run the commande `npm install`, it will install all the packages listed in package.json
2. Setup mysql.
   - Launch mysql cli with root privileges : `sudo mysql`.
   - Create the database with the name you want : `CREATE DATABASE <db_name>;`. I suggest you use `db_form` , otherwise, modify it in the first line of the `db.mysql` file.
   - OPTIONAL : You can run the script above to initiate your database with a first row. Ine the mysql cli : `source db.mysql` (you must be in the right folder).
   - TO VERIFY THE STEP ABOVE : `USE <db_name>;` then `SELECT * FROM cliente;` there should be only one row.
   - Create a user specific for this project : `CREATE USER 'usernam'e@'localhost' IDENTIFIED BY 'password';` (leave the quotes)
   - Grant all privileges to this user so that there are no problems when requesting the database : `GRANT ALL PRIVILEGES ON <db_name>.* TO 'username'@'localhost';`
   - Replace the credentials for the database connexion in `backend/routers/form.js` with the credentials you used above.
  
## Start the server
- Run `npm start` while in the `backend` folder
- Go to `localhost:3000` on your browser.

Feel free to experiment and change stuff to practice ! 

