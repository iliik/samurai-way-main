import ReactDOM from "react-dom";
import App from "../App";

it('render without crashing',() =>{
    const div = document.createElement('div')
    // eslint-disable-next-line react/jsx-no-undef
    ReactDOM.render(<App/>,div)
    ReactDOM.unmountComponentAtNode(div)
})