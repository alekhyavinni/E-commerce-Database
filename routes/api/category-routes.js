const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
      model: Product,
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  }); 
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  }); 
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category,
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  }); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;