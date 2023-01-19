const express = require("express");
const bll = require("../bll/bllCar");
const router = express.Router();

// http://localhost:8000/cars

router.route("/cars").get(async function (req, resp) {
  const data = await bll.getCars();
  return resp.json(data);
});

router.route("/cars/:idPost").get(async function (req, resp) {
  let idPost = req.params.idPost;
  let user = await bll.getCarByIdPost(idPost);
  return resp.json(user);
});

router.route("/cars").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createCar(obj);
  return resp.json(status);
});

router.route("/cars/:id").put(async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;

  let status = await bll.updateCar(id, obj);
  return resp.json(status);
});

router.route("/cars/:id").delete(async function (req, resp) {
  let id = req.params.id;

  let status = await bll.deleteCar(id);
  return resp.json(status);
});

module.exports = router;
