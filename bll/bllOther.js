const model = require("../model/model");

const getOters = function () {
  return new Promise((resolve, reject) => {
    model.otherModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getOterByIdPost = function (idPost) {
  return new Promise((resolve, reject) => {
    model.otherModel.find({ idPost: idPost }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createOter = function (obj) {
  return new Promise((resolve, reject) => {
    let Oter = model.otherModel(obj);
    Oter.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(Oter.userName);
      }
    });
  });
};

const updateOter = function (id, obj) {
  return new Promise((resolve, reject) => {
    model.otherModel.findByIdAndUpdate(id, obj, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Updated !!");
      }
    });
  });
};

const deleteOter = function (id) {
  return new Promise((resolve, reject) => {
    model.otherModel.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Deleted !!");
      }
    });
  });
};

module.exports = { getOters, getOterByIdPost, createOter, updateOter, deleteOter };
