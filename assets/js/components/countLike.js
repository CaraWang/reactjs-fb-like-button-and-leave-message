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