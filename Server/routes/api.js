const express = require('express')

const  User = require('../modules/user')

const jwt = require('jsonwebtoken')

const router = express.Router()

const mongoose = require('mongoose')

const db = "mongodb://Mounish:Mounish123@ds121461.mlab.com:21461/eventdb"

mongoose.connect(db,err => {
    if(err){
        console.log('Error' + err)
    }else{
        console.log('connected to mango db')
    }
})

router.get('/',(req,res)=>{

    res.send('From API Router')
})

router.post('/register',(req,res) => {
    let userData = req.body
    let user = new User(userData)

    user.save((error,registeredUser) =>
    {
        if(error){
            console.log(error)
        }else{
            let payload = {subject : registeredUser._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }

    })
})

router.post('/login',(req,res)=>{

    let userData =req.body

    User.findOne({email: userData.email},(error,user) =>
     {
            if(error){
                console.log(error)
            }else{
                if(!user){
                   res.status(401).send('Invalid Email')
                }else
                if(user.password !== userData.password)
                {
                    res.status(401).send('Invalid Password') 
                } else{
                    let payload = {subject : user._id}
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }
    })
})

router.get('/events',(req,res) =>{

    let events = [
        {
            "_id" : "1",
            "name" : "Mounish",
            "description": "this is kichha",
            "date" : "04/2/2018"

        },
        {
            "_id" : "2",
            "name" : "Huli",
            "description": "this is Huli",
            "date" : "06/03/2018"

        },
        {
            "_id" : "3",
            "name" : "Gowda",
            "description": "this is Gowda",
            "date" : "26/04/2018"

        },
        {
            "_id" : "4",
            "name" : "Mounish",
            "description": "this is kichha",
            "date" : "26/04/2018"

        },
        {
            "_id" : "5",
            "name" : "Huli",
            "description": "this is Huli",
            "date" : "26/04/2018"

        },
        {
            "_id" : "6",
            "name" : "Gowda",
            "description": "this is Gowda",
            "date" : "26/04/2018"

        }

    ]
    res.json(events)


})

router.get('/special',(req,res) =>{

    let specials = [
        {
            "_id" : "1",
            "name" : "Mounish",
            "description": "this is kichha",
            "date" : "26/04/2018"

        },
        {
            "_id" : "2",
            "name" : "Huli",
            "description": "this is Huli",
            "date" : "26/04/2018"

        },
        {
            "_id" : "3",
            "name" : "Gowda",
            "description": "this is Gowda",
            "date" : "26/04/2018"

        },
        {
            "_id" : "6",
            "name" : "Mounish",
            "description": "this is kichha",
            "date" : "26/04/2018"

        },
        {
            "_id" : "5",
            "name" : "Huli",
            "description": "this is Huli",
            "date" : "26/04/2018"

        },
        {
            "_id" : "4",
            "name" : "Gowda",
            "description": "this is Gowda",
            "date" : "26/04/2018"

        }

    ]
    res.json(specials)


})



router.get('/user',(req,res) =>{

    let user = [
        
    {
      "transaction_id": "string",
      "status_code": 0,
      "support_message": "string",
      "status_message": "string",
      "brand_matches": [
        {
          "brand_name": "Apple",
          "brand_image_url": "./assets/apple.JPG"
        }
      ]
    },
    {
      "transaction_id": "string",
      "status_code": 0,
      "support_message": "string",
      "status_message": "string",
      "brand_matches": [
        {
          "brand_name": "Huawei",
          "brand_image_url": "./assets/huawei.JPG"
        }
      ]
    },
    {
      "transaction_id": "string",
      "status_code": 0,
      "support_message": "string",
      "status_message": "string",
      "brand_matches": [
        {
          "brand_name": "Samsung",
          "brand_image_url": "./assets/samsung.JPG"
        }
      ]
    }
  ]
    res.json(user)


})


router.get('/price',(req,res) =>{

    let prices = [
        {
          "name": "The Birds",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster1.jpg"
        },
                {
          "name": "The Birds",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "Rear Window",
          "poster_image": "poster3.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster_image": "poster1.jpg"
        },
        {
          "name": "The Birds",
          "poster_image": "poster1.jpg"
        }
      ]
    res.json(prices)


})

module.exports = router
