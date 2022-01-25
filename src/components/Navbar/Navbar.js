import React from "react"
import { MenuItems } from './MenuItems'
import './Navbar.scss'


export class Navbar extends React.Component {
    state = { clicked: false }

     handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav id="navbar">
                <section>
                <header>
                    <div className="menu-title">
                        <h3><strong>Mozilla</strong> Labs</h3>
                    </div>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'icon-close' : 'icon-menu'}> 
                        </i>
                    </div>
                </header>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>

            </section>
            </nav>
        )
    }
}

export default Navbar