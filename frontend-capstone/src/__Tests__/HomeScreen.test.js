import HomeScreen from "../screens/HomeScreen"
import {render, screen} from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";


describe("<HomeScreen /> component", () => {
    
    it('Should return true', async () => {
        const value = true
        expect(value).toBe(true)
    })

    it('Should be defined', async () => {
        expect(<HomeScreen />).toBeDefined()
    })

    it('Should render correctly', async () => {
        render(<Router><HomeScreen /></Router>)
    })

    it('Should match snapshot', async () => {
        const tree = render(<Router><HomeScreen /></Router>)

        expect(tree).toMatchSnapshot()
    })

})