## mongoose
--> a powerful object data modeling (ODM) library for mongoDB

--> mongoose works like a wrapper for mongoDB, so it's called mongoDB wrapper

--> mongoose only works wwith mongoDB

--> It provides a higher-level abstraction for interacting with mongoDB, making it easier to work with data

--> with mongoose you can define schemas, models and relationship for your mongoDB documents


## why mongoose when there is mongoDB
--> mongoDB takes any type of data. we can keep different variation of a object ( obj with name ,same obj with name and id, again with name, id, email). so its tough to make query

--> mongoose makes the object more effecient, readable


## how mongoose works
--> mongoose stays connected with mongoDB. we see mongoose not mongoDB

--> when we do mapping an obj , mongoose helps to keep the data in mongoDB according to the mapping

--> if there is any property missing it will give an error

--> data will be added in the mongoDB with same structure

--> methods and properties of mongoDB are applicable to mongoose

   find()     findOne()    insertMany()    count()     update()

   delete()    save()      pupulate()      

   Statics,    instance methods    --> custom methods

## key features of mongoose
1. Schema defination
2. Model creation
3. Data Validation
4. Querying
5. Middleware Support  (in req, res)
6. Population  (in referance data)


## how mongoose works with typeScript
--> in ts, for data it needs type or interface

--> with that interface we need to create schema in mongoose

--> after that we creaate model

--> on that model we do query od database