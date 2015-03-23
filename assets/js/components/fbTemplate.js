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
          <FbPerson id={myId}/>
          <img src="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10994168_10203419146669583_2714181163402791581_n.jpg?oh=5a8c0d5c101120421de624c320e60da0&oe=55BCE5F6&__gda__=1437581219_39101db85ac47f76ee59e91dc4b1d369" />
          <FbButton signalCount={this.triggerCount} signalMessageBox={this.triggerFocusMessageBox} />
        </div>
        <div className="messageDiv">
          <CountLike ref="counter"/>
          {this.state.leaveMessages.map(function(msgInfo, i) {
            return (
               <OneMessage key={i} id={myId} content={msgInfo} />
            );
          }, this)}
          <MessageBox id={myId} ref="message" addMessage={this.appendMessage} />
        </div>
      </div>
    );
  }
});

