# learnOAuth
Learn OAuth



# Heroku commands 

  - See the logs of the app running in heroku

```bash

# Check the logs 
heroku logs --tail

# Check how many dynos are running the app at the moment. 

$ heroku ps 
Free dyno hours quota remaining this month: 550h 0m (100%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

=== web (Free): npm start (1)
web.1: up 2017/02/05 22:32:03 +0530 (~ 11m ago)

# Tell heroku how many dynos you want the application to run on. 

# Take off all dynos 

$ heroku ps:scale web=0
Scaling dynos... done, now running web at 0:Free
$ heroku ps 
Free dyno hours quota remaining this month: 550h 0m (100%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

No dynos on ⬢ evening-garden-93201

# Put back one dyno
$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:Free
$ heroku ps 
Free dyno hours quota remaining this month: 550h 0m (100%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

=== web (Free): npm start (1)
web.1: up 2017/02/05 22:49:53 +0530 (~ 6s ago)





```


## Procfile 

  - https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
  - Declare the command that should be used to start the app. 
  - Dyno runs the command provided in Procfile. 
  - 

Procfile

```text 

web: node index.js

```