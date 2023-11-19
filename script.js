/**
 * script.js - Complex JavaScript Code
 * 
 * This code demonstrates a complex implementation of a social media platform.
 * It includes user authentication, post creation, comment system, like/unlike functionality, and more.
 *
 * @author John Doe
 * @version 1.0
 */

// User class to represent a social media user
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }

  addFriend(user) {
    this.friends.push(user);
  }

  likePost(post) {
    post.likes.increment();
  }

  unlikePost(post) {
    post.likes.decrement();
  }
}

// Post class to represent a user's post
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.comments = [];
    this.likes = new LikeCounter();
  }

  addComment(user, content) {
    const comment = new Comment(user, content);
    this.comments.push(comment);
    return comment;
  }

  getCommentsCount() {
    return this.comments.length;
  }

  editContent(newContent) {
    this.content = newContent;
  }
}

// Comment class to represent a comment on a post
class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }

  editContent(newContent) {
    this.content = newContent;
  }
}

// LikeCounter class to keep track of likes on a post
class LikeCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}

// Usage Example:

// Create users
const user1 = new User("John Doe", "john@example.com", "password1");
const user2 = new User("Jane Smith", "jane@example.com", "password2");

// Add users as friends
user1.addFriend(user2);
user2.addFriend(user1);

// Create posts
const post1 = user1.createPost("Hello world!");
const post2 = user2.createPost("This is an awesome post!");

// Add comments on posts
const comment1 = post1.addComment(user2, "Nice post!");
const comment2 = post2.addComment(user1, "I agree!");

// Like posts
user2.likePost(post1);
user1.likePost(post2);

// Output post content, comments count, and likes count
console.log("Post 1 Content:", post1.content);
console.log("Post 1 Comments Count:", post1.getCommentsCount());
console.log("Post 1 Likes Count:", post1.likes.count);

console.log("Post 2 Content:", post2.content);
console.log("Post 2 Comments Count:", post2.getCommentsCount());
console.log("Post 2 Likes Count:", post2.likes.count);

// Edit post and comment content
post1.editContent("Hello world! (Updated)");
comment2.editContent("I disagree!");

// Output updated post content and comment content
console.log("Updated Post 1 Content:", post1.content);
console.log("Updated Comment 2 Content:", comment2.content);
