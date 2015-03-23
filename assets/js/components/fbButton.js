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