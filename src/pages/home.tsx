import { Component } from "react";
import '../styles/styles.css';
import '../styles/root.css';
import FooterComp from "../components/footerComponent";
import HeaderComp from "../components/headerComponent";


export default class Home extends Component {
    render() {
        return (
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="welcome">
                            <h1>Bem-vindo ao sistema do PetLovers!</h1>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}