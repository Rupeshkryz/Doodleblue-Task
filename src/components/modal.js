import React, { Component } from 'react';


class Modals extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            category: '',
            title: '',
            price:'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.category,
            title: nextProps.title,
            price: nextProps.price,
        });
    }

    categoryHandler(e) {
        this.setState({ category: e.target.value });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    priceHandler(e) {
        this.setState({ price: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Products</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Product category</span> <input value={this.state.category} onChange={(e) => this.categoryHandler(e)} /></p>
                            <p><span className="modal-lable">Product Title</span> <input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">price:</span> <input value={this.state.price} onChange={(e) => this.priceHandler(e)} /></p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btncol" data-dismiss="modal">Close</button>
                            <button type="button" className="btncol" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modals;