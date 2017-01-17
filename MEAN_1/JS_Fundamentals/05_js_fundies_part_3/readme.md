Assignment: JS Fundamentals Part III

1. Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

2. The returned object should have a name property that is set to the value of the name argument that was passed into the function.

3. Each returned person object should also have the other properties from JS Fundamentals Part II:
    * distance_traveled - set this initially as zero
    * say_name - should alert the object’s name property
    * say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
    * walk - have it alert for example “Jay is walking” and increase distance_traveled by 3
    * run - have it alert for example “Jay is running” and increase distance_traveled by 10
    * crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1

Note that in all of the above examples “Jay” is the placeholder for the object’s name property.

4. Change the function name to “personConstructor”
We just created a blueprint for creating person objects!

If you have prior exposure to OOP, think about how this “constructor” function is similar to “classes”.

5. Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

If you're already familiar with JavaScript, you may know that most developers use a combination of the "this" and "new" keywords to create objects. Avoid those for this assignment -- we'll dig into them soon enough.
