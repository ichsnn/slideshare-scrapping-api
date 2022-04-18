import { Router } from "express";

const index = Router();

index.route('/');

index.get('/', (req, res) => {
    res.send('Welcome')
})

export default index;