(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_androidx_compose_ui_ui_geometry.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_animation_animation_core'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' is loaded prior to 'kotlin_androidx_compose_animation_animation_core'.");
    }
    root.kotlin_androidx_compose_animation_animation_core = factory(typeof kotlin_androidx_compose_animation_animation_core === 'undefined' ? {} : kotlin_androidx_compose_animation_animation_core, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_1;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var CancellationException = kotlin_kotlin.$crossModule$.CancellationException;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.mutableStateOf$default;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var KMutableProperty1 = kotlin_kotlin.$crossModule$.KMutableProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var SuspendFunction0 = kotlin_kotlin.$crossModule$.SuspendFunction0;
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
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var State = kotlin_androidx_compose_runtime_runtime.$crossModule$.State;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var to = kotlin_kotlin.$crossModule$.to;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var coerceIn_0 = kotlin_kotlin.$crossModule$.coerceIn_3;
  var numberToLong = kotlin_kotlin.$crossModule$.numberToLong;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$crossModule$.withFrameNanos;
  var Key_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.Key_getInstance;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var CancellationException_init_$Create$ = kotlin_kotlin.$crossModule$.CancellationException_init_$Create$;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineScope_1;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.Key_getInstance_1;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$crossModule$.AtomicReference;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.Mutex$default;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.coroutineScope;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite;
  var isNaN_0 = kotlin_kotlin.$crossModule$.isNaN_1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$crossModule$.DoubleCompanionObject_getInstance;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var Key_getInstance_1 = kotlin_androidx_compose_ui_ui.$crossModule$.Key_getInstance_1;
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
  var until = kotlin_kotlin.$crossModule$.until;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_2;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  Animatable$runAnimation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$runAnimation$slambda.prototype.constructor = Animatable$runAnimation$slambda;
  Animatable$snapTo$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$snapTo$slambda.prototype.constructor = Animatable$snapTo$slambda;
  Animatable$stop$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$stop$slambda.prototype.constructor = Animatable$stop$slambda;
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.compareTo_n4fqi2_k$(this._get_durationNanos__86316838_1fe2hy_k$()) >= 0;
  }
  AnimationEndReason.prototype = Object.create(Enum.prototype);
  AnimationEndReason.prototype.constructor = AnimationEndReason;
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
    unreachableDeclarationLog();
    return this.vectorize_wiveyw_k$(converter);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype = Object.create(CoroutineImpl.prototype);
  withInfiniteAnimationFrameNanos$slambda.prototype.constructor = withInfiniteAnimationFrameNanos$slambda;
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.constructor = $withInfiniteAnimationFrameNanosCOROUTINE$0;
  MutatorMutex$mutate$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutate$slambda.prototype.constructor = MutatorMutex$mutate$slambda;
  MutatorMutex$mutateWith$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutateWith$slambda.prototype.constructor = MutatorMutex$mutateWith$slambda;
  MutatePriority.prototype = Object.create(Enum.prototype);
  MutatePriority.prototype.constructor = MutatePriority;
  $animateCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $animateCOROUTINE$1.prototype.constructor = $animateCOROUTINE$1;
  $callWithFrameNanosCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $callWithFrameNanosCOROUTINE$2.prototype.constructor = $callWithFrameNanosCOROUTINE$2;
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_2nsq5r_k$(this.getDurationNanos_62az16_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function _get_isInfinite__365521645() {
    return false;
  }
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
    return numberToLong(this._get_delayMillis__455154952_7izjt4_k$() + this._get_durationMillis__2015407185_xbx64x_k$() | 0).times_2zfqpc_k$(_get_MillisToNanos__1332245331());
  }
  //endregion
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.internalState_1);
      var clamped = clampToBounds(this$0, $this$animate._get_value__3683422336_a43j40_k$());
      Unit_getInstance();
      var tmp;
      if (!equals(clamped, $this$animate._get_value__3683422336_a43j40_k$())) {
        this$0.internalState_1._set_value__1325260276_x73o94_k$(clamped);
        $endState._set_value__1325260276_x73o94_k$(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        Unit_getInstance();
        $this$animate.cancelAnimation_ickco7_k$();
        tmp = $clampingNeeded._v = true;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold);
    return $this;
  }
  function Animatable_init_$Create$(initialValue, typeConverter, visibilityThreshold, $mask0, $marker) {
    return Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, $mask0, $marker, Object.create(Animatable.prototype));
  }
  function _get_visibilityThreshold__3516362808($this) {
    unreachableDeclarationLog();
    return $this.visibilityThreshold_1;
  }
  function _set_isRunning__1251847984($this, _set____804775014) {
    var tmp0_setValue_0 = isRunning$factory();
    return $this.isRunning$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  }
  function _set_targetValue__3645303205($this, _set____804775014) {
    var tmp0_setValue_0 = targetValue$factory();
    return $this.targetValue$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  }
  function _set_lowerBound__1867338810($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.lowerBound_1 = _set____804775014;
  }
  function _set_upperBound__2445411611($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.upperBound_1 = _set____804775014;
  }
  function _get_mutatorMutex__1545925998($this) {
    unreachableDeclarationLog();
    return $this.mutatorMutex_1;
  }
  function _get_negativeInfinityBounds__4001509561($this) {
    unreachableDeclarationLog();
    return $this.negativeInfinityBounds_1;
  }
  function _get_positiveInfinityBounds__2555961973($this) {
    unreachableDeclarationLog();
    return $this.positiveInfinityBounds_1;
  }
  function _set_lowerBoundVector__817907255($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.lowerBoundVector_1 = _set____804775014;
  }
  function _get_lowerBoundVector__2576663595($this) {
    unreachableDeclarationLog();
    return $this.lowerBoundVector_1;
  }
  function _set_upperBoundVector__1934297688($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.upperBoundVector_1 = _set____804775014;
  }
  function _get_upperBoundVector__3693054028($this) {
    unreachableDeclarationLog();
    return $this.upperBoundVector_1;
  }
  function createVector(_this__1828080292, $this, value) {
    var newVector = $this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(_this__1828080292);
    var inductionVariable = 0;
    var last = newVector._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_8gccym_k$(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $cont) {
    var startTime = $this.internalState_1._get_lastFrameTimeNanos__1127274544_in5els_k$();
    return $this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $cont, 1, null);
  }
  function clampToBounds($this, value) {
    if (equals($this.lowerBoundVector_1, $this.negativeInfinityBounds_1) ? equals($this.upperBoundVector_1, $this.positiveInfinityBounds_1) : false) {
      return value;
    }
    var valueVector = $this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.get_fkrdnv_k$(i) < $this.lowerBoundVector_1.get_fkrdnv_k$(i) ? true : valueVector.get_fkrdnv_k$(i) > $this.upperBoundVector_1.get_fkrdnv_k$(i)) {
          clamped = true;
          valueVector.set_8gccym_k$(i, coerceIn(valueVector.get_fkrdnv_k$(i), $this.lowerBoundVector_1.get_fkrdnv_k$(i), $this.upperBoundVector_1.get_fkrdnv_k$(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = $this.internalState_1;
      {
      }
      {
        tmp0_apply_0._get_velocityVector__3455271307_dvxlkl_k$().reset_5tn5dq_k$();
        tmp0_apply_0._set_lastFrameTimeNanos__3179546428_f8irh1_k$(AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$());
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    Unit_getInstance();
    _set_isRunning__1251847984($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initialVelocity_1 = $initialVelocity;
    this.$animation_1 = $animation;
    this.$startTime_1 = $startTime;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$runAnimation$slambda.prototype.invoke_yp4dq1_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$runAnimation$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_yp4dq1_k$($cont);
  };
  Animatable$runAnimation$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this.this$0__1.internalState_1._set_velocityVector__1911543447_c1xkf7_k$(this.this$0__1.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(this.$initialVelocity_1));
            _set_targetValue__3645303205(this.this$0__1, this.$animation_1._get_targetValue__1181778737_jjlmb5_k$());
            _set_isRunning__1251847984(this.this$0__1, true);
            var tmp_0 = this;
            var tmp_1 = new Long(0, 0);
            var tmp_2 = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
            tmp_0.endState1__1 = copy$default_0(this.this$0__1.internalState_1, null, null, tmp_1, tmp_2, false, 23, null);
            this.clampingNeeded2__1 = {_v: false};
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = animate_0(this.endState1__1, this.$animation_1, this.$startTime_1, Animatable$runAnimation$slambda$lambda(this.this$0__1, this.endState1__1, this.$block_1, this.clampingNeeded2__1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.clampingNeeded2__1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.this$0__1);
            this.TRY_RESULT0__1 = new AnimationResult(this.endState1__1, endReason);
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_3 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_3 instanceof CancellationException) {
              var e = this._get_exception__1672948706_ro13he_k$();
              var tmp_4 = this;
              endAnimation(this.this$0__1);
              throw e;
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 3:
            throw this._get_exception__1672948706_ro13he_k$();
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 3) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  Animatable$runAnimation$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new Animatable$runAnimation$slambda(this.this$0__1, this.$initialVelocity_1, this.$animation_1, this.$startTime_1, this.$block_1, completion);
    return i;
  };
  Animatable$runAnimation$slambda.$metadata$ = {
    simpleName: 'Animatable$runAnimation$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($cont) {
      return i.invoke_yp4dq1_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetValue_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$snapTo$slambda.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$snapTo$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  Animatable$snapTo$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          endAnimation(this.this$0__1);
          var clampedValue = clampToBounds(this.this$0__1, this.$targetValue_1);
          this.this$0__1.internalState_1._set_value__1325260276_x73o94_k$(clampedValue);
          _set_targetValue__3645303205(this.this$0__1, clampedValue);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Animatable$snapTo$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new Animatable$snapTo$slambda(this.this$0__1, this.$targetValue_1, completion);
    return i;
  };
  Animatable$snapTo$slambda.$metadata$ = {
    simpleName: 'Animatable$snapTo$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$stop$slambda.prototype.invoke_pbb09x_k$ = function ($cont) {
    unreachableDeclarationLog();
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$stop$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    unreachableDeclarationLog();
    return this.invoke_pbb09x_k$($cont);
  };
  Animatable$stop$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          endAnimation(this.this$0__1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Animatable$stop$slambda.prototype.create_lvr374_k$ = function (completion) {
    unreachableDeclarationLog();
    var i = new Animatable$stop$slambda(this.this$0__1, completion);
    return i;
  };
  Animatable$stop$slambda.$metadata$ = {
    simpleName: 'Animatable$stop$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    unreachableDeclarationLog();
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold) {
    this.typeConverter_1 = typeConverter;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    var tmp_0 = new Long(0, 0);
    var tmp_1 = new Long(0, 0);
    tmp.internalState_1 = AnimationState_init_$Create$(this.typeConverter_1, initialValue, null, tmp_0, tmp_1, false, 60, null);
    var tmp_2 = this;
    tmp_2.isRunning$delegate_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_3 = this;
    tmp_3.targetValue$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.lowerBound_1 = null;
    this.upperBound_1 = null;
    this.mutatorMutex_1 = new MutatorMutex();
    var tmp_4 = this;
    tmp_4.defaultSpringSpec_1 = SpringSpec_init_$Create$(0.0, 0.0, this.visibilityThreshold_1, 3, null);
    this.negativeInfinityBounds_1 = createVector(initialValue, this, FloatCompanionObject_getInstance()._get_NEGATIVE_INFINITY__4282258079_7keht_k$());
    this.positiveInfinityBounds_1 = createVector(initialValue, this, FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$());
    this.lowerBoundVector_1 = this.negativeInfinityBounds_1;
    this.upperBoundVector_1 = this.positiveInfinityBounds_1;
    this.$stable_1 = 8;
  }
  Animatable.prototype._get_typeConverter__1078691339_hu83kb_k$ = function () {
    unreachableDeclarationLog();
    return this.typeConverter_1;
  };
  Animatable.prototype._get_internalState__974090109_g3y4ql_k$ = function () {
    unreachableDeclarationLog();
    return this.internalState_1;
  };
  Animatable.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.internalState_1._get_value__3683422336_a43j40_k$();
  };
  Animatable.prototype._get_velocityVector__3455271307_dvxlkl_k$ = function () {
    return this.internalState_1._get_velocityVector__3455271307_dvxlkl_k$();
  };
  Animatable.prototype._get_velocity__3219414670_hsctpu_k$ = function () {
    return this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this._get_velocityVector__3455271307_dvxlkl_k$());
  };
  Animatable.prototype._get_isRunning__3023584188_l0y5hg_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = isRunning$factory_0();
      tmp$ret$0 = this.isRunning$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Animatable.prototype._get_targetValue__1181778737_jjlmb5_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = targetValue$factory_0();
      tmp$ret$0 = this.targetValue$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Animatable.prototype._get_lowerBound__956586286_ftiypa_k$ = function () {
    unreachableDeclarationLog();
    return this.lowerBound_1;
  };
  Animatable.prototype._get_upperBound__1534659087_pdp2j3_k$ = function () {
    unreachableDeclarationLog();
    return this.upperBound_1;
  };
  Animatable.prototype._get_defaultSpringSpec__2919730152_mqs3rs_k$ = function () {
    unreachableDeclarationLog();
    return this.defaultSpringSpec_1;
  };
  Animatable.prototype.updateBounds_rt2r4d_k$ = function (lowerBound, upperBound) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = lowerBound;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.negativeInfinityBounds_1 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = upperBound;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(tmp2_safe_receiver);
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.positiveInfinityBounds_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_check_0 = lowerBoundVector.get_fkrdnv_k$(i) <= upperBoundVector.get_fkrdnv_k$(i);
          {
          }
          if (!tmp0_check_0) {
            var tmp$ret$4;
            $l$block_3: {
              tmp$ret$4 = 'Lower bound must be no greater than upper bound on *all* dimensions. The ' + ('provided lower bound: ' + lowerBoundVector + ' is greater than upper bound ') + ('' + upperBoundVector + ' on index ' + i);
              break $l$block_3;
            }
            var message_1 = tmp$ret$4;
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
        }
      }
       while (inductionVariable < last);
    this.lowerBoundVector_1 = lowerBoundVector;
    this.upperBoundVector_1 = upperBoundVector;
    this.upperBound_1 = upperBound;
    this.lowerBound_1 = lowerBound;
    if (!this._get_isRunning__3023584188_l0y5hg_k$()) {
      var clampedValue = clampToBounds(this, this._get_value__3683422336_a43j40_k$());
      if (!equals(clampedValue, this._get_value__3683422336_a43j40_k$())) {
        this.internalState_1._set_value__1325260276_x73o94_k$(clampedValue);
      }
    }
  };
  Animatable.prototype.updateBounds$default_tto15i_k$ = function (lowerBound, upperBound, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      lowerBound = this.lowerBound_1;
    if (!(($mask0 & 2) === 0))
      upperBound = this.upperBound_1;
    return this.updateBounds_rt2r4d_k$(lowerBound, upperBound);
  };
  Animatable.prototype.animateTo_h218fu_k$ = function (targetValue, animationSpec, initialVelocity, block, $cont) {
    var tmp0_initialValue = this._get_value__3683422336_a43j40_k$();
    var tmp1_typeConverter = this.typeConverter_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateTo$default_mbptcf_k$ = function (targetValue, animationSpec, initialVelocity, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      animationSpec = this.defaultSpringSpec_1;
    if (!(($mask0 & 4) === 0))
      initialVelocity = this._get_velocity__3219414670_hsctpu_k$();
    if (!(($mask0 & 8) === 0))
      block = null;
    return this.animateTo_h218fu_k$(targetValue, animationSpec, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateDecay_6mun9g_k$ = function (initialVelocity, animationSpec, block, $cont) {
    unreachableDeclarationLog();
    var tmp0_initialValue = this._get_value__3683422336_a43j40_k$();
    var tmp1_initialVelocityVector = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(initialVelocity);
    var tmp2_typeConverter = this.typeConverter_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateDecay$default_kskgzj_k$ = function (initialVelocity, animationSpec, block, $cont, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      block = null;
    return this.animateDecay_6mun9g_k$(initialVelocity, animationSpec, block, $cont);
  };
  Animatable.prototype.snapTo_fkfduh_k$ = function (targetValue, $cont) {
    return this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$snapTo$slambda_0(this, targetValue, null), $cont, 1, null);
  };
  Animatable.prototype.stop_srpkcx_k$ = function ($cont) {
    unreachableDeclarationLog();
    return this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$stop$slambda_0(this, null), $cont, 1, null);
  };
  Animatable.prototype.asState_c4y001_k$ = function () {
    unreachableDeclarationLog();
    return this.internalState_1;
  };
  Animatable.$metadata$ = {
    simpleName: 'Animatable',
    kind: 'class',
    interfaces: []
  };
  function AnimationResult(endState, endReason) {
    this.endState_1 = endState;
    this.endReason_1 = endReason;
    this.$stable_1 = 0;
  }
  AnimationResult.prototype._get_endState__3090543125_jx2zmz_k$ = function () {
    unreachableDeclarationLog();
    return this.endState_1;
  };
  AnimationResult.prototype._get_endReason__596786_cshe_k$ = function () {
    unreachableDeclarationLog();
    return this.endReason_1;
  };
  AnimationResult.prototype.toString = function () {
    return 'AnimationResult(endReason=' + this.endReason_1 + ', endState=' + this.endState_1 + ')';
  };
  AnimationResult.$metadata$ = {
    simpleName: 'AnimationResult',
    kind: 'class',
    interfaces: []
  };
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isRunning__3023584188_l0y5hg_k$();
    }, function (receiver, value) {
      return _set_isRunning__1251847984(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isRunning__3023584188_l0y5hg_k$();
    }, function (receiver, value) {
      return _set_isRunning__1251847984(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver._get_targetValue__1181778737_jjlmb5_k$();
    }, function (receiver, value) {
      return _set_targetValue__3645303205(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver._get_targetValue__1181778737_jjlmb5_k$();
    }, function (receiver, value) {
      return _set_targetValue__3645303205(receiver, value);
    });
  }
  function _get_defaultAnimation__3757116648() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return defaultAnimation;
  }
  var defaultAnimation;
  function _get_dpDefaultSpring__3151851983() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function _get_sizeDefaultSpring__3004623812() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function _get_offsetDefaultSpring__993300502() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function _get_rectDefaultSpring__2879249511() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function _get_intDefaultSpring__957947564() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function _get_intOffsetDefaultSpring__3566837023() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function _get_intSizeDefaultSpring__3141379853() {
    unreachableDeclarationLog();
    init_properties_AnimateAsState_kt_2632480572();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  var properties_initialized_AnimateAsState_kt_3585993568;
  function init_properties_AnimateAsState_kt_2632480572() {
    unreachableDeclarationLog();
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
  function _get_animationSpec__3361945426($this) {
    unreachableDeclarationLog();
    return $this.animationSpec_1;
  }
  function _get_initialValueVector__3695482203($this) {
    unreachableDeclarationLog();
    return $this.initialValueVector_1;
  }
  function _get_endVelocity__2980541881($this) {
    unreachableDeclarationLog();
    return $this.endVelocity_1;
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, Object.create(DecayAnimation.prototype));
  }
  function DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, $this) {
    unreachableDeclarationLog();
    DecayAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, typeConverter._get_convertToVector__3926537152_63cqio_k$()(initialVelocity));
    return $this;
  }
  function DecayAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, initialVelocity) {
    unreachableDeclarationLog();
    return DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, Object.create(DecayAnimation.prototype));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(this.initialValue_1);
    this.initialVelocityVector_1 = copy_1(initialVelocityVector);
    this.targetValue_1 = this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this.animationSpec_1.getTargetValue_ftaxp4_k$(this.initialValueVector_1, initialVelocityVector));
    this.isInfinite_1 = false;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_m6hrcz_k$(this.initialValueVector_1, initialVelocityVector);
    this.endVelocity_1 = copy_1(this.animationSpec_1.getVelocityFromNanos_hyp13a_k$(this.durationNanos_1, this.initialValueVector_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.endVelocity_1._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.endVelocity_1.set_8gccym_k$(i, coerceIn(this.endVelocity_1.get_fkrdnv_k$(i), -this.animationSpec_1._get_absVelocityThreshold__2019811855_xejksv_k$(), this.animationSpec_1._get_absVelocityThreshold__2019811855_xejksv_k$()));
      }
       while (inductionVariable < last);
    this.$stable_1 = 0;
  }
  DecayAnimation.prototype._get_typeConverter__1078691339_hu83kb_k$ = function () {
    return this.typeConverter_1;
  };
  DecayAnimation.prototype._get_initialValue__3950300766_5p7eea_k$ = function () {
    unreachableDeclarationLog();
    return this.initialValue_1;
  };
  DecayAnimation.prototype._get_initialVelocityVector__2058337645_y1hbhp_k$ = function () {
    unreachableDeclarationLog();
    return this.initialVelocityVector_1;
  };
  DecayAnimation.prototype._get_targetValue__1181778737_jjlmb5_k$ = function () {
    return this.targetValue_1;
  };
  DecayAnimation.prototype._get_durationNanos__86316838_1fe2hy_k$ = function () {
    return this.durationNanos_1;
  };
  DecayAnimation.prototype._get_isInfinite__365521645_61meb1_k$ = function () {
    return this.isInfinite_1;
  };
  DecayAnimation.prototype.getValueFromNanos_iwi8kk_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      return this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this.animationSpec_1.getValueFromNanos_g1htci_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1));
    } else {
      return this.targetValue_1;
    }
  };
  DecayAnimation.prototype.getVelocityVectorFromNanos_n1b66h_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      return this.animationSpec_1.getVelocityFromNanos_hyp13a_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1);
    } else {
      return this.endVelocity_1;
    }
  };
  DecayAnimation.$metadata$ = {
    simpleName: 'DecayAnimation',
    kind: 'class',
    interfaces: [Animation]
  };
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 16) === 0))
      initialVelocityVector = null;
    TargetBasedAnimation.call($this, animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker) {
    unreachableDeclarationLog();
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, Object.create(TargetBasedAnimation.prototype));
  }
  function TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    TargetBasedAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, Object.create(TargetBasedAnimation.prototype));
  }
  function TargetBasedAnimation_init_$Init$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 16) === 0))
      initialVelocityVector = null;
    TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker) {
    unreachableDeclarationLog();
    return TargetBasedAnimation_init_$Init$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, Object.create(TargetBasedAnimation.prototype));
  }
  function _get_initialValueVector__3695482203_0($this) {
    unreachableDeclarationLog();
    return $this.initialValueVector_1;
  }
  function _get_targetValueVector__1248600046($this) {
    unreachableDeclarationLog();
    return $this.targetValueVector_1;
  }
  function _get_initialVelocityVector__2058337645($this) {
    unreachableDeclarationLog();
    return $this.initialVelocityVector_1;
  }
  function _get_endVelocity__2980541881_0($this) {
    unreachableDeclarationLog();
    return $this.endVelocity_1;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.targetValue_1 = targetValue;
    this.initialValueVector_1 = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(this.initialValue_1);
    this.targetValueVector_1 = this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(this.targetValue_1);
    var tmp = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_1(tmp0_safe_receiver);
    tmp.initialVelocityVector_1 = tmp1_elvis_lhs == null ? newInstance(this.typeConverter_1._get_convertToVector__3926537152_63cqio_k$()(this.initialValue_1)) : tmp1_elvis_lhs;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_62az16_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    this.endVelocity_1 = this.animationSpec_1.getEndVelocity_2fbr89_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    this.$stable_1 = 0;
  }
  TargetBasedAnimation.prototype._get_animationSpec__3361945426_ffhwa6_k$ = function () {
    unreachableDeclarationLog();
    return this.animationSpec_1;
  };
  TargetBasedAnimation.prototype._get_typeConverter__1078691339_hu83kb_k$ = function () {
    return this.typeConverter_1;
  };
  TargetBasedAnimation.prototype._get_initialValue__3950300766_5p7eea_k$ = function () {
    unreachableDeclarationLog();
    return this.initialValue_1;
  };
  TargetBasedAnimation.prototype._get_targetValue__1181778737_jjlmb5_k$ = function () {
    return this.targetValue_1;
  };
  TargetBasedAnimation.prototype._get_isInfinite__365521645_61meb1_k$ = function () {
    return this.animationSpec_1._get_isInfinite__365521645_61meb1_k$();
  };
  TargetBasedAnimation.prototype.getValueFromNanos_iwi8kk_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      tmp = this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this.animationSpec_1.getValueFromNanos_274kdl_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1));
    } else {
      tmp = this.targetValue_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype._get_durationNanos__86316838_1fe2hy_k$ = function () {
    return this.durationNanos_1;
  };
  TargetBasedAnimation.prototype.getVelocityVectorFromNanos_n1b66h_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      tmp = this.animationSpec_1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    } else {
      tmp = this.endVelocity_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype.toString = function () {
    return 'TargetBasedAnimation: ' + this.initialValue_1 + ' -> ' + this.targetValue_1 + ',' + ('initial velocity: ' + this.initialVelocityVector_1 + ', duration: ' + toString(_get_durationMillis__2015407185(this)) + ' ms');
  };
  TargetBasedAnimation.$metadata$ = {
    simpleName: 'TargetBasedAnimation',
    kind: 'class',
    interfaces: [Animation]
  };
  function Animation() {
    unreachableDeclarationLog();
  }
  Animation.$metadata$ = {
    simpleName: 'Animation',
    kind: 'interface',
    interfaces: []
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, targetValue, typeConverter._get_convertToVector__3926537152_63cqio_k$()(initialVelocity));
  }
  function _get_durationMillis__2015407185(_this__1828080292) {
    return _this__1828080292._get_durationNanos__86316838_1fe2hy_k$().div_9s1fi3_k$(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  function values() {
    unreachableDeclarationLog();
    return [AnimationEndReason_BoundReached_getInstance(), AnimationEndReason_Finished_getInstance()];
  }
  function valueOf(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'BoundReached':
        return AnimationEndReason_BoundReached_getInstance();
      case 'Finished':
        return AnimationEndReason_Finished_getInstance();
      default:
        AnimationEndReason_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnimationEndReason.$metadata$ = {
    simpleName: 'AnimationEndReason',
    kind: 'class',
    interfaces: []
  };
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
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
    unreachableDeclarationLog();
    return this.dampingRatio_1;
  };
  SpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    unreachableDeclarationLog();
    return this.stiffness_1;
  };
  SpringSpec.prototype._get_visibilityThreshold__3516362808_cvk72g_k$ = function () {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
  }
  AnimationSpec.$metadata$ = {
    simpleName: 'AnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, $this) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, Object.create(TweenSpec.prototype));
  }
  function TweenSpec(durationMillis, delay, easing) {
    unreachableDeclarationLog();
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  TweenSpec.prototype._get_durationMillis__2015407185_xbx64x_k$ = function () {
    unreachableDeclarationLog();
    return this.durationMillis_1;
  };
  TweenSpec.prototype._get_delay__3171773102_ikpy6q_k$ = function () {
    unreachableDeclarationLog();
    return this.delay_1;
  };
  TweenSpec.prototype._get_easing__320399168_5ar9kw_k$ = function () {
    unreachableDeclarationLog();
    return this.easing_1;
  };
  TweenSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    unreachableDeclarationLog();
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  TweenSpec.prototype.equals = function (other) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  TweenSpec.$metadata$ = {
    simpleName: 'TweenSpec',
    kind: 'class',
    interfaces: [DurationBasedAnimationSpec]
  };
  function tween(durationMillis, delayMillis, easing) {
    unreachableDeclarationLog();
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function tween$default(durationMillis, delayMillis, easing, $mask0, $handler) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  function _get_onCancel__3368329650($this) {
    unreachableDeclarationLog();
    return $this.onCancel_1;
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.typeConverter_1 = typeConverter;
    this.targetValue_1 = targetValue;
    this.startTimeNanos_1 = startTimeNanos;
    this.onCancel_1 = onCancel;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.velocityVector_1 = copy_1(initialVelocityVector);
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    var tmp_0 = this;
    tmp_0.isRunning$delegate_1 = mutableStateOf$default(isRunning, null, 2, null);
    this.$stable_1 = 8;
  }
  AnimationScope.prototype._get_typeConverter__1078691339_hu83kb_k$ = function () {
    unreachableDeclarationLog();
    return this.typeConverter_1;
  };
  AnimationScope.prototype._get_targetValue__1181778737_jjlmb5_k$ = function () {
    unreachableDeclarationLog();
    return this.targetValue_1;
  };
  AnimationScope.prototype._get_startTimeNanos__1637698779_r31kgr_k$ = function () {
    return this.startTimeNanos_1;
  };
  AnimationScope.prototype._set_value__1325260276_x73o94_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = value$factory();
    return this.value$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  };
  AnimationScope.prototype._get_value__3683422336_a43j40_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = value$factory_0();
      tmp$ret$0 = this.value$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  AnimationScope.prototype._set_velocityVector__1911543447_c1xkf7_k$ = function (_set____804775014) {
    this.velocityVector_1 = _set____804775014;
  };
  AnimationScope.prototype._get_velocityVector__3455271307_dvxlkl_k$ = function () {
    return this.velocityVector_1;
  };
  AnimationScope.prototype._set_lastFrameTimeNanos__3179546428_f8irh1_k$ = function (_set____804775014) {
    this.lastFrameTimeNanos_1 = _set____804775014;
  };
  AnimationScope.prototype._get_lastFrameTimeNanos__1127274544_in5els_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  AnimationScope.prototype._set_finishedTimeNanos__1083769253_30ysu6_k$ = function (_set____804775014) {
    this.finishedTimeNanos_1 = _set____804775014;
  };
  AnimationScope.prototype._get_finishedTimeNanos__4065608241_3sjykv_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  AnimationScope.prototype._set_isRunning__1251847984_h1n2o7_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = isRunning$factory_1();
    return this.isRunning$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  };
  AnimationScope.prototype._get_isRunning__3023584188_l0y5hg_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = isRunning$factory_2();
      tmp$ret$0 = this.isRunning$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  AnimationScope.prototype._get_velocity__3219414670_hsctpu_k$ = function () {
    return this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this.velocityVector_1);
  };
  AnimationScope.prototype.cancelAnimation_ickco7_k$ = function () {
    this._set_isRunning__1251847984_h1n2o7_k$(false);
    this.onCancel_1();
  };
  AnimationScope.prototype.toAnimationState_sex3co_k$ = function () {
    unreachableDeclarationLog();
    return new AnimationState(this.typeConverter_1, this._get_value__3683422336_a43j40_k$(), this.velocityVector_1, this.lastFrameTimeNanos_1, this.finishedTimeNanos_1, this._get_isRunning__3023584188_l0y5hg_k$());
  };
  AnimationScope.$metadata$ = {
    simpleName: 'AnimationScope',
    kind: 'class',
    interfaces: []
  };
  function AnimationState_init_$Init$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      initialVelocityVector = null;
    if (!(($mask0 & 8) === 0))
      lastFrameTimeNanos = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    if (!(($mask0 & 16) === 0))
      finishedTimeNanos = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    if (!(($mask0 & 32) === 0))
      isRunning = false;
    AnimationState.call($this, typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
    return $this;
  }
  function AnimationState_init_$Create$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker) {
    return AnimationState_init_$Init$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker, Object.create(AnimationState.prototype));
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    this.typeConverter_1 = typeConverter;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    var tmp_0 = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_1(tmp0_safe_receiver);
    tmp_0.velocityVector_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.typeConverter_1, initialValue) : tmp1_elvis_lhs;
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = finishedTimeNanos;
    this.isRunning_1 = isRunning;
    this.$stable_1 = 0;
  }
  AnimationState.prototype._get_typeConverter__1078691339_hu83kb_k$ = function () {
    return this.typeConverter_1;
  };
  AnimationState.prototype._set_value__1325260276_x73o94_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = value$factory_1();
    return this.value$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  };
  AnimationState.prototype._get_value__3683422336_a43j40_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = value$factory_2();
      tmp$ret$0 = this.value$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  AnimationState.prototype._set_velocityVector__1911543447_c1xkf7_k$ = function (_set____804775014) {
    this.velocityVector_1 = _set____804775014;
  };
  AnimationState.prototype._get_velocityVector__3455271307_dvxlkl_k$ = function () {
    return this.velocityVector_1;
  };
  AnimationState.prototype._set_lastFrameTimeNanos__3179546428_f8irh1_k$ = function (_set____804775014) {
    this.lastFrameTimeNanos_1 = _set____804775014;
  };
  AnimationState.prototype._get_lastFrameTimeNanos__1127274544_in5els_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  AnimationState.prototype._set_finishedTimeNanos__1083769253_30ysu6_k$ = function (_set____804775014) {
    this.finishedTimeNanos_1 = _set____804775014;
  };
  AnimationState.prototype._get_finishedTimeNanos__4065608241_3sjykv_k$ = function () {
    unreachableDeclarationLog();
    return this.finishedTimeNanos_1;
  };
  AnimationState.prototype._set_isRunning__1251847984_h1n2o7_k$ = function (_set____804775014) {
    this.isRunning_1 = _set____804775014;
  };
  AnimationState.prototype._get_isRunning__3023584188_l0y5hg_k$ = function () {
    unreachableDeclarationLog();
    return this.isRunning_1;
  };
  AnimationState.prototype._get_velocity__3219414670_hsctpu_k$ = function () {
    return this.typeConverter_1._get_convertFromVector__946728881_fnnooh_k$()(this.velocityVector_1);
  };
  AnimationState.prototype.toString = function () {
    return 'AnimationState(' + ('value=' + this._get_value__3683422336_a43j40_k$() + ', ') + ('velocity=' + this._get_velocity__3219414670_hsctpu_k$() + ', ') + ('isRunning=' + this.isRunning_1 + ', ') + ('lastFrameTimeNanos=' + toString(this.lastFrameTimeNanos_1) + ', ') + ('finishedTimeNanos=' + toString(this.finishedTimeNanos_1)) + ')';
  };
  AnimationState.$metadata$ = {
    simpleName: 'AnimationState',
    kind: 'class',
    interfaces: [State]
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    return new AnimationState(_get_VectorConverter__3310685236_2(FloatCompanionObject_getInstance()), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState$default(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      initialVelocity = 0.0;
    if (!(($mask0 & 4) === 0))
      lastFrameTimeNanos = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    if (!(($mask0 & 8) === 0))
      finishedTimeNanos = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    if (!(($mask0 & 16) === 0))
      isRunning = false;
    return AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__1828080292, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    unreachableDeclarationLog();
    return new AnimationState(_this__1828080292.typeConverter_1, value, AnimationVector_0(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy$default(_this__1828080292, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      value = _this__1828080292._get_value__3683422336_a43j40_k$();
    if (!(($mask0 & 2) === 0))
      velocity = _this__1828080292.velocityVector_1._get_value__3683422336_a43j40_k$();
    if (!(($mask0 & 4) === 0))
      lastFrameTimeNanos = _this__1828080292.lastFrameTimeNanos_1;
    if (!(($mask0 & 8) === 0))
      finishedTimeNanos = _this__1828080292.finishedTimeNanos_1;
    if (!(($mask0 & 16) === 0))
      isRunning = _this__1828080292.isRunning_1;
    return copy(_this__1828080292, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__1828080292, value) {
    return newInstance(_this__1828080292._get_convertToVector__3926537152_63cqio_k$()(value));
  }
  function copy_0(_this__1828080292, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    return new AnimationState(_this__1828080292.typeConverter_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy$default_0(_this__1828080292, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = _this__1828080292._get_value__3683422336_a43j40_k$();
    if (!(($mask0 & 2) === 0))
      velocityVector = copy_1(_this__1828080292.velocityVector_1);
    if (!(($mask0 & 4) === 0))
      lastFrameTimeNanos = _this__1828080292.lastFrameTimeNanos_1;
    if (!(($mask0 & 8) === 0))
      finishedTimeNanos = _this__1828080292.finishedTimeNanos_1;
    if (!(($mask0 & 16) === 0))
      isRunning = _this__1828080292.isRunning_1;
    return copy_0(_this__1828080292, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return receiver._set_value__1325260276_x73o94_k$(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return receiver._set_value__1325260276_x73o94_k$(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isRunning__3023584188_l0y5hg_k$();
    }, function (receiver, value) {
      return receiver._set_isRunning__1251847984_h1n2o7_k$(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isRunning__3023584188_l0y5hg_k$();
    }, function (receiver, value) {
      return receiver._set_isRunning__1251847984_h1n2o7_k$(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return receiver._set_value__1325260276_x73o94_k$(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return receiver._set_value__1325260276_x73o94_k$(value);
    });
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    this.v1__1 = _set____804775014;
  };
  AnimationVector2D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    return this.v1__1;
  };
  AnimationVector2D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
    this.$stable_2 = 8;
  }
  AnimationVector3D.prototype._set_v1__3473241468_1adavz_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.v1__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    unreachableDeclarationLog();
    return this.v1__1;
  };
  AnimationVector3D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.v2__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v2__1413131919_ndcbkf_k$ = function () {
    unreachableDeclarationLog();
    return this.v2__1;
  };
  AnimationVector3D.prototype._set_v3__3473241530_abcf1f_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.v3__1 = _set____804775014;
  };
  AnimationVector3D.prototype._get_v3__1413131950_ndcbla_k$ = function () {
    unreachableDeclarationLog();
    return this.v3__1;
  };
  AnimationVector3D.prototype.reset_5tn5dq_k$ = function () {
    unreachableDeclarationLog();
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  AnimationVector3D.prototype.newVector_8o1gcd_k$ = function () {
    unreachableDeclarationLog();
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  AnimationVector3D.prototype.get_fkrdnv_k$ = function (index) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return this.size_1;
  };
  AnimationVector3D.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  AnimationVector3D.prototype.equals = function (other) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    this.v1__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v1__1413131888_ndcbjk_k$ = function () {
    return this.v1__1;
  };
  AnimationVector4D.prototype._set_v2__3473241499_4ihk2q_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.v2__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v2__1413131919_ndcbkf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector4D.prototype._set_v3__3473241530_abcf1f_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.v3__1 = _set____804775014;
  };
  AnimationVector4D.prototype._get_v3__1413131950_ndcbla_k$ = function () {
    return this.v3__1;
  };
  AnimationVector4D.prototype._set_v4__3473241561_g47a04_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
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
  function copyFrom(_this__1828080292, source) {
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__1828080292.set_8gccym_k$(i, source.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
  }
  function copy_1(_this__1828080292) {
    var newVector = newInstance(_this__1828080292);
    var inductionVariable = 0;
    var last = newVector._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_8gccym_k$(i, _this__1828080292.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function _set__real__682262120($this, _set____804775014) {
    unreachableDeclarationLog();
    $this._real_1 = _set____804775014;
  }
  function _get__real__3040424180($this) {
    unreachableDeclarationLog();
    return $this._real_1;
  }
  function _set__imaginary__3092768573($this, _set____804775014) {
    unreachableDeclarationLog();
    $this._imaginary_1 = _set____804775014;
  }
  function _get__imaginary__2182016049($this) {
    unreachableDeclarationLog();
    return $this._imaginary_1;
  }
  function component1($this) {
    unreachableDeclarationLog();
    return $this._real_1;
  }
  function component2($this) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other;
    return this;
  };
  ComplexDouble.prototype.plus_nuauig_k$ = function (other) {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other._get_real__807970925_dd1mct_k$();
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 + other._get_imaginary__1672231000_rnlpp4_k$();
    return this;
  };
  ComplexDouble.prototype.minus_80anzj_k$ = function (other) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * other;
    return this;
  };
  ComplexDouble.prototype.times_jx7hb0_k$ = function (other) {
    unreachableDeclarationLog();
    this._real_1 = this._get_real__807970925_dd1mct_k$() * other._get_real__807970925_dd1mct_k$() - this._get_imaginary__1672231000_rnlpp4_k$() * other._get_imaginary__1672231000_rnlpp4_k$();
    this._imaginary_1 = this._get_real__807970925_dd1mct_k$() * other._get_imaginary__1672231000_rnlpp4_k$() + other._get_real__807970925_dd1mct_k$() * this._get_imaginary__1672231000_rnlpp4_k$();
    return this;
  };
  ComplexDouble.prototype.unaryMinus_6uz0qp_k$ = function () {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * -1;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * -1;
    return this;
  };
  ComplexDouble.prototype.div_hn31ow_k$ = function (other) {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 / other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 / other;
    return this;
  };
  ComplexDouble.prototype.copy_fws33n_k$ = function (_real, _imaginary) {
    unreachableDeclarationLog();
    return new ComplexDouble(_real, _imaginary);
  };
  ComplexDouble.prototype.copy$default_l1hfaq_k$ = function (_real, _imaginary, $mask0, $handler) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  function DecayAnimationSpec() {
    unreachableDeclarationLog();
  }
  DecayAnimationSpec.$metadata$ = {
    simpleName: 'DecayAnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function generateDecayAnimationSpec(_this__1828080292) {
    return new DecayAnimationSpecImpl(_this__1828080292);
  }
  function _get_floatDecaySpec__460806546($this) {
    unreachableDeclarationLog();
    return $this.floatDecaySpec_1;
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
  }
  DecayAnimationSpecImpl.prototype.vectorize_drxx6b_k$ = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.floatDecaySpec_1);
  };
  DecayAnimationSpecImpl.$metadata$ = {
    simpleName: 'DecayAnimationSpecImpl',
    kind: 'class',
    interfaces: [DecayAnimationSpec]
  };
  function _set_valueVector__829234289($this, _set____804775014) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  function _set_targetVector__1441436067($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.targetVector_1 = _set____804775014;
  }
  function _get_targetVector__2381588887($this) {
    var tmp = $this.targetVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
    this.absVelocityThreshold_1 = this.floatDecaySpec_1._get_absVelocityThreshold__2019811855_xejksv_k$();
  }
  VectorizedFloatDecaySpec.prototype._get_floatDecaySpec__460806546_7mcolu_k$ = function () {
    unreachableDeclarationLog();
    return this.floatDecaySpec_1;
  };
  VectorizedFloatDecaySpec.prototype._get_absVelocityThreshold__2019811855_xejksv_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  VectorizedFloatDecaySpec.prototype.getValueFromNanos_g1htci_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__2660677117(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__2660677117(this).set_8gccym_k$(i, this.floatDecaySpec_1.getValueFromNanos_tm63l0_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__2660677117(this);
  };
  VectorizedFloatDecaySpec.prototype.getDurationNanos_m6hrcz_k$ = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__3455271307(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0_maxOf_0 = maxDuration;
          var tmp1_maxOf_0 = this.floatDecaySpec_1.getDurationNanos_kuw0r9_k$(initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i));
          tmp$ret$0 = tmp0_maxOf_0.compareTo_n4fqi2_k$(tmp1_maxOf_0) >= 0 ? tmp0_maxOf_0 : tmp1_maxOf_0;
          break $l$block;
        }
        maxDuration = tmp$ret$0;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  VectorizedFloatDecaySpec.prototype.getVelocityFromNanos_hyp13a_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__3455271307(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__3455271307(this).set_8gccym_k$(i, this.floatDecaySpec_1.getVelocityFromNanos_1qiryk_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__3455271307(this);
  };
  VectorizedFloatDecaySpec.prototype.getTargetValue_ftaxp4_k$ = function (initialValue, initialVelocity) {
    if (!!(this.targetVector_1 == null)) {
      this.targetVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__2381588887(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__2381588887(this).set_8gccym_k$(i, this.floatDecaySpec_1.getTargetValue_xs6ane_k$(initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__2381588887(this);
  };
  VectorizedFloatDecaySpec.$metadata$ = {
    simpleName: 'VectorizedFloatDecaySpec',
    kind: 'class',
    interfaces: [VectorizedDecayAnimationSpec]
  };
  function _get_FastOutSlowInEasing__2117326030() {
    unreachableDeclarationLog();
    init_properties_Easing_kt_1541679951();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function _get_LinearOutSlowInEasing__1273825495() {
    unreachableDeclarationLog();
    init_properties_Easing_kt_1541679951();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function _get_FastOutLinearInEasing__4233243626() {
    unreachableDeclarationLog();
    init_properties_Easing_kt_1541679951();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function _get_LinearEasing__2697834107() {
    unreachableDeclarationLog();
    init_properties_Easing_kt_1541679951();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
    unreachableDeclarationLog();
  }
  Easing.$metadata$ = {
    simpleName: 'Easing',
    kind: 'interface',
    interfaces: []
  };
  function _get_a__461226256($this) {
    unreachableDeclarationLog();
    return $this.a_1;
  }
  function _get_b__461226287($this) {
    unreachableDeclarationLog();
    return $this.b_1;
  }
  function _get_c__461226318($this) {
    unreachableDeclarationLog();
    return $this.c_1;
  }
  function _get_d__461226349($this) {
    unreachableDeclarationLog();
    return $this.d_1;
  }
  function evaluateCubic($this, a, b, m) {
    unreachableDeclarationLog();
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    unreachableDeclarationLog();
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
  }
  CubicBezierEasing.prototype.transform_mzom4i_k$ = function (fraction) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  CubicBezierEasing.$metadata$ = {
    simpleName: 'CubicBezierEasing',
    kind: 'class',
    interfaces: [Easing]
  };
  function _get_CubicErrorBound__3923770609() {
    unreachableDeclarationLog();
    return CubicErrorBound;
  }
  var CubicErrorBound;
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    unreachableDeclarationLog();
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0.prototype.transform_mzom4i_k$ = function (fraction) {
    unreachableDeclarationLog();
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0.$metadata$ = {
    simpleName: 'sam$androidx_compose_animation_core_Easing$0',
    kind: 'class',
    interfaces: [Easing]
  };
  function LinearEasing$lambda() {
    unreachableDeclarationLog();
    return function (fraction) {
      return fraction;
    };
  }
  var properties_initialized_Easing_kt_3664905075;
  function init_properties_Easing_kt_1541679951() {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  function _get_visibilityThreshold__3516362808_0($this) {
    unreachableDeclarationLog();
    return $this.visibilityThreshold_1;
  }
  function _get_spring__289062558($this) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return this.dampingRatio_1;
  };
  FloatSpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return FloatTweenSpec_init_$Init$(duration, delay, easing, $mask0, $marker, Object.create(FloatTweenSpec.prototype));
  }
  function _get_easing__320399168($this) {
    unreachableDeclarationLog();
    return $this.easing_1;
  }
  function clampPlayTime($this, playTime) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_minus_0 = $this.delay_1;
      tmp$ret$0 = playTime.minus_llf5ei_k$(toLong(tmp0_minus_0));
      break $l$block;
    }
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.duration_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    unreachableDeclarationLog();
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  FloatTweenSpec.prototype._get_duration__4153959607_2bya89_k$ = function () {
    unreachableDeclarationLog();
    return this.duration_1;
  };
  FloatTweenSpec.prototype._get_delay__3171773102_ikpy6q_k$ = function () {
    unreachableDeclarationLog();
    return this.delay_1;
  };
  FloatTweenSpec.prototype.getValueFromNanos_laqly_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
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
    var fraction = this.easing_1.transform_mzom4i_k$(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  FloatTweenSpec.prototype.getDurationNanos_ct8k6x_k$ = function (initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
    return numberToLong(this.delay_1 + this.duration_1 | 0).times_2zfqpc_k$(_get_MillisToNanos__1332245331());
  };
  FloatTweenSpec.prototype.getVelocityFromNanos_da2xk2_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return this.vectorize_wiveyw_k$(converter);
  };
  FloatTweenSpec.$metadata$ = {
    simpleName: 'FloatTweenSpec',
    kind: 'class',
    interfaces: [FloatAnimationSpec]
  };
  function FloatDecayAnimationSpec() {
    unreachableDeclarationLog();
  }
  FloatDecayAnimationSpec.$metadata$ = {
    simpleName: 'FloatDecayAnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function withInfiniteAnimationFrameNanos(onFrame, $cont) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.$onFrame_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  withInfiniteAnimationFrameNanos$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = withFrameNanos(this.$onFrame_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 2) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  withInfiniteAnimationFrameNanos$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new withInfiniteAnimationFrameNanos$slambda(this.$onFrame_1, completion);
    return i;
  };
  withInfiniteAnimationFrameNanos$slambda.$metadata$ = {
    simpleName: 'withInfiniteAnimationFrameNanos$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($cont) {
      return i.invoke_34if6s_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onFrame_1 = onFrame;
  }
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            var tmp_0 = this;
            tmp_0.policy0__1 = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance());
            if (this.policy0__1 == null) {
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = withFrameNanos(this.onFrame_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(1);
              suspendResult = this.policy0__1.onInfiniteOperation_fg6wm9_k$(withInfiniteAnimationFrameNanos$slambda_0(this.onFrame_1, null), this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 4) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $withInfiniteAnimationFrameNanosCOROUTINE$0.$metadata$ = {
    simpleName: '$withInfiniteAnimationFrameNanosCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function InternalAnimationApi() {
    unreachableDeclarationLog();
  }
  InternalAnimationApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof InternalAnimationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalAnimationApi ? other : THROW_CCE();
    return true;
  };
  InternalAnimationApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  InternalAnimationApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@androidx.compose.animation.core.InternalAnimationApi()';
  };
  InternalAnimationApi.$metadata$ = {
    simpleName: 'InternalAnimationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Mutator(priority, job) {
    this.priority_1 = priority;
    this.job_1 = job;
  }
  Mutator.prototype._get_priority__4007246503_4raus9_k$ = function () {
    unreachableDeclarationLog();
    return this.priority_1;
  };
  Mutator.prototype._get_job__857118836_e6b14k_k$ = function () {
    unreachableDeclarationLog();
    return this.job_1;
  };
  Mutator.prototype.canInterrupt_99yyky_k$ = function (other) {
    return this.priority_1.compareTo_6thzay_k$(other.priority_1) >= 0;
  };
  Mutator.prototype.cancel_2kogtl_k$ = function () {
    return this.job_1.cancel$default_bm1z3z_k$(null, 1, null);
  };
  Mutator.$metadata$ = {
    simpleName: 'Mutator',
    kind: 'class',
    interfaces: []
  };
  function _get_currentMutator__2224071618($this) {
    unreachableDeclarationLog();
    return $this.currentMutator_1;
  }
  function _get_mutex__3444453938($this) {
    unreachableDeclarationLog();
    return $this.mutex_1;
  }
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.currentMutator_1.get_26vq_k$();
      if (oldMutator == null ? true : mutator.canInterrupt_99yyky_k$(oldMutator)) {
        if ($this.currentMutator_1.compareAndSet_fjyh1e_k$(oldMutator, mutator)) {
          var tmp0_safe_receiver = oldMutator;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.cancel_2kogtl_k$();
            Unit_getInstance();
          }
          Unit_getInstance();
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutate$slambda.prototype.invoke_uet3jx_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  MutatorMutex$mutate$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_uet3jx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutate$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1._get_coroutineContext__2519429620_td3xn0_k$().get_1pi7hg_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_withLock_02__1 = this.this$0__1.mutex_1;
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this.tmp0_withLock_02__1.lock_25dizd_k$(null, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            this._set_state__1256591060_i39zdo_k$(6);
            suspendResult = this.$block_1(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.tmp$ret$05__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            var tmp_1 = this.tmp$ret$05__1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            Unit_getInstance();
            this.tmp$ret$24__1 = tmp_1;
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this._set_state__1256591060_i39zdo_k$(8);
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.tmp$ret$24__1;
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            this.tmp$ret$61__1 = tmp_3;
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 9:
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            if (false) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$61__1;
          case 11:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            var t = this._get_exception__1672948706_ro13he_k$();
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            Unit_getInstance();
            throw t;
          case 12:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            var t_0 = this._get_exception__1672948706_ro13he_k$();
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            throw t_0;
          case 13:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 13) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  MutatorMutex$mutate$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.$priority_1, this.this$0__1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutate$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  MutatorMutex$mutate$slambda.$metadata$ = {
    simpleName: 'MutatorMutex$mutate$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_uet3jx_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    unreachableDeclarationLog();
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutateWith$slambda.prototype.invoke_uet3jx_k$ = function ($this$coroutineScope, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  MutatorMutex$mutateWith$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_uet3jx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutateWith$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1._get_coroutineContext__2519429620_td3xn0_k$().get_1pi7hg_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_withLock_02__1 = this.this$0__1.mutex_1;
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this.tmp0_withLock_02__1.lock_25dizd_k$(null, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            this._set_state__1256591060_i39zdo_k$(6);
            suspendResult = this.$block_1(this.$receiver_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.tmp$ret$05__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            var tmp_1 = this.tmp$ret$05__1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            Unit_getInstance();
            this.tmp$ret$24__1 = tmp_1;
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this._set_state__1256591060_i39zdo_k$(8);
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.tmp$ret$24__1;
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            this.tmp$ret$61__1 = tmp_3;
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 9:
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            if (false) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$61__1;
          case 11:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            var t = this._get_exception__1672948706_ro13he_k$();
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            Unit_getInstance();
            throw t;
          case 12:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            var t_0 = this._get_exception__1672948706_ro13he_k$();
            this.tmp0_withLock_02__1.unlock_uksyr8_k$(null);
            throw t_0;
          case 13:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 13) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  MutatorMutex$mutateWith$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    unreachableDeclarationLog();
    var i = new MutatorMutex$mutateWith$slambda(this.$priority_1, this.this$0__1, this.$block_1, this.$receiver_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutateWith$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  MutatorMutex$mutateWith$slambda.$metadata$ = {
    simpleName: 'MutatorMutex$mutateWith$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    unreachableDeclarationLog();
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_uet3jx_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.currentMutator_1 = new AtomicReference(null);
    var tmp = this;
    tmp.mutex_1 = Mutex$default(false, 1, null);
  }
  MutatorMutex.prototype.mutate_hvtxk4_k$ = function (priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $cont);
  };
  MutatorMutex.prototype.mutate$default_1b3qou_k$ = function (priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutate_hvtxk4_k$(priority, block, $cont);
  };
  MutatorMutex.prototype.mutateWith_yvefop_k$ = function (receiver, priority, block, $cont) {
    unreachableDeclarationLog();
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $cont);
  };
  MutatorMutex.prototype.mutateWith$default_6yzu9p_k$ = function (receiver, priority, block, $cont, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutateWith_yvefop_k$(receiver, priority, block, $cont);
  };
  MutatorMutex.$metadata$ = {
    simpleName: 'MutatorMutex',
    kind: 'class',
    interfaces: []
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values_0() {
    unreachableDeclarationLog();
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf_0(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'Default':
        return MutatePriority_Default_getInstance();
      case 'UserInput':
        return MutatePriority_UserInput_getInstance();
      case 'PreventUserInput':
        return MutatePriority_PreventUserInput_getInstance();
      default:
        MutatePriority_initEntries();
        THROW_ISE();
        break;
    }
  }
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  MutatePriority.$metadata$ = {
    simpleName: 'MutatePriority',
    kind: 'class',
    interfaces: []
  };
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function MutatePriority_UserInput_getInstance() {
    unreachableDeclarationLog();
    MutatePriority_initEntries();
    return MutatePriority_UserInput_instance;
  }
  function MutatePriority_PreventUserInput_getInstance() {
    unreachableDeclarationLog();
    MutatePriority_initEntries();
    return MutatePriority_PreventUserInput_instance;
  }
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
    unreachableDeclarationLog();
    return !isFinite(_this__1828080292);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return UNSET;
  }
  var UNSET;
  function _set_naturalFreq__752320996($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.naturalFreq_1 = _set____804775014;
  }
  function _get_naturalFreq__2583763824($this) {
    unreachableDeclarationLog();
    return $this.naturalFreq_1;
  }
  function _set_initialized__3717616561($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.initialized_1 = _set____804775014;
  }
  function _get_initialized__1254092093($this) {
    unreachableDeclarationLog();
    return $this.initialized_1;
  }
  function _set_gammaPlus__720672772($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.gammaPlus_1 = _set____804775014;
  }
  function _get_gammaPlus__2492408976($this) {
    unreachableDeclarationLog();
    return $this.gammaPlus_1;
  }
  function _set_gammaMinus__777156526($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.gammaMinus_1 = _set____804775014;
  }
  function _get_gammaMinus__4161371298($this) {
    unreachableDeclarationLog();
    return $this.gammaMinus_1;
  }
  function _set_dampedFreq__2687805408($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.dampedFreq_1 = _set____804775014;
  }
  function _get_dampedFreq__1777052884($this) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return Motion_0(value, velocity);
  }
  function Motion__copy$default_impl_2271807365(this_0, value, velocity, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      value = _Motion___get_value__impl__3446897247(this_0);
    if (!(($mask0 & 2) === 0))
      velocity = _Motion___get_velocity__impl__1032332177(this_0);
    return Motion__copy_impl_1693988866(this_0, value, velocity);
  }
  function Motion__toString_impl_2320138859(this_0) {
    unreachableDeclarationLog();
    return 'Motion(packedValue=' + toString(this_0) + ')';
  }
  function Motion__hashCode_impl_1004723740(this_0) {
    unreachableDeclarationLog();
    return this_0.hashCode();
  }
  function Motion__equals_impl_1418759032(this_0, other) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    this.packedValue_1 = packedValue;
  }
  Motion.prototype.toString = function () {
    unreachableDeclarationLog();
    return Motion__toString_impl_2320138859(this.packedValue_1);
  };
  Motion.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return Motion__hashCode_impl_1004723740(this.packedValue_1);
  };
  Motion.prototype.equals = function (other) {
    unreachableDeclarationLog();
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
  function animateDecay(_this__1828080292, animationSpec, sequentialAnimation, block, $cont) {
    var tmp0_initialValue = _this__1828080292._get_value__3683422336_a43j40_k$();
    var tmp1_initialVelocityVector = _this__1828080292._get_velocityVector__3455271307_dvxlkl_k$();
    var tmp2_typeConverter = _this__1828080292._get_typeConverter__1078691339_hu83kb_k$();
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate_0(_this__1828080292, anim, sequentialAnimation ? _this__1828080292._get_lastFrameTimeNanos__1127274544_in5els_k$() : AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$(), block, $cont);
  }
  function animateDecay$default(_this__1828080292, animationSpec, sequentialAnimation, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      sequentialAnimation = false;
    if (!(($mask0 & 4) === 0)) {
      block = animateDecay$lambda();
    }
    return animateDecay(_this__1828080292, animationSpec, sequentialAnimation, block, $cont);
  }
  function animateTo(_this__1828080292, targetValue, animationSpec, sequentialAnimation, block, $cont) {
    unreachableDeclarationLog();
    var tmp0_initialValue = _this__1828080292._get_value__3683422336_a43j40_k$();
    var tmp1_typeConverter = _this__1828080292._get_typeConverter__1078691339_hu83kb_k$();
    var tmp2_initialVelocityVector = _this__1828080292._get_velocityVector__3455271307_dvxlkl_k$();
    var anim = TargetBasedAnimation_init_$Create$_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate_0(_this__1828080292, anim, sequentialAnimation ? _this__1828080292._get_lastFrameTimeNanos__1127274544_in5els_k$() : AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$(), block, $cont);
  }
  function animateTo$default(_this__1828080292, targetValue, animationSpec, sequentialAnimation, block, $cont, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0)) {
      animationSpec = spring$default(0.0, 0.0, null, 7, null);
    }
    if (!(($mask0 & 4) === 0))
      sequentialAnimation = false;
    if (!(($mask0 & 8) === 0)) {
      block = animateTo$lambda();
    }
    return animateTo(_this__1828080292, targetValue, animationSpec, sequentialAnimation, block, $cont);
  }
  function animate(initialValue, targetValue, initialVelocity, animationSpec, block, $cont) {
    return animate_1(_get_VectorConverter__3310685236_2(FloatCompanionObject_getInstance()), initialValue, targetValue, initialVelocity, animationSpec, block, $cont);
  }
  function animate$default(initialValue, targetValue, initialVelocity, animationSpec, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      initialVelocity = 0.0;
    if (!(($mask0 & 8) === 0)) {
      animationSpec = spring$default(0.0, 0.0, null, 7, null);
    }
    return animate(initialValue, targetValue, initialVelocity, animationSpec, block, $cont);
  }
  function animate_0(_this__1828080292, animation, startTimeNanos, block, $cont) {
    var tmp = new $animateCOROUTINE$1(_this__1828080292, animation, startTimeNanos, block, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function animate$default_0(_this__1828080292, animation, startTimeNanos, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startTimeNanos = AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$();
    if (!(($mask0 & 4) === 0)) {
      block = animate$lambda();
    }
    return animate_0(_this__1828080292, animation, startTimeNanos, block, $cont);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $cont) {
    var tmp0_safe_receiver = initialVelocity;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = typeConverter._get_convertToVector__3926537152_63cqio_k$()(tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter._get_convertToVector__3926537152_63cqio_k$()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new Long(0, 0);
    var tmp_1 = new Long(0, 0);
    var tmp_2 = AnimationState_init_$Create$(typeConverter, initialValue, initialVelocityVector, tmp_0, tmp_1, false, 56, null);
    var tmp_3 = new Long(0, 0);
    return animate$default_0(tmp_2, anim, tmp_3, animate$lambda_3(block, typeConverter), $cont, 2, null);
  }
  function animate$default_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $cont, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 8) === 0))
      initialVelocity = null;
    if (!(($mask0 & 16) === 0)) {
      animationSpec = spring$default(0.0, 0.0, null, 7, null);
    }
    return animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $cont);
  }
  function _get_durationScale__230919035(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292.get_1pi7hg_k$(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_scaleFactor__2793689464_ottle0_k$();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    {
      var tmp0_check_0 = scale >= 0.0;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString(message_2_1));
        }
      }
    }
    return scale;
  }
  function callWithFrameNanos(_this__1828080292, onFrame, $cont) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__1828080292, onFrame, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doAnimationFrameWithScale(_this__1828080292, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim._get_durationNanos__86316838_1fe2hy_k$();
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = frameTimeNanos.minus_llf5ei_k$(_this__1828080292._get_startTimeNanos__1637698779_r31kgr_k$());
        tmp$ret$0 = tmp0_div_0.toFloat_jhbgwv_k$() / durationScale;
        break $l$block;
      }
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__1828080292, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__1828080292, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__1828080292._set_lastFrameTimeNanos__3179546428_f8irh1_k$(frameTimeNanos);
    _this__1828080292._set_value__1325260276_x73o94_k$(anim.getValueFromNanos_iwi8kk_k$(playTimeNanos));
    _this__1828080292._set_velocityVector__1911543447_c1xkf7_k$(anim.getVelocityVectorFromNanos_n1b66h_k$(playTimeNanos));
    var isLastFrame = anim.isFinishedFromNanos_uhkxvh_k$(playTimeNanos);
    if (isLastFrame) {
      _this__1828080292._set_finishedTimeNanos__1083769253_30ysu6_k$(_this__1828080292._get_lastFrameTimeNanos__1127274544_in5els_k$());
      _this__1828080292._set_isRunning__1251847984_h1n2o7_k$(false);
    }
    updateState(_this__1828080292, state);
    block(_this__1828080292);
  }
  function updateState(_this__1828080292, state) {
    state._set_value__1325260276_x73o94_k$(_this__1828080292._get_value__3683422336_a43j40_k$());
    copyFrom(state._get_velocityVector__3455271307_dvxlkl_k$(), _this__1828080292._get_velocityVector__3455271307_dvxlkl_k$());
    state._set_finishedTimeNanos__1083769253_30ysu6_k$(_this__1828080292._get_finishedTimeNanos__4065608241_3sjykv_k$());
    state._set_lastFrameTimeNanos__3179546428_f8irh1_k$(_this__1828080292._get_lastFrameTimeNanos__1127274544_in5els_k$());
    state._set_isRunning__1251847984_h1n2o7_k$(_this__1828080292._get_isRunning__3023584188_l0y5hg_k$());
  }
  function animateDecay$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function animateTo$lambda() {
    unreachableDeclarationLog();
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function animate$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate._set_isRunning__1251847984_h1n2o7_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp = $animation._get_typeConverter__1078691339_hu83kb_k$();
        var tmp_0 = $animation._get_targetValue__1181778737_jjlmb5_k$();
        var tmp0_apply_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
        {
        }
        {
          doAnimationFrameWithScale(tmp0_apply_0, it, $durationScale, $animation, $this_animate, $block);
        }
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      $lateInitScope._v = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate._set_isRunning__1251847984_h1n2o7_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate._get_value__3683422336_a43j40_k$(), $typeConverter._get_convertFromVector__946728881_fnnooh_k$()($this$animate._get_velocityVector__3455271307_dvxlkl_k$()));
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = _get_AnimationDebugDurationScale__855657834();
        tmp$ret$0 = it.div_9s1fi3_k$(toLong(tmp0_div_0));
        break $l$block;
      }
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$1(_this__1828080292, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.animation_1 = animation;
    this.startTimeNanos_1 = startTimeNanos;
    this.block_1 = block;
  }
  $animateCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            this.initialValue0__1 = this.animation_1.getValueFromNanos_iwi8kk_k$(new Long(0, 0));
            this.initialVelocityVector1__1 = this.animation_1.getVelocityVectorFromNanos_n1b66h_k$(new Long(0, 0));
            this.lateInitScope2__1 = {_v: null};
            this._set_exceptionState__118868437_8fc1n_k$(6);
            if (this.startTimeNanos_1.equals(AnimationConstants_getInstance()._get_UnspecifiedTime__3898741261_6jwhyr_k$())) {
              var tmp_0 = this;
              tmp_0.durationScale3__1 = _get_durationScale__230919035(this._get_context__1558698818_ps0bpe_k$());
              this._set_state__1256591060_i39zdo_k$(1);
              suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_0(this.lateInitScope2__1, this.initialValue0__1, this.animation_1, this.initialVelocityVector1__1, this.durationScale3__1, this._this__1828080292__1, this.block_1), this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.animation_1._get_typeConverter__1078691339_hu83kb_k$();
              var tmp_2 = this.animation_1._get_targetValue__1181778737_jjlmb5_k$();
              var tmp0_apply_0 = new AnimationScope(this.initialValue0__1, tmp_1, this.initialVelocityVector1__1, this.startTimeNanos_1, tmp_2, this.startTimeNanos_1, true, animate$lambda_1(this._this__1828080292__1));
              doAnimationFrameWithScale(tmp0_apply_0, this.startTimeNanos_1, _get_durationScale__230919035(this._get_context__1558698818_ps0bpe_k$()), this.animation_1, this._this__1828080292__1, this.block_1);
              this.lateInitScope2__1._v = tmp0_apply_0;
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            }

            break;
          case 1:
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            if (!ensureNotNull(this.lateInitScope2__1._v)._get_isRunning__3023584188_l0y5hg_k$()) {
              this._set_state__1256591060_i39zdo_k$(5);
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.durationScale4__1 = _get_durationScale__230919035(this._get_context__1558698818_ps0bpe_k$());
            this._set_state__1256591060_i39zdo_k$(4);
            suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_2(this.lateInitScope2__1, this.durationScale4__1, this.animation_1, this._this__1828080292__1, this.block_1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 5:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            this._set_state__1256591060_i39zdo_k$(8);
            continue $sm;
          case 6:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            var tmp_4 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_4 instanceof CancellationException) {
              var e = this._get_exception__1672948706_ro13he_k$();
              var tmp0_safe_receiver = this.lateInitScope2__1._v;
              if (tmp0_safe_receiver == null) {
                Unit_getInstance();
              } else
                tmp0_safe_receiver._set_isRunning__1251847984_h1n2o7_k$(false);
              var tmp1_safe_receiver = this.lateInitScope2__1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_lastFrameTimeNanos__1127274544_in5els_k$(), this._this__1828080292__1._get_lastFrameTimeNanos__1127274544_in5els_k$())) {
                this._this__1828080292__1._set_isRunning__1251847984_h1n2o7_k$(false);
              } else {
              }
              throw e;
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 7:
            throw this._get_exception__1672948706_ro13he_k$();
          case 8:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 7) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $animateCOROUTINE$1.$metadata$ = {
    simpleName: '$animateCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function $callWithFrameNanosCOROUTINE$2(_this__1828080292, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.onFrame_1 = onFrame;
  }
  $callWithFrameNanosCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            if (this._this__1828080292__1._get_isInfinite__365521645_61meb1_k$()) {
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = withInfiniteAnimationFrameNanos(this.onFrame_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(1);
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.onFrame_1), this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 4) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $callWithFrameNanosCOROUTINE$2.$metadata$ = {
    simpleName: '$callWithFrameNanosCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function _get_AnimationDebugDurationScale__855657834() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return this.StiffnessHigh_1;
  };
  Spring.prototype._get_StiffnessMedium__1547732765_plha8t_k$ = function () {
    return this.StiffnessMedium_1;
  };
  Spring.prototype._get_StiffnessMediumLow__2033407051_xmmyx7_k$ = function () {
    return this.StiffnessMediumLow_1;
  };
  Spring.prototype._get_StiffnessLow__2283396150_x9my8a_k$ = function () {
    unreachableDeclarationLog();
    return this.StiffnessLow_1;
  };
  Spring.prototype._get_StiffnessVeryLow__3949833356_5phf1w_k$ = function () {
    return this.StiffnessVeryLow_1;
  };
  Spring.prototype._get_DampingRatioHighBouncy__959490532_fv97ms_k$ = function () {
    unreachableDeclarationLog();
    return this.DampingRatioHighBouncy_1;
  };
  Spring.prototype._get_DampingRatioMediumBouncy__2713826225_q5dc9b_k$ = function () {
    unreachableDeclarationLog();
    return this.DampingRatioMediumBouncy_1;
  };
  Spring.prototype._get_DampingRatioLowBouncy__1587688938_q99omi_k$ = function () {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return VectorizedSpringSpec_init_$Init$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(VectorizedSpringSpec.prototype));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
    this.$stable_1 = 8;
  }
  VectorizedSpringSpec.prototype._get_dampingRatio__2557313602_sqjy66_k$ = function () {
    unreachableDeclarationLog();
    return this.dampingRatio_1;
  };
  VectorizedSpringSpec.prototype._get_stiffness__24126194_ed3w2_k$ = function () {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
  }
  VectorizedFiniteAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedFiniteAnimationSpec',
    kind: 'interface',
    interfaces: [VectorizedAnimationSpec]
  };
  function VectorizedAnimationSpec() {
    unreachableDeclarationLog();
  }
  VectorizedAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedAnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function Animations() {
    unreachableDeclarationLog();
  }
  Animations.$metadata$ = {
    simpleName: 'Animations',
    kind: 'interface',
    interfaces: []
  };
  function _get_anims__3094119311($this) {
    unreachableDeclarationLog();
    return $this.anims_1;
  }
  function _set_valueVector__829234289_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.valueVector_1 = _set____804775014;
  }
  function _get_valueVector__2660677117_0($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__1911543447_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.velocityVector_1 = _set____804775014;
  }
  function _get_velocityVector__3455271307_0($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__28953578($this, _set____804775014) {
    unreachableDeclarationLog();
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
    var last = _get_valueVector__2660677117_0(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__2660677117_0(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getValueFromNanos_laqly_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__2660677117_0(this);
  };
  VectorizedFloatAnimationSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__3455271307_0(this)._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__3455271307_0(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getVelocityFromNanos_da2xk2_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__3455271307_0(this);
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    return VectorizedTweenSpec_init_$Init$(durationMillis, delayMillis, easing, $mask0, $marker, Object.create(VectorizedTweenSpec.prototype));
  }
  function _get_anim__792546906($this) {
    unreachableDeclarationLog();
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    unreachableDeclarationLog();
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
    this.$stable_1 = 8;
  }
  VectorizedTweenSpec.prototype._get_durationMillis__2015407185_xbx64x_k$ = function () {
    unreachableDeclarationLog();
    return this.durationMillis_1;
  };
  VectorizedTweenSpec.prototype._get_delayMillis__455154952_7izjt4_k$ = function () {
    unreachableDeclarationLog();
    return this.delayMillis_1;
  };
  VectorizedTweenSpec.prototype._get_easing__320399168_5ar9kw_k$ = function () {
    unreachableDeclarationLog();
    return this.easing_1;
  };
  VectorizedTweenSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
    return this.anim_1.getValueFromNanos_274kdl_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    unreachableDeclarationLog();
    return this.anim_1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.$metadata$ = {
    simpleName: 'VectorizedTweenSpec',
    kind: 'class',
    interfaces: [VectorizedDurationBasedAnimationSpec]
  };
  function VectorizedDurationBasedAnimationSpec() {
    unreachableDeclarationLog();
  }
  VectorizedDurationBasedAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedDurationBasedAnimationSpec',
    kind: 'interface',
    interfaces: [VectorizedFiniteAnimationSpec]
  };
  function _get_anims__3094119311_0($this) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  function VectorizedDecayAnimationSpec() {
    unreachableDeclarationLog();
  }
  VectorizedDecayAnimationSpec.$metadata$ = {
    simpleName: 'VectorizedDecayAnimationSpec',
    kind: 'interface',
    interfaces: []
  };
  function _get_rectVisibilityThreshold__2288829116() {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function _get_visibilityThresholdMap__1712607304() {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function _get_VisibilityThreshold__3713836120(_this__1828080292) {
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return Size_0(0.5, 0.5);
  }
  function _get_VisibilityThreshold__3713836120_1(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return Offset_0(0.5, 0.5);
  }
  function _get_VisibilityThreshold__3713836120_2(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return _get_rectVisibilityThreshold__2288829116();
  }
  function _get_VisibilityThreshold__3713836120_3(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return 1;
  }
  function _get_VisibilityThreshold__3713836120_4(_this__1828080292) {
    init_properties_VisibilityThresholds_kt_1861165760();
    return IntOffset_0(1, 1);
  }
  function _get_VisibilityThreshold__3713836120_5(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_VisibilityThresholds_kt_1861165760();
    return IntSize_0(1, 1);
  }
  function _get_PxVisibilityThreshold__2378547648() {
    unreachableDeclarationLog();
    return PxVisibilityThreshold;
  }
  var PxVisibilityThreshold;
  function _get_DpVisibilityThreshold__3669579332() {
    unreachableDeclarationLog();
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
  DecayAnimation.prototype.isFinishedFromNanos_uhkxvh_k$ = isFinishedFromNanos;
  TargetBasedAnimation.prototype.isFinishedFromNanos_uhkxvh_k$ = isFinishedFromNanos;
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
  AnimationDebugDurationScale = 1;
  PxVisibilityThreshold = 0.5;
  DpVisibilityThreshold = 0.1;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.AnimationVector2D = AnimationVector2D;
  _.$crossModule$.AnimationVector4D = AnimationVector4D;
  _.$crossModule$.CubicBezierEasing = CubicBezierEasing;
  _.$crossModule$._get_FastOutSlowInEasing__2117326030 = _get_FastOutSlowInEasing__2117326030;
  _.$crossModule$.FiniteAnimationSpec = FiniteAnimationSpec;
  _.$crossModule$.FloatDecayAnimationSpec = FloatDecayAnimationSpec;
  _.$crossModule$._get_LinearEasing__2697834107 = _get_LinearEasing__2697834107;
  _.$crossModule$.SpringSpec = SpringSpec;
  _.$crossModule$.TwoWayConverter = TwoWayConverter_0;
  _.$crossModule$._get_VectorConverter__3310685236 = _get_VectorConverter__3310685236_1;
  _.$crossModule$._get_VisibilityThreshold__3713836120 = _get_VisibilityThreshold__3713836120_4;
  _.$crossModule$._get_VisibilityThreshold__3713836120_1 = _get_VisibilityThreshold__3713836120_5;
  _.$crossModule$.generateDecayAnimationSpec = generateDecayAnimationSpec;
  _.$crossModule$.AnimationState$default = AnimationState$default;
  _.$crossModule$.copy$default = copy$default;
  _.$crossModule$.spring$default = spring$default;
  _.$crossModule$.tween$default = tween$default;
  _.$crossModule$.animateDecay$default = animateDecay$default;
  _.$crossModule$.animateTo$default = animateTo$default;
  _.$crossModule$.animate$default = animate$default;
  _.$crossModule$.Animatable_init_$Create$ = Animatable_init_$Create$;
  _.$crossModule$.SpringSpec_init_$Create$ = SpringSpec_init_$Create$;
  _.$crossModule$.TweenSpec_init_$Create$ = TweenSpec_init_$Create$;
  _.$crossModule$.Spring_getInstance = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_animation_animation_core.js.map