const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
 Category.findAll({
  include:[
    {
      model:Product
    }
  ]
 })
 .then(dbData => res.json(dbData))
 .catch(err=>{
  console.log(err);
  res.status(500).json(err)
 })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{
      id:req.params.id
    },
    include:[
      {
        model:Product
      }
    ]
  })
  .then(dbData=>res.json(dbData))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category,
  })
  .then(dbData=>res.json(dbData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    individualHooks:true;
    where:{
      id:req.params.id
    }
  })
  .then(dbData=>{
    res.json(dbData)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
