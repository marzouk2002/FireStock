import React from 'react'

function Loader(WrappedComponent) {
    return class wrapperClass extends React.Component {
        constructor(props) {
            super(props)
            this.state = {loading: false}
            this.setLoading = this.setLoading.bind(this)
        }

        setLoading(status) {
            this.setState({ loading: status })
        }

        render() {
            return (
                <>
                    {this.state.loading && 
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>}
                    <WrappedComponent setLoading={this.setLoading} {...this.props}/>
                </>
            )
        }

    }
    
}

export default Loader