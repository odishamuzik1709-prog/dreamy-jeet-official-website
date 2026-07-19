const express=require('express'); const app=express(); app.use(express.json());
app.post('/chat',(req,res)=>res.json({reply:'Dreamy AI online'}));
app.listen(3000,()=>console.log('Server running'));