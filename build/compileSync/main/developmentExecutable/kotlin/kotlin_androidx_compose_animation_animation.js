(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_kotlin.js', './kotlin_androidx_compose_animation_animation_core.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui_unit.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_animation_animation_core.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'));
  else {
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_androidx_compose_animation_animation_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_animation_animation_core' was not found. Please, check whether 'kotlin_androidx_compose_animation_animation_core' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    root.kotlin_androidx_compose_animation_animation = factory(typeof kotlin_androidx_compose_animation_animation === 'undefined' ? {} : kotlin_androidx_compose_animation_animation, kotlin_androidx_compose_ui_ui_graphics, kotlin_kotlin, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui_graphics, kotlin_kotlin, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit) {
  //region block: imports
  var ColorSpaces_getInstance = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.ColorSpaces_getInstance;
  var Color__convert_impl_1733625821 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color__convert_impl_1733625821;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var _Color___get_red__impl__3514328746 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_red__impl__3514328746;
  var _Color___get_green__impl__714316024 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_green__impl__714316024;
  var _Color___get_blue__impl__2245137193 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_blue__impl__2245137193;
  var _Color___get_alpha__impl__1955818045 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_alpha__impl__1955818045;
  var AnimationVector4D = kotlin_androidx_compose_animation_animation_core.$crossModule$.AnimationVector4D;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_1;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_2;
  var TwoWayConverter = kotlin_androidx_compose_animation_animation_core.$crossModule$.TwoWayConverter;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var _TransformOrigin___get_pivotFractionX__impl__3673993630 = kotlin_androidx_compose_ui_ui.$crossModule$._TransformOrigin___get_pivotFractionX__impl__3673993630;
  var _TransformOrigin___get_pivotFractionY__impl__1121836669 = kotlin_androidx_compose_ui_ui.$crossModule$._TransformOrigin___get_pivotFractionY__impl__1121836669;
  var AnimationVector2D = kotlin_androidx_compose_animation_animation_core.$crossModule$.AnimationVector2D;
  var TransformOrigin = kotlin_androidx_compose_ui_ui.$crossModule$.TransformOrigin;
  var TransformOrigin_0 = kotlin_androidx_compose_ui_ui.$crossModule$.TransformOrigin_1;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.mutableStateOf$default;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$crossModule$.Spring_getInstance;
  var spring$default = kotlin_androidx_compose_animation_animation_core.$crossModule$.spring$default;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_4;
  var _get_VisibilityThreshold__3713836120 = kotlin_androidx_compose_animation_animation_core.$crossModule$._get_VisibilityThreshold__3713836120;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset_1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_6;
  var _get_VisibilityThreshold__3713836120_0 = kotlin_androidx_compose_animation_animation_core.$crossModule$._get_VisibilityThreshold__3713836120_1;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize_1;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_ColorToVector__1718398192() {
    init_properties_ColorVectorConverter_kt_4248649504();
    return ColorToVector;
  }
  var ColorToVector;
  function _get_M1__1413092487() {
    init_properties_ColorVectorConverter_kt_4248649504();
    return M1;
  }
  var M1;
  function _get_InverseM1__2584874045() {
    init_properties_ColorVectorConverter_kt_4248649504();
    return InverseM1;
  }
  var InverseM1;
  function multiplyColumn(column, x, y, z, matrix) {
    init_properties_ColorVectorConverter_kt_4248649504();
    return x * matrix[column] + y * matrix[3 + column | 0] + z * matrix[6 + column | 0];
  }
  function ColorToVector$lambda$lambda() {
    return function (color) {
      var colorXyz = Color__convert_impl_1733625821(color.value_1, ColorSpaces_getInstance()._get_CieXyz__425653713_71f8i9_k$());
      Unit_getInstance();
      var x = _Color___get_red__impl__3514328746(colorXyz);
      Unit_getInstance();
      var y = _Color___get_green__impl__714316024(colorXyz);
      Unit_getInstance();
      var z = _Color___get_blue__impl__2245137193(colorXyz);
      Unit_getInstance();
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = multiplyColumn(0, x, y, z, _get_M1__1413092487());
        var tmp1_pow_0 = 1.0 / 3.0;
        tmp$ret$0 = Math.pow(tmp0_pow_0, tmp1_pow_0);
        break $l$block;
      }
      var l = tmp$ret$0;
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp2_pow_0 = multiplyColumn(1, x, y, z, _get_M1__1413092487());
        var tmp3_pow_0 = 1.0 / 3.0;
        tmp$ret$1 = Math.pow(tmp2_pow_0, tmp3_pow_0);
        break $l$block_0;
      }
      var a = tmp$ret$1;
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp4_pow_0 = multiplyColumn(2, x, y, z, _get_M1__1413092487());
        var tmp5_pow_0 = 1.0 / 3.0;
        tmp$ret$2 = Math.pow(tmp4_pow_0, tmp5_pow_0);
        break $l$block_1;
      }
      var b = tmp$ret$2;
      Unit_getInstance();
      return new AnimationVector4D(_Color___get_alpha__impl__1955818045(color.value_1), l, a, b);
    };
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_pow_0 = it._get_v2__1413131919_ndcbkf_k$();
        tmp$ret$0 = Math.pow(tmp0_pow_0, 3.0);
        break $l$block;
      }
      var l = tmp$ret$0;
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_pow_0 = it._get_v3__1413131950_ndcbla_k$();
        tmp$ret$1 = Math.pow(tmp1_pow_0, 3.0);
        break $l$block_0;
      }
      var a = tmp$ret$1;
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_pow_0 = it._get_v4__1413131981_ndcbm5_k$();
        tmp$ret$2 = Math.pow(tmp2_pow_0, 3.0);
        break $l$block_1;
      }
      var b = tmp$ret$2;
      Unit_getInstance();
      var x = multiplyColumn(0, l, a, b, _get_InverseM1__2584874045());
      Unit_getInstance();
      var y = multiplyColumn(1, l, a, b, _get_InverseM1__2584874045());
      Unit_getInstance();
      var z = multiplyColumn(2, l, a, b, _get_InverseM1__2584874045());
      Unit_getInstance();
      var tmp0_alpha = coerceIn(it._get_v1__1413131888_ndcbjk_k$(), 0.0, 1.0);
      var tmp1_red = coerceIn(x, -2.0, 2.0);
      var tmp2_green = coerceIn(y, -2.0, 2.0);
      var tmp3_blue = coerceIn(z, -2.0, 2.0);
      var tmp4_colorSpace = ColorSpaces_getInstance()._get_CieXyz__425653713_71f8i9_k$();
      var colorXyz = Color(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, tmp4_colorSpace);
      Unit_getInstance();
      return new Color_0(Color__convert_impl_1733625821(colorXyz, $colorSpace));
    };
  }
  function ColorToVector$lambda() {
    return function (colorSpace) {
      var tmp = ColorToVector$lambda$lambda();
      return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_1166805060;
  function init_properties_ColorVectorConverter_kt_4248649504() {
    if (!properties_initialized_ColorVectorConverter_kt_1166805060) {
      properties_initialized_ColorVectorConverter_kt_1166805060 = true;
      ColorToVector = ColorToVector$lambda();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = new Float32Array([0.80405736, 0.026893456, 0.04586542, 0.3188387, 0.9319606, 0.26299807, -0.11419419, 0.05105356, 0.83999807]);
        break $l$block;
      }
      M1 = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = new Float32Array([1.2485008, -0.032856926, -0.057883114, -0.48331892, 1.1044513, -0.3194066, 0.19910365, -0.07159331, 1.202023]);
        break $l$block_0;
      }
      InverseM1 = tmp$ret$0_0;
    }
  }
  function _get_TransformOriginVectorConverter__4282217920() {
    init_properties_EnterExitTransition_kt_906694345();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function _get_DefaultAlpha__989817134() {
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _get_DefaultAlphaAndScaleSpring__312289134() {
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function _get_DefaultOffsetAnimationSpec__1059067968() {
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function _get_DefaultSizeAnimationSpec__78587566() {
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  ExperimentalAnimationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalAnimationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalAnimationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalAnimationApi.prototype.toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  ExperimentalAnimationApi.$metadata$ = {
    simpleName: 'ExperimentalAnimationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function TransformOriginVectorConverter$lambda() {
    return function (it) {
      return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__3673993630(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__1121836669(it.packedValue_1));
    };
  }
  function TransformOriginVectorConverter$lambda_0() {
    return function (it) {
      return new TransformOrigin_0(TransformOrigin(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$()));
    };
  }
  var properties_initialized_EnterExitTransition_kt_1777111333;
  function init_properties_EnterExitTransition_kt_906694345() {
    if (!properties_initialized_EnterExitTransition_kt_1777111333) {
      properties_initialized_EnterExitTransition_kt_1777111333 = true;
      var tmp = TransformOriginVectorConverter$lambda();
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0());
      DefaultAlpha = mutableStateOf$default(1.0, null, 2, null);
      var tmp_0 = Spring_getInstance()._get_StiffnessMediumLow__2033407051_xmmyx7_k$();
      DefaultAlphaAndScaleSpring = spring$default(0.0, tmp_0, null, 5, null);
      DefaultOffsetAnimationSpec = spring$default(0.0, Spring_getInstance()._get_StiffnessMediumLow__2033407051_xmmyx7_k$(), new IntOffset(_get_VisibilityThreshold__3713836120(Companion_getInstance())), 1, null);
      DefaultSizeAnimationSpec = spring$default(0.0, Spring_getInstance()._get_StiffnessMediumLow__2033407051_xmmyx7_k$(), new IntSize(_get_VisibilityThreshold__3713836120_0(Companion_getInstance_0())), 1, null);
    }
  }
  function _get_DecelerationRate__54235884() {
    init_properties_FlingCalculator_kt_1164617974();
    return DecelerationRate;
  }
  var DecelerationRate;
  var properties_initialized_FlingCalculator_kt_658749778;
  function init_properties_FlingCalculator_kt_1164617974() {
    if (!properties_initialized_FlingCalculator_kt_658749778) {
      properties_initialized_FlingCalculator_kt_658749778 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.log(0.78);
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Math.log(0.9);
        break $l$block_0;
      }
      DecelerationRate = tmp / tmp$ret$1;
    }
  }
  function _get_colorDefaultSpring__3428330464() {
    init_properties_SingleValueAnimation_kt_40659391();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  var properties_initialized_SingleValueAnimation_kt_1253782243;
  function init_properties_SingleValueAnimation_kt_40659391() {
    if (!properties_initialized_SingleValueAnimation_kt_1253782243) {
      properties_initialized_SingleValueAnimation_kt_1253782243 = true;
      colorDefaultSpring = spring$default(0.0, 0.0, null, 7, null);
    }
  }
  function _get_platformFlingScrollFriction__1360807841() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_animation_animation.js.map