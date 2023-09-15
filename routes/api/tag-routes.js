const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
 Tag.findAll({
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

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
 Tag.findOne({
  where:{
    id:req.params.id
  },
  include:[
    {
    model:Product
    }
  ]
 })
 .then(dbData=>{
  res.json(dbData)
 })
 .catch(err=>{
  console.log(err)
  res.status(500).json()
 })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name:req.body.tag
  })
  .then(dbData=>res.json(dbData))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{
    individualHooks:true,
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
  // delete on tag by its `id` value
});

module.exports = router;
