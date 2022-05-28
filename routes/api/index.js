const router = require("express").Router();
const thoughtsRoutes = require("./thoughts");
const usersRoutes = require("./users");

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

router.use((req, res) => {
    return res.send('Error 404, Route Not Found!');
});

module.exports = router;