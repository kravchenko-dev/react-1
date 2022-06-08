import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img
          className={classes.backGrImg}
          src="https://gmedia.playstation.com/is/image/SIEPDC/no-mans-sky-section-background-desktop-02-ps4-en-14nov18?$native--t$"
        ></img>
      </div>
      <div className="avtar-description">
        <ProfileInfo />
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
