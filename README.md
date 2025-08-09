Hi I'm Cayetano and here is the code for a Timeline. 


# What you like about your implementation.
It is a challenging test, where I had to figure out different edge cases to render a timeline. it was the first time I implemented something like that from scrach
I implemented something similar but I used libraries, but now I only used a library related to Drag and Drop. It was funny!

# What you would change if you were going to do it again.
- Maybe I would like to validate my github account, I haven't used it in my new computer and I had problems when I wanted to upload my code
- Check more desings on Pinterest to get a better idea about the UI. 
- think more about Y movements to allow to the customer to change task between lanes. 


# How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
- First I had to understand a timeline, at the beginning I started to google it and see how it looks, I had a wrong idea. 
- After clarifing I create a new main component where I was able to render TimeLine, I had all the logic there
- Then when the basic logic was ready I installed a package called Chakra-ui for ui components
- Then I finished the design I wanted. 
- I started to break each functionality in small components that I can reuse. 
- make some improvements when the items are updeted to avoid running nested for loops. O(n^2)

# How you would test this if you had more time.
- I would like to add the functionality to move task between lanes, currently the drag and drop actions only works in the same lane, this is something I would like to add
- Message outputs, I wanted to add toast to give user feedback when they update a task, for example, when the name is changed or the task was moved.
- better design, currently it is a basic desing, it looks good but it can be better.
- Add unit test, I wasn't able to add unit test and this is a must for a project, no matter which project. 
- Validations, for example what happens if there is a collitions between activities, for this case I wanted to validate them and trigger a toast error.