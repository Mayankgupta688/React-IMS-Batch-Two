import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";

export default function MainComponent() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <h1>This is the Header of my Application</h1>
                    
                    <nav>
                        <a href="/" style={{padding: "5px", display: "inline-block"}}>Home</a>
                        <a href="/about" style={{padding: "5px", display: "inline-block"}}>About</a>
                        <a href="/contact" style={{padding: "5px", display: "inline-block"}}>Contact</a>
                    </nav>
                    <hr/><hr/>
                    
                    
                    <nav>
                        <Link to="/" style={{padding: "5px", display: "inline-block"}}>Home</Link>
                        <Link to="/about" style={{padding: "5px", display: "inline-block"}}>About</Link>
                        <Link to="/contact" style={{padding: "5px", display: "inline-block"}}>Contact</Link>
                    </nav>
                </header><br/><hr/>
                
                <div>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/contact" component={ContactComponent} />
                    <Route exact path="/about" component={ AboutComponent } />
                </div><br/><hr/>
                
                <footer>
                    <h3>This is Footer Component</h3>
                    </footer>
            </div>
        </BrowserRouter>
    )

}