import React from 'react'
import "./user.css"


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            URL : "https://reqres.in/api/users",
            page: null ,
            per_page : null,
            total : null,
            total_pages:null,
            data:null,
            support:null,
            isSearched : false,
        }
    }

    getData = () =>{
        var APIUrl = `${this.state.URL}`
        fetch(APIUrl)
            .then(res=>res.json())
            .then(res=>{
                if(res.cod !==200){
                    alert("Someting Went wrong")
                    return false
                }
               var page: res.page ,
               var per_page : res.per_page,
               var total : res.total,
               var total_pages:res.total_pages,
               var data:res.data,
               var support:res.support,
                this.setState({
                    page: page ,
                    per_page : per_page,
                    total : total,
                    total_pages:total_pages,
                    data:data,
                    support:support,
                    isSearched : false,
                })
                console.log(page,data)
            })
    }

    render(){
        return(
            <div>
                <center>
                    <h1 className="heading">Weather App</h1>
                    <div className="main">
                        <p className="tag">Welcome</p>
                        <input type="text" id="city" className="city" placeholder="City Name" />
                        {
                            this.state.isSearched?<span>
                                <h2>{this.state.cityName}-{this.state.Temp}</h2>
                                <img src={this.state.Icon} />
                            </span>:""
                        }
                    </div>
                    <div>
                        <button className="but" onClick ={()=> this.getData()}>Data</button>
                    </div>
                </center>
            </div>
        )
    }
}
export default User;