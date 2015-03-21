var FbPerson = React.createClass({
  render: function() {
    var imgWidth = {
      width: "40px"
    }
    return (
      <div className="person">
        <img src="https://graph.facebook.com/cara4bear/picture?width=800" style={imgWidth}/>
      </div>
      );
  }  
});

var FbButton = React.createClass({
        render: function() {
          var inlineStyle = {display: "inline"};
          return (
            <div>
              <div onClick={this.props.signalCount} style={inlineStyle}>
                讚
              </div>
              ・
              <div onClick={this.props.signalMessageBox} style={inlineStyle}>
                留言
              </div>
            </div>
            );
        }
      });

      var CountLike = React.createClass({
        getInitialState: function() {
          return {count: 0};
        },

        addCount: function() {
          var nowCount = this.state.count + 1;
          this.setState({count: nowCount});
          console.log(this.state.count);
        },

        render: function() {
          return (
            <div className="counter" >
              <i className="fa fa-thumbs-o-up"></i>
              {this.state.count} 個人都說讚
            </div>
          );
        }
      });
      
      var MessageBox = React.createClass({
        getInitialState: function() {
          return {message: "留言⋯⋯"};
        },
        
        boxFocus: function() {
          React.findDOMNode(this.refs.messageBox).focus(); 
        },
        
        handleChange: function() {
          console.log(event.keyCode);
          if (event.keyCode === 13) {
            console.log(React.findDOMNode(this.refs.messageBox).value);
            this.props.addMessage(React.findDOMNode(this.refs.messageBox).value);
          }
        },
        
        render: function() {
          var imgWidth = {
            width: "32px"
          }
          return (
            <div>
              <img src="https://graph.facebook.com/cara4bear/picture?width=800" style={imgWidth}/>
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
      
      var OneMessage = React.createClass({
        render: function() {
          var imgWidth = {
            width: "32px"
          };
          return (
            <div className="oneMessage">
              <img src="https://graph.facebook.com/cara4bear/picture?width=800" style={imgWidth}/>
              王思平 {this.props.content}
            </div>
            );
        }
      });

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
          return (
            <div className="onePost">
              <div className="postContent" ref="content">
                <FbPerson />
                <img src="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10994168_10203419146669583_2714181163402791581_n.jpg?oh=5a8c0d5c101120421de624c320e60da0&oe=55BCE5F6&__gda__=1437581219_39101db85ac47f76ee59e91dc4b1d369" />
                <FbButton signalCount={this.triggerCount} signalMessageBox={this.triggerFocusMessageBox} />
              </div>
              <div className="messageDiv">
                <CountLike ref="counter"/>
                {this.state.leaveMessages.map(function(msg, i) {
                  return (
                     <OneMessage key={i} content={msg} />
                  );
                }, this)}
                <MessageBox ref="message" addMessage={this.appendMessage} />
              </div>
            </div>
          );
        }
      });


setInterval(function() {
  React.render(
    <FbTemplate />,
    document.getElementById('container')
  );
}, 50);
