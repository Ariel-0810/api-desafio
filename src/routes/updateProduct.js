const { Router } = require("express");
const  { updateProduct } = require('../controllers/updateProduct')
const express = require("express");

const router = Router();
router.use(express.json());

router.put("/:id", async (req, res) => {
    let { id } = req.params 
    try {
      let resultado = await updateProduct(req.body, id);
      res.status(200).json(resultado );
    } catch (error) {
      res.status(404).json({ error: error.message });
    } 
});

module.exports = router;