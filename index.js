import React from 'react';

class Comp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           name: "name",
           category: "category"
       }
   };
   getName (event) {
       this.setState({
           name: event.target.value
       });
   }
   render(){
       return (
           <div>
               <h1>{this.props.name}</h1>
           </div>
       )
   }

};

export default Comp;