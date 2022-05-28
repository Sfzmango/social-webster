const router = require('express').Router();
const { Users } = require("../../models/User");

// get users
router.get("/", async (req,res) => {
    try {
        Users.find({}, (err, res) => {
            if (res) {
                res.status(200).json(res);
            }
            else {
                console.log("User Get Error...");
                res.status(500).json({message: "User Get Error..."});
            }
        })
    }
    catch (err) { 
    console.log(err);
 }
});

router.get("/:id",  async (req,res) => {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Invalid User ID...' })
              : res.json(user)
          )
          .catch((err) => {
            console.log("User Get Error...");
            res.status(500).json(err);
            });
})

module.exports = router;