const express=require('express')

const app=express()
const hbs=require('hbs')

app.set('view engine','hbs')

hbs.registerPartials(__dirname+'/views/partials')

app.get('/home',function(req,res){
    res.render('home.hbs',{
        title:'My contact',
        emailsVisible:true,
        emails:['abcabc@mycorp.com','aybce@mycorp.com'],
        phone:'+123467890',
    })
})

app.get('/',function(_,res){
    res.render('main.hbs')
})

app.listen(4000,(err)=>{
    if(err) console.log(err);

    console.log('Listening port 4000');
})