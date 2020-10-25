var express = require("express");
var router = express.Router();
const jwt = require("../auth/jwt");

const authGuardMW = (req, res, next) => {
    jwt.verifyToken(req.headers.token)
        .then((ok) => next())
        .catch((err) => {
            console.log(err);
            res.json({ err: "Ops something went wrong" });
        });
};

router.get("/", function (req, res, next) {
    res.json({ msg: `Node server ${new Date()}` });
});

router.get("/error", function (req, res, next) {
    console.log(req.query);
    res.status(500).json({ msg: `Node server ${new Date()}` });
});

router.get("/:id", authGuardMW, function (req, res, next) {
    res.json({ msg: `Node server ${new Date()}`, id: req.params.id });
});

router.post("/", function (req, res, next) {
    console.log(req.headers);
    res.json({ userData: { id: req.body.id, token: req.body.token } });
});

router.post("/login", function (req, res, next) {
    let usersData = [
        { us: "kenny", ps: 1234 },
        { us: "stan", ps: 1234 },
    ];
    let findUser = false;
    for (let user of usersData) {
        if (user.us === req.body.us) {
            findUser = true;
            break;
        }
    }
    if (findUser) {
        jwt.generateToken({ data: "fbjhnebhfvijyh3789749t38489" })
            .then((token) => {
                res.json({ token: token });
            })
            .catch((err) => res.json({ err: "Filed to generate token" }));
    } else {
        res.json({ err: "Ps or Us is incorect" });
    }
});

module.exports = router;
