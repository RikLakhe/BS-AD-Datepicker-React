"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _helper = require("./helper");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Return datepicker input
 * @param {string} props.minDate, default false, format('YYYY-mm-DD')
 * @param {string} props.maxDate, default false, format('YYYY-mm-DD')
 * @param {string} props.className
 * @param {string} props.bs, default false,
 * @param {string} props.bsValue
 * @param {string} props.bsId
 * @param {string} props.ad, default true,
 * @param {string} props.adId
 * @param {string} props.adValue
 * @param {string} props.datePlaceholder
 * @param {function} props.onValueChange
 */
var useDatepicker = function useDatepicker(props) {
  var _props$minDate = props.minDate,
      minDate = _props$minDate === void 0 ? false : _props$minDate,
      _props$maxDate = props.maxDate,
      maxDate = _props$maxDate === void 0 ? false : _props$maxDate,
      className = props.className,
      _props$bs = props.bs,
      bs = _props$bs === void 0 ? false : _props$bs,
      bsId = props.bsId,
      _props$ad = props.ad,
      ad = _props$ad === void 0 ? true : _props$ad,
      adId = props.adId,
      adValue = props.adValue,
      _props$datePlaceholde = props.datePlaceholder,
      datePlaceholder = _props$datePlaceholde === void 0 ? ' ' : _props$datePlaceholde,
      onValueChange = props.onValueChange;
  var date = new Date(); // when date is fetched

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      first = _useState2[0],
      setFirst = _useState2[1]; // toggle datepicker box


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      datepickerActive = _useState4[0],
      setDatepickerActive = _useState4[1]; // datepicker set to AD as AD is default true


  var _useState5 = (0, _react.useState)('AD'),
      _useState6 = _slicedToArray(_useState5, 2),
      datepickerCalenderType = _useState6[0],
      setDatepickerCalenderType = _useState6[1]; // for datepicker division year & month dropdown


  var _useState7 = (0, _react.useState)(date.getFullYear()),
      _useState8 = _slicedToArray(_useState7, 2),
      datepickerSelectedYear = _useState8[0],
      setDatepickerSelectedYear = _useState8[1];

  var _useState9 = (0, _react.useState)(date.getMonth()),
      _useState10 = _slicedToArray(_useState9, 2),
      datepickerSelectedMonth = _useState10[0],
      setDatepickerSelectedMonth = _useState10[1];

  var _useState11 = (0, _react.useState)(date.getDate()),
      _useState12 = _slicedToArray(_useState11, 2),
      datepickerSelectedDate = _useState12[0],
      setDatepickerSelectedDate = _useState12[1]; // for actual main date division of datepicker actual selected date


  var _useState13 = (0, _react.useState)(undefined),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedYear = _useState14[0],
      setSelectedYear = _useState14[1];

  var _useState15 = (0, _react.useState)(undefined),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedMonth = _useState16[0],
      setSelectedMonth = _useState16[1];

  var _useState17 = (0, _react.useState)(undefined),
      _useState18 = _slicedToArray(_useState17, 2),
      selectedDate = _useState18[0],
      setSelectedDate = _useState18[1]; // date to display in input box


  var _useState19 = (0, _react.useState)(undefined),
      _useState20 = _slicedToArray(_useState19, 2),
      displayDate = _useState20[0],
      setDisplayDate = _useState20[1]; // @function handleCalenderTypeChange
  // @param {string} calenderType either 'AD' or 'BS'


  var handleCalenderTypeChange = function handleCalenderTypeChange(calenderType) {
    if (calenderType === 'AD') {
      var tempDate = (0, _helper.covertBSToAD)(datepickerSelectedYear, datepickerSelectedMonth + 1, datepickerSelectedDate);
      setDatepickerSelectedYear(tempDate.getFullYear());
      setDatepickerSelectedMonth(tempDate.getMonth());
      setDatepickerSelectedDate(tempDate.getDate());
      var tempSelectedDate = (0, _helper.covertBSToAD)(selectedYear, selectedMonth + 1, selectedDate);
      setSelectedYear(tempSelectedDate.getFullYear());
      setSelectedMonth(tempSelectedDate.getMonth());
      setSelectedDate(tempSelectedDate.getDate());
    } else {
      var _tempDate = (0, _helper.covertADToBS)(datepickerSelectedYear, datepickerSelectedMonth + 1, datepickerSelectedDate);

      setDatepickerSelectedYear(_tempDate === null || _tempDate === void 0 ? void 0 : _tempDate.bsYear);
      setDatepickerSelectedMonth((_tempDate === null || _tempDate === void 0 ? void 0 : _tempDate.bsMonth) - 1);
      setDatepickerSelectedDate(_tempDate === null || _tempDate === void 0 ? void 0 : _tempDate.bsDate);

      var _tempSelectedDate = (0, _helper.covertADToBS)(selectedYear, selectedMonth + 1, selectedDate);

      setSelectedYear(_tempSelectedDate === null || _tempSelectedDate === void 0 ? void 0 : _tempSelectedDate.bsYear);
      setSelectedMonth((_tempSelectedDate === null || _tempSelectedDate === void 0 ? void 0 : _tempSelectedDate.bsMonth) - 1);
      setSelectedDate(_tempSelectedDate === null || _tempSelectedDate === void 0 ? void 0 : _tempSelectedDate.bsDate);
    }
  }; // @INIT
  // add event listener when datepicker is opened
  //   remove even listener when datepicker is off


  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', function (e) {
      var dynamicDatepicker = document.getElementById('dynamic-datepicker');

      if (dynamicDatepicker && !(dynamicDatepicker === null || dynamicDatepicker === void 0 ? void 0 : dynamicDatepicker.contains(e.target))) {
        setDatepickerActive(false);
      }
    });
    return function () {
      document.removeEventListener('mouseup', function (e) {});
    };
  }, []); // @Init
  //     initialValue of datepicker set that date into respective states

  (0, _react.useEffect)(function () {
    if (!first && adValue && !(0, _helper.isEmpty)(adValue) && datepickerCalenderType === 'AD') {
      var refactoredDate = (0, _helper.refactoringDate)(adValue);

      if (refactoredDate && refactoredDate.year && refactoredDate.month && refactoredDate.date) {
        setDatepickerSelectedYear(refactoredDate.year);
        setDatepickerSelectedMonth(refactoredDate.month);
        setDatepickerSelectedDate(refactoredDate.date);
        setSelectedYear(refactoredDate.year);
        setSelectedMonth(refactoredDate.month);
        setSelectedDate(refactoredDate.date);
        setDisplayDate(refactoredDate.display);
        setFirst(true);
      } else {
        setDisplayDate('');
      }
    }
  }, [adValue]); // when selected year, month or date changes

  (0, _react.useEffect)(function () {
    var refactoredDate = selectedYear && (selectedMonth || selectedMonth === 0) && selectedDate ? (0, _helper.refactoringDate)("".concat(selectedYear, "-").concat(selectedMonth + 1, "-").concat(selectedDate)) : undefined;

    if (refactoredDate) {
      setDisplayDate(refactoredDate.display);

      if (datepickerCalenderType === 'AD') {
        var temp = {
          target: {
            value: refactoredDate.display,
            id: adId
          }
        };
        onValueChange(temp);
        var covertData = (0, _helper.covertADToBS)(selectedYear, selectedMonth + 1, selectedDate);
        var temp2 = {
          target: {
            value: "".concat(covertData.bsYear, "-").concat(covertData.bsMonth, "-").concat(covertData.bsDate),
            id: bsId
          }
        };
        onValueChange(temp2);
      } else {
        var _temp = {
          target: {
            value: refactoredDate.display,
            id: bsId
          }
        };
        onValueChange(_temp);

        var _covertData = (0, _helper.covertBSToAD)(selectedYear, selectedMonth + 1, selectedDate);

        var _temp2 = {
          target: {
            value: "".concat(_covertData.getFullYear(), "-").concat(_covertData.getMonth() + 1, "-").concat(_covertData.getDate()),
            id: adId
          }
        };
        onValueChange(_temp2);
      }
    }
  }, [selectedYear, selectedMonth, selectedDate]);
  return (
    /*#__PURE__*/
    _react["default"].createElement("div", null,
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: 'datepicker-input-div'
    },
    /*#__PURE__*/
    _react["default"].createElement("input", {
      value: displayDate,
      className: className,
      maxLength: 10,
      placeholder: datePlaceholder,
      onClick: function onClick() {
        setDatepickerActive(true);

        if (selectedYear && selectedMonth && selectedDate) {
          setDatepickerSelectedYear(selectedYear);
          setDatepickerSelectedMonth(selectedMonth);
          setDatepickerSelectedDate(selectedDate);
        }
      },
      onChange: function onChange(e) {
        setDisplayDate(e.target.value);
      },
      onBlur: function onBlur(e) {
        if ((0, _helper.isEmpty)(e.target.value)) {
          var temp = {
            target: {
              value: undefined,
              id: bsId
            }
          };
          onValueChange(temp);
          var temp2 = {
            target: {
              value: undefined,
              id: adId
            }
          };
          onValueChange(temp2);
          setSelectedYear(undefined);
          setSelectedMonth(undefined);
          setSelectedDate(undefined);
        } else {
          var refactoredDate = (0, _helper.refactoringDate)(e.target.value);

          if (refactoredDate && refactoredDate.year && refactoredDate.month && refactoredDate.date) {
            setDatepickerSelectedYear(refactoredDate.year);
            setDatepickerSelectedMonth(refactoredDate.month);
            setDatepickerSelectedDate(refactoredDate.date);
            setSelectedYear(refactoredDate.year);
            setSelectedMonth(refactoredDate.month);
            setSelectedDate(refactoredDate.date);
            setDisplayDate(refactoredDate.display);
          } else {
            setDisplayDate('');
          }
        }
      }
    }),
    /*#__PURE__*/
    _react["default"].createElement("span", {
      className: 'datepicker-input-postfix'
    }, datepickerCalenderType)), datepickerActive &&
    /*#__PURE__*/
    _react["default"].createElement("div", {
      id: 'dynamic-datepicker'
    },
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "date-wrapper"
    },
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "date-header"
    },
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "date-header-btn",
      onClick: function onClick() {
        var temp = parseInt(datepickerSelectedMonth);

        if (temp - 1 < 0) {
          temp = 11;
          setDatepickerSelectedYear(datepickerSelectedYear - 1);
        } else {
          temp -= 1;
        }

        setDatepickerSelectedMonth(temp);
      }
    }, _helper.backButton),
    /*#__PURE__*/
    _react["default"].createElement("select", {
      onChange: function onChange(e) {
        setDatepickerSelectedYear(parseInt(e.target.value));
      },
      value: datepickerSelectedYear
    }, (0, _helper.getYearDropDown)(datepickerCalenderType, datepickerSelectedYear)),
    /*#__PURE__*/
    _react["default"].createElement("select", {
      onChange: function onChange(e) {
        setDatepickerSelectedMonth(parseInt(e.target.value));
      },
      value: datepickerSelectedMonth
    }, (0, _helper.getMonthDropdown)(datepickerCalenderType)),
    /*#__PURE__*/
    _react["default"].createElement("select", {
      defaultValue: datepickerCalenderType,
      onChange: function onChange(e) {
        handleCalenderTypeChange(e.target.value);
        setDatepickerCalenderType(e.target.value);
      }
    }, ad &&
    /*#__PURE__*/
    _react["default"].createElement("option", {
      key: 'AD',
      value: 'AD'
    }, "AD"), bs &&
    /*#__PURE__*/
    _react["default"].createElement("option", {
      key: 'BS',
      value: 'BS'
    }, "BS")),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "date-header-btn",
      onClick: function onClick() {
        var temp = parseInt(datepickerSelectedMonth);

        if (temp + 1 > 11) {
          temp = 0;
          setDatepickerSelectedYear(datepickerSelectedYear + 1);
        } else {
          temp += 1;
        }

        setDatepickerSelectedMonth(temp);
      }
    }, _helper.nextButton)),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "date-body"
    },
    /*#__PURE__*/
    _react["default"].createElement("table", null,
    /*#__PURE__*/
    _react["default"].createElement("thead", null,
    /*#__PURE__*/
    _react["default"].createElement("tr", null, (0, _helper.getCalenderWeek)(datepickerCalenderType))),
    /*#__PURE__*/
    _react["default"].createElement("tbody", {
      id: 'dynamic-datepicker-body'
    }, (0, _helper.getCalenderBody)(datepickerCalenderType, datepickerSelectedYear, datepickerSelectedMonth, datepickerSelectedDate, setDatepickerSelectedDate, setDatepickerActive, selectedYear, selectedMonth, selectedDate, setSelectedYear, setSelectedMonth, setSelectedDate, minDate, maxDate)))))))
  );
};

var _default = useDatepicker;
exports["default"] = _default;