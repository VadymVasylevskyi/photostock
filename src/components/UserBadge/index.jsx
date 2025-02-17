import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function UserBadge({nickName, avatarUrl, id}) {
    const navigate = useNavigate()
    function onUserBadgeClick() {
        navigate(`/${id}`)
    }
    return (
        <div className='cnUserBadgeRoot' onClick={onUserBadgeClick}>
            {avatarUrl ? <img src={avatarUrl} alt='logo' className='cnUserBadgeAvatar' /> : <div className='cnUserBadgePlaceholder' /> }  
            <span className='cnUserBadgeName'>{nickName}</span>
        </div>
    )

}