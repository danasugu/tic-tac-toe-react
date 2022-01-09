function TicTacToe() {
  return /*#__PURE__*/React.createElement("div", { className: "grid" }, /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null), /*#__PURE__*/
  React.createElement(Square, null));


}
function Square() {
  return /*#__PURE__*/React.createElement("div", { className: "square" }, "Square");
}

function Circle() {
  return;
  /*#__PURE__*/React.createElement("div", null, "Circle");

}

function Cross() {
  return /*#__PURE__*/React.createElement("div", null, "Cross> ");
};

function Result() {
  return /*#__PURE__*/React.createElement("div", null, "Result");
}
ReactDOM.render( /*#__PURE__*/
React.createElement(TicTacToe, null),
document.getElementById('app'));