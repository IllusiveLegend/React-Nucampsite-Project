import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((Comment) => Comment.campsiteId === parseInt(campsiteId));
};