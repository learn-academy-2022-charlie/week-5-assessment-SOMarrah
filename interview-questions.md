# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash in Ruby is a dictionary like set of data. It is similar to data stored in an object in that there is a 'key' and a 'value'. The key is a symbol, and the values in a hash can be any other data. Since Ruby uses duck type, a Hash is similar to a list of data. It is enumarable, meaning methods that work on enumerable data work on Hashes. I have used map, forEach, and regex in functions on hashes.

  Researched answer: Ruby Hashes are a dictionary-like set of keys and values. Since hashes are associative arrays, they use any data type instead of numbers as an index. They keys in a hash are symbols. Hashes are considered enumerable because Ruby uses duck type. Duck type is when something is similar to another thing, the same methods should work on both. Since hashes are like lists, methods that work on lists like map, and forEach would work.



2. What is a gem?

  Your answer: A gem in ruby is a collection of pre-built code that can be installed and used. It is like node modules for JavaScript. Ruby on Rails is a gem that allows the user to make a ruby application, 

  Researched answer: A gem is a collection of code put together that allows the user to use that code inside of their own. In Ruby gems are like adding dependencies in JavaScript. In the past I have used Rspec, a collection of code that allows the user to create tests for Ruby code.



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is a collection of Gems. It is a framework created in Ruby that uses the MVC framework. MVC is Model, View, Controller. Model is a layer that contains all of the business aspects of an application, the View layer contains all of the visual aspects of an application, and the Control layer contains all of the logic aspects of an application. I have used Ruby on Rails to create a small database of movies and manipulate the tables by adding new titles, the length of movies, and their genre.

  Researched answer: Ruby on Rails is a collection of gems that allow the user to create a rails application - which is server sided. It uses the MVC framework. Model, a layer that handles the logic or the business center of an application. It uses active model. View, the layer that handles what the user visually sees. View uses action view. Controller, the brains or decision maker. The Controller handless http requests and uses action pack. I have used Ruby on Rails to make an application that holds a database. The database contained a table of Movies with titles, genres, year, and length for the movie. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a data that is stored in a table. The table has columns and rows used to organize the data. Each row is assigned a primary key that is unique to each set of data. The data in the table usually relates to each other. For example a database can contain cars. Each car could have a make, year, engine type, etc. There are many other types of databases that include cloud, commercial, object oriented.

  Researched answer: A relational databse is a database with data stored in tables. The data is then organized by columns and rows. Each row is represented by a primary key. The data in the row is related in some way. For example a database of cars could have columns named for make, year, engine type, price. Each row would contain a new car with that specific data. Ruby on Rails uses Active Record, which is a relational database.



5. What are primary keys? Why are they important?

  Your answer: A primary key is a unique identifier used in relational databases. A primary key is assigned to each row of data in the database. If the row of data is deleted, so is the primary key. A primary key that is deleted could never be used again, and is never replaced. Primary keys are important because it allows the data to be uniquely identified. It helps store, access, and manipulate specific data.

  Researched answer: A primary key is a unique identifier for database tables. In Ruby on Rails the primary keys are automatically created. If a row of data is deleted or removed from the database so is the primary key. The key is then never re-created or re-used. They are important because it is the organizational structure for that database.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer. RESTful routes are operations to make objects into HTTP requests. (HTTP Verbs)

2. JSON: JSON is JavaScript Object Notation.

3. ERB: ERB is embedded Ruby. An HTML file with Ruby embedded into it.

4. Params: a keyword that stands for parameter. In Rails params refers to the parameters being passed to the controller layer through a GET or POST request.

5. API: API is application programming interface. It allows two or more applications to talk to each other.
