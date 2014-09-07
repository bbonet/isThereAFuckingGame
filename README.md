# Is there a fucking ____ game today?

Running the code
-------

First, the compiled code is not checked in so you will have to build the project using [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/):

    cd <location-of-the-downloaded-project>
    npm install
    bower install
    grunt

Because this project makes same-origin requests you will have to use some sort of container to run the code. The simplest way is to use python but tomcat jetty etc will work fine.
    
    I used node.js/express to run the server.
    Go to your project folder and run node server.js
    I deployed to heroku and set the server.js up in the proc file.
    
Create a version for your favorite team
-------

There are three things that need to be done to add a team:

####Edit the application variables:
- Edit the @homeTeamColor variable in <project>/app/styles/main.less
- Edit the homeTeam and homeStadium variables in <project>/app/scripts/main.js

####Retrieve a schedule and generate the json:
- Go to http://avalanche.nhl.com/club/page.htm?id=32591
- Download Full Season Schedule CSV
- Run python csv2json.py <Full Schedule.csv> app/data/schedule.json
- Run Grunt.

####Edit the HTML:
- You will need to change the title and meta data to be about your team rather than the avs


Many many thanks to [isthereafuckingrockiesgametoday](https://github.com/baer/isThereAFuckingGame) for the inspiration.

License
-------

MIT LICENSE

Copyright (c) 2012 Box UK

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
