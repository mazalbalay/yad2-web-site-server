const model = require("../model/model");

const getOthers = function () {
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

const getOther = function (idPost) {
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

const createOther = function (obj) {
  return new Promise((resolve, reject) => {
    let other = model.otherModel(obj);

    other.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(other.userName);
      }
    });
  });
};

const updateOther = function (id, obj) {
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

const deleteOther = function (id) {
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

module.exports = { getOthers, getOther, createOther, updateOther, deleteOther };
