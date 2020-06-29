const express=require('express')
const app=express()
app.use(express.urlencoded({extended: true}))

let task=[
    'sample task'
]

app.get('/',(req,res)=>{
let tasklist=task.map(t=>`<li>${t}</li>`).join('\n')

    res.send(
        
        `<html>
        <body>
        <form action='/' method='POST'>
        <input name='newTask'>
        <button type='submit'>Add</button>
        </form>
        <ul>${tasklist}</ul> 
         </body>
         </html>`
        
        
    );
})
app.post('/',function(req,res){
   task.push(req.body.newTask)
    

    res.redirect('/')
      
})


app.listen(7002,()=>{
console.log("started")
})
