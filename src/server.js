// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(bodyParser.json());

// const products = []; 
// const users = [{ email: 'admin@example.com', password: 'password', token: 'admin-token' }];

// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find(u => u.email === email && u.password === password);
//   if (user) {
//     const token = jwt.sign({ email }, 'your-secret-key');
//     res.json({ token });
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// });

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.post('/api/products', (req, res) => {
//   const { name, price } = req.body;
//   products.push({ id: products.length + 1, name, price });
//   res.status(201).send('Product added');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
