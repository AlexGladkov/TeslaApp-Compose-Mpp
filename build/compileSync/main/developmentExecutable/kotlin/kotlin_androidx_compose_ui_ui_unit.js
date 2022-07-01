(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui_geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_unit'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_ui_ui_unit'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_unit'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_ui_ui_unit'.");
    }
    root.kotlin_androidx_compose_ui_ui_unit = factory(typeof kotlin_androidx_compose_ui_ui_unit === 'undefined' ? {} : kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_ui_ui_geometry);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_geometry) {
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_2;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast_1;
  var roundToInt = kotlin_kotlin.$crossModule$.roundToInt;
  var isInfinite = kotlin_kotlin.$crossModule$.isInfinite;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect_1;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_3;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size;
  var _Size___get_packedValue__impl__469630284 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_packedValue__impl__469630284;
  var _Size___get_width__impl__3977603903 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_width__impl__3977603903;
  var _Size___get_height__impl__604880786 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_height__impl__604880786;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  var isNaN_0 = kotlin_kotlin.$crossModule$.isNaN;
  var Comparable = kotlin_kotlin.$crossModule$.Comparable;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var _Offset___get_x__impl__2048295803 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_x__impl__2048295803;
  var _Offset___get_y__impl__3791106138 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_y__impl__3791106138;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset;
  var abs = kotlin_kotlin.$crossModule$.abs;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  //endregion
  'use strict';
  //region block: pre-declaration
  function toPx(_this__1828080292) {
    return _Dp___get_value__impl__3303478217(_this__1828080292) * this._get_density__3015598889_l5pazb_k$();
  }
  function roundToPx(_this__1828080292) {
    var px = this.toPx_u0ojv5_k$(_this__1828080292);
    var tmp;
    if (isInfinite(px)) {
      tmp = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = roundToInt(px);
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toSp(_this__1828080292) {
    return _get_sp__1413130958_1(_Dp___get_value__impl__3303478217(_this__1828080292) / this._get_fontScale__2136167286_zbth86_k$());
  }
  function toPx_0(_this__1828080292) {
    {
      var tmp0_check_0 = equals(_TextUnit___get_type__impl__2460701423(_this__1828080292), Companion_getInstance_9()._get_Sp__1413100206_xxwv9k_k$());
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Only Sp can convert to Px';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    return _TextUnit___get_value__impl__1070471396(_this__1828080292) * this._get_fontScale__2136167286_zbth86_k$() * this._get_density__3015598889_l5pazb_k$();
  }
  function roundToPx_0(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_roundToInt_0 = this.toPx_x7oik4_k$(_this__1828080292);
      tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toDp(_this__1828080292) {
    {
      var tmp0_check_0 = equals(_TextUnit___get_type__impl__2460701423(_this__1828080292), Companion_getInstance_9()._get_Sp__1413100206_xxwv9k_k$());
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Only Sp can convert to Px';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    return _Dp___init__impl__1377471179(_TextUnit___get_value__impl__1070471396(_this__1828080292) * this._get_fontScale__2136167286_zbth86_k$());
  }
  function toDp_0(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_dp__0_499320950 = _this__1828080292 / this._get_density__3015598889_l5pazb_k$();
      tmp$ret$0 = _Dp___init__impl__1377471179(tmp0__get_dp__0_499320950);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toSp_0(_this__1828080292) {
    return _get_sp__1413130958_1(_this__1828080292 / (this._get_fontScale__2136167286_zbth86_k$() * this._get_density__3015598889_l5pazb_k$()));
  }
  function toDp_1(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_dp__0_499320950 = _this__1828080292 / this._get_density__3015598889_l5pazb_k$();
      tmp$ret$0 = _Dp___init__impl__1377471179(tmp0__get_dp__0_499320950);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toSp_1(_this__1828080292) {
    return _get_sp__1413130958_1(_this__1828080292 / (this._get_fontScale__2136167286_zbth86_k$() * this._get_density__3015598889_l5pazb_k$()));
  }
  function toRect(_this__1828080292) {
    return new Rect(this.toPx_u0ojv5_k$(_this__1828080292._get_left__802434852_mx26an_k$()), this.toPx_u0ojv5_k$(_this__1828080292._get_top__857417180_zeh7vb_k$()), this.toPx_u0ojv5_k$(_this__1828080292._get_right__3576132917_j1sl80_k$()), this.toPx_u0ojv5_k$(_this__1828080292._get_bottom__2354915904_b2yrut_k$()));
  }
  function toSize(_this__1828080292) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !_DpSize___get_packedValue__impl__3090481952(_this__1828080292).equals(_DpSize___get_packedValue__impl__3090481952(Companion_getInstance_1()._get_Unspecified__2946689370_fpntbq_k$()));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = Size(this.toPx_u0ojv5_k$(_DpSize___get_width__impl__2838126611(_this__1828080292)), this.toPx_u0ojv5_k$(_DpSize___get_height__impl__3935790398(_this__1828080292)));
    } else {
      {
        tmp = Companion_getInstance()._get_Unspecified__2946689370_4m8pwc_k$();
      }
    }
    return tmp;
  }
  function toDpSize(_this__1828080292) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !_Size___get_packedValue__impl__469630284(_this__1828080292).equals(_Size___get_packedValue__impl__469630284(Companion_getInstance()._get_Unspecified__2946689370_4m8pwc_k$()));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = DpSize_0(this.toDp_2y47ho_k$(_Size___get_width__impl__3977603903(_this__1828080292)), this.toDp_2y47ho_k$(_Size___get_height__impl__604880786(_this__1828080292)));
    } else {
      {
        tmp = Companion_getInstance_1()._get_Unspecified__2946689370_fpntbq_k$();
      }
    }
    return tmp;
  }
  LayoutDirection.prototype = Object.create(Enum.prototype);
  LayoutDirection.prototype.constructor = LayoutDirection;
  //endregion
  function _get_MinFocusWidth__28475697($this) {
    return $this.MinFocusWidth_1;
  }
  function _get_MaxFocusWidth__3666526943($this) {
    return $this.MaxFocusWidth_1;
  }
  function _get_MinFocusHeight__344808734($this) {
    return $this.MinFocusHeight_1;
  }
  function _get_MaxFocusHeight__1455247664($this) {
    return $this.MaxFocusHeight_1;
  }
  function _get_FocusMask__3921913613($this) {
    return $this.FocusMask_1;
  }
  function _get_MinFocusBits__120087263($this) {
    return $this.MinFocusBits_1;
  }
  function _get_MinFocusMask__130006457($this) {
    return $this.MinFocusMask_1;
  }
  function _get_MinNonFocusBits__2124915566($this) {
    return $this.MinNonFocusBits_1;
  }
  function _get_MinNonFocusMask__2134834760($this) {
    return $this.MinNonFocusMask_1;
  }
  function _get_MaxFocusBits__2592748401($this) {
    return $this.MaxFocusBits_1;
  }
  function _get_MaxFocusMask__2602667595($this) {
    return $this.MaxFocusMask_1;
  }
  function _get_MaxNonFocusBits__2188784028($this) {
    return $this.MaxNonFocusBits_1;
  }
  function _get_MaxNonFocusMask__2198703222($this) {
    return $this.MaxNonFocusMask_1;
  }
  function _get_MinHeightOffsets__308204964($this) {
    return $this.MinHeightOffsets_1;
  }
  function _get_WidthMask__3376362207($this) {
    return $this.WidthMask_1;
  }
  function _get_HeightMask__3027037720($this) {
    return $this.HeightMask_1;
  }
  function bitsNeedForSize($this, size) {
    var tmp;
    if (size < 8191) {
      tmp = 13;
    } else if (size < 32767) {
      tmp = 15;
    } else if (size < 65535) {
      tmp = 16;
    } else if (size < 262143) {
      tmp = 18;
    } else {
      throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in ' + 'Constraints');
    }
    return tmp;
  }
  function _Constraints___init__impl__1889305021(value) {
    return value;
  }
  function _Constraints___get_value__impl__4095976471(this_0) {
    return this_0;
  }
  function _get_focusIndex__3844374769($this) {
    var tmp = _Constraints___get_value__impl__4095976471($this);
    Companion_getInstance_0();
    return tmp.and_jhajnj_k$(new Long(3, 0)).toInt_1tsl84_k$();
  }
  function _Constraints___get_minWidth__impl__3236361538(this_0) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__3844374769(this_0)];
    return _Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(2).toInt_1tsl84_k$() & mask;
  }
  function _Constraints___get_maxWidth__impl__51833172(this_0) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__3844374769(this_0)];
    var width = _Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(33).toInt_1tsl84_k$() & mask;
    var tmp;
    if (width === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = width - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_minHeight__impl__3396171247(this_0) {
    var focus = _get_focusIndex__3844374769(this_0);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus];
    return _Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask;
  }
  function _Constraints___get_maxHeight__impl__3460039709(this_0) {
    var focus = _get_focusIndex__3844374769(this_0);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus] + 31 | 0;
    var height = _Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask;
    var tmp;
    if (height === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = height - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_hasBoundedWidth__impl__3842542885(this_0) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__3844374769(this_0)];
    return !((_Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(33).toInt_1tsl84_k$() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__712956524(this_0) {
    var focus = _get_focusIndex__3844374769(this_0);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus] + 31 | 0;
    return !((_Constraints___get_value__impl__4095976471(this_0).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask) === 0);
  }
  function _Constraints___get_hasFixedWidth__impl__283911996(this_0) {
    return _Constraints___get_maxWidth__impl__51833172(this_0) === _Constraints___get_minWidth__impl__3236361538(this_0);
  }
  function _Constraints___get_hasFixedHeight__impl__2064548661(this_0) {
    return _Constraints___get_maxHeight__impl__3460039709(this_0) === _Constraints___get_minHeight__impl__3396171247(this_0);
  }
  function _Constraints___get_isZero__impl__3351004388(this_0) {
    return _Constraints___get_maxWidth__impl__51833172(this_0) === 0 ? true : _Constraints___get_maxHeight__impl__3460039709(this_0) === 0;
  }
  function Constraints__copy_impl_3153767874(this_0, minWidth, maxWidth, minHeight, maxHeight) {
    {
      var tmp0_require_0 = minHeight >= 0 ? minWidth >= 0 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp;
      if (maxWidth >= minWidth) {
        tmp = true;
      } else {
        Companion_getInstance_0();
        tmp = maxWidth === 2147483647;
      }
      var tmp1_require_0 = tmp;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    {
      var tmp_0;
      if (maxHeight >= minHeight) {
        tmp_0 = true;
      } else {
        Companion_getInstance_0();
        tmp_0 = maxHeight === 2147483647;
      }
      var tmp2_require_0 = tmp_0;
      {
      }
      if (!tmp2_require_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
          break $l$block_1;
        }
        var message_1_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1_1));
      }
    }
    return Companion_getInstance_0().createConstraints_1eoxu5_k$(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_913947973(this_0, minWidth, maxWidth, minHeight, maxHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = _Constraints___get_minWidth__impl__3236361538(this_0);
    if (!(($mask0 & 2) === 0))
      maxWidth = _Constraints___get_maxWidth__impl__51833172(this_0);
    if (!(($mask0 & 4) === 0))
      minHeight = _Constraints___get_minHeight__impl__3396171247(this_0);
    if (!(($mask0 & 8) === 0))
      maxHeight = _Constraints___get_maxHeight__impl__3460039709(this_0);
    return Constraints__copy_impl_3153767874(this_0, minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__toString_impl_194779179(this_0) {
    var maxWidth = _Constraints___get_maxWidth__impl__51833172(this_0);
    var tmp;
    Companion_getInstance_0();
    if (maxWidth === 2147483647) {
      tmp = 'Infinity';
    } else {
      {
        tmp = maxWidth.toString();
      }
    }
    var maxWidthStr = tmp;
    var maxHeight = _Constraints___get_maxHeight__impl__3460039709(this_0);
    var tmp_0;
    Companion_getInstance_0();
    if (maxHeight === 2147483647) {
      tmp_0 = 'Infinity';
    } else {
      {
        tmp_0 = maxHeight.toString();
      }
    }
    var maxHeightStr = tmp_0;
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__3236361538(this_0) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__3396171247(this_0) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.Infinity_1 = 2147483647;
    this.MinFocusWidth_1 = new Long(0, 0);
    this.MaxFocusWidth_1 = new Long(1, 0);
    this.MinFocusHeight_1 = new Long(2, 0);
    this.MaxFocusHeight_1 = new Long(3, 0);
    this.FocusMask_1 = new Long(3, 0);
    this.MinFocusBits_1 = 16;
    this.MinFocusMask_1 = 65535;
    this.MinNonFocusBits_1 = 15;
    this.MinNonFocusMask_1 = 32767;
    this.MaxFocusBits_1 = 18;
    this.MaxFocusMask_1 = 262143;
    this.MaxNonFocusBits_1 = 13;
    this.MaxNonFocusMask_1 = 8191;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([18, 20, 17, 15]);
      break $l$block;
    }
    tmp.MinHeightOffsets_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_intArrayOf_0 = new Int32Array([65535, 262143, 32767, 8191]);
      tmp$ret$1 = tmp0_intArrayOf_0;
      break $l$block_0;
    }
    tmp_0.WidthMask_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_intArrayOf_0_0 = new Int32Array([32767, 8191, 65535, 262143]);
      tmp$ret$2 = tmp0_intArrayOf_0_0;
      break $l$block_1;
    }
    tmp_1.HeightMask_1 = tmp$ret$2;
  }
  Companion.prototype._get_Infinity__264239747_4dbkoz_k$ = function () {
    return this.Infinity_1;
  };
  Companion.prototype.fixed_bmujv7_k$ = function (width, height) {
    {
      var tmp0_require_0 = width >= 0 ? height >= 0 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'width(' + width + ') and height(' + height + ') must be >= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.createConstraints_1eoxu5_k$(width, width, height, height);
  };
  Companion.prototype.fixedWidth_qpk3so_k$ = function (width) {
    {
      var tmp0_require_0 = width >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'width(' + width + ') must be >= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.createConstraints_1eoxu5_k$(width, width, 0, 2147483647);
  };
  Companion.prototype.fixedHeight_6ko2bl_k$ = function (height) {
    {
      var tmp0_require_0 = height >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'height(' + height + ') must be >= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.createConstraints_1eoxu5_k$(0, 2147483647, height, height);
  };
  Companion.prototype.createConstraints_1eoxu5_k$ = function (minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSize(this, heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSize(this, widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height ' + ('of ' + heightVal + ' in Constraints'));
    }
    var tmp0_subject = widthBits;
    var tmp;
    switch (tmp0_subject) {
      case 15:
        tmp = new Long(2, 0);
        break;
      case 16:
        tmp = new Long(0, 0);
        break;
      case 13:
        tmp = new Long(3, 0);
        break;
      case 18:
        tmp = new Long(1, 0);
        break;
      default:
        throw IllegalStateException_init_$Create$('Should only have the provided constants.');
    }
    var focus = tmp;
    var maxWidthValue = maxWidth === 2147483647 ? 0 : maxWidth + 1 | 0;
    var maxHeightValue = maxHeight === 2147483647 ? 0 : maxHeight + 1 | 0;
    var minHeightOffset = this.MinHeightOffsets_1[focus.toInt_1tsl84_k$()];
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = focus.or_s401rn_k$(toLong(minWidth).shl_po5ip6_k$(2)).or_s401rn_k$(toLong(maxWidthValue).shl_po5ip6_k$(33)).or_s401rn_k$(toLong(minHeight).shl_po5ip6_k$(minHeightOffset)).or_s401rn_k$(toLong(maxHeightValue).shl_po5ip6_k$(maxHeightOffset));
    return _Constraints___init__impl__1889305021(value);
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_3174331356(this_0) {
    return this_0.hashCode();
  }
  function Constraints__equals_impl_4107047224(this_0, other) {
    if (!(other instanceof Constraints))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Constraints ? other.value_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.value_1 = value;
  }
  Constraints.prototype.toString = function () {
    return Constraints__toString_impl_194779179(this.value_1);
  };
  Constraints.prototype.hashCode = function () {
    return Constraints__hashCode_impl_3174331356(this.value_1);
  };
  Constraints.prototype.equals = function (other) {
    return Constraints__equals_impl_4107047224(this.value_1, other);
  };
  Constraints.$metadata$ = {
    simpleName: 'Constraints',
    kind: 'class',
    interfaces: []
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    {
      var tmp0_require_0 = maxWidth >= minWidth;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = maxHeight >= minHeight;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    {
      var tmp2_require_0 = minWidth >= 0 ? minHeight >= 0 : false;
      {
      }
      if (!tmp2_require_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
          break $l$block_1;
        }
        var message_1_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1_1));
      }
    }
    return Companion_getInstance_0().createConstraints_1eoxu5_k$(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints$default(minWidth, maxWidth, minHeight, maxHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = 0;
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_0();
      maxWidth = 2147483647;
    }
    if (!(($mask0 & 4) === 0))
      minHeight = 0;
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_0();
      maxHeight = 2147483647;
    }
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function constrainWidth(_this__1828080292, width) {
    return coerceIn(width, _Constraints___get_minWidth__impl__3236361538(_this__1828080292), _Constraints___get_maxWidth__impl__51833172(_this__1828080292));
  }
  function constrainHeight(_this__1828080292, height) {
    return coerceIn(height, _Constraints___get_minHeight__impl__3396171247(_this__1828080292), _Constraints___get_maxHeight__impl__3460039709(_this__1828080292));
  }
  function offset(_this__1828080292, horizontal, vertical) {
    return Constraints_0(coerceAtLeast(_Constraints___get_minWidth__impl__3236361538(_this__1828080292) + horizontal | 0, 0), addMaxWithMinimum(_Constraints___get_maxWidth__impl__51833172(_this__1828080292), horizontal), coerceAtLeast(_Constraints___get_minHeight__impl__3396171247(_this__1828080292) + vertical | 0, 0), addMaxWithMinimum(_Constraints___get_maxHeight__impl__3460039709(_this__1828080292), vertical));
  }
  function offset$default(_this__1828080292, horizontal, vertical, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      horizontal = 0;
    if (!(($mask0 & 2) === 0))
      vertical = 0;
    return offset(_this__1828080292, horizontal, vertical);
  }
  function constrain(_this__1828080292, otherConstraints) {
    return Constraints_0(coerceIn(_Constraints___get_minWidth__impl__3236361538(otherConstraints), _Constraints___get_minWidth__impl__3236361538(_this__1828080292), _Constraints___get_maxWidth__impl__51833172(_this__1828080292)), coerceIn(_Constraints___get_maxWidth__impl__51833172(otherConstraints), _Constraints___get_minWidth__impl__3236361538(_this__1828080292), _Constraints___get_maxWidth__impl__51833172(_this__1828080292)), coerceIn(_Constraints___get_minHeight__impl__3396171247(otherConstraints), _Constraints___get_minHeight__impl__3396171247(_this__1828080292), _Constraints___get_maxHeight__impl__3460039709(_this__1828080292)), coerceIn(_Constraints___get_maxHeight__impl__3460039709(otherConstraints), _Constraints___get_minHeight__impl__3396171247(_this__1828080292), _Constraints___get_maxHeight__impl__3460039709(_this__1828080292)));
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    Companion_getInstance_0();
    if (max === 2147483647) {
      tmp = max;
    } else {
      {
        tmp = coerceAtLeast(max + value | 0, 0);
      }
    }
    return tmp;
  }
  function constrain_0(_this__1828080292, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__3492176776(size), _Constraints___get_minWidth__impl__3236361538(_this__1828080292), _Constraints___get_maxWidth__impl__51833172(_this__1828080292)), coerceIn(_IntSize___get_height__impl__2736509033(size), _Constraints___get_minHeight__impl__3396171247(_this__1828080292), _Constraints___get_maxHeight__impl__3460039709(_this__1828080292)));
  }
  function Density() {
  }
  Density.$metadata$ = {
    simpleName: 'Density',
    kind: 'interface',
    interfaces: []
  };
  function Density_0(density, fontScale) {
    return new DensityImpl(density, fontScale);
  }
  function Density$default(density, fontScale, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fontScale = 1.0;
    return Density_0(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.density_1 = density;
    this.fontScale_1 = fontScale;
  }
  DensityImpl.prototype._get_density__3015598889_l5pazb_k$ = function () {
    return this.density_1;
  };
  DensityImpl.prototype._get_fontScale__2136167286_zbth86_k$ = function () {
    return this.fontScale_1;
  };
  DensityImpl.prototype.component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  DensityImpl.prototype.component2_7eebsb_k$ = function () {
    return this.fontScale_1;
  };
  DensityImpl.prototype.copy_138fzp_k$ = function (density, fontScale) {
    return new DensityImpl(density, fontScale);
  };
  DensityImpl.prototype.copy$default_bbfa40_k$ = function (density, fontScale, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      density = this.density_1;
    if (!(($mask0 & 2) === 0))
      fontScale = this.fontScale_1;
    return this.copy_138fzp_k$(density, fontScale);
  };
  DensityImpl.prototype.toString = function () {
    return 'DensityImpl(density=' + this.density_1 + ', fontScale=' + this.fontScale_1 + ')';
  };
  DensityImpl.prototype.hashCode = function () {
    var result = getNumberHashCode(this.density_1);
    result = imul(result, 31) + getNumberHashCode(this.fontScale_1) | 0;
    return result;
  };
  DensityImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!equals(this.fontScale_1, tmp0_other_with_cast.fontScale_1))
      return false;
    return true;
  };
  DensityImpl.$metadata$ = {
    simpleName: 'DensityImpl',
    kind: 'class',
    interfaces: [Density]
  };
  function _DpSize___init__impl__1761303852(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__3090481952(this_0) {
    return this_0;
  }
  function _DpSize___get_width__impl__2838126611(this_0) {
    {
      var tmp0_check_0 = !_DpSize___get_packedValue__impl__3090481952(this_0).equals(_DpSize___get_packedValue__impl__3090481952(Companion_getInstance_1().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'DpSize is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_unpackFloat1_0 = _DpSize___get_packedValue__impl__3090481952(this_0);
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
      var tmp2__get_dp__0_757486388 = tmp$ret$2;
      tmp$ret$3 = _Dp___init__impl__1377471179(tmp2__get_dp__0_757486388);
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function _DpSize___get_height__impl__3935790398(this_0) {
    {
      var tmp0_check_0 = !_DpSize___get_packedValue__impl__3090481952(this_0).equals(_DpSize___get_packedValue__impl__3090481952(Companion_getInstance_1().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'DpSize is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_unpackFloat2_0 = _DpSize___get_packedValue__impl__3090481952(this_0);
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
      var tmp2__get_dp__0_757486388 = tmp$ret$2;
      tmp$ret$3 = _Dp___init__impl__1377471179(tmp2__get_dp__0_757486388);
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function DpSize__copy_impl_3584756907(this_0, width, height) {
    return DpSize_0(width, height);
  }
  function DpSize__copy$default_impl_3006604078(this_0, width, height, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = _DpSize___get_width__impl__2838126611(this_0);
    if (!(($mask0 & 2) === 0))
      height = _DpSize___get_height__impl__3935790398(this_0);
    return DpSize__copy_impl_3584756907(this_0, width, height);
  }
  function DpSize__minus_impl_3250778250(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_minus_0 = _DpSize___get_width__impl__2838126611(this_0);
      var tmp1_minus_0 = _DpSize___get_width__impl__2838126611(other);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_minus_0) - _Dp___get_value__impl__3303478217(tmp1_minus_0));
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_minus_0 = _DpSize___get_height__impl__3935790398(this_0);
      var tmp3_minus_0 = _DpSize___get_height__impl__3935790398(other);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp2_minus_0) - _Dp___get_value__impl__3303478217(tmp3_minus_0));
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__plus_impl_599997862(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _DpSize___get_width__impl__2838126611(this_0);
      var tmp1_plus_0 = _DpSize___get_width__impl__2838126611(other);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_plus_0) + _Dp___get_value__impl__3303478217(tmp1_plus_0));
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_plus_0 = _DpSize___get_height__impl__3935790398(this_0);
      var tmp3_plus_0 = _DpSize___get_height__impl__3935790398(other);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp2_plus_0) + _Dp___get_value__impl__3303478217(tmp3_plus_0));
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__component1_impl_1831733868(this_0) {
    return _DpSize___get_width__impl__2838126611(this_0);
  }
  function DpSize__component2_impl_1860363019(this_0) {
    return _DpSize___get_height__impl__3935790398(this_0);
  }
  function DpSize__times_impl_3112183668(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_times_0 = _DpSize___get_width__impl__2838126611(this_0);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_times_0) * other);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_times_0 = _DpSize___get_height__impl__3935790398(this_0);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp1_times_0) * other);
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__times_impl_3112183668_0(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_times_0 = _DpSize___get_width__impl__2838126611(this_0);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_times_0) * other);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_times_0 = _DpSize___get_height__impl__3935790398(this_0);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp1_times_0) * other);
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__div_impl_1901602889(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_div_0 = _DpSize___get_width__impl__2838126611(this_0);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_div_0) / other);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_div_0 = _DpSize___get_height__impl__3935790398(this_0);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp1_div_0) / other);
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__div_impl_1901602889_0(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_div_0 = _DpSize___get_width__impl__2838126611(this_0);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_div_0) / other);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_div_0 = _DpSize___get_height__impl__3935790398(this_0);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp1_div_0) / other);
      break $l$block_0;
    }
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__toString_impl_113302164(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !_DpSize___get_packedValue__impl__3090481952(this_0).equals(_DpSize___get_packedValue__impl__3090481952(Companion_getInstance_1().Unspecified_1));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = '' + new Dp(_DpSize___get_width__impl__2838126611(this_0)) + ' x ' + new Dp(_DpSize___get_height__impl__3935790398(this_0));
    } else {
      {
        tmp = 'DpSize.Unspecified';
      }
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Dp___init__impl__1377471179(0);
      break $l$block_0;
    }
    tmp.Zero_1 = DpSize_0(tmp_0, tmp$ret$1);
    this.Unspecified_1 = DpSize_0(Companion_getInstance_2().Unspecified_1, Companion_getInstance_2().Unspecified_1);
  }
  Companion_0.prototype._get_Zero__785822851_tpk0f5_k$ = function () {
    return this.Zero_1;
  };
  Companion_0.prototype._get_Unspecified__2946689370_fpntbq_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DpSize__hashCode_impl_3092854341(this_0) {
    return this_0.hashCode();
  }
  function DpSize__equals_impl_1675680225(this_0, other) {
    if (!(other instanceof DpSize))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DpSize ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpSize(packedValue) {
    Companion_getInstance_1();
    this.packedValue_1 = packedValue;
  }
  DpSize.prototype.toString = function () {
    return DpSize__toString_impl_113302164(this.packedValue_1);
  };
  DpSize.prototype.hashCode = function () {
    return DpSize__hashCode_impl_3092854341(this.packedValue_1);
  };
  DpSize.prototype.equals = function (other) {
    return DpSize__equals_impl_1675680225(this.packedValue_1, other);
  };
  DpSize.$metadata$ = {
    simpleName: 'DpSize',
    kind: 'class',
    interfaces: []
  };
  function _Dp___init__impl__1377471179(value) {
    return value;
  }
  function _Dp___get_value__impl__3303478217(this_0) {
    return this_0;
  }
  function Dp__plus_impl_1169607271(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) + _Dp___get_value__impl__3303478217(other));
  }
  function Dp__minus_impl_3728800745(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) - _Dp___get_value__impl__3303478217(other));
  }
  function Dp__unaryMinus_impl_1907959008(this_0) {
    return _Dp___init__impl__1377471179(-_Dp___get_value__impl__3303478217(this_0));
  }
  function Dp__div_impl_3998187368(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) / other);
  }
  function Dp__div_impl_3998187368_0(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) / other);
  }
  function Dp__div_impl_3998187368_1(this_0, other) {
    return _Dp___get_value__impl__3303478217(this_0) / _Dp___get_value__impl__3303478217(other);
  }
  function Dp__times_impl_3590206163(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) * other);
  }
  function Dp__times_impl_3590206163_0(this_0, other) {
    return _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(this_0) * other);
  }
  function Dp__compareTo_impl_1789541913(this_0, other) {
    return compareTo(_Dp___get_value__impl__3303478217(this_0), _Dp___get_value__impl__3303478217(other));
  }
  function Dp__compareTo_impl_1789541913_0(this_0, other) {
    var tmp = this_0.value_1;
    return Dp__compareTo_impl_1789541913(tmp, other instanceof Dp ? other.value_1 : THROW_CCE());
  }
  function Dp__toString_impl_3064864469(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = isNaN_0(_Dp___get_value__impl__3303478217(this_0));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = 'Dp.Unspecified';
    } else {
      {
        tmp = '' + _Dp___get_value__impl__3303478217(this_0) + '.dp';
      }
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Hairline_1 = _Dp___init__impl__1377471179(0.0);
    this.Infinity_1 = _Dp___init__impl__1377471179(FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$());
    this.Unspecified_1 = _Dp___init__impl__1377471179(FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$());
  }
  Companion_1.prototype._get_Hairline__3808316309_phxow_k$ = function () {
    return this.Hairline_1;
  };
  Companion_1.prototype._get_Infinity__264239747_wa4kle_k$ = function () {
    return this.Infinity_1;
  };
  Companion_1.prototype._get_Unspecified__2946689370_rvxoyd_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_1749449350(this_0) {
    return getNumberHashCode(this_0);
  }
  function Dp__equals_impl_3609475682(this_0, other) {
    if (!(other instanceof Dp))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Dp ? other.value_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  Dp.prototype.compareTo_46hxmm_k$ = function (other) {
    return Dp__compareTo_impl_1789541913(this.value_1, other);
  };
  Dp.prototype.compareTo_6thzaj_k$ = function (other) {
    return Dp__compareTo_impl_1789541913_0(this, other);
  };
  Dp.prototype.toString = function () {
    return Dp__toString_impl_3064864469(this.value_1);
  };
  Dp.prototype.hashCode = function () {
    return Dp__hashCode_impl_1749449350(this.value_1);
  };
  Dp.prototype.equals = function (other) {
    return Dp__equals_impl_3609475682(this.value_1, other);
  };
  Dp.$metadata$ = {
    simpleName: 'Dp',
    kind: 'class',
    interfaces: [Comparable]
  };
  function DpRect_init_$Init$(origin, size, $this) {
    var tmp = _DpOffset___get_x__impl__2462752079(origin);
    var tmp_0 = _DpOffset___get_y__impl__4205562414(origin);
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _DpOffset___get_x__impl__2462752079(origin);
      var tmp1_plus_0 = _DpSize___get_width__impl__2838126611(size);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_plus_0) + _Dp___get_value__impl__3303478217(tmp1_plus_0));
      break $l$block;
    }
    var tmp_1 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_plus_0 = _DpOffset___get_y__impl__4205562414(origin);
      var tmp3_plus_0 = _DpSize___get_height__impl__3935790398(size);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp2_plus_0) + _Dp___get_value__impl__3303478217(tmp3_plus_0));
      break $l$block_0;
    }
    DpRect.call($this, tmp, tmp_0, tmp_1, tmp$ret$1);
    return $this;
  }
  function DpRect_init_$Create$(origin, size) {
    return DpRect_init_$Init$(origin, size, Object.create(DpRect.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DpRect(left, top, right, bottom) {
    Companion_getInstance_3();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  DpRect.prototype._get_left__802434852_mx26an_k$ = function () {
    return this.left_1;
  };
  DpRect.prototype._get_top__857417180_zeh7vb_k$ = function () {
    return this.top_1;
  };
  DpRect.prototype._get_right__3576132917_j1sl80_k$ = function () {
    return this.right_1;
  };
  DpRect.prototype._get_bottom__2354915904_b2yrut_k$ = function () {
    return this.bottom_1;
  };
  DpRect.prototype.component1_z2a8sv_k$ = function () {
    return this.left_1;
  };
  DpRect.prototype.component2_11tj3k_k$ = function () {
    return this.top_1;
  };
  DpRect.prototype.component3_xv6qz5_k$ = function () {
    return this.right_1;
  };
  DpRect.prototype.component4_28x0xa_k$ = function () {
    return this.bottom_1;
  };
  DpRect.prototype.copy_o1dksz_k$ = function (left, top, right, bottom) {
    return new DpRect(left, top, right, bottom);
  };
  DpRect.prototype.copy$default_7a79jk_k$ = function (left, top, right, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this.left_1;
    if (!(($mask0 & 2) === 0))
      top = this.top_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    if (!(($mask0 & 8) === 0))
      bottom = this.bottom_1;
    return this.copy_o1dksz_k$(left, top, right, bottom);
  };
  DpRect.prototype.toString = function () {
    return 'DpRect(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  DpRect.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_1749449350(this.left_1);
    result = imul(result, 31) + Dp__hashCode_impl_1749449350(this.top_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_1749449350(this.right_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_1749449350(this.bottom_1) | 0;
    return result;
  };
  DpRect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpRect))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DpRect ? other : THROW_CCE();
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
  DpRect.$metadata$ = {
    simpleName: 'DpRect',
    kind: 'class',
    interfaces: []
  };
  function DpSize_0(width, height) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_packFloats_0 = _Dp___get_value__impl__3303478217(width);
      var tmp1_packFloats_0 = _Dp___get_value__impl__3303478217(height);
      var v1_1 = toLong(toBits(tmp0_packFloats_0));
      var v2_2 = toLong(toBits(tmp1_packFloats_0));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _DpSize___init__impl__1761303852(tmp$ret$0);
  }
  function _get_dp__1413116543(_this__1828080292) {
    return _Dp___init__impl__1377471179(_this__1828080292);
  }
  function _DpOffset___init__impl__2195298366(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__3811674318(this_0) {
    return this_0;
  }
  function _DpOffset___get_x__impl__2462752079(this_0) {
    {
      var tmp0_check_0 = !_DpOffset___get_packedValue__impl__3811674318(this_0).equals(_DpOffset___get_packedValue__impl__3811674318(Companion_getInstance_4().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'DpOffset is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_unpackFloat1_0 = _DpOffset___get_packedValue__impl__3811674318(this_0);
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
      var tmp2__get_dp__0_757486388 = tmp$ret$2;
      tmp$ret$3 = _Dp___init__impl__1377471179(tmp2__get_dp__0_757486388);
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function _DpOffset___get_y__impl__4205562414(this_0) {
    {
      var tmp0_check_0 = !_DpOffset___get_packedValue__impl__3811674318(this_0).equals(_DpOffset___get_packedValue__impl__3811674318(Companion_getInstance_4().Unspecified_1));
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'DpOffset is unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_unpackFloat2_0 = _DpOffset___get_packedValue__impl__3811674318(this_0);
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
      var tmp2__get_dp__0_757486388 = tmp$ret$2;
      tmp$ret$3 = _Dp___init__impl__1377471179(tmp2__get_dp__0_757486388);
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function DpOffset__copy_impl_2130033625(this_0, x, y) {
    return DpOffset_0(x, y);
  }
  function DpOffset__copy$default_impl_3735864412(this_0, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = _DpOffset___get_x__impl__2462752079(this_0);
    if (!(($mask0 & 2) === 0))
      y = _DpOffset___get_y__impl__4205562414(this_0);
    return DpOffset__copy_impl_2130033625(this_0, x, y);
  }
  function DpOffset__minus_impl_1104029468(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_minus_0 = _DpOffset___get_x__impl__2462752079(this_0);
      var tmp1_minus_0 = _DpOffset___get_x__impl__2462752079(other);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_minus_0) - _Dp___get_value__impl__3303478217(tmp1_minus_0));
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_minus_0 = _DpOffset___get_y__impl__4205562414(this_0);
      var tmp3_minus_0 = _DpOffset___get_y__impl__4205562414(other);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp2_minus_0) - _Dp___get_value__impl__3303478217(tmp3_minus_0));
      break $l$block_0;
    }
    return DpOffset_0(tmp, tmp$ret$1);
  }
  function DpOffset__plus_impl_3440241876(this_0, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _DpOffset___get_x__impl__2462752079(this_0);
      var tmp1_plus_0 = _DpOffset___get_x__impl__2462752079(other);
      tmp$ret$0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_plus_0) + _Dp___get_value__impl__3303478217(tmp1_plus_0));
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_plus_0 = _DpOffset___get_y__impl__4205562414(this_0);
      var tmp3_plus_0 = _DpOffset___get_y__impl__4205562414(other);
      tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp2_plus_0) + _Dp___get_value__impl__3303478217(tmp3_plus_0));
      break $l$block_0;
    }
    return DpOffset_0(tmp, tmp$ret$1);
  }
  function DpOffset__toString_impl_2678342338(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !_DpOffset___get_packedValue__impl__3811674318(this_0).equals(_DpOffset___get_packedValue__impl__3811674318(Companion_getInstance_4().Unspecified_1));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = '(' + new Dp(_DpOffset___get_x__impl__2462752079(this_0)) + ', ' + new Dp(_DpOffset___get_y__impl__4205562414(this_0)) + ')';
    } else {
      {
        tmp = 'DpOffset.Unspecified';
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Dp___init__impl__1377471179(0);
      break $l$block_0;
    }
    tmp.Zero_1 = DpOffset_0(tmp_0, tmp$ret$1);
    this.Unspecified_1 = DpOffset_0(Companion_getInstance_2().Unspecified_1, Companion_getInstance_2().Unspecified_1);
  }
  Companion_3.prototype._get_Zero__785822851_19wjqp_k$ = function () {
    return this.Zero_1;
  };
  Companion_3.prototype._get_Unspecified__2946689370_vig514_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DpOffset__hashCode_impl_1362927219(this_0) {
    return this_0.hashCode();
  }
  function DpOffset__equals_impl_3845944719(this_0, other) {
    if (!(other instanceof DpOffset))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DpOffset ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_4();
    this.packedValue_1 = packedValue;
  }
  DpOffset.prototype.toString = function () {
    return DpOffset__toString_impl_2678342338(this.packedValue_1);
  };
  DpOffset.prototype.hashCode = function () {
    return DpOffset__hashCode_impl_1362927219(this.packedValue_1);
  };
  DpOffset.prototype.equals = function (other) {
    return DpOffset__equals_impl_3845944719(this.packedValue_1, other);
  };
  DpOffset.$metadata$ = {
    simpleName: 'DpOffset',
    kind: 'class',
    interfaces: []
  };
  function DpOffset_0(x, y) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_packFloats_0 = _Dp___get_value__impl__3303478217(x);
      var tmp1_packFloats_0 = _Dp___get_value__impl__3303478217(y);
      var v1_1 = toLong(toBits(tmp0_packFloats_0));
      var v2_2 = toLong(toBits(tmp1_packFloats_0));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _DpOffset___init__impl__2195298366(tmp$ret$0);
  }
  function _get_dp__1413116543_0(_this__1828080292) {
    return _Dp___init__impl__1377471179(_this__1828080292);
  }
  function _get_dp__1413116543_1(_this__1828080292) {
    return _Dp___init__impl__1377471179(_this__1828080292);
  }
  function _get_isSpecified__2832019115(_this__1828080292) {
    return !_DpSize___get_packedValue__impl__3090481952(_this__1828080292).equals(_DpSize___get_packedValue__impl__3090481952(Companion_getInstance_1().Unspecified_1));
  }
  function _get_isUnspecified__892174020(_this__1828080292) {
    return isNaN_0(_Dp___get_value__impl__3303478217(_this__1828080292));
  }
  function _get_isSpecified__2832019115_0(_this__1828080292) {
    return !_DpOffset___get_packedValue__impl__3811674318(_this__1828080292).equals(_DpOffset___get_packedValue__impl__3811674318(Companion_getInstance_4().Unspecified_1));
  }
  function ExperimentalUnitApi() {
  }
  ExperimentalUnitApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalUnitApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalUnitApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalUnitApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalUnitApi.prototype.toString = function () {
    return '@androidx.compose.ui.unit.ExperimentalUnitApi()';
  };
  ExperimentalUnitApi.$metadata$ = {
    simpleName: 'ExperimentalUnitApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _IntOffset___init__impl__2618314985(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__3737208643(this_0) {
    return this_0;
  }
  function _IntOffset___get_x__impl__2691365380(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt1_0 = _IntOffset___get_packedValue__impl__3737208643(this_0);
      tmp$ret$0 = tmp0_unpackInt1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _IntOffset___get_y__impl__139208419(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt2_0 = _IntOffset___get_packedValue__impl__3737208643(this_0);
      tmp$ret$0 = tmp0_unpackInt2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function IntOffset__component1_impl_2177085591(this_0) {
    return _IntOffset___get_x__impl__2691365380(this_0);
  }
  function IntOffset__component2_impl_2205714742(this_0) {
    return _IntOffset___get_y__impl__139208419(this_0);
  }
  function IntOffset__copy_impl_1549233942(this_0, x, y) {
    return IntOffset_0(x, y);
  }
  function IntOffset__copy$default_impl_4177128089(this_0, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = _IntOffset___get_x__impl__2691365380(this_0);
    if (!(($mask0 & 2) === 0))
      y = _IntOffset___get_y__impl__139208419(this_0);
    return IntOffset__copy_impl_1549233942(this_0, x, y);
  }
  function IntOffset__minus_impl_279108479(this_0, other) {
    return IntOffset_0(_IntOffset___get_x__impl__2691365380(this_0) - _IntOffset___get_x__impl__2691365380(other) | 0, _IntOffset___get_y__impl__139208419(this_0) - _IntOffset___get_y__impl__139208419(other) | 0);
  }
  function IntOffset__plus_impl_2859442193(this_0, other) {
    return IntOffset_0(_IntOffset___get_x__impl__2691365380(this_0) + _IntOffset___get_x__impl__2691365380(other) | 0, _IntOffset___get_y__impl__139208419(this_0) + _IntOffset___get_y__impl__139208419(other) | 0);
  }
  function IntOffset__unaryMinus_impl_480350986(this_0) {
    return IntOffset_0(-_IntOffset___get_x__impl__2691365380(this_0) | 0, -_IntOffset___get_y__impl__139208419(this_0) | 0);
  }
  function IntOffset__times_impl_140513897(this_0, operand) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_roundToInt_0 = _IntOffset___get_x__impl__2691365380(this_0) * operand;
      tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_roundToInt_0 = _IntOffset___get_y__impl__139208419(this_0) * operand;
      tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
      break $l$block_0;
    }
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function IntOffset__div_impl_1974488190(this_0, operand) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_roundToInt_0 = _IntOffset___get_x__impl__2691365380(this_0) / operand;
      tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_roundToInt_0 = _IntOffset___get_y__impl__139208419(this_0) / operand;
      tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
      break $l$block_0;
    }
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function IntOffset__rem_impl_1091319317(this_0, operand) {
    return IntOffset_0(_IntOffset___get_x__impl__2691365380(this_0) % operand, _IntOffset___get_y__impl__139208419(this_0) % operand);
  }
  function IntOffset__toString_impl_3260026751(this_0) {
    return '(' + _IntOffset___get_x__impl__2691365380(this_0) + ', ' + _IntOffset___get_y__impl__139208419(this_0) + ')';
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.Zero_1 = IntOffset_0(0, 0);
  }
  Companion_4.prototype._get_Zero__785822851_9g2ui8_k$ = function () {
    return this.Zero_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntOffset__hashCode_impl_1944611632(this_0) {
    return this_0.hashCode();
  }
  function IntOffset__equals_impl_4043197836(this_0, other) {
    if (!(other instanceof IntOffset))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntOffset ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_5();
    this.packedValue_1 = packedValue;
  }
  IntOffset.prototype.toString = function () {
    return IntOffset__toString_impl_3260026751(this.packedValue_1);
  };
  IntOffset.prototype.hashCode = function () {
    return IntOffset__hashCode_impl_1944611632(this.packedValue_1);
  };
  IntOffset.prototype.equals = function (other) {
    return IntOffset__equals_impl_4043197836(this.packedValue_1, other);
  };
  IntOffset.$metadata$ = {
    simpleName: 'IntOffset',
    kind: 'class',
    interfaces: []
  };
  function plus(_this__1828080292, offset) {
    return Offset(_Offset___get_x__impl__2048295803(_this__1828080292) + _IntOffset___get_x__impl__2691365380(offset), _Offset___get_y__impl__3791106138(_this__1828080292) + _IntOffset___get_y__impl__139208419(offset));
  }
  function minus(_this__1828080292, offset) {
    return Offset(_Offset___get_x__impl__2048295803(_this__1828080292) - _IntOffset___get_x__impl__2691365380(offset), _Offset___get_y__impl__3791106138(_this__1828080292) - _IntOffset___get_y__impl__139208419(offset));
  }
  function IntOffset_0(x, y) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = toLong(x).shl_po5ip6_k$(32).or_s401rn_k$(toLong(y).and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _IntOffset___init__impl__2618314985(tmp$ret$0);
  }
  function round(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_roundToInt_0 = _Offset___get_x__impl__2048295803(_this__1828080292);
      tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_roundToInt_0 = _Offset___get_y__impl__3791106138(_this__1828080292);
      tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
      break $l$block_0;
    }
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Zero_1 = new IntRect(0, 0, 0, 0);
  }
  Companion_5.prototype._get_Zero__785822851_czuwsj_k$ = function () {
    return this.Zero_1;
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_6();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  IntRect.prototype._get_left__802434852_d9qyp0_k$ = function () {
    return this.left_1;
  };
  IntRect.prototype._get_top__857417180_e6hfbw_k$ = function () {
    return this.top_1;
  };
  IntRect.prototype._get_right__3576132917_bvz45n_k$ = function () {
    return this.right_1;
  };
  IntRect.prototype._get_bottom__2354915904_w3218g_k$ = function () {
    return this.bottom_1;
  };
  IntRect.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.right_1 - this.left_1 | 0;
  };
  IntRect.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.bottom_1 - this.top_1 | 0;
  };
  IntRect.prototype._get_size__809037418_alsm3t_k$ = function () {
    return IntSize_0(this._get_width__3719200459_9isoj9_k$(), this._get_height__3088126660_jyis70_k$());
  };
  IntRect.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  IntRect.prototype.translate_pe744e_k$ = function (offset) {
    return new IntRect(this.left_1 + _IntOffset___get_x__impl__2691365380(offset) | 0, this.top_1 + _IntOffset___get_y__impl__139208419(offset) | 0, this.right_1 + _IntOffset___get_x__impl__2691365380(offset) | 0, this.bottom_1 + _IntOffset___get_y__impl__139208419(offset) | 0);
  };
  IntRect.prototype.translate_vez3i_k$ = function (translateX, translateY) {
    return new IntRect(this.left_1 + translateX | 0, this.top_1 + translateY | 0, this.right_1 + translateX | 0, this.bottom_1 + translateY | 0);
  };
  IntRect.prototype.inflate_y7f6g6_k$ = function (delta) {
    return new IntRect(this.left_1 - delta | 0, this.top_1 - delta | 0, this.right_1 + delta | 0, this.bottom_1 + delta | 0);
  };
  IntRect.prototype.deflate_b4kkqy_k$ = function (delta) {
    return this.inflate_y7f6g6_k$(-delta | 0);
  };
  IntRect.prototype.intersect_5vipj6_k$ = function (other) {
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
    return new IntRect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  IntRect.prototype.overlaps_6ffn2j_k$ = function (other) {
    if (this.right_1 <= other.left_1 ? true : other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 ? true : other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  IntRect.prototype._get_minDimension__804123799_dar5w7_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = this._get_width__3719200459_9isoj9_k$();
        tmp$ret$0 = abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_min_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = this._get_height__3088126660_jyis70_k$();
        tmp$ret$1 = abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_min_0 = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp2_min_0, tmp3_min_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  IntRect.prototype._get_maxDimension__3276784937_gu76jb_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_absoluteValue__0_2852910594 = this._get_width__3719200459_9isoj9_k$();
        tmp$ret$0 = abs(tmp0__get_absoluteValue__0_2852910594);
        break $l$block;
      }
      var tmp2_max_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_absoluteValue__0_4097675075 = this._get_height__3088126660_jyis70_k$();
        tmp$ret$1 = abs(tmp1__get_absoluteValue__0_4097675075);
        break $l$block_0;
      }
      var tmp3_max_0 = tmp$ret$1;
      tmp$ret$2 = Math.max(tmp2_max_0, tmp3_max_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  IntRect.prototype._get_topLeft__1142003605_n8gfvm_k$ = function () {
    return IntOffset_0(this.left_1, this.top_1);
  };
  IntRect.prototype._get_topCenter__2858634631_ifi5ws_k$ = function () {
    return IntOffset_0(this.left_1 + (this._get_width__3719200459_9isoj9_k$() / 2 | 0) | 0, this.top_1);
  };
  IntRect.prototype._get_topRight__1217862372_zcfj4h_k$ = function () {
    return IntOffset_0(this.right_1, this.top_1);
  };
  IntRect.prototype._get_centerLeft__4062732815_61ayuc_k$ = function () {
    return IntOffset_0(this.left_1, this.top_1 + (this._get_height__3088126660_jyis70_k$() / 2 | 0) | 0);
  };
  IntRect.prototype._get_center__2950577494_e7kr43_k$ = function () {
    return IntOffset_0(this.left_1 + (this._get_width__3719200459_9isoj9_k$() / 2 | 0) | 0, this.top_1 + (this._get_height__3088126660_jyis70_k$() / 2 | 0) | 0);
  };
  IntRect.prototype._get_centerRight__1566154666_jothih_k$ = function () {
    return IntOffset_0(this.right_1, this.top_1 + (this._get_height__3088126660_jyis70_k$() / 2 | 0) | 0);
  };
  IntRect.prototype._get_bottomLeft__1781713401_l5o75y_k$ = function () {
    return IntOffset_0(this.left_1, this.bottom_1);
  };
  IntRect.prototype._get_bottomCenter__3439425259_pw97rc_k$ = function () {
    return IntOffset_0(this.left_1 + (this._get_width__3719200459_9isoj9_k$() / 2 | 0) | 0, this.bottom_1);
  };
  IntRect.prototype._get_bottomRight__3868996864_t1vyz7_k$ = function () {
    return IntOffset_0(this.right_1, this.bottom_1);
  };
  IntRect.prototype.contains_4xg8pb_k$ = function (offset) {
    return ((_IntOffset___get_x__impl__2691365380(offset) >= this.left_1 ? _IntOffset___get_x__impl__2691365380(offset) < this.right_1 : false) ? _IntOffset___get_y__impl__139208419(offset) >= this.top_1 : false) ? _IntOffset___get_y__impl__139208419(offset) < this.bottom_1 : false;
  };
  IntRect.prototype.toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.left_1 + ', ') + ('' + this.top_1 + ', ') + ('' + this.right_1 + ', ') + ('' + this.bottom_1 + ')');
  };
  IntRect.prototype.component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  IntRect.prototype.component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  IntRect.prototype.component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  IntRect.prototype.component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  IntRect.prototype.copy_2hj87f_k$ = function (left, top, right, bottom) {
    return new IntRect(left, top, right, bottom);
  };
  IntRect.prototype.copy$default_ccxy8g_k$ = function (left, top, right, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this.left_1;
    if (!(($mask0 & 2) === 0))
      top = this.top_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    if (!(($mask0 & 8) === 0))
      bottom = this.bottom_1;
    return this.copy_2hj87f_k$(left, top, right, bottom);
  };
  IntRect.prototype.hashCode = function () {
    var result = this.left_1;
    result = imul(result, 31) + this.top_1 | 0;
    result = imul(result, 31) + this.right_1 | 0;
    result = imul(result, 31) + this.bottom_1 | 0;
    return result;
  };
  IntRect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.left_1 === tmp0_other_with_cast.left_1))
      return false;
    if (!(this.top_1 === tmp0_other_with_cast.top_1))
      return false;
    if (!(this.right_1 === tmp0_other_with_cast.right_1))
      return false;
    if (!(this.bottom_1 === tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  IntRect.$metadata$ = {
    simpleName: 'IntRect',
    kind: 'class',
    interfaces: []
  };
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__2691365380(offset), _IntOffset___get_y__impl__139208419(offset), _IntOffset___get_x__impl__2691365380(offset) + _IntSize___get_width__impl__3492176776(size) | 0, _IntOffset___get_y__impl__139208419(offset) + _IntSize___get_height__impl__2736509033(size) | 0);
  }
  function _IntSize___init__impl__3410904215(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__2451299029(this_0) {
    return this_0;
  }
  function _IntSize___get_width__impl__3492176776(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt1_0 = _IntSize___get_packedValue__impl__2451299029(this_0);
      tmp$ret$0 = tmp0_unpackInt1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _IntSize___get_height__impl__2736509033(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt2_0 = _IntSize___get_packedValue__impl__2451299029(this_0);
      tmp$ret$0 = tmp0_unpackInt2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function IntSize__component1_impl_2413418281(this_0) {
    return _IntSize___get_width__impl__3492176776(this_0);
  }
  function IntSize__component2_impl_2442047432(this_0) {
    return _IntSize___get_height__impl__2736509033(this_0);
  }
  function IntSize__times_impl_3786184855(this_0, other) {
    return IntSize_0(imul(_IntSize___get_width__impl__3492176776(this_0), other), imul(_IntSize___get_height__impl__2736509033(this_0), other));
  }
  function IntSize__div_impl_3676603948(this_0, other) {
    return IntSize_0(_IntSize___get_width__impl__3492176776(this_0) / other | 0, _IntSize___get_height__impl__2736509033(this_0) / other | 0);
  }
  function IntSize__toString_impl_310555281(this_0) {
    return '' + _IntSize___get_width__impl__3492176776(this_0) + ' x ' + _IntSize___get_height__impl__2736509033(this_0);
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.Zero_1 = _IntSize___init__impl__3410904215(new Long(0, 0));
  }
  Companion_6.prototype._get_Zero__785822851_4arau6_k$ = function () {
    return this.Zero_1;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function IntSize__hashCode_impl_3290107458(this_0) {
    return this_0.hashCode();
  }
  function IntSize__equals_impl_1094880542(this_0, other) {
    if (!(other instanceof IntSize))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntSize ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_7();
    this.packedValue_1 = packedValue;
  }
  IntSize.prototype.toString = function () {
    return IntSize__toString_impl_310555281(this.packedValue_1);
  };
  IntSize.prototype.hashCode = function () {
    return IntSize__hashCode_impl_3290107458(this.packedValue_1);
  };
  IntSize.prototype.equals = function (other) {
    return IntSize__equals_impl_1094880542(this.packedValue_1, other);
  };
  IntSize.$metadata$ = {
    simpleName: 'IntSize',
    kind: 'class',
    interfaces: []
  };
  function IntSize_0(width, height) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = toLong(width).shl_po5ip6_k$(32).or_s401rn_k$(toLong(height).and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _IntSize___init__impl__3410904215(tmp$ret$0);
  }
  function toIntRect(_this__1828080292) {
    return IntRect_0(Companion_getInstance_5()._get_Zero__785822851_9g2ui8_k$(), _this__1828080292);
  }
  function toSize_0(_this__1828080292) {
    return Size(_IntSize___get_width__impl__3492176776(_this__1828080292), _IntSize___get_height__impl__2736509033(_this__1828080292));
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  function values() {
    return [LayoutDirection_Ltr_getInstance(), LayoutDirection_Rtl_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Ltr':
        return LayoutDirection_Ltr_getInstance();
      case 'Rtl':
        return LayoutDirection_Rtl_getInstance();
      default:
        LayoutDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LayoutDirection.$metadata$ = {
    simpleName: 'LayoutDirection',
    kind: 'class',
    interfaces: []
  };
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function LayoutDirection_Rtl_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Rtl_instance;
  }
  function _TextUnit___init__impl__2653257936(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__3157586172(this_0) {
    return this_0;
  }
  function TextUnit__unaryMinus_impl_2084796347(this_0) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), -_TextUnit___get_value__impl__1070471396(this_0));
  }
  function TextUnit__div_impl_2687425773(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) / other);
  }
  function TextUnit__div_impl_2687425773_0(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) / other);
  }
  function TextUnit__div_impl_2687425773_1(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) / other);
  }
  function TextUnit__times_impl_2373731096(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) * other);
  }
  function TextUnit__times_impl_2373731096_0(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) * other);
  }
  function TextUnit__times_impl_2373731096_1(this_0, other) {
    checkArithmetic(this_0);
    return pack(_TextUnit___get_rawType__impl__2490641459(this_0), _TextUnit___get_value__impl__1070471396(this_0) * other);
  }
  function TextUnit__compareTo_impl_409773022(this_0, other) {
    checkArithmetic_0(this_0, other);
    return compareTo(_TextUnit___get_value__impl__1070471396(this_0), _TextUnit___get_value__impl__1070471396(other));
  }
  function TextUnit__toString_impl_3990187120(this_0) {
    var tmp0_subject = _TextUnit___get_type__impl__2460701423(this_0);
    return equals(tmp0_subject, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().Sp_1) ? '' + _TextUnit___get_value__impl__1070471396(this_0) + '.sp' : equals(tmp0_subject, Companion_getInstance_9().Em_1) ? '' + _TextUnit___get_value__impl__1070471396(this_0) + '.em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_arrayOf_0 = [new TextUnitType(Companion_getInstance_9().Unspecified_1), new TextUnitType(Companion_getInstance_9().Sp_1), new TextUnitType(Companion_getInstance_9().Em_1)];
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_arrayOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    tmp.TextUnitTypes_1 = tmp$ret$2;
    this.Unspecified_1 = pack(new Long(0, 0), FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$());
  }
  Companion_7.prototype._get_TextUnitTypes__1683690313_rufbrd_k$ = function () {
    return this.TextUnitTypes_1;
  };
  Companion_7.prototype._get_Unspecified__2946689370_3oyroa_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _TextUnit___get_rawType__impl__2490641459(this_0) {
    return _TextUnit___get_packedValue__impl__3157586172(this_0).and_jhajnj_k$(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__2460701423(this_0) {
    return Companion_getInstance_8().TextUnitTypes_1[_TextUnit___get_rawType__impl__2490641459(this_0).ushr_rr8rvr_k$(32).toInt_1tsl84_k$()].type_1;
  }
  function _TextUnit___get_isSp__impl__504060002(this_0) {
    return _TextUnit___get_rawType__impl__2490641459(this_0).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__3400122295(this_0) {
    return _TextUnit___get_rawType__impl__2490641459(this_0).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__1070471396(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_fromBits_0 = FloatCompanionObject_getInstance();
      var tmp1_fromBits_0 = _TextUnit___get_packedValue__impl__3157586172(this_0).and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      tmp$ret$0 = floatFromBits(tmp1_fromBits_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function TextUnit__hashCode_impl_2674772001(this_0) {
    return this_0.hashCode();
  }
  function TextUnit__equals_impl_258486973(this_0, other) {
    if (!(other instanceof TextUnit))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextUnit ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_8();
    this.packedValue_1 = packedValue;
  }
  TextUnit.prototype.toString = function () {
    return TextUnit__toString_impl_3990187120(this.packedValue_1);
  };
  TextUnit.prototype.hashCode = function () {
    return TextUnit__hashCode_impl_2674772001(this.packedValue_1);
  };
  TextUnit.prototype.equals = function (other) {
    return TextUnit__equals_impl_258486973(this.packedValue_1, other);
  };
  TextUnit.$metadata$ = {
    simpleName: 'TextUnit',
    kind: 'class',
    interfaces: []
  };
  function _get_isUnspecified__892174020_0(_this__1828080292) {
    return _TextUnit___get_rawType__impl__2490641459(_this__1828080292).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__710860842(type) {
    return type;
  }
  function _TextUnitType___get_type__impl__2584835401(this_0) {
    return this_0;
  }
  function TextUnitType__toString_impl_2284304982(this_0) {
    var tmp0_subject = this_0;
    return equals(tmp0_subject, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().Sp_1) ? 'Sp' : equals(tmp0_subject, Companion_getInstance_9().Em_1) ? 'Em' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Unspecified_1 = _TextUnitType___init__impl__710860842(new Long(0, 0));
    this.Sp_1 = _TextUnitType___init__impl__710860842(new Long(0, 1));
    this.Em_1 = _TextUnitType___init__impl__710860842(new Long(0, 2));
  }
  Companion_8.prototype._get_Unspecified__2946689370_qijtak_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_8.prototype._get_Sp__1413100206_xxwv9k_k$ = function () {
    return this.Sp_1;
  };
  Companion_8.prototype._get_Em__1413086659_inkhcz_k$ = function () {
    return this.Em_1;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function TextUnitType__hashCode_impl_968889863(this_0) {
    return this_0.hashCode();
  }
  function TextUnitType__equals_impl_1436598819(this_0, other) {
    if (!(other instanceof TextUnitType))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.type_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_9();
    this.type_1 = type;
  }
  TextUnitType.prototype.toString = function () {
    return TextUnitType__toString_impl_2284304982(this.type_1);
  };
  TextUnitType.prototype.hashCode = function () {
    return TextUnitType__hashCode_impl_968889863(this.type_1);
  };
  TextUnitType.prototype.equals = function (other) {
    return TextUnitType__equals_impl_1436598819(this.type_1, other);
  };
  TextUnitType.$metadata$ = {
    simpleName: 'TextUnitType',
    kind: 'class',
    interfaces: []
  };
  function TextUnit_0(value, type) {
    return pack(_TextUnitType___get_type__impl__2584835401(type), value);
  }
  function _get_sp__1413130958(_this__1828080292) {
    return pack(new Long(0, 1), _this__1828080292);
  }
  function _get_sp__1413130958_0(_this__1828080292) {
    return pack(new Long(0, 1), _this__1828080292);
  }
  function _get_sp__1413130958_1(_this__1828080292) {
    return pack(new Long(0, 1), _this__1828080292);
  }
  function checkArithmetic(a) {
    {
      var tmp0_require_0 = !_get_isUnspecified__892174020_0(a);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Cannot perform operation for Unspecified type.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__2653257936(unitType.or_s401rn_k$(toLong(toBits(v)).and_jhajnj_k$(new Long(-1, 0))));
  }
  function checkArithmetic_0(a, b) {
    {
      var tmp0_require_0 = !_get_isUnspecified__892174020_0(a) ? !_get_isUnspecified__892174020_0(b) : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Cannot perform operation for Unspecified type.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = equals(_TextUnit___get_type__impl__2460701423(a), _TextUnit___get_type__impl__2460701423(b));
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Cannot perform operation for ' + new TextUnitType(_TextUnit___get_type__impl__2460701423(a)) + ' and ' + new TextUnitType(_TextUnit___get_type__impl__2460701423(b));
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
  }
  function _get_UNIT_TYPE_UNSPECIFIED__3035038852() {
    return UNIT_TYPE_UNSPECIFIED;
  }
  var UNIT_TYPE_UNSPECIFIED;
  function _get_UNIT_MASK__2625819242() {
    return UNIT_MASK;
  }
  var UNIT_MASK;
  function _get_UNIT_TYPE_SP__591335524() {
    return UNIT_TYPE_SP;
  }
  var UNIT_TYPE_SP;
  function _get_UNIT_TYPE_EM__591321977() {
    return UNIT_TYPE_EM;
  }
  var UNIT_TYPE_EM;
  function _get_isSpecified__2832019115_1(_this__1828080292) {
    return !_get_isUnspecified__892174020_0(_this__1828080292);
  }
  function _Velocity___init__impl__1786618972(packedValue) {
    return packedValue;
  }
  function _get_packedValue__3658110168($this) {
    return $this;
  }
  function _Velocity___get_x__impl__2678592753(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat1_0 = _get_packedValue__3658110168(this_0);
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
  function _Velocity___get_y__impl__126435792(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat2_0 = _get_packedValue__3658110168(this_0);
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
  function Velocity__component1_impl_2788570684(this_0) {
    return _Velocity___get_x__impl__2678592753(this_0);
  }
  function Velocity__component2_impl_2817199835(this_0) {
    return _Velocity___get_y__impl__126435792(this_0);
  }
  function Velocity__copy_impl_3556004987(this_0, x, y) {
    return Velocity_0(x, y);
  }
  function Velocity__copy$default_impl_3403782910(this_0, x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = _Velocity___get_x__impl__2678592753(this_0);
    if (!(($mask0 & 2) === 0))
      y = _Velocity___get_y__impl__126435792(this_0);
    return Velocity__copy_impl_3556004987(this_0, x, y);
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Zero_1 = Velocity_0(0.0, 0.0);
  }
  Companion_9.prototype._get_Zero__785822851_hcer9r_k$ = function () {
    return this.Zero_1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Velocity__unaryMinus_impl_1091836079(this_0) {
    return Velocity_0(-_Velocity___get_x__impl__2678592753(this_0), -_Velocity___get_y__impl__126435792(this_0));
  }
  function Velocity__minus_impl_2359468730(this_0, other) {
    return Velocity_0(_Velocity___get_x__impl__2678592753(this_0) - _Velocity___get_x__impl__2678592753(other), _Velocity___get_y__impl__126435792(this_0) - _Velocity___get_y__impl__126435792(other));
  }
  function Velocity__plus_impl_571245942(this_0, other) {
    return Velocity_0(_Velocity___get_x__impl__2678592753(this_0) + _Velocity___get_x__impl__2678592753(other), _Velocity___get_y__impl__126435792(this_0) + _Velocity___get_y__impl__126435792(other));
  }
  function Velocity__times_impl_2220874148(this_0, operand) {
    return Velocity_0(_Velocity___get_x__impl__2678592753(this_0) * operand, _Velocity___get_y__impl__126435792(this_0) * operand);
  }
  function Velocity__div_impl_3286148729(this_0, operand) {
    return Velocity_0(_Velocity___get_x__impl__2678592753(this_0) / operand, _Velocity___get_y__impl__126435792(this_0) / operand);
  }
  function Velocity__rem_impl_2402979856(this_0, operand) {
    return Velocity_0(_Velocity___get_x__impl__2678592753(this_0) % operand, _Velocity___get_y__impl__126435792(this_0) % operand);
  }
  function Velocity__toString_impl_2894183012(this_0) {
    return '(' + _Velocity___get_x__impl__2678592753(this_0) + ', ' + _Velocity___get_y__impl__126435792(this_0) + ') px/sec';
  }
  function Velocity__hashCode_impl_1578767893(this_0) {
    return this_0.hashCode();
  }
  function Velocity__equals_impl_4109856177(this_0, other) {
    if (!(other instanceof Velocity))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Velocity ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_10();
    this.packedValue_1 = packedValue;
  }
  Velocity.prototype.toString = function () {
    return Velocity__toString_impl_2894183012(this.packedValue_1);
  };
  Velocity.prototype.hashCode = function () {
    return Velocity__hashCode_impl_1578767893(this.packedValue_1);
  };
  Velocity.prototype.equals = function (other) {
    return Velocity__equals_impl_4109856177(this.packedValue_1, other);
  };
  Velocity.$metadata$ = {
    simpleName: 'Velocity',
    kind: 'class',
    interfaces: []
  };
  function Velocity_0(x, y) {
    var tmp$ret$0;
    $l$block: {
      var v1_1 = toLong(toBits(x));
      var v2_2 = toLong(toBits(y));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _Velocity___init__impl__1786618972(tmp$ret$0);
  }
  //region block: post-declaration
  DensityImpl.prototype.toPx_u0ojv5_k$ = toPx;
  DensityImpl.prototype.toPx_x7oik4_k$ = toPx_0;
  DensityImpl.prototype.roundToPx_hl1u8z_k$ = roundToPx;
  DensityImpl.prototype.roundToPx_bdej4u_k$ = roundToPx_0;
  DensityImpl.prototype.toSp_ul0xj8_k$ = toSp;
  DensityImpl.prototype.toSp_8a8emd_k$ = toSp_0;
  DensityImpl.prototype.toSp_j4kre0_k$ = toSp_1;
  DensityImpl.prototype.toDp_amhzyl_k$ = toDp;
  DensityImpl.prototype.toDp_2eugbd_k$ = toDp_0;
  DensityImpl.prototype.toDp_2y47ho_k$ = toDp_1;
  DensityImpl.prototype.toRect_l767f3_k$ = toRect;
  DensityImpl.prototype.toSize_z60fpn_k$ = toSize;
  DensityImpl.prototype.toDpSize_ncjzav_k$ = toDpSize;
  //endregion
  //region block: init
  UNIT_TYPE_UNSPECIFIED = new Long(0, 0);
  UNIT_MASK = new Long(0, 255);
  UNIT_TYPE_SP = new Long(0, 1);
  UNIT_TYPE_EM = new Long(0, 2);
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Constraints = Constraints_0;
  _.$crossModule$.Constraints_1 = Constraints;
  _.$crossModule$.roundToPx = roundToPx;
  _.$crossModule$.roundToPx_1 = roundToPx_0;
  _.$crossModule$.toDpSize = toDpSize;
  _.$crossModule$.toDp = toDp_1;
  _.$crossModule$.toDp_1 = toDp;
  _.$crossModule$.toDp_2 = toDp_0;
  _.$crossModule$.toPx = toPx;
  _.$crossModule$.toPx_1 = toPx_0;
  _.$crossModule$.toRect = toRect;
  _.$crossModule$.toSize = toSize;
  _.$crossModule$.toSp = toSp_0;
  _.$crossModule$.toSp_1 = toSp;
  _.$crossModule$.toSp_2 = toSp_1;
  _.$crossModule$.Density = Density_0;
  _.$crossModule$.Density_1 = Density;
  _.$crossModule$.DpOffset = DpOffset_0;
  _.$crossModule$.DpOffset_1 = DpOffset;
  _.$crossModule$.DpSize = DpSize_0;
  _.$crossModule$.Dp = Dp;
  _.$crossModule$.IntOffset = IntOffset_0;
  _.$crossModule$.IntOffset_1 = IntOffset;
  _.$crossModule$.IntSize = IntSize_0;
  _.$crossModule$.IntSize_1 = IntSize;
  _.$crossModule$.TextUnitType = TextUnitType;
  _.$crossModule$.TextUnit = TextUnit_0;
  _.$crossModule$.TextUnit_1 = TextUnit;
  _.$crossModule$.Velocity = Velocity;
  _.$crossModule$.checkArithmetic = checkArithmetic;
  _.$crossModule$.constrainHeight = constrainHeight;
  _.$crossModule$.constrainWidth = constrainWidth;
  _.$crossModule$.constrain = constrain;
  _.$crossModule$.constrain_1 = constrain_0;
  _.$crossModule$._get_isUnspecified__892174020 = _get_isUnspecified__892174020_0;
  _.$crossModule$.minus = minus;
  _.$crossModule$.offset = offset;
  _.$crossModule$.pack = pack;
  _.$crossModule$.plus = plus;
  _.$crossModule$._get_sp__1413130958 = _get_sp__1413130958_0;
  _.$crossModule$._get_sp__1413130958_1 = _get_sp__1413130958;
  _.$crossModule$.toIntRect = toIntRect;
  _.$crossModule$.toSize_1 = toSize_0;
  _.$crossModule$.LayoutDirection_Ltr_getInstance = LayoutDirection_Ltr_getInstance;
  _.$crossModule$.LayoutDirection_Rtl_getInstance = LayoutDirection_Rtl_getInstance;
  _.$crossModule$.Constraints$default = Constraints$default;
  _.$crossModule$.Density$default = Density$default;
  _.$crossModule$._Constraints___get_hasBoundedHeight__impl__712956524 = _Constraints___get_hasBoundedHeight__impl__712956524;
  _.$crossModule$._Constraints___get_hasBoundedWidth__impl__3842542885 = _Constraints___get_hasBoundedWidth__impl__3842542885;
  _.$crossModule$._Constraints___get_hasFixedHeight__impl__2064548661 = _Constraints___get_hasFixedHeight__impl__2064548661;
  _.$crossModule$._Constraints___get_hasFixedWidth__impl__283911996 = _Constraints___get_hasFixedWidth__impl__283911996;
  _.$crossModule$.Constraints__hashCode_impl_3174331356 = Constraints__hashCode_impl_3174331356;
  _.$crossModule$._Constraints___get_maxHeight__impl__3460039709 = _Constraints___get_maxHeight__impl__3460039709;
  _.$crossModule$._Constraints___get_maxWidth__impl__51833172 = _Constraints___get_maxWidth__impl__51833172;
  _.$crossModule$._Constraints___get_minHeight__impl__3396171247 = _Constraints___get_minHeight__impl__3396171247;
  _.$crossModule$._Constraints___get_minWidth__impl__3236361538 = _Constraints___get_minWidth__impl__3236361538;
  _.$crossModule$._Dp___init__impl__1377471179 = _Dp___init__impl__1377471179;
  _.$crossModule$.Dp__compareTo_impl_1789541913 = Dp__compareTo_impl_1789541913;
  _.$crossModule$.Dp__hashCode_impl_1749449350 = Dp__hashCode_impl_1749449350;
  _.$crossModule$._Dp___get_value__impl__3303478217 = _Dp___get_value__impl__3303478217;
  _.$crossModule$._DpOffset___get_x__impl__2462752079 = _DpOffset___get_x__impl__2462752079;
  _.$crossModule$._DpOffset___get_y__impl__4205562414 = _DpOffset___get_y__impl__4205562414;
  _.$crossModule$._IntOffset___get_x__impl__2691365380 = _IntOffset___get_x__impl__2691365380;
  _.$crossModule$._IntOffset___get_y__impl__139208419 = _IntOffset___get_y__impl__139208419;
  _.$crossModule$.IntSize__hashCode_impl_3290107458 = IntSize__hashCode_impl_3290107458;
  _.$crossModule$._IntSize___get_height__impl__2736509033 = _IntSize___get_height__impl__2736509033;
  _.$crossModule$._IntSize___get_width__impl__3492176776 = _IntSize___get_width__impl__3492176776;
  _.$crossModule$._TextUnit___init__impl__2653257936 = _TextUnit___init__impl__2653257936;
  _.$crossModule$.TextUnit__hashCode_impl_2674772001 = TextUnit__hashCode_impl_2674772001;
  _.$crossModule$._TextUnit___get_isEm__impl__3400122295 = _TextUnit___get_isEm__impl__3400122295;
  _.$crossModule$._TextUnit___get_isSp__impl__504060002 = _TextUnit___get_isSp__impl__504060002;
  _.$crossModule$._TextUnit___get_packedValue__impl__3157586172 = _TextUnit___get_packedValue__impl__3157586172;
  _.$crossModule$._TextUnit___get_rawType__impl__2490641459 = _TextUnit___get_rawType__impl__2490641459;
  _.$crossModule$._TextUnit___get_type__impl__2460701423 = _TextUnit___get_type__impl__2460701423;
  _.$crossModule$._TextUnit___get_value__impl__1070471396 = _TextUnit___get_value__impl__1070471396;
  _.$crossModule$.Velocity__minus_impl_2359468730 = Velocity__minus_impl_2359468730;
  _.$crossModule$.Velocity__plus_impl_571245942 = Velocity__plus_impl_571245942;
  _.$crossModule$.Constraints__copy$default_impl_913947973 = Constraints__copy$default_impl_913947973;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_0;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_2;
  _.$crossModule$.Companion_getInstance_2 = Companion_getInstance_4;
  _.$crossModule$.Companion_getInstance_3 = Companion_getInstance_1;
  _.$crossModule$.Companion_getInstance_4 = Companion_getInstance_5;
  _.$crossModule$.Companion_getInstance_5 = Companion_getInstance_6;
  _.$crossModule$.Companion_getInstance_6 = Companion_getInstance_7;
  _.$crossModule$.Companion_getInstance_7 = Companion_getInstance_8;
  _.$crossModule$.Companion_getInstance_8 = Companion_getInstance_10;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_ui_ui_unit.js.map