import "./MenuLateral.css"

const MenuLateral = () => {
    return(
        <aside>
            <img src="./img/Logo.svg" alt="logo do code conect" />
            <nav>
                <ul className="lista-links">
                    <li>
                        <a className="link-destaque" href="#">Publicar</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/feed.svg"/>
                            Feed
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/account_circle.svg"/>
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/info.svg"/>
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logout.svg"/>
                            Sair
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default MenuLateral