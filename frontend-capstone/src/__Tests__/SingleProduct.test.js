import SingleProduct from "../screens/SingleProduct"
import {render, screen} from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";


describe("<SingleProduct /> component", () => {
    
    it('Should return true', async () => {
        const value = true
        expect(value).toBe(true)
    })

    it('Should be defined', async () => {
        expect(<SingleProduct />).toBeDefined()
    })

    it('Should render correctly', async () => {
        render(<Router><SingleProduct /></Router>)
    })

    it('Should match snapshot', async () => {
        const tree = render(<Router><SingleProduct match={{params: {id: 1}}} /></Router>)

        expect(tree).toMatchSnapshot()
    })

})