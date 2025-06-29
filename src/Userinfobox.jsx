import userImg from './assets/leon.jpg'
export function Userinfobox() {
    return (
        <div className="flex align-items-center userinfobox">
            <div className="user-profile">
               <img src={userImg} alt="" />
            </div>
            <div className="userinfobox-content">
                <p className='text-color-light'> Rahat</p>
                <p className='text-color-light'> rahat@gmail.com</p>
            </div>
        </div>
    )
}