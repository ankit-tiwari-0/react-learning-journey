import style from './css/UserProfile.module.css'
function UserProfile(){
        return(
              <div>
                 <div className={style.card}>
                    <img className={style.img} src="https://plus.unsplash.com/premium_photo-1767883339941-1074dfb00bd7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className={style.text} >
                <h4 >Dexvvv</h4>
                <p>Kuchh bhii</p>
                </div>
                </div>
              </div>
        )
    }

export default UserProfile;