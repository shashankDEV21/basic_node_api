const app=require('./app')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'})
const { log } = require('console');
const { type } = require('os');

mongoose.connect(process.env.CONN_STR)
.then(()=>{
console.log('DB Connection Successful');
}).catch(()=>{
    console.log('Some Error Occured');
})

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name cannot be empty'], //this is validator and msg appears when user doesn't provide name
        unique:true
    },
    description:String,
    duration:{
        type:Number,
        required:[true, 'Duration cannot be empty']
    },
    ratings: {
        type:Number,
        default:1.0
    }
})
 const Movie=mongoose.model('Movie',movieSchema) //this is model the first parameter is name of collection in DB and second one is schema name

 const testMovie=new Movie({
    name:'Intersteller',
    description:'A sci-fi movie directed by Nolan',
    duration:120,
    ratings:4.5
 })
testMovie.save()
.then((doc)=>{console.log(doc);})
.catch((err)=>{console.log('There is some error during save in DB: '+err);})

const port=process.env.PORT||3000
app.listen(port,()=>{
    log('server is started............')
})