import React,{Component} from "react";


class UncontrolForm extends Component {
    


    handleSubmit = event => {
      event.preventDefault();
      const data = {};

      data.name = event.target.name.value;
      data.email = event.target.email.value;
      data.password = event.target.password.value;

      console.log(data);
      event.target.reset();
    }

    render(){
        return(
            <div className="Container">
                <h1>Hello DinIslam</h1>
                <div className="Container">
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name = 'name' className="form-control" placeholder="Write your Name" />

                    <input type="email" name = 'email' className="form-control" placeholder="info@gmail.com" />

                    <input type="password" name = 'password' className="form-control" placeholder="*******" />
                    <div className="Btn-data">
                      <button className="Btn">Submit</button>
                    </div>
                  </form>
                </div>

            </div>
        )
    }

}


export default UncontrolForm;