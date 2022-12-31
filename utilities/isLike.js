export const isLike = (email, likes) => {
    if (likes.length !== 0) {
        const currentUser = likes.find((like) => like.user === email);
        const restUser = likes.filter((like) => like.user !== email);
        if (currentUser?.like) {
            return [...restUser];
        } else {
            return [...likes, { user: email, like: "1" }];
        }
    } else {
        return [{ user: email, like: "1" }];
    }
};
