(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_geometry'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_ui_ui_geometry'.");
    }
    root.kotlin_androidx_compose_ui_ui_geometry = factory(typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined' ? {} : kotlin_androidx_compose_ui_ui_geometry, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var isNaN_0 = kotlin_kotlin.$crossModule$.isNaN;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite_1;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _CornerRadius___init__impl__2810826566(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__1486232774(this_0) {
    return this_0;
  }
  function _CornerRadius___get_x__impl__69289799(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat1_0 = _CornerRadius___get_packedValue__impl__1486232774(this_0);
      var tmp$ret$0;
      $l$block: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp0_unpackFloat1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
        tmp$ret$0 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function _CornerRadius___get_y__impl__1812100134(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat2_0 = _CornerRadius___get_packedValue__impl__1486232774(this_0);
      var tmp$ret$0;
      $l$block: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp0_unpackFloat2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
        tmp$ret$0 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function CornerRadius__component1_impl_396586258(this_0) {
    return _CornerRadius___get_x__impl__69289799(this_0);
  }
  function CornerRadius__component2_impl_425215409(this_0) {
    return _CornerRadius___get_y__impl__1812100134(this_0);
  }
  function CornerRadius__copy_impl_1374741457(this_0, x, y) {
    return CornerRadius_0(x, y);
  }
  function CornerRadius__copy$default_impl_2514252884(this_0, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = _CornerRadius___get_x__impl__69289799(this_0);
    if (!(($mask0 & 2) === 0))
      y = _CornerRadius___get_y__impl__1812100134(this_0);
    return CornerRadius__copy_impl_1374741457(this_0, x, y);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.Zero_1 = CornerRadius$default(0.0, 0.0, 2, null);
  }
  Companion.prototype._get_Zero__785822851_4jg8nf_k$ = function () {
    return this.Zero_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__unaryMinus_impl_2994818949(this_0) {
    return CornerRadius_0(-_CornerRadius___get_x__impl__69289799(this_0), -_CornerRadius___get_y__impl__1812100134(this_0));
  }
  function CornerRadius__minus_impl_3459776036(this_0, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__69289799(this_0) - _CornerRadius___get_x__impl__69289799(other), _CornerRadius___get_y__impl__1812100134(this_0) - _CornerRadius___get_y__impl__1812100134(other));
  }
  function CornerRadius__plus_impl_2684949708(this_0, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__69289799(this_0) + _CornerRadius___get_x__impl__69289799(other), _CornerRadius___get_y__impl__1812100134(this_0) + _CornerRadius___get_y__impl__1812100134(other));
  }
  function CornerRadius__times_impl_3321181454(this_0, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__69289799(this_0) * operand, _CornerRadius___get_y__impl__1812100134(this_0) * operand);
  }
  function CornerRadius__div_impl_721933411(this_0, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__69289799(this_0) / operand, _CornerRadius___get_y__impl__1812100134(this_0) / operand);
  }
  function CornerRadius__toString_impl_2958732986(this_0) {
    var tmp;
    if (_CornerRadius___get_x__impl__69289799(this_0) === _CornerRadius___get_y__impl__1812100134(this_0)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__69289799(this_0), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__69289799(this_0), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__1812100134(this_0), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_1643317867(this_0) {
    return this_0.hashCode();
  }
  function CornerRadius__equals_impl_3859644295(this_0, other) {
    if (!(other instanceof CornerRadius))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.packedValue_1 = packedValue;
  }
  CornerRadius.prototype.toString = function () {
    return CornerRadius__toString_impl_2958732986(this.packedValue_1);
  };
  CornerRadius.prototype.hashCode = function () {
    return CornerRadius__hashCode_impl_1643317867(this.packedValue_1);
  };
  CornerRadius.prototype.equals = function (other) {
    return CornerRadius__equals_impl_3859644295(this.packedValue_1, other);
  };
  CornerRadius.$metadata$ = {
    simpleName: 'CornerRadius',
    kind: 'class',
    interfaces: []
  };
  function CornerRadius_0(x, y) {
    var tmp$ret$0;
    $l$block: {
      var v1_1 = toLong(toBits(x));
      var v2_2 = toLong(toBits(y));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _CornerRadius___init__impl__2810826566(tmp$ret$0);
  }
  function CornerRadius$default(x, y, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      y = x;
    return CornerRadius_0(x, y);
  }
  function toStringAsFixed(_this__1828080292, digits) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.max(digits, 0);
      break $l$block;
    }
    var clampedDigits = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = Math.pow(10.0, clampedDigits);
      break $l$block_0;
    }
    var pow = tmp$ret$1;
    var shifted = _this__1828080292 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  MutableRect.prototype._set_left__587817776_z3piel_k$ = function (_set____804775014) {
    this.left_1 = _set____804775014;
  };
  MutableRect.prototype._get_left__802434852_d9qyp0_k$ = function () {
    return this.left_1;
  };
  MutableRect.prototype._set_top__296304720_3vxdu5_k$ = function (_set____804775014) {
    this.top_1 = _set____804775014;
  };
  MutableRect.prototype._get_top__857417180_e6hfbw_k$ = function () {
    return this.top_1;
  };
  MutableRect.prototype._set_right__1217970857_ioxeng_k$ = function (_set____804775014) {
    this.right_1 = _set____804775014;
  };
  MutableRect.prototype._get_right__3576132917_bvz45n_k$ = function () {
    return this.right_1;
  };
  MutableRect.prototype._set_bottom__2266336076_l6gf1r_k$ = function (_set____804775014) {
    this.bottom_1 = _set____804775014;
  };
  MutableRect.prototype._get_bottom__2354915904_w3218g_k$ = function () {
    return this.bottom_1;
  };
  MutableRect.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.right_1 - this.left_1;
  };
  MutableRect.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  MutableRect.prototype._get_size__809037418_1k4d9o_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this.right_1 - this.left_1;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = this.bottom_1 - this.top_1;
      break $l$block_0;
    }
    return Size_0(tmp, tmp$ret$1);
  };
  MutableRect.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  MutableRect.prototype.intersect_50a7g2_k$ = function (left, top, right, bottom) {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_max_0 = this.left_1;
      tmp$ret$0 = Math.max(left, tmp0_max_0);
      break $l$block;
    }
    tmp.left_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_max_0 = this.top_1;
      tmp$ret$1 = Math.max(top, tmp1_max_0);
      break $l$block_0;
    }
    tmp_0.top_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp2_min_0 = this.right_1;
      tmp$ret$2 = Math.min(right, tmp2_min_0);
      break $l$block_1;
    }
    tmp_1.right_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp3_min_0 = this.bottom_1;
      tmp$ret$3 = Math.min(bottom, tmp3_min_0);
      break $l$block_2;
    }
    tmp_2.bottom_1 = tmp$ret$3;
  };
  MutableRect.prototype.contains_ggguyy_k$ = function (offset) {
    return ((_Offset___get_x__impl__2048295803(offset) >= this.left_1 ? _Offset___get_x__impl__2048295803(offset) < this.right_1 : false) ? _Offset___get_y__impl__3791106138(offset) >= this.top_1 : false) ? _Offset___get_y__impl__3791106138(offset) < this.bottom_1 : false;
  };
  MutableRect.prototype.set_3mqxe9_k$ = function (left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  };
  MutableRect.prototype.toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  MutableRect.$metadata$ = {
    simpleName: 'MutableRect',
    kind: 'class',
    interfaces: []
  };
  function toRect(_this__1828080292) {
    return new Rect(_this__1828080292.left_1, _this__1828080292.top_1, _this__1828080292.right_1, _this__1828080292.bottom_1);
  }
  function _Offset___init__impl__3567402130(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__2024056826(this_0) {
    return this_0;
  }
  function _Offset___get_x__impl__2048295803(this_0) {
    {
      var tmp0_check_0 = !_Offset___get_packedValue__impl__2024056826(this_0).equals(_Offset___get_packedValue__impl__2024056826(Companion_getInstance_0().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Offset is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_unpackFloat1_0 = _Offset___get_packedValue__impl__2024056826(this_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp1_unpackFloat1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
        tmp$ret$1 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _Offset___get_y__impl__3791106138(this_0) {
    {
      var tmp0_check_0 = !_Offset___get_packedValue__impl__2024056826(this_0).equals(_Offset___get_packedValue__impl__2024056826(Companion_getInstance_0().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Offset is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_unpackFloat2_0 = _Offset___get_packedValue__impl__2024056826(this_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp1_unpackFloat2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
        tmp$ret$1 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function Offset__component1_impl_4250216774(this_0) {
    return _Offset___get_x__impl__2048295803(this_0);
  }
  function Offset__component2_impl_4278845925(this_0) {
    return _Offset___get_y__impl__3791106138(this_0);
  }
  function Offset__copy_impl_3722499845(this_0, x, y) {
    return Offset_0(x, y);
  }
  function Offset__copy$default_impl_3591369608(this_0, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = _Offset___get_x__impl__2048295803(this_0);
    if (!(($mask0 & 2) === 0))
      y = _Offset___get_y__impl__3791106138(this_0);
    return Offset__copy_impl_3722499845(this_0, x, y);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Zero_1 = Offset_0(0.0, 0.0);
    this.Infinite_1 = Offset_0(FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$(), FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$());
    this.Unspecified_1 = Offset_0(FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$(), FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$());
  }
  Companion_0.prototype._get_Zero__785822851_30aknr_k$ = function () {
    return this.Zero_1;
  };
  Companion_0.prototype._get_Infinite__264239127_jl8p7v_k$ = function () {
    return this.Infinite_1;
  };
  Companion_0.prototype._get_Unspecified__2946689370_vvlnfy_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_2165925230(this_0) {
    {
      var tmp0_check_0 = !isNaN_0(_Offset___get_x__impl__2048295803(this_0)) ? !isNaN_0(_Offset___get_y__impl__3791106138(this_0)) : false;
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Offset argument contained a NaN value.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    return true;
  }
  function Offset__getDistance_impl_2762136341(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_sqrt_0 = _Offset___get_x__impl__2048295803(this_0) * _Offset___get_x__impl__2048295803(this_0) + _Offset___get_y__impl__3791106138(this_0) * _Offset___get_y__impl__3791106138(this_0);
      tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Offset__getDistanceSquared_impl_557002014(this_0) {
    return _Offset___get_x__impl__2048295803(this_0) * _Offset___get_x__impl__2048295803(this_0) + _Offset___get_y__impl__3791106138(this_0) * _Offset___get_y__impl__3791106138(this_0);
  }
  function Offset__unaryMinus_impl_2553482169(this_0) {
    return Offset_0(-_Offset___get_x__impl__2048295803(this_0), -_Offset___get_y__impl__3791106138(this_0));
  }
  function Offset__minus_impl_3225842032(this_0, other) {
    return Offset_0(_Offset___get_x__impl__2048295803(this_0) - _Offset___get_x__impl__2048295803(other), _Offset___get_y__impl__3791106138(this_0) - _Offset___get_y__impl__3791106138(other));
  }
  function Offset__plus_impl_737740800(this_0, other) {
    return Offset_0(_Offset___get_x__impl__2048295803(this_0) + _Offset___get_x__impl__2048295803(other), _Offset___get_y__impl__3791106138(this_0) + _Offset___get_y__impl__3791106138(other));
  }
  function Offset__times_impl_3087247450(this_0, operand) {
    return Offset_0(_Offset___get_x__impl__2048295803(this_0) * operand, _Offset___get_y__impl__3791106138(this_0) * operand);
  }
  function Offset__div_impl_3430066863(this_0, operand) {
    return Offset_0(_Offset___get_x__impl__2048295803(this_0) / operand, _Offset___get_y__impl__3791106138(this_0) / operand);
  }
  function Offset__rem_impl_2546897990(this_0, operand) {
    return Offset_0(_Offset___get_x__impl__2048295803(this_0) % operand, _Offset___get_y__impl__3791106138(this_0) % operand);
  }
  function Offset__toString_impl_267773934(this_0) {
    var tmp;
    if (_get_isSpecified__2832019115(this_0)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__2048295803(this_0), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__3791106138(this_0), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_3247326111(this_0) {
    return this_0.hashCode();
  }
  function Offset__equals_impl_902657467(this_0, other) {
    if (!(other instanceof Offset))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Offset ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.packedValue_1 = packedValue;
  }
  Offset.prototype.toString = function () {
    return Offset__toString_impl_267773934(this.packedValue_1);
  };
  Offset.prototype.hashCode = function () {
    return Offset__hashCode_impl_3247326111(this.packedValue_1);
  };
  Offset.prototype.equals = function (other) {
    return Offset__equals_impl_902657467(this.packedValue_1, other);
  };
  Offset.$metadata$ = {
    simpleName: 'Offset',
    kind: 'class',
    interfaces: []
  };
  function Offset_0(x, y) {
    var tmp$ret$0;
    $l$block: {
      var v1_1 = toLong(toBits(x));
      var v2_2 = toLong(toBits(y));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _Offset___init__impl__3567402130(tmp$ret$0);
  }
  function _get_isFinite__49041522(_this__1828080292) {
    return isFinite(_Offset___get_x__impl__2048295803(_this__1828080292)) ? isFinite(_Offset___get_y__impl__3791106138(_this__1828080292)) : false;
  }
  function _get_isSpecified__2832019115(_this__1828080292) {
    return !_Offset___get_packedValue__impl__2024056826(_this__1828080292).equals(_Offset___get_packedValue__impl__2024056826(Companion_getInstance_0().Unspecified_1));
  }
  function _get_isUnspecified__892174020(_this__1828080292) {
    return _Offset___get_packedValue__impl__2024056826(_this__1828080292).equals(_Offset___get_packedValue__impl__2024056826(Companion_getInstance_0().Unspecified_1));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  Companion_1.prototype._get_Zero__785822851_czuwsj_k$ = function () {
    return this.Zero_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  Rect.prototype._get_left__802434852_d9qyp0_k$ = function () {
    return this.left_1;
  };
  Rect.prototype._get_top__857417180_e6hfbw_k$ = function () {
    return this.top_1;
  };
  Rect.prototype._get_right__3576132917_bvz45n_k$ = function () {
    return this.right_1;
  };
  Rect.prototype._get_bottom__2354915904_w3218g_k$ = function () {
    return this.bottom_1;
  };
  Rect.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.right_1 - this.left_1;
  };
  Rect.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  Rect.prototype._get_size__809037418_1k4d9o_k$ = function () {
    return Size_0(this._get_width__3719200459_9isoj9_k$(), this._get_height__3088126660_jyis70_k$());
  };
  Rect.prototype._get_isInfinite__365521645_61meb1_k$ = function () {
    return ((this.left_1 >= FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? true : this.top_1 >= FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$()) ? true : this.right_1 >= FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$()) ? true : this.bottom_1 >= FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
  };
  Rect.prototype._get_isFinite__49041522_t74oi_k$ = function () {
    return ((isFinite(this.left_1) ? isFinite(this.top_1) : false) ? isFinite(this.right_1) : false) ? isFinite(this.bottom_1) : false;
  };
  Rect.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  Rect.prototype.translate_bllf6j_k$ = function (offset) {
    return new Rect(this.left_1 + _Offset___get_x__impl__2048295803(offset), this.top_1 + _Offset___get_y__impl__3791106138(offset), this.right_1 + _Offset___get_x__impl__2048295803(offset), this.bottom_1 + _Offset___get_y__impl__3791106138(offset));
  };
  Rect.prototype.translate_y4aglq_k$ = function (translateX, translateY) {
    return new Rect(this.left_1 + translateX, this.top_1 + translateY, this.right_1 + translateX, this.bottom_1 + translateY);
  };
  Rect.prototype.inflate_f59jyf_k$ = function (delta) {
    return new Rect(this.left_1 - delta, this.top_1 - delta, this.right_1 + delta, this.bottom_1 + delta);
  };
  Rect.prototype.deflate_wl1pyb_k$ = function (delta) {
    return this.inflate_f59jyf_k$(-delta);
  };
  Rect.prototype.intersect_f9p2yv_k$ = function (other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_max_0 = this.left_1;
      var tmp1_max_0 = other.left_1;
      tmp$ret$0 = Math.max(tmp0_max_0, tmp1_max_0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_max_0 = this.top_1;
      var tmp3_max_0 = other.top_1;
      tmp$ret$1 = Math.max(tmp2_max_0, tmp3_max_0);
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      var tmp4_min_0 = this.right_1;
      var tmp5_min_0 = other.right_1;
      tmp$ret$2 = Math.min(tmp4_min_0, tmp5_min_0);
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      var tmp6_min_0 = this.bottom_1;
      var tmp7_min_0 = other.bottom_1;
      tmp$ret$3 = Math.min(tmp6_min_0, tmp7_min_0);
      break $l$block_2;
    }
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  Rect.prototype.overlaps_b0bhu4_k$ = function (other) {
    if (this.right_1 <= other.left_1 ? true : other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 ? true : other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  Rect.prototype._get_minDimension__804123799_dar5w7_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = this._get_width__3719200459_9isoj9_k$();
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_min_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = this._get_height__3088126660_jyis70_k$();
        tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_min_0 = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp2_min_0, tmp3_min_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  Rect.prototype._get_maxDimension__3276784937_gu76jb_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = this._get_width__3719200459_9isoj9_k$();
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_max_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = this._get_height__3088126660_jyis70_k$();
        tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_max_0 = tmp$ret$1;
      tmp$ret$2 = Math.max(tmp2_max_0, tmp3_max_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  Rect.prototype._get_topLeft__1142003605_foqllj_k$ = function () {
    return Offset_0(this.left_1, this.top_1);
  };
  Rect.prototype._get_topCenter__2858634631_2lytph_k$ = function () {
    return Offset_0(this.left_1 + this._get_width__3719200459_9isoj9_k$() / 2.0, this.top_1);
  };
  Rect.prototype._get_topRight__1217862372_z2pxmg_k$ = function () {
    return Offset_0(this.right_1, this.top_1);
  };
  Rect.prototype._get_centerLeft__4062732815_volmxp_k$ = function () {
    return Offset_0(this.left_1, this.top_1 + this._get_height__3088126660_jyis70_k$() / 2.0);
  };
  Rect.prototype._get_center__2950577494_k1whsm_k$ = function () {
    return Offset_0(this.left_1 + this._get_width__3719200459_9isoj9_k$() / 2.0, this.top_1 + this._get_height__3088126660_jyis70_k$() / 2.0);
  };
  Rect.prototype._get_centerRight__1566154666_ymbw02_k$ = function () {
    return Offset_0(this.right_1, this.top_1 + this._get_height__3088126660_jyis70_k$() / 2.0);
  };
  Rect.prototype._get_bottomLeft__1781713401_mbj5gz_k$ = function () {
    return Offset_0(this.left_1, this.bottom_1);
  };
  Rect.prototype._get_bottomCenter__3439425259_fpzlof_k$ = function () {
    return Offset_0(this.left_1 + this._get_width__3719200459_9isoj9_k$() / 2.0, this.bottom_1);
  };
  Rect.prototype._get_bottomRight__3868996864_shn2i4_k$ = function () {
    return Offset_0(this.right_1, this.bottom_1);
  };
  Rect.prototype.contains_ggguyy_k$ = function (offset) {
    return ((_Offset___get_x__impl__2048295803(offset) >= this.left_1 ? _Offset___get_x__impl__2048295803(offset) < this.right_1 : false) ? _Offset___get_y__impl__3791106138(offset) >= this.top_1 : false) ? _Offset___get_y__impl__3791106138(offset) < this.bottom_1 : false;
  };
  Rect.prototype.toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  Rect.prototype.component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  Rect.prototype.component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  Rect.prototype.component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  Rect.prototype.component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  Rect.prototype.copy_skjbed_k$ = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  Rect.prototype.copy$default_ijqd2o_k$ = function (left, top, right, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this.left_1;
    if (!(($mask0 & 2) === 0))
      top = this.top_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    if (!(($mask0 & 8) === 0))
      bottom = this.bottom_1;
    return this.copy_skjbed_k$(left, top, right, bottom);
  };
  Rect.prototype.hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  Rect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  Rect.$metadata$ = {
    simpleName: 'Rect',
    kind: 'class',
    interfaces: []
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__2048295803(offset), _Offset___get_y__impl__3791106138(offset), _Offset___get_x__impl__2048295803(offset) + _Size___get_width__impl__3977603903(size), _Offset___get_y__impl__3791106138(offset) + _Size___get_height__impl__604880786(size));
  }
  function RoundRect_init_$Init$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      topLeftCornerRadius = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 32) === 0))
      topRightCornerRadius = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 64) === 0))
      bottomRightCornerRadius = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 128) === 0))
      bottomLeftCornerRadius = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    RoundRect.call($this, left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
    return $this;
  }
  function RoundRect_init_$Create$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $mask0, $marker) {
    return RoundRect_init_$Init$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $mask0, $marker, Object.create(RoundRect.prototype));
  }
  function _set__scaledRadiiRect__664726231($this, _set____804775014) {
    $this._scaledRadiiRect_1 = _set____804775014;
  }
  function _get__scaledRadiiRect__2423482571($this) {
    return $this._scaledRadiiRect_1;
  }
  function scaledRadiiRect($this) {
    var tmp0_elvis_lhs = $this._scaledRadiiRect_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp$ret$0;
          $l$block: {
            var scale_2 = 1.0;
            scale_2 = minRadius($this, scale_2, _CornerRadius___get_y__impl__1812100134($this.bottomLeftCornerRadius_1), _CornerRadius___get_y__impl__1812100134($this.topLeftCornerRadius_1), $this._get_height__3088126660_jyis70_k$());
            scale_2 = minRadius($this, scale_2, _CornerRadius___get_x__impl__69289799($this.topLeftCornerRadius_1), _CornerRadius___get_x__impl__69289799($this.topRightCornerRadius_1), $this._get_width__3719200459_9isoj9_k$());
            scale_2 = minRadius($this, scale_2, _CornerRadius___get_y__impl__1812100134($this.topRightCornerRadius_1), _CornerRadius___get_y__impl__1812100134($this.bottomRightCornerRadius_1), $this._get_height__3088126660_jyis70_k$());
            scale_2 = minRadius($this, scale_2, _CornerRadius___get_x__impl__69289799($this.bottomRightCornerRadius_1), _CornerRadius___get_x__impl__69289799($this.bottomLeftCornerRadius_1), $this._get_width__3719200459_9isoj9_k$());
            tmp$ret$0 = new RoundRect($this.left_1 * scale_2, $this.top_1 * scale_2, $this.right_1 * scale_2, $this.bottom_1 * scale_2, CornerRadius_0(_CornerRadius___get_x__impl__69289799($this.topLeftCornerRadius_1) * scale_2, _CornerRadius___get_y__impl__1812100134($this.topLeftCornerRadius_1) * scale_2), CornerRadius_0(_CornerRadius___get_x__impl__69289799($this.topRightCornerRadius_1) * scale_2, _CornerRadius___get_y__impl__1812100134($this.topRightCornerRadius_1) * scale_2), CornerRadius_0(_CornerRadius___get_x__impl__69289799($this.bottomRightCornerRadius_1) * scale_2, _CornerRadius___get_y__impl__1812100134($this.bottomRightCornerRadius_1) * scale_2), CornerRadius_0(_CornerRadius___get_x__impl__69289799($this.bottomLeftCornerRadius_1) * scale_2, _CornerRadius___get_y__impl__1812100134($this.bottomLeftCornerRadius_1) * scale_2));
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp0_also_0 = tmp$ret$1;
        {
        }
        {
          $this._scaledRadiiRect_1 = tmp0_also_0;
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function minRadius($this, min, radius1, radius2, limit) {
    var sum = radius1 + radius2;
    var tmp;
    if (sum > limit ? !(sum === 0.0) : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_min_0 = limit / sum;
        tmp$ret$0 = Math.min(min, tmp0_min_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = min;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Zero_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance()._get_Zero__785822851_4jg8nf_k$());
  }
  Companion_2.prototype._get_Zero__785822851_czuwsj_k$ = function () {
    return this.Zero_1;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.topLeftCornerRadius_1 = topLeftCornerRadius;
    this.topRightCornerRadius_1 = topRightCornerRadius;
    this.bottomRightCornerRadius_1 = bottomRightCornerRadius;
    this.bottomLeftCornerRadius_1 = bottomLeftCornerRadius;
    this._scaledRadiiRect_1 = null;
  }
  RoundRect.prototype._get_left__802434852_d9qyp0_k$ = function () {
    return this.left_1;
  };
  RoundRect.prototype._get_top__857417180_e6hfbw_k$ = function () {
    return this.top_1;
  };
  RoundRect.prototype._get_right__3576132917_bvz45n_k$ = function () {
    return this.right_1;
  };
  RoundRect.prototype._get_bottom__2354915904_w3218g_k$ = function () {
    return this.bottom_1;
  };
  RoundRect.prototype._get_topLeftCornerRadius__1877175950_b82mc6_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  RoundRect.prototype._get_topRightCornerRadius__2074833757_ip882j_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  RoundRect.prototype._get_bottomRightCornerRadius__2670609273_aa32v5_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  RoundRect.prototype._get_bottomLeftCornerRadius__788015858_gqpb7e_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  RoundRect.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.right_1 - this.left_1;
  };
  RoundRect.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  RoundRect.prototype.contains_ggguyy_k$ = function (point) {
    if (((_Offset___get_x__impl__2048295803(point) < this.left_1 ? true : _Offset___get_x__impl__2048295803(point) >= this.right_1) ? true : _Offset___get_y__impl__3791106138(point) < this.top_1) ? true : _Offset___get_y__impl__3791106138(point) >= this.bottom_1) {
      return false;
    }
    var scaled = scaledRadiiRect(this);
    var x;
    var y;
    var radiusX;
    var radiusY;
    if (_Offset___get_x__impl__2048295803(point) < this.left_1 + _CornerRadius___get_x__impl__69289799(scaled.topLeftCornerRadius_1) ? _Offset___get_y__impl__3791106138(point) < this.top_1 + _CornerRadius___get_y__impl__1812100134(scaled.topLeftCornerRadius_1) : false) {
      x = _Offset___get_x__impl__2048295803(point) - this.left_1 - _CornerRadius___get_x__impl__69289799(scaled.topLeftCornerRadius_1);
      y = _Offset___get_y__impl__3791106138(point) - this.top_1 - _CornerRadius___get_y__impl__1812100134(scaled.topLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__69289799(scaled.topLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__1812100134(scaled.topLeftCornerRadius_1);
    } else if (_Offset___get_x__impl__2048295803(point) > this.right_1 - _CornerRadius___get_x__impl__69289799(scaled.topRightCornerRadius_1) ? _Offset___get_y__impl__3791106138(point) < this.top_1 + _CornerRadius___get_y__impl__1812100134(scaled.topRightCornerRadius_1) : false) {
      x = _Offset___get_x__impl__2048295803(point) - this.right_1 + _CornerRadius___get_x__impl__69289799(scaled.topRightCornerRadius_1);
      y = _Offset___get_y__impl__3791106138(point) - this.top_1 - _CornerRadius___get_y__impl__1812100134(scaled.topRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__69289799(scaled.topRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__1812100134(scaled.topRightCornerRadius_1);
    } else if (_Offset___get_x__impl__2048295803(point) > this.right_1 - _CornerRadius___get_x__impl__69289799(scaled.bottomRightCornerRadius_1) ? _Offset___get_y__impl__3791106138(point) > this.bottom_1 - _CornerRadius___get_y__impl__1812100134(scaled.bottomRightCornerRadius_1) : false) {
      x = _Offset___get_x__impl__2048295803(point) - this.right_1 + _CornerRadius___get_x__impl__69289799(scaled.bottomRightCornerRadius_1);
      y = _Offset___get_y__impl__3791106138(point) - this.bottom_1 + _CornerRadius___get_y__impl__1812100134(scaled.bottomRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__69289799(scaled.bottomRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__1812100134(scaled.bottomRightCornerRadius_1);
    } else if (_Offset___get_x__impl__2048295803(point) < this.left_1 + _CornerRadius___get_x__impl__69289799(scaled.bottomLeftCornerRadius_1) ? _Offset___get_y__impl__3791106138(point) > this.bottom_1 - _CornerRadius___get_y__impl__1812100134(scaled.bottomLeftCornerRadius_1) : false) {
      x = _Offset___get_x__impl__2048295803(point) - this.left_1 - _CornerRadius___get_x__impl__69289799(scaled.bottomLeftCornerRadius_1);
      y = _Offset___get_y__impl__3791106138(point) - this.bottom_1 + _CornerRadius___get_y__impl__1812100134(scaled.bottomLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__69289799(scaled.bottomLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__1812100134(scaled.bottomLeftCornerRadius_1);
    } else {
      return true;
    }
    var newX = x / radiusX;
    var newY = y / radiusY;
    return newX * newX + newY * newY <= 1.0;
  };
  RoundRect.prototype.toString = function () {
    var tlRadius = this.topLeftCornerRadius_1;
    var trRadius = this.topRightCornerRadius_1;
    var brRadius = this.bottomRightCornerRadius_1;
    var blRadius = this.bottomLeftCornerRadius_1;
    var rect = toStringAsFixed(this.left_1, 1) + ', ' + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + toStringAsFixed(this.bottom_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__69289799(tlRadius) === _CornerRadius___get_y__impl__1812100134(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__69289799(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__69289799(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__1812100134(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  RoundRect.prototype.component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  RoundRect.prototype.component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  RoundRect.prototype.component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  RoundRect.prototype.component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  RoundRect.prototype.component5_hvouow_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  RoundRect.prototype.component6_kjz4nz_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  RoundRect.prototype.component7_c1gxya_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  RoundRect.prototype.component8_qe71el_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  RoundRect.prototype.copy_qy0ogv_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    return new RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
  };
  RoundRect.prototype.copy$default_wh3040_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this.left_1;
    if (!(($mask0 & 2) === 0))
      top = this.top_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    if (!(($mask0 & 8) === 0))
      bottom = this.bottom_1;
    if (!(($mask0 & 16) === 0))
      topLeftCornerRadius = this.topLeftCornerRadius_1;
    if (!(($mask0 & 32) === 0))
      topRightCornerRadius = this.topRightCornerRadius_1;
    if (!(($mask0 & 64) === 0))
      bottomRightCornerRadius = this.bottomRightCornerRadius_1;
    if (!(($mask0 & 128) === 0))
      bottomLeftCornerRadius = this.bottomLeftCornerRadius_1;
    return this.copy_qy0ogv_k$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
  };
  RoundRect.prototype.hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_1643317867(this.topLeftCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_1643317867(this.topRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_1643317867(this.bottomRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_1643317867(this.bottomLeftCornerRadius_1) | 0;
    return result;
  };
  RoundRect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    if (!equals(this.topLeftCornerRadius_1, tmp0_other_with_cast.topLeftCornerRadius_1))
      return false;
    if (!equals(this.topRightCornerRadius_1, tmp0_other_with_cast.topRightCornerRadius_1))
      return false;
    if (!equals(this.bottomRightCornerRadius_1, tmp0_other_with_cast.bottomRightCornerRadius_1))
      return false;
    if (!equals(this.bottomLeftCornerRadius_1, tmp0_other_with_cast.bottomLeftCornerRadius_1))
      return false;
    return true;
  };
  RoundRect.$metadata$ = {
    simpleName: 'RoundRect',
    kind: 'class',
    interfaces: []
  };
  function _get_boundingRect__2386314403(_this__1828080292) {
    return new Rect(_this__1828080292.left_1, _this__1828080292.top_1, _this__1828080292.right_1, _this__1828080292.bottom_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    return new RoundRect(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$(), rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$(), topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect$default(rect, topLeft, topRight, bottomRight, bottomLeft, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 4) === 0))
      topRight = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 8) === 0))
      bottomRight = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 16) === 0))
      bottomLeft = Companion_getInstance()._get_Zero__785822851_4jg8nf_k$();
    return RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__69289799(cornerRadius), _CornerRadius___get_y__impl__1812100134(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__663291520(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__469630284(this_0) {
    return this_0;
  }
  function _Size___get_width__impl__3977603903(this_0) {
    {
      var tmp0_check_0 = !_Size___get_packedValue__impl__469630284(this_0).equals(_Size___get_packedValue__impl__469630284(Companion_getInstance_3().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Size is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_unpackFloat1_0 = _Size___get_packedValue__impl__469630284(this_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp1_unpackFloat1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
        tmp$ret$1 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _Size___get_height__impl__604880786(this_0) {
    {
      var tmp0_check_0 = !_Size___get_packedValue__impl__469630284(this_0).equals(_Size___get_packedValue__impl__469630284(Companion_getInstance_3().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Size is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_unpackFloat2_0 = _Size___get_packedValue__impl__469630284(this_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_fromBits_0_1 = FloatCompanionObject_getInstance();
        var tmp1_fromBits_0_2 = tmp1_unpackFloat2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
        tmp$ret$1 = floatFromBits(tmp1_fromBits_0_2);
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function Size__component1_impl_3716132760(this_0) {
    return _Size___get_width__impl__3977603903(this_0);
  }
  function Size__component2_impl_3744761911(this_0) {
    return _Size___get_height__impl__604880786(this_0);
  }
  function Size__copy_impl_3099263703(this_0, width, height) {
    return Size_0(width, height);
  }
  function Size__copy$default_impl_1437740378(this_0, width, height, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = _Size___get_width__impl__3977603903(this_0);
    if (!(($mask0 & 2) === 0))
      height = _Size___get_height__impl__604880786(this_0);
    return Size__copy_impl_3099263703(this_0, width, height);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Zero_1 = Size_0(0.0, 0.0);
    this.Unspecified_1 = Size_0(FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$(), FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$());
  }
  Companion_3.prototype._get_Zero__785822851_xminaz_k$ = function () {
    return this.Zero_1;
  };
  Companion_3.prototype._get_Unspecified__2946689370_4m8pwc_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_1467909547(this_0) {
    return _Size___get_width__impl__3977603903(this_0) <= 0.0 ? true : _Size___get_height__impl__604880786(this_0) <= 0.0;
  }
  function Size__times_impl_946796232(this_0, operand) {
    return Size_0(_Size___get_width__impl__3977603903(this_0) * operand, _Size___get_height__impl__604880786(this_0) * operand);
  }
  function Size__div_impl_916110493(this_0, operand) {
    return Size_0(_Size___get_width__impl__3977603903(this_0) / operand, _Size___get_height__impl__604880786(this_0) / operand);
  }
  function _Size___get_minDimension__impl__4021532005(this_0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = _Size___get_width__impl__3977603903(this_0);
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_min_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = _Size___get_height__impl__604880786(this_0);
        tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_min_0 = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp2_min_0, tmp3_min_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _Size___get_maxDimension__impl__4056371319(this_0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = _Size___get_width__impl__3977603903(this_0);
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_max_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = _Size___get_height__impl__604880786(this_0);
        tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_max_0 = tmp$ret$1;
      tmp$ret$2 = Math.max(tmp2_max_0, tmp3_max_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function Size__toString_impl_1464982208(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !_Size___get_packedValue__impl__469630284(this_0).equals(_Size___get_packedValue__impl__469630284(Companion_getInstance_3().Unspecified_1));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__3977603903(this_0), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__604880786(this_0), 1) + ')';
    } else {
      {
        tmp = 'Size.Unspecified';
      }
    }
    return tmp;
  }
  function Size__hashCode_impl_149567089(this_0) {
    return this_0.hashCode();
  }
  function Size__equals_impl_3268146445(this_0, other) {
    if (!(other instanceof Size))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Size ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.packedValue_1 = packedValue;
  }
  Size.prototype.toString = function () {
    return Size__toString_impl_1464982208(this.packedValue_1);
  };
  Size.prototype.hashCode = function () {
    return Size__hashCode_impl_149567089(this.packedValue_1);
  };
  Size.prototype.equals = function (other) {
    return Size__equals_impl_3268146445(this.packedValue_1, other);
  };
  Size.$metadata$ = {
    simpleName: 'Size',
    kind: 'class',
    interfaces: []
  };
  function toRect_0(_this__1828080292) {
    return Rect_0(Companion_getInstance_0()._get_Zero__785822851_30aknr_k$(), _this__1828080292);
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    $l$block: {
      var v1_1 = toLong(toBits(width));
      var v2_2 = toLong(toBits(height));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _Size___init__impl__663291520(tmp$ret$0);
  }
  function _get_center__2950577494(_this__1828080292) {
    return Offset_0(_Size___get_width__impl__3977603903(_this__1828080292) / 2.0, _Size___get_height__impl__604880786(_this__1828080292) / 2.0);
  }
  function _get_isSpecified__2832019115_0(_this__1828080292) {
    return !_Size___get_packedValue__impl__469630284(_this__1828080292).equals(_Size___get_packedValue__impl__469630284(Companion_getInstance_3().Unspecified_1));
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.CornerRadius = CornerRadius;
  _.$crossModule$.MutableRect = MutableRect;
  _.$crossModule$.Offset = Offset_0;
  _.$crossModule$.Offset_1 = Offset;
  _.$crossModule$.Rect = Rect_0;
  _.$crossModule$.Rect_1 = Rect;
  _.$crossModule$.RoundRect = RoundRect_0;
  _.$crossModule$.Size = Size_0;
  _.$crossModule$.Size_1 = Size;
  _.$crossModule$._get_boundingRect__2386314403 = _get_boundingRect__2386314403;
  _.$crossModule$._get_center__2950577494 = _get_center__2950577494;
  _.$crossModule$._get_isFinite__49041522 = _get_isFinite__49041522;
  _.$crossModule$._get_isSpecified__2832019115 = _get_isSpecified__2832019115;
  _.$crossModule$._get_isUnspecified__892174020 = _get_isUnspecified__892174020;
  _.$crossModule$.toRect = toRect;
  _.$crossModule$.toRect_1 = toRect_0;
  _.$crossModule$.CornerRadius$default = CornerRadius$default;
  _.$crossModule$._CornerRadius___get_x__impl__69289799 = _CornerRadius___get_x__impl__69289799;
  _.$crossModule$._CornerRadius___get_y__impl__1812100134 = _CornerRadius___get_y__impl__1812100134;
  _.$crossModule$.Offset__getDistanceSquared_impl_557002014 = Offset__getDistanceSquared_impl_557002014;
  _.$crossModule$.Offset__getDistance_impl_2762136341 = Offset__getDistance_impl_2762136341;
  _.$crossModule$.Offset__hashCode_impl_3247326111 = Offset__hashCode_impl_3247326111;
  _.$crossModule$.Offset__minus_impl_3225842032 = Offset__minus_impl_3225842032;
  _.$crossModule$.Offset__plus_impl_737740800 = Offset__plus_impl_737740800;
  _.$crossModule$._Offset___get_x__impl__2048295803 = _Offset___get_x__impl__2048295803;
  _.$crossModule$._Offset___get_y__impl__3791106138 = _Offset___get_y__impl__3791106138;
  _.$crossModule$.Size__hashCode_impl_149567089 = Size__hashCode_impl_149567089;
  _.$crossModule$._Size___get_height__impl__604880786 = _Size___get_height__impl__604880786;
  _.$crossModule$._Size___get_minDimension__impl__4021532005 = _Size___get_minDimension__impl__4021532005;
  _.$crossModule$._Size___get_packedValue__impl__469630284 = _Size___get_packedValue__impl__469630284;
  _.$crossModule$._Size___get_width__impl__3977603903 = _Size___get_width__impl__3977603903;
  _.$crossModule$.Companion_getInstance = Companion_getInstance;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_0;
  _.$crossModule$.Companion_getInstance_2 = Companion_getInstance_1;
  _.$crossModule$.Companion_getInstance_3 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_ui_ui_geometry.js.map