const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_mydatabase', {useNewUrlParser:true});

BlogPost.create({
    Title: 'The Guide to Not Giving a Good Goddamn about Coding Camp',
    body: 'If you were fool enough to give ten thousand dollars to some fly by night charade of an organization that you got what you deserved. Did you really thing you would learn what takes others roughly 2 - 3 years in only six months.  Congratulations jackass, you have now earned the GED of coding.'
}, (error, blogpost) => {
    console.log(error, blogpost)
})

BlogPost.create({
    Title: 'Why Coding my save my life',
    body: 'It is pretty simple. If you want a new career you have to find some new skils. For me, that is coding and lots of it. I cannot think of an easier way to do this than to learn an entirely new tool set.'},
   (error, blogpost) =>{
       console.log (error, blogpost)
   })

