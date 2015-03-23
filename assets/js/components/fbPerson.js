var FbPerson = React.createClass({
  render: function() {
  var imgWidth = {
    width: "40px"
  }
  var myId = this.props.id;
  var fbLink = "https://www.facebook.com/" + myId;
  return (
    <div className="person">
        <img src={fbId[myId].imagePath} style={imgWidth} />
        <a href={fbLink}>
            {fbId[myId].name}
        </a>
         分享了1張
        <a href={fbId[myId].photoSet[0]}>
            照片
        </a>
    </div>
    );
  }  
});