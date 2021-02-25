import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
// import {submitComment} from '../../store/location1';

function LocationComment() {
    // const [commentBody, setCommentBody] = useState("");
    // const {location_id} = useParams();
    // const dispatch = useDispatch();

    // const sessionUser = useSelector(state => state.session.user);

    // const onSubmit = (event) => {
    //     event.preventDefault();

    //     const commentInfo = {
    //         userId: sessionUser.id,
    //         location_id,
    //         comment,
    //     }
    //     dispatch(submitComment(commentInfo));
    // }

  return (
    <>

    <h1>Hello from Location Comment!</h1>
        {/* <div className="review-grid">
            <form className="comment-form" onSubmit={onSubmit}>
                <p className="review-form-header">Community Board</p>
                <p className="add-body">Tell us about your experience</p>
                <div className="body-input-container">
                    <input className="body-input"
                    type="text-area"
                    placeholder="your text here..."
                    value={commentBody}
                    onChange={(event) => setCommentBody(event.target.value)}
                    />
                </div>
                <div className="submit-button-holder">
                    <button id="submit-button">Submit</button>
                </div>
            </form>
        </div> */}
    </>
  );
}

export default LocationComment
