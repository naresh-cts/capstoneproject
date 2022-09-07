import {Products} from "../components/Pages/Products"
import {render, screen} from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";


describe("<Products /> component", () => {
    
    it('Should return true', async () => {
        const value = true
        expect(value).toBe(true)
    })

    it('Should be defined', async () => {
        expect(<Products />).toBeDefined()
    })

    it('Should render correctly', async () => {
        render(<Router><Products /></Router>)
    })

    it('Should match snapshot', async () => {
        const tree = render(<Router><Products /></Router>)

        expect(tree).toMatchSnapshot()
    })

})