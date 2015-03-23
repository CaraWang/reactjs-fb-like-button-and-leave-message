var MessageBox = React.createClass({
  getInitialState: function() {
    return {message: "留言⋯⋯"};
  },
  
  boxFocus: function() {
    React.findDOMNode(this.refs.messageBox).focus(); 
  },
  
  handleChange: function() {
    if (event.keyCode === 13) {
      this.props.addMessage(React.findDOMNode(this.refs.messageBox).value);
    }
    React.findDOMNode(this.refs.messageBox).value = "";
  },
  
  render: function() {
    var imgWidth = {
      width: "32px"
    }
    var myId = this.props.id;
    
    return (
      <div>
        <img src={fbId[myId].imagePath} style={imgWidth}/>
        <input
          className="message"
          ref="messageBox"
          placeholder={this.state.message}
          onKeyPress={this.handleChange}
        />
      </div>
      );
  }
  
});