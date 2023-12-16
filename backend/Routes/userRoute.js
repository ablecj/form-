import express from 'express';
import { User } from '../Models/userModel.js';

const router = express.Router();

//  Route for new User
router.post('/', async(req,res)=>{
    try {
        // const { firstname, secondname, email, address } = req.body;
       if(
        !req.body.firstname ||
        !req.body.secondname ||
        !req.body.email ||
        !req.body.address 
       ) {
        return response.status(400).send({
            message: 'Send all required fields: frst name, second name, email, address',
        })
       }
    //    new user 
    const newUser ={
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        email: req.body.email,
        address: req.body.address,
    }

    const users = await User.create(newUser);
    return res.status(201).send(users);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

// Route for Get all User
router.get('/', async(req,res)=>{
    try {
        const users = await User.find({});

        return res.status(200).json({
            count: users.length,
            data: users
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Route for get One Books from database id details
router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
  
      return res.status(200).json(user);
    } catch (error) {
      console.log("error", error.message);
      res.status(500).send({ message: error.message });
    }
  });

// Route for Update User
router.put('/:id', async(req,res)=>{
    try {
        if(
            !req.body.firstname ||
            !req.body.secondname ||
            !req.body.email ||
            !req.body.address 
        ){
            return res.status(400).send({
                message: "send all required fields!"
            })
        }

        const {id} = req.params;
        const result = await User.findByIdAndUpdate(id, req.body);

        if(!result){ return res.status(404).json({message: 'user not found !'})}
        return res.status(200).send({message: "user updated sucessfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

// Delete a user
router.delete('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await User.findByIdAndDelete(id);

        if(!result){
            res.status(400).json({message: "User not found"})
        }
        return res.status(200).send({message: "User deleted sucessfully !"})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router