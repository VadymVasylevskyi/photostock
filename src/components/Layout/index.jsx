import Navbar from '../Navbar'
import './styles.css'

export default function Layout({nickName, avatarUrl, id, children}) {
  return (
    <div className="cnLayoutRoot">
        <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id} />
        <div className="cnLayoutBody">
            {children}
        </div>
    </div>
  )
}

