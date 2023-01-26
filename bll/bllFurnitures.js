const model = require("../model/model");

const getFurnitures = function () {
  return new Promise((resolve, reject) => {
    model.furnitureModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getFurnitureByIdPost = function (idPost) {
  return new Promise((resolve, reject) => {
    model.furnitureModel.find({ idPost: idPost }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createFurniture = function (obj) {
  return new Promise((resolve, reject) => {
    let Furniture = model.furnitureModel(obj);
    Furniture.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(Furniture.userName);
      }
    });
  });
};

const updateFurniture = function (id, obj) {
  return new Promise((resolve, reject) => {
    model.furnitureModel.findByIdAndUpdate(id, obj, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Updated !!");
      }
    });
  });
};

const deleteFurniture = function (id) {
  return new Promise((resolve, reject) => {
    model.furnitureModel.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Deleted !!");
      }
    });
  });
};

module.exports = { getFurnitures, getFurnitureByIdPost, createFurniture, updateFurniture, deleteFurniture };
