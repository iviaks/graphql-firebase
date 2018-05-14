const firestore = require('firebase-admin').firestore;

const resolveFunctions = {
  Query: {
    user(_, { id }) {
      return firestore()
        .collection('UserData')
        .doc(id.toString())
        .get()
        .then(querySnap => querySnap.data());
    }
  }
};

module.exports = resolveFunctions;
