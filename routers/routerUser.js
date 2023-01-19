const express = require("express");
const bll = require("../bll/bllUser");
const router = express.Router();

router.route("/registration").get(async function (req, resp) {
  const data = await bll.getUsers();
  return resp.json(data);
});
router.route("/login").get(async function (req, resp) {
  const data = await bll.getUsersLogin();
  return resp.json(data);
});

router.route("/registration").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createUsers(obj);
  return resp.json(status)
});

router.route("/login").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createUsersLodin(obj);
  return resp.json(status)
});

router.post("/facebooklogin", bll.facebooklogin());
router.post("/googlelogin", bll.googlelogin());

module.exports = router;
