import logo from './assets/Logo.svg'
import feed from './assets/feed.svg'
import perfil from './assets/account_circle.svg'
import sair from './assets/logout.svg'
import sobre from './assets/info.svg'

import './style.css'

const Sidebar = ()=>{
    return (
        <aside>
            <img src={logo} alt="logo do codecennect" />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-publicacao'>
                            Publicar
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link item__link--ativo'>
                            <img src={feed} alt="" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={perfil} alt="" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={sobre} alt="" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={sair} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar