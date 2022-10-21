const express = require('express'); 
const app = express(); 
const port =process.env.port||  5000; 
const cors = require('cors')
const categories = require('./data/categories.json'); 
const news = require('./data/news.json');
app.use(cors())
app.get("/", (req,res)=> {
   res.send('Dragron sever is running now'); 
})

app.get('/news', (req,res)=>{
   res.send(news); 
})
app.get('/news-categories', (req,res)=> {
      res.send(categories); 
})

app.get('/news/:id', (req, res)=> {
   const id = req.params.id; 
   const selectedNews = news.find(n => n._id === id); 
   res.send(selectedNews); 
})

app.get('/category/:id', (req, res)=>{
   const id = req.params.id; 
   if(id=== '08'){
      res.send(news);
   }else{
      const selectetNewses = news.filter(n => n.category_id === id); 
      res.send(selectetNewses); 
   }
   
})
app.listen(port, ()=>{
   console.log(`server is runiing on port: ${port}`)
})

