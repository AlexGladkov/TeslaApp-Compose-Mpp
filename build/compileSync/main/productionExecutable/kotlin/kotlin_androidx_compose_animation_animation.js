(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_animation_animation_core.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui_unit.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_animation_animation_core.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_animation_animation'.");
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
    root.kotlin_androidx_compose_animation_animation = factory(typeof kotlin_androidx_compose_animation_animation === 'undefined' ? {} : kotlin_androidx_compose_animation_animation, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit) {
  //region block: imports
  var imul = Math.imul;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
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
  var Long = kotlin_kotlin.$crossModule$.Long;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var numberToLong = kotlin_kotlin.$crossModule$.numberToLong;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var FloatDecayAnimationSpec = kotlin_androidx_compose_animation_animation_core.$crossModule$.FloatDecayAnimationSpec;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var _get_LocalDensity__4285485518 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalDensity__4285485518;
  var generateDecayAnimationSpec = kotlin_androidx_compose_animation_animation_core.$crossModule$.generateDecayAnimationSpec;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_ColorToVector__1718398192() {
    unreachableDeclarationLog();
    init_properties_ColorVectorConverter_kt_4248649504();
    return ColorToVector;
  }
  var ColorToVector;
  function _get_M1__1413092487() {
    unreachableDeclarationLog();
    init_properties_ColorVectorConverter_kt_4248649504();
    return M1;
  }
  var M1;
  function _get_InverseM1__2584874045() {
    unreachableDeclarationLog();
    init_properties_ColorVectorConverter_kt_4248649504();
    return InverseM1;
  }
  var InverseM1;
  function multiplyColumn(column, x, y, z, matrix) {
    unreachableDeclarationLog();
    init_properties_ColorVectorConverter_kt_4248649504();
    return x * matrix[column] + y * matrix[3 + column | 0] + z * matrix[6 + column | 0];
  }
  function ColorToVector$lambda$lambda() {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return function (colorSpace) {
      var tmp = ColorToVector$lambda$lambda();
      return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_1166805060;
  function init_properties_ColorVectorConverter_kt_4248649504() {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    init_properties_EnterExitTransition_kt_906694345();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function _get_DefaultAlpha__989817134() {
    unreachableDeclarationLog();
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _get_DefaultAlphaAndScaleSpring__312289134() {
    unreachableDeclarationLog();
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function _get_DefaultOffsetAnimationSpec__1059067968() {
    unreachableDeclarationLog();
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function _get_DefaultSizeAnimationSpec__78587566() {
    unreachableDeclarationLog();
    init_properties_EnterExitTransition_kt_906694345();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
    unreachableDeclarationLog();
  }
  ExperimentalAnimationApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalAnimationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalAnimationApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  ExperimentalAnimationApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  ExperimentalAnimationApi.$metadata$ = {
    simpleName: 'ExperimentalAnimationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function TransformOriginVectorConverter$lambda() {
    unreachableDeclarationLog();
    return function (it) {
      return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__3673993630(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__1121836669(it.packedValue_1));
    };
  }
  function TransformOriginVectorConverter$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return new TransformOrigin_0(TransformOrigin(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$()));
    };
  }
  var properties_initialized_EnterExitTransition_kt_1777111333;
  function init_properties_EnterExitTransition_kt_906694345() {
    unreachableDeclarationLog();
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
  function _get_friction__265246737($this) {
    unreachableDeclarationLog();
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__455062266($this) {
    unreachableDeclarationLog();
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density._get_density__3015598889_l5pazb_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_b9qzl_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
    this.$stable_1 = 0;
  }
  FlingInfo.prototype._get_initialVelocity__3810257904_80l05s_k$ = function () {
    unreachableDeclarationLog();
    return this.initialVelocity_1;
  };
  FlingInfo.prototype._get_distance__1834152566_uc096e_k$ = function () {
    unreachableDeclarationLog();
    return this.distance_1;
  };
  FlingInfo.prototype._get_duration__4153959607_2bya89_k$ = function () {
    unreachableDeclarationLog();
    return this.duration_1;
  };
  FlingInfo.prototype.position_axeral_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = this.duration_1.toFloat_jhbgwv_k$();
        tmp$ret$0 = time.toFloat_jhbgwv_k$() / tmp0_div_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_sign_0 = this.initialVelocity_1;
      tmp$ret$1 = Math.sign(tmp1_sign_0);
      break $l$block_0;
    }
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos)._get_distanceCoefficient__3566259345_c1uqnj_k$();
  };
  FlingInfo.prototype.velocity_v2xlvr_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = this.duration_1.toFloat_jhbgwv_k$();
        tmp$ret$0 = time.toFloat_jhbgwv_k$() / tmp0_div_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos)._get_velocityCoefficient__2546688377_swvonb_k$();
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_sign_0 = this.initialVelocity_1;
      tmp$ret$1 = Math.sign(tmp1_sign_0);
      break $l$block_0;
    }
    return tmp_0 * tmp$ret$1 * this.distance_1 / this.duration_1.toFloat_jhbgwv_k$() * 1000.0;
  };
  FlingInfo.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.initialVelocity_1;
  };
  FlingInfo.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.distance_1;
  };
  FlingInfo.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.duration_1;
  };
  FlingInfo.prototype.copy_qho10f_k$ = function (initialVelocity, distance, duration) {
    unreachableDeclarationLog();
    return new FlingInfo(initialVelocity, distance, duration);
  };
  FlingInfo.prototype.copy$default_5vyk8q_k$ = function (initialVelocity, distance, duration, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      initialVelocity = this.initialVelocity_1;
    if (!(($mask0 & 2) === 0))
      distance = this.distance_1;
    if (!(($mask0 & 4) === 0))
      duration = this.duration_1;
    return this.copy_qho10f_k$(initialVelocity, distance, duration);
  };
  FlingInfo.prototype.toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + toString(this.duration_1) + ')';
  };
  FlingInfo.prototype.hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  FlingInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.initialVelocity_1, tmp0_other_with_cast.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, tmp0_other_with_cast.distance_1))
      return false;
    if (!this.duration_1.equals(tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  FlingInfo.$metadata$ = {
    simpleName: 'FlingInfo',
    kind: 'class',
    interfaces: []
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  FlingCalculator.prototype._get_density__3015598889_l5pazb_k$ = function () {
    unreachableDeclarationLog();
    return this.density_1;
  };
  FlingCalculator.prototype.flingDuration_tlzcny_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = _get_DecelerationRate__54235884() - 1.0;
    var tmp$ret$0;
    $l$block: {
      var tmp0_exp_0 = l / decelMinusOne;
      tmp$ret$0 = Math.exp(tmp0_exp_0);
      break $l$block;
    }
    return numberToLong(1000.0 * tmp$ret$0);
  };
  FlingCalculator.prototype.flingDistance_fh7swt_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = _get_DecelerationRate__54235884() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    var tmp$ret$0;
    $l$block: {
      var tmp0_exp_0 = _get_DecelerationRate__54235884() / decelMinusOne * l;
      tmp$ret$0 = Math.exp(tmp0_exp_0);
      break $l$block;
    }
    return tmp * tmp$ret$0;
  };
  FlingCalculator.prototype.flingInfo_gbiih0_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = _get_DecelerationRate__54235884() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    var tmp$ret$0;
    $l$block: {
      var tmp0_exp_0 = _get_DecelerationRate__54235884() / decelMinusOne * l;
      tmp$ret$0 = Math.exp(tmp0_exp_0);
      break $l$block;
    }
    var tmp_0 = tmp * tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_exp_0 = l / decelMinusOne;
      tmp$ret$1 = Math.exp(tmp1_exp_0);
      break $l$block_0;
    }
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  FlingCalculator.$metadata$ = {
    simpleName: 'FlingCalculator',
    kind: 'class',
    interfaces: []
  };
  function computeDeceleration_0(friction, density) {
    init_properties_FlingCalculator_kt_1164617974();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  function _get_InchesPerMeter__3095253863() {
    unreachableDeclarationLog();
    return InchesPerMeter;
  }
  var InchesPerMeter;
  function _get_GravityEarth__3869867535() {
    unreachableDeclarationLog();
    return GravityEarth;
  }
  var GravityEarth;
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
    unreachableDeclarationLog();
    init_properties_SingleValueAnimation_kt_40659391();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  var properties_initialized_SingleValueAnimation_kt_1253782243;
  function init_properties_SingleValueAnimation_kt_40659391() {
    unreachableDeclarationLog();
    if (!properties_initialized_SingleValueAnimation_kt_1253782243) {
      properties_initialized_SingleValueAnimation_kt_1253782243 = true;
      colorDefaultSpring = spring$default(0.0, 0.0, null, 7, null);
    }
  }
  function _get_NbSamples__1547373916($this) {
    unreachableDeclarationLog();
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4017123256($this) {
    unreachableDeclarationLog();
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__4214571612($this) {
    unreachableDeclarationLog();
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
    this.$stable_1 = 0;
  }
  FlingResult.prototype._get_distanceCoefficient__3566259345_c1uqnj_k$ = function () {
    return this.distanceCoefficient_1;
  };
  FlingResult.prototype._get_velocityCoefficient__2546688377_swvonb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  FlingResult.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.distanceCoefficient_1;
  };
  FlingResult.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.velocityCoefficient_1;
  };
  FlingResult.prototype.copy_138fzp_k$ = function (distanceCoefficient, velocityCoefficient) {
    unreachableDeclarationLog();
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  FlingResult.prototype.copy$default_bbfa40_k$ = function (distanceCoefficient, velocityCoefficient, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      distanceCoefficient = this.distanceCoefficient_1;
    if (!(($mask0 & 2) === 0))
      velocityCoefficient = this.velocityCoefficient_1;
    return this.copy_138fzp_k$(distanceCoefficient, velocityCoefficient);
  };
  FlingResult.prototype.toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  FlingResult.prototype.hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  FlingResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.distanceCoefficient_1, tmp0_other_with_cast.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, tmp0_other_with_cast.velocityCoefficient_1))
      return false;
    return true;
  };
  FlingResult.$metadata$ = {
    simpleName: 'FlingResult',
    kind: 'class',
    interfaces: []
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  AndroidFlingSpline.prototype.flingPosition_xrffyv_k$ = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  AndroidFlingSpline.prototype.deceleration_b9qzl_k$ = function (velocity, friction) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.abs(velocity);
        break $l$block;
      }
      var tmp0_ln_0 = 0.35 * tmp$ret$0 / friction;
      tmp$ret$1 = Math.log(tmp0_ln_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  AndroidFlingSpline.$metadata$ = {
    simpleName: 'AndroidFlingSpline',
    kind: 'object',
    interfaces: []
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          var tmp$ret$0;
          $l$block: {
            var tmp0_abs_0 = tx - alpha;
            tmp$ret$0 = Math.abs(tmp0_abs_0);
            break $l$block;
          }
          if (tmp$ret$0 < 1.0E-5)
            break $l$loop;
          else {
          }
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_abs_0 = dy - alpha;
            tmp$ret$1 = Math.abs(tmp1_abs_0);
            break $l$block_0;
          }
          if (tmp$ret$1 < 1.0E-5)
            break $l$loop_0;
          else {
          }
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function _get_Inflection__1894990574() {
    unreachableDeclarationLog();
    return Inflection;
  }
  var Inflection;
  function _get_P2__1413095401() {
    unreachableDeclarationLog();
    return P2;
  }
  var P2;
  function _get_P1__1413095370() {
    unreachableDeclarationLog();
    return P1;
  }
  var P1;
  function _get_StartTension__3670673819() {
    unreachableDeclarationLog();
    return StartTension;
  }
  var StartTension;
  function _get_flingCalculator__3074864723($this) {
    unreachableDeclarationLog();
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_fh7swt_k$(startVelocity);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.sign(startVelocity);
      break $l$block;
    }
    return tmp * tmp$ret$0;
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(_get_platformFlingScrollFriction__1360807841(), density);
    this.$stable_1 = 0;
  }
  SplineBasedFloatDecayAnimationSpec.prototype._get_absVelocityThreshold__2019811855_xejksv_k$ = function () {
    return 0.0;
  };
  SplineBasedFloatDecayAnimationSpec.prototype.getTargetValue_xs6ane_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  SplineBasedFloatDecayAnimationSpec.prototype.getValueFromNanos_tm63l0_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).position_axeral_k$(playTimeMillis);
  };
  SplineBasedFloatDecayAnimationSpec.prototype.getDurationNanos_kuw0r9_k$ = function (initialValue, initialVelocity) {
    return this.flingCalculator_1.flingDuration_tlzcny_k$(initialVelocity).times_2zfqpc_k$(new Long(1000000, 0));
  };
  SplineBasedFloatDecayAnimationSpec.prototype.getVelocityFromNanos_1qiryk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).velocity_v2xlvr_k$(playTimeMillis);
  };
  SplineBasedFloatDecayAnimationSpec.$metadata$ = {
    simpleName: 'SplineBasedFloatDecayAnimationSpec',
    kind: 'class',
    interfaces: [FloatDecayAnimationSpec]
  };
  function _get_platformFlingScrollFriction__1360807841() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)');
    var tmp$ret$0;
    $l$block: {
      var tmp0_$get_current$$composable_0_3888126690 = _get_LocalDensity__4285485518();
      var tmp1_$get_current$$composable_0_3633390145 = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_0_3633390145;
      var tmp0_2 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3888126690);
      tmp$ret$0 = tmp0_2;
      break $l$block;
    }
    var density = tmp$ret$0;
    var tmp$ret$5;
    $l$block_4: {
      var tmp2_remember$composable_0 = density._get_density__3015598889_l5pazb_k$();
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_1_0 = tmp3_remember$composable_0;
      $composer_1_0.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1_0, 'C(remember$composable)P(1)');
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_cache_0_3 = $composer_1_0;
        var tmp2_cache_0_4 = $composer_1_0.changed_ga7h3f_k$(tmp2_remember$composable_0);
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_let_0_5 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$2;
          $l$block_1: {
            var tmp;
            if (tmp2_cache_0_4 ? true : tmp0_let_0_5 === Companion_getInstance_1()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_return_8 = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
                tmp$ret$1 = tmp0_return_8;
                break $l$block_0;
              }
              var value_2_2_6 = tmp$ret$1;
              tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_6);
              tmp = value_2_2_6;
            } else {
              tmp = tmp0_let_0_5;
            }
            tmp$ret$2 = tmp;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        var tmp_0 = tmp$ret$3;
        tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_3;
      }
      var tmp0_2_0 = tmp$ret$4;
      $composer_1_0.endReplaceableGroup_er37p7_k$();
      tmp$ret$5 = tmp0_2_0;
      break $l$block_4;
    }
    var tmp0 = tmp$ret$5;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  //region block: init
  InchesPerMeter = 39.37;
  GravityEarth = 9.80665;
  Inflection = 0.35;
  P2 = 0.35000002;
  P1 = 0.175;
  StartTension = 0.5;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.rememberSplineBasedDecay$composable = rememberSplineBasedDecay$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_animation_animation.js.map