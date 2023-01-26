const express = require("express");
const bll = require("../bll/bllOther");
const router = express.Router();

// http://localhost:8000/other

router.route("/other").get(async function (req, resp) {
  const data = await bll.getOters();
  return resp.json(data);
});

router.route("/other/:idPost").get(async function (req, resp) {
  let idPost = req.params.idPost;
  let user = await bll.getOterByIdPost(idPost);
  return resp.json(user);
});

router.route("/other").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createOter(obj);
  return resp.json(status);
});

router.route("/other/:id").put(async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;

  let status = await bll.updateOter(id, obj);
  return resp.json(status);
});

router.route("/other/:id").delete(async function (req, resp) {
  let id = req.params.id;

  let status = await bll.deleteOter(id);
  return resp.json(status);
});

module.exports = router;
