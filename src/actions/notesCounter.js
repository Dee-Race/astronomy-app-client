export const incrementLikes = likesCount => {
  return {
    type: "INCREMENT_LIKES",
    payload: likesCount
  };
};
