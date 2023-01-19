const model = require("../model/model");

const getCars = function () {
  return new Promise((resolve, reject) => {
    model.carModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getCarByIdPost = function (idPost) {
  return new Promise((resolve, reject) => {
    model.carModel.find({ idPost: idPost }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createCar = function (obj) {
  return new Promise((resolve, reject) => {
    let car = model.carModel(obj);
    car.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(car.userName);
      }
    });
  });
};

const updateCar = function (id, obj) {
  return new Promise((resolve, reject) => {
    model.carModel.findByIdAndUpdate(id, obj, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Updated !!");
      }
    });
  });
};

const deleteCar = function (id) {
  return new Promise((resolve, reject) => {
    model.carModel.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Deleted !!");
      }
    });
  });
};

module.exports = { getCars, getCarByIdPost, createCar, updateCar, deleteCar };
