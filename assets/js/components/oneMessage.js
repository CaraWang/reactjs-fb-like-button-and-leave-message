var OneMessage = React.createClass({
  render: function() {
    var imgWidth = {
      width: "32px"
    };
    var myId = this.props.id;
    var fbLink = "https://www.facebook.com/" + myId;
    return (
      <div className="oneMessage">
        <img src={fbId[myId].imagePath} style={imgWidth}/>
        <div className="oneMessageContent">
            {fbId[myId].name} {this.props.content}
        </div>
      </div>
      );
  }
});