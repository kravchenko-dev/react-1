import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <NavLink to={'/dialogs/' + props.id}>
      <div className={`${classes.dialog} ${classes.active}`}>{props.name}</div>
    </NavLink>
  )
}

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Andrey" id="1" />
        <DialogItem name="Kseniya" id="2" />
        <DialogItem name="Vasiliy" id="3" />
        <DialogItem name="Mila" id="4" />
        <DialogItem name="Zeyko" id="5" />
        <DialogItem name="Stanislav" id="6" />
        <DialogItem name="Ira" id="7" />
        <DialogItem name="Anna" id="8" />
        <DialogItem name="Sveta" id="9" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="how is your learnig React?" />
        <Message message="What you doing now?" />
        <Message message="You want a bear?" />
        <Message message="HGo to the traveli" />
      </div>
    </div>
  )
}

export default Dialogs
