const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const newProduct = await Product.create({ name, price, description, image });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
