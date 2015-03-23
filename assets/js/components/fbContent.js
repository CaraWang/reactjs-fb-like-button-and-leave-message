var FbContent = React.createClass({
  render: function() {
    if (isset(this.props.img)) { 
        var images = this.props.img.map(function(imgPath) {
            return (
                <img src={imgPath} />
            );
        });
    }
    
    return (
        <div className="fbContent">
            {this.props.contentText}
        </div>
        );
    }  
});