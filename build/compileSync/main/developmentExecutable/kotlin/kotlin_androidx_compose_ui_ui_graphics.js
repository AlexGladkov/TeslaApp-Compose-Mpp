(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui_geometry.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_org_jetbrains_skiko_skiko.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_org_jetbrains_skiko_skiko.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_graphics'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_ui_ui_graphics'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_graphics'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_ui_ui_graphics'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_graphics'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_ui_ui_graphics'.");
    }
    if (typeof kotlin_org_jetbrains_skiko_skiko === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_graphics'. Its dependency 'kotlin_org_jetbrains_skiko_skiko' was not found. Please, check whether 'kotlin_org_jetbrains_skiko_skiko' is loaded prior to 'kotlin_androidx_compose_ui_ui_graphics'.");
    }
    root.kotlin_androidx_compose_ui_ui_graphics = factory(typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined' ? {} : kotlin_androidx_compose_ui_ui_graphics, kotlin_kotlin, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_3;
  var _Offset___get_x__impl__2048295803 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_x__impl__2048295803;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite_1;
  var _Offset___get_y__impl__3791106138 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_y__impl__3791106138;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size;
  var _Size___get_width__impl__3977603903 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_width__impl__3977603903;
  var _Size___get_height__impl__604880786 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_height__impl__604880786;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var Offset__hashCode_impl_3247326111 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset__hashCode_impl_3247326111;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset_1;
  var _get_isFinite__49041522 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_isFinite__49041522;
  var _get_center__2950577494 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_center__2950577494;
  var _get_isUnspecified__892174020 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_isUnspecified__892174020;
  var _Size___get_minDimension__impl__4021532005 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_minDimension__impl__4021532005;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var _get_isSpecified__2832019115 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_isSpecified__2832019115;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_4;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset_1;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize_1;
  var ULong = kotlin_kotlin.$crossModule$.ULong;
  var _ULong___get_data__impl__934646663 = kotlin_kotlin.$crossModule$._ULong___get_data__impl__934646663;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var _ULong___init__impl__737756120 = kotlin_kotlin.$crossModule$._ULong___init__impl__737756120;
  var ulongToDouble = kotlin_kotlin.$crossModule$.ulongToDouble;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var ULong__hashCode_impl_3902167073 = kotlin_kotlin.$crossModule$.ULong__hashCode_impl_3902167073;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var fill$default = kotlin_kotlin.$crossModule$.fill$default_1;
  var arrayCopy = kotlin_kotlin.$crossModule$.arrayCopy;
  var _get_PI__1413096114 = kotlin_kotlin.$crossModule$._get_PI__1413096114;
  var toRawBits = kotlin_kotlin.$crossModule$.toRawBits;
  var toShort = kotlin_kotlin.$crossModule$.toShort;
  var toByte = kotlin_kotlin.$crossModule$.toByte;
  var numberToLong = kotlin_kotlin.$crossModule$.numberToLong;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$_1;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_1;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var Comparable = kotlin_kotlin.$crossModule$.Comparable;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect_1;
  var trimIndent = kotlin_kotlin.$crossModule$.trimIndent;
  var _get_boundingRect__2386314403 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_boundingRect__2386314403;
  var _CornerRadius___get_x__impl__69289799 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._CornerRadius___get_x__impl__69289799;
  var _CornerRadius___get_y__impl__1812100134 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._CornerRadius___get_y__impl__1812100134;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.toRect_1;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var withSign = kotlin_kotlin.$crossModule$.withSign;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_1;
  var coerceIn_0 = kotlin_kotlin.$crossModule$.coerceIn;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals_1;
  var contentHashCode = kotlin_kotlin.$crossModule$.contentHashCode_2;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var isNaN_0 = kotlin_kotlin.$crossModule$.isNaN_1;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.LayoutDirection_Ltr_getInstance;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size_1;
  var Size__hashCode_impl_149567089 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size__hashCode_impl_149567089;
  var toPx = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toPx;
  var toPx_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toPx_1;
  var roundToPx = kotlin_androidx_compose_ui_ui_unit.$crossModule$.roundToPx;
  var roundToPx_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.roundToPx_1;
  var toSp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toSp_1;
  var toSp_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toSp;
  var toSp_1 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toSp_2;
  var toDp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toDp_1;
  var toDp_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toDp_2;
  var toDp_1 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toDp;
  var toRect_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toRect;
  var toSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toSize;
  var toDpSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.toDpSize;
  var Density = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Density;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance;
  var CornerRadius = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.CornerRadius;
  var Density_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Density_1;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$;
  var NotImplementedError = kotlin_kotlin.$crossModule$.NotImplementedError;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SRC_OVER_getInstance;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_LUMINOSITY_getInstance;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_COLOR_getInstance;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SATURATION_getInstance;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_HUE_getInstance;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_MULTIPLY_getInstance;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_EXCLUSION_getInstance;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DIFFERENCE_getInstance;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SOFT_LIGHT_getInstance;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_HARD_LIGHT_getInstance;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_COLOR_BURN_getInstance;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_COLOR_DODGE_getInstance;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_LIGHTEN_getInstance;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DARKEN_getInstance;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_OVERLAY_getInstance;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SCREEN_getInstance;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_MODULATE_getInstance;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_PLUS_getInstance;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_XOR_getInstance;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DST_ATOP_getInstance;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SRC_ATOP_getInstance;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DST_OUT_getInstance;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SRC_OUT_getInstance;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DST_IN_getInstance;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SRC_IN_getInstance;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DST_OVER_getInstance;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_DST_getInstance;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_SRC_getInstance;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BlendMode_CLEAR_getInstance;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Matrix33;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_12;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_11;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_6;
  var until = kotlin_kotlin.$crossModule$.until;
  var step = kotlin_kotlin.$crossModule$.step;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ClipMode_INTERSECT_getInstance;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ClipMode_DIFFERENCE_getInstance;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Matrix44;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterMode_NEAREST_getInstance;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.MipmapMode_NONE_getInstance;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterMipmap;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$crossModule$.CubicResampler;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterMode_LINEAR_getInstance;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.MipmapMode_NEAREST_getInstance;
  var _IntOffset___get_x__impl__2691365380 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntOffset___get_x__impl__2691365380;
  var _IntOffset___get_y__impl__139208419 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntOffset___get_y__impl__139208419;
  var _IntSize___get_width__impl__3492176776 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_width__impl__3492176776;
  var _IntSize___get_height__impl__2736509033 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_height__impl__2736509033;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Paint_init_$Create$;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintMode_FILL_getInstance;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintMode_STROKE_getInstance;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeCap_BUTT_getInstance;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeCap_SQUARE_getInstance;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeCap_ROUND_getInstance;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeJoin_MITER_getInstance;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeJoin_BEVEL_getInstance;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PaintStrokeJoin_ROUND_getInstance;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Path_init_$Create$;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathOp_XOR_getInstance;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathOp_REVERSE_DIFFERENCE_getInstance;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathOp_UNION_getInstance;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathOp_INTERSECT_getInstance;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathOp_DIFFERENCE_getInstance;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathFillMode_WINDING_getInstance;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathFillMode_EVEN_ODD_getInstance;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PathDirection_COUNTER_CLOCKWISE_getInstance;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_8;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_9;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$_1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_10;
  var Style_TRANSLATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Style_TRANSLATE_getInstance;
  var Style_ROTATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Style_ROTATE_getInstance;
  var Style_MORPH_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Style_MORPH_getInstance;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance;
  var ColorMatrix = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ColorMatrix;
  var abs = kotlin_kotlin.$crossModule$.abs;
  var ColorType_BGRA_8888_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ColorType_BGRA_8888_getInstance;
  var ColorAlphaType_UNPREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ColorAlphaType_UNPREMUL_getInstance;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ColorInfo;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ImageInfo;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_2;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_13;
  var toFloatArray = kotlin_kotlin.$crossModule$.toFloatArray;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$crossModule$.GradientStyle;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterTileMode_CLAMP_getInstance;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterTileMode_DECAL_getInstance;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterTileMode_MIRROR_getInstance;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FilterTileMode_REPEAT_getInstance;
  var VertexMode_TRIANGLES_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.VertexMode_TRIANGLES_getInstance;
  var VertexMode_TRIANGLE_FAN_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.VertexMode_TRIANGLE_FAN_getInstance;
  var VertexMode_TRIANGLE_STRIP_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.VertexMode_TRIANGLE_STRIP_getInstance;
  //endregion
  'use strict';
  //region block: pre-declaration
  ShaderBrush.prototype = Object.create(Brush.prototype);
  ShaderBrush.prototype.constructor = ShaderBrush;
  LinearGradient.prototype = Object.create(ShaderBrush.prototype);
  LinearGradient.prototype.constructor = LinearGradient;
  RadialGradient.prototype = Object.create(ShaderBrush.prototype);
  RadialGradient.prototype.constructor = RadialGradient;
  SweepGradient.prototype = Object.create(ShaderBrush.prototype);
  SweepGradient.prototype.constructor = SweepGradient;
  SolidColor.prototype = Object.create(Brush.prototype);
  SolidColor.prototype.constructor = SolidColor;
  function scale$default(sx, sy, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      sy = sx;
    return $handler == null ? this.scale_sphyvb_k$(sx, sy) : $handler(sx, sy);
  }
  function skewRad(sxRad, syRad) {
    this.skew_hcshkp_k$(degrees(sxRad), degrees(syRad));
  }
  function clipRect(rect, clipOp) {
    return this.clipRect_si0ig1_k$(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$(), rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$(), clipOp);
  }
  function clipRect$default(rect, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.clipRect_5p7fgn_k$(rect, clipOp);
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(rect, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      clipOp = Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(left, top, right, bottom, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.clipPath_kn87dc_k$(path, clipOp);
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.drawRect_iwqaze_k$(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$(), rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$(), paint);
  }
  function drawOval(rect, paint) {
    return this.drawOval_wmf8q4_k$(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$(), rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$(), paint);
  }
  function drawArc(rect, startAngle, sweepAngle, useCenter, paint) {
    return this.drawArc_xj6sd2_k$(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$(), rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$(), startAngle, sweepAngle, useCenter, paint);
  }
  function drawArcRad(rect, startAngleRad, sweepAngleRad, useCenter, paint) {
    this.drawArc_wasmwu_k$(rect, degrees(startAngleRad), degrees(sweepAngleRad), useCenter, paint);
  }
  function drawImageRect$default(image, srcOffset, srcSize, dstOffset, dstSize, paint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image._get_width__3719200459_9isoj9_k$(), image._get_height__3088126660_jyis70_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    var tmp;
    if ($handler == null) {
      tmp = this.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, paint);
    } else {
      var tmp_0 = srcOffset;
      var tmp_1 = tmp_0 == null ? null : new IntOffset(tmp_0);
      var tmp_2 = srcSize;
      var tmp_3 = tmp_2 == null ? null : new IntSize_0(tmp_2);
      var tmp_4 = dstOffset;
      var tmp_5 = tmp_4 == null ? null : new IntOffset(tmp_4);
      var tmp_6 = dstSize;
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_6 == null ? null : new IntSize_0(tmp_6), paint);
    }
    return tmp;
  }
  function readPixels$default(buffer, startX, startY, width, height, bufferOffset, stride, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0;
    if (!(($mask0 & 4) === 0))
      startY = 0;
    if (!(($mask0 & 8) === 0))
      width = this._get_width__3719200459_9isoj9_k$();
    if (!(($mask0 & 16) === 0))
      height = this._get_height__3088126660_jyis70_k$();
    if (!(($mask0 & 32) === 0))
      bufferOffset = 0;
    if (!(($mask0 & 64) === 0))
      stride = width;
    return $handler == null ? this.readPixels_foa4om_k$(buffer, startX, startY, width, height, bufferOffset, stride) : $handler(buffer, startX, startY, width, height, bufferOffset, stride);
  }
  Rectangle.prototype = Object.create(Outline.prototype);
  Rectangle.prototype.constructor = Rectangle;
  Rounded.prototype = Object.create(Outline.prototype);
  Rounded.prototype.constructor = Rounded;
  Generic.prototype = Object.create(Outline.prototype);
  Generic.prototype.constructor = Generic;
  function arcToRad(rect, startAngleRadians, sweepAngleRadians, forceMoveTo) {
    this.arcTo_948klo_k$(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo);
  }
  function addPath$default(path, offset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.addPath_9947vg_k$(path, offset);
    } else {
      var tmp_0 = offset;
      tmp = $handler(path, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  Adaptation$Companion$Bradford$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$Bradford$1.prototype.constructor = Adaptation$Companion$Bradford$1;
  Adaptation$Companion$VonKries$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$VonKries$1.prototype.constructor = Adaptation$Companion$VonKries$1;
  Adaptation$Companion$Ciecat02$1.prototype = Object.create(Adaptation.prototype);
  Adaptation$Companion$Ciecat02$1.prototype.constructor = Adaptation$Companion$Ciecat02$1;
  Connector$Companion$identity$1.prototype = Object.create(Connector.prototype);
  Connector$Companion$identity$1.prototype.constructor = Connector$Companion$identity$1;
  RgbConnector.prototype = Object.create(Connector.prototype);
  RgbConnector.prototype.constructor = RgbConnector;
  Lab.prototype = Object.create(ColorSpace.prototype);
  Lab.prototype.constructor = Lab;
  Oklab.prototype = Object.create(ColorSpace.prototype);
  Oklab.prototype.constructor = Oklab;
  Rgb.prototype = Object.create(ColorSpace.prototype);
  Rgb.prototype.constructor = Rgb;
  Xyz.prototype = Object.create(ColorSpace.prototype);
  Xyz.prototype.constructor = Xyz;
  function _get_center__2950577494_0() {
    return _get_center__2950577494(this._get_drawContext__260196134_4awwme_k$()._get_size__809037418_1k4d9o_k$());
  }
  function _get_size__809037418() {
    return this._get_drawContext__260196134_4awwme_k$()._get_size__809037418_1k4d9o_k$();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_45().DefaultCap_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawLine_94tzv7_k$(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
    } else {
      var tmp_0 = new Offset_0(start);
      var tmp_1 = new Offset_0(end);
      var tmp_2 = cap;
      var tmp_3 = tmp_2 == null ? null : new StrokeCap(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, tmp_0, tmp_1, strokeWidth, tmp_3, pathEffect, alpha, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawLine$default_0(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_45().DefaultCap_1;
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawLine_qcvbii_k$(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = new Offset_0(start);
      var tmp_2 = new Offset_0(end);
      var tmp_3 = cap;
      var tmp_4 = tmp_3 == null ? null : new StrokeCap(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, tmp_1, tmp_2, strokeWidth, tmp_4, pathEffect, alpha, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawRect_4jm64w_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, tmp_1, tmp_3, alpha, style, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawRect_srg7q1_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, tmp_2, tmp_4, alpha, style, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawImage$default(image, topLeft, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawImage_bk8e6s_k$(image, topLeft, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = blendMode;
      tmp = $handler(image, tmp_1, alpha, style, colorFilter, tmp_2 == null ? null : new BlendMode(tmp_2));
    }
    return tmp;
  }
  function drawImage$default_0(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image._get_width__3719200459_9isoj9_k$(), image._get_height__3088126660_jyis70_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawImage_td6jz_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = srcOffset;
      var tmp_1 = tmp_0 == null ? null : new IntOffset(tmp_0);
      var tmp_2 = srcSize;
      var tmp_3 = tmp_2 == null ? null : new IntSize_0(tmp_2);
      var tmp_4 = dstOffset;
      var tmp_5 = tmp_4 == null ? null : new IntOffset(tmp_4);
      var tmp_6 = dstSize;
      var tmp_7 = tmp_6 == null ? null : new IntSize_0(tmp_6);
      var tmp_8 = blendMode;
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_7, alpha, style, colorFilter, tmp_8 == null ? null : new BlendMode(tmp_8));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.drawImage$default_9i1j05_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, null, 512, null);
  }
  function drawImage$default_1(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      srcOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 4) === 0))
      srcSize = IntSize(image._get_width__3719200459_9isoj9_k$(), image._get_height__3088126660_jyis70_k$());
    if (!(($mask0 & 8) === 0))
      dstOffset = Companion_getInstance_1()._get_Zero__785822851_9g2ui8_k$();
    if (!(($mask0 & 16) === 0))
      dstSize = srcSize;
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    if (!(($mask0 & 512) === 0))
      filterQuality = Companion_getInstance_44().DefaultFilterQuality_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawImage_riofdh_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
    } else {
      var tmp_0 = srcOffset;
      var tmp_1 = tmp_0 == null ? null : new IntOffset(tmp_0);
      var tmp_2 = srcSize;
      var tmp_3 = tmp_2 == null ? null : new IntSize_0(tmp_2);
      var tmp_4 = dstOffset;
      var tmp_5 = tmp_4 == null ? null : new IntOffset(tmp_4);
      var tmp_6 = dstSize;
      var tmp_7 = tmp_6 == null ? null : new IntSize_0(tmp_6);
      var tmp_8 = blendMode;
      var tmp_9 = tmp_8 == null ? null : new BlendMode(tmp_8);
      var tmp_10 = filterQuality;
      tmp = $handler(image, tmp_1, tmp_3, tmp_5, tmp_7, alpha, style, colorFilter, tmp_9, tmp_10 == null ? null : new FilterQuality(tmp_10));
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      cornerRadius = Companion_getInstance_2()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 16) === 0))
      alpha = 1.0;
    if (!(($mask0 & 32) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 64) === 0))
      colorFilter = null;
    if (!(($mask0 & 128) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawRoundRect_nkvmol_k$(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = cornerRadius;
      var tmp_5 = tmp_4 == null ? null : new CornerRadius(tmp_4);
      var tmp_6 = blendMode;
      tmp = $handler(brush, tmp_1, tmp_3, tmp_5, alpha, style, colorFilter, tmp_6 == null ? null : new BlendMode(tmp_6));
    }
    return tmp;
  }
  function drawRoundRect$default_0(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      cornerRadius = Companion_getInstance_2()._get_Zero__785822851_4jg8nf_k$();
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      alpha = 1.0;
    if (!(($mask0 & 64) === 0))
      colorFilter = null;
    if (!(($mask0 & 128) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawRoundRect_q7amlu_k$(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = cornerRadius;
      var tmp_6 = tmp_5 == null ? null : new CornerRadius(tmp_5);
      var tmp_7 = blendMode;
      tmp = $handler(tmp_0, tmp_2, tmp_4, tmp_6, style, alpha, colorFilter, tmp_7 == null ? null : new BlendMode(tmp_7));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      radius = _Size___get_minDimension__impl__4021532005(this._get_size__809037418_1k4d9o_k$()) / 2.0;
    if (!(($mask0 & 4) === 0))
      center = this._get_center__2950577494_k1whsm_k$();
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawCircle_sp46sp_k$(brush, radius, center, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = center;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = blendMode;
      tmp = $handler(brush, radius, tmp_1, alpha, style, colorFilter, tmp_2 == null ? null : new BlendMode(tmp_2));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      radius = _Size___get_minDimension__impl__4021532005(this._get_size__809037418_1k4d9o_k$()) / 2.0;
    if (!(($mask0 & 4) === 0))
      center = this._get_center__2950577494_k1whsm_k$();
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawCircle_n7txn6_k$(color, radius, center, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = center;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = blendMode;
      tmp = $handler(tmp_0, radius, tmp_2, alpha, style, colorFilter, tmp_3 == null ? null : new BlendMode(tmp_3));
    }
    return tmp;
  }
  function drawOval$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawOval_poyb4u_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, tmp_1, tmp_3, alpha, style, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawOval$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 32) === 0))
      colorFilter = null;
    if (!(($mask0 & 64) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawOval_1h49jp_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, tmp_2, tmp_4, alpha, style, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawArc$default(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 32) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 256) === 0))
      colorFilter = null;
    if (!(($mask0 & 512) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawArc_vjjneq_k$(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = topLeft;
      var tmp_1 = tmp_0 == null ? null : new Offset_0(tmp_0);
      var tmp_2 = size;
      var tmp_3 = tmp_2 == null ? null : new Size_0(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(brush, startAngle, sweepAngle, useCenter, tmp_1, tmp_3, alpha, style, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawArc$default_0(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      topLeft = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 32) === 0))
      size = offsetSize(this._get_size__809037418_1k4d9o_k$(), this, topLeft);
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 256) === 0))
      colorFilter = null;
    if (!(($mask0 & 512) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawArc_y7e861_k$(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = topLeft;
      var tmp_2 = tmp_1 == null ? null : new Offset_0(tmp_1);
      var tmp_3 = size;
      var tmp_4 = tmp_3 == null ? null : new Size_0(tmp_3);
      var tmp_5 = blendMode;
      tmp = $handler(tmp_0, startAngle, sweepAngle, useCenter, tmp_2, tmp_4, alpha, style, colorFilter, tmp_5 == null ? null : new BlendMode(tmp_5));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawPath_vpl0ok_k$(path, color, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = new Color(color);
      var tmp_1 = blendMode;
      tmp = $handler(path, tmp_0, alpha, style, colorFilter, tmp_1 == null ? null : new BlendMode(tmp_1));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    if (!(($mask0 & 8) === 0))
      style = Fill_getInstance();
    if (!(($mask0 & 16) === 0))
      colorFilter = null;
    if (!(($mask0 & 32) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawPath_vsb9f_k$(path, brush, alpha, style, colorFilter, blendMode);
    } else {
      var tmp_0 = blendMode;
      tmp = $handler(path, brush, alpha, style, colorFilter, tmp_0 == null ? null : new BlendMode(tmp_0));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_32()._get_Butt__764137080_goepja_k$();
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawPoints_tvcs0g_k$(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
    } else {
      var tmp_0 = new PointMode(pointMode);
      var tmp_1 = new Color(color);
      var tmp_2 = cap;
      var tmp_3 = tmp_2 == null ? null : new StrokeCap(tmp_2);
      var tmp_4 = blendMode;
      tmp = $handler(points, tmp_0, tmp_1, strokeWidth, tmp_3, pathEffect, alpha, colorFilter, tmp_4 == null ? null : new BlendMode(tmp_4));
    }
    return tmp;
  }
  function drawPoints$default_0(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance_45();
      strokeWidth = 0.0;
    }
    if (!(($mask0 & 16) === 0))
      cap = Companion_getInstance_32()._get_Butt__764137080_goepja_k$();
    if (!(($mask0 & 32) === 0))
      pathEffect = null;
    if (!(($mask0 & 64) === 0))
      alpha = 1.0;
    if (!(($mask0 & 128) === 0))
      colorFilter = null;
    if (!(($mask0 & 256) === 0))
      blendMode = Companion_getInstance_44().DefaultBlendMode_1;
    var tmp;
    if ($handler == null) {
      tmp = this.drawPoints_yexgjr_k$(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
    } else {
      var tmp_0 = new PointMode(pointMode);
      var tmp_1 = cap;
      var tmp_2 = tmp_1 == null ? null : new StrokeCap(tmp_1);
      var tmp_3 = blendMode;
      tmp = $handler(points, tmp_0, brush, strokeWidth, tmp_2, pathEffect, alpha, colorFilter, tmp_3 == null ? null : new BlendMode(tmp_3));
    }
    return tmp;
  }
  function _get_center__2950577494_1() {
    return Offset(_Size___get_width__impl__3977603903(this._get_size__809037418_1k4d9o_k$()) / 2, _Size___get_height__impl__604880786(this._get_size__809037418_1k4d9o_k$()) / 2);
  }
  function clipRect$default_1(left, top, right, bottom, clipOp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0.0;
    if (!(($mask0 & 2) === 0))
      top = 0.0;
    if (!(($mask0 & 4) === 0))
      right = _Size___get_width__impl__3977603903(this._get_size__809037418_1k4d9o_k$());
    if (!(($mask0 & 8) === 0))
      bottom = _Size___get_height__impl__604880786(this._get_size__809037418_1k4d9o_k$());
    if (!(($mask0 & 16) === 0))
      clipOp = Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(left, top, right, bottom, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function clipPath$default_0(path, clipOp, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      clipOp = Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.clipPath_kn87dc_k$(path, clipOp);
    } else {
      var tmp_0 = clipOp;
      tmp = $handler(path, tmp_0 == null ? null : new ClipOp(tmp_0));
    }
    return tmp;
  }
  function translate$default(left, top, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = 0.0;
    if (!(($mask0 & 2) === 0))
      top = 0.0;
    return $handler == null ? this.translate_62wf99_k$(left, top) : $handler(left, top);
  }
  function rotate$default(degrees, pivot, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      pivot = this._get_center__2950577494_k1whsm_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.rotate_qski4n_k$(degrees, pivot);
    } else {
      var tmp_0 = pivot;
      tmp = $handler(degrees, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  function scale$default_0(scaleX, scaleY, pivot, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      pivot = this._get_center__2950577494_k1whsm_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.scale_qp5ya8_k$(scaleX, scaleY, pivot);
    } else {
      var tmp_0 = pivot;
      tmp = $handler(scaleX, scaleY, tmp_0 == null ? null : new Offset_0(tmp_0));
    }
    return tmp;
  }
  Stroke.prototype = Object.create(DrawStyle.prototype);
  Stroke.prototype.constructor = Stroke;
  Fill.prototype = Object.create(DrawStyle.prototype);
  Fill.prototype.constructor = Fill;
  Close.prototype = Object.create(PathNode.prototype);
  Close.prototype.constructor = Close;
  RelativeMoveTo.prototype = Object.create(PathNode.prototype);
  RelativeMoveTo.prototype.constructor = RelativeMoveTo;
  MoveTo.prototype = Object.create(PathNode.prototype);
  MoveTo.prototype.constructor = MoveTo;
  RelativeLineTo.prototype = Object.create(PathNode.prototype);
  RelativeLineTo.prototype.constructor = RelativeLineTo;
  LineTo.prototype = Object.create(PathNode.prototype);
  LineTo.prototype.constructor = LineTo;
  RelativeHorizontalTo.prototype = Object.create(PathNode.prototype);
  RelativeHorizontalTo.prototype.constructor = RelativeHorizontalTo;
  HorizontalTo.prototype = Object.create(PathNode.prototype);
  HorizontalTo.prototype.constructor = HorizontalTo;
  RelativeVerticalTo.prototype = Object.create(PathNode.prototype);
  RelativeVerticalTo.prototype.constructor = RelativeVerticalTo;
  VerticalTo.prototype = Object.create(PathNode.prototype);
  VerticalTo.prototype.constructor = VerticalTo;
  RelativeCurveTo.prototype = Object.create(PathNode.prototype);
  RelativeCurveTo.prototype.constructor = RelativeCurveTo;
  CurveTo.prototype = Object.create(PathNode.prototype);
  CurveTo.prototype.constructor = CurveTo;
  RelativeReflectiveCurveTo.prototype = Object.create(PathNode.prototype);
  RelativeReflectiveCurveTo.prototype.constructor = RelativeReflectiveCurveTo;
  ReflectiveCurveTo.prototype = Object.create(PathNode.prototype);
  ReflectiveCurveTo.prototype.constructor = ReflectiveCurveTo;
  RelativeQuadTo.prototype = Object.create(PathNode.prototype);
  RelativeQuadTo.prototype.constructor = RelativeQuadTo;
  QuadTo.prototype = Object.create(PathNode.prototype);
  QuadTo.prototype.constructor = QuadTo;
  RelativeReflectiveQuadTo.prototype = Object.create(PathNode.prototype);
  RelativeReflectiveQuadTo.prototype.constructor = RelativeReflectiveQuadTo;
  ReflectiveQuadTo.prototype = Object.create(PathNode.prototype);
  ReflectiveQuadTo.prototype.constructor = ReflectiveQuadTo;
  RelativeArcTo.prototype = Object.create(PathNode.prototype);
  RelativeArcTo.prototype.constructor = RelativeArcTo;
  ArcTo.prototype = Object.create(PathNode.prototype);
  ArcTo.prototype.constructor = ArcTo;
  BlurEffect.prototype = Object.create(RenderEffect.prototype);
  BlurEffect.prototype.constructor = BlurEffect;
  OffsetEffect.prototype = Object.create(RenderEffect.prototype);
  OffsetEffect.prototype.constructor = OffsetEffect;
  SkiaBackedRenderEffect.prototype = Object.create(RenderEffect.prototype);
  SkiaBackedRenderEffect.prototype.constructor = SkiaBackedRenderEffect;
  //endregion
  function _BlendMode___init__impl__2711868827(value) {
    return value;
  }
  function _get_value__3683422336($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Clear_1 = _BlendMode___init__impl__2711868827(0);
    this.Src_1 = _BlendMode___init__impl__2711868827(1);
    this.Dst_1 = _BlendMode___init__impl__2711868827(2);
    this.SrcOver_1 = _BlendMode___init__impl__2711868827(3);
    this.DstOver_1 = _BlendMode___init__impl__2711868827(4);
    this.SrcIn_1 = _BlendMode___init__impl__2711868827(5);
    this.DstIn_1 = _BlendMode___init__impl__2711868827(6);
    this.SrcOut_1 = _BlendMode___init__impl__2711868827(7);
    this.DstOut_1 = _BlendMode___init__impl__2711868827(8);
    this.SrcAtop_1 = _BlendMode___init__impl__2711868827(9);
    this.DstAtop_1 = _BlendMode___init__impl__2711868827(10);
    this.Xor_1 = _BlendMode___init__impl__2711868827(11);
    this.Plus_1 = _BlendMode___init__impl__2711868827(12);
    this.Modulate_1 = _BlendMode___init__impl__2711868827(13);
    this.Screen_1 = _BlendMode___init__impl__2711868827(14);
    this.Overlay_1 = _BlendMode___init__impl__2711868827(15);
    this.Darken_1 = _BlendMode___init__impl__2711868827(16);
    this.Lighten_1 = _BlendMode___init__impl__2711868827(17);
    this.ColorDodge_1 = _BlendMode___init__impl__2711868827(18);
    this.ColorBurn_1 = _BlendMode___init__impl__2711868827(19);
    this.Hardlight_1 = _BlendMode___init__impl__2711868827(20);
    this.Softlight_1 = _BlendMode___init__impl__2711868827(21);
    this.Difference_1 = _BlendMode___init__impl__2711868827(22);
    this.Exclusion_1 = _BlendMode___init__impl__2711868827(23);
    this.Multiply_1 = _BlendMode___init__impl__2711868827(24);
    this.Hue_1 = _BlendMode___init__impl__2711868827(25);
    this.Saturation_1 = _BlendMode___init__impl__2711868827(26);
    this.Color_1 = _BlendMode___init__impl__2711868827(27);
    this.Luminosity_1 = _BlendMode___init__impl__2711868827(28);
  }
  Companion.prototype._get_Clear__2233267012_xzkvzs_k$ = function () {
    return this.Clear_1;
  };
  Companion.prototype._get_Src__856436557_pb00nz_k$ = function () {
    return this.Src_1;
  };
  Companion.prototype._get_Dst__855991180_x2jcn4_k$ = function () {
    return this.Dst_1;
  };
  Companion.prototype._get_SrcOver__1757445465_k11yab_k$ = function () {
    return this.SrcOver_1;
  };
  Companion.prototype._get_DstOver__2759293464_gvo6no_k$ = function () {
    return this.DstOver_1;
  };
  Companion.prototype._get_SrcIn__2696791784_8xfbac_k$ = function () {
    return this.SrcIn_1;
  };
  Companion.prototype._get_DstIn__2268784487_cro8w5_k$ = function () {
    return this.DstIn_1;
  };
  Companion.prototype._get_SrcOut__1996353889_e5ui45_k$ = function () {
    return this.SrcOut_1;
  };
  Companion.prototype._get_DstOut__1613029570_xuqdoq_k$ = function () {
    return this.DstOut_1;
  };
  Companion.prototype._get_SrcAtop__1744466137_h2yh5f_k$ = function () {
    return this.SrcAtop_1;
  };
  Companion.prototype._get_DstAtop__2746314136_dxkpis_k$ = function () {
    return this.DstAtop_1;
  };
  Companion.prototype._get_Xor__856583094_wulcq2_k$ = function () {
    return this.Xor_1;
  };
  Companion.prototype._get_Plus__776799185_96r9ln_k$ = function () {
    return this.Plus_1;
  };
  Companion.prototype._get_Modulate__1933623282_8x3ee2_k$ = function () {
    return this.Modulate_1;
  };
  Companion.prototype._get_Screen__1581409279_6nzect_k$ = function () {
    return this.Screen_1;
  };
  Companion.prototype._get_Overlay__2720466145_pgz4xh_k$ = function () {
    return this.Overlay_1;
  };
  Companion.prototype._get_Darken__1096676396_lydm8w_k$ = function () {
    return this.Darken_1;
  };
  Companion.prototype._get_Lighten__3182621394_h67kje_k$ = function () {
    return this.Lighten_1;
  };
  Companion.prototype._get_ColorDodge__329289911_m7p6q3_k$ = function () {
    return this.ColorDodge_1;
  };
  Companion.prototype._get_ColorBurn__1948630239_ad13m5_k$ = function () {
    return this.ColorBurn_1;
  };
  Companion.prototype._get_Hardlight__1058758854_pzqk3q_k$ = function () {
    return this.Hardlight_1;
  };
  Companion.prototype._get_Softlight__1238821061_8kd2jd_k$ = function () {
    return this.Softlight_1;
  };
  Companion.prototype._get_Difference__1821174478_7pplxa_k$ = function () {
    return this.Difference_1;
  };
  Companion.prototype._get_Exclusion__1431226979_260nm1_k$ = function () {
    return this.Exclusion_1;
  };
  Companion.prototype._get_Multiply__2279685639_hjiwm3_k$ = function () {
    return this.Multiply_1;
  };
  Companion.prototype._get_Hue__856111801_m0zpn1_k$ = function () {
    return this.Hue_1;
  };
  Companion.prototype._get_Saturation__1226274521_f7cifn_k$ = function () {
    return this.Saturation_1;
  };
  Companion.prototype._get_Color__2236259566_vp59sy_k$ = function () {
    return this.Color_1;
  };
  Companion.prototype._get_Luminosity__2757963466_p43i6a_k$ = function () {
    return this.Luminosity_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_1865228557(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_14().Clear_1 ? 'Clear' : tmp0_subject === Companion_getInstance_14().Src_1 ? 'Src' : tmp0_subject === Companion_getInstance_14().Dst_1 ? 'Dst' : tmp0_subject === Companion_getInstance_14().SrcOver_1 ? 'SrcOver' : tmp0_subject === Companion_getInstance_14().DstOver_1 ? 'DstOver' : tmp0_subject === Companion_getInstance_14().SrcIn_1 ? 'SrcIn' : tmp0_subject === Companion_getInstance_14().DstIn_1 ? 'DstIn' : tmp0_subject === Companion_getInstance_14().SrcOut_1 ? 'SrcOut' : tmp0_subject === Companion_getInstance_14().DstOut_1 ? 'DstOut' : tmp0_subject === Companion_getInstance_14().SrcAtop_1 ? 'SrcAtop' : tmp0_subject === Companion_getInstance_14().DstAtop_1 ? 'DstAtop' : tmp0_subject === Companion_getInstance_14().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_14().Plus_1 ? 'Plus' : tmp0_subject === Companion_getInstance_14().Modulate_1 ? 'Modulate' : tmp0_subject === Companion_getInstance_14().Screen_1 ? 'Screen' : tmp0_subject === Companion_getInstance_14().Overlay_1 ? 'Overlay' : tmp0_subject === Companion_getInstance_14().Darken_1 ? 'Darken' : tmp0_subject === Companion_getInstance_14().Lighten_1 ? 'Lighten' : tmp0_subject === Companion_getInstance_14().ColorDodge_1 ? 'ColorDodge' : tmp0_subject === Companion_getInstance_14().ColorBurn_1 ? 'ColorBurn' : tmp0_subject === Companion_getInstance_14().Hardlight_1 ? 'HardLight' : tmp0_subject === Companion_getInstance_14().Softlight_1 ? 'Softlight' : tmp0_subject === Companion_getInstance_14().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_14().Exclusion_1 ? 'Exclusion' : tmp0_subject === Companion_getInstance_14().Multiply_1 ? 'Multiply' : tmp0_subject === Companion_getInstance_14().Hue_1 ? 'Hue' : tmp0_subject === Companion_getInstance_14().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_14().Color_1 ? 'Color' : tmp0_subject === Companion_getInstance_14().Luminosity_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_549813438(this_0) {
    return this_0;
  }
  function BlendMode__equals_impl_4184763034(this_0, other) {
    if (!(other instanceof BlendMode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BlendMode ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  BlendMode.prototype.toString = function () {
    return BlendMode__toString_impl_1865228557(this.value_1);
  };
  BlendMode.prototype.hashCode = function () {
    return BlendMode__hashCode_impl_549813438(this.value_1);
  };
  BlendMode.prototype.equals = function (other) {
    return BlendMode__equals_impl_4184763034(this.value_1, other);
  };
  BlendMode.$metadata$ = {
    simpleName: 'BlendMode',
    kind: 'class',
    interfaces: []
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.linearGradient_hzla25_k$ = function (colorStops, start, end, tileMode) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_List_0 = colorStops.length;
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$(tmp0_List_0);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < tmp0_List_0)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = colorStops[index_3_3]._get_second__4255435031_njbah_k$().value_1;
                  break $l$block;
                }
                list_1_1.add_1j60pz_k$(new Color(tmp$ret$0));
                Unit_getInstance();
              }
            }
             while (inductionVariable < tmp0_List_0);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_List_0 = colorStops.length;
      var tmp$ret$4;
      $l$block_3: {
        var list_1_1_0 = ArrayList_init_$Create$(tmp1_List_0);
        {
          {
          }
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < tmp1_List_0)
            do {
              var index_3_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = colorStops[index_3_3_0]._get_first__3232921377_hkbbvj_k$();
                  break $l$block_2;
                }
                list_1_1_0.add_1j60pz_k$(tmp$ret$3);
                Unit_getInstance();
              }
            }
             while (inductionVariable_0 < tmp1_List_0);
        }
        tmp$ret$4 = list_1_1_0;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    return new LinearGradient(tmp, tmp$ret$5, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient$default_hj3qlx_k$ = function (colorStops, start, end, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      start = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      end = Companion_getInstance()._get_Infinite__264239127_jl8p7v_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.linearGradient_hzla25_k$(colorStops, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient_shb1il_k$ = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  Companion_0.prototype.linearGradient$default_etbc3l_k$ = function (colors, start, end, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      start = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      end = Companion_getInstance()._get_Infinite__264239127_jl8p7v_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.linearGradient_shb1il_k$(colors, start, end, tileMode);
  };
  Companion_0.prototype.horizontalGradient_tfs9xe_k$ = function (colors, startX, endX, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset(startX, 0.0), Offset(endX, 0.0), tileMode);
  };
  Companion_0.prototype.horizontalGradient$default_b2z7pe_k$ = function (colors, startX, endX, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0.0;
    if (!(($mask0 & 4) === 0))
      endX = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.horizontalGradient_tfs9xe_k$(colors, startX, endX, tileMode);
  };
  Companion_0.prototype.horizontalGradient_i469mu_k$ = function (colorStops, startX, endX, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset(startX, 0.0), Offset(endX, 0.0), tileMode);
  };
  Companion_0.prototype.horizontalGradient$default_cf1vn0_k$ = function (colorStops, startX, endX, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startX = 0.0;
    if (!(($mask0 & 4) === 0))
      endX = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.horizontalGradient_i469mu_k$(colorStops, startX, endX, tileMode);
  };
  Companion_0.prototype.verticalGradient_d79o9c_k$ = function (colors, startY, endY, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  Companion_0.prototype.verticalGradient$default_kc8rrk_k$ = function (colors, startY, endY, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startY = 0.0;
    if (!(($mask0 & 4) === 0))
      endY = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.verticalGradient_d79o9c_k$(colors, startY, endY, tileMode);
  };
  Companion_0.prototype.verticalGradient_inf80c_k$ = function (colorStops, startY, endY, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  Companion_0.prototype.verticalGradient$default_7awhcq_k$ = function (colorStops, startY, endY, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startY = 0.0;
    if (!(($mask0 & 4) === 0))
      endY = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.verticalGradient_inf80c_k$(colorStops, startY, endY, tileMode);
  };
  Companion_0.prototype.radialGradient_ge8bks_k$ = function (colorStops, center, radius, tileMode) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_List_0 = colorStops.length;
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$(tmp0_List_0);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < tmp0_List_0)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = colorStops[index_3_3]._get_second__4255435031_njbah_k$().value_1;
                  break $l$block;
                }
                list_1_1.add_1j60pz_k$(new Color(tmp$ret$0));
                Unit_getInstance();
              }
            }
             while (inductionVariable < tmp0_List_0);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_List_0 = colorStops.length;
      var tmp$ret$4;
      $l$block_3: {
        var list_1_1_0 = ArrayList_init_$Create$(tmp1_List_0);
        {
          {
          }
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < tmp1_List_0)
            do {
              var index_3_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = colorStops[index_3_3_0]._get_first__3232921377_hkbbvj_k$();
                  break $l$block_2;
                }
                list_1_1_0.add_1j60pz_k$(tmp$ret$3);
                Unit_getInstance();
              }
            }
             while (inductionVariable_0 < tmp1_List_0);
        }
        tmp$ret$4 = list_1_1_0;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    return new RadialGradient(tmp, tmp$ret$5, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient$default_jsze89_k$ = function (colorStops, center, radius, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance()._get_Unspecified__2946689370_vvlnfy_k$();
    if (!(($mask0 & 4) === 0))
      radius = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.radialGradient_ge8bks_k$(colorStops, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient_x8fw6i_k$ = function (colors, center, radius, tileMode) {
    return new RadialGradient(colors, null, center, radius, tileMode);
  };
  Companion_0.prototype.radialGradient$default_vgr8pr_k$ = function (colors, center, radius, tileMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance()._get_Unspecified__2946689370_vvlnfy_k$();
    if (!(($mask0 & 4) === 0))
      radius = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    if (!(($mask0 & 8) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return this.radialGradient_x8fw6i_k$(colors, center, radius, tileMode);
  };
  Companion_0.prototype.sweepGradient_nrx7hj_k$ = function (colorStops, center) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_List_0 = colorStops.length;
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$(tmp0_List_0);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < tmp0_List_0)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = colorStops[index_3_3]._get_second__4255435031_njbah_k$().value_1;
                  break $l$block;
                }
                list_1_1.add_1j60pz_k$(new Color(tmp$ret$0));
                Unit_getInstance();
              }
            }
             while (inductionVariable < tmp0_List_0);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var tmp0_colors = tmp$ret$2;
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_List_0 = colorStops.length;
      var tmp$ret$4;
      $l$block_3: {
        var list_1_1_0 = ArrayList_init_$Create$(tmp1_List_0);
        {
          {
          }
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < tmp1_List_0)
            do {
              var index_3_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = colorStops[index_3_3_0]._get_first__3232921377_hkbbvj_k$();
                  break $l$block_2;
                }
                list_1_1_0.add_1j60pz_k$(tmp$ret$3);
                Unit_getInstance();
              }
            }
             while (inductionVariable_0 < tmp1_List_0);
        }
        tmp$ret$4 = list_1_1_0;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    var tmp1_stops = tmp$ret$5;
    return new SweepGradient(center, tmp0_colors, tmp1_stops);
  };
  Companion_0.prototype.sweepGradient$default_3xzz3z_k$ = function (colorStops, center, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance()._get_Unspecified__2946689370_vvlnfy_k$();
    return this.sweepGradient_nrx7hj_k$(colorStops, center);
  };
  Companion_0.prototype.sweepGradient_uggmap_k$ = function (colors, center) {
    return new SweepGradient(center, colors, null);
  };
  Companion_0.prototype.sweepGradient$default_ao4xen_k$ = function (colors, center, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      center = Companion_getInstance()._get_Unspecified__2946689370_vvlnfy_k$();
    return this.sweepGradient_uggmap_k$(colors, center);
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_15();
    this.intrinsicSize_1 = Companion_getInstance_0()._get_Unspecified__2946689370_4m8pwc_k$();
  }
  Brush.prototype._get_intrinsicSize__4223285995_j2lkb7_k$ = function () {
    return this.intrinsicSize_1;
  };
  Brush.$metadata$ = {
    simpleName: 'Brush',
    kind: 'class',
    interfaces: []
  };
  function LinearGradient_init_$Init$(colors, stops, start, end, tileMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      stops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    LinearGradient.call($this, colors, stops, start, end, tileMode);
    return $this;
  }
  function LinearGradient_init_$Create$(colors, stops, start, end, tileMode, $mask0, $marker) {
    return LinearGradient_init_$Init$(colors, stops, start, end, tileMode, $mask0, $marker, Object.create(LinearGradient.prototype));
  }
  function _get_colors__3234885531($this) {
    return $this.colors_1;
  }
  function _get_stops__3615166784($this) {
    return $this.stops_1;
  }
  function _get_start__3614751663($this) {
    return $this.start_1;
  }
  function _get_end__856968982($this) {
    return $this.end_1;
  }
  function _get_tileMode__614216826($this) {
    return $this.tileMode_1;
  }
  function LinearGradient(colors, stops, start, end, tileMode) {
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.start_1 = start;
    this.end_1 = end;
    this.tileMode_1 = tileMode;
  }
  LinearGradient.prototype._get_intrinsicSize__4223285995_j2lkb7_k$ = function () {
    var tmp;
    if (isFinite(_Offset___get_x__impl__2048295803(this.start_1)) ? isFinite(_Offset___get_x__impl__2048295803(this.end_1)) : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_abs_0 = _Offset___get_x__impl__2048295803(this.start_1) - _Offset___get_x__impl__2048295803(this.end_1);
        tmp$ret$0 = Math.abs(tmp0_abs_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$();
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (isFinite(_Offset___get_y__impl__3791106138(this.start_1)) ? isFinite(_Offset___get_y__impl__3791106138(this.end_1)) : false) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_abs_0 = _Offset___get_y__impl__3791106138(this.start_1) - _Offset___get_y__impl__3791106138(this.end_1);
        tmp$ret$1 = Math.abs(tmp1_abs_0);
        break $l$block_0;
      }
      tmp_1 = tmp$ret$1;
    } else {
      tmp_1 = FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$();
    }
    return Size(tmp_0, tmp_1);
  };
  LinearGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var startX = _Offset___get_x__impl__2048295803(this.start_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_width__impl__3977603903(size) : _Offset___get_x__impl__2048295803(this.start_1);
    var startY = _Offset___get_y__impl__3791106138(this.start_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_height__impl__604880786(size) : _Offset___get_y__impl__3791106138(this.start_1);
    var endX = _Offset___get_x__impl__2048295803(this.end_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_width__impl__3977603903(size) : _Offset___get_x__impl__2048295803(this.end_1);
    var endY = _Offset___get_y__impl__3791106138(this.end_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_height__impl__604880786(size) : _Offset___get_y__impl__3791106138(this.end_1);
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.tileMode_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  LinearGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    else {
    }
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.start_1, other.start_1))
      return false;
    if (!equals(this.end_1, other.end_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  LinearGradient.prototype.hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_3247326111(this.start_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_3247326111(this.end_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_473898753(this.tileMode_1) | 0;
    return result;
  };
  LinearGradient.prototype.toString = function () {
    var startValue = _get_isFinite__49041522(this.start_1) ? 'start=' + new Offset_0(this.start_1) + ', ' : '';
    var endValue = _get_isFinite__49041522(this.end_1) ? 'end=' + new Offset_0(this.end_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.colors_1 + ', ' + ('stops=' + this.stops_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  LinearGradient.$metadata$ = {
    simpleName: 'LinearGradient',
    kind: 'class',
    interfaces: []
  };
  function RadialGradient_init_$Init$(colors, stops, center, radius, tileMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      stops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    RadialGradient.call($this, colors, stops, center, radius, tileMode);
    return $this;
  }
  function RadialGradient_init_$Create$(colors, stops, center, radius, tileMode, $mask0, $marker) {
    return RadialGradient_init_$Init$(colors, stops, center, radius, tileMode, $mask0, $marker, Object.create(RadialGradient.prototype));
  }
  function _get_colors__3234885531_0($this) {
    return $this.colors_1;
  }
  function _get_stops__3615166784_0($this) {
    return $this.stops_1;
  }
  function _get_center__2950577494_2($this) {
    return $this.center_1;
  }
  function _get_radius__3254166713($this) {
    return $this.radius_1;
  }
  function _get_tileMode__614216826_0($this) {
    return $this.tileMode_1;
  }
  function RadialGradient(colors, stops, center, radius, tileMode) {
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.center_1 = center;
    this.radius_1 = radius;
    this.tileMode_1 = tileMode;
  }
  RadialGradient.prototype._get_intrinsicSize__4223285995_j2lkb7_k$ = function () {
    return isFinite(this.radius_1) ? Size(this.radius_1 * 2, this.radius_1 * 2) : Companion_getInstance_0()._get_Unspecified__2946689370_4m8pwc_k$();
  };
  RadialGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var centerX;
    var centerY;
    if (_get_isUnspecified__892174020(this.center_1)) {
      var drawCenter = _get_center__2950577494(size);
      centerX = _Offset___get_x__impl__2048295803(drawCenter);
      centerY = _Offset___get_y__impl__3791106138(drawCenter);
    } else {
      centerX = _Offset___get_x__impl__2048295803(this.center_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_width__impl__3977603903(size) : _Offset___get_x__impl__2048295803(this.center_1);
      centerY = _Offset___get_y__impl__3791106138(this.center_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_height__impl__604880786(size) : _Offset___get_y__impl__3791106138(this.center_1);
    }
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_center = Offset(centerX, centerY);
    var tmp3_radius = this.radius_1 === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_minDimension__impl__4021532005(size) / 2 : this.radius_1;
    var tmp4_tileMode = this.tileMode_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  RadialGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    else {
    }
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!(this.radius_1 === other.radius_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  RadialGradient.prototype.hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_3247326111(this.center_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radius_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_473898753(this.tileMode_1) | 0;
    return result;
  };
  RadialGradient.prototype.toString = function () {
    var centerValue = _get_isSpecified__2832019115(this.center_1) ? 'center=' + new Offset_0(this.center_1) + ', ' : '';
    var radiusValue = isFinite(this.radius_1) ? 'radius=' + this.radius_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.colors_1 + ', ') + ('stops=' + this.stops_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  RadialGradient.$metadata$ = {
    simpleName: 'RadialGradient',
    kind: 'class',
    interfaces: []
  };
  function SweepGradient_init_$Init$(center, colors, stops, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      stops = null;
    SweepGradient.call($this, center, colors, stops);
    return $this;
  }
  function SweepGradient_init_$Create$(center, colors, stops, $mask0, $marker) {
    return SweepGradient_init_$Init$(center, colors, stops, $mask0, $marker, Object.create(SweepGradient.prototype));
  }
  function _get_center__2950577494_3($this) {
    return $this.center_1;
  }
  function _get_colors__3234885531_1($this) {
    return $this.colors_1;
  }
  function _get_stops__3615166784_1($this) {
    return $this.stops_1;
  }
  function SweepGradient(center, colors, stops) {
    ShaderBrush.call(this);
    this.center_1 = center;
    this.colors_1 = colors;
    this.stops_1 = stops;
  }
  SweepGradient.prototype.createShader_myfnlm_k$ = function (size) {
    var tmp;
    if (_get_isUnspecified__892174020(this.center_1)) {
      tmp = _get_center__2950577494(size);
    } else {
      tmp = Offset(_Offset___get_x__impl__2048295803(this.center_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_width__impl__3977603903(size) : _Offset___get_x__impl__2048295803(this.center_1), _Offset___get_y__impl__3791106138(this.center_1) === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? _Size___get_height__impl__604880786(size) : _Offset___get_y__impl__3791106138(this.center_1));
    }
    return SweepGradientShader(tmp, this.colors_1, this.stops_1);
  };
  SweepGradient.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    else {
    }
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    return true;
  };
  SweepGradient.prototype.hashCode = function () {
    var result = Offset__hashCode_impl_3247326111(this.center_1);
    result = imul(31, result) + hashCode(this.colors_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  SweepGradient.prototype.toString = function () {
    var centerValue = _get_isSpecified__2832019115(this.center_1) ? 'center=' + new Offset_0(this.center_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.colors_1 + ', stops=' + this.stops_1 + ')');
  };
  SweepGradient.$metadata$ = {
    simpleName: 'SweepGradient',
    kind: 'class',
    interfaces: []
  };
  function SolidColor(value) {
    Brush.call(this);
    this.value_1 = value;
  }
  SolidColor.prototype._get_value__3683422336_grt6ud_k$ = function () {
    return this.value_1;
  };
  SolidColor.prototype.applyTo_w34vc_k$ = function (size, p, alpha) {
    p._set_alpha__734313383_z7qst2_k$(_get_DefaultAlpha__989817134());
    var tmp;
    if (!(alpha === _get_DefaultAlpha__989817134())) {
      var tmp_0 = _Color___get_alpha__impl__1955818045(this.value_1) * alpha;
      tmp = Color__copy$default_impl_868080376(this.value_1, tmp_0, 0.0, 0.0, 0.0, 14, null);
    } else {
      tmp = this.value_1;
    }
    p._set_color__794230338_2k89d1_k$(tmp);
    if (!(p._get_shader__44172230_qarie_k$() == null))
      p._set_shader__4250559698_bmh5tm_k$(null);
  };
  SolidColor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    else {
    }
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  SolidColor.prototype.hashCode = function () {
    return Color__hashCode_impl_1907974927(this.value_1);
  };
  SolidColor.prototype.toString = function () {
    return 'SolidColor(value=' + new Color(this.value_1) + ')';
  };
  SolidColor.$metadata$ = {
    simpleName: 'SolidColor',
    kind: 'class',
    interfaces: []
  };
  function _set_internalShader__2539236949($this, _set____804775014) {
    $this.internalShader_1 = _set____804775014;
  }
  function _get_internalShader__4082964809($this) {
    return $this.internalShader_1;
  }
  function _set_createdSize__1814487580($this, _set____804775014) {
    $this.createdSize_1 = _set____804775014;
  }
  function _get_createdSize__3645930408($this) {
    return $this.createdSize_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.internalShader_1 = null;
    this.createdSize_1 = Companion_getInstance_0()._get_Unspecified__2946689370_4m8pwc_k$();
  }
  ShaderBrush.prototype.applyTo_w34vc_k$ = function (size, p, alpha) {
    var shader = this.internalShader_1;
    if (shader == null ? true : !equals(this.createdSize_1, size)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = this.createShader_myfnlm_k$(size);
        {
        }
        {
          this.internalShader_1 = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      shader = tmp$ret$0;
      this.createdSize_1 = size;
    }
    if (!equals(p._get_color__3152392398_60nqpf_k$(), Companion_getInstance_17()._get_Black__2204520402_og72wn_k$()))
      p._set_color__794230338_2k89d1_k$(Companion_getInstance_17()._get_Black__2204520402_og72wn_k$());
    if (!equals(p._get_shader__44172230_qarie_k$(), shader))
      p._set_shader__4250559698_bmh5tm_k$(shader);
    if (!(p._get_alpha__3092475443_jvxknh_k$() === alpha))
      p._set_alpha__734313383_z7qst2_k$(alpha);
  };
  ShaderBrush.$metadata$ = {
    simpleName: 'ShaderBrush',
    kind: 'class',
    interfaces: []
  };
  function Canvas() {
  }
  Canvas.$metadata$ = {
    simpleName: 'Canvas',
    kind: 'interface',
    interfaces: []
  };
  function _ClipOp___init__impl__1556860112(value) {
    return value;
  }
  function _get_value__3683422336_0($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Difference_1 = _ClipOp___init__impl__1556860112(0);
    this.Intersect_1 = _ClipOp___init__impl__1556860112(1);
  }
  Companion_1.prototype._get_Difference__1821174478_sj27s7_k$ = function () {
    return this.Difference_1;
  };
  Companion_1.prototype._get_Intersect__3394243890_jgll85_k$ = function () {
    return this.Intersect_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_2365480816(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_16().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_16().Intersect_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_1050065697(this_0) {
    return this_0;
  }
  function ClipOp__equals_impl_976348605(this_0, other) {
    if (!(other instanceof ClipOp))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ClipOp ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  ClipOp.prototype.toString = function () {
    return ClipOp__toString_impl_2365480816(this.value_1);
  };
  ClipOp.prototype.hashCode = function () {
    return ClipOp__hashCode_impl_1050065697(this.value_1);
  };
  ClipOp.prototype.equals = function (other) {
    return ClipOp__equals_impl_976348605(this.value_1, other);
  };
  ClipOp.$metadata$ = {
    simpleName: 'ClipOp',
    kind: 'class',
    interfaces: []
  };
  function hsvToRgbComponent($this, n, h, s, v) {
    var k = (n + h / 60.0) % 6.0;
    var tmp = v * s;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_minOf_0 = 4 - k;
        tmp$ret$0 = Math.min(k, tmp0_minOf_0, 1.0);
        break $l$block;
      }
      var tmp1_max_0 = tmp$ret$0;
      tmp$ret$1 = Math.max(0.0, tmp1_max_0);
      break $l$block_0;
    }
    return v - tmp * tmp$ret$1;
  }
  function hslToRgbComponent($this, n, h, s, l) {
    var k = (n + h / 30.0) % 12.0;
    var tmp$ret$0;
    $l$block: {
      var tmp0_min_0 = 1.0 - l;
      tmp$ret$0 = Math.min(l, tmp0_min_0);
      break $l$block;
    }
    var a = s * tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_minOf_0 = k - 3;
        var tmp2_minOf_0 = 9 - k;
        tmp$ret$1 = Math.min(tmp1_minOf_0, tmp2_minOf_0, 1.0);
        break $l$block_0;
      }
      var tmp3_max_0 = tmp$ret$1;
      tmp$ret$2 = Math.max(-1.0, tmp3_max_0);
      break $l$block_1;
    }
    return l - a * tmp$ret$2;
  }
  function _Color___init__impl__1643258666(value) {
    new ULong(value);
    return value;
  }
  function _Color___get_value__impl__103472842(this_0) {
    return this_0;
  }
  function _Color___get_colorSpace__impl__3101194496(this_0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp2_getColorSpace_0 = ColorSpaces_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_and_0 = _Color___get_value__impl__103472842(this_0);
          tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
          break $l$block;
        }
        var tmp1_toInt_0 = tmp$ret$0;
        tmp$ret$1 = _ULong___get_data__impl__934646663(tmp1_toInt_0).toInt_1tsl84_k$();
        break $l$block_0;
      }
      var tmp3_getColorSpace_0 = tmp$ret$1;
      tmp$ret$2 = tmp2_getColorSpace_0._get_ColorSpacesArray__1895385346_vcgooy_k$()[tmp3_getColorSpace_0];
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function Color__convert_impl_1733625821(this_0, colorSpace) {
    if (colorSpace.equals(_Color___get_colorSpace__impl__3101194496(this_0))) {
      return this_0;
    }
    var tmp = _Color___get_colorSpace__impl__3101194496(this_0);
    var connector = connect$default(tmp, colorSpace, null, 2, null);
    var color = getComponents(this_0);
    connector.transform_aitls9_k$(color);
    Unit_getInstance();
    return Color_0(color[0], color[1], color[2], color[3], colorSpace);
  }
  function _Color___get_red__impl__3514328746(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_and_0 = _Color___get_value__impl__103472842(this_0);
      tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
      break $l$block;
    }
    if (equals(tmp$ret$0, _ULong___init__impl__737756120(new Long(0, 0)))) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_shr_0 = _Color___get_value__impl__103472842(this_0);
            tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_shr_0).ushr_rr8rvr_k$(48));
            break $l$block_0;
          }
          var tmp2_and_0 = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp2_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(255, 0)))));
          break $l$block_1;
        }
        var tmp3_toFloat_0 = tmp$ret$2;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__934646663(tmp3_toFloat_0));
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4 / 255.0;
    } else {
      {
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp4_shr_0 = _Color___get_value__impl__103472842(this_0);
              tmp$ret$5 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp4_shr_0).ushr_rr8rvr_k$(48));
              break $l$block_4;
            }
            var tmp5_and_0 = tmp$ret$5;
            tmp$ret$6 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp5_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
            break $l$block_5;
          }
          var tmp6_toShort_0 = tmp$ret$6;
          tmp$ret$7 = _ULong___get_data__impl__934646663(tmp6_toShort_0).toShort_ja8oqn_k$();
          break $l$block_6;
        }
        tmp = Float16__toFloat_impl_393420621(_Float16___init__impl__928116680(tmp$ret$7));
      }
    }
    return tmp;
  }
  function _Color___get_green__impl__714316024(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_and_0 = _Color___get_value__impl__103472842(this_0);
      tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
      break $l$block;
    }
    if (equals(tmp$ret$0, _ULong___init__impl__737756120(new Long(0, 0)))) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_shr_0 = _Color___get_value__impl__103472842(this_0);
            tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_shr_0).ushr_rr8rvr_k$(40));
            break $l$block_0;
          }
          var tmp2_and_0 = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp2_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(255, 0)))));
          break $l$block_1;
        }
        var tmp3_toFloat_0 = tmp$ret$2;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__934646663(tmp3_toFloat_0));
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4 / 255.0;
    } else {
      {
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp4_shr_0 = _Color___get_value__impl__103472842(this_0);
              tmp$ret$5 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp4_shr_0).ushr_rr8rvr_k$(32));
              break $l$block_4;
            }
            var tmp5_and_0 = tmp$ret$5;
            tmp$ret$6 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp5_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
            break $l$block_5;
          }
          var tmp6_toShort_0 = tmp$ret$6;
          tmp$ret$7 = _ULong___get_data__impl__934646663(tmp6_toShort_0).toShort_ja8oqn_k$();
          break $l$block_6;
        }
        tmp = Float16__toFloat_impl_393420621(_Float16___init__impl__928116680(tmp$ret$7));
      }
    }
    return tmp;
  }
  function _Color___get_blue__impl__2245137193(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_and_0 = _Color___get_value__impl__103472842(this_0);
      tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
      break $l$block;
    }
    if (equals(tmp$ret$0, _ULong___init__impl__737756120(new Long(0, 0)))) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_shr_0 = _Color___get_value__impl__103472842(this_0);
            tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_shr_0).ushr_rr8rvr_k$(32));
            break $l$block_0;
          }
          var tmp2_and_0 = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp2_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(255, 0)))));
          break $l$block_1;
        }
        var tmp3_toFloat_0 = tmp$ret$2;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__934646663(tmp3_toFloat_0));
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4 / 255.0;
    } else {
      {
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp4_shr_0 = _Color___get_value__impl__103472842(this_0);
              tmp$ret$5 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp4_shr_0).ushr_rr8rvr_k$(16));
              break $l$block_4;
            }
            var tmp5_and_0 = tmp$ret$5;
            tmp$ret$6 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp5_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
            break $l$block_5;
          }
          var tmp6_toShort_0 = tmp$ret$6;
          tmp$ret$7 = _ULong___get_data__impl__934646663(tmp6_toShort_0).toShort_ja8oqn_k$();
          break $l$block_6;
        }
        tmp = Float16__toFloat_impl_393420621(_Float16___init__impl__928116680(tmp$ret$7));
      }
    }
    return tmp;
  }
  function _Color___get_alpha__impl__1955818045(this_0) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_and_0 = _Color___get_value__impl__103472842(this_0);
      tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
      break $l$block;
    }
    if (equals(tmp$ret$0, _ULong___init__impl__737756120(new Long(0, 0)))) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_shr_0 = _Color___get_value__impl__103472842(this_0);
            tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_shr_0).ushr_rr8rvr_k$(56));
            break $l$block_0;
          }
          var tmp2_and_0 = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp2_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(255, 0)))));
          break $l$block_1;
        }
        var tmp3_toFloat_0 = tmp$ret$2;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__934646663(tmp3_toFloat_0));
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4 / 255.0;
    } else {
      {
        var tmp$ret$8;
        $l$block_7: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp4_shr_0 = _Color___get_value__impl__103472842(this_0);
              tmp$ret$5 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp4_shr_0).ushr_rr8rvr_k$(6));
              break $l$block_4;
            }
            var tmp5_and_0 = tmp$ret$5;
            tmp$ret$6 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp5_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(1023, 0)))));
            break $l$block_5;
          }
          var tmp6_toFloat_0 = tmp$ret$6;
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = ulongToDouble(_ULong___get_data__impl__934646663(tmp6_toFloat_0));
            break $l$block_6;
          }
          tmp$ret$8 = tmp$ret$7;
          break $l$block_7;
        }
        tmp = tmp$ret$8 / 1023.0;
      }
    }
    return tmp;
  }
  function Color__component1_impl_1328950454(this_0) {
    return _Color___get_red__impl__3514328746(this_0);
  }
  function Color__component2_impl_1357579605(this_0) {
    return _Color___get_green__impl__714316024(this_0);
  }
  function Color__component3_impl_1386208756(this_0) {
    return _Color___get_blue__impl__2245137193(this_0);
  }
  function Color__component4_impl_1414837907(this_0) {
    return _Color___get_alpha__impl__1955818045(this_0);
  }
  function Color__component5_impl_1443467058(this_0) {
    return _Color___get_colorSpace__impl__3101194496(this_0);
  }
  function Color__copy_impl_1608855157(this_0, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__3101194496(this_0));
  }
  function Color__copy$default_impl_868080376(this_0, alpha, red, green, blue, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      alpha = _Color___get_alpha__impl__1955818045(this_0);
    if (!(($mask0 & 2) === 0))
      red = _Color___get_red__impl__3514328746(this_0);
    if (!(($mask0 & 4) === 0))
      green = _Color___get_green__impl__714316024(this_0);
    if (!(($mask0 & 8) === 0))
      blue = _Color___get_blue__impl__2245137193(this_0);
    return Color__copy_impl_1608855157(this_0, alpha, red, green, blue);
  }
  function Color__toString_impl_3223390046(this_0) {
    return 'Color(' + _Color___get_red__impl__3514328746(this_0) + ', ' + _Color___get_green__impl__714316024(this_0) + ', ' + _Color___get_blue__impl__2245137193(this_0) + ', ' + _Color___get_alpha__impl__1955818045(this_0) + ', ' + _Color___get_colorSpace__impl__3101194496(this_0)._get_name__804168992_das4rk_k$() + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Black_1 = Color_1(new Long(-16777216, 0));
    this.DarkGray_1 = Color_1(new Long(-12303292, 0));
    this.Gray_1 = Color_1(new Long(-7829368, 0));
    this.LightGray_1 = Color_1(new Long(-3355444, 0));
    this.White_1 = Color_1(new Long(-1, 0));
    this.Red_1 = Color_1(new Long(-65536, 0));
    this.Green_1 = Color_1(new Long(-16711936, 0));
    this.Blue_1 = Color_1(new Long(-16776961, 0));
    this.Yellow_1 = Color_1(new Long(-256, 0));
    this.Cyan_1 = Color_1(new Long(-16711681, 0));
    this.Magenta_1 = Color_1(new Long(-65281, 0));
    this.Transparent_1 = Color_2(0);
    this.Unspecified_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance()._get_Unspecified__2946689370_maq9wm_k$());
  }
  Companion_2.prototype._get_Black__2204520402_og72wn_k$ = function () {
    return this.Black_1;
  };
  Companion_2.prototype._get_DarkGray__1611480018_693n9l_k$ = function () {
    return this.DarkGray_1;
  };
  Companion_2.prototype._get_Gray__768647208_736ohf_k$ = function () {
    return this.Gray_1;
  };
  Companion_2.prototype._get_LightGray__454895864_i0v4v1_k$ = function () {
    return this.LightGray_1;
  };
  Companion_2.prototype._get_White__2802292968_ol52dp_k$ = function () {
    return this.White_1;
  };
  Companion_2.prototype._get_Red__856394304_v28wit_k$ = function () {
    return this.Red_1;
  };
  Companion_2.prototype._get_Green__2353328462_x84rcj_k$ = function () {
    return this.Green_1;
  };
  Companion_2.prototype._get_Blue__763869457_yqoq6u_k$ = function () {
    return this.Blue_1;
  };
  Companion_2.prototype._get_Yellow__2663399671_ls6k3g_k$ = function () {
    return this.Yellow_1;
  };
  Companion_2.prototype._get_Cyan__765161320_jwslrn_k$ = function () {
    return this.Cyan_1;
  };
  Companion_2.prototype._get_Magenta__2117434280_3iper7_k$ = function () {
    return this.Magenta_1;
  };
  Companion_2.prototype._get_Transparent__4141046431_mt84kc_k$ = function () {
    return this.Transparent_1;
  };
  Companion_2.prototype._get_Unspecified__2946689370_rgrx8f_k$ = function () {
    return this.Unspecified_1;
  };
  Companion_2.prototype.hsv_eajx0j_k$ = function (hue, saturation, value, alpha, colorSpace) {
    {
      var tmp0_require_0 = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= value ? value <= 1.0 : false : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'HSV (' + hue + ', ' + saturation + ', ' + value + ') must be in range (0..360, 0..1, 0..1)';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var red = hsvToRgbComponent(this, 5, hue, saturation, value);
    var green = hsvToRgbComponent(this, 3, hue, saturation, value);
    var blue = hsvToRgbComponent(this, 1, hue, saturation, value);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  Companion_2.prototype.hsv$default_w3tbkz_k$ = function (hue, saturation, value, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
    return this.hsv_eajx0j_k$(hue, saturation, value, alpha, colorSpace);
  };
  Companion_2.prototype.hsl_k9g3wz_k$ = function (hue, saturation, lightness, alpha, colorSpace) {
    {
      var tmp0_require_0 = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= lightness ? lightness <= 1.0 : false : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'HSL (' + hue + ', ' + saturation + ', ' + lightness + ') must be in range (0..360, 0..1, 0..1)';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var red = hslToRgbComponent(this, 0, hue, saturation, lightness);
    var green = hslToRgbComponent(this, 8, hue, saturation, lightness);
    var blue = hslToRgbComponent(this, 4, hue, saturation, lightness);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  Companion_2.prototype.hsl$default_i48oj1_k$ = function (hue, saturation, lightness, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
    return this.hsl_k9g3wz_k$(hue, saturation, lightness, alpha, colorSpace);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_17() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_1907974927(this_0) {
    return ULong__hashCode_impl_3902167073(this_0);
  }
  function Color__equals_impl_1209643307(this_0, other) {
    if (!(other instanceof Color))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Color ? other.value_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  Color.prototype.toString = function () {
    return Color__toString_impl_3223390046(this.value_1);
  };
  Color.prototype.hashCode = function () {
    return Color__hashCode_impl_1907974927(this.value_1);
  };
  Color.prototype.equals = function (other) {
    return Color__equals_impl_1209643307(this.value_1, other);
  };
  Color.$metadata$ = {
    simpleName: 'Color',
    kind: 'class',
    interfaces: []
  };
  function takeOrElse(_this__1828080292, block) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !equals(_Color___get_value__impl__103472842(_this__1828080292), _Color___get_value__impl__103472842(Companion_getInstance_17().Unspecified_1));
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = _this__1828080292;
    } else {
      {
        tmp = block().value_1;
      }
    }
    return tmp;
  }
  function toArgb(_this__1828080292) {
    var colorSpace = _Color___get_colorSpace__impl__3101194496(_this__1828080292);
    if (colorSpace._get_isSrgb__61479879_10lq6f_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_shr_0 = _Color___get_value__impl__103472842(_this__1828080292);
          tmp$ret$0 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_shr_0).ushr_rr8rvr_k$(32));
          break $l$block;
        }
        var tmp1_toInt_0 = tmp$ret$0;
        tmp$ret$1 = _ULong___get_data__impl__934646663(tmp1_toInt_0).toInt_1tsl84_k$();
        break $l$block_0;
      }
      return tmp$ret$1;
    }
    var color = getComponents(_this__1828080292);
    connect$default(colorSpace, null, null, 3, null).transform_aitls9_k$(color);
    Unit_getInstance();
    return numberToInt(color[3] * 255.0 + 0.5) << 24 | numberToInt(color[0] * 255.0 + 0.5) << 16 | numberToInt(color[1] * 255.0 + 0.5) << 8 | numberToInt(color[2] * 255.0 + 0.5);
  }
  function _get_isSpecified__2832019115_0(_this__1828080292) {
    return !equals(_Color___get_value__impl__103472842(_this__1828080292), _Color___get_value__impl__103472842(Companion_getInstance_17().Unspecified_1));
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    {
      var tmp;
      var tmp_0;
      var tmp_1;
      var containsLower = colorSpace.getMinValue_7r60q4_k$(0);
      if (red <= colorSpace.getMaxValue_8bwqwu_k$(0) ? containsLower <= red : false) {
        var containsLower_0 = colorSpace.getMinValue_7r60q4_k$(1);
        tmp_1 = green <= colorSpace.getMaxValue_8bwqwu_k$(1) ? containsLower_0 <= green : false;
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        var containsLower_1 = colorSpace.getMinValue_7r60q4_k$(2);
        tmp_0 = blue <= colorSpace.getMaxValue_8bwqwu_k$(2) ? containsLower_1 <= blue : false;
      } else {
        {
          tmp_0 = false;
        }
      }
      if (tmp_0) {
        tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
      } else {
        {
          tmp = false;
        }
      }
      var tmp0_require_0 = tmp;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    if (colorSpace._get_isSrgb__61479879_10lq6f_k$()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _ULong___init__impl__737756120(toLong(argb));
            break $l$block_0;
          }
          var tmp1_and_0 = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(-1, 0)))));
          break $l$block_1;
        }
        var tmp2_shl_0 = tmp$ret$2;
        tmp$ret$3 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp2_shl_0).shl_po5ip6_k$(32));
        break $l$block_2;
      }
      return _Color___init__impl__1643258666(tmp$ret$3);
    }
    {
      var tmp3_require_0 = colorSpace._get_componentCount__2124466745_z4up15_k$() === 3;
      {
      }
      if (!tmp3_require_0) {
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = 'Color only works with ColorSpaces with 3 components';
          break $l$block_3;
        }
        var message_1_0 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    var id = colorSpace._get_id__1413120976_ndc34g_k$();
    {
      var tmp4_require_0 = !(id === Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$());
      {
      }
      if (!tmp4_require_0) {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = 'Unknown color space, please use a color space in ColorSpaces';
          break $l$block_4;
        }
        var message_1_1 = tmp$ret$5;
        throw IllegalArgumentException_init_$Create$(toString(message_1_1));
      }
    }
    var r = _Float16___init__impl__928116680_0(red);
    var g = _Float16___init__impl__928116680_0(green);
    var b = _Float16___init__impl__928116680_0(blue);
    var tmp$ret$7;
    $l$block_6: {
      var tmp$ret$6;
      $l$block_5: {
        tmp$ret$6 = Math.min(alpha, 1.0);
        break $l$block_5;
      }
      var tmp5_max_0 = tmp$ret$6;
      tmp$ret$7 = Math.max(0.0, tmp5_max_0);
      break $l$block_6;
    }
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    $l$block_24: {
      var tmp$ret$22;
      $l$block_21: {
        var tmp$ret$18;
        $l$block_17: {
          var tmp$ret$14;
          $l$block_13: {
            var tmp$ret$10;
            $l$block_9: {
              var tmp$ret$9;
              $l$block_8: {
                var tmp$ret$8;
                $l$block_7: {
                  var tmp6_toULong_0 = _Float16___get_halfValue__impl__3794738623(r);
                  tmp$ret$8 = _ULong___init__impl__737756120(toLong(tmp6_toULong_0));
                  break $l$block_7;
                }
                var tmp7_and_0 = tmp$ret$8;
                tmp$ret$9 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp7_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
                break $l$block_8;
              }
              var tmp8_shl_0 = tmp$ret$9;
              tmp$ret$10 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp8_shl_0).shl_po5ip6_k$(48));
              break $l$block_9;
            }
            var tmp12_or_0 = tmp$ret$10;
            var tmp$ret$13;
            $l$block_12: {
              var tmp$ret$12;
              $l$block_11: {
                var tmp$ret$11;
                $l$block_10: {
                  var tmp9_toULong_0 = _Float16___get_halfValue__impl__3794738623(g);
                  tmp$ret$11 = _ULong___init__impl__737756120(toLong(tmp9_toULong_0));
                  break $l$block_10;
                }
                var tmp10_and_0 = tmp$ret$11;
                tmp$ret$12 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp10_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
                break $l$block_11;
              }
              var tmp11_shl_0 = tmp$ret$12;
              tmp$ret$13 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp11_shl_0).shl_po5ip6_k$(32));
              break $l$block_12;
            }
            var tmp13_or_0 = tmp$ret$13;
            tmp$ret$14 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp12_or_0).or_s401rn_k$(_ULong___get_data__impl__934646663(tmp13_or_0)));
            break $l$block_13;
          }
          var tmp17_or_0 = tmp$ret$14;
          var tmp$ret$17;
          $l$block_16: {
            var tmp$ret$16;
            $l$block_15: {
              var tmp$ret$15;
              $l$block_14: {
                var tmp14_toULong_0 = _Float16___get_halfValue__impl__3794738623(b);
                tmp$ret$15 = _ULong___init__impl__737756120(toLong(tmp14_toULong_0));
                break $l$block_14;
              }
              var tmp15_and_0 = tmp$ret$15;
              tmp$ret$16 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp15_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(65535, 0)))));
              break $l$block_15;
            }
            var tmp16_shl_0 = tmp$ret$16;
            tmp$ret$17 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp16_shl_0).shl_po5ip6_k$(16));
            break $l$block_16;
          }
          var tmp18_or_0 = tmp$ret$17;
          tmp$ret$18 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp17_or_0).or_s401rn_k$(_ULong___get_data__impl__934646663(tmp18_or_0)));
          break $l$block_17;
        }
        var tmp21_or_0 = tmp$ret$18;
        var tmp$ret$21;
        $l$block_20: {
          var tmp$ret$20;
          $l$block_19: {
            var tmp$ret$19;
            $l$block_18: {
              tmp$ret$19 = _ULong___init__impl__737756120(toLong(a));
              break $l$block_18;
            }
            var tmp19_and_0 = tmp$ret$19;
            tmp$ret$20 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp19_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(1023, 0)))));
            break $l$block_19;
          }
          var tmp20_shl_0 = tmp$ret$20;
          tmp$ret$21 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp20_shl_0).shl_po5ip6_k$(6));
          break $l$block_20;
        }
        var tmp22_or_0 = tmp$ret$21;
        tmp$ret$22 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp21_or_0).or_s401rn_k$(_ULong___get_data__impl__934646663(tmp22_or_0)));
        break $l$block_21;
      }
      var tmp24_or_0 = tmp$ret$22;
      var tmp$ret$24;
      $l$block_23: {
        var tmp$ret$23;
        $l$block_22: {
          tmp$ret$23 = _ULong___init__impl__737756120(toLong(id));
          break $l$block_22;
        }
        var tmp23_and_0 = tmp$ret$23;
        tmp$ret$24 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp23_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(63, 0)))));
        break $l$block_23;
      }
      var tmp25_or_0 = tmp$ret$24;
      tmp$ret$25 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp24_or_0).or_s401rn_k$(_ULong___get_data__impl__934646663(tmp25_or_0)));
      break $l$block_24;
    }
    return _Color___init__impl__1643258666(tmp$ret$25);
  }
  function Color$default(red, green, blue, alpha, colorSpace, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      alpha = 1.0;
    if (!(($mask0 & 16) === 0))
      colorSpace = ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
    return Color_0(red, green, blue, alpha, colorSpace);
  }
  function Color_1(color) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _ULong___init__impl__737756120(color);
          break $l$block;
        }
        var tmp0_and_0 = tmp$ret$0;
        tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_and_0).and_jhajnj_k$(_ULong___get_data__impl__934646663(_ULong___init__impl__737756120(new Long(-1, 0)))));
        break $l$block_0;
      }
      var tmp1_shl_0 = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp1_shl_0).shl_po5ip6_k$(32));
      break $l$block_1;
    }
    return _Color___init__impl__1643258666(tmp$ret$2);
  }
  function luminance(_this__1828080292) {
    var colorSpace = _Color___get_colorSpace__impl__3101194496(_this__1828080292);
    {
      var tmp0_require_0 = equals(colorSpace._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$());
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace._get_model__3438435784_rju6in_k$()));
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE())._get_eotf__796281135_d632gf_k$();
    var r = eotf(_Color___get_red__impl__3514328746(_this__1828080292));
    var g = eotf(_Color___get_green__impl__714316024(_this__1828080292));
    var b = eotf(_Color___get_blue__impl__2245137193(_this__1828080292));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__1828080292, background) {
    var fg = Color__convert_impl_1733625821(_this__1828080292, _Color___get_colorSpace__impl__3101194496(background));
    var bgA = _Color___get_alpha__impl__1955818045(background);
    var fgA = _Color___get_alpha__impl__1955818045(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp$ret$0;
    $l$block: {
      var tmp0_compositeComponent_0 = _Color___get_red__impl__3514328746(fg);
      var tmp1_compositeComponent_0 = _Color___get_red__impl__3514328746(background);
      tmp$ret$0 = a === 0.0 ? 0.0 : (tmp0_compositeComponent_0 * fgA + tmp1_compositeComponent_0 * bgA * (1.0 - fgA)) / a;
      break $l$block;
    }
    var r = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_compositeComponent_0 = _Color___get_green__impl__714316024(fg);
      var tmp3_compositeComponent_0 = _Color___get_green__impl__714316024(background);
      tmp$ret$1 = a === 0.0 ? 0.0 : (tmp2_compositeComponent_0 * fgA + tmp3_compositeComponent_0 * bgA * (1.0 - fgA)) / a;
      break $l$block_0;
    }
    var g = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      var tmp4_compositeComponent_0 = _Color___get_blue__impl__2245137193(fg);
      var tmp5_compositeComponent_0 = _Color___get_blue__impl__2245137193(background);
      tmp$ret$2 = a === 0.0 ? 0.0 : (tmp4_compositeComponent_0 * fgA + tmp5_compositeComponent_0 * bgA * (1.0 - fgA)) / a;
      break $l$block_1;
    }
    var b = tmp$ret$2;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__3101194496(background));
  }
  function getComponents(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([_Color___get_red__impl__3514328746(_this__1828080292), _Color___get_green__impl__714316024(_this__1828080292), _Color___get_blue__impl__2245137193(_this__1828080292), _Color___get_alpha__impl__1955818045(_this__1828080292)]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Color_2(color) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _ULong___init__impl__737756120(toLong(color));
        break $l$block;
      }
      var tmp0_shl_0 = tmp$ret$0;
      tmp$ret$1 = _ULong___init__impl__737756120(_ULong___get_data__impl__934646663(tmp0_shl_0).shl_po5ip6_k$(32));
      break $l$block_0;
    }
    return _Color___init__impl__1643258666(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function compositeComponent(fgC, bgC, fgA, bgA, a) {
    return a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.tint_oz42r0_k$ = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  Companion_3.prototype.tint$default_1preek_k$ = function (color, blendMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      blendMode = Companion_getInstance_14()._get_SrcIn__2696791784_8xfbac_k$();
    return this.tint_oz42r0_k$(color, blendMode);
  };
  Companion_3.prototype.colorMatrix_16db4l_k$ = function (colorMatrix) {
    return actualColorMatrixColorFilter(colorMatrix);
  };
  Companion_3.prototype.lighting_pskwdw_k$ = function (multiply, add) {
    return actualLightingColorFilter(multiply, add);
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_18() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_18();
    this.nativeColorFilter_1 = nativeColorFilter;
  }
  ColorFilter.prototype._get_nativeColorFilter__1140715437_iv5hnx_k$ = function () {
    return this.nativeColorFilter_1;
  };
  ColorFilter.$metadata$ = {
    simpleName: 'ColorFilter',
    kind: 'class',
    interfaces: []
  };
  function _ColorMatrix___init__impl__4085069835(values) {
    return values;
  }
  function _ColorMatrix___init__impl__4085069835_0(values, $mask0, $marker) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      values = tmp$ret$0;
    }
    var tmp = _ColorMatrix___init__impl__4085069835(values);
    return tmp;
  }
  function _ColorMatrix___get_values__impl__3586322562(this_0) {
    return this_0;
  }
  function ColorMatrix__get_impl_748256763(this_0, row, column) {
    return _ColorMatrix___get_values__impl__3586322562(this_0)[imul(row, 5) + column | 0];
  }
  function ColorMatrix__set_impl_187144303(this_0, row, column, v) {
    _ColorMatrix___get_values__impl__3586322562(this_0)[imul(row, 5) + column | 0] = v;
  }
  function ColorMatrix__reset_impl_621929122(this_0) {
    var tmp = _ColorMatrix___get_values__impl__3586322562(this_0);
    fill$default(tmp, 0.0, 0, 0, 6, null);
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[0] = 1.0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = 1.0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = 1.0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[18] = 1.0;
    }
  }
  function ColorMatrix__set_impl_187144303_0(this_0, src) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = _ColorMatrix___get_values__impl__3586322562(src);
      var tmp1_copyInto_0 = _ColorMatrix___get_values__impl__3586322562(this_0);
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyInto_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_copyInto_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto_0);
      tmp$ret$4 = tmp1_copyInto_0;
      break $l$block_3;
    }
    Unit_getInstance();
  }
  function rotateInternal($this, degrees, block) {
    ColorMatrix__reset_impl_621929122($this);
    var radians = degrees * _get_PI__1413096114() / 180.0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.cos(radians);
      break $l$block;
    }
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = Math.sin(radians);
      break $l$block_0;
    }
    var sine = tmp$ret$1;
    block(cosine, sine);
  }
  function ColorMatrix__timesAssign_impl_1796151516(this_0, colorMatrix) {
    var v00 = dot(this_0, this_0, 0, colorMatrix, 0);
    var v01 = dot(this_0, this_0, 0, colorMatrix, 1);
    var v02 = dot(this_0, this_0, 0, colorMatrix, 2);
    var v03 = dot(this_0, this_0, 0, colorMatrix, 3);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _ColorMatrix___get_values__impl__3586322562(this_0)[0];
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[4];
      break $l$block_0;
    }
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _ColorMatrix___get_values__impl__3586322562(this_0)[1];
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[9];
      break $l$block_2;
    }
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _ColorMatrix___get_values__impl__3586322562(this_0)[2];
      break $l$block_3;
    }
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[14];
      break $l$block_4;
    }
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _ColorMatrix___get_values__impl__3586322562(this_0)[3];
      break $l$block_5;
    }
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[19];
      break $l$block_6;
    }
    var tmp_6 = tmp_4 + tmp_5 * tmp$ret$7;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _ColorMatrix___get_values__impl__3586322562(this_0)[4];
      break $l$block_7;
    }
    var v04 = tmp_6 + tmp$ret$8;
    var v10 = dot(this_0, this_0, 1, colorMatrix, 0);
    var v11 = dot(this_0, this_0, 1, colorMatrix, 1);
    var v12 = dot(this_0, this_0, 1, colorMatrix, 2);
    var v13 = dot(this_0, this_0, 1, colorMatrix, 3);
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _ColorMatrix___get_values__impl__3586322562(this_0)[5];
      break $l$block_8;
    }
    var tmp_7 = tmp$ret$9;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[4];
      break $l$block_9;
    }
    var tmp_8 = tmp_7 * tmp$ret$10;
    var tmp$ret$11;
    $l$block_10: {
      tmp$ret$11 = _ColorMatrix___get_values__impl__3586322562(this_0)[6];
      break $l$block_10;
    }
    var tmp_9 = tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      tmp$ret$12 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[9];
      break $l$block_11;
    }
    var tmp_10 = tmp_8 + tmp_9 * tmp$ret$12;
    var tmp$ret$13;
    $l$block_12: {
      tmp$ret$13 = _ColorMatrix___get_values__impl__3586322562(this_0)[7];
      break $l$block_12;
    }
    var tmp_11 = tmp$ret$13;
    var tmp$ret$14;
    $l$block_13: {
      tmp$ret$14 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[14];
      break $l$block_13;
    }
    var tmp_12 = tmp_10 + tmp_11 * tmp$ret$14;
    var tmp$ret$15;
    $l$block_14: {
      tmp$ret$15 = _ColorMatrix___get_values__impl__3586322562(this_0)[8];
      break $l$block_14;
    }
    var tmp_13 = tmp$ret$15;
    var tmp$ret$16;
    $l$block_15: {
      tmp$ret$16 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[19];
      break $l$block_15;
    }
    var tmp_14 = tmp_12 + tmp_13 * tmp$ret$16;
    var tmp$ret$17;
    $l$block_16: {
      tmp$ret$17 = _ColorMatrix___get_values__impl__3586322562(this_0)[9];
      break $l$block_16;
    }
    var v14 = tmp_14 + tmp$ret$17;
    var v20 = dot(this_0, this_0, 2, colorMatrix, 0);
    var v21 = dot(this_0, this_0, 2, colorMatrix, 1);
    var v22 = dot(this_0, this_0, 2, colorMatrix, 2);
    var v23 = dot(this_0, this_0, 2, colorMatrix, 3);
    var tmp$ret$18;
    $l$block_17: {
      tmp$ret$18 = _ColorMatrix___get_values__impl__3586322562(this_0)[10];
      break $l$block_17;
    }
    var tmp_15 = tmp$ret$18;
    var tmp$ret$19;
    $l$block_18: {
      tmp$ret$19 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[4];
      break $l$block_18;
    }
    var tmp_16 = tmp_15 * tmp$ret$19;
    var tmp$ret$20;
    $l$block_19: {
      tmp$ret$20 = _ColorMatrix___get_values__impl__3586322562(this_0)[11];
      break $l$block_19;
    }
    var tmp_17 = tmp$ret$20;
    var tmp$ret$21;
    $l$block_20: {
      tmp$ret$21 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[9];
      break $l$block_20;
    }
    var tmp_18 = tmp_16 + tmp_17 * tmp$ret$21;
    var tmp$ret$22;
    $l$block_21: {
      tmp$ret$22 = _ColorMatrix___get_values__impl__3586322562(this_0)[12];
      break $l$block_21;
    }
    var tmp_19 = tmp$ret$22;
    var tmp$ret$23;
    $l$block_22: {
      tmp$ret$23 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[14];
      break $l$block_22;
    }
    var tmp_20 = tmp_18 + tmp_19 * tmp$ret$23;
    var tmp$ret$24;
    $l$block_23: {
      tmp$ret$24 = _ColorMatrix___get_values__impl__3586322562(this_0)[13];
      break $l$block_23;
    }
    var tmp_21 = tmp$ret$24;
    var tmp$ret$25;
    $l$block_24: {
      tmp$ret$25 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[19];
      break $l$block_24;
    }
    var tmp_22 = tmp_20 + tmp_21 * tmp$ret$25;
    var tmp$ret$26;
    $l$block_25: {
      tmp$ret$26 = _ColorMatrix___get_values__impl__3586322562(this_0)[14];
      break $l$block_25;
    }
    var v24 = tmp_22 + tmp$ret$26;
    var v30 = dot(this_0, this_0, 3, colorMatrix, 0);
    var v31 = dot(this_0, this_0, 3, colorMatrix, 1);
    var v32 = dot(this_0, this_0, 3, colorMatrix, 2);
    var v33 = dot(this_0, this_0, 3, colorMatrix, 3);
    var tmp$ret$27;
    $l$block_26: {
      tmp$ret$27 = _ColorMatrix___get_values__impl__3586322562(this_0)[15];
      break $l$block_26;
    }
    var tmp_23 = tmp$ret$27;
    var tmp$ret$28;
    $l$block_27: {
      tmp$ret$28 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[4];
      break $l$block_27;
    }
    var tmp_24 = tmp_23 * tmp$ret$28;
    var tmp$ret$29;
    $l$block_28: {
      tmp$ret$29 = _ColorMatrix___get_values__impl__3586322562(this_0)[16];
      break $l$block_28;
    }
    var tmp_25 = tmp$ret$29;
    var tmp$ret$30;
    $l$block_29: {
      tmp$ret$30 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[9];
      break $l$block_29;
    }
    var tmp_26 = tmp_24 + tmp_25 * tmp$ret$30;
    var tmp$ret$31;
    $l$block_30: {
      tmp$ret$31 = _ColorMatrix___get_values__impl__3586322562(this_0)[17];
      break $l$block_30;
    }
    var tmp_27 = tmp$ret$31;
    var tmp$ret$32;
    $l$block_31: {
      tmp$ret$32 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[14];
      break $l$block_31;
    }
    var tmp_28 = tmp_26 + tmp_27 * tmp$ret$32;
    var tmp$ret$33;
    $l$block_32: {
      tmp$ret$33 = _ColorMatrix___get_values__impl__3586322562(this_0)[18];
      break $l$block_32;
    }
    var tmp_29 = tmp$ret$33;
    var tmp$ret$34;
    $l$block_33: {
      tmp$ret$34 = _ColorMatrix___get_values__impl__3586322562(colorMatrix)[19];
      break $l$block_33;
    }
    var tmp_30 = tmp_28 + tmp_29 * tmp$ret$34;
    var tmp$ret$35;
    $l$block_34: {
      tmp$ret$35 = _ColorMatrix___get_values__impl__3586322562(this_0)[19];
      break $l$block_34;
    }
    var v34 = tmp_30 + tmp$ret$35;
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[0] = v00;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[1] = v01;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[2] = v02;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[3] = v03;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[4] = v04;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[5] = v10;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = v11;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[7] = v12;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[8] = v13;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[9] = v14;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[10] = v20;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[11] = v21;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = v22;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[13] = v23;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[14] = v24;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[15] = v30;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[16] = v31;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[17] = v32;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[18] = v33;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[19] = v34;
    }
  }
  function dot($this, m1, row, m2, column) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _ColorMatrix___get_values__impl__3586322562(m1)[imul(row, 5) + 0 | 0];
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _ColorMatrix___get_values__impl__3586322562(m2)[0 + column | 0];
      break $l$block_0;
    }
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _ColorMatrix___get_values__impl__3586322562(m1)[imul(row, 5) + 1 | 0];
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _ColorMatrix___get_values__impl__3586322562(m2)[5 + column | 0];
      break $l$block_2;
    }
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _ColorMatrix___get_values__impl__3586322562(m1)[imul(row, 5) + 2 | 0];
      break $l$block_3;
    }
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _ColorMatrix___get_values__impl__3586322562(m2)[10 + column | 0];
      break $l$block_4;
    }
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _ColorMatrix___get_values__impl__3586322562(m1)[imul(row, 5) + 3 | 0];
      break $l$block_5;
    }
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _ColorMatrix___get_values__impl__3586322562(m2)[15 + column | 0];
      break $l$block_6;
    }
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function ColorMatrix__setToSaturation_impl_1155403970(this_0, sat) {
    ColorMatrix__reset_impl_621929122(this_0);
    var invSat = 1 - sat;
    var R = 0.213 * invSat;
    var G = 0.715 * invSat;
    var B = 0.072 * invSat;
    {
      var tmp0_set_0 = R + sat;
      _ColorMatrix___get_values__impl__3586322562(this_0)[0] = tmp0_set_0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[1] = G;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[2] = B;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[5] = R;
    }
    {
      var tmp1_set_0 = G + sat;
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = tmp1_set_0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[7] = B;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[10] = R;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[11] = G;
    }
    {
      var tmp2_set_0 = B + sat;
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = tmp2_set_0;
    }
  }
  function ColorMatrix__setToScale_impl_70658780(this_0, redScale, greenScale, blueScale, alphaScale) {
    ColorMatrix__reset_impl_621929122(this_0);
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[0] = redScale;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = greenScale;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = blueScale;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[18] = alphaScale;
    }
  }
  function ColorMatrix__setToRotateRed_impl_2028466672(this_0, degrees) {
    {
      ColorMatrix__reset_impl_621929122(this_0);
      var radians_1 = degrees * _get_PI__1413096114() / 180.0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.cos(radians_1);
        break $l$block;
      }
      var cosine_2 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Math.sin(radians_1);
        break $l$block_0;
      }
      var sine_3 = tmp$ret$1;
      {
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[12] = cosine_2;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[6] = cosine_2;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[7] = sine_3;
        }
        {
          var tmp0_set_0_5 = -sine_3;
          _ColorMatrix___get_values__impl__3586322562(this_0)[11] = tmp0_set_0_5;
        }
      }
    }
  }
  function ColorMatrix__setToRotateGreen_impl_3863109054(this_0, degrees) {
    {
      ColorMatrix__reset_impl_621929122(this_0);
      var radians_1 = degrees * _get_PI__1413096114() / 180.0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.cos(radians_1);
        break $l$block;
      }
      var cosine_2 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Math.sin(radians_1);
        break $l$block_0;
      }
      var sine_3 = tmp$ret$1;
      {
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[12] = cosine_2;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[0] = cosine_2;
        }
        {
          var tmp0_set_0_5 = -sine_3;
          _ColorMatrix___get_values__impl__3586322562(this_0)[2] = tmp0_set_0_5;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[10] = sine_3;
        }
      }
    }
  }
  function ColorMatrix__setToRotateBlue_impl_377588255(this_0, degrees) {
    {
      ColorMatrix__reset_impl_621929122(this_0);
      var radians_1 = degrees * _get_PI__1413096114() / 180.0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.cos(radians_1);
        break $l$block;
      }
      var cosine_2 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Math.sin(radians_1);
        break $l$block_0;
      }
      var sine_3 = tmp$ret$1;
      {
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[6] = cosine_2;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[0] = cosine_2;
        }
        {
          _ColorMatrix___get_values__impl__3586322562(this_0)[1] = sine_3;
        }
        {
          var tmp0_set_0_5 = -sine_3;
          _ColorMatrix___get_values__impl__3586322562(this_0)[5] = tmp0_set_0_5;
        }
      }
    }
  }
  function ColorMatrix__convertRgbToYuv_impl_3697357388(this_0) {
    ColorMatrix__reset_impl_621929122(this_0);
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[0] = 0.299;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[1] = 0.587;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[2] = 0.114;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[5] = -0.16874;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = -0.33126;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[7] = 0.5;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[10] = 0.5;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[11] = -0.41869;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = -0.08131;
    }
  }
  function ColorMatrix__convertYuvToRgb_impl_2443902470(this_0) {
    ColorMatrix__reset_impl_621929122(this_0);
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[2] = 1.402;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[5] = 1.0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[6] = -0.34414;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[7] = -0.71414;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[10] = 1.0;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[11] = 1.772;
    }
    {
      _ColorMatrix___get_values__impl__3586322562(this_0)[12] = 0.0;
    }
  }
  function ColorMatrix__toString_impl_3838978973(this_0) {
    return 'ColorMatrix(values=' + toString(this_0) + ')';
  }
  function ColorMatrix__hashCode_impl_2523563854(this_0) {
    return hashCode(this_0);
  }
  function ColorMatrix__equals_impl_3069499690(this_0, other) {
    if (!(other instanceof ColorMatrix_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ColorMatrix_0 ? other.values_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorMatrix_0(values) {
    this.values_1 = values;
  }
  ColorMatrix_0.prototype.toString = function () {
    return ColorMatrix__toString_impl_3838978973(this.values_1);
  };
  ColorMatrix_0.prototype.hashCode = function () {
    return ColorMatrix__hashCode_impl_2523563854(this.values_1);
  };
  ColorMatrix_0.prototype.equals = function (other) {
    return ColorMatrix__equals_impl_3069499690(this.values_1, other);
  };
  ColorMatrix_0.$metadata$ = {
    simpleName: 'ColorMatrix',
    kind: 'class',
    interfaces: []
  };
  function degrees(radians) {
    return 57.29578 * radians;
  }
  function _get_RadiansToDegrees__4132107281() {
    return RadiansToDegrees;
  }
  var RadiansToDegrees;
  function _FilterQuality___init__impl__2851942190(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__2382017862(this_0) {
    return this_0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.None_1 = _FilterQuality___init__impl__2851942190(0);
    this.Low_1 = _FilterQuality___init__impl__2851942190(1);
    this.Medium_1 = _FilterQuality___init__impl__2851942190(2);
    this.High_1 = _FilterQuality___init__impl__2851942190(3);
  }
  Companion_4.prototype._get_None__775034355_rgi9u4_k$ = function () {
    return this.None_1;
  };
  Companion_4.prototype._get_Low__856225757_7gcbvm_k$ = function () {
    return this.Low_1;
  };
  Companion_4.prototype._get_Medium__595818006_6eh6bb_k$ = function () {
    return this.Medium_1;
  };
  Companion_4.prototype._get_High__769307849_87nkxi_k$ = function () {
    return this.High_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_3197597658(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_19().None_1 ? 'None' : tmp0_subject === Companion_getInstance_19().Low_1 ? 'Low' : tmp0_subject === Companion_getInstance_19().Medium_1 ? 'Medium' : tmp0_subject === Companion_getInstance_19().High_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_1882182539(this_0) {
    return this_0;
  }
  function FilterQuality__equals_impl_1227493543(this_0, other) {
    if (!(other instanceof FilterQuality))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FilterQuality ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  FilterQuality.prototype.toString = function () {
    return FilterQuality__toString_impl_3197597658(this.value_1);
  };
  FilterQuality.prototype.hashCode = function () {
    return FilterQuality__hashCode_impl_1882182539(this.value_1);
  };
  FilterQuality.prototype.equals = function (other) {
    return FilterQuality__equals_impl_1227493543(this.value_1, other);
  };
  FilterQuality.$metadata$ = {
    simpleName: 'FilterQuality',
    kind: 'class',
    interfaces: []
  };
  function _get_One__856313611($this) {
    return $this.One_1;
  }
  function _get_NegativeOne__2213906912($this) {
    return $this.NegativeOne_1;
  }
  function _get_FP16_SIGN_SHIFT__2591411425($this) {
    return $this.FP16_SIGN_SHIFT_1;
  }
  function _get_FP16_SIGN_MASK__2294611309($this) {
    return $this.FP16_SIGN_MASK_1;
  }
  function _get_FP16_EXPONENT_SHIFT__904391215($this) {
    return $this.FP16_EXPONENT_SHIFT_1;
  }
  function _get_FP16_EXPONENT_MASK__3071475295($this) {
    return $this.FP16_EXPONENT_MASK_1;
  }
  function _get_FP16_SIGNIFICAND_MASK__2875941977($this) {
    return $this.FP16_SIGNIFICAND_MASK_1;
  }
  function _get_FP16_EXPONENT_BIAS__3061537842($this) {
    return $this.FP16_EXPONENT_BIAS_1;
  }
  function _get_FP16_COMBINED__768931484($this) {
    return $this.FP16_COMBINED_1;
  }
  function _get_FP16_EXPONENT_MAX__930363981($this) {
    return $this.FP16_EXPONENT_MAX_1;
  }
  function _get_FP32_SIGN_SHIFT__2753906203($this) {
    return $this.FP32_SIGN_SHIFT_1;
  }
  function _get_FP32_EXPONENT_SHIFT__2086942313($this) {
    return $this.FP32_EXPONENT_SHIFT_1;
  }
  function _get_FP32_EXPONENT_MASK__3525264101($this) {
    return $this.FP32_EXPONENT_MASK_1;
  }
  function _get_FP32_SIGNIFICAND_MASK__1141213715($this) {
    return $this.FP32_SIGNIFICAND_MASK_1;
  }
  function _get_FP32_EXPONENT_BIAS__3515326648($this) {
    return $this.FP32_EXPONENT_BIAS_1;
  }
  function _get_FP32_QNAN_MASK__3565203584($this) {
    return $this.FP32_QNAN_MASK_1;
  }
  function _get_FP32_DENORMAL_MAGIC__2798090885($this) {
    return $this.FP32_DENORMAL_MAGIC_1;
  }
  function _get_FP32_DENORMAL_FLOAT__2608076726($this) {
    return $this.FP32_DENORMAL_FLOAT_1;
  }
  function toCompareValue($this, value) {
    var tmp;
    if (!((value & 32768) === 0)) {
      tmp = 32768 - (value & 65535) | 0;
    } else {
      tmp = value & 65535;
    }
    return tmp;
  }
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e < -10) {
        } else {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          var tmp0 = out;
          out = tmp0 + 1 | 0;
          Unit_getInstance();
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__928116680(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__3794738623(this_0) {
    return this_0;
  }
  function _Float16___init__impl__928116680_0(value) {
    var tmp = _Float16___init__impl__928116680(floatToHalf(Companion_getInstance_20(), value));
    return tmp;
  }
  function _Float16___init__impl__928116680_1(value) {
    var tmp = _Float16___init__impl__928116680_0(value);
    return tmp;
  }
  function Float16__toByte_impl_2937055209(this_0) {
    return toByte(numberToInt(Float16__toFloat_impl_393420621(this_0)));
  }
  function Float16__toShort_impl_2976256301(this_0) {
    return toShort(numberToInt(Float16__toFloat_impl_393420621(this_0)));
  }
  function Float16__toInt_impl_403739802(this_0) {
    return numberToInt(Float16__toFloat_impl_393420621(this_0));
  }
  function Float16__toLong_impl_821349109(this_0) {
    return numberToLong(Float16__toFloat_impl_393420621(this_0));
  }
  function Float16__toFloat_impl_393420621(this_0) {
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    Companion_getInstance_20();
    var s = bits & 32768;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_fromBits_0 = FloatCompanionObject_getInstance();
          Companion_getInstance_20();
          var tmp1_fromBits_0 = 1056964608 + m | 0;
          tmp$ret$0 = floatFromBits(tmp1_fromBits_0);
          break $l$block;
        }
        var o = tmp$ret$0;
        o = o - Companion_getInstance_20().FP32_DENORMAL_FLOAT_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_20();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_20();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_20();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_20();
    var out = tmp_2 | tmp_3 << 23 | outM;
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_fromBits_0 = FloatCompanionObject_getInstance();
      tmp$ret$1 = floatFromBits(out);
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function Float16__toDouble_impl_546154944(this_0) {
    return Float16__toFloat_impl_393420621(this_0);
  }
  function Float16__toBits_impl_1222701739(this_0) {
    var tmp;
    if (Float16__isNaN_impl_14101181(this_0)) {
      tmp = _Float16___get_halfValue__impl__3794738623(Companion_getInstance_20().NaN_1);
    } else {
      tmp = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    }
    return tmp;
  }
  function Float16__toRawBits_impl_3999245467(this_0) {
    return _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
  }
  function Float16__toString_impl_653553024(this_0) {
    return Float16__toFloat_impl_393420621(this_0).toString();
  }
  function Float16__compareTo_impl_53331150(this_0, other) {
    if (Float16__isNaN_impl_14101181(this_0)) {
      return Float16__isNaN_impl_14101181(other) ? 0 : 1;
    } else if (Float16__isNaN_impl_14101181(other)) {
      return -1;
    }
    return compareTo(toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__3794738623(this_0)), toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__3794738623(other)));
  }
  function Float16__compareTo_impl_53331150_0(this_0, other) {
    var tmp = this_0.halfValue_1;
    return Float16__compareTo_impl_53331150(tmp, other instanceof Float16 ? other.halfValue_1 : THROW_CCE());
  }
  function _Float16___get_sign__impl__1755213316(this_0) {
    if (Float16__isNaN_impl_14101181(this_0)) {
      return Companion_getInstance_20().NaN_1;
    }
    if (Float16__compareTo_impl_53331150(this_0, Companion_getInstance_20().NegativeZero_1) < 0)
      return Companion_getInstance_20().NegativeOne_1;
    else if (Float16__compareTo_impl_53331150(this_0, Companion_getInstance_20().PositiveZero_1) > 0)
      return Companion_getInstance_20().One_1;
    else
      return this_0;
  }
  function Float16__withSign_impl_666516137(this_0, sign) {
    var tmp = _Float16___get_halfValue__impl__3794738623(sign);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32768;
    var tmp_1 = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    return _Float16___init__impl__928116680(toShort(tmp_0 | tmp_1 & 32767));
  }
  function Float16__absoluteValue_impl_2851857556(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    return _Float16___init__impl__928116680(toShort(tmp & 32767));
  }
  function Float16__round_impl_4007911104(this_0) {
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (e >= 14336 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (1 << (e - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__928116680(toShort(result));
  }
  function Float16__ceil_impl_3905852935(this_0) {
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (-(~(bits >> 15) & (!(e === 0) ? 1 : 0)) | 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & ((bits >> 15) - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__928116680(toShort(result));
  }
  function Float16__floor_impl_2619886338(this_0) {
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (bits > 32768 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & (-(bits >> 15) | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__928116680(toShort(result));
  }
  function Float16__trunc_impl_2458858850(this_0) {
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__928116680(toShort(result));
  }
  function _Float16___get_exponent__impl__230990802(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    var tmp_0 = tmp >>> 10 | 0;
    Companion_getInstance_20();
    var tmp_1 = tmp_0 & 31;
    Companion_getInstance_20();
    return tmp_1 - 15 | 0;
  }
  function _Float16___get_significand__impl__1260130426(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    return tmp & 1023;
  }
  function Float16__isNaN_impl_14101181(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 > 31744;
  }
  function Float16__isInfinite_impl_3721955854(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 === 31744;
  }
  function Float16__isFinite_impl_3762209171(this_0) {
    var tmp = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return !(tmp_0 === 31744);
  }
  function Float16__isNormalized_impl_3020088779(this_0) {
    var tmp;
    var tmp_0 = _Float16___get_halfValue__impl__3794738623(this_0);
    Companion_getInstance_20();
    if (!((tmp_0 & 31744) === 0)) {
      var tmp_1 = _Float16___get_halfValue__impl__3794738623(this_0);
      Companion_getInstance_20();
      var tmp_2 = tmp_1 & 31744;
      Companion_getInstance_20();
      tmp = !(tmp_2 === 31744);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function Float16__toHexString_impl_1453474461(this_0) {
    var o = StringBuilder_init_$Create$();
    var bits = _Float16___get_halfValue__impl__3794738623(this_0) & 65535;
    Companion_getInstance_20();
    var s = bits >>> 15 | 0;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    if (e === 31) {
      if (m === 0) {
        if (!(s === 0)) {
          o.append_t8oh9e_k$(_Char___init__impl__380027157(45));
          Unit_getInstance();
        }
        o.append_ssq29y_k$('Infinity');
        Unit_getInstance();
      } else {
        o.append_ssq29y_k$('NaN');
        Unit_getInstance();
      }
    } else {
      if (s === 1) {
        o.append_t8oh9e_k$(_Char___init__impl__380027157(45));
        Unit_getInstance();
      }
      if (e === 0) {
        if (m === 0) {
          o.append_ssq29y_k$('0x0.0p0');
          Unit_getInstance();
        } else {
          o.append_ssq29y_k$('0x0.');
          Unit_getInstance();
          var significand = toString_0(m, 16);
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = Regex_init_$Create$('0{2,}$');
              break $l$block;
            }
            var tmp0_replaceFirst_0 = tmp$ret$0;
            tmp$ret$1 = tmp0_replaceFirst_0.replaceFirst_hwe6o0_k$(significand, '');
            break $l$block_0;
          }
          o.append_ssq29y_k$(tmp$ret$1);
          Unit_getInstance();
          o.append_ssq29y_k$('p-14');
          Unit_getInstance();
        }
      } else {
        o.append_ssq29y_k$('0x1.');
        Unit_getInstance();
        var significand_0 = toString_0(m, 16);
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = Regex_init_$Create$('0{2,}$');
            break $l$block_1;
          }
          var tmp1_replaceFirst_0 = tmp$ret$2;
          tmp$ret$3 = tmp1_replaceFirst_0.replaceFirst_hwe6o0_k$(significand_0, '');
          break $l$block_2;
        }
        o.append_ssq29y_k$(tmp$ret$3);
        Unit_getInstance();
        o.append_t8oh9e_k$(_Char___init__impl__380027157(112));
        Unit_getInstance();
        Companion_getInstance_20();
        o.append_ssq29y_k$((e - 15 | 0).toString());
        Unit_getInstance();
      }
    }
    return o.toString();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Size_1 = 16;
    this.Epsilon_1 = _Float16___init__impl__928116680(5120);
    this.MaxExponent_1 = 15;
    this.MinExponent_1 = -14;
    this.LowestValue_1 = _Float16___init__impl__928116680(-1025);
    this.MaxValue_1 = _Float16___init__impl__928116680(31743);
    this.MinNormal_1 = _Float16___init__impl__928116680(1024);
    this.MinValue_1 = _Float16___init__impl__928116680(1);
    this.NaN_1 = _Float16___init__impl__928116680(32256);
    this.NegativeInfinity_1 = _Float16___init__impl__928116680(-1024);
    this.NegativeZero_1 = _Float16___init__impl__928116680(-32768);
    this.PositiveInfinity_1 = _Float16___init__impl__928116680(31744);
    this.PositiveZero_1 = _Float16___init__impl__928116680(0);
    this.One_1 = _Float16___init__impl__928116680_0(1.0);
    this.NegativeOne_1 = _Float16___init__impl__928116680_0(-1.0);
    this.FP16_SIGN_SHIFT_1 = 15;
    this.FP16_SIGN_MASK_1 = 32768;
    this.FP16_EXPONENT_SHIFT_1 = 10;
    this.FP16_EXPONENT_MASK_1 = 31;
    this.FP16_SIGNIFICAND_MASK_1 = 1023;
    this.FP16_EXPONENT_BIAS_1 = 15;
    this.FP16_COMBINED_1 = 32767;
    this.FP16_EXPONENT_MAX_1 = 31744;
    this.FP32_SIGN_SHIFT_1 = 31;
    this.FP32_EXPONENT_SHIFT_1 = 23;
    this.FP32_EXPONENT_MASK_1 = 255;
    this.FP32_SIGNIFICAND_MASK_1 = 8388607;
    this.FP32_EXPONENT_BIAS_1 = 127;
    this.FP32_QNAN_MASK_1 = 4194304;
    this.FP32_DENORMAL_MAGIC_1 = 1056964608;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_fromBits_0 = FloatCompanionObject_getInstance();
      var tmp1_fromBits_0 = 1056964608;
      tmp$ret$0 = floatFromBits(tmp1_fromBits_0);
      break $l$block;
    }
    tmp.FP32_DENORMAL_FLOAT_1 = tmp$ret$0;
  }
  Companion_5.prototype._get_Size__779484746_cw32a2_k$ = function () {
    return this.Size_1;
  };
  Companion_5.prototype._get_Epsilon__1834686727_otuesu_k$ = function () {
    return this.Epsilon_1;
  };
  Companion_5.prototype._get_MaxExponent__813478878_dgbobi_k$ = function () {
    return this.MaxExponent_1;
  };
  Companion_5.prototype._get_MinExponent__1287904944_las9tc_k$ = function () {
    return this.MinExponent_1;
  };
  Companion_5.prototype._get_LowestValue__2187804338_htrhon_k$ = function () {
    return this.LowestValue_1;
  };
  Companion_5.prototype._get_MaxValue__2976953054_47sbc5_k$ = function () {
    return this.MaxValue_1;
  };
  Companion_5.prototype._get_MinNormal__2164277176_n4m7sx_k$ = function () {
    return this.MinNormal_1;
  };
  Companion_5.prototype._get_MinValue__3749431628_nj5jpv_k$ = function () {
    return this.MinValue_1;
  };
  Companion_5.prototype._get_NaN__856270614_d19yeb_k$ = function () {
    return this.NaN_1;
  };
  Companion_5.prototype._get_NegativeInfinity__4265688270_sdv4bv_k$ = function () {
    return this.NegativeInfinity_1;
  };
  Companion_5.prototype._get_NegativeZero__4216509518_2ywmad_k$ = function () {
    return this.NegativeZero_1;
  };
  Companion_5.prototype._get_PositiveInfinity__3028216714_mi9qpb_k$ = function () {
    return this.PositiveInfinity_1;
  };
  Companion_5.prototype._get_PositiveZero__3259842826_4crnkh_k$ = function () {
    return this.PositiveZero_1;
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_20() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Float16__hashCode_impl_3633105201(this_0) {
    return this_0;
  }
  function Float16__equals_impl_460601293(this_0, other) {
    if (!(other instanceof Float16))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Float16 ? other.halfValue_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function Float16(halfValue) {
    Companion_getInstance_20();
    this.halfValue_1 = halfValue;
  }
  Float16.prototype.toString = function () {
    return Float16__toString_impl_653553024(this.halfValue_1);
  };
  Float16.prototype.compareTo_pe5tm2_k$ = function (other) {
    return Float16__compareTo_impl_53331150(this.halfValue_1, other);
  };
  Float16.prototype.compareTo_6thzaj_k$ = function (other) {
    return Float16__compareTo_impl_53331150_0(this, other);
  };
  Float16.prototype.hashCode = function () {
    return Float16__hashCode_impl_3633105201(this.halfValue_1);
  };
  Float16.prototype.equals = function (other) {
    return Float16__equals_impl_460601293(this.halfValue_1, other);
  };
  Float16.$metadata$ = {
    simpleName: 'Float16',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_21() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmap() {
    Companion_getInstance_21();
  }
  ImageBitmap.$metadata$ = {
    simpleName: 'ImageBitmap',
    kind: 'interface',
    interfaces: []
  };
  function _ImageBitmapConfig___init__impl__2333302867(value) {
    return value;
  }
  function _ImageBitmapConfig___get_value__impl__3342758721(this_0) {
    return this_0;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Argb8888__1 = _ImageBitmapConfig___init__impl__2333302867(0);
    this.Alpha8__1 = _ImageBitmapConfig___init__impl__2333302867(1);
    this.Rgb565__1 = _ImageBitmapConfig___init__impl__2333302867(2);
    this.F16__1 = _ImageBitmapConfig___init__impl__2333302867(3);
    this.Gpu_1 = _ImageBitmapConfig___init__impl__2333302867(4);
  }
  Companion_7.prototype._get_Argb8888__855990367_9t9805_k$ = function () {
    return this.Argb8888__1;
  };
  Companion_7.prototype._get_Alpha8__3042111377_h2jr8t_k$ = function () {
    return this.Alpha8__1;
  };
  Companion_7.prototype._get_Rgb565__792168964_34dts0_k$ = function () {
    return this.Rgb565__1;
  };
  Companion_7.prototype._get_F16__855985414_8roxby_k$ = function () {
    return this.F16__1;
  };
  Companion_7.prototype._get_Gpu__856077701_x23owv_k$ = function () {
    return this.Gpu_1;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_22() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_812706133(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_22().Argb8888__1 ? 'Argb8888' : tmp0_subject === Companion_getInstance_22().Alpha8__1 ? 'Alpha8' : tmp0_subject === Companion_getInstance_22().Rgb565__1 ? 'Rgb565' : tmp0_subject === Companion_getInstance_22().F16__1 ? 'F16' : tmp0_subject === Companion_getInstance_22().Gpu_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_3792258310(this_0) {
    return this_0;
  }
  function ImageBitmapConfig__equals_impl_3222775010(this_0, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ImageBitmapConfig ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_22();
    this.value_1 = value;
  }
  ImageBitmapConfig.prototype.toString = function () {
    return ImageBitmapConfig__toString_impl_812706133(this.value_1);
  };
  ImageBitmapConfig.prototype.hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_3792258310(this.value_1);
  };
  ImageBitmapConfig.prototype.equals = function (other) {
    return ImageBitmapConfig__equals_impl_3222775010(this.value_1, other);
  };
  ImageBitmapConfig.$metadata$ = {
    simpleName: 'ImageBitmapConfig',
    kind: 'class',
    interfaces: []
  };
  function _Matrix___init__impl__1578125120(values) {
    return values;
  }
  function _Matrix___init__impl__1578125120_0(values, $mask0, $marker) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      values = tmp$ret$0;
    }
    var tmp = _Matrix___init__impl__1578125120(values);
    return tmp;
  }
  function _Matrix___get_values__impl__926483447(this_0) {
    return this_0;
  }
  function Matrix__get_impl_2258511032(this_0, row, column) {
    return _Matrix___get_values__impl__926483447(this_0)[imul(row, 4) + column | 0];
  }
  function Matrix__set_impl_1697398572(this_0, row, column, v) {
    _Matrix___get_values__impl__926483447(this_0)[imul(row, 4) + column | 0] = v;
  }
  function Matrix__map_impl_460907122(this_0, point) {
    var x = _Offset___get_x__impl__2048295803(point);
    var y = _Offset___get_y__impl__3791106138(point);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(this_0)[3];
      break $l$block;
    }
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(this_0)[7];
      break $l$block_0;
    }
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[15];
      break $l$block_1;
    }
    var z = tmp_0 + tmp$ret$2;
    var pZ = z === 0.0 ? 0.0 : 1.0 / z;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block_2;
    }
    var tmp_1 = tmp$ret$3 * x;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_3;
    }
    var tmp_2 = tmp_1 + tmp$ret$4 * y;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[12];
      break $l$block_4;
    }
    var tmp_3 = pZ * (tmp_2 + tmp$ret$5);
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_5;
    }
    var tmp_4 = tmp$ret$6 * x;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_6;
    }
    var tmp_5 = tmp_4 + tmp$ret$7 * y;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[13];
      break $l$block_7;
    }
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_460907122_0(this_0, rect) {
    var p0 = Matrix__map_impl_460907122(this_0, Offset(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$()));
    var p1 = Matrix__map_impl_460907122(this_0, Offset(rect._get_left__802434852_d9qyp0_k$(), rect._get_bottom__2354915904_w3218g_k$()));
    var p3 = Matrix__map_impl_460907122(this_0, Offset(rect._get_right__3576132917_bvz45n_k$(), rect._get_top__857417180_e6hfbw_k$()));
    var p4 = Matrix__map_impl_460907122(this_0, Offset(rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$()));
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_min_0 = _Offset___get_x__impl__2048295803(p0);
        var tmp1_min_0 = _Offset___get_x__impl__2048295803(p1);
        tmp$ret$0 = Math.min(tmp0_min_0, tmp1_min_0);
        break $l$block;
      }
      var tmp4_min_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp2_min_0 = _Offset___get_x__impl__2048295803(p3);
        var tmp3_min_0 = _Offset___get_x__impl__2048295803(p4);
        tmp$ret$1 = Math.min(tmp2_min_0, tmp3_min_0);
        break $l$block_0;
      }
      var tmp5_min_0 = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp4_min_0, tmp5_min_0);
      break $l$block_1;
    }
    var left = tmp$ret$2;
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp6_min_0 = _Offset___get_y__impl__3791106138(p0);
        var tmp7_min_0 = _Offset___get_y__impl__3791106138(p1);
        tmp$ret$3 = Math.min(tmp6_min_0, tmp7_min_0);
        break $l$block_2;
      }
      var tmp10_min_0 = tmp$ret$3;
      var tmp$ret$4;
      $l$block_3: {
        var tmp8_min_0 = _Offset___get_y__impl__3791106138(p3);
        var tmp9_min_0 = _Offset___get_y__impl__3791106138(p4);
        tmp$ret$4 = Math.min(tmp8_min_0, tmp9_min_0);
        break $l$block_3;
      }
      var tmp11_min_0 = tmp$ret$4;
      tmp$ret$5 = Math.min(tmp10_min_0, tmp11_min_0);
      break $l$block_4;
    }
    var top = tmp$ret$5;
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$6;
      $l$block_5: {
        var tmp12_max_0 = _Offset___get_x__impl__2048295803(p0);
        var tmp13_max_0 = _Offset___get_x__impl__2048295803(p1);
        tmp$ret$6 = Math.max(tmp12_max_0, tmp13_max_0);
        break $l$block_5;
      }
      var tmp16_max_0 = tmp$ret$6;
      var tmp$ret$7;
      $l$block_6: {
        var tmp14_max_0 = _Offset___get_x__impl__2048295803(p3);
        var tmp15_max_0 = _Offset___get_x__impl__2048295803(p4);
        tmp$ret$7 = Math.max(tmp14_max_0, tmp15_max_0);
        break $l$block_6;
      }
      var tmp17_max_0 = tmp$ret$7;
      tmp$ret$8 = Math.max(tmp16_max_0, tmp17_max_0);
      break $l$block_7;
    }
    var right = tmp$ret$8;
    var tmp$ret$11;
    $l$block_10: {
      var tmp$ret$9;
      $l$block_8: {
        var tmp18_max_0 = _Offset___get_y__impl__3791106138(p0);
        var tmp19_max_0 = _Offset___get_y__impl__3791106138(p1);
        tmp$ret$9 = Math.max(tmp18_max_0, tmp19_max_0);
        break $l$block_8;
      }
      var tmp22_max_0 = tmp$ret$9;
      var tmp$ret$10;
      $l$block_9: {
        var tmp20_max_0 = _Offset___get_y__impl__3791106138(p3);
        var tmp21_max_0 = _Offset___get_y__impl__3791106138(p4);
        tmp$ret$10 = Math.max(tmp20_max_0, tmp21_max_0);
        break $l$block_9;
      }
      var tmp23_max_0 = tmp$ret$10;
      tmp$ret$11 = Math.max(tmp22_max_0, tmp23_max_0);
      break $l$block_10;
    }
    var bottom = tmp$ret$11;
    return new Rect(left, top, right, bottom);
  }
  function Matrix__map_impl_460907122_1(this_0, rect) {
    var p0 = Matrix__map_impl_460907122(this_0, Offset(rect._get_left__802434852_d9qyp0_k$(), rect._get_top__857417180_e6hfbw_k$()));
    var p1 = Matrix__map_impl_460907122(this_0, Offset(rect._get_left__802434852_d9qyp0_k$(), rect._get_bottom__2354915904_w3218g_k$()));
    var p3 = Matrix__map_impl_460907122(this_0, Offset(rect._get_right__3576132917_bvz45n_k$(), rect._get_top__857417180_e6hfbw_k$()));
    var p4 = Matrix__map_impl_460907122(this_0, Offset(rect._get_right__3576132917_bvz45n_k$(), rect._get_bottom__2354915904_w3218g_k$()));
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_min_0 = _Offset___get_x__impl__2048295803(p0);
        var tmp1_min_0 = _Offset___get_x__impl__2048295803(p1);
        tmp$ret$0 = Math.min(tmp0_min_0, tmp1_min_0);
        break $l$block;
      }
      var tmp4_min_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp2_min_0 = _Offset___get_x__impl__2048295803(p3);
        var tmp3_min_0 = _Offset___get_x__impl__2048295803(p4);
        tmp$ret$1 = Math.min(tmp2_min_0, tmp3_min_0);
        break $l$block_0;
      }
      var tmp5_min_0 = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp4_min_0, tmp5_min_0);
      break $l$block_1;
    }
    rect._set_left__587817776_z3piel_k$(tmp$ret$2);
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp6_min_0 = _Offset___get_y__impl__3791106138(p0);
        var tmp7_min_0 = _Offset___get_y__impl__3791106138(p1);
        tmp$ret$3 = Math.min(tmp6_min_0, tmp7_min_0);
        break $l$block_2;
      }
      var tmp10_min_0 = tmp$ret$3;
      var tmp$ret$4;
      $l$block_3: {
        var tmp8_min_0 = _Offset___get_y__impl__3791106138(p3);
        var tmp9_min_0 = _Offset___get_y__impl__3791106138(p4);
        tmp$ret$4 = Math.min(tmp8_min_0, tmp9_min_0);
        break $l$block_3;
      }
      var tmp11_min_0 = tmp$ret$4;
      tmp$ret$5 = Math.min(tmp10_min_0, tmp11_min_0);
      break $l$block_4;
    }
    rect._set_top__296304720_3vxdu5_k$(tmp$ret$5);
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$6;
      $l$block_5: {
        var tmp12_max_0 = _Offset___get_x__impl__2048295803(p0);
        var tmp13_max_0 = _Offset___get_x__impl__2048295803(p1);
        tmp$ret$6 = Math.max(tmp12_max_0, tmp13_max_0);
        break $l$block_5;
      }
      var tmp16_max_0 = tmp$ret$6;
      var tmp$ret$7;
      $l$block_6: {
        var tmp14_max_0 = _Offset___get_x__impl__2048295803(p3);
        var tmp15_max_0 = _Offset___get_x__impl__2048295803(p4);
        tmp$ret$7 = Math.max(tmp14_max_0, tmp15_max_0);
        break $l$block_6;
      }
      var tmp17_max_0 = tmp$ret$7;
      tmp$ret$8 = Math.max(tmp16_max_0, tmp17_max_0);
      break $l$block_7;
    }
    rect._set_right__1217970857_ioxeng_k$(tmp$ret$8);
    var tmp$ret$11;
    $l$block_10: {
      var tmp$ret$9;
      $l$block_8: {
        var tmp18_max_0 = _Offset___get_y__impl__3791106138(p0);
        var tmp19_max_0 = _Offset___get_y__impl__3791106138(p1);
        tmp$ret$9 = Math.max(tmp18_max_0, tmp19_max_0);
        break $l$block_8;
      }
      var tmp22_max_0 = tmp$ret$9;
      var tmp$ret$10;
      $l$block_9: {
        var tmp20_max_0 = _Offset___get_y__impl__3791106138(p3);
        var tmp21_max_0 = _Offset___get_y__impl__3791106138(p4);
        tmp$ret$10 = Math.max(tmp20_max_0, tmp21_max_0);
        break $l$block_9;
      }
      var tmp23_max_0 = tmp$ret$10;
      tmp$ret$11 = Math.max(tmp22_max_0, tmp23_max_0);
      break $l$block_10;
    }
    rect._set_bottom__2266336076_l6gf1r_k$(tmp$ret$11);
  }
  function Matrix__timesAssign_impl_1469297305(this_0, m) {
    var v00 = dot_0(this_0, 0, m, 0);
    var v01 = dot_0(this_0, 0, m, 1);
    var v02 = dot_0(this_0, 0, m, 2);
    var v03 = dot_0(this_0, 0, m, 3);
    var v10 = dot_0(this_0, 1, m, 0);
    var v11 = dot_0(this_0, 1, m, 1);
    var v12 = dot_0(this_0, 1, m, 2);
    var v13 = dot_0(this_0, 1, m, 3);
    var v20 = dot_0(this_0, 2, m, 0);
    var v21 = dot_0(this_0, 2, m, 1);
    var v22 = dot_0(this_0, 2, m, 2);
    var v23 = dot_0(this_0, 2, m, 3);
    var v30 = dot_0(this_0, 3, m, 0);
    var v31 = dot_0(this_0, 3, m, 1);
    var v32 = dot_0(this_0, 3, m, 2);
    var v33 = dot_0(this_0, 3, m, 3);
    {
      _Matrix___get_values__impl__926483447(this_0)[0] = v00;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[1] = v01;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[2] = v02;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[3] = v03;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[4] = v10;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[5] = v11;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[6] = v12;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[7] = v13;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[8] = v20;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[9] = v21;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[10] = v22;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[11] = v23;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[12] = v30;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[13] = v31;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[14] = v32;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[15] = v33;
    }
  }
  function Matrix__toString_impl_3024696064(this_0) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[3];
      break $l$block_2;
    }
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_3;
    }
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_4;
    }
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_5;
    }
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[7];
      break $l$block_6;
    }
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[8];
      break $l$block_7;
    }
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[9];
      break $l$block_8;
    }
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = _Matrix___get_values__impl__926483447(this_0)[10];
      break $l$block_9;
    }
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    $l$block_10: {
      tmp$ret$11 = _Matrix___get_values__impl__926483447(this_0)[11];
      break $l$block_10;
    }
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      tmp$ret$12 = _Matrix___get_values__impl__926483447(this_0)[12];
      break $l$block_11;
    }
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    $l$block_12: {
      tmp$ret$13 = _Matrix___get_values__impl__926483447(this_0)[13];
      break $l$block_12;
    }
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    $l$block_13: {
      tmp$ret$14 = _Matrix___get_values__impl__926483447(this_0)[14];
      break $l$block_13;
    }
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    $l$block_14: {
      tmp$ret$15 = _Matrix___get_values__impl__926483447(this_0)[15];
      break $l$block_14;
    }
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__invert_impl_601240470(this_0) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block;
    }
    var a00 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_0;
    }
    var a01 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_1;
    }
    var a02 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[3];
      break $l$block_2;
    }
    var a03 = tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_3;
    }
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_4;
    }
    var a11 = tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_5;
    }
    var a12 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[7];
      break $l$block_6;
    }
    var a13 = tmp$ret$7;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[8];
      break $l$block_7;
    }
    var a20 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[9];
      break $l$block_8;
    }
    var a21 = tmp$ret$9;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = _Matrix___get_values__impl__926483447(this_0)[10];
      break $l$block_9;
    }
    var a22 = tmp$ret$10;
    var tmp$ret$11;
    $l$block_10: {
      tmp$ret$11 = _Matrix___get_values__impl__926483447(this_0)[11];
      break $l$block_10;
    }
    var a23 = tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      tmp$ret$12 = _Matrix___get_values__impl__926483447(this_0)[12];
      break $l$block_11;
    }
    var a30 = tmp$ret$12;
    var tmp$ret$13;
    $l$block_12: {
      tmp$ret$13 = _Matrix___get_values__impl__926483447(this_0)[13];
      break $l$block_12;
    }
    var a31 = tmp$ret$13;
    var tmp$ret$14;
    $l$block_13: {
      tmp$ret$14 = _Matrix___get_values__impl__926483447(this_0)[14];
      break $l$block_13;
    }
    var a32 = tmp$ret$14;
    var tmp$ret$15;
    $l$block_14: {
      tmp$ret$15 = _Matrix___get_values__impl__926483447(this_0)[15];
      break $l$block_14;
    }
    var a33 = tmp$ret$15;
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    {
      var tmp0_set_0 = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[0] = tmp0_set_0;
    }
    {
      var tmp1_set_0 = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[1] = tmp1_set_0;
    }
    {
      var tmp2_set_0 = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[2] = tmp2_set_0;
    }
    {
      var tmp3_set_0 = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[3] = tmp3_set_0;
    }
    {
      var tmp4_set_0 = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[4] = tmp4_set_0;
    }
    {
      var tmp5_set_0 = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[5] = tmp5_set_0;
    }
    {
      var tmp6_set_0 = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[6] = tmp6_set_0;
    }
    {
      var tmp7_set_0 = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[7] = tmp7_set_0;
    }
    {
      var tmp8_set_0 = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[8] = tmp8_set_0;
    }
    {
      var tmp9_set_0 = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[9] = tmp9_set_0;
    }
    {
      var tmp10_set_0 = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[10] = tmp10_set_0;
    }
    {
      var tmp11_set_0 = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[11] = tmp11_set_0;
    }
    {
      var tmp12_set_0 = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[12] = tmp12_set_0;
    }
    {
      var tmp13_set_0 = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[13] = tmp13_set_0;
    }
    {
      var tmp14_set_0 = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[14] = tmp14_set_0;
    }
    {
      var tmp15_set_0 = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
      _Matrix___get_values__impl__926483447(this_0)[15] = tmp15_set_0;
    }
  }
  function Matrix__reset_impl_277335583(this_0) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            {
              var tmp0_set_0 = c === r ? 1.0 : 0.0;
              _Matrix___get_values__impl__926483447(this_0)[imul(r, 4) + c | 0] = tmp0_set_0;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__setFrom_impl_3965827618(this_0, matrix) {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _Matrix___get_values__impl__926483447(this_0)[i] = _Matrix___get_values__impl__926483447(matrix)[i];
      }
       while (inductionVariable <= 15);
  }
  function Matrix__rotateX_impl_4089776529(this_0, degrees) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_cos_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$0 = Math.cos(tmp0_cos_0);
      break $l$block;
    }
    var c = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_sin_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$1 = Math.sin(tmp1_sin_0);
      break $l$block_0;
    }
    var s = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_1;
    }
    var a01 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_2;
    }
    var a02 = tmp$ret$3;
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_3;
    }
    var a11 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_4;
    }
    var a12 = tmp$ret$5;
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[9];
      break $l$block_5;
    }
    var a21 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[10];
      break $l$block_6;
    }
    var a22 = tmp$ret$7;
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[13];
      break $l$block_7;
    }
    var a31 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[14];
      break $l$block_8;
    }
    var a32 = tmp$ret$9;
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    {
      _Matrix___get_values__impl__926483447(this_0)[1] = v01;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[2] = v02;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[5] = v11;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[6] = v12;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[9] = v21;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[10] = v22;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[13] = v31;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[14] = v32;
    }
  }
  function Matrix__rotateY_impl_4118405680(this_0, degrees) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_cos_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$0 = Math.cos(tmp0_cos_0);
      break $l$block;
    }
    var c = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_sin_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$1 = Math.sin(tmp1_sin_0);
      break $l$block_0;
    }
    var s = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block_1;
    }
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_2;
    }
    var a02 = tmp$ret$3;
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_3;
    }
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_4;
    }
    var a12 = tmp$ret$5;
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[8];
      break $l$block_5;
    }
    var a20 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[10];
      break $l$block_6;
    }
    var a22 = tmp$ret$7;
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[12];
      break $l$block_7;
    }
    var a30 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[14];
      break $l$block_8;
    }
    var a32 = tmp$ret$9;
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    {
      _Matrix___get_values__impl__926483447(this_0)[0] = v00;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[2] = v02;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[4] = v10;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[6] = v12;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[8] = v20;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[10] = v22;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[12] = v30;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[14] = v32;
    }
  }
  function Matrix__rotateZ_impl_4147034831(this_0, degrees) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_cos_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$0 = Math.cos(tmp0_cos_0);
      break $l$block;
    }
    var c = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_sin_0 = degrees * _get_PI__1413096114() / 180.0;
      tmp$ret$1 = Math.sin(tmp1_sin_0);
      break $l$block_0;
    }
    var s = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block_1;
    }
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_2;
    }
    var a10 = tmp$ret$3;
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_3;
    }
    var a01 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_4;
    }
    var a11 = tmp$ret$5;
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_5;
    }
    var a02 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_6;
    }
    var a12 = tmp$ret$7;
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[3];
      break $l$block_7;
    }
    var a03 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[7];
      break $l$block_8;
    }
    var a13 = tmp$ret$9;
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    {
      _Matrix___get_values__impl__926483447(this_0)[0] = v00;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[1] = v01;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[2] = v02;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[3] = v03;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[4] = v10;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[5] = v11;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[6] = v12;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[7] = v13;
    }
  }
  function Matrix__scale_impl_3878037252(this_0, x, y, z) {
    var tmp0_array = this_0;
    var tmp1_index0 = 0;
    var tmp2_index1 = 0;
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Matrix___get_values__impl__926483447(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0];
        break $l$block;
      }
      var tmp0_set_0 = tmp$ret$0 * x;
      _Matrix___get_values__impl__926483447(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0] = tmp0_set_0;
    }
    var tmp3_array = this_0;
    var tmp4_index0 = 0;
    var tmp5_index1 = 1;
    {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _Matrix___get_values__impl__926483447(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0];
        break $l$block_0;
      }
      var tmp1_set_0 = tmp$ret$1 * x;
      _Matrix___get_values__impl__926483447(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0] = tmp1_set_0;
    }
    var tmp6_array = this_0;
    var tmp7_index0 = 0;
    var tmp8_index1 = 2;
    {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = _Matrix___get_values__impl__926483447(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0];
        break $l$block_1;
      }
      var tmp2_set_0 = tmp$ret$2 * x;
      _Matrix___get_values__impl__926483447(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0] = tmp2_set_0;
    }
    var tmp9_array = this_0;
    var tmp10_index0 = 0;
    var tmp11_index1 = 3;
    {
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = _Matrix___get_values__impl__926483447(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0];
        break $l$block_2;
      }
      var tmp3_set_0 = tmp$ret$3 * x;
      _Matrix___get_values__impl__926483447(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0] = tmp3_set_0;
    }
    var tmp12_array = this_0;
    var tmp13_index0 = 1;
    var tmp14_index1 = 0;
    {
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = _Matrix___get_values__impl__926483447(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0];
        break $l$block_3;
      }
      var tmp4_set_0 = tmp$ret$4 * y;
      _Matrix___get_values__impl__926483447(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0] = tmp4_set_0;
    }
    var tmp15_array = this_0;
    var tmp16_index0 = 1;
    var tmp17_index1 = 1;
    {
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = _Matrix___get_values__impl__926483447(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0];
        break $l$block_4;
      }
      var tmp5_set_0 = tmp$ret$5 * y;
      _Matrix___get_values__impl__926483447(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0] = tmp5_set_0;
    }
    var tmp18_array = this_0;
    var tmp19_index0 = 1;
    var tmp20_index1 = 2;
    {
      var tmp$ret$6;
      $l$block_5: {
        tmp$ret$6 = _Matrix___get_values__impl__926483447(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0];
        break $l$block_5;
      }
      var tmp6_set_0 = tmp$ret$6 * y;
      _Matrix___get_values__impl__926483447(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0] = tmp6_set_0;
    }
    var tmp21_array = this_0;
    var tmp22_index0 = 1;
    var tmp23_index1 = 3;
    {
      var tmp$ret$7;
      $l$block_6: {
        tmp$ret$7 = _Matrix___get_values__impl__926483447(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0];
        break $l$block_6;
      }
      var tmp7_set_0 = tmp$ret$7 * y;
      _Matrix___get_values__impl__926483447(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0] = tmp7_set_0;
    }
    var tmp24_array = this_0;
    var tmp25_index0 = 2;
    var tmp26_index1 = 0;
    {
      var tmp$ret$8;
      $l$block_7: {
        tmp$ret$8 = _Matrix___get_values__impl__926483447(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0];
        break $l$block_7;
      }
      var tmp8_set_0 = tmp$ret$8 * z;
      _Matrix___get_values__impl__926483447(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0] = tmp8_set_0;
    }
    var tmp27_array = this_0;
    var tmp28_index0 = 2;
    var tmp29_index1 = 1;
    {
      var tmp$ret$9;
      $l$block_8: {
        tmp$ret$9 = _Matrix___get_values__impl__926483447(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0];
        break $l$block_8;
      }
      var tmp9_set_0 = tmp$ret$9 * z;
      _Matrix___get_values__impl__926483447(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0] = tmp9_set_0;
    }
    var tmp30_array = this_0;
    var tmp31_index0 = 2;
    var tmp32_index1 = 2;
    {
      var tmp$ret$10;
      $l$block_9: {
        tmp$ret$10 = _Matrix___get_values__impl__926483447(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0];
        break $l$block_9;
      }
      var tmp10_set_0 = tmp$ret$10 * z;
      _Matrix___get_values__impl__926483447(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0] = tmp10_set_0;
    }
    var tmp33_array = this_0;
    var tmp34_index0 = 2;
    var tmp35_index1 = 3;
    {
      var tmp$ret$11;
      $l$block_10: {
        tmp$ret$11 = _Matrix___get_values__impl__926483447(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0];
        break $l$block_10;
      }
      var tmp11_set_0 = tmp$ret$11 * z;
      _Matrix___get_values__impl__926483447(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0] = tmp11_set_0;
    }
  }
  function Matrix__scale$default_impl_2562774151(this_0, x, y, z, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = 1.0;
    if (!(($mask0 & 2) === 0))
      y = 1.0;
    if (!(($mask0 & 4) === 0))
      z = 1.0;
    return Matrix__scale_impl_3878037252(this_0, x, y, z);
  }
  function Matrix__translate_impl_89757952(this_0, x, y, z) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(this_0)[0];
      break $l$block;
    }
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(this_0)[4];
      break $l$block_0;
    }
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(this_0)[8];
      break $l$block_1;
    }
    var tmp_1 = tmp_0 + tmp$ret$2 * z;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(this_0)[12];
      break $l$block_2;
    }
    var t1 = tmp_1 + tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(this_0)[1];
      break $l$block_3;
    }
    var tmp_2 = tmp$ret$4 * x;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(this_0)[5];
      break $l$block_4;
    }
    var tmp_3 = tmp_2 + tmp$ret$5 * y;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(this_0)[9];
      break $l$block_5;
    }
    var tmp_4 = tmp_3 + tmp$ret$6 * z;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(this_0)[13];
      break $l$block_6;
    }
    var t2 = tmp_4 + tmp$ret$7;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(this_0)[2];
      break $l$block_7;
    }
    var tmp_5 = tmp$ret$8 * x;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(this_0)[6];
      break $l$block_8;
    }
    var tmp_6 = tmp_5 + tmp$ret$9 * y;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = _Matrix___get_values__impl__926483447(this_0)[10];
      break $l$block_9;
    }
    var tmp_7 = tmp_6 + tmp$ret$10 * z;
    var tmp$ret$11;
    $l$block_10: {
      tmp$ret$11 = _Matrix___get_values__impl__926483447(this_0)[14];
      break $l$block_10;
    }
    var t3 = tmp_7 + tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      tmp$ret$12 = _Matrix___get_values__impl__926483447(this_0)[3];
      break $l$block_11;
    }
    var tmp_8 = tmp$ret$12 * x;
    var tmp$ret$13;
    $l$block_12: {
      tmp$ret$13 = _Matrix___get_values__impl__926483447(this_0)[7];
      break $l$block_12;
    }
    var tmp_9 = tmp_8 + tmp$ret$13 * y;
    var tmp$ret$14;
    $l$block_13: {
      tmp$ret$14 = _Matrix___get_values__impl__926483447(this_0)[11];
      break $l$block_13;
    }
    var tmp_10 = tmp_9 + tmp$ret$14 * z;
    var tmp$ret$15;
    $l$block_14: {
      tmp$ret$15 = _Matrix___get_values__impl__926483447(this_0)[15];
      break $l$block_14;
    }
    var t4 = tmp_10 + tmp$ret$15;
    {
      _Matrix___get_values__impl__926483447(this_0)[12] = t1;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[13] = t2;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[14] = t3;
    }
    {
      _Matrix___get_values__impl__926483447(this_0)[15] = t4;
    }
  }
  function Matrix__translate$default_impl_4233136771(this_0, x, y, z, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = 0.0;
    if (!(($mask0 & 2) === 0))
      y = 0.0;
    if (!(($mask0 & 4) === 0))
      z = 0.0;
    return Matrix__translate_impl_89757952(this_0, x, y, z);
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.ScaleX_1 = 0;
    this.SkewY_1 = 1;
    this.Perspective0__1 = 3;
    this.SkewX_1 = 4;
    this.ScaleY_1 = 5;
    this.Perspective1__1 = 7;
    this.ScaleZ_1 = 10;
    this.TranslateX_1 = 12;
    this.TranslateY_1 = 13;
    this.TranslateZ_1 = 14;
    this.Perspective2__1 = 15;
  }
  Companion_8.prototype._get_ScaleX__1565917277_pwb1i5_k$ = function () {
    return this.ScaleX_1;
  };
  Companion_8.prototype._get_SkewY__2690430274_qjasou_k$ = function () {
    return this.SkewY_1;
  };
  Companion_8.prototype._get_Perspective0__2820489783_odv64p_k$ = function () {
    return this.Perspective0__1;
  };
  Companion_8.prototype._get_SkewX__2690430243_qjaspp_k$ = function () {
    return this.SkewX_1;
  };
  Companion_8.prototype._get_ScaleY__1565917308_pwb1j0_k$ = function () {
    return this.ScaleY_1;
  };
  Companion_8.prototype._get_Perspective1__2820489814_odv63u_k$ = function () {
    return this.Perspective1__1;
  };
  Companion_8.prototype._get_ScaleZ__1565917339_pwb1jv_k$ = function () {
    return this.ScaleZ_1;
  };
  Companion_8.prototype._get_TranslateX__2235881697_y1xcm7_k$ = function () {
    return this.TranslateX_1;
  };
  Companion_8.prototype._get_TranslateY__2235881728_y1xclc_k$ = function () {
    return this.TranslateY_1;
  };
  Companion_8.prototype._get_TranslateZ__2235881759_y1xckh_k$ = function () {
    return this.TranslateZ_1;
  };
  Companion_8.prototype._get_Perspective2__2820489845_odv62z_k$ = function () {
    return this.Perspective2__1;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_23() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_1709280945(this_0) {
    return hashCode(this_0);
  }
  function Matrix__equals_impl_977034573(this_0, other) {
    if (!(other instanceof Matrix))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Matrix ? other.values_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_23();
    this.values_1 = values;
  }
  Matrix.prototype.toString = function () {
    return Matrix__toString_impl_3024696064(this.values_1);
  };
  Matrix.prototype.hashCode = function () {
    return Matrix__hashCode_impl_1709280945(this.values_1);
  };
  Matrix.prototype.equals = function (other) {
    return Matrix__equals_impl_977034573(this.values_1, other);
  };
  Matrix.$metadata$ = {
    simpleName: 'Matrix',
    kind: 'class',
    interfaces: []
  };
  function isIdentity(_this__1828080292) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = _Matrix___get_values__impl__926483447(_this__1828080292)[imul(row, 4) + column | 0];
              break $l$block;
            }
            if (!(tmp$ret$0 === expected)) {
              return false;
            } else {
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function dot_0(m1, row, m2, column) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(m1)[imul(row, 4) + 0 | 0];
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(m2)[0 + column | 0];
      break $l$block_0;
    }
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(m1)[imul(row, 4) + 1 | 0];
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(m2)[4 + column | 0];
      break $l$block_2;
    }
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(m1)[imul(row, 4) + 2 | 0];
      break $l$block_3;
    }
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(m2)[8 + column | 0];
      break $l$block_4;
    }
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(m1)[imul(row, 4) + 3 | 0];
      break $l$block_5;
    }
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(m2)[12 + column | 0];
      break $l$block_6;
    }
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.rect_1 = rect;
  }
  Rectangle.prototype._get_rect__807973095_dd1o13_k$ = function () {
    return this.rect_1;
  };
  Rectangle.prototype._get_bounds__2355650294_w2makq_k$ = function () {
    return this.rect_1;
  };
  Rectangle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    else {
    }
    if (!this.rect_1.equals(other.rect_1))
      return false;
    return true;
  };
  Rectangle.prototype.hashCode = function () {
    return this.rect_1.hashCode();
  };
  Rectangle.$metadata$ = {
    simpleName: 'Rectangle',
    kind: 'class',
    interfaces: []
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.roundRect_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.roundRect_1)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0 = Path_0();
        {
        }
        {
          tmp0_apply_0.addRoundRect_kr3fpw_k$(this.roundRect_1);
        }
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = null;
    }
    tmp.roundRectPath_1 = tmp_0;
  }
  Rounded.prototype._get_roundRect__2828794879_o8x5vl_k$ = function () {
    return this.roundRect_1;
  };
  Rounded.prototype._get_roundRectPath__3277546458_gtquxy_k$ = function () {
    return this.roundRectPath_1;
  };
  Rounded.prototype._get_bounds__2355650294_w2makq_k$ = function () {
    return _get_boundingRect__2386314403(this.roundRect_1);
  };
  Rounded.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    else {
    }
    if (!this.roundRect_1.equals(other.roundRect_1))
      return false;
    return true;
  };
  Rounded.prototype.hashCode = function () {
    return this.roundRect_1.hashCode();
  };
  Rounded.$metadata$ = {
    simpleName: 'Rounded',
    kind: 'class',
    interfaces: []
  };
  function Generic(path) {
    Outline.call(this);
    this.path_1 = path;
  }
  Generic.prototype._get_path__806022854_dbvv7q_k$ = function () {
    return this.path_1;
  };
  Generic.prototype._get_bounds__2355650294_w2makq_k$ = function () {
    return this.path_1.getBounds_568lnv_k$();
  };
  Generic.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Generic))
      return false;
    else {
    }
    if (!equals(this.path_1, other.path_1))
      return false;
    return true;
  };
  Generic.prototype.hashCode = function () {
    return hashCode(this.path_1);
  };
  Generic.$metadata$ = {
    simpleName: 'Generic',
    kind: 'class',
    interfaces: []
  };
  function Outline() {
  }
  Outline.$metadata$ = {
    simpleName: 'Outline',
    kind: 'class',
    interfaces: []
  };
  function hasSameCornerRadius(_this__1828080292) {
    var sameRadiusX = (_CornerRadius___get_x__impl__69289799(_this__1828080292._get_bottomLeftCornerRadius__788015858_gqpb7e_k$()) === _CornerRadius___get_x__impl__69289799(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$()) ? _CornerRadius___get_x__impl__69289799(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$()) === _CornerRadius___get_x__impl__69289799(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$()) : false) ? _CornerRadius___get_x__impl__69289799(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$()) === _CornerRadius___get_x__impl__69289799(_this__1828080292._get_topLeftCornerRadius__1877175950_b82mc6_k$()) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__1812100134(_this__1828080292._get_bottomLeftCornerRadius__788015858_gqpb7e_k$()) === _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$()) ? _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$()) === _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$()) : false) ? _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$()) === _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_topLeftCornerRadius__1877175950_b82mc6_k$()) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function Paint() {
  }
  Paint.$metadata$ = {
    simpleName: 'Paint',
    kind: 'interface',
    interfaces: []
  };
  function _get_DefaultAlpha__989817134() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__2727992212(value) {
    return value;
  }
  function _get_value__3683422336_1($this) {
    return $this;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Fill_1 = _PaintingStyle___init__impl__2727992212(0);
    this.Stroke_1 = _PaintingStyle___init__impl__2727992212(1);
  }
  Companion_9.prototype._get_Fill__767465736_kmbul_k$ = function () {
    return this.Fill_1;
  };
  Companion_9.prototype._get_Stroke__2068408243_162ry_k$ = function () {
    return this.Stroke_1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_24() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PaintingStyle__toString_impl_3650115636(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_24().Fill_1 ? 'Fill' : tmp0_subject === Companion_getInstance_24().Stroke_1 ? 'Stroke' : 'Unknown';
  }
  function PaintingStyle__hashCode_impl_2334700517(this_0) {
    return this_0;
  }
  function PaintingStyle__equals_impl_1639137153(this_0, other) {
    if (!(other instanceof PaintingStyle))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PaintingStyle ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PaintingStyle(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  PaintingStyle.prototype.toString = function () {
    return PaintingStyle__toString_impl_3650115636(this.value_1);
  };
  PaintingStyle.prototype.hashCode = function () {
    return PaintingStyle__hashCode_impl_2334700517(this.value_1);
  };
  PaintingStyle.prototype.equals = function (other) {
    return PaintingStyle__equals_impl_1639137153(this.value_1, other);
  };
  PaintingStyle.$metadata$ = {
    simpleName: 'PaintingStyle',
    kind: 'class',
    interfaces: []
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.combine_ydees8_k$ = function (operation, path1, path2) {
    var path = Path_0();
    if (path.op_eh4rey_k$(path1, path2, operation)) {
      return path;
    }
    throw IllegalArgumentException_init_$Create$('Path.combine() failed.  This may be due an invalid path; in particular, check for NaN values.');
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_25() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Path() {
    Companion_getInstance_25();
  }
  Path.$metadata$ = {
    simpleName: 'Path',
    kind: 'interface',
    interfaces: []
  };
  function Companion_11() {
    Companion_instance_11 = this;
  }
  Companion_11.prototype.cornerPathEffect_fpocxv_k$ = function (radius) {
    return actualCornerPathEffect(radius);
  };
  Companion_11.prototype.dashPathEffect_iz0b5x_k$ = function (intervals, phase) {
    return actualDashPathEffect(intervals, phase);
  };
  Companion_11.prototype.dashPathEffect$default_v98i9w_k$ = function (intervals, phase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      phase = 0.0;
    return this.dashPathEffect_iz0b5x_k$(intervals, phase);
  };
  Companion_11.prototype.chainPathEffect_8y4kg7_k$ = function (outer, inner) {
    return actualChainPathEffect(outer, inner);
  };
  Companion_11.prototype.stampedPathEffect_uzafgs_k$ = function (shape, advance, phase, style) {
    return actualStampedPathEffect(shape, advance, phase, style);
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_26() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PathEffect() {
    Companion_getInstance_26();
  }
  PathEffect.$metadata$ = {
    simpleName: 'PathEffect',
    kind: 'interface',
    interfaces: []
  };
  function _StampedPathEffectStyle___init__impl__3413494456(value) {
    return value;
  }
  function _get_value__3683422336_2($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.Translate_1 = _StampedPathEffectStyle___init__impl__3413494456(0);
    this.Rotate_1 = _StampedPathEffectStyle___init__impl__3413494456(1);
    this.Morph_1 = _StampedPathEffectStyle___init__impl__3413494456(2);
  }
  Companion_12.prototype._get_Translate__3258713827_9cv944_k$ = function () {
    return this.Translate_1;
  };
  Companion_12.prototype._get_Rotate__1039197424_g0vsoh_k$ = function () {
    return this.Rotate_1;
  };
  Companion_12.prototype._get_Morph__2522730473_gh9alm_k$ = function () {
    return this.Morph_1;
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_27() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StampedPathEffectStyle__toString_impl_2878285448(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_27().Translate_1 ? 'Translate' : tmp0_subject === Companion_getInstance_27().Rotate_1 ? 'Rotate' : tmp0_subject === Companion_getInstance_27().Morph_1 ? 'Morph' : 'Unknown';
  }
  function StampedPathEffectStyle__hashCode_impl_1562870329(this_0) {
    return this_0;
  }
  function StampedPathEffectStyle__equals_impl_2885259989(this_0, other) {
    if (!(other instanceof StampedPathEffectStyle))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StampedPathEffectStyle ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StampedPathEffectStyle(value) {
    Companion_getInstance_27();
    this.value_1 = value;
  }
  StampedPathEffectStyle.prototype.toString = function () {
    return StampedPathEffectStyle__toString_impl_2878285448(this.value_1);
  };
  StampedPathEffectStyle.prototype.hashCode = function () {
    return StampedPathEffectStyle__hashCode_impl_1562870329(this.value_1);
  };
  StampedPathEffectStyle.prototype.equals = function (other) {
    return StampedPathEffectStyle__equals_impl_2885259989(this.value_1, other);
  };
  StampedPathEffectStyle.$metadata$ = {
    simpleName: 'StampedPathEffectStyle',
    kind: 'class',
    interfaces: []
  };
  function _PathFillType___init__impl__3500060513(value) {
    return value;
  }
  function _get_value__3683422336_3($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.NonZero_1 = _PathFillType___init__impl__3500060513(0);
    this.EvenOdd_1 = _PathFillType___init__impl__3500060513(1);
  }
  Companion_13.prototype._get_NonZero__3590369980_8sx1ay_k$ = function () {
    return this.NonZero_1;
  };
  Companion_13.prototype._get_EvenOdd__2467676188_ies686_k$ = function () {
    return this.EvenOdd_1;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_28() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function PathFillType__toString_impl_2850148863(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_28().NonZero_1 ? 'NonZero' : tmp0_subject === Companion_getInstance_28().EvenOdd_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_1534733744(this_0) {
    return this_0;
  }
  function PathFillType__equals_impl_3743330316(this_0, other) {
    if (!(other instanceof PathFillType))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PathFillType ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_28();
    this.value_1 = value;
  }
  PathFillType.prototype.toString = function () {
    return PathFillType__toString_impl_2850148863(this.value_1);
  };
  PathFillType.prototype.hashCode = function () {
    return PathFillType__hashCode_impl_1534733744(this.value_1);
  };
  PathFillType.prototype.equals = function (other) {
    return PathFillType__equals_impl_3743330316(this.value_1, other);
  };
  PathFillType.$metadata$ = {
    simpleName: 'PathFillType',
    kind: 'class',
    interfaces: []
  };
  function _PathOperation___init__impl__3788777545(value) {
    return value;
  }
  function _get_value__3683422336_4($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Difference_1 = _PathOperation___init__impl__3788777545(0);
    this.Intersect_1 = _PathOperation___init__impl__3788777545(1);
    this.Union_1 = _PathOperation___init__impl__3788777545(2);
    this.Xor_1 = _PathOperation___init__impl__3788777545(3);
    this.ReverseDifference_1 = _PathOperation___init__impl__3788777545(4);
  }
  Companion_14.prototype._get_Difference__1821174478_r9kqjw_k$ = function () {
    return this.Difference_1;
  };
  Companion_14.prototype._get_Intersect__3394243890_czb1xk_k$ = function () {
    return this.Intersect_1;
  };
  Companion_14.prototype._get_Union__2750571266_8isoqw_k$ = function () {
    return this.Union_1;
  };
  Companion_14.prototype._get_Xor__856583094_8drjwk_k$ = function () {
    return this.Xor_1;
  };
  Companion_14.prototype._get_ReverseDifference__1850536338_okh3a0_k$ = function () {
    return this.ReverseDifference_1;
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_29() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function PathOperation__toString_impl_2174722591(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_29().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_29().Intersect_1 ? 'Intersect' : tmp0_subject === Companion_getInstance_29().Union_1 ? 'Union' : tmp0_subject === Companion_getInstance_29().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_29().ReverseDifference_1 ? 'ReverseDifference' : 'Unknown';
  }
  function PathOperation__hashCode_impl_859307472(this_0) {
    return this_0;
  }
  function PathOperation__equals_impl_3058829356(this_0, other) {
    if (!(other instanceof PathOperation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PathOperation ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathOperation(value) {
    Companion_getInstance_29();
    this.value_1 = value;
  }
  PathOperation.prototype.toString = function () {
    return PathOperation__toString_impl_2174722591(this.value_1);
  };
  PathOperation.prototype.hashCode = function () {
    return PathOperation__hashCode_impl_859307472(this.value_1);
  };
  PathOperation.prototype.equals = function (other) {
    return PathOperation__equals_impl_3058829356(this.value_1, other);
  };
  PathOperation.$metadata$ = {
    simpleName: 'PathOperation',
    kind: 'class',
    interfaces: []
  };
  function _PointMode___init__impl__1358256410(value) {
    return value;
  }
  function _get_value__3683422336_5($this) {
    return $this;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.Points_1 = _PointMode___init__impl__1358256410(0);
    this.Lines_1 = _PointMode___init__impl__1358256410(1);
    this.Polygon_1 = _PointMode___init__impl__1358256410(2);
  }
  Companion_15.prototype._get_Points__3549386344_r3iqlf_k$ = function () {
    return this.Points_1;
  };
  Companion_15.prototype._get_Lines__2488430802_raq553_k$ = function () {
    return this.Lines_1;
  };
  Companion_15.prototype._get_Polygon__2752450871_fygik4_k$ = function () {
    return this.Polygon_1;
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_30() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function PointMode__toString_impl_2852916590(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_30().Points_1 ? 'Points' : tmp0_subject === Companion_getInstance_30().Lines_1 ? 'Lines' : tmp0_subject === Companion_getInstance_30().Polygon_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_1537501471(this_0) {
    return this_0;
  }
  function PointMode__equals_impl_1647246139(this_0, other) {
    if (!(other instanceof PointMode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PointMode ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  PointMode.prototype.toString = function () {
    return PointMode__toString_impl_2852916590(this.value_1);
  };
  PointMode.prototype.hashCode = function () {
    return PointMode__hashCode_impl_1537501471(this.value_1);
  };
  PointMode.prototype.equals = function (other) {
    return PointMode__equals_impl_1647246139(this.value_1, other);
  };
  PointMode.$metadata$ = {
    simpleName: 'PointMode',
    kind: 'class',
    interfaces: []
  };
  function _get_RectangleShape__3082176697() {
    init_properties_RectangleShape_kt_2301607080();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  RectangleShape$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  RectangleShape$1.prototype.toString = function () {
    return 'RectangleShape';
  };
  RectangleShape$1.$metadata$ = {
    kind: 'class',
    interfaces: [Shape]
  };
  var properties_initialized_RectangleShape_kt_3255120076;
  function init_properties_RectangleShape_kt_2301607080() {
    if (!properties_initialized_RectangleShape_kt_3255120076) {
      properties_initialized_RectangleShape_kt_3255120076 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function LinearGradientShader$default(from, to, colors, colorStops, tileMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      colorStops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return LinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function RadialGradientShader$default(center, radius, colors, colorStops, tileMode, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      colorStops = null;
    if (!(($mask0 & 16) === 0))
      tileMode = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    return RadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function SweepGradientShader$default(center, colors, colorStops, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      colorStops = null;
    return SweepGradientShader(center, colors, colorStops);
  }
  function Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Color_1(new Long(-16777216, 0));
    if (!(($mask0 & 2) === 0))
      offset = Companion_getInstance()._get_Zero__785822851_30aknr_k$();
    if (!(($mask0 & 4) === 0))
      blurRadius = 0.0;
    Shadow.call($this, color, offset, blurRadius);
    return $this;
  }
  function Shadow_init_$Create$(color, offset, blurRadius, $mask0, $marker) {
    return Shadow_init_$Init$(color, offset, blurRadius, $mask0, $marker, Object.create(Shadow.prototype));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.None_1 = Shadow_init_$Create$(null, null, 0.0, 7, null);
  }
  Companion_16.prototype._get_None__775034355_ctfoc3_k$ = function () {
    return this.None_1;
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_31() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_31();
    this.color_1 = color;
    this.offset_1 = offset;
    this.blurRadius_1 = blurRadius;
  }
  Shadow.prototype._get_color__3152392398_60nqpf_k$ = function () {
    return this.color_1;
  };
  Shadow.prototype._get_offset__736931032_tcg964_k$ = function () {
    return this.offset_1;
  };
  Shadow.prototype._get_blurRadius__1084091346_hxfu8i_k$ = function () {
    return this.blurRadius_1;
  };
  Shadow.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    else {
    }
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.blurRadius_1 === other.blurRadius_1))
      return false;
    return true;
  };
  Shadow.prototype.hashCode = function () {
    var result = Color__hashCode_impl_1907974927(this.color_1);
    result = imul(31, result) + Offset__hashCode_impl_3247326111(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.blurRadius_1) | 0;
    return result;
  };
  Shadow.prototype.toString = function () {
    return 'Shadow(color=' + new Color(this.color_1) + ', offset=' + new Offset_0(this.offset_1) + ', blurRadius=' + this.blurRadius_1 + ')';
  };
  Shadow.prototype.copy_rnsz8_k$ = function (color, offset, blurRadius) {
    return new Shadow(color, offset, blurRadius);
  };
  Shadow.prototype.copy$default_dfbwwz_k$ = function (color, offset, blurRadius, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      offset = this.offset_1;
    if (!(($mask0 & 4) === 0))
      blurRadius = this.blurRadius_1;
    return this.copy_rnsz8_k$(color, offset, blurRadius);
  };
  Shadow.$metadata$ = {
    simpleName: 'Shadow',
    kind: 'class',
    interfaces: []
  };
  function Shape() {
  }
  Shape.$metadata$ = {
    simpleName: 'Shape',
    kind: 'interface',
    interfaces: []
  };
  function _StrokeCap___init__impl__3059667969(value) {
    return value;
  }
  function _get_value__3683422336_6($this) {
    return $this;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Butt_1 = _StrokeCap___init__impl__3059667969(0);
    this.Round_1 = _StrokeCap___init__impl__3059667969(1);
    this.Square_1 = _StrokeCap___init__impl__3059667969(2);
  }
  Companion_17.prototype._get_Butt__764137080_goepja_k$ = function () {
    return this.Butt_1;
  };
  Companion_17.prototype._get_Round__2665963555_inu17z_k$ = function () {
    return this.Round_1;
  };
  Companion_17.prototype._get_Square__1984881006_mso4n0_k$ = function () {
    return this.Square_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_32() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function StrokeCap__toString_impl_4057067367(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_32().Butt_1 ? 'Butt' : tmp0_subject === Companion_getInstance_32().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_32().Square_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_2741652248(this_0) {
    return this_0;
  }
  function StrokeCap__equals_impl_2949056372(this_0, other) {
    if (!(other instanceof StrokeCap))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StrokeCap ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  StrokeCap.prototype.toString = function () {
    return StrokeCap__toString_impl_4057067367(this.value_1);
  };
  StrokeCap.prototype.hashCode = function () {
    return StrokeCap__hashCode_impl_2741652248(this.value_1);
  };
  StrokeCap.prototype.equals = function (other) {
    return StrokeCap__equals_impl_2949056372(this.value_1, other);
  };
  StrokeCap.$metadata$ = {
    simpleName: 'StrokeCap',
    kind: 'class',
    interfaces: []
  };
  function _StrokeJoin___init__impl__3179603777(value) {
    return value;
  }
  function _get_value__3683422336_7($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.Miter_1 = _StrokeJoin___init__impl__3179603777(0);
    this.Round_1 = _StrokeJoin___init__impl__3179603777(1);
    this.Bevel_1 = _StrokeJoin___init__impl__3179603777(2);
  }
  Companion_18.prototype._get_Miter__2517238668_ft082e_k$ = function () {
    return this.Miter_1;
  };
  Companion_18.prototype._get_Round__2665963555_aa3d9p_k$ = function () {
    return this.Round_1;
  };
  Companion_18.prototype._get_Bevel__2198683319_3isl1b_k$ = function () {
    return this.Bevel_1;
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_33() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function StrokeJoin__toString_impl_1540412703(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_33().Miter_1 ? 'Miter' : tmp0_subject === Companion_getInstance_33().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_33().Bevel_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_224997584(this_0) {
    return this_0;
  }
  function StrokeJoin__equals_impl_3241409324(this_0, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StrokeJoin ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  StrokeJoin.prototype.toString = function () {
    return StrokeJoin__toString_impl_1540412703(this.value_1);
  };
  StrokeJoin.prototype.hashCode = function () {
    return StrokeJoin__hashCode_impl_224997584(this.value_1);
  };
  StrokeJoin.prototype.equals = function (other) {
    return StrokeJoin__equals_impl_3241409324(this.value_1, other);
  };
  StrokeJoin.$metadata$ = {
    simpleName: 'StrokeJoin',
    kind: 'class',
    interfaces: []
  };
  function _TileMode___init__impl__1750978032(value) {
    return value;
  }
  function _get_value__3683422336_8($this) {
    return $this;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Clamp_1 = _TileMode___init__impl__1750978032(0);
    this.Repeated_1 = _TileMode___init__impl__1750978032(1);
    this.Mirror_1 = _TileMode___init__impl__1750978032(2);
    this.Decal_1 = _TileMode___init__impl__1750978032(3);
  }
  Companion_19.prototype._get_Clamp__2233159318_fhphsf_k$ = function () {
    return this.Clamp_1;
  };
  Companion_19.prototype._get_Repeated__2830487409_4som7e_k$ = function () {
    return this.Repeated_1;
  };
  Companion_19.prototype._get_Mirror__723526412_34lebf_k$ = function () {
    return this.Mirror_1;
  };
  Companion_19.prototype._get_Decal__2255371748_rgs4d9_k$ = function () {
    return this.Decal_1;
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_34() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TileMode__toString_impl_1789313872(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_34().Clamp_1 ? 'Clamp' : tmp0_subject === Companion_getInstance_34().Repeated_1 ? 'Repeated' : tmp0_subject === Companion_getInstance_34().Mirror_1 ? 'Mirror' : tmp0_subject === Companion_getInstance_34().Decal_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_473898753(this_0) {
    return this_0;
  }
  function TileMode__equals_impl_3831611805(this_0, other) {
    if (!(other instanceof TileMode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TileMode ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_34();
    this.value_1 = value;
  }
  TileMode.prototype.toString = function () {
    return TileMode__toString_impl_1789313872(this.value_1);
  };
  TileMode.prototype.hashCode = function () {
    return TileMode__hashCode_impl_473898753(this.value_1);
  };
  TileMode.prototype.equals = function (other) {
    return TileMode__equals_impl_3831611805(this.value_1, other);
  };
  TileMode.$metadata$ = {
    simpleName: 'TileMode',
    kind: 'class',
    interfaces: []
  };
  function _VertexMode___init__impl__715011174(value) {
    return value;
  }
  function _get_value__3683422336_9($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.Triangles_1 = _VertexMode___init__impl__715011174(0);
    this.TriangleStrip_1 = _VertexMode___init__impl__715011174(1);
    this.TriangleFan_1 = _VertexMode___init__impl__715011174(2);
  }
  Companion_20.prototype._get_Triangles__1221231718_1o674l_k$ = function () {
    return this.Triangles_1;
  };
  Companion_20.prototype._get_TriangleStrip__3927518465_wxlbgw_k$ = function () {
    return this.TriangleStrip_1;
  };
  Companion_20.prototype._get_TriangleFan__1076305702_4peixh_k$ = function () {
    return this.TriangleFan_1;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_35() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function VertexMode__toString_impl_2447453338(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_35().Triangles_1 ? 'Triangles' : tmp0_subject === Companion_getInstance_35().TriangleStrip_1 ? 'TriangleStrip' : tmp0_subject === Companion_getInstance_35().TriangleFan_1 ? 'TriangleFan' : 'Unknown';
  }
  function VertexMode__hashCode_impl_1132038219(this_0) {
    return this_0;
  }
  function VertexMode__equals_impl_1222243687(this_0, other) {
    if (!(other instanceof VertexMode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof VertexMode ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function VertexMode(value) {
    Companion_getInstance_35();
    this.value_1 = value;
  }
  VertexMode.prototype.toString = function () {
    return VertexMode__toString_impl_2447453338(this.value_1);
  };
  VertexMode.prototype.hashCode = function () {
    return VertexMode__hashCode_impl_1132038219(this.value_1);
  };
  VertexMode.prototype.equals = function (other) {
    return VertexMode__equals_impl_1222243687(this.value_1, other);
  };
  VertexMode.$metadata$ = {
    simpleName: 'VertexMode',
    kind: 'class',
    interfaces: []
  };
  function encodeColorList($this, colors) {
    var tmp = 0;
    var tmp_0 = colors._get_size__809037418_ddoh9m_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toArgb(colors.get_fkrdnv_k$(tmp_2).value_1);
        break $l$block;
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function encodePointList($this, points) {
    var tmp = 0;
    var tmp_0 = imul(points._get_size__809037418_ddoh9m_k$(), 2);
    var tmp_1 = new Float32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      $l$block: {
        var pointIndex = tmp_2 / 2 | 0;
        var point = points.get_fkrdnv_k$(pointIndex).packedValue_1;
        var tmp_3;
        if (tmp_2 % 2 === 0) {
          tmp_3 = _Offset___get_x__impl__2048295803(point);
        } else {
          tmp_3 = _Offset___get_y__impl__3791106138(point);
        }
        tmp$ret$0 = tmp_3;
        break $l$block;
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Vertices$lambda($positions) {
    return function (it) {
      return it < 0 ? true : it >= $positions._get_size__809037418_ddoh9m_k$();
    };
  }
  function Vertices(vertexMode, positions, textureCoordinates, colors, indices) {
    this.vertexMode_1 = vertexMode;
    var outOfBounds = Vertices$lambda(positions);
    if (!(textureCoordinates._get_size__809037418_ddoh9m_k$() === positions._get_size__809037418_ddoh9m_k$()))
      throw IllegalArgumentException_init_$Create$('positions and textureCoordinates lengths must match.');
    if (!(colors._get_size__809037418_ddoh9m_k$() === positions._get_size__809037418_ddoh9m_k$()))
      throw IllegalArgumentException_init_$Create$('positions and colors lengths must match.');
    var tmp$ret$0;
    $l$block_0: {
      {
      }
      {
        {
        }
        var inductionVariable = 0;
        var last = indices._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_3 = indices.get_fkrdnv_k$(index_2_2);
            {
              if (outOfBounds(item_3_3)) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$0 = false;
      break $l$block_0;
    }
    if (tmp$ret$0)
      throw IllegalArgumentException_init_$Create$('indices values must be valid indices in the positions list.');
    else {
    }
    this.positions_1 = encodePointList(this, positions);
    this.textureCoordinates_1 = encodePointList(this, textureCoordinates);
    this.colors_1 = encodeColorList(this, colors);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = indices._get_size__809037418_ddoh9m_k$();
    var tmp_2 = new Int16Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      $l$block_1: {
        tmp$ret$1 = toShort(indices.get_fkrdnv_k$(tmp_3));
        break $l$block_1;
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.indices_1 = tmp_2;
  }
  Vertices.prototype._get_vertexMode__1518538756_7xe1ir_k$ = function () {
    return this.vertexMode_1;
  };
  Vertices.prototype._get_positions__73265959_17mcdj_k$ = function () {
    return this.positions_1;
  };
  Vertices.prototype._get_textureCoordinates__2058228139_y1eyzv_k$ = function () {
    return this.textureCoordinates_1;
  };
  Vertices.prototype._get_colors__3234885531_hj58bp_k$ = function () {
    return this.colors_1;
  };
  Vertices.prototype._get_indices__2241594442_xyiwmu_k$ = function () {
    return this.indices_1;
  };
  Vertices.$metadata$ = {
    simpleName: 'Vertices',
    kind: 'class',
    interfaces: []
  };
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
      break $l$block;
    }
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$Bradford$1.prototype.toString = function () {
    return 'Bradford';
  };
  Adaptation$Companion$Bradford$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
      break $l$block;
    }
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$VonKries$1.prototype.toString = function () {
    return 'VonKries';
  };
  Adaptation$Companion$VonKries$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
      break $l$block;
    }
    Adaptation.call(this, tmp$ret$0);
  }
  Adaptation$Companion$Ciecat02$1.prototype.toString = function () {
    return 'Ciecat02';
  };
  Adaptation$Companion$Ciecat02$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    tmp.Bradford_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.VonKries_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.Ciecat02__1 = new Adaptation$Companion$Ciecat02$1();
  }
  Companion_21.prototype._get_Bradford__2414884285_v3cpc3_k$ = function () {
    return this.Bradford_1;
  };
  Companion_21.prototype._get_VonKries__1934845648_vzyggg_k$ = function () {
    return this.VonKries_1;
  };
  Companion_21.prototype._get_Ciecat02__1323890642_lw7kk2_k$ = function () {
    return this.Ciecat02__1;
  };
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_36() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Adaptation(transform) {
    Companion_getInstance_36();
    this.transform_1 = transform;
  }
  Adaptation.prototype._get_transform__1260123237_ku8tb9_k$ = function () {
    return this.transform_1;
  };
  Adaptation.$metadata$ = {
    simpleName: 'Adaptation',
    kind: 'class',
    interfaces: []
  };
  function _ColorModel___init__impl__680535621(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__1867628647(this_0) {
    return this_0;
  }
  function _ColorModel___get_componentCount__impl__655089996(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt1_0 = _ColorModel___get_packedValue__impl__1867628647(this_0);
      tmp$ret$0 = tmp0_unpackInt1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Long(0, 3);
      break $l$block;
    }
    tmp.Rgb_1 = _ColorModel___init__impl__680535621(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = new Long(1, 3);
      break $l$block_0;
    }
    tmp_0.Xyz_1 = _ColorModel___init__impl__680535621(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = new Long(2, 3);
      break $l$block_1;
    }
    tmp_1.Lab_1 = _ColorModel___init__impl__680535621(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = new Long(3, 4);
      break $l$block_2;
    }
    tmp_2.Cmyk_1 = _ColorModel___init__impl__680535621(tmp$ret$3);
  }
  Companion_22.prototype._get_Rgb__856396164_j42m9x_k$ = function () {
    return this.Rgb_1;
  };
  Companion_22.prototype._get_Xyz__856592952_6koftd_k$ = function () {
    return this.Xyz_1;
  };
  Companion_22.prototype._get_Lab__856211652_u83ke3_k$ = function () {
    return this.Lab_1;
  };
  Companion_22.prototype._get_Cmyk__764826799_l6l7zu_k$ = function () {
    return this.Cmyk_1;
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_37() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function ColorModel__toString_impl_1378711195(this_0) {
    var tmp0_subject = this_0;
    return equals(tmp0_subject, Companion_getInstance_37().Rgb_1) ? 'Rgb' : equals(tmp0_subject, Companion_getInstance_37().Xyz_1) ? 'Xyz' : equals(tmp0_subject, Companion_getInstance_37().Lab_1) ? 'Lab' : equals(tmp0_subject, Companion_getInstance_37().Cmyk_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_63296076(this_0) {
    return this_0.hashCode();
  }
  function ColorModel__equals_impl_805489576(this_0, other) {
    if (!(other instanceof ColorModel))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ColorModel ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_37();
    this.packedValue_1 = packedValue;
  }
  ColorModel.prototype.toString = function () {
    return ColorModel__toString_impl_1378711195(this.packedValue_1);
  };
  ColorModel.prototype.hashCode = function () {
    return ColorModel__hashCode_impl_63296076(this.packedValue_1);
  };
  ColorModel.prototype.equals = function (other) {
    return ColorModel__equals_impl_805489576(this.packedValue_1, other);
  };
  ColorModel.$metadata$ = {
    simpleName: 'ColorModel',
    kind: 'class',
    interfaces: []
  };
  function ColorSpace_init_$Init$(name, model, $this) {
    Companion_getInstance_38();
    ColorSpace.call($this, name, model, -1);
    return $this;
  }
  function ColorSpace_init_$Create$(name, model) {
    return ColorSpace_init_$Init$(name, model, Object.create(ColorSpace.prototype));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.MinId_1 = -1;
    this.MaxId_1 = 63;
  }
  Companion_23.prototype._get_MinId__2517032580_tejb7g_k$ = function () {
    return this.MinId_1;
  };
  Companion_23.prototype._get_MaxId__2509942322_tira32_k$ = function () {
    return this.MaxId_1;
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_38() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_38();
    this.name_1 = name;
    this.model_1 = model;
    this.id_1 = id;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this.name_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    } else {
    }
    var tmp;
    Companion_getInstance_38();
    if (this.id_1 < -1) {
      tmp = true;
    } else {
      {
        Companion_getInstance_38();
        tmp = this.id_1 > 63;
      }
    }
    if (tmp) {
      Companion_getInstance_38();
      Companion_getInstance_38();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    } else {
    }
  }
  ColorSpace.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  ColorSpace.prototype._get_model__3438435784_rju6in_k$ = function () {
    return this.model_1;
  };
  ColorSpace.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  ColorSpace.prototype._get_componentCount__2124466745_z4up15_k$ = function () {
    return _ColorModel___get_componentCount__impl__655089996(this.model_1);
  };
  ColorSpace.prototype._get_isSrgb__61479879_10lq6f_k$ = function () {
    return false;
  };
  ColorSpace.prototype.toXyz_htgd3k_k$ = function (r, g, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([r, g, b]);
      break $l$block;
    }
    return this.toXyz_ox86g9_k$(tmp$ret$0);
  };
  ColorSpace.prototype.fromXyz_sxy01r_k$ = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__655089996(this.model_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.fromXyz_idrdie_k$(xyz);
  };
  ColorSpace.prototype.toString = function () {
    return this.name_1 + ' (id=' + this.id_1 + ', model=' + new ColorModel(this.model_1) + ')';
  };
  ColorSpace.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.id_1 === that.id_1))
      return false;
    return !(this.name_1 === that.name_1) ? false : equals(this.model_1, that.model_1);
  };
  ColorSpace.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + ColorModel__hashCode_impl_63296076(this.model_1) | 0;
    result = imul(31, result) + this.id_1 | 0;
    return result;
  };
  ColorSpace.$metadata$ = {
    simpleName: 'ColorSpace',
    kind: 'class',
    interfaces: []
  };
  function connect(_this__1828080292, destination, intent) {
    if (_this__1828080292 === destination) {
      return Companion_getInstance_39().identity_orxv0l_k$(_this__1828080292);
    }
    var tmp;
    if (equals(_this__1828080292.model_1, Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$()) ? equals(destination.model_1, Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$()) : false) {
      var tmp_0 = _this__1828080292 instanceof Rgb ? _this__1828080292 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__1828080292, destination, intent);
    }
    return tmp;
  }
  function connect$default(_this__1828080292, destination, intent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      destination = ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
    if (!(($mask0 & 2) === 0))
      intent = Companion_getInstance_42()._get_Perceptual__1327369230_ai5qih_k$();
    return connect(_this__1828080292, destination, intent);
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__1828080292, whitePoint, adaptation) {
    if (equals(_this__1828080292.model_1, Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$())) {
      var rgb = _this__1828080292 instanceof Rgb ? _this__1828080292 : THROW_CCE();
      if (compare_1(rgb._get_whitePoint__1400300164_n5pais_k$(), whitePoint)) {
        return _this__1828080292;
      }
      var xyz = whitePoint.toXyz_1tswm6_k$();
      var adaptationTransform = chromaticAdaptation(adaptation._get_transform__1260123237_ku8tb9_k$(), rgb._get_whitePoint__1400300164_n5pais_k$().toXyz_1tswm6_k$(), xyz);
      var transform = mul3x3(adaptationTransform, rgb._get_transform__1260123237_ku8tb9_k$());
      return Rgb_init_$Create$_7(rgb, transform, whitePoint);
    }
    return _this__1828080292;
  }
  function adapt$default(_this__1828080292, whitePoint, adaptation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      adaptation = Companion_getInstance_36()._get_Bradford__2414884285_v3cpc3_k$();
    return adapt(_this__1828080292, whitePoint, adaptation);
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_abs_0 = a[i] - b[i];
            tmp$ret$0 = Math.abs(tmp0_abs_0);
            break $l$block;
          }
          tmp = tmp$ret$0 > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
        else {
        }
      }
       while (inductionVariable <= last);
    return true;
  }
  function compare_0(a, b) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(b == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_abs_0 = a._get_a__461226256_7mlogg_k$() - b._get_a__461226256_7mlogg_k$();
        tmp$ret$0 = Math.abs(tmp0_abs_0);
        break $l$block;
      }
      tmp_5 = tmp$ret$0 < 0.001;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_abs_0 = a._get_b__461226287_7mlohb_k$() - b._get_b__461226287_7mlohb_k$();
        tmp$ret$1 = Math.abs(tmp1_abs_0);
        break $l$block_0;
      }
      tmp_4 = tmp$ret$1 < 0.001;
    } else {
      {
        tmp_4 = false;
      }
    }
    if (tmp_4) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_abs_0 = a._get_c__461226318_7mloi6_k$() - b._get_c__461226318_7mloi6_k$();
        tmp$ret$2 = Math.abs(tmp2_abs_0);
        break $l$block_1;
      }
      tmp_3 = tmp$ret$2 < 0.001;
    } else {
      {
        tmp_3 = false;
      }
    }
    if (tmp_3) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp3_abs_0 = a._get_d__461226349_7mloj1_k$() - b._get_d__461226349_7mloj1_k$();
        tmp$ret$3 = Math.abs(tmp3_abs_0);
        break $l$block_2;
      }
      tmp_2 = tmp$ret$3 < 0.002;
    } else {
      {
        tmp_2 = false;
      }
    }
    if (tmp_2) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp4_abs_0 = a._get_e__461226380_7mlojw_k$() - b._get_e__461226380_7mlojw_k$();
        tmp$ret$4 = Math.abs(tmp4_abs_0);
        break $l$block_3;
      }
      tmp_1 = tmp$ret$4 < 0.001;
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      var tmp$ret$5;
      $l$block_4: {
        var tmp5_abs_0 = a._get_f__461226411_7mlokr_k$() - b._get_f__461226411_7mlokr_k$();
        tmp$ret$5 = Math.abs(tmp5_abs_0);
        break $l$block_4;
      }
      tmp_0 = tmp$ret$5 < 0.001;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp6_abs_0 = a._get_gamma__3254007050_h7re2e_k$() - b._get_gamma__3254007050_h7re2e_k$();
        tmp$ret$6 = Math.abs(tmp6_abs_0);
        break $l$block_5;
      }
      tmp = tmp$ret$6 < 0.001;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_abs_0 = a._get_x__461226969_7mlp09_k$() - b._get_x__461226969_7mlp09_k$();
      tmp$ret$0 = Math.abs(tmp0_abs_0);
      break $l$block;
    }
    if (tmp$ret$0 < 0.001) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_abs_0 = a._get_y__461227000_7mlp14_k$() - b._get_y__461227000_7mlp14_k$();
        tmp$ret$1 = Math.abs(tmp1_abs_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1 < 0.001;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    var LMS = tmp$ret$0;
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = 1.0 / g;
        tmp$ret$0 = Math.pow(x, tmp0_pow_0);
        break $l$block;
      }
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = x - e;
        var tmp1_pow_0 = 1.0 / g;
        tmp$ret$0 = Math.pow(tmp0_pow_0, tmp1_pow_0);
        break $l$block;
      }
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = a * x + b;
        tmp$ret$0 = Math.pow(tmp0_pow_0, g);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = a * x + b;
        tmp$ret$0 = Math.pow(tmp0_pow_0, g);
        break $l$block;
      }
      tmp = tmp$ret$0 + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function _get_NoneTransferParameters__1088263422($this) {
    return $this.NoneTransferParameters_1;
  }
  function ColorSpaces$ExtendedSrgb$lambda() {
    return function (x) {
      return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
    };
  }
  function ColorSpaces$ExtendedSrgb$lambda_0() {
    return function (x) {
      return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
    };
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
      break $l$block;
    }
    tmp.SrgbPrimaries_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
      break $l$block_0;
    }
    tmp_0.Ntsc1953Primaries_1 = tmp$ret$1;
    var tmp_1 = this;
    tmp_1.SrgbTransferParameters_1 = TransferParameters_init_$Create$(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    var tmp_2 = this;
    tmp_2.NoneTransferParameters_1 = TransferParameters_init_$Create$(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 0.0, 0.0, 96, null);
    this.Srgb_1 = Rgb_init_$Create$_3('sRGB IEC61966-2.1', this.SrgbPrimaries_1, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), this.SrgbTransferParameters_1, 0);
    this.LinearSrgb_1 = Rgb_init_$Create$_6('sRGB IEC61966-2.1 (Linear)', this.SrgbPrimaries_1, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), 1.0, 0.0, 1.0, 1);
    var tmp_3 = this;
    var tmp_4 = Illuminant_getInstance()._get_D65__855930606_e5lka6_k$();
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda();
    tmp_3.ExtendedSrgb_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.SrgbPrimaries_1, tmp_4, null, tmp_5, ColorSpaces$ExtendedSrgb$lambda_0(), -0.799, 2.399, this.SrgbTransferParameters_1, 2);
    this.LinearExtendedSrgb_1 = Rgb_init_$Create$_6('scRGB IEC 61966-2-2:2003', this.SrgbPrimaries_1, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
      break $l$block_1;
    }
    var tmp_7 = tmp$ret$2;
    var tmp_8 = Illuminant_getInstance()._get_D65__855930606_e5lka6_k$();
    tmp_6.Bt709__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.709-5', tmp_7, tmp_8, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 4);
    var tmp_9 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
      break $l$block_2;
    }
    var tmp_10 = tmp$ret$3;
    var tmp_11 = Illuminant_getInstance()._get_D65__855930606_e5lka6_k$();
    tmp_9.Bt2020__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.2020-1', tmp_10, tmp_11, TransferParameters_init_$Create$(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145, 0.0, 0.0, 96, null), 5);
    var tmp_12 = this;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
      break $l$block_3;
    }
    tmp_12.DciP3__1 = Rgb_init_$Create$_6('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_13 = this;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
      break $l$block_4;
    }
    tmp_13.DisplayP3__1 = Rgb_init_$Create$_3('Display P3', tmp$ret$5, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), this.SrgbTransferParameters_1, 7);
    var tmp_14 = this;
    var tmp_15 = Illuminant_getInstance()._get_C__461225326_7mlnqm_k$();
    tmp_14.Ntsc1953__1 = Rgb_init_$Create$_3('NTSC (1953)', this.Ntsc1953Primaries_1, tmp_15, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 8);
    var tmp_16 = this;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
      break $l$block_5;
    }
    var tmp_17 = tmp$ret$6;
    var tmp_18 = Illuminant_getInstance()._get_D65__855930606_e5lka6_k$();
    tmp_16.SmpteC_1 = Rgb_init_$Create$_3('SMPTE-C RGB', tmp_17, tmp_18, TransferParameters_init_$Create$(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081, 0.0, 0.0, 96, null), 9);
    var tmp_19 = this;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
      break $l$block_6;
    }
    tmp_19.AdobeRgb_1 = Rgb_init_$Create$_6('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), 2.2, 0.0, 1.0, 10);
    var tmp_20 = this;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
      break $l$block_7;
    }
    var tmp_21 = tmp$ret$8;
    var tmp_22 = Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$();
    tmp_20.ProPhotoRgb_1 = Rgb_init_$Create$_3('ROMM RGB ISO 22028-2:2013', tmp_21, tmp_22, TransferParameters_init_$Create$(1.8, 1.0, 0.0, 0.0625, 0.031248, 0.0, 0.0, 96, null), 11);
    var tmp_23 = this;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
      break $l$block_8;
    }
    tmp_23.Aces_1 = Rgb_init_$Create$_6('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance()._get_D60__855930451_e5lk5v_k$(), 1.0, -65504.0, 65504.0, 12);
    var tmp_24 = this;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
      break $l$block_9;
    }
    tmp_24.Acescg_1 = Rgb_init_$Create$_6('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance()._get_D60__855930451_e5lk5v_k$(), 1.0, -65504.0, 65504.0, 13);
    this.CieXyz_1 = new Xyz('Generic XYZ', 14);
    this.CieLab_1 = new Lab('Generic L*a*b*', 15);
    this.Unspecified_1 = Rgb_init_$Create$_3('None', this.SrgbPrimaries_1, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$(), this.NoneTransferParameters_1, 16);
    this.Oklab_1 = new Oklab('Oklab', 17);
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_arrayOf_0 = [this.Srgb_1, this.LinearSrgb_1, this.ExtendedSrgb_1, this.LinearExtendedSrgb_1, this.Bt709__1, this.Bt2020__1, this.DciP3__1, this.DisplayP3__1, this.Ntsc1953__1, this.SmpteC_1, this.AdobeRgb_1, this.ProPhotoRgb_1, this.Aces_1, this.Acescg_1, this.CieXyz_1, this.CieLab_1, this.Unspecified_1, this.Oklab_1];
      var tmp$ret$12;
      $l$block_11: {
        var tmp$ret$11;
        $l$block_10: {
          tmp$ret$11 = tmp0_arrayOf_0;
          break $l$block_10;
        }
        tmp$ret$12 = tmp$ret$11;
        break $l$block_11;
      }
      tmp$ret$13 = tmp$ret$12;
      break $l$block_12;
    }
    tmp_25.ColorSpacesArray_1 = tmp$ret$13;
  }
  ColorSpaces.prototype._get_SrgbPrimaries__3546555883_cdl1xx_k$ = function () {
    return this.SrgbPrimaries_1;
  };
  ColorSpaces.prototype._get_Ntsc1953Primaries__3768552653_8pew4z_k$ = function () {
    return this.Ntsc1953Primaries_1;
  };
  ColorSpaces.prototype._get_SrgbTransferParameters__944933244_fml75o_k$ = function () {
    return this.SrgbTransferParameters_1;
  };
  ColorSpaces.prototype._get_Srgb__779734513_cw8f01_k$ = function () {
    return this.Srgb_1;
  };
  ColorSpaces.prototype._get_LinearSrgb__2036340748_xoduks_k$ = function () {
    return this.LinearSrgb_1;
  };
  ColorSpaces.prototype._get_ExtendedSrgb__2236452664_y1l420_k$ = function () {
    return this.ExtendedSrgb_1;
  };
  ColorSpaces.prototype._get_LinearExtendedSrgb__4118908499_2wtju5_k$ = function () {
    return this.LinearExtendedSrgb_1;
  };
  ColorSpaces.prototype._get_Bt709__2210606787_ygz2v1_k$ = function () {
    return this.Bt709__1;
  };
  ColorSpaces.prototype._get_Bt2020__4099676253_389rj7_k$ = function () {
    return this.Bt2020__1;
  };
  ColorSpaces.prototype._get_DciP3__2253685348_xrbr8c_k$ = function () {
    return this.DciP3__1;
  };
  ColorSpaces.prototype._get_DisplayP3__4066121964_3s8y6s_k$ = function () {
    return this.DisplayP3__1;
  };
  ColorSpaces.prototype._get_Ntsc1953__106873039_1rmnrj_k$ = function () {
    return this.Ntsc1953__1;
  };
  ColorSpaces.prototype._get_SmpteC__1866299279_uv59qn_k$ = function () {
    return this.SmpteC_1;
  };
  ColorSpaces.prototype._get_AdobeRgb__778923789_cvr1fx_k$ = function () {
    return this.AdobeRgb_1;
  };
  ColorSpaces.prototype._get_ProPhotoRgb__1219614633_k64ko9_k$ = function () {
    return this.ProPhotoRgb_1;
  };
  ColorSpaces.prototype._get_Aces__762662875_cm2ifv_k$ = function () {
    return this.Aces_1;
  };
  ColorSpaces.prototype._get_Acescg__2774621367_p56afd_k$ = function () {
    return this.Acescg_1;
  };
  ColorSpaces.prototype._get_CieXyz__425653713_71f8i9_k$ = function () {
    return this.CieXyz_1;
  };
  ColorSpaces.prototype._get_CieLab__425272413_7172al_k$ = function () {
    return this.CieLab_1;
  };
  ColorSpaces.prototype._get_Unspecified__2946689370_maq9wm_k$ = function () {
    return this.Unspecified_1;
  };
  ColorSpaces.prototype._get_Oklab__2576101344_sfd9gg_k$ = function () {
    return this.Oklab_1;
  };
  ColorSpaces.prototype.match_gsgfej_k$ = function (toXYZD50, function_0) {
    var indexedObject = this.ColorSpacesArray_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var colorSpace = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(colorSpace._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$())) {
        var tmp = Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$();
        var tmp_0 = adapt$default(colorSpace, tmp, null, 2, null);
        var rgb = tmp_0 instanceof Rgb ? tmp_0 : THROW_CCE();
        if (compare(toXYZD50, rgb._get_transform__1260123237_ku8tb9_k$()) ? compare_0(function_0, rgb._get_transferParameters__919768566_f7ltyu_k$()) : false) {
          return colorSpace;
        }
      }
    }
    return null;
  };
  ColorSpaces.prototype.getColorSpace_n6qo08_k$ = function (id) {
    return this.ColorSpacesArray_1[id];
  };
  ColorSpaces.prototype._get_ColorSpacesArray__1895385346_vcgooy_k$ = function () {
    return this.ColorSpacesArray_1;
  };
  ColorSpaces.$metadata$ = {
    simpleName: 'ColorSpaces',
    kind: 'object',
    interfaces: []
  };
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function _get_mSource__2756553001($this) {
    return $this.mSource_1;
  }
  function _get_mDestination__907397130($this) {
    return $this.mDestination_1;
  }
  function _get_mTransform__80890604($this) {
    return $this.mTransform_1;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source._get_whitePoint__1400300164_n5pais_k$(), destination._get_whitePoint__1400300164_n5pais_k$())) {
      return mul3x3(destination._get_inverseTransform__3184762927_iczj69_k$(), source._get_transform__1260123237_ku8tb9_k$());
    } else {
      var transform = source._get_transform__1260123237_ku8tb9_k$();
      var inverseTransform = destination._get_inverseTransform__3184762927_iczj69_k$();
      var srcXYZ = source._get_whitePoint__1400300164_n5pais_k$().toXyz_1tswm6_k$();
      var dstXYZ = destination._get_whitePoint__1400300164_n5pais_k$().toXyz_1tswm6_k$();
      if (!compare_1(source._get_whitePoint__1400300164_n5pais_k$(), Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$())) {
        var tmp = Companion_getInstance_36()._get_Bradford__2414884285_v3cpc3_k$()._get_transform__1260123237_ku8tb9_k$();
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_copyOf_0 = Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_copyOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.slice();
          break $l$block_0;
        }
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source._get_transform__1260123237_ku8tb9_k$());
      }
      if (!compare_1(destination._get_whitePoint__1400300164_n5pais_k$(), Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$())) {
        var tmp_0 = Companion_getInstance_36()._get_Bradford__2414884285_v3cpc3_k$()._get_transform__1260123237_ku8tb9_k$();
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_copyOf_0 = Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_copyOf_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2.slice();
          break $l$block_2;
        }
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination._get_transform__1260123237_ku8tb9_k$()));
      }
      if (intent === Companion_getInstance_42()._get_Absolute__1223016724_6cb6in_k$()) {
        var tmp$ret$4;
        $l$block_3: {
          var tmp2_floatArrayOf_0 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
          tmp$ret$4 = tmp2_floatArrayOf_0;
          break $l$block_3;
        }
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_42()._get_Absolute__1223016724_6cb6in_k$()))
      return null;
    var srcRGB = equals(source._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$());
    var dstRGB = equals(destination._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$());
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb._get_whitePoint__1400300164_n5pais_k$().toXyz_1tswm6_k$() : Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$();
      var dstXYZ = dstRGB ? rgb._get_whitePoint__1400300164_n5pais_k$().toXyz_1tswm6_k$() : Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$();
      var tmp$ret$0;
      $l$block: {
        var tmp0_floatArrayOf_0 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        tmp$ret$0 = tmp0_floatArrayOf_0;
        break $l$block;
      }
      return tmp$ret$0;
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_42()._get_Relative__3478158943_2mzdxy_k$(), this);
  }
  Connector$Companion$identity$1.prototype.transform_aitls9_k$ = function (v) {
    return v;
  };
  Connector$Companion$identity$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _get_transformSource__3038588490($this) {
    return $this.transformSource_1;
  }
  function _get_transformDestination__2072072073($this) {
    return $this.transformDestination_1;
  }
  function _get_transform__1260123237($this) {
    return $this.transform_1;
  }
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp;
    if (equals(source._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$())) {
      var tmp_0 = Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$();
      tmp = adapt$default(source, tmp_0, null, 2, null);
    } else {
      tmp = source;
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (equals(destination._get_model__3438435784_rju6in_k$(), Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$())) {
      var tmp_3 = Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$();
      tmp_2 = adapt$default(destination, tmp_3, null, 2, null);
    } else {
      tmp_2 = destination;
    }
    Connector.call($this, source, destination, tmp_1, tmp_2, intent, computeTransform_0(Companion_getInstance_39(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, Object.create(Connector.prototype));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.mSource_1 = mSource;
    this.mDestination_1 = mDestination;
    this.mTransform_1 = computeTransform(this, this.mSource_1, this.mDestination_1, intent);
  }
  RgbConnector.prototype.transform_aitls9_k$ = function (v) {
    v[0] = this.mSource_1._get_eotf__796281135_d632gf_k$()(v[0]);
    v[1] = this.mSource_1._get_eotf__796281135_d632gf_k$()(v[1]);
    v[2] = this.mSource_1._get_eotf__796281135_d632gf_k$()(v[2]);
    mul3x3Float3(this.mTransform_1, v);
    Unit_getInstance();
    v[0] = this.mDestination_1._get_oetf__805218435_dbemir_k$()(v[0]);
    v[1] = this.mDestination_1._get_oetf__805218435_dbemir_k$()(v[1]);
    v[2] = this.mDestination_1._get_oetf__805218435_dbemir_k$()(v[2]);
    return v;
  };
  RgbConnector.$metadata$ = {
    simpleName: 'RgbConnector',
    kind: 'class',
    interfaces: []
  };
  function Companion_24() {
    Companion_instance_24 = this;
  }
  Companion_24.prototype.identity_orxv0l_k$ = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_24;
  function Companion_getInstance_39() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_39();
    this.source_1 = source;
    this.destination_1 = destination;
    this.transformSource_1 = transformSource;
    this.transformDestination_1 = transformDestination;
    this.renderIntent_1 = renderIntent;
    this.transform_1 = transform;
  }
  Connector.prototype._get_source__263461456_4cuw5s_k$ = function () {
    return this.source_1;
  };
  Connector.prototype._get_destination__278591299_4lv6f7_k$ = function () {
    return this.destination_1;
  };
  Connector.prototype._get_renderIntent__806784953_btsedg_k$ = function () {
    return this.renderIntent_1;
  };
  Connector.prototype.transform_2zmpfm_k$ = function (r, g, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([r, g, b]);
      break $l$block;
    }
    return this.transform_aitls9_k$(tmp$ret$0);
  };
  Connector.prototype.transform_aitls9_k$ = function (v) {
    var xyz = this.transformSource_1.toXyz_ox86g9_k$(v);
    if (!(this.transform_1 == null)) {
      var tmp0_array = xyz;
      var tmp1_index0 = 0;
      tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * this.transform_1[0];
      var tmp2_array = xyz;
      var tmp3_index0 = 1;
      tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * this.transform_1[1];
      var tmp4_array = xyz;
      var tmp5_index0 = 2;
      tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] * this.transform_1[2];
    }
    return this.transformDestination_1.fromXyz_idrdie_k$(xyz);
  };
  Connector.$metadata$ = {
    simpleName: 'Connector',
    kind: 'class',
    interfaces: []
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.A_1 = new WhitePoint(0.44757, 0.40745);
    this.B_1 = new WhitePoint(0.34842, 0.35161);
    this.C_1 = new WhitePoint(0.31006, 0.31616);
    this.D50__1 = new WhitePoint(0.34567, 0.3585);
    this.D55__1 = new WhitePoint(0.33242, 0.34743);
    this.D60__1 = new WhitePoint(0.32168, 0.33767);
    this.D65__1 = new WhitePoint(0.31271, 0.32902);
    this.D75__1 = new WhitePoint(0.29902, 0.31485);
    this.E_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.964212, 1.0, 0.825188]);
      break $l$block;
    }
    tmp.D50Xyz_1 = tmp$ret$0;
  }
  Illuminant.prototype._get_A__461225264_7mlnow_k$ = function () {
    return this.A_1;
  };
  Illuminant.prototype._get_B__461225295_7mlnpr_k$ = function () {
    return this.B_1;
  };
  Illuminant.prototype._get_C__461225326_7mlnqm_k$ = function () {
    return this.C_1;
  };
  Illuminant.prototype._get_D50__855929490_e5ljf6_k$ = function () {
    return this.D50__1;
  };
  Illuminant.prototype._get_D55__855929645_e5ljjh_k$ = function () {
    return this.D55__1;
  };
  Illuminant.prototype._get_D60__855930451_e5lk5v_k$ = function () {
    return this.D60__1;
  };
  Illuminant.prototype._get_D65__855930606_e5lka6_k$ = function () {
    return this.D65__1;
  };
  Illuminant.prototype._get_D75__855931567_e5ll0v_k$ = function () {
    return this.D75__1;
  };
  Illuminant.prototype._get_E__461225388_7mlnsc_k$ = function () {
    return this.E_1;
  };
  Illuminant.prototype._get_D50Xyz__4070462225_3pnx7z_k$ = function () {
    return this.D50Xyz_1;
  };
  Illuminant.$metadata$ = {
    simpleName: 'Illuminant',
    kind: 'object',
    interfaces: []
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function _get_A__461225264($this) {
    return $this.A_1;
  }
  function _get_B__461225295($this) {
    return $this.B_1;
  }
  function _get_C__461225326($this) {
    return $this.C_1;
  }
  function _get_D__461225357($this) {
    return $this.D_1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.A_1 = 0.008856452;
    this.B_1 = 7.787037;
    this.C_1 = 0.13793103;
    this.D_1 = 0.20689656;
  }
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_25;
  function Companion_getInstance_40() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Lab(name, id) {
    Companion_getInstance_40();
    ColorSpace.call(this, name, Companion_getInstance_37()._get_Lab__856211652_u83ke3_k$(), id);
  }
  Lab.prototype._get_isWideGamut__867567772_ecizks_k$ = function () {
    return true;
  };
  Lab.prototype.getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  Lab.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  Lab.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_40();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      {
        Companion_getInstance_40();
        var tmp_0 = 1.0 / 7.787037;
        Companion_getInstance_40();
        tmp = tmp_0 * (fx - 0.13793103);
      }
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      {
        Companion_getInstance_40();
        var tmp_2 = 1.0 / 7.787037;
        Companion_getInstance_40();
        tmp_1 = tmp_2 * (fy - 0.13793103);
      }
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      {
        Companion_getInstance_40();
        var tmp_4 = 1.0 / 7.787037;
        Companion_getInstance_40();
        tmp_3 = tmp_4 * (fz - 0.13793103);
      }
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[0];
    v[1] = y * Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[1];
    v[2] = z * Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[2];
    return v;
  };
  Lab.prototype.fromXyz_idrdie_k$ = function (v) {
    var x = v[0] / Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[0];
    var y = v[1] / Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[1];
    var z = v[2] / Illuminant_getInstance()._get_D50Xyz__4070462225_3pnx7z_k$()[2];
    var tmp;
    Companion_getInstance_40();
    if (x > 0.008856452) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = 1.0 / 3.0;
        tmp$ret$0 = Math.pow(x, tmp0_pow_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      {
        Companion_getInstance_40();
        var tmp_0 = 7.787037 * x;
        Companion_getInstance_40();
        tmp = tmp_0 + 0.13793103;
      }
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (y > 0.008856452) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_pow_0 = 1.0 / 3.0;
        tmp$ret$1 = Math.pow(y, tmp1_pow_0);
        break $l$block_0;
      }
      tmp_1 = tmp$ret$1;
    } else {
      {
        Companion_getInstance_40();
        var tmp_2 = 7.787037 * y;
        Companion_getInstance_40();
        tmp_1 = tmp_2 + 0.13793103;
      }
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (z > 0.008856452) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_pow_0 = 1.0 / 3.0;
        tmp$ret$2 = Math.pow(z, tmp2_pow_0);
        break $l$block_1;
      }
      tmp_3 = tmp$ret$2;
    } else {
      {
        Companion_getInstance_40();
        var tmp_4 = 7.787037 * z;
        Companion_getInstance_40();
        tmp_3 = tmp_4 + 0.13793103;
      }
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  Lab.$metadata$ = {
    simpleName: 'Lab',
    kind: 'class',
    interfaces: []
  };
  function _get_M1__1413092487($this) {
    return $this.M1__1;
  }
  function _get_M2__1413092518($this) {
    return $this.M2__1;
  }
  function _get_InverseM1__2584874045($this) {
    return $this.InverseM1__1;
  }
  function _get_InverseM2__2584874076($this) {
    return $this.InverseM2__1;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
      break $l$block;
    }
    tmp.M1__1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_36()._get_Bradford__2414884285_v3cpc3_k$()._get_transform__1260123237_ku8tb9_k$(), Illuminant_getInstance()._get_D50__855929490_e5ljf6_k$().toXyz_1tswm6_k$(), Illuminant_getInstance()._get_D65__855930606_e5lka6_k$().toXyz_1tswm6_k$()));
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
      break $l$block_0;
    }
    tmp_0.M2__1 = tmp$ret$1;
    this.InverseM1__1 = inverse3x3(this.M1__1);
    this.InverseM2__1 = inverse3x3(this.M2__1);
  }
  Companion_26.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_26;
  function Companion_getInstance_41() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Oklab(name, id) {
    Companion_getInstance_41();
    ColorSpace.call(this, name, Companion_getInstance_37()._get_Lab__856211652_u83ke3_k$(), id);
  }
  Oklab.prototype._get_isWideGamut__867567772_ecizks_k$ = function () {
    return true;
  };
  Oklab.prototype.getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  Oklab.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  Oklab.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_41().InverseM2__1, v);
    Unit_getInstance();
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_41().InverseM1__1, v);
    Unit_getInstance();
    return v;
  };
  Oklab.prototype.fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(Companion_getInstance_41().M1__1, v);
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0_sign_0 = v[0];
      tmp$ret$0 = Math.sign(tmp0_sign_0);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_abs_0 = v[0];
        tmp$ret$1 = Math.abs(tmp1_abs_0);
        break $l$block_0;
      }
      var tmp2_pow_0 = tmp$ret$1;
      var tmp3_pow_0 = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(tmp2_pow_0, tmp3_pow_0);
      break $l$block_1;
    }
    v[0] = tmp * tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      var tmp4_sign_0 = v[1];
      tmp$ret$3 = Math.sign(tmp4_sign_0);
      break $l$block_2;
    }
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$4;
      $l$block_3: {
        var tmp5_abs_0 = v[1];
        tmp$ret$4 = Math.abs(tmp5_abs_0);
        break $l$block_3;
      }
      var tmp6_pow_0 = tmp$ret$4;
      var tmp7_pow_0 = 1.0 / 3.0;
      tmp$ret$5 = Math.pow(tmp6_pow_0, tmp7_pow_0);
      break $l$block_4;
    }
    v[1] = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      var tmp8_sign_0 = v[2];
      tmp$ret$6 = Math.sign(tmp8_sign_0);
      break $l$block_5;
    }
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$7;
      $l$block_6: {
        var tmp9_abs_0 = v[2];
        tmp$ret$7 = Math.abs(tmp9_abs_0);
        break $l$block_6;
      }
      var tmp10_pow_0 = tmp$ret$7;
      var tmp11_pow_0 = 1.0 / 3.0;
      tmp$ret$8 = Math.pow(tmp10_pow_0, tmp11_pow_0);
      break $l$block_7;
    }
    v[2] = tmp_1 * tmp$ret$8;
    mul3x3Float3(Companion_getInstance_41().M2__1, v);
    Unit_getInstance();
    return v;
  };
  Oklab.$metadata$ = {
    simpleName: 'Oklab',
    kind: 'class',
    interfaces: []
  };
  function _RenderIntent___init__impl__1169679505(value) {
    return value;
  }
  function _get_value__3683422336_10($this) {
    return $this;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.Perceptual_1 = _RenderIntent___init__impl__1169679505(0);
    this.Relative_1 = _RenderIntent___init__impl__1169679505(1);
    this.Saturation_1 = _RenderIntent___init__impl__1169679505(2);
    this.Absolute_1 = _RenderIntent___init__impl__1169679505(3);
  }
  Companion_27.prototype._get_Perceptual__1327369230_ai5qih_k$ = function () {
    return this.Perceptual_1;
  };
  Companion_27.prototype._get_Relative__3478158943_2mzdxy_k$ = function () {
    return this.Relative_1;
  };
  Companion_27.prototype._get_Saturation__1226274521_tdj40s_k$ = function () {
    return this.Saturation_1;
  };
  Companion_27.prototype._get_Absolute__1223016724_6cb6in_k$ = function () {
    return this.Absolute_1;
  };
  Companion_27.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_27;
  function Companion_getInstance_42() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function RenderIntent__toString_impl_3622781647(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_42().Perceptual_1 ? 'Perceptual' : tmp0_subject === Companion_getInstance_42().Relative_1 ? 'Relative' : tmp0_subject === Companion_getInstance_42().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_42().Absolute_1 ? 'Absolute' : 'Unknown';
  }
  function RenderIntent__hashCode_impl_2307366528(this_0) {
    return this_0;
  }
  function RenderIntent__equals_impl_343020764(this_0, other) {
    if (!(other instanceof RenderIntent))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RenderIntent ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function RenderIntent(value) {
    Companion_getInstance_42();
    this.value_1 = value;
  }
  RenderIntent.prototype.toString = function () {
    return RenderIntent__toString_impl_3622781647(this.value_1);
  };
  RenderIntent.prototype.hashCode = function () {
    return RenderIntent__hashCode_impl_2307366528(this.value_1);
  };
  RenderIntent.prototype.equals = function (other) {
    return RenderIntent__equals_impl_343020764(this.value_1, other);
  };
  RenderIntent.$metadata$ = {
    simpleName: 'RenderIntent',
    kind: 'class',
    interfaces: []
  };
  function _get_DoubleIdentity__973676572($this) {
    return $this.DoubleIdentity_1;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance()._get_SrgbPrimaries__3546555883_cdl1xx_k$())) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance()._get_D65__855930606_e5lka6_k$())) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.oetfOrig_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.eotfOrig_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a(point);
    var rB = b(point);
    var tmp$ret$0;
    $l$block: {
      var tmp0_abs_0 = rA - rB;
      tmp$ret$0 = Math.abs(tmp0_abs_0);
      break $l$block;
    }
    return tmp$ret$0 <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance()._get_Ntsc1953Primaries__3768552653_8pew4z_k$()) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance()._get_SrgbPrimaries__3546555883_cdl1xx_k$()) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    var p0 = tmp$ret$0;
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function computeWhitePoint($this, toXYZ) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0]);
      break $l$block;
    }
    var w = mul3x3Float3(toXYZ, tmp$ret$0);
    var sum = w[0] + w[1] + w[2];
    return new WhitePoint(w[0] / sum, w[1] / sum);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = primaries;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp = tmp$ret$1;
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = xyPrimaries;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        arrayCopy(tmp, tmp$ret$3, 0, 0, 6);
        tmp$ret$4 = xyPrimaries;
        break $l$block_3;
      }
      Unit_getInstance();
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint._get_x__461226969_7mlp09_k$();
    var wy = whitePoint._get_y__461227000_7mlp14_k$();
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Rgb$Companion$DoubleIdentity$lambda() {
    return function (d) {
      return d;
    };
  }
  function _get_min__857202815($this) {
    return $this.min_1;
  }
  function _get_max__857195437($this) {
    return $this.max_1;
  }
  function Rgb_init_$Init$(name, toXYZ, oetf, eotf, $this) {
    Rgb.call($this, name, Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ), computeWhitePoint(Companion_getInstance_43(), toXYZ), null, oetf, eotf, 0.0, 1.0, null, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$());
    return $this;
  }
  function Rgb_init_$Create$(name, toXYZ, oetf, eotf) {
    return Rgb_init_$Init$(name, toXYZ, oetf, eotf, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, $this) {
    Rgb.call($this, name, primaries, whitePoint, null, oetf, eotf, min, max, null, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$());
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, oetf, eotf, min, max) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_1(name, toXYZ, function_0, $this) {
    Rgb_init_$Init$_3(name, Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ), computeWhitePoint(Companion_getInstance_43(), toXYZ), function_0, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_1(name, toXYZ, function_0) {
    return Rgb_init_$Init$_1(name, toXYZ, function_0, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, $this) {
    Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_2(name, primaries, whitePoint, function_0) {
    return Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0._get_e__461226380_7mlojw_k$() === 0.0 ? function_0._get_f__461226411_7mlokr_k$() === 0.0 : false) {
      tmp = Rgb$_init_$lambda_2181024386(function_0);
    } else {
      tmp = Rgb$_init_$lambda_2181024386_0(function_0);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (function_0._get_e__461226380_7mlojw_k$() === 0.0 ? function_0._get_f__461226411_7mlokr_k$() === 0.0 : false) {
      tmp_1 = Rgb$_init_$lambda_2181024386_1(function_0);
    } else {
      tmp_1 = Rgb$_init_$lambda_2181024386_2(function_0);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_1, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$_3(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_4(name, toXYZ, gamma, $this) {
    Rgb_init_$Init$_6(name, Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ), computeWhitePoint(Companion_getInstance_43(), toXYZ), gamma, 0.0, 1.0, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_4(name, toXYZ, gamma) {
    return Rgb_init_$Init$_4(name, toXYZ, gamma, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, $this) {
    Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, 0.0, 1.0, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_5(name, primaries, whitePoint, gamma) {
    return Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      tmp = Rgb$_init_$lambda_2181024386_3(gamma);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (gamma === 1.0) {
      tmp_1 = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      tmp_1 = Rgb$_init_$lambda_2181024386_4(gamma);
    }
    var tmp_2 = tmp_1;
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, tmp_2, min, max, TransferParameters_init_$Create$(gamma, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 96, null), id);
    return $this;
  }
  function Rgb_init_$Create$_6(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, Object.create(Rgb.prototype));
  }
  function Rgb_init_$Init$_7(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace._get_name__804168992_das4rk_k$(), colorSpace.primaries_1, whitePoint, transform, colorSpace.oetfOrig_1, colorSpace.eotfOrig_1, colorSpace.min_1, colorSpace.max_1, colorSpace.transferParameters_1, Companion_getInstance_38()._get_MinId__2517032580_tejb7g_k$());
    return $this;
  }
  function Rgb_init_$Create$_7(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_7(colorSpace, transform, whitePoint, Object.create(Rgb.prototype));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    var tmp = this;
    tmp.DoubleIdentity_1 = Rgb$Companion$DoubleIdentity$lambda();
  }
  Companion_28.prototype.computePrimaries_bmzsl0_k$ = function (toXYZ) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0]);
      break $l$block;
    }
    var r = mul3x3Float3(toXYZ, tmp$ret$0);
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = new Float32Array([0.0, 1.0, 0.0]);
      break $l$block_0;
    }
    var g = mul3x3Float3(toXYZ, tmp$ret$1);
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = new Float32Array([0.0, 0.0, 1.0]);
      break $l$block_1;
    }
    var b = mul3x3Float3(toXYZ, tmp$ret$2);
    var rSum = r[0] + r[1] + r[2];
    var gSum = g[0] + g[1] + g[2];
    var bSum = b[0] + b[1] + b[2];
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_floatArrayOf_0 = new Float32Array([r[0] / rSum, r[1] / rSum, g[0] / gSum, g[1] / gSum, b[0] / bSum, b[1] / bSum]);
      tmp$ret$3 = tmp0_floatArrayOf_0;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  Companion_28.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_28;
  function Companion_getInstance_43() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$_init_$lambda_2181024386($function) {
    return function (x) {
      return rcpResponse(x, $function._get_a__461226256_7mlogg_k$(), $function._get_b__461226287_7mlohb_k$(), $function._get_c__461226318_7mloi6_k$(), $function._get_d__461226349_7mloj1_k$(), $function._get_gamma__3254007050_h7re2e_k$());
    };
  }
  function Rgb$_init_$lambda_2181024386_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function._get_a__461226256_7mlogg_k$(), $function._get_b__461226287_7mlohb_k$(), $function._get_c__461226318_7mloi6_k$(), $function._get_d__461226349_7mloj1_k$(), $function._get_e__461226380_7mlojw_k$(), $function._get_f__461226411_7mlokr_k$(), $function._get_gamma__3254007050_h7re2e_k$());
    };
  }
  function Rgb$_init_$lambda_2181024386_1($function) {
    return function (x) {
      return response(x, $function._get_a__461226256_7mlogg_k$(), $function._get_b__461226287_7mlohb_k$(), $function._get_c__461226318_7mloi6_k$(), $function._get_d__461226349_7mloj1_k$(), $function._get_gamma__3254007050_h7re2e_k$());
    };
  }
  function Rgb$_init_$lambda_2181024386_2($function) {
    return function (x) {
      return response_0(x, $function._get_a__461226256_7mlogg_k$(), $function._get_b__461226287_7mlohb_k$(), $function._get_c__461226318_7mloi6_k$(), $function._get_d__461226349_7mloj1_k$(), $function._get_e__461226380_7mlojw_k$(), $function._get_f__461226411_7mlokr_k$(), $function._get_gamma__3254007050_h7re2e_k$());
    };
  }
  function Rgb$_init_$lambda_2181024386_3($gamma) {
    return function (x) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = x < 0.0 ? 0.0 : x;
        var tmp1_pow_0 = 1.0 / $gamma;
        tmp$ret$0 = Math.pow(tmp0_pow_0, tmp1_pow_0);
        break $l$block;
      }
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_2181024386_4($gamma) {
    return function (x) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = x < 0.0 ? 0.0 : x;
        tmp$ret$0 = Math.pow(tmp0_pow_0, $gamma);
        break $l$block;
      }
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_43();
    ColorSpace.call(this, name, Companion_getInstance_37()._get_Rgb__856396164_j42m9x_k$(), id);
    this.whitePoint_1 = whitePoint;
    this.min_1 = min;
    this.max_1 = max;
    this.transferParameters_1 = transferParameters;
    this.oetfOrig_1 = oetf;
    var tmp = this;
    tmp.oetf_1 = Rgb$oetf$lambda(this);
    this.eotfOrig_1 = eotf;
    var tmp_0 = this;
    tmp_0.eotf_1 = Rgb$eotf$lambda(this);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.min_1 >= this.max_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.min_1 + ', max=' + this.max_1 + '; min must ' + 'be strictly < max');
    }
    this.primaries_1 = xyPrimaries(Companion_getInstance_43(), primaries);
    if (transform == null) {
      this.transform_1 = computeXYZMatrix(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.transform_1 = transform;
    }
    this.inverseTransform_1 = inverse3x3(this.transform_1);
    this.isWideGamut_1 = isWideGamut(Companion_getInstance_43(), this.primaries_1, this.min_1, this.max_1);
    this.isSrgb_1 = isSrgb(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1, oetf, eotf, this.min_1, this.max_1, id);
  }
  Rgb.prototype._get_whitePoint__1400300164_n5pais_k$ = function () {
    return this.whitePoint_1;
  };
  Rgb.prototype._get_transferParameters__919768566_f7ltyu_k$ = function () {
    return this.transferParameters_1;
  };
  Rgb.prototype._get_primaries__1711820849_sb69f5_k$ = function () {
    return this.primaries_1;
  };
  Rgb.prototype._get_transform__1260123237_ku8tb9_k$ = function () {
    return this.transform_1;
  };
  Rgb.prototype._get_inverseTransform__3184762927_iczj69_k$ = function () {
    return this.inverseTransform_1;
  };
  Rgb.prototype._get_oetfOrig__1220913090_k6weki_k$ = function () {
    return this.oetfOrig_1;
  };
  Rgb.prototype._get_oetf__805218435_dbemir_k$ = function () {
    return this.oetf_1;
  };
  Rgb.prototype._get_eotfOrig__2363822702_vxr4pe_k$ = function () {
    return this.eotfOrig_1;
  };
  Rgb.prototype._get_eotf__796281135_d632gf_k$ = function () {
    return this.eotf_1;
  };
  Rgb.prototype._get_isWideGamut__867567772_ecizks_k$ = function () {
    return this.isWideGamut_1;
  };
  Rgb.prototype._get_isSrgb__61479879_10lq6f_k$ = function () {
    return this.isSrgb_1;
  };
  Rgb.prototype.getPrimaries_umjt7a_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyOf_0 = this.primaries_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_copyOf_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.slice();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Rgb.prototype.getTransform_h90fqu_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyOf_0 = this.transform_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_copyOf_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.slice();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Rgb.prototype.getInverseTransform_s9peaa_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyOf_0 = this.inverseTransform_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_copyOf_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.slice();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Rgb.prototype.getPrimaries_y37ab9_k$ = function (primaries) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = this.primaries_1;
      var tmp1_copyInto_0 = tmp0_copyInto_0.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyInto_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = primaries;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto_0);
      tmp$ret$4 = primaries;
      break $l$block_3;
    }
    return tmp$ret$4;
  };
  Rgb.prototype.getTransform_qtf3nl_k$ = function (transform) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = this.transform_1;
      var tmp1_copyInto_0 = tmp0_copyInto_0.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyInto_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = transform;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto_0);
      tmp$ret$4 = transform;
      break $l$block_3;
    }
    return tmp$ret$4;
  };
  Rgb.prototype.getInverseTransform_wdrspp_k$ = function (inverseTransform) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = this.inverseTransform_1;
      var tmp1_copyInto_0 = tmp0_copyInto_0.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyInto_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = inverseTransform;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto_0);
      tmp$ret$4 = inverseTransform;
      break $l$block_3;
    }
    return tmp$ret$4;
  };
  Rgb.prototype.getMinValue_7r60q4_k$ = function (component) {
    return this.min_1;
  };
  Rgb.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return this.max_1;
  };
  Rgb.prototype.toLinear_913fy_k$ = function (r, g, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([r, g, b]);
      break $l$block;
    }
    return this.toLinear_7ax7rf_k$(tmp$ret$0);
  };
  Rgb.prototype.toLinear_7ax7rf_k$ = function (v) {
    v[0] = this.eotf_1(v[0]);
    v[1] = this.eotf_1(v[1]);
    v[2] = this.eotf_1(v[2]);
    return v;
  };
  Rgb.prototype.fromLinear_df0aht_k$ = function (r, g, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Float32Array([r, g, b]);
      break $l$block;
    }
    return this.fromLinear_yxqibq_k$(tmp$ret$0);
  };
  Rgb.prototype.fromLinear_yxqibq_k$ = function (v) {
    v[0] = this.oetf_1(v[0]);
    v[1] = this.oetf_1(v[1]);
    v[2] = this.oetf_1(v[2]);
    return v;
  };
  Rgb.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = this.eotf_1(v[0]);
    v[1] = this.eotf_1(v[1]);
    v[2] = this.eotf_1(v[2]);
    return mul3x3Float3(this.transform_1, v);
  };
  Rgb.prototype.fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(this.inverseTransform_1, v);
    Unit_getInstance();
    v[0] = this.oetf_1(v[0]);
    v[1] = this.oetf_1(v[1]);
    v[2] = this.oetf_1(v[2]);
    return v;
  };
  Rgb.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!ColorSpace.prototype.equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.min_1, this.min_1) === 0))
      return false;
    if (!(compareTo(rgb.max_1, this.max_1) === 0))
      return false;
    if (!this.whitePoint_1.equals(rgb.whitePoint_1))
      return false;
    if (!contentEquals(this.primaries_1, rgb.primaries_1))
      return false;
    if (!(this.transferParameters_1 == null)) {
      return equals(this.transferParameters_1, rgb.transferParameters_1);
    } else if (rgb.transferParameters_1 == null) {
      return true;
    }
    return !equals(this.oetfOrig_1, rgb.oetfOrig_1) ? false : equals(this.eotfOrig_1, rgb.eotfOrig_1);
  };
  Rgb.prototype.hashCode = function () {
    var result = ColorSpace.prototype.hashCode.call(this);
    result = imul(31, result) + this.whitePoint_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.primaries_1) | 0;
    result = imul(31, result) + (!(this.min_1 === 0.0) ? toBits(this.min_1) : 0) | 0;
    result = imul(31, result) + (!(this.max_1 === 0.0) ? toBits(this.max_1) : 0) | 0;
    result = imul(31, result) + (!(this.transferParameters_1 == null) ? this.transferParameters_1.hashCode() : 0) | 0;
    if (this.transferParameters_1 == null) {
      result = imul(31, result) + hashCode(this.oetfOrig_1) | 0;
      result = imul(31, result) + hashCode(this.eotfOrig_1) | 0;
    }
    return result;
  };
  Rgb.$metadata$ = {
    simpleName: 'Rgb',
    kind: 'class',
    interfaces: []
  };
  function TransferParameters_init_$Init$(gamma, a, b, c, d, e, f, $mask0, $marker, $this) {
    if (!(($mask0 & 32) === 0))
      e = 0.0;
    if (!(($mask0 & 64) === 0))
      f = 0.0;
    TransferParameters.call($this, gamma, a, b, c, d, e, f);
    return $this;
  }
  function TransferParameters_init_$Create$(gamma, a, b, c, d, e, f, $mask0, $marker) {
    return TransferParameters_init_$Init$(gamma, a, b, c, d, e, f, $mask0, $marker, Object.create(TransferParameters.prototype));
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    this.gamma_1 = gamma;
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
    if ((((((isNaN_0(this.a_1) ? true : isNaN_0(this.b_1)) ? true : isNaN_0(this.c_1)) ? true : isNaN_0(this.d_1)) ? true : isNaN_0(this.e_1)) ? true : isNaN_0(this.f_1)) ? true : isNaN_0(this.gamma_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.d_1 >= 0.0 ? this.d_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d_1));
    }
    if (this.d_1 === 0.0 ? this.a_1 === 0.0 ? true : this.gamma_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.d_1 >= 1.0 ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.a_1 === 0.0 ? true : this.gamma_1 === 0.0) ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.c_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.a_1 < 0.0 ? true : this.gamma_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  TransferParameters.prototype._get_gamma__3254007050_h7re2e_k$ = function () {
    return this.gamma_1;
  };
  TransferParameters.prototype._get_a__461226256_7mlogg_k$ = function () {
    return this.a_1;
  };
  TransferParameters.prototype._get_b__461226287_7mlohb_k$ = function () {
    return this.b_1;
  };
  TransferParameters.prototype._get_c__461226318_7mloi6_k$ = function () {
    return this.c_1;
  };
  TransferParameters.prototype._get_d__461226349_7mloj1_k$ = function () {
    return this.d_1;
  };
  TransferParameters.prototype._get_e__461226380_7mlojw_k$ = function () {
    return this.e_1;
  };
  TransferParameters.prototype._get_f__461226411_7mlokr_k$ = function () {
    return this.f_1;
  };
  TransferParameters.prototype.component1_7eebsc_k$ = function () {
    return this.gamma_1;
  };
  TransferParameters.prototype.component2_7eebsb_k$ = function () {
    return this.a_1;
  };
  TransferParameters.prototype.component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  TransferParameters.prototype.component4_7eebs9_k$ = function () {
    return this.c_1;
  };
  TransferParameters.prototype.component5_7eebs8_k$ = function () {
    return this.d_1;
  };
  TransferParameters.prototype.component6_7eebs7_k$ = function () {
    return this.e_1;
  };
  TransferParameters.prototype.component7_7eebs6_k$ = function () {
    return this.f_1;
  };
  TransferParameters.prototype.copy_hfgv4i_k$ = function (gamma, a, b, c, d, e, f) {
    return new TransferParameters(gamma, a, b, c, d, e, f);
  };
  TransferParameters.prototype.copy$default_wkmlyh_k$ = function (gamma, a, b, c, d, e, f, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      gamma = this.gamma_1;
    if (!(($mask0 & 2) === 0))
      a = this.a_1;
    if (!(($mask0 & 4) === 0))
      b = this.b_1;
    if (!(($mask0 & 8) === 0))
      c = this.c_1;
    if (!(($mask0 & 16) === 0))
      d = this.d_1;
    if (!(($mask0 & 32) === 0))
      e = this.e_1;
    if (!(($mask0 & 64) === 0))
      f = this.f_1;
    return this.copy_hfgv4i_k$(gamma, a, b, c, d, e, f);
  };
  TransferParameters.prototype.toString = function () {
    return 'TransferParameters(gamma=' + this.gamma_1 + ', a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  TransferParameters.prototype.hashCode = function () {
    var result = getNumberHashCode(this.gamma_1);
    result = imul(result, 31) + getNumberHashCode(this.a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f_1) | 0;
    return result;
  };
  TransferParameters.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.gamma_1, tmp0_other_with_cast.gamma_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  TransferParameters.$metadata$ = {
    simpleName: 'TransferParameters',
    kind: 'class',
    interfaces: []
  };
  function WhitePoint_init_$Init$(x, y, z, $this) {
    WhitePoint_init_$Init$_0(x, y, z, x + y + z, $this);
    return $this;
  }
  function WhitePoint_init_$Create$(x, y, z) {
    return WhitePoint_init_$Init$(x, y, z, Object.create(WhitePoint.prototype));
  }
  function WhitePoint_init_$Init$_0(x, y, z, sum, $this) {
    WhitePoint.call($this, x / sum, y / sum);
    return $this;
  }
  function WhitePoint_init_$Create$_0(x, y, z, sum) {
    return WhitePoint_init_$Init$_0(x, y, z, sum, Object.create(WhitePoint.prototype));
  }
  function WhitePoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  WhitePoint.prototype._get_x__461226969_7mlp09_k$ = function () {
    return this.x_1;
  };
  WhitePoint.prototype._get_y__461227000_7mlp14_k$ = function () {
    return this.y_1;
  };
  WhitePoint.prototype.toXyz_1tswm6_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_floatArrayOf_0 = new Float32Array([this.x_1 / this.y_1, 1.0, (1.0 - this.x_1 - this.y_1) / this.y_1]);
      tmp$ret$0 = tmp0_floatArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  WhitePoint.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  WhitePoint.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  WhitePoint.prototype.copy_138fzp_k$ = function (x, y) {
    return new WhitePoint(x, y);
  };
  WhitePoint.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  WhitePoint.prototype.toString = function () {
    return 'WhitePoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  WhitePoint.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  WhitePoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  WhitePoint.$metadata$ = {
    simpleName: 'WhitePoint',
    kind: 'class',
    interfaces: []
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_37()._get_Xyz__856592952_6koftd_k$(), id);
  }
  Xyz.prototype._get_isWideGamut__867567772_ecizks_k$ = function () {
    return true;
  };
  Xyz.prototype.getMinValue_7r60q4_k$ = function (component) {
    return -2.0;
  };
  Xyz.prototype.getMaxValue_8bwqwu_k$ = function (component) {
    return 2.0;
  };
  Xyz.prototype.toXyz_ox86g9_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  Xyz.prototype.fromXyz_idrdie_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  Xyz.$metadata$ = {
    simpleName: 'Xyz',
    kind: 'class',
    interfaces: []
  };
  function _get_DefaultDensity__995593060() {
    init_properties_CanvasDrawScope_kt_1056773948();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawParams_init_$Init$(density, layoutDirection, canvas, size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      density = _get_DefaultDensity__995593060();
    if (!(($mask0 & 2) === 0))
      layoutDirection = LayoutDirection_Ltr_getInstance();
    if (!(($mask0 & 4) === 0))
      canvas = new EmptyCanvas();
    if (!(($mask0 & 8) === 0))
      size = Companion_getInstance_0()._get_Zero__785822851_xminaz_k$();
    DrawParams.call($this, density, layoutDirection, canvas, size);
    return $this;
  }
  function DrawParams_init_$Create$(density, layoutDirection, canvas, size, $mask0, $marker) {
    return DrawParams_init_$Init$(density, layoutDirection, canvas, size, $mask0, $marker, Object.create(DrawParams.prototype));
  }
  function _set_fillPaint__536013962($this, _set____804775014) {
    $this.fillPaint_1 = _set____804775014;
  }
  function _get_fillPaint__2307750166($this) {
    return $this.fillPaint_1;
  }
  function _set_strokePaint__3426552767($this, _set____804775014) {
    $this.strokePaint_1 = _set____804775014;
  }
  function _get_strokePaint__963028299($this) {
    return $this.strokePaint_1;
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.fillPaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = Paint_0();
          {
          }
          {
            tmp0_apply_0._set_style__1257298356_8mxg83_k$(Companion_getInstance_24()._get_Fill__767465736_kmbul_k$());
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        var tmp1_also_0 = tmp$ret$0;
        {
        }
        {
          $this.fillPaint_1 = tmp1_also_0;
        }
        tmp$ret$1 = tmp1_also_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.strokePaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = Paint_0();
          {
          }
          {
            tmp0_apply_0._set_style__1257298356_8mxg83_k$(Companion_getInstance_24()._get_Stroke__2068408243_162ry_k$());
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        var tmp1_also_0 = tmp$ret$0;
        {
        }
        {
          $this.strokePaint_1 = tmp1_also_0;
        }
        tmp$ret$1 = tmp1_also_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp0_subject = drawStyle;
    var tmp;
    if (equals(tmp0_subject, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (tmp0_subject instanceof Stroke) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = obtainStrokePaint($this);
          {
          }
          {
            if (!(tmp0_apply_0._get_strokeWidth__1170676963_jczo4j_k$() === drawStyle._get_width__3719200459_9isoj9_k$()))
              tmp0_apply_0._set_strokeWidth__3634201431_czjeca_k$(drawStyle._get_width__3719200459_9isoj9_k$());
            if (!(tmp0_apply_0._get_strokeCap__2355919639_hktlmt_k$() === drawStyle._get_cap__856897279_1illxv_k$()))
              tmp0_apply_0._set_strokeCap__584183435_c817yr_k$(drawStyle._get_cap__856897279_1illxv_k$());
            if (!(tmp0_apply_0._get_strokeMiterLimit__363445885_60dwn1_k$() === drawStyle._get_miter__3433371500_e8yzkk_k$()))
              tmp0_apply_0._set_strokeMiterLimit__2899656841_2039e4_k$(drawStyle._get_miter__3433371500_e8yzkk_k$());
            if (!(tmp0_apply_0._get_strokeJoin__25941321_vi8a99_k$() === drawStyle._get_join__800888417_749979_k$()))
              tmp0_apply_0._set_strokeJoin__936693845_lquok1_k$(drawStyle._get_join__800888417_749979_k$());
            if (!equals(tmp0_apply_0._get_pathEffect__2614688053_rse7rf_k$(), drawStyle._get_pathEffect__2614688053_rse7rf_k$()))
              tmp0_apply_0._set_pathEffect__3525440577_ui6dfw_k$(drawStyle._get_pathEffect__2614688053_rse7rf_k$());
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = selectPaint($this, style);
      {
      }
      {
        if (!(brush == null)) {
          brush.applyTo_w34vc_k$($this._get_size__809037418_1k4d9o_k$(), tmp0_apply_0, alpha);
        } else if (!(tmp0_apply_0._get_alpha__3092475443_jvxknh_k$() === alpha)) {
          tmp0_apply_0._set_alpha__734313383_z7qst2_k$(alpha);
        }
        if (!equals(tmp0_apply_0._get_colorFilter__3064741942_kcfzyi_k$(), colorFilter))
          tmp0_apply_0._set_colorFilter__1233299114_zj5u0_k$(colorFilter);
        if (!(tmp0_apply_0._get_blendMode__685958973_6thn5b_k$() === blendMode))
          tmp0_apply_0._set_blendMode__3209190065_wrkf95_k$(blendMode);
        if (!(tmp0_apply_0._get_filterQuality__3331540810_vtnnjf_k$() === filterQuality))
          tmp0_apply_0._set_filterQuality__4251574462_9931wt_k$(filterQuality);
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_44()._get_DefaultFilterQuality__2713589573_rlev96_k$();
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = selectPaint($this, style);
      {
      }
      {
        var targetColor_2 = modulate(color, $this, alpha);
        if (!equals(tmp0_apply_0._get_color__3152392398_60nqpf_k$(), targetColor_2))
          tmp0_apply_0._set_color__794230338_2k89d1_k$(targetColor_2);
        if (!(tmp0_apply_0._get_shader__44172230_qarie_k$() == null))
          tmp0_apply_0._set_shader__4250559698_bmh5tm_k$(null);
        if (!equals(tmp0_apply_0._get_colorFilter__3064741942_kcfzyi_k$(), colorFilter))
          tmp0_apply_0._set_colorFilter__1233299114_zj5u0_k$(colorFilter);
        if (!(tmp0_apply_0._get_blendMode__685958973_6thn5b_k$() === blendMode))
          tmp0_apply_0._set_blendMode__3209190065_wrkf95_k$(blendMode);
        if (!(tmp0_apply_0._get_filterQuality__3331540810_vtnnjf_k$() === filterQuality))
          tmp0_apply_0._set_filterQuality__4251574462_9931wt_k$(filterQuality);
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      filterQuality = Companion_getInstance_44()._get_DefaultFilterQuality__2713589573_rlev96_k$();
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = obtainStrokePaint($this);
      {
      }
      {
        var targetColor_2 = modulate(color, $this, alpha);
        if (!equals(tmp0_apply_0._get_color__3152392398_60nqpf_k$(), targetColor_2))
          tmp0_apply_0._set_color__794230338_2k89d1_k$(targetColor_2);
        if (!(tmp0_apply_0._get_shader__44172230_qarie_k$() == null))
          tmp0_apply_0._set_shader__4250559698_bmh5tm_k$(null);
        if (!equals(tmp0_apply_0._get_colorFilter__3064741942_kcfzyi_k$(), colorFilter))
          tmp0_apply_0._set_colorFilter__1233299114_zj5u0_k$(colorFilter);
        if (!(tmp0_apply_0._get_blendMode__685958973_6thn5b_k$() === blendMode))
          tmp0_apply_0._set_blendMode__3209190065_wrkf95_k$(blendMode);
        if (!(tmp0_apply_0._get_strokeWidth__1170676963_jczo4j_k$() === strokeWidth))
          tmp0_apply_0._set_strokeWidth__3634201431_czjeca_k$(strokeWidth);
        if (!(tmp0_apply_0._get_strokeMiterLimit__363445885_60dwn1_k$() === miter))
          tmp0_apply_0._set_strokeMiterLimit__2899656841_2039e4_k$(miter);
        if (!(tmp0_apply_0._get_strokeCap__2355919639_hktlmt_k$() === cap))
          tmp0_apply_0._set_strokeCap__584183435_c817yr_k$(cap);
        if (!(tmp0_apply_0._get_strokeJoin__25941321_vi8a99_k$() === join))
          tmp0_apply_0._set_strokeJoin__936693845_lquok1_k$(join);
        if (!equals(tmp0_apply_0._get_pathEffect__2614688053_rse7rf_k$(), pathEffect))
          tmp0_apply_0._set_pathEffect__3525440577_ui6dfw_k$(pathEffect);
        if (!(tmp0_apply_0._get_filterQuality__3331540810_vtnnjf_k$() === filterQuality))
          tmp0_apply_0._set_filterQuality__4251574462_9931wt_k$(filterQuality);
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 1024) === 0))
      filterQuality = Companion_getInstance_44()._get_DefaultFilterQuality__2713589573_rlev96_k$();
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = obtainStrokePaint($this);
      {
      }
      {
        if (!(brush == null)) {
          brush.applyTo_w34vc_k$($this._get_size__809037418_1k4d9o_k$(), tmp0_apply_0, alpha);
        } else if (!(tmp0_apply_0._get_alpha__3092475443_jvxknh_k$() === alpha)) {
          tmp0_apply_0._set_alpha__734313383_z7qst2_k$(alpha);
        }
        if (!equals(tmp0_apply_0._get_colorFilter__3064741942_kcfzyi_k$(), colorFilter))
          tmp0_apply_0._set_colorFilter__1233299114_zj5u0_k$(colorFilter);
        if (!(tmp0_apply_0._get_blendMode__685958973_6thn5b_k$() === blendMode))
          tmp0_apply_0._set_blendMode__3209190065_wrkf95_k$(blendMode);
        if (!(tmp0_apply_0._get_strokeWidth__1170676963_jczo4j_k$() === strokeWidth))
          tmp0_apply_0._set_strokeWidth__3634201431_czjeca_k$(strokeWidth);
        if (!(tmp0_apply_0._get_strokeMiterLimit__363445885_60dwn1_k$() === miter))
          tmp0_apply_0._set_strokeMiterLimit__2899656841_2039e4_k$(miter);
        if (!(tmp0_apply_0._get_strokeCap__2355919639_hktlmt_k$() === cap))
          tmp0_apply_0._set_strokeCap__584183435_c817yr_k$(cap);
        if (!(tmp0_apply_0._get_strokeJoin__25941321_vi8a99_k$() === join))
          tmp0_apply_0._set_strokeJoin__936693845_lquok1_k$(join);
        if (!equals(tmp0_apply_0._get_pathEffect__2614688053_rse7rf_k$(), pathEffect))
          tmp0_apply_0._set_pathEffect__3525440577_ui6dfw_k$(pathEffect);
        if (!(tmp0_apply_0._get_filterQuality__3331540810_vtnnjf_k$() === filterQuality))
          tmp0_apply_0._set_filterQuality__4251574462_9931wt_k$(filterQuality);
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function configureStrokePaint$default_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $mask0, $handler) {
    if (!(($mask0 & 1024) === 0))
      filterQuality = Companion_getInstance_44()._get_DefaultFilterQuality__2713589573_rlev96_k$();
    return configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__1828080292, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      var tmp_0 = _Color___get_alpha__impl__1955818045(_this__1828080292) * alpha;
      tmp = Color__copy$default_impl_868080376(_this__1828080292, tmp_0, 0.0, 0.0, 0.0, 14, null);
    } else {
      tmp = _this__1828080292;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.canvas_1 = canvas;
    this.size_1 = size;
  }
  DrawParams.prototype._set_density__269624221_aa6sdk_k$ = function (_set____804775014) {
    this.density_1 = _set____804775014;
  };
  DrawParams.prototype._get_density__3015598889_l5pazb_k$ = function () {
    return this.density_1;
  };
  DrawParams.prototype._set_layoutDirection__1209087920_ea74si_k$ = function (_set____804775014) {
    this.layoutDirection_1 = _set____804775014;
  };
  DrawParams.prototype._get_layoutDirection__1820011324_u3l5q4_k$ = function () {
    return this.layoutDirection_1;
  };
  DrawParams.prototype._set_canvas__2747536831_zgklwv_k$ = function (_set____804775014) {
    this.canvas_1 = _set____804775014;
  };
  DrawParams.prototype._get_canvas__2836116659_o4k8ct_k$ = function () {
    return this.canvas_1;
  };
  DrawParams.prototype._set_size__594420342_5ynfl6_k$ = function (_set____804775014) {
    this.size_1 = _set____804775014;
  };
  DrawParams.prototype._get_size__809037418_1k4d9o_k$ = function () {
    return this.size_1;
  };
  DrawParams.prototype.component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  DrawParams.prototype.component2_7eebsb_k$ = function () {
    return this.layoutDirection_1;
  };
  DrawParams.prototype.component3_7eebsa_k$ = function () {
    return this.canvas_1;
  };
  DrawParams.prototype.component4_e3pqs9_k$ = function () {
    return this.size_1;
  };
  DrawParams.prototype.copy_vtyzqi_k$ = function (density, layoutDirection, canvas, size) {
    return new DrawParams(density, layoutDirection, canvas, size);
  };
  DrawParams.prototype.copy$default_xm32sz_k$ = function (density, layoutDirection, canvas, size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      density = this.density_1;
    if (!(($mask0 & 2) === 0))
      layoutDirection = this.layoutDirection_1;
    if (!(($mask0 & 4) === 0))
      canvas = this.canvas_1;
    if (!(($mask0 & 8) === 0))
      size = this.size_1;
    return this.copy_vtyzqi_k$(density, layoutDirection, canvas, size);
  };
  DrawParams.prototype.toString = function () {
    return 'DrawParams(density=' + this.density_1 + ', layoutDirection=' + this.layoutDirection_1 + ', canvas=' + this.canvas_1 + ', size=' + new Size_0(this.size_1) + ')';
  };
  DrawParams.prototype.hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.layoutDirection_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.canvas_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_149567089(this.size_1) | 0;
    return result;
  };
  DrawParams.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!this.layoutDirection_1.equals(tmp0_other_with_cast.layoutDirection_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  DrawParams.$metadata$ = {
    simpleName: 'DrawParams',
    kind: 'class',
    interfaces: []
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.this$0__1 = this$0;
    this.transform_1 = asDrawTransform(this);
  }
  CanvasDrawScope$drawContext$1.prototype._get_canvas__2836116659_o4k8ct_k$ = function () {
    return this.this$0__1.drawParams_1.canvas_1;
  };
  CanvasDrawScope$drawContext$1.prototype._set_size__594420342_5ynfl6_k$ = function (value) {
    this.this$0__1.drawParams_1.size_1 = value;
  };
  CanvasDrawScope$drawContext$1.prototype._get_size__809037418_1k4d9o_k$ = function () {
    return this.this$0__1.drawParams_1.size_1;
  };
  CanvasDrawScope$drawContext$1.prototype._get_transform__1260123237_ku8tb9_k$ = function () {
    return this.transform_1;
  };
  CanvasDrawScope$drawContext$1.$metadata$ = {
    kind: 'class',
    interfaces: [DrawContext]
  };
  function CanvasDrawScope() {
    var tmp = this;
    tmp.drawParams_1 = DrawParams_init_$Create$(null, null, null, null, 15, null);
    var tmp_0 = this;
    tmp_0.drawContext_1 = new CanvasDrawScope$drawContext$1(this);
    this.fillPaint_1 = null;
    this.strokePaint_1 = null;
  }
  CanvasDrawScope.prototype._get_drawParams__757218785_cittr5_k$ = function () {
    return this.drawParams_1;
  };
  CanvasDrawScope.prototype._get_layoutDirection__1820011324_u3l5q4_k$ = function () {
    return this.drawParams_1.layoutDirection_1;
  };
  CanvasDrawScope.prototype._get_density__3015598889_l5pazb_k$ = function () {
    return this.drawParams_1.density_1._get_density__3015598889_l5pazb_k$();
  };
  CanvasDrawScope.prototype._get_fontScale__2136167286_zbth86_k$ = function () {
    return this.drawParams_1.density_1._get_fontScale__2136167286_zbth86_k$();
  };
  CanvasDrawScope.prototype._get_drawContext__260196134_4awwme_k$ = function () {
    return this.drawContext_1;
  };
  CanvasDrawScope.prototype.drawLine_94tzv7_k$ = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = Companion_getInstance_45()._get_DefaultMiter__1330713191_m09svb_k$();
    var tmp_1 = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
    return tmp.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default_0(this, brush, strokeWidth, tmp_0, cap, tmp_1, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawLine_qcvbii_k$ = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = Companion_getInstance_45()._get_DefaultMiter__1330713191_m09svb_k$();
    var tmp_1 = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
    return tmp.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default(this, color, strokeWidth, tmp_0, cap, tmp_1, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawRect_4jm64w_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawRect_iwqaze_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawRect_srg7q1_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawRect_iwqaze_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_bk8e6s_k$ = function (image, topLeft, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawImage_wbfair_k$(image, topLeft, configurePaint$default(this, null, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_td6jz_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint$default(this, null, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawImage_riofdh_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.drawParams_1.canvas_1.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  CanvasDrawScope.prototype.drawRoundRect_nkvmol_k$ = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    var tmp_4 = _CornerRadius___get_x__impl__69289799(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__1812100134(cornerRadius);
    return tmp.drawRoundRect_8v0cs4_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawRoundRect_q7amlu_k$ = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    var tmp_4 = _CornerRadius___get_x__impl__69289799(cornerRadius);
    var tmp_5 = _CornerRadius___get_y__impl__1812100134(cornerRadius);
    return tmp.drawRoundRect_8v0cs4_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawCircle_sp46sp_k$ = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawCircle_8yzxtr_k$(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawCircle_n7txn6_k$ = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawCircle_8yzxtr_k$(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawOval_poyb4u_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawOval_wmf8q4_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawOval_1h49jp_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawOval_wmf8q4_k$(tmp_0, tmp_1, tmp_2, tmp_3, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawArc_vjjneq_k$ = function (brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawArc_xj6sd2_k$(tmp_0, tmp_1, tmp_2, tmp_3, startAngle, sweepAngle, useCenter, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawArc_y7e861_k$ = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = _Offset___get_x__impl__2048295803(topLeft);
    var tmp_1 = _Offset___get_y__impl__3791106138(topLeft);
    var tmp_2 = _Offset___get_x__impl__2048295803(topLeft) + _Size___get_width__impl__3977603903(size);
    var tmp_3 = _Offset___get_y__impl__3791106138(topLeft) + _Size___get_height__impl__604880786(size);
    return tmp.drawArc_xj6sd2_k$(tmp_0, tmp_1, tmp_2, tmp_3, startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPath_vpl0ok_k$ = function (path, color, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawPath_843lu1_k$(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPath_vsb9f_k$ = function (path, brush, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    return tmp.drawPath_843lu1_k$(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode, null, 64, null));
  };
  CanvasDrawScope.prototype.drawPoints_tvcs0g_k$ = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = Companion_getInstance_45()._get_DefaultMiter__1330713191_m09svb_k$();
    var tmp_1 = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
    return tmp.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, tmp_0, cap, tmp_1, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.drawPoints_yexgjr_k$ = function (points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    var tmp_0 = Companion_getInstance_45()._get_DefaultMiter__1330713191_m09svb_k$();
    var tmp_1 = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
    return tmp.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default_0(this, brush, strokeWidth, tmp_0, cap, tmp_1, pathEffect, alpha, colorFilter, blendMode, null, 1024, null));
  };
  CanvasDrawScope.prototype.draw_3qpj3e_k$ = function (density, layoutDirection, canvas, size, block) {
    var tmp0_container = this.drawParams_1;
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = this.drawParams_1;
      {
      }
      {
        tmp0_apply_0.density_1 = density;
        tmp0_apply_0.layoutDirection_1 = layoutDirection;
        tmp0_apply_0.canvas_1 = canvas;
        tmp0_apply_0.size_1 = size;
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    Unit_getInstance();
    canvas.save_erlm4_k$();
    block(this);
    canvas.restore_a2id37_k$();
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_apply_0 = this.drawParams_1;
      {
      }
      {
        tmp1_apply_0.density_1 = prevDensity;
        tmp1_apply_0.layoutDirection_1 = prevLayoutDirection;
        tmp1_apply_0.canvas_1 = prevCanvas;
        tmp1_apply_0.size_1 = prevSize;
      }
      tmp$ret$1 = tmp1_apply_0;
      break $l$block_0;
    }
    Unit_getInstance();
  };
  CanvasDrawScope.$metadata$ = {
    simpleName: 'CanvasDrawScope',
    kind: 'class',
    interfaces: [DrawScope]
  };
  function asDrawTransform(_this__1828080292) {
    init_properties_CanvasDrawScope_kt_1056773948();
    return new asDrawTransform$1(_this__1828080292);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.$this_asDrawTransform_1 = $this_asDrawTransform;
  }
  asDrawTransform$1.prototype._get_size__809037418_1k4d9o_k$ = function () {
    return this.$this_asDrawTransform_1._get_size__809037418_1k4d9o_k$();
  };
  asDrawTransform$1.prototype._get_center__2950577494_k1whsm_k$ = function () {
    return _get_center__2950577494(this._get_size__809037418_1k4d9o_k$());
  };
  asDrawTransform$1.prototype.inset_n0cgms_k$ = function (left, top, right, bottom) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$();
      {
      }
      var updatedSize_2 = Size(_Size___get_width__impl__3977603903(this._get_size__809037418_1k4d9o_k$()) - (left + right), _Size___get_height__impl__604880786(this._get_size__809037418_1k4d9o_k$()) - (top + bottom));
      {
        var tmp0_require_0_3 = _Size___get_width__impl__3977603903(updatedSize_2) >= 0 ? _Size___get_height__impl__604880786(updatedSize_2) >= 0 : false;
        {
        }
        if (!tmp0_require_0_3) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Width and height must be greater than or equal to zero';
            break $l$block;
          }
          var message_1_4 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_1_4));
        }
      }
      this.$this_asDrawTransform_1._set_size__594420342_5ynfl6_k$(updatedSize_2);
      tmp$ret$1 = tmp0_let_0.translate_62wf99_k$(left, top);
      break $l$block_0;
    }
  };
  asDrawTransform$1.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$().clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
  };
  asDrawTransform$1.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$().clipPath_kn87dc_k$(path, clipOp);
  };
  asDrawTransform$1.prototype.translate_62wf99_k$ = function (left, top) {
    this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$().translate_62wf99_k$(left, top);
  };
  asDrawTransform$1.prototype.rotate_qski4n_k$ = function (degrees, pivot) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$();
      {
      }
      {
        tmp0_apply_0.translate_62wf99_k$(_Offset___get_x__impl__2048295803(pivot), _Offset___get_y__impl__3791106138(pivot));
        tmp0_apply_0.rotate_ypq2w2_k$(degrees);
        tmp0_apply_0.translate_62wf99_k$(-_Offset___get_x__impl__2048295803(pivot), -_Offset___get_y__impl__3791106138(pivot));
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    Unit_getInstance();
  };
  asDrawTransform$1.prototype.scale_qp5ya8_k$ = function (scaleX, scaleY, pivot) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$();
      {
      }
      {
        tmp0_apply_0.translate_62wf99_k$(_Offset___get_x__impl__2048295803(pivot), _Offset___get_y__impl__3791106138(pivot));
        tmp0_apply_0.scale_sphyvb_k$(scaleX, scaleY);
        tmp0_apply_0.translate_62wf99_k$(-_Offset___get_x__impl__2048295803(pivot), -_Offset___get_y__impl__3791106138(pivot));
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    Unit_getInstance();
  };
  asDrawTransform$1.prototype.transform_v2nyvt_k$ = function (matrix) {
    this.$this_asDrawTransform_1._get_canvas__2836116659_o4k8ct_k$().concat_oxfhdd_k$(matrix);
  };
  asDrawTransform$1.$metadata$ = {
    kind: 'class',
    interfaces: [DrawTransform]
  };
  var properties_initialized_CanvasDrawScope_kt_550905752;
  function init_properties_CanvasDrawScope_kt_1056773948() {
    if (!properties_initialized_CanvasDrawScope_kt_550905752) {
      properties_initialized_CanvasDrawScope_kt_550905752 = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function ContentDrawScope() {
  }
  ContentDrawScope.$metadata$ = {
    simpleName: 'ContentDrawScope',
    kind: 'interface',
    interfaces: [DrawScope]
  };
  function DrawContext() {
  }
  DrawContext.$metadata$ = {
    simpleName: 'DrawContext',
    kind: 'interface',
    interfaces: []
  };
  function offsetSize(_this__1828080292, $this, offset) {
    return Size(_Size___get_width__impl__3977603903(_this__1828080292) - _Offset___get_x__impl__2048295803(offset), _Size___get_height__impl__604880786(_this__1828080292) - _Offset___get_y__impl__3791106138(offset));
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.DefaultBlendMode_1 = Companion_getInstance_14()._get_SrcOver__1757445465_k11yab_k$();
    this.DefaultFilterQuality_1 = Companion_getInstance_19()._get_Low__856225757_7gcbvm_k$();
  }
  Companion_29.prototype._get_DefaultBlendMode__785575096_mtwk4_k$ = function () {
    return this.DefaultBlendMode_1;
  };
  Companion_29.prototype._get_DefaultFilterQuality__2713589573_rlev96_k$ = function () {
    return this.DefaultFilterQuality_1;
  };
  Companion_29.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_29;
  function Companion_getInstance_44() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function DrawScope() {
    Companion_getInstance_44();
  }
  DrawScope.$metadata$ = {
    simpleName: 'DrawScope',
    kind: 'interface',
    interfaces: [Density_0]
  };
  function DrawStyle() {
  }
  DrawStyle.$metadata$ = {
    simpleName: 'DrawStyle',
    kind: 'class',
    interfaces: []
  };
  function drawIntoCanvas(_this__1828080292, block) {
    return block(_this__1828080292._get_drawContext__260196134_4awwme_k$()._get_canvas__2836116659_o4k8ct_k$());
  }
  function Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      width = 0.0;
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_45();
      miter = 4.0;
    }
    if (!(($mask0 & 4) === 0))
      cap = Companion_getInstance_32()._get_Butt__764137080_goepja_k$();
    if (!(($mask0 & 8) === 0))
      join = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
    if (!(($mask0 & 16) === 0))
      pathEffect = null;
    Stroke.call($this, width, miter, cap, join, pathEffect);
    return $this;
  }
  function Stroke_init_$Create$(width, miter, cap, join, pathEffect, $mask0, $marker) {
    return Stroke_init_$Init$(width, miter, cap, join, pathEffect, $mask0, $marker, Object.create(Stroke.prototype));
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.HairlineWidth_1 = 0.0;
    this.DefaultMiter_1 = 4.0;
    this.DefaultCap_1 = Companion_getInstance_32()._get_Butt__764137080_goepja_k$();
    this.DefaultJoin_1 = Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$();
  }
  Companion_30.prototype._get_HairlineWidth__1981459041_wrpjkx_k$ = function () {
    return this.HairlineWidth_1;
  };
  Companion_30.prototype._get_DefaultMiter__1330713191_m09svb_k$ = function () {
    return this.DefaultMiter_1;
  };
  Companion_30.prototype._get_DefaultCap__3639063738_nnu7co_k$ = function () {
    return this.DefaultCap_1;
  };
  Companion_30.prototype._get_DefaultJoin__1148702726_yjm5kg_k$ = function () {
    return this.DefaultJoin_1;
  };
  Companion_30.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_30;
  function Companion_getInstance_45() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_45();
    DrawStyle.call(this);
    this.width_1 = width;
    this.miter_1 = miter;
    this.cap_1 = cap;
    this.join_1 = join;
    this.pathEffect_1 = pathEffect;
  }
  Stroke.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.width_1;
  };
  Stroke.prototype._get_miter__3433371500_e8yzkk_k$ = function () {
    return this.miter_1;
  };
  Stroke.prototype._get_cap__856897279_1illxv_k$ = function () {
    return this.cap_1;
  };
  Stroke.prototype._get_join__800888417_749979_k$ = function () {
    return this.join_1;
  };
  Stroke.prototype._get_pathEffect__2614688053_rse7rf_k$ = function () {
    return this.pathEffect_1;
  };
  Stroke.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    else {
    }
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.miter_1 === other.miter_1))
      return false;
    if (!(this.cap_1 === other.cap_1))
      return false;
    if (!(this.join_1 === other.join_1))
      return false;
    if (!equals(this.pathEffect_1, other.pathEffect_1))
      return false;
    return true;
  };
  Stroke.prototype.hashCode = function () {
    var result = getNumberHashCode(this.width_1);
    result = imul(31, result) + getNumberHashCode(this.miter_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_2741652248(this.cap_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_224997584(this.join_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.pathEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  Stroke.prototype.toString = function () {
    return 'Stroke(width=' + this.width_1 + ', miter=' + this.miter_1 + ', cap=' + new StrokeCap(this.cap_1) + ', join=' + new StrokeJoin(this.join_1) + ', pathEffect=' + this.pathEffect_1 + ')';
  };
  Stroke.$metadata$ = {
    simpleName: 'Stroke',
    kind: 'class',
    interfaces: []
  };
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  Fill.$metadata$ = {
    simpleName: 'Fill',
    kind: 'object',
    interfaces: []
  };
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function DrawScopeMarker() {
  }
  DrawScopeMarker.prototype.equals = function (other) {
    if (!(other instanceof DrawScopeMarker))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DrawScopeMarker ? other : THROW_CCE();
    return true;
  };
  DrawScopeMarker.prototype.hashCode = function () {
    return 0;
  };
  DrawScopeMarker.prototype.toString = function () {
    return '@androidx.compose.ui.graphics.drawscope.DrawScopeMarker()';
  };
  DrawScopeMarker.$metadata$ = {
    simpleName: 'DrawScopeMarker',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DrawTransform() {
  }
  DrawTransform.$metadata$ = {
    simpleName: 'DrawTransform',
    kind: 'interface',
    interfaces: []
  };
  function EmptyCanvas() {
  }
  EmptyCanvas.prototype.save_erlm4_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.restore_a2id37_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.saveLayer_f9ux7q_k$ = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.translate_62wf99_k$ = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.scale_sphyvb_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.rotate_ypq2w2_k$ = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.skew_hcshkp_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.concat_oxfhdd_k$ = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawPath_843lu1_k$ = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.enableZ_eyv21m_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.prototype.disableZ_14frxd_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  EmptyCanvas.$metadata$ = {
    simpleName: 'EmptyCanvas',
    kind: 'class',
    interfaces: [Canvas]
  };
  function PathNode_init_$Init$(isCurve, isQuad, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      isCurve = false;
    if (!(($mask0 & 2) === 0))
      isQuad = false;
    PathNode.call($this, isCurve, isQuad);
    return $this;
  }
  function PathNode_init_$Create$(isCurve, isQuad, $mask0, $marker) {
    return PathNode_init_$Init$(isCurve, isQuad, $mask0, $marker, Object.create(PathNode.prototype));
  }
  function Close() {
    Close_instance = this;
    PathNode_init_$Init$(false, false, 3, null, this);
  }
  Close.$metadata$ = {
    simpleName: 'Close',
    kind: 'object',
    interfaces: []
  };
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeMoveTo.prototype._get_dx__1413116791_ndbzw7_k$ = function () {
    return this.dx_1;
  };
  RelativeMoveTo.prototype._get_dy__1413116822_ndbzx2_k$ = function () {
    return this.dy_1;
  };
  RelativeMoveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeMoveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeMoveTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeMoveTo(dx, dy);
  };
  RelativeMoveTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeMoveTo.prototype.toString = function () {
    return 'RelativeMoveTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeMoveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeMoveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeMoveTo.$metadata$ = {
    simpleName: 'RelativeMoveTo',
    kind: 'class',
    interfaces: []
  };
  function MoveTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  MoveTo.prototype._get_x__461226969_7mlp09_k$ = function () {
    return this.x_1;
  };
  MoveTo.prototype._get_y__461227000_7mlp14_k$ = function () {
    return this.y_1;
  };
  MoveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  MoveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  MoveTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new MoveTo(x, y);
  };
  MoveTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  MoveTo.prototype.toString = function () {
    return 'MoveTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  MoveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  MoveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  MoveTo.$metadata$ = {
    simpleName: 'MoveTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeLineTo(dx, dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeLineTo.prototype._get_dx__1413116791_ndbzw7_k$ = function () {
    return this.dx_1;
  };
  RelativeLineTo.prototype._get_dy__1413116822_ndbzx2_k$ = function () {
    return this.dy_1;
  };
  RelativeLineTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeLineTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeLineTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeLineTo(dx, dy);
  };
  RelativeLineTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeLineTo.prototype.toString = function () {
    return 'RelativeLineTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeLineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeLineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeLineTo.$metadata$ = {
    simpleName: 'RelativeLineTo',
    kind: 'class',
    interfaces: []
  };
  function LineTo(x, y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  LineTo.prototype._get_x__461226969_7mlp09_k$ = function () {
    return this.x_1;
  };
  LineTo.prototype._get_y__461227000_7mlp14_k$ = function () {
    return this.y_1;
  };
  LineTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  LineTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  LineTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new LineTo(x, y);
  };
  LineTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  LineTo.prototype.toString = function () {
    return 'LineTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  LineTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  LineTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  LineTo.$metadata$ = {
    simpleName: 'LineTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeHorizontalTo(dx) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dx_1 = dx;
  }
  RelativeHorizontalTo.prototype._get_dx__1413116791_ndbzw7_k$ = function () {
    return this.dx_1;
  };
  RelativeHorizontalTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeHorizontalTo.prototype.copy_i912ft_k$ = function (dx) {
    return new RelativeHorizontalTo(dx);
  };
  RelativeHorizontalTo.prototype.copy$default_iojlsq_k$ = function (dx, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    return this.copy_i912ft_k$(dx);
  };
  RelativeHorizontalTo.prototype.toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.dx_1 + ')';
  };
  RelativeHorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.dx_1);
  };
  RelativeHorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    return true;
  };
  RelativeHorizontalTo.$metadata$ = {
    simpleName: 'RelativeHorizontalTo',
    kind: 'class',
    interfaces: []
  };
  function HorizontalTo(x) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.x_1 = x;
  }
  HorizontalTo.prototype._get_x__461226969_7mlp09_k$ = function () {
    return this.x_1;
  };
  HorizontalTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  HorizontalTo.prototype.copy_i912ft_k$ = function (x) {
    return new HorizontalTo(x);
  };
  HorizontalTo.prototype.copy$default_iojlsq_k$ = function (x, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    return this.copy_i912ft_k$(x);
  };
  HorizontalTo.prototype.toString = function () {
    return 'HorizontalTo(x=' + this.x_1 + ')';
  };
  HorizontalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.x_1);
  };
  HorizontalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    return true;
  };
  HorizontalTo.$metadata$ = {
    simpleName: 'HorizontalTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeVerticalTo(dy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.dy_1 = dy;
  }
  RelativeVerticalTo.prototype._get_dy__1413116822_ndbzx2_k$ = function () {
    return this.dy_1;
  };
  RelativeVerticalTo.prototype.component1_7eebsc_k$ = function () {
    return this.dy_1;
  };
  RelativeVerticalTo.prototype.copy_i912ft_k$ = function (dy) {
    return new RelativeVerticalTo(dy);
  };
  RelativeVerticalTo.prototype.copy$default_iojlsq_k$ = function (dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dy = this.dy_1;
    return this.copy_i912ft_k$(dy);
  };
  RelativeVerticalTo.prototype.toString = function () {
    return 'RelativeVerticalTo(dy=' + this.dy_1 + ')';
  };
  RelativeVerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.dy_1);
  };
  RelativeVerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeVerticalTo.$metadata$ = {
    simpleName: 'RelativeVerticalTo',
    kind: 'class',
    interfaces: []
  };
  function VerticalTo(y) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.y_1 = y;
  }
  VerticalTo.prototype._get_y__461227000_7mlp14_k$ = function () {
    return this.y_1;
  };
  VerticalTo.prototype.component1_7eebsc_k$ = function () {
    return this.y_1;
  };
  VerticalTo.prototype.copy_i912ft_k$ = function (y) {
    return new VerticalTo(y);
  };
  VerticalTo.prototype.copy$default_iojlsq_k$ = function (y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      y = this.y_1;
    return this.copy_i912ft_k$(y);
  };
  VerticalTo.prototype.toString = function () {
    return 'VerticalTo(y=' + this.y_1 + ')';
  };
  VerticalTo.prototype.hashCode = function () {
    return getNumberHashCode(this.y_1);
  };
  VerticalTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  VerticalTo.$metadata$ = {
    simpleName: 'VerticalTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
    this.dx3__1 = dx3;
    this.dy3__1 = dy3;
  }
  RelativeCurveTo.prototype._get_dx1__856947220_e67cpg_k$ = function () {
    return this.dx1__1;
  };
  RelativeCurveTo.prototype._get_dy1__856948181_e67dg5_k$ = function () {
    return this.dy1__1;
  };
  RelativeCurveTo.prototype._get_dx2__856947251_e67cqb_k$ = function () {
    return this.dx2__1;
  };
  RelativeCurveTo.prototype._get_dy2__856948212_e67dh0_k$ = function () {
    return this.dy2__1;
  };
  RelativeCurveTo.prototype._get_dx3__856947282_e67cr6_k$ = function () {
    return this.dx3__1;
  };
  RelativeCurveTo.prototype._get_dy3__856948243_e67dhv_k$ = function () {
    return this.dy3__1;
  };
  RelativeCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeCurveTo.prototype.component5_7eebs8_k$ = function () {
    return this.dx3__1;
  };
  RelativeCurveTo.prototype.component6_7eebs7_k$ = function () {
    return this.dy3__1;
  };
  RelativeCurveTo.prototype.copy_htf379_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  RelativeCurveTo.prototype.copy$default_vtoeb4_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    if (!(($mask0 & 16) === 0))
      dx3 = this.dx3__1;
    if (!(($mask0 & 32) === 0))
      dy3 = this.dy3__1;
    return this.copy_htf379_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  RelativeCurveTo.prototype.toString = function () {
    return 'RelativeCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ', dx3=' + this.dx3__1 + ', dy3=' + this.dy3__1 + ')';
  };
  RelativeCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy3__1) | 0;
    return result;
  };
  RelativeCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    if (!equals(this.dx3__1, tmp0_other_with_cast.dx3__1))
      return false;
    if (!equals(this.dy3__1, tmp0_other_with_cast.dy3__1))
      return false;
    return true;
  };
  RelativeCurveTo.$metadata$ = {
    simpleName: 'RelativeCurveTo',
    kind: 'class',
    interfaces: []
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.x3__1 = x3;
    this.y3__1 = y3;
  }
  CurveTo.prototype._get_x1__1413133810_ndcd0y_k$ = function () {
    return this.x1__1;
  };
  CurveTo.prototype._get_y1__1413134771_ndcdrn_k$ = function () {
    return this.y1__1;
  };
  CurveTo.prototype._get_x2__1413133841_ndcd1t_k$ = function () {
    return this.x2__1;
  };
  CurveTo.prototype._get_y2__1413134802_ndcdsi_k$ = function () {
    return this.y2__1;
  };
  CurveTo.prototype._get_x3__1413133872_ndcd2o_k$ = function () {
    return this.x3__1;
  };
  CurveTo.prototype._get_y3__1413134833_ndcdtd_k$ = function () {
    return this.y3__1;
  };
  CurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  CurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  CurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  CurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  CurveTo.prototype.component5_7eebs8_k$ = function () {
    return this.x3__1;
  };
  CurveTo.prototype.component6_7eebs7_k$ = function () {
    return this.y3__1;
  };
  CurveTo.prototype.copy_htf379_k$ = function (x1, y1, x2, y2, x3, y3) {
    return new CurveTo(x1, y1, x2, y2, x3, y3);
  };
  CurveTo.prototype.copy$default_vtoeb4_k$ = function (x1, y1, x2, y2, x3, y3, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    if (!(($mask0 & 16) === 0))
      x3 = this.x3__1;
    if (!(($mask0 & 32) === 0))
      y3 = this.y3__1;
    return this.copy_htf379_k$(x1, y1, x2, y2, x3, y3);
  };
  CurveTo.prototype.toString = function () {
    return 'CurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ', x3=' + this.x3__1 + ', y3=' + this.y3__1 + ')';
  };
  CurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3__1) | 0;
    return result;
  };
  CurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    if (!equals(this.x3__1, tmp0_other_with_cast.x3__1))
      return false;
    if (!equals(this.y3__1, tmp0_other_with_cast.y3__1))
      return false;
    return true;
  };
  CurveTo.$metadata$ = {
    simpleName: 'CurveTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  RelativeReflectiveCurveTo.prototype._get_dx1__856947220_e67cpg_k$ = function () {
    return this.dx1__1;
  };
  RelativeReflectiveCurveTo.prototype._get_dy1__856948181_e67dg5_k$ = function () {
    return this.dy1__1;
  };
  RelativeReflectiveCurveTo.prototype._get_dx2__856947251_e67cqb_k$ = function () {
    return this.dx2__1;
  };
  RelativeReflectiveCurveTo.prototype._get_dy2__856948212_e67dh0_k$ = function () {
    return this.dy2__1;
  };
  RelativeReflectiveCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeReflectiveCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeReflectiveCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeReflectiveCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeReflectiveCurveTo.prototype.copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2);
  };
  RelativeReflectiveCurveTo.prototype.copy$default_ijqd2o_k$ = function (dx1, dy1, dx2, dy2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    return this.copy_skjbed_k$(dx1, dy1, dx2, dy2);
  };
  RelativeReflectiveCurveTo.prototype.toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  RelativeReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  RelativeReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  RelativeReflectiveCurveTo.$metadata$ = {
    simpleName: 'RelativeReflectiveCurveTo',
    kind: 'class',
    interfaces: []
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode_init_$Init$(true, false, 2, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  ReflectiveCurveTo.prototype._get_x1__1413133810_ndcd0y_k$ = function () {
    return this.x1__1;
  };
  ReflectiveCurveTo.prototype._get_y1__1413134771_ndcdrn_k$ = function () {
    return this.y1__1;
  };
  ReflectiveCurveTo.prototype._get_x2__1413133841_ndcd1t_k$ = function () {
    return this.x2__1;
  };
  ReflectiveCurveTo.prototype._get_y2__1413134802_ndcdsi_k$ = function () {
    return this.y2__1;
  };
  ReflectiveCurveTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  ReflectiveCurveTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  ReflectiveCurveTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  ReflectiveCurveTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  ReflectiveCurveTo.prototype.copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new ReflectiveCurveTo(x1, y1, x2, y2);
  };
  ReflectiveCurveTo.prototype.copy$default_ijqd2o_k$ = function (x1, y1, x2, y2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    return this.copy_skjbed_k$(x1, y1, x2, y2);
  };
  ReflectiveCurveTo.prototype.toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  ReflectiveCurveTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  ReflectiveCurveTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  ReflectiveCurveTo.$metadata$ = {
    simpleName: 'ReflectiveCurveTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  RelativeQuadTo.prototype._get_dx1__856947220_e67cpg_k$ = function () {
    return this.dx1__1;
  };
  RelativeQuadTo.prototype._get_dy1__856948181_e67dg5_k$ = function () {
    return this.dy1__1;
  };
  RelativeQuadTo.prototype._get_dx2__856947251_e67cqb_k$ = function () {
    return this.dx2__1;
  };
  RelativeQuadTo.prototype._get_dy2__856948212_e67dh0_k$ = function () {
    return this.dy2__1;
  };
  RelativeQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  RelativeQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  RelativeQuadTo.prototype.component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  RelativeQuadTo.prototype.component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  RelativeQuadTo.prototype.copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeQuadTo(dx1, dy1, dx2, dy2);
  };
  RelativeQuadTo.prototype.copy$default_ijqd2o_k$ = function (dx1, dy1, dx2, dy2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx1 = this.dx1__1;
    if (!(($mask0 & 2) === 0))
      dy1 = this.dy1__1;
    if (!(($mask0 & 4) === 0))
      dx2 = this.dx2__1;
    if (!(($mask0 & 8) === 0))
      dy2 = this.dy2__1;
    return this.copy_skjbed_k$(dx1, dy1, dx2, dy2);
  };
  RelativeQuadTo.prototype.toString = function () {
    return 'RelativeQuadTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  RelativeQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  RelativeQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  RelativeQuadTo.$metadata$ = {
    simpleName: 'RelativeQuadTo',
    kind: 'class',
    interfaces: []
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  QuadTo.prototype._get_x1__1413133810_ndcd0y_k$ = function () {
    return this.x1__1;
  };
  QuadTo.prototype._get_y1__1413134771_ndcdrn_k$ = function () {
    return this.y1__1;
  };
  QuadTo.prototype._get_x2__1413133841_ndcd1t_k$ = function () {
    return this.x2__1;
  };
  QuadTo.prototype._get_y2__1413134802_ndcdsi_k$ = function () {
    return this.y2__1;
  };
  QuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  QuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  QuadTo.prototype.component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  QuadTo.prototype.component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  QuadTo.prototype.copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new QuadTo(x1, y1, x2, y2);
  };
  QuadTo.prototype.copy$default_ijqd2o_k$ = function (x1, y1, x2, y2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x1 = this.x1__1;
    if (!(($mask0 & 2) === 0))
      y1 = this.y1__1;
    if (!(($mask0 & 4) === 0))
      x2 = this.x2__1;
    if (!(($mask0 & 8) === 0))
      y2 = this.y2__1;
    return this.copy_skjbed_k$(x1, y1, x2, y2);
  };
  QuadTo.prototype.toString = function () {
    return 'QuadTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  QuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  QuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  QuadTo.$metadata$ = {
    simpleName: 'QuadTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  RelativeReflectiveQuadTo.prototype._get_dx__1413116791_ndbzw7_k$ = function () {
    return this.dx_1;
  };
  RelativeReflectiveQuadTo.prototype._get_dy__1413116822_ndbzx2_k$ = function () {
    return this.dy_1;
  };
  RelativeReflectiveQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  RelativeReflectiveQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  RelativeReflectiveQuadTo.prototype.copy_138fzp_k$ = function (dx, dy) {
    return new RelativeReflectiveQuadTo(dx, dy);
  };
  RelativeReflectiveQuadTo.prototype.copy$default_bbfa40_k$ = function (dx, dy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dx = this.dx_1;
    if (!(($mask0 & 2) === 0))
      dy = this.dy_1;
    return this.copy_138fzp_k$(dx, dy);
  };
  RelativeReflectiveQuadTo.prototype.toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  RelativeReflectiveQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  RelativeReflectiveQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  RelativeReflectiveQuadTo.$metadata$ = {
    simpleName: 'RelativeReflectiveQuadTo',
    kind: 'class',
    interfaces: []
  };
  function ReflectiveQuadTo(x, y) {
    PathNode_init_$Init$(false, true, 1, null, this);
    this.x_1 = x;
    this.y_1 = y;
  }
  ReflectiveQuadTo.prototype._get_x__461226969_7mlp09_k$ = function () {
    return this.x_1;
  };
  ReflectiveQuadTo.prototype._get_y__461227000_7mlp14_k$ = function () {
    return this.y_1;
  };
  ReflectiveQuadTo.prototype.component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  ReflectiveQuadTo.prototype.component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  ReflectiveQuadTo.prototype.copy_138fzp_k$ = function (x, y) {
    return new ReflectiveQuadTo(x, y);
  };
  ReflectiveQuadTo.prototype.copy$default_bbfa40_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_138fzp_k$(x, y);
  };
  ReflectiveQuadTo.prototype.toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  ReflectiveQuadTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  ReflectiveQuadTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  ReflectiveQuadTo.$metadata$ = {
    simpleName: 'ReflectiveQuadTo',
    kind: 'class',
    interfaces: []
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartDx_1 = arcStartDx;
    this.arcStartDy_1 = arcStartDy;
  }
  RelativeArcTo.prototype._get_horizontalEllipseRadius__3123497541_jdgnuj_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  RelativeArcTo.prototype._get_verticalEllipseRadius__4161111767_27ozl5_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  RelativeArcTo.prototype._get_theta__3632419059_aygphp_k$ = function () {
    return this.theta_1;
  };
  RelativeArcTo.prototype._get_isMoreThanHalf__2206986808_yj4o20_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  RelativeArcTo.prototype._get_isPositiveArc__4284538018_67ja6_k$ = function () {
    return this.isPositiveArc_1;
  };
  RelativeArcTo.prototype._get_arcStartDx__1807422247_tw3bxj_k$ = function () {
    return this.arcStartDx_1;
  };
  RelativeArcTo.prototype._get_arcStartDy__1807422278_tw3bye_k$ = function () {
    return this.arcStartDy_1;
  };
  RelativeArcTo.prototype.component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  RelativeArcTo.prototype.component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  RelativeArcTo.prototype.component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  RelativeArcTo.prototype.component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  RelativeArcTo.prototype.component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  RelativeArcTo.prototype.component6_7eebs7_k$ = function () {
    return this.arcStartDx_1;
  };
  RelativeArcTo.prototype.component7_7eebs6_k$ = function () {
    return this.arcStartDy_1;
  };
  RelativeArcTo.prototype.copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    return new RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  RelativeArcTo.prototype.copy$default_c0gzmi_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      horizontalEllipseRadius = this.horizontalEllipseRadius_1;
    if (!(($mask0 & 2) === 0))
      verticalEllipseRadius = this.verticalEllipseRadius_1;
    if (!(($mask0 & 4) === 0))
      theta = this.theta_1;
    if (!(($mask0 & 8) === 0))
      isMoreThanHalf = this.isMoreThanHalf_1;
    if (!(($mask0 & 16) === 0))
      isPositiveArc = this.isPositiveArc_1;
    if (!(($mask0 & 32) === 0))
      arcStartDx = this.arcStartDx_1;
    if (!(($mask0 & 64) === 0))
      arcStartDy = this.arcStartDy_1;
    return this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  RelativeArcTo.prototype.toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartDx=' + this.arcStartDx_1 + ', arcStartDy=' + this.arcStartDy_1 + ')';
  };
  RelativeArcTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDy_1) | 0;
    return result;
  };
  RelativeArcTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartDx_1, tmp0_other_with_cast.arcStartDx_1))
      return false;
    if (!equals(this.arcStartDy_1, tmp0_other_with_cast.arcStartDy_1))
      return false;
    return true;
  };
  RelativeArcTo.$metadata$ = {
    simpleName: 'RelativeArcTo',
    kind: 'class',
    interfaces: []
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode_init_$Init$(false, false, 3, null, this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartX_1 = arcStartX;
    this.arcStartY_1 = arcStartY;
  }
  ArcTo.prototype._get_horizontalEllipseRadius__3123497541_jdgnuj_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  ArcTo.prototype._get_verticalEllipseRadius__4161111767_27ozl5_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  ArcTo.prototype._get_theta__3632419059_aygphp_k$ = function () {
    return this.theta_1;
  };
  ArcTo.prototype._get_isMoreThanHalf__2206986808_yj4o20_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  ArcTo.prototype._get_isPositiveArc__4284538018_67ja6_k$ = function () {
    return this.isPositiveArc_1;
  };
  ArcTo.prototype._get_arcStartX__1720872489_sgk9pl_k$ = function () {
    return this.arcStartX_1;
  };
  ArcTo.prototype._get_arcStartY__1720872520_sgk9qg_k$ = function () {
    return this.arcStartY_1;
  };
  ArcTo.prototype.component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  ArcTo.prototype.component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  ArcTo.prototype.component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  ArcTo.prototype.component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  ArcTo.prototype.component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  ArcTo.prototype.component6_7eebs7_k$ = function () {
    return this.arcStartX_1;
  };
  ArcTo.prototype.component7_7eebs6_k$ = function () {
    return this.arcStartY_1;
  };
  ArcTo.prototype.copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    return new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  ArcTo.prototype.copy$default_c0gzmi_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      horizontalEllipseRadius = this.horizontalEllipseRadius_1;
    if (!(($mask0 & 2) === 0))
      verticalEllipseRadius = this.verticalEllipseRadius_1;
    if (!(($mask0 & 4) === 0))
      theta = this.theta_1;
    if (!(($mask0 & 8) === 0))
      isMoreThanHalf = this.isMoreThanHalf_1;
    if (!(($mask0 & 16) === 0))
      isPositiveArc = this.isPositiveArc_1;
    if (!(($mask0 & 32) === 0))
      arcStartX = this.arcStartX_1;
    if (!(($mask0 & 64) === 0))
      arcStartY = this.arcStartY_1;
    return this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  ArcTo.prototype.toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartX=' + this.arcStartX_1 + ', arcStartY=' + this.arcStartY_1 + ')';
  };
  ArcTo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartY_1) | 0;
    return result;
  };
  ArcTo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartX_1, tmp0_other_with_cast.arcStartX_1))
      return false;
    if (!equals(this.arcStartY_1, tmp0_other_with_cast.arcStartY_1))
      return false;
    return true;
  };
  ArcTo.$metadata$ = {
    simpleName: 'ArcTo',
    kind: 'class',
    interfaces: []
  };
  function PathNode(isCurve, isQuad) {
    this.isCurve_1 = isCurve;
    this.isQuad_1 = isQuad;
  }
  PathNode.prototype._get_isCurve__1450928588_nzufnw_k$ = function () {
    return this.isCurve_1;
  };
  PathNode.prototype._get_isQuad__59716506_zjxju_k$ = function () {
    return this.isQuad_1;
  };
  PathNode.$metadata$ = {
    simpleName: 'PathNode',
    kind: 'class',
    interfaces: []
  };
  function putBytesInto(_this__1828080292, array, offset, length) {
    throw new NotImplementedError('An operation is not implemented: implement js ByteArray.putBytesInto()');
  }
  function toSkia(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_14()._get_Clear__2233267012_xzkvzs_k$() ? BlendMode_CLEAR_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Src__856436557_pb00nz_k$() ? BlendMode_SRC_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Dst__855991180_x2jcn4_k$() ? BlendMode_DST_getInstance() : tmp0_subject === Companion_getInstance_14()._get_SrcOver__1757445465_k11yab_k$() ? BlendMode_SRC_OVER_getInstance() : tmp0_subject === Companion_getInstance_14()._get_DstOver__2759293464_gvo6no_k$() ? BlendMode_DST_OVER_getInstance() : tmp0_subject === Companion_getInstance_14()._get_SrcIn__2696791784_8xfbac_k$() ? BlendMode_SRC_IN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_DstIn__2268784487_cro8w5_k$() ? BlendMode_DST_IN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_SrcOut__1996353889_e5ui45_k$() ? BlendMode_SRC_OUT_getInstance() : tmp0_subject === Companion_getInstance_14()._get_DstOut__1613029570_xuqdoq_k$() ? BlendMode_DST_OUT_getInstance() : tmp0_subject === Companion_getInstance_14()._get_SrcAtop__1744466137_h2yh5f_k$() ? BlendMode_SRC_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14()._get_DstAtop__2746314136_dxkpis_k$() ? BlendMode_DST_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Xor__856583094_wulcq2_k$() ? BlendMode_XOR_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Plus__776799185_96r9ln_k$() ? BlendMode_PLUS_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Modulate__1933623282_8x3ee2_k$() ? BlendMode_MODULATE_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Screen__1581409279_6nzect_k$() ? BlendMode_SCREEN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Overlay__2720466145_pgz4xh_k$() ? BlendMode_OVERLAY_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Darken__1096676396_lydm8w_k$() ? BlendMode_DARKEN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Lighten__3182621394_h67kje_k$() ? BlendMode_LIGHTEN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_ColorDodge__329289911_m7p6q3_k$() ? BlendMode_COLOR_DODGE_getInstance() : tmp0_subject === Companion_getInstance_14()._get_ColorBurn__1948630239_ad13m5_k$() ? BlendMode_COLOR_BURN_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Hardlight__1058758854_pzqk3q_k$() ? BlendMode_HARD_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Softlight__1238821061_8kd2jd_k$() ? BlendMode_SOFT_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Difference__1821174478_7pplxa_k$() ? BlendMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Exclusion__1431226979_260nm1_k$() ? BlendMode_EXCLUSION_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Multiply__2279685639_hjiwm3_k$() ? BlendMode_MULTIPLY_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Hue__856111801_m0zpn1_k$() ? BlendMode_HUE_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Saturation__1226274521_f7cifn_k$() ? BlendMode_SATURATION_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Color__2236259566_vp59sy_k$() ? BlendMode_COLOR_getInstance() : tmp0_subject === Companion_getInstance_14()._get_Luminosity__2757963466_p43i6a_k$() ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__1828080292) {
    return Companion_getInstance_3().makeLTRB_ax757q_k$(_this__1828080292._get_left__802434852_d9qyp0_k$(), _this__1828080292._get_top__857417180_e6hfbw_k$(), _this__1828080292._get_right__3576132917_bvz45n_k$(), _this__1828080292._get_bottom__2354915904_w3218g_k$());
  }
  function toSkiaRRect(_this__1828080292) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__69289799(_this__1828080292._get_topLeftCornerRadius__1877175950_b82mc6_k$());
    radii[1] = _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_topLeftCornerRadius__1877175950_b82mc6_k$());
    radii[2] = _CornerRadius___get_x__impl__69289799(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$());
    radii[3] = _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_topRightCornerRadius__2074833757_ip882j_k$());
    radii[4] = _CornerRadius___get_x__impl__69289799(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$());
    radii[5] = _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_bottomRightCornerRadius__2670609273_aa32v5_k$());
    radii[6] = _CornerRadius___get_x__impl__69289799(_this__1828080292._get_bottomLeftCornerRadius__788015858_gqpb7e_k$());
    radii[7] = _CornerRadius___get_y__impl__1812100134(_this__1828080292._get_bottomLeftCornerRadius__788015858_gqpb7e_k$());
    return Companion_getInstance_4().makeComplexLTRB_r9qn2z_k$(_this__1828080292._get_left__802434852_d9qyp0_k$(), _this__1828080292._get_top__857417180_e6hfbw_k$(), _this__1828080292._get_right__3576132917_bvz45n_k$(), _this__1828080292._get_bottom__2354915904_w3218g_k$(), radii);
  }
  function toComposeRect(_this__1828080292) {
    return new Rect(_this__1828080292._get_left__802434852_d9qyp0_k$(), _this__1828080292._get_top__857417180_e6hfbw_k$(), _this__1828080292._get_right__3576132917_bvz45n_k$(), _this__1828080292._get_bottom__2354915904_w3218g_k$());
  }
  function asComposeCanvas(_this__1828080292) {
    return new SkiaBackedCanvas(_this__1828080292);
  }
  function _get_nativeCanvas__3628725980(_this__1828080292) {
    return (_this__1828080292 instanceof SkiaBackedCanvas ? _this__1828080292 : THROW_CCE()).skia_1;
  }
  function _get_skia__809080539(_this__1828080292, $this) {
    return (_this__1828080292 instanceof SkiaBackedPaint ? _this__1828080292 : THROW_CCE())._get_skia__809080539_ddpejf_k$();
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_use_0 = Companion_getInstance_5().makeFromBitmap_yu8eml_k$(bitmap);
      var tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this.skia_1.drawImageRect_cpr7cg_k$(tmp0_use_0, Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__2048295803(srcOffset), _Offset___get_y__impl__3791106138(srcOffset), _Size___get_width__impl__3977603903(srcSize), _Size___get_height__impl__604880786(srcSize)), Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__2048295803(dstOffset), _Offset___get_y__impl__3791106138(dstOffset), _Size___get_width__impl__3977603903(dstSize), _Size___get_height__impl__604880786(dstSize)), toSkia_2(paint._get_filterQuality__3331540810_vtnnjf_k$(), $this), _get_skia__809080539(paint, $this), true);
          break $l$block;
        }
        tmp = tmp$ret$0;
      }finally {
        tmp0_use_0.close_ymq55z_k$();
      }
      tmp$ret$1 = tmp;
      break $l$block_0;
    }
    Unit_getInstance();
  }
  function drawPoints($this, points, paint) {
    {
      {
      }
      var inductionVariable = 0;
      var last = points._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = points.get_fkrdnv_k$(index_2).packedValue_1;
          {
            $this.skia_1.drawPoint_1b3djp_k$(_Offset___get_x__impl__2048295803(item_3), _Offset___get_y__impl__3791106138(item_3), _get_skia__809080539(paint, $this));
            Unit_getInstance();
          }
        }
         while (inductionVariable <= last);
    }
  }
  function drawLines($this, points, paint, stepBy) {
    if (points._get_size__809037418_ddoh9m_k$() >= 2) {
      var progression = step(until(0, points._get_size__809037418_ddoh9m_k$() - 1 | 0), stepBy);
      var inductionVariable = progression._get_first__3232921377_hkbbvj_k$();
      var last = progression._get_last__802328181_d9oodx_k$();
      var step_0 = progression._get_step__809345279_ddv2tb_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.get_fkrdnv_k$(i).packedValue_1;
          var p2 = points.get_fkrdnv_k$(i + 1 | 0).packedValue_1;
          $this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__2048295803(p1), _Offset___get_y__impl__3791106138(p1), _Offset___get_x__impl__2048295803(p2), _Offset___get_y__impl__3791106138(p2), _get_skia__809080539(paint, $this));
          Unit_getInstance();
        }
         while (!(i === last));
    }
  }
  function drawRawPoints($this, points, paint, stepBy) {
    if (points.length % 2 === 0) {
      var progression = step(until(0, points.length - 1 | 0), stepBy);
      var inductionVariable = progression._get_first__3232921377_hkbbvj_k$();
      var last = progression._get_last__802328181_d9oodx_k$();
      var step_0 = progression._get_step__809345279_ddv2tb_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x = points[i];
          var y = points[i + 1 | 0];
          $this.skia_1.drawPoint_1b3djp_k$(x, y, _get_skia__809080539(paint, $this));
          Unit_getInstance();
        }
         while (!(i === last));
    }
  }
  function drawRawLines($this, points, paint, stepBy) {
    if (points.length >= 4 ? points.length % 2 === 0 : false) {
      var progression = step(until(0, points.length - 3 | 0), imul(stepBy, 2));
      var inductionVariable = progression._get_first__3232921377_hkbbvj_k$();
      var last = progression._get_last__802328181_d9oodx_k$();
      var step_0 = progression._get_step__809345279_ddv2tb_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x1 = points[i];
          var y1 = points[i + 1 | 0];
          var x2 = points[i + 2 | 0];
          var y2 = points[i + 3 | 0];
          $this.skia_1.drawLine_t27q09_k$(x1, y1, x2, y2, _get_skia__809080539(paint, $this));
          Unit_getInstance();
        }
         while (!(i === last));
    }
  }
  function toSkia_0(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_16()._get_Difference__1821174478_sj27s7_k$() ? ClipMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_16()._get_Intersect__3394243890_jgll85_k$() ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__1828080292, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Matrix___get_values__impl__926483447(_this__1828080292)[0];
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Matrix___get_values__impl__926483447(_this__1828080292)[4];
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Matrix___get_values__impl__926483447(_this__1828080292)[8];
      break $l$block_1;
    }
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = _Matrix___get_values__impl__926483447(_this__1828080292)[12];
      break $l$block_2;
    }
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = _Matrix___get_values__impl__926483447(_this__1828080292)[1];
      break $l$block_3;
    }
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = _Matrix___get_values__impl__926483447(_this__1828080292)[5];
      break $l$block_4;
    }
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = _Matrix___get_values__impl__926483447(_this__1828080292)[9];
      break $l$block_5;
    }
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    $l$block_6: {
      tmp$ret$7 = _Matrix___get_values__impl__926483447(_this__1828080292)[13];
      break $l$block_6;
    }
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = _Matrix___get_values__impl__926483447(_this__1828080292)[2];
      break $l$block_7;
    }
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    $l$block_8: {
      tmp$ret$9 = _Matrix___get_values__impl__926483447(_this__1828080292)[6];
      break $l$block_8;
    }
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    $l$block_9: {
      tmp$ret$10 = _Matrix___get_values__impl__926483447(_this__1828080292)[10];
      break $l$block_9;
    }
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    $l$block_10: {
      tmp$ret$11 = _Matrix___get_values__impl__926483447(_this__1828080292)[14];
      break $l$block_10;
    }
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      tmp$ret$12 = _Matrix___get_values__impl__926483447(_this__1828080292)[3];
      break $l$block_11;
    }
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    $l$block_12: {
      tmp$ret$13 = _Matrix___get_values__impl__926483447(_this__1828080292)[7];
      break $l$block_12;
    }
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    $l$block_13: {
      tmp$ret$14 = _Matrix___get_values__impl__926483447(_this__1828080292)[11];
      break $l$block_13;
    }
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    $l$block_14: {
      tmp$ret$15 = _Matrix___get_values__impl__926483447(_this__1828080292)[15];
      break $l$block_14;
    }
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_19()._get_Low__856225757_7gcbvm_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : tmp0_subject === Companion_getInstance_19()._get_Medium__595818006_6eh6bb_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : tmp0_subject === Companion_getInstance_19()._get_High__769307849_87nkxi_k$() ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.skia_1 = skia;
  }
  SkiaBackedCanvas.prototype._get_skia__809080539_ddpejf_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedCanvas.prototype.save_erlm4_k$ = function () {
    this.skia_1.save_23ibh_k$();
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.restore_a2id37_k$ = function () {
    this.skia_1.restore_i5fnny_k$();
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.saveLayer_f9ux7q_k$ = function (bounds, paint) {
    this.skia_1.saveLayer_dsxx8u_k$(bounds._get_left__802434852_d9qyp0_k$(), bounds._get_top__857417180_e6hfbw_k$(), bounds._get_right__3576132917_bvz45n_k$(), bounds._get_bottom__2354915904_w3218g_k$(), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.translate_62wf99_k$ = function (dx, dy) {
    this.skia_1.translate_y4aglq_k$(dx, dy);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.scale_sphyvb_k$ = function (sx, sy) {
    this.skia_1.scale_6iftdi_k$(sx, sy);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.rotate_ypq2w2_k$ = function (degrees) {
    this.skia_1.rotate_aghjf1_k$(degrees);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.skew_hcshkp_k$ = function (sx, sy) {
    this.skia_1.skew_r8bu0m_k$(sx, sy);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.concat_oxfhdd_k$ = function (matrix) {
    if (!isIdentity(matrix)) {
      this.skia_1.concat_f2glzm_k$(toSkia_1(matrix, this));
      Unit_getInstance();
    }
  };
  SkiaBackedCanvas.prototype.clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.skia_1.clipRect_9zlxw5_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.clipPath_kn87dc_k$ = function (path, clipOp) {
    var antiAlias = true;
    this.skia_1.clipPath_yggl5f_k$(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__2048295803(p1), _Offset___get_y__impl__3791106138(p1), _Offset___get_x__impl__2048295803(p2), _Offset___get_y__impl__3791106138(p2), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawRect_svy35k_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.skia_1.drawRRect_i1m3a2_k$(Companion_getInstance_4().makeLTRB_o5673a_k$(left, top, right, bottom, radiusX, radiusY), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawOval_k4zfhy_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    this.skia_1.drawCircle_on0wlj_k$(_Offset___get_x__impl__2048295803(center), _Offset___get_y__impl__3791106138(center), radius, _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.skia_1.drawArc_hhkfpn_k$(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawPath_843lu1_k$ = function (path, paint) {
    this.skia_1.drawPath_qvim9i_k$(asSkiaPath(path), _get_skia__809080539(paint, this));
    Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    var size = Size(image._get_width__3719200459_9isoj9_k$(), image._get_height__3088126660_jyis70_k$());
    drawImageRect(this, image, Companion_getInstance()._get_Zero__785822851_30aknr_k$(), size, topLeftOffset, size, paint);
  };
  SkiaBackedCanvas.prototype.drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__2691365380(srcOffset), _IntOffset___get_y__impl__139208419(srcOffset)), Size(_IntSize___get_width__impl__3492176776(srcSize), _IntSize___get_height__impl__2736509033(srcSize)), Offset(_IntOffset___get_x__impl__2691365380(dstOffset), _IntOffset___get_y__impl__139208419(dstOffset)), Size(_IntSize___get_width__impl__3492176776(dstSize), _IntSize___get_height__impl__2736509033(dstSize)), paint);
  };
  SkiaBackedCanvas.prototype.drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30()._get_Lines__2488430802_raq553_k$())
      drawLines(this, points, paint, 2);
    else if (tmp0_subject === Companion_getInstance_30()._get_Polygon__2752450871_fygik4_k$())
      drawLines(this, points, paint, 1);
    else if (tmp0_subject === Companion_getInstance_30()._get_Points__3549386344_r3iqlf_k$())
      drawPoints(this, points, paint);
  };
  SkiaBackedCanvas.prototype.enableZ_eyv21m_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.disableZ_14frxd_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedCanvas.prototype.drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    if (!(points.length % 2 === 0)) {
      throw IllegalArgumentException_init_$Create$('points must have an even number of values');
    }
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30()._get_Lines__2488430802_raq553_k$())
      drawRawLines(this, points, paint, 2);
    else if (tmp0_subject === Companion_getInstance_30()._get_Polygon__2752450871_fygik4_k$())
      drawRawLines(this, points, paint, 1);
    else if (tmp0_subject === Companion_getInstance_30()._get_Points__3549386344_r3iqlf_k$())
      drawRawPoints(this, points, paint, 2);
  };
  SkiaBackedCanvas.prototype.drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    this.skia_1.drawVertices_5fhilh_k$(toSkiaVertexMode(vertices._get_vertexMode__1518538756_7xe1ir_k$()), vertices._get_positions__73265959_17mcdj_k$(), vertices._get_colors__3234885531_hj58bp_k$(), vertices._get_textureCoordinates__2058228139_y1eyzv_k$(), vertices._get_indices__2241594442_xyiwmu_k$(), toSkia(blendMode), paint.asFrameworkPaint_huz48e_k$());
    Unit_getInstance();
  };
  SkiaBackedCanvas.$metadata$ = {
    simpleName: 'SkiaBackedCanvas',
    kind: 'class',
    interfaces: [Canvas]
  };
  function Paint_0() {
    return SkiaBackedPaint_init_$Create$(null, 1, null);
  }
  function SkiaBackedPaint_init_$Init$(skia, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      skia = Paint_init_$Create$();
    SkiaBackedPaint.call($this, skia);
    return $this;
  }
  function SkiaBackedPaint_init_$Create$(skia, $mask0, $marker) {
    return SkiaBackedPaint_init_$Init$(skia, $mask0, $marker, Object.create(SkiaBackedPaint.prototype));
  }
  function toSkia_3(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_24()._get_Fill__767465736_kmbul_k$() ? PaintMode_FILL_getInstance() : tmp0_subject === Companion_getInstance_24()._get_Stroke__2068408243_162ry_k$() ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_32()._get_Butt__764137080_goepja_k$() ? PaintStrokeCap_BUTT_getInstance() : tmp0_subject === Companion_getInstance_32()._get_Round__2665963555_inu17z_k$() ? PaintStrokeCap_ROUND_getInstance() : tmp0_subject === Companion_getInstance_32()._get_Square__1984881006_mso4n0_k$() ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_33()._get_Miter__2517238668_ft082e_k$() ? PaintStrokeJoin_MITER_getInstance() : tmp0_subject === Companion_getInstance_33()._get_Round__2665963555_aa3d9p_k$() ? PaintStrokeJoin_ROUND_getInstance() : tmp0_subject === Companion_getInstance_33()._get_Bevel__2198683319_3isl1b_k$() ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    this.skia_1 = skia;
    this.blendMode_1 = Companion_getInstance_14()._get_SrcOver__1757445465_k11yab_k$();
    this.style_1 = Companion_getInstance_24()._get_Fill__767465736_kmbul_k$();
    this.strokeCap_1 = Companion_getInstance_32()._get_Butt__764137080_goepja_k$();
    this.strokeJoin_1 = Companion_getInstance_33()._get_Round__2665963555_aa3d9p_k$();
    this.strokeMiterLimit_1 = 0.0;
    this.filterQuality_1 = Companion_getInstance_19()._get_Medium__595818006_6eh6bb_k$();
    this.shader_1 = null;
    this.colorFilter_1 = null;
    this.pathEffect_1 = null;
  }
  SkiaBackedPaint.prototype._get_skia__809080539_ddpejf_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedPaint.prototype.asFrameworkPaint_huz48e_k$ = function () {
    return this.skia_1;
  };
  SkiaBackedPaint.prototype._set_alpha__734313383_z7qst2_k$ = function (value) {
    var tmp = Color_2(this.skia_1._get_color__3152392398_iw9cfm_k$());
    this.skia_1._set_color__794230338_kejnwy_k$(toArgb(Color__copy$default_impl_868080376(tmp, value, 0.0, 0.0, 0.0, 14, null)));
  };
  SkiaBackedPaint.prototype._get_alpha__3092475443_jvxknh_k$ = function () {
    return _Color___get_alpha__impl__1955818045(Color_2(this.skia_1._get_color__3152392398_iw9cfm_k$()));
  };
  SkiaBackedPaint.prototype._set_isAntiAlias__4120538753_dlf7aw_k$ = function (value) {
    this.skia_1._set_isAntiAlias__4120538753_dlf7aw_k$(value);
  };
  SkiaBackedPaint.prototype._get_isAntiAlias__1657014285_rejkel_k$ = function () {
    return this.skia_1._get_isAntiAlias__1657014285_rejkel_k$();
  };
  SkiaBackedPaint.prototype._set_color__794230338_2k89d1_k$ = function (color) {
    this.skia_1._set_color__794230338_kejnwy_k$(toArgb(color));
  };
  SkiaBackedPaint.prototype._get_color__3152392398_60nqpf_k$ = function () {
    return Color_2(this.skia_1._get_color__3152392398_iw9cfm_k$());
  };
  SkiaBackedPaint.prototype._set_blendMode__3209190065_wrkf95_k$ = function (value) {
    this.skia_1._set_blendMode__3209190065_sctb3f_k$(toSkia(value));
    this.blendMode_1 = value;
  };
  SkiaBackedPaint.prototype._get_blendMode__685958973_6thn5b_k$ = function () {
    return this.blendMode_1;
  };
  SkiaBackedPaint.prototype._set_style__1257298356_8mxg83_k$ = function (value) {
    this.skia_1._set_mode__589036820_wkid7l_k$(toSkia_3(value, this));
    this.style_1 = value;
  };
  SkiaBackedPaint.prototype._get_style__3615460416_rnyny3_k$ = function () {
    return this.style_1;
  };
  SkiaBackedPaint.prototype._set_strokeWidth__3634201431_czjeca_k$ = function (value) {
    this.skia_1._set_strokeWidth__3634201431_czjeca_k$(value);
  };
  SkiaBackedPaint.prototype._get_strokeWidth__1170676963_jczo4j_k$ = function () {
    return this.skia_1._get_strokeWidth__1170676963_jczo4j_k$();
  };
  SkiaBackedPaint.prototype._set_strokeCap__584183435_c817yr_k$ = function (value) {
    this.skia_1._set_strokeCap__584183435_5gf6wj_k$(toSkia_4(value, this));
    this.strokeCap_1 = value;
  };
  SkiaBackedPaint.prototype._get_strokeCap__2355919639_hktlmt_k$ = function () {
    return this.strokeCap_1;
  };
  SkiaBackedPaint.prototype._set_strokeJoin__936693845_lquok1_k$ = function (value) {
    this.skia_1._set_strokeJoin__936693845_up4pv_k$(toSkia_5(value, this));
    this.strokeJoin_1 = value;
  };
  SkiaBackedPaint.prototype._get_strokeJoin__25941321_vi8a99_k$ = function () {
    return this.strokeJoin_1;
  };
  SkiaBackedPaint.prototype._set_strokeMiterLimit__2899656841_2039e4_k$ = function (value) {
    this.skia_1._set_strokeMiter__3348372472_zdsw9n_k$(value);
    this.strokeMiterLimit_1 = value;
  };
  SkiaBackedPaint.prototype._get_strokeMiterLimit__363445885_60dwn1_k$ = function () {
    return this.strokeMiterLimit_1;
  };
  SkiaBackedPaint.prototype._set_filterQuality__4251574462_9931wt_k$ = function (_set____804775014) {
    this.filterQuality_1 = _set____804775014;
  };
  SkiaBackedPaint.prototype._get_filterQuality__3331540810_vtnnjf_k$ = function () {
    return this.filterQuality_1;
  };
  SkiaBackedPaint.prototype._set_shader__4250559698_bmh5tm_k$ = function (value) {
    this.skia_1._set_shader__4250559698_bmh5tm_k$(value);
    this.shader_1 = value;
  };
  SkiaBackedPaint.prototype._get_shader__44172230_qarie_k$ = function () {
    return this.shader_1;
  };
  SkiaBackedPaint.prototype._set_colorFilter__1233299114_zj5u0_k$ = function (value) {
    var tmp0_safe_receiver = value;
    this.skia_1._set_colorFilter__1233299114_8mkxdy_k$(tmp0_safe_receiver == null ? null : asSkiaColorFilter(tmp0_safe_receiver));
    this.colorFilter_1 = value;
  };
  SkiaBackedPaint.prototype._get_colorFilter__3064741942_kcfzyi_k$ = function () {
    return this.colorFilter_1;
  };
  SkiaBackedPaint.prototype._set_pathEffect__3525440577_ui6dfw_k$ = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.skia_1._set_pathEffect__3525440577_ax4946_k$(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.pathEffect_1 = value;
  };
  SkiaBackedPaint.prototype._get_pathEffect__2614688053_rse7rf_k$ = function () {
    return this.pathEffect_1;
  };
  SkiaBackedPaint.$metadata$ = {
    simpleName: 'SkiaBackedPaint',
    kind: 'class',
    interfaces: [Paint]
  };
  function Path_0() {
    return SkiaBackedPath_init_$Create$(null, 1, null);
  }
  function SkiaBackedPath_init_$Init$(internalPath, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      internalPath = Path_init_$Create$();
    SkiaBackedPath.call($this, internalPath);
    return $this;
  }
  function SkiaBackedPath_init_$Create$(internalPath, $mask0, $marker) {
    return SkiaBackedPath_init_$Init$(internalPath, $mask0, $marker, Object.create(SkiaBackedPath.prototype));
  }
  function _set_internalPath__611971349($this, _set____804775014) {
    $this.internalPath_1 = _set____804775014;
  }
  function toSkiaOperation(_this__1828080292, $this) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_29()._get_Difference__1821174478_r9kqjw_k$() ? PathOp_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_29()._get_Intersect__3394243890_czb1xk_k$() ? PathOp_INTERSECT_getInstance() : tmp0_subject === Companion_getInstance_29()._get_Union__2750571266_8isoqw_k$() ? PathOp_UNION_getInstance() : tmp0_subject === Companion_getInstance_29()._get_Xor__856583094_8drjwk_k$() ? PathOp_XOR_getInstance() : tmp0_subject === Companion_getInstance_29()._get_ReverseDifference__1850536338_okh3a0_k$() ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    this.internalPath_1 = internalPath;
  }
  SkiaBackedPath.prototype._get_internalPath__1552124169_po3eo9_k$ = function () {
    return this.internalPath_1;
  };
  SkiaBackedPath.prototype._set_fillType__1130084890_sn22ru_k$ = function (value) {
    var tmp = this.internalPath_1;
    var tmp_0;
    if (value === Companion_getInstance_28()._get_EvenOdd__2467676188_ies686_k$()) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp._set_fillMode__1123310801_zg8kzs_k$(tmp_0);
  };
  SkiaBackedPath.prototype._get_fillType__355953678_b60ah4_k$ = function () {
    if (this.internalPath_1._get_fillMode__349179589_5rw4p1_k$().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_28()._get_EvenOdd__2467676188_ies686_k$();
    } else {
      return Companion_getInstance_28()._get_NonZero__3590369980_8sx1ay_k$();
    }
  };
  SkiaBackedPath.prototype.moveTo_ga4oez_k$ = function (x, y) {
    this.internalPath_1.moveTo_5934es_k$(x, y);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.relativeMoveTo_4j9kzr_k$ = function (dx, dy) {
    this.internalPath_1.rMoveTo_44r2iq_k$(dx, dy);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.lineTo_w9kq4e_k$ = function (x, y) {
    this.internalPath_1.lineTo_8bd4s1_k$(x, y);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.relativeLineTo_kipmp6_k$ = function (dx, dy) {
    this.internalPath_1.rLineTo_7712vz_k$(dx, dy);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.quadraticBezierTo_t2qfc1_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_qnlly6_k$(x1, y1, x2, y2);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.relativeQuadraticBezierTo_z1apmz_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_vz8b04_k$(dx1, dy1, dx2, dy2);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.cubicTo_1m51n8_k$ = function (x1, y1, x2, y2, x3, y3) {
    this.internalPath_1.cubicTo_tf08o5_k$(x1, y1, x2, y2, x3, y3);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.relativeCubicTo_a0rn6w_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.internalPath_1.rCubicTo_uljamr_k$(dx1, dy1, dx2, dy2, dx3, dy3);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.arcTo_948klo_k$ = function (rect, startAngleDegrees, sweepAngleDegrees, forceMoveTo) {
    this.internalPath_1.arcTo_ecvj8s_k$(toSkiaRect(rect), startAngleDegrees, sweepAngleDegrees, forceMoveTo);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.addRect_xu2nic_k$ = function (rect) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRect(rect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addRect$default_rgvch2_k$(tmp_0, tmp_1, 0, 4, null);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.addOval_91jhpm_k$ = function (oval) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRect(oval);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addOval$default_22wyfo_k$(tmp_0, tmp_1, 0, 4, null);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.addArcRad_jcx1ob_k$ = function (oval, startAngleRadians, sweepAngleRadians) {
    this.addArc_p7ur08_k$(oval, degrees(startAngleRadians), degrees(sweepAngleRadians));
  };
  SkiaBackedPath.prototype.addArc_p7ur08_k$ = function (oval, startAngleDegrees, sweepAngleDegrees) {
    this.internalPath_1.addArc_vnodq_k$(toSkiaRect(oval), startAngleDegrees, sweepAngleDegrees);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.addRoundRect_kr3fpw_k$ = function (roundRect) {
    var tmp = this.internalPath_1;
    var tmp_0 = toSkiaRRect(roundRect);
    var tmp_1 = PathDirection_COUNTER_CLOCKWISE_getInstance();
    tmp.addRRect$default_pcyjai_k$(tmp_0, tmp_1, 0, 4, null);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.addPath_9947vg_k$ = function (path, offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = asSkiaPath(path);
    var tmp_1 = _Offset___get_x__impl__2048295803(offset);
    var tmp_2 = _Offset___get_y__impl__3791106138(offset);
    tmp.addPath$default_jehum6_k$(tmp_0, tmp_1, tmp_2, false, 8, null);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.close_ymq55z_k$ = function () {
    this.internalPath_1.closePath_7zbz5v_k$();
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.reset_5tn5dq_k$ = function () {
    var fillType = this._get_fillType__355953678_b60ah4_k$();
    this.internalPath_1.reset_1sjh3j_k$();
    Unit_getInstance();
    this._set_fillType__1130084890_sn22ru_k$(fillType);
  };
  SkiaBackedPath.prototype.translate_mdejcc_k$ = function (offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = Companion_getInstance_6().makeTranslate_bkaev4_k$(_Offset___get_x__impl__2048295803(offset), _Offset___get_y__impl__3791106138(offset));
    tmp.transform$default_9i06se_k$(tmp_0, null, false, 6, null);
    Unit_getInstance();
  };
  SkiaBackedPath.prototype.getBounds_568lnv_k$ = function () {
    var bounds = this.internalPath_1._get_bounds__2355650294_w2makq_k$();
    return new Rect(bounds._get_left__802434852_d9qyp0_k$(), bounds._get_top__857417180_e6hfbw_k$(), bounds._get_right__3576132917_bvz45n_k$(), bounds._get_bottom__2354915904_w3218g_k$());
  };
  SkiaBackedPath.prototype.op_eh4rey_k$ = function (path1, path2, operation) {
    var path = Companion_getInstance_7().makeCombining_738xp1_k$(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    var tmp0_elvis_lhs = path;
    tmp.internalPath_1 = tmp0_elvis_lhs == null ? this.internalPath_1 : tmp0_elvis_lhs;
    return !(path == null);
  };
  SkiaBackedPath.prototype._get_isConvex__1853646138_unm2ii_k$ = function () {
    return this.internalPath_1._get_isConvex__1853646138_unm2ii_k$();
  };
  SkiaBackedPath.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.internalPath_1._get_isEmpty__1500737838_oti0q6_k$();
  };
  SkiaBackedPath.$metadata$ = {
    simpleName: 'SkiaBackedPath',
    kind: 'class',
    interfaces: [Path]
  };
  function asSkiaPath(_this__1828080292) {
    var tmp;
    if (_this__1828080292 instanceof SkiaBackedPath) {
      tmp = _this__1828080292.internalPath_1;
    } else {
      {
        throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
      }
    }
    return tmp;
  }
  function actualCornerPathEffect(radius) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeCorner_nvvp4b_k$(radius));
  }
  function actualDashPathEffect(intervals, phase) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeDash_l6ju8t_k$(intervals, phase));
  }
  function actualChainPathEffect(outer, inner) {
    return new SkiaBackedPathEffect(asSkiaPathEffect(outer).makeCompose_8fhb2g_k$(asSkiaPathEffect(inner)));
  }
  function actualStampedPathEffect(shape, advance, phase, style) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makePath1D_ivleto_k$(asSkiaPath(shape), advance, phase, toSkiaStampedPathEffectStyle(style)));
  }
  function SkiaBackedPathEffect(nativePathEffect) {
    this.nativePathEffect_1 = nativePathEffect;
  }
  SkiaBackedPathEffect.prototype._get_nativePathEffect__2691170014_qiuxwi_k$ = function () {
    return this.nativePathEffect_1;
  };
  SkiaBackedPathEffect.$metadata$ = {
    simpleName: 'SkiaBackedPathEffect',
    kind: 'class',
    interfaces: [PathEffect]
  };
  function asSkiaPathEffect(_this__1828080292) {
    return (_this__1828080292 instanceof SkiaBackedPathEffect ? _this__1828080292 : THROW_CCE()).nativePathEffect_1;
  }
  function toSkiaStampedPathEffectStyle(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_27()._get_Morph__2522730473_gh9alm_k$() ? Style_MORPH_getInstance() : tmp0_subject === Companion_getInstance_27()._get_Rotate__1039197424_g0vsoh_k$() ? Style_ROTATE_getInstance() : tmp0_subject === Companion_getInstance_27()._get_Translate__3258713827_9cv944_k$() ? Style_TRANSLATE_getInstance() : Style_TRANSLATE_getInstance();
  }
  function _set_internalImageFilter__618247695($this, _set____804775014) {
    $this.internalImageFilter_1 = _set____804775014;
  }
  function _get_internalImageFilter__1422328731($this) {
    return $this.internalImageFilter_1;
  }
  function RenderEffect() {
    this.internalImageFilter_1 = null;
  }
  RenderEffect.prototype.asSkiaImageFilter_1de1rj_k$ = function () {
    var tmp0_elvis_lhs = this.internalImageFilter_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = this.createImageFilter_sv02y1_k$();
        {
        }
        {
          this.internalImageFilter_1 = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  RenderEffect.prototype.isSupported_j5t6ec_k$ = function () {
    return true;
  };
  RenderEffect.$metadata$ = {
    simpleName: 'RenderEffect',
    kind: 'class',
    interfaces: []
  };
  function BlurEffect_init_$Init$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      radiusY = radiusX;
    if (!(($mask0 & 8) === 0))
      edgeTreatment = Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$();
    BlurEffect.call($this, renderEffect, radiusX, radiusY, edgeTreatment);
    return $this;
  }
  function BlurEffect_init_$Create$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker) {
    return BlurEffect_init_$Init$(renderEffect, radiusX, radiusY, edgeTreatment, $mask0, $marker, Object.create(BlurEffect.prototype));
  }
  function _get_renderEffect__1309764452($this) {
    return $this.renderEffect_1;
  }
  function _get_radiusX__2094921163($this) {
    return $this.radiusX_1;
  }
  function _get_radiusY__2094921194($this) {
    return $this.radiusY_1;
  }
  function _get_edgeTreatment__1064978678($this) {
    return $this.edgeTreatment_1;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.BlurSigmaScale_1 = 0.57735;
  }
  Companion_31.prototype._get_BlurSigmaScale__2801013119_opgmf5_k$ = function () {
    return this.BlurSigmaScale_1;
  };
  Companion_31.prototype.convertRadiusToSigma_iw86v_k$ = function (radius) {
    var tmp;
    if (radius > 0) {
      tmp = this.BlurSigmaScale_1 * radius + 0.5;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  Companion_31.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_31;
  function Companion_getInstance_46() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function BlurEffect(renderEffect, radiusX, radiusY, edgeTreatment) {
    Companion_getInstance_46();
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.radiusX_1 = radiusX;
    this.radiusY_1 = radiusY;
    this.edgeTreatment_1 = edgeTreatment;
  }
  BlurEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    var tmp;
    if (this.renderEffect_1 == null) {
      var tmp_0 = Companion_getInstance_9();
      var tmp_1 = Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1);
      var tmp_2 = Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1);
      var tmp_3 = toSkiaTileMode(this.edgeTreatment_1);
      tmp = tmp_0.makeBlur$default_vog8fi_k$(tmp_1, tmp_2, tmp_3, null, null, 24, null);
    } else {
      tmp = Companion_getInstance_9().makeBlur_3mengz_k$(Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1), Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1), this.renderEffect_1.asSkiaImageFilter_1de1rj_k$(), null);
    }
    return tmp;
  };
  BlurEffect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlurEffect))
      return false;
    else {
    }
    if (!(this.radiusX_1 === other.radiusX_1))
      return false;
    if (!(this.radiusY_1 === other.radiusY_1))
      return false;
    if (!(this.edgeTreatment_1 === other.edgeTreatment_1))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    return true;
  };
  BlurEffect.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getNumberHashCode(this.radiusX_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radiusY_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_473898753(this.edgeTreatment_1) | 0;
    return result;
  };
  BlurEffect.prototype.toString = function () {
    return 'BlurEffect(renderEffect=' + this.renderEffect_1 + ', radiusX=' + this.radiusX_1 + ', radiusY=' + this.radiusY_1 + ', ' + ('edgeTreatment=' + new TileMode(this.edgeTreatment_1) + ')');
  };
  BlurEffect.$metadata$ = {
    simpleName: 'BlurEffect',
    kind: 'class',
    interfaces: []
  };
  function _get_renderEffect__1309764452_0($this) {
    return $this.renderEffect_1;
  }
  function _get_offset__736931032($this) {
    return $this.offset_1;
  }
  function OffsetEffect(renderEffect, offset) {
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.offset_1 = offset;
  }
  OffsetEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    var tmp = Companion_getInstance_9();
    var tmp_0 = _Offset___get_x__impl__2048295803(this.offset_1);
    var tmp_1 = _Offset___get_y__impl__3791106138(this.offset_1);
    var tmp0_safe_receiver = this.renderEffect_1;
    return tmp.makeOffset_8qoczr_k$(tmp_0, tmp_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.asSkiaImageFilter_1de1rj_k$(), null);
  };
  OffsetEffect.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OffsetEffect))
      return false;
    else {
    }
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    return true;
  };
  OffsetEffect.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + Offset__hashCode_impl_3247326111(this.offset_1) | 0;
    return result;
  };
  OffsetEffect.prototype.toString = function () {
    return 'OffsetEffect(renderEffect=' + this.renderEffect_1 + ', offset=' + new Offset_0(this.offset_1) + ')';
  };
  OffsetEffect.$metadata$ = {
    simpleName: 'OffsetEffect',
    kind: 'class',
    interfaces: []
  };
  function SkiaBackedRenderEffect(imageFilter) {
    RenderEffect.call(this);
    this.imageFilter_1 = imageFilter;
  }
  SkiaBackedRenderEffect.prototype._get_imageFilter__1397890878_n49ni6_k$ = function () {
    return this.imageFilter_1;
  };
  SkiaBackedRenderEffect.prototype.createImageFilter_sv02y1_k$ = function () {
    return this.imageFilter_1;
  };
  SkiaBackedRenderEffect.$metadata$ = {
    simpleName: 'SkiaBackedRenderEffect',
    kind: 'class',
    interfaces: []
  };
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_10().makeBlend_s8ia93_k$(toArgb(color), toSkia(blendMode)));
  }
  function actualColorMatrixColorFilter(colorMatrix) {
    return new ColorFilter(Companion_getInstance_10().makeMatrix_rjjhx4_k$(new ColorMatrix(_ColorMatrix___get_values__impl__3586322562(colorMatrix).slice())));
  }
  function actualLightingColorFilter(multiply, add) {
    return new ColorFilter(Companion_getInstance_10().makeLighting_u1dhx6_k$(toArgb(multiply), toArgb(add)));
  }
  function asSkiaColorFilter(_this__1828080292) {
    return _this__1828080292._get_nativeColorFilter__1140715437_iv5hnx_k$();
  }
  function asSkiaBitmap(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject instanceof SkiaBackedImageBitmap) {
      tmp = _this__1828080292.bitmap_1;
    } else {
      {
        throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
      }
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.colorSpace_1 = toComposeColorSpace(this.bitmap_1._get_colorSpace__3386656136_f0s9dk_k$());
    this.config_1 = toComposeConfig(this.bitmap_1._get_colorType__4266873012_gq5os_k$());
    this.hasAlpha_1 = !this.bitmap_1._get_isOpaque__3930244928_6159kw_k$();
  }
  SkiaBackedImageBitmap.prototype._get_bitmap__2182919100_yxgitg_k$ = function () {
    return this.bitmap_1;
  };
  SkiaBackedImageBitmap.prototype._get_colorSpace__3386656136_f0s9dk_k$ = function () {
    return this.colorSpace_1;
  };
  SkiaBackedImageBitmap.prototype._get_config__3236455433_ndk2cb_k$ = function () {
    return this.config_1;
  };
  SkiaBackedImageBitmap.prototype._get_hasAlpha__686824807_bcx1ev_k$ = function () {
    return this.hasAlpha_1;
  };
  SkiaBackedImageBitmap.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.bitmap_1._get_height__3088126660_jyis70_k$();
  };
  SkiaBackedImageBitmap.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.bitmap_1._get_width__3719200459_9isoj9_k$();
  };
  SkiaBackedImageBitmap.prototype.prepareToDraw_sbmxaj_k$ = function () {
    return Unit_getInstance();
  };
  SkiaBackedImageBitmap.prototype.readPixels_foa4om_k$ = function (buffer, startX, startY, width, height, bufferOffset, stride) {
    var lastScanline = bufferOffset + imul(height - 1 | 0, stride) | 0;
    {
      var tmp0_require_0 = startX >= 0 ? startY >= 0 : false;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1));
        }
      }
    }
    {
      var tmp1_require_0 = width > 0 ? (startX + width | 0) <= this._get_width__3719200459_9isoj9_k$() : false;
      {
      }
      {
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed requirement.';
            break $l$block_0;
          }
          var message_2_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1_0));
        }
      }
    }
    {
      var tmp2_require_0 = height > 0 ? (startY + height | 0) <= this._get_height__3088126660_jyis70_k$() : false;
      {
      }
      {
        {
        }
        if (!tmp2_require_0) {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = 'Failed requirement.';
            break $l$block_1;
          }
          var message_2_1_1 = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1_1));
        }
      }
    }
    {
      var tmp3_require_0 = abs(stride) >= width;
      {
      }
      {
        {
        }
        if (!tmp3_require_0) {
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = 'Failed requirement.';
            break $l$block_2;
          }
          var message_2_1_2 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1_2));
        }
      }
    }
    {
      var tmp4_require_0 = bufferOffset >= 0 ? (bufferOffset + width | 0) <= buffer.length : false;
      {
      }
      {
        {
        }
        if (!tmp4_require_0) {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = 'Failed requirement.';
            break $l$block_3;
          }
          var message_2_1_3 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1_3));
        }
      }
    }
    {
      var tmp5_require_0 = lastScanline >= 0 ? (lastScanline + width | 0) <= buffer.length : false;
      {
      }
      {
        {
        }
        if (!tmp5_require_0) {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = 'Failed requirement.';
            break $l$block_4;
          }
          var message_2_1_4 = tmp$ret$5;
          throw IllegalArgumentException_init_$Create$(toString(message_2_1_4));
        }
      }
    }
    var colorInfo = new ColorInfo(ColorType_BGRA_8888_getInstance(), ColorAlphaType_UNPREMUL_getInstance(), Companion_getInstance_11()._get_sRGB__808302129_dd8pwx_k$());
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bytesPerPixel = 4;
    var bytes = ensureNotNull(this.bitmap_1.readPixels_bwiudk_k$(imageInfo, imul(stride, bytesPerPixel), startX, startY));
    putBytesInto(bytes, buffer, bufferOffset, bytes.length / bytesPerPixel | 0);
  };
  SkiaBackedImageBitmap.$metadata$ = {
    simpleName: 'SkiaBackedImageBitmap',
    kind: 'class',
    interfaces: [ImageBitmap]
  };
  function toComposeColorSpace(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    return equals(tmp0_subject, Companion_getInstance_11()._get_sRGB__808302129_dd8pwx_k$()) ? ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$() : equals(tmp0_subject, Companion_getInstance_11()._get_sRGBLinear__111157580_1u6hqk_k$()) ? ColorSpaces_getInstance()._get_LinearSrgb__2036340748_xoduks_k$() : equals(tmp0_subject, Companion_getInstance_11()._get_displayP3__2072657100_ya08gc_k$()) ? ColorSpaces_getInstance()._get_DisplayP3__4066121964_3s8y6s_k$() : ColorSpaces_getInstance()._get_Srgb__779734513_cw8f01_k$();
  }
  function toComposeConfig(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    return tmp0_subject.equals(Companion_getInstance_12()._get_N32__856225540_e5rvus_k$()) ? Companion_getInstance_22()._get_Argb8888__855990367_9t9805_k$() : tmp0 === 1 ? Companion_getInstance_22()._get_Alpha8__3042111377_h2jr8t_k$() : tmp0 === 2 ? Companion_getInstance_22()._get_Rgb565__792168964_34dts0_k$() : tmp0 === 13 ? Companion_getInstance_22()._get_F16__855985414_8roxby_k$() : Companion_getInstance_22()._get_Argb8888__855990367_9t9805_k$();
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__2048295803(from);
    var tmp_1 = _Offset___get_y__impl__3791106138(from);
    var tmp_2 = _Offset___get_x__impl__2048295803(to);
    var tmp_3 = _Offset___get_y__impl__3791106138(to);
    var tmp_4 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeLinearGradient_p3pmrv_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__2048295803(center);
    var tmp_1 = _Offset___get_y__impl__3791106138(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeRadialGradient_gn4elj_k$(tmp_0, tmp_1, radius, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__2048295803(center);
    var tmp_1 = _Offset___get_y__impl__3791106138(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeSweepGradient_3ha3m6_k$(tmp_0, tmp_1, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors._get_size__809037418_ddoh9m_k$() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors._get_size__809037418_ddoh9m_k$() === colorStops._get_size__809037418_ddoh9m_k$())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__1828080292) {
    var tmp = 0;
    var tmp_0 = _this__1828080292._get_size__809037418_ddoh9m_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toArgb(_this__1828080292.get_fkrdnv_k$(tmp_2).value_1);
        break $l$block;
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_34()._get_Clamp__2233159318_fhphsf_k$() ? FilterTileMode_CLAMP_getInstance() : tmp0_subject === Companion_getInstance_34()._get_Repeated__2830487409_4som7e_k$() ? FilterTileMode_REPEAT_getInstance() : tmp0_subject === Companion_getInstance_34()._get_Mirror__723526412_34lebf_k$() ? FilterTileMode_MIRROR_getInstance() : tmp0_subject === Companion_getInstance_34()._get_Decal__2255371748_rgs4d9_k$() ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function toSkiaVertexMode(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_35()._get_Triangles__1221231718_1o674l_k$() ? VertexMode_TRIANGLES_getInstance() : tmp0_subject === Companion_getInstance_35()._get_TriangleStrip__3927518465_wxlbgw_k$() ? VertexMode_TRIANGLE_STRIP_getInstance() : tmp0_subject === Companion_getInstance_35()._get_TriangleFan__1076305702_4peixh_k$() ? VertexMode_TRIANGLE_FAN_getInstance() : VertexMode_TRIANGLES_getInstance();
  }
  //region block: post-declaration
  CanvasDrawScope.prototype.drawLine$default_cr5axy_k$ = drawLine$default;
  CanvasDrawScope.prototype.drawLine$default_wkqhm9_k$ = drawLine$default_0;
  CanvasDrawScope.prototype.drawRect$default_3hujnj_k$ = drawRect$default;
  CanvasDrawScope.prototype.drawRect$default_xwjj6g_k$ = drawRect$default_0;
  CanvasDrawScope.prototype.drawImage$default_93ints_k$ = drawImage$default;
  CanvasDrawScope.prototype.drawImage$default_mvyqz6_k$ = drawImage$default_0;
  CanvasDrawScope.prototype.drawImage$default_9i1j05_k$ = drawImage$default_1;
  CanvasDrawScope.prototype.drawRoundRect$default_jt4nwh_k$ = drawRoundRect$default;
  CanvasDrawScope.prototype.drawRoundRect$default_7fqhzi_k$ = drawRoundRect$default_0;
  CanvasDrawScope.prototype.drawCircle$default_zdw55n_k$ = drawCircle$default;
  CanvasDrawScope.prototype.drawCircle$default_36xhbw_k$ = drawCircle$default_0;
  CanvasDrawScope.prototype.drawOval$default_y6t2oh_k$ = drawOval$default;
  CanvasDrawScope.prototype.drawOval$default_37l05i_k$ = drawOval$default_0;
  CanvasDrawScope.prototype.drawArc$default_hgk6ob_k$ = drawArc$default;
  CanvasDrawScope.prototype.drawArc$default_y02lvi_k$ = drawArc$default_0;
  CanvasDrawScope.prototype.drawPath$default_kl4g8r_k$ = drawPath$default;
  CanvasDrawScope.prototype.drawPath$default_delt9g_k$ = drawPath$default_0;
  CanvasDrawScope.prototype.drawPoints$default_c8ymp5_k$ = drawPoints$default;
  CanvasDrawScope.prototype.drawPoints$default_j1qm9s_k$ = drawPoints$default_0;
  CanvasDrawScope.prototype._get_center__2950577494_k1whsm_k$ = _get_center__2950577494_0;
  CanvasDrawScope.prototype._get_size__809037418_1k4d9o_k$ = _get_size__809037418;
  CanvasDrawScope.prototype.toPx_u0ojv5_k$ = toPx;
  CanvasDrawScope.prototype.toPx_x7oik4_k$ = toPx_0;
  CanvasDrawScope.prototype.roundToPx_hl1u8z_k$ = roundToPx;
  CanvasDrawScope.prototype.roundToPx_bdej4u_k$ = roundToPx_0;
  CanvasDrawScope.prototype.toSp_ul0xj8_k$ = toSp;
  CanvasDrawScope.prototype.toSp_8a8emd_k$ = toSp_0;
  CanvasDrawScope.prototype.toSp_j4kre0_k$ = toSp_1;
  CanvasDrawScope.prototype.toDp_amhzyl_k$ = toDp;
  CanvasDrawScope.prototype.toDp_2eugbd_k$ = toDp_0;
  CanvasDrawScope.prototype.toDp_2y47ho_k$ = toDp_1;
  CanvasDrawScope.prototype.toRect_l767f3_k$ = toRect_0;
  CanvasDrawScope.prototype.toSize_z60fpn_k$ = toSize;
  CanvasDrawScope.prototype.toDpSize_ncjzav_k$ = toDpSize;
  asDrawTransform$1.prototype.clipRect$default_il0869_k$ = clipRect$default_1;
  asDrawTransform$1.prototype.clipPath$default_m1la40_k$ = clipPath$default_0;
  asDrawTransform$1.prototype.translate$default_1pb5ra_k$ = translate$default;
  asDrawTransform$1.prototype.rotate$default_1ca7j3_k$ = rotate$default;
  asDrawTransform$1.prototype.scale$default_b1nocw_k$ = scale$default_0;
  EmptyCanvas.prototype.scale$default_65y6i2_k$ = scale$default;
  EmptyCanvas.prototype.clipRect$default_il0869_k$ = clipRect$default_0;
  EmptyCanvas.prototype.clipPath$default_m1la40_k$ = clipPath$default;
  EmptyCanvas.prototype.drawImageRect$default_hpapqz_k$ = drawImageRect$default;
  EmptyCanvas.prototype.skewRad_jnvexm_k$ = skewRad;
  EmptyCanvas.prototype.clipRect_5p7fgn_k$ = clipRect;
  EmptyCanvas.prototype.clipRect$default_rf6xmh_k$ = clipRect$default;
  EmptyCanvas.prototype.drawRect_gsp0aa_k$ = drawRect;
  EmptyCanvas.prototype.drawOval_5ze9o_k$ = drawOval;
  EmptyCanvas.prototype.drawArc_wasmwu_k$ = drawArc;
  EmptyCanvas.prototype.drawArcRad_pebonr_k$ = drawArcRad;
  SkiaBackedCanvas.prototype.scale$default_65y6i2_k$ = scale$default;
  SkiaBackedCanvas.prototype.clipRect$default_il0869_k$ = clipRect$default_0;
  SkiaBackedCanvas.prototype.clipPath$default_m1la40_k$ = clipPath$default;
  SkiaBackedCanvas.prototype.drawImageRect$default_hpapqz_k$ = drawImageRect$default;
  SkiaBackedCanvas.prototype.skewRad_jnvexm_k$ = skewRad;
  SkiaBackedCanvas.prototype.clipRect_5p7fgn_k$ = clipRect;
  SkiaBackedCanvas.prototype.clipRect$default_rf6xmh_k$ = clipRect$default;
  SkiaBackedCanvas.prototype.drawRect_gsp0aa_k$ = drawRect;
  SkiaBackedCanvas.prototype.drawOval_5ze9o_k$ = drawOval;
  SkiaBackedCanvas.prototype.drawArc_wasmwu_k$ = drawArc;
  SkiaBackedCanvas.prototype.drawArcRad_pebonr_k$ = drawArcRad;
  SkiaBackedPath.prototype.addPath$default_qq1a1o_k$ = addPath$default;
  SkiaBackedPath.prototype.arcToRad_lid0rr_k$ = arcToRad;
  SkiaBackedImageBitmap.prototype.readPixels$default_vzwszd_k$ = readPixels$default;
  //endregion
  //region block: init
  RadiansToDegrees = 57.29578;
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.CanvasDrawScope = CanvasDrawScope;
  _.$crossModule$.ContentDrawScope = ContentDrawScope;
  _.$crossModule$.DrawScope = DrawScope;
  _.$crossModule$.Color = Color_0;
  _.$crossModule$.Color_1 = Color_1;
  _.$crossModule$.Color_2 = Color;
  _.$crossModule$.Generic = Generic;
  _.$crossModule$.Rectangle = Rectangle;
  _.$crossModule$.Rounded = Rounded;
  _.$crossModule$.Paint = Paint_0;
  _.$crossModule$.PathFillType = PathFillType;
  _.$crossModule$.Path = Path_0;
  _.$crossModule$._get_RectangleShape__3082176697 = _get_RectangleShape__3082176697;
  _.$crossModule$.Shadow = Shadow;
  _.$crossModule$.Shape = Shape;
  _.$crossModule$.asComposeCanvas = asComposeCanvas;
  _.$crossModule$.asSkiaPath = asSkiaPath;
  _.$crossModule$.compositeOver = compositeOver;
  _.$crossModule$.luminance = luminance;
  _.$crossModule$._get_nativeCanvas__3628725980 = _get_nativeCanvas__3628725980;
  _.$crossModule$.toArgb = toArgb;
  _.$crossModule$.toComposeRect = toComposeRect;
  _.$crossModule$.toSkiaRRect = toSkiaRRect;
  _.$crossModule$.toSkiaRect = toSkiaRect;
  _.$crossModule$.drawArc$default = drawArc$default;
  _.$crossModule$.drawArc$default_1 = drawArc$default_0;
  _.$crossModule$.drawCircle$default = drawCircle$default;
  _.$crossModule$.drawCircle$default_1 = drawCircle$default_0;
  _.$crossModule$.drawImage$default = drawImage$default_0;
  _.$crossModule$.drawImage$default_1 = drawImage$default;
  _.$crossModule$.drawImage$default_2 = drawImage$default_1;
  _.$crossModule$.drawLine$default = drawLine$default;
  _.$crossModule$.drawLine$default_1 = drawLine$default_0;
  _.$crossModule$.drawOval$default = drawOval$default;
  _.$crossModule$.drawOval$default_1 = drawOval$default_0;
  _.$crossModule$.drawPath$default = drawPath$default_0;
  _.$crossModule$.drawPath$default_1 = drawPath$default;
  _.$crossModule$.drawPoints$default = drawPoints$default_0;
  _.$crossModule$.drawPoints$default_1 = drawPoints$default;
  _.$crossModule$.drawRect$default = drawRect$default;
  _.$crossModule$.drawRect$default_1 = drawRect$default_0;
  _.$crossModule$.drawRoundRect$default = drawRoundRect$default;
  _.$crossModule$.drawRoundRect$default_1 = drawRoundRect$default_0;
  _.$crossModule$.BlendMode__hashCode_impl_549813438 = BlendMode__hashCode_impl_549813438;
  _.$crossModule$._Color___init__impl__1643258666 = _Color___init__impl__1643258666;
  _.$crossModule$._Color___get_alpha__impl__1955818045 = _Color___get_alpha__impl__1955818045;
  _.$crossModule$._Color___get_blue__impl__2245137193 = _Color___get_blue__impl__2245137193;
  _.$crossModule$.Color__convert_impl_1733625821 = Color__convert_impl_1733625821;
  _.$crossModule$._Color___get_green__impl__714316024 = _Color___get_green__impl__714316024;
  _.$crossModule$.Color__hashCode_impl_1907974927 = Color__hashCode_impl_1907974927;
  _.$crossModule$._Color___get_red__impl__3514328746 = _Color___get_red__impl__3514328746;
  _.$crossModule$._Color___get_value__impl__103472842 = _Color___get_value__impl__103472842;
  _.$crossModule$.Matrix__invert_impl_601240470 = Matrix__invert_impl_601240470;
  _.$crossModule$.Matrix__map_impl_460907122 = Matrix__map_impl_460907122;
  _.$crossModule$.Matrix__map_impl_460907122_1 = Matrix__map_impl_460907122_1;
  _.$crossModule$.Matrix__reset_impl_277335583 = Matrix__reset_impl_277335583;
  _.$crossModule$.Matrix__rotateX_impl_4089776529 = Matrix__rotateX_impl_4089776529;
  _.$crossModule$.Matrix__rotateY_impl_4118405680 = Matrix__rotateY_impl_4118405680;
  _.$crossModule$.Matrix__rotateZ_impl_4147034831 = Matrix__rotateZ_impl_4147034831;
  _.$crossModule$.Matrix__setFrom_impl_3965827618 = Matrix__setFrom_impl_3965827618;
  _.$crossModule$.Matrix__timesAssign_impl_1469297305 = Matrix__timesAssign_impl_1469297305;
  _.$crossModule$.PathFillType__hashCode_impl_1534733744 = PathFillType__hashCode_impl_1534733744;
  _.$crossModule$.StrokeCap__hashCode_impl_2741652248 = StrokeCap__hashCode_impl_2741652248;
  _.$crossModule$.StrokeJoin__hashCode_impl_224997584 = StrokeJoin__hashCode_impl_224997584;
  _.$crossModule$.Color__copy$default_impl_868080376 = Color__copy$default_impl_868080376;
  _.$crossModule$._Matrix___init__impl__1578125120 = _Matrix___init__impl__1578125120_0;
  _.$crossModule$.Matrix__scale$default_impl_2562774151 = Matrix__scale$default_impl_2562774151;
  _.$crossModule$.Matrix__translate$default_impl_4233136771 = Matrix__translate$default_impl_4233136771;
  _.$crossModule$.ColorSpaces_getInstance = ColorSpaces_getInstance;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_14;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_16;
  _.$crossModule$.Companion_getInstance_2 = Companion_getInstance_17;
  _.$crossModule$.Companion_getInstance_3 = Companion_getInstance_24;
  _.$crossModule$.Companion_getInstance_4 = Companion_getInstance_28;
  _.$crossModule$.Companion_getInstance_5 = Companion_getInstance_29;
  _.$crossModule$.Companion_getInstance_6 = Companion_getInstance_31;
  _.$crossModule$.Companion_getInstance_7 = Companion_getInstance_32;
  _.$crossModule$.Companion_getInstance_8 = Companion_getInstance_33;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_ui_ui_graphics.js.map