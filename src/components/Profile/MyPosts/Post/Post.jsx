import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.post__item__img}
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      />
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  )
}

export default Post
