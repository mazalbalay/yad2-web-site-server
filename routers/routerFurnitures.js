const express = require("express");
const bll = require("../bll/bllFurnitures");
const router = express.Router();

// http://localhost:8000/furnitures

router.route("/furnitures").get(async function (req, resp) {
  const data = await bll.getfurnitures();
  return resp.json(data);
});

router.route("/furnitures/:idPost").get(async function (req, resp) {
  let idPost = req.params.idPost;
  let user = await bll.getFurniture(idPost);
  return resp.json(user);
});

router.route("/furnitures").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createFurniture(obj);
  return resp.json(status);
});

router.route("/furnitures/:id").put(async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;

  let status = await bll.updateFurniture(id, obj);
  return resp.json(status);
});

router.route("/furnitures/:id").delete(async function (req, resp) {
  let id = req.params.id;

  let status = await bll.deleteFurniture(id);
  return resp.json(status);
});

module.exports = router;
