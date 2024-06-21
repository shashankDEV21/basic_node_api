
const express = require('express');
let app = express();
let moviesRoute=require('./Routes/movieRoutes')

// const logger=(req,res,next)=>{
//     log('Inside custom middleware(mw)')
// next()
// }
// app.use(logger)
app.use(express.json()) //it will add the request body to request object


app.use('/api/v1/movies',moviesRoute)


module.exports=app;
