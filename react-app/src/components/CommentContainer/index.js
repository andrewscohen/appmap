import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../store/comments";
import Comment from "../Comment";
import CommentForm from "../CommentForm";

const CommentContainer = () => {
  const dispatch = useDispatch();
  const { locationId } = useParams();
  const comments = useSelector(state => state.comments);
  const [updateContainer, setUpdateContainer] = useState(false);

  useEffect(() => {
    dispatch(getComments(locationId));
  }, [dispatch, locationId, updateContainer]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      {comments.length ? (
        comments.map(comment => <Comment key={comment.id} comment={comment} setUpdateContainer={setUpdateContainer} />)
      ) : (
        <p style={{ textAlign: "center" }}>Be the first to add a comment!</p>
      )}
      <CommentForm />
    </>
  );
};

export default CommentContainer;
