const model = require("../model/model");

const getUsers = function () {
  return new Promise((resolve, reject) => {
    model.userModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getUsersLogin = function () {
  return new Promise((resolve, reject) => {
    model.userModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createUsers = function (obj) {
  return new Promise((resolve, reject) => {
    model.userModel.findOne({ email: obj.email }, (err, user) => {
      if (user) {
        resolve("user already registration");
      } else {
        let user = model.userModel({
          userName: obj.userName,
          firstName: obj.firstName,
          lastName: obj.lastName,
          email: obj.email,
          password: obj.password,
          admin: false,
        });
        user.save(function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(user.firstName);
          }
        });
      }
    });
  });
};

const createUsersLodin = function (obj) {
  return new Promise((resolve, reject) => {
    model.userModel.findOne({ email: obj.email }, (err, user) => {
      if (user) {
        if (user.password === obj.password) {
          resolve([
            "login",
           user,
          ]);
        } else resolve("wrong password");
      } else {
        resolve("user not registration");
      }
    });
  });
};

const facebooklogin = () => async(req, res) => {
  const { userID, accessToken } = req.body;
  let urkGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  const { data } = await axios.get(urkGraphFacebook);

  const { email, name } = data;
  const newUser = { name, email, password: email };
  const user = await Users.findOne({ email });

  if (user !== null) {
      const token = jwt.sign({ _id: user._id }, "test", {
          expiresIn: "1d",
      });

      return res.json({ user: user });
  } else {
      console.log(newUser);
      const newUserd = await Users.create(newUser);
      const token = jwt.sign({ _id: newUser._id }, "test", {
          expiresIn: "1d",
      });

      return res.json({ user: newUserd });
  }
};


const googlelogin = () => async(req, res) => {
const { tokenId } = req.body;
const data = await client.verifyIdToken({ idToken: tokenId, audience: '727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com' })
const { email_verified, email, name } = data.payload
console.log(data);
if (!email_verified) return res.status(400).json('not email verified !!')
try {
    const newUser = { name, email, password: email };
    const user = await Users.findOne({ email });
    if (user) {
        return res.json({ user: user });
    } else {
        console.log(newUser);
        const newUserd = await Users.create(newUser);
        return res.json({ user: newUserd });
    }
} catch (e) {
    return res.status(400).json('samething went worng !!')
}
};


module.exports = { createUsers, createUsersLodin, getUsers, getUsersLogin ,googlelogin,facebooklogin };
