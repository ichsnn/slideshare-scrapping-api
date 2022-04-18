import { Router } from "express";

const slides = Router();

slides.get('/slides', (req, res) => {
    res.send(req.url)
})

export default slides;