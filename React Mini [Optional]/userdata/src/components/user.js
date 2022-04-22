import React from 'react'
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import './user.css';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: null ,
            per_page : null,
            total : null,
            total_pages:null,
            data:null,
            support:null,
            isSearched : false,
            flag : true,
            pager:1

        }
    }
    handleClick = () => {

                    if(this.state.flag===true){
                        this.setState({
                        flag :false,
                        pager : 2
                        })
                    }
                    else{
                        this.setState({
                        flag :true,
                        pager : 1
                        })
                    }
            };

    render(){
        fetch(`https://reqres.in/api/users/?page=${this.state.pager}`)
                .then(res=>res.json())
                .then(res=>{
                   this.setState({
                        page: res.page ,
                        per_page : res.per_page,
                        total : res.total,
                        total_pages:res.total_pages,
                        data: res.data,
                        support: res.support,
                        isSearched : true,
                    })
        })

        return(
            <div>
                {
                            this.state.isSearched?<span>
                            {this.state.data.map((e)=>(
                                <div className="card1" >
                                <center>
                                <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={e.avatar} />
                                  <Card.Body>
                                    <Card.Title>{e.first_name} {e.last_name}</Card.Title>
                                    <Card.Text>
                                      {e.email}
                                    </Card.Text>
                                    
                                    <Button variant="primary" className="button button2" href={`mailto:${e.email}`} target="_blank">Mail</Button>

                                  </Card.Body>
                                </Card>
                                </center>
                              </div>

                                ))}
                                <div className="footer">

                                    <p >
                                        {this.state.support.text}) &nbsp;
                                        <a href={this.state.support.url} target="_blank" rel="noreferrer">
                                        Support Us
                                        </a>
                                    </p>
                                </div>


                            </span>:
                                <div>
                                    <p style={{color:"red"}}>Something Went Wrong</p>
                                </div>
                 }
                 <button  className="button button2" onClick={this.handleClick}>Toggle</button>
               </div>

        )
    }
}
export default User;
