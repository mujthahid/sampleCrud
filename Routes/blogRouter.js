const router = require('express').Router()
const db = require('../database')


router.get('/',(req,res)=>{
    let query = db.query('SELECT * FROM blog',(err,result)=>{
        if(err) console.log(err)
        else {
    res.render('Home',{result})
   
}
        
    })
})

router.get('/blog/create',(req,res)=>{
    res.render('createBlog')
})

router.get('/blog/view/:id',(req,res)=>{
    let id = req.params.id
    let query = db.query('SELECT * FROM blog WHERE id =?',[id],(err,result)=>{
        if(err) console.log(err)
        else{
            let blog = result[0]
            res.render('viewBlog',{blog})
        }
    })
})

router.post('/blog/create',(req,res)=>{
    
    let post = {title:req.body.title,content:req.body.content}
    let inserted = db.query('INSERT INTO blog SET ?',post,(err,result,fields)=>{
        if(err)console.log(err)
        else {
            res.redirect('/')
        }
    })

})

router.get('/blog/edit/:id',(req,res)=>{
let id = req.params.id;
let getBlog = db.query('SELECT * FROM blog WHERE id = ?',[id],(err,result)=>{
    if(err) console.log(err)
    else{
        let blog = result[0]
    res.render('editBlog',{blog})
    }
})
})

router.post('/blog/edit',(req,res)=>{
    
    let updated = db.query(`UPDATE blog SET title = "${req?.body?.title}",
     content = "${req?.body?.content}" WHERE id =${req.body.id}`,(err,result)=>{
        if(err) console.log(err)
        else{
            
            res.redirect('/')
        }
    })
})

router.delete('/blog/delete/:id',(req,res)=>{

let deleted = db.query(`DELETE FROM blog WHERE id =${req.params.id}`,(err,result)=>{
    if(err) console.log(err)
    else{
        res.status(200).send('success')
    }
})
})


module.exports = router;