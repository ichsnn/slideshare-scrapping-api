import { Router } from "express";

const index = Router();

index.route('/');

index.get('/', (req, res) => {
    res.json(["Welcome 👋"])
})

export default index;