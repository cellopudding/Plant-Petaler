const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Indoor' },
    { name: 'Outdoor' },
    { name: 'Edible' },
    { name: 'Poisonous' }
    
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'European Silver Fir',
      description:'This amazing fir eventually reaches considerable height, with a lovely, lush shape; its layered branches adorned with mid-green needles with silver undersides make it an eye-catching and beautiful evergreen addition to any landscape.',
      image: 'european-silver-fir.png',
      category: categories[1]._id,
      price: 3.50,
      quantity: 500
    },
    {
      name: 'Pyramidalis Silver Fir',
      description:
      'This variety of tree has a narrowly pyramidal shape when young, with dense, dark-green needles and silver undersides. Its compact, columnar form makes it ideal for small areas, making it a wonderful accent for any landscape.',
      image: 'pyramidalis-silver-fir.png',
      category: categories[1]._id,
      price: 6.99,
      quantity: 500
    },
    {
      name: 'Flowering Maple',
      category: categories[0]._id,
      description:'This small, ornamental accent tree is quite uncommon and offers something for all seasons. In late spring, it produces drooping panicles of urn-shaped flowers, followed by similar seeds. In the fall, the tree provides a brilliant red color, along with a very distinctive habit. However, keep in mind that it requires very specific growing conditions.',
      image: 'flowering-maple.png',
      price: 7.99,
      quantity: 20
    },
    
    {
      name: 'Sunset Huskmallow',
      category: [categories[1]._id, categories[2]._id],
      description:'This small, ornamental accent tree is quite uncommon and offers something for all seasons. In late spring, it produces drooping panicles of urn-shaped flowers, followed by similar seeds. In the fall, the tree provides a brilliant red color, along with a very distinctive habit. However, keep in mind that it requires very specific growing conditions.',
      image: 'sunset-huskmallow.png',
      price: 7.99,
      quantity: 20
    }
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'John',
    lastName: 'Smith',
    email: 'jonhsmith@hotmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[1]._id, products[2]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@hotmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[1]._id, products[4]._id],
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});

