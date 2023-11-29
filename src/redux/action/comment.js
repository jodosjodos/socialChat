import { loadCommentFailure, loadCommentStart, loadCommentSuccess } from "../reducer/comment";




export const makeComment = (comment) => async (dispatch) => {
  dispatch(loadCommentStart());
  try {
    console.log(comment)
    dispatch(loadCommentSuccess(comment))
    
  }
  catch(err) {
    dispatch(loadCommentFailure(err))
  }
}
