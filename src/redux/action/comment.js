// actions.js
import { addDoc, collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { firestore } from "../../components/config/firebase";
import { createCommentFailure, createCommentStart, createCommentSuccess, loadCommentFailure, loadCommentStart, loadCommentSuccess } from "../reducer/comment";

export const makeComment = (comment) => async (dispatch) => {
  dispatch(createCommentStart());
  try {
    const docRef = await addDoc(collection(getFirestore(), 'comments'), {
      comment,
      timestamp: new Date(),
    });

    dispatch(createCommentSuccess({ id: docRef.id,comment }));
  } catch (err) {
    dispatch(createCommentFailure(err));
  }
}

export const loadComment = () => async (dispatch) => {
  dispatch(loadCommentStart());
  try {
    const q = query(collection(firestore, 'comments'), orderBy('timestamp', 'asc'));
    const snapshot = await getDocs(q);
    const commentsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    dispatch(loadCommentSuccess(commentsData));
  } catch (error) {
    dispatch(loadCommentFailure(error.message));
  }
}