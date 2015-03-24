var FbTemplate = React.createClass({
  getInitialState: function() {
    return {leaveMessages: ["好可愛的貓"]};
  },
  
  triggerCount: function() {
    console.log("Count more...");
    this.refs.counter.addCount();
  },

  triggerFocusMessageBox: function() {
    console.log("Message focusing.");
    this.refs.message.boxFocus();
  },
  
  appendMessage: function(messageContent) {
    this.state.leaveMessages.push(messageContent);
  },

  render: function() {
    var myId = "cara4bear";
    
    return (
      <div className="onePost">
        <div className="postContent" ref="content">
          
          <FbButton signalCount={this.triggerCount} signalMessageBox={this.triggerFocusMessageBox} />
        </div>
        <div className="messageDiv">
          <CountLike ref="counter"/>
          
        </div>
      </div>
    );
  }
});

