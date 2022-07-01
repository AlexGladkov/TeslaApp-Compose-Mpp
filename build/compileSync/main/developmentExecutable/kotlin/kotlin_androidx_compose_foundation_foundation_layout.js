(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui.js'));
  else {
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation_layout'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_foundation_foundation_layout'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation_layout'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_foundation_foundation_layout'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation_layout'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'kotlin_androidx_compose_foundation_foundation_layout'.");
    }
    root.kotlin_androidx_compose_foundation_foundation_layout = factory(typeof kotlin_androidx_compose_foundation_foundation_layout === 'undefined' ? {} : kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_ui_ui);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_ui_ui) {
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var LayoutDirection_Rtl_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.LayoutDirection_Rtl_getInstance;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.LayoutDirection_Ltr_getInstance;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp;
  var Dp__hashCode_impl_1749449350 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp__hashCode_impl_1749449350;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_3;
  var roundToInt = kotlin_kotlin.$crossModule$.roundToInt;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize;
  var _get_NoInspectorInfo__942577837 = kotlin_androidx_compose_ui_ui.$crossModule$._get_NoInspectorInfo__942577837;
  var InspectorValueInfo = kotlin_androidx_compose_ui_ui.$crossModule$.InspectorValueInfo;
  var foldIn = kotlin_androidx_compose_ui_ui.$crossModule$.foldIn;
  var foldOut = kotlin_androidx_compose_ui_ui.$crossModule$.foldOut;
  var any = kotlin_androidx_compose_ui_ui.$crossModule$.any;
  var all = kotlin_androidx_compose_ui_ui.$crossModule$.all;
  var then = kotlin_androidx_compose_ui_ui.$crossModule$.then;
  var ParentDataModifier = kotlin_androidx_compose_ui_ui.$crossModule$.ParentDataModifier;
  var _Constraints___get_minWidth__impl__3236361538 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_minWidth__impl__3236361538;
  var _Constraints___get_minHeight__impl__3396171247 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_minHeight__impl__3396171247;
  var minIntrinsicWidth = kotlin_androidx_compose_ui_ui.$crossModule$.minIntrinsicWidth_1;
  var minIntrinsicHeight = kotlin_androidx_compose_ui_ui.$crossModule$.minIntrinsicHeight_1;
  var maxIntrinsicWidth = kotlin_androidx_compose_ui_ui.$crossModule$.maxIntrinsicWidth_1;
  var maxIntrinsicHeight = kotlin_androidx_compose_ui_ui.$crossModule$.maxIntrinsicHeight_1;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$crossModule$.MeasurePolicy;
  var Placeable = kotlin_androidx_compose_ui_ui.$crossModule$.Placeable;
  var Constraints__copy$default_impl_913947973 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints__copy$default_impl_913947973;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints;
  var _get_isDebugInspectorInfoEnabled__1687471116 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isDebugInspectorInfoEnabled__1687471116;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_1;
  var _Dp___get_value__impl__3303478217 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___get_value__impl__3303478217;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var offset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.offset;
  var constrainWidth = kotlin_androidx_compose_ui_ui_unit.$crossModule$.constrainWidth;
  var constrainHeight = kotlin_androidx_compose_ui_ui_unit.$crossModule$.constrainHeight;
  var minIntrinsicWidth_0 = kotlin_androidx_compose_ui_ui.$crossModule$.minIntrinsicWidth;
  var minIntrinsicHeight_0 = kotlin_androidx_compose_ui_ui.$crossModule$.minIntrinsicHeight;
  var maxIntrinsicWidth_0 = kotlin_androidx_compose_ui_ui.$crossModule$.maxIntrinsicWidth;
  var maxIntrinsicHeight_0 = kotlin_androidx_compose_ui_ui.$crossModule$.maxIntrinsicHeight;
  var LayoutModifier = kotlin_androidx_compose_ui_ui.$crossModule$.LayoutModifier;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_1;
  var _Constraints___get_maxHeight__impl__3460039709 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_maxHeight__impl__3460039709;
  var _Constraints___get_maxWidth__impl__51833172 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_maxWidth__impl__51833172;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var _get_sign__809019438 = kotlin_kotlin.$crossModule$._get_sign__809019438;
  var coerceAtMost = kotlin_kotlin.$crossModule$.coerceAtMost;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_2;
  var _Constraints___get_hasBoundedWidth__impl__3842542885 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_hasBoundedWidth__impl__3842542885;
  var _Constraints___get_hasBoundedHeight__impl__712956524 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_hasBoundedHeight__impl__712956524;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize_1;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var coerceAtLeast_0 = kotlin_kotlin.$crossModule$.coerceAtLeast_1;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$crossModule$.constrain;
  var _Constraints___get_hasFixedWidth__impl__283911996 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_hasFixedWidth__impl__283911996;
  var _Constraints___get_hasFixedHeight__impl__2064548661 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_hasFixedHeight__impl__2064548661;
  var _IntSize___get_width__impl__3492176776 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_width__impl__3492176776;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset_1;
  var _IntSize___get_height__impl__2736509033 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_height__impl__2736509033;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_6;
  var modifierLocalOf = kotlin_androidx_compose_ui_ui.$crossModule$.modifierLocalOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  function _get_spacing__4173594414() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_spacing__4173594414_0() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_spacing__4173594414_1() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  BoxChildData.prototype = Object.create(InspectorValueInfo.prototype);
  BoxChildData.prototype.constructor = BoxChildData;
  PaddingModifier.prototype = Object.create(InspectorValueInfo.prototype);
  PaddingModifier.prototype.constructor = PaddingModifier;
  LayoutOrientation.prototype = Object.create(Enum.prototype);
  LayoutOrientation.prototype.constructor = LayoutOrientation;
  CenterCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  CenterCrossAxisAlignment.prototype.constructor = CenterCrossAxisAlignment;
  StartCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  StartCrossAxisAlignment.prototype.constructor = StartCrossAxisAlignment;
  EndCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  EndCrossAxisAlignment.prototype.constructor = EndCrossAxisAlignment;
  AlignmentLineCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  AlignmentLineCrossAxisAlignment.prototype.constructor = AlignmentLineCrossAxisAlignment;
  VerticalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  VerticalCrossAxisAlignment.prototype.constructor = VerticalCrossAxisAlignment;
  HorizontalCrossAxisAlignment.prototype = Object.create(CrossAxisAlignment.prototype);
  HorizontalCrossAxisAlignment.prototype.constructor = HorizontalCrossAxisAlignment;
  SizeMode.prototype = Object.create(Enum.prototype);
  SizeMode.prototype.constructor = SizeMode;
  Block.prototype = Object.create(AlignmentLineProvider.prototype);
  Block.prototype.constructor = Block;
  Value.prototype = Object.create(AlignmentLineProvider.prototype);
  Value.prototype.constructor = Value;
  FillModifier.prototype = Object.create(InspectorValueInfo.prototype);
  FillModifier.prototype.constructor = FillModifier;
  WrapContentModifier.prototype = Object.create(InspectorValueInfo.prototype);
  WrapContentModifier.prototype.constructor = WrapContentModifier;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  SizeModifier.prototype = Object.create(InspectorValueInfo.prototype);
  SizeModifier.prototype.constructor = SizeModifier;
  UnspecifiedConstraintsModifier.prototype = Object.create(InspectorValueInfo.prototype);
  UnspecifiedConstraintsModifier.prototype.constructor = UnspecifiedConstraintsModifier;
  //endregion
  function Arrangement$Absolute$Left$1() {
  }
  Arrangement$Absolute$Left$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  Arrangement$Absolute$Left$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  Arrangement$Absolute$Left$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$Center$1() {
  }
  Arrangement$Absolute$Center$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$Center$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  Arrangement$Absolute$Center$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$Right$1() {
  }
  Arrangement$Absolute$Right$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$Right$1.prototype.toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  Arrangement$Absolute$Right$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  Arrangement$Absolute$SpaceBetween$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceBetween$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  Arrangement$Absolute$SpaceBetween$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  Arrangement$Absolute$SpaceEvenly$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceEvenly$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  Arrangement$Absolute$SpaceEvenly$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  Arrangement$Absolute$SpaceAround$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Absolute$SpaceAround$1.prototype.toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  Arrangement$Absolute$SpaceAround$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__2695192083) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  Horizontal.$metadata$ = {
    simpleName: 'Horizontal',
    kind: 'interface',
    interfaces: []
  };
  function Vertical() {
  }
  Vertical.$metadata$ = {
    simpleName: 'Vertical',
    kind: 'interface',
    interfaces: []
  };
  function HorizontalOrVertical() {
  }
  HorizontalOrVertical.$metadata$ = {
    simpleName: 'HorizontalOrVertical',
    kind: 'interface',
    interfaces: [Horizontal, Vertical]
  };
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  Absolute.prototype._get_Left__772882180_cs5jpg_k$ = function () {
    return this.Left_1;
  };
  Absolute.prototype._get_Center__320263478_5aocvq_k$ = function () {
    return this.Center_1;
  };
  Absolute.prototype._get_Right__2660000085_r1f0rv_k$ = function () {
    return this.Right_1;
  };
  Absolute.prototype._get_SpaceBetween__2018616649_xdtykp_k$ = function () {
    return this.SpaceBetween_1;
  };
  Absolute.prototype._get_SpaceEvenly__4170040964_22dlrw_k$ = function () {
    return this.SpaceEvenly_1;
  };
  Absolute.prototype._get_SpaceAround__514954654_8il9jy_k$ = function () {
    return this.SpaceAround_1;
  };
  Absolute.prototype.spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  Absolute.prototype.spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  Absolute.prototype.spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  Absolute.prototype.aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  Absolute.$metadata$ = {
    simpleName: 'Absolute',
    kind: 'object',
    interfaces: []
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  SpacedAligned.prototype._get_space__3611042699_95pf7e_k$ = function () {
    return this.space_1;
  };
  SpacedAligned.prototype._get_rtlMirror__531312808_8sbvl4_k$ = function () {
    return this.rtlMirror_1;
  };
  SpacedAligned.prototype._get_alignment__1956744398_wcztn2_k$ = function () {
    return this.alignment_1;
  };
  SpacedAligned.prototype._get_spacing__4173594414_ckcwbb_k$ = function () {
    return this.spacing_1;
  };
  SpacedAligned.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = sizes.length === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      return Unit_getInstance();
    else {
    }
    var spacePx = _this__1828080292.roundToPx_hl1u8z_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    {
      var tmp0_forEachIndexed_0 = Arrangement_getInstance();
      if (!reversed) {
        {
          var index_1 = 0;
          var indexedObject = sizes;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var item_3 = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_min_0_4 = occupied;
                var tmp1_min_0_5 = totalSize - item_3 | 0;
                tmp$ret$1 = Math.min(tmp0_min_0_4, tmp1_min_0_5);
                break $l$block_0;
              }
              outPositions[tmp1__anonymous__3_4003154332] = tmp$ret$1;
              var tmp$ret$2;
              $l$block_1: {
                var tmp2_min_0_6 = (totalSize - outPositions[tmp1__anonymous__3_4003154332] | 0) - item_3 | 0;
                tmp$ret$2 = Math.min(spacePx, tmp2_min_0_6);
                break $l$block_1;
              }
              lastSpace = tmp$ret$2;
              occupied = (outPositions[tmp1__anonymous__3_4003154332] + item_3 | 0) + lastSpace | 0;
            }
          }
        }
      } else {
        var inductionVariable_0 = sizes.length - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var i_2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = sizes[i_2];
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_min_0_4_0 = occupied;
                var tmp1_min_0_5_0 = totalSize - tmp2__anonymous__3_1215738845 | 0;
                tmp$ret$3 = Math.min(tmp0_min_0_4_0, tmp1_min_0_5_0);
                break $l$block_2;
              }
              outPositions[i_2] = tmp$ret$3;
              var tmp$ret$4;
              $l$block_3: {
                var tmp2_min_0_6_0 = (totalSize - outPositions[i_2] | 0) - tmp2__anonymous__3_1215738845 | 0;
                tmp$ret$4 = Math.min(spacePx, tmp2_min_0_6_0);
                break $l$block_3;
              }
              lastSpace = tmp$ret$4;
              occupied = (outPositions[i_2] + tmp2__anonymous__3_1215738845 | 0) + lastSpace | 0;
            }
          }
           while (0 <= inductionVariable_0);
      }
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var tmp1_array = outPositions;
          var tmp2_index0 = index;
          tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  SpacedAligned.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return this.arrange_6sc983_k$(_this__1828080292, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  SpacedAligned.prototype.toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.space_1) + ', ' + this.alignment_1 + ')';
  };
  SpacedAligned.prototype.component1_z2a8sv_k$ = function () {
    return this.space_1;
  };
  SpacedAligned.prototype.component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  SpacedAligned.prototype.component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  SpacedAligned.prototype.copy_f6k3do_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  SpacedAligned.prototype.copy$default_iauowy_k$ = function (space, rtlMirror, alignment, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      space = this.space_1;
    if (!(($mask0 & 2) === 0))
      rtlMirror = this.rtlMirror_1;
    if (!(($mask0 & 4) === 0))
      alignment = this.alignment_1;
    return this.copy_f6k3do_k$(space, rtlMirror, alignment);
  };
  SpacedAligned.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_1749449350(this.space_1);
    result = imul(result, 31) + (this.rtlMirror_1 | 0) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  SpacedAligned.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  SpacedAligned.$metadata$ = {
    simpleName: 'SpacedAligned',
    kind: 'class',
    interfaces: [HorizontalOrVertical]
  };
  function forEachIndexed(_this__1828080292, $this, reversed, action) {
    if (!reversed) {
      {
        var index_1 = 0;
        var indexedObject = _this__1828080292;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var item_3 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_4 = index_1;
          index_1 = tmp1_4 + 1 | 0;
          action(tmp1_4, item_3);
        }
      }
    } else {
      var inductionVariable_0 = _this__1828080292.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__1828080292[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function Arrangement$Start$1() {
  }
  Arrangement$Start$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$Start$1.prototype.toString = function () {
    return 'Arrangement#Start';
  };
  Arrangement$Start$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$End$1() {
  }
  Arrangement$End$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$End$1.prototype.toString = function () {
    return 'Arrangement#End';
  };
  Arrangement$End$1.$metadata$ = {
    kind: 'class',
    interfaces: [Horizontal]
  };
  function Arrangement$Top$1() {
  }
  Arrangement$Top$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  Arrangement$Top$1.prototype.toString = function () {
    return 'Arrangement#Top';
  };
  Arrangement$Top$1.$metadata$ = {
    kind: 'class',
    interfaces: [Vertical]
  };
  function Arrangement$Bottom$1() {
  }
  Arrangement$Bottom$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Bottom$1.prototype.toString = function () {
    return 'Arrangement#Bottom';
  };
  Arrangement$Bottom$1.$metadata$ = {
    kind: 'class',
    interfaces: [Vertical]
  };
  function Arrangement$Center$1() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$Center$1.prototype._get_spacing__4173594414_ckcwbb_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$Center$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$Center$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$Center$1.prototype.toString = function () {
    return 'Arrangement#Center';
  };
  Arrangement$Center$1.$metadata$ = {
    kind: 'class',
    interfaces: [HorizontalOrVertical]
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceEvenly$1.prototype._get_spacing__4173594414_ckcwbb_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceEvenly$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$SpaceEvenly$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceEvenly$1.prototype.toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  Arrangement$SpaceEvenly$1.$metadata$ = {
    kind: 'class',
    interfaces: [HorizontalOrVertical]
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceBetween$1.prototype._get_spacing__4173594414_ckcwbb_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceBetween$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$SpaceBetween$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceBetween$1.prototype.toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  Arrangement$SpaceBetween$1.$metadata$ = {
    kind: 'class',
    interfaces: [HorizontalOrVertical]
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    tmp.spacing_1 = tmp$ret$0;
  }
  Arrangement$SpaceAround$1.prototype._get_spacing__4173594414_ckcwbb_k$ = function () {
    return this.spacing_1;
  };
  Arrangement$SpaceAround$1.prototype.arrange_6sc983_k$ = function (_this__1828080292, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
    } else {
      tmp = Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, true);
    }
    return tmp;
  };
  Arrangement$SpaceAround$1.prototype.arrange_bbki90_k$ = function (_this__1828080292, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  Arrangement$SpaceAround$1.prototype.toString = function () {
    return 'Arrangement#SpaceAround';
  };
  Arrangement$SpaceAround$1.$metadata$ = {
    kind: 'class',
    interfaces: [HorizontalOrVertical]
  };
  function Arrangement$spacedBy$lambda() {
    return function (size, layoutDirection) {
      return Companion_getInstance()._get_Start__2698618831_qefacx_k$().align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__2695192083) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__2695192083) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
  }
  Arrangement.prototype._get_Start__2698618831_qefacx_k$ = function () {
    return this.Start_1;
  };
  Arrangement.prototype._get_End__856015670_e5ndx2_k$ = function () {
    return this.End_1;
  };
  Arrangement.prototype._get_Top__856463868_e5wzr0_k$ = function () {
    return this.Top_1;
  };
  Arrangement.prototype._get_Bottom__4019569184_4jyqjk_k$ = function () {
    return this.Bottom_1;
  };
  Arrangement.prototype._get_Center__320263478_5aocvq_k$ = function () {
    return this.Center_1;
  };
  Arrangement.prototype._get_SpaceEvenly__4170040964_22dlrw_k$ = function () {
    return this.SpaceEvenly_1;
  };
  Arrangement.prototype._get_SpaceBetween__2018616649_xdtykp_k$ = function () {
    return this.SpaceBetween_1;
  };
  Arrangement.prototype._get_SpaceAround__514954654_8il9jy_k$ = function () {
    return this.SpaceAround_1;
  };
  Arrangement.prototype.spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda());
  };
  Arrangement.prototype.spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  Arrangement.prototype.spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  Arrangement.prototype.aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  Arrangement.prototype.aligned_8fzwhi_k$ = function (alignment) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  Arrangement.prototype.placeRightOrBottom_j5u2x1_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    $l$block_0: {
      var accumulator_1 = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          tmp$ret$0 = tmp0__anonymous__4_2495602524 + element_3 | 0;
          break $l$block;
        }
        accumulator_1 = tmp$ret$0;
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var consumedSize = tmp$ret$1;
    var current = totalSize - consumedSize | 0;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject_0 = size;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_3 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              outPosition[tmp1__anonymous__3_4003154332] = current;
              current = current + item_3 | 0;
            }
          }
        }
      } else {
        var inductionVariable_1 = size.length - 1 | 0;
        if (0 <= inductionVariable_1)
          do {
            var i_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = size[i_2];
              outPosition[i_2] = current;
              current = current + tmp2__anonymous__3_1215738845 | 0;
            }
          }
           while (0 <= inductionVariable_1);
      }
    }
  };
  Arrangement.prototype.placeLeftOrTop_1r2n9x_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject = size;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var item_3 = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp0__anonymous__3_2495602523 = tmp1_4;
              outPosition[tmp0__anonymous__3_2495602523] = current;
              current = current + item_3 | 0;
            }
          }
        }
      } else {
        var inductionVariable_0 = size.length - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var i_2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            {
              var tmp1__anonymous__3_4003154332 = size[i_2];
              outPosition[i_2] = current;
              current = current + tmp1__anonymous__3_4003154332 | 0;
            }
          }
           while (0 <= inductionVariable_0);
      }
    }
  };
  Arrangement.prototype.placeCenter_icok0k_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    $l$block_0: {
      var accumulator_1 = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          tmp$ret$0 = tmp0__anonymous__4_2495602524 + element_3 | 0;
          break $l$block;
        }
        accumulator_1 = tmp$ret$0;
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var consumedSize = tmp$ret$1;
    var current = (totalSize - consumedSize | 0) / 2;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject_0 = size;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_3 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_roundToInt_0_4 = current;
                tmp$ret$2 = roundToInt(tmp0_roundToInt_0_4);
                break $l$block_1;
              }
              outPosition[tmp1__anonymous__3_4003154332] = tmp$ret$2;
              current = current + item_3;
            }
          }
        }
      } else {
        var inductionVariable_1 = size.length - 1 | 0;
        if (0 <= inductionVariable_1)
          do {
            var i_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = size[i_2];
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_roundToInt_0_4_0 = current;
                tmp$ret$3 = roundToInt(tmp0_roundToInt_0_4_0);
                break $l$block_2;
              }
              outPosition[i_2] = tmp$ret$3;
              current = current + tmp2__anonymous__3_1215738845;
            }
          }
           while (0 <= inductionVariable_1);
      }
    }
  };
  Arrangement.prototype.placeSpaceEvenly_ojzjdq_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    $l$block_0: {
      var accumulator_1 = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          tmp$ret$0 = tmp0__anonymous__4_2495602524 + element_3 | 0;
          break $l$block;
        }
        accumulator_1 = tmp$ret$0;
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var consumedSize = tmp$ret$1;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject_0 = size;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_3 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_roundToInt_0_4 = current;
                tmp$ret$2 = roundToInt(tmp0_roundToInt_0_4);
                break $l$block_1;
              }
              outPosition[tmp1__anonymous__3_4003154332] = tmp$ret$2;
              current = current + (item_3 + gapSize);
            }
          }
        }
      } else {
        var inductionVariable_1 = size.length - 1 | 0;
        if (0 <= inductionVariable_1)
          do {
            var i_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = size[i_2];
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_roundToInt_0_4_0 = current;
                tmp$ret$3 = roundToInt(tmp0_roundToInt_0_4_0);
                break $l$block_2;
              }
              outPosition[i_2] = tmp$ret$3;
              current = current + (tmp2__anonymous__3_1215738845 + gapSize);
            }
          }
           while (0 <= inductionVariable_1);
      }
    }
  };
  Arrangement.prototype.placeSpaceBetween_8d7z33_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    $l$block_0: {
      var accumulator_1 = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          tmp$ret$0 = tmp0__anonymous__4_2495602524 + element_3 | 0;
          break $l$block;
        }
        accumulator_1 = tmp$ret$0;
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var consumedSize = tmp$ret$1;
    var tmp;
    if (size.length > 1) {
      tmp = (totalSize - consumedSize | 0) / (size.length - 1 | 0);
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = 0.0;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject_0 = size;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_3 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_roundToInt_0_4 = current;
                tmp$ret$2 = roundToInt(tmp0_roundToInt_0_4);
                break $l$block_1;
              }
              outPosition[tmp1__anonymous__3_4003154332] = tmp$ret$2;
              current = current + (item_3 + gapSize);
            }
          }
        }
      } else {
        var inductionVariable_1 = size.length - 1 | 0;
        if (0 <= inductionVariable_1)
          do {
            var i_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = size[i_2];
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_roundToInt_0_4_0 = current;
                tmp$ret$3 = roundToInt(tmp0_roundToInt_0_4_0);
                break $l$block_2;
              }
              outPosition[i_2] = tmp$ret$3;
              current = current + (tmp2__anonymous__3_1215738845 + gapSize);
            }
          }
           while (0 <= inductionVariable_1);
      }
    }
  };
  Arrangement.prototype.placeSpaceAround_2yd3pg_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    $l$block_0: {
      var accumulator_1 = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          tmp$ret$0 = tmp0__anonymous__4_2495602524 + element_3 | 0;
          break $l$block;
        }
        accumulator_1 = tmp$ret$0;
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var consumedSize = tmp$ret$1;
    var tmp;
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = size.length === 0;
        break $l$block_1;
      }
      tmp$ret$3 = !tmp$ret$2;
      break $l$block_2;
    }
    if (tmp$ret$3) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      {
        tmp = 0.0;
      }
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    {
      if (!reverseInput) {
        {
          var index_1 = 0;
          var indexedObject_0 = size;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_3 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__3_4003154332 = tmp1_4;
              var tmp$ret$4;
              $l$block_3: {
                var tmp0_roundToInt_0_4 = current;
                tmp$ret$4 = roundToInt(tmp0_roundToInt_0_4);
                break $l$block_3;
              }
              outPosition[tmp1__anonymous__3_4003154332] = tmp$ret$4;
              current = current + (item_3 + gapSize);
            }
          }
        }
      } else {
        var inductionVariable_1 = size.length - 1 | 0;
        if (0 <= inductionVariable_1)
          do {
            var i_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + -1 | 0;
            {
              var tmp2__anonymous__3_1215738845 = size[i_2];
              var tmp$ret$5;
              $l$block_4: {
                var tmp0_roundToInt_0_4_0 = current;
                tmp$ret$5 = roundToInt(tmp0_roundToInt_0_4_0);
                break $l$block_4;
              }
              outPosition[i_2] = tmp$ret$5;
              current = current + (tmp2__anonymous__3_1215738845 + gapSize);
            }
          }
           while (0 <= inductionVariable_1);
      }
    }
  };
  Arrangement.$metadata$ = {
    simpleName: 'Arrangement',
    kind: 'object',
    interfaces: []
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function _get_DefaultBoxMeasurePolicy__229221739() {
    init_properties_Box_kt_1296367881();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function _get_EmptyBoxMeasurePolicy__583340191() {
    init_properties_Box_kt_1296367881();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    init_properties_Box_kt_1296367881();
    return new boxMeasurePolicy$1(propagateMinConstraints, alignment);
  }
  function _get_matchesParentSize__3226706355(_this__1828080292) {
    init_properties_Box_kt_1296367881();
    var tmp0_safe_receiver = _get_boxChildData__636762960(_this__1828080292);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__1828080292, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    init_properties_Box_kt_1296367881();
    var tmp0_safe_receiver = _get_boxChildData__636762960(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_f85h4l_k$(IntSize(placeable._get_width__3719200459_9isoj9_k$(), placeable._get_height__3088126660_jyis70_k$()), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__1828080292.place$default_i08ls_k$(placeable, position, 0.0, 2, null);
  }
  function BoxChildData_init_$Init$(alignment, matchParentSize, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      matchParentSize = false;
    if (!(($mask0 & 4) === 0))
      inspectorInfo = _get_NoInspectorInfo__942577837();
    BoxChildData.call($this, alignment, matchParentSize, inspectorInfo);
    return $this;
  }
  function BoxChildData_init_$Create$(alignment, matchParentSize, inspectorInfo, $mask0, $marker) {
    return BoxChildData_init_$Init$(alignment, matchParentSize, inspectorInfo, $mask0, $marker, Object.create(BoxChildData.prototype));
  }
  function BoxChildData(alignment, matchParentSize, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  BoxChildData.prototype._set_alignment__185008194_sp26fw_k$ = function (_set____804775014) {
    this.alignment_1 = _set____804775014;
  };
  BoxChildData.prototype._get_alignment__1956744398_wcztn2_k$ = function () {
    return this.alignment_1;
  };
  BoxChildData.prototype._set_matchParentSize__3515832085_60hjv0_k$ = function (_set____804775014) {
    this.matchParentSize_1 = _set____804775014;
  };
  BoxChildData.prototype._get_matchParentSize__4126755489_2s5d27_k$ = function () {
    return this.matchParentSize_1;
  };
  BoxChildData.prototype.modifyParentData_x7ztp7_k$ = function (_this__1828080292, parentData) {
    return this;
  };
  BoxChildData.prototype.equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildData ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) ? this.matchParentSize_1 === otherModifier.matchParentSize_1 : false;
  };
  BoxChildData.prototype.hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + (this.matchParentSize_1 | 0) | 0;
    return result;
  };
  BoxChildData.prototype.toString = function () {
    return 'BoxChildData(alignment=' + this.alignment_1 + ', matchParentSize=' + this.matchParentSize_1 + ')';
  };
  BoxChildData.$metadata$ = {
    simpleName: 'BoxChildData',
    kind: 'class',
    interfaces: [ParentDataModifier]
  };
  function _get_boxChildData__636762960(_this__1828080292) {
    init_properties_Box_kt_1296367881();
    var tmp = _this__1828080292._get_parentData__3398383511_etswh5_k$();
    return tmp instanceof BoxChildData ? tmp : null;
  }
  function EmptyBoxMeasurePolicy$o$measure$lambda() {
    return function ($this$layout) {
      return Unit_getInstance();
    };
  }
  function EmptyBoxMeasurePolicy$1() {
  }
  EmptyBoxMeasurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__1828080292, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__3236361538(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__3396171247(constraints);
    return _this__1828080292.layout$default_yb6zmd_k$(tmp, tmp_0, null, EmptyBoxMeasurePolicy$o$measure$lambda(), 4, null);
  };
  EmptyBoxMeasurePolicy$1.$metadata$ = {
    kind: 'class',
    interfaces: [MeasurePolicy]
  };
  function boxMeasurePolicy$o$measure$lambda() {
    return function ($this$layout) {
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$o$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure._get_layoutDirection__1820011324_u3l5q4_k$(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$o$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index_1 = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1_4 = index_1;
          index_1 = tmp1_4 + 1 | 0;
          var tmp0__anonymous__5_2495602525 = tmp1_4;
          if (item_3 instanceof Placeable)
            item_3;
          else
            THROW_CCE();
          Unit_getInstance();
          var measurable_6 = $measurables.get_fkrdnv_k$(tmp0__anonymous__5_2495602525);
          placeInBox($this$layout, item_3, measurable_6, $this_measure._get_layoutDirection__1820011324_u3l5q4_k$(), $boxWidth._v, $boxHeight._v, $alignment);
        }
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$1($propagateMinConstraints, $alignment) {
    this.$propagateMinConstraints_1 = $propagateMinConstraints;
    this.$alignment_1 = $alignment;
  }
  boxMeasurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__1828080292, measurables, constraints) {
    if (measurables.isEmpty_y1axqb_k$()) {
      var tmp = _Constraints___get_minWidth__impl__3236361538(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__3396171247(constraints);
      return _this__1828080292.layout$default_yb6zmd_k$(tmp, tmp_0, null, boxMeasurePolicy$o$measure$lambda(), 4, null);
    }
    var tmp_1;
    if (this.$propagateMinConstraints_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_913947973(constraints, 0, 0, 0, 0, 10, null);
    }
    var contentConstraints = tmp_1;
    if (measurables._get_size__809037418_ddoh9m_k$() === 1) {
      var measurable = measurables.get_fkrdnv_k$(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!_get_matchesParentSize__3226706355(measurable)) {
        placeable = measurable.measure_ikak0q_k$(contentConstraints);
        var tmp$ret$0;
        $l$block: {
          var tmp0_max_0 = _Constraints___get_minWidth__impl__3236361538(constraints);
          var tmp1_max_0 = placeable._get_width__3719200459_9isoj9_k$();
          tmp$ret$0 = Math.max(tmp0_max_0, tmp1_max_0);
          break $l$block;
        }
        boxWidth = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp2_max_0 = _Constraints___get_minHeight__impl__3396171247(constraints);
          var tmp3_max_0 = placeable._get_height__3088126660_jyis70_k$();
          tmp$ret$1 = Math.max(tmp2_max_0, tmp3_max_0);
          break $l$block_0;
        }
        boxHeight = tmp$ret$1;
      } else {
        boxWidth = _Constraints___get_minWidth__impl__3236361538(constraints);
        boxHeight = _Constraints___get_minHeight__impl__3396171247(constraints);
        placeable = measurable.measure_ikak0q_k$(Companion_getInstance_0().fixed_bmujv7_k$(_Constraints___get_minWidth__impl__3236361538(constraints), _Constraints___get_minHeight__impl__3396171247(constraints)));
      }
      return _this__1828080292.layout$default_yb6zmd_k$(boxWidth, boxHeight, null, boxMeasurePolicy$o$measure$lambda_0(placeable, measurable, _this__1828080292, boxWidth, boxHeight, this.$alignment_1), 4, null);
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp4_arrayOfNulls_0 = measurables._get_size__809037418_ddoh9m_k$();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls_0), null);
      break $l$block_1;
    }
    var placeables = tmp$ret$2;
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__3236361538(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__3396171247(constraints)};
    {
      {
      }
      var inductionVariable = 0;
      var last = measurables._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = measurables.get_fkrdnv_k$(index_2);
          {
            if (!_get_matchesParentSize__3226706355(item_3)) {
              var placeable_5 = item_3.measure_ikak0q_k$(contentConstraints);
              placeables[index_2] = placeable_5;
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_max_0_6 = boxWidth_0._v;
                var tmp1_max_0_7 = placeable_5._get_width__3719200459_9isoj9_k$();
                tmp$ret$3 = Math.max(tmp0_max_0_6, tmp1_max_0_7);
                break $l$block_2;
              }
              boxWidth_0._v = tmp$ret$3;
              var tmp$ret$4;
              $l$block_3: {
                var tmp2_max_0_8 = boxHeight_0._v;
                var tmp3_max_0_9 = placeable_5._get_height__3088126660_jyis70_k$();
                tmp$ret$4 = Math.max(tmp2_max_0_8, tmp3_max_0_9);
                break $l$block_3;
              }
              boxHeight_0._v = tmp$ret$4;
            } else {
              hasMatchParentSizeChildren = true;
            }
          }
        }
         while (inductionVariable <= last);
    }
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = measurables._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_0 = measurables.get_fkrdnv_k$(index_2_0);
            {
              if (_get_matchesParentSize__3226706355(item_3_0)) {
                placeables[index_2_0] = item_3_0.measure_ikak0q_k$(matchParentSizeConstraints);
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__1828080292.layout$default_yb6zmd_k$(tmp_2, tmp_3, null, boxMeasurePolicy$o$measure$lambda_1(placeables, measurables, _this__1828080292, boxWidth_0, boxHeight_0, this.$alignment_1), 4, null);
  };
  boxMeasurePolicy$1.$metadata$ = {
    kind: 'class',
    interfaces: [MeasurePolicy]
  };
  var properties_initialized_Box_kt_1255062373;
  function init_properties_Box_kt_1296367881() {
    if (!properties_initialized_Box_kt_1255062373) {
      properties_initialized_Box_kt_1255062373 = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance()._get_TopStart__3260449086_h3xbcy_k$(), false);
      EmptyBoxMeasurePolicy = new EmptyBoxMeasurePolicy$1();
    }
  }
  function _get_DefaultColumnMeasurePolicy__690634002() {
    init_properties_Column_kt_2211406148();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function DefaultColumnMeasurePolicy$lambda() {
    return function (totalSize, size, _anonymous_parameter_2__2695192114, density, outPosition) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_with_0 = Arrangement_getInstance()._get_Top__856463868_e5wzr0_k$();
        {
        }
        tmp$ret$0 = tmp0_with_0.arrange_bbki90_k$(density, totalSize, size, outPosition);
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Column_kt_39663976;
  function init_properties_Column_kt_2211406148() {
    if (!properties_initialized_Column_kt_39663976) {
      properties_initialized_Column_kt_39663976 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance()._get_Top__856463868_e5wzr0_k$()._get_spacing__4173594414_ckcwbb_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_4().horizontal_d2uuko_k$(Companion_getInstance()._get_Start__2698618831_qefacx_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda(), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function padding(_this__1828080292, start, top, end, bottom) {
    var tmp$ret$4;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = padding$lambda(start, top, end, bottom);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$4 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(new PaddingModifier(start, top, end, bottom, true, tmp$ret$4));
  }
  function padding$default(_this__1828080292, start, top, end, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(0);
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(0);
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(0);
        tmp$ret$2 = Unit_getInstance();
        break $l$block_1;
      }
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(0);
        tmp$ret$3 = Unit_getInstance();
        break $l$block_2;
      }
      bottom = tmp$ret$0_3;
    }
    return padding(_this__1828080292, start, top, end, bottom);
  }
  function padding_0(_this__1828080292, all) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = padding$lambda_0(all);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(new PaddingModifier(all, all, all, all, true, tmp$ret$0));
  }
  function PaddingModifier_init_$Init$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(0);
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      start = tmp$ret$0;
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(0);
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      top = tmp$ret$0_1;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(0);
        tmp$ret$2 = Unit_getInstance();
        break $l$block_1;
      }
      end = tmp$ret$0_2;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(0);
        tmp$ret$3 = Unit_getInstance();
        break $l$block_2;
      }
      bottom = tmp$ret$0_3;
    }
    PaddingModifier.call($this, start, top, end, bottom, rtlAware, inspectorInfo);
    return $this;
  }
  function PaddingModifier_init_$Create$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker) {
    return PaddingModifier_init_$Init$(start, top, end, bottom, rtlAware, inspectorInfo, $mask0, $marker, Object.create(PaddingModifier.prototype));
  }
  function PaddingModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        var tmp_0 = $this_measure.roundToPx_hl1u8z_k$(this$0.start_1);
        var tmp_1 = $this_measure.roundToPx_hl1u8z_k$(this$0.top_1);
        tmp = $this$layout.placeRelative$default_lh46qu_k$($placeable, tmp_0, tmp_1, 0.0, 4, null);
      } else {
        var tmp_2 = $this_measure.roundToPx_hl1u8z_k$(this$0.start_1);
        var tmp_3 = $this_measure.roundToPx_hl1u8z_k$(this$0.top_1);
        tmp = $this$layout.place$default_lnyts6_k$($placeable, tmp_2, tmp_3, 0.0, 4, null);
      }
      return Unit_getInstance();
    };
  }
  function PaddingModifier(start, top, end, bottom, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    {
      var tmp0_require_0 = (((_Dp___get_value__impl__3303478217(this.start_1) >= 0.0 ? true : equals(this.start_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) ? _Dp___get_value__impl__3303478217(this.top_1) >= 0.0 ? true : equals(this.top_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) : false) ? _Dp___get_value__impl__3303478217(this.end_1) >= 0.0 ? true : equals(this.end_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) : false) ? _Dp___get_value__impl__3303478217(this.bottom_1) >= 0.0 ? true : equals(this.bottom_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$4;
        $l$block: {
          tmp$ret$4 = 'Padding must be non-negative';
          break $l$block;
        }
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  PaddingModifier.prototype._get_start__3614751663_f7mfbq_k$ = function () {
    return this.start_1;
  };
  PaddingModifier.prototype._get_top__857417180_zeh7vb_k$ = function () {
    return this.top_1;
  };
  PaddingModifier.prototype._get_end__856968982_tuay4x_k$ = function () {
    return this.end_1;
  };
  PaddingModifier.prototype._get_bottom__2354915904_b2yrut_k$ = function () {
    return this.bottom_1;
  };
  PaddingModifier.prototype._get_rtlAware__932937783_ffg3ef_k$ = function () {
    return this.rtlAware_1;
  };
  PaddingModifier.prototype.measure_i9wrw7_k$ = function (_this__1828080292, measurable, constraints) {
    var horizontal = _this__1828080292.roundToPx_hl1u8z_k$(this.start_1) + _this__1828080292.roundToPx_hl1u8z_k$(this.end_1) | 0;
    var vertical = _this__1828080292.roundToPx_hl1u8z_k$(this.top_1) + _this__1828080292.roundToPx_hl1u8z_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable._get_width__3719200459_9isoj9_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable._get_height__3088126660_jyis70_k$() + vertical | 0);
    return _this__1828080292.layout$default_yb6zmd_k$(width, height, null, PaddingModifier$measure$lambda(this, placeable, _this__1828080292), 4, null);
  };
  PaddingModifier.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_1749449350(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_1749449350(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_1749449350(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_1749449350(this.bottom_1) | 0;
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  PaddingModifier.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (((equals(this.start_1, otherModifier.start_1) ? equals(this.top_1, otherModifier.top_1) : false) ? equals(this.end_1, otherModifier.end_1) : false) ? equals(this.bottom_1, otherModifier.bottom_1) : false) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  PaddingModifier.$metadata$ = {
    simpleName: 'PaddingModifier',
    kind: 'class',
    interfaces: [LayoutModifier]
  };
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('padding');
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('start', new Dp($start));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('top', new Dp($top));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('end', new Dp($end));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('padding');
      $this$null._set_value__1325260276_ap8xuk_k$(new Dp($all));
      return Unit_getInstance();
    };
  }
  function _get_DefaultRowMeasurePolicy__3194755898() {
    init_properties_Row_kt_1754404506();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function DefaultRowMeasurePolicy$lambda() {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_with_0 = Arrangement_getInstance()._get_Start__2698618831_qefacx_k$();
        {
        }
        tmp$ret$0 = tmp0_with_0.arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Row_kt_1713098998;
  function init_properties_Row_kt_1754404506() {
    if (!properties_initialized_Row_kt_1713098998) {
      properties_initialized_Row_kt_1713098998 = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance()._get_Start__2698618831_qefacx_k$()._get_spacing__4173594414_ckcwbb_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_4().vertical_qzmr60_k$(Companion_getInstance()._get_Top__856463868_e5wzr0_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda(), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  function values() {
    return [LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Horizontal':
        return LayoutOrientation_Horizontal_getInstance();
      case 'Vertical':
        return LayoutOrientation_Vertical_getInstance();
      default:
        LayoutOrientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LayoutOrientation.$metadata$ = {
    simpleName: 'LayoutOrientation',
    kind: 'class',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  Companion.prototype._get_Center__320263478_5aocvq_k$ = function () {
    return this.Center_1;
  };
  Companion.prototype._get_Start__2698618831_qefacx_k$ = function () {
    return this.Start_1;
  };
  Companion.prototype._get_End__856015670_e5ndx2_k$ = function () {
    return this.End_1;
  };
  Companion.prototype.AlignmentLine_9o8d2s_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  Companion.prototype.Relative_767dzl_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  Companion.prototype.vertical_qzmr60_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  Companion.prototype.horizontal_d2uuko_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  CenterCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  CenterCrossAxisAlignment.$metadata$ = {
    simpleName: 'CenterCrossAxisAlignment',
    kind: 'object',
    interfaces: []
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  StartCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  StartCrossAxisAlignment.$metadata$ = {
    simpleName: 'StartCrossAxisAlignment',
    kind: 'object',
    interfaces: []
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  EndCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  EndCrossAxisAlignment.$metadata$ = {
    simpleName: 'EndCrossAxisAlignment',
    kind: 'object',
    interfaces: []
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  AlignmentLineCrossAxisAlignment.prototype._get_alignmentLineProvider__87244617_1fxydl_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  AlignmentLineCrossAxisAlignment.prototype._get_isRelative__3579441461_bu079n_k$ = function () {
    return true;
  };
  AlignmentLineCrossAxisAlignment.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
  };
  AlignmentLineCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === Companion_getInstance_2()._get_Unspecified__2946689370_maq9wm_k$())) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  AlignmentLineCrossAxisAlignment.$metadata$ = {
    simpleName: 'AlignmentLineCrossAxisAlignment',
    kind: 'class',
    interfaces: []
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  VerticalCrossAxisAlignment.prototype._get_vertical__102991637_1pbgut_k$ = function () {
    return this.vertical_1;
  };
  VerticalCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_1fj06d_k$(0, size);
  };
  VerticalCrossAxisAlignment.$metadata$ = {
    simpleName: 'VerticalCrossAxisAlignment',
    kind: 'class',
    interfaces: []
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  HorizontalCrossAxisAlignment.prototype._get_horizontal__2475509991_u39a8p_k$ = function () {
    return this.horizontal_1;
  };
  HorizontalCrossAxisAlignment.prototype.align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_a5f08y_k$(0, size, layoutDirection);
  };
  HorizontalCrossAxisAlignment.$metadata$ = {
    simpleName: 'HorizontalCrossAxisAlignment',
    kind: 'class',
    interfaces: []
  };
  function CrossAxisAlignment() {
    Companion_getInstance_4();
  }
  CrossAxisAlignment.prototype._get_isRelative__3579441461_bu079n_k$ = function () {
    return false;
  };
  CrossAxisAlignment.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return null;
  };
  CrossAxisAlignment.$metadata$ = {
    simpleName: 'CrossAxisAlignment',
    kind: 'class',
    interfaces: []
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  function values_0() {
    return [SizeMode_Wrap_getInstance(), SizeMode_Expand_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Wrap':
        return SizeMode_Wrap_getInstance();
      case 'Expand':
        return SizeMode_Expand_getInstance();
      default:
        SizeMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SizeMode.$metadata$ = {
    simpleName: 'SizeMode',
    kind: 'class',
    interfaces: []
  };
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangementSpacing, crossAxisSize, arrangement, crossAxisAlignment);
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
    this.$stable_1 = 0;
  }
  Block.prototype._get_lineProviderBlock__3701176009_9tj0af_k$ = function () {
    return this.lineProviderBlock_1;
  };
  Block.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  Block.prototype.component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  Block.prototype.copy_o786p1_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  Block.prototype.copy$default_ftxiy1_k$ = function (lineProviderBlock, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      lineProviderBlock = this.lineProviderBlock_1;
    return this.copy_o786p1_k$(lineProviderBlock);
  };
  Block.prototype.toString = function () {
    return 'Block(lineProviderBlock=' + this.lineProviderBlock_1 + ')';
  };
  Block.prototype.hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  Block.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  Block.$metadata$ = {
    simpleName: 'Block',
    kind: 'class',
    interfaces: []
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
    this.$stable_1 = 0;
  }
  Value.prototype._get_alignmentLine__4249428794_r41qe_k$ = function () {
    return this.alignmentLine_1;
  };
  Value.prototype.calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return placeable.get_4x1crv_k$(this.alignmentLine_1);
  };
  Value.prototype.component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  Value.prototype.copy_d594q2_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  Value.prototype.copy$default_ff1g3o_k$ = function (alignmentLine, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      alignmentLine = this.alignmentLine_1;
    return this.copy_d594q2_k$(alignmentLine);
  };
  Value.prototype.toString = function () {
    return 'Value(alignmentLine=' + this.alignmentLine_1 + ')';
  };
  Value.prototype.hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  Value.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  Value.$metadata$ = {
    simpleName: 'Value',
    kind: 'class',
    interfaces: []
  };
  function AlignmentLineProvider() {
  }
  AlignmentLineProvider.$metadata$ = {
    simpleName: 'AlignmentLineProvider',
    kind: 'class',
    interfaces: []
  };
  function OrientationIndependentConstraints_init_$Init$(c, orientation, $this) {
    OrientationIndependentConstraints.call($this, orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__3236361538(c) : _Constraints___get_minHeight__impl__3396171247(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__51833172(c) : _Constraints___get_maxHeight__impl__3460039709(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__3396171247(c) : _Constraints___get_minWidth__impl__3236361538(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__3460039709(c) : _Constraints___get_maxWidth__impl__51833172(c));
    return $this;
  }
  function OrientationIndependentConstraints_init_$Create$(c, orientation) {
    return OrientationIndependentConstraints_init_$Init$(c, orientation, Object.create(OrientationIndependentConstraints.prototype));
  }
  function OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    this.mainAxisMin_1 = mainAxisMin;
    this.mainAxisMax_1 = mainAxisMax;
    this.crossAxisMin_1 = crossAxisMin;
    this.crossAxisMax_1 = crossAxisMax;
  }
  OrientationIndependentConstraints.prototype._get_mainAxisMin__3777569177_8k1mxz_k$ = function () {
    return this.mainAxisMin_1;
  };
  OrientationIndependentConstraints.prototype._get_mainAxisMax__3777561799_8k1smx_k$ = function () {
    return this.mainAxisMax_1;
  };
  OrientationIndependentConstraints.prototype._get_crossAxisMin__1726543066_sjxt5m_k$ = function () {
    return this.crossAxisMin_1;
  };
  OrientationIndependentConstraints.prototype._get_crossAxisMax__1726535688_sjxngo_k$ = function () {
    return this.crossAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.stretchCrossAxis_c8o32c_k$ = function () {
    return new OrientationIndependentConstraints(this.mainAxisMin_1, this.mainAxisMax_1, !(this.crossAxisMax_1 === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? this.crossAxisMax_1 : this.crossAxisMin_1, this.crossAxisMax_1);
  };
  OrientationIndependentConstraints.prototype.toBoxConstraints_ru6otq_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = Constraints(this.mainAxisMin_1, this.mainAxisMax_1, this.crossAxisMin_1, this.crossAxisMax_1);
    } else {
      tmp = Constraints(this.crossAxisMin_1, this.crossAxisMax_1, this.mainAxisMin_1, this.mainAxisMax_1);
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.maxWidth_g16g1l_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.mainAxisMax_1;
    } else {
      tmp = this.crossAxisMax_1;
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.maxHeight_1ee5ps_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.crossAxisMax_1;
    } else {
      tmp = this.mainAxisMax_1;
    }
    return tmp;
  };
  OrientationIndependentConstraints.prototype.component1_7eebsc_k$ = function () {
    return this.mainAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.component2_7eebsb_k$ = function () {
    return this.mainAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.component3_7eebsa_k$ = function () {
    return this.crossAxisMin_1;
  };
  OrientationIndependentConstraints.prototype.component4_7eebs9_k$ = function () {
    return this.crossAxisMax_1;
  };
  OrientationIndependentConstraints.prototype.copy_2hj87f_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return new OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.copy$default_ccxy8g_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mainAxisMin = this.mainAxisMin_1;
    if (!(($mask0 & 2) === 0))
      mainAxisMax = this.mainAxisMax_1;
    if (!(($mask0 & 4) === 0))
      crossAxisMin = this.crossAxisMin_1;
    if (!(($mask0 & 8) === 0))
      crossAxisMax = this.crossAxisMax_1;
    return this.copy_2hj87f_k$(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  OrientationIndependentConstraints.prototype.toString = function () {
    return 'OrientationIndependentConstraints(mainAxisMin=' + this.mainAxisMin_1 + ', mainAxisMax=' + this.mainAxisMax_1 + ', crossAxisMin=' + this.crossAxisMin_1 + ', crossAxisMax=' + this.crossAxisMax_1 + ')';
  };
  OrientationIndependentConstraints.prototype.hashCode = function () {
    var result = this.mainAxisMin_1;
    result = imul(result, 31) + this.mainAxisMax_1 | 0;
    result = imul(result, 31) + this.crossAxisMin_1 | 0;
    result = imul(result, 31) + this.crossAxisMax_1 | 0;
    return result;
  };
  OrientationIndependentConstraints.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other : THROW_CCE();
    if (!(this.mainAxisMin_1 === tmp0_other_with_cast.mainAxisMin_1))
      return false;
    if (!(this.mainAxisMax_1 === tmp0_other_with_cast.mainAxisMax_1))
      return false;
    if (!(this.crossAxisMin_1 === tmp0_other_with_cast.crossAxisMin_1))
      return false;
    if (!(this.crossAxisMax_1 === tmp0_other_with_cast.crossAxisMax_1))
      return false;
    return true;
  };
  OrientationIndependentConstraints.$metadata$ = {
    simpleName: 'OrientationIndependentConstraints',
    kind: 'class',
    interfaces: []
  };
  function RowColumnParentData_init_$Init$(weight, fill, crossAxisAlignment, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      weight = 0.0;
    if (!(($mask0 & 2) === 0))
      fill = true;
    if (!(($mask0 & 4) === 0))
      crossAxisAlignment = null;
    RowColumnParentData.call($this, weight, fill, crossAxisAlignment);
    return $this;
  }
  function RowColumnParentData_init_$Create$(weight, fill, crossAxisAlignment, $mask0, $marker) {
    return RowColumnParentData_init_$Init$(weight, fill, crossAxisAlignment, $mask0, $marker, Object.create(RowColumnParentData.prototype));
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  RowColumnParentData.prototype._set_weight__3427200159_3mzf4u_k$ = function (_set____804775014) {
    this.weight_1 = _set____804775014;
  };
  RowColumnParentData.prototype._get_weight__3515779987_cvworx_k$ = function () {
    return this.weight_1;
  };
  RowColumnParentData.prototype._set_fill__582401332_5nv0sr_k$ = function (_set____804775014) {
    this.fill_1 = _set____804775014;
  };
  RowColumnParentData.prototype._get_fill__797018408_d6ivc8_k$ = function () {
    return this.fill_1;
  };
  RowColumnParentData.prototype._set_crossAxisAlignment__209575925_ud2w0k_k$ = function (_set____804775014) {
    this.crossAxisAlignment_1 = _set____804775014;
  };
  RowColumnParentData.prototype._get_crossAxisAlignment__2452271337_uh3dav_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  RowColumnParentData.prototype.component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  RowColumnParentData.prototype.component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  RowColumnParentData.prototype.component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  RowColumnParentData.prototype.copy_he66y9_k$ = function (weight, fill, crossAxisAlignment) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment);
  };
  RowColumnParentData.prototype.copy$default_pj7wge_k$ = function (weight, fill, crossAxisAlignment, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      weight = this.weight_1;
    if (!(($mask0 & 2) === 0))
      fill = this.fill_1;
    if (!(($mask0 & 4) === 0))
      crossAxisAlignment = this.crossAxisAlignment_1;
    return this.copy_he66y9_k$(weight, fill, crossAxisAlignment);
  };
  RowColumnParentData.prototype.toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  RowColumnParentData.prototype.hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + (this.fill_1 | 0) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    return result;
  };
  RowColumnParentData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  RowColumnParentData.$metadata$ = {
    simpleName: 'RowColumnParentData',
    kind: 'class',
    interfaces: []
  };
  function _get_data__794940385(_this__1828080292) {
    var tmp = _this__1828080292._get_parentData__3398383511_etswh5_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function _get_weight__3515779987(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function _get_isRelative__3579441461(_this__1828080292) {
    var tmp0_safe_receiver = _get_crossAxisAlignment__2452271337(_this__1828080292);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isRelative__3579441461_bu079n_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function _get_fill__797018408(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function _get_crossAxisAlignment__2452271337(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.crossAxisAlignment_1;
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda() {
    return function (measurables, availableHeight, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0(), availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda() {
    return function (measurables, availableHeight, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0(), availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda() {
    return function (measurables, availableWidth, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0(), availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda() {
    return function (measurables, availableWidth, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0(), availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda() {
    return function (measurables, availableHeight, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0(), availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda() {
    return function (measurables, availableHeight, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0(), availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda() {
    return function (measurables, availableWidth, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0(), availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda() {
    return function ($this$intrinsicSize, w) {
      return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0() {
    return function ($this$intrinsicSize, h) {
      return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
    };
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda() {
    return function (measurables, availableWidth, mainAxisSpacing) {
      var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda();
      return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0(), availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
    };
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.HorizontalMinWidth_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda();
    var tmp_0 = this;
    tmp_0.VerticalMinWidth_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda();
    var tmp_1 = this;
    tmp_1.HorizontalMinHeight_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda();
    var tmp_2 = this;
    tmp_2.VerticalMinHeight_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda();
    var tmp_3 = this;
    tmp_3.HorizontalMaxWidth_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda();
    var tmp_4 = this;
    tmp_4.VerticalMaxWidth_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda();
    var tmp_5 = this;
    tmp_5.HorizontalMaxHeight_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda();
    var tmp_6 = this;
    tmp_6.VerticalMaxHeight_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda();
  }
  IntrinsicMeasureBlocks.prototype._get_HorizontalMinWidth__2867924883_nlmgz1_k$ = function () {
    return this.HorizontalMinWidth_1;
  };
  IntrinsicMeasureBlocks.prototype._get_VerticalMinWidth__4274370497_c9glb_k$ = function () {
    return this.VerticalMinWidth_1;
  };
  IntrinsicMeasureBlocks.prototype._get_HorizontalMinHeight__2468387580_u7hxxg_k$ = function () {
    return this.HorizontalMinHeight_1;
  };
  IntrinsicMeasureBlocks.prototype._get_VerticalMinHeight__3118528654_jgf5v6_k$ = function () {
    return this.VerticalMinHeight_1;
  };
  IntrinsicMeasureBlocks.prototype._get_HorizontalMaxWidth__2095446309_ynkopx_k$ = function () {
    return this.HorizontalMaxWidth_1;
  };
  IntrinsicMeasureBlocks.prototype._get_VerticalMaxWidth__3501891923_d46cvh_k$ = function () {
    return this.VerticalMaxWidth_1;
  };
  IntrinsicMeasureBlocks.prototype._get_HorizontalMaxHeight__4291355562_25ety_k$ = function () {
    return this.HorizontalMaxHeight_1;
  };
  IntrinsicMeasureBlocks.prototype._get_VerticalMaxHeight__646529340_aoxd8c_k$ = function () {
    return this.VerticalMaxHeight_1;
  };
  IntrinsicMeasureBlocks.$metadata$ = {
    simpleName: 'IntrinsicMeasureBlocks',
    kind: 'object',
    interfaces: []
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    {
      {
      }
      var inductionVariable = 0;
      var last = children._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = children.get_fkrdnv_k$(index_2);
          {
            var weight_5 = _get_weight__3515779987(_get_data__794940385(item_3));
            var size_6 = mainAxisSize(item_3, crossAxisAvailable);
            if (weight_5 === 0.0) {
              fixedSpace = fixedSpace + size_6 | 0;
            } else if (weight_5 > 0.0) {
              totalWeight = totalWeight + weight_5;
              var tmp$ret$1;
              $l$block_0: {
                var tmp1_max_0_7 = weightUnitSpace;
                var tmp$ret$0;
                $l$block: {
                  var tmp0_roundToInt_0_9 = size_6 / weight_5;
                  tmp$ret$0 = roundToInt(tmp0_roundToInt_0_9);
                  break $l$block;
                }
                var tmp2_max_0_8 = tmp$ret$0;
                tmp$ret$1 = Math.max(tmp1_max_0_7, tmp2_max_0_8);
                break $l$block_0;
              }
              weightUnitSpace = tmp$ret$1;
            }
          }
        }
         while (inductionVariable <= last);
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_roundToInt_0 = weightUnitSpace * totalWeight;
      tmp$ret$2 = roundToInt(tmp0_roundToInt_0);
      break $l$block_1;
    }
    return (tmp$ret$2 + fixedSpace | 0) + imul(children._get_size__809037418_ddoh9m_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_min_0 = imul(children._get_size__809037418_ddoh9m_k$() - 1 | 0, mainAxisSpacing);
      tmp$ret$0 = Math.min(tmp0_min_0, mainAxisAvailable);
      break $l$block;
    }
    var fixedSpace = tmp$ret$0;
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    {
      {
      }
      var inductionVariable = 0;
      var last = children._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = children.get_fkrdnv_k$(index_2);
          {
            var weight_5 = _get_weight__3515779987(_get_data__794940385(item_3));
            if (weight_5 === 0.0) {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_min_0_7 = mainAxisSize(item_3, Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$());
                var tmp1_min_0_8 = mainAxisAvailable - fixedSpace | 0;
                tmp$ret$1 = Math.min(tmp0_min_0_7, tmp1_min_0_8);
                break $l$block_0;
              }
              var mainAxisSpace_6 = tmp$ret$1;
              fixedSpace = fixedSpace + mainAxisSpace_6 | 0;
              var tmp$ret$2;
              $l$block_1: {
                var tmp2_max_0_9 = crossAxisMax;
                var tmp3_max_0_10 = crossAxisSize(item_3, mainAxisSpace_6);
                tmp$ret$2 = Math.max(tmp2_max_0_9, tmp3_max_0_10);
                break $l$block_1;
              }
              crossAxisMax = tmp$ret$2;
            } else if (weight_5 > 0.0) {
              totalWeight = totalWeight + weight_5;
            }
          }
        }
         while (inductionVariable <= last);
    }
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) {
      tmp = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    } else {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_max_0 = mainAxisAvailable - fixedSpace | 0;
          tmp$ret$3 = Math.max(tmp1_max_0, 0);
          break $l$block_2;
        }
        var tmp2_roundToInt_0 = tmp$ret$3 / totalWeight;
        tmp$ret$4 = roundToInt(tmp2_roundToInt_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    }
    var weightUnitSpace = tmp;
    {
      {
      }
      var inductionVariable_0 = 0;
      var last_0 = children._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_2_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_3_0 = children.get_fkrdnv_k$(index_2_0);
          {
            var weight_5_0 = _get_weight__3515779987(_get_data__794940385(item_3_0));
            if (weight_5_0 > 0.0) {
              var tmp$ret$6;
              $l$block_5: {
                var tmp1_max_0_6 = crossAxisMax;
                var tmp_0;
                if (!(weightUnitSpace === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$())) {
                  var tmp$ret$5;
                  $l$block_4: {
                    var tmp0_roundToInt_0_8 = weightUnitSpace * weight_5_0;
                    tmp$ret$5 = roundToInt(tmp0_roundToInt_0_8);
                    break $l$block_4;
                  }
                  tmp_0 = tmp$ret$5;
                } else {
                  tmp_0 = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
                }
                var tmp2_max_0_7 = crossAxisSize(item_3_0, tmp_0);
                tmp$ret$6 = Math.max(tmp1_max_0_6, tmp2_max_0_7);
                break $l$block_5;
              }
              crossAxisMax = tmp$ret$6;
            }
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return crossAxisMax;
  }
  function rowColumnMeasurePolicy$mainAxisSize(_this__1828080292, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__1828080292._get_width__3719200459_9isoj9_k$() : _this__1828080292._get_height__3088126660_jyis70_k$();
  }
  function rowColumnMeasurePolicy$crossAxisSize(_this__1828080292, $orientation) {
    return $orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__1828080292._get_height__3088126660_jyis70_k$() : _this__1828080292._get_width__3719200459_9isoj9_k$();
  }
  function rowColumnMeasurePolicy$o$measure$lambda($measurables, $placeables, $arrangement, $mainAxisLayoutSize, $this_measure, $mainAxisPositions, $rowColumnParentData, $crossAxisAlignment, $crossAxisLayoutSize, $orientation, $beforeCrossAxisAlignmentLine) {
    return function ($this$layout) {
      var tmp = 0;
      var tmp_0 = $measurables._get_size__809037418_ddoh9m_k$();
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = rowColumnMeasurePolicy$mainAxisSize(ensureNotNull($placeables[tmp_2]), $orientation);
          break $l$block;
        }
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var childrenMainAxisSize = tmp_1;
      Unit_getInstance();
      $arrangement($mainAxisLayoutSize, childrenMainAxisSize, $this_measure._get_layoutDirection__1820011324_u3l5q4_k$(), $this_measure, $mainAxisPositions);
      var index_1 = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item_3 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1_4 = index_1;
          index_1 = tmp1_4 + 1 | 0;
          var tmp0__anonymous__5_2495602525 = tmp1_4;
          ensureNotNull(item_3);
          Unit_getInstance();
          var parentData_6 = $rowColumnParentData[tmp0__anonymous__5_2495602525];
          var tmp0_elvis_lhs_8 = _get_crossAxisAlignment__2452271337(parentData_6);
          var childCrossAlignment_7 = tmp0_elvis_lhs_8 == null ? $crossAxisAlignment : tmp0_elvis_lhs_8;
          var tmp_3 = $crossAxisLayoutSize - rowColumnMeasurePolicy$crossAxisSize(item_3, $orientation) | 0;
          var tmp_4;
          if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
            tmp_4 = LayoutDirection_Ltr_getInstance();
          } else {
            tmp_4 = $this_measure._get_layoutDirection__1820011324_u3l5q4_k$();
          }
          var crossAxis_9 = childCrossAlignment_7.align_gldapf_k$(tmp_3, tmp_4, item_3, $beforeCrossAxisAlignmentLine._v);
          if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
            var tmp_5 = $mainAxisPositions[tmp0__anonymous__5_2495602525];
            $this$layout.place$default_lnyts6_k$(item_3, tmp_5, crossAxis_9, 0.0, 4, null);
          } else {
            var tmp_6 = $mainAxisPositions[tmp0__anonymous__5_2495602525];
            $this$layout.place$default_lnyts6_k$(item_3, crossAxis_9, tmp_6, 0.0, 4, null);
          }
        }
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangementSpacing, $crossAxisSize, $arrangement, $crossAxisAlignment) {
    this.$orientation_1 = $orientation;
    this.$arrangementSpacing_1 = $arrangementSpacing;
    this.$crossAxisSize_1 = $crossAxisSize;
    this.$arrangement_1 = $arrangement;
    this.$crossAxisAlignment_1 = $crossAxisAlignment;
  }
  rowColumnMeasurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__1828080292, measurables, constraints) {
    var constraints_0 = OrientationIndependentConstraints_init_$Create$(constraints, this.$orientation_1);
    var arrangementSpacingPx = _this__1828080292.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = measurables._get_size__809037418_ddoh9m_k$();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var placeables = tmp$ret$0;
    var tmp = 0;
    var tmp_0 = measurables._get_size__809037418_ddoh9m_k$();
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = fillArrayVal(Array(tmp_0), null);
      break $l$block_0;
    }
    var tmp_1 = tmp$ret$1;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = _get_data__794940385(measurables.get_fkrdnv_k$(tmp_2));
        break $l$block_1;
      }
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    var rowColumnParentData = tmp_1;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = 0;
    var last = measurables._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.get_fkrdnv_k$(i);
        var parentData = rowColumnParentData[i];
        var weight = _get_weight__3515779987(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
          Unit_getInstance();
        } else {
          var mainAxisMax = constraints_0.mainAxisMax_1;
          var tmp_3;
          if (mainAxisMax === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) {
            tmp_3 = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
          } else {
            tmp_3 = mainAxisMax - fixedSpace | 0;
          }
          var tmp_4 = tmp_3;
          var placeable = child.measure_ikak0q_k$(constraints_0.copy$default_ccxy8g_k$(0, tmp_4, 0, 0, 8, null).toBoxConstraints_ru6otq_k$(this.$orientation_1));
          var tmp$ret$3;
          $l$block_2: {
            var tmp1_min_0 = (mainAxisMax - fixedSpace | 0) - rowColumnMeasurePolicy$mainAxisSize(placeable, this.$orientation_1) | 0;
            tmp$ret$3 = Math.min(arrangementSpacingPx, tmp1_min_0);
            break $l$block_2;
          }
          spaceAfterLastNoWeight = tmp$ret$3;
          fixedSpace = fixedSpace + (rowColumnMeasurePolicy$mainAxisSize(placeable, this.$orientation_1) + spaceAfterLastNoWeight | 0) | 0;
          var tmp$ret$4;
          $l$block_3: {
            var tmp2_max_0 = crossAxisSpace;
            var tmp3_max_0 = rowColumnMeasurePolicy$crossAxisSize(placeable, this.$orientation_1);
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            break $l$block_3;
          }
          crossAxisSpace = tmp$ret$4;
          anyAlignBy = anyAlignBy ? true : _get_isRelative__3579441461(parentData);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable <= last);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (totalWeight > 0.0 ? !(constraints_0.mainAxisMax_1 === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) : false) {
        tmp_5 = constraints_0.mainAxisMax_1;
      } else {
        tmp_5 = constraints_0.mainAxisMin_1;
      }
      var targetSpace = tmp_5;
      var remainingToTarget = (targetSpace - fixedSpace | 0) - imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0;
      var weightUnitSpace = totalWeight > 0 ? remainingToTarget / totalWeight : 0.0;
      var tmp$ret$7;
      $l$block_6: {
        var sum_1 = 0;
        var indexedObject = rowColumnParentData;
        var inductionVariable_0 = 0;
        var last_0 = indexedObject.length;
        while (inductionVariable_0 < last_0) {
          var element_3 = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_6 = sum_1;
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp0_roundToInt_0_5 = weightUnitSpace * _get_weight__3515779987(element_3);
              tmp$ret$5 = roundToInt(tmp0_roundToInt_0_5);
              break $l$block_4;
            }
            tmp$ret$6 = tmp$ret$5;
            break $l$block_5;
          }
          sum_1 = tmp_6 + tmp$ret$6 | 0;
        }
        tmp$ret$7 = sum_1;
        break $l$block_6;
      }
      var remainder = remainingToTarget - tmp$ret$7 | 0;
      var inductionVariable_1 = 0;
      var last_1 = measurables._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_0] == null) {
            var child_0 = measurables.get_fkrdnv_k$(i_0);
            var parentData_0 = rowColumnParentData[i_0];
            var weight_0 = _get_weight__3515779987(parentData_0);
            {
              var tmp4_check_0 = weight_0 > 0;
              {
              }
              if (!tmp4_check_0) {
                var tmp$ret$8;
                $l$block_7: {
                  tmp$ret$8 = 'All weights <= 0 should have placeables';
                  break $l$block_7;
                }
                var message_1 = tmp$ret$8;
                throw IllegalStateException_init_$Create$(toString(message_1));
              }
            }
            var remainderUnit = _get_sign__809019438(remainder);
            remainder = remainder - remainderUnit | 0;
            var tmp$ret$10;
            $l$block_9: {
              var tmp$ret$9;
              $l$block_8: {
                var tmp5_roundToInt_0 = weightUnitSpace * weight_0;
                tmp$ret$9 = roundToInt(tmp5_roundToInt_0);
                break $l$block_8;
              }
              var tmp6_max_0 = tmp$ret$9 + remainderUnit | 0;
              tmp$ret$10 = Math.max(0, tmp6_max_0);
              break $l$block_9;
            }
            var childMainAxisSize = tmp$ret$10;
            var tmp_7;
            if (_get_fill__797018408(parentData_0) ? !(childMainAxisSize === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) : false) {
              tmp_7 = childMainAxisSize;
            } else {
              tmp_7 = 0;
            }
            var placeable_0 = child_0.measure_ikak0q_k$((new OrientationIndependentConstraints(tmp_7, childMainAxisSize, 0, constraints_0.crossAxisMax_1)).toBoxConstraints_ru6otq_k$(this.$orientation_1));
            weightedSpace = weightedSpace + rowColumnMeasurePolicy$mainAxisSize(placeable_0, this.$orientation_1) | 0;
            var tmp$ret$11;
            $l$block_10: {
              var tmp7_max_0 = crossAxisSpace;
              var tmp8_max_0 = rowColumnMeasurePolicy$crossAxisSize(placeable_0, this.$orientation_1);
              tmp$ret$11 = Math.max(tmp7_max_0, tmp8_max_0);
              break $l$block_10;
            }
            crossAxisSpace = tmp$ret$11;
            anyAlignBy = anyAlignBy ? true : _get_isRelative__3579441461(parentData_0);
            placeables[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 <= last_1);
      weightedSpace = coerceAtMost(weightedSpace + imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0, constraints_0.mainAxisMax_1 - fixedSpace | 0);
    }
    var beforeCrossAxisAlignmentLine = {_v: 0};
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = 0;
      var last_2 = placeables.length - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(placeables[i_1]);
          var parentData_1 = rowColumnParentData[i_1];
          var tmp3_safe_receiver = _get_crossAxisAlignment__2452271337(parentData_1);
          var alignmentLinePosition = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.calculateAlignmentLinePosition_92xdb9_k$(placeable_1);
          if (!(alignmentLinePosition == null)) {
            var tmp$ret$14;
            $l$block_13: {
              var tmp9_max_0 = beforeCrossAxisAlignmentLine._v;
              var tmp$ret$13;
              $l$block_12: {
                {
                }
                var tmp$ret$12;
                $l$block_11: {
                  tmp$ret$12 = !(alignmentLinePosition === Companion_getInstance_2()._get_Unspecified__2946689370_maq9wm_k$()) ? alignmentLinePosition : 0;
                  break $l$block_11;
                }
                tmp$ret$13 = tmp$ret$12;
                break $l$block_12;
              }
              var tmp10_max_0 = tmp$ret$13;
              tmp$ret$14 = Math.max(tmp9_max_0, tmp10_max_0);
              break $l$block_13;
            }
            beforeCrossAxisAlignmentLine._v = tmp$ret$14;
            var tmp$ret$17;
            $l$block_16: {
              var tmp11_max_0 = afterCrossAxisAlignmentLine;
              var tmp_8 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.$orientation_1);
              var tmp$ret$16;
              $l$block_15: {
                {
                }
                var tmp$ret$15;
                $l$block_14: {
                  var tmp_9;
                  if (!(alignmentLinePosition === Companion_getInstance_2()._get_Unspecified__2946689370_maq9wm_k$())) {
                    tmp_9 = alignmentLinePosition;
                  } else {
                    tmp_9 = rowColumnMeasurePolicy$crossAxisSize(placeable_1, this.$orientation_1);
                  }
                  tmp$ret$15 = tmp_9;
                  break $l$block_14;
                }
                tmp$ret$16 = tmp$ret$15;
                break $l$block_15;
              }
              var tmp12_max_0 = tmp_8 - tmp$ret$16 | 0;
              tmp$ret$17 = Math.max(tmp11_max_0, tmp12_max_0);
              break $l$block_16;
            }
            afterCrossAxisAlignmentLine = tmp$ret$17;
          }
        }
         while (inductionVariable_2 <= last_2);
    }
    var tmp$ret$18;
    $l$block_17: {
      var tmp13_max_0 = fixedSpace + weightedSpace | 0;
      var tmp14_max_0 = constraints_0.mainAxisMin_1;
      tmp$ret$18 = Math.max(tmp13_max_0, tmp14_max_0);
      break $l$block_17;
    }
    var mainAxisLayoutSize = tmp$ret$18;
    var tmp_10;
    if (!(constraints_0.crossAxisMax_1 === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? this.$crossAxisSize_1.equals(SizeMode_Expand_getInstance()) : false) {
      tmp_10 = constraints_0.crossAxisMax_1;
    } else {
      var tmp$ret$20;
      $l$block_19: {
        var tmp17_max_0 = crossAxisSpace;
        var tmp$ret$19;
        $l$block_18: {
          var tmp15_max_0 = constraints_0.crossAxisMin_1;
          var tmp16_max_0 = beforeCrossAxisAlignmentLine._v + afterCrossAxisAlignmentLine | 0;
          tmp$ret$19 = Math.max(tmp15_max_0, tmp16_max_0);
          break $l$block_18;
        }
        var tmp18_max_0 = tmp$ret$19;
        tmp$ret$20 = Math.max(tmp17_max_0, tmp18_max_0);
        break $l$block_19;
      }
      tmp_10 = tmp$ret$20;
    }
    var crossAxisLayoutSize = tmp_10;
    var tmp_11;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_11 = mainAxisLayoutSize;
    } else {
      tmp_11 = crossAxisLayoutSize;
    }
    var layoutWidth = tmp_11;
    var tmp_12;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_12 = crossAxisLayoutSize;
    } else {
      tmp_12 = mainAxisLayoutSize;
    }
    var layoutHeight = tmp_12;
    var tmp_13 = 0;
    var tmp_14 = measurables._get_size__809037418_ddoh9m_k$();
    var tmp_15 = new Int32Array(tmp_14);
    while (tmp_13 < tmp_14) {
      var tmp_16 = tmp_13;
      var tmp$ret$21;
      $l$block_20: {
        tmp$ret$21 = 0;
        break $l$block_20;
      }
      tmp_15[tmp_16] = tmp$ret$21;
      tmp_13 = tmp_13 + 1 | 0;
    }
    var mainAxisPositions = tmp_15;
    return _this__1828080292.layout$default_yb6zmd_k$(layoutWidth, layoutHeight, null, rowColumnMeasurePolicy$o$measure$lambda(measurables, placeables, this.$arrangement_1, mainAxisLayoutSize, _this__1828080292, mainAxisPositions, rowColumnParentData, this.$crossAxisAlignment_1, crossAxisLayoutSize, this.$orientation_1, beforeCrossAxisAlignmentLine), 4, null);
  };
  rowColumnMeasurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = function (_this__1828080292, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__1828080292.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = function (_this__1828080292, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__1828080292.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = function (_this__1828080292, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__1828080292.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = function (_this__1828080292, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__1828080292.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  rowColumnMeasurePolicy$1.$metadata$ = {
    kind: 'class',
    interfaces: [MeasurePolicy]
  };
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function _get_FillWholeMaxWidth__168757595() {
    init_properties_Size_kt_3567011193();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function _get_FillWholeMaxHeight__398580276() {
    init_properties_Size_kt_3567011193();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function _get_FillWholeMaxSize__3881095642() {
    init_properties_Size_kt_3567011193();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function _get_WrapContentWidthCenter__873522431() {
    init_properties_Size_kt_3567011193();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function _get_WrapContentWidthStart__2716465894() {
    init_properties_Size_kt_3567011193();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function _get_WrapContentHeightCenter__2184230854() {
    init_properties_Size_kt_3567011193();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function _get_WrapContentHeightTop__959463788() {
    init_properties_Size_kt_3567011193();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function _get_WrapContentSizeCenter__1865132204() {
    init_properties_Size_kt_3567011193();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function _get_WrapContentSizeTopStart__1820610356() {
    init_properties_Size_kt_3567011193();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__3211647666($this) {
    return $this.direction_1;
  }
  function _get_fraction__1755151881($this) {
    return $this.fraction_1;
  }
  function FillModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function FillModifier(direction, fraction, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  FillModifier.prototype.measure_i9wrw7_k$ = function (_this__1828080292, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__3842542885(constraints) ? !this.direction_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_roundToInt_0 = _Constraints___get_maxWidth__impl__51833172(constraints) * this.fraction_1;
        tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
        break $l$block;
      }
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__3236361538(constraints), _Constraints___get_maxWidth__impl__51833172(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__3236361538(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__51833172(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__712956524(constraints) ? !this.direction_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_roundToInt_0 = _Constraints___get_maxHeight__impl__3460039709(constraints) * this.fraction_1;
        tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
        break $l$block_0;
      }
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__3396171247(constraints), _Constraints___get_maxHeight__impl__3460039709(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__3396171247(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__3460039709(constraints);
    }
    var placeable = measurable.measure_ikak0q_k$(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable._get_width__3719200459_9isoj9_k$();
    var tmp_0 = placeable._get_height__3088126660_jyis70_k$();
    return _this__1828080292.layout$default_yb6zmd_k$(tmp, tmp_0, null, FillModifier$measure$lambda(placeable), 4, null);
  };
  FillModifier.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FillModifier) {
      tmp_0 = this.direction_1.equals(other.direction_1);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this.fraction_1 === other.fraction_1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  FillModifier.prototype.hashCode = function () {
    return imul(this.direction_1.hashCode(), 31) + getNumberHashCode(this.fraction_1) | 0;
  };
  FillModifier.$metadata$ = {
    simpleName: 'FillModifier',
    kind: 'class',
    interfaces: [LayoutModifier]
  };
  function createFillWidthModifier(fraction) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Horizontal_getInstance();
    return new FillModifier(tmp, fraction, createFillWidthModifier$lambda(fraction));
  }
  function createFillHeightModifier(fraction) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Vertical_getInstance();
    return new FillModifier(tmp, fraction, createFillHeightModifier$lambda(fraction));
  }
  function createFillSizeModifier(fraction) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Both_getInstance();
    return new FillModifier(tmp, fraction, createFillSizeModifier$lambda(fraction));
  }
  function _get_direction__3211647666_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__2398113005($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__1343096073($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__3092266348($this) {
    return $this.align_1;
  }
  function WrapContentModifier$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable._get_width__3719200459_9isoj9_k$() | 0, $wrapperHeight - $placeable._get_height__3088126660_jyis70_k$() | 0)), $this_measure._get_layoutDirection__1820011324_u3l5q4_k$()).packedValue_1;
      Unit_getInstance();
      $this$layout.place$default_i08ls_k$($placeable, position, 0.0, 2, null);
      return Unit_getInstance();
    };
  }
  function WrapContentModifier(direction, unbounded, alignmentCallback, align, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
  }
  WrapContentModifier.prototype.measure_i9wrw7_k$ = function (_this__1828080292, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__3236361538(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__3396171247(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) ? this.unbounded_1 : false) {
      tmp = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    } else {
      tmp = _Constraints___get_maxWidth__impl__51833172(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) ? this.unbounded_1 : false) {
      tmp_0 = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__3460039709(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable._get_width__3719200459_9isoj9_k$(), _Constraints___get_minWidth__impl__3236361538(constraints), _Constraints___get_maxWidth__impl__51833172(constraints));
    var wrapperHeight = coerceIn(placeable._get_height__3088126660_jyis70_k$(), _Constraints___get_minHeight__impl__3396171247(constraints), _Constraints___get_maxHeight__impl__3460039709(constraints));
    return _this__1828080292.layout$default_yb6zmd_k$(wrapperWidth, wrapperHeight, null, WrapContentModifier$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__1828080292), 4, null);
  };
  WrapContentModifier.prototype.equals = function (other) {
    if (!(other instanceof WrapContentModifier))
      return false;
    else {
    }
    return (this.direction_1.equals(other.direction_1) ? this.unbounded_1 === other.unbounded_1 : false) ? equals(this.align_1, other.align_1) : false;
  };
  WrapContentModifier.prototype.hashCode = function () {
    return imul(imul(this.direction_1.hashCode(), 31) + (this.unbounded_1 | 0) | 0, 31) + hashCode(this.align_1) | 0;
  };
  WrapContentModifier.$metadata$ = {
    simpleName: 'WrapContentModifier',
    kind: 'class',
    interfaces: [LayoutModifier]
  };
  function createWrapContentWidthModifier(align, unbounded) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Horizontal_getInstance();
    var tmp_0 = createWrapContentWidthModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentWidthModifier$lambda_0(align, unbounded));
  }
  function createWrapContentHeightModifier(align, unbounded) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Vertical_getInstance();
    var tmp_0 = createWrapContentHeightModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentHeightModifier$lambda_0(align, unbounded));
  }
  function createWrapContentSizeModifier(align, unbounded) {
    init_properties_Size_kt_3567011193();
    var tmp = Direction_Both_getInstance();
    var tmp_0 = createWrapContentSizeModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentSizeModifier$lambda_0(align, unbounded));
  }
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_1() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Direction.$metadata$ = {
    simpleName: 'Direction',
    kind: 'class',
    interfaces: []
  };
  function width(_this__1828080292, width) {
    init_properties_Size_kt_3567011193();
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = width$lambda(width);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(SizeModifier_init_$Create$(width, null, width, null, true, tmp$ret$0, 10, null));
  }
  function fillMaxHeight(_this__1828080292, fraction) {
    init_properties_Size_kt_3567011193();
    return _this__1828080292.then_5qw5wu_k$(fraction === 1.0 ? _get_FillWholeMaxHeight__398580276() : createFillHeightModifier(fraction));
  }
  function fillMaxHeight$default(_this__1828080292, fraction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fraction = 1.0;
    return fillMaxHeight(_this__1828080292, fraction);
  }
  function size(_this__1828080292, size) {
    init_properties_Size_kt_3567011193();
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = size$lambda(size);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__1828080292.then_5qw5wu_k$(new SizeModifier(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__1828080292, min, max) {
    init_properties_Size_kt_3567011193();
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = heightIn$lambda(min, max);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(SizeModifier_init_$Create$(null, min, null, max, true, tmp$ret$0, 5, null));
  }
  function heightIn$default(_this__1828080292, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    return heightIn(_this__1828080292, min, max);
  }
  function widthIn(_this__1828080292, min, max) {
    init_properties_Size_kt_3567011193();
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = widthIn$lambda(min, max);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(SizeModifier_init_$Create$(min, null, max, null, true, tmp$ret$0, 10, null));
  }
  function widthIn$default(_this__1828080292, min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 2) === 0))
      max = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    return widthIn(_this__1828080292, min, max);
  }
  function defaultMinSize(_this__1828080292, minWidth, minHeight) {
    init_properties_Size_kt_3567011193();
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_get_isDebugInspectorInfoEnabled__1687471116()) {
        tmp = defaultMinSize$lambda(minWidth, minHeight);
      } else {
        tmp = _get_NoInspectorInfo__942577837();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return _this__1828080292.then_5qw5wu_k$(new UnspecifiedConstraintsModifier(minWidth, minHeight, tmp$ret$0));
  }
  function defaultMinSize$default(_this__1828080292, minWidth, minHeight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    return defaultMinSize(_this__1828080292, minWidth, minHeight);
  }
  function SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 4) === 0))
      maxWidth = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 8) === 0))
      maxHeight = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    SizeModifier.call($this, minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo);
    return $this;
  }
  function SizeModifier_init_$Create$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker) {
    return SizeModifier_init_$Init$(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo, $mask0, $marker, Object.create(SizeModifier.prototype));
  }
  function _get_minWidth__1781241783($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__3140949848($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__1008763209($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__668950534($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__328712937($this) {
    return $this.enforceIncoming_1;
  }
  function _get_targetConstraints__1973896204(_this__1828080292, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
      var tmp_0 = new Dp($this.maxWidth_1);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(0);
        break $l$block;
      }
      tmp = _this__1828080292.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_0, new Dp(tmp$ret$0)).value_1);
    } else {
      tmp = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    }
    var maxWidth = tmp;
    var tmp_1;
    if (!equals($this.maxHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
      var tmp_2 = new Dp($this.maxHeight_1);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _Dp___init__impl__1377471179(0);
        break $l$block_0;
      }
      tmp_1 = _this__1828080292.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_2, new Dp(tmp$ret$1)).value_1);
    } else {
      tmp_1 = Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$();
    }
    var maxHeight = tmp_1;
    var tmp_3;
    if (!equals($this.minWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_let_0 = coerceAtLeast_0(coerceAtMost(_this__1828080292.roundToPx_hl1u8z_k$($this.minWidth_1), maxWidth), 0);
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = !(tmp0_let_0 === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? tmp0_let_0 : 0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp_3 = tmp$ret$3;
    } else {
      tmp_3 = 0;
    }
    var minWidth = tmp_3;
    var tmp_4;
    if (!equals($this.minHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_let_0 = coerceAtLeast_0(coerceAtMost(_this__1828080292.roundToPx_hl1u8z_k$($this.minHeight_1), maxHeight), 0);
        {
        }
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = !(tmp1_let_0 === Companion_getInstance_0()._get_Infinity__264239747_4dbkoz_k$()) ? tmp1_let_0 : 0;
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      tmp_4 = tmp$ret$5;
    } else {
      tmp_4 = 0;
    }
    var minHeight = tmp_4;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function SizeModifier(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  SizeModifier.prototype.measure_i9wrw7_k$ = function (_this__1828080292, measurable, constraints) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = _get_targetConstraints__1973896204(_this__1828080292, this);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (this.enforceIncoming_1) {
          tmp = constrain(constraints, tmp0_let_0);
        } else {
          var tmp_0;
          if (!equals(this.minWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
            tmp_0 = _Constraints___get_minWidth__impl__3236361538(tmp0_let_0);
          } else {
            tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__3236361538(constraints), _Constraints___get_maxWidth__impl__51833172(tmp0_let_0));
          }
          var resolvedMinWidth_2 = tmp_0;
          var tmp_1;
          if (!equals(this.maxWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
            tmp_1 = _Constraints___get_maxWidth__impl__51833172(tmp0_let_0);
          } else {
            tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__51833172(constraints), _Constraints___get_minWidth__impl__3236361538(tmp0_let_0));
          }
          var resolvedMaxWidth_3 = tmp_1;
          var tmp_2;
          if (!equals(this.minHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
            tmp_2 = _Constraints___get_minHeight__impl__3396171247(tmp0_let_0);
          } else {
            tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__3396171247(constraints), _Constraints___get_maxHeight__impl__3460039709(tmp0_let_0));
          }
          var resolvedMinHeight_4 = tmp_2;
          var tmp_3;
          if (!equals(this.maxHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$())) {
            tmp_3 = _Constraints___get_maxHeight__impl__3460039709(tmp0_let_0);
          } else {
            tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__3460039709(constraints), _Constraints___get_minHeight__impl__3396171247(tmp0_let_0));
          }
          var resolvedMaxHeight_5 = tmp_3;
          tmp = Constraints(resolvedMinWidth_2, resolvedMaxWidth_3, resolvedMinHeight_4, resolvedMaxHeight_5);
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var wrappedConstraints = tmp$ret$1;
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_4 = placeable._get_width__3719200459_9isoj9_k$();
    var tmp_5 = placeable._get_height__3088126660_jyis70_k$();
    return _this__1828080292.layout$default_yb6zmd_k$(tmp_4, tmp_5, null, SizeModifier$measure$lambda(placeable), 4, null);
  };
  SizeModifier.prototype.minIntrinsicWidth_72od57_k$ = function (_this__1828080292, measurable, height) {
    var constraints = _get_targetConstraints__1973896204(_this__1828080292, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__283911996(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__51833172(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_3wv0r6_k$(height));
    }
    return tmp;
  };
  SizeModifier.prototype.minIntrinsicHeight_zr6pa_k$ = function (_this__1828080292, measurable, width) {
    var constraints = _get_targetConstraints__1973896204(_this__1828080292, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__2064548661(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__3460039709(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_7ydhpj_k$(width));
    }
    return tmp;
  };
  SizeModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = function (_this__1828080292, measurable, height) {
    var constraints = _get_targetConstraints__1973896204(_this__1828080292, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__283911996(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__51833172(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_g1vwkc_k$(height));
    }
    return tmp;
  };
  SizeModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = function (_this__1828080292, measurable, width) {
    var constraints = _get_targetConstraints__1973896204(_this__1828080292, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__2064548661(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__3460039709(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_cegb5z_k$(width));
    }
    return tmp;
  };
  SizeModifier.prototype.equals = function (other) {
    if (!(other instanceof SizeModifier))
      return false;
    else {
    }
    return (((equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false) ? equals(this.maxWidth_1, other.maxWidth_1) : false) ? equals(this.maxHeight_1, other.maxHeight_1) : false) ? this.enforceIncoming_1 === other.enforceIncoming_1 : false;
  };
  SizeModifier.prototype.hashCode = function () {
    return imul(imul(imul(imul(Dp__hashCode_impl_1749449350(this.minWidth_1), 31) + Dp__hashCode_impl_1749449350(this.minHeight_1) | 0, 31) + Dp__hashCode_impl_1749449350(this.maxWidth_1) | 0, 31) + Dp__hashCode_impl_1749449350(this.maxHeight_1) | 0, 31);
  };
  SizeModifier.$metadata$ = {
    simpleName: 'SizeModifier',
    kind: 'class',
    interfaces: [LayoutModifier]
  };
  function UnspecifiedConstraintsModifier_init_$Init$(minWidth, minHeight, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      minWidth = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    if (!(($mask0 & 2) === 0))
      minHeight = Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$();
    UnspecifiedConstraintsModifier.call($this, minWidth, minHeight, inspectorInfo);
    return $this;
  }
  function UnspecifiedConstraintsModifier_init_$Create$(minWidth, minHeight, inspectorInfo, $mask0, $marker) {
    return UnspecifiedConstraintsModifier_init_$Init$(minWidth, minHeight, inspectorInfo, $mask0, $marker, Object.create(UnspecifiedConstraintsModifier.prototype));
  }
  function UnspecifiedConstraintsModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_lh46qu_k$($placeable, 0, 0, 0.0, 4, null);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsModifier(minWidth, minHeight, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  UnspecifiedConstraintsModifier.prototype._get_minWidth__1781241783_ogy5te_k$ = function () {
    return this.minWidth_1;
  };
  UnspecifiedConstraintsModifier.prototype._get_minHeight__3140949848_6lwy99_k$ = function () {
    return this.minHeight_1;
  };
  UnspecifiedConstraintsModifier.prototype.measure_i9wrw7_k$ = function (_this__1828080292, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _Constraints___get_minWidth__impl__3236361538(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__1828080292.roundToPx_hl1u8z_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__51833172(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__3236361538(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__51833172(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _Constraints___get_minHeight__impl__3396171247(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__1828080292.roundToPx_hl1u8z_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__3460039709(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__3396171247(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__3460039709(constraints));
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_3 = placeable._get_width__3719200459_9isoj9_k$();
    var tmp_4 = placeable._get_height__3088126660_jyis70_k$();
    return _this__1828080292.layout$default_yb6zmd_k$(tmp_3, tmp_4, null, UnspecifiedConstraintsModifier$measure$lambda(placeable), 4, null);
  };
  UnspecifiedConstraintsModifier.prototype.minIntrinsicWidth_72od57_k$ = function (_this__1828080292, measurable, height) {
    return coerceAtLeast_0(measurable.minIntrinsicWidth_3wv0r6_k$(height), !equals(this.minWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _this__1828080292.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = function (_this__1828080292, measurable, height) {
    return coerceAtLeast_0(measurable.maxIntrinsicWidth_g1vwkc_k$(height), !equals(this.minWidth_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _this__1828080292.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.minIntrinsicHeight_zr6pa_k$ = function (_this__1828080292, measurable, width) {
    return coerceAtLeast_0(measurable.minIntrinsicHeight_7ydhpj_k$(width), !equals(this.minHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _this__1828080292.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = function (_this__1828080292, measurable, width) {
    return coerceAtLeast_0(measurable.maxIntrinsicHeight_cegb5z_k$(width), !equals(this.minHeight_1, Companion_getInstance_1()._get_Unspecified__2946689370_rvxoyd_k$()) ? _this__1828080292.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  UnspecifiedConstraintsModifier.prototype.equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsModifier))
      return false;
    else {
    }
    return equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false;
  };
  UnspecifiedConstraintsModifier.prototype.hashCode = function () {
    return imul(Dp__hashCode_impl_1749449350(this.minWidth_1), 31) + Dp__hashCode_impl_1749449350(this.minHeight_1) | 0;
  };
  UnspecifiedConstraintsModifier.$metadata$ = {
    simpleName: 'UnspecifiedConstraintsModifier',
    kind: 'class',
    interfaces: [LayoutModifier]
  };
  function createFillWidthModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('fillMaxWidth');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillHeightModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('fillMaxHeight');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillSizeModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('fillMaxSize');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createWrapContentWidthModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_a5f08y_k$(0, _IntSize___get_width__impl__3492176776(size.packedValue_1), layoutDirection), 0));
    };
  }
  function createWrapContentWidthModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('wrapContentWidth');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('align', $align);
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentHeightModifier$lambda($align) {
    return function (size, _anonymous_parameter_1__2695192083) {
      return new IntOffset_0(IntOffset(0, $align.align_1fj06d_k$(0, _IntSize___get_height__impl__2736509033(size.packedValue_1))));
    };
  }
  function createWrapContentHeightModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('wrapContentHeight');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('align', $align);
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentSizeModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_f85h4l_k$(Companion_getInstance_3()._get_Zero__785822851_4arau6_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function createWrapContentSizeModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver._set_name__589551916_atzcdf_k$('wrapContentSize');
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('align', $align);
      $this$$receiver._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('width');
      $this$null._set_value__1325260276_ap8xuk_k$(new Dp($width));
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('size');
      $this$null._set_value__1325260276_ap8xuk_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('heightIn');
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('min', new Dp($min));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('widthIn');
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('min', new Dp($min));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function defaultMinSize$lambda($minWidth, $minHeight) {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('defaultMinSize');
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('minWidth', new Dp($minWidth));
      $this$null._get_properties__3765791160_8r22x4_k$().set_y753qn_k$('minHeight', new Dp($minHeight));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_2286540445;
  function init_properties_Size_kt_3567011193() {
    if (!properties_initialized_Size_kt_2286540445) {
      properties_initialized_Size_kt_2286540445 = true;
      FillWholeMaxWidth = createFillWidthModifier(1.0);
      FillWholeMaxHeight = createFillHeightModifier(1.0);
      FillWholeMaxSize = createFillSizeModifier(1.0);
      WrapContentWidthCenter = createWrapContentWidthModifier(Companion_getInstance()._get_CenterHorizontally__3605481093_bei2yj_k$(), false);
      WrapContentWidthStart = createWrapContentWidthModifier(Companion_getInstance()._get_Start__2698618831_qefacx_k$(), false);
      WrapContentHeightCenter = createWrapContentHeightModifier(Companion_getInstance()._get_CenterVertically__811739123_dfadwz_k$(), false);
      WrapContentHeightTop = createWrapContentHeightModifier(Companion_getInstance()._get_Top__856463868_e5wzr0_k$(), false);
      WrapContentSizeCenter = createWrapContentSizeModifier(Companion_getInstance()._get_Center__320263478_5aocvq_k$(), false);
      WrapContentSizeTopStart = createWrapContentSizeModifier(Companion_getInstance()._get_TopStart__3260449086_h3xbcy_k$(), false);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WindowInsets() {
    Companion_getInstance_5();
  }
  WindowInsets.$metadata$ = {
    simpleName: 'WindowInsets',
    kind: 'interface',
    interfaces: []
  };
  function WindowInsets_0(left, top, right, bottom) {
    return new FixedIntInsets(left, top, right, bottom);
  }
  function WindowInsets$default(left, top, right, bottom, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0;
    if (!(($mask0 & 2) === 0))
      top = 0;
    if (!(($mask0 & 4) === 0))
      right = 0;
    if (!(($mask0 & 8) === 0))
      bottom = 0;
    return WindowInsets_0(left, top, right, bottom);
  }
  function _get_leftVal__3844485303($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__1145511679($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__4207731974($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__1304694811($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  FixedIntInsets.prototype.getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  FixedIntInsets.prototype.getTop_6mwa89_k$ = function (density) {
    return this.topVal_1;
  };
  FixedIntInsets.prototype.getRight_tjbxo3_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  FixedIntInsets.prototype.getBottom_smmq2d_k$ = function (density) {
    return this.bottomVal_1;
  };
  FixedIntInsets.prototype.toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  FixedIntInsets.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    } else {
    }
    return ((this.leftVal_1 === other.leftVal_1 ? this.topVal_1 === other.topVal_1 : false) ? this.rightVal_1 === other.rightVal_1 : false) ? this.bottomVal_1 === other.bottomVal_1 : false;
  };
  FixedIntInsets.prototype.hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  FixedIntInsets.$metadata$ = {
    simpleName: 'FixedIntInsets',
    kind: 'class',
    interfaces: [WindowInsets]
  };
  function _get_ModifierLocalConsumedWindowInsets__1974891951() {
    init_properties_WindowInsetsPadding_kt_352362153();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function ModifierLocalConsumedWindowInsets$lambda() {
    return function () {
      return WindowInsets_0(0, 0, 0, 0);
    };
  }
  var properties_initialized_WindowInsetsPadding_kt_1222779141;
  function init_properties_WindowInsetsPadding_kt_352362153() {
    if (!properties_initialized_WindowInsetsPadding_kt_1222779141) {
      properties_initialized_WindowInsetsPadding_kt_1222779141 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda());
    }
  }
  //region block: post-declaration
  Arrangement$Absolute$Left$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Absolute$Center$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Absolute$Right$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Absolute$SpaceBetween$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Absolute$SpaceEvenly$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Absolute$SpaceAround$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Start$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$End$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414;
  Arrangement$Top$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414_0;
  Arrangement$Bottom$1.prototype._get_spacing__4173594414_ckcwbb_k$ = _get_spacing__4173594414_0;
  BoxChildData.prototype.foldIn_4qioq6_k$ = foldIn;
  BoxChildData.prototype.foldOut_ld23lz_k$ = foldOut;
  BoxChildData.prototype.any_hrontp_k$ = any;
  BoxChildData.prototype.all_ctzlrs_k$ = all;
  BoxChildData.prototype.then_5qw5wu_k$ = then;
  EmptyBoxMeasurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  EmptyBoxMeasurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  EmptyBoxMeasurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  EmptyBoxMeasurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  boxMeasurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  boxMeasurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  boxMeasurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  boxMeasurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  PaddingModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  PaddingModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  PaddingModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  PaddingModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  PaddingModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  PaddingModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  PaddingModifier.prototype.any_hrontp_k$ = any;
  PaddingModifier.prototype.all_ctzlrs_k$ = all;
  PaddingModifier.prototype.then_5qw5wu_k$ = then;
  FillModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  FillModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  FillModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  FillModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  FillModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  FillModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  FillModifier.prototype.any_hrontp_k$ = any;
  FillModifier.prototype.all_ctzlrs_k$ = all;
  FillModifier.prototype.then_5qw5wu_k$ = then;
  WrapContentModifier.prototype.minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  WrapContentModifier.prototype.minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  WrapContentModifier.prototype.maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  WrapContentModifier.prototype.maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  WrapContentModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  WrapContentModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  WrapContentModifier.prototype.any_hrontp_k$ = any;
  WrapContentModifier.prototype.all_ctzlrs_k$ = all;
  WrapContentModifier.prototype.then_5qw5wu_k$ = then;
  SizeModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  SizeModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  SizeModifier.prototype.any_hrontp_k$ = any;
  SizeModifier.prototype.all_ctzlrs_k$ = all;
  SizeModifier.prototype.then_5qw5wu_k$ = then;
  UnspecifiedConstraintsModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  UnspecifiedConstraintsModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  UnspecifiedConstraintsModifier.prototype.any_hrontp_k$ = any;
  UnspecifiedConstraintsModifier.prototype.all_ctzlrs_k$ = all;
  UnspecifiedConstraintsModifier.prototype.then_5qw5wu_k$ = then;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.defaultMinSize = defaultMinSize;
  _.$crossModule$.padding = padding_0;
  _.$crossModule$.size = size;
  _.$crossModule$.width = width;
  _.$crossModule$.fillMaxHeight$default = fillMaxHeight$default;
  _.$crossModule$.heightIn$default = heightIn$default;
  _.$crossModule$.padding$default = padding$default;
  _.$crossModule$.widthIn$default = widthIn$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_foundation_foundation_layout.js.map