import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={classes.postBlock}>
      My post
      <div className={classes.item}>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <Post message="how are you?" like="16" />
      <Post message="i,m hungry" like="24" />
      <Post message="wow its you" like="6" />
    </div>
  )
}

export default MyPosts
