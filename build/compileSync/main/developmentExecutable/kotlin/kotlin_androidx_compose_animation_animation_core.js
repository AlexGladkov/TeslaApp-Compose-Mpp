(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_androidx_compose_ui_ui_geometry.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    root.kotlin_androidx_compose_animation_animation_core = factory(typeof kotlin_androidx_compose_animation_animation_core === 'undefined' ? {} : kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_geometry, kotlin_kotlin);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_geometry, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_1;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_3;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size_1;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset_1;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_4;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset_1;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_6;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize_1;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var to = kotlin_kotlin.$crossModule$.to;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_3;
  var coerceIn_0 = kotlin_kotlin.$crossModule$.coerceIn_1;
  var numberToLong = kotlin_kotlin.$crossModule$.numberToLong;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite;
  var isNaN_0 = kotlin_kotlin.$crossModule$.isNaN_1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$crossModule$.DoubleCompanionObject_getInstance;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var _Dp___get_value__impl__3303478217 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___get_value__impl__3303478217;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var _DpOffset___get_x__impl__2462752079 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._DpOffset___get_x__impl__2462752079;
  var _DpOffset___get_y__impl__4205562414 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._DpOffset___get_y__impl__4205562414;
  var DpOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.DpOffset;
  var DpOffset_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.DpOffset_1;
  var _Size___get_width__impl__3977603903 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_width__impl__3977603903;
  var _Size___get_height__impl__604880786 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_height__impl__604880786;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size;
  var _Offset___get_x__impl__2048295803 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_x__impl__2048295803;
  var _Offset___get_y__impl__3791106138 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_y__impl__3791106138;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset;
  var _IntOffset___get_x__impl__2691365380 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntOffset___get_x__impl__2691365380;
  var _IntOffset___get_y__impl__139208419 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntOffset___get_y__impl__139208419;
  var roundToInt = kotlin_kotlin.$crossModule$.roundToInt;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset;
  var _IntSize___get_width__impl__3492176776 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_width__impl__3492176776;
  var _IntSize___get_height__impl__2736509033 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_height__impl__2736509033;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect_1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var until = kotlin_kotlin.$crossModule$.until;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_2;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  AnimationVector1D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector1D.prototype.constructor = AnimationVector1D;
  AnimationVector2D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector2D.prototype.constructor = AnimationVector2D;
  AnimationVector3D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector3D.prototype.constructor = AnimationVector3D;
  AnimationVector4D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector4D.prototype.constructor = AnimationVector4D;
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_da2xk2_k$(this.getDurationNanos_ct8k6x_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  function vectorize_0(converter) {
    return this.vectorize_wiveyw_k$(converter);
  }
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_2nsq5r_k$(this.getDurationNanos_62az16_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function _get_isInfinite__365521645() {
    return false;
  }
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this._get_delayMillis__455154952_7izjt4_k$() + this._get_durationMillis__2015407185_xbx64x_k$() | 0).times_2zfqpc_k$(_get_MillisToNanos__1332245331());
  }
  //endregion
  function _get_defaultAnimation__3757116648() {
    init_properties_AnimateAsState_kt_2632480572();
    return defaultAnimation;
  }
  var defaultAnimation;
  function _get_dpDefaultSpring__3151851983() {
    init_properties_AnimateAsState_kt_2632480572();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function _get_sizeDefaultSpring__3004623812() {
    init_properties_AnimateAsState_kt_2632480572();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function _get_offsetDefaultSpring__993300502() {
    init_properties_AnimateAsState_kt_2632480572();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function _get_rectDefaultSpring__2879249511() {
    init_properties_AnimateAsState_kt_2632480572();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function _get_intDefaultSpring__957947564() {
    init_properties_AnimateAsState_kt_2632480572();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function _get_intOffsetDefaultSpring__3566837023() {
    init_properties_AnimateAsState_kt_2632480572();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function _get_intSizeDefaultSpring__3141379853() {
    init_properties_AnimateAsState_kt_2632480572();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  var properties_initialized_AnimateAsState_kt_3585993568;
  function init_properties_AnimateAsState_kt_2632480572() {
    if (!properties_initialized_AnimateAsState_kt_3585993568) {
      properties_initialized_AnimateAsState_kt_3585993568 = true;
      defaultAnimation = spring$default(0.0, 0.0, null, 7, null);
      dpDefaultSpring = spring$default(0.0, 0.0, new Dp(_get_VisibilityThreshold__3713836120(Companion_getInstance())), 3, null);
      sizeDefaultSpring = spring$default(0.0, 0.0, new Size(_get_VisibilityThreshold__3713836120_0(Companion_getInstance_0())), 3, null);
      offsetDefaultSpring = spring$default(0.0, 0.0, new Offset(_get_VisibilityThreshold__3713836120_1(Companion_getInstance_1())), 3, null);
      rectDefaultSpring = spring$default(0.0, 0.0, _get_VisibilityThreshold__3713836120_2(Companion_getInstance_2()), 3, null);
      intDefaultSpring = spring$default(0.0, 0.0, _get_VisibilityThreshold__3713836120_3(IntCompanionObject_getInstance()), 3, null);
      intOffsetDefaultSpring = spring$default(0.0, 0.0, new IntOffset(_get_VisibilityThreshold__3713836120_4(Companion_getInstance_3())), 3, null);
      intSizeDefaultSpring = spring$default(0.0, 0.0, new IntSize(_get_VisibilityThreshold__3713836120_5(Companion_getInstance_4())), 3, null);
    }
  }
  function _get_MillisToNanos__1332245331() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function SpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      dampingRatio = Spring_getInstance()._get_DampingRatioNoBouncy__4171516389_21hzbv_k$();
    if (!(($mask0 & 2) === 0))
      stiffness = Spring_getInstance()._get_StiffnessMedium__1547732765_plha8t_k$();
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    SpringSpec.call($this, dampingRatio, stiffness, visibilityThreshold);
    return $this;
  }
  function SpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return SpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(SpringSpec.prototype));
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
  }
  SpringSpec.prototype._get_dampingRatio__2557313602_sqjy66_k$ = function () {
    return this.dampingRatio_1;
  };
  SpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    return this.stiffness_1;
  };
  SpringSpec.prototype._get_visibilityThreshold__3516362808_cvk72g_k$ = function () {
    return this.visibilityThreshold_1;
  };
  SpringSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.dampingRatio_1, this.stiffness_1, convert(converter, this.visibilityThreshold_1));
  };
  SpringSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.dampingRatio_1 === this.dampingRatio_1 ? other.stiffness_1 === this.stiffness_1 : false) ? equals(other.visibilityThreshold_1, this.visibilityThreshold_1) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  SpringSpec.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_hashCode_0 = this.visibilityThreshold_1;
      var tmp0_safe_receiver_2 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$0 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
      break $l$block;
    }
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.dampingRatio_1) | 0, 31) + getNumberHashCode(this.stiffness_1) | 0;
  };
  SpringSpec.$metadata$ = {
    simpleName: 'SpringSpec',
    kind: 'class',
    interfaces: [FiniteAnimationSpec]
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function spring$default(dampingRatio, stiffness, visibilityThreshold, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dampingRatio = Spring_getInstance()._get_DampingRatioNoBouncy__4171516389_21hzbv_k$();
    if (!(($mask0 & 2) === 0))
      stiffness = Spring_getInstance()._get_StiffnessMedium__1547732765_plha8t_k$();
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    return spring(dampingRatio, stiffness, visibilityThreshold);
  }
  function FiniteAnimationSpec() {
  }
  FiniteAnimationSpec.$metadata$ = {
    simpleName: 'FiniteAnimationSpec',
    kind: 'interface',
    interfaces: [AnimationSpec]
  };
  function convert(_this__1828080292, data) {
    if (data == null) {
      return null;
    } else {
      return _this__1828080292._get_convertToVector__3926537152_63cqio_k$()(data);
    }
  }
  function AnimationSpec() {
  }
  AnimationSpec.$metadata$ = {
    simpleName: 'AnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      durationMillis = 300;
    }
    if (!(($mask0 & 2) === 0))
      delay = 0;
    if (!(($mask0 & 4) === 0))
      easing = _get_FastOutSlowInEasing__2117326030();
    TweenSpec.call($this, durationMillis, delay, easing);
    return $this;
  }
  function TweenSpec_init_$Create$(durationMillis, delay, easing, $mask0, $marker) {
    return TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, Object.create(TweenSpec.prototype));
  }
  function TweenSpec(durationMillis, delay, easing) {
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  TweenSpec.prototype._get_durationMillis__2015407185_xbx64x_k$ = function () {
    return this.durationMillis_1;
  };
  TweenSpec.prototype._get_delay__3171773102_ikpy6q_k$ = function () {
    return this.delay_1;
  };
  TweenSpec.prototype._get_easing__320399168_5ar9kw_k$ = function () {
    return this.easing_1;
  };
  TweenSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  TweenSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.durationMillis_1 === this.durationMillis_1 ? other.delay_1 === this.delay_1 : false) ? equals(other.easing_1, this.easing_1) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  TweenSpec.prototype.hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  TweenSpec.$metadata$ = {
    simpleName: 'TweenSpec',
    kind: 'class',
    interfaces: [DurationBasedAnimationSpec]
  };
  function tween(durationMillis, delayMillis, easing) {
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function tween$default(durationMillis, delayMillis, easing, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      durationMillis = 300;
    }
    if (!(($mask0 & 2) === 0))
      delayMillis = 0;
    if (!(($mask0 & 4) === 0))
      easing = _get_FastOutSlowInEasing__2117326030();
    return tween(durationMillis, delayMillis, easing);
  }
  function DurationBasedAnimationSpec() {
  }
  DurationBasedAnimationSpec.$metadata$ = {
    simpleName: 'DurationBasedAnimationSpec',
    kind: 'interface',
    interfaces: [FiniteAnimationSpec]
  };
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.DefaultDurationMillis_1 = 300;
    this.UnspecifiedTime_1 = new Long(0, -2147483648);
    this.$stable_1 = 0;
  }
  AnimationConstants.prototype._get_DefaultDurationMillis__38788022_n3d12_k$ = function () {
    return this.DefaultDurationMillis_1;
  };
  AnimationConstants.prototype._get_UnspecifiedTime__3898741261_6jwhyr_k$ = function () {
    return this.UnspecifiedTime_1;
  };
  AnimationConstants.$metadata$ = {
    simpleName: 'AnimationConstants',
    kind: 'object',
    interfaces: []
  };
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function AnimationVector() {
    this.$stable_1 = 0;
  }
  AnimationVector.$metadata$ = {
    simpleName: 'AnimationVector',
    kind: 'class',
    interfaces: []
  };
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.value_1 = initVal;
    this.size_1 = 1;
    this.$stable_2 = 8;
  }
  AnimationVector1D.prototype._set_value__1325260276_toaspj_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  AnimationVector1D.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AnimationVector1D.prototype.reset_5tn5dq_k$ = function () {
    this.value_1 = 0.0;
  };
  AnimationVector1D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector1D(0.0);
  };
  AnimationVector1D.prototype.get_fkrdnv_k$ = function (index) {
    if (index === 0) {
      return this.value_1;
    } else {
      return 0.0;
    }
  };
  AnimationVector1D.prototype.set_8gccym_k$ = function (index, value) {
    if (index === 0) {
      this.value_1 = value;
    }
  };
  AnimationVector1D.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  AnimationVector1D.prototype.toString = function () {
    return 'AnimationVector1D: value = ' + this.value_1;
  };
  AnimationVector1D.prototype.equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.value_1 === this.value_1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AnimationVector1D.prototype.hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  AnimationVector1D.$metadata$ = {
    simpleName: 'AnimationVector1D',
    kind: 'class',
    interfaces: []
  };
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.size_1 = 2;
    this.$stable_2 = 8;
  }
  AnimationVector2D.prototype._set_v1__3473241468_1adavz_k$ = function (_set____804775014) {
    this.v1__1 = _set____804775014;
  };
  AnimationVector2D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    return this.v1__1;
  };
  AnimationVector2D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    this.v2__1 = _set____804775014;
  };
  AnimationVector2D.prototype._get_v2__1413131919_ndcbkf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector2D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
  };
  AnimationVector2D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  AnimationVector2D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      default:
        return 0.0;
    }
  };
  AnimationVector2D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    if (tmp0_subject === 0)
      this.v1__1 = value;
    else if (tmp0_subject === 1)
      this.v2__1 = value;
  };
  AnimationVector2D.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  AnimationVector2D.prototype.toString = function () {
    return 'AnimationVector2D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1;
  };
  AnimationVector2D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.v1__1 === this.v1__1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = other.v2__1 === this.v2__1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AnimationVector2D.prototype.hashCode = function () {
    return imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0;
  };
  AnimationVector2D.$metadata$ = {
    simpleName: 'AnimationVector2D',
    kind: 'class',
    interfaces: []
  };
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
    this.$stable_2 = 8;
  }
  AnimationVector3D.prototype._set_v1__3473241468_1adavz_k$ = function (_set____804775014) {
    this.v1__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    return this.v1__1;
  };
  AnimationVector3D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    this.v2__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v2__1413131919_ndcbkf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector3D.prototype._set_v3__3473241530_abcf1f_k$ = function (_set____804775014) {
    this.v3__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v3__1413131950_ndcbla_k$ = function () {
    return this.v3__1;
  };
  AnimationVector3D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  AnimationVector3D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  AnimationVector3D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      default:
        return 0.0;
    }
  };
  AnimationVector3D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
    }
  };
  AnimationVector3D.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  AnimationVector3D.prototype.toString = function () {
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  AnimationVector3D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.v1__1 === this.v1__1;
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = other.v2__1 === this.v2__1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = other.v3__1 === this.v3__1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AnimationVector3D.prototype.hashCode = function () {
    return imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0;
  };
  AnimationVector3D.$metadata$ = {
    simpleName: 'AnimationVector3D',
    kind: 'class',
    interfaces: []
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.v4__1 = v4;
    this.size_1 = 4;
    this.$stable_2 = 8;
  }
  AnimationVector4D.prototype._set_v1__3473241468_1adavz_k$ = function (_set____804775014) {
    this.v1__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    return this.v1__1;
  };
  AnimationVector4D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    this.v2__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v2__1413131919_ndcbkf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector4D.prototype._set_v3__3473241530_abcf1f_k$ = function (_set____804775014) {
    this.v3__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v3__1413131950_ndcbla_k$ = function () {
    return this.v3__1;
  };
  AnimationVector4D.prototype._set_v4__3473241561_g47a04_k$ = function (_set____804775014) {
    this.v4__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v4__1413131981_ndcbm5_k$ = function () {
    return this.v4__1;
  };
  AnimationVector4D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
    this.v4__1 = 0.0;
  };
  AnimationVector4D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  AnimationVector4D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      case 3:
        return this.v4__1;
      default:
        return 0.0;
    }
  };
  AnimationVector4D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
      case 3:
        this.v4__1 = value;
        break;
    }
  };
  AnimationVector4D.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  AnimationVector4D.prototype.toString = function () {
    return 'AnimationVector4D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1 + ', v4 = ' + this.v4__1;
  };
  AnimationVector4D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.v1__1 === this.v1__1;
    } else {
      {
        tmp_2 = false;
      }
    }
    if (tmp_2) {
      tmp_1 = other.v2__1 === this.v2__1;
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = other.v3__1 === this.v3__1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = other.v4__1 === this.v4__1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AnimationVector4D.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0, 31) + getNumberHashCode(this.v4__1) | 0;
  };
  AnimationVector4D.$metadata$ = {
    simpleName: 'AnimationVector4D',
    kind: 'class',
    interfaces: []
  };
  function newInstance(_this__1828080292) {
    var tmp = _this__1828080292.newVector_8o1gcd_k$();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function _set__real__682262120($this, _set____804775014) {
    $this._real_1 = _set____804775014;
  }
  function _get__real__3040424180($this) {
    return $this._real_1;
  }
  function _set__imaginary__3092768573($this, _set____804775014) {
    $this._imaginary_1 = _set____804775014;
  }
  function _get__imaginary__2182016049($this) {
    return $this._imaginary_1;
  }
  function component1($this) {
    return $this._real_1;
  }
  function component2($this) {
    return $this._imaginary_1;
  }
  function ComplexDouble(_real, _imaginary) {
    this._real_1 = _real;
    this._imaginary_1 = _imaginary;
  }
  ComplexDouble.prototype._get_real__807970925_dd1mct_k$ = function () {
    return this._real_1;
  };
  ComplexDouble.prototype._get_imaginary__1672231000_rnlpp4_k$ = function () {
    return this._imaginary_1;
  };
  ComplexDouble.prototype.plus_kiyahl_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other;
    return this;
  };
  ComplexDouble.prototype.plus_nuauig_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other._get_real__807970925_dd1mct_k$();
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 + other._get_imaginary__1672231000_rnlpp4_k$();
    return this;
  };
  ComplexDouble.prototype.minus_80anzj_k$ = function (other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = -other;
      var tmp0_this_1 = this;
      tmp0_this_1._real_1 = tmp0_this_1._real_1 + tmp0_plus_0;
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ComplexDouble.prototype.minus_yakhfy_k$ = function (other) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_this_1 = other;
        tmp0_this_1._real_1 = tmp0_this_1._real_1 * -1;
        var tmp1_this_2 = other;
        tmp1_this_2._imaginary_1 = tmp1_this_2._imaginary_1 * -1;
        tmp$ret$0 = other;
        break $l$block;
      }
      var tmp0_plus_0 = tmp$ret$0;
      var tmp0_this_1_0 = this;
      tmp0_this_1_0._real_1 = tmp0_this_1_0._real_1 + tmp0_plus_0._get_real__807970925_dd1mct_k$();
      var tmp1_this_2_0 = this;
      tmp1_this_2_0._imaginary_1 = tmp1_this_2_0._imaginary_1 + tmp0_plus_0._get_imaginary__1672231000_rnlpp4_k$();
      tmp$ret$1 = this;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ComplexDouble.prototype.times_myh3yd_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * other;
    return this;
  };
  ComplexDouble.prototype.times_jx7hb0_k$ = function (other) {
    this._real_1 = this._get_real__807970925_dd1mct_k$() * other._get_real__807970925_dd1mct_k$() - this._get_imaginary__1672231000_rnlpp4_k$() * other._get_imaginary__1672231000_rnlpp4_k$();
    this._imaginary_1 = this._get_real__807970925_dd1mct_k$() * other._get_imaginary__1672231000_rnlpp4_k$() + other._get_real__807970925_dd1mct_k$() * this._get_imaginary__1672231000_rnlpp4_k$();
    return this;
  };
  ComplexDouble.prototype.unaryMinus_6uz0qp_k$ = function () {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * -1;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * -1;
    return this;
  };
  ComplexDouble.prototype.div_hn31ow_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 / other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 / other;
    return this;
  };
  ComplexDouble.prototype.copy_fws33n_k$ = function (_real, _imaginary) {
    return new ComplexDouble(_real, _imaginary);
  };
  ComplexDouble.prototype.copy$default_l1hfaq_k$ = function (_real, _imaginary, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      _real = this._real_1;
    if (!(($mask0 & 2) === 0))
      _imaginary = this._imaginary_1;
    return this.copy_fws33n_k$(_real, _imaginary);
  };
  ComplexDouble.prototype.toString = function () {
    return 'ComplexDouble(_real=' + this._real_1 + ', _imaginary=' + this._imaginary_1 + ')';
  };
  ComplexDouble.prototype.hashCode = function () {
    var result = getNumberHashCode(this._real_1);
    result = imul(result, 31) + getNumberHashCode(this._imaginary_1) | 0;
    return result;
  };
  ComplexDouble.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this._real_1, tmp0_other_with_cast._real_1))
      return false;
    if (!equals(this._imaginary_1, tmp0_other_with_cast._imaginary_1))
      return false;
    return true;
  };
  ComplexDouble.$metadata$ = {
    simpleName: 'ComplexDouble',
    kind: 'class',
    interfaces: []
  };
  function complexQuadraticFormula(a, b, c) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_plus_0 = -b;
        var tmp1_plus_0 = complexSqrt(b * b - 4.0 * a * c);
        var tmp$ret$0;
        $l$block: {
          var tmp0_this_1 = tmp1_plus_0;
          tmp0_this_1._real_1 = tmp0_this_1._real_1 + tmp0_plus_0;
          tmp$ret$0 = tmp1_plus_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp2_div_0 = tmp$ret$1;
      var tmp3_div_0 = 2.0 * a;
      var tmp0_this_1_0 = tmp2_div_0;
      tmp0_this_1_0._real_1 = tmp0_this_1_0._real_1 / tmp3_div_0;
      var tmp1_this_2 = tmp2_div_0;
      tmp1_this_2._imaginary_1 = tmp1_this_2._imaginary_1 / tmp3_div_0;
      tmp$ret$2 = tmp2_div_0;
      break $l$block_1;
    }
    var firstRoot = tmp$ret$2;
    var tmp$ret$7;
    $l$block_6: {
      var tmp$ret$6;
      $l$block_5: {
        var tmp5_minus_0 = -b;
        var tmp6_minus_0 = complexSqrt(b * b - 4.0 * a * c);
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$3;
          $l$block_2: {
            var tmp0_this_1_1 = tmp6_minus_0;
            tmp0_this_1_1._real_1 = tmp0_this_1_1._real_1 * -1;
            var tmp1_this_2_0 = tmp6_minus_0;
            tmp1_this_2_0._imaginary_1 = tmp1_this_2_0._imaginary_1 * -1;
            tmp$ret$3 = tmp6_minus_0;
            break $l$block_2;
          }
          var tmp4_plus_0 = tmp$ret$3;
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_this_1_2 = tmp4_plus_0;
            tmp0_this_1_2._real_1 = tmp0_this_1_2._real_1 + tmp5_minus_0;
            tmp$ret$4 = tmp4_plus_0;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5;
        break $l$block_5;
      }
      var tmp7_div_0 = tmp$ret$6;
      var tmp8_div_0 = 2.0 * a;
      var tmp0_this_1_3 = tmp7_div_0;
      tmp0_this_1_3._real_1 = tmp0_this_1_3._real_1 / tmp8_div_0;
      var tmp1_this_2_1 = tmp7_div_0;
      tmp1_this_2_1._imaginary_1 = tmp1_this_2_1._imaginary_1 / tmp8_div_0;
      tmp$ret$7 = tmp7_div_0;
      break $l$block_6;
    }
    var secondRoot = tmp$ret$7;
    return to(firstRoot, secondRoot);
  }
  function plus(_this__1828080292, other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_this_1 = other;
      tmp0_this_1._real_1 = tmp0_this_1._real_1 + _this__1828080292;
      tmp$ret$0 = other;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Math.abs(num);
          break $l$block;
        }
        var tmp0_sqrt_0 = tmp$ret$0;
        tmp$ret$1 = Math.sqrt(tmp0_sqrt_0);
        break $l$block_0;
      }
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = Math.sqrt(num);
        break $l$block_1;
      }
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function minus(_this__1828080292, other) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_this_1 = other;
        tmp0_this_1._real_1 = tmp0_this_1._real_1 * -1;
        var tmp1_this_2 = other;
        tmp1_this_2._imaginary_1 = tmp1_this_2._imaginary_1 * -1;
        tmp$ret$0 = other;
        break $l$block;
      }
      var tmp0_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_this_1_1 = tmp0_plus_0;
        tmp0_this_1_1._real_1 = tmp0_this_1_1._real_1 + _this__1828080292;
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _get_FastOutSlowInEasing__2117326030() {
    init_properties_Easing_kt_1541679951();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function _get_LinearOutSlowInEasing__1273825495() {
    init_properties_Easing_kt_1541679951();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function _get_FastOutLinearInEasing__4233243626() {
    init_properties_Easing_kt_1541679951();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function _get_LinearEasing__2697834107() {
    init_properties_Easing_kt_1541679951();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  Easing.$metadata$ = {
    simpleName: 'Easing',
    kind: 'interface',
    interfaces: []
  };
  function _get_a__461226256($this) {
    return $this.a_1;
  }
  function _get_b__461226287($this) {
    return $this.b_1;
  }
  function _get_c__461226318($this) {
    return $this.c_1;
  }
  function _get_d__461226349($this) {
    return $this.d_1;
  }
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
  }
  CubicBezierEasing.prototype.transform_mzom4i_k$ = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.a_1, this.c_1, midpoint);
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_absoluteValue__0_2852910594 = fraction - estimate;
          tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__0_2852910594);
          break $l$block;
        }
        if (tmp$ret$0 < 0.001)
          return evaluateCubic(this, this.b_1, this.d_1, midpoint);
        else {
        }
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  CubicBezierEasing.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.a_1 === other.a_1;
    } else {
      {
        tmp_2 = false;
      }
    }
    if (tmp_2) {
      tmp_1 = this.b_1 === other.b_1;
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = this.c_1 === other.c_1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this.d_1 === other.d_1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CubicBezierEasing.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  CubicBezierEasing.$metadata$ = {
    simpleName: 'CubicBezierEasing',
    kind: 'class',
    interfaces: [Easing]
  };
  function _get_CubicErrorBound__3923770609() {
    return CubicErrorBound;
  }
  var CubicErrorBound;
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0.$metadata$ = {
    simpleName: 'sam$androidx_compose_animation_core_Easing$0',
    kind: 'class',
    interfaces: [Easing]
  };
  function LinearEasing$lambda() {
    return function (fraction) {
      return fraction;
    };
  }
  var properties_initialized_Easing_kt_3664905075;
  function init_properties_Easing_kt_1541679951() {
    if (!properties_initialized_Easing_kt_3664905075) {
      properties_initialized_Easing_kt_3664905075 = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda();
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  FloatAnimationSpec.$metadata$ = {
    simpleName: 'FloatAnimationSpec',
    kind: 'interface',
    interfaces: [AnimationSpec]
  };
  function FloatSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      dampingRatio = Spring_getInstance()._get_DampingRatioNoBouncy__4171516389_21hzbv_k$();
    if (!(($mask0 & 2) === 0))
      stiffness = Spring_getInstance()._get_StiffnessMedium__1547732765_plha8t_k$();
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = Spring_getInstance()._get_DefaultDisplacementThreshold__2622289208_rnvao8_k$();
    FloatSpringSpec.call($this, dampingRatio, stiffness, visibilityThreshold);
    return $this;
  }
  function FloatSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return FloatSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(FloatSpringSpec.prototype));
  }
  function _get_visibilityThreshold__3516362808($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_spring__289062558($this) {
    return $this.spring_1;
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = new SpringSimulation(1.0);
      {
      }
      {
        tmp0_also_0._set_dampingRatio__1617160782_ai2l81_k$(this.dampingRatio_1);
        tmp0_also_0._set_stiffness__2547357286_b592q1_k$(this.stiffness_1);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    tmp.spring_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  FloatSpringSpec.prototype._get_dampingRatio__2557313602_sqjy66_k$ = function () {
    return this.dampingRatio_1;
  };
  FloatSpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    return this.stiffness_1;
  };
  FloatSpringSpec.prototype.getValueFromNanos_laqly_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(_get_MillisToNanos__1332245331());
    this.spring_1._set_finalPosition__3446503782_75ngtz_k$(targetValue);
    var value = _Motion___get_value__impl__3446897247(this.spring_1.updateValues_23ym3r_k$(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  FloatSpringSpec.prototype.getVelocityFromNanos_da2xk2_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(_get_MillisToNanos__1332245331());
    this.spring_1._set_finalPosition__3446503782_75ngtz_k$(targetValue);
    var velocity = _Motion___get_velocity__impl__1032332177(this.spring_1.updateValues_23ym3r_k$(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  FloatSpringSpec.prototype.getEndVelocity_1g11o_k$ = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  FloatSpringSpec.prototype.getDurationNanos_ct8k6x_k$ = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.spring_1._get_stiffness__24126194_ed3w2_k$();
    var tmp1_dampingRatio = this.spring_1._get_dampingRatio__2557313602_sqjy66_k$();
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.visibilityThreshold_1;
    var tmp3_initialVelocity = initialVelocity / this.visibilityThreshold_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).times_2zfqpc_k$(_get_MillisToNanos__1332245331());
  };
  FloatSpringSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return this.vectorize_wiveyw_k$(converter);
  };
  FloatSpringSpec.$metadata$ = {
    simpleName: 'FloatSpringSpec',
    kind: 'class',
    interfaces: [FloatAnimationSpec]
  };
  function FloatTweenSpec_init_$Init$(duration, delay, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      duration = AnimationConstants_getInstance()._get_DefaultDurationMillis__38788022_n3d12_k$();
    if (!(($mask0 & 2) === 0))
      delay = 0;
    if (!(($mask0 & 4) === 0))
      easing = _get_FastOutSlowInEasing__2117326030();
    FloatTweenSpec.call($this, duration, delay, easing);
    return $this;
  }
  function FloatTweenSpec_init_$Create$(duration, delay, easing, $mask0, $marker) {
    return FloatTweenSpec_init_$Init$(duration, delay, easing, $mask0, $marker, Object.create(FloatTweenSpec.prototype));
  }
  function _get_easing__320399168($this) {
    return $this.easing_1;
  }
  function clampPlayTime($this, playTime) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_minus_0 = $this.delay_1;
      tmp$ret$0 = playTime.minus_llf5ei_k$(toLong(tmp0_minus_0));
      break $l$block;
    }
    return coerceIn(tmp$ret$0, new Long(0, 0), toLong($this.duration_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  FloatTweenSpec.prototype._get_duration__4153959607_2bya89_k$ = function () {
    return this.duration_1;
  };
  FloatTweenSpec.prototype._get_delay__3171773102_ikpy6q_k$ = function () {
    return this.delay_1;
  };
  FloatTweenSpec.prototype.getValueFromNanos_laqly_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(_get_MillisToNanos__1332245331());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.duration_1 === 0) {
      tmp = 1.0;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = this.duration_1;
        tmp$ret$0 = clampedPlayTime.toFloat_jhbgwv_k$() / tmp0_div_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    var rawFraction = tmp;
    var fraction = this.easing_1.transform_mzom4i_k$(coerceIn_0(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  FloatTweenSpec.prototype.getDurationNanos_ct8k6x_k$ = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.delay_1 + this.duration_1 | 0).times_2zfqpc_k$(_get_MillisToNanos__1332245331());
  };
  FloatTweenSpec.prototype.getVelocityFromNanos_da2xk2_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(_get_MillisToNanos__1332245331());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = clampedPlayTime.minus_llf5ei_k$(new Long(1, 0));
      break $l$block;
    }
    var startNum = this.getValueFromNanos_laqly_k$(tmp$ret$0.times_2zfqpc_k$(_get_MillisToNanos__1332245331()), initialValue, targetValue, initialVelocity);
    var endNum = this.getValueFromNanos_laqly_k$(clampedPlayTime.times_2zfqpc_k$(_get_MillisToNanos__1332245331()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  FloatTweenSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return this.vectorize_wiveyw_k$(converter);
  };
  FloatTweenSpec.$metadata$ = {
    simpleName: 'FloatTweenSpec',
    kind: 'class',
    interfaces: [FloatAnimationSpec]
  };
  function InternalAnimationApi() {
  }
  InternalAnimationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalAnimationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalAnimationApi ? other : THROW_CCE();
    return true;
  };
  InternalAnimationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalAnimationApi.prototype.toString = function () {
    return '@androidx.compose.animation.core.InternalAnimationApi()';
  };
  InternalAnimationApi.$metadata$ = {
    simpleName: 'InternalAnimationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.sqrt(stiffness);
      break $l$block;
    }
    var dampingCoefficient = tmp * tmp$ret$0;
    var roots = complexQuadraticFormula(1.0, dampingCoefficient, stiffness);
    return estimateDurationInternal(roots, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(roots, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.abs(initialPosition);
      break $l$block;
    }
    var p0 = tmp$ret$0;
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(roots, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(roots, p0, v0, delta) : estimateCriticallyDamped(roots, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(roots, p0, v0, delta) {
    var r1 = roots._get_first__3232921377_hkbbvj_k$()._get_real__807970925_dd1mct_k$();
    var r2 = roots._get_second__4255435031_njbah_k$()._get_real__807970925_dd1mct_k$();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_abs_0 = delta / c1;
        tmp$ret$0 = Math.abs(tmp0_abs_0);
        break $l$block;
      }
      var tmp1_ln_0 = tmp$ret$0;
      tmp$ret$1 = Math.log(tmp1_ln_0);
      break $l$block_0;
    }
    var t1 = tmp$ret$1 / r1;
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_abs_0 = delta / c2;
        tmp$ret$2 = Math.abs(tmp2_abs_0);
        break $l$block_1;
      }
      var tmp3_ln_0 = tmp$ret$2;
      tmp$ret$3 = Math.log(tmp3_ln_0);
      break $l$block_2;
    }
    var t2 = tmp$ret$3 / r2;
    var tmp;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = !isFinite(t1);
      break $l$block_3;
    }
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = !isFinite(t2);
        break $l$block_4;
      }
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        {
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = Math.max(t1, t2);
            break $l$block_5;
          }
          tmp = tmp$ret$6;
        }
      }
    }
    var tCurr = tmp;
    var tmp$ret$7;
    $l$block_6: {
      var tmp4_ln_0 = c1 * r1 / (-c2 * r2);
      tmp$ret$7 = Math.log(tmp4_ln_0);
      break $l$block_6;
    }
    var tInflection = tmp$ret$7 / (r2 - r1);
    var tmp_0;
    if (isNaN_0(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tmp$ret$8;
      $l$block_7: {
        var tmp5_ln_0 = -(c2 * r2 * r2) / (c1 * r1 * r1);
        tmp$ret$8 = Math.log(tmp5_ln_0);
        break $l$block_7;
      }
      var tConcavChange = tmp$ret$8 / (r1 - r2);
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateOverDamped$lambda(c1, r1, c2, r2, signedDelta);
    var fnPrime = estimateOverDamped$lambda_0(c1, r1, c2, r2);
    var tmp$ret$9;
    $l$block_8: {
      var tmp6_abs_0 = fn(tCurr);
      tmp$ret$9 = Math.abs(tmp6_abs_0);
      break $l$block_8;
    }
    if (tmp$ret$9 < 1.0E-4) {
      return tCurr;
    } else {
    }
    var tDelta = DoubleCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      Unit_getInstance();
      var tLast = tCurr;
      var tmp$ret$10;
      $l$block_9: {
        var tmp7_iterateNewtonsMethod_0 = tCurr;
        tmp$ret$10 = tmp7_iterateNewtonsMethod_0 - fn(tmp7_iterateNewtonsMethod_0) / fnPrime(tmp7_iterateNewtonsMethod_0);
        break $l$block_9;
      }
      tCurr = tmp$ret$10;
      var tmp$ret$11;
      $l$block_10: {
        var tmp8_abs_0 = tLast - tCurr;
        tmp$ret$11 = Math.abs(tmp8_abs_0);
        break $l$block_10;
      }
      tDelta = tmp$ret$11;
    }
    return tCurr;
  }
  function estimateUnderDamped(roots, p0, v0, delta) {
    var r = roots._get_first__3232921377_hkbbvj_k$()._get_real__807970925_dd1mct_k$();
    var c1 = p0;
    var c2 = (v0 - r * c1) / roots._get_first__3232921377_hkbbvj_k$()._get_imaginary__1672231000_rnlpp4_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_sqrt_0 = c1 * c1 + c2 * c2;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
      break $l$block;
    }
    var c = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_ln_0 = delta / c;
      tmp$ret$1 = Math.log(tmp1_ln_0);
      break $l$block_0;
    }
    return tmp$ret$1 / r;
  }
  function estimateCriticallyDamped(roots, p0, v0, delta) {
    var r = roots._get_first__3232921377_hkbbvj_k$()._get_real__807970925_dd1mct_k$();
    var c1 = p0;
    var c2 = v0 - r * c1;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_abs_0 = delta / c1;
        tmp$ret$0 = Math.abs(tmp0_abs_0);
        break $l$block;
      }
      var tmp1_ln_0 = tmp$ret$0;
      tmp$ret$1 = Math.log(tmp1_ln_0);
      break $l$block_0;
    }
    var t1 = tmp$ret$1 / r;
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_abs_0 = delta / c2;
        tmp$ret$2 = Math.abs(tmp2_abs_0);
        break $l$block_1;
      }
      var tmp3_ln_0 = tmp$ret$2;
      tmp$ret$3 = Math.log(tmp3_ln_0);
      break $l$block_2;
    }
    var t2 = estimateCriticallyDamped$t2Iterate(tmp$ret$3, r) / r;
    var tmp;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = !isFinite(t1);
      break $l$block_3;
    }
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = !isFinite(t2);
        break $l$block_4;
      }
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        {
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = Math.max(t1, t2);
            break $l$block_5;
          }
          tmp = tmp$ret$6;
        }
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    var tmp_0;
    if (isNaN_0(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateCriticallyDamped$lambda(c1, c2, r, signedDelta);
    var fnPrime = estimateCriticallyDamped$lambda_0(c2, r, c1);
    var tDelta = DoubleCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      Unit_getInstance();
      var tLast = tCurr;
      var tmp$ret$7;
      $l$block_6: {
        var tmp4_iterateNewtonsMethod_0 = tCurr;
        tmp$ret$7 = tmp4_iterateNewtonsMethod_0 - fn(tmp4_iterateNewtonsMethod_0) / fnPrime(tmp4_iterateNewtonsMethod_0);
        break $l$block_6;
      }
      tCurr = tmp$ret$7;
      var tmp$ret$8;
      $l$block_7: {
        var tmp5_abs_0 = tLast - tCurr;
        tmp$ret$8 = Math.abs(tmp5_abs_0);
        break $l$block_7;
      }
      tDelta = tmp$ret$8;
    }
    return tCurr;
  }
  function isNotFinite(_this__1828080292) {
    return !isFinite(_this__1828080292);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    return x - fn(x) / fnPrime(x);
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_exp_0 = r1 * tInflection;
      tmp$ret$0 = Math.exp(tmp0_exp_0);
      break $l$block;
    }
    var tmp = c1 * tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_exp_0 = r2 * tInflection;
      tmp$ret$1 = Math.exp(tmp1_exp_0);
      break $l$block_0;
    }
    return tmp + c2 * tmp$ret$1;
  }
  function estimateCriticallyDamped$t2Iterate(guess, r) {
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_abs_0 = t / r;
            tmp$ret$0 = Math.abs(tmp0_abs_0);
            break $l$block;
          }
          var tmp1_ln_0 = tmp$ret$0;
          tmp$ret$1 = Math.log(tmp1_ln_0);
          break $l$block_0;
        }
        t = guess - tmp$ret$1;
      }
       while (inductionVariable <= 5);
    return t;
  }
  function estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_exp_0 = r * tInflection;
      tmp$ret$0 = Math.exp(tmp0_exp_0);
      break $l$block;
    }
    var tmp = c1 * tmp$ret$0;
    var tmp_0 = c2 * tInflection;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_exp_0 = r * tInflection;
      tmp$ret$1 = Math.exp(tmp1_exp_0);
      break $l$block_0;
    }
    return tmp + tmp_0 * tmp$ret$1;
  }
  function estimateOverDamped$lambda($c1, $r1, $c2, $r2, $signedDelta) {
    return function (t) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_exp_0 = $r1 * t;
        tmp$ret$0 = Math.exp(tmp0_exp_0);
        break $l$block;
      }
      var tmp = $c1 * tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_exp_0 = $r2 * t;
        tmp$ret$1 = Math.exp(tmp1_exp_0);
        break $l$block_0;
      }
      return tmp + $c2 * tmp$ret$1 + $signedDelta;
    };
  }
  function estimateOverDamped$lambda_0($c1, $r1, $c2, $r2) {
    return function (t) {
      var tmp = $c1 * $r1;
      var tmp$ret$0;
      $l$block: {
        var tmp0_exp_0 = $r1 * t;
        tmp$ret$0 = Math.exp(tmp0_exp_0);
        break $l$block;
      }
      var tmp_0 = tmp * tmp$ret$0;
      var tmp_1 = $c2 * $r2;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_exp_0 = $r2 * t;
        tmp$ret$1 = Math.exp(tmp1_exp_0);
        break $l$block_0;
      }
      return tmp_0 + tmp_1 * tmp$ret$1;
    };
  }
  function estimateCriticallyDamped$lambda($c1, $c2, $r, $signedDelta) {
    return function (t) {
      var tmp = $c1 + $c2 * t;
      var tmp$ret$0;
      $l$block: {
        var tmp0_exp_0 = $r * t;
        tmp$ret$0 = Math.exp(tmp0_exp_0);
        break $l$block;
      }
      return tmp * tmp$ret$0 + $signedDelta;
    };
  }
  function estimateCriticallyDamped$lambda_0($c2, $r, $c1) {
    return function (t) {
      var tmp = $c2 * ($r * t + 1) + $c1 * $r;
      var tmp$ret$0;
      $l$block: {
        var tmp0_exp_0 = $r * t;
        tmp$ret$0 = Math.exp(tmp0_exp_0);
        break $l$block;
      }
      return tmp * tmp$ret$0;
    };
  }
  function _get_UNSET__2720322024() {
    return UNSET;
  }
  var UNSET;
  function _set_naturalFreq__752320996($this, _set____804775014) {
    $this.naturalFreq_1 = _set____804775014;
  }
  function _get_naturalFreq__2583763824($this) {
    return $this.naturalFreq_1;
  }
  function _set_initialized__3717616561($this, _set____804775014) {
    $this.initialized_1 = _set____804775014;
  }
  function _get_initialized__1254092093($this) {
    return $this.initialized_1;
  }
  function _set_gammaPlus__720672772($this, _set____804775014) {
    $this.gammaPlus_1 = _set____804775014;
  }
  function _get_gammaPlus__2492408976($this) {
    return $this.gammaPlus_1;
  }
  function _set_gammaMinus__777156526($this, _set____804775014) {
    $this.gammaMinus_1 = _set____804775014;
  }
  function _get_gammaMinus__4161371298($this) {
    return $this.gammaMinus_1;
  }
  function _set_dampedFreq__2687805408($this, _set____804775014) {
    $this.dampedFreq_1 = _set____804775014;
  }
  function _get_dampedFreq__1777052884($this) {
    return $this.dampedFreq_1;
  }
  function init($this) {
    if ($this.initialized_1) {
      return Unit_getInstance();
    }
    if ($this.finalPosition_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.dampingRatio_1 * $this.dampingRatio_1;
    if ($this.dampingRatio_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_1 = $this.naturalFreq_1;
      var tmp$ret$0;
      $l$block: {
        var tmp0_sqrt_0 = dampingRatioSquared - 1;
        tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
        break $l$block;
      }
      tmp.gammaPlus_1 = tmp_0 + tmp_1 * tmp$ret$0;
      var tmp_2 = $this;
      var tmp_3 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_4 = $this.naturalFreq_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_sqrt_0 = dampingRatioSquared - 1;
        tmp$ret$1 = Math.sqrt(tmp1_sqrt_0);
        break $l$block_0;
      }
      tmp_2.gammaMinus_1 = tmp_3 - tmp_4 * tmp$ret$1;
    } else if ($this.dampingRatio_1 >= 0 ? $this.dampingRatio_1 < 1 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.naturalFreq_1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp2_sqrt_0 = 1 - dampingRatioSquared;
        tmp$ret$2 = Math.sqrt(tmp2_sqrt_0);
        break $l$block_1;
      }
      tmp_5.dampedFreq_1 = tmp_6 * tmp$ret$2;
    }
    $this.initialized_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.finalPosition_1 = finalPosition;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_sqrt_0 = Spring_getInstance()._get_StiffnessVeryLow__3949833356_5phf1w_k$();
      tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
      break $l$block;
    }
    tmp.naturalFreq_1 = tmp$ret$0;
    this.initialized_1 = false;
    this.gammaPlus_1 = 0.0;
    this.gammaMinus_1 = 0.0;
    this.dampedFreq_1 = 0.0;
    this.dampingRatio_1 = Spring_getInstance()._get_DampingRatioNoBouncy__4171516389_21hzbv_k$();
  }
  SpringSimulation.prototype._set_finalPosition__3446503782_75ngtz_k$ = function (_set____804775014) {
    this.finalPosition_1 = _set____804775014;
  };
  SpringSimulation.prototype._get_finalPosition__2526470130_t8x15a_k$ = function () {
    return this.finalPosition_1;
  };
  SpringSimulation.prototype._set_stiffness__2547357286_b592q1_k$ = function (value) {
    if (this._get_stiffness__24126194_ed3w2_k$() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_sqrt_0 = value;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
      break $l$block;
    }
    tmp.naturalFreq_1 = tmp$ret$0;
    this.initialized_1 = false;
  };
  SpringSimulation.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    return this.naturalFreq_1 * this.naturalFreq_1;
  };
  SpringSimulation.prototype._set_dampingRatio__1617160782_ai2l81_k$ = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.dampingRatio_1 = value;
    this.initialized_1 = false;
  };
  SpringSimulation.prototype._get_dampingRatio__2557313602_sqjy66_k$ = function () {
    return this.dampingRatio_1;
  };
  SpringSimulation.prototype.getAcceleration_ut5r62_k$ = function (lastDisplacement, lastVelocity) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var k = this.naturalFreq_1 * this.naturalFreq_1;
    var c = 2.0 * this.naturalFreq_1 * this.dampingRatio_1;
    return -k * adjustedDisplacement - c * lastVelocity;
  };
  SpringSimulation.prototype.updateValues_23ym3r_k$ = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = timeElapsed.toDouble_ygsx0s_k$() / 1000.0;
      break $l$block;
    }
    var deltaT = tmp$ret$0;
    var displacement;
    var currentVelocity;
    if (this.dampingRatio_1 > 1) {
      var coeffA = adjustedDisplacement - (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var coeffB = (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_exp_0 = this.gammaMinus_1 * deltaT;
        tmp$ret$1 = Math.exp(tmp0_exp_0);
        break $l$block_0;
      }
      var tmp = coeffA * tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_exp_0 = this.gammaPlus_1 * deltaT;
        tmp$ret$2 = Math.exp(tmp1_exp_0);
        break $l$block_1;
      }
      displacement = tmp + coeffB * tmp$ret$2;
      var tmp_0 = coeffA * this.gammaMinus_1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp2_exp_0 = this.gammaMinus_1 * deltaT;
        tmp$ret$3 = Math.exp(tmp2_exp_0);
        break $l$block_2;
      }
      var tmp_1 = tmp_0 * tmp$ret$3;
      var tmp_2 = coeffB * this.gammaPlus_1;
      var tmp$ret$4;
      $l$block_3: {
        var tmp3_exp_0 = this.gammaPlus_1 * deltaT;
        tmp$ret$4 = Math.exp(tmp3_exp_0);
        break $l$block_3;
      }
      currentVelocity = tmp_1 + tmp_2 * tmp$ret$4;
    } else if (this.dampingRatio_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naturalFreq_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$5;
      $l$block_4: {
        var tmp4_exp_0 = -this.naturalFreq_1 * deltaT;
        tmp$ret$5 = Math.exp(tmp4_exp_0);
        break $l$block_4;
      }
      displacement = tmp_3 * tmp$ret$5;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$6;
      $l$block_5: {
        var tmp5_exp_0 = -this.naturalFreq_1 * deltaT;
        tmp$ret$6 = Math.exp(tmp5_exp_0);
        break $l$block_5;
      }
      var tmp_5 = tmp_4 * tmp$ret$6 * -this.naturalFreq_1;
      var tmp$ret$7;
      $l$block_6: {
        var tmp6_exp_0 = -this.naturalFreq_1 * deltaT;
        tmp$ret$7 = Math.exp(tmp6_exp_0);
        break $l$block_6;
      }
      currentVelocity = tmp_5 + coeffB_0 * tmp$ret$7;
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.dampedFreq_1 * (this.dampingRatio_1 * this.naturalFreq_1 * adjustedDisplacement + lastVelocity);
      var tmp$ret$8;
      $l$block_7: {
        var tmp7_exp_0 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
        tmp$ret$8 = Math.exp(tmp7_exp_0);
        break $l$block_7;
      }
      var tmp_6 = tmp$ret$8;
      var tmp$ret$9;
      $l$block_8: {
        var tmp8_cos_0 = this.dampedFreq_1 * deltaT;
        tmp$ret$9 = Math.cos(tmp8_cos_0);
        break $l$block_8;
      }
      var tmp_7 = cosCoeff * tmp$ret$9;
      var tmp$ret$10;
      $l$block_9: {
        var tmp9_sin_0 = this.dampedFreq_1 * deltaT;
        tmp$ret$10 = Math.sin(tmp9_sin_0);
        break $l$block_9;
      }
      displacement = tmp_6 * (tmp_7 + sinCoeff * tmp$ret$10);
      var tmp_8 = displacement * -this.naturalFreq_1 * this.dampingRatio_1;
      var tmp$ret$11;
      $l$block_10: {
        var tmp10_exp_0 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
        tmp$ret$11 = Math.exp(tmp10_exp_0);
        break $l$block_10;
      }
      var tmp_9 = tmp$ret$11;
      var tmp_10 = -this.dampedFreq_1 * cosCoeff;
      var tmp$ret$12;
      $l$block_11: {
        var tmp11_sin_0 = this.dampedFreq_1 * deltaT;
        tmp$ret$12 = Math.sin(tmp11_sin_0);
        break $l$block_11;
      }
      var tmp_11 = tmp_10 * tmp$ret$12;
      var tmp_12 = this.dampedFreq_1 * sinCoeff;
      var tmp$ret$13;
      $l$block_12: {
        var tmp12_cos_0 = this.dampedFreq_1 * deltaT;
        tmp$ret$13 = Math.cos(tmp12_cos_0);
        break $l$block_12;
      }
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * tmp$ret$13);
    }
    var newValue = displacement + this.finalPosition_1;
    var newVelocity = currentVelocity;
    return Motion_0(newValue, newVelocity);
  };
  SpringSimulation.$metadata$ = {
    simpleName: 'SpringSimulation',
    kind: 'class',
    interfaces: []
  };
  function _Motion___init__impl__2386681461(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__1630276151(this_0) {
    return this_0;
  }
  function _Motion___get_value__impl__3446897247(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat1_0 = _Motion___get_packedValue__impl__1630276151(this_0);
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
  function _Motion___get_velocity__impl__1032332177(this_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unpackFloat2_0 = _Motion___get_packedValue__impl__1630276151(this_0);
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
  function Motion__copy_impl_1693988866(this_0, value, velocity) {
    return Motion_0(value, velocity);
  }
  function Motion__copy$default_impl_2271807365(this_0, value, velocity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = _Motion___get_value__impl__3446897247(this_0);
    if (!(($mask0 & 2) === 0))
      velocity = _Motion___get_velocity__impl__1032332177(this_0);
    return Motion__copy_impl_1693988866(this_0, value, velocity);
  }
  function Motion__toString_impl_2320138859(this_0) {
    return 'Motion(packedValue=' + toString(this_0) + ')';
  }
  function Motion__hashCode_impl_1004723740(this_0) {
    return this_0.hashCode();
  }
  function Motion__equals_impl_1418759032(this_0, other) {
    if (!(other instanceof Motion))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Motion ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Motion(packedValue) {
    this.packedValue_1 = packedValue;
  }
  Motion.prototype.toString = function () {
    return Motion__toString_impl_2320138859(this.packedValue_1);
  };
  Motion.prototype.hashCode = function () {
    return Motion__hashCode_impl_1004723740(this.packedValue_1);
  };
  Motion.prototype.equals = function (other) {
    return Motion__equals_impl_1418759032(this.packedValue_1, other);
  };
  Motion.$metadata$ = {
    simpleName: 'Motion',
    kind: 'class',
    interfaces: []
  };
  function Motion_0(value, velocity) {
    var tmp$ret$0;
    $l$block: {
      var v1_1 = toLong(toBits(value));
      var v2_2 = toLong(toBits(velocity));
      tmp$ret$0 = v1_1.shl_po5ip6_k$(32).or_s401rn_k$(v2_2.and_jhajnj_k$(new Long(-1, 0)));
      break $l$block;
    }
    return _Motion___init__impl__2386681461(tmp$ret$0);
  }
  function _get_FloatToVector__463667735() {
    init_properties_VectorConverters_kt_3549493348();
    return FloatToVector;
  }
  var FloatToVector;
  function _get_IntToVector__1748939428() {
    init_properties_VectorConverters_kt_3549493348();
    return IntToVector;
  }
  var IntToVector;
  function _get_DpToVector__618924385() {
    init_properties_VectorConverters_kt_3549493348();
    return DpToVector;
  }
  var DpToVector;
  function _get_DpOffsetToVector__2777593166() {
    init_properties_VectorConverters_kt_3549493348();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function _get_SizeToVector__3946771020() {
    init_properties_VectorConverters_kt_3549493348();
    return SizeToVector;
  }
  var SizeToVector;
  function _get_OffsetToVector__2561665722() {
    init_properties_VectorConverters_kt_3549493348();
    return OffsetToVector;
  }
  var OffsetToVector;
  function _get_IntOffsetToVector__1388847185() {
    init_properties_VectorConverters_kt_3549493348();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function _get_IntSizeToVector__3427115427() {
    init_properties_VectorConverters_kt_3549493348();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function _get_RectToVector__3451316169() {
    init_properties_VectorConverters_kt_3549493348();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter() {
  }
  TwoWayConverter.$metadata$ = {
    simpleName: 'TwoWayConverter',
    kind: 'interface',
    interfaces: []
  };
  function TwoWayConverter_0(convertToVector, convertFromVector) {
    init_properties_VectorConverters_kt_3549493348();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.convertToVector_1 = convertToVector;
    this.convertFromVector_1 = convertFromVector;
  }
  TwoWayConverterImpl.prototype._get_convertToVector__3926537152_63cqio_k$ = function () {
    return this.convertToVector_1;
  };
  TwoWayConverterImpl.prototype._get_convertFromVector__946728881_fnnooh_k$ = function () {
    return this.convertFromVector_1;
  };
  TwoWayConverterImpl.$metadata$ = {
    simpleName: 'TwoWayConverterImpl',
    kind: 'class',
    interfaces: [TwoWayConverter]
  };
  function _get_VectorConverter__3310685236(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_IntToVector__1748939428();
  }
  function _get_VectorConverter__3310685236_0(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_IntSizeToVector__3427115427();
  }
  function _get_VectorConverter__3310685236_1(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_IntOffsetToVector__1388847185();
  }
  function _get_VectorConverter__3310685236_2(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_FloatToVector__463667735();
  }
  function _get_VectorConverter__3310685236_3(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_RectToVector__3451316169();
  }
  function _get_VectorConverter__3310685236_4(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_SizeToVector__3946771020();
  }
  function _get_VectorConverter__3310685236_5(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_OffsetToVector__2561665722();
  }
  function _get_VectorConverter__3310685236_6(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_DpToVector__618924385();
  }
  function _get_VectorConverter__3310685236_7(_this__1828080292) {
    init_properties_VectorConverters_kt_3549493348();
    return _get_DpOffsetToVector__2777593166();
  }
  function lerp(start, stop, fraction) {
    init_properties_VectorConverters_kt_3549493348();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda() {
    return function (it) {
      return new AnimationVector1D(it);
    };
  }
  function FloatToVector$lambda_0() {
    return function (it) {
      return it._get_value__3683422336_a43j40_k$();
    };
  }
  function IntToVector$lambda() {
    return function (it) {
      return new AnimationVector1D(it);
    };
  }
  function IntToVector$lambda_0() {
    return function (it) {
      return numberToInt(it._get_value__3683422336_a43j40_k$());
    };
  }
  function DpToVector$lambda() {
    return function (it) {
      return new AnimationVector1D(_Dp___get_value__impl__3303478217(it.value_1));
    };
  }
  function DpToVector$lambda_0() {
    return function (it) {
      return new Dp(_Dp___init__impl__1377471179(it._get_value__3683422336_a43j40_k$()));
    };
  }
  function DpOffsetToVector$lambda() {
    return function (it) {
      return new AnimationVector2D(_Dp___get_value__impl__3303478217(_DpOffset___get_x__impl__2462752079(it.packedValue_1)), _Dp___get_value__impl__3303478217(_DpOffset___get_y__impl__4205562414(it.packedValue_1)));
    };
  }
  function DpOffsetToVector$lambda_0() {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_dp__0_499320950 = it._get_v1__1413131888_ndcbjk_k$();
        tmp$ret$0 = _Dp___init__impl__1377471179(tmp0__get_dp__0_499320950);
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_dp__0_628403669 = it._get_v2__1413131919_ndcbkf_k$();
        tmp$ret$1 = _Dp___init__impl__1377471179(tmp1__get_dp__0_628403669);
        break $l$block_0;
      }
      return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
    };
  }
  function SizeToVector$lambda() {
    return function (it) {
      return new AnimationVector2D(_Size___get_width__impl__3977603903(it.packedValue_1), _Size___get_height__impl__604880786(it.packedValue_1));
    };
  }
  function SizeToVector$lambda_0() {
    return function (it) {
      return new Size(Size_0(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$()));
    };
  }
  function OffsetToVector$lambda() {
    return function (it) {
      return new AnimationVector2D(_Offset___get_x__impl__2048295803(it.packedValue_1), _Offset___get_y__impl__3791106138(it.packedValue_1));
    };
  }
  function OffsetToVector$lambda_0() {
    return function (it) {
      return new Offset(Offset_0(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$()));
    };
  }
  function IntOffsetToVector$lambda() {
    return function (it) {
      return new AnimationVector2D(_IntOffset___get_x__impl__2691365380(it.packedValue_1), _IntOffset___get_y__impl__139208419(it.packedValue_1));
    };
  }
  function IntOffsetToVector$lambda_0() {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_roundToInt_0 = it._get_v1__1413131888_ndcbjk_k$();
        tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_roundToInt_0 = it._get_v2__1413131919_ndcbkf_k$();
        tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
        break $l$block_0;
      }
      return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
    };
  }
  function IntSizeToVector$lambda() {
    return function (it) {
      return new AnimationVector2D(_IntSize___get_width__impl__3492176776(it.packedValue_1), _IntSize___get_height__impl__2736509033(it.packedValue_1));
    };
  }
  function IntSizeToVector$lambda_0() {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_roundToInt_0 = it._get_v1__1413131888_ndcbjk_k$();
        tmp$ret$0 = roundToInt(tmp0_roundToInt_0);
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_roundToInt_0 = it._get_v2__1413131919_ndcbkf_k$();
        tmp$ret$1 = roundToInt(tmp1_roundToInt_0);
        break $l$block_0;
      }
      return new IntSize(IntSize_0(tmp, tmp$ret$1));
    };
  }
  function RectToVector$lambda() {
    return function (it) {
      return new AnimationVector4D(it._get_left__802434852_d9qyp0_k$(), it._get_top__857417180_e6hfbw_k$(), it._get_right__3576132917_bvz45n_k$(), it._get_bottom__2354915904_w3218g_k$());
    };
  }
  function RectToVector$lambda_0() {
    return function (it) {
      return new Rect(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$(), it._get_v3__1413131950_ndcbla_k$(), it._get_v4__1413131981_ndcbm5_k$());
    };
  }
  var properties_initialized_VectorConverters_kt_752481160;
  function init_properties_VectorConverters_kt_3549493348() {
    if (!properties_initialized_VectorConverters_kt_752481160) {
      properties_initialized_VectorConverters_kt_752481160 = true;
      var tmp = FloatToVector$lambda();
      FloatToVector = TwoWayConverter_0(tmp, FloatToVector$lambda_0());
      var tmp_0 = IntToVector$lambda();
      IntToVector = TwoWayConverter_0(tmp_0, IntToVector$lambda_0());
      var tmp_1 = DpToVector$lambda();
      DpToVector = TwoWayConverter_0(tmp_1, DpToVector$lambda_0());
      var tmp_2 = DpOffsetToVector$lambda();
      DpOffsetToVector = TwoWayConverter_0(tmp_2, DpOffsetToVector$lambda_0());
      var tmp_3 = SizeToVector$lambda();
      SizeToVector = TwoWayConverter_0(tmp_3, SizeToVector$lambda_0());
      var tmp_4 = OffsetToVector$lambda();
      OffsetToVector = TwoWayConverter_0(tmp_4, OffsetToVector$lambda_0());
      var tmp_5 = IntOffsetToVector$lambda();
      IntOffsetToVector = TwoWayConverter_0(tmp_5, IntOffsetToVector$lambda_0());
      var tmp_6 = IntSizeToVector$lambda();
      IntSizeToVector = TwoWayConverter_0(tmp_6, IntSizeToVector$lambda_0());
      var tmp_7 = RectToVector$lambda();
      RectToVector = TwoWayConverter_0(tmp_7, RectToVector$lambda_0());
    }
  }
  function Spring() {
    Spring_instance = this;
    this.StiffnessHigh_1 = 10000.0;
    this.StiffnessMedium_1 = 1500.0;
    this.StiffnessMediumLow_1 = 400.0;
    this.StiffnessLow_1 = 200.0;
    this.StiffnessVeryLow_1 = 50.0;
    this.DampingRatioHighBouncy_1 = 0.2;
    this.DampingRatioMediumBouncy_1 = 0.5;
    this.DampingRatioLowBouncy_1 = 0.75;
    this.DampingRatioNoBouncy_1 = 1.0;
    this.DefaultDisplacementThreshold_1 = 0.01;
    this.$stable_1 = 0;
  }
  Spring.prototype._get_StiffnessHigh__2061917072_y3m1e8_k$ = function () {
    return this.StiffnessHigh_1;
  };
  Spring.prototype._get_StiffnessMedium__1547732765_plha8t_k$ = function () {
    return this.StiffnessMedium_1;
  };
  Spring.prototype._get_StiffnessMediumLow__2033407051_xmmyx7_k$ = function () {
    return this.StiffnessMediumLow_1;
  };
  Spring.prototype._get_StiffnessLow__2283396150_x9my8a_k$ = function () {
    return this.StiffnessLow_1;
  };
  Spring.prototype._get_StiffnessVeryLow__3949833356_5phf1w_k$ = function () {
    return this.StiffnessVeryLow_1;
  };
  Spring.prototype._get_DampingRatioHighBouncy__959490532_fv97ms_k$ = function () {
    return this.DampingRatioHighBouncy_1;
  };
  Spring.prototype._get_DampingRatioMediumBouncy__2713826225_q5dc9b_k$ = function () {
    return this.DampingRatioMediumBouncy_1;
  };
  Spring.prototype._get_DampingRatioLowBouncy__1587688938_q99omi_k$ = function () {
    return this.DampingRatioLowBouncy_1;
  };
  Spring.prototype._get_DampingRatioNoBouncy__4171516389_21hzbv_k$ = function () {
    return this.DampingRatioNoBouncy_1;
  };
  Spring.prototype._get_DefaultDisplacementThreshold__2622289208_rnvao8_k$ = function () {
    return this.DefaultDisplacementThreshold_1;
  };
  Spring.$metadata$ = {
    simpleName: 'Spring',
    kind: 'object',
    interfaces: []
  };
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, Object.create(VectorizedSpringSpec.prototype));
  }
  function VectorizedSpringSpec_init_$Init$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      Spring_getInstance();
      dampingRatio = 1.0;
    }
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      stiffness = 1500.0;
    }
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this);
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return VectorizedSpringSpec_init_$Init$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(VectorizedSpringSpec.prototype));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
    this.$stable_1 = 8;
  }
  VectorizedSpringSpec.prototype._get_dampingRatio__2557313602_sqjy66_k$ = function () {
    return this.dampingRatio_1;
  };
  VectorizedSpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    return this.stiffness_1;
  };
  VectorizedSpringSpec.prototype._get_isInfinite__365521645_61meb1_k$ = function () {
    return this.$$delegate_0__1._get_isInfinite__365521645_61meb1_k$();
  };
  VectorizedSpringSpec.prototype.getDurationNanos_62az16_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getDurationNanos_62az16_k$(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getEndVelocity_2fbr89_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getEndVelocity_2fbr89_k$(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getValueFromNanos_274kdl_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.$metadata$ = {
    simpleName: 'VectorizedSpringSpec',
    kind: 'class',
    interfaces: [VectorizedFiniteAnimationSpec]
  };
  function VectorizedFiniteAnimationSpec() {
  }
  VectorizedFiniteAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedFiniteAnimationSpec',
    kind: 'interface',
    interfaces: [VectorizedAnimationSpec]
  };
  function VectorizedAnimationSpec() {
  }
  VectorizedAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedAnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function Animations() {
  }
  Animations.$metadata$ = {
    simpleName: 'Animations',
    kind: 'interface',
    interfaces: []
  };
  function _get_anims__3094119311($this) {
    return $this.anims_1;
  }
  function _set_valueVector__829234289($this, _set____804775014) {
    $this.valueVector_1 = _set____804775014;
  }
  function _get_valueVector__2660677117($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__1911543447($this, _set____804775014) {
    $this.velocityVector_1 = _set____804775014;
  }
  function _get_velocityVector__3455271307($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__28953578($this, _set____804775014) {
    $this.endVelocityVector_1 = _set____804775014;
  }
  function _get_endVelocityVector__3010792566($this) {
    var tmp = $this.endVelocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, Object.create(VectorizedFloatAnimationSpec.prototype));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.$anim_1 = $anim;
  }
  VectorizedFloatAnimationSpec$1.prototype.get_fkrdnv_k$ = function (index) {
    return this.$anim_1;
  };
  VectorizedFloatAnimationSpec$1.$metadata$ = {
    kind: 'class',
    interfaces: [Animations]
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.anims_1 = anims;
    this.$stable_1 = 8;
  }
  VectorizedFloatAnimationSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__2660677117(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__2660677117(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getValueFromNanos_laqly_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__2660677117(this);
  };
  VectorizedFloatAnimationSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__3455271307(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__3455271307(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getVelocityFromNanos_da2xk2_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__3455271307(this);
  };
  VectorizedFloatAnimationSpec.prototype.getEndVelocity_2fbr89_k$ = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.endVelocityVector_1 == null)) {
      this.endVelocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__3010792566(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__3010792566(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getEndVelocity_1g11o_k$(initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__3010792566(this);
  };
  VectorizedFloatAnimationSpec.prototype.getDurationNanos_62az16_k$ = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    {
      var tmp0_forEach_0 = until(0, initialValue._get_size__809037418_ddoh9m_k$());
      var inductionVariable = tmp0_forEach_0._get_first__3232921377_hkbbvj_k$();
      var last = tmp0_forEach_0._get_last__802328181_d9oodx_k$();
      if (inductionVariable <= last)
        do {
          var element_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            var tmp$ret$0;
            $l$block: {
              var tmp0_maxOf_0_4 = maxDuration;
              var tmp1_maxOf_0_5 = this.anims_1.get_fkrdnv_k$(element_2).getDurationNanos_ct8k6x_k$(initialValue.get_fkrdnv_k$(element_2), targetValue.get_fkrdnv_k$(element_2), initialVelocity.get_fkrdnv_k$(element_2));
              tmp$ret$0 = tmp0_maxOf_0_4.compareTo_n4fqi2_k$(tmp1_maxOf_0_5) >= 0 ? tmp0_maxOf_0_4 : tmp1_maxOf_0_5;
              break $l$block;
            }
            maxDuration = tmp$ret$0;
          }
        }
         while (!(element_2 === last));
    }
    return maxDuration;
  };
  VectorizedFloatAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedFloatAnimationSpec',
    kind: 'class',
    interfaces: [VectorizedFiniteAnimationSpec]
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function VectorizedTweenSpec_init_$Init$(durationMillis, delayMillis, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      durationMillis = AnimationConstants_getInstance()._get_DefaultDurationMillis__38788022_n3d12_k$();
    if (!(($mask0 & 2) === 0))
      delayMillis = 0;
    if (!(($mask0 & 4) === 0))
      easing = _get_FastOutSlowInEasing__2117326030();
    VectorizedTweenSpec.call($this, durationMillis, delayMillis, easing);
    return $this;
  }
  function VectorizedTweenSpec_init_$Create$(durationMillis, delayMillis, easing, $mask0, $marker) {
    return VectorizedTweenSpec_init_$Init$(durationMillis, delayMillis, easing, $mask0, $marker, Object.create(VectorizedTweenSpec.prototype));
  }
  function _get_anim__792546906($this) {
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
    this.$stable_1 = 8;
  }
  VectorizedTweenSpec.prototype._get_durationMillis__2015407185_xbx64x_k$ = function () {
    return this.durationMillis_1;
  };
  VectorizedTweenSpec.prototype._get_delayMillis__455154952_7izjt4_k$ = function () {
    return this.delayMillis_1;
  };
  VectorizedTweenSpec.prototype._get_easing__320399168_5ar9kw_k$ = function () {
    return this.easing_1;
  };
  VectorizedTweenSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getValueFromNanos_274kdl_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.$metadata$ = {
    simpleName: 'VectorizedTweenSpec',
    kind: 'class',
    interfaces: [VectorizedDurationBasedAnimationSpec]
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  VectorizedDurationBasedAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedDurationBasedAnimationSpec',
    kind: 'interface',
    interfaces: [VectorizedFiniteAnimationSpec]
  };
  function _get_anims__3094119311_0($this) {
    return $this.anims_1;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = until(0, $visibilityThreshold._get_size__809037418_ddoh9m_k$());
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
        var inductionVariable = tmp0_map_0._get_first__3232921377_hkbbvj_k$();
        var last = tmp0_map_0._get_last__802328181_d9oodx_k$();
        if (inductionVariable <= last)
          do {
            var item_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.get_fkrdnv_k$(item_2_3));
              break $l$block;
            }
            tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
            Unit_getInstance();
          }
           while (!(item_2_3 === last));
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    tmp.anims_1 = tmp$ret$2;
  }
  createSpringAnimations$1.prototype.get_fkrdnv_k$ = function (index) {
    return this.anims_1.get_fkrdnv_k$(index);
  };
  createSpringAnimations$1.$metadata$ = {
    kind: 'class',
    interfaces: [Animations]
  };
  function _get_anim__792546906_0($this) {
    return $this.anim_1;
  }
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    var tmp = this;
    tmp.anim_1 = FloatSpringSpec_init_$Create$($dampingRatio, $stiffness, 0.0, 4, null);
  }
  createSpringAnimations$2.prototype.get_fkrdnv_k$ = function (index) {
    return this.anim_1;
  };
  createSpringAnimations$2.$metadata$ = {
    kind: 'class',
    interfaces: [Animations]
  };
  function _get_rectVisibilityThreshold__2288829116() {
    init_properties_VisibilityThresholds_kt_1861165760();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function _get_visibilityThresholdMap__1712607304() {
    init_properties_VisibilityThresholds_kt_1861165760();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function _get_VisibilityThreshold__3713836120(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_dp__0_499320950 = 0.1;
      tmp$ret$0 = _Dp___init__impl__1377471179(tmp0__get_dp__0_499320950);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_VisibilityThreshold__3713836120_0(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return Size_0(0.5, 0.5);
  }
  function _get_VisibilityThreshold__3713836120_1(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return Offset_0(0.5, 0.5);
  }
  function _get_VisibilityThreshold__3713836120_2(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return _get_rectVisibilityThreshold__2288829116();
  }
  function _get_VisibilityThreshold__3713836120_3(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return 1;
  }
  function _get_VisibilityThreshold__3713836120_4(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return IntOffset_0(1, 1);
  }
  function _get_VisibilityThreshold__3713836120_5(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return IntSize_0(1, 1);
  }
  function _get_PxVisibilityThreshold__2378547648() {
    return PxVisibilityThreshold;
  }
  var PxVisibilityThreshold;
  function _get_DpVisibilityThreshold__3669579332() {
    return DpVisibilityThreshold;
  }
  var DpVisibilityThreshold;
  var properties_initialized_VisibilityThresholds_kt_3074288612;
  function init_properties_VisibilityThresholds_kt_1861165760() {
    if (!properties_initialized_VisibilityThresholds_kt_3074288612) {
      properties_initialized_VisibilityThresholds_kt_3074288612 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(_get_VectorConverter__3310685236(IntCompanionObject_getInstance()), 1.0), to(_get_VectorConverter__3310685236_0(Companion_getInstance_4()), 1.0), to(_get_VectorConverter__3310685236_1(Companion_getInstance_3()), 1.0), to(_get_VectorConverter__3310685236_2(FloatCompanionObject_getInstance()), 0.01), to(_get_VectorConverter__3310685236_3(Companion_getInstance_2()), 0.5), to(_get_VectorConverter__3310685236_4(Companion_getInstance_0()), 0.5), to(_get_VectorConverter__3310685236_5(Companion_getInstance_1()), 0.5), to(_get_VectorConverter__3310685236_6(Companion_getInstance()), 0.1), to(_get_VectorConverter__3310685236_7(Companion_getInstance_5()), 0.1)]);
    }
  }
  //region block: post-declaration
  FloatSpringSpec.prototype.vectorize_wiveyw_k$ = vectorize;
  FloatTweenSpec.prototype.getEndVelocity_1g11o_k$ = getEndVelocity;
  FloatTweenSpec.prototype.vectorize_wiveyw_k$ = vectorize;
  VectorizedFloatAnimationSpec.prototype._get_isInfinite__365521645_61meb1_k$ = _get_isInfinite__365521645;
  VectorizedTweenSpec.prototype.getDurationNanos_62az16_k$ = getDurationNanos;
  VectorizedTweenSpec.prototype._get_isInfinite__365521645_61meb1_k$ = _get_isInfinite__365521645;
  VectorizedTweenSpec.prototype.getEndVelocity_2fbr89_k$ = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  CubicErrorBound = 0.001;
  UNSET = 3.4028235E38;
  PxVisibilityThreshold = 0.5;
  DpVisibilityThreshold = 0.1;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.AnimationVector2D = AnimationVector2D;
  _.$crossModule$.AnimationVector4D = AnimationVector4D;
  _.$crossModule$.CubicBezierEasing = CubicBezierEasing;
  _.$crossModule$._get_FastOutSlowInEasing__2117326030 = _get_FastOutSlowInEasing__2117326030;
  _.$crossModule$._get_LinearEasing__2697834107 = _get_LinearEasing__2697834107;
  _.$crossModule$.SpringSpec = SpringSpec;
  _.$crossModule$.TwoWayConverter = TwoWayConverter_0;
  _.$crossModule$._get_VisibilityThreshold__3713836120 = _get_VisibilityThreshold__3713836120_4;
  _.$crossModule$._get_VisibilityThreshold__3713836120_1 = _get_VisibilityThreshold__3713836120_5;
  _.$crossModule$.spring$default = spring$default;
  _.$crossModule$.tween$default = tween$default;
  _.$crossModule$.SpringSpec_init_$Create$ = SpringSpec_init_$Create$;
  _.$crossModule$.TweenSpec_init_$Create$ = TweenSpec_init_$Create$;
  _.$crossModule$.Spring_getInstance = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_animation_animation_core.js.map