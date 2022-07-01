(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui_geometry.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js', './kotlin_androidx_compose_animation_animation_core.js', './kotlin_androidx_compose_ui_ui_text.js', './kotlin_androidx_compose_runtime_runtime_saveable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'), require('./kotlin_androidx_compose_animation_animation_core.js'), require('./kotlin_androidx_compose_ui_ui_text.js'), require('./kotlin_androidx_compose_runtime_runtime_saveable.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_animation_animation_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_animation_animation_core' was not found. Please, check whether 'kotlin_androidx_compose_animation_animation_core' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_text === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_ui_ui_text' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_text' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime_saveable === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_foundation_foundation'. Its dependency 'kotlin_androidx_compose_runtime_runtime_saveable' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime_saveable' is loaded prior to 'kotlin_androidx_compose_foundation_foundation'.");
    }
    root.kotlin_androidx_compose_foundation_foundation = factory(typeof kotlin_androidx_compose_foundation_foundation === 'undefined' ? {} : kotlin_androidx_compose_foundation_foundation, kotlin_kotlin, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_runtime_runtime_saveable);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_runtime_runtime_saveable) {
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var _get_NoInspectorInfo__942577837 = kotlin_androidx_compose_ui_ui.$crossModule$._get_NoInspectorInfo__942577837;
  var _get_isDebugInspectorInfoEnabled__1687471116 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isDebugInspectorInfoEnabled__1687471116;
  var InspectableModifier = kotlin_androidx_compose_ui_ui.$crossModule$.InspectableModifier;
  var modifierLocalOf = kotlin_androidx_compose_ui_ui.$crossModule$.modifierLocalOf;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var Color__copy$default_impl_868080376 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color__copy$default_impl_868080376;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.staticCompositionLocalOf;
  var _Size___get_width__impl__3977603903 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_width__impl__3977603903;
  var _Size___get_height__impl__604880786 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_height__impl__604880786;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect_1;
  var Rectangle = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Rectangle;
  var Shape = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Shape;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_4;
  var clip = kotlin_androidx_compose_ui_ui.$crossModule$.clip;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var positionChange = kotlin_androidx_compose_ui_ui.$crossModule$.positionChange;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset_1;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var AwaitPointerEventScope = kotlin_androidx_compose_ui_ui.$crossModule$.AwaitPointerEventScope;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var changedToUp = kotlin_androidx_compose_ui_ui.$crossModule$.changedToUp;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$crossModule$.PointerInputScope;
  var CancellationException = kotlin_kotlin.$crossModule$.CancellationException;
  var PointerEventPass_Main_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.PointerEventPass_Main_getInstance;
  var changedToUpIgnoreConsumed = kotlin_androidx_compose_ui_ui.$crossModule$.changedToUpIgnoreConsumed;
  var isOutOfBounds = kotlin_androidx_compose_ui_ui.$crossModule$.isOutOfBounds;
  var PointerEventPass_Final_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.PointerEventPass_Final_getInstance;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineScope_1;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.withTimeout;
  var TimeoutCancellationException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.TimeoutCancellationException;
  var positionChangedIgnoreConsumed = kotlin_androidx_compose_ui_ui.$crossModule$.positionChangedIgnoreConsumed;
  var _Dp___get_value__impl__3303478217 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___get_value__impl__3303478217;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var _get_isActive__4035225851 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$._get_isActive__4035225851;
  var Density = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Density_1;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance;
  var changedToDownIgnoreConsumed = kotlin_androidx_compose_ui_ui.$crossModule$.changedToDownIgnoreConsumed;
  var changedToDown = kotlin_androidx_compose_ui_ui.$crossModule$.changedToDown;
  var _get_isPrimaryPressed__3891969153 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isPrimaryPressed__3891969153;
  var SuspendFunction2 = kotlin_kotlin.$crossModule$.SuspendFunction2;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.mutableStateOf$default;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.LaunchedEffect$composable;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.FlowCollector;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$crossModule$.Spring_getInstance;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_4;
  var _get_VisibilityThreshold__3713836120 = kotlin_androidx_compose_animation_animation_core.$crossModule$._get_VisibilityThreshold__3713836120;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset_1;
  var spring$default = kotlin_androidx_compose_animation_animation_core.$crossModule$.spring$default;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp;
  var _Size___get_minDimension__impl__4021532005 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Size___get_minDimension__impl__4021532005;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var _get_inspectableElements__3413877420 = kotlin_androidx_compose_ui_ui.$crossModule$._get_inspectableElements__3413877420;
  var _get_nameFallback__326891614 = kotlin_androidx_compose_ui_ui.$crossModule$._get_nameFallback__326891614;
  var InspectableValue = kotlin_androidx_compose_ui_ui.$crossModule$.InspectableValue;
  var Dp__hashCode_impl_1749449350 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp__hashCode_impl_1749449350;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.toRect_1;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$crossModule$.LayoutDirection_Ltr_getInstance;
  var CornerRadius$default = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.CornerRadius$default;
  var RoundRect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.RoundRect;
  var Rounded = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Rounded;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextOverflow;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventStart;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$crossModule$.isTraceInProgress;
  var _TextOverflow___get_value__impl__1925615142 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextOverflow___get_value__impl__1925615142;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_4;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var _get_LocalDensity__4285485518 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalDensity__4285485518;
  var _get_LocalFontFamilyResolver__1044470061 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalFontFamilyResolver__1044470061;
  var rememberSaveable$composable = kotlin_androidx_compose_runtime_runtime_saveable.$crossModule$.rememberSaveable$composable;
  var AnnotatedString_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$crossModule$.AnnotatedString_init_$Create$;
  var _get_LocalLayoutDirection__930718945 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalLayoutDirection__930718945;
  var _get_LocalViewConfiguration__3377266565 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalViewConfiguration__3377266565;
  var materialize = kotlin_androidx_compose_ui_ui.$crossModule$.materialize;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_2;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$crossModule$.invalidApplier;
  var Applier = kotlin_androidx_compose_runtime_runtime.$crossModule$.Applier;
  var _Updater___init__impl__2643161360 = kotlin_androidx_compose_runtime_runtime.$crossModule$._Updater___init__impl__2643161360;
  var Updater__set_impl_2407782900 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Updater__set_impl_2407782900;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventEnd;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$crossModule$.Saver;
  var graphicsLayer$default = kotlin_androidx_compose_ui_ui.$crossModule$.graphicsLayer$default;
  var drawBehind = kotlin_androidx_compose_ui_ui.$crossModule$.drawBehind;
  var semantics$default = kotlin_androidx_compose_ui_ui.$crossModule$.semantics$default;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_1;
  var Offset__plus_impl_737740800 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset__plus_impl_737740800;
  var KProperty0 = kotlin_kotlin.$crossModule$.KProperty0;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var getLocalDelegateReference = kotlin_kotlin.$crossModule$.getLocalDelegateReference;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.rememberUpdatedState$composable;
  var pointerInput = kotlin_androidx_compose_ui_ui.$crossModule$.pointerInput;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var Constraints$default = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints$default;
  var roundToInt = kotlin_kotlin.$crossModule$.roundToInt;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntOffset;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var _IntSize___get_width__impl__3492176776 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_width__impl__3492176776;
  var _IntSize___get_height__impl__2736509033 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_height__impl__2736509033;
  var _get_FirstBaseline__3266425468 = kotlin_androidx_compose_ui_ui.$crossModule$._get_FirstBaseline__3266425468;
  var to = kotlin_kotlin.$crossModule$.to;
  var _get_LastBaseline__1234672016 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LastBaseline__1234672016;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  var Companion_getInstance_8 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$crossModule$.MeasurePolicy;
  var positionInWindow = kotlin_androidx_compose_ui_ui.$crossModule$.positionInWindow;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var _set_text__595223242 = kotlin_androidx_compose_ui_ui.$crossModule$._set_text__595223242;
  var getTextLayoutResult$default = kotlin_androidx_compose_ui_ui.$crossModule$.getTextLayoutResult$default;
  var onGloballyPositioned = kotlin_androidx_compose_ui_ui.$crossModule$.onGloballyPositioned;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var composed$composable$default = kotlin_androidx_compose_ui_ui.$crossModule$.composed$composable$default;
  var pointerHoverIcon$default = kotlin_androidx_compose_ui_ui.$crossModule$.pointerHoverIcon$default;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$crossModule$.RememberObserver;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var _get_key__857139730 = kotlin_androidx_compose_ui_ui.$crossModule$._get_key__857139730;
  var _get_isShiftPressed__3737632705 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isShiftPressed__3737632705;
  var _get_isCtrlPressed__1889404612 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isCtrlPressed__1889404612;
  var KeyEvent = kotlin_androidx_compose_ui_ui.$crossModule$.KeyEvent;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var TextRange = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextRange;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var _Constraints___get_minWidth__impl__3236361538 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_minWidth__impl__3236361538;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var _Constraints___get_maxWidth__impl__51833172 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_maxWidth__impl__51833172;
  var _Constraints___get_hasBoundedWidth__impl__3842542885 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Constraints___get_hasBoundedWidth__impl__3842542885;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_1;
  var MultiParagraph = kotlin_androidx_compose_ui_ui_text.$crossModule$.MultiParagraph;
  var TextPainter_getInstance = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextPainter_getInstance;
  var resolveDefaults = kotlin_androidx_compose_ui_ui_text.$crossModule$.resolveDefaults;
  var MultiParagraphIntrinsics = kotlin_androidx_compose_ui_ui_text.$crossModule$.MultiParagraphIntrinsics;
  var TextLayoutInput_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextLayoutInput_init_$Create$;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$crossModule$.constrain_1;
  var TextLayoutResult = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextLayoutResult;
  var repeat = kotlin_kotlin.$crossModule$.repeat;
  var FontStyle = kotlin_androidx_compose_ui_ui_text.$crossModule$.FontStyle;
  var FontSynthesis = kotlin_androidx_compose_ui_ui_text.$crossModule$.FontSynthesis;
  var BaselineShift = kotlin_androidx_compose_ui_ui_text.$crossModule$.BaselineShift;
  var TextAlign = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextAlign;
  var TextDirection = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextDirection;
  var Offset__minus_impl_3225842032 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset__minus_impl_3225842032;
  var Companion_getInstance_9 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_2;
  var coerceIn_0 = kotlin_kotlin.$crossModule$.coerceIn_2;
  var Companion_getInstance_10 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_3;
  var _TextRange___get_reversed__impl__3410665902 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextRange___get_reversed__impl__3410665902;
  var _TextRange___get_start__impl__2306077420 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextRange___get_start__impl__2306077420;
  var _TextRange___get_end__impl__3306702867 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextRange___get_end__impl__3306702867;
  var TextRange_0 = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextRange_1;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501_1;
  var _TextRange___get_collapsed__impl__3538141143 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextRange___get_collapsed__impl__3538141143;
  var Offset__hashCode_impl_3247326111 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset__hashCode_impl_3247326111;
  var SemanticsPropertyKey_init_$Create$ = kotlin_androidx_compose_ui_ui.$crossModule$.SemanticsPropertyKey_init_$Create$;
  var _Offset___get_x__impl__2048295803 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_x__impl__2048295803;
  var _Offset___get_y__impl__3791106138 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_y__impl__3791106138;
  var AnimationVector2D = kotlin_androidx_compose_animation_animation_core.$crossModule$.AnimationVector2D;
  var _get_isSpecified__2832019115 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._get_isSpecified__2832019115;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset;
  var TwoWayConverter = kotlin_androidx_compose_animation_animation_core.$crossModule$.TwoWayConverter;
  var SpringSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$crossModule$.SpringSpec_init_$Create$;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.compositionLocalOf$default;
  var Color__hashCode_impl_1907974927 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color__hashCode_impl_1907974927;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_2;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_1;
  var Offset__getDistance_impl_2762136341 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset__getDistance_impl_2762136341;
  var _get_isShiftPressed__3737632705_0 = kotlin_androidx_compose_ui_ui.$crossModule$._get_isShiftPressed__3737632705_1;
  var NotImplementedError = kotlin_kotlin.$crossModule$.NotImplementedError;
  var DummyPointerIcon_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.DummyPointerIcon_getInstance;
  var PointerEvent_init_$Create$ = kotlin_androidx_compose_ui_ui.$crossModule$.PointerEvent_init_$Create$;
  //endregion
  'use strict';
  //region block: pre-declaration
  detectDragGesturesAfterLongPress$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda$slambda;
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.constructor = detectDragGesturesAfterLongPress$slambda$slambda_1;
  detectDragGesturesAfterLongPress$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda;
  awaitLongPressOrCancellation$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitLongPressOrCancellation$slambda$slambda.prototype.constructor = awaitLongPressOrCancellation$slambda$slambda;
  awaitLongPressOrCancellation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitLongPressOrCancellation$slambda.prototype.constructor = awaitLongPressOrCancellation$slambda;
  $dragCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $dragCOROUTINE$0.prototype.constructor = $dragCOROUTINE$0;
  $awaitLongPressOrCancellationCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitLongPressOrCancellationCOROUTINE$1.prototype.constructor = $awaitLongPressOrCancellationCOROUTINE$1;
  $awaitDragOrCancellationCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragOrCancellationCOROUTINE$2.prototype.constructor = $awaitDragOrCancellationCOROUTINE$2;
  $awaitDragOrUpCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragOrUpCOROUTINE$3.prototype.constructor = $awaitDragOrUpCOROUTINE$3;
  awaitAllPointersUp$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitAllPointersUp$slambda.prototype.constructor = awaitAllPointersUp$slambda;
  $forEachGestureCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $forEachGestureCOROUTINE$4.prototype.constructor = $forEachGestureCOROUTINE$4;
  $awaitAllPointersUpCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAllPointersUpCOROUTINE$5.prototype.constructor = $awaitAllPointersUpCOROUTINE$5;
  NoPressGesture$slambda.prototype = Object.create(CoroutineImpl.prototype);
  NoPressGesture$slambda.prototype.constructor = NoPressGesture$slambda;
  $awaitFirstDownOnPassCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $awaitFirstDownOnPassCOROUTINE$6.prototype.constructor = $awaitFirstDownOnPassCOROUTINE$6;
  collectIsFocusedAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsFocusedAsState$composable$slambda$slambda.prototype.constructor = collectIsFocusedAsState$composable$slambda$slambda;
  collectIsFocusedAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsFocusedAsState$composable$slambda.prototype.constructor = collectIsFocusedAsState$composable$slambda;
  collectIsHoveredAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsHoveredAsState$composable$slambda$slambda.prototype.constructor = collectIsHoveredAsState$composable$slambda$slambda;
  collectIsHoveredAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsHoveredAsState$composable$slambda.prototype.constructor = collectIsHoveredAsState$composable$slambda;
  collectIsPressedAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsPressedAsState$composable$slambda$slambda.prototype.constructor = collectIsPressedAsState$composable$slambda$slambda;
  collectIsPressedAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsPressedAsState$composable$slambda.prototype.constructor = collectIsPressedAsState$composable$slambda;
  RoundedCornerShape.prototype = Object.create(CornerBasedShape.prototype);
  RoundedCornerShape.prototype.constructor = RoundedCornerShape;
  TextController$update$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TextController$update$slambda.prototype.constructor = TextController$update$slambda;
  TextController$update$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TextController$update$lambda$slambda.prototype.constructor = TextController$update$lambda$slambda;
  Handle.prototype = Object.create(Enum.prototype);
  Handle.prototype.constructor = Handle;
  KeyCommand.prototype = Object.create(Enum.prototype);
  KeyCommand.prototype.constructor = KeyCommand;
  function updateSelection$default(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      isStartHandle = true;
    if (!(($mask0 & 64) === 0))
      previousSelection = null;
    var tmp;
    if ($handler == null) {
      tmp = this.updateSelection_xe1zkm_k$(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    } else {
      var tmp_0 = new Offset(startHandlePosition);
      var tmp_1 = new Offset(endHandlePosition);
      var tmp_2 = previousHandlePosition;
      tmp = $handler(tmp_0, tmp_1, tmp_2 == null ? null : new Offset(tmp_2), isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    }
    return tmp;
  }
  SelectionMode.prototype = Object.create(Enum.prototype);
  SelectionMode.prototype.constructor = SelectionMode;
  SelectionMode$Vertical.prototype = Object.create(SelectionMode.prototype);
  SelectionMode$Vertical.prototype.constructor = SelectionMode$Vertical;
  SelectionMode$Horizontal.prototype = Object.create(SelectionMode.prototype);
  SelectionMode$Horizontal.prototype.constructor = SelectionMode$Horizontal;
  mouseSelectionDetector$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  mouseSelectionDetector$slambda$slambda.prototype.constructor = mouseSelectionDetector$slambda$slambda;
  mouseSelectionDetector$slambda.prototype = Object.create(CoroutineImpl.prototype);
  mouseSelectionDetector$slambda.prototype.constructor = mouseSelectionDetector$slambda;
  $awaitMouseEventDownCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $awaitMouseEventDownCOROUTINE$7.prototype.constructor = $awaitMouseEventDownCOROUTINE$7;
  //endregion
  function ExperimentalFoundationApi() {
  }
  ExperimentalFoundationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalFoundationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalFoundationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalFoundationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalFoundationApi.prototype.toString = function () {
    return '@androidx.compose.foundation.ExperimentalFoundationApi()';
  };
  ExperimentalFoundationApi.$metadata$ = {
    simpleName: 'ExperimentalFoundationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _get_focusGroupInspectorInfo__2654300627() {
    init_properties_Focusable_kt_2061625730();
    return focusGroupInspectorInfo;
  }
  var focusGroupInspectorInfo;
  function focusGroupInspectorInfo$lambda() {
    return function ($this$null) {
      $this$null._set_name__589551916_atzcdf_k$('focusGroup');
      return Unit_getInstance();
    };
  }
  var properties_initialized_Focusable_kt_3077926622;
  function init_properties_Focusable_kt_2061625730() {
    if (!properties_initialized_Focusable_kt_3077926622) {
      properties_initialized_Focusable_kt_3077926622 = true;
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (_get_isDebugInspectorInfoEnabled__1687471116()) {
          tmp = focusGroupInspectorInfo$lambda();
        } else {
          tmp = _get_NoInspectorInfo__942577837();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      focusGroupInspectorInfo = new InspectableModifier(tmp$ret$0);
    }
  }
  function _get_ModifierLocalFocusedBoundsObserver__3029699997() {
    init_properties_FocusedBounds_kt_2767262184();
    return ModifierLocalFocusedBoundsObserver;
  }
  var ModifierLocalFocusedBoundsObserver;
  function ModifierLocalFocusedBoundsObserver$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_FocusedBounds_kt_3075115332;
  function init_properties_FocusedBounds_kt_2767262184() {
    if (!properties_initialized_FocusedBounds_kt_3075115332) {
      properties_initialized_FocusedBounds_kt_3075115332 = true;
      ModifierLocalFocusedBoundsObserver = modifierLocalOf(ModifierLocalFocusedBoundsObserver$lambda());
    }
  }
  function _get_LocalIndication__2196922858() {
    init_properties_Indication_kt_907667454();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  Indication.$metadata$ = {
    simpleName: 'Indication',
    kind: 'interface',
    interfaces: []
  };
  function _get_isPressed__917664185($this) {
    return $this.isPressed_1;
  }
  function _get_isHovered__1966276128($this) {
    return $this.isHovered_1;
  }
  function _get_isFocused__2246475012($this) {
    return $this.isFocused_1;
  }
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.isPressed_1 = isPressed;
    this.isHovered_1 = isHovered;
    this.isFocused_1 = isFocused;
  }
  DefaultDebugIndicationInstance.prototype.drawIndication_4sht7n_k$ = function (_this__1828080292) {
    _this__1828080292.drawContent_m0d3yc_k$();
    if (this.isPressed_1._get_value__3683422336_a43j40_k$()) {
      var tmp = Companion_getInstance()._get_Black__2204520402_og72wn_k$();
      var tmp_0 = Color__copy$default_impl_868080376(tmp, 0.3, 0.0, 0.0, 0.0, 14, null);
      var tmp_1 = _this__1828080292._get_size__809037418_1k4d9o_k$();
      _this__1828080292.drawRect$default_xwjj6g_k$(tmp_0, null, tmp_1, 0.0, null, null, null, 122, null);
    } else if (this.isHovered_1._get_value__3683422336_a43j40_k$() ? true : this.isFocused_1._get_value__3683422336_a43j40_k$()) {
      var tmp_2 = Companion_getInstance()._get_Black__2204520402_og72wn_k$();
      var tmp_3 = Color__copy$default_impl_868080376(tmp_2, 0.1, 0.0, 0.0, 0.0, 14, null);
      var tmp_4 = _this__1828080292._get_size__809037418_1k4d9o_k$();
      _this__1828080292.drawRect$default_xwjj6g_k$(tmp_3, null, tmp_4, 0.0, null, null, null, 122, null);
    }
  };
  DefaultDebugIndicationInstance.$metadata$ = {
    simpleName: 'DefaultDebugIndicationInstance',
    kind: 'class',
    interfaces: [IndicationInstance]
  };
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  DefaultDebugIndication.prototype.rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  DefaultDebugIndication.prototype.rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(202464790);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)');
    var isPressed = collectIsPressedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isHovered = collectIsHoveredAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_remember$composable_0 = $composer_0;
      var tmp1_remember$composable_0 = 14 & $changed;
      var $composer_1 = tmp0_remember$composable_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1)');
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_cache_0_3 = $composer_1;
        var tmp2_cache_0_4 = $composer_1.changed_ga7h3f_k$(interactionSource);
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_let_0_5 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp;
            if (tmp2_cache_0_4 ? true : tmp0_let_0_5 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$0;
              $l$block: {
                var tmp0_return_8 = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
                tmp$ret$0 = tmp0_return_8;
                break $l$block;
              }
              var value_2_2_6 = tmp$ret$0;
              tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_6);
              tmp = value_2_2_6;
            } else {
              tmp = tmp0_let_0_5;
            }
            tmp$ret$1 = tmp;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var tmp_0 = tmp$ret$2;
        tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_2;
      }
      var tmp0_2 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0_2;
      break $l$block_3;
    }
    var tmp0 = tmp$ret$4;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DefaultDebugIndication.$metadata$ = {
    simpleName: 'DefaultDebugIndication',
    kind: 'object',
    interfaces: [Indication]
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function IndicationInstance() {
  }
  IndicationInstance.$metadata$ = {
    simpleName: 'IndicationInstance',
    kind: 'interface',
    interfaces: []
  };
  function LocalIndication$lambda() {
    return function () {
      return DefaultDebugIndication_getInstance();
    };
  }
  var properties_initialized_Indication_kt_2348224034;
  function init_properties_Indication_kt_907667454() {
    if (!properties_initialized_Indication_kt_2348224034) {
      properties_initialized_Indication_kt_2348224034 = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda());
    }
  }
  function _get_MaxSupportedElevation__510568062() {
    init_properties_Scroll_kt_480347757();
    return MaxSupportedElevation;
  }
  var MaxSupportedElevation;
  function _get_HorizontalScrollableClipModifier__1371726873() {
    init_properties_Scroll_kt_480347757();
    return HorizontalScrollableClipModifier;
  }
  var HorizontalScrollableClipModifier;
  function _get_VerticalScrollableClipModifier__2243863495() {
    init_properties_Scroll_kt_480347757();
    return VerticalScrollableClipModifier;
  }
  var VerticalScrollableClipModifier;
  function HorizontalScrollableClipModifier$1() {
  }
  HorizontalScrollableClipModifier$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = density.roundToPx_hl1u8z_k$(_get_MaxSupportedElevation__510568062());
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(0.0, -inflateSize, _Size___get_width__impl__3977603903(size), _Size___get_height__impl__604880786(size) + inflateSize));
  };
  HorizontalScrollableClipModifier$1.$metadata$ = {
    kind: 'class',
    interfaces: [Shape]
  };
  function VerticalScrollableClipModifier$1() {
  }
  VerticalScrollableClipModifier$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = density.roundToPx_hl1u8z_k$(_get_MaxSupportedElevation__510568062());
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(-inflateSize, 0.0, _Size___get_width__impl__3977603903(size) + inflateSize, _Size___get_height__impl__604880786(size)));
  };
  VerticalScrollableClipModifier$1.$metadata$ = {
    kind: 'class',
    interfaces: [Shape]
  };
  var properties_initialized_Scroll_kt_2603572881;
  function init_properties_Scroll_kt_480347757() {
    if (!properties_initialized_Scroll_kt_2603572881) {
      properties_initialized_Scroll_kt_2603572881 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(30);
        break $l$block;
      }
      MaxSupportedElevation = tmp$ret$0;
      var tmp = Companion_getInstance_1();
      HorizontalScrollableClipModifier = clip(tmp, new HorizontalScrollableClipModifier$1());
      var tmp_0 = Companion_getInstance_1();
      VerticalScrollableClipModifier = clip(tmp_0, new VerticalScrollableClipModifier$1());
    }
  }
  function fastMapIndexedNotNull(_this__1828080292, transform) {
    {
    }
    var target = ArrayList_init_$Create$(_this__1828080292._get_size__809037418_ddoh9m_k$());
    {
      {
      }
      var inductionVariable = 0;
      var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = _this__1828080292.get_fkrdnv_k$(index_2);
          {
            var tmp0_safe_receiver_5 = transform(index_2, item_3);
            if (tmp0_safe_receiver_5 == null)
              null;
            else {
              var tmp$ret$0;
              $l$block: {
                {
                }
                target.add_1j60pz_k$(tmp0_safe_receiver_5);
                tmp$ret$0 = Unit_getInstance();
                break $l$block;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
          }
        }
         while (inductionVariable <= last);
    }
    return target;
  }
  function _get_mouseSlop__3983686130() {
    init_properties_DragGestureDetector_kt_1383915129();
    return mouseSlop;
  }
  var mouseSlop;
  function _get_defaultTouchSlop__1834675507() {
    init_properties_DragGestureDetector_kt_1383915129();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function _get_mouseToTouchSlopRatio__3328561215() {
    init_properties_DragGestureDetector_kt_1383915129();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function detectDragGesturesAfterLongPress(_this__1828080292, onDragStart, onDragEnd, onDragCancel, onDrag, $cont) {
    return forEachGesture(_this__1828080292, detectDragGesturesAfterLongPress$slambda_0(onDragStart, onDragCancel, onDragEnd, onDrag, null), $cont);
  }
  function detectDragGesturesAfterLongPress$default(_this__1828080292, onDragStart, onDragEnd, onDragCancel, onDrag, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      onDragStart = detectDragGesturesAfterLongPress$lambda();
    }
    if (!(($mask0 & 2) === 0)) {
      onDragEnd = detectDragGesturesAfterLongPress$lambda_0();
    }
    if (!(($mask0 & 4) === 0)) {
      onDragCancel = detectDragGesturesAfterLongPress$lambda_1();
    }
    return detectDragGesturesAfterLongPress(_this__1828080292, onDragStart, onDragEnd, onDragCancel, onDrag, $cont);
  }
  function drag(_this__1828080292, pointerId, onDrag, $cont) {
    var tmp = new $dragCOROUTINE$0(_this__1828080292, pointerId, onDrag, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitLongPressOrCancellation(_this__1828080292, initialDown, $cont) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__1828080292, initialDown, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrCancellation(_this__1828080292, pointerId, $cont) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__1828080292, pointerId, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp(_this__1828080292, pointerId) {
    init_properties_DragGestureDetector_kt_1383915129();
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_fastFirstOrNull_0 = _this__1828080292._get_changes__3558428846_c6ikpe_k$();
      {
      }
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_3 = tmp0_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2);
            {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = equals(item_3_3._get_id__1413120976_iucw1k_k$(), pointerId);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = item_3_3;
                break $l$block_1;
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_pressed__849752879_e1x5in_k$()) === true);
  }
  function awaitDragOrUp(_this__1828080292, pointerId, hasDragged, $cont) {
    var tmp = new $awaitDragOrUpCOROUTINE$3(_this__1828080292, pointerId, hasDragged, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function detectDragGesturesAfterLongPress$lambda() {
    return function (it) {
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$lambda_0() {
    return function () {
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$lambda_1() {
    return function () {
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda$slambda$lambda($onDrag) {
    return function (it) {
      $onDrag(it, new Offset(positionChange(it)));
      it.consume_spbz2t_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.invoke_ju07jx_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ju07jx_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = awaitFirstDown(this.$this$awaitPointerEventScope_1, false, this);
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
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda(completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.$metadata$ = {
    simpleName: 'detectDragGesturesAfterLongPress$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function detectDragGesturesAfterLongPress$slambda$slambda_0(resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda(resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_ju07jx_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectDragGesturesAfterLongPress$slambda$slambda_1($drag, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.$drag_1 = $drag;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_0 = this.$drag_1._get_id__1413120976_iucw1k_k$();
            suspendResult = drag(this.$this$awaitPointerEventScope_1, tmp_0, detectDragGesturesAfterLongPress$slambda$slambda$lambda(this.$onDrag_1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp0_fastForEach_0 = this.$this$awaitPointerEventScope_1._get_currentEvent__1583824074_q6yuh6_k$()._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable = 0;
              var last = tmp0_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index_2 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item_3 = tmp0_fastForEach_0.get_fkrdnv_k$(index_2);
                  if (changedToUp(item_3))
                    item_3.consume_spbz2t_k$();
                }
                 while (inductionVariable <= last);
              this.$onDragEnd_1();
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            } else {
              this.$onDragCancel_1();
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this._get_exception__1672948706_ro13he_k$();
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
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda_1(this.$drag_1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectDragGesturesAfterLongPress$slambda$slambda_1.$metadata$ = {
    simpleName: 'detectDragGesturesAfterLongPress$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function detectDragGesturesAfterLongPress$slambda$slambda_2($drag, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda_1($drag, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragCancel, $onDragEnd, $onDrag, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  detectDragGesturesAfterLongPress$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(detectDragGesturesAfterLongPress$slambda$slambda_0(null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this._set_exceptionState__118868437_8fc1n_k$(5);
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = awaitLongPressOrCancellation(this.$this$forEachGesture_1, this.down0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset(this.drag1__1._get_position__3188952002_dzccdm_k$()));
              this._set_state__1256591060_i39zdo_k$(3);
              suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(detectDragGesturesAfterLongPress$slambda$slambda_2(this.drag1__1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, null), this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            break;
          case 3:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 5:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            var tmp_0 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_0 instanceof CancellationException) {
              var c = this._get_exception__1672948706_ro13he_k$();
              this.$onDragCancel_1();
              throw c;
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 6:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            return Unit_getInstance();
          case 7:
            throw this._get_exception__1672948706_ro13he_k$();
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
  detectDragGesturesAfterLongPress$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.$onDragStart_1, this.$onDragCancel_1, this.$onDragEnd_1, this.$onDrag_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  detectDragGesturesAfterLongPress$slambda.$metadata$ = {
    simpleName: 'detectDragGesturesAfterLongPress$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function detectDragGesturesAfterLongPress$slambda_0($onDragStart, $onDragCancel, $onDragEnd, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragCancel, $onDragEnd, $onDrag, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda$slambda($currentDown, $longPress, resultContinuation) {
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitLongPressOrCancellation$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  awaitLongPressOrCancellation$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitLongPressOrCancellation$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            this.finished0__1 = false;
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (!!this.finished0__1) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this.$this$awaitPointerEventScope_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event1__1 = suspendResult;
            l$ret$1: do {
              var tmp0_fastAll_0 = this.event1__1._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAll_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index_2_2 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item_3_3 = tmp0_fastAll_0.get_fkrdnv_k$(index_2_2);
                  if (!changedToUpIgnoreConsumed(item_3_3)) {
                    this.tmp$ret$02__1 = false;
                    break l$ret$1;
                  } else {
                  }
                }
                 while (inductionVariable <= last);
              this.tmp$ret$02__1 = true;
            }
             while (false);
            if (this.tmp$ret$02__1) {
              this.finished0__1 = true;
            } else {
            }

            l$ret$3: do {
              var tmp1_fastAny_0 = this.event1__1._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_2_2_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_3_3_0 = tmp1_fastAny_0.get_fkrdnv_k$(index_2_2_0);
                  if (item_3_3_0._get_isConsumed__3166079897_io3z3b_k$() ? true : isOutOfBounds(item_3_3_0, this.$this$awaitPointerEventScope_1._get_size__809037418_alsm3t_k$(), this.$this$awaitPointerEventScope_1._get_extendedTouchPadding__2580198912_i3a9tu_k$())) {
                    this.tmp$ret$23__1 = true;
                    break l$ret$3;
                  } else {
                  }
                }
                 while (inductionVariable_0 <= last_0);
              this.tmp$ret$23__1 = false;
            }
             while (false);
            if (this.tmp$ret$23__1) {
              this.finished0__1 = true;
            } else {
            }

            this._set_state__1256591060_i39zdo_k$(3);
            suspendResult = this.$this$awaitPointerEventScope_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny_0 = consumeCheck._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_2_2_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_3_3_1 = tmp2_fastAny_0.get_fkrdnv_k$(index_2_2_1);
                  if (item_3_3_1._get_isConsumed__3166079897_io3z3b_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  } else {
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.finished0__1 = true;
            } else {
            }

            if (!isPointerUp(this.event1__1, this.$currentDown_1._v._get_id__1413120976_iucw1k_k$())) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull_0 = this.event1__1._get_changes__3558428846_c6ikpe_k$();
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2_2_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_3_3_2 = tmp3_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2_2);
                    if (equals(item_3_3_2._get_id__1413120976_iucw1k_k$(), this.$currentDown_1._v._get_id__1413120976_iucw1k_k$())) {
                      tmp$ret$6 = item_3_3_2;
                      break l$ret$7;
                    } else {
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              this.$longPress_1._v = tmp$ret$6;
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull_0 = this.event1__1._get_changes__3558428846_c6ikpe_k$();
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_2_2_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3_3_3 = tmp4_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2_3);
                    if (item_3_3_3._get_pressed__849752879_e1x5in_k$()) {
                      tmp$ret$8 = item_3_3_3;
                      break l$ret$9;
                    } else {
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              var newPressed = tmp$ret$8;
              if (!(newPressed == null)) {
                this.$currentDown_1._v = newPressed;
                this.$longPress_1._v = this.$currentDown_1._v;
              } else {
                this.finished0__1 = true;
              }
            }

            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 5) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  awaitLongPressOrCancellation$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitLongPressOrCancellation$slambda$slambda(this.$currentDown_1, this.$longPress_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  awaitLongPressOrCancellation$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitLongPressOrCancellation$slambda$slambda.$metadata$ = {
    simpleName: 'awaitLongPressOrCancellation$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function awaitLongPressOrCancellation$slambda$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($this_awaitLongPressOrCancellation, $currentDown, $longPress, resultContinuation) {
    this.$this_awaitLongPressOrCancellation_1 = $this_awaitLongPressOrCancellation;
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitLongPressOrCancellation$slambda.prototype.invoke_d6gbsu_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_b6qu53_k$($this$withTimeout, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  awaitLongPressOrCancellation$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitLongPressOrCancellation$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$this_awaitLongPressOrCancellation_1.awaitPointerEventScope_w0i122_k$(awaitLongPressOrCancellation$slambda$slambda_0(this.$currentDown_1, this.$longPress_1, null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  awaitLongPressOrCancellation$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.$this_awaitLongPressOrCancellation_1, this.$currentDown_1, this.$longPress_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  awaitLongPressOrCancellation$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitLongPressOrCancellation$slambda.$metadata$ = {
    simpleName: 'awaitLongPressOrCancellation$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function awaitLongPressOrCancellation$slambda_0($this_awaitLongPressOrCancellation, $currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($this_awaitLongPressOrCancellation, $currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_d6gbsu_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__1828080292, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  $dragCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = awaitDragOrCancellation(this._this__1828080292__1, this.pointer0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.onDrag_1(change);
            this.pointer0__1 = change._get_id__1413120976_iucw1k_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 3:
            throw this._get_exception__1672948706_ro13he_k$();
          case 4:
            return Unit_getInstance();
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
  $dragCOROUTINE$0.$metadata$ = {
    simpleName: '$dragCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__1828080292, initialDown, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.initialDown_1 = initialDown;
  }
  $awaitLongPressOrCancellationCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this.longPress0__1 = {_v: null};
            this.currentDown1__1 = {_v: this.initialDown_1};
            this.longPressTimeout2__1 = this._this__1828080292__1._get_viewConfiguration__3288750880_gn2pk0_k$()._get_longPressTimeoutMillis__1454175723_o1s163_k$();
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = withTimeout(this.longPressTimeout2__1, awaitLongPressOrCancellation$slambda_0(this._this__1828080292__1, this.currentDown1__1, this.longPress0__1, null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT3__1 = null;
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_0 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_0 instanceof TimeoutCancellationException) {
              var _ = this._get_exception__1672948706_ro13he_k$();
              var tmp_1 = this;
              var tmp0_elvis_lhs = this.longPress0__1._v;
              tmp_1.TRY_RESULT3__1 = tmp0_elvis_lhs == null ? this.initialDown_1 : tmp0_elvis_lhs;
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
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
            return this.TRY_RESULT3__1;
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
  $awaitLongPressOrCancellationCOROUTINE$1.$metadata$ = {
    simpleName: '$awaitLongPressOrCancellationCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function $awaitDragOrCancellationCOROUTINE$2(_this__1828080292, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.pointerId_1 = pointerId;
  }
  $awaitDragOrCancellationCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            if (isPointerUp(this._this__1828080292__1._get_currentEvent__1583824074_q6yuh6_k$(), this.pointerId_1)) {
              return null;
            }

            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this.pointer_11__1 = this.pointerId_1;
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(3);
            suspendResult = this._this__1828080292__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event_2 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull_0 = event_2._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index_2_2 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item_3_3 = tmp0_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2);
                  if (equals(item_3_3._get_id__1413120976_iucw1k_k$(), this.pointer_11__1)) {
                    tmp$ret$0 = item_3_3;
                    break l$ret$1;
                  } else {
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs_4 = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs_4 == null) {
              this.tmp$ret$20__1 = null;
              this._set_state__1256591060_i39zdo_k$(9);
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs_4;
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            break;
          case 4:
            var dragEvent_3 = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent_3)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull_0 = event_2._get_changes__3558428846_c6ikpe_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_2_2_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_3_3_0 = tmp1_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2_0);
                    if (item_3_3_0._get_pressed__849752879_e1x5in_k$()) {
                      tmp$ret$4 = item_3_3_0;
                      break l$ret$5;
                    } else {
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown_6 = tmp$ret$4;
              if (otherDown_6 == null) {
                this.tmp$ret$20__1 = dragEvent_3;
                this._set_state__1256591060_i39zdo_k$(9);
                continue $sm;
              } else {
                this.pointer_11__1 = otherDown_6._get_id__1413120976_iucw1k_k$();
                this._set_state__1256591060_i39zdo_k$(5);
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent_3)) {
                this.tmp$ret$20__1 = dragEvent_3;
                this._set_state__1256591060_i39zdo_k$(9);
                continue $sm;
              } else {
                {
                  this._set_state__1256591060_i39zdo_k$(6);
                  continue $sm;
                }
              }
            }

            Unit_getInstance();
            break;
          case 5:
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 7:
            throw this._get_exception__1672948706_ro13he_k$();
          case 8:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(9);
            continue $sm;
          case 9:
            var change = this.tmp$ret$20__1;
            var tmp_0;
            var tmp0_safe_receiver = change;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isConsumed__3166079897_io3z3b_k$()) === false) {
              tmp_0 = change;
            } else {
              {
                tmp_0 = null;
              }
            }

            return tmp_0;
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
  $awaitDragOrCancellationCOROUTINE$2.$metadata$ = {
    simpleName: '$awaitDragOrCancellationCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function $awaitDragOrUpCOROUTINE$3(_this__1828080292, pointerId, hasDragged, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.pointerId_1 = pointerId;
    this.hasDragged_1 = hasDragged;
  }
  $awaitDragOrUpCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull_0 = event._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index_2_2 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item_3_3 = tmp0_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2);
                  if (equals(item_3_3._get_id__1413120976_iucw1k_k$(), this.pointer0__1)) {
                    tmp$ret$0 = item_3_3;
                    break l$ret$1;
                  } else {
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var dragEvent = tmp_0;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$2;
              l$ret$3: do {
                var tmp1_fastFirstOrNull_0 = event._get_changes__3558428846_c6ikpe_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_2_2_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_3_3_0 = tmp1_fastFirstOrNull_0.get_fkrdnv_k$(index_2_2_0);
                    if (item_3_3_0._get_pressed__849752879_e1x5in_k$()) {
                      tmp$ret$2 = item_3_3_0;
                      break l$ret$3;
                    } else {
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$2 = null;
              }
               while (false);
              var otherDown = tmp$ret$2;
              if (otherDown == null) {
                return dragEvent;
              } else {
                this.pointer0__1 = otherDown._get_id__1413120976_iucw1k_k$();
              }
            } else if (this.hasDragged_1(dragEvent)) {
              return dragEvent;
            }

            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 3:
            throw this._get_exception__1672948706_ro13he_k$();
          case 4:
            return Unit_getInstance();
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
  $awaitDragOrUpCOROUTINE$3.$metadata$ = {
    simpleName: '$awaitDragOrUpCOROUTINE$3',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_DragGestureDetector_kt_2254332117;
  function init_properties_DragGestureDetector_kt_1383915129() {
    if (!properties_initialized_DragGestureDetector_kt_2254332117) {
      properties_initialized_DragGestureDetector_kt_2254332117 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(0.125);
        break $l$block;
      }
      mouseSlop = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(18);
        break $l$block_0;
      }
      defaultTouchSlop = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        var tmp0_div_0 = _get_mouseSlop__3983686130();
        var tmp1_div_0 = _get_defaultTouchSlop__1834675507();
        tmp$ret$0_1 = _Dp___get_value__impl__3303478217(tmp0_div_0) / _Dp___get_value__impl__3303478217(tmp1_div_0);
        break $l$block_1;
      }
      mouseToTouchSlopRatio = tmp$ret$0_1;
    }
  }
  function forEachGesture(_this__1828080292, block, $cont) {
    var tmp = new $forEachGestureCOROUTINE$4(_this__1828080292, block, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitAllPointersUp(_this__1828080292, $cont) {
    return _this__1828080292.awaitPointerEventScope_w0i122_k$(awaitAllPointersUp$slambda_0(null), $cont);
  }
  function awaitAllPointersUp_0(_this__1828080292, $cont) {
    var tmp = new $awaitAllPointersUpCOROUTINE$5(_this__1828080292, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function allPointersUp(_this__1828080292) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_fastAny_0 = _this__1828080292._get_currentEvent__1583824074_q6yuh6_k$()._get_changes__3558428846_c6ikpe_k$();
      {
      }
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastAny_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_3 = tmp0_fastAny_0.get_fkrdnv_k$(index_2_2);
            {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = item_3_3._get_pressed__849752879_e1x5in_k$();
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = true;
                break $l$block_1;
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = false;
      break $l$block_1;
    }
    return !tmp$ret$1;
  }
  function awaitAllPointersUp$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitAllPointersUp$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  awaitAllPointersUp$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitAllPointersUp$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = awaitAllPointersUp_0(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  awaitAllPointersUp$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitAllPointersUp$slambda(completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  awaitAllPointersUp$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitAllPointersUp$slambda.$metadata$ = {
    simpleName: 'awaitAllPointersUp$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function awaitAllPointersUp$slambda_0(resultContinuation) {
    var i = new awaitAllPointersUp$slambda(resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $forEachGestureCOROUTINE$4(_this__1828080292, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.block_1 = block;
  }
  $forEachGestureCOROUTINE$4.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            var tmp_0 = this;
            tmp_0.currentContext0__1 = this._get_context__1558698818_ps0bpe_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (!_get_isActive__4035225851(this.currentContext0__1)) {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            }

            this._set_exceptionState__118868437_8fc1n_k$(4);
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this.block_1(this._this__1828080292__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            suspendResult = awaitAllPointersUp(this._this__1828080292__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof CancellationException) {
              this.e1__1 = this._get_exception__1672948706_ro13he_k$();
              if (_get_isActive__4035225851(this.currentContext0__1)) {
                this._set_state__1256591060_i39zdo_k$(5);
                suspendResult = awaitAllPointersUp(this._this__1828080292__1, this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.e1__1;
              }
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 5:
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 9) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $forEachGestureCOROUTINE$4.$metadata$ = {
    simpleName: '$forEachGestureCOROUTINE$4',
    kind: 'class',
    interfaces: []
  };
  function $awaitAllPointersUpCOROUTINE$5(_this__1828080292, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $awaitAllPointersUpCOROUTINE$5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            if (!allPointersUp(this._this__1828080292__1)) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            break;
          case 1:
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny_0 = events._get_changes__3558428846_c6ikpe_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAny_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index_2_2 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item_3_3 = tmp0_fastAny_0.get_fkrdnv_k$(index_2_2);
                  if (item_3_3._get_pressed__849752879_e1x5in_k$()) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  } else {
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            } else {
            }

            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 5) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $awaitAllPointersUpCOROUTINE$5.$metadata$ = {
    simpleName: '$awaitAllPointersUpCOROUTINE$5',
    kind: 'class',
    interfaces: []
  };
  function _get_NoOpScrollScope__609368620() {
    init_properties_Scrollable_kt_3299778515();
    return NoOpScrollScope;
  }
  var NoOpScrollScope;
  function _get_ModifierLocalScrollableContainer__97930821() {
    init_properties_Scrollable_kt_3299778515();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function NoOpScrollScope$1() {
  }
  NoOpScrollScope$1.prototype.scrollBy_p9cup6_k$ = function (pixels) {
    return pixels;
  };
  NoOpScrollScope$1.$metadata$ = {
    kind: 'class',
    interfaces: [ScrollScope]
  };
  function ModifierLocalScrollableContainer$lambda() {
    return function () {
      return false;
    };
  }
  var properties_initialized_Scrollable_kt_445367799;
  function init_properties_Scrollable_kt_3299778515() {
    if (!properties_initialized_Scrollable_kt_445367799) {
      properties_initialized_Scrollable_kt_445367799 = true;
      NoOpScrollScope = new NoOpScrollScope$1();
      ModifierLocalScrollableContainer = modifierLocalOf(ModifierLocalScrollableContainer$lambda());
    }
  }
  function ScrollScope() {
  }
  ScrollScope.$metadata$ = {
    simpleName: 'ScrollScope',
    kind: 'interface',
    interfaces: []
  };
  function _get_NoPressGesture__2681126628() {
    init_properties_TapGestureDetector_kt_578192974();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  PressGestureScope.$metadata$ = {
    simpleName: 'PressGestureScope',
    kind: 'interface',
    interfaces: [Density]
  };
  function awaitFirstDown(_this__1828080292, requireUnconsumed, $cont) {
    return awaitFirstDownOnPass(_this__1828080292, PointerEventPass_Main_getInstance(), requireUnconsumed, $cont);
  }
  function awaitFirstDown$default(_this__1828080292, requireUnconsumed, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requireUnconsumed = true;
    return awaitFirstDown(_this__1828080292, requireUnconsumed, $cont);
  }
  function awaitFirstDownOnPass(_this__1828080292, pass, requireUnconsumed, $cont) {
    var tmp = new $awaitFirstDownOnPassCOROUTINE$6(_this__1828080292, pass, requireUnconsumed, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPrimaryChangedDown(_this__1828080292, requireUnconsumed) {
    init_properties_TapGestureDetector_kt_578192974();
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_fastAll_0 = _this__1828080292._get_changes__3558428846_c6ikpe_k$();
      {
      }
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastAll_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_3 = tmp0_fastAll_0.get_fkrdnv_k$(index_2_2);
            {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = item_3_3._get_type__810427985_5aq6oo_k$() === Companion_getInstance_2()._get_Mouse__2522822636_5uxkc3_k$();
                break $l$block;
              }
              if (!tmp$ret$0) {
                tmp$ret$1 = false;
                break $l$block_1;
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = true;
      break $l$block_1;
    }
    var primaryButtonCausesDown = tmp$ret$1;
    var tmp$ret$3;
    $l$block_4: {
      var tmp1_fastAll_0 = _this__1828080292._get_changes__3558428846_c6ikpe_k$();
      {
      }
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp1_fastAll_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_2_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_3_0 = tmp1_fastAll_0.get_fkrdnv_k$(index_2_2_0);
            {
              var tmp$ret$2;
              $l$block_2: {
                tmp$ret$2 = requireUnconsumed ? changedToDown(item_3_3_0) : changedToDownIgnoreConsumed(item_3_3_0);
                break $l$block_2;
              }
              if (!tmp$ret$2) {
                tmp$ret$3 = false;
                break $l$block_4;
              } else {
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$3 = true;
      break $l$block_4;
    }
    var changedToDown_0 = tmp$ret$3;
    return changedToDown_0 ? _get_isPrimaryPressed__3891969153(_this__1828080292._get_buttons__1018006448_i0h12c_k$()) ? true : !primaryButtonCausesDown : false;
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  NoPressGesture$slambda.prototype.invoke_56pugh_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_rju3ym_k$($this$null, it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  NoPressGesture$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  NoPressGesture$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  NoPressGesture$slambda.prototype.create_rju3ym_k$ = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  NoPressGesture$slambda.$metadata$ = {
    simpleName: 'NoPressGesture$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [2]
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_56pugh_k$($this$null, it.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $awaitFirstDownOnPassCOROUTINE$6(_this__1828080292, pass, requireUnconsumed, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.pass_1 = pass;
    this.requireUnconsumed_1 = requireUnconsumed;
  }
  $awaitFirstDownOnPassCOROUTINE$6.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.awaitPointerEvent_sg5aej_k$(this.pass_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            if (!isPrimaryChangedDown(this.event0__1, this.requireUnconsumed_1)) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            return this.event0__1._get_changes__3558428846_c6ikpe_k$().get_fkrdnv_k$(0);
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
  $awaitFirstDownOnPassCOROUTINE$6.$metadata$ = {
    simpleName: '$awaitFirstDownOnPassCOROUTINE$6',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_TapGestureDetector_kt_1299007602;
  function init_properties_TapGestureDetector_kt_578192974() {
    if (!properties_initialized_TapGestureDetector_kt_1299007602) {
      properties_initialized_TapGestureDetector_kt_1299007602 = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function collectIsFocusedAsState$composable(_this__1828080292, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1452413326);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState$composable)');
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_1 = tmp0_remember$composable_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable)');
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_cache_0_3 = $composer_1;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_let_0_4 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp;
            if (false ? true : tmp0_let_0_4 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$0;
              $l$block: {
                var tmp0_return_7 = mutableStateOf$default(false, null, 2, null);
                tmp$ret$0 = tmp0_return_7;
                break $l$block;
              }
              var value_2_2_5 = tmp$ret$0;
              tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_5);
              tmp = value_2_2_5;
            } else {
              tmp = tmp0_let_0_4;
            }
            tmp$ret$1 = tmp;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var tmp_0 = tmp$ret$2;
        tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_2;
      }
      var tmp0_2 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0_2;
      break $l$block_3;
    }
    var isFocused = tmp$ret$4;
    LaunchedEffect$composable(_this__1828080292, collectIsFocusedAsState$composable$slambda_0(_this__1828080292, isFocused, null), $composer_0, 14 & $changed);
    var tmp0 = isFocused;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function Focus() {
    this.$stable_1 = 0;
  }
  Focus.$metadata$ = {
    simpleName: 'Focus',
    kind: 'class',
    interfaces: [FocusInteraction]
  };
  function Unfocus(focus) {
    this.focus_1 = focus;
    this.$stable_1 = 0;
  }
  Unfocus.prototype._get_focus__3238017529_hha3nr_k$ = function () {
    return this.focus_1;
  };
  Unfocus.$metadata$ = {
    simpleName: 'Unfocus',
    kind: 'class',
    interfaces: [FocusInteraction]
  };
  function FocusInteraction() {
  }
  FocusInteraction.$metadata$ = {
    simpleName: 'FocusInteraction',
    kind: 'interface',
    interfaces: [Interaction]
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = {
    simpleName: 'sam$kotlinx_coroutines_flow_FlowCollector$0',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.$focusInteractions_1 = $focusInteractions;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Focus) {
            this.$focusInteractions_1.add_1j60pz_k$(this.interaction_1);
            Unit_getInstance();
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.$focusInteractions_1.remove_8hbkc6_k$(this.interaction_1.focus_1);
              Unit_getInstance();
            } else {
            }
          }
          this.$isFocused_1._set_value__1325260276_x73o94_k$(!this.$focusInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda(this.$focusInteractions_1, this.$isFocused_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsFocusedAsState$composable$slambda$slambda.$metadata$ = {
    simpleName: 'collectIsFocusedAsState$composable$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsFocusedAsState$composable$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    this.$this_collectIsFocusedAsState$composable_1 = $this_collectIsFocusedAsState$composable;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsFocusedAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            var tmp_0 = this;
            tmp_0.focusInteractions0__1 = ArrayList_init_$Create$_0();
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_1 = this.$this_collectIsFocusedAsState$composable_1._get_interactions__2397966538_vdfb5i_k$();
            var tmp_2 = collectIsFocusedAsState$composable$slambda$slambda_0(this.focusInteractions0__1, this.$isFocused_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  collectIsFocusedAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$composable$slambda(this.$this_collectIsFocusedAsState$composable_1, this.$isFocused_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsFocusedAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsFocusedAsState$composable$slambda.$metadata$ = {
    simpleName: 'collectIsFocusedAsState$composable$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsFocusedAsState$composable$slambda_0($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable(_this__1828080292, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1621024626);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState$composable)');
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_1 = tmp0_remember$composable_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable)');
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_cache_0_3 = $composer_1;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_let_0_4 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp;
            if (false ? true : tmp0_let_0_4 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$0;
              $l$block: {
                var tmp0_return_7 = mutableStateOf$default(false, null, 2, null);
                tmp$ret$0 = tmp0_return_7;
                break $l$block;
              }
              var value_2_2_5 = tmp$ret$0;
              tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_5);
              tmp = value_2_2_5;
            } else {
              tmp = tmp0_let_0_4;
            }
            tmp$ret$1 = tmp;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var tmp_0 = tmp$ret$2;
        tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_2;
      }
      var tmp0_2 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0_2;
      break $l$block_3;
    }
    var isHovered = tmp$ret$4;
    LaunchedEffect$composable(_this__1828080292, collectIsHoveredAsState$composable$slambda_0(_this__1828080292, isHovered, null), $composer_0, 14 & $changed);
    var tmp0 = isHovered;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function Enter() {
    this.$stable_1 = 0;
  }
  Enter.$metadata$ = {
    simpleName: 'Enter',
    kind: 'class',
    interfaces: [HoverInteraction]
  };
  function Exit(enter) {
    this.enter_1 = enter;
    this.$stable_1 = 0;
  }
  Exit.prototype._get_enter__3208955897_hykzrb_k$ = function () {
    return this.enter_1;
  };
  Exit.$metadata$ = {
    simpleName: 'Exit',
    kind: 'class',
    interfaces: [HoverInteraction]
  };
  function HoverInteraction() {
  }
  HoverInteraction.$metadata$ = {
    simpleName: 'HoverInteraction',
    kind: 'interface',
    interfaces: [Interaction]
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = {
    simpleName: 'sam$kotlinx_coroutines_flow_FlowCollector$0',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.$hoverInteractions_1 = $hoverInteractions;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$hoverInteractions_1.add_1j60pz_k$(this.interaction_1);
            Unit_getInstance();
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$hoverInteractions_1.remove_8hbkc6_k$(this.interaction_1.enter_1);
              Unit_getInstance();
            } else {
            }
          }
          this.$isHovered_1._set_value__1325260276_x73o94_k$(!this.$hoverInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda(this.$hoverInteractions_1, this.$isHovered_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsHoveredAsState$composable$slambda$slambda.$metadata$ = {
    simpleName: 'collectIsHoveredAsState$composable$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsHoveredAsState$composable$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    this.$this_collectIsHoveredAsState$composable_1 = $this_collectIsHoveredAsState$composable;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsHoveredAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            var tmp_0 = this;
            tmp_0.hoverInteractions0__1 = ArrayList_init_$Create$_0();
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_1 = this.$this_collectIsHoveredAsState$composable_1._get_interactions__2397966538_vdfb5i_k$();
            var tmp_2 = collectIsHoveredAsState$composable$slambda$slambda_0(this.hoverInteractions0__1, this.$isHovered_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  collectIsHoveredAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$composable$slambda(this.$this_collectIsHoveredAsState$composable_1, this.$isHovered_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsHoveredAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsHoveredAsState$composable$slambda.$metadata$ = {
    simpleName: 'collectIsHoveredAsState$composable$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsHoveredAsState$composable$slambda_0($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Interaction() {
  }
  Interaction.$metadata$ = {
    simpleName: 'Interaction',
    kind: 'interface',
    interfaces: []
  };
  function InteractionSource() {
  }
  InteractionSource.$metadata$ = {
    simpleName: 'InteractionSource',
    kind: 'interface',
    interfaces: []
  };
  function collectIsPressedAsState$composable(_this__1828080292, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1873825817);
    sourceInformation($composer_0, 'C(collectIsPressedAsState$composable)');
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_1 = tmp0_remember$composable_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable)');
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_cache_0_3 = $composer_1;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_let_0_4 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp;
            if (false ? true : tmp0_let_0_4 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$0;
              $l$block: {
                var tmp0_return_7 = mutableStateOf$default(false, null, 2, null);
                tmp$ret$0 = tmp0_return_7;
                break $l$block;
              }
              var value_2_2_5 = tmp$ret$0;
              tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_5);
              tmp = value_2_2_5;
            } else {
              tmp = tmp0_let_0_4;
            }
            tmp$ret$1 = tmp;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var tmp_0 = tmp$ret$2;
        tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_2;
      }
      var tmp0_2 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0_2;
      break $l$block_3;
    }
    var isPressed = tmp$ret$4;
    LaunchedEffect$composable(_this__1828080292, collectIsPressedAsState$composable$slambda_0(_this__1828080292, isPressed, null), $composer_0, 14 & $changed);
    var tmp0 = isPressed;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function Press(pressPosition) {
    this.pressPosition_1 = pressPosition;
    this.$stable_1 = 0;
  }
  Press.prototype._get_pressPosition__2897466309_lp6amx_k$ = function () {
    return this.pressPosition_1;
  };
  Press.$metadata$ = {
    simpleName: 'Press',
    kind: 'class',
    interfaces: [PressInteraction]
  };
  function Release(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  Release.prototype._get_press__3527137262_cp59g2_k$ = function () {
    return this.press_1;
  };
  Release.$metadata$ = {
    simpleName: 'Release',
    kind: 'class',
    interfaces: [PressInteraction]
  };
  function Cancel(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  Cancel.prototype._get_press__3527137262_cp59g2_k$ = function () {
    return this.press_1;
  };
  Cancel.$metadata$ = {
    simpleName: 'Cancel',
    kind: 'class',
    interfaces: [PressInteraction]
  };
  function PressInteraction() {
  }
  PressInteraction.$metadata$ = {
    simpleName: 'PressInteraction',
    kind: 'interface',
    interfaces: [Interaction]
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.$metadata$ = {
    simpleName: 'sam$kotlinx_coroutines_flow_FlowCollector$0',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.$pressInteractions_1 = $pressInteractions;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        if (tmp === 0) {
          this._set_exceptionState__118868437_8fc1n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$pressInteractions_1.add_1j60pz_k$(this.interaction_1);
            Unit_getInstance();
          } else {
            if (tmp0_subject instanceof Release) {
              this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
              Unit_getInstance();
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
                Unit_getInstance();
              } else {
              }
            }
          }
          this.$isPressed_1._set_value__1325260276_x73o94_k$(!this.$pressInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsPressedAsState$composable$slambda$slambda(this.$pressInteractions_1, this.$isPressed_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsPressedAsState$composable$slambda$slambda.$metadata$ = {
    simpleName: 'collectIsPressedAsState$composable$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsPressedAsState$composable$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    this.$this_collectIsPressedAsState$composable_1 = $this_collectIsPressedAsState$composable;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectIsPressedAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            var tmp_0 = this;
            tmp_0.pressInteractions0__1 = ArrayList_init_$Create$_0();
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_1 = this.$this_collectIsPressedAsState$composable_1._get_interactions__2397966538_vdfb5i_k$();
            var tmp_2 = collectIsPressedAsState$composable$slambda$slambda_0(this.pressInteractions0__1, this.$isPressed_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  collectIsPressedAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$composable$slambda(this.$this_collectIsPressedAsState$composable_1, this.$isPressed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsPressedAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsPressedAsState$composable$slambda.$metadata$ = {
    simpleName: 'collectIsPressedAsState$composable$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function collectIsPressedAsState$composable$slambda_0($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _get_InterruptionSpec__2254944907() {
    init_properties_LazyListItemPlacementAnimator_kt_102755341();
    return InterruptionSpec;
  }
  var InterruptionSpec;
  var properties_initialized_LazyListItemPlacementAnimator_kt_968305513;
  function init_properties_LazyListItemPlacementAnimator_kt_102755341() {
    if (!properties_initialized_LazyListItemPlacementAnimator_kt_968305513) {
      properties_initialized_LazyListItemPlacementAnimator_kt_968305513 = true;
      InterruptionSpec = spring$default(0.0, Spring_getInstance()._get_StiffnessMediumLow__2033407051_xmmyx7_k$(), new IntOffset(_get_VisibilityThreshold__3713836120(Companion_getInstance_3())), 1, null);
    }
  }
  function _get_VisibleItemsSlidingWindowSize__87632128() {
    return VisibleItemsSlidingWindowSize;
  }
  var VisibleItemsSlidingWindowSize;
  function _get_ExtraItemsNearTheSlidingWindow__64484294() {
    return ExtraItemsNearTheSlidingWindow;
  }
  var ExtraItemsNearTheSlidingWindow;
  function _get_TargetDistance__645197317() {
    init_properties_LazyListScrolling_kt_2355926321();
    return TargetDistance;
  }
  var TargetDistance;
  function _get_BoundDistance__1021649854() {
    init_properties_LazyListScrolling_kt_2355926321();
    return BoundDistance;
  }
  var BoundDistance;
  var properties_initialized_LazyListScrolling_kt_1547894413;
  function init_properties_LazyListScrolling_kt_2355926321() {
    if (!properties_initialized_LazyListScrolling_kt_1547894413) {
      properties_initialized_LazyListScrolling_kt_1547894413 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(2500);
        break $l$block;
      }
      TargetDistance = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(1500);
        break $l$block_0;
      }
      BoundDistance = tmp$ret$0_0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_InterruptionSpec__2254944907_0() {
    init_properties_LazyGridItemPlacementAnimator_kt_6442677();
    return InterruptionSpec_0;
  }
  var InterruptionSpec_0;
  var properties_initialized_LazyGridItemPlacementAnimator_kt_871992849;
  function init_properties_LazyGridItemPlacementAnimator_kt_6442677() {
    if (!properties_initialized_LazyGridItemPlacementAnimator_kt_871992849) {
      properties_initialized_LazyGridItemPlacementAnimator_kt_871992849 = true;
      InterruptionSpec_0 = spring$default(0.0, Spring_getInstance()._get_StiffnessMediumLow__2033407051_xmmyx7_k$(), new IntOffset(_get_VisibilityThreshold__3713836120(Companion_getInstance_3())), 1, null);
    }
  }
  function _get_VisibleItemsSlidingWindowSize__87632128_0() {
    return VisibleItemsSlidingWindowSize_0;
  }
  var VisibleItemsSlidingWindowSize_0;
  function _get_ExtraItemsNearTheSlidingWindow__64484294_0() {
    return ExtraItemsNearTheSlidingWindow_0;
  }
  var ExtraItemsNearTheSlidingWindow_0;
  function _get_TargetDistance__645197317_0() {
    init_properties_LazyGridScrolling_kt_2456794073();
    return TargetDistance_0;
  }
  var TargetDistance_0;
  function _get_BoundDistance__1021649854_0() {
    init_properties_LazyGridScrolling_kt_2456794073();
    return BoundDistance_0;
  }
  var BoundDistance_0;
  var properties_initialized_LazyGridScrolling_kt_1648762165;
  function init_properties_LazyGridScrolling_kt_2456794073() {
    if (!properties_initialized_LazyGridScrolling_kt_1648762165) {
      properties_initialized_LazyGridScrolling_kt_1648762165 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(2500);
        break $l$block;
      }
      TargetDistance_0 = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(1500);
        break $l$block_0;
      }
      BoundDistance_0 = tmp$ret$0_0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_ModifierLocalPinnableParent__3095077120() {
    init_properties_PinnableParent_kt_2045748061();
    return ModifierLocalPinnableParent;
  }
  var ModifierLocalPinnableParent;
  function PinnedItemsHandle() {
  }
  PinnedItemsHandle.$metadata$ = {
    simpleName: 'PinnedItemsHandle',
    kind: 'interface',
    interfaces: []
  };
  function PinnableParent() {
  }
  PinnableParent.$metadata$ = {
    simpleName: 'PinnableParent',
    kind: 'interface',
    interfaces: []
  };
  function ModifierLocalPinnableParent$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_PinnableParent_kt_2999261057;
  function init_properties_PinnableParent_kt_2045748061() {
    if (!properties_initialized_PinnableParent_kt_2999261057) {
      properties_initialized_PinnableParent_kt_2999261057 = true;
      ModifierLocalPinnableParent = modifierLocalOf(ModifierLocalPinnableParent$lambda());
    }
  }
  function _get_ModifierLocalBringIntoViewParent__282515806() {
    init_properties_BringIntoView_kt_1550103101();
    return ModifierLocalBringIntoViewParent;
  }
  var ModifierLocalBringIntoViewParent;
  function BringIntoViewParent() {
  }
  BringIntoViewParent.$metadata$ = {
    simpleName: 'BringIntoViewParent',
    kind: 'interface',
    interfaces: []
  };
  function ModifierLocalBringIntoViewParent$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_BringIntoView_kt_1857956249;
  function init_properties_BringIntoView_kt_1550103101() {
    if (!properties_initialized_BringIntoView_kt_1857956249) {
      properties_initialized_BringIntoView_kt_1857956249 = true;
      ModifierLocalBringIntoViewParent = modifierLocalOf(ModifierLocalBringIntoViewParent$lambda());
    }
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.topStart_1 = topStart;
    this.topEnd_1 = topEnd;
    this.bottomEnd_1 = bottomEnd;
    this.bottomStart_1 = bottomStart;
    this.$stable_1 = 0;
  }
  CornerBasedShape.prototype._get_topStart__1256481118_ks2r1a_k$ = function () {
    return this.topStart_1;
  };
  CornerBasedShape.prototype._get_topEnd__1145017477_ixpp51_k$ = function () {
    return this.topEnd_1;
  };
  CornerBasedShape.prototype._get_bottomEnd__1304200609_lkhjmp_k$ = function () {
    return this.bottomEnd_1;
  };
  CornerBasedShape.prototype._get_bottomStart__3907615610_6emah2_k$ = function () {
    return this.bottomStart_1;
  };
  CornerBasedShape.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var topStart = this.topStart_1.toPx_m7y0r2_k$(size, density);
    var topEnd = this.topEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomEnd = this.bottomEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomStart = this.bottomStart_1.toPx_m7y0r2_k$(size, density);
    var minDimension = _Size___get_minDimension__impl__4021532005(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    {
      var tmp0_require_0 = ((topStart >= 0.0 ? topEnd >= 0.0 : false) ? bottomEnd >= 0.0 : false) ? bottomStart >= 0.0 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.createOutline_awgnns_k$(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  CornerBasedShape.prototype.copy$default_uy12l8_k$ = function (topStart, topEnd, bottomEnd, bottomStart, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      topStart = this.topStart_1;
    if (!(($mask0 & 2) === 0))
      topEnd = this.topEnd_1;
    if (!(($mask0 & 4) === 0))
      bottomEnd = this.bottomEnd_1;
    if (!(($mask0 & 8) === 0))
      bottomStart = this.bottomStart_1;
    return $handler == null ? this.copy_4mzu9h_k$(topStart, topEnd, bottomEnd, bottomStart) : $handler(topStart, topEnd, bottomEnd, bottomStart);
  };
  CornerBasedShape.prototype.copy_ymfmd5_k$ = function (all) {
    return this.copy_4mzu9h_k$(all, all, all, all);
  };
  CornerBasedShape.$metadata$ = {
    simpleName: 'CornerBasedShape',
    kind: 'class',
    interfaces: [Shape]
  };
  function _get_ZeroCornerSize__1035498733() {
    init_properties_CornerSize_kt_3457188644();
    return ZeroCornerSize;
  }
  var ZeroCornerSize;
  function CornerSize() {
  }
  CornerSize.$metadata$ = {
    simpleName: 'CornerSize',
    kind: 'interface',
    interfaces: []
  };
  function CornerSize_0(percent) {
    init_properties_CornerSize_kt_3457188644();
    return new PercentCornerSize(percent);
  }
  function _get_percent__2554101612($this) {
    return $this.percent_1;
  }
  function component1($this) {
    return $this.percent_1;
  }
  function PercentCornerSize(percent) {
    this.percent_1 = percent;
    if (this.percent_1 < 0 ? true : this.percent_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  PercentCornerSize.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4021532005(shapeSize) * (this.percent_1 / 100.0);
  };
  PercentCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + this.percent_1 + '%)';
  };
  PercentCornerSize.prototype._get_valueOverride__2455743508_uf0y5o_k$ = function () {
    return '' + this.percent_1 + '%';
  };
  PercentCornerSize.prototype.copy_i912ft_k$ = function (percent) {
    return new PercentCornerSize(percent);
  };
  PercentCornerSize.prototype.copy$default_iojlsq_k$ = function (percent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      percent = this.percent_1;
    return this.copy_i912ft_k$(percent);
  };
  PercentCornerSize.prototype.hashCode = function () {
    return getNumberHashCode(this.percent_1);
  };
  PercentCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.percent_1, tmp0_other_with_cast.percent_1))
      return false;
    return true;
  };
  PercentCornerSize.$metadata$ = {
    simpleName: 'PercentCornerSize',
    kind: 'class',
    interfaces: [CornerSize, InspectableValue]
  };
  function CornerSize_1(size) {
    init_properties_CornerSize_kt_3457188644();
    return new DpCornerSize(size);
  }
  function _get_size__809037418($this) {
    return $this.size_1;
  }
  function component1_0($this) {
    return $this.size_1;
  }
  function DpCornerSize(size) {
    this.size_1 = size;
  }
  DpCornerSize.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = density.toPx_u0ojv5_k$(this.size_1);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  DpCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__3303478217(this.size_1) + '.dp)';
  };
  DpCornerSize.prototype._get_valueOverride__2455743508_iftqhb_k$ = function () {
    return this.size_1;
  };
  DpCornerSize.prototype._get_valueOverride__2455743508_uf0y5o_k$ = function () {
    return new Dp(this._get_valueOverride__2455743508_iftqhb_k$());
  };
  DpCornerSize.prototype.copy_ptxaur_k$ = function (size) {
    return new DpCornerSize(size);
  };
  DpCornerSize.prototype.copy$default_xu01fx_k$ = function (size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = this.size_1;
    return this.copy_ptxaur_k$(size);
  };
  DpCornerSize.prototype.hashCode = function () {
    return Dp__hashCode_impl_1749449350(this.size_1);
  };
  DpCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  DpCornerSize.$metadata$ = {
    simpleName: 'DpCornerSize',
    kind: 'class',
    interfaces: [CornerSize, InspectableValue]
  };
  function ZeroCornerSize$1() {
  }
  ZeroCornerSize$1.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    return 0.0;
  };
  ZeroCornerSize$1.prototype.toString = function () {
    return 'ZeroCornerSize';
  };
  ZeroCornerSize$1.prototype._get_valueOverride__2455743508_uf0y5o_k$ = function () {
    return 'ZeroCornerSize';
  };
  ZeroCornerSize$1.$metadata$ = {
    kind: 'class',
    interfaces: [CornerSize, InspectableValue]
  };
  var properties_initialized_CornerSize_kt_602777928;
  function init_properties_CornerSize_kt_3457188644() {
    if (!properties_initialized_CornerSize_kt_602777928) {
      properties_initialized_CornerSize_kt_602777928 = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function _get_CircleShape__3698163488() {
    init_properties_RoundedCornerShape_kt_3233713691();
    return CircleShape;
  }
  var CircleShape;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
    this.$stable_2 = 0;
  }
  RoundedCornerShape.prototype.createOutline_awgnns_k$ = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect(size));
    } else {
      var tmp_0 = toRect(size);
      var tmp_1 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd;
      var tmp_2 = CornerRadius$default(tmp_1, 0.0, 2, null);
      var tmp_3 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart;
      var tmp_4 = CornerRadius$default(tmp_3, 0.0, 2, null);
      var tmp_5 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart;
      var tmp_6 = CornerRadius$default(tmp_5, 0.0, 2, null);
      var tmp_7 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd;
      tmp = new Rounded(RoundRect(tmp_0, tmp_2, tmp_4, tmp_6, CornerRadius$default(tmp_7, 0.0, 2, null)));
    }
    return tmp;
  };
  RoundedCornerShape.prototype.copy_4mzu9h_k$ = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  RoundedCornerShape.prototype.toString = function () {
    return 'RoundedCornerShape(topStart = ' + this._get_topStart__1256481118_ks2r1a_k$() + ', topEnd = ' + this._get_topEnd__1145017477_ixpp51_k$() + ', bottomEnd = ' + ('' + this._get_bottomEnd__1304200609_lkhjmp_k$() + ', bottomStart = ' + this._get_bottomStart__3907615610_6emah2_k$() + ')');
  };
  RoundedCornerShape.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    else {
    }
    if (!equals(this._get_topStart__1256481118_ks2r1a_k$(), other._get_topStart__1256481118_ks2r1a_k$()))
      return false;
    if (!equals(this._get_topEnd__1145017477_ixpp51_k$(), other._get_topEnd__1145017477_ixpp51_k$()))
      return false;
    if (!equals(this._get_bottomEnd__1304200609_lkhjmp_k$(), other._get_bottomEnd__1304200609_lkhjmp_k$()))
      return false;
    if (!equals(this._get_bottomStart__3907615610_6emah2_k$(), other._get_bottomStart__3907615610_6emah2_k$()))
      return false;
    return true;
  };
  RoundedCornerShape.prototype.hashCode = function () {
    var result = hashCode(this._get_topStart__1256481118_ks2r1a_k$());
    result = imul(31, result) + hashCode(this._get_topEnd__1145017477_ixpp51_k$()) | 0;
    result = imul(31, result) + hashCode(this._get_bottomEnd__1304200609_lkhjmp_k$()) | 0;
    result = imul(31, result) + hashCode(this._get_bottomStart__3907615610_6emah2_k$()) | 0;
    return result;
  };
  RoundedCornerShape.$metadata$ = {
    simpleName: 'RoundedCornerShape',
    kind: 'class',
    interfaces: []
  };
  function RoundedCornerShape_0(percent) {
    init_properties_RoundedCornerShape_kt_3233713691();
    return RoundedCornerShape_1(CornerSize_0(percent));
  }
  function RoundedCornerShape_1(corner) {
    init_properties_RoundedCornerShape_kt_3233713691();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    init_properties_RoundedCornerShape_kt_3233713691();
    return RoundedCornerShape_1(CornerSize_1(size));
  }
  var properties_initialized_RoundedCornerShape_kt_3954528319;
  function init_properties_RoundedCornerShape_kt_3233713691() {
    if (!properties_initialized_RoundedCornerShape_kt_3954528319) {
      properties_initialized_RoundedCornerShape_kt_3954528319 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function BasicText$composable(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var $composer_0 = $composer;
    if (isTraceInProgress())
      traceEventStart(-1319034766, -1, -1, 'androidx.compose.foundation.text.BasicText$composable (BasicText.kt:58)');
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1319034766);
    sourceInformation($composer_0, 'C(BasicText$composable)P(6,1,5,2,3:c#ui.text.style.TextOverflow,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(onTextLayout_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__1925615142(overflow_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0._get_skipping__3591855738_bmm4cm_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0._get_defaultsInvalid__1114573164_ifl65o_k$()) {
        if (!(($default & 2) === 0))
          modifier_0._v = Companion_getInstance_1();
        if (!(($default & 4) === 0))
          style_0._v = Companion_getInstance_4()._get_Default__2834936080_o59jao_k$();
        if (!(($default & 8) === 0)) {
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_remember$composable_0 = $composer_0;
            var $composer_1 = tmp0_remember$composable_0;
            $composer_1.startReplaceableGroup_rp6air_k$(547886695);
            sourceInformation($composer_1, 'C(remember$composable)');
            var tmp$ret$3;
            $l$block_2: {
              var tmp1_cache_0_3 = $composer_1;
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_let_0_4 = tmp1_cache_0_3.rememberedValue_4dg93v_k$();
                {
                }
                var tmp$ret$1;
                $l$block_0: {
                  var tmp;
                  if (false ? true : tmp0_let_0_4 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_7 = BasicText$composable$lambda_0();
                      var tmp0_return_9 = tmp0_7;
                      tmp$ret$0 = tmp0_return_9;
                      break $l$block;
                    }
                    var value_2_2_5 = tmp$ret$0;
                    tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_5);
                    tmp = value_2_2_5;
                  } else {
                    tmp = tmp0_let_0_4;
                  }
                  tmp$ret$1 = tmp;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_0 = tmp$ret$2;
              tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
              break $l$block_2;
            }
            var tmp0_2 = tmp$ret$3;
            $composer_1.endReplaceableGroup_er37p7_k$();
            tmp$ret$4 = tmp0_2;
            break $l$block_3;
          }
          onTextLayout_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0))
          overflow_0._v = new TextOverflow(Companion_getInstance_5()._get_Clip__764781787_iwu6r1_k$());
        if (!(($default & 32) === 0))
          softWrap_0._v = true;
        if (!(($default & 64) === 0))
          maxLines_0._v = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      {
        var tmp1_require_0 = maxLines_0._v > 0;
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp0_return_3 = 'maxLines should be greater than 0';
            tmp$ret$5 = tmp0_return_3;
            break $l$block_4;
          }
          var message_1 = tmp$ret$5;
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        }
      }
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_$get_current$$composable_0_3378653600 = _get_LocalSelectionRegistrar__1215836965();
        var tmp3_$get_current$$composable_0_3123917055 = $composer_0;
        var $composer_1_0 = tmp3_$get_current$$composable_0_3123917055;
        var tmp0_2_0 = $composer_1_0.consume_93tbl1_k$(tmp2_$get_current$$composable_0_3378653600);
        tmp$ret$6 = tmp0_2_0;
        break $l$block_5;
      }
      var selectionRegistrar = tmp$ret$6;
      var tmp$ret$7;
      $l$block_6: {
        var tmp4_$get_current$$composable_0_2869180510 = _get_LocalDensity__4285485518();
        var tmp5_$get_current$$composable_0_2614443965 = $composer_0;
        var $composer_1_1 = tmp5_$get_current$$composable_0_2614443965;
        var tmp0_2_1 = $composer_1_1.consume_93tbl1_k$(tmp4_$get_current$$composable_0_2869180510);
        tmp$ret$7 = tmp0_2_1;
        break $l$block_6;
      }
      var density = tmp$ret$7;
      var tmp$ret$8;
      $l$block_7: {
        var tmp6_$get_current$$composable_0_2359707420 = _get_LocalFontFamilyResolver__1044470061();
        var tmp7_$get_current$$composable_0_2104970875 = $composer_0;
        var $composer_1_2 = tmp7_$get_current$$composable_0_2104970875;
        var tmp0_2_2 = $composer_1_2.consume_93tbl1_k$(tmp6_$get_current$$composable_0_2359707420);
        tmp$ret$8 = tmp0_2_2;
        break $l$block_7;
      }
      var fontFamilyResolver = tmp$ret$8;
      var tmp_1 = selectionIdSaver(selectionRegistrar);
      var selectableId = rememberSaveable$composable([text, selectionRegistrar], tmp_1, null, BasicText$composable$lambda_1(selectionRegistrar), $composer_0, 0, 4);
      var tmp$ret$13;
      $l$block_12: {
        var tmp8_remember$composable_0 = $composer_0;
        var $composer_1_3 = tmp8_remember$composable_0;
        $composer_1_3.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1_3, 'C(remember$composable)');
        var tmp$ret$12;
        $l$block_11: {
          var tmp1_cache_0_3_0 = $composer_1_3;
          var tmp$ret$11;
          $l$block_10: {
            var tmp0_let_0_4_0 = tmp1_cache_0_3_0.rememberedValue_4dg93v_k$();
            {
            }
            var tmp$ret$10;
            $l$block_9: {
              var tmp_2;
              if (false ? true : tmp0_let_0_4_0 === Companion_getInstance_0()._get_Empty__2291795012_x4mxmk_k$()) {
                var tmp$ret$9;
                $l$block_8: {
                  var tmp0_text_8 = AnnotatedString_init_$Create$(text, null, null, 6, null);
                  var tmp_3 = style_0._v;
                  var tmp_4 = maxLines_0._v;
                  var tmp_5 = softWrap_0._v;
                  var tmp_6 = overflow_0._v;
                  var tmp_7 = tmp_6 == null ? null : tmp_6.value_1;
                  var tmp0_return_7 = new TextController(new TextState(TextDelegate_init_$Create$(tmp0_text_8, tmp_3, tmp_4, tmp_5, tmp_7, density, fontFamilyResolver, null, 128, null), selectableId));
                  tmp$ret$9 = tmp0_return_7;
                  break $l$block_8;
                }
                var value_2_2_5_0 = tmp$ret$9;
                tmp1_cache_0_3_0.updateRememberedValue_l1colo_k$(value_2_2_5_0);
                tmp_2 = value_2_2_5_0;
              } else {
                tmp_2 = tmp0_let_0_4_0;
              }
              tmp$ret$10 = tmp_2;
              break $l$block_9;
            }
            tmp$ret$11 = tmp$ret$10;
            break $l$block_10;
          }
          var tmp_8 = tmp$ret$11;
          tmp$ret$12 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
          break $l$block_11;
        }
        var tmp0_2_3 = tmp$ret$12;
        $composer_1_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$13 = tmp0_2_3;
        break $l$block_12;
      }
      var controller = tmp$ret$13;
      var state = controller._get_state__3614753120_b8zcm8_k$();
      if (!$composer_0._get_inserting__3953988840_5n0cns_k$()) {
        var tmp0_current = state._get_textDelegate__3938886073_5w0213_k$();
        controller.setTextDelegate_gbukbh_k$(updateTextDelegate(tmp0_current, text, style_0._v, density, fontFamilyResolver, softWrap_0._v, overflow_0._v.value_1, maxLines_0._v));
      }
      state._set_onTextLayout__2692178465_ieu6im_k$(onTextLayout_0._v);
      controller.update_mq7n96_k$(selectionRegistrar);
      $composer_0.startReplaceableGroup_rp6air_k$(1388301740);
      if (!(selectionRegistrar == null)) {
        var tmp$ret$14;
        $l$block_13: {
          var tmp9_$get_current$$composable_0_1595497785 = _get_LocalTextSelectionColors__2397562471();
          var tmp10_$get_current$$composable_0_3801897285 = $composer_0;
          var $composer_1_4 = tmp10_$get_current$$composable_0_3801897285;
          var tmp0_2_4 = $composer_1_4.consume_93tbl1_k$(tmp9_$get_current$$composable_0_1595497785);
          tmp$ret$14 = tmp0_2_4;
          break $l$block_13;
        }
        state._set_selectionBackgroundColor__1600781646_rsiy3r_k$(tmp$ret$14._get_backgroundColor__3563895772_7iqy81_k$());
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      {
        var tmp11_Layout$composable_0 = modifier_0._v.then_5qw5wu_k$(controller._get_modifiers__4184320341_1tvjqj_k$());
        var tmp12_Layout$composable_0 = controller._get_measurePolicy__618430113_a873q9_k$();
        var tmp13_Layout$composable_0 = $composer_0;
        var modifier_1 = tmp11_Layout$composable_0;
        var $composer_2 = tmp13_Layout$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(310513410);
        sourceInformation($composer_2, 'C(Layout$composable)P(1)');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance_1();
        var tmp$ret$15;
        $l$block_14: {
          var tmp0_$get_current$$composable_0_4_4163171863 = _get_LocalDensity__4285485518();
          var tmp1_$get_current$$composable_0_5_4174487991 = $composer_2;
          var $composer_1_6 = tmp1_$get_current$$composable_0_5_4174487991;
          var tmp0_2_7 = $composer_1_6.consume_93tbl1_k$(tmp0_$get_current$$composable_0_4_4163171863);
          tmp$ret$15 = tmp0_2_7;
          break $l$block_14;
        }
        var density_3 = tmp$ret$15;
        var tmp$ret$16;
        $l$block_15: {
          var tmp2_$get_current$$composable_0_9_4185804122 = _get_LocalLayoutDirection__930718945();
          var tmp3_$get_current$$composable_0_10_1261708639 = $composer_2;
          var $composer_1_11 = tmp3_$get_current$$composable_0_10_1261708639;
          var tmp0_2_12 = $composer_1_11.consume_93tbl1_k$(tmp2_$get_current$$composable_0_9_4185804122);
          tmp$ret$16 = tmp0_2_12;
          break $l$block_15;
        }
        var layoutDirection_8 = tmp$ret$16;
        var tmp$ret$17;
        $l$block_16: {
          var tmp4_$get_current$$composable_0_14_1612508580 = _get_LocalViewConfiguration__3377266565();
          var tmp5_$get_current$$composable_0_15_1963308518 = $composer_2;
          var $composer_1_16 = tmp5_$get_current$$composable_0_15_1963308518;
          var tmp0_2_17 = $composer_1_16.consume_93tbl1_k$(tmp4_$get_current$$composable_0_14_1612508580);
          tmp$ret$17 = tmp0_2_17;
          break $l$block_16;
        }
        var viewConfiguration_13 = tmp$ret$17;
        var materialized_18 = materialize($composer_2, modifier_1);
        {
          var tmp6_ReusableComposeNode$composable_0_19 = Companion_getInstance_6()._get_Constructor__4117509367_2xnjex_k$();
          var tmp7_ReusableComposeNode$composable_0_20 = $composer_2;
          var $composer_1_21 = tmp7_ReusableComposeNode$composable_0_20;
          $composer_1_21.startReplaceableGroup_rp6air_k$(-1096955905);
          sourceInformation($composer_1_21, 'C(ReusableComposeNode$composable)');
          var tmp_9 = $composer_1_21._get_applier__3305520102_gd3aca_k$();
          if (!isInterface(tmp_9, Applier))
            invalidApplier();
          else {
          }
          $composer_1_21.startReusableNode_jk07k2_k$();
          if ($composer_1_21._get_inserting__3953988840_5n0cns_k$()) {
            var tmp_10 = $composer_1_21;
            tmp_10.createNode_13g769_k$(BasicText$composable$lambda_2(tmp6_ReusableComposeNode$composable_0_19));
          } else {
            $composer_1_21.useNode_inlzo8_k$();
          }
          $composer_1_21.disableReusing_y35tew_k$();
          {
            var tmp8__anonymous__3_23_1224317597 = _Updater___init__impl__2643161360($composer_1_21);
            Updater__set_impl_2407782900(tmp8__anonymous__3_23_1224317597, tmp12_Layout$composable_0, Companion_getInstance_6()._get_SetMeasurePolicy__1635018109_r1g41p_k$());
            Updater__set_impl_2407782900(tmp8__anonymous__3_23_1224317597, density_3, Companion_getInstance_6()._get_SetDensity__2660474629_r14um3_k$());
            Updater__set_impl_2407782900(tmp8__anonymous__3_23_1224317597, layoutDirection_8, Companion_getInstance_6()._get_SetLayoutDirection__3803499288_84lv54_k$());
            Updater__set_impl_2407782900(tmp8__anonymous__3_23_1224317597, viewConfiguration_13, Companion_getInstance_6()._get_SetViewConfiguration__2455204860_ufchs4_k$());
            Updater__set_impl_2407782900(tmp8__anonymous__3_23_1224317597, materialized_18, Companion_getInstance_6()._get_SetModifier__1456838520_o3d3so_k$());
          }
          $composer_1_21.enableReusing_6k309v_k$();
          $composer_1_21.endNode_3mkr10_k$();
          $composer_1_21.endReplaceableGroup_er37p7_k$();
        }
        $composer_2.endReplaceableGroup_er37p7_k$();
      }
    } else
      $composer_0.skipToGroupEnd_lhns3f_k$();
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(BasicText$composable$lambda$ref(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, $changed, $default));
    }
    if (isTraceInProgress())
      traceEventEnd();
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0());
  }
  function BasicText$composable$lambda($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default, $composer, $force) {
    return BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.value_1, $softWrap._v, $maxLines._v, $composer, $$changed | 1, $$default);
  }
  function BasicText$composable$lambda_0() {
    return function (it) {
      return Unit_getInstance();
    };
  }
  function BasicText$composable$lambda_1($selectionRegistrar) {
    return function () {
      var tmp0_safe_receiver = $selectionRegistrar;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nextSelectableId_50rfx8_k$();
      return tmp1_elvis_lhs == null ? Companion_getInstance_13()._get_InvalidSelectableId__1480596489_ohibk9_k$() : tmp1_elvis_lhs;
    };
  }
  function BasicText$composable$lambda_2($tmp6_ReusableComposeNode$composable_0_19) {
    return function () {
      return $tmp6_ReusableComposeNode$composable_0_19();
    };
  }
  function BasicText$composable$lambda$ref($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default) {
    return function (p0, p1) {
      BasicText$composable$lambda($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0() {
    return function (it) {
      return it;
    };
  }
  function _get_EmptyInlineContent__300006008() {
    init_properties_CoreText_kt_2470604462();
    return EmptyInlineContent;
  }
  var EmptyInlineContent;
  function TextController$measurePolicy$o$measure$lambda($placeables) {
    return function ($this$layout) {
      {
      }
      var inductionVariable = 0;
      var last = $placeables._get_size__809037418_ddoh9m_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = $placeables.get_fkrdnv_k$(index_2);
          {
            var placeable_5 = item_3.component1_7eebsc_k$();
            var position_6 = item_3.component2_7eebsb_k$().packedValue_1;
            $this$layout.place$default_i08ls_k$(placeable_5, position_6, 0.0, 2, null);
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_selectionRegistrar__524122614($this, _set____804775014) {
    $this.selectionRegistrar_1 = _set____804775014;
  }
  function _get_selectionRegistrar__2766818026($this) {
    return $this.selectionRegistrar_1;
  }
  function outOfBoundary($this, start, end) {
    var tmp0_safe_receiver = $this.state_1.layoutResult_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        var lastOffset_2 = tmp0_safe_receiver._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()._get_text__809840318_de5ose_k$().length;
        var rawStartOffset_3 = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(start);
        var rawEndOffset_4 = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(end);
        return (rawStartOffset_3 >= (lastOffset_2 - 1 | 0) ? rawEndOffset_4 >= (lastOffset_2 - 1 | 0) : false) ? true : rawStartOffset_3 < 0 ? rawEndOffset_4 < 0 : false;
      }
    }
    Unit_getInstance();
    return false;
  }
  function drawTextAndSelectionBehind(_this__1828080292, $this) {
    var tmp = graphicsLayer$default(_this__1828080292, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, null, null, false, null, null, null, 65535, null);
    return drawBehind(tmp, TextController$drawTextAndSelectionBehind$lambda($this));
  }
  function _get_coreModifiers__3429316820($this) {
    return $this.coreModifiers_1;
  }
  function _set_semanticsModifier__3191449057($this, _set____804775014) {
    $this.semanticsModifier_1 = _set____804775014;
  }
  function createSemanticsModifierFor($this, text) {
    var tmp = Companion_getInstance_1();
    return semantics$default(tmp, false, TextController$createSemanticsModifierFor$lambda(text, $this), 1, null);
  }
  function _set_selectionModifiers__3590809671($this, _set____804775014) {
    $this.selectionModifiers_1 = _set____804775014;
  }
  function _get_selectionModifiers__1538537787($this) {
    return $this.selectionModifiers_1;
  }
  function TextController$update$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
    this.dragTotalDistance_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
  }
  TextController$update$1.prototype._set_lastPosition__3007413080_3ac526_k$ = function (_set____804775014) {
    this.lastPosition_1 = _set____804775014;
  };
  TextController$update$1.prototype._get_lastPosition__3947565900_yn0gyo_k$ = function () {
    return this.lastPosition_1;
  };
  TextController$update$1.prototype._set_dragTotalDistance__1152147680_a1u7ty_k$ = function (_set____804775014) {
    this.dragTotalDistance_1 = _set____804775014;
  };
  TextController$update$1.prototype._get_dragTotalDistance__4133986668_ogqrcw_k$ = function () {
    return this.dragTotalDistance_1;
  };
  TextController$update$1.prototype.onDown_ofe487_k$ = function (point) {
  };
  TextController$update$1.prototype.onUp_30x6d3_k$ = function () {
  };
  TextController$update$1.prototype.onStart_b65n5j_k$ = function (startPoint) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return Unit_getInstance();
        if (outOfBoundary(this.this$0__1, startPoint, startPoint)) {
          this.$selectionRegistrar_1.notifySelectionUpdateSelectAll_uyvpea_k$(this.this$0__1.state_1.selectableId_1);
        } else {
          this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, startPoint, Companion_getInstance_12()._get_Word__783349857_cydwm9_k$());
        }
        this.lastPosition_1 = startPoint;
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
      return Unit_getInstance();
    this.dragTotalDistance_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
  };
  TextController$update$1.prototype.onDrag_jolxfr_k$ = function (delta) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return Unit_getInstance();
        if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
          return Unit_getInstance();
        var tmp0_this_2 = this;
        tmp0_this_2.dragTotalDistance_1 = Offset__plus_impl_737740800(tmp0_this_2.dragTotalDistance_1, delta);
        var newPosition_3 = Offset__plus_impl_737740800(this.lastPosition_1, this.dragTotalDistance_1);
        var tmp;
        if (!outOfBoundary(this.this$0__1, this.lastPosition_1, newPosition_3)) {
          var tmp1_$this_5 = this.$selectionRegistrar_1;
          var tmp2_previousPosition_6 = this.lastPosition_1;
          var tmp3_adjustment_7 = Companion_getInstance_12()._get_CharacterWithWordAccelerate__1048953723_hcipvf_k$();
          var consumed_4 = tmp1_$this_5.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, newPosition_3, tmp2_previousPosition_6, false, tmp3_adjustment_7);
          var tmp_0;
          if (consumed_4 === true) {
            this.lastPosition_1 = newPosition_3;
            this.dragTotalDistance_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  TextController$update$1.prototype.onStop_aip7ow_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  TextController$update$1.prototype.onCancel_q8fje0_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  TextController$update$1.$metadata$ = {
    kind: 'class',
    interfaces: [TextDragObserver]
  };
  function TextController$update$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  TextController$update$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.$this$pointerInput_1, this.this$0__1._get_longPressDragObserver__2976722688_lsuk1s_k$(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  TextController$update$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$slambda(this.this$0__1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  TextController$update$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  TextController$update$slambda.$metadata$ = {
    simpleName: 'TextController$update$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function TextController$update$slambda_0(this$0, resultContinuation) {
    var i = new TextController$update$slambda(this$0, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$mouseSelectionObserver$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
  }
  TextController$update$mouseSelectionObserver$1.prototype._set_lastPosition__3007413080_3ac526_k$ = function (_set____804775014) {
    this.lastPosition_1 = _set____804775014;
  };
  TextController$update$mouseSelectionObserver$1.prototype._get_lastPosition__3947565900_yn0gyo_k$ = function () {
    return this.lastPosition_1;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onExtend_dx8a28_k$ = function (downPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return false;
        var tmp$ret$0;
        $l$block: {
          {
          }
          var consumed_2_2 = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, downPosition, this.lastPosition_1, false, Companion_getInstance_12()._get_None__775034355_ctfoc3_k$());
          var tmp;
          if (consumed_2_2) {
            this.lastPosition_1 = downPosition;
            tmp = Unit_getInstance();
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
      }
    }
    Unit_getInstance();
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onExtendDrag_m0cr7o_k$ = function (dragPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return false;
        if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
          return false;
        var consumed_2 = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, this.lastPosition_1, false, Companion_getInstance_12()._get_None__775034355_ctfoc3_k$());
        var tmp;
        if (consumed_2) {
          this.lastPosition_1 = dragPosition;
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    return true;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onStart_i02yuj_k$ = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return false;
        this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, downPosition, adjustment);
        this.lastPosition_1 = downPosition;
        return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
      }
    }
    Unit_getInstance();
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onDrag_4lf411_k$ = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (!tmp0_safe_receiver._get_isAttached__3108096349_jmmrhf_k$())
          return false;
        if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
          return false;
        var tmp0_$this_3 = this.$selectionRegistrar_1;
        var tmp1_previousPosition_4 = this.lastPosition_1;
        var consumed_2 = tmp0_$this_3.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, tmp1_previousPosition_4, false, adjustment);
        var tmp;
        if (consumed_2 === true) {
          this.lastPosition_1 = dragPosition;
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    return true;
  };
  TextController$update$mouseSelectionObserver$1.$metadata$ = {
    kind: 'class',
    interfaces: [MouseSelectionObserver]
  };
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
        return THROW_ISE();
      });
      tmp$ret$0 = $currentMouseSelectionObserver$delegate._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$lambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  TextController$update$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = mouseSelectionDetector(this.$this$pointerInput_1, invoke$lambda(this.$currentMouseSelectionObserver$delegate_1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  TextController$update$lambda$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$lambda$slambda(this.$currentMouseSelectionObserver$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  TextController$update$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  TextController$update$lambda$slambda.$metadata$ = {
    simpleName: 'TextController$update$lambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function TextController$update$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      Unit_getInstance();
      $composer_0.startReplaceableGroup_rp6air_k$(-1008655751);
      var currentMouseSelectionObserver$delegate = rememberUpdatedState$composable($mouseSelectionObserver, $composer_0, 8);
      Unit_getInstance();
      var tmp0 = pointerInput($this$composed, Unit_getInstance(), TextController$update$lambda$slambda_0(currentMouseSelectionObserver$delegate, null));
      Unit_getInstance();
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function TextController$measurePolicy$1(this$0) {
    this.this$0__1 = this$0;
  }
  TextController$measurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__1828080292, measurables, constraints) {
    var layoutResult = this.this$0__1.state_1.textDelegate_1.layout_k0cayh_k$(constraints, _this__1828080292._get_layoutDirection__1820011324_u3l5q4_k$(), this.this$0__1.state_1.layoutResult_1);
    if (!equals(this.this$0__1.state_1.layoutResult_1, layoutResult)) {
      this.this$0__1.state_1.onTextLayout_1(layoutResult);
      var tmp0_safe_receiver = this.this$0__1.state_1.layoutResult_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          var tmp;
          if (!tmp0_safe_receiver._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$().equals(layoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$())) {
            var tmp0_safe_receiver_2 = this.this$0__1.selectionRegistrar_1;
            if (tmp0_safe_receiver_2 == null)
              null;
            else {
              tmp0_safe_receiver_2.notifySelectableChange_sw1lw8_k$(this.this$0__1.state_1.selectableId_1);
              Unit_getInstance();
            }
            tmp = Unit_getInstance();
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    this.this$0__1.state_1.layoutResult_1 = layoutResult;
    {
      var tmp0_check_0 = measurables._get_size__809037418_ddoh9m_k$() >= layoutResult._get_placeholderRects__1914564847_vnvrov_k$()._get_size__809037418_ddoh9m_k$();
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Check failed.';
            break $l$block_0;
          }
          var message_2_1 = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message_2_1));
        }
      }
    }
    var tmp$ret$10;
    $l$block_9: {
      var tmp1_fastMapIndexedNotNull_0 = layoutResult._get_placeholderRects__1914564847_vnvrov_k$();
      {
      }
      var target_1 = ArrayList_init_$Create$(tmp1_fastMapIndexedNotNull_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp1_fastMapIndexedNotNull_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_4 = tmp1_fastMapIndexedNotNull_0.get_fkrdnv_k$(index_2_3);
            {
              var tmp$ret$8;
              $l$block_7: {
                var tmp0_safe_receiver_7 = item_3_4;
                var tmp_0;
                if (tmp0_safe_receiver_7 == null) {
                  tmp_0 = null;
                } else {
                  var tmp$ret$7;
                  $l$block_6: {
                    {
                    }
                    var tmp$ret$6;
                    $l$block_5: {
                      var tmp_1 = measurables.get_fkrdnv_k$(index_2_3);
                      var tmp$ret$2;
                      $l$block_1: {
                        var tmp0_floor_0_2_8 = tmp0_safe_receiver_7._get_width__3719200459_9isoj9_k$();
                        tmp$ret$2 = Math.floor(tmp0_floor_0_2_8);
                        break $l$block_1;
                      }
                      var tmp_2 = numberToInt(tmp$ret$2);
                      var tmp$ret$3;
                      $l$block_2: {
                        var tmp1_floor_0_3_9 = tmp0_safe_receiver_7._get_height__3088126660_jyis70_k$();
                        tmp$ret$3 = Math.floor(tmp1_floor_0_3_9);
                        break $l$block_2;
                      }
                      var tmp_3 = tmp_1.measure_ikak0q_k$(Constraints$default(0, tmp_2, 0, numberToInt(tmp$ret$3), 5, null));
                      var tmp$ret$4;
                      $l$block_3: {
                        var tmp2_roundToInt_0_4_10 = tmp0_safe_receiver_7._get_left__802434852_d9qyp0_k$();
                        tmp$ret$4 = roundToInt(tmp2_roundToInt_0_4_10);
                        break $l$block_3;
                      }
                      var tmp_4 = tmp$ret$4;
                      var tmp$ret$5;
                      $l$block_4: {
                        var tmp3_roundToInt_0_5_11 = tmp0_safe_receiver_7._get_top__857417180_e6hfbw_k$();
                        tmp$ret$5 = roundToInt(tmp3_roundToInt_0_5_11);
                        break $l$block_4;
                      }
                      tmp$ret$6 = new Pair(tmp_3, new IntOffset(IntOffset_0(tmp_4, tmp$ret$5)));
                      break $l$block_5;
                    }
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_6;
                  }
                  tmp_0 = tmp$ret$7;
                }
                tmp$ret$8 = tmp_0;
                break $l$block_7;
              }
              var tmp0_safe_receiver_5_5 = tmp$ret$8;
              if (tmp0_safe_receiver_5_5 == null)
                null;
              else {
                var tmp$ret$9;
                $l$block_8: {
                  {
                  }
                  target_1.add_1j60pz_k$(tmp0_safe_receiver_5_5);
                  tmp$ret$9 = Unit_getInstance();
                  break $l$block_8;
                }
                Unit_getInstance();
              }
              Unit_getInstance();
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$10 = target_1;
      break $l$block_9;
    }
    var placeables = tmp$ret$10;
    var tmp_5 = _IntSize___get_width__impl__3492176776(layoutResult._get_size__809037418_alsm3t_k$());
    var tmp_6 = _IntSize___get_height__impl__2736509033(layoutResult._get_size__809037418_alsm3t_k$());
    var tmp_7 = _get_FirstBaseline__3266425468();
    var tmp$ret$11;
    $l$block_10: {
      var tmp2_roundToInt_0 = layoutResult._get_firstBaseline__4268418652_ft12c_k$();
      tmp$ret$11 = roundToInt(tmp2_roundToInt_0);
      break $l$block_10;
    }
    var tmp_8 = to(tmp_7, tmp$ret$11);
    var tmp_9 = _get_LastBaseline__1234672016();
    var tmp$ret$12;
    $l$block_11: {
      var tmp3_roundToInt_0 = layoutResult._get_lastBaseline__435710384_77esa8_k$();
      tmp$ret$12 = roundToInt(tmp3_roundToInt_0);
      break $l$block_11;
    }
    var tmp_10 = mapOf([tmp_8, to(tmp_9, tmp$ret$12)]);
    return _this__1828080292.layout_na8ejh_k$(tmp_5, tmp_6, tmp_10, TextController$measurePolicy$o$measure$lambda(placeables));
  };
  TextController$measurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = function (_this__1828080292, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__1828080292._get_layoutDirection__1820011324_u3l5q4_k$());
    return this.this$0__1.state_1.textDelegate_1._get_minIntrinsicWidth__3368612606_fbizuq_k$();
  };
  TextController$measurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = function (_this__1828080292, measurables, width) {
    var tmp = this.this$0__1.state_1.textDelegate_1;
    var tmp_0 = Constraints(0, width, 0, Companion_getInstance_8()._get_Infinity__264239747_4dbkoz_k$());
    var tmp_1 = _this__1828080292._get_layoutDirection__1820011324_u3l5q4_k$();
    return _IntSize___get_height__impl__2736509033(tmp.layout$default_3ijkau_k$(tmp_0, tmp_1, null, 4, null)._get_size__809037418_alsm3t_k$());
  };
  TextController$measurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = function (_this__1828080292, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__1828080292._get_layoutDirection__1820011324_u3l5q4_k$());
    return this.this$0__1.state_1.textDelegate_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
  };
  TextController$measurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = function (_this__1828080292, measurables, width) {
    var tmp = this.this$0__1.state_1.textDelegate_1;
    var tmp_0 = Constraints(0, width, 0, Companion_getInstance_8()._get_Infinity__264239747_4dbkoz_k$());
    var tmp_1 = _this__1828080292._get_layoutDirection__1820011324_u3l5q4_k$();
    return _IntSize___get_height__impl__2736509033(tmp.layout$default_3ijkau_k$(tmp_0, tmp_1, null, 4, null)._get_size__809037418_alsm3t_k$());
  };
  TextController$measurePolicy$1.$metadata$ = {
    kind: 'class',
    interfaces: [MeasurePolicy]
  };
  function TextController$drawTextAndSelectionBehind$lambda(this$0) {
    return function ($this$drawBehind) {
      var tmp0_safe_receiver = this$0.state_1.layoutResult_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp0_safe_receiver_4 = this$0.selectionRegistrar_1;
          var tmp1_safe_receiver_3 = tmp0_safe_receiver_4 == null ? null : tmp0_safe_receiver_4._get_subselections__2536953610_t2oc1i_k$();
          var selection_2 = tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3.get_1mhr4y_k$(this$0.state_1.selectableId_1);
          if (!(selection_2 == null)) {
            var tmp;
            if (!selection_2._get_handlesCrossed__2904598903_mzsf49_k$()) {
              tmp = selection_2._get_start__3614751663_b8zdqp_k$()._get_offset__736931032_c6qzmg_k$();
            } else {
              tmp = selection_2._get_end__856968982_e67thy_k$()._get_offset__736931032_c6qzmg_k$();
            }
            var start_5 = tmp;
            var tmp_0;
            if (!selection_2._get_handlesCrossed__2904598903_mzsf49_k$()) {
              tmp_0 = selection_2._get_end__856968982_e67thy_k$()._get_offset__736931032_c6qzmg_k$();
            } else {
              tmp_0 = selection_2._get_start__3614751663_b8zdqp_k$()._get_offset__736931032_c6qzmg_k$();
            }
            var end_6 = tmp_0;
            if (!(start_5 === end_6)) {
              var selectionPath_7 = tmp0_safe_receiver._get_multiParagraph__4254991478_nstje_k$().getPathForRange_i163f3_k$(start_5, end_6);
              var tmp_1 = this$0.state_1.selectionBackgroundColor_1;
              $this$drawBehind.drawPath$default_kl4g8r_k$(selectionPath_7, tmp_1, 0.0, null, null, null, 60, null);
            }
          }
          var tmp$ret$0;
          $l$block: {
            var tmp0__anonymous__1_8_1682274514 = $this$drawBehind._get_drawContext__260196134_4awwme_k$()._get_canvas__2836116659_o4k8ct_k$();
            tmp$ret$0 = Companion_getInstance_11().paint_ct2xtf_k$(tmp0__anonymous__1_8_1682274514, tmp0_safe_receiver);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function TextController$coreModifiers$lambda(this$0) {
    return function (it) {
      this$0.state_1.layoutCoordinates_1 = it;
      Unit_getInstance();
      var tmp;
      if (hasSelection(this$0.selectionRegistrar_1, this$0.state_1.selectableId_1)) {
        var newGlobalPosition = positionInWindow(it);
        if (!equals(newGlobalPosition, this$0.state_1.previousGlobalPosition_1)) {
          var tmp0_safe_receiver = this$0.selectionRegistrar_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.notifyPositionChange_v9it6j_k$(this$0.state_1.selectableId_1);
            Unit_getInstance();
          }
          Unit_getInstance();
        }
        this$0.state_1.previousGlobalPosition_1 = newGlobalPosition;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextController$createSemanticsModifierFor$lambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(this$0.state_1.layoutResult_1 == null)) {
        it.add_1j60pz_k$(ensureNotNull(this$0.state_1.layoutResult_1));
        Unit_getInstance();
        tmp = true;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function TextController$createSemanticsModifierFor$lambda($text, this$0) {
    return function ($this$semantics) {
      _set_text__595223242($this$semantics, $text);
      getTextLayoutResult$default($this$semantics, null, TextController$createSemanticsModifierFor$lambda$lambda(this$0), 1, null);
      return Unit_getInstance();
    };
  }
  function TextController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.state_1.layoutCoordinates_1;
    };
  }
  function TextController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.state_1.layoutResult_1;
    };
  }
  function TextController(state) {
    this.state_1 = state;
    this.selectionRegistrar_1 = null;
    var tmp = this;
    tmp.measurePolicy_1 = new TextController$measurePolicy$1(this);
    var tmp_0 = this;
    var tmp_1 = drawTextAndSelectionBehind(Companion_getInstance_1(), this);
    tmp_0.coreModifiers_1 = onGloballyPositioned(tmp_1, TextController$coreModifiers$lambda(this));
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1._get_text__809840318_de5ose_k$());
    this.selectionModifiers_1 = Companion_getInstance_1();
  }
  TextController.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  TextController.prototype._set_longPressDragObserver__3348960372_u67teq_k$ = function (_set____804775014) {
    this.longPressDragObserver_1 = _set____804775014;
  };
  TextController.prototype._get_longPressDragObserver__2976722688_lsuk1s_k$ = function () {
    var tmp = this.longPressDragObserver_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('longPressDragObserver');
    }
  };
  TextController.prototype.update_mq7n96_k$ = function (selectionRegistrar) {
    this.selectionRegistrar_1 = selectionRegistrar;
    var tmp = this;
    var tmp_0;
    if (!(selectionRegistrar == null)) {
      var tmp_1;
      if (_get_isInTouchMode__716242142()) {
        var tmp_2 = this;
        tmp_2.longPressDragObserver_1 = new TextController$update$1(this, selectionRegistrar);
        var tmp_3 = Companion_getInstance_1();
        var tmp_4 = this._get_longPressDragObserver__2976722688_lsuk1s_k$();
        tmp_1 = pointerInput(tmp_3, tmp_4, TextController$update$slambda_0(this, null));
      } else {
        var mouseSelectionObserver = new TextController$update$mouseSelectionObserver$1(this, selectionRegistrar);
        var tmp_5 = Companion_getInstance_1();
        tmp_1 = composed$composable$default(tmp_5, null, TextController$update$lambda(mouseSelectionObserver), 1, null);
      }
      var tmp_6 = tmp_1;
      var tmp_7 = _get_textPointerIcon__3170015304();
      tmp_0 = pointerHoverIcon$default(tmp_6, tmp_7, false, 2, null);
    } else {
      tmp_0 = Companion_getInstance_1();
    }
    tmp.selectionModifiers_1 = tmp_0;
  };
  TextController.prototype.setTextDelegate_gbukbh_k$ = function (textDelegate) {
    if (this.state_1.textDelegate_1 === textDelegate) {
      return Unit_getInstance();
    }
    this.state_1.textDelegate_1 = textDelegate;
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1._get_text__809840318_de5ose_k$());
  };
  TextController.prototype._get_measurePolicy__618430113_a873q9_k$ = function () {
    return this.measurePolicy_1;
  };
  TextController.prototype._get_semanticsModifier__1878320749_v2axkd_k$ = function () {
    return this.semanticsModifier_1;
  };
  TextController.prototype._get_modifiers__4184320341_1tvjqj_k$ = function () {
    return this.coreModifiers_1.then_5qw5wu_k$(this.semanticsModifier_1).then_5qw5wu_k$(this.selectionModifiers_1);
  };
  TextController.prototype.onRemembered_6899sq_k$ = function () {
    var tmp0_safe_receiver = this.selectionRegistrar_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        var tmp = this.state_1;
        var tmp_0 = TextController$onRemembered$lambda(this);
        tmp.selectable_1 = tmp0_safe_receiver.subscribe_dtjpsa_k$(new MultiWidgetSelectionDelegate(this.state_1.selectableId_1, tmp_0, TextController$onRemembered$lambda_0(this)));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  TextController.prototype.onForgotten_pcab12_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_safe_receiver_2 = this.selectionRegistrar_1;
          var tmp;
          if (tmp0_safe_receiver_2 == null) {
            tmp = null;
          } else {
            tmp0_safe_receiver_2.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
            tmp = Unit_getInstance();
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
    }
    Unit_getInstance();
  };
  TextController.prototype.onAbandoned_1hgzvg_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_safe_receiver_2 = this.selectionRegistrar_1;
          var tmp;
          if (tmp0_safe_receiver_2 == null) {
            tmp = null;
          } else {
            tmp0_safe_receiver_2.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
            tmp = Unit_getInstance();
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
    }
    Unit_getInstance();
  };
  TextController.$metadata$ = {
    simpleName: 'TextController',
    kind: 'class',
    interfaces: [RememberObserver]
  };
  function TextState$onTextLayout$lambda() {
    return function (it) {
      return Unit_getInstance();
    };
  }
  function TextState(textDelegate, selectableId) {
    this.textDelegate_1 = textDelegate;
    this.selectableId_1 = selectableId;
    var tmp = this;
    tmp.onTextLayout_1 = TextState$onTextLayout$lambda();
    this.selectable_1 = null;
    this.layoutCoordinates_1 = null;
    this.layoutResult_1 = null;
    this.previousGlobalPosition_1 = Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
    this.selectionBackgroundColor_1 = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
  }
  TextState.prototype._set_textDelegate__2998733253_5w90qa_k$ = function (_set____804775014) {
    this.textDelegate_1 = _set____804775014;
  };
  TextState.prototype._get_textDelegate__3938886073_5w0213_k$ = function () {
    return this.textDelegate_1;
  };
  TextState.prototype._get_selectableId__1895643994_vcm89m_k$ = function () {
    return this.selectableId_1;
  };
  TextState.prototype._set_onTextLayout__2692178465_ieu6im_k$ = function (_set____804775014) {
    this.onTextLayout_1 = _set____804775014;
  };
  TextState.prototype._get_onTextLayout__3632331285_ayil7v_k$ = function () {
    return this.onTextLayout_1;
  };
  TextState.prototype._set_selectable__3536185857_fso04z_k$ = function (_set____804775014) {
    this.selectable_1 = _set____804775014;
  };
  TextState.prototype._get_selectable__2625433333_rlzwnf_k$ = function () {
    return this.selectable_1;
  };
  TextState.prototype._set_layoutCoordinates__3534541940_g0rtjx_k$ = function (_set____804775014) {
    this.layoutCoordinates_1 = _set____804775014;
  };
  TextState.prototype._get_layoutCoordinates__2221413632_yajg8w_k$ = function () {
    return this.layoutCoordinates_1;
  };
  TextState.prototype._set_layoutResult__133082704_hkyuht_k$ = function (_set____804775014) {
    this.layoutResult_1 = _set____804775014;
  };
  TextState.prototype._get_layoutResult__1073235524_hqz5tw_k$ = function () {
    return this.layoutResult_1;
  };
  TextState.prototype._set_previousGlobalPosition__3906989492_e1g54q_k$ = function (_set____804775014) {
    this.previousGlobalPosition_1 = _set____804775014;
  };
  TextState.prototype._get_previousGlobalPosition__957555880_vcbxdw_k$ = function () {
    return this.previousGlobalPosition_1;
  };
  TextState.prototype._set_selectionBackgroundColor__1600781646_rsiy3r_k$ = function (_set____804775014) {
    this.selectionBackgroundColor_1 = _set____804775014;
  };
  TextState.prototype._get_selectionBackgroundColor__1873495874_ffjoyh_k$ = function () {
    return this.selectionBackgroundColor_1;
  };
  TextState.$metadata$ = {
    simpleName: 'TextState',
    kind: 'class',
    interfaces: []
  };
  function updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines) {
    init_properties_CoreText_kt_2470604462();
    var tmp;
    if ((((((!(current._get_text__809840318_de5ose_k$()._get_text__809840318_de5ose_k$() === text) ? true : !current._get_style__3615460416_b8k6v4_k$().equals(style)) ? true : !(current._get_softWrap__3697303223_9vu0jt_k$() === softWrap)) ? true : !(current._get_overflow__720882697_6b1p7f_k$() === overflow)) ? true : !(current._get_maxLines__694126384_bh9jcg_k$() === maxLines)) ? true : !equals(current._get_density__3015598889_l5pazb_k$(), density)) ? true : !(current._get_fontFamilyResolver__2595451122_s3uj2m_k$() === fontFamilyResolver)) {
      var tmp0_text = AnnotatedString_init_$Create$(text, null, null, 6, null);
      tmp = TextDelegate_init_$Create$(tmp0_text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, null, 128, null);
    } else {
      tmp = current;
    }
    return tmp;
  }
  function updateTextDelegate$default(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines, $mask0, $handler) {
    if (!(($mask0 & 32) === 0))
      softWrap = true;
    if (!(($mask0 & 64) === 0))
      overflow = Companion_getInstance_5()._get_Clip__764781787_iwu6r1_k$();
    if (!(($mask0 & 128) === 0))
      maxLines = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines);
  }
  var properties_initialized_CoreText_kt_2780483026;
  function init_properties_CoreText_kt_2470604462() {
    if (!properties_initialized_CoreText_kt_2780483026) {
      properties_initialized_CoreText_kt_2780483026 = true;
      EmptyInlineContent = new Pair(emptyList(), emptyList());
    }
  }
  var Handle_Cursor_instance;
  var Handle_SelectionStart_instance;
  var Handle_SelectionEnd_instance;
  function values() {
    return [Handle_Cursor_getInstance(), Handle_SelectionStart_getInstance(), Handle_SelectionEnd_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Cursor':
        return Handle_Cursor_getInstance();
      case 'SelectionStart':
        return Handle_SelectionStart_getInstance();
      case 'SelectionEnd':
        return Handle_SelectionEnd_getInstance();
      default:
        Handle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Handle_entriesInitialized;
  function Handle_initEntries() {
    if (Handle_entriesInitialized)
      return Unit_getInstance();
    Handle_entriesInitialized = true;
    Handle_Cursor_instance = new Handle('Cursor', 0);
    Handle_SelectionStart_instance = new Handle('SelectionStart', 1);
    Handle_SelectionEnd_instance = new Handle('SelectionEnd', 2);
  }
  function Handle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Handle.$metadata$ = {
    simpleName: 'Handle',
    kind: 'class',
    interfaces: []
  };
  function Handle_Cursor_getInstance() {
    Handle_initEntries();
    return Handle_Cursor_instance;
  }
  function Handle_SelectionStart_getInstance() {
    Handle_initEntries();
    return Handle_SelectionStart_instance;
  }
  function Handle_SelectionEnd_getInstance() {
    Handle_initEntries();
    return Handle_SelectionEnd_instance;
  }
  function InternalFoundationTextApi() {
  }
  InternalFoundationTextApi.prototype.equals = function (other) {
    if (!(other instanceof InternalFoundationTextApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalFoundationTextApi ? other : THROW_CCE();
    return true;
  };
  InternalFoundationTextApi.prototype.hashCode = function () {
    return 0;
  };
  InternalFoundationTextApi.prototype.toString = function () {
    return '@androidx.compose.foundation.text.InternalFoundationTextApi()';
  };
  InternalFoundationTextApi.$metadata$ = {
    simpleName: 'InternalFoundationTextApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  var KeyCommand_LEFT_CHAR_instance;
  var KeyCommand_RIGHT_CHAR_instance;
  var KeyCommand_RIGHT_WORD_instance;
  var KeyCommand_LEFT_WORD_instance;
  var KeyCommand_NEXT_PARAGRAPH_instance;
  var KeyCommand_PREV_PARAGRAPH_instance;
  var KeyCommand_LINE_START_instance;
  var KeyCommand_LINE_END_instance;
  var KeyCommand_LINE_LEFT_instance;
  var KeyCommand_LINE_RIGHT_instance;
  var KeyCommand_UP_instance;
  var KeyCommand_DOWN_instance;
  var KeyCommand_PAGE_UP_instance;
  var KeyCommand_PAGE_DOWN_instance;
  var KeyCommand_HOME_instance;
  var KeyCommand_END_instance;
  var KeyCommand_COPY_instance;
  var KeyCommand_PASTE_instance;
  var KeyCommand_CUT_instance;
  var KeyCommand_DELETE_PREV_CHAR_instance;
  var KeyCommand_DELETE_NEXT_CHAR_instance;
  var KeyCommand_DELETE_PREV_WORD_instance;
  var KeyCommand_DELETE_NEXT_WORD_instance;
  var KeyCommand_DELETE_FROM_LINE_START_instance;
  var KeyCommand_DELETE_TO_LINE_END_instance;
  var KeyCommand_SELECT_ALL_instance;
  var KeyCommand_SELECT_LEFT_CHAR_instance;
  var KeyCommand_SELECT_RIGHT_CHAR_instance;
  var KeyCommand_SELECT_UP_instance;
  var KeyCommand_SELECT_DOWN_instance;
  var KeyCommand_SELECT_PAGE_UP_instance;
  var KeyCommand_SELECT_PAGE_DOWN_instance;
  var KeyCommand_SELECT_HOME_instance;
  var KeyCommand_SELECT_END_instance;
  var KeyCommand_SELECT_LEFT_WORD_instance;
  var KeyCommand_SELECT_RIGHT_WORD_instance;
  var KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  var KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  var KeyCommand_SELECT_LINE_START_instance;
  var KeyCommand_SELECT_LINE_END_instance;
  var KeyCommand_SELECT_LINE_LEFT_instance;
  var KeyCommand_SELECT_LINE_RIGHT_instance;
  var KeyCommand_DESELECT_instance;
  var KeyCommand_NEW_LINE_instance;
  var KeyCommand_TAB_instance;
  var KeyCommand_UNDO_instance;
  var KeyCommand_REDO_instance;
  var KeyCommand_CHARACTER_PALETTE_instance;
  function values_0() {
    return [KeyCommand_LEFT_CHAR_getInstance(), KeyCommand_RIGHT_CHAR_getInstance(), KeyCommand_RIGHT_WORD_getInstance(), KeyCommand_LEFT_WORD_getInstance(), KeyCommand_NEXT_PARAGRAPH_getInstance(), KeyCommand_PREV_PARAGRAPH_getInstance(), KeyCommand_LINE_START_getInstance(), KeyCommand_LINE_END_getInstance(), KeyCommand_LINE_LEFT_getInstance(), KeyCommand_LINE_RIGHT_getInstance(), KeyCommand_UP_getInstance(), KeyCommand_DOWN_getInstance(), KeyCommand_PAGE_UP_getInstance(), KeyCommand_PAGE_DOWN_getInstance(), KeyCommand_HOME_getInstance(), KeyCommand_END_getInstance(), KeyCommand_COPY_getInstance(), KeyCommand_PASTE_getInstance(), KeyCommand_CUT_getInstance(), KeyCommand_DELETE_PREV_CHAR_getInstance(), KeyCommand_DELETE_NEXT_CHAR_getInstance(), KeyCommand_DELETE_PREV_WORD_getInstance(), KeyCommand_DELETE_NEXT_WORD_getInstance(), KeyCommand_DELETE_FROM_LINE_START_getInstance(), KeyCommand_DELETE_TO_LINE_END_getInstance(), KeyCommand_SELECT_ALL_getInstance(), KeyCommand_SELECT_LEFT_CHAR_getInstance(), KeyCommand_SELECT_RIGHT_CHAR_getInstance(), KeyCommand_SELECT_UP_getInstance(), KeyCommand_SELECT_DOWN_getInstance(), KeyCommand_SELECT_PAGE_UP_getInstance(), KeyCommand_SELECT_PAGE_DOWN_getInstance(), KeyCommand_SELECT_HOME_getInstance(), KeyCommand_SELECT_END_getInstance(), KeyCommand_SELECT_LEFT_WORD_getInstance(), KeyCommand_SELECT_RIGHT_WORD_getInstance(), KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance(), KeyCommand_SELECT_PREV_PARAGRAPH_getInstance(), KeyCommand_SELECT_LINE_START_getInstance(), KeyCommand_SELECT_LINE_END_getInstance(), KeyCommand_SELECT_LINE_LEFT_getInstance(), KeyCommand_SELECT_LINE_RIGHT_getInstance(), KeyCommand_DESELECT_getInstance(), KeyCommand_NEW_LINE_getInstance(), KeyCommand_TAB_getInstance(), KeyCommand_UNDO_getInstance(), KeyCommand_REDO_getInstance(), KeyCommand_CHARACTER_PALETTE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LEFT_CHAR':
        return KeyCommand_LEFT_CHAR_getInstance();
      case 'RIGHT_CHAR':
        return KeyCommand_RIGHT_CHAR_getInstance();
      case 'RIGHT_WORD':
        return KeyCommand_RIGHT_WORD_getInstance();
      case 'LEFT_WORD':
        return KeyCommand_LEFT_WORD_getInstance();
      case 'NEXT_PARAGRAPH':
        return KeyCommand_NEXT_PARAGRAPH_getInstance();
      case 'PREV_PARAGRAPH':
        return KeyCommand_PREV_PARAGRAPH_getInstance();
      case 'LINE_START':
        return KeyCommand_LINE_START_getInstance();
      case 'LINE_END':
        return KeyCommand_LINE_END_getInstance();
      case 'LINE_LEFT':
        return KeyCommand_LINE_LEFT_getInstance();
      case 'LINE_RIGHT':
        return KeyCommand_LINE_RIGHT_getInstance();
      case 'UP':
        return KeyCommand_UP_getInstance();
      case 'DOWN':
        return KeyCommand_DOWN_getInstance();
      case 'PAGE_UP':
        return KeyCommand_PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return KeyCommand_PAGE_DOWN_getInstance();
      case 'HOME':
        return KeyCommand_HOME_getInstance();
      case 'END':
        return KeyCommand_END_getInstance();
      case 'COPY':
        return KeyCommand_COPY_getInstance();
      case 'PASTE':
        return KeyCommand_PASTE_getInstance();
      case 'CUT':
        return KeyCommand_CUT_getInstance();
      case 'DELETE_PREV_CHAR':
        return KeyCommand_DELETE_PREV_CHAR_getInstance();
      case 'DELETE_NEXT_CHAR':
        return KeyCommand_DELETE_NEXT_CHAR_getInstance();
      case 'DELETE_PREV_WORD':
        return KeyCommand_DELETE_PREV_WORD_getInstance();
      case 'DELETE_NEXT_WORD':
        return KeyCommand_DELETE_NEXT_WORD_getInstance();
      case 'DELETE_FROM_LINE_START':
        return KeyCommand_DELETE_FROM_LINE_START_getInstance();
      case 'DELETE_TO_LINE_END':
        return KeyCommand_DELETE_TO_LINE_END_getInstance();
      case 'SELECT_ALL':
        return KeyCommand_SELECT_ALL_getInstance();
      case 'SELECT_LEFT_CHAR':
        return KeyCommand_SELECT_LEFT_CHAR_getInstance();
      case 'SELECT_RIGHT_CHAR':
        return KeyCommand_SELECT_RIGHT_CHAR_getInstance();
      case 'SELECT_UP':
        return KeyCommand_SELECT_UP_getInstance();
      case 'SELECT_DOWN':
        return KeyCommand_SELECT_DOWN_getInstance();
      case 'SELECT_PAGE_UP':
        return KeyCommand_SELECT_PAGE_UP_getInstance();
      case 'SELECT_PAGE_DOWN':
        return KeyCommand_SELECT_PAGE_DOWN_getInstance();
      case 'SELECT_HOME':
        return KeyCommand_SELECT_HOME_getInstance();
      case 'SELECT_END':
        return KeyCommand_SELECT_END_getInstance();
      case 'SELECT_LEFT_WORD':
        return KeyCommand_SELECT_LEFT_WORD_getInstance();
      case 'SELECT_RIGHT_WORD':
        return KeyCommand_SELECT_RIGHT_WORD_getInstance();
      case 'SELECT_NEXT_PARAGRAPH':
        return KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance();
      case 'SELECT_PREV_PARAGRAPH':
        return KeyCommand_SELECT_PREV_PARAGRAPH_getInstance();
      case 'SELECT_LINE_START':
        return KeyCommand_SELECT_LINE_START_getInstance();
      case 'SELECT_LINE_END':
        return KeyCommand_SELECT_LINE_END_getInstance();
      case 'SELECT_LINE_LEFT':
        return KeyCommand_SELECT_LINE_LEFT_getInstance();
      case 'SELECT_LINE_RIGHT':
        return KeyCommand_SELECT_LINE_RIGHT_getInstance();
      case 'DESELECT':
        return KeyCommand_DESELECT_getInstance();
      case 'NEW_LINE':
        return KeyCommand_NEW_LINE_getInstance();
      case 'TAB':
        return KeyCommand_TAB_getInstance();
      case 'UNDO':
        return KeyCommand_UNDO_getInstance();
      case 'REDO':
        return KeyCommand_REDO_getInstance();
      case 'CHARACTER_PALETTE':
        return KeyCommand_CHARACTER_PALETTE_getInstance();
      default:
        KeyCommand_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KeyCommand_entriesInitialized;
  function KeyCommand_initEntries() {
    if (KeyCommand_entriesInitialized)
      return Unit_getInstance();
    KeyCommand_entriesInitialized = true;
    KeyCommand_LEFT_CHAR_instance = new KeyCommand('LEFT_CHAR', 0, false);
    KeyCommand_RIGHT_CHAR_instance = new KeyCommand('RIGHT_CHAR', 1, false);
    KeyCommand_RIGHT_WORD_instance = new KeyCommand('RIGHT_WORD', 2, false);
    KeyCommand_LEFT_WORD_instance = new KeyCommand('LEFT_WORD', 3, false);
    KeyCommand_NEXT_PARAGRAPH_instance = new KeyCommand('NEXT_PARAGRAPH', 4, false);
    KeyCommand_PREV_PARAGRAPH_instance = new KeyCommand('PREV_PARAGRAPH', 5, false);
    KeyCommand_LINE_START_instance = new KeyCommand('LINE_START', 6, false);
    KeyCommand_LINE_END_instance = new KeyCommand('LINE_END', 7, false);
    KeyCommand_LINE_LEFT_instance = new KeyCommand('LINE_LEFT', 8, false);
    KeyCommand_LINE_RIGHT_instance = new KeyCommand('LINE_RIGHT', 9, false);
    KeyCommand_UP_instance = new KeyCommand('UP', 10, false);
    KeyCommand_DOWN_instance = new KeyCommand('DOWN', 11, false);
    KeyCommand_PAGE_UP_instance = new KeyCommand('PAGE_UP', 12, false);
    KeyCommand_PAGE_DOWN_instance = new KeyCommand('PAGE_DOWN', 13, false);
    KeyCommand_HOME_instance = new KeyCommand('HOME', 14, false);
    KeyCommand_END_instance = new KeyCommand('END', 15, false);
    KeyCommand_COPY_instance = new KeyCommand('COPY', 16, false);
    KeyCommand_PASTE_instance = new KeyCommand('PASTE', 17, true);
    KeyCommand_CUT_instance = new KeyCommand('CUT', 18, true);
    KeyCommand_DELETE_PREV_CHAR_instance = new KeyCommand('DELETE_PREV_CHAR', 19, true);
    KeyCommand_DELETE_NEXT_CHAR_instance = new KeyCommand('DELETE_NEXT_CHAR', 20, true);
    KeyCommand_DELETE_PREV_WORD_instance = new KeyCommand('DELETE_PREV_WORD', 21, true);
    KeyCommand_DELETE_NEXT_WORD_instance = new KeyCommand('DELETE_NEXT_WORD', 22, true);
    KeyCommand_DELETE_FROM_LINE_START_instance = new KeyCommand('DELETE_FROM_LINE_START', 23, true);
    KeyCommand_DELETE_TO_LINE_END_instance = new KeyCommand('DELETE_TO_LINE_END', 24, true);
    KeyCommand_SELECT_ALL_instance = new KeyCommand('SELECT_ALL', 25, false);
    KeyCommand_SELECT_LEFT_CHAR_instance = new KeyCommand('SELECT_LEFT_CHAR', 26, false);
    KeyCommand_SELECT_RIGHT_CHAR_instance = new KeyCommand('SELECT_RIGHT_CHAR', 27, false);
    KeyCommand_SELECT_UP_instance = new KeyCommand('SELECT_UP', 28, false);
    KeyCommand_SELECT_DOWN_instance = new KeyCommand('SELECT_DOWN', 29, false);
    KeyCommand_SELECT_PAGE_UP_instance = new KeyCommand('SELECT_PAGE_UP', 30, false);
    KeyCommand_SELECT_PAGE_DOWN_instance = new KeyCommand('SELECT_PAGE_DOWN', 31, false);
    KeyCommand_SELECT_HOME_instance = new KeyCommand('SELECT_HOME', 32, false);
    KeyCommand_SELECT_END_instance = new KeyCommand('SELECT_END', 33, false);
    KeyCommand_SELECT_LEFT_WORD_instance = new KeyCommand('SELECT_LEFT_WORD', 34, false);
    KeyCommand_SELECT_RIGHT_WORD_instance = new KeyCommand('SELECT_RIGHT_WORD', 35, false);
    KeyCommand_SELECT_NEXT_PARAGRAPH_instance = new KeyCommand('SELECT_NEXT_PARAGRAPH', 36, false);
    KeyCommand_SELECT_PREV_PARAGRAPH_instance = new KeyCommand('SELECT_PREV_PARAGRAPH', 37, false);
    KeyCommand_SELECT_LINE_START_instance = new KeyCommand('SELECT_LINE_START', 38, false);
    KeyCommand_SELECT_LINE_END_instance = new KeyCommand('SELECT_LINE_END', 39, false);
    KeyCommand_SELECT_LINE_LEFT_instance = new KeyCommand('SELECT_LINE_LEFT', 40, false);
    KeyCommand_SELECT_LINE_RIGHT_instance = new KeyCommand('SELECT_LINE_RIGHT', 41, false);
    KeyCommand_DESELECT_instance = new KeyCommand('DESELECT', 42, false);
    KeyCommand_NEW_LINE_instance = new KeyCommand('NEW_LINE', 43, true);
    KeyCommand_TAB_instance = new KeyCommand('TAB', 44, true);
    KeyCommand_UNDO_instance = new KeyCommand('UNDO', 45, true);
    KeyCommand_REDO_instance = new KeyCommand('REDO', 46, true);
    KeyCommand_CHARACTER_PALETTE_instance = new KeyCommand('CHARACTER_PALETTE', 47, true);
  }
  function KeyCommand(name, ordinal, editsText) {
    Enum.call(this, name, ordinal);
    this.editsText_1 = editsText;
  }
  KeyCommand.prototype._get_editsText__1518137499_p3uye3_k$ = function () {
    return this.editsText_1;
  };
  KeyCommand.$metadata$ = {
    simpleName: 'KeyCommand',
    kind: 'class',
    interfaces: []
  };
  function KeyCommand_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_CHAR_instance;
  }
  function KeyCommand_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_CHAR_instance;
  }
  function KeyCommand_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_WORD_instance;
  }
  function KeyCommand_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_WORD_instance;
  }
  function KeyCommand_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_START_instance;
  }
  function KeyCommand_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_END_instance;
  }
  function KeyCommand_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_LEFT_instance;
  }
  function KeyCommand_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_RIGHT_instance;
  }
  function KeyCommand_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UP_instance;
  }
  function KeyCommand_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DOWN_instance;
  }
  function KeyCommand_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_UP_instance;
  }
  function KeyCommand_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_DOWN_instance;
  }
  function KeyCommand_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_HOME_instance;
  }
  function KeyCommand_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_END_instance;
  }
  function KeyCommand_COPY_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_COPY_instance;
  }
  function KeyCommand_PASTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PASTE_instance;
  }
  function KeyCommand_CUT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CUT_instance;
  }
  function KeyCommand_DELETE_PREV_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_CHAR_instance;
  }
  function KeyCommand_DELETE_NEXT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_CHAR_instance;
  }
  function KeyCommand_DELETE_PREV_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_WORD_instance;
  }
  function KeyCommand_DELETE_NEXT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_WORD_instance;
  }
  function KeyCommand_DELETE_FROM_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_FROM_LINE_START_instance;
  }
  function KeyCommand_DELETE_TO_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_TO_LINE_END_instance;
  }
  function KeyCommand_SELECT_ALL_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_ALL_instance;
  }
  function KeyCommand_SELECT_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_CHAR_instance;
  }
  function KeyCommand_SELECT_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_CHAR_instance;
  }
  function KeyCommand_SELECT_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_UP_instance;
  }
  function KeyCommand_SELECT_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_DOWN_instance;
  }
  function KeyCommand_SELECT_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_UP_instance;
  }
  function KeyCommand_SELECT_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_DOWN_instance;
  }
  function KeyCommand_SELECT_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_HOME_instance;
  }
  function KeyCommand_SELECT_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_END_instance;
  }
  function KeyCommand_SELECT_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_WORD_instance;
  }
  function KeyCommand_SELECT_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_WORD_instance;
  }
  function KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_START_instance;
  }
  function KeyCommand_SELECT_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_END_instance;
  }
  function KeyCommand_SELECT_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_LEFT_instance;
  }
  function KeyCommand_SELECT_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_RIGHT_instance;
  }
  function KeyCommand_DESELECT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DESELECT_instance;
  }
  function KeyCommand_NEW_LINE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEW_LINE_instance;
  }
  function KeyCommand_TAB_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_TAB_instance;
  }
  function KeyCommand_UNDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UNDO_instance;
  }
  function KeyCommand_REDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_REDO_instance;
  }
  function KeyCommand_CHARACTER_PALETTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CHARACTER_PALETTE_instance;
  }
  function _get_defaultKeyMapping__2587390657() {
    init_properties_KeyMapping_kt_1721368331();
    return defaultKeyMapping;
  }
  var defaultKeyMapping;
  function KeyMapping() {
  }
  KeyMapping.$metadata$ = {
    simpleName: 'KeyMapping',
    kind: 'interface',
    interfaces: []
  };
  function commonKeyMapping(shortcutModifier) {
    init_properties_KeyMapping_kt_1721368331();
    return new commonKeyMapping$1(shortcutModifier);
  }
  function defaultKeyMapping$2$1($common) {
    this.$common_1 = $common;
  }
  defaultKeyMapping$2$1.prototype.map_qbm95i_k$ = function (event) {
    var tmp;
    if (_get_isShiftPressed__3737632705(event) ? _get_isCtrlPressed__1889404612(event) : false) {
      var tmp0_subject = _get_key__857139730(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance()._get_DirectionLeft__267959691_8onc78_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance()._get_DirectionRight__4187272110_are3xb_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance()._get_DirectionUp__2771234423_9vjcrs_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp0_subject, MappedKeys_getInstance()._get_DirectionDown__260885584_l8kdj5_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (_get_isCtrlPressed__1889404612(event)) {
      var tmp1_subject = _get_key__857139730(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance()._get_DirectionLeft__267959691_8onc78_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_DirectionRight__4187272110_are3xb_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_DirectionUp__2771234423_9vjcrs_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_DirectionDown__260885584_l8kdj5_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_H__461225481_45a1ru_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_Delete__1205487264_bft5g1_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_Backspace__3989731794_c3rybn_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_Backslash__3986053179_saiass_k$()) ? KeyCommand_DESELECT_getInstance() : null;
    } else if (_get_isShiftPressed__3737632705(event)) {
      var tmp2_subject = _get_key__857139730(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance()._get_MoveHome__237917531_vkjm18_k$()) ? KeyCommand_SELECT_HOME_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_MoveEnd__2085794087_nz6mlk_k$()) ? KeyCommand_SELECT_END_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp3_elvis_lhs = tmp;
    return tmp3_elvis_lhs == null ? this.$common_1.map_qbm95i_k$(event) : tmp3_elvis_lhs;
  };
  defaultKeyMapping$2$1.$metadata$ = {
    kind: 'class',
    interfaces: [KeyMapping]
  };
  function commonKeyMapping$1($shortcutModifier) {
    this.$shortcutModifier_1 = $shortcutModifier;
  }
  commonKeyMapping$1.prototype.map_qbm95i_k$ = function (event) {
    var tmp;
    if (this.$shortcutModifier_1(new KeyEvent(event)) ? _get_isShiftPressed__3737632705(event) : false) {
      var tmp0_subject = _get_key__857139730(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance()._get_Z__461226039_d1yw4o_k$()) ? KeyCommand_REDO_getInstance() : null;
    } else if (this.$shortcutModifier_1(new KeyEvent(event))) {
      var tmp1_subject = _get_key__857139730(event);
      tmp = (equals(tmp1_subject, MappedKeys_getInstance()._get_C__461225326_pckhzz_k$()) ? true : equals(tmp1_subject, MappedKeys_getInstance()._get_Insert__1612163922_lwtg5f_k$())) ? KeyCommand_COPY_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_V__461225915_clnz9w_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_X__461225977_zaekk6_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_A__461225264_mzsyov_k$()) ? KeyCommand_SELECT_ALL_getInstance() : equals(tmp1_subject, MappedKeys_getInstance()._get_Z__461226039_d1yw4o_k$()) ? KeyCommand_UNDO_getInstance() : null;
    } else if (_get_isCtrlPressed__1889404612(event)) {
      tmp = null;
    } else if (_get_isShiftPressed__3737632705(event)) {
      var tmp2_subject = _get_key__857139730(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance()._get_DirectionLeft__267959691_8onc78_k$()) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_DirectionRight__4187272110_are3xb_k$()) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_DirectionUp__2771234423_9vjcrs_k$()) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_DirectionDown__260885584_l8kdj5_k$()) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_PageUp__3146433185_se0t0u_k$()) ? KeyCommand_SELECT_PAGE_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_PageDown__49643002_szdxzp_k$()) ? KeyCommand_SELECT_PAGE_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_MoveHome__237917531_vkjm18_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_MoveEnd__2085794087_nz6mlk_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : equals(tmp2_subject, MappedKeys_getInstance()._get_Insert__1612163922_lwtg5f_k$()) ? KeyCommand_PASTE_getInstance() : null;
    } else {
      var tmp3_subject = _get_key__857139730(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance()._get_DirectionLeft__267959691_8onc78_k$()) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_DirectionRight__4187272110_are3xb_k$()) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_DirectionUp__2771234423_9vjcrs_k$()) ? KeyCommand_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_DirectionDown__260885584_l8kdj5_k$()) ? KeyCommand_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_PageUp__3146433185_se0t0u_k$()) ? KeyCommand_PAGE_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_PageDown__49643002_szdxzp_k$()) ? KeyCommand_PAGE_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_MoveHome__237917531_vkjm18_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_MoveEnd__2085794087_nz6mlk_k$()) ? KeyCommand_LINE_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Enter__2292823065_hc3wxi_k$()) ? KeyCommand_NEW_LINE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Backspace__3989731794_c3rybn_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Delete__1205487264_bft5g1_k$()) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Paste__2595722174_jnfmgf_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Cut__855963311_bo6928_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance()._get_Tab__856449980_f9r7jh_k$()) ? KeyCommand_TAB_getInstance() : null;
    }
    return tmp;
  };
  commonKeyMapping$1.$metadata$ = {
    kind: 'class',
    interfaces: [KeyMapping]
  };
  function isCtrlPressed$factory() {
    return getPropertyCallableRef('isCtrlPressed', 1, KProperty1, function (receiver) {
      return _get_isCtrlPressed__1889404612(receiver.nativeKeyEvent_1);
    }, null);
  }
  var properties_initialized_KeyMapping_kt_3161924911;
  function init_properties_KeyMapping_kt_1721368331() {
    if (!properties_initialized_KeyMapping_kt_3161924911) {
      properties_initialized_KeyMapping_kt_3161924911 = true;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = commonKeyMapping(isCtrlPressed$factory());
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = new defaultKeyMapping$2$1(tmp0_let_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      defaultKeyMapping = tmp$ret$1;
    }
  }
  function TextDragObserver() {
  }
  TextDragObserver.$metadata$ = {
    simpleName: 'TextDragObserver',
    kind: 'interface',
    interfaces: []
  };
  function detectDragGesturesAfterLongPressWithObserver(_this__1828080292, observer, $cont) {
    var tmp = detectDragGesturesAfterLongPressWithObserver$lambda(observer);
    var tmp_0 = detectDragGesturesAfterLongPressWithObserver$lambda_0(observer);
    var tmp_1 = detectDragGesturesAfterLongPressWithObserver$lambda_1(observer);
    return detectDragGesturesAfterLongPress(_this__1828080292, tmp, tmp_0, tmp_1, detectDragGesturesAfterLongPressWithObserver$lambda_2(observer), $cont);
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda($observer) {
    return function (it) {
      $observer.onStart_b65n5j_k$(it.packedValue_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.onStop_aip7ow_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.onCancel_q8fje0_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__2695192052, offset) {
      $observer.onDrag_jolxfr_k$(offset.packedValue_1);
      return Unit_getInstance();
    };
  }
  function getParagraphBoundary(_this__1828080292, index) {
    return TextRange(findParagraphStart(_this__1828080292, index), findParagraphEnd(_this__1828080292, index));
  }
  function findParagraphStart(_this__1828080292, startIndex) {
    var inductionVariable = startIndex - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(new Char(charSequenceGet(_this__1828080292, index - 1 | 0)), new Char(_Char___init__impl__380027157(10)))) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__1828080292, startIndex) {
    var inductionVariable = startIndex + 1 | 0;
    var last = charSequenceLength(_this__1828080292);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(_this__1828080292, index)), new Char(_Char___init__impl__380027157(10)))) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__1828080292);
  }
  function TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      maxLines = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    if (!(($mask0 & 8) === 0))
      softWrap = true;
    if (!(($mask0 & 16) === 0))
      overflow = Companion_getInstance_5()._get_Clip__764781787_iwu6r1_k$();
    if (!(($mask0 & 128) === 0))
      placeholders = emptyList();
    TextDelegate.call($this, text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders);
    return $this;
  }
  function TextDelegate_init_$Create$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker) {
    return TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, Object.create(TextDelegate.prototype));
  }
  function _get_nonNullIntrinsics__3241804399($this) {
    var tmp0_elvis_lhs = $this.paragraphIntrinsics_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('layoutIntrinsics must be called first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function layoutText($this, constraints, layoutDirection) {
    $this.layoutIntrinsics_4irjyy_k$(layoutDirection);
    var minWidth = _Constraints___get_minWidth__impl__3236361538(constraints);
    var widthMatters = $this.softWrap_1 ? true : $this.overflow_1 === Companion_getInstance_5()._get_Ellipsis__745658618_zi7du4_k$();
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__3842542885(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__51833172(constraints);
    } else {
      tmp = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    }
    var maxWidth = tmp;
    var overwriteMaxLines = !$this.softWrap_1 ? $this.overflow_1 === Companion_getInstance_5()._get_Ellipsis__745658618_zi7du4_k$() : false;
    var finalMaxLines = overwriteMaxLines ? 1 : $this.maxLines_1;
    var tmp_0;
    if (minWidth === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(_get_nonNullIntrinsics__3241804399($this)._get_maxIntrinsicWidth__321695148_5bj1kc_k$(), minWidth, maxWidth);
    }
    var width = tmp_0;
    return new MultiParagraph(_get_nonNullIntrinsics__3241804399($this), finalMaxLines, $this.overflow_1 === Companion_getInstance_5()._get_Ellipsis__745658618_zi7du4_k$(), width);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.paint_ct2xtf_k$ = function (canvas, textLayoutResult) {
    TextPainter_getInstance().paint_ct2xtf_k$(canvas, textLayoutResult);
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_11() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function TextDelegate(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders) {
    Companion_getInstance_11();
    this.text_1 = text;
    this.style_1 = style;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.placeholders_1 = placeholders;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    {
      var tmp0_check_0 = this.maxLines_1 > 0;
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
  }
  TextDelegate.prototype._get_text__809840318_de5ose_k$ = function () {
    return this.text_1;
  };
  TextDelegate.prototype._get_style__3615460416_b8k6v4_k$ = function () {
    return this.style_1;
  };
  TextDelegate.prototype._get_maxLines__694126384_bh9jcg_k$ = function () {
    return this.maxLines_1;
  };
  TextDelegate.prototype._get_softWrap__3697303223_9vu0jt_k$ = function () {
    return this.softWrap_1;
  };
  TextDelegate.prototype._get_overflow__720882697_6b1p7f_k$ = function () {
    return this.overflow_1;
  };
  TextDelegate.prototype._get_density__3015598889_l5pazb_k$ = function () {
    return this.density_1;
  };
  TextDelegate.prototype._get_fontFamilyResolver__2595451122_s3uj2m_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  TextDelegate.prototype._get_placeholders__3424351211_eecbo5_k$ = function () {
    return this.placeholders_1;
  };
  TextDelegate.prototype._set_paragraphIntrinsics__627513449_ejds49_k$ = function (_set____804775014) {
    this.paragraphIntrinsics_1 = _set____804775014;
  };
  TextDelegate.prototype._get_paragraphIntrinsics__1431594485_noc1dh_k$ = function () {
    return this.paragraphIntrinsics_1;
  };
  TextDelegate.prototype._set_intrinsicsLayoutDirection__1816580894_4ezv1l_k$ = function (_set____804775014) {
    this.intrinsicsLayoutDirection_1 = _set____804775014;
  };
  TextDelegate.prototype._get_intrinsicsLayoutDirection__1680787370_rsp3u2_k$ = function () {
    return this.intrinsicsLayoutDirection_1;
  };
  TextDelegate.prototype._get_minIntrinsicWidth__3368612606_fbizuq_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_ceil_0 = _get_nonNullIntrinsics__3241804399(this)._get_minIntrinsicWidth__3368612606_fbizuq_k$();
      tmp$ret$0 = Math.ceil(tmp0_ceil_0);
      break $l$block;
    }
    return numberToInt(tmp$ret$0);
  };
  TextDelegate.prototype._get_maxIntrinsicWidth__321695148_5bj1kc_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_ceil_0 = _get_nonNullIntrinsics__3241804399(this)._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
      tmp$ret$0 = Math.ceil(tmp0_ceil_0);
      break $l$block;
    }
    return numberToInt(tmp$ret$0);
  };
  TextDelegate.prototype.layoutIntrinsics_4irjyy_k$ = function (layoutDirection) {
    var localIntrinsics = this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals(this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics._get_hasStaleResolvedFonts__4168759652_2352fw_k$()) {
      this.intrinsicsLayoutDirection_1 = layoutDirection;
      var tmp0_annotatedString = this.text_1;
      var tmp1_style = resolveDefaults(this.style_1, layoutDirection);
      var tmp2_density = this.density_1;
      var tmp3_fontFamilyResolver = this.fontFamilyResolver_1;
      var tmp4_placeholders = this.placeholders_1;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    this.paragraphIntrinsics_1 = intrinsics;
  };
  TextDelegate.prototype.layout_k0cayh_k$ = function (constraints, layoutDirection, prevResult) {
    if (!(prevResult == null) ? canReuse(prevResult, this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints) : false) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp = TextLayoutInput_init_$Create$(prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$(), this.style_1, prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_placeholders__3424351211_eecbo5_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_maxLines__694126384_bh9jcg_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_softWrap__3697303223_9vu0jt_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_overflow__720882697_6b1p7f_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_density__3015598889_l5pazb_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_layoutDirection__1820011324_u3l5q4_k$(), prevResult._get_layoutInput__3248863953_hatmi7_k$()._get_fontFamilyResolver__2595451122_s3uj2m_k$(), constraints);
          var tmp$ret$0;
          $l$block: {
            var tmp0_ceil_0_2 = prevResult._get_multiParagraph__4254991478_nstje_k$()._get_width__3719200459_9isoj9_k$();
            tmp$ret$0 = Math.ceil(tmp0_ceil_0_2);
            break $l$block;
          }
          var tmp_0 = numberToInt(tmp$ret$0);
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_ceil_0_3 = prevResult._get_multiParagraph__4254991478_nstje_k$()._get_height__3088126660_jyis70_k$();
            tmp$ret$1 = Math.ceil(tmp1_ceil_0_3);
            break $l$block_0;
          }
          tmp$ret$2 = prevResult.copy_wbg4xj_k$(tmp, constrain(constraints, IntSize(tmp_0, numberToInt(tmp$ret$1))));
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      return tmp$ret$3;
    }
    var multiParagraph = layoutText(this, constraints, layoutDirection);
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_ceil_0 = multiParagraph._get_width__3719200459_9isoj9_k$();
      tmp$ret$4 = Math.ceil(tmp0_ceil_0);
      break $l$block_3;
    }
    var tmp_1 = numberToInt(tmp$ret$4);
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_ceil_0 = multiParagraph._get_height__3088126660_jyis70_k$();
      tmp$ret$5 = Math.ceil(tmp1_ceil_0);
      break $l$block_4;
    }
    var size = constrain(constraints, IntSize(tmp_1, numberToInt(tmp$ret$5)));
    return new TextLayoutResult(TextLayoutInput_init_$Create$(this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints), multiParagraph, size);
  };
  TextDelegate.prototype.layout$default_3ijkau_k$ = function (constraints, layoutDirection, prevResult, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      prevResult = null;
    return this.layout_k0cayh_k$(constraints, layoutDirection, prevResult);
  };
  TextDelegate.$metadata$ = {
    simpleName: 'TextDelegate',
    kind: 'class',
    interfaces: []
  };
  function _get_EmptyTextReplacement__298952083() {
    init_properties_TextFieldDelegate_kt_899878466();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function _get_DefaultWidthCharCount__1894224797() {
    return DefaultWidthCharCount;
  }
  var DefaultWidthCharCount;
  var properties_initialized_TextFieldDelegate_kt_91846558;
  function init_properties_TextFieldDelegate_kt_899878466() {
    if (!properties_initialized_TextFieldDelegate_kt_91846558) {
      properties_initialized_TextFieldDelegate_kt_91846558 = true;
      EmptyTextReplacement = repeat('H', 10);
    }
  }
  function canReuse(_this__1828080292, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    var layoutInput = _this__1828080292._get_layoutInput__3248863953_hatmi7_k$();
    if (_this__1828080292._get_multiParagraph__4254991478_nstje_k$()._get_intrinsics__2128523837_z79ni5_k$()._get_hasStaleResolvedFonts__4168759652_2352fw_k$()) {
      return false;
    }
    if (!((((((((layoutInput._get_text__809840318_de5ose_k$().equals(text) ? canReuseLayout(layoutInput._get_style__3615460416_b8k6v4_k$(), style) : false) ? equals(layoutInput._get_placeholders__3424351211_eecbo5_k$(), placeholders) : false) ? layoutInput._get_maxLines__694126384_bh9jcg_k$() === maxLines : false) ? layoutInput._get_softWrap__3697303223_9vu0jt_k$() === softWrap : false) ? layoutInput._get_overflow__720882697_6b1p7f_k$() === overflow : false) ? equals(layoutInput._get_density__3015598889_l5pazb_k$(), density) : false) ? layoutInput._get_layoutDirection__1820011324_u3l5q4_k$().equals(layoutDirection) : false) ? equals(layoutInput._get_fontFamilyResolver__2595451122_s3uj2m_k$(), fontFamilyResolver) : false)) {
      return false;
    }
    if (!(_Constraints___get_minWidth__impl__3236361538(constraints) === _Constraints___get_minWidth__impl__3236361538(layoutInput._get_constraints__3385973275_8t1fho_k$())))
      return false;
    if (!(softWrap ? true : overflow === Companion_getInstance_5()._get_Ellipsis__745658618_zi7du4_k$())) {
      return true;
    }
    return _Constraints___get_maxWidth__impl__51833172(constraints) === _Constraints___get_maxWidth__impl__51833172(layoutInput._get_constraints__3385973275_8t1fho_k$());
  }
  function canReuseLayout(_this__1828080292, other) {
    var tmp;
    if (_this__1828080292 === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      var tmp_3;
      var tmp_4;
      var tmp_5;
      var tmp_6;
      var tmp_7;
      var tmp_8;
      var tmp_9;
      var tmp_10;
      var tmp_11;
      var tmp_12;
      var tmp_13;
      if (equals(_this__1828080292._get_fontSize__4225531099_h9sa57_k$(), other._get_fontSize__4225531099_h9sa57_k$()) ? equals(_this__1828080292._get_fontWeight__1116225988_igklhg_k$(), other._get_fontWeight__1116225988_igklhg_k$()) : false) {
        var tmp_14 = _this__1828080292._get_fontStyle__2152582127_jc9dsp_k$();
        var tmp_15 = tmp_14 == null ? null : new FontStyle(tmp_14);
        var tmp_16 = other._get_fontStyle__2152582127_jc9dsp_k$();
        tmp_13 = equals(tmp_15, tmp_16 == null ? null : new FontStyle(tmp_16));
      } else {
        tmp_13 = false;
      }
      if (tmp_13) {
        var tmp_17 = _this__1828080292._get_fontSynthesis__3907866988_7jz8cn_k$();
        var tmp_18 = tmp_17 == null ? null : new FontSynthesis(tmp_17);
        var tmp_19 = other._get_fontSynthesis__3907866988_7jz8cn_k$();
        tmp_12 = equals(tmp_18, tmp_19 == null ? null : new FontSynthesis(tmp_19));
      } else {
        {
          tmp_12 = false;
        }
      }
      if (tmp_12) {
        tmp_11 = equals(_this__1828080292._get_fontFamily__3097773656_jss0iw_k$(), other._get_fontFamily__3097773656_jss0iw_k$());
      } else {
        {
          tmp_11 = false;
        }
      }
      if (tmp_11) {
        tmp_10 = _this__1828080292._get_fontFeatureSettings__455600871_7j93vr_k$() == other._get_fontFeatureSettings__455600871_7j93vr_k$();
      } else {
        {
          tmp_10 = false;
        }
      }
      if (tmp_10) {
        tmp_9 = equals(_this__1828080292._get_letterSpacing__1544247092_ht41e4_k$(), other._get_letterSpacing__1544247092_ht41e4_k$());
      } else {
        {
          tmp_9 = false;
        }
      }
      if (tmp_9) {
        var tmp_20 = _this__1828080292._get_baselineShift__487923508_6kauu1_k$();
        var tmp_21 = tmp_20 == null ? null : new BaselineShift(tmp_20);
        var tmp_22 = other._get_baselineShift__487923508_6kauu1_k$();
        tmp_8 = equals(tmp_21, tmp_22 == null ? null : new BaselineShift(tmp_22));
      } else {
        {
          tmp_8 = false;
        }
      }
      if (tmp_8) {
        tmp_7 = equals(_this__1828080292._get_textGeometricTransform__1727044563_sk8k43_k$(), other._get_textGeometricTransform__1727044563_sk8k43_k$());
      } else {
        {
          tmp_7 = false;
        }
      }
      if (tmp_7) {
        tmp_6 = equals(_this__1828080292._get_localeList__8953203_5bwc3_k$(), other._get_localeList__8953203_5bwc3_k$());
      } else {
        {
          tmp_6 = false;
        }
      }
      if (tmp_6) {
        tmp_5 = equals(_this__1828080292._get_background__4060324125_drprdq_k$(), other._get_background__4060324125_drprdq_k$());
      } else {
        {
          tmp_5 = false;
        }
      }
      if (tmp_5) {
        var tmp_23 = _this__1828080292._get_textAlign__21108601_6amoil_k$();
        var tmp_24 = tmp_23 == null ? null : new TextAlign(tmp_23);
        var tmp_25 = other._get_textAlign__21108601_6amoil_k$();
        tmp_4 = equals(tmp_24, tmp_25 == null ? null : new TextAlign(tmp_25));
      } else {
        {
          tmp_4 = false;
        }
      }
      if (tmp_4) {
        var tmp_26 = _this__1828080292._get_textDirection__681174591_d3hmoh_k$();
        var tmp_27 = tmp_26 == null ? null : new TextDirection(tmp_26);
        var tmp_28 = other._get_textDirection__681174591_d3hmoh_k$();
        tmp_3 = equals(tmp_27, tmp_28 == null ? null : new TextDirection(tmp_28));
      } else {
        {
          tmp_3 = false;
        }
      }
      if (tmp_3) {
        tmp_2 = equals(_this__1828080292._get_lineHeight__3598496176_utqlcg_k$(), other._get_lineHeight__3598496176_utqlcg_k$());
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals(_this__1828080292._get_textIndent__3512011634_cy5gge_k$(), other._get_textIndent__3512011634_cy5gge_k$());
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals(_this__1828080292._get_platformStyle__3976805267_59fbe5_k$(), other._get_platformStyle__3976805267_59fbe5_k$());
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_SNAPSHOTS_INTERVAL_MILLIS__387292289() {
    return SNAPSHOTS_INTERVAL_MILLIS;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function _get_coordinatesCallback__1312329521($this) {
    return $this.coordinatesCallback_1;
  }
  function _get_layoutResultCallback__824633471($this) {
    return $this.layoutResultCallback_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.selectableId_1 = selectableId;
    this.coordinatesCallback_1 = coordinatesCallback;
    this.layoutResultCallback_1 = layoutResultCallback;
  }
  MultiWidgetSelectionDelegate.prototype._get_selectableId__1895643994_vcm89m_k$ = function () {
    return this.selectableId_1;
  };
  MultiWidgetSelectionDelegate.prototype.updateSelection_xe1zkm_k$ = function (startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection) {
    {
      var tmp0_require_0 = previousSelection == null ? true : this.selectableId_1.equals(previousSelection._get_start__3614751663_b8zdqp_k$()._get_selectableId__1895643994_vcm89m_k$()) ? this.selectableId_1.equals(previousSelection._get_end__856968982_e67thy_k$()._get_selectableId__1895643994_vcm89m_k$()) : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "The given previousSelection doesn't belong to this selectable.";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp0_elvis_lhs = this.getLayoutCoordinates_w2x35x_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layoutCoordinates = tmp;
    var tmp1_elvis_lhs = this.layoutResultCallback_1();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var textLayoutResult = tmp_0;
    var relativePosition = containerLayoutCoordinates.localPositionOf_l2k1s5_k$(layoutCoordinates, Companion_getInstance_7()._get_Zero__785822851_30aknr_k$());
    var localStartPosition = Offset__minus_impl_3225842032(startHandlePosition, relativePosition);
    var localEndPosition = Offset__minus_impl_3225842032(endHandlePosition, relativePosition);
    var tmp2_safe_receiver = previousHandlePosition;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = Offset__minus_impl_3225842032(tmp2_safe_receiver, relativePosition);
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp_1 = tmp$ret$2;
      }
    }
    var localPreviousHandlePosition = tmp_1;
    return getTextSelectionInfo(textLayoutResult, localStartPosition, localEndPosition, localPreviousHandlePosition, this.selectableId_1, adjustment, previousSelection, isStartHandle);
  };
  MultiWidgetSelectionDelegate.prototype.getSelectAllSelection_9ejth9_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var newSelectionRange = TextRange(0, textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()._get_length__2347802853_w7ahp7_k$());
    return getAssembledSelectionInfo(newSelectionRange, false, this.selectableId_1, textLayoutResult);
  };
  MultiWidgetSelectionDelegate.prototype.getHandlePosition_nbszf7_k$ = function (selection, isStartHandle) {
    if ((isStartHandle ? !selection._get_start__3614751663_b8zdqp_k$()._get_selectableId__1895643994_vcm89m_k$().equals(this.selectableId_1) : false) ? true : !isStartHandle ? !selection._get_end__856968982_e67thy_k$()._get_selectableId__1895643994_vcm89m_k$().equals(this.selectableId_1) : false) {
      return Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
    }
    if (this.getLayoutCoordinates_w2x35x_k$() == null)
      return Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_7()._get_Zero__785822851_30aknr_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return getSelectionHandleCoordinates(textLayoutResult, isStartHandle ? selection._get_start__3614751663_b8zdqp_k$()._get_offset__736931032_c6qzmg_k$() : selection._get_end__856968982_e67thy_k$()._get_offset__736931032_c6qzmg_k$(), isStartHandle, selection._get_handlesCrossed__2904598903_mzsf49_k$());
  };
  MultiWidgetSelectionDelegate.prototype.getLayoutCoordinates_w2x35x_k$ = function () {
    var layoutCoordinates = this.coordinatesCallback_1();
    if (layoutCoordinates == null ? true : !layoutCoordinates._get_isAttached__3108096349_jmmrhf_k$())
      return null;
    return layoutCoordinates;
  };
  MultiWidgetSelectionDelegate.prototype.getText_18q731_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return AnnotatedString_init_$Create$('', null, null, 6, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$();
  };
  MultiWidgetSelectionDelegate.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_9()._get_Zero__785822851_czuwsj_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()._get_length__2347802853_w7ahp7_k$();
    if (textLength < 1)
      return Companion_getInstance_9()._get_Zero__785822851_czuwsj_k$();
    return textLayoutResult.getBoundingBox_urudbk_k$(coerceIn_0(offset, 0, textLength - 1 | 0));
  };
  MultiWidgetSelectionDelegate.prototype.getRangeOfLineContaining_v74j7b_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_10()._get_Zero__785822851_7e0ohz_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()._get_length__2347802853_w7ahp7_k$();
    if (textLength < 1)
      return Companion_getInstance_10()._get_Zero__785822851_7e0ohz_k$();
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn_0(offset, 0, textLength - 1 | 0));
    return TextRange(textLayoutResult.getLineStart_504snr_k$(line), textLayoutResult.getLineEnd_7kqxuy_k$(line, true));
  };
  MultiWidgetSelectionDelegate.$metadata$ = {
    simpleName: 'MultiWidgetSelectionDelegate',
    kind: 'class',
    interfaces: [Selectable]
  };
  function getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle) {
    var bounds = new Rect(0.0, 0.0, textLayoutResult._get_multiParagraph__4254991478_nstje_k$()._get_width__3719200459_9isoj9_k$(), textLayoutResult._get_multiParagraph__4254991478_nstje_k$()._get_height__3088126660_jyis70_k$());
    var isSelected = SelectionMode_Vertical_getInstance().isSelected_edatdn_k$(bounds, startHandlePosition, endHandlePosition);
    if (!isSelected) {
      return new Pair(null, false);
    }
    var rawStartHandleOffset = getOffsetForPosition(textLayoutResult, bounds, startHandlePosition);
    var rawEndHandleOffset = getOffsetForPosition(textLayoutResult, bounds, endHandlePosition);
    var tmp0_safe_receiver = previousHandlePosition;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      tmp = null;
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = getOffsetForPosition(textLayoutResult, bounds, tmp0_safe_receiver);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    var tmp1_elvis_lhs = tmp;
    var rawPreviousHandleOffset = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    var tmp_1 = TextRange(rawStartHandleOffset, rawEndHandleOffset);
    var tmp2_safe_receiver = previousSelection;
    var adjustedTextRange = adjustment.adjust_xh53z6_k$(textLayoutResult, tmp_1, rawPreviousHandleOffset, isStartHandle, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toTextRange_6wofw5_k$());
    var newSelection = getAssembledSelectionInfo(adjustedTextRange, _TextRange___get_reversed__impl__3410665902(adjustedTextRange), selectableId, textLayoutResult);
    var selectionUpdated = !newSelection.equals(previousSelection);
    var tmp_2;
    if (isStartHandle) {
      tmp_2 = !(rawStartHandleOffset === rawPreviousHandleOffset);
    } else {
      tmp_2 = !(rawEndHandleOffset === rawPreviousHandleOffset);
    }
    var handleUpdated = tmp_2;
    var consumed = handleUpdated ? true : selectionUpdated;
    return new Pair(newSelection, consumed);
  }
  function getTextSelectionInfo$default(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      previousSelection = null;
    if (!(($mask0 & 128) === 0))
      isStartHandle = true;
    return getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle);
  }
  function getAssembledSelectionInfo(newSelectionRange, handlesCrossed, selectableId, textLayoutResult) {
    var tmp = new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(_TextRange___get_start__impl__2306077420(newSelectionRange)), _TextRange___get_start__impl__2306077420(newSelectionRange), selectableId);
    var tmp$ret$0;
    $l$block: {
      var tmp0_max_0 = _TextRange___get_end__impl__3306702867(newSelectionRange) - 1 | 0;
      tmp$ret$0 = Math.max(tmp0_max_0, 0);
      break $l$block;
    }
    return new Selection(tmp, new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(tmp$ret$0), _TextRange___get_end__impl__3306702867(newSelectionRange), selectableId), handlesCrossed);
  }
  function getOffsetForPosition(textLayoutResult, bounds, position) {
    var length = textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()._get_length__2347802853_w7ahp7_k$();
    var tmp;
    if (bounds.contains_ggguyy_k$(position)) {
      tmp = coerceIn_0(textLayoutResult.getOffsetForPosition_f04xcw_k$(position), 0, length);
    } else {
      var value = SelectionMode_Vertical_getInstance().compare_blje1w_k$(position, bounds);
      tmp = value < 0 ? 0 : length;
    }
    return tmp;
  }
  function Selectable() {
  }
  Selectable.$metadata$ = {
    simpleName: 'Selectable',
    kind: 'interface',
    interfaces: []
  };
  function Selection_init_$Init$(start, end, handlesCrossed, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      handlesCrossed = false;
    Selection.call($this, start, end, handlesCrossed);
    return $this;
  }
  function Selection_init_$Create$(start, end, handlesCrossed, $mask0, $marker) {
    return Selection_init_$Init$(start, end, handlesCrossed, $mask0, $marker, Object.create(Selection.prototype));
  }
  function AnchorInfo(direction, offset, selectableId) {
    this.direction_1 = direction;
    this.offset_1 = offset;
    this.selectableId_1 = selectableId;
  }
  AnchorInfo.prototype._get_direction__3211647666_hwzary_k$ = function () {
    return this.direction_1;
  };
  AnchorInfo.prototype._get_offset__736931032_c6qzmg_k$ = function () {
    return this.offset_1;
  };
  AnchorInfo.prototype._get_selectableId__1895643994_vcm89m_k$ = function () {
    return this.selectableId_1;
  };
  AnchorInfo.prototype.component1_7eebsc_k$ = function () {
    return this.direction_1;
  };
  AnchorInfo.prototype.component2_7eebsb_k$ = function () {
    return this.offset_1;
  };
  AnchorInfo.prototype.component3_7eebsa_k$ = function () {
    return this.selectableId_1;
  };
  AnchorInfo.prototype.copy_b5d964_k$ = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  AnchorInfo.prototype.copy$default_y8hmdw_k$ = function (direction, offset, selectableId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      direction = this.direction_1;
    if (!(($mask0 & 2) === 0))
      offset = this.offset_1;
    if (!(($mask0 & 4) === 0))
      selectableId = this.selectableId_1;
    return this.copy_b5d964_k$(direction, offset, selectableId);
  };
  AnchorInfo.prototype.toString = function () {
    return 'AnchorInfo(direction=' + this.direction_1 + ', offset=' + this.offset_1 + ', selectableId=' + toString(this.selectableId_1) + ')';
  };
  AnchorInfo.prototype.hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(result, 31) + this.offset_1 | 0;
    result = imul(result, 31) + this.selectableId_1.hashCode() | 0;
    return result;
  };
  AnchorInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.direction_1.equals(tmp0_other_with_cast.direction_1))
      return false;
    if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
      return false;
    if (!this.selectableId_1.equals(tmp0_other_with_cast.selectableId_1))
      return false;
    return true;
  };
  AnchorInfo.$metadata$ = {
    simpleName: 'AnchorInfo',
    kind: 'class',
    interfaces: []
  };
  function Selection(start, end, handlesCrossed) {
    this.start_1 = start;
    this.end_1 = end;
    this.handlesCrossed_1 = handlesCrossed;
  }
  Selection.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this.start_1;
  };
  Selection.prototype._get_end__856968982_e67thy_k$ = function () {
    return this.end_1;
  };
  Selection.prototype._get_handlesCrossed__2904598903_mzsf49_k$ = function () {
    return this.handlesCrossed_1;
  };
  Selection.prototype.merge_ev98bv_k$ = function (other) {
    if (other == null)
      return this;
    var selection = this;
    var tmp;
    if (this.handlesCrossed_1) {
      var tmp_0 = selection;
      tmp = tmp_0.copy$default_bazjmu_k$(other.start_1, null, false, 6, null);
    } else {
      var tmp_1 = selection;
      tmp = tmp_1.copy$default_bazjmu_k$(null, other.end_1, false, 5, null);
    }
    selection = tmp;
    return selection;
  };
  Selection.prototype.toTextRange_6wofw5_k$ = function () {
    return TextRange(this.start_1.offset_1, this.end_1.offset_1);
  };
  Selection.prototype.component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  Selection.prototype.component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  Selection.prototype.component3_7eebsa_k$ = function () {
    return this.handlesCrossed_1;
  };
  Selection.prototype.copy_fksu9h_k$ = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  Selection.prototype.copy$default_bazjmu_k$ = function (start, end, handlesCrossed, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this.start_1;
    if (!(($mask0 & 2) === 0))
      end = this.end_1;
    if (!(($mask0 & 4) === 0))
      handlesCrossed = this.handlesCrossed_1;
    return this.copy_fksu9h_k$(start, end, handlesCrossed);
  };
  Selection.prototype.toString = function () {
    return 'Selection(start=' + this.start_1 + ', end=' + this.end_1 + ', handlesCrossed=' + this.handlesCrossed_1 + ')';
  };
  Selection.prototype.hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    result = imul(result, 31) + (this.handlesCrossed_1 | 0) | 0;
    return result;
  };
  Selection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    if (!(this.handlesCrossed_1 === tmp0_other_with_cast.handlesCrossed_1))
      return false;
    return true;
  };
  Selection.$metadata$ = {
    simpleName: 'Selection',
    kind: 'class',
    interfaces: []
  };
  function TextLayoutResult$getWordBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0($boundThis.getWordBoundary_qx0177_k$(p0));
    };
    l.callableName = 'getWordBoundary';
    return l;
  }
  function getParagraphBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0(getParagraphBoundary($boundThis, p0));
    };
    l.callableName = 'getParagraphBoundary';
    return l;
  }
  function updateSelectionBoundary($this, textLayoutResult, newRawOffset, previousRawOffset, previousAdjustedOffset, otherBoundaryOffset, isStart, isReversed) {
    if (newRawOffset === previousRawOffset) {
      return previousAdjustedOffset;
    }
    var currentLine = textLayoutResult.getLineForOffset_9a3vwv_k$(newRawOffset);
    var previousLine = textLayoutResult.getLineForOffset_9a3vwv_k$(previousAdjustedOffset);
    if (!(currentLine === previousLine)) {
      return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
    }
    var isExpanding_0 = isExpanding($this, newRawOffset, previousRawOffset, isStart, isReversed);
    if (!isExpanding_0) {
      return newRawOffset;
    }
    if (!isAtWordBoundary(textLayoutResult, $this, previousAdjustedOffset)) {
      return newRawOffset;
    }
    return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
  }
  function snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed) {
    var wordBoundary = textLayoutResult.getWordBoundary_qx0177_k$(newRawOffset);
    var wordStartLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_start__impl__2306077420(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__2306077420(wordBoundary);
    } else {
      tmp = textLayoutResult.getLineStart_504snr_k$(currentLine);
    }
    var start = tmp;
    var wordEndLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_end__impl__3306702867(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__3306702867(wordBoundary);
    } else {
      tmp_0 = textLayoutResult.getLineEnd$default_prmziz_k$(currentLine, false, 2, null);
    }
    var end = tmp_0;
    if (start === otherBoundaryOffset) {
      return end;
    }
    if (end === otherBoundaryOffset) {
      return start;
    }
    var threshold = (start + end | 0) / 2 | 0;
    var tmp_1;
    if (!!(isStart ^ isReversed)) {
      var tmp_2;
      if (newRawOffset <= threshold) {
        tmp_2 = start;
      } else {
        tmp_2 = end;
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (newRawOffset >= threshold) {
        tmp_3 = end;
      } else {
        tmp_3 = start;
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function isAtWordBoundary(_this__1828080292, $this, offset) {
    var wordBoundary = _this__1828080292.getWordBoundary_qx0177_k$(offset);
    return offset === _TextRange___get_start__impl__2306077420(wordBoundary) ? true : offset === _TextRange___get_end__impl__3306702867(wordBoundary);
  }
  function isExpanding($this, newRawOffset, previousRawOffset, isStart, previousReversed) {
    if (previousRawOffset === -1) {
      return true;
    }
    if (newRawOffset === previousRawOffset) {
      return false;
    }
    var tmp;
    if (!!(isStart ^ previousReversed)) {
      tmp = newRawOffset < previousRawOffset;
    } else {
      tmp = newRawOffset > previousRawOffset;
    }
    return tmp;
  }
  function adjustByBoundary($this, textLayoutResult, newRawSelection, boundaryFun) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$();
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      return Companion_getInstance_10()._get_Zero__785822851_7e0ohz_k$();
    } else {
    }
    var maxOffset = _get_lastIndex__339712501(textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$());
    var startBoundary = boundaryFun(coerceIn_0(_TextRange___get_start__impl__2306077420(newRawSelection), 0, maxOffset)).packedValue_1;
    var endBoundary = boundaryFun(coerceIn_0(_TextRange___get_end__impl__3306702867(newRawSelection), 0, maxOffset)).packedValue_1;
    var start = _TextRange___get_reversed__impl__3410665902(newRawSelection) ? _TextRange___get_end__impl__3306702867(startBoundary) : _TextRange___get_start__impl__2306077420(startBoundary);
    var end = _TextRange___get_reversed__impl__3410665902(newRawSelection) ? _TextRange___get_start__impl__2306077420(endBoundary) : _TextRange___get_end__impl__3306702867(endBoundary);
    return TextRange(start, end);
  }
  function SelectionAdjustment$Companion$None$1() {
  }
  SelectionAdjustment$Companion$None$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    return newRawSelectionRange;
  };
  SelectionAdjustment$Companion$None$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectionAdjustment]
  };
  function SelectionAdjustment$Companion$Character$1() {
  }
  SelectionAdjustment$Companion$Character$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp;
    if (_TextRange___get_collapsed__impl__3538141143(newRawSelectionRange)) {
      var tmp0_safe_receiver = previousSelectionRange;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new TextRange_0(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        {
          tmp_0 = _TextRange___get_reversed__impl__3410665902(tmp0_safe_receiver);
        }
      }
      var tmp1_elvis_lhs = tmp_0;
      var previousHandlesCrossed = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      tmp = ensureAtLeastOneChar(_TextRange___get_start__impl__2306077420(newRawSelectionRange), _get_lastIndex__339712501(textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()), isStartHandle, previousHandlesCrossed);
    } else {
      tmp = newRawSelectionRange;
    }
    return tmp;
  };
  SelectionAdjustment$Companion$Character$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectionAdjustment]
  };
  function SelectionAdjustment$Companion$Word$1() {
  }
  SelectionAdjustment$Companion$Word$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = Companion_getInstance_12();
    return adjustByBoundary(tmp, textLayoutResult, newRawSelectionRange, TextLayoutResult$getWordBoundary$ref(textLayoutResult));
  };
  SelectionAdjustment$Companion$Word$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectionAdjustment]
  };
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  SelectionAdjustment$Companion$Paragraph$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var boundaryFun = getParagraphBoundary$ref(textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$());
    return adjustByBoundary(Companion_getInstance_12(), textLayoutResult, newRawSelectionRange, boundaryFun);
  };
  SelectionAdjustment$Companion$Paragraph$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectionAdjustment]
  };
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  SelectionAdjustment$Companion$CharacterWithWordAccelerate$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = previousSelectionRange;
    if ((tmp == null ? null : new TextRange_0(tmp)) == null) {
      return Companion_getInstance_12().Word_1.adjust_xh53z6_k$(textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange);
    } else {
    }
    if (_TextRange___get_collapsed__impl__3538141143(newRawSelectionRange)) {
      return ensureAtLeastOneChar(_TextRange___get_start__impl__2306077420(newRawSelectionRange), _get_lastIndex__339712501(textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_text__809840318_de5ose_k$()), isStartHandle, _TextRange___get_reversed__impl__3410665902(previousSelectionRange));
    }
    var start;
    var end;
    if (isStartHandle) {
      start = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_start__impl__2306077420(newRawSelectionRange), previousHandleOffset, _TextRange___get_start__impl__2306077420(previousSelectionRange), _TextRange___get_end__impl__3306702867(newRawSelectionRange), true, _TextRange___get_reversed__impl__3410665902(newRawSelectionRange));
      end = _TextRange___get_end__impl__3306702867(newRawSelectionRange);
    } else {
      start = _TextRange___get_start__impl__2306077420(newRawSelectionRange);
      end = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_end__impl__3306702867(newRawSelectionRange), previousHandleOffset, _TextRange___get_end__impl__3306702867(previousSelectionRange), _TextRange___get_start__impl__2306077420(newRawSelectionRange), false, _TextRange___get_reversed__impl__3410665902(newRawSelectionRange));
    }
    return TextRange(start, end);
  };
  SelectionAdjustment$Companion$CharacterWithWordAccelerate$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectionAdjustment]
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.None_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.Character_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.Word_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.Paragraph_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.CharacterWithWordAccelerate_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  Companion_0.prototype._get_None__775034355_ctfoc3_k$ = function () {
    return this.None_1;
  };
  Companion_0.prototype._get_Character__1931114600_vxqhk8_k$ = function () {
    return this.Character_1;
  };
  Companion_0.prototype._get_Word__783349857_cydwm9_k$ = function () {
    return this.Word_1;
  };
  Companion_0.prototype._get_Paragraph__984101571_g9wpmr_k$ = function () {
    return this.Paragraph_1;
  };
  Companion_0.prototype._get_CharacterWithWordAccelerate__1048953723_hcipvf_k$ = function () {
    return this.CharacterWithWordAccelerate_1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SelectionAdjustment() {
    Companion_getInstance_12();
  }
  SelectionAdjustment.$metadata$ = {
    simpleName: 'SelectionAdjustment',
    kind: 'interface',
    interfaces: []
  };
  function ensureAtLeastOneChar(offset, lastOffset, isStartHandle, previousHandlesCrossed) {
    if (lastOffset === 0)
      return TextRange(offset, offset);
    if (offset === 0) {
      var tmp;
      if (isStartHandle) {
        tmp = TextRange(1, 0);
      } else {
        tmp = TextRange(0, 1);
      }
      return tmp;
    }
    if (offset === lastOffset) {
      var tmp_0;
      if (isStartHandle) {
        tmp_0 = TextRange(lastOffset - 1 | 0, lastOffset);
      } else {
        tmp_0 = TextRange(lastOffset, lastOffset - 1 | 0);
      }
      return tmp_0;
    }
    var tmp_1;
    if (isStartHandle) {
      var tmp_2;
      if (!previousHandlesCrossed) {
        tmp_2 = TextRange(offset - 1 | 0, offset);
      } else {
        tmp_2 = TextRange(offset + 1 | 0, offset);
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (!previousHandlesCrossed) {
        tmp_3 = TextRange(offset, offset + 1 | 0);
      } else {
        tmp_3 = TextRange(offset, offset - 1 | 0);
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function _get_HandleWidth__633451763() {
    init_properties_SelectionHandles_kt_3841094683();
    return HandleWidth;
  }
  var HandleWidth;
  function _get_HandleHeight__1919197596() {
    init_properties_SelectionHandles_kt_3841094683();
    return HandleHeight;
  }
  var HandleHeight;
  function _get_SelectionHandleInfoKey__1460264750() {
    init_properties_SelectionHandles_kt_3841094683();
    return SelectionHandleInfoKey;
  }
  var SelectionHandleInfoKey;
  function SelectionHandleInfo(handle, position) {
    this.handle_1 = handle;
    this.position_1 = position;
  }
  SelectionHandleInfo.prototype._get_handle__2978141667_ls055p_k$ = function () {
    return this.handle_1;
  };
  SelectionHandleInfo.prototype._get_position__3188952002_dzccdm_k$ = function () {
    return this.position_1;
  };
  SelectionHandleInfo.prototype.component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  SelectionHandleInfo.prototype.component2_mooz9z_k$ = function () {
    return this.position_1;
  };
  SelectionHandleInfo.prototype.copy_s35jy4_k$ = function (handle, position) {
    return new SelectionHandleInfo(handle, position);
  };
  SelectionHandleInfo.prototype.copy$default_xvq7rd_k$ = function (handle, position, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      handle = this.handle_1;
    if (!(($mask0 & 2) === 0))
      position = this.position_1;
    return this.copy_s35jy4_k$(handle, position);
  };
  SelectionHandleInfo.prototype.toString = function () {
    return 'SelectionHandleInfo(handle=' + this.handle_1 + ', position=' + new Offset(this.position_1) + ')';
  };
  SelectionHandleInfo.prototype.hashCode = function () {
    var result = this.handle_1.hashCode();
    result = imul(result, 31) + Offset__hashCode_impl_3247326111(this.position_1) | 0;
    return result;
  };
  SelectionHandleInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectionHandleInfo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SelectionHandleInfo ? other : THROW_CCE();
    if (!this.handle_1.equals(tmp0_other_with_cast.handle_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  SelectionHandleInfo.$metadata$ = {
    simpleName: 'SelectionHandleInfo',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_SelectionHandles_kt_1044082495;
  function init_properties_SelectionHandles_kt_3841094683() {
    if (!properties_initialized_SelectionHandles_kt_1044082495) {
      properties_initialized_SelectionHandles_kt_1044082495 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(25);
        break $l$block;
      }
      HandleWidth = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(25);
        break $l$block_0;
      }
      HandleHeight = tmp$ret$0_0;
      SelectionHandleInfoKey = SemanticsPropertyKey_init_$Create$('SelectionHandleInfo', null, 2, null);
    }
  }
  function _get_UnspecifiedAnimationVector2D__1271275369() {
    init_properties_SelectionMagnifier_kt_2760102600();
    return UnspecifiedAnimationVector2D;
  }
  var UnspecifiedAnimationVector2D;
  function _get_UnspecifiedSafeOffsetVectorConverter__3035599205() {
    init_properties_SelectionMagnifier_kt_2760102600();
    return UnspecifiedSafeOffsetVectorConverter;
  }
  var UnspecifiedSafeOffsetVectorConverter;
  function _get_OffsetDisplacementThreshold__3773676176() {
    init_properties_SelectionMagnifier_kt_2760102600();
    return OffsetDisplacementThreshold;
  }
  var OffsetDisplacementThreshold;
  function _get_MagnifierSpringSpec__3733179755() {
    init_properties_SelectionMagnifier_kt_2760102600();
    return MagnifierSpringSpec;
  }
  var MagnifierSpringSpec;
  function UnspecifiedSafeOffsetVectorConverter$lambda() {
    return function (it) {
      var tmp;
      if (_get_isSpecified__2832019115(it.packedValue_1)) {
        tmp = new AnimationVector2D(_Offset___get_x__impl__2048295803(it.packedValue_1), _Offset___get_y__impl__3791106138(it.packedValue_1));
      } else {
        tmp = _get_UnspecifiedAnimationVector2D__1271275369();
      }
      return tmp;
    };
  }
  function UnspecifiedSafeOffsetVectorConverter$lambda_0() {
    return function (it) {
      return new Offset(Offset_0(it._get_v1__1413131888_ndcbjk_k$(), it._get_v2__1413131919_ndcbkf_k$()));
    };
  }
  var properties_initialized_SelectionMagnifier_kt_3480917228;
  function init_properties_SelectionMagnifier_kt_2760102600() {
    if (!properties_initialized_SelectionMagnifier_kt_3480917228) {
      properties_initialized_SelectionMagnifier_kt_3480917228 = true;
      UnspecifiedAnimationVector2D = new AnimationVector2D(FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$(), FloatCompanionObject_getInstance()._get_NaN__856270614_e5sumu_k$());
      var tmp = UnspecifiedSafeOffsetVectorConverter$lambda();
      UnspecifiedSafeOffsetVectorConverter = TwoWayConverter(tmp, UnspecifiedSafeOffsetVectorConverter$lambda_0());
      OffsetDisplacementThreshold = Offset_0(Spring_getInstance()._get_DefaultDisplacementThreshold__2622289208_rnvao8_k$(), Spring_getInstance()._get_DefaultDisplacementThreshold__2622289208_rnvao8_k$());
      MagnifierSpringSpec = SpringSpec_init_$Create$(0.0, 0.0, new Offset(_get_OffsetDisplacementThreshold__3773676176()), 3, null);
    }
  }
  function SelectionMode$Vertical() {
    SelectionMode.call(this, 'Vertical', 0);
    Unit_getInstance();
    SelectionMode_Vertical_instance = this;
  }
  SelectionMode$Vertical.prototype.compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_y__impl__3791106138(position) < bounds._get_top__857417180_e6hfbw_k$())
      return -1;
    if (_Offset___get_x__impl__2048295803(position) < bounds._get_left__802434852_d9qyp0_k$() ? _Offset___get_y__impl__3791106138(position) < bounds._get_bottom__2354915904_w3218g_k$() : false)
      return -1;
    return 1;
  };
  SelectionMode$Vertical.$metadata$ = {
    simpleName: 'Vertical',
    kind: 'class',
    interfaces: []
  };
  var SelectionMode_Vertical_instance;
  function SelectionMode$Horizontal() {
    SelectionMode.call(this, 'Horizontal', 1);
    Unit_getInstance();
    SelectionMode_Horizontal_instance = this;
  }
  SelectionMode$Horizontal.prototype.compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_x__impl__2048295803(position) < bounds._get_left__802434852_d9qyp0_k$())
      return -1;
    if (_Offset___get_y__impl__3791106138(position) < bounds._get_top__857417180_e6hfbw_k$() ? _Offset___get_x__impl__2048295803(position) < bounds._get_right__3576132917_bvz45n_k$() : false)
      return -1;
    return 1;
  };
  SelectionMode$Horizontal.$metadata$ = {
    simpleName: 'Horizontal',
    kind: 'class',
    interfaces: []
  };
  var SelectionMode_Horizontal_instance;
  function values_1() {
    return [SelectionMode_Vertical_getInstance(), SelectionMode_Horizontal_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return SelectionMode_Vertical_getInstance();
      case 'Horizontal':
        return SelectionMode_Horizontal_getInstance();
      default:
        SelectionMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SelectionMode_entriesInitialized;
  function SelectionMode_initEntries() {
    if (SelectionMode_entriesInitialized)
      return Unit_getInstance();
    SelectionMode_entriesInitialized = true;
    SelectionMode_Vertical_instance = new SelectionMode$Vertical();
    SelectionMode_Horizontal_instance = new SelectionMode$Horizontal();
  }
  function SelectionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SelectionMode.prototype.isSelected_edatdn_k$ = function (bounds, start, end) {
    if (bounds.contains_ggguyy_k$(start) ? true : bounds.contains_ggguyy_k$(end)) {
      return true;
    }
    var compareStart = this.compare_blje1w_k$(start, bounds);
    var compareEnd = this.compare_blje1w_k$(end, bounds);
    return !!(compareStart > 0 ^ compareEnd > 0);
  };
  SelectionMode.$metadata$ = {
    simpleName: 'SelectionMode',
    kind: 'class',
    interfaces: []
  };
  function SelectionMode_Vertical_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Vertical_instance;
  }
  function SelectionMode_Horizontal_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Horizontal_instance;
  }
  function _get_LocalSelectionRegistrar__1215836965() {
    init_properties_SelectionRegistrar_kt_1002367865();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_1() {
    Companion_instance_1 = this;
    this.InvalidSelectableId_1 = new Long(0, 0);
  }
  Companion_1.prototype._get_InvalidSelectableId__1480596489_ohibk9_k$ = function () {
    return this.InvalidSelectableId_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SelectionRegistrar() {
    Companion_getInstance_13();
  }
  SelectionRegistrar.$metadata$ = {
    simpleName: 'SelectionRegistrar',
    kind: 'interface',
    interfaces: []
  };
  function hasSelection(_this__1828080292, selectableId) {
    init_properties_SelectionRegistrar_kt_1002367865();
    var tmp0_safe_receiver = _this__1828080292;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_subselections__2536953610_t2oc1i_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.containsKey_wgk31w_k$(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_SelectionRegistrar_kt_1723182493;
  function init_properties_SelectionRegistrar_kt_1002367865() {
    if (!properties_initialized_SelectionRegistrar_kt_1723182493) {
      properties_initialized_SelectionRegistrar_kt_1723182493 = true;
      LocalSelectionRegistrar = compositionLocalOf$default(null, LocalSelectionRegistrar$lambda(), 1, null);
    }
  }
  function _get_LocalTextSelectionColors__2397562471() {
    init_properties_TextSelectionColors_kt_1424237861();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function _get_DefaultSelectionColor__3410055961() {
    init_properties_TextSelectionColors_kt_1424237861();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function _get_DefaultTextSelectionColors__470314749() {
    init_properties_TextSelectionColors_kt_1424237861();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.handleColor_1 = handleColor;
    this.backgroundColor_1 = backgroundColor;
  }
  TextSelectionColors.prototype._get_handleColor__4197290710_8eafaz_k$ = function () {
    return this.handleColor_1;
  };
  TextSelectionColors.prototype._get_backgroundColor__3563895772_7iqy81_k$ = function () {
    return this.backgroundColor_1;
  };
  TextSelectionColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    else {
    }
    if (!equals(this.handleColor_1, other.handleColor_1))
      return false;
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    return true;
  };
  TextSelectionColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_1907974927(this.handleColor_1);
    result = imul(31, result) + Color__hashCode_impl_1907974927(this.backgroundColor_1) | 0;
    return result;
  };
  TextSelectionColors.prototype.toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.handleColor_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.backgroundColor_1) + ')');
  };
  TextSelectionColors.$metadata$ = {
    simpleName: 'TextSelectionColors',
    kind: 'class',
    interfaces: []
  };
  function LocalTextSelectionColors$lambda() {
    return function () {
      return _get_DefaultTextSelectionColors__470314749();
    };
  }
  var properties_initialized_TextSelectionColors_kt_2294654849;
  function init_properties_TextSelectionColors_kt_1424237861() {
    if (!properties_initialized_TextSelectionColors_kt_2294654849) {
      properties_initialized_TextSelectionColors_kt_2294654849 = true;
      LocalTextSelectionColors = compositionLocalOf$default(null, LocalTextSelectionColors$lambda(), 1, null);
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      var tmp = _get_DefaultSelectionColor__3410055961();
      var tmp_0 = _get_DefaultSelectionColor__3410055961();
      DefaultTextSelectionColors = new TextSelectionColors(tmp, Color__copy$default_impl_868080376(tmp_0, 0.4, 0.0, 0.0, 0.0, 14, null));
    }
  }
  function getSelectionHandleCoordinates(textLayoutResult, offset, isStart, areHandlesCrossed) {
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(offset);
    var x = getHorizontalPosition(textLayoutResult, offset, isStart, areHandlesCrossed);
    var y = textLayoutResult.getLineBottom_spjtf0_k$(line);
    return Offset_0(x, y);
  }
  function getHorizontalPosition(_this__1828080292, offset, isStart, areHandlesCrossed) {
    var tmp;
    if ((isStart ? !areHandlesCrossed : false) ? true : !isStart ? areHandlesCrossed : false) {
      tmp = offset;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_max_0 = offset - 1 | 0;
        tmp$ret$0 = Math.max(tmp0_max_0, 0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    var offsetToCheck = tmp;
    var bidiRunDirection = _this__1828080292.getBidiRunDirection_dqdnqj_k$(offsetToCheck);
    var paragraphDirection = _this__1828080292.getParagraphDirection_x8sft2_k$(offset);
    return _this__1828080292.getHorizontalPosition_b8vvic_k$(offset, bidiRunDirection.equals(paragraphDirection));
  }
  function MouseSelectionObserver() {
  }
  MouseSelectionObserver.$metadata$ = {
    simpleName: 'MouseSelectionObserver',
    kind: 'interface',
    interfaces: []
  };
  function mouseSelectionDetector(_this__1828080292, observer, $cont) {
    return forEachGesture(_this__1828080292, mouseSelectionDetector$slambda_0(observer, null), $cont);
  }
  function _get_viewConfiguration__3288750880($this) {
    return $this.viewConfiguration_1;
  }
  function ClicksCounter(viewConfiguration) {
    this.viewConfiguration_1 = viewConfiguration;
    this.clicks_1 = 0;
    this.prevClick_1 = null;
  }
  ClicksCounter.prototype._set_clicks__3057283468_yixu3o_k$ = function (_set____804775014) {
    this.clicks_1 = _set____804775014;
  };
  ClicksCounter.prototype._get_clicks__3145863296_j05abk_k$ = function () {
    return this.clicks_1;
  };
  ClicksCounter.prototype._set_prevClick__91958608_93jqz0_k$ = function (_set____804775014) {
    this.prevClick_1 = _set____804775014;
  };
  ClicksCounter.prototype._get_prevClick__1863694812_utlg4c_k$ = function () {
    return this.prevClick_1;
  };
  ClicksCounter.prototype.update_4lz0mo_k$ = function (event) {
    var currentPrevClick = this.prevClick_1;
    var newClick = event._get_changes__3558428846_c6ikpe_k$().get_fkrdnv_k$(0);
    if ((!(currentPrevClick == null) ? this.timeIsTolerable_kkfmyn_k$(currentPrevClick, newClick) : false) ? this.positionIsTolerable_1cydwb_k$(currentPrevClick, newClick) : false) {
      var tmp0_this = this;
      tmp0_this.clicks_1 = tmp0_this.clicks_1 + 1 | 0;
    } else {
      this.clicks_1 = 1;
    }
    this.prevClick_1 = newClick;
  };
  ClicksCounter.prototype.timeIsTolerable_kkfmyn_k$ = function (prevClick, newClick) {
    var diff = newClick._get_uptimeMillis__3110364861_jla537_k$().minus_llf5ei_k$(prevClick._get_uptimeMillis__3110364861_jla537_k$());
    return diff.compareTo_n4fqi2_k$(this.viewConfiguration_1._get_doubleTapTimeoutMillis__356798870_5wffrq_k$()) < 0;
  };
  ClicksCounter.prototype.positionIsTolerable_1cydwb_k$ = function (prevClick, newClick) {
    var diff = Offset__minus_impl_3225842032(newClick._get_position__3188952002_dzccdm_k$(), prevClick._get_position__3188952002_dzccdm_k$());
    return Offset__getDistance_impl_2762136341(diff) < 100.0;
  };
  ClicksCounter.$metadata$ = {
    simpleName: 'ClicksCounter',
    kind: 'class',
    interfaces: []
  };
  function awaitMouseEventDown(_this__1828080292, $cont) {
    var tmp = new $awaitMouseEventDownCOROUTINE$7(_this__1828080292, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function _get_ClicksSlop__2009738374() {
    return ClicksSlop;
  }
  var ClicksSlop;
  function mouseSelectionDetector$slambda$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.onExtendDrag_m0cr7o_k$(it._get_position__3188952002_dzccdm_k$())) {
        tmp = it.consume_spbz2t_k$();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.onDrag_4lf411_k$(it._get_position__3188952002_dzccdm_k$(), $selectionMode)) {
        tmp = it.consume_spbz2t_k$();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  mouseSelectionDetector$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(8);
            this.clicksCounter0__1 = new ClicksCounter(this.$this$awaitPointerEventScope_1._get_viewConfiguration__3288750880_gn2pk0_k$());
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(9);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = awaitMouseEventDown(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.down1__1 = suspendResult;
            this.clicksCounter0__1.update_4lz0mo_k$(this.down1__1);
            this.downChange2__1 = this.down1__1._get_changes__3558428846_c6ikpe_k$().get_fkrdnv_k$(0);
            if (_get_isShiftPressed__3737632705_0(this.down1__1._get_keyboardModifiers__996917660_jkc7uc_k$())) {
              this.started3__1 = this.$observer_1.onExtend_dx8a28_k$(this.downChange2__1._get_position__3188952002_dzccdm_k$());
              if (this.started3__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this._set_state__1256591060_i39zdo_k$(5);
                var tmp_0 = this.downChange2__1._get_id__1413120976_iucw1k_k$();
                suspendResult = drag(this.$this$awaitPointerEventScope_1, tmp_0, mouseSelectionDetector$slambda$slambda$lambda(this.$observer_1), this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this._set_state__1256591060_i39zdo_k$(6);
                continue $sm;
              }
            } else {
              var tmp_1 = this;
              var tmp0_subject = this.clicksCounter0__1.clicks_1;
              switch (tmp0_subject) {
                case 1:
                  tmp_1.selectionMode4__1 = Companion_getInstance_12()._get_None__775034355_ctfoc3_k$();
                  break;
                case 2:
                  tmp_1.selectionMode4__1 = Companion_getInstance_12()._get_Word__783349857_cydwm9_k$();
                  break;
                default:
                  tmp_1.selectionMode4__1 = Companion_getInstance_12()._get_Paragraph__984101571_g9wpmr_k$();
                  break;
              }
              this.started5__1 = this.$observer_1.onStart_i02yuj_k$(this.downChange2__1._get_position__3188952002_dzccdm_k$(), this.selectionMode4__1);
              if (this.started5__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this._set_state__1256591060_i39zdo_k$(3);
                var tmp_2 = this.downChange2__1._get_id__1413120976_iucw1k_k$();
                suspendResult = drag(this.$this$awaitPointerEventScope_1, tmp_2, mouseSelectionDetector$slambda$slambda$lambda_0(this.$observer_1, this.selectionMode4__1), this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this._set_state__1256591060_i39zdo_k$(4);
                continue $sm;
              }
            }

            break;
          case 3:
            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 5:
            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 8:
            throw this._get_exception__1672948706_ro13he_k$();
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 8) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  mouseSelectionDetector$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new mouseSelectionDetector$slambda$slambda(this.$observer_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  mouseSelectionDetector$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  mouseSelectionDetector$slambda$slambda.$metadata$ = {
    simpleName: 'mouseSelectionDetector$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function mouseSelectionDetector$slambda$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda$slambda($observer, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  mouseSelectionDetector$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(mouseSelectionDetector$slambda$slambda_0(this.$observer_1, null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  mouseSelectionDetector$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.$observer_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  mouseSelectionDetector$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  mouseSelectionDetector$slambda.$metadata$ = {
    simpleName: 'mouseSelectionDetector$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$7(_this__1828080292, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $awaitMouseEventDownCOROUTINE$7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            var tmp_0;
            if (_get_isPrimaryPressed__3891969153(this.event0__1._get_buttons__1018006448_i0h12c_k$())) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll_0 = this.event0__1._get_changes__3558428846_c6ikpe_k$();
                var inductionVariable = 0;
                var last = tmp0_fastAll_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index_2_2 = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item_3_3 = tmp0_fastAll_0.get_fkrdnv_k$(index_2_2);
                    if (!(item_3_3._get_type__810427985_5aq6oo_k$() === Companion_getInstance_2()._get_Mouse__2522822636_5uxkc3_k$() ? changedToDown(item_3_3) : false)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    } else {
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            } else {
            }

            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            return this.event0__1;
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
  $awaitMouseEventDownCOROUTINE$7.$metadata$ = {
    simpleName: '$awaitMouseEventDownCOROUTINE$7',
    kind: 'class',
    interfaces: []
  };
  function _get_TapIndicationDelay__3450188935() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function _get_LocalScrollbarStyle__2823058939() {
    init_properties_Scrollbar_js_kt_1657028201();
    return LocalScrollbarStyle;
  }
  var LocalScrollbarStyle;
  function ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    this.minimalHeight_1 = minimalHeight;
    this.thickness_1 = thickness;
    this.shape_1 = shape;
    this.hoverDurationMillis_1 = hoverDurationMillis;
    this.unhoverColor_1 = unhoverColor;
    this.hoverColor_1 = hoverColor;
  }
  ScrollbarStyle.prototype._get_minimalHeight__367191977_477db0_k$ = function () {
    return this.minimalHeight_1;
  };
  ScrollbarStyle.prototype._get_thickness__1817831773_chilk_k$ = function () {
    return this.thickness_1;
  };
  ScrollbarStyle.prototype._get_shape__3603667024_bfkypc_k$ = function () {
    return this.shape_1;
  };
  ScrollbarStyle.prototype._get_hoverDurationMillis__1793314811_tnoykb_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  ScrollbarStyle.prototype._get_unhoverColor__67243627_k4uf9s_k$ = function () {
    return this.unhoverColor_1;
  };
  ScrollbarStyle.prototype._get_hoverColor__1390274020_rt1vwp_k$ = function () {
    return this.hoverColor_1;
  };
  ScrollbarStyle.prototype.component1_z2a8sv_k$ = function () {
    return this.minimalHeight_1;
  };
  ScrollbarStyle.prototype.component2_11tj3k_k$ = function () {
    return this.thickness_1;
  };
  ScrollbarStyle.prototype.component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  ScrollbarStyle.prototype.component4_7eebs9_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  ScrollbarStyle.prototype.component5_6mmcoz_k$ = function () {
    return this.unhoverColor_1;
  };
  ScrollbarStyle.prototype.component6_ust31e_k$ = function () {
    return this.hoverColor_1;
  };
  ScrollbarStyle.prototype.copy_n0gxs4_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.copy$default_l6gq2a_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minimalHeight = this.minimalHeight_1;
    if (!(($mask0 & 2) === 0))
      thickness = this.thickness_1;
    if (!(($mask0 & 4) === 0))
      shape = this.shape_1;
    if (!(($mask0 & 8) === 0))
      hoverDurationMillis = this.hoverDurationMillis_1;
    if (!(($mask0 & 16) === 0))
      unhoverColor = this.unhoverColor_1;
    if (!(($mask0 & 32) === 0))
      hoverColor = this.hoverColor_1;
    return this.copy_n0gxs4_k$(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.minimalHeight_1) + ', thickness=' + new Dp(this.thickness_1) + ', shape=' + this.shape_1 + ', hoverDurationMillis=' + this.hoverDurationMillis_1 + ', unhoverColor=' + new Color(this.unhoverColor_1) + ', hoverColor=' + new Color(this.hoverColor_1) + ')';
  };
  ScrollbarStyle.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_1749449350(this.minimalHeight_1);
    result = imul(result, 31) + Dp__hashCode_impl_1749449350(this.thickness_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + this.hoverDurationMillis_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_1907974927(this.unhoverColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_1907974927(this.hoverColor_1) | 0;
    return result;
  };
  ScrollbarStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.minimalHeight_1, tmp0_other_with_cast.minimalHeight_1))
      return false;
    if (!equals(this.thickness_1, tmp0_other_with_cast.thickness_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!(this.hoverDurationMillis_1 === tmp0_other_with_cast.hoverDurationMillis_1))
      return false;
    if (!equals(this.unhoverColor_1, tmp0_other_with_cast.unhoverColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    return true;
  };
  ScrollbarStyle.$metadata$ = {
    simpleName: 'ScrollbarStyle',
    kind: 'class',
    interfaces: []
  };
  function defaultScrollbarStyle() {
    init_properties_Scrollbar_js_kt_1657028201();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(16);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _Dp___init__impl__1377471179(8);
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _Dp___init__impl__1377471179(4);
      break $l$block_1;
    }
    var tmp_1 = RoundedCornerShape_2(tmp$ret$2);
    var tmp_2 = Companion_getInstance()._get_Black__2204520402_og72wn_k$();
    var tmp_3 = Color__copy$default_impl_868080376(tmp_2, 0.12, 0.0, 0.0, 0.0, 14, null);
    var tmp_4 = Companion_getInstance()._get_Black__2204520402_og72wn_k$();
    return new ScrollbarStyle(tmp, tmp_0, tmp_1, 300, tmp_3, Color__copy$default_impl_868080376(tmp_4, 0.5, 0.0, 0.0, 0.0, 14, null));
  }
  function LocalScrollbarStyle$lambda() {
    return function () {
      return defaultScrollbarStyle();
    };
  }
  var properties_initialized_Scrollbar_js_kt_3052432269;
  function init_properties_Scrollbar_js_kt_1657028201() {
    if (!properties_initialized_Scrollbar_js_kt_3052432269) {
      properties_initialized_Scrollbar_js_kt_3052432269 = true;
      LocalScrollbarStyle = staticCompositionLocalOf(LocalScrollbarStyle$lambda());
    }
  }
  function _get_platformDefaultKeyMapping__2418982292() {
    init_properties_KeyMapping_js_kt_3668496204();
    return platformDefaultKeyMapping;
  }
  var platformDefaultKeyMapping;
  function MappedKeys() {
    MappedKeys_instance = this;
    var tmp = this;
    throw new NotImplementedError('An operation is not implemented: Implement native  MappedKeys');
  }
  MappedKeys.prototype._get_A__461225264_mzsyov_k$ = function () {
    return this.A_1;
  };
  MappedKeys.prototype._get_C__461225326_pckhzz_k$ = function () {
    return this.C_1;
  };
  MappedKeys.prototype._get_H__461225481_45a1ru_k$ = function () {
    return this.H_1;
  };
  MappedKeys.prototype._get_V__461225915_clnz9w_k$ = function () {
    return this.V_1;
  };
  MappedKeys.prototype._get_X__461225977_zaekk6_k$ = function () {
    return this.X_1;
  };
  MappedKeys.prototype._get_Z__461226039_d1yw4o_k$ = function () {
    return this.Z_1;
  };
  MappedKeys.prototype._get_Backslash__3986053179_saiass_k$ = function () {
    return this.Backslash_1;
  };
  MappedKeys.prototype._get_DirectionLeft__267959691_8onc78_k$ = function () {
    return this.DirectionLeft_1;
  };
  MappedKeys.prototype._get_DirectionRight__4187272110_are3xb_k$ = function () {
    return this.DirectionRight_1;
  };
  MappedKeys.prototype._get_DirectionUp__2771234423_9vjcrs_k$ = function () {
    return this.DirectionUp_1;
  };
  MappedKeys.prototype._get_DirectionDown__260885584_l8kdj5_k$ = function () {
    return this.DirectionDown_1;
  };
  MappedKeys.prototype._get_PageUp__3146433185_se0t0u_k$ = function () {
    return this.PageUp_1;
  };
  MappedKeys.prototype._get_PageDown__49643002_szdxzp_k$ = function () {
    return this.PageDown_1;
  };
  MappedKeys.prototype._get_MoveHome__237917531_vkjm18_k$ = function () {
    return this.MoveHome_1;
  };
  MappedKeys.prototype._get_MoveEnd__2085794087_nz6mlk_k$ = function () {
    return this.MoveEnd_1;
  };
  MappedKeys.prototype._get_Insert__1612163922_lwtg5f_k$ = function () {
    return this.Insert_1;
  };
  MappedKeys.prototype._get_Enter__2292823065_hc3wxi_k$ = function () {
    return this.Enter_1;
  };
  MappedKeys.prototype._get_Backspace__3989731794_c3rybn_k$ = function () {
    return this.Backspace_1;
  };
  MappedKeys.prototype._get_Delete__1205487264_bft5g1_k$ = function () {
    return this.Delete_1;
  };
  MappedKeys.prototype._get_Paste__2595722174_jnfmgf_k$ = function () {
    return this.Paste_1;
  };
  MappedKeys.prototype._get_Cut__855963311_bo6928_k$ = function () {
    return this.Cut_1;
  };
  MappedKeys.prototype._get_Copy__764878166_t1g2k9_k$ = function () {
    return this.Copy_1;
  };
  MappedKeys.prototype._get_Tab__856449980_f9r7jh_k$ = function () {
    return this.Tab_1;
  };
  MappedKeys.$metadata$ = {
    simpleName: 'MappedKeys',
    kind: 'object',
    interfaces: []
  };
  var MappedKeys_instance;
  function MappedKeys_getInstance() {
    if (MappedKeys_instance == null)
      new MappedKeys();
    return MappedKeys_instance;
  }
  var properties_initialized_KeyMapping_js_kt_3976349352;
  function init_properties_KeyMapping_js_kt_3668496204() {
    if (!properties_initialized_KeyMapping_js_kt_3976349352) {
      properties_initialized_KeyMapping_js_kt_3976349352 = true;
      platformDefaultKeyMapping = _get_defaultKeyMapping__2587390657();
    }
  }
  function _get_DefaultCursorThickness__556386382() {
    init_properties_TextFieldCursor_js_kt_3860070854();
    return DefaultCursorThickness;
  }
  var DefaultCursorThickness;
  var properties_initialized_TextFieldCursor_js_kt_285918186;
  function init_properties_TextFieldCursor_js_kt_3860070854() {
    if (!properties_initialized_TextFieldCursor_js_kt_285918186) {
      properties_initialized_TextFieldCursor_js_kt_285918186 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(1);
        break $l$block;
      }
      DefaultCursorThickness = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_textPointerIcon__3170015304() {
    init_properties_TextPointerIcon_js_kt_2026006700();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_js_kt_2746821328;
  function init_properties_TextPointerIcon_js_kt_2026006700() {
    if (!properties_initialized_TextPointerIcon_js_kt_2746821328) {
      properties_initialized_TextPointerIcon_js_kt_2746821328 = true;
      textPointerIcon = DummyPointerIcon_getInstance();
    }
  }
  function _get_isInTouchMode__716242142() {
    return isInTouchMode;
  }
  var isInTouchMode;
  function _get_EmptyPointerEvent__854000743() {
    init_properties_OnClick_skiko_kt_3274740100();
    return EmptyPointerEvent;
  }
  var EmptyPointerEvent;
  var properties_initialized_OnClick_skiko_kt_3582593248;
  function init_properties_OnClick_skiko_kt_3274740100() {
    if (!properties_initialized_OnClick_skiko_kt_3582593248) {
      properties_initialized_OnClick_skiko_kt_3582593248 = true;
      EmptyPointerEvent = PointerEvent_init_$Create$(emptyList());
    }
  }
  //region block: post-declaration
  PercentCornerSize.prototype._get_inspectableElements__3413877420_ekktas_k$ = _get_inspectableElements__3413877420;
  PercentCornerSize.prototype._get_nameFallback__326891614_5emf6m_k$ = _get_nameFallback__326891614;
  DpCornerSize.prototype._get_inspectableElements__3413877420_ekktas_k$ = _get_inspectableElements__3413877420;
  DpCornerSize.prototype._get_nameFallback__326891614_5emf6m_k$ = _get_nameFallback__326891614;
  ZeroCornerSize$1.prototype._get_inspectableElements__3413877420_ekktas_k$ = _get_inspectableElements__3413877420;
  ZeroCornerSize$1.prototype._get_nameFallback__326891614_5emf6m_k$ = _get_nameFallback__326891614;
  MultiWidgetSelectionDelegate.prototype.updateSelection$default_awcnad_k$ = updateSelection$default;
  //endregion
  //region block: init
  VisibleItemsSlidingWindowSize = 30;
  ExtraItemsNearTheSlidingWindow = 100;
  VisibleItemsSlidingWindowSize_0 = 90;
  ExtraItemsNearTheSlidingWindow_0 = 200;
  DefaultWidthCharCount = 10;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  ClicksSlop = 100.0;
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.RoundedCornerShape = RoundedCornerShape_2;
  _.$crossModule$.BasicText$composable = BasicText$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_foundation_foundation.js.map