import React, { Component } from 'react';
import Modal from './modal.js';
import Addproduct from './Addproduct';
import {Button, Form} from 'react-bootstrap';
import {ListItem,List,ListItemText,Divider,Slider,Rating} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

class Lists extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          category: "Shoes",
          title: "Adidas",
          price: '$20'
          
        }, {
            category: "Shoes",
            title: "Nike",
            price: '$70'
        }, {
            category: "Shoes",
            title: "Reebok",
            price: '$60'
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
          <div>
              <div className="row" style={{padding:'10px'}}>
                  <div className='card col-sm-4'data-toggle="modal" data-target="#exampleModal"
                    onClick={() => this.replaceModalItem(index)}>
                  <div style={{backgroundRepeat:'no-repeat'}}>
                    <img src="https://sneakernews.com/wp-content/uploads/2012/02/nike-roshe-run-black-anthracite-siren-red-3.jpg" style={{marginLeft:'40px', width:'220px'}}/>
                    </div>
                    <div style={{textAlign:'center'}}><b>{item.title}</b></div>
                    <div style={{textAlign:'center',}}>{item.price}</div>
                  </div>
                  <div className='card col-sm-4'data-toggle="modal" data-target="#exampleModal"
                    onClick={() => this.replaceModalItem(index)}>
                  <div style={{backgroundRepeat:'no-repeat'}}>
                    <img src="https://sneakernews.com/wp-content/uploads/2014/07/nike-roshe-run-team-red-black-01.jpg" style={{marginLeft:'40px', width:'220px',height:'200px'}}/>
                    </div>
                    <div style={{textAlign:'center'}}><b>{item.title}</b></div>
                    <div style={{textAlign:'center',}}>{item.price}</div>
                  </div>
                  <div className='card col-sm-4'data-toggle="modal" data-target="#exampleModal"
                    onClick={() => this.replaceModalItem(index)}>
                  <div style={{backgroundRepeat:'no-repeat'}}>
                    <img src="https://i.pinimg.com/236x/a7/57/19/a7571904c4bb7327193239eb3018b1dd--roshe-sports.jpg" style={{marginLeft:'40px', width:'220px',height:'200px'}}/>
                    </div>
                    <div style={{textAlign:'center'}}><b>{item.title}</b></div>
                    <div style={{textAlign:'center',}}>{item.price}</div>
                  </div>

        </div>  
        
        
        </div>

      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div style={{ padding:'20px' }}>
          <h1>Products</h1>
          <div style={{float:'right',marginTop:'-40px'}}><Addproduct/></div><br></br>
          <Form style={{float:'right',width:'153px'}}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                            <option>Default Sorting</option>
                            <option>High to Low Price</option>
                            <option>Low to High Price</option>
                            <option>Most Popular</option>
                            
                        </Form.Control>
                </Form.Group>
            </Form><br></br>
        </div>
        <div className='row'>
            <div className="col-sm-3">
            <h4 style={{ padding:'20px' }}>Categories</h4>
            
        <List
          style={{
            marginTop: "4%",
            fontSize: 10,
          }}
        >
          <ListItem button>
            <ListItemText
              style={{ fontSize: 10}}
              primary="Books"

            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              style={{ fontSize: 10}}
              primary="Shoes"
              
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              style={{ fontSize: 10}}
              primary="T-shirts"
              
            />
          </ListItem>
          <Divider />
        </List>
        <h5>Filter By Price</h5>
        <Slider/>
        <p>Price 20$ - 500$</p>
        <Button className='btncol'>Filter</Button>
        <h5>Top Rated Products</h5>
        <div className='row'>
        <div className='col-sm-3'>
            <img src="https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000002933146-1000002933145_03-750-1.jpg" style={{width:'50px',height:'50px'}}/>
        </div>
        <div className='col-sm-3'>
            <p>Mug Mockups</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-sm-3'>
            <img src="https://peterengland.imgix.net/img/app/product/3/310919-1418321.jpg" style={{width:'50px',height:'50px'}}/>
        </div>
        <div className='col-sm-3'>
            <p>Peter england</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-sm-3'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/611TWd7sDIL._UY500_.jpg" style={{width:'50px',height:'50px'}}/>
        </div>
        <div className='col-sm-3'>
            <p>Sneakers</p>
        </div>
        </div>
        
        
            </div>
            <div className="col-sm-9" style={{padding:'10px'}}>
                {brochure}
            </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination className="btncol"
          count={3}
          color='secondary'
        />
      </div>
            
         
        <Modal
          category={modalData.category}
          title={modalData.title}
          price={modalData.price}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default Lists;
