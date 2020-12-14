const express = require('express')
const Post = require('../models/post')

const router = express.Router();

router.post('', (req, res, next) => {
    const post = new Post({
      id: req.body.id,
      name: req.body.name
    });
    console.log(post)
    post.save()
    res.status(201).json({
      message: 'post updated successfully',
    })
  })
  router.get('', (req, res, next) => {
      console.log('hello first middleware');
      const post = [{
        id: '1',
        name: 'deepak'
      },
      {
          id: '2',
          name: 'deepak'
        }]
        res.status(200).json(post);
  })
  
  module.exports = router;