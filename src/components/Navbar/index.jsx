import UserBadge from '../UserBadge'
import './styles.css'

export default function Navbar({nickName, avatarUrl, id}) {
    return(
        <div className="cnNavbarRoot">
            <div className="cnNavbarWrapper">
                <span>PhotoStock</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
            
        </div>
    )
}