const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

const categoryRoutes = require('./routes/categoryRoutes');
const featuredRoutes = require('./routes/featuredRoutes');
const cardRoutes = require('./routes/cardRoutes');

app.use(cors());

// Routes
app.use('/api/category-products', categoryRoutes);
app.use('/api/featured-products', featuredRoutes);
app.use('/api/card-list', cardRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
