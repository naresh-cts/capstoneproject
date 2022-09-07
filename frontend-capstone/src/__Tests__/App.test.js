import App from "../App"
import {render, screen} from "@testing-library/react"

describe("<App> Component", () => {
    it('Should return true', async () => {
        const value = true
        expect(value).toBe(true)
    })

    it('Should be defined', async () => {
        expect(<App />).toBeDefined()
    })

    it('Should render correctly', async () => {
        render(<App />)
    })

    it('Should match snapshot', async () => {
        const tree = render(<App />)

        expect(tree).toMatchSnapshot()
    })
})