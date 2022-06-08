import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className="avtarDescription">
      <img
        className={classes.profile__img}
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1868C/production/_120408999_ruby2.jpg"
      ></img>
      <div className={classes.description}>Dmitry</div>
    </div>
  )
}

export default ProfileInfo
