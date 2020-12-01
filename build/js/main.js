(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var myTest = function myTest() {
    var bodyPage = document.querySelector("body");
    var testButton = bodyPage.querySelector(".button-test-js");

    if (!testButton) {
      return;
    }

    var onClickButton = function onClickButton() {
      alert("JS \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442!!!"); // eslint-disable-line no-alert
    };

    testButton.addEventListener("click", onClickButton);
  };

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);
    }

    _createClass(App, null, [{
      key: "init",
      value: function init() {
        myTest();
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL3Rlc3QuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteVRlc3QgPSAoKSA9PiB7XG4gIGxldCBib2R5UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHlgKTtcbiAgbGV0IHRlc3RCdXR0b24gPSBib2R5UGFnZS5xdWVyeVNlbGVjdG9yKGAuYnV0dG9uLXRlc3QtanNgKTtcbiAgaWYgKCF0ZXN0QnV0dG9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG9uQ2xpY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgYWxlcnQoYEpTINGA0LDQsdC+0YLQsNC10YIhISFgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxuICB9O1xuICB0ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgb25DbGlja0J1dHRvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBteVRlc3Q7XG4iLCJpbXBvcnQgbXlUZXN0IGZyb20gXCIuL3Rlc3RcIjtcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbXlUZXN0KCk7XG4gIH1cbn1cblxuQXBwLmluaXQoKTtcbndpbmRvdy5BcHAgPSBBcHA7XG4iXSwibmFtZXMiOlsibXlUZXN0IiwiYm9keVBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXN0QnV0dG9uIiwib25DbGlja0J1dHRvbiIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFwcCIsImluaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0VBQ25CLE1BQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULFFBQWY7RUFDQSxNQUFJQyxVQUFVLEdBQUdILFFBQVEsQ0FBQ0UsYUFBVCxtQkFBakI7O0VBQ0EsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0VBQ2Y7RUFDRDs7RUFFRCxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDeEJDLElBQUFBLEtBQUssMERBQUwsQ0FEd0I7RUFFekIsR0FGRDs7RUFHQUYsRUFBQUEsVUFBVSxDQUFDRyxnQkFBWCxVQUFxQ0YsYUFBckM7RUFDRCxDQVhEOztNQ0VNRzs7Ozs7Ozs2QkFDVTtFQUNaUixNQUFBQSxNQUFNO0VBQ1A7Ozs7OztFQUdIUSxHQUFHLENBQUNDLElBQUo7RUFDQUMsTUFBTSxDQUFDRixHQUFQLEdBQWFBLEdBQWI7Ozs7In0=
