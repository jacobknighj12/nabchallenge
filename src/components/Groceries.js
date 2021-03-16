import React from "react"

class Groceries extends React.Component {
    constructor(props) {
        super()
        console.log(props)
        this.state = {
            ...props
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.id}</h2>
            </div>
        )
    }
}

export default Groceries