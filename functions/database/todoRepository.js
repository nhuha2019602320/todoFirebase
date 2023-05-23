const serviceAccount = require("../serviceAccount.json");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const docRef = db.collection("todos");

/**
 *
 * @returns
 */
async function getAllTodo() {
  const todoRespon = await docRef.get();
  let todoLists = [];
  return todoRespon.docs.map((doc) => {
    return todoLists.push({ id: doc.id, ...doc.data() });
  });
}

/**
 *
 * @param {*} id
 * @returns
 */
async function getOneTodo(id) {
  const datares = docRef.doc(id);
  const doc = await datares.get();

  return { id: doc.id, ...doc.data() };
}

/**
 *
 * @param {*} dataReq
 * @returns
 */
async function createNewTodo(dataReq) {
  return docRef.add(dataReq);
}

/**
 *
 * @param {*} listId
 * @returns
 */
async function deleteTodoById(listIds) {
  return Promise.all(listIds.map((id) => docRef.doc(id).delete()));
}

/**
 *
 * @param {*} fields
 * @param {*} id
 * @returns
 */
async function updateTodoById(fields, id) {
  return Promise.all(docRef.doc(id).update(fields));
}

/**
 *
 * @param {*} listId
 * @returns
 */
async function updateManyTodoById(listId) {
  return await listId.forEach((id) => {
    return docRef.doc(id).update({
      isCompleted: true,
    });
  });
}

module.exports = {
  getAllTodo,
  getOneTodo,
  createNewTodo,
  deleteTodoById,
  updateTodoById,
  updateManyTodoById,
};
