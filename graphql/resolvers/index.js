const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    Post:{
commentCount(parnet){
    console.log(parnet)
    return parnet.comments.length;
},
likeCount(parnet){
    console.log(parnet)
    return parnet.likes.length;
}
    },
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation


  },
  Subscription: {
      ...postsResolvers.Subscription
  }
};