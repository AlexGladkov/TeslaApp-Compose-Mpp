(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_ui_ui_geometry.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_androidx_compose_runtime_runtime_saveable.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js', './kotlin_org_jetbrains_skiko_skiko.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_ui_ui_geometry.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_androidx_compose_runtime_runtime_saveable.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'), require('./kotlin_org_jetbrains_skiko_skiko.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_geometry === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_androidx_compose_ui_ui_geometry' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_geometry' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime_saveable === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_androidx_compose_runtime_runtime_saveable' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime_saveable' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    if (typeof kotlin_org_jetbrains_skiko_skiko === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_text'. Its dependency 'kotlin_org_jetbrains_skiko_skiko' was not found. Please, check whether 'kotlin_org_jetbrains_skiko_skiko' is loaded prior to 'kotlin_androidx_compose_ui_ui_text'.");
    }
    root.kotlin_androidx_compose_ui_ui_text = factory(typeof kotlin_androidx_compose_ui_ui_text === 'undefined' ? {} : kotlin_androidx_compose_ui_ui_text, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  //region block: imports
  var imul = Math.imul;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var List = kotlin_kotlin.$crossModule$.List;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var CharSequence = kotlin_kotlin.$crossModule$.CharSequence;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_2;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501;
  var addAll = kotlin_kotlin.$crossModule$.addAll;
  var plus = kotlin_kotlin.$crossModule$.plus_1;
  var last = kotlin_kotlin.$crossModule$.last;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var Path = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Path;
  var _Offset___get_y__impl__3791106138 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_y__impl__3791106138;
  var _Offset___get_x__impl__2048295803 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$._Offset___get_x__impl__2048295803;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$crossModule$.LazyThreadSafetyMode_NONE_getInstance;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_2;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_7;
  var _TextUnit___get_value__impl__1070471396 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_value__impl__1070471396;
  var _get_isUnspecified__892174020 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_isUnspecified__892174020;
  var TextUnit__hashCode_impl_2674772001 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.TextUnit__hashCode_impl_2674772001;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$crossModule$.TextUnit_1;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var arrayListOf = kotlin_kotlin.$crossModule$.arrayListOf;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_6;
  var Shadow = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Shadow;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Offset_1;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Companion_getInstance_1;
  var _Color___get_value__impl__103472842 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_value__impl__103472842;
  var ULong = kotlin_kotlin.$crossModule$.ULong;
  var _Color___init__impl__1643258666 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___init__impl__1643258666;
  var _TextUnit___get_type__impl__2460701423 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_type__impl__2460701423;
  var TextUnitType = kotlin_androidx_compose_ui_ui_unit.$crossModule$.TextUnitType;
  var TextUnit_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.TextUnit;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$crossModule$.Saver;
  var Color__hashCode_impl_1907974927 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color__hashCode_impl_1907974927;
  var _get_sp__1413130958 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_sp__1413130958_2;
  var HashSet_init_$Create$ = kotlin_kotlin.$crossModule$.HashSet_init_$Create$;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$_1;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_2;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var isCharSequence = kotlin_kotlin.$crossModule$.isCharSequence;
  var _IntSize___get_height__impl__2736509033 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_height__impl__2736509033;
  var _IntSize___get_width__impl__3492176776 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._IntSize___get_width__impl__3492176776;
  var IntSize__hashCode_impl_3290107458 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize__hashCode_impl_3290107458;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$crossModule$.IntSize_1;
  var Constraints__hashCode_impl_3174331356 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints__hashCode_impl_3174331356;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints_1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Size;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$_2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashSet_init_$Create$;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$crossModule$.NullPointerException_init_$Create$;
  var first = kotlin_kotlin.$crossModule$.first_1;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var MutableMap = kotlin_kotlin.$crossModule$.MutableMap;
  var MutableCollection = kotlin_kotlin.$crossModule$.MutableCollection;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$crossModule$.ConcurrentModificationException_init_$Create$;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_2;
  var copyOf_0 = kotlin_kotlin.$crossModule$.copyOf_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var println = kotlin_kotlin.$crossModule$.println;
  var arrayCopy = kotlin_kotlin.$crossModule$.arrayCopy;
  var ClassCastException = kotlin_kotlin.$crossModule$.ClassCastException;
  var NullPointerException = kotlin_kotlin.$crossModule$.NullPointerException;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_2;
  var asList = kotlin_kotlin.$crossModule$.asList;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_2;
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var State = kotlin_androidx_compose_runtime_runtime.$crossModule$.State;
  var AbstractCoroutineContextElement = kotlin_kotlin.$crossModule$.AbstractCoroutineContextElement;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.Key_getInstance;
  var get = kotlin_kotlin.$crossModule$.get_1;
  var fold = kotlin_kotlin.$crossModule$.fold;
  var minusKey = kotlin_kotlin.$crossModule$.minusKey_1;
  var plus_0 = kotlin_kotlin.$crossModule$.plus_2;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineExceptionHandler;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineScope_1;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.withTimeout;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$crossModule$.EmptyCoroutineContext_getInstance;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.async$default;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.joinAll;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.Key_getInstance_1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.SupervisorJob;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineScope;
  var to = kotlin_kotlin.$crossModule$.to;
  var first_0 = kotlin_kotlin.$crossModule$.first;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.coroutineScope;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.CoroutineStart_UNDISPATCHED_getInstance;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.launch$default;
  var _get_indices__2241594442 = kotlin_kotlin.$crossModule$._get_indices__2241594442;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.yield;
  var _get_isActive__4035225851 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$._get_isActive__4035225851;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.withTimeoutOrNull;
  var CancellationException = kotlin_kotlin.$crossModule$.CancellationException;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.mutableStateOf$default;
  var mutableListOf = kotlin_kotlin.$crossModule$.mutableListOf;
  var Companion_getInstance_3 = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var _Result___init__impl__2241242780 = kotlin_kotlin.$crossModule$._Result___init__impl__2241242780;
  var createFailure = kotlin_kotlin.$crossModule$.createFailure;
  var _Result___get_value__impl__3597185688 = kotlin_kotlin.$crossModule$._Result___get_value__impl__3597185688;
  var _Result___get_isFailure__impl__3103244073 = kotlin_kotlin.$crossModule$._Result___get_isFailure__impl__3103244073;
  var KMutableProperty1 = kotlin_kotlin.$crossModule$.KMutableProperty1;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var SuspendFunction0 = kotlin_kotlin.$crossModule$.SuspendFunction0;
  var listOf = kotlin_kotlin.$crossModule$.listOf_1;
  var Comparable = kotlin_kotlin.$crossModule$.Comparable;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$crossModule$.IndexOutOfBoundsException_init_$Create$;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$crossModule$.AtomicReference;
  var split$default = kotlin_kotlin.$crossModule$.split$default;
  var trim = kotlin_kotlin.$crossModule$.trim;
  var toList = kotlin_kotlin.$crossModule$.toList_3;
  var Collection = kotlin_kotlin.$crossModule$.Collection;
  var NotImplementedError = kotlin_kotlin.$crossModule$.NotImplementedError;
  var listOf_0 = kotlin_kotlin.$crossModule$.listOf;
  var lazy_0 = kotlin_kotlin.$crossModule$.lazy_1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_14;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_3;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  var KProperty0 = kotlin_kotlin.$crossModule$.KProperty0;
  var capitalize = kotlin_kotlin.$crossModule$.capitalize;
  var decapitalize = kotlin_kotlin.$crossModule$.decapitalize;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$crossModule$.NotImplementedError_init_$Create$;
  var getObjectHashCode = kotlin_kotlin.$crossModule$.getObjectHashCode;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$_1;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.FontCollection_init_$Create$;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$crossModule$.TypefaceFontProvider;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_4;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$crossModule$.HashSet_init_$Create$_1;
  var copyToArray = kotlin_kotlin.$crossModule$.copyToArray;
  var first_1 = kotlin_kotlin.$crossModule$.first_2;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals_2;
  var contentHashCode = kotlin_kotlin.$crossModule$.contentHashCode;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Companion_getInstance_5;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.TextStyle_init_$Create$;
  var toArgb = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.toArgb;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Paint_init_$Create$;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$;
  var _TextUnit___get_isSp__impl__504060002 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_isSp__impl__504060002;
  var _TextUnit___get_isEm__impl__3400122295 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_isEm__impl__3400122295;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.DecorationLineStyle_SOLID_getInstance;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$crossModule$.DecorationStyle;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Shadow;
  var last_0 = kotlin_kotlin.$crossModule$.last_2;
  var isArray = kotlin_kotlin.$crossModule$.isArray;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$crossModule$.LineMetrics;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.RectHeightMode_STRUT_getInstance;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.RectWidthMode_TIGHT_getInstance;
  var firstOrNull = kotlin_kotlin.$crossModule$.firstOrNull_3;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Rect;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$crossModule$.TextBox;
  var lastOrNull = kotlin_kotlin.$crossModule$.lastOrNull_1;
  var toComposeRect = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.toComposeRect;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.RectHeightMode_MAX_getInstance;
  var RectWidthMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.RectWidthMode_MAX_getInstance;
  var asSkiaPath = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.asSkiaPath;
  var Rect_1 = kotlin_androidx_compose_ui_ui_geometry.$crossModule$.Rect_1;
  var getOrNull = kotlin_kotlin.$crossModule$.getOrNull;
  var getOrNull_0 = kotlin_kotlin.$crossModule$.getOrNull_1;
  var isLetterOrDigit = kotlin_kotlin.$crossModule$.isLetterOrDigit;
  var _get_nativeCanvas__3628725980 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._get_nativeCanvas__3628725980;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var sortWith = kotlin_kotlin.$crossModule$.sortWith;
  var asReversed = kotlin_kotlin.$crossModule$.asReversed;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ParagraphStyle;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.StrutStyle_init_$Create$;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$crossModule$.TextIndent;
  var Comparator = kotlin_kotlin.$crossModule$.Comparator;
  var compareValues = kotlin_kotlin.$crossModule$.compareValues;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Font_init_$Create$;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$crossModule$.ParagraphBuilder;
  var charSequenceSubSequence = kotlin_kotlin.$crossModule$.charSequenceSubSequence;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.BaselineMode_ALPHABETIC_getInstance;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PlaceholderStyle;
  var checkArithmetic = kotlin_androidx_compose_ui_ui_unit.$crossModule$.checkArithmetic;
  var _TextUnit___get_rawType__impl__2490641459 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_rawType__impl__2490641459;
  var pack = kotlin_androidx_compose_ui_ui_unit.$crossModule$.pack;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PlaceholderAlignment_MIDDLE_getInstance;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PlaceholderAlignment_BOTTOM_getInstance;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PlaceholderAlignment_TOP_getInstance;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_END_getInstance;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_START_getInstance;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_JUSTIFY_getInstance;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_CENTER_getInstance;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_RIGHT_getInstance;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Alignment_LEFT_getInstance;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Direction_LTR_getInstance;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$crossModule$.Direction_RTL_getInstance;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  //endregion
  'use strict';
  //region block: pre-declaration
  function _get_hasStaleResolvedFonts__4168759652() {
    return false;
  }
  function getLineEnd$default(lineIndex, visibleEnd, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return $handler == null ? this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd) : $handler(lineIndex, visibleEnd);
  }
  function paint$default(canvas, color, shadow, textDecoration, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4) === 0))
      shadow = null;
    if (!(($mask0 & 8) === 0))
      textDecoration = null;
    var tmp;
    if ($handler == null) {
      tmp = this.paint_aoyx3m_k$(canvas, color, shadow, textDecoration);
    } else {
      var tmp_0 = color;
      tmp = $handler(canvas, tmp_0 == null ? null : new Color(tmp_0), shadow, textDecoration);
    }
    return tmp;
  }
  AnnotationType.prototype = Object.create(Enum.prototype);
  AnnotationType.prototype.constructor = AnnotationType;
  VerbatimTtsAnnotation.prototype = Object.create(TtsAnnotation.prototype);
  VerbatimTtsAnnotation.prototype.constructor = VerbatimTtsAnnotation;
  function resolve$default(fontFamily, fontWeight, fontStyle, fontSynthesis, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      fontFamily = null;
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$();
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
    if (!(($mask0 & 8) === 0))
      fontSynthesis = Companion_getInstance_18()._get_All__855894832_54xjwk_k$();
    var tmp;
    if ($handler == null) {
      tmp = this.resolve_3z78ru_k$(fontFamily, fontWeight, fontStyle, fontSynthesis);
    } else {
      var tmp_0 = fontStyle;
      var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
      var tmp_2 = fontSynthesis;
      tmp = $handler(fontFamily, fontWeight, tmp_1, tmp_2 == null ? null : new FontSynthesis(tmp_2));
    }
    return tmp;
  }
  SystemFontFamily.prototype = Object.create(FontFamily.prototype);
  SystemFontFamily.prototype.constructor = SystemFontFamily;
  DefaultFontFamily.prototype = Object.create(SystemFontFamily.prototype);
  DefaultFontFamily.prototype.constructor = DefaultFontFamily;
  GenericFontFamily.prototype = Object.create(SystemFontFamily.prototype);
  GenericFontFamily.prototype.constructor = GenericFontFamily;
  FileBasedFontFamily.prototype = Object.create(FontFamily.prototype);
  FileBasedFontFamily.prototype.constructor = FileBasedFontFamily;
  LoadedFontFamily.prototype = Object.create(FontFamily.prototype);
  LoadedFontFamily.prototype.constructor = LoadedFontFamily;
  FontListFontFamily.prototype = Object.create(FileBasedFontFamily.prototype);
  FontListFontFamily.prototype.constructor = FontListFontFamily;
  $preloadCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $preloadCOROUTINE$0.prototype.constructor = $preloadCOROUTINE$0;
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  $runCachedCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $runCachedCOROUTINE$1.prototype.constructor = $runCachedCOROUTINE$1;
  _no_name_provided__1_2832250971.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__1_2832250971.prototype.constructor = _no_name_provided__1_2832250971;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda$slambda;
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$preload$slambda;
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype = Object.create(CoroutineImpl.prototype);
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.constructor = FontListFontFamilyTypefaceAdapter$resolve$slambda;
  AsyncFontListLoader$load$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AsyncFontListLoader$load$slambda.prototype.constructor = AsyncFontListLoader$load$slambda;
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.constructor = AsyncFontListLoader$loadWithTimeoutOrNull$slambda;
  $loadCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $loadCOROUTINE$2.prototype.constructor = $loadCOROUTINE$2;
  $loadWithTimeoutOrNullCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $loadWithTimeoutOrNullCOROUTINE$3.prototype.constructor = $loadWithTimeoutOrNullCOROUTINE$3;
  function notifyFocusedRect(rect) {
    unreachableDeclarationLog();
  }
  ResolvedTextDirection.prototype = Object.create(Enum.prototype);
  ResolvedTextDirection.prototype.constructor = ResolvedTextDirection;
  Platform.prototype = Object.create(Enum.prototype);
  Platform.prototype.constructor = Platform;
  LoadedFont.prototype = Object.create(PlatformFont.prototype);
  LoadedFont.prototype.constructor = LoadedFont;
  StyleAdd.prototype = Object.create(Op.prototype);
  StyleAdd.prototype.constructor = StyleAdd;
  PutPlaceholder.prototype = Object.create(Op.prototype);
  PutPlaceholder.prototype.constructor = PutPlaceholder;
  EndPlaceholder.prototype = Object.create(Op.prototype);
  EndPlaceholder.prototype.constructor = EndPlaceholder;
  StyleAdd_0.prototype = Object.create(Cut.prototype);
  StyleAdd_0.prototype.constructor = StyleAdd_0;
  StyleRemove.prototype = Object.create(Cut.prototype);
  StyleRemove.prototype.constructor = StyleRemove;
  PutPlaceholder_0.prototype = Object.create(Cut.prototype);
  PutPlaceholder_0.prototype.constructor = PutPlaceholder_0;
  EndPlaceholder_0.prototype = Object.create(Cut.prototype);
  EndPlaceholder_0.prototype.constructor = EndPlaceholder_0;
  //endregion
  function _get_EmptyAnnotatedString__2045286895() {
    unreachableDeclarationLog();
    init_properties_AnnotatedString_kt_2949889995();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, Object.create(Range.prototype));
  }
  function MutableRange_init_$Init$(item, start, end, tag, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      end = IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
    if (!(($mask0 & 8) === 0))
      tag = '';
    MutableRange.call($this, item, start, end, tag);
    return $this;
  }
  function MutableRange_init_$Create$(item, start, end, tag, $mask0, $marker) {
    unreachableDeclarationLog();
    return MutableRange_init_$Init$(item, start, end, tag, $mask0, $marker, Object.create(MutableRange.prototype));
  }
  function Builder_init_$Init$(capacity, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      capacity = 16;
    Builder.call($this, capacity);
    return $this;
  }
  function Builder_init_$Create$(capacity, $mask0, $marker) {
    unreachableDeclarationLog();
    return Builder_init_$Init$(capacity, $mask0, $marker, Object.create(Builder.prototype));
  }
  function MutableRange(item, start, end, tag) {
    unreachableDeclarationLog();
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
  }
  MutableRange.prototype._get_item__800109976_d8d4t4_k$ = function () {
    unreachableDeclarationLog();
    return this.item_1;
  };
  MutableRange.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    unreachableDeclarationLog();
    return this.start_1;
  };
  MutableRange.prototype._set_end__295856522_blvpy2_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.end_1 = _set____804775014;
  };
  MutableRange.prototype._get_end__856968982_e67thy_k$ = function () {
    unreachableDeclarationLog();
    return this.end_1;
  };
  MutableRange.prototype._get_tag__857403447_e6h4qf_k$ = function () {
    unreachableDeclarationLog();
    return this.tag_1;
  };
  MutableRange.prototype.toRange_axwxfj_k$ = function (defaultEnd) {
    unreachableDeclarationLog();
    var end = this.end_1 === IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$() ? defaultEnd : this.end_1;
    {
      var tmp0_check_0 = !(end === IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$());
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Item.end should be set first';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    return new Range(this.item_1, this.start_1, end, this.tag_1);
  };
  MutableRange.prototype.toRange$default_l8xn7k_k$ = function (defaultEnd, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      defaultEnd = IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
    return this.toRange_axwxfj_k$(defaultEnd);
  };
  MutableRange.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.item_1;
  };
  MutableRange.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.start_1;
  };
  MutableRange.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.end_1;
  };
  MutableRange.prototype.component4_7eebs9_k$ = function () {
    unreachableDeclarationLog();
    return this.tag_1;
  };
  MutableRange.prototype.copy_8fvktl_k$ = function (item, start, end, tag) {
    unreachableDeclarationLog();
    return new MutableRange(item, start, end, tag);
  };
  MutableRange.prototype.copy$default_a4t9dy_k$ = function (item, start, end, tag, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      item = this.item_1;
    if (!(($mask0 & 2) === 0))
      start = this.start_1;
    if (!(($mask0 & 4) === 0))
      end = this.end_1;
    if (!(($mask0 & 8) === 0))
      tag = this.tag_1;
    return this.copy_8fvktl_k$(item, start, end, tag);
  };
  MutableRange.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'MutableRange(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  MutableRange.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  MutableRange.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  MutableRange.$metadata$ = {
    simpleName: 'MutableRange',
    kind: 'class',
    interfaces: []
  };
  function _get_text__809840318($this) {
    unreachableDeclarationLog();
    return $this.text_1;
  }
  function _get_spanStyles__378637631($this) {
    unreachableDeclarationLog();
    return $this.spanStyles_1;
  }
  function _get_paragraphStyles__897995297($this) {
    unreachableDeclarationLog();
    return $this.paragraphStyles_1;
  }
  function _get_annotations__1905959661($this) {
    unreachableDeclarationLog();
    return $this.annotations_1;
  }
  function _get_styleStack__2113150996($this) {
    unreachableDeclarationLog();
    return $this.styleStack_1;
  }
  function Builder_init_$Init$_0(text, $this) {
    unreachableDeclarationLog();
    Builder_init_$Init$(0, 1, null, $this);
    $this.append_1o6mm0_k$(text);
    return $this;
  }
  function Builder_init_$Create$_0(text) {
    unreachableDeclarationLog();
    return Builder_init_$Init$_0(text, Object.create(Builder.prototype));
  }
  function Builder_init_$Init$_1(text, $this) {
    unreachableDeclarationLog();
    Builder_init_$Init$(0, 1, null, $this);
    $this.append_o859sl_k$(text);
    return $this;
  }
  function Builder_init_$Create$_1(text) {
    unreachableDeclarationLog();
    return Builder_init_$Init$_1(text, Object.create(Builder.prototype));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      spanStyles = emptyList();
    if (!(($mask0 & 4) === 0))
      paragraphStyles = emptyList();
    if (!(($mask0 & 8) === 0))
      annotations = emptyList();
    AnnotatedString.call($this, text, spanStyles, paragraphStyles, annotations);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker) {
    unreachableDeclarationLog();
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, annotations, $mask0, $marker, Object.create(AnnotatedString.prototype));
  }
  function AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $this) {
    var tmp$ret$2;
    $l$block: {
      tmp$ret$2 = emptyList();
      break $l$block;
    }
    AnnotatedString.call($this, text, spanStyles, paragraphStyles, tmp$ret$2);
    return $this;
  }
  function AnnotatedString_init_$Create$_0(text, spanStyles, paragraphStyles) {
    unreachableDeclarationLog();
    return AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, Object.create(AnnotatedString.prototype));
  }
  function AnnotatedString_init_$Init$_1(text, spanStyles, paragraphStyles, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = emptyList();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      spanStyles = tmp$ret$0;
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$0_1 = emptyList();
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      paragraphStyles = tmp$ret$0_1;
    }
    AnnotatedString_init_$Init$_0(text, spanStyles, paragraphStyles, $this);
    return $this;
  }
  function AnnotatedString_init_$Create$_1(text, spanStyles, paragraphStyles, $mask0, $marker) {
    return AnnotatedString_init_$Init$_1(text, spanStyles, paragraphStyles, $mask0, $marker, Object.create(AnnotatedString.prototype));
  }
  function Range(item, start, end, tag) {
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
    {
      var tmp0_require_0 = this.start_1 <= this.end_1;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Reversed range is not supported';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  Range.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  Range.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this.start_1;
  };
  Range.prototype._get_end__856968982_e67thy_k$ = function () {
    return this.end_1;
  };
  Range.prototype._get_tag__857403447_e6h4qf_k$ = function () {
    unreachableDeclarationLog();
    return this.tag_1;
  };
  Range.prototype.component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  Range.prototype.component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  Range.prototype.component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  Range.prototype.component4_7eebs9_k$ = function () {
    unreachableDeclarationLog();
    return this.tag_1;
  };
  Range.prototype.copy_8fvktl_k$ = function (item, start, end, tag) {
    unreachableDeclarationLog();
    return new Range(item, start, end, tag);
  };
  Range.prototype.copy$default_a4t9dy_k$ = function (item, start, end, tag, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      item = this.item_1;
    if (!(($mask0 & 2) === 0))
      start = this.start_1;
    if (!(($mask0 & 4) === 0))
      end = this.end_1;
    if (!(($mask0 & 8) === 0))
      tag = this.tag_1;
    return this.copy_8fvktl_k$(item, start, end, tag);
  };
  Range.prototype.toString = function () {
    return 'Range(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  Range.prototype.hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  Range.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  Range.$metadata$ = {
    simpleName: 'Range',
    kind: 'class',
    interfaces: []
  };
  function Builder(capacity) {
    unreachableDeclarationLog();
    this.text_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp.spanStyles_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0.paragraphStyles_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    tmp_1.annotations_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = ArrayList_init_$Create$();
      break $l$block_2;
    }
    tmp_2.styleStack_1 = tmp$ret$3;
  }
  Builder.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    unreachableDeclarationLog();
    return this.text_1._get_length__2347802853_w7ahp7_k$();
  };
  Builder.prototype.append_1o6mm0_k$ = function (text) {
    unreachableDeclarationLog();
    this.text_1.append_ssq29y_k$(text);
    Unit_getInstance();
  };
  Builder.prototype.append_y20c3x_k$ = function (char) {
    unreachableDeclarationLog();
    this.text_1.append_t8oh9e_k$(char);
    Unit_getInstance();
  };
  Builder.prototype.append_o859sl_k$ = function (text) {
    unreachableDeclarationLog();
    var start = this.text_1._get_length__2347802853_w7ahp7_k$();
    this.text_1.append_ssq29y_k$(text.text_1);
    Unit_getInstance();
    {
      var tmp0_fastForEach_0 = text.spanStyles_1;
      {
      }
      var inductionVariable = 0;
      var last = tmp0_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = tmp0_fastForEach_0.get_fkrdnv_k$(index_2);
          {
            this.addStyle_jucs1v_k$(item_3.item_1, start + item_3.start_1 | 0, start + item_3.end_1 | 0);
          }
        }
         while (inductionVariable <= last);
    }
    {
      var tmp1_fastForEach_0 = text.paragraphStyles_1;
      {
      }
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_2_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_3_0 = tmp1_fastForEach_0.get_fkrdnv_k$(index_2_0);
          {
            this.addStyle_n7uutx_k$(item_3_0.item_1, start + item_3_0.start_1 | 0, start + item_3_0.end_1 | 0);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    {
      var tmp2_fastForEach_0 = text.annotations_1;
      {
      }
      var inductionVariable_1 = 0;
      var last_1 = tmp2_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_2_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_3_1 = tmp2_fastForEach_0.get_fkrdnv_k$(index_2_1);
          {
            this.annotations_1.add_1j60pz_k$(new MutableRange(item_3_1.item_1, start + item_3_1.start_1 | 0, start + item_3_1.end_1 | 0, item_3_1.tag_1));
            Unit_getInstance();
          }
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  Builder.prototype.addStyle_jucs1v_k$ = function (style, start, end) {
    unreachableDeclarationLog();
    this.spanStyles_1.add_1j60pz_k$(MutableRange_init_$Create$(style, start, end, null, 8, null));
    Unit_getInstance();
  };
  Builder.prototype.addStyle_n7uutx_k$ = function (style, start, end) {
    unreachableDeclarationLog();
    this.paragraphStyles_1.add_1j60pz_k$(MutableRange_init_$Create$(style, start, end, null, 8, null));
    Unit_getInstance();
  };
  Builder.prototype.addStringAnnotation_gkf2b2_k$ = function (tag, annotation, start, end) {
    unreachableDeclarationLog();
    this.annotations_1.add_1j60pz_k$(new MutableRange(annotation, start, end, tag));
    Unit_getInstance();
  };
  Builder.prototype.addTtsAnnotation_b18ufb_k$ = function (ttsAnnotation, start, end) {
    unreachableDeclarationLog();
    this.annotations_1.add_1j60pz_k$(MutableRange_init_$Create$(ttsAnnotation, start, end, null, 8, null));
    Unit_getInstance();
  };
  Builder.prototype.pushStyle_xj8fdz_k$ = function (style) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp = this.text_1._get_length__2347802853_w7ahp7_k$();
      var tmp0_also_0 = MutableRange_init_$Create$(style, tmp, 0, null, 12, null);
      {
      }
      {
        this.styleStack_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
        this.spanStyles_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    Unit_getInstance();
    return this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
  };
  Builder.prototype.pushStyle_asyo3n_k$ = function (style) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp = this.text_1._get_length__2347802853_w7ahp7_k$();
      var tmp0_also_0 = MutableRange_init_$Create$(style, tmp, 0, null, 12, null);
      {
      }
      {
        this.styleStack_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
        this.paragraphStyles_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    Unit_getInstance();
    return this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
  };
  Builder.prototype.pushStringAnnotation_sekajs_k$ = function (tag, annotation) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp = this.text_1._get_length__2347802853_w7ahp7_k$();
      var tmp0_also_0 = MutableRange_init_$Create$(annotation, tmp, 0, tag, 4, null);
      {
      }
      {
        this.styleStack_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
        this.annotations_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    Unit_getInstance();
    return this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
  };
  Builder.prototype.pushTtsAnnotation_6qwefj_k$ = function (ttsAnnotation) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp = this.text_1._get_length__2347802853_w7ahp7_k$();
      var tmp0_also_0 = MutableRange_init_$Create$(ttsAnnotation, tmp, 0, null, 12, null);
      {
      }
      {
        this.styleStack_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
        this.annotations_1.add_1j60pz_k$(tmp0_also_0);
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    Unit_getInstance();
    return this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
  };
  Builder.prototype.pop_6ofvgg_k$ = function () {
    unreachableDeclarationLog();
    {
      var tmp$ret$0;
      $l$block: {
        var tmp0_isNotEmpty_0 = this.styleStack_1;
        tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
        break $l$block;
      }
      var tmp1_check_0 = tmp$ret$0;
      {
      }
      if (!tmp1_check_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Nothing to pop.';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var item = this.styleStack_1.removeAt_qvpkxi_k$(this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0);
    item.end_1 = this.text_1._get_length__2347802853_w7ahp7_k$();
  };
  Builder.prototype.pop_8luzb5_k$ = function (index) {
    unreachableDeclarationLog();
    {
      var tmp0_check_0 = index < this.styleStack_1._get_size__809037418_ddoh9m_k$();
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + index + ' should be less than ' + this.styleStack_1._get_size__809037418_ddoh9m_k$();
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    while ((this.styleStack_1._get_size__809037418_ddoh9m_k$() - 1 | 0) >= index) {
      this.pop_6ofvgg_k$();
    }
  };
  Builder.prototype.toAnnotatedString_yesz4e_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.text_1.toString();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastMap_0 = this.spanStyles_1;
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = item_3_4.toRange_axwxfj_k$(this.text_1._get_length__2347802853_w7ahp7_k$());
                  break $l$block;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$0;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_1;
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_fastMap_0 = this.paragraphStyles_1;
      {
      }
      var target_1_0 = ArrayList_init_$Create$_0(tmp1_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp1_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4_0 = tmp1_fastMap_0.get_fkrdnv_k$(index_2_3_0);
            {
              {
                var tmp$ret$2;
                $l$block_1: {
                  tmp$ret$2 = item_3_4_0.toRange_axwxfj_k$(this.text_1._get_length__2347802853_w7ahp7_k$());
                  break $l$block_1;
                }
                var tmp0_plusAssign_0_5_5_0 = tmp$ret$2;
                target_1_0.add_1j60pz_k$(tmp0_plusAssign_0_5_5_0);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$3 = target_1_0;
      break $l$block_2;
    }
    var tmp_1 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_4: {
      var tmp2_fastMap_0 = this.annotations_1;
      {
      }
      var target_1_1 = ArrayList_init_$Create$_0(tmp2_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_1 = 0;
        var last_1 = tmp2_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_2_3_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_3_4_1 = tmp2_fastMap_0.get_fkrdnv_k$(index_2_3_1);
            {
              {
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = item_3_4_1.toRange_axwxfj_k$(this.text_1._get_length__2347802853_w7ahp7_k$());
                  break $l$block_3;
                }
                var tmp0_plusAssign_0_5_5_1 = tmp$ret$4;
                target_1_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5_1);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_1 <= last_1);
      }
      tmp$ret$5 = target_1_1;
      break $l$block_4;
    }
    return new AnnotatedString(tmp, tmp_0, tmp_1, tmp$ret$5);
  };
  Builder.$metadata$ = {
    simpleName: 'Builder',
    kind: 'class',
    interfaces: []
  };
  function AnnotatedString(text, spanStyles, paragraphStyles, annotations) {
    this.text_1 = text;
    this.spanStyles_1 = spanStyles;
    this.paragraphStyles_1 = paragraphStyles;
    this.annotations_1 = annotations;
    var lastStyleEnd = -1;
    {
      var tmp0_fastForEach_0 = this.paragraphStyles_1;
      {
      }
      var inductionVariable = 0;
      var last = tmp0_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = tmp0_fastForEach_0.get_fkrdnv_k$(index_2);
          {
            {
              var tmp0_require_0_5 = item_3.start_1 >= lastStyleEnd;
              {
              }
              if (!tmp0_require_0_5) {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = 'ParagraphStyle should not overlap';
                  break $l$block;
                }
                var message_1_6 = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message_1_6));
              }
            }
            {
              var tmp1_require_0_7 = item_3.end_1 <= this.text_1.length;
              {
              }
              if (!tmp1_require_0_7) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = 'ParagraphStyle range [' + item_3.start_1 + ', ' + item_3.end_1 + ')' + ' is out of boundary';
                  break $l$block_0;
                }
                var message_1_8 = tmp$ret$1;
                throw IllegalArgumentException_init_$Create$(toString(message_1_8));
              }
            }
            lastStyleEnd = item_3.end_1;
          }
        }
         while (inductionVariable <= last);
    }
  }
  AnnotatedString.prototype._get_text__809840318_de5ose_k$ = function () {
    return this.text_1;
  };
  AnnotatedString.prototype._get_spanStyles__378637631_69finz_k$ = function () {
    return this.spanStyles_1;
  };
  AnnotatedString.prototype._get_paragraphStyles__897995297_eun5lt_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraphStyles_1;
  };
  AnnotatedString.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    unreachableDeclarationLog();
    return this.annotations_1;
  };
  AnnotatedString.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    return this.text_1.length;
  };
  AnnotatedString.prototype.get_a7b70_k$ = function (index) {
    return charSequenceGet(this.text_1, index);
  };
  AnnotatedString.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    {
      var tmp0_require_0 = startIndex <= endIndex;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    if (startIndex === 0 ? endIndex === this.text_1.length : false)
      return this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_substring_0 = this.text_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1_substring_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(startIndex, endIndex);
      break $l$block_1;
    }
    var text = tmp$ret$2;
    return new AnnotatedString(text, filterRanges(this.spanStyles_1, startIndex, endIndex), filterRanges(this.paragraphStyles_1, startIndex, endIndex), filterRanges(this.annotations_1, startIndex, endIndex));
  };
  AnnotatedString.prototype.subSequence_k52qt6_k$ = function (range) {
    unreachableDeclarationLog();
    return this.subSequence_5fh70h_k$(_TextRange___get_min__impl__2430166716(range), _TextRange___get_max__impl__4253134698(range));
  };
  AnnotatedString.prototype.plus_ya3dly_k$ = function (other) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = Builder_init_$Create$_1(this);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp0_with_0.append_o859sl_k$(other);
        tmp$ret$0 = tmp0_with_0.toAnnotatedString_yesz4e_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  AnnotatedString.prototype.getStringAnnotations_z0uxhg_k$ = function (tag, start, end) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastFilter_0 = this.annotations_1;
      {
      }
      var target_2 = ArrayList_init_$Create$_0(tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3 = tmp0_fastFilter_0.get_fkrdnv_k$(index_2);
            {
              var tmp$ret$0;
              $l$block: {
                var tmp;
                var tmp_0;
                var tmp_1 = item_3.item_1;
                if (typeof tmp_1 === 'string') {
                  tmp_0 = tag === item_3.tag_1;
                } else {
                  {
                    tmp_0 = false;
                  }
                }
                if (tmp_0) {
                  tmp = intersect(start, end, item_3.start_1, item_3.end_1);
                } else {
                  {
                    tmp = false;
                  }
                }
                tmp$ret$0 = tmp;
                break $l$block;
              }
              if (tmp$ret$0) {
                target_2.add_1j60pz_k$(item_3);
                Unit_getInstance();
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_2;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    return isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
  };
  AnnotatedString.prototype.getStringAnnotations_cnnz5v_k$ = function (start, end) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastFilter_0 = this.annotations_1;
      {
      }
      var target_2 = ArrayList_init_$Create$_0(tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3 = tmp0_fastFilter_0.get_fkrdnv_k$(index_2);
            {
              var tmp$ret$0;
              $l$block: {
                var tmp;
                var tmp_0 = item_3.item_1;
                if (typeof tmp_0 === 'string') {
                  tmp = intersect(start, end, item_3.start_1, item_3.end_1);
                } else {
                  {
                    tmp = false;
                  }
                }
                tmp$ret$0 = tmp;
                break $l$block;
              }
              if (tmp$ret$0) {
                target_2.add_1j60pz_k$(item_3);
                Unit_getInstance();
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_2;
      break $l$block_0;
    }
    var tmp_1 = tmp$ret$1;
    return isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
  };
  AnnotatedString.prototype.getTtsAnnotations_fb1uwp_k$ = function (start, end) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastFilter_0 = this.annotations_1;
      {
      }
      var target_2 = ArrayList_init_$Create$_0(tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3 = tmp0_fastFilter_0.get_fkrdnv_k$(index_2);
            {
              var tmp$ret$0;
              $l$block: {
                var tmp;
                var tmp_0 = item_3.item_1;
                if (tmp_0 instanceof TtsAnnotation) {
                  tmp = intersect(start, end, item_3.start_1, item_3.end_1);
                } else {
                  {
                    tmp = false;
                  }
                }
                tmp$ret$0 = tmp;
                break $l$block;
              }
              if (tmp$ret$0) {
                target_2.add_1j60pz_k$(item_3);
                Unit_getInstance();
              } else {
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_2;
      break $l$block_0;
    }
    var tmp_1 = tmp$ret$1;
    return isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
  };
  AnnotatedString.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    else {
    }
    if (!(this.text_1 === other.text_1))
      return false;
    if (!equals(this.spanStyles_1, other.spanStyles_1))
      return false;
    if (!equals(this.paragraphStyles_1, other.paragraphStyles_1))
      return false;
    if (!equals(this.annotations_1, other.annotations_1))
      return false;
    return true;
  };
  AnnotatedString.prototype.hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(31, result) + hashCode(this.spanStyles_1) | 0;
    result = imul(31, result) + hashCode(this.paragraphStyles_1) | 0;
    result = imul(31, result) + hashCode(this.annotations_1) | 0;
    return result;
  };
  AnnotatedString.prototype.toString = function () {
    return this.text_1;
  };
  AnnotatedString.$metadata$ = {
    simpleName: 'AnnotatedString',
    kind: 'class',
    interfaces: [CharSequence]
  };
  function filterRanges(ranges, start, end) {
    init_properties_AnnotatedString_kt_2949889995();
    {
      var tmp0_require_0 = start <= end;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$6;
    $l$block_5: {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        var target_2 = ArrayList_init_$Create$_0(ranges._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = ranges._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3 = ranges.get_fkrdnv_k$(index_2);
              {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = intersect(start, end, item_3.start_1, item_3.end_1);
                  break $l$block_0;
                }
                if (tmp$ret$1) {
                  target_2.add_1j60pz_k$(item_3);
                  Unit_getInstance();
                } else {
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$2 = target_2;
        break $l$block_1;
      }
      var tmp1_fastMap_0 = tmp$ret$2;
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp1_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp1_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4 = tmp1_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$5;
                $l$block_4: {
                  var tmp$ret$3;
                  $l$block_2: {
                    var tmp0_maxOf_0_7 = item_3_4.start_1;
                    tmp$ret$3 = Math.max(start, tmp0_maxOf_0_7);
                    break $l$block_2;
                  }
                  var tmp = tmp$ret$3 - start | 0;
                  var tmp$ret$4;
                  $l$block_3: {
                    var tmp1_minOf_0_8 = item_3_4.end_1;
                    tmp$ret$4 = Math.min(end, tmp1_minOf_0_8);
                    break $l$block_3;
                  }
                  tmp$ret$5 = new Range(item_3_4.item_1, tmp, tmp$ret$4 - start | 0, item_3_4.tag_1);
                  break $l$block_4;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$5;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$6 = target_1;
      break $l$block_5;
    }
    return tmp$ret$6;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    init_properties_AnnotatedString_kt_2949889995();
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.max(lStart, rStart);
      break $l$block;
    }
    var tmp_1 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = Math.min(lEnd, rEnd);
      break $l$block_0;
    }
    if (tmp_1 < tmp$ret$1) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = contains(lStart, lEnd, rStart, rEnd);
      }
    }
    if (tmp_0) {
      tmp = true;
    } else {
      {
        tmp = contains(rStart, rEnd, lStart, lEnd);
      }
    }
    return tmp;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    init_properties_AnnotatedString_kt_2949889995();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function mapEachParagraphStyle(_this__1828080292, defaultParagraphStyle, block) {
    unreachableDeclarationLog();
    init_properties_AnnotatedString_kt_2949889995();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastMap_0 = normalizedParagraphStyles(_this__1828080292, defaultParagraphStyle);
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$0;
                $l$block: {
                  var annotatedString_7 = substringWithoutParagraphStyles(_this__1828080292, item_3_4.start_1, item_3_4.end_1);
                  tmp$ret$0 = block(annotatedString_7, item_3_4);
                  break $l$block;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$0;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_1;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function substringWithoutParagraphStyles(_this__1828080292, start, end) {
    init_properties_AnnotatedString_kt_2949889995();
    var tmp;
    if (!(start === end)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = _this__1828080292.text_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_substring_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = '';
    }
    var tmp_0 = tmp;
    var tmp_1 = getLocalStyles(_this__1828080292, start, end);
    return AnnotatedString_init_$Create$_1(tmp_0, tmp_1, null, 4, null);
  }
  function normalizedParagraphStyles(_this__1828080292, defaultParagraphStyle) {
    init_properties_AnnotatedString_kt_2949889995();
    var length = _this__1828080292.text_1.length;
    var paragraphStyles = _this__1828080292.paragraphStyles_1;
    var lastOffset = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var result = tmp$ret$0;
    {
      {
      }
      var inductionVariable = 0;
      var last = paragraphStyles._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = paragraphStyles.get_fkrdnv_k$(index_2);
          {
            var style_5 = item_3.component1_7eebsc_k$();
            var start_6 = item_3.component2_7eebsb_k$();
            var end_7 = item_3.component3_7eebsa_k$();
            if (!(start_6 === lastOffset)) {
              result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, start_6));
              Unit_getInstance();
            }
            result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle.merge_y8afnf_k$(style_5), start_6, end_7));
            Unit_getInstance();
            lastOffset = end_7;
          }
        }
         while (inductionVariable <= last);
    }
    if (!(lastOffset === length)) {
      result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
      Unit_getInstance();
    }
    if (result.isEmpty_y1axqb_k$()) {
      result.add_1j60pz_k$(Range_init_$Create$(defaultParagraphStyle, 0, 0));
      Unit_getInstance();
    }
    return result;
  }
  function getLocalStyles(_this__1828080292, start, end) {
    init_properties_AnnotatedString_kt_2949889995();
    if (start === end) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = emptyList();
        break $l$block;
      }
      return tmp$ret$0;
    }
    if (start === 0 ? end >= _this__1828080292.text_1.length : false) {
      return _this__1828080292.spanStyles_1;
    }
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_fastFilter_0 = _this__1828080292.spanStyles_1;
        {
        }
        var target_2 = ArrayList_init_$Create$_0(tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3 = tmp0_fastFilter_0.get_fkrdnv_k$(index_2);
              {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = intersect(start, end, item_3.start_1, item_3.end_1);
                  break $l$block_0;
                }
                if (tmp$ret$1) {
                  target_2.add_1j60pz_k$(item_3);
                  Unit_getInstance();
                } else {
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$2 = target_2;
        break $l$block_1;
      }
      var tmp1_fastMap_0 = tmp$ret$2;
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp1_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp1_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4 = tmp1_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = Range_init_$Create$(item_3_4.item_1, coerceIn(item_3_4.start_1, start, end) - start | 0, coerceIn(item_3_4.end_1, start, end) - start | 0);
                  break $l$block_2;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$3;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$4 = target_1;
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  var properties_initialized_AnnotatedString_kt_2444021799;
  function init_properties_AnnotatedString_kt_2949889995() {
    if (!properties_initialized_AnnotatedString_kt_2444021799) {
      properties_initialized_AnnotatedString_kt_2444021799 = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$_1('', null, null, 6, null);
    }
  }
  function ExperimentalTextApi() {
    unreachableDeclarationLog();
  }
  ExperimentalTextApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof ExperimentalTextApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalTextApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalTextApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  ExperimentalTextApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@androidx.compose.ui.text.ExperimentalTextApi()';
  };
  ExperimentalTextApi.$metadata$ = {
    simpleName: 'ExperimentalTextApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function InternalTextApi() {
    unreachableDeclarationLog();
  }
  InternalTextApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof InternalTextApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalTextApi ? other : THROW_CCE();
    return true;
  };
  InternalTextApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  InternalTextApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@androidx.compose.ui.text.InternalTextApi()';
  };
  InternalTextApi.$metadata$ = {
    simpleName: 'InternalTextApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function MultiParagraph_init_$Init$(intrinsics, maxLines, ellipsis, width, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      maxLines = _get_DefaultMaxLines__2498455125();
    if (!(($mask0 & 4) === 0))
      ellipsis = false;
    MultiParagraph.call($this, intrinsics, maxLines, ellipsis, width);
    return $this;
  }
  function MultiParagraph_init_$Create$(intrinsics, maxLines, ellipsis, width, $mask0, $marker) {
    unreachableDeclarationLog();
    return MultiParagraph_init_$Init$(intrinsics, maxLines, ellipsis, width, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this) {
    unreachableDeclarationLog();
    MultiParagraph.call($this, new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader)), maxLines, ellipsis, width);
    return $this;
  }
  function MultiParagraph_init_$Create$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader) {
    unreachableDeclarationLog();
    return MultiParagraph_init_$Init$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = emptyList();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      placeholders = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0))
      maxLines = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    if (!(($mask0 & 16) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker) {
    unreachableDeclarationLog();
    return MultiParagraph_init_$Init$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    unreachableDeclarationLog();
    MultiParagraph.call($this, new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver), maxLines, ellipsis, width);
    return $this;
  }
  function MultiParagraph_init_$Create$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    unreachableDeclarationLog();
    return MultiParagraph_init_$Init$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, Object.create(MultiParagraph.prototype));
  }
  function MultiParagraph_init_$Init$_3(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = emptyList();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      placeholders = tmp$ret$0;
    }
    if (!(($mask0 & 64) === 0))
      maxLines = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    if (!(($mask0 & 128) === 0))
      ellipsis = false;
    MultiParagraph_init_$Init$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this);
    return $this;
  }
  function MultiParagraph_init_$Create$_3(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker) {
    unreachableDeclarationLog();
    return MultiParagraph_init_$Init$_3(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $mask0, $marker, Object.create(MultiParagraph.prototype));
  }
  function _get_annotatedString__3040968296($this) {
    return $this.intrinsics_1._get_annotatedString__3040968296_kqljtk_k$();
  }
  function requireIndexInRange($this, offset) {
    unreachableDeclarationLog();
    {
      var tmp0_require_0 = 0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__3040968296($this)._get_text__809840318_de5ose_k$()) - 1 | 0) : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__3040968296($this)._get_length__2347802853_w7ahp7_k$() + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    unreachableDeclarationLog();
    {
      var tmp0_require_0 = 0 <= offset ? offset <= _get_annotatedString__3040968296($this)._get_text__809840318_de5ose_k$().length : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__3040968296($this)._get_length__2347802853_w7ahp7_k$() + ']';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    unreachableDeclarationLog();
    {
      var tmp0_require_0 = 0 <= lineIndex ? lineIndex < $this.lineCount_1 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + lineIndex + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  function MultiParagraph(intrinsics, maxLines, ellipsis, width) {
    this.intrinsics_1 = intrinsics;
    this.maxLines_1 = maxLines;
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var paragraphInfoList = tmp$ret$0;
    var infoList = this.intrinsics_1._get_infoList__2695613151_qg7pk1_k$();
    var inductionVariable = 0;
    var last = infoList._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.get_fkrdnv_k$(index);
        var paragraph = Paragraph_0(paragraphInfo._get_intrinsics__2128523837_z79ni5_k$(), this.maxLines_1 - currentLineCount | 0, ellipsis, width);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph._get_height__3088126660_jyis70_k$();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph._get_lineCount__2337839158_wd81qi_k$() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.add_1j60pz_k$(new ParagraphInfo(paragraph, paragraphInfo._get_startIndex__250257659_44zw1n_k$(), paragraphInfo._get_endIndex__2798786036_oqscuk_k$(), startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        Unit_getInstance();
        if (paragraph._get_didExceedMaxLines__1693942499_s0j2eb_k$() ? true : endLineIndex === this.maxLines_1 ? !(index === _get_lastIndex__339712501(this.intrinsics_1._get_infoList__2695613151_qg7pk1_k$())) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.height_1 = currentHeight;
    this.lineCount_1 = currentLineCount;
    this.didExceedMaxLines_1 = didExceedMaxLines;
    this.paragraphInfoList_1 = paragraphInfoList;
    this.width_1 = width;
    var tmp = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp$ret$6;
      $l$block_5: {
        {
        }
        var target_2 = ArrayList_init_$Create$_0(paragraphInfoList._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable_0 = 0;
          var last_0 = paragraphInfoList._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_2 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_3 = paragraphInfoList.get_fkrdnv_k$(index_2);
              {
                var tmp$ret$5;
                $l$block_4: {
                  var tmp$ret$4;
                  $l$block_3: {
                    {
                    }
                    var tmp$ret$3;
                    $l$block_2: {
                      var tmp$ret$2;
                      $l$block_1: {
                        var tmp0_fastMap_0_2_6 = item_3.paragraph_1._get_placeholderRects__1914564847_vnvrov_k$();
                        {
                        }
                        var target_1_3_7 = ArrayList_init_$Create$_0(tmp0_fastMap_0_2_6._get_size__809037418_ddoh9m_k$());
                        {
                          {
                          }
                          var inductionVariable_1 = 0;
                          var last_1 = tmp0_fastMap_0_2_6._get_size__809037418_ddoh9m_k$() - 1 | 0;
                          if (inductionVariable_1 <= last_1)
                            do {
                              var index_2_3_5_9 = inductionVariable_1;
                              inductionVariable_1 = inductionVariable_1 + 1 | 0;
                              var item_3_4_6_10 = tmp0_fastMap_0_2_6.get_fkrdnv_k$(index_2_3_5_9);
                              {
                                {
                                  var tmp$ret$1;
                                  $l$block_0: {
                                    var tmp0_safe_receiver_7_8_12 = item_3_4_6_10;
                                    tmp$ret$1 = tmp0_safe_receiver_7_8_12 == null ? null : item_3.toGlobal_fkwano_k$(tmp0_safe_receiver_7_8_12);
                                    break $l$block_0;
                                  }
                                  var tmp0_plusAssign_0_5_5_7_11 = tmp$ret$1;
                                  target_1_3_7.add_1j60pz_k$(tmp0_plusAssign_0_5_5_7_11);
                                  Unit_getInstance();
                                }
                              }
                            }
                             while (inductionVariable_1 <= last_1);
                        }
                        tmp$ret$2 = target_1_3_7;
                        break $l$block_1;
                      }
                      tmp$ret$3 = tmp$ret$2;
                      break $l$block_2;
                    }
                    tmp$ret$4 = tmp$ret$3;
                    break $l$block_3;
                  }
                  tmp$ret$5 = tmp$ret$4;
                  break $l$block_4;
                }
                var list_4_5 = tmp$ret$5;
                addAll(target_2, list_4_5);
                Unit_getInstance();
              }
            }
             while (inductionVariable_0 <= last_0);
        }
        tmp$ret$6 = target_2;
        break $l$block_5;
      }
      var tmp0_let_0 = tmp$ret$6;
      {
      }
      var tmp$ret$10;
      $l$block_9: {
        var tmp_0;
        if (tmp0_let_0._get_size__809037418_ddoh9m_k$() < this.intrinsics_1._get_placeholders__3424351211_eecbo5_k$()._get_size__809037418_ddoh9m_k$()) {
          var tmp$ret$9;
          $l$block_8: {
            var tmp0_List_0_2 = this.intrinsics_1._get_placeholders__3424351211_eecbo5_k$()._get_size__809037418_ddoh9m_k$() - tmp0_let_0._get_size__809037418_ddoh9m_k$() | 0;
            var tmp$ret$8;
            $l$block_7: {
              var list_1_1_3 = ArrayList_init_$Create$_0(tmp0_List_0_2);
              {
                {
                }
                var inductionVariable_2 = 0;
                if (inductionVariable_2 < tmp0_List_0_2)
                  do {
                    var index_3_3_5 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    {
                      var tmp$ret$7;
                      $l$block_6: {
                        tmp$ret$7 = null;
                        break $l$block_6;
                      }
                      list_1_1_3.add_1j60pz_k$(tmp$ret$7);
                      Unit_getInstance();
                    }
                  }
                   while (inductionVariable_2 < tmp0_List_0_2);
              }
              tmp$ret$8 = list_1_1_3;
              break $l$block_7;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_8;
          }
          tmp_0 = plus(tmp0_let_0, tmp$ret$9);
        } else {
          tmp_0 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_0;
        break $l$block_9;
      }
      tmp$ret$11 = tmp$ret$10;
      break $l$block_10;
    }
    tmp.placeholderRects_1 = tmp$ret$11;
  }
  MultiParagraph.prototype._get_intrinsics__2128523837_z79ni5_k$ = function () {
    return this.intrinsics_1;
  };
  MultiParagraph.prototype._get_maxLines__694126384_bh9jcg_k$ = function () {
    unreachableDeclarationLog();
    return this.maxLines_1;
  };
  MultiParagraph.prototype._get_minIntrinsicWidth__3368612606_fbizuq_k$ = function () {
    unreachableDeclarationLog();
    return this.intrinsics_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
  };
  MultiParagraph.prototype._get_maxIntrinsicWidth__321695148_5bj1kc_k$ = function () {
    unreachableDeclarationLog();
    return this.intrinsics_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
  };
  MultiParagraph.prototype._get_didExceedMaxLines__1693942499_s0j2eb_k$ = function () {
    return this.didExceedMaxLines_1;
  };
  MultiParagraph.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.width_1;
  };
  MultiParagraph.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.height_1;
  };
  MultiParagraph.prototype._get_firstBaseline__4268418652_ft12c_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      tmp = this.paragraphInfoList_1.get_fkrdnv_k$(0).paragraph_1._get_firstBaseline__4268418652_ft12c_k$();
    }
    return tmp;
  };
  MultiParagraph.prototype._get_lastBaseline__435710384_77esa8_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_with_0 = last(this.paragraphInfoList_1);
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_with_0.toGlobalYPosition_9cwjwk_k$(tmp0_with_0.paragraph_1._get_lastBaseline__435710384_77esa8_k$());
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MultiParagraph.prototype._get_lineCount__2337839158_wd81qi_k$ = function () {
    unreachableDeclarationLog();
    return this.lineCount_1;
  };
  MultiParagraph.prototype._get_placeholderRects__1914564847_vnvrov_k$ = function () {
    return this.placeholderRects_1;
  };
  MultiParagraph.prototype._get_paragraphInfoList__3387624599_f07i3t_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraphInfoList_1;
  };
  MultiParagraph.prototype.paint_aoyx3m_k$ = function (canvas, color, shadow, decoration) {
    canvas.save_erlm4_k$();
    {
      var tmp0_fastForEach_0 = this.paragraphInfoList_1;
      {
      }
      var inductionVariable = 0;
      var last = tmp0_fastForEach_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item_3 = tmp0_fastForEach_0.get_fkrdnv_k$(index_2);
          {
            item_3.paragraph_1.paint_aoyx3m_k$(canvas, color, shadow, decoration);
            canvas.translate_62wf99_k$(0.0, item_3.paragraph_1._get_height__3088126660_jyis70_k$());
          }
        }
         while (inductionVariable <= last);
    }
    canvas.restore_a2id37_k$();
  };
  MultiParagraph.prototype.paint$default_wa4bwc_k$ = function (canvas, color, shadow, decoration, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4) === 0))
      shadow = null;
    if (!(($mask0 & 8) === 0))
      decoration = null;
    return this.paint_aoyx3m_k$(canvas, color, shadow, decoration);
  };
  MultiParagraph.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    {
      var tmp0_require_0 = (0 <= start ? start <= end : false) ? end <= _get_annotatedString__3040968296(this)._get_text__809840318_de5ose_k$().length : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__3040968296(this)._get_text__809840318_de5ose_k$().length + '),' + ' or start > end!';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.paragraphInfoList_1._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.paragraphInfoList_1.get_fkrdnv_k$(i);
        if (p.startIndex_1 >= end)
          break $l$loop_0;
        if (p.startIndex_1 === p.endIndex_1)
          continue $l$loop_0;
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp = p.toGlobal_wzvkqk_k$(p.paragraph_1.getPathForRange_i163f3_k$(p.toLocalIndex_wba0oh_k$(start), p.toLocalIndex_wba0oh_k$(end)));
          tmp$ret$1 = path.addPath$default_qq1a1o_k$(tmp, null, 2, null);
          break $l$block_0;
        }
      }
       while (inductionVariable < last);
    return path;
  };
  MultiParagraph.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    unreachableDeclarationLog();
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.height_1 ? _get_lastIndex__339712501(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, vertical);
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp;
        if (tmp0_with_0._get_length__2347802853_w7ahp7_k$() === 0) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_max_0_2 = tmp0_with_0.startIndex_1 - 1 | 0;
            tmp$ret$0 = Math.max(0, tmp0_max_0_2);
            break $l$block;
          }
          tmp = tmp$ret$0;
        } else {
          tmp = tmp0_with_0.toGlobalLineIndex_mdumgd_k$(tmp0_with_0.paragraph_1.getLineForVerticalPosition_c1p2r4_k$(tmp0_with_0.toLocalYPosition_j2kqvm_k$(vertical)));
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  MultiParagraph.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    var paragraphIndex = _Offset___get_y__impl__3791106138(position) <= 0.0 ? 0 : _Offset___get_y__impl__3791106138(position) >= this.height_1 ? _get_lastIndex__339712501(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, _Offset___get_y__impl__3791106138(position));
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp;
        if (tmp0_with_0._get_length__2347802853_w7ahp7_k$() === 0) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_max_0_2 = tmp0_with_0.startIndex_1 - 1 | 0;
            tmp$ret$0 = Math.max(0, tmp0_max_0_2);
            break $l$block;
          }
          tmp = tmp$ret$0;
        } else {
          tmp = tmp0_with_0.toGlobalIndex_v98a4h_k$(tmp0_with_0.paragraph_1.getOffsetForPosition_f04xcw_k$(tmp0_with_0.toLocal_92y82x_k$(position)));
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  MultiParagraph.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, offset);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobal_fkwano_k$(tmp0_with_0.paragraph_1.getBoundingBox_urudbk_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getHorizontalPosition_b8vvic_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset), usePrimaryDirection);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getParagraphDirection_x8sft2_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getBidiRunDirection_dqdnqj_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobal_swnfqp_k$(tmp0_with_0.paragraph_1.getWordBoundary_qx0177_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobal_fkwano_k$(tmp0_with_0.paragraph_1.getCursorRect_x5c8fl_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    unreachableDeclarationLog();
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__3040968296(this)._get_length__2347802853_w7ahp7_k$()) {
      tmp = _get_lastIndex__339712501(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobalLineIndex_mdumgd_k$(tmp0_with_0.paragraph_1.getLineForOffset_9a3vwv_k$(tmp0_with_0.toLocalIndex_wba0oh_k$(offset)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getLineLeft_w1obtc_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getLineRight_bo0e7j_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobalYPosition_9cwjwk_k$(tmp0_with_0.paragraph_1.getLineTop_8a2w7q_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobalYPosition_9cwjwk_k$(tmp0_with_0.paragraph_1.getLineBottom_spjtf0_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineHeight_ba5d5c_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getLineHeight_ba5d5c_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineWidth_ia4jjv_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.getLineWidth_ia4jjv_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobalIndex_v98a4h_k$(tmp0_with_0.paragraph_1.getLineStart_504snr_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex)));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.toGlobalIndex_v98a4h_k$(tmp0_with_0.paragraph_1.getLineEnd_7kqxuy_k$(tmp0_with_0.toLocalLineIndex_br45j9_k$(lineIndex), visibleEnd));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.prototype.getLineEnd$default_prmziz_k$ = function (lineIndex, visibleEnd, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  MultiParagraph.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_with_0 = this.paragraphInfoList_1.get_fkrdnv_k$(paragraphIndex);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_with_0.paragraph_1.isLineEllipsized_r1ol1o_k$(lineIndex);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MultiParagraph.$metadata$ = {
    simpleName: 'MultiParagraph',
    kind: 'class',
    interfaces: []
  };
  function ParagraphInfo_init_$Init$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 8) === 0))
      startLineIndex = -1;
    if (!(($mask0 & 16) === 0))
      endLineIndex = -1;
    if (!(($mask0 & 32) === 0))
      top = -1.0;
    if (!(($mask0 & 64) === 0))
      bottom = -1.0;
    ParagraphInfo.call($this, paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
    return $this;
  }
  function ParagraphInfo_init_$Create$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker) {
    unreachableDeclarationLog();
    return ParagraphInfo_init_$Init$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $marker, Object.create(ParagraphInfo.prototype));
  }
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    this.paragraph_1 = paragraph;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.startLineIndex_1 = startLineIndex;
    this.endLineIndex_1 = endLineIndex;
    this.top_1 = top;
    this.bottom_1 = bottom;
  }
  ParagraphInfo.prototype._get_paragraph__3285604003_goy5p9_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraph_1;
  };
  ParagraphInfo.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    unreachableDeclarationLog();
    return this.startIndex_1;
  };
  ParagraphInfo.prototype._get_endIndex__2798786036_oqscuk_k$ = function () {
    unreachableDeclarationLog();
    return this.endIndex_1;
  };
  ParagraphInfo.prototype._set_startLineIndex__3277441947_e7nbuz_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.startLineIndex_1 = _set____804775014;
  };
  ParagraphInfo.prototype._get_startLineIndex__526202511_8pacgf_k$ = function () {
    unreachableDeclarationLog();
    return this.startLineIndex_1;
  };
  ParagraphInfo.prototype._set_endLineIndex__2752900884_ihr36s_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.endLineIndex_1 = _set____804775014;
  };
  ParagraphInfo.prototype._get_endLineIndex__3693053704_9yd3i0_k$ = function () {
    unreachableDeclarationLog();
    return this.endLineIndex_1;
  };
  ParagraphInfo.prototype._set_top__296304720_3vxdu5_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.top_1 = _set____804775014;
  };
  ParagraphInfo.prototype._get_top__857417180_e6hfbw_k$ = function () {
    unreachableDeclarationLog();
    return this.top_1;
  };
  ParagraphInfo.prototype._set_bottom__2266336076_l6gf1r_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.bottom_1 = _set____804775014;
  };
  ParagraphInfo.prototype._get_bottom__2354915904_w3218g_k$ = function () {
    unreachableDeclarationLog();
    return this.bottom_1;
  };
  ParagraphInfo.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    return this.endIndex_1 - this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toLocalIndex_wba0oh_k$ = function (_this__1828080292) {
    return coerceIn(_this__1828080292, this.startIndex_1, this.endIndex_1) - this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalIndex_v98a4h_k$ = function (_this__1828080292) {
    return _this__1828080292 + this.startIndex_1 | 0;
  };
  ParagraphInfo.prototype.toLocalLineIndex_br45j9_k$ = function (_this__1828080292) {
    unreachableDeclarationLog();
    return _this__1828080292 - this.startLineIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalLineIndex_mdumgd_k$ = function (_this__1828080292) {
    unreachableDeclarationLog();
    return _this__1828080292 + this.startLineIndex_1 | 0;
  };
  ParagraphInfo.prototype.toGlobalYPosition_9cwjwk_k$ = function (_this__1828080292) {
    return _this__1828080292 + this.top_1;
  };
  ParagraphInfo.prototype.toLocalYPosition_j2kqvm_k$ = function (_this__1828080292) {
    unreachableDeclarationLog();
    return _this__1828080292 - this.top_1;
  };
  ParagraphInfo.prototype.toLocal_92y82x_k$ = function (_this__1828080292) {
    return Offset(_Offset___get_x__impl__2048295803(_this__1828080292), _Offset___get_y__impl__3791106138(_this__1828080292) - this.top_1);
  };
  ParagraphInfo.prototype.toGlobal_fkwano_k$ = function (_this__1828080292) {
    return _this__1828080292.translate_bllf6j_k$(Offset(0.0, this.top_1));
  };
  ParagraphInfo.prototype.toGlobal_wzvkqk_k$ = function (_this__1828080292) {
    _this__1828080292.translate_mdejcc_k$(Offset(0.0, this.top_1));
    return _this__1828080292;
  };
  ParagraphInfo.prototype.toGlobal_swnfqp_k$ = function (_this__1828080292) {
    unreachableDeclarationLog();
    return TextRange_0(this.toGlobalIndex_v98a4h_k$(_TextRange___get_start__impl__2306077420(_this__1828080292)), this.toGlobalIndex_v98a4h_k$(_TextRange___get_end__impl__3306702867(_this__1828080292)));
  };
  ParagraphInfo.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraph_1;
  };
  ParagraphInfo.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.startIndex_1;
  };
  ParagraphInfo.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.endIndex_1;
  };
  ParagraphInfo.prototype.component4_7eebs9_k$ = function () {
    unreachableDeclarationLog();
    return this.startLineIndex_1;
  };
  ParagraphInfo.prototype.component5_7eebs8_k$ = function () {
    unreachableDeclarationLog();
    return this.endLineIndex_1;
  };
  ParagraphInfo.prototype.component6_7eebs7_k$ = function () {
    unreachableDeclarationLog();
    return this.top_1;
  };
  ParagraphInfo.prototype.component7_7eebs6_k$ = function () {
    unreachableDeclarationLog();
    return this.bottom_1;
  };
  ParagraphInfo.prototype.copy_c94g8g_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    unreachableDeclarationLog();
    return new ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  ParagraphInfo.prototype.copy$default_7zjybu_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      paragraph = this.paragraph_1;
    if (!(($mask0 & 2) === 0))
      startIndex = this.startIndex_1;
    if (!(($mask0 & 4) === 0))
      endIndex = this.endIndex_1;
    if (!(($mask0 & 8) === 0))
      startLineIndex = this.startLineIndex_1;
    if (!(($mask0 & 16) === 0))
      endLineIndex = this.endLineIndex_1;
    if (!(($mask0 & 32) === 0))
      top = this.top_1;
    if (!(($mask0 & 64) === 0))
      bottom = this.bottom_1;
    return this.copy_c94g8g_k$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  ParagraphInfo.prototype.toString = function () {
    return 'ParagraphInfo(paragraph=' + this.paragraph_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ', startLineIndex=' + this.startLineIndex_1 + ', endLineIndex=' + this.endLineIndex_1 + ', top=' + this.top_1 + ', bottom=' + this.bottom_1 + ')';
  };
  ParagraphInfo.prototype.hashCode = function () {
    var result = hashCode(this.paragraph_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    result = imul(result, 31) + this.startLineIndex_1 | 0;
    result = imul(result, 31) + this.endLineIndex_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  ParagraphInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.paragraph_1, tmp0_other_with_cast.paragraph_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    if (!(this.startLineIndex_1 === tmp0_other_with_cast.startLineIndex_1))
      return false;
    if (!(this.endLineIndex_1 === tmp0_other_with_cast.endLineIndex_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  ParagraphInfo.$metadata$ = {
    simpleName: 'ParagraphInfo',
    kind: 'class',
    interfaces: []
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block_1: {
      var low_1 = 0;
      var high_2 = paragraphInfoList._get_size__809037418_ddoh9m_k$() - 1 | 0;
      while (low_1 <= high_2) {
        var mid_3 = (low_1 + high_2 | 0) >>> 1 | 0;
        var midVal_4 = paragraphInfoList.get_fkrdnv_k$(mid_3);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = midVal_4.startIndex_1 > index ? 1 : midVal_4.endIndex_1 <= index ? -1 : 0;
          break $l$block;
        }
        var cmp_5 = tmp$ret$0;
        if (cmp_5 < 0)
          low_1 = mid_3 + 1 | 0;
        else if (cmp_5 > 0)
          high_2 = mid_3 - 1 | 0;
        else {
          tmp$ret$1 = mid_3;
          break $l$block_1;
        }
      }
      tmp$ret$1 = -(low_1 + 1 | 0) | 0;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block_1: {
      var low_1 = 0;
      var high_2 = paragraphInfoList._get_size__809037418_ddoh9m_k$() - 1 | 0;
      while (low_1 <= high_2) {
        var mid_3 = (low_1 + high_2 | 0) >>> 1 | 0;
        var midVal_4 = paragraphInfoList.get_fkrdnv_k$(mid_3);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = midVal_4.top_1 > y ? 1 : midVal_4.bottom_1 <= y ? -1 : 0;
          break $l$block;
        }
        var cmp_5 = tmp$ret$0;
        if (cmp_5 < 0)
          low_1 = mid_3 + 1 | 0;
        else if (cmp_5 > 0)
          high_2 = mid_3 - 1 | 0;
        else {
          tmp$ret$1 = mid_3;
          break $l$block_1;
        }
      }
      tmp$ret$1 = -(low_1 + 1 | 0) | 0;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_1: {
      var low_1 = 0;
      var high_2 = paragraphInfoList._get_size__809037418_ddoh9m_k$() - 1 | 0;
      while (low_1 <= high_2) {
        var mid_3 = (low_1 + high_2 | 0) >>> 1 | 0;
        var midVal_4 = paragraphInfoList.get_fkrdnv_k$(mid_3);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = midVal_4.startLineIndex_1 > lineIndex ? 1 : midVal_4.endLineIndex_1 <= lineIndex ? -1 : 0;
          break $l$block;
        }
        var cmp_5 = tmp$ret$0;
        if (cmp_5 < 0)
          low_1 = mid_3 + 1 | 0;
        else if (cmp_5 > 0)
          high_2 = mid_3 - 1 | 0;
        else {
          tmp$ret$1 = mid_3;
          break $l$block_1;
        }
      }
      tmp$ret$1 = -(low_1 + 1 | 0) | 0;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function fastBinarySearch(_this__1828080292, comparison) {
    unreachableDeclarationLog();
    var low = 0;
    var high = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__1828080292.get_fkrdnv_k$(mid);
      var cmp = comparison(midVal);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, $this) {
    unreachableDeclarationLog();
    MultiParagraphIntrinsics.call($this, annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    return $this;
  }
  function MultiParagraphIntrinsics_init_$Create$(annotatedString, style, placeholders, density, resourceLoader) {
    unreachableDeclarationLog();
    return MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, Object.create(MultiParagraphIntrinsics.prototype));
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style._get_textDirection__681174591_d3hmoh_k$();
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = style;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp_2 = defaultStyle._get_textDirection__681174591_d3hmoh_k$();
      tmp_1 = style.copy$default_jk8vas_k$(null, tmp_2, null, null, 13, null);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_fastMaxBy_0 = this$0.infoList_1;
        {
        }
        if (tmp0_fastMaxBy_0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block_2;
        }
        var maxElem_1 = tmp0_fastMaxBy_0.get_fkrdnv_k$(0);
        var tmp$ret$1;
        $l$block_0: {
          var tmp1__anonymous__7_4003154336 = maxElem_1;
          tmp$ret$1 = tmp1__anonymous__7_4003154336.intrinsics_1._get_minIntrinsicWidth__3368612606_fbizuq_k$();
          break $l$block_0;
        }
        var maxValue_2 = tmp$ret$1;
        var inductionVariable = 1;
        var last = _get_lastIndex__339712501(tmp0_fastMaxBy_0);
        if (inductionVariable <= last)
          do {
            var i_4 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e_5 = tmp0_fastMaxBy_0.get_fkrdnv_k$(i_4);
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = e_5.intrinsics_1._get_minIntrinsicWidth__3368612606_fbizuq_k$();
              break $l$block_1;
            }
            var v_6 = tmp$ret$2;
            if (compareTo(maxValue_2, v_6) < 0) {
              maxElem_1 = e_5;
              maxValue_2 = v_6;
            }
          }
           while (!(i_4 === last));
        tmp$ret$0 = maxElem_1;
        break $l$block_2;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_minIntrinsicWidth__3368612606_fbizuq_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_fastMaxBy_0 = this$0.infoList_1;
        {
        }
        if (tmp0_fastMaxBy_0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block_2;
        }
        var maxElem_1 = tmp0_fastMaxBy_0.get_fkrdnv_k$(0);
        var tmp$ret$1;
        $l$block_0: {
          var tmp1__anonymous__7_4003154336 = maxElem_1;
          tmp$ret$1 = tmp1__anonymous__7_4003154336.intrinsics_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
          break $l$block_0;
        }
        var maxValue_2 = tmp$ret$1;
        var inductionVariable = 1;
        var last = _get_lastIndex__339712501(tmp0_fastMaxBy_0);
        if (inductionVariable <= last)
          do {
            var i_4 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e_5 = tmp0_fastMaxBy_0.get_fkrdnv_k$(i_4);
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = e_5.intrinsics_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
              break $l$block_1;
            }
            var v_6 = tmp$ret$2;
            if (compareTo(maxValue_2, v_6) < 0) {
              maxElem_1 = e_5;
              maxValue_2 = v_6;
            }
          }
           while (!(i_4 === last));
        tmp$ret$0 = maxElem_1;
        break $l$block_2;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.annotatedString_1 = annotatedString;
    this.placeholders_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.minIntrinsicWidth$delegate_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.maxIntrinsicWidth$delegate_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.toParagraphStyle_zfuegy_k$();
    var tmp_3 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_mapEachParagraphStyle_0 = this.annotatedString_1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_fastMap_0_1 = normalizedParagraphStyles(tmp0_mapEachParagraphStyle_0, paragraphStyle);
        {
        }
        var target_1_2 = ArrayList_init_$Create$_0(tmp0_fastMap_0_1._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = tmp0_fastMap_0_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3_4 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4_5 = tmp0_fastMap_0_1.get_fkrdnv_k$(index_2_3_4);
              {
                {
                  var tmp$ret$1;
                  $l$block_0: {
                    var annotatedString_7_7 = substringWithoutParagraphStyles(tmp0_mapEachParagraphStyle_0, item_3_4_5._get_start__3614751663_b8zdqp_k$(), item_3_4_5._get_end__856968982_e67thy_k$());
                    var tmp$ret$0;
                    $l$block: {
                      var currentParagraphStyle_9 = resolveTextDirection(this, item_3_4_5._get_item__800109976_d8d4t4_k$(), paragraphStyle);
                      tmp$ret$0 = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_7_7._get_text__809840318_de5ose_k$(), style.merge_lt4ge4_k$(currentParagraphStyle_9), annotatedString_7_7._get_spanStyles__378637631_69finz_k$(), getLocalPlaceholders(this.placeholders_1, item_3_4_5._get_start__3614751663_b8zdqp_k$(), item_3_4_5._get_end__856968982_e67thy_k$()), density, fontFamilyResolver), item_3_4_5._get_start__3614751663_b8zdqp_k$(), item_3_4_5._get_end__856968982_e67thy_k$());
                      break $l$block;
                    }
                    tmp$ret$1 = tmp$ret$0;
                    break $l$block_0;
                  }
                  var tmp0_plusAssign_0_5_5_6 = tmp$ret$1;
                  target_1_2.add_1j60pz_k$(tmp0_plusAssign_0_5_5_6);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$2 = target_1_2;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    tmp_3.infoList_1 = tmp$ret$3;
  }
  MultiParagraphIntrinsics.prototype._get_annotatedString__3040968296_kqljtk_k$ = function () {
    return this.annotatedString_1;
  };
  MultiParagraphIntrinsics.prototype._get_placeholders__3424351211_eecbo5_k$ = function () {
    return this.placeholders_1;
  };
  MultiParagraphIntrinsics.prototype._get_minIntrinsicWidth__3368612606_fbizuq_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = minIntrinsicWidth$factory();
      tmp$ret$0 = this.minIntrinsicWidth$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype._get_maxIntrinsicWidth__321695148_5bj1kc_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = maxIntrinsicWidth$factory();
      tmp$ret$0 = this.maxIntrinsicWidth$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  MultiParagraphIntrinsics.prototype._get_infoList__2695613151_qg7pk1_k$ = function () {
    return this.infoList_1;
  };
  MultiParagraphIntrinsics.prototype._get_hasStaleResolvedFonts__4168759652_2352fw_k$ = function () {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_fastAny_0 = this.infoList_1;
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
                tmp$ret$0 = item_3_3.intrinsics_1._get_hasStaleResolvedFonts__4168759652_2352fw_k$();
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
    return tmp$ret$1;
  };
  MultiParagraphIntrinsics.$metadata$ = {
    simpleName: 'MultiParagraphIntrinsics',
    kind: 'class',
    interfaces: [ParagraphIntrinsics]
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.intrinsics_1 = intrinsics;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
  }
  ParagraphIntrinsicInfo.prototype._get_intrinsics__2128523837_z79ni5_k$ = function () {
    return this.intrinsics_1;
  };
  ParagraphIntrinsicInfo.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    return this.startIndex_1;
  };
  ParagraphIntrinsicInfo.prototype._get_endIndex__2798786036_oqscuk_k$ = function () {
    return this.endIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.intrinsics_1;
  };
  ParagraphIntrinsicInfo.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.startIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.endIndex_1;
  };
  ParagraphIntrinsicInfo.prototype.copy_ani2qm_k$ = function (intrinsics, startIndex, endIndex) {
    unreachableDeclarationLog();
    return new ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex);
  };
  ParagraphIntrinsicInfo.prototype.copy$default_o1zf5w_k$ = function (intrinsics, startIndex, endIndex, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      intrinsics = this.intrinsics_1;
    if (!(($mask0 & 2) === 0))
      startIndex = this.startIndex_1;
    if (!(($mask0 & 4) === 0))
      endIndex = this.endIndex_1;
    return this.copy_ani2qm_k$(intrinsics, startIndex, endIndex);
  };
  ParagraphIntrinsicInfo.prototype.toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.intrinsics_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ')';
  };
  ParagraphIntrinsicInfo.prototype.hashCode = function () {
    var result = hashCode(this.intrinsics_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    return result;
  };
  ParagraphIntrinsicInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.intrinsics_1, tmp0_other_with_cast.intrinsics_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    return true;
  };
  ParagraphIntrinsicInfo.$metadata$ = {
    simpleName: 'ParagraphIntrinsicInfo',
    kind: 'class',
    interfaces: []
  };
  function getLocalPlaceholders(_this__1828080292, start, end) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var target_2 = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$());
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
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = intersect(start, end, item_3._get_start__3614751663_b8zdqp_k$(), item_3._get_end__856968982_e67thy_k$());
                  break $l$block;
                }
                if (tmp$ret$0) {
                  target_2.add_1j60pz_k$(item_3);
                  Unit_getInstance();
                } else {
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$1 = target_2;
        break $l$block_0;
      }
      var tmp0_fastMap_0 = tmp$ret$1;
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$3;
                $l$block_2: {
                  {
                    var tmp0_require_0_7 = start <= item_3_4._get_start__3614751663_b8zdqp_k$() ? item_3_4._get_end__856968982_e67thy_k$() <= end : false;
                    {
                    }
                    if (!tmp0_require_0_7) {
                      var tmp$ret$2;
                      $l$block_1: {
                        tmp$ret$2 = 'placeholder can not overlap with paragraph.';
                        break $l$block_1;
                      }
                      var message_1_8 = tmp$ret$2;
                      throw IllegalArgumentException_init_$Create$(toString(message_1_8));
                    }
                  }
                  tmp$ret$3 = Range_init_$Create$(item_3_4._get_item__800109976_d8d4t4_k$(), item_3_4._get_start__3614751663_b8zdqp_k$() - start | 0, item_3_4._get_end__856968982_e67thy_k$() - start | 0);
                  break $l$block_2;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$3;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$4 = target_1;
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver._get_minIntrinsicWidth__3368612606_fbizuq_k$();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
    }, null);
  }
  function _get_DefaultMaxLines__2498455125() {
    unreachableDeclarationLog();
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function Paragraph() {
    unreachableDeclarationLog();
  }
  Paragraph.$metadata$ = {
    simpleName: 'Paragraph',
    kind: 'interface',
    interfaces: []
  };
  function Paragraph_0(paragraphIntrinsics, maxLines, ellipsis, width) {
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, width);
  }
  function Paragraph$default(paragraphIntrinsics, maxLines, ellipsis, width, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      maxLines = 2147483647;
    if (!(($mask0 & 4) === 0))
      ellipsis = false;
    return Paragraph_0(paragraphIntrinsics, maxLines, ellipsis, width);
  }
  function ParagraphIntrinsics() {
    unreachableDeclarationLog();
  }
  ParagraphIntrinsics.$metadata$ = {
    simpleName: 'ParagraphIntrinsics',
    kind: 'interface',
    interfaces: []
  };
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics$default(text, style, spanStyles, placeholders, density, fontFamilyResolver, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = emptyList();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      spanStyles = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$0_1 = emptyList();
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      placeholders = tmp$ret$0_1;
    }
    return ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function _get_DefaultLineHeight__2391628693() {
    init_properties_ParagraphStyle_kt_1274028439();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      textAlign = null;
    if (!(($mask0 & 2) === 0))
      textDirection = null;
    if (!(($mask0 & 4) === 0))
      lineHeight = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 8) === 0))
      textIndent = null;
    if (!(($mask0 & 16) === 0))
      platformStyle = null;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle);
    return $this;
  }
  function ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker) {
    unreachableDeclarationLog();
    return ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, $this) {
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_0(textAlign, textDirection, lineHeight, textIndent) {
    return ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, Object.create(ParagraphStyle_0.prototype));
  }
  function ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      textAlign = null;
    if (!(($mask0 & 2) === 0))
      textDirection = null;
    if (!(($mask0 & 4) === 0))
      lineHeight = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 8) === 0))
      textIndent = null;
    ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, $this);
    return $this;
  }
  function ParagraphStyle_init_$Create$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker) {
    unreachableDeclarationLog();
    return ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, Object.create(ParagraphStyle_0.prototype));
  }
  function mergePlatformStyle($this, other) {
    if ($this.platformStyle_1 == null)
      return other;
    if (other == null)
      return $this.platformStyle_1;
    return $this.platformStyle_1.merge_phrebc_k$(other);
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle) {
    this.textAlign_1 = textAlign;
    this.textDirection_1 = textDirection;
    this.lineHeight_1 = lineHeight;
    this.textIndent_1 = textIndent;
    this.platformStyle_1 = platformStyle;
    if (!equals(this.lineHeight_1, Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$())) {
      {
        var tmp0_check_0 = _TextUnit___get_value__impl__1070471396(this.lineHeight_1) >= 0.0;
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__1070471396(this.lineHeight_1) + ')';
            break $l$block;
          }
          var message_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
      }
    }
  }
  ParagraphStyle_0.prototype._get_textAlign__21108601_6amoil_k$ = function () {
    return this.textAlign_1;
  };
  ParagraphStyle_0.prototype._get_textDirection__681174591_d3hmoh_k$ = function () {
    return this.textDirection_1;
  };
  ParagraphStyle_0.prototype._get_lineHeight__3598496176_utqlcg_k$ = function () {
    return this.lineHeight_1;
  };
  ParagraphStyle_0.prototype._get_textIndent__3512011634_cy5gge_k$ = function () {
    return this.textIndent_1;
  };
  ParagraphStyle_0.prototype._get_platformStyle__3976805267_59fbe5_k$ = function () {
    return this.platformStyle_1;
  };
  ParagraphStyle_0.prototype.merge_y8afnf_k$ = function (other) {
    if (other == null)
      return this;
    var tmp;
    if (_get_isUnspecified__892174020(other.lineHeight_1)) {
      tmp = this.lineHeight_1;
    } else {
      tmp = other.lineHeight_1;
    }
    var tmp3_lineHeight = tmp;
    var tmp2_elvis_lhs = other.textIndent_1;
    var tmp4_textIndent = tmp2_elvis_lhs == null ? this.textIndent_1 : tmp2_elvis_lhs;
    var tmp0_elvis_lhs = other.textAlign_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = this.textAlign_1;
    } else {
      {
        tmp_0 = tmp0_elvis_lhs;
      }
    }
    var tmp5_textAlign = tmp_0;
    var tmp1_elvis_lhs = other.textDirection_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = this.textDirection_1;
    } else {
      {
        tmp_2 = tmp1_elvis_lhs;
      }
    }
    var tmp6_textDirection = tmp_2;
    var tmp7_platformStyle = mergePlatformStyle(this, other.platformStyle_1);
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle);
  };
  ParagraphStyle_0.prototype.merge$default_kpt5hg_k$ = function (other, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_y8afnf_k$(other);
  };
  ParagraphStyle_0.prototype.plus_3d6656_k$ = function (other) {
    unreachableDeclarationLog();
    return this.merge_y8afnf_k$(other);
  };
  ParagraphStyle_0.prototype.copy_eifuig_k$ = function (textAlign, textDirection, lineHeight, textIndent) {
    return ParagraphStyle_init_$Create$_0(textAlign, textDirection, lineHeight, textIndent);
  };
  ParagraphStyle_0.prototype.copy$default_jk8vas_k$ = function (textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      textAlign = this.textAlign_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.textDirection_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.lineHeight_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.textIndent_1;
    return this.copy_eifuig_k$(textAlign, textDirection, lineHeight, textIndent);
  };
  ParagraphStyle_0.prototype.copy_mrirs_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle) {
    unreachableDeclarationLog();
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle);
  };
  ParagraphStyle_0.prototype.copy$default_mf6a48_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      textAlign = this.textAlign_1;
    if (!(($mask0 & 2) === 0))
      textDirection = this.textDirection_1;
    if (!(($mask0 & 4) === 0))
      lineHeight = this.lineHeight_1;
    if (!(($mask0 & 8) === 0))
      textIndent = this.textIndent_1;
    if (!(($mask0 & 16) === 0))
      platformStyle = this.platformStyle_1;
    return this.copy_mrirs_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle);
  };
  ParagraphStyle_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    else {
    }
    var tmp = this.textAlign_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.textAlign_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    else {
    }
    var tmp_2 = this.textDirection_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.textDirection_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    else {
    }
    if (!equals(this.lineHeight_1, other.lineHeight_1))
      return false;
    if (!equals(this.textIndent_1, other.textIndent_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  ParagraphStyle_0.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.textAlign_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      {
        tmp = TextAlign__hashCode_impl_2587726842(tmp0_safe_receiver);
      }
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.textDirection_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      {
        tmp_2 = TextDirection__hashCode_impl_977707456(tmp2_safe_receiver);
      }
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_2674772001(this.lineHeight_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.textIndent_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.platformStyle_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  ParagraphStyle_0.prototype.toString = function () {
    var tmp = this.textAlign_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.textDirection_1;
    return tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.lineHeight_1) + ', ') + ('textIndent=' + this.textIndent_1 + ', ') + ('platformStyle=' + this.platformStyle_1) + ')';
  };
  ParagraphStyle_0.$metadata$ = {
    simpleName: 'ParagraphStyle',
    kind: 'class',
    interfaces: []
  };
  function resolveParagraphStyleDefaults(style, direction) {
    init_properties_ParagraphStyle_kt_1274028439();
    var tmp0_elvis_lhs = style.textAlign_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_30()._get_Start__2698618831_949u7u_k$();
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    var tmp_1 = tmp;
    var tmp_2 = resolveTextDirection_0(direction, style.textDirection_1);
    var tmp_3 = _get_isUnspecified__892174020(style.lineHeight_1) ? _get_DefaultLineHeight__2391628693() : style.lineHeight_1;
    var tmp1_elvis_lhs = style.textIndent_1;
    return new ParagraphStyle_0(tmp_1, tmp_2, tmp_3, tmp1_elvis_lhs == null ? Companion_getInstance_34()._get_None__775034355_ctfoc3_k$() : tmp1_elvis_lhs, style.platformStyle_1);
  }
  var properties_initialized_ParagraphStyle_kt_2227541435;
  function init_properties_ParagraphStyle_kt_1274028439() {
    if (!properties_initialized_ParagraphStyle_kt_2227541435) {
      properties_initialized_ParagraphStyle_kt_2227541435 = true;
      DefaultLineHeight = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
      new TextUnit(Unit_getInstance());
    }
  }
  function Placeholder(width, height, placeholderVerticalAlign) {
    unreachableDeclarationLog();
    this.width_1 = width;
    this.height_1 = height;
    this.placeholderVerticalAlign_1 = placeholderVerticalAlign;
    {
      var tmp0_require_0 = !_get_isUnspecified__892174020(this.width_1);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'width cannot be TextUnit.Unspecified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = !_get_isUnspecified__892174020(this.height_1);
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'height cannot be TextUnit.Unspecified';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
  }
  Placeholder.prototype._get_width__3719200459_peka7p_k$ = function () {
    return this.width_1;
  };
  Placeholder.prototype._get_height__3088126660_kqr2ws_k$ = function () {
    return this.height_1;
  };
  Placeholder.prototype._get_placeholderVerticalAlign__2574794447_byu6mn_k$ = function () {
    return this.placeholderVerticalAlign_1;
  };
  Placeholder.prototype.copy_1mnfs0_k$ = function (width, height, placeholderVerticalAlign) {
    unreachableDeclarationLog();
    return new Placeholder(width, height, placeholderVerticalAlign);
  };
  Placeholder.prototype.copy$default_2abday_k$ = function (width, height, placeholderVerticalAlign, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      width = this.width_1;
    if (!(($mask0 & 2) === 0))
      height = this.height_1;
    if (!(($mask0 & 4) === 0))
      placeholderVerticalAlign = this.placeholderVerticalAlign_1;
    return this.copy_1mnfs0_k$(width, height, placeholderVerticalAlign);
  };
  Placeholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    else {
    }
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.height_1, other.height_1))
      return false;
    if (!(this.placeholderVerticalAlign_1 === other.placeholderVerticalAlign_1))
      return false;
    return true;
  };
  Placeholder.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_2674772001(this.width_1);
    result = imul(31, result) + TextUnit__hashCode_impl_2674772001(this.height_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_4214319766(this.placeholderVerticalAlign_1) | 0;
    return result;
  };
  Placeholder.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'Placeholder(' + ('width=' + new TextUnit(this.width_1) + ', ') + ('height=' + new TextUnit(this.height_1) + ', ') + ('placeholderVerticalAlign=' + new PlaceholderVerticalAlign(this.placeholderVerticalAlign_1)) + ')';
  };
  Placeholder.$metadata$ = {
    simpleName: 'Placeholder',
    kind: 'class',
    interfaces: []
  };
  function _PlaceholderVerticalAlign___init__impl__1366508475(value) {
    return value;
  }
  function _get_value__3683422336($this) {
    unreachableDeclarationLog();
    return $this;
  }
  function PlaceholderVerticalAlign__toString_impl_1234767589(this_0) {
    unreachableDeclarationLog();
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_8().AboveBaseline_1 ? 'AboveBaseline' : tmp0_subject === Companion_getInstance_8().Top_1 ? 'Top' : tmp0_subject === Companion_getInstance_8().Bottom_1 ? 'Bottom' : tmp0_subject === Companion_getInstance_8().Center_1 ? 'Center' : tmp0_subject === Companion_getInstance_8().TextTop_1 ? 'TextTop' : tmp0_subject === Companion_getInstance_8().TextBottom_1 ? 'TextBottom' : tmp0_subject === Companion_getInstance_8().TextCenter_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion() {
    Companion_instance = this;
    this.AboveBaseline_1 = _PlaceholderVerticalAlign___init__impl__1366508475(1);
    this.Top_1 = _PlaceholderVerticalAlign___init__impl__1366508475(2);
    this.Bottom_1 = _PlaceholderVerticalAlign___init__impl__1366508475(3);
    this.Center_1 = _PlaceholderVerticalAlign___init__impl__1366508475(4);
    this.TextTop_1 = _PlaceholderVerticalAlign___init__impl__1366508475(5);
    this.TextBottom_1 = _PlaceholderVerticalAlign___init__impl__1366508475(6);
    this.TextCenter_1 = _PlaceholderVerticalAlign___init__impl__1366508475(7);
  }
  Companion.prototype._get_AboveBaseline__722672687_gp8p5d_k$ = function () {
    return this.AboveBaseline_1;
  };
  Companion.prototype._get_Top__856463868_ev57j2_k$ = function () {
    return this.Top_1;
  };
  Companion.prototype._get_Bottom__4019569184_vhbf5q_k$ = function () {
    return this.Bottom_1;
  };
  Companion.prototype._get_Center__320263478_f82kgo_k$ = function () {
    return this.Center_1;
  };
  Companion.prototype._get_TextTop__1187021641_bxo6xh_k$ = function () {
    return this.TextTop_1;
  };
  Companion.prototype._get_TextBottom__3306174899_eb5239_k$ = function () {
    return this.TextBottom_1;
  };
  Companion.prototype._get_TextCenter__3901836489_a0l09h_k$ = function () {
    return this.TextCenter_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_4214319766(this_0) {
    return this_0;
  }
  function PlaceholderVerticalAlign__equals_impl_3442208370(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof PlaceholderVerticalAlign))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PlaceholderVerticalAlign ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PlaceholderVerticalAlign(value) {
    unreachableDeclarationLog();
    Companion_getInstance_8();
    this.value_1 = value;
  }
  PlaceholderVerticalAlign.prototype.toString = function () {
    unreachableDeclarationLog();
    return PlaceholderVerticalAlign__toString_impl_1234767589(this.value_1);
  };
  PlaceholderVerticalAlign.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return PlaceholderVerticalAlign__hashCode_impl_4214319766(this.value_1);
  };
  PlaceholderVerticalAlign.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return PlaceholderVerticalAlign__equals_impl_3442208370(this.value_1, other);
  };
  PlaceholderVerticalAlign.$metadata$ = {
    simpleName: 'PlaceholderVerticalAlign',
    kind: 'class',
    interfaces: []
  };
  function _get_AnnotatedStringSaver__3048893535() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function _get_AnnotationRangeListSaver__2434452962() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function _get_AnnotationRangeSaver__4054877476() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function _get_VerbatimTtsAnnotationSaver__3122953346() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function _get_ParagraphStyleSaver__1596775807() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function _get_SpanStyleSaver__3164003677() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function _get_TextDecorationSaver__2070822617() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function _get_TextGeometricTransformSaver__1703525908() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function _get_TextIndentSaver__986343893() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function _get_FontWeightSaver__1125537475() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function _get_BaselineShiftSaver__2065294099() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function _get_TextRangeSaver__3777713702() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function _get_ShadowSaver__226590460() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return ShadowSaver;
  }
  var ShadowSaver;
  function _get_ColorSaver__746332601() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return ColorSaver;
  }
  var ColorSaver;
  function _get_TextUnitSaver__1633075373() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function _get_OffsetSaver__2363803695() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return OffsetSaver;
  }
  var OffsetSaver;
  function _get_LocaleListSaver__3098996852() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function _get_LocaleSaver__634962102() {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return value;
  }
  function save_0(value, saver, scope) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = saver.save_ef702r_k$(scope, value);
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_String_instance;
  function values() {
    unreachableDeclarationLog();
    return [AnnotationType_Paragraph_getInstance(), AnnotationType_Span_getInstance(), AnnotationType_VerbatimTts_getInstance(), AnnotationType_String_getInstance()];
  }
  function valueOf(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'Paragraph':
        return AnnotationType_Paragraph_getInstance();
      case 'Span':
        return AnnotationType_Span_getInstance();
      case 'VerbatimTts':
        return AnnotationType_VerbatimTts_getInstance();
      case 'String':
        return AnnotationType_String_getInstance();
      default:
        AnnotationType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    unreachableDeclarationLog();
    if (AnnotationType_entriesInitialized)
      return Unit_getInstance();
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_String_instance = new AnnotationType('String', 3);
  }
  function AnnotationType(name, ordinal) {
    unreachableDeclarationLog();
    Enum.call(this, name, ordinal);
  }
  AnnotationType.$metadata$ = {
    simpleName: 'AnnotationType',
    kind: 'class',
    interfaces: []
  };
  function _get_Saver__2681684988(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_TextUnitSaver__1633075373();
  }
  function _get_Saver__2681684988_0(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_TextIndentSaver__986343893();
  }
  function _get_Saver__2681684988_1(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_ColorSaver__746332601();
  }
  function _get_Saver__2681684988_2(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_FontWeightSaver__1125537475();
  }
  function _get_Saver__2681684988_3(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_BaselineShiftSaver__2065294099();
  }
  function _get_Saver__2681684988_4(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_TextGeometricTransformSaver__1703525908();
  }
  function _get_Saver__2681684988_5(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_LocaleListSaver__3098996852();
  }
  function _get_Saver__2681684988_6(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_TextDecorationSaver__2070822617();
  }
  function _get_Saver__2681684988_7(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_ShadowSaver__226590460();
  }
  function _get_Saver__2681684988_8(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_OffsetSaver__2363803695();
  }
  function _get_Saver__2681684988_9(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_LocaleSaver__634962102();
  }
  function _get_Saver__2681684988_10(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_Savers_kt_264199964();
    return _get_TextRangeSaver__3777713702();
  }
  function AnnotatedStringSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save(it._get_text__809840318_de5ose_k$()), save_0(it._get_spanStyles__378637631_69finz_k$(), _get_AnnotationRangeListSaver__2434452962(), $this$Saver), save_0(it._get_paragraphStyles__897995297_eun5lt_k$(), _get_AnnotationRangeListSaver__2434452962(), $this$Saver), save_0(it._get_annotations__1905959661_virbvx_k$(), _get_AnnotationRangeListSaver__2434452962(), $this$Saver)]);
    };
  }
  function AnnotatedStringSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'string') ? tmp0_safe_receiver_1 : THROW_CCE();
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      var tmp_0 = ensureNotNull(tmp$ret$2);
      var tmp$ret$3;
      $l$block_7: {
        var tmp1_restore_0 = list.get_fkrdnv_k$(1);
        var tmp2_restore_0 = _get_AnnotationRangeListSaver__2434452962();
        if (equals(tmp1_restore_0, false)) {
          tmp$ret$3 = null;
          break $l$block_7;
        }
        var tmp0_safe_receiver_1_0 = tmp1_restore_0;
        var tmp_1;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$7;
          $l$block_6: {
            {
            }
            var tmp$ret$6;
            $l$block_5: {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = tmp2_restore_0.restore_uzeo8_k$(tmp1_restore_0);
                  break $l$block_3;
                }
                tmp$ret$5 = tmp$ret$4;
                break $l$block_4;
              }
              var tmp_2 = tmp$ret$5;
              tmp$ret$6 = (tmp_2 == null ? true : isInterface(tmp_2, List)) ? tmp_2 : THROW_CCE();
              break $l$block_5;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_6;
          }
          tmp_1 = tmp$ret$7;
        }
        tmp$ret$3 = tmp_1;
        break $l$block_7;
      }
      var tmp_3 = ensureNotNull(tmp$ret$3);
      var tmp$ret$8;
      $l$block_13: {
        var tmp3_restore_0 = list.get_fkrdnv_k$(2);
        var tmp4_restore_0 = _get_AnnotationRangeListSaver__2434452962();
        if (equals(tmp3_restore_0, false)) {
          tmp$ret$8 = null;
          break $l$block_13;
        }
        var tmp0_safe_receiver_1_1 = tmp3_restore_0;
        var tmp_4;
        if (tmp0_safe_receiver_1_1 == null) {
          tmp_4 = null;
        } else {
          var tmp$ret$12;
          $l$block_12: {
            {
            }
            var tmp$ret$11;
            $l$block_11: {
              var tmp$ret$10;
              $l$block_10: {
                {
                }
                var tmp$ret$9;
                $l$block_9: {
                  tmp$ret$9 = tmp4_restore_0.restore_uzeo8_k$(tmp3_restore_0);
                  break $l$block_9;
                }
                tmp$ret$10 = tmp$ret$9;
                break $l$block_10;
              }
              var tmp_5 = tmp$ret$10;
              tmp$ret$11 = (tmp_5 == null ? true : isInterface(tmp_5, List)) ? tmp_5 : THROW_CCE();
              break $l$block_11;
            }
            tmp$ret$12 = tmp$ret$11;
            break $l$block_12;
          }
          tmp_4 = tmp$ret$12;
        }
        tmp$ret$8 = tmp_4;
        break $l$block_13;
      }
      var tmp_6 = ensureNotNull(tmp$ret$8);
      var tmp$ret$13;
      $l$block_19: {
        var tmp5_restore_0 = list.get_fkrdnv_k$(3);
        var tmp6_restore_0 = _get_AnnotationRangeListSaver__2434452962();
        if (equals(tmp5_restore_0, false)) {
          tmp$ret$13 = null;
          break $l$block_19;
        }
        var tmp0_safe_receiver_1_2 = tmp5_restore_0;
        var tmp_7;
        if (tmp0_safe_receiver_1_2 == null) {
          tmp_7 = null;
        } else {
          var tmp$ret$17;
          $l$block_18: {
            {
            }
            var tmp$ret$16;
            $l$block_17: {
              var tmp$ret$15;
              $l$block_16: {
                {
                }
                var tmp$ret$14;
                $l$block_15: {
                  tmp$ret$14 = tmp6_restore_0.restore_uzeo8_k$(tmp5_restore_0);
                  break $l$block_15;
                }
                tmp$ret$15 = tmp$ret$14;
                break $l$block_16;
              }
              var tmp_8 = tmp$ret$15;
              tmp$ret$16 = (tmp_8 == null ? true : isInterface(tmp_8, List)) ? tmp_8 : THROW_CCE();
              break $l$block_17;
            }
            tmp$ret$17 = tmp$ret$16;
            break $l$block_18;
          }
          tmp_7 = tmp$ret$17;
        }
        tmp$ret$13 = tmp_7;
        break $l$block_19;
      }
      return new AnnotatedString(tmp_0, tmp_3, tmp_6, ensureNotNull(tmp$ret$13));
    };
  }
  function AnnotationRangeListSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var target_1 = ArrayList_init_$Create$_0(it._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = it._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = it.get_fkrdnv_k$(index_2_3);
              {
                {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = save_0(item_3_4, _get_AnnotationRangeSaver__4054877476(), $this$Saver);
                    break $l$block;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$0;
                  target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$1 = target_1;
        break $l$block_0;
      }
      return tmp$ret$1;
    };
  }
  function AnnotationRangeListSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$6;
      $l$block_6: {
        {
        }
        var target_1 = ArrayList_init_$Create$_0(list._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = list._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = list.get_fkrdnv_k$(index_2_3);
              {
                {
                  var tmp$ret$5;
                  $l$block_5: {
                    var tmp$ret$0;
                    $l$block_4: {
                      var tmp0_restore_0_8 = _get_AnnotationRangeSaver__4054877476();
                      if (equals(item_3_4, false)) {
                        tmp$ret$0 = null;
                        break $l$block_4;
                      }
                      var tmp0_safe_receiver_1_9 = item_3_4;
                      var tmp;
                      if (tmp0_safe_receiver_1_9 == null) {
                        tmp = null;
                      } else {
                        var tmp$ret$4;
                        $l$block_3: {
                          {
                          }
                          var tmp$ret$3;
                          $l$block_2: {
                            var tmp$ret$2;
                            $l$block_1: {
                              {
                              }
                              var tmp$ret$1;
                              $l$block_0: {
                                tmp$ret$1 = tmp0_restore_0_8.restore_uzeo8_k$(item_3_4);
                                break $l$block_0;
                              }
                              tmp$ret$2 = tmp$ret$1;
                              break $l$block_1;
                            }
                            var tmp_0 = tmp$ret$2;
                            tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof Range) ? tmp_0 : THROW_CCE();
                            break $l$block_2;
                          }
                          tmp$ret$4 = tmp$ret$3;
                          break $l$block_3;
                        }
                        tmp = tmp$ret$4;
                      }
                      tmp$ret$0 = tmp;
                      break $l$block_4;
                    }
                    var range_7 = ensureNotNull(tmp$ret$0);
                    tmp$ret$5 = range_7;
                    break $l$block_5;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$5;
                  target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$6 = target_1;
        break $l$block_6;
      }
      return tmp$ret$6;
    };
  }
  function AnnotationRangeSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp0_subject = it._get_item__800109976_d8d4t4_k$();
      var tmp;
      if (tmp0_subject instanceof ParagraphStyle_0) {
        tmp = AnnotationType_Paragraph_getInstance();
      } else {
        if (tmp0_subject instanceof SpanStyle) {
          tmp = AnnotationType_Span_getInstance();
        } else {
          if (tmp0_subject instanceof VerbatimTtsAnnotation) {
            tmp = AnnotationType_VerbatimTts_getInstance();
          } else {
            {
              tmp = AnnotationType_String_getInstance();
            }
          }
        }
      }
      var marker = tmp;
      Unit_getInstance();
      var tmp1_subject = marker;
      var tmp0 = tmp1_subject._get_ordinal__3363892928_fec5kw_k$();
      var tmp_0;
      switch (tmp0) {
        case 0:
          var tmp_1 = it._get_item__800109976_d8d4t4_k$();
          tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), _get_ParagraphStyleSaver__1596775807(), $this$Saver);
          break;
        case 1:
          var tmp_2 = it._get_item__800109976_d8d4t4_k$();
          tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), _get_SpanStyleSaver__3164003677(), $this$Saver);
          break;
        case 2:
          var tmp_3 = it._get_item__800109976_d8d4t4_k$();
          tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), _get_VerbatimTtsAnnotationSaver__3122953346(), $this$Saver);
          break;
        case 3:
          tmp_0 = save(it._get_item__800109976_d8d4t4_k$());
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var item = tmp_0;
      Unit_getInstance();
      return arrayListOf([save(marker), item, save(it._get_start__3614751663_b8zdqp_k$()), save(it._get_end__856968982_e67thy_k$()), save(it._get_tag__857403447_e6h4qf_k$())]);
    };
  }
  function AnnotationRangeSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : tmp0_safe_receiver_1 instanceof AnnotationType) ? tmp0_safe_receiver_1 : THROW_CCE();
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      var marker = ensureNotNull(tmp$ret$2);
      Unit_getInstance();
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_restore_0 = list.get_fkrdnv_k$(2);
        var tmp0_safe_receiver_1_0 = tmp1_restore_0;
        var tmp_0;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = (tmp0_safe_receiver_1_0 == null ? true : typeof tmp0_safe_receiver_1_0 === 'number') ? tmp0_safe_receiver_1_0 : THROW_CCE();
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp_0 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
      var start = ensureNotNull(tmp$ret$5);
      Unit_getInstance();
      var tmp$ret$8;
      $l$block_7: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(3);
        var tmp0_safe_receiver_1_1 = tmp2_restore_0;
        var tmp_1;
        if (tmp0_safe_receiver_1_1 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$7;
          $l$block_6: {
            {
            }
            var tmp$ret$6;
            $l$block_5: {
              tmp$ret$6 = (tmp0_safe_receiver_1_1 == null ? true : typeof tmp0_safe_receiver_1_1 === 'number') ? tmp0_safe_receiver_1_1 : THROW_CCE();
              break $l$block_5;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_6;
          }
          tmp_1 = tmp$ret$7;
        }
        tmp$ret$8 = tmp_1;
        break $l$block_7;
      }
      var end = ensureNotNull(tmp$ret$8);
      Unit_getInstance();
      var tmp$ret$11;
      $l$block_10: {
        var tmp3_restore_0 = list.get_fkrdnv_k$(4);
        var tmp0_safe_receiver_1_2 = tmp3_restore_0;
        var tmp_2;
        if (tmp0_safe_receiver_1_2 == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$10;
          $l$block_9: {
            {
            }
            var tmp$ret$9;
            $l$block_8: {
              tmp$ret$9 = (tmp0_safe_receiver_1_2 == null ? true : typeof tmp0_safe_receiver_1_2 === 'string') ? tmp0_safe_receiver_1_2 : THROW_CCE();
              break $l$block_8;
            }
            tmp$ret$10 = tmp$ret$9;
            break $l$block_9;
          }
          tmp_2 = tmp$ret$10;
        }
        tmp$ret$11 = tmp_2;
        break $l$block_10;
      }
      var tag = ensureNotNull(tmp$ret$11);
      Unit_getInstance();
      var tmp0_subject = marker;
      var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
      var tmp_3;
      switch (tmp0) {
        case 0:
          var tmp$ret$12;
          $l$block_16: {
            var tmp4_restore_0 = list.get_fkrdnv_k$(1);
            var tmp5_restore_0 = _get_ParagraphStyleSaver__1596775807();
            if (equals(tmp4_restore_0, false)) {
              tmp$ret$12 = null;
              break $l$block_16;
            }
            var tmp0_safe_receiver_1_3 = tmp4_restore_0;
            var tmp_4;
            if (tmp0_safe_receiver_1_3 == null) {
              tmp_4 = null;
            } else {
              var tmp$ret$16;
              $l$block_15: {
                {
                }
                var tmp$ret$15;
                $l$block_14: {
                  var tmp$ret$14;
                  $l$block_13: {
                    {
                    }
                    var tmp$ret$13;
                    $l$block_12: {
                      tmp$ret$13 = tmp5_restore_0.restore_uzeo8_k$(tmp4_restore_0);
                      break $l$block_12;
                    }
                    tmp$ret$14 = tmp$ret$13;
                    break $l$block_13;
                  }
                  var tmp_5 = tmp$ret$14;
                  tmp$ret$15 = (tmp_5 == null ? true : tmp_5 instanceof ParagraphStyle_0) ? tmp_5 : THROW_CCE();
                  break $l$block_14;
                }
                tmp$ret$16 = tmp$ret$15;
                break $l$block_15;
              }
              tmp_4 = tmp$ret$16;
            }
            tmp$ret$12 = tmp_4;
            break $l$block_16;
          }

          var item = ensureNotNull(tmp$ret$12);
          tmp_3 = new Range(item, start, end, tag);
          break;
        case 1:
          var tmp$ret$17;
          $l$block_22: {
            var tmp6_restore_0 = list.get_fkrdnv_k$(1);
            var tmp7_restore_0 = _get_SpanStyleSaver__3164003677();
            if (equals(tmp6_restore_0, false)) {
              tmp$ret$17 = null;
              break $l$block_22;
            }
            var tmp0_safe_receiver_1_4 = tmp6_restore_0;
            var tmp_6;
            if (tmp0_safe_receiver_1_4 == null) {
              tmp_6 = null;
            } else {
              var tmp$ret$21;
              $l$block_21: {
                {
                }
                var tmp$ret$20;
                $l$block_20: {
                  var tmp$ret$19;
                  $l$block_19: {
                    {
                    }
                    var tmp$ret$18;
                    $l$block_18: {
                      tmp$ret$18 = tmp7_restore_0.restore_uzeo8_k$(tmp6_restore_0);
                      break $l$block_18;
                    }
                    tmp$ret$19 = tmp$ret$18;
                    break $l$block_19;
                  }
                  var tmp_7 = tmp$ret$19;
                  tmp$ret$20 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
                  break $l$block_20;
                }
                tmp$ret$21 = tmp$ret$20;
                break $l$block_21;
              }
              tmp_6 = tmp$ret$21;
            }
            tmp$ret$17 = tmp_6;
            break $l$block_22;
          }

          var item_0 = ensureNotNull(tmp$ret$17);
          tmp_3 = new Range(item_0, start, end, tag);
          break;
        case 2:
          var tmp$ret$22;
          $l$block_28: {
            var tmp8_restore_0 = list.get_fkrdnv_k$(1);
            var tmp9_restore_0 = _get_VerbatimTtsAnnotationSaver__3122953346();
            if (equals(tmp8_restore_0, false)) {
              tmp$ret$22 = null;
              break $l$block_28;
            }
            var tmp0_safe_receiver_1_5 = tmp8_restore_0;
            var tmp_8;
            if (tmp0_safe_receiver_1_5 == null) {
              tmp_8 = null;
            } else {
              var tmp$ret$26;
              $l$block_27: {
                {
                }
                var tmp$ret$25;
                $l$block_26: {
                  var tmp$ret$24;
                  $l$block_25: {
                    {
                    }
                    var tmp$ret$23;
                    $l$block_24: {
                      tmp$ret$23 = tmp9_restore_0.restore_uzeo8_k$(tmp8_restore_0);
                      break $l$block_24;
                    }
                    tmp$ret$24 = tmp$ret$23;
                    break $l$block_25;
                  }
                  var tmp_9 = tmp$ret$24;
                  tmp$ret$25 = (tmp_9 == null ? true : tmp_9 instanceof VerbatimTtsAnnotation) ? tmp_9 : THROW_CCE();
                  break $l$block_26;
                }
                tmp$ret$26 = tmp$ret$25;
                break $l$block_27;
              }
              tmp_8 = tmp$ret$26;
            }
            tmp$ret$22 = tmp_8;
            break $l$block_28;
          }

          var item_1 = ensureNotNull(tmp$ret$22);
          tmp_3 = new Range(item_1, start, end, tag);
          break;
        case 3:
          var tmp$ret$29;
          $l$block_31: {
            var tmp10_restore_0 = list.get_fkrdnv_k$(1);
            var tmp0_safe_receiver_1_6 = tmp10_restore_0;
            var tmp_10;
            if (tmp0_safe_receiver_1_6 == null) {
              tmp_10 = null;
            } else {
              var tmp$ret$28;
              $l$block_30: {
                {
                }
                var tmp$ret$27;
                $l$block_29: {
                  tmp$ret$27 = (tmp0_safe_receiver_1_6 == null ? true : typeof tmp0_safe_receiver_1_6 === 'string') ? tmp0_safe_receiver_1_6 : THROW_CCE();
                  break $l$block_29;
                }
                tmp$ret$28 = tmp$ret$27;
                break $l$block_30;
              }
              tmp_10 = tmp$ret$28;
            }
            tmp$ret$29 = tmp_10;
            break $l$block_31;
          }

          var item_2 = ensureNotNull(tmp$ret$29);
          tmp_3 = new Range(item_2, start, end, tag);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp_3;
    };
  }
  function VerbatimTtsAnnotationSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return save(it._get_verbatim__3875760213_6xl297_k$());
    };
  }
  function VerbatimTtsAnnotationSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_safe_receiver_1 = it;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'string') ? tmp0_safe_receiver_1 : THROW_CCE();
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
    };
  }
  function ParagraphStyleSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp = it._get_textAlign__21108601_6amoil_k$();
      var tmp_0 = save(tmp == null ? null : new TextAlign(tmp));
      var tmp_1 = it._get_textDirection__681174591_d3hmoh_k$();
      return arrayListOf([tmp_0, save(tmp_1 == null ? null : new TextDirection(tmp_1)), save_0(new TextUnit(it._get_lineHeight__3598496176_utqlcg_k$()), _get_Saver__2681684988(Companion_getInstance_0()), $this$Saver), save_0(it._get_textIndent__3512011634_cy5gge_k$(), _get_Saver__2681684988_0(Companion_getInstance_34()), $this$Saver)]);
    };
  }
  function ParagraphStyleSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              var tmp_0;
              if (tmp0_safe_receiver_1 == null ? true : tmp0_safe_receiver_1 instanceof TextAlign) {
                var tmp_1 = tmp0_safe_receiver_1;
                tmp_0 = tmp_1 == null ? null : tmp_1.value_1;
              } else {
                tmp_0 = THROW_CCE();
              }
              tmp$ret$0 = tmp_0;
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      var tmp_2 = tmp$ret$2;
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_restore_0 = list.get_fkrdnv_k$(1);
        var tmp0_safe_receiver_1_0 = tmp1_restore_0;
        var tmp_3;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp_4;
              if (tmp0_safe_receiver_1_0 == null ? true : tmp0_safe_receiver_1_0 instanceof TextDirection) {
                var tmp_5 = tmp0_safe_receiver_1_0;
                tmp_4 = tmp_5 == null ? null : tmp_5.value_1;
              } else {
                tmp_4 = THROW_CCE();
              }
              tmp$ret$3 = tmp_4;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp_3 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_3;
        break $l$block_4;
      }
      var tmp_6 = tmp$ret$5;
      var tmp$ret$6;
      $l$block_10: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(2);
        var tmp3_restore_0 = _get_Saver__2681684988(Companion_getInstance_0());
        if (equals(tmp2_restore_0, false)) {
          tmp$ret$6 = null;
          break $l$block_10;
        }
        var tmp0_safe_receiver_1_1 = tmp2_restore_0;
        var tmp_7;
        if (tmp0_safe_receiver_1_1 == null) {
          tmp_7 = null;
        } else {
          var tmp$ret$10;
          $l$block_9: {
            {
            }
            var tmp$ret$9;
            $l$block_8: {
              var tmp$ret$8;
              $l$block_7: {
                {
                }
                var tmp$ret$7;
                $l$block_6: {
                  var tmp_8 = tmp3_restore_0.restore_uzeo8_k$(tmp2_restore_0);
                  tmp$ret$7 = tmp_8 == null ? null : tmp_8.packedValue_1;
                  break $l$block_6;
                }
                tmp$ret$8 = tmp$ret$7;
                break $l$block_7;
              }
              var tmp_9 = tmp$ret$8;
              var tmp_10;
              var tmp_11;
              var tmp_12 = tmp_9;
              if ((tmp_12 == null ? null : new TextUnit(tmp_12)) == null) {
                tmp_11 = true;
              } else {
                {
                  var tmp_13 = tmp_9;
                  tmp_11 = (tmp_13 == null ? null : new TextUnit(tmp_13))instanceof TextUnit;
                }
              }
              if (tmp_11) {
                tmp_10 = tmp_9;
              } else {
                {
                  tmp_10 = THROW_CCE();
                }
              }
              tmp$ret$9 = tmp_10;
              break $l$block_8;
            }
            tmp$ret$10 = tmp$ret$9;
            break $l$block_9;
          }
          tmp_7 = tmp$ret$10;
        }
        tmp$ret$6 = tmp_7;
        break $l$block_10;
      }
      var tmp_14 = tmp$ret$6;
      var tmp_15 = ensureNotNull(tmp_14 == null ? null : new TextUnit(tmp_14)).packedValue_1;
      var tmp$ret$11;
      $l$block_16: {
        var tmp4_restore_0 = list.get_fkrdnv_k$(3);
        var tmp5_restore_0 = _get_Saver__2681684988_0(Companion_getInstance_34());
        if (equals(tmp4_restore_0, false)) {
          tmp$ret$11 = null;
          break $l$block_16;
        }
        var tmp0_safe_receiver_1_2 = tmp4_restore_0;
        var tmp_16;
        if (tmp0_safe_receiver_1_2 == null) {
          tmp_16 = null;
        } else {
          var tmp$ret$15;
          $l$block_15: {
            {
            }
            var tmp$ret$14;
            $l$block_14: {
              var tmp$ret$13;
              $l$block_13: {
                {
                }
                var tmp$ret$12;
                $l$block_12: {
                  tmp$ret$12 = tmp5_restore_0.restore_uzeo8_k$(tmp4_restore_0);
                  break $l$block_12;
                }
                tmp$ret$13 = tmp$ret$12;
                break $l$block_13;
              }
              var tmp_17 = tmp$ret$13;
              tmp$ret$14 = (tmp_17 == null ? true : tmp_17 instanceof TextIndent_0) ? tmp_17 : THROW_CCE();
              break $l$block_14;
            }
            tmp$ret$15 = tmp$ret$14;
            break $l$block_15;
          }
          tmp_16 = tmp$ret$15;
        }
        tmp$ret$11 = tmp_16;
        break $l$block_16;
      }
      return ParagraphStyle_init_$Create$_0(tmp_2, tmp_6, tmp_15, tmp$ret$11);
    };
  }
  function SpanStyleSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp = save_0(new Color(it._get_color__3152392398_60nqpf_k$()), _get_Saver__2681684988_1(Companion_getInstance()), $this$Saver);
      var tmp_0 = save_0(new TextUnit(it._get_fontSize__4225531099_h9sa57_k$()), _get_Saver__2681684988(Companion_getInstance_0()), $this$Saver);
      var tmp_1 = save_0(it._get_fontWeight__1116225988_igklhg_k$(), _get_Saver__2681684988_2(Companion_getInstance_19()), $this$Saver);
      var tmp_2 = it._get_fontStyle__2152582127_jc9dsp_k$();
      var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
      var tmp_4 = it._get_fontSynthesis__3907866988_7jz8cn_k$();
      var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
      var tmp_6 = save(-1);
      var tmp_7 = save(it._get_fontFeatureSettings__455600871_7j93vr_k$());
      var tmp_8 = save_0(new TextUnit(it._get_letterSpacing__1544247092_ht41e4_k$()), _get_Saver__2681684988(Companion_getInstance_0()), $this$Saver);
      var tmp_9 = it._get_baselineShift__487923508_6kauu1_k$();
      return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), _get_Saver__2681684988_3(Companion_getInstance_29()), $this$Saver), save_0(it._get_textGeometricTransform__1727044563_sk8k43_k$(), _get_Saver__2681684988_4(Companion_getInstance_33()), $this$Saver), save_0(it._get_localeList__8953203_5bwc3_k$(), _get_Saver__2681684988_5(Companion_getInstance_28()), $this$Saver), save_0(new Color(it._get_background__4060324125_drprdq_k$()), _get_Saver__2681684988_1(Companion_getInstance()), $this$Saver), save_0(it._get_textDecoration__1911559150_vm3cha_k$(), _get_Saver__2681684988_6(Companion_getInstance_31()), $this$Saver), save_0(it._get_shadow__44181995_qaz1n_k$(), _get_Saver__2681684988_7(Companion_getInstance_1()), $this$Saver)]);
    };
  }
  function SpanStyleSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$0;
      $l$block_4: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp1_restore_0 = _get_Saver__2681684988_1(Companion_getInstance());
        if (equals(tmp0_restore_0, false)) {
          tmp$ret$0 = null;
          break $l$block_4;
        }
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                {
                }
                var tmp$ret$1;
                $l$block_0: {
                  var tmp_0 = tmp1_restore_0.restore_uzeo8_k$(tmp0_restore_0);
                  tmp$ret$1 = tmp_0 == null ? null : tmp_0.value_1;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_1 = tmp$ret$2;
              var tmp_2;
              var tmp_3;
              var tmp_4 = tmp_1;
              if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
                tmp_3 = true;
              } else {
                {
                  var tmp_5 = tmp_1;
                  tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
                }
              }
              if (tmp_3) {
                tmp_2 = tmp_1;
              } else {
                {
                  tmp_2 = THROW_CCE();
                }
              }
              tmp$ret$3 = tmp_2;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp = tmp$ret$4;
        }
        tmp$ret$0 = tmp;
        break $l$block_4;
      }
      var tmp_6 = tmp$ret$0;
      var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).value_1;
      var tmp$ret$5;
      $l$block_10: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(1);
        var tmp3_restore_0 = _get_Saver__2681684988(Companion_getInstance_0());
        if (equals(tmp2_restore_0, false)) {
          tmp$ret$5 = null;
          break $l$block_10;
        }
        var tmp0_safe_receiver_1_0 = tmp2_restore_0;
        var tmp_8;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_8 = null;
        } else {
          var tmp$ret$9;
          $l$block_9: {
            {
            }
            var tmp$ret$8;
            $l$block_8: {
              var tmp$ret$7;
              $l$block_7: {
                {
                }
                var tmp$ret$6;
                $l$block_6: {
                  var tmp_9 = tmp3_restore_0.restore_uzeo8_k$(tmp2_restore_0);
                  tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
                  break $l$block_6;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_7;
              }
              var tmp_10 = tmp$ret$7;
              var tmp_11;
              var tmp_12;
              var tmp_13 = tmp_10;
              if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
                tmp_12 = true;
              } else {
                {
                  var tmp_14 = tmp_10;
                  tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
                }
              }
              if (tmp_12) {
                tmp_11 = tmp_10;
              } else {
                {
                  tmp_11 = THROW_CCE();
                }
              }
              tmp$ret$8 = tmp_11;
              break $l$block_8;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_9;
          }
          tmp_8 = tmp$ret$9;
        }
        tmp$ret$5 = tmp_8;
        break $l$block_10;
      }
      var tmp_15 = tmp$ret$5;
      var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1;
      var tmp$ret$10;
      $l$block_16: {
        var tmp4_restore_0 = list.get_fkrdnv_k$(2);
        var tmp5_restore_0 = _get_Saver__2681684988_2(Companion_getInstance_19());
        if (equals(tmp4_restore_0, false)) {
          tmp$ret$10 = null;
          break $l$block_16;
        }
        var tmp0_safe_receiver_1_1 = tmp4_restore_0;
        var tmp_17;
        if (tmp0_safe_receiver_1_1 == null) {
          tmp_17 = null;
        } else {
          var tmp$ret$14;
          $l$block_15: {
            {
            }
            var tmp$ret$13;
            $l$block_14: {
              var tmp$ret$12;
              $l$block_13: {
                {
                }
                var tmp$ret$11;
                $l$block_12: {
                  tmp$ret$11 = tmp5_restore_0.restore_uzeo8_k$(tmp4_restore_0);
                  break $l$block_12;
                }
                tmp$ret$12 = tmp$ret$11;
                break $l$block_13;
              }
              var tmp_18 = tmp$ret$12;
              tmp$ret$13 = (tmp_18 == null ? true : tmp_18 instanceof FontWeight) ? tmp_18 : THROW_CCE();
              break $l$block_14;
            }
            tmp$ret$14 = tmp$ret$13;
            break $l$block_15;
          }
          tmp_17 = tmp$ret$14;
        }
        tmp$ret$10 = tmp_17;
        break $l$block_16;
      }
      var tmp_19 = tmp$ret$10;
      var tmp$ret$17;
      $l$block_19: {
        var tmp6_restore_0 = list.get_fkrdnv_k$(3);
        var tmp0_safe_receiver_1_2 = tmp6_restore_0;
        var tmp_20;
        if (tmp0_safe_receiver_1_2 == null) {
          tmp_20 = null;
        } else {
          var tmp$ret$16;
          $l$block_18: {
            {
            }
            var tmp$ret$15;
            $l$block_17: {
              var tmp_21;
              if (tmp0_safe_receiver_1_2 == null ? true : tmp0_safe_receiver_1_2 instanceof FontStyle) {
                var tmp_22 = tmp0_safe_receiver_1_2;
                tmp_21 = tmp_22 == null ? null : tmp_22.value_1;
              } else {
                tmp_21 = THROW_CCE();
              }
              tmp$ret$15 = tmp_21;
              break $l$block_17;
            }
            tmp$ret$16 = tmp$ret$15;
            break $l$block_18;
          }
          tmp_20 = tmp$ret$16;
        }
        tmp$ret$17 = tmp_20;
        break $l$block_19;
      }
      var tmp_23 = tmp$ret$17;
      var tmp$ret$20;
      $l$block_22: {
        var tmp7_restore_0 = list.get_fkrdnv_k$(4);
        var tmp0_safe_receiver_1_3 = tmp7_restore_0;
        var tmp_24;
        if (tmp0_safe_receiver_1_3 == null) {
          tmp_24 = null;
        } else {
          var tmp$ret$19;
          $l$block_21: {
            {
            }
            var tmp$ret$18;
            $l$block_20: {
              var tmp_25;
              if (tmp0_safe_receiver_1_3 == null ? true : tmp0_safe_receiver_1_3 instanceof FontSynthesis) {
                var tmp_26 = tmp0_safe_receiver_1_3;
                tmp_25 = tmp_26 == null ? null : tmp_26.value_1;
              } else {
                tmp_25 = THROW_CCE();
              }
              tmp$ret$18 = tmp_25;
              break $l$block_20;
            }
            tmp$ret$19 = tmp$ret$18;
            break $l$block_21;
          }
          tmp_24 = tmp$ret$19;
        }
        tmp$ret$20 = tmp_24;
        break $l$block_22;
      }
      var tmp_27 = tmp$ret$20;
      var tmp$ret$23;
      $l$block_25: {
        var tmp8_restore_0 = list.get_fkrdnv_k$(6);
        var tmp0_safe_receiver_1_4 = tmp8_restore_0;
        var tmp_28;
        if (tmp0_safe_receiver_1_4 == null) {
          tmp_28 = null;
        } else {
          var tmp$ret$22;
          $l$block_24: {
            {
            }
            var tmp$ret$21;
            $l$block_23: {
              tmp$ret$21 = (tmp0_safe_receiver_1_4 == null ? true : typeof tmp0_safe_receiver_1_4 === 'string') ? tmp0_safe_receiver_1_4 : THROW_CCE();
              break $l$block_23;
            }
            tmp$ret$22 = tmp$ret$21;
            break $l$block_24;
          }
          tmp_28 = tmp$ret$22;
        }
        tmp$ret$23 = tmp_28;
        break $l$block_25;
      }
      var tmp_29 = tmp$ret$23;
      var tmp$ret$24;
      $l$block_31: {
        var tmp9_restore_0 = list.get_fkrdnv_k$(7);
        var tmp10_restore_0 = _get_Saver__2681684988(Companion_getInstance_0());
        if (equals(tmp9_restore_0, false)) {
          tmp$ret$24 = null;
          break $l$block_31;
        }
        var tmp0_safe_receiver_1_5 = tmp9_restore_0;
        var tmp_30;
        if (tmp0_safe_receiver_1_5 == null) {
          tmp_30 = null;
        } else {
          var tmp$ret$28;
          $l$block_30: {
            {
            }
            var tmp$ret$27;
            $l$block_29: {
              var tmp$ret$26;
              $l$block_28: {
                {
                }
                var tmp$ret$25;
                $l$block_27: {
                  var tmp_31 = tmp10_restore_0.restore_uzeo8_k$(tmp9_restore_0);
                  tmp$ret$25 = tmp_31 == null ? null : tmp_31.packedValue_1;
                  break $l$block_27;
                }
                tmp$ret$26 = tmp$ret$25;
                break $l$block_28;
              }
              var tmp_32 = tmp$ret$26;
              var tmp_33;
              var tmp_34;
              var tmp_35 = tmp_32;
              if ((tmp_35 == null ? null : new TextUnit(tmp_35)) == null) {
                tmp_34 = true;
              } else {
                {
                  var tmp_36 = tmp_32;
                  tmp_34 = (tmp_36 == null ? null : new TextUnit(tmp_36))instanceof TextUnit;
                }
              }
              if (tmp_34) {
                tmp_33 = tmp_32;
              } else {
                {
                  tmp_33 = THROW_CCE();
                }
              }
              tmp$ret$27 = tmp_33;
              break $l$block_29;
            }
            tmp$ret$28 = tmp$ret$27;
            break $l$block_30;
          }
          tmp_30 = tmp$ret$28;
        }
        tmp$ret$24 = tmp_30;
        break $l$block_31;
      }
      var tmp_37 = tmp$ret$24;
      var tmp_38 = ensureNotNull(tmp_37 == null ? null : new TextUnit(tmp_37)).packedValue_1;
      var tmp$ret$29;
      $l$block_37: {
        var tmp11_restore_0 = list.get_fkrdnv_k$(8);
        var tmp12_restore_0 = _get_Saver__2681684988_3(Companion_getInstance_29());
        if (equals(tmp11_restore_0, false)) {
          tmp$ret$29 = null;
          break $l$block_37;
        }
        var tmp0_safe_receiver_1_6 = tmp11_restore_0;
        var tmp_39;
        if (tmp0_safe_receiver_1_6 == null) {
          tmp_39 = null;
        } else {
          var tmp$ret$33;
          $l$block_36: {
            {
            }
            var tmp$ret$32;
            $l$block_35: {
              var tmp$ret$31;
              $l$block_34: {
                {
                }
                var tmp$ret$30;
                $l$block_33: {
                  var tmp_40 = tmp12_restore_0.restore_uzeo8_k$(tmp11_restore_0);
                  tmp$ret$30 = tmp_40 == null ? null : tmp_40.multiplier_1;
                  break $l$block_33;
                }
                tmp$ret$31 = tmp$ret$30;
                break $l$block_34;
              }
              var tmp_41 = tmp$ret$31;
              var tmp_42;
              var tmp_43;
              var tmp_44 = tmp_41;
              if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
                tmp_43 = true;
              } else {
                {
                  var tmp_45 = tmp_41;
                  tmp_43 = (tmp_45 == null ? null : new BaselineShift(tmp_45))instanceof BaselineShift;
                }
              }
              if (tmp_43) {
                tmp_42 = tmp_41;
              } else {
                {
                  tmp_42 = THROW_CCE();
                }
              }
              tmp$ret$32 = tmp_42;
              break $l$block_35;
            }
            tmp$ret$33 = tmp$ret$32;
            break $l$block_36;
          }
          tmp_39 = tmp$ret$33;
        }
        tmp$ret$29 = tmp_39;
        break $l$block_37;
      }
      var tmp_46 = tmp$ret$29;
      var tmp$ret$34;
      $l$block_43: {
        var tmp13_restore_0 = list.get_fkrdnv_k$(9);
        var tmp14_restore_0 = _get_Saver__2681684988_4(Companion_getInstance_33());
        if (equals(tmp13_restore_0, false)) {
          tmp$ret$34 = null;
          break $l$block_43;
        }
        var tmp0_safe_receiver_1_7 = tmp13_restore_0;
        var tmp_47;
        if (tmp0_safe_receiver_1_7 == null) {
          tmp_47 = null;
        } else {
          var tmp$ret$38;
          $l$block_42: {
            {
            }
            var tmp$ret$37;
            $l$block_41: {
              var tmp$ret$36;
              $l$block_40: {
                {
                }
                var tmp$ret$35;
                $l$block_39: {
                  tmp$ret$35 = tmp14_restore_0.restore_uzeo8_k$(tmp13_restore_0);
                  break $l$block_39;
                }
                tmp$ret$36 = tmp$ret$35;
                break $l$block_40;
              }
              var tmp_48 = tmp$ret$36;
              tmp$ret$37 = (tmp_48 == null ? true : tmp_48 instanceof TextGeometricTransform) ? tmp_48 : THROW_CCE();
              break $l$block_41;
            }
            tmp$ret$38 = tmp$ret$37;
            break $l$block_42;
          }
          tmp_47 = tmp$ret$38;
        }
        tmp$ret$34 = tmp_47;
        break $l$block_43;
      }
      var tmp_49 = tmp$ret$34;
      var tmp$ret$39;
      $l$block_49: {
        var tmp15_restore_0 = list.get_fkrdnv_k$(10);
        var tmp16_restore_0 = _get_Saver__2681684988_5(Companion_getInstance_28());
        if (equals(tmp15_restore_0, false)) {
          tmp$ret$39 = null;
          break $l$block_49;
        }
        var tmp0_safe_receiver_1_8 = tmp15_restore_0;
        var tmp_50;
        if (tmp0_safe_receiver_1_8 == null) {
          tmp_50 = null;
        } else {
          var tmp$ret$43;
          $l$block_48: {
            {
            }
            var tmp$ret$42;
            $l$block_47: {
              var tmp$ret$41;
              $l$block_46: {
                {
                }
                var tmp$ret$40;
                $l$block_45: {
                  tmp$ret$40 = tmp16_restore_0.restore_uzeo8_k$(tmp15_restore_0);
                  break $l$block_45;
                }
                tmp$ret$41 = tmp$ret$40;
                break $l$block_46;
              }
              var tmp_51 = tmp$ret$41;
              tmp$ret$42 = (tmp_51 == null ? true : tmp_51 instanceof LocaleList) ? tmp_51 : THROW_CCE();
              break $l$block_47;
            }
            tmp$ret$43 = tmp$ret$42;
            break $l$block_48;
          }
          tmp_50 = tmp$ret$43;
        }
        tmp$ret$39 = tmp_50;
        break $l$block_49;
      }
      var tmp_52 = tmp$ret$39;
      var tmp$ret$44;
      $l$block_55: {
        var tmp17_restore_0 = list.get_fkrdnv_k$(11);
        var tmp18_restore_0 = _get_Saver__2681684988_1(Companion_getInstance());
        if (equals(tmp17_restore_0, false)) {
          tmp$ret$44 = null;
          break $l$block_55;
        }
        var tmp0_safe_receiver_1_9 = tmp17_restore_0;
        var tmp_53;
        if (tmp0_safe_receiver_1_9 == null) {
          tmp_53 = null;
        } else {
          var tmp$ret$48;
          $l$block_54: {
            {
            }
            var tmp$ret$47;
            $l$block_53: {
              var tmp$ret$46;
              $l$block_52: {
                {
                }
                var tmp$ret$45;
                $l$block_51: {
                  var tmp_54 = tmp18_restore_0.restore_uzeo8_k$(tmp17_restore_0);
                  tmp$ret$45 = tmp_54 == null ? null : tmp_54.value_1;
                  break $l$block_51;
                }
                tmp$ret$46 = tmp$ret$45;
                break $l$block_52;
              }
              var tmp_55 = tmp$ret$46;
              var tmp_56;
              var tmp_57;
              var tmp_58 = tmp_55;
              if ((tmp_58 == null ? null : new Color(tmp_58)) == null) {
                tmp_57 = true;
              } else {
                {
                  var tmp_59 = tmp_55;
                  tmp_57 = (tmp_59 == null ? null : new Color(tmp_59))instanceof Color;
                }
              }
              if (tmp_57) {
                tmp_56 = tmp_55;
              } else {
                {
                  tmp_56 = THROW_CCE();
                }
              }
              tmp$ret$47 = tmp_56;
              break $l$block_53;
            }
            tmp$ret$48 = tmp$ret$47;
            break $l$block_54;
          }
          tmp_53 = tmp$ret$48;
        }
        tmp$ret$44 = tmp_53;
        break $l$block_55;
      }
      var tmp_60 = tmp$ret$44;
      var tmp_61 = ensureNotNull(tmp_60 == null ? null : new Color(tmp_60)).value_1;
      var tmp$ret$49;
      $l$block_61: {
        var tmp19_restore_0 = list.get_fkrdnv_k$(12);
        var tmp20_restore_0 = _get_Saver__2681684988_6(Companion_getInstance_31());
        if (equals(tmp19_restore_0, false)) {
          tmp$ret$49 = null;
          break $l$block_61;
        }
        var tmp0_safe_receiver_1_10 = tmp19_restore_0;
        var tmp_62;
        if (tmp0_safe_receiver_1_10 == null) {
          tmp_62 = null;
        } else {
          var tmp$ret$53;
          $l$block_60: {
            {
            }
            var tmp$ret$52;
            $l$block_59: {
              var tmp$ret$51;
              $l$block_58: {
                {
                }
                var tmp$ret$50;
                $l$block_57: {
                  tmp$ret$50 = tmp20_restore_0.restore_uzeo8_k$(tmp19_restore_0);
                  break $l$block_57;
                }
                tmp$ret$51 = tmp$ret$50;
                break $l$block_58;
              }
              var tmp_63 = tmp$ret$51;
              tmp$ret$52 = (tmp_63 == null ? true : tmp_63 instanceof TextDecoration) ? tmp_63 : THROW_CCE();
              break $l$block_59;
            }
            tmp$ret$53 = tmp$ret$52;
            break $l$block_60;
          }
          tmp_62 = tmp$ret$53;
        }
        tmp$ret$49 = tmp_62;
        break $l$block_61;
      }
      var tmp_64 = tmp$ret$49;
      var tmp$ret$54;
      $l$block_67: {
        var tmp21_restore_0 = list.get_fkrdnv_k$(13);
        var tmp22_restore_0 = _get_Saver__2681684988_7(Companion_getInstance_1());
        if (equals(tmp21_restore_0, false)) {
          tmp$ret$54 = null;
          break $l$block_67;
        }
        var tmp0_safe_receiver_1_11 = tmp21_restore_0;
        var tmp_65;
        if (tmp0_safe_receiver_1_11 == null) {
          tmp_65 = null;
        } else {
          var tmp$ret$58;
          $l$block_66: {
            {
            }
            var tmp$ret$57;
            $l$block_65: {
              var tmp$ret$56;
              $l$block_64: {
                {
                }
                var tmp$ret$55;
                $l$block_63: {
                  tmp$ret$55 = tmp22_restore_0.restore_uzeo8_k$(tmp21_restore_0);
                  break $l$block_63;
                }
                tmp$ret$56 = tmp$ret$55;
                break $l$block_64;
              }
              var tmp_66 = tmp$ret$56;
              tmp$ret$57 = (tmp_66 == null ? true : tmp_66 instanceof Shadow) ? tmp_66 : THROW_CCE();
              break $l$block_65;
            }
            tmp$ret$58 = tmp$ret$57;
            break $l$block_66;
          }
          tmp_65 = tmp$ret$58;
        }
        tmp$ret$54 = tmp_65;
        break $l$block_67;
      }
      return SpanStyle_init_$Create$_1(tmp_7, tmp_16, tmp_19, tmp_23, tmp_27, null, tmp_29, tmp_38, tmp_46, tmp_49, tmp_52, tmp_61, tmp_64, tmp$ret$54, 32, null);
    };
  }
  function TextDecorationSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return it._get_mask__803251423_da8grj_k$();
    };
  }
  function TextDecorationSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
    };
  }
  function TextGeometricTransformSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([it._get_scaleX__4196231293_1ms96r_k$(), it._get_skewX__3606563075_bduw3h_k$()]);
    };
  }
  function TextGeometricTransformSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      return new TextGeometricTransform(list.get_fkrdnv_k$(0), list.get_fkrdnv_k$(1));
    };
  }
  function TextIndentSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save_0(new TextUnit(it._get_firstLine__2808523789_r5lq8d_k$()), _get_Saver__2681684988(Companion_getInstance_0()), $this$Saver), save_0(new TextUnit(it._get_restLine__3898754787_ntk4gt_k$()), _get_Saver__2681684988(Companion_getInstance_0()), $this$Saver)]);
    };
  }
  function TextIndentSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$0;
      $l$block_4: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp1_restore_0 = _get_Saver__2681684988(Companion_getInstance_0());
        if (equals(tmp0_restore_0, false)) {
          tmp$ret$0 = null;
          break $l$block_4;
        }
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                {
                }
                var tmp$ret$1;
                $l$block_0: {
                  var tmp_0 = tmp1_restore_0.restore_uzeo8_k$(tmp0_restore_0);
                  tmp$ret$1 = tmp_0 == null ? null : tmp_0.packedValue_1;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_1 = tmp$ret$2;
              var tmp_2;
              var tmp_3;
              var tmp_4 = tmp_1;
              if ((tmp_4 == null ? null : new TextUnit(tmp_4)) == null) {
                tmp_3 = true;
              } else {
                {
                  var tmp_5 = tmp_1;
                  tmp_3 = (tmp_5 == null ? null : new TextUnit(tmp_5))instanceof TextUnit;
                }
              }
              if (tmp_3) {
                tmp_2 = tmp_1;
              } else {
                {
                  tmp_2 = THROW_CCE();
                }
              }
              tmp$ret$3 = tmp_2;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp = tmp$ret$4;
        }
        tmp$ret$0 = tmp;
        break $l$block_4;
      }
      var tmp_6 = tmp$ret$0;
      var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6)).packedValue_1;
      var tmp$ret$5;
      $l$block_10: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(1);
        var tmp3_restore_0 = _get_Saver__2681684988(Companion_getInstance_0());
        if (equals(tmp2_restore_0, false)) {
          tmp$ret$5 = null;
          break $l$block_10;
        }
        var tmp0_safe_receiver_1_0 = tmp2_restore_0;
        var tmp_8;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_8 = null;
        } else {
          var tmp$ret$9;
          $l$block_9: {
            {
            }
            var tmp$ret$8;
            $l$block_8: {
              var tmp$ret$7;
              $l$block_7: {
                {
                }
                var tmp$ret$6;
                $l$block_6: {
                  var tmp_9 = tmp3_restore_0.restore_uzeo8_k$(tmp2_restore_0);
                  tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
                  break $l$block_6;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_7;
              }
              var tmp_10 = tmp$ret$7;
              var tmp_11;
              var tmp_12;
              var tmp_13 = tmp_10;
              if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
                tmp_12 = true;
              } else {
                {
                  var tmp_14 = tmp_10;
                  tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
                }
              }
              if (tmp_12) {
                tmp_11 = tmp_10;
              } else {
                {
                  tmp_11 = THROW_CCE();
                }
              }
              tmp$ret$8 = tmp_11;
              break $l$block_8;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_9;
          }
          tmp_8 = tmp$ret$9;
        }
        tmp$ret$5 = tmp_8;
        break $l$block_10;
      }
      var tmp_15 = tmp$ret$5;
      return new TextIndent_0(tmp_7, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1);
    };
  }
  function FontWeightSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return it._get_weight__3515779987_cvworx_k$();
    };
  }
  function FontWeightSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
    };
  }
  function BaselineShiftSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return _BaselineShift___get_multiplier__impl__1601725628(it.multiplier_1);
    };
  }
  function BaselineShiftSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return new BaselineShift(_BaselineShift___init__impl__1714094980(typeof it === 'number' ? it : THROW_CCE()));
    };
  }
  function TextRangeSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save(_TextRange___get_start__impl__2306077420(it.packedValue_1)), save(_TextRange___get_end__impl__3306702867(it.packedValue_1))]);
    };
  }
  function TextRangeSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      var tmp_0 = ensureNotNull(tmp$ret$2);
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_restore_0 = list.get_fkrdnv_k$(1);
        var tmp0_safe_receiver_1_0 = tmp1_restore_0;
        var tmp_1;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = (tmp0_safe_receiver_1_0 == null ? true : typeof tmp0_safe_receiver_1_0 === 'number') ? tmp0_safe_receiver_1_0 : THROW_CCE();
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp_1 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_1;
        break $l$block_4;
      }
      return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
    };
  }
  function ShadowSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save_0(new Color(it._get_color__3152392398_60nqpf_k$()), _get_Saver__2681684988_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it._get_offset__736931032_tcg964_k$()), _get_Saver__2681684988_8(Companion_getInstance_2()), $this$Saver), save(it._get_blurRadius__1084091346_hxfu8i_k$())]);
    };
  }
  function ShadowSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$0;
      $l$block_4: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp1_restore_0 = _get_Saver__2681684988_1(Companion_getInstance());
        if (equals(tmp0_restore_0, false)) {
          tmp$ret$0 = null;
          break $l$block_4;
        }
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                {
                }
                var tmp$ret$1;
                $l$block_0: {
                  var tmp_0 = tmp1_restore_0.restore_uzeo8_k$(tmp0_restore_0);
                  tmp$ret$1 = tmp_0 == null ? null : tmp_0.value_1;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_1 = tmp$ret$2;
              var tmp_2;
              var tmp_3;
              var tmp_4 = tmp_1;
              if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
                tmp_3 = true;
              } else {
                {
                  var tmp_5 = tmp_1;
                  tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
                }
              }
              if (tmp_3) {
                tmp_2 = tmp_1;
              } else {
                {
                  tmp_2 = THROW_CCE();
                }
              }
              tmp$ret$3 = tmp_2;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp = tmp$ret$4;
        }
        tmp$ret$0 = tmp;
        break $l$block_4;
      }
      var tmp_6 = tmp$ret$0;
      var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).value_1;
      var tmp$ret$5;
      $l$block_10: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(1);
        var tmp3_restore_0 = _get_Saver__2681684988_8(Companion_getInstance_2());
        if (equals(tmp2_restore_0, false)) {
          tmp$ret$5 = null;
          break $l$block_10;
        }
        var tmp0_safe_receiver_1_0 = tmp2_restore_0;
        var tmp_8;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_8 = null;
        } else {
          var tmp$ret$9;
          $l$block_9: {
            {
            }
            var tmp$ret$8;
            $l$block_8: {
              var tmp$ret$7;
              $l$block_7: {
                {
                }
                var tmp$ret$6;
                $l$block_6: {
                  var tmp_9 = tmp3_restore_0.restore_uzeo8_k$(tmp2_restore_0);
                  tmp$ret$6 = tmp_9 == null ? null : tmp_9.packedValue_1;
                  break $l$block_6;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_7;
              }
              var tmp_10 = tmp$ret$7;
              var tmp_11;
              var tmp_12;
              var tmp_13 = tmp_10;
              if ((tmp_13 == null ? null : new Offset_0(tmp_13)) == null) {
                tmp_12 = true;
              } else {
                {
                  var tmp_14 = tmp_10;
                  tmp_12 = (tmp_14 == null ? null : new Offset_0(tmp_14))instanceof Offset_0;
                }
              }
              if (tmp_12) {
                tmp_11 = tmp_10;
              } else {
                {
                  tmp_11 = THROW_CCE();
                }
              }
              tmp$ret$8 = tmp_11;
              break $l$block_8;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_9;
          }
          tmp_8 = tmp$ret$9;
        }
        tmp$ret$5 = tmp_8;
        break $l$block_10;
      }
      var tmp_15 = tmp$ret$5;
      var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15)).packedValue_1;
      var tmp$ret$12;
      $l$block_13: {
        var tmp4_restore_0 = list.get_fkrdnv_k$(2);
        var tmp0_safe_receiver_1_1 = tmp4_restore_0;
        var tmp_17;
        if (tmp0_safe_receiver_1_1 == null) {
          tmp_17 = null;
        } else {
          var tmp$ret$11;
          $l$block_12: {
            {
            }
            var tmp$ret$10;
            $l$block_11: {
              tmp$ret$10 = (tmp0_safe_receiver_1_1 == null ? true : typeof tmp0_safe_receiver_1_1 === 'number') ? tmp0_safe_receiver_1_1 : THROW_CCE();
              break $l$block_11;
            }
            tmp$ret$11 = tmp$ret$10;
            break $l$block_12;
          }
          tmp_17 = tmp$ret$11;
        }
        tmp$ret$12 = tmp_17;
        break $l$block_13;
      }
      return new Shadow(tmp_7, tmp_16, ensureNotNull(tmp$ret$12));
    };
  }
  function ColorSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return new ULong(_Color___get_value__impl__103472842(it.value_1));
    };
  }
  function ColorSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return new Color(_Color___init__impl__1643258666(it instanceof ULong ? it.data_1 : THROW_CCE()));
    };
  }
  function TextUnitSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save(_TextUnit___get_value__impl__1070471396(it.packedValue_1)), save(new TextUnitType(_TextUnit___get_type__impl__2460701423(it.packedValue_1)))]);
    };
  }
  function TextUnitSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          $l$block_0: {
            {
            }
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        break $l$block_1;
      }
      var tmp_0 = ensureNotNull(tmp$ret$2);
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_restore_0 = list.get_fkrdnv_k$(1);
        var tmp0_safe_receiver_1_0 = tmp1_restore_0;
        var tmp_1;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp_2;
              if (tmp0_safe_receiver_1_0 == null ? true : tmp0_safe_receiver_1_0 instanceof TextUnitType) {
                var tmp_3 = tmp0_safe_receiver_1_0;
                tmp_2 = tmp_3 == null ? null : tmp_3.type_1;
              } else {
                tmp_2 = THROW_CCE();
              }
              tmp$ret$3 = tmp_2;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp_1 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_1;
        break $l$block_4;
      }
      var tmp_4 = tmp$ret$5;
      return new TextUnit(TextUnit_0(tmp_0, ensureNotNull(tmp_4 == null ? null : new TextUnitType(tmp_4)).type_1));
    };
  }
  function OffsetSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp;
      if (equals(it, new Offset_0(Companion_getInstance_2()._get_Unspecified__2946689370_vvlnfy_k$()))) {
        tmp = false;
      } else {
        tmp = arrayListOf([save(_Offset___get_x__impl__2048295803(it.packedValue_1)), save(_Offset___get_y__impl__3791106138(it.packedValue_1))]);
      }
      return tmp;
    };
  }
  function OffsetSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var tmp;
      if (equals(it, false)) {
        tmp = Companion_getInstance_2()._get_Unspecified__2946689370_vvlnfy_k$();
      } else {
        var list = isInterface(it, List) ? it : THROW_CCE();
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_restore_0 = list.get_fkrdnv_k$(0);
          var tmp0_safe_receiver_1 = tmp0_restore_0;
          var tmp_0;
          if (tmp0_safe_receiver_1 == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp_0 = tmp$ret$1;
          }
          tmp$ret$2 = tmp_0;
          break $l$block_1;
        }
        var tmp_1 = ensureNotNull(tmp$ret$2);
        var tmp$ret$5;
        $l$block_4: {
          var tmp1_restore_0 = list.get_fkrdnv_k$(1);
          var tmp0_safe_receiver_1_0 = tmp1_restore_0;
          var tmp_2;
          if (tmp0_safe_receiver_1_0 == null) {
            tmp_2 = null;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              {
              }
              var tmp$ret$3;
              $l$block_2: {
                tmp$ret$3 = (tmp0_safe_receiver_1_0 == null ? true : typeof tmp0_safe_receiver_1_0 === 'number') ? tmp0_safe_receiver_1_0 : THROW_CCE();
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            tmp_2 = tmp$ret$4;
          }
          tmp$ret$5 = tmp_2;
          break $l$block_4;
        }
        tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
      }
      var tmp_3 = tmp;
      return tmp_3 == null ? null : new Offset_0(tmp_3);
    };
  }
  function LocaleListSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_fastMap_0 = it._get_localeList__8953203_5bwc3_k$();
        {
        }
        var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
              {
                {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = save_0(item_3_4, _get_Saver__2681684988_9(Companion_getInstance_27()), $this$Saver);
                    break $l$block;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$0;
                  target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$1 = target_1;
        break $l$block_0;
      }
      return tmp$ret$1;
    };
  }
  function LocaleListSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$6;
      $l$block_6: {
        {
        }
        var target_1 = ArrayList_init_$Create$_0(list._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = list._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = list.get_fkrdnv_k$(index_2_3);
              {
                {
                  var tmp$ret$5;
                  $l$block_5: {
                    var tmp$ret$0;
                    $l$block_4: {
                      var tmp0_restore_0_7 = _get_Saver__2681684988_9(Companion_getInstance_27());
                      if (equals(item_3_4, false)) {
                        tmp$ret$0 = null;
                        break $l$block_4;
                      }
                      var tmp0_safe_receiver_1_8 = item_3_4;
                      var tmp;
                      if (tmp0_safe_receiver_1_8 == null) {
                        tmp = null;
                      } else {
                        var tmp$ret$4;
                        $l$block_3: {
                          {
                          }
                          var tmp$ret$3;
                          $l$block_2: {
                            var tmp$ret$2;
                            $l$block_1: {
                              {
                              }
                              var tmp$ret$1;
                              $l$block_0: {
                                tmp$ret$1 = tmp0_restore_0_7.restore_uzeo8_k$(item_3_4);
                                break $l$block_0;
                              }
                              tmp$ret$2 = tmp$ret$1;
                              break $l$block_1;
                            }
                            var tmp_0 = tmp$ret$2;
                            tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof Locale) ? tmp_0 : THROW_CCE();
                            break $l$block_2;
                          }
                          tmp$ret$4 = tmp$ret$3;
                          break $l$block_3;
                        }
                        tmp = tmp$ret$4;
                      }
                      tmp$ret$0 = tmp;
                      break $l$block_4;
                    }
                    tmp$ret$5 = ensureNotNull(tmp$ret$0);
                    break $l$block_5;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$5;
                  target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$6 = target_1;
        break $l$block_6;
      }
      return new LocaleList(tmp$ret$6);
    };
  }
  function LocaleSaver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return it.toLanguageTag_xneel5_k$();
    };
  }
  function LocaleSaver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
    };
  }
  function AnnotationType_Paragraph_getInstance() {
    unreachableDeclarationLog();
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    unreachableDeclarationLog();
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    unreachableDeclarationLog();
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_String_getInstance() {
    unreachableDeclarationLog();
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_2387425088;
  function init_properties_Savers_kt_264199964() {
    unreachableDeclarationLog();
    if (!properties_initialized_Savers_kt_2387425088) {
      properties_initialized_Savers_kt_2387425088 = true;
      var tmp = AnnotatedStringSaver$lambda();
      AnnotatedStringSaver = Saver(tmp, AnnotatedStringSaver$lambda_0());
      var tmp_0 = AnnotationRangeListSaver$lambda();
      AnnotationRangeListSaver = Saver(tmp_0, AnnotationRangeListSaver$lambda_0());
      var tmp_1 = AnnotationRangeSaver$lambda();
      AnnotationRangeSaver = Saver(tmp_1, AnnotationRangeSaver$lambda_0());
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda();
      VerbatimTtsAnnotationSaver = Saver(tmp_2, VerbatimTtsAnnotationSaver$lambda_0());
      var tmp_3 = ParagraphStyleSaver$lambda();
      ParagraphStyleSaver = Saver(tmp_3, ParagraphStyleSaver$lambda_0());
      var tmp_4 = SpanStyleSaver$lambda();
      SpanStyleSaver = Saver(tmp_4, SpanStyleSaver$lambda_0());
      var tmp_5 = TextDecorationSaver$lambda();
      TextDecorationSaver = Saver(tmp_5, TextDecorationSaver$lambda_0());
      var tmp_6 = TextGeometricTransformSaver$lambda();
      TextGeometricTransformSaver = Saver(tmp_6, TextGeometricTransformSaver$lambda_0());
      var tmp_7 = TextIndentSaver$lambda();
      TextIndentSaver = Saver(tmp_7, TextIndentSaver$lambda_0());
      var tmp_8 = FontWeightSaver$lambda();
      FontWeightSaver = Saver(tmp_8, FontWeightSaver$lambda_0());
      var tmp_9 = BaselineShiftSaver$lambda();
      BaselineShiftSaver = Saver(tmp_9, BaselineShiftSaver$lambda_0());
      var tmp_10 = TextRangeSaver$lambda();
      TextRangeSaver = Saver(tmp_10, TextRangeSaver$lambda_0());
      var tmp_11 = ShadowSaver$lambda();
      ShadowSaver = Saver(tmp_11, ShadowSaver$lambda_0());
      var tmp_12 = ColorSaver$lambda();
      ColorSaver = Saver(tmp_12, ColorSaver$lambda_0());
      var tmp_13 = TextUnitSaver$lambda();
      TextUnitSaver = Saver(tmp_13, TextUnitSaver$lambda_0());
      var tmp_14 = OffsetSaver$lambda();
      OffsetSaver = Saver(tmp_14, OffsetSaver$lambda_0());
      var tmp_15 = LocaleListSaver$lambda();
      LocaleListSaver = Saver(tmp_15, LocaleListSaver$lambda_0());
      var tmp_16 = LocaleSaver$lambda();
      LocaleSaver = Saver(tmp_16, LocaleSaver$lambda_0());
    }
  }
  function _get_DefaultFontSize__1734892544() {
    init_properties_SpanStyle_kt_2508871437();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function _get_DefaultLetterSpacing__926295855() {
    init_properties_SpanStyle_kt_2508871437();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function _get_DefaultBackgroundColor__2418243863() {
    init_properties_SpanStyle_kt_2508871437();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function _get_DefaultColor__1049734089() {
    init_properties_SpanStyle_kt_2508871437();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      platformStyle = null;
    SpanStyle.call($this, color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker) {
    unreachableDeclarationLog();
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this) {
    unreachableDeclarationLog();
    SpanStyle.call($this, color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null);
    return $this;
  }
  function SpanStyle_init_$Create$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    unreachableDeclarationLog();
    return SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, Object.create(SpanStyle.prototype));
  }
  function SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this);
    return $this;
  }
  function SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker) {
    unreachableDeclarationLog();
    return SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, Object.create(SpanStyle.prototype));
  }
  function mergePlatformStyle_0($this, other) {
    if ($this.platformStyle_1 == null)
      return other;
    if (other == null)
      return $this.platformStyle_1;
    return $this.platformStyle_1.merge_o4jtak_k$(other);
  }
  function SpanStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    this.color_1 = color;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
    this.platformStyle_1 = platformStyle;
  }
  SpanStyle.prototype._get_color__3152392398_60nqpf_k$ = function () {
    return this.color_1;
  };
  SpanStyle.prototype._get_fontSize__4225531099_h9sa57_k$ = function () {
    return this.fontSize_1;
  };
  SpanStyle.prototype._get_fontWeight__1116225988_igklhg_k$ = function () {
    return this.fontWeight_1;
  };
  SpanStyle.prototype._get_fontStyle__2152582127_jc9dsp_k$ = function () {
    return this.fontStyle_1;
  };
  SpanStyle.prototype._get_fontSynthesis__3907866988_7jz8cn_k$ = function () {
    return this.fontSynthesis_1;
  };
  SpanStyle.prototype._get_fontFamily__3097773656_jss0iw_k$ = function () {
    return this.fontFamily_1;
  };
  SpanStyle.prototype._get_fontFeatureSettings__455600871_7j93vr_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  SpanStyle.prototype._get_letterSpacing__1544247092_ht41e4_k$ = function () {
    return this.letterSpacing_1;
  };
  SpanStyle.prototype._get_baselineShift__487923508_6kauu1_k$ = function () {
    return this.baselineShift_1;
  };
  SpanStyle.prototype._get_textGeometricTransform__1727044563_sk8k43_k$ = function () {
    return this.textGeometricTransform_1;
  };
  SpanStyle.prototype._get_localeList__8953203_5bwc3_k$ = function () {
    return this.localeList_1;
  };
  SpanStyle.prototype._get_background__4060324125_drprdq_k$ = function () {
    return this.background_1;
  };
  SpanStyle.prototype._get_textDecoration__1911559150_vm3cha_k$ = function () {
    return this.textDecoration_1;
  };
  SpanStyle.prototype._get_shadow__44181995_qaz1n_k$ = function () {
    return this.shadow_1;
  };
  SpanStyle.prototype._get_platformStyle__3976805267_59fbe5_k$ = function () {
    return this.platformStyle_1;
  };
  SpanStyle.prototype.merge_m0r35z_k$ = function (other) {
    if (other == null)
      return this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_takeOrElse_0 = other.color_1;
      var tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !equals(_Color___get_value__impl__103472842(tmp0_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = tmp0_takeOrElse_0;
      } else {
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = this.color_1;
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    var tmp10_color = tmp$ret$2;
    var tmp3_elvis_lhs = other.fontFamily_1;
    var tmp11_fontFamily = tmp3_elvis_lhs == null ? this.fontFamily_1 : tmp3_elvis_lhs;
    var tmp12_fontSize = !_get_isUnspecified__892174020(other.fontSize_1) ? other.fontSize_1 : this.fontSize_1;
    var tmp0_elvis_lhs = other.fontWeight_1;
    var tmp13_fontWeight = tmp0_elvis_lhs == null ? this.fontWeight_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = other.fontStyle_1;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = this.fontStyle_1;
    } else {
      {
        tmp_0 = tmp1_elvis_lhs;
      }
    }
    var tmp14_fontStyle = tmp_0;
    var tmp2_elvis_lhs = other.fontSynthesis_1;
    var tmp_2;
    var tmp_3 = tmp2_elvis_lhs;
    if ((tmp_3 == null ? null : new FontSynthesis(tmp_3)) == null) {
      tmp_2 = this.fontSynthesis_1;
    } else {
      {
        tmp_2 = tmp2_elvis_lhs;
      }
    }
    var tmp15_fontSynthesis = tmp_2;
    var tmp4_elvis_lhs = other.fontFeatureSettings_1;
    var tmp16_fontFeatureSettings = tmp4_elvis_lhs == null ? this.fontFeatureSettings_1 : tmp4_elvis_lhs;
    var tmp_4;
    if (!_get_isUnspecified__892174020(other.letterSpacing_1)) {
      tmp_4 = other.letterSpacing_1;
    } else {
      tmp_4 = this.letterSpacing_1;
    }
    var tmp17_letterSpacing = tmp_4;
    var tmp5_elvis_lhs = other.baselineShift_1;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new BaselineShift(tmp_6)) == null) {
      tmp_5 = this.baselineShift_1;
    } else {
      {
        tmp_5 = tmp5_elvis_lhs;
      }
    }
    var tmp18_baselineShift = tmp_5;
    var tmp6_elvis_lhs = other.textGeometricTransform_1;
    var tmp19_textGeometricTransform = tmp6_elvis_lhs == null ? this.textGeometricTransform_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = other.localeList_1;
    var tmp20_localeList = tmp7_elvis_lhs == null ? this.localeList_1 : tmp7_elvis_lhs;
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_takeOrElse_0 = other.background_1;
      var tmp_7;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = !equals(_Color___get_value__impl__103472842(tmp1_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block_2;
      }
      if (tmp$ret$3) {
        tmp_7 = tmp1_takeOrElse_0;
      } else {
        {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = this.background_1;
            break $l$block_3;
          }
          tmp_7 = tmp$ret$4;
        }
      }
      tmp$ret$5 = tmp_7;
      break $l$block_4;
    }
    var tmp21_background = tmp$ret$5;
    var tmp8_elvis_lhs = other.textDecoration_1;
    var tmp22_textDecoration = tmp8_elvis_lhs == null ? this.textDecoration_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = other.shadow_1;
    var tmp23_shadow = tmp9_elvis_lhs == null ? this.shadow_1 : tmp9_elvis_lhs;
    var tmp24_platformStyle = mergePlatformStyle_0(this, other.platformStyle_1);
    return new SpanStyle(tmp10_color, tmp12_fontSize, tmp13_fontWeight, tmp14_fontStyle, tmp15_fontSynthesis, tmp11_fontFamily, tmp16_fontFeatureSettings, tmp17_letterSpacing, tmp18_baselineShift, tmp19_textGeometricTransform, tmp20_localeList, tmp21_background, tmp22_textDecoration, tmp23_shadow, tmp24_platformStyle);
  };
  SpanStyle.prototype.merge$default_wxkcr8_k$ = function (other, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_m0r35z_k$(other);
  };
  SpanStyle.prototype.plus_mcrows_k$ = function (other) {
    unreachableDeclarationLog();
    return this.merge_m0r35z_k$(other);
  };
  SpanStyle.prototype.copy_mos7vk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    return new SpanStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.platformStyle_1);
  };
  SpanStyle.prototype.copy$default_833x4x_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    return this.copy_mos7vk_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  SpanStyle.prototype.copy_wai6a4_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    unreachableDeclarationLog();
    return new SpanStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.copy$default_knhf3f_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    if (!(($mask0 & 16384) === 0))
      platformStyle = this.platformStyle_1;
    return this.copy_wai6a4_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  SpanStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    else {
    }
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.fontSize_1, other.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, other.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    else {
    }
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    else {
    }
    if (!equals(this.fontFamily_1, other.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == other.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, other.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    else {
    }
    if (!equals(this.textGeometricTransform_1, other.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    if (!equals(this.background_1, other.background_1))
      return false;
    if (!equals(this.textDecoration_1, other.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, other.shadow_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  SpanStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_1907974927(this.color_1);
    result = imul(31, result) + TextUnit__hashCode_impl_2674772001(this.fontSize_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.fontWeight_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      {
        tmp_1 = FontStyle__hashCode_impl_467747312(tmp2_safe_receiver);
      }
    }
    var tmp3_elvis_lhs = tmp_1;
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_4;
    var tmp_5 = tmp4_safe_receiver;
    if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
      tmp_4 = null;
    } else {
      {
        tmp_4 = FontSynthesis__hashCode_impl_3998513709(tmp4_safe_receiver);
      }
    }
    var tmp5_elvis_lhs = tmp_4;
    result = tmp_3 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_6 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_7 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_2674772001(this.letterSpacing_1) | 0;
    var tmp_8 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_9;
    var tmp_10 = tmp10_safe_receiver;
    if ((tmp_10 == null ? null : new BaselineShift(tmp_10)) == null) {
      tmp_9 = null;
    } else {
      {
        tmp_9 = BaselineShift__hashCode_impl_968657397(tmp10_safe_receiver);
      }
    }
    var tmp11_elvis_lhs = tmp_9;
    result = tmp_8 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_11 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_11 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_12 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_1907974927(this.background_1) | 0;
    var tmp_13 = imul(31, result);
    var tmp16_safe_receiver = this.textDecoration_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_13 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_14 = imul(31, result);
    var tmp18_safe_receiver = this.shadow_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_14 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp20_safe_receiver = this.platformStyle_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_15 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    return result;
  };
  SpanStyle.prototype.toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.color_1) + ', ') + ('fontSize=' + new TextUnit(this.fontSize_1) + ', ') + ('fontWeight=' + this.fontWeight_1 + ', ');
    var tmp_0 = this.fontStyle_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.fontFamily_1 + ', ') + ('fontFeatureSettings=' + this.fontFeatureSettings_1 + ', ') + ('letterSpacing=' + new TextUnit(this.letterSpacing_1) + ', ');
    var tmp_4 = this.baselineShift_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.textGeometricTransform_1 + ', ') + ('localeList=' + this.localeList_1 + ', ') + ('background=' + new Color(this.background_1) + ', ') + ('textDecoration=' + this.textDecoration_1 + ', ') + ('shadow=' + this.shadow_1 + ', ') + ('platformStyle=' + this.platformStyle_1) + ')';
  };
  SpanStyle.$metadata$ = {
    simpleName: 'SpanStyle',
    kind: 'class',
    interfaces: []
  };
  function resolveSpanStyleDefaults(style) {
    init_properties_SpanStyle_kt_2508871437();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_takeOrElse_0 = style.color_1;
      var tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !equals(_Color___get_value__impl__103472842(tmp0_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = tmp0_takeOrElse_0;
      } else {
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _get_DefaultColor__1049734089();
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    var tmp_0 = tmp$ret$2;
    var tmp_1 = _get_isUnspecified__892174020(style.fontSize_1) ? _get_DefaultFontSize__1734892544() : style.fontSize_1;
    var tmp0_elvis_lhs = style.fontWeight_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.fontStyle_1;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
    } else {
      {
        tmp_3 = tmp1_elvis_lhs;
      }
    }
    var tmp_5 = tmp_3;
    var tmp2_elvis_lhs = style.fontSynthesis_1;
    var tmp_6;
    var tmp_7 = tmp2_elvis_lhs;
    if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_18()._get_All__855894832_54xjwk_k$();
    } else {
      {
        tmp_6 = tmp2_elvis_lhs;
      }
    }
    var tmp_8 = tmp_6;
    var tmp3_elvis_lhs = style.fontFamily_1;
    var tmp_9 = tmp3_elvis_lhs == null ? Companion_getInstance_13()._get_Default__2834936080_o59jao_k$() : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.fontFeatureSettings_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11;
    if (_get_isUnspecified__892174020(style.letterSpacing_1)) {
      tmp_11 = _get_DefaultLetterSpacing__926295855();
    } else {
      tmp_11 = style.letterSpacing_1;
    }
    var tmp_12 = tmp_11;
    var tmp5_elvis_lhs = style.baselineShift_1;
    var tmp_13;
    var tmp_14 = tmp5_elvis_lhs;
    if ((tmp_14 == null ? null : new BaselineShift(tmp_14)) == null) {
      tmp_13 = Companion_getInstance_29()._get_None__775034355_eamnbb_k$();
    } else {
      {
        tmp_13 = tmp5_elvis_lhs;
      }
    }
    var tmp_15 = tmp_13;
    var tmp6_elvis_lhs = style.textGeometricTransform_1;
    var tmp_16 = tmp6_elvis_lhs == null ? Companion_getInstance_33()._get_None__775034355_ctfoc3_k$() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.localeList_1;
    var tmp_17 = tmp7_elvis_lhs == null ? Companion_getInstance_28()._get_current__2701413560_qcrdxk_k$() : tmp7_elvis_lhs;
    var tmp$ret$5;
    $l$block_4: {
      var tmp1_takeOrElse_0 = style.background_1;
      var tmp_18;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = !equals(_Color___get_value__impl__103472842(tmp1_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block_2;
      }
      if (tmp$ret$3) {
        tmp_18 = tmp1_takeOrElse_0;
      } else {
        {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = _get_DefaultBackgroundColor__2418243863();
            break $l$block_3;
          }
          tmp_18 = tmp$ret$4;
        }
      }
      tmp$ret$5 = tmp_18;
      break $l$block_4;
    }
    var tmp_19 = tmp$ret$5;
    var tmp8_elvis_lhs = style.textDecoration_1;
    var tmp_20 = tmp8_elvis_lhs == null ? Companion_getInstance_31()._get_None__775034355_ctfoc3_k$() : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.shadow_1;
    return new SpanStyle(tmp_0, tmp_1, tmp_2, tmp_5, tmp_8, tmp_9, tmp_10, tmp_12, tmp_15, tmp_16, tmp_17, tmp_19, tmp_20, tmp9_elvis_lhs == null ? Companion_getInstance_1()._get_None__775034355_ctfoc3_k$() : tmp9_elvis_lhs, style.platformStyle_1);
  }
  var properties_initialized_SpanStyle_kt_3525172329;
  function init_properties_SpanStyle_kt_2508871437() {
    if (!properties_initialized_SpanStyle_kt_3525172329) {
      properties_initialized_SpanStyle_kt_3525172329 = true;
      DefaultFontSize = _get_sp__1413130958(14);
      DefaultLetterSpacing = _get_sp__1413130958(0);
      DefaultBackgroundColor = Companion_getInstance()._get_Transparent__4141046431_mt84kc_k$();
      DefaultColor = Companion_getInstance()._get_Black__2204520402_og72wn_k$();
      new Color(Unit_getInstance());
    }
  }
  function _get_stringDelegate__2215999509() {
    unreachableDeclarationLog();
    init_properties_String_kt_4168242857();
    return stringDelegate;
  }
  var stringDelegate;
  function PlatformStringDelegate() {
    unreachableDeclarationLog();
  }
  PlatformStringDelegate.$metadata$ = {
    simpleName: 'PlatformStringDelegate',
    kind: 'interface',
    interfaces: []
  };
  var properties_initialized_String_kt_1996500685;
  function init_properties_String_kt_4168242857() {
    unreachableDeclarationLog();
    if (!properties_initialized_String_kt_1996500685) {
      properties_initialized_String_kt_1996500685 = true;
      stringDelegate = ActualStringDelegate();
    }
  }
  function SynchronizedObject() {
  }
  SynchronizedObject.$metadata$ = {
    simpleName: 'SynchronizedObject',
    kind: 'class',
    interfaces: []
  };
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function synchronized(lock, block) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = block();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function fastFilter(_this__1828080292, predicate) {
    unreachableDeclarationLog();
    {
    }
    var target = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$());
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
            if (predicate(item_3)) {
              target.add_1j60pz_k$(item_3);
              Unit_getInstance();
            }
          }
        }
         while (inductionVariable <= last);
    }
    return target;
  }
  function fastDistinctBy(_this__1828080292, selector) {
    unreachableDeclarationLog();
    {
    }
    var set = HashSet_init_$Create$(_this__1828080292._get_size__809037418_ddoh9m_k$());
    var target = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$());
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
            var key_5 = selector(item_3);
            if (set.add_1j60pz_k$(key_5)) {
              target.add_1j60pz_k$(item_3);
              Unit_getInstance();
            }
          }
        }
         while (inductionVariable <= last);
    }
    return target;
  }
  function fastFold(_this__1828080292, initial, operation) {
    unreachableDeclarationLog();
    {
    }
    var accumulator = initial;
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
            accumulator = operation(accumulator, item_3);
          }
        }
         while (inductionVariable <= last);
    }
    return accumulator;
  }
  function fastJoinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform) {
    return fastJoinTo(_this__1828080292, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinToString$default(_this__1828080292, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return fastJoinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform);
  }
  function fastJoinTo(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__1828080292.get_fkrdnv_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_oz4qxs_k$(separator);
          Unit_getInstance();
        } else {
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
      Unit_getInstance();
    }
    buffer.append_oz4qxs_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function fastJoinTo$default(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return fastJoinTo(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function appendElement(_this__1828080292, element, transform) {
    if (!(transform == null)) {
      _this__1828080292.append_oz4qxs_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__1828080292.append_oz4qxs_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this__1828080292.append_t8oh9e_k$(element.value_1);
          Unit_getInstance();
        } else {
          {
            _this__1828080292.append_oz4qxs_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function fastFlatMap(_this__1828080292, transform) {
    unreachableDeclarationLog();
    {
    }
    var target = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$());
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
            var list_5 = transform(item_3);
            addAll(target, list_5);
            Unit_getInstance();
          }
        }
         while (inductionVariable <= last);
    }
    return target;
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.layoutInput_1 = layoutInput;
    this.multiParagraph_1 = multiParagraph;
    this.size_1 = size;
    this.firstBaseline_1 = this.multiParagraph_1._get_firstBaseline__4268418652_ft12c_k$();
    this.lastBaseline_1 = this.multiParagraph_1._get_lastBaseline__435710384_77esa8_k$();
    this.placeholderRects_1 = this.multiParagraph_1._get_placeholderRects__1914564847_vnvrov_k$();
  }
  TextLayoutResult.prototype._get_layoutInput__3248863953_hatmi7_k$ = function () {
    return this.layoutInput_1;
  };
  TextLayoutResult.prototype._get_multiParagraph__4254991478_nstje_k$ = function () {
    return this.multiParagraph_1;
  };
  TextLayoutResult.prototype._get_size__809037418_alsm3t_k$ = function () {
    return this.size_1;
  };
  TextLayoutResult.prototype._get_firstBaseline__4268418652_ft12c_k$ = function () {
    return this.firstBaseline_1;
  };
  TextLayoutResult.prototype._get_lastBaseline__435710384_77esa8_k$ = function () {
    return this.lastBaseline_1;
  };
  TextLayoutResult.prototype._get_didOverflowHeight__2046117417_xu7eax_k$ = function () {
    return this.multiParagraph_1._get_didExceedMaxLines__1693942499_s0j2eb_k$() ? true : _IntSize___get_height__impl__2736509033(this.size_1) < this.multiParagraph_1._get_height__3088126660_jyis70_k$();
  };
  TextLayoutResult.prototype._get_didOverflowWidth__4101229254_37ch8a_k$ = function () {
    return _IntSize___get_width__impl__3492176776(this.size_1) < this.multiParagraph_1._get_width__3719200459_9isoj9_k$();
  };
  TextLayoutResult.prototype._get_hasVisualOverflow__2561350197_so5fij_k$ = function () {
    return this._get_didOverflowWidth__4101229254_37ch8a_k$() ? true : this._get_didOverflowHeight__2046117417_xu7eax_k$();
  };
  TextLayoutResult.prototype._get_placeholderRects__1914564847_vnvrov_k$ = function () {
    return this.placeholderRects_1;
  };
  TextLayoutResult.prototype._get_lineCount__2337839158_wd81qi_k$ = function () {
    unreachableDeclarationLog();
    return this.multiParagraph_1._get_lineCount__2337839158_wd81qi_k$();
  };
  TextLayoutResult.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineStart_504snr_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  TextLayoutResult.prototype.getLineEnd$default_prmziz_k$ = function (lineIndex, visibleEnd, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      visibleEnd = false;
    return this.getLineEnd_7kqxuy_k$(lineIndex, visibleEnd);
  };
  TextLayoutResult.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.isLineEllipsized_r1ol1o_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineTop_8a2w7q_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineBottom_spjtf0_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineLeft_w1obtc_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineRight_bo0e7j_k$(lineIndex);
  };
  TextLayoutResult.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineForOffset_9a3vwv_k$(offset);
  };
  TextLayoutResult.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getLineForVerticalPosition_c1p2r4_k$(vertical);
  };
  TextLayoutResult.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getHorizontalPosition_b8vvic_k$(offset, usePrimaryDirection);
  };
  TextLayoutResult.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getParagraphDirection_x8sft2_k$(offset);
  };
  TextLayoutResult.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getBidiRunDirection_dqdnqj_k$(offset);
  };
  TextLayoutResult.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    return this.multiParagraph_1.getOffsetForPosition_f04xcw_k$(position);
  };
  TextLayoutResult.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getBoundingBox_urudbk_k$(offset);
  };
  TextLayoutResult.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getWordBoundary_qx0177_k$(offset);
  };
  TextLayoutResult.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getCursorRect_x5c8fl_k$(offset);
  };
  TextLayoutResult.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    unreachableDeclarationLog();
    return this.multiParagraph_1.getPathForRange_i163f3_k$(start, end);
  };
  TextLayoutResult.prototype.copy_wbg4xj_k$ = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.multiParagraph_1, size);
  };
  TextLayoutResult.prototype.copy$default_r9l2hm_k$ = function (layoutInput, size, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      layoutInput = this.layoutInput_1;
    if (!(($mask0 & 2) === 0))
      size = this.size_1;
    return this.copy_wbg4xj_k$(layoutInput, size);
  };
  TextLayoutResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    else {
    }
    if (!this.layoutInput_1.equals(other.layoutInput_1))
      return false;
    if (!equals(this.multiParagraph_1, other.multiParagraph_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!(this.firstBaseline_1 === other.firstBaseline_1))
      return false;
    if (!(this.lastBaseline_1 === other.lastBaseline_1))
      return false;
    if (!equals(this.placeholderRects_1, other.placeholderRects_1))
      return false;
    return true;
  };
  TextLayoutResult.prototype.hashCode = function () {
    var result = this.layoutInput_1.hashCode();
    result = imul(31, result) + hashCode(this.multiParagraph_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_3290107458(this.size_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.firstBaseline_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lastBaseline_1) | 0;
    result = imul(31, result) + hashCode(this.placeholderRects_1) | 0;
    return result;
  };
  TextLayoutResult.prototype.toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.layoutInput_1 + ', ') + ('multiParagraph=' + this.multiParagraph_1 + ', ') + ('size=' + new IntSize(this.size_1) + ', ') + ('firstBaseline=' + this.firstBaseline_1 + ', ') + ('lastBaseline=' + this.lastBaseline_1 + ', ') + ('placeholderRects=' + this.placeholderRects_1) + ')';
  };
  TextLayoutResult.$metadata$ = {
    simpleName: 'TextLayoutResult',
    kind: 'class',
    interfaces: []
  };
  function _set__developerSuppliedResourceLoader__4053911757($this, _set____804775014) {
    unreachableDeclarationLog();
    $this._developerSuppliedResourceLoader_1 = _set____804775014;
  }
  function _get__developerSuppliedResourceLoader__96722625($this) {
    unreachableDeclarationLog();
    return $this._developerSuppliedResourceLoader_1;
  }
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $this) {
    unreachableDeclarationLog();
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, createFontFamilyResolver(resourceLoader), constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    unreachableDeclarationLog();
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, Object.create(TextLayoutInput.prototype));
  }
  function TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, Object.create(TextLayoutInput.prototype));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.text_1 = text;
    this.style_1 = style;
    this.placeholders_1 = placeholders;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.constraints_1 = constraints;
    this._developerSuppliedResourceLoader_1 = resourceLoader;
  }
  TextLayoutInput.prototype._get_text__809840318_de5ose_k$ = function () {
    return this.text_1;
  };
  TextLayoutInput.prototype._get_style__3615460416_b8k6v4_k$ = function () {
    return this.style_1;
  };
  TextLayoutInput.prototype._get_placeholders__3424351211_eecbo5_k$ = function () {
    return this.placeholders_1;
  };
  TextLayoutInput.prototype._get_maxLines__694126384_bh9jcg_k$ = function () {
    return this.maxLines_1;
  };
  TextLayoutInput.prototype._get_softWrap__3697303223_9vu0jt_k$ = function () {
    return this.softWrap_1;
  };
  TextLayoutInput.prototype._get_overflow__720882697_6b1p7f_k$ = function () {
    return this.overflow_1;
  };
  TextLayoutInput.prototype._get_density__3015598889_l5pazb_k$ = function () {
    return this.density_1;
  };
  TextLayoutInput.prototype._get_layoutDirection__1820011324_u3l5q4_k$ = function () {
    return this.layoutDirection_1;
  };
  TextLayoutInput.prototype._get_fontFamilyResolver__2595451122_s3uj2m_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  TextLayoutInput.prototype._get_constraints__3385973275_8t1fho_k$ = function () {
    return this.constraints_1;
  };
  TextLayoutInput.prototype._get_resourceLoader__76545130_19kmlm_k$ = function () {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this._developerSuppliedResourceLoader_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_9().from_6vr3se_k$(this.fontFamilyResolver_1) : tmp0_elvis_lhs;
  };
  TextLayoutInput.prototype.copy_w1u5jh_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    unreachableDeclarationLog();
    return new TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, this.fontFamilyResolver_1, constraints);
  };
  TextLayoutInput.prototype.copy$default_ejit2c_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      text = this.text_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    if (!(($mask0 & 4) === 0))
      placeholders = this.placeholders_1;
    if (!(($mask0 & 8) === 0))
      maxLines = this.maxLines_1;
    if (!(($mask0 & 16) === 0))
      softWrap = this.softWrap_1;
    if (!(($mask0 & 32) === 0))
      overflow = this.overflow_1;
    if (!(($mask0 & 64) === 0))
      density = this.density_1;
    if (!(($mask0 & 128) === 0))
      layoutDirection = this.layoutDirection_1;
    if (!(($mask0 & 256) === 0))
      resourceLoader = this._get_resourceLoader__76545130_19kmlm_k$();
    if (!(($mask0 & 512) === 0))
      constraints = this.constraints_1;
    return this.copy_w1u5jh_k$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints);
  };
  TextLayoutInput.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    else {
    }
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!equals(this.density_1, other.density_1))
      return false;
    if (!this.layoutDirection_1.equals(other.layoutDirection_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.constraints_1, other.constraints_1))
      return false;
    return true;
  };
  TextLayoutInput.prototype.hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.placeholders_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + (this.softWrap_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_3041325155(this.overflow_1) | 0;
    result = imul(31, result) + hashCode(this.density_1) | 0;
    result = imul(31, result) + this.layoutDirection_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_3174331356(this.constraints_1) | 0;
    return result;
  };
  TextLayoutInput.prototype.toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.text_1 + ', ') + ('style=' + this.style_1 + ', ') + ('placeholders=' + this.placeholders_1 + ', ') + ('maxLines=' + this.maxLines_1 + ', ') + ('softWrap=' + this.softWrap_1 + ', ') + ('overflow=' + new TextOverflow(this.overflow_1) + ', ') + ('density=' + this.density_1 + ', ') + ('layoutDirection=' + this.layoutDirection_1 + ', ') + ('fontFamilyResolver=' + this.fontFamilyResolver_1 + ', ') + ('constraints=' + new Constraints(this.constraints_1)) + ')';
  };
  TextLayoutInput.$metadata$ = {
    simpleName: 'TextLayoutInput',
    kind: 'class',
    interfaces: []
  };
  function _get_fontFamilyResolver__2595451122($this) {
    unreachableDeclarationLog();
    return $this.fontFamilyResolver_1;
  }
  function Companion_0() {
    unreachableDeclarationLog();
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp.cache_1 = tmp$ret$0;
    this.lock_1 = createSynchronizedObject();
  }
  Companion_0.prototype._set_cache__781025795_rl1hfm_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.cache_1 = _set____804775014;
  };
  Companion_0.prototype._get_cache__3139187855_j44d4h_k$ = function () {
    unreachableDeclarationLog();
    return this.cache_1;
  };
  Companion_0.prototype._get_lock__802729600_d9xa4g_k$ = function () {
    unreachableDeclarationLog();
    return this.lock_1;
  };
  Companion_0.prototype.from_6vr3se_k$ = function (fontFamilyResolver) {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block: {
      var tmp0_synchronized_0 = this.lock_1;
      var tmp$ret$1;
      {
        var tmp0_safe_receiver_2 = Companion_getInstance_9().cache_1.get_1mhr4y_k$(fontFamilyResolver);
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            return tmp0_safe_receiver_2;
          }
        }
        Unit_getInstance();
        var deprecatedBridgeFontResourceLoader_3 = new DeprecatedBridgeFontResourceLoader(fontFamilyResolver);
        {
          var tmp0_set_0_4 = Companion_getInstance_9().cache_1;
          tmp0_set_0_4.put_3mhbri_k$(fontFamilyResolver, deprecatedBridgeFontResourceLoader_3);
          Unit_getInstance();
        }
        return deprecatedBridgeFontResourceLoader_3;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block;
    }
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_9() {
    unreachableDeclarationLog();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DeprecatedBridgeFontResourceLoader(fontFamilyResolver) {
    unreachableDeclarationLog();
    Companion_getInstance_9();
    this.fontFamilyResolver_1 = fontFamilyResolver;
  }
  DeprecatedBridgeFontResourceLoader.prototype.load_oj7ae9_k$ = function (font) {
    unreachableDeclarationLog();
    var tmp = toFontFamily(font);
    var tmp_0 = font._get_weight__3515779987_cvworx_k$();
    var tmp_1 = font._get_style__3615460416_ope3tj_k$();
    return this.fontFamilyResolver_1.resolve$default_g9k5q4_k$(tmp, tmp_0, tmp_1, null, 8, null)._get_value__3683422336_a43j40_k$();
  };
  DeprecatedBridgeFontResourceLoader.$metadata$ = {
    simpleName: 'DeprecatedBridgeFontResourceLoader',
    kind: 'class',
    interfaces: [ResourceLoader]
  };
  function TextPainter() {
    TextPainter_instance = this;
  }
  TextPainter.prototype.paint_ct2xtf_k$ = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult._get_hasVisualOverflow__2561350197_so5fij_k$() ? textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_overflow__720882697_6b1p7f_k$() === Companion_getInstance_35()._get_Clip__764781787_iwu6r1_k$() : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__3492176776(textLayoutResult._get_size__809037418_alsm3t_k$());
      var height = _IntSize___get_height__impl__2736509033(textLayoutResult._get_size__809037418_alsm3t_k$());
      var bounds = Rect(Companion_getInstance_2()._get_Zero__785822851_30aknr_k$(), Size(width, height));
      canvas.save_erlm4_k$();
      canvas.clipRect$default_rf6xmh_k$(bounds, null, 2, null);
    }
    try {
      textLayoutResult._get_multiParagraph__4254991478_nstje_k$().paint_aoyx3m_k$(canvas, textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_style__3615460416_b8k6v4_k$()._get_color__3152392398_60nqpf_k$(), textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_style__3615460416_b8k6v4_k$()._get_shadow__44181995_qaz1n_k$(), textLayoutResult._get_layoutInput__3248863953_hatmi7_k$()._get_style__3615460416_b8k6v4_k$()._get_textDecoration__1911559150_vm3cha_k$());
    }finally {
      if (needClipping) {
        canvas.restore_a2id37_k$();
      }
    }
  };
  TextPainter.$metadata$ = {
    simpleName: 'TextPainter',
    kind: 'object',
    interfaces: []
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function _TextRange___init__impl__3256108823(packedValue) {
    unreachableDeclarationLog();
    return packedValue;
  }
  function _get_packedValue__3658110168($this) {
    unreachableDeclarationLog();
    return $this;
  }
  function _TextRange___get_start__impl__2306077420(this_0) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt1_0 = _get_packedValue__3658110168(this_0);
      tmp$ret$0 = tmp0_unpackInt1_0.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _TextRange___get_end__impl__3306702867(this_0) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_unpackInt2_0 = _get_packedValue__3658110168(this_0);
      tmp$ret$0 = tmp0_unpackInt2_0.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _TextRange___get_min__impl__2430166716(this_0) {
    unreachableDeclarationLog();
    return _TextRange___get_start__impl__2306077420(this_0) > _TextRange___get_end__impl__3306702867(this_0) ? _TextRange___get_end__impl__3306702867(this_0) : _TextRange___get_start__impl__2306077420(this_0);
  }
  function _TextRange___get_max__impl__4253134698(this_0) {
    unreachableDeclarationLog();
    return _TextRange___get_start__impl__2306077420(this_0) > _TextRange___get_end__impl__3306702867(this_0) ? _TextRange___get_start__impl__2306077420(this_0) : _TextRange___get_end__impl__3306702867(this_0);
  }
  function _TextRange___get_collapsed__impl__3538141143(this_0) {
    unreachableDeclarationLog();
    return _TextRange___get_start__impl__2306077420(this_0) === _TextRange___get_end__impl__3306702867(this_0);
  }
  function _TextRange___get_reversed__impl__3410665902(this_0) {
    unreachableDeclarationLog();
    return _TextRange___get_start__impl__2306077420(this_0) > _TextRange___get_end__impl__3306702867(this_0);
  }
  function _TextRange___get_length__impl__3827344458(this_0) {
    unreachableDeclarationLog();
    return _TextRange___get_max__impl__4253134698(this_0) - _TextRange___get_min__impl__2430166716(this_0) | 0;
  }
  function TextRange__intersects_impl_1360192329(this_0, other) {
    unreachableDeclarationLog();
    return _TextRange___get_min__impl__2430166716(this_0) < _TextRange___get_max__impl__4253134698(other) ? _TextRange___get_min__impl__2430166716(other) < _TextRange___get_max__impl__4253134698(this_0) : false;
  }
  function TextRange__contains_impl_1982141246(this_0, other) {
    unreachableDeclarationLog();
    return _TextRange___get_min__impl__2430166716(this_0) <= _TextRange___get_min__impl__2430166716(other) ? _TextRange___get_max__impl__4253134698(other) <= _TextRange___get_max__impl__4253134698(this_0) : false;
  }
  function TextRange__contains_impl_1982141246_0(this_0, offset) {
    unreachableDeclarationLog();
    var containsLower = _TextRange___get_min__impl__2430166716(this_0);
    return offset < _TextRange___get_max__impl__4253134698(this_0) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_1556799249(this_0) {
    unreachableDeclarationLog();
    return 'TextRange(' + _TextRange___get_start__impl__2306077420(this_0) + ', ' + _TextRange___get_end__impl__3306702867(this_0) + ')';
  }
  function Companion_1() {
    unreachableDeclarationLog();
    Companion_instance_1 = this;
    this.Zero_1 = TextRange_1(0);
  }
  Companion_1.prototype._get_Zero__785822851_7e0ohz_k$ = function () {
    unreachableDeclarationLog();
    return this.Zero_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    unreachableDeclarationLog();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TextRange__hashCode_impl_241384130(this_0) {
    unreachableDeclarationLog();
    return this_0.hashCode();
  }
  function TextRange__equals_impl_3232487838(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof TextRange))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextRange ? other.packedValue_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    unreachableDeclarationLog();
    Companion_getInstance_10();
    this.packedValue_1 = packedValue;
  }
  TextRange.prototype.toString = function () {
    unreachableDeclarationLog();
    return TextRange__toString_impl_1556799249(this.packedValue_1);
  };
  TextRange.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return TextRange__hashCode_impl_241384130(this.packedValue_1);
  };
  TextRange.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return TextRange__equals_impl_3232487838(this.packedValue_1, other);
  };
  TextRange.$metadata$ = {
    simpleName: 'TextRange',
    kind: 'class',
    interfaces: []
  };
  function TextRange_0(start, end) {
    unreachableDeclarationLog();
    return _TextRange___init__impl__3256108823(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    unreachableDeclarationLog();
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    unreachableDeclarationLog();
    {
      var tmp0_require_0 = start >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'start cannot be negative. [start: ' + start + ']';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = end >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'end cannot negative. [end: ' + end + ']';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = toLong(start).shl_po5ip6_k$(32).or_s401rn_k$(toLong(end).and_jhajnj_k$(new Long(-1, 0)));
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function constrain(_this__1828080292, minimumValue, maximumValue) {
    unreachableDeclarationLog();
    var newStart = coerceIn(_TextRange___get_start__impl__2306077420(_this__1828080292), minimumValue, maximumValue);
    var newEnd = coerceIn(_TextRange___get_end__impl__3306702867(_this__1828080292), minimumValue, maximumValue);
    if (!(newStart === _TextRange___get_start__impl__2306077420(_this__1828080292)) ? true : !(newEnd === _TextRange___get_end__impl__3306702867(_this__1828080292))) {
      return TextRange_0(newStart, newEnd);
    }
    return _this__1828080292;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, platformStyle, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      platformStyle = null;
    TextStyle.call($this, spanStyle, paragraphStyle, platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle, platformStyle, $mask0, $marker) {
    unreachableDeclarationLog();
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, platformStyle, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_0(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle._get_platformStyle__3976805267_59fbe5_k$(), paragraphStyle._get_platformStyle__3976805267_59fbe5_k$()));
    return $this;
  }
  function TextStyle_init_$Create$_1(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$_0(spanStyle, paragraphStyle, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $this) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = new SpanStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_spanStyle__4168634026_237rdi_k$());
    var tmp1_safe_receiver = platformStyle;
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_paragraphStyle__860251528_e866bs_k$()), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle) {
    return TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    if (!(($mask0 & 262144) === 0))
      platformStyle = null;
    TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $this);
    return $this;
  }
  function TextStyle_init_$Create$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker) {
    unreachableDeclarationLog();
    return TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this) {
    TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, null, $this);
    return $this;
  }
  function TextStyle_init_$Create$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    unreachableDeclarationLog();
    return TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, Object.create(TextStyle.prototype));
  }
  function TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = null;
    if (!(($mask0 & 8) === 0))
      fontStyle = null;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = null;
    if (!(($mask0 & 32) === 0))
      fontFamily = null;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = null;
    if (!(($mask0 & 128) === 0))
      letterSpacing = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = null;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = null;
    if (!(($mask0 & 1024) === 0))
      localeList = null;
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = null;
    if (!(($mask0 & 8192) === 0))
      shadow = null;
    if (!(($mask0 & 16384) === 0))
      textAlign = null;
    if (!(($mask0 & 32768) === 0))
      textDirection = null;
    if (!(($mask0 & 65536) === 0))
      lineHeight = Companion_getInstance_0()._get_Unspecified__2946689370_3oyroa_k$();
    if (!(($mask0 & 131072) === 0))
      textIndent = null;
    TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this);
    return $this;
  }
  function TextStyle_init_$Create$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker) {
    return TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $marker, Object.create(TextStyle.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.Default_1 = TextStyle_init_$Create$_5(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 262143, null);
  }
  Companion_2.prototype._get_Default__2834936080_o59jao_k$ = function () {
    return this.Default_1;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_11();
    this.spanStyle_1 = spanStyle;
    this.paragraphStyle_1 = paragraphStyle;
    this.platformStyle_1 = platformStyle;
  }
  TextStyle.prototype._get_spanStyle__4168634026_237rdi_k$ = function () {
    unreachableDeclarationLog();
    return this.spanStyle_1;
  };
  TextStyle.prototype._get_paragraphStyle__860251528_e866bs_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraphStyle_1;
  };
  TextStyle.prototype._get_platformStyle__3976805267_59fbe5_k$ = function () {
    return this.platformStyle_1;
  };
  TextStyle.prototype.toSpanStyle_l454tw_k$ = function () {
    return this.spanStyle_1;
  };
  TextStyle.prototype.toParagraphStyle_zfuegy_k$ = function () {
    return this.paragraphStyle_1;
  };
  TextStyle.prototype.merge_axh15w_k$ = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_11().Default_1))
      return this;
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$().merge_m0r35z_k$(other.toSpanStyle_l454tw_k$()), this.toParagraphStyle_zfuegy_k$().merge_y8afnf_k$(other.toParagraphStyle_zfuegy_k$()));
  };
  TextStyle.prototype.merge$default_5073op_k$ = function (other, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      other = null;
    return this.merge_axh15w_k$(other);
  };
  TextStyle.prototype.merge_pkm62_k$ = function (other) {
    unreachableDeclarationLog();
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$().merge_m0r35z_k$(other), this.toParagraphStyle_zfuegy_k$());
  };
  TextStyle.prototype.merge_lt4ge4_k$ = function (other) {
    return TextStyle_init_$Create$_1(this.toSpanStyle_l454tw_k$(), this.toParagraphStyle_zfuegy_k$().merge_y8afnf_k$(other));
  };
  TextStyle.prototype.plus_svcnvj_k$ = function (other) {
    unreachableDeclarationLog();
    return this.merge_axh15w_k$(other);
  };
  TextStyle.prototype.plus_3d6656_k$ = function (other) {
    unreachableDeclarationLog();
    return this.merge_lt4ge4_k$(other);
  };
  TextStyle.prototype.plus_mcrows_k$ = function (other) {
    unreachableDeclarationLog();
    return this.merge_pkm62_k$(other);
  };
  TextStyle.prototype.copy_byi62l_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    return TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, this.platformStyle_1);
  };
  TextStyle.prototype.copy$default_m6tbq3_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      color = this.spanStyle_1._get_color__3152392398_60nqpf_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.spanStyle_1._get_fontSize__4225531099_h9sa57_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = this.spanStyle_1._get_fontWeight__1116225988_igklhg_k$();
    if (!(($mask0 & 8) === 0))
      fontStyle = this.spanStyle_1._get_fontStyle__2152582127_jc9dsp_k$();
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.spanStyle_1._get_fontSynthesis__3907866988_7jz8cn_k$();
    if (!(($mask0 & 32) === 0))
      fontFamily = this.spanStyle_1._get_fontFamily__3097773656_jss0iw_k$();
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.spanStyle_1._get_fontFeatureSettings__455600871_7j93vr_k$();
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.spanStyle_1._get_letterSpacing__1544247092_ht41e4_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = this.spanStyle_1._get_baselineShift__487923508_6kauu1_k$();
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.spanStyle_1._get_textGeometricTransform__1727044563_sk8k43_k$();
    if (!(($mask0 & 1024) === 0))
      localeList = this.spanStyle_1._get_localeList__8953203_5bwc3_k$();
    if (!(($mask0 & 2048) === 0))
      background = this.spanStyle_1._get_background__4060324125_drprdq_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.spanStyle_1._get_textDecoration__1911559150_vm3cha_k$();
    if (!(($mask0 & 8192) === 0))
      shadow = this.spanStyle_1._get_shadow__44181995_qaz1n_k$();
    if (!(($mask0 & 16384) === 0))
      textAlign = this.paragraphStyle_1._get_textAlign__21108601_6amoil_k$();
    if (!(($mask0 & 32768) === 0))
      textDirection = this.paragraphStyle_1._get_textDirection__681174591_d3hmoh_k$();
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.paragraphStyle_1._get_lineHeight__3598496176_utqlcg_k$();
    if (!(($mask0 & 131072) === 0))
      textIndent = this.paragraphStyle_1._get_textIndent__3512011634_cy5gge_k$();
    return this.copy_byi62l_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent);
  };
  TextStyle.prototype.copy_9z8l3g_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle) {
    unreachableDeclarationLog();
    return TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle);
  };
  TextStyle.prototype.copy$default_rjlf7g_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = this.spanStyle_1._get_color__3152392398_60nqpf_k$();
    if (!(($mask0 & 2) === 0))
      fontSize = this.spanStyle_1._get_fontSize__4225531099_h9sa57_k$();
    if (!(($mask0 & 4) === 0))
      fontWeight = this.spanStyle_1._get_fontWeight__1116225988_igklhg_k$();
    if (!(($mask0 & 8) === 0))
      fontStyle = this.spanStyle_1._get_fontStyle__2152582127_jc9dsp_k$();
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.spanStyle_1._get_fontSynthesis__3907866988_7jz8cn_k$();
    if (!(($mask0 & 32) === 0))
      fontFamily = this.spanStyle_1._get_fontFamily__3097773656_jss0iw_k$();
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.spanStyle_1._get_fontFeatureSettings__455600871_7j93vr_k$();
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.spanStyle_1._get_letterSpacing__1544247092_ht41e4_k$();
    if (!(($mask0 & 256) === 0))
      baselineShift = this.spanStyle_1._get_baselineShift__487923508_6kauu1_k$();
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.spanStyle_1._get_textGeometricTransform__1727044563_sk8k43_k$();
    if (!(($mask0 & 1024) === 0))
      localeList = this.spanStyle_1._get_localeList__8953203_5bwc3_k$();
    if (!(($mask0 & 2048) === 0))
      background = this.spanStyle_1._get_background__4060324125_drprdq_k$();
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.spanStyle_1._get_textDecoration__1911559150_vm3cha_k$();
    if (!(($mask0 & 8192) === 0))
      shadow = this.spanStyle_1._get_shadow__44181995_qaz1n_k$();
    if (!(($mask0 & 16384) === 0))
      textAlign = this.paragraphStyle_1._get_textAlign__21108601_6amoil_k$();
    if (!(($mask0 & 32768) === 0))
      textDirection = this.paragraphStyle_1._get_textDirection__681174591_d3hmoh_k$();
    if (!(($mask0 & 65536) === 0))
      lineHeight = this.paragraphStyle_1._get_lineHeight__3598496176_utqlcg_k$();
    if (!(($mask0 & 131072) === 0))
      textIndent = this.paragraphStyle_1._get_textIndent__3512011634_cy5gge_k$();
    if (!(($mask0 & 262144) === 0))
      platformStyle = this.platformStyle_1;
    return this.copy_9z8l3g_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle);
  };
  TextStyle.prototype._get_color__3152392398_60nqpf_k$ = function () {
    return this.spanStyle_1._get_color__3152392398_60nqpf_k$();
  };
  TextStyle.prototype._get_fontSize__4225531099_h9sa57_k$ = function () {
    return this.spanStyle_1._get_fontSize__4225531099_h9sa57_k$();
  };
  TextStyle.prototype._get_fontWeight__1116225988_igklhg_k$ = function () {
    return this.spanStyle_1._get_fontWeight__1116225988_igklhg_k$();
  };
  TextStyle.prototype._get_fontStyle__2152582127_jc9dsp_k$ = function () {
    return this.spanStyle_1._get_fontStyle__2152582127_jc9dsp_k$();
  };
  TextStyle.prototype._get_fontSynthesis__3907866988_7jz8cn_k$ = function () {
    return this.spanStyle_1._get_fontSynthesis__3907866988_7jz8cn_k$();
  };
  TextStyle.prototype._get_fontFamily__3097773656_jss0iw_k$ = function () {
    return this.spanStyle_1._get_fontFamily__3097773656_jss0iw_k$();
  };
  TextStyle.prototype._get_fontFeatureSettings__455600871_7j93vr_k$ = function () {
    return this.spanStyle_1._get_fontFeatureSettings__455600871_7j93vr_k$();
  };
  TextStyle.prototype._get_letterSpacing__1544247092_ht41e4_k$ = function () {
    return this.spanStyle_1._get_letterSpacing__1544247092_ht41e4_k$();
  };
  TextStyle.prototype._get_baselineShift__487923508_6kauu1_k$ = function () {
    return this.spanStyle_1._get_baselineShift__487923508_6kauu1_k$();
  };
  TextStyle.prototype._get_textGeometricTransform__1727044563_sk8k43_k$ = function () {
    return this.spanStyle_1._get_textGeometricTransform__1727044563_sk8k43_k$();
  };
  TextStyle.prototype._get_localeList__8953203_5bwc3_k$ = function () {
    return this.spanStyle_1._get_localeList__8953203_5bwc3_k$();
  };
  TextStyle.prototype._get_background__4060324125_drprdq_k$ = function () {
    return this.spanStyle_1._get_background__4060324125_drprdq_k$();
  };
  TextStyle.prototype._get_textDecoration__1911559150_vm3cha_k$ = function () {
    return this.spanStyle_1._get_textDecoration__1911559150_vm3cha_k$();
  };
  TextStyle.prototype._get_shadow__44181995_qaz1n_k$ = function () {
    return this.spanStyle_1._get_shadow__44181995_qaz1n_k$();
  };
  TextStyle.prototype._get_textAlign__21108601_6amoil_k$ = function () {
    return this.paragraphStyle_1._get_textAlign__21108601_6amoil_k$();
  };
  TextStyle.prototype._get_textDirection__681174591_d3hmoh_k$ = function () {
    return this.paragraphStyle_1._get_textDirection__681174591_d3hmoh_k$();
  };
  TextStyle.prototype._get_lineHeight__3598496176_utqlcg_k$ = function () {
    return this.paragraphStyle_1._get_lineHeight__3598496176_utqlcg_k$();
  };
  TextStyle.prototype._get_textIndent__3512011634_cy5gge_k$ = function () {
    return this.paragraphStyle_1._get_textIndent__3512011634_cy5gge_k$();
  };
  TextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    else {
    }
    if (!this.spanStyle_1.equals(other.spanStyle_1))
      return false;
    if (!this.paragraphStyle_1.equals(other.paragraphStyle_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  TextStyle.prototype.hashCode = function () {
    var result = this.spanStyle_1.hashCode();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextStyle.prototype.toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this._get_color__3152392398_60nqpf_k$()) + ', ') + ('fontSize=' + new TextUnit(this._get_fontSize__4225531099_h9sa57_k$()) + ', ') + ('fontWeight=' + this._get_fontWeight__1116225988_igklhg_k$() + ', ');
    var tmp_0 = this._get_fontStyle__2152582127_jc9dsp_k$();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this._get_fontSynthesis__3907866988_7jz8cn_k$();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this._get_fontFamily__3097773656_jss0iw_k$() + ', ') + ('fontFeatureSettings=' + this._get_fontFeatureSettings__455600871_7j93vr_k$() + ', ') + ('letterSpacing=' + new TextUnit(this._get_letterSpacing__1544247092_ht41e4_k$()) + ', ');
    var tmp_4 = this._get_baselineShift__487923508_6kauu1_k$();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this._get_textGeometricTransform__1727044563_sk8k43_k$() + ', ') + ('localeList=' + this._get_localeList__8953203_5bwc3_k$() + ', ') + ('background=' + new Color(this._get_background__4060324125_drprdq_k$()) + ', ') + ('textDecoration=' + this._get_textDecoration__1911559150_vm3cha_k$() + ', ');
    var tmp_6 = this._get_shadow__44181995_qaz1n_k$();
    var tmp_7 = this._get_textAlign__21108601_6amoil_k$();
    var tmp_8 = tmp_5 + ('shadow=' + tmp_6 + ', textAlign=' + (tmp_7 == null ? null : new TextAlign(tmp_7)) + ', ');
    var tmp_9 = this._get_textDirection__681174591_d3hmoh_k$();
    return tmp_8 + ('textDirection=' + (tmp_9 == null ? null : new TextDirection(tmp_9)) + ', ') + ('lineHeight=' + new TextUnit(this._get_lineHeight__3598496176_utqlcg_k$()) + ', ') + ('textIndent=' + this._get_textIndent__3512011634_cy5gge_k$() + ', ') + ('platformStyle=' + this.platformStyle_1) + ')';
  };
  TextStyle.$metadata$ = {
    simpleName: 'TextStyle',
    kind: 'class',
    interfaces: []
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.spanStyle_1), resolveParagraphStyleDefaults(style.paragraphStyle_1, direction), style.platformStyle_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp0_subject = textDirection;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_32()._get_Content__1623333336_pqoqw9_k$()))) {
      var tmp1_subject = layoutDirection;
      var tmp0 = tmp1_subject._get_ordinal__3363892928_fec5kw_k$();
      var tmp_1;
      switch (tmp0) {
        case 0:
          tmp_1 = Companion_getInstance_32()._get_ContentOrLtr__94991581_tuf7ua_k$();
          break;
        case 1:
          tmp_1 = Companion_getInstance_32()._get_ContentOrRtl__95170141_agd0xe_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = tmp0_subject;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp2_subject = layoutDirection;
        var tmp0_0 = tmp2_subject._get_ordinal__3363892928_fec5kw_k$();
        var tmp_3;
        switch (tmp0_0) {
          case 0:
            tmp_3 = Companion_getInstance_32()._get_Ltr__856230407_6ruc8o_k$();
            break;
          case 1:
            tmp_3 = Companion_getInstance_32()._get_Rtl__856408967_q5wj5k_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        {
          tmp = textDirection;
        }
      }
    }
    return tmp;
  }
  function TtsAnnotation() {
    unreachableDeclarationLog();
  }
  TtsAnnotation.$metadata$ = {
    simpleName: 'TtsAnnotation',
    kind: 'class',
    interfaces: []
  };
  function VerbatimTtsAnnotation(verbatim) {
    unreachableDeclarationLog();
    TtsAnnotation.call(this);
    this.verbatim_1 = verbatim;
  }
  VerbatimTtsAnnotation.prototype._get_verbatim__3875760213_6xl297_k$ = function () {
    unreachableDeclarationLog();
    return this.verbatim_1;
  };
  VerbatimTtsAnnotation.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    else {
    }
    if (!(this.verbatim_1 === other.verbatim_1))
      return false;
    return true;
  };
  VerbatimTtsAnnotation.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return getStringHashCode(this.verbatim_1);
  };
  VerbatimTtsAnnotation.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'VerbatimTtsAnnotation(verbatim=' + this.verbatim_1 + ')';
  };
  VerbatimTtsAnnotation.$metadata$ = {
    simpleName: 'VerbatimTtsAnnotation',
    kind: 'class',
    interfaces: []
  };
  function _get_EMPTY_INTS__2699188501() {
    init_properties_ContainerHelpers_kt_3367063382();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function _get_EMPTY_OBJECTS__654746927() {
    init_properties_ContainerHelpers_kt_3367063382();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__1828080292, size, value) {
    init_properties_ContainerHelpers_kt_3367063382();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__1828080292[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_570051194;
  function init_properties_ContainerHelpers_kt_3367063382() {
    if (!properties_initialized_ContainerHelpers_kt_570051194) {
      properties_initialized_ContainerHelpers_kt_570051194 = true;
      EMPTY_INTS = new Int32Array(0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      EMPTY_OBJECTS = tmp$ret$0;
    }
  }
  function _get_monitor__1797212407($this) {
    unreachableDeclarationLog();
    return $this.monitor_1;
  }
  function _get_map__857195189($this) {
    unreachableDeclarationLog();
    return $this.map_1;
  }
  function _get_keySet__1469848040($this) {
    unreachableDeclarationLog();
    return $this.keySet_1;
  }
  function _set_size__594420342($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.size_1 = _set____804775014;
  }
  function _set_maxSize__4071711904($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.maxSize_1 = _set____804775014;
  }
  function _get_maxSize__2522719276($this) {
    unreachableDeclarationLog();
    return $this.maxSize_1;
  }
  function _set_putCount__1330378391($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.putCount_1 = _set____804775014;
  }
  function _get_putCount__556247179($this) {
    unreachableDeclarationLog();
    return $this.putCount_1;
  }
  function _set_createCount__895930610($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.createCount_1 = _set____804775014;
  }
  function _get_createCount__2727373438($this) {
    unreachableDeclarationLog();
    return $this.createCount_1;
  }
  function _set_evictionCount__3739892501($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.evictionCount_1 = _set____804775014;
  }
  function _get_evictionCount__2819858849($this) {
    unreachableDeclarationLog();
    return $this.evictionCount_1;
  }
  function _set_hitCount__3466224667($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.hitCount_1 = _set____804775014;
  }
  function _get_hitCount__2692093455($this) {
    unreachableDeclarationLog();
    return $this.hitCount_1;
  }
  function _set_missCount__33856178($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.missCount_1 = _set____804775014;
  }
  function _get_missCount__1805592382($this) {
    unreachableDeclarationLog();
    return $this.missCount_1;
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    {
      var tmp0_require_0 = maxSize > 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'maxSize <= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    $this.maxSize_1 = maxSize;
    $this.map_1 = HashMap_init_$Create$(0, 0.75);
    $this.keySet_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, Object.create(LruCache.prototype));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.sizeOf_xsmc0r_k$(key, value);
    {
      var tmp0_check_0 = result >= 0;
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Negative size: ' + key + '=' + value;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    return result;
  }
  LruCache.prototype._get_size__809037418_ddoh9m_k$ = function () {
    var tmp$ret$2;
    $l$block_0: {
      var tmp$ret$1;
      $l$block: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$0;
        {
          return this.size_1;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_0;
    }
    return tmp$ret$2;
  };
  LruCache.prototype.resize_w0jdrw_k$ = function (maxSize) {
    unreachableDeclarationLog();
    {
      var tmp0_require_0 = maxSize > 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'maxSize <= 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_synchronized_0 = this.monitor_1;
      var tmp$ret$1;
      $l$block_0: {
        this.maxSize_1 = maxSize;
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    this.trimToSize_kob4eq_k$(maxSize);
  };
  LruCache.prototype.get_1mhr4y_k$ = function (key) {
    var mapValue = null;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          mapValue = this.map_1.get_1mhr4y_k$(key);
          var tmp;
          if (!(mapValue == null)) {
            this.keySet_1.remove_8hbkc6_k$(key);
            Unit_getInstance();
            this.keySet_1.add_1j60pz_k$(key);
            Unit_getInstance();
            var tmp0_this_2 = this;
            var tmp1_3 = tmp0_this_2.hitCount_1;
            tmp0_this_2.hitCount_1 = tmp1_3 + 1 | 0;
            Unit_getInstance();
            return mapValue;
          } else {
            var tmp2_this_4 = this;
            var tmp3_5 = tmp2_this_4.missCount_1;
            tmp2_this_4.missCount_1 = tmp3_5 + 1 | 0;
            tmp = tmp3_5;
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    Unit_getInstance();
    var createdValue = this.create_u3tv48_k$(key);
    if (createdValue == null) {
      return null;
    }
    var tmp$ret$4;
    $l$block_3: {
      var tmp1_synchronized_0 = this.monitor_1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_this_2_0 = this;
        var tmp1_3_0 = tmp0_this_2_0.createCount_1;
        tmp0_this_2_0.createCount_1 = tmp1_3_0 + 1 | 0;
        Unit_getInstance();
        var previousValue_4 = this.map_1.put_3mhbri_k$(key, createdValue);
        this.keySet_1.remove_8hbkc6_k$(key);
        Unit_getInstance();
        this.keySet_1.add_1j60pz_k$(key);
        Unit_getInstance();
        var tmp_0;
        if (!(previousValue_4 == null)) {
          this.map_1.put_3mhbri_k$(key, previousValue_4);
          Unit_getInstance();
          mapValue = previousValue_4;
          tmp_0 = Unit_getInstance();
        } else {
          var tmp2_this_5 = this;
          tmp2_this_5.size_1 = tmp2_this_5._get_size__809037418_ddoh9m_k$() + safeSizeOf(this, key, createdValue) | 0;
          tmp_0 = Unit_getInstance();
        }
        tmp$ret$3 = tmp_0;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    if (!(mapValue == null)) {
      this.entryRemoved_l91vrc_k$(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.trimToSize_kob4eq_k$(this.maxSize_1);
      return createdValue;
    }
  };
  LruCache.prototype.put_3mhbri_k$ = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_this_2 = this;
          var tmp1_3 = tmp0_this_2.putCount_1;
          tmp0_this_2.putCount_1 = tmp1_3 + 1 | 0;
          Unit_getInstance();
          var tmp2_this_4 = this;
          tmp2_this_4.size_1 = tmp2_this_4._get_size__809037418_ddoh9m_k$() + safeSizeOf(this, key, value) | 0;
          previous = this.map_1.put_3mhbri_k$(key, value);
          if (!(previous == null)) {
            var tmp3_this_5 = this;
            tmp3_this_5.size_1 = tmp3_this_5._get_size__809037418_ddoh9m_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
          }
          if (this.keySet_1.contains_2ehdt1_k$(key)) {
            this.keySet_1.remove_8hbkc6_k$(key);
            Unit_getInstance();
          }
          tmp$ret$0 = this.keySet_1.add_1j60pz_k$(key);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    Unit_getInstance();
    if (!(previous == null)) {
      this.entryRemoved_l91vrc_k$(false, key, ensureNotNull(previous), value);
    }
    this.trimToSize_kob4eq_k$(this.maxSize_1);
    return previous;
  };
  LruCache.prototype.trimToSize_kob4eq_k$ = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$3;
        $l$block_2: {
          if ((this._get_size__809037418_ddoh9m_k$() < 0 ? true : this.map_1.isEmpty_y1axqb_k$() ? !(this._get_size__809037418_ddoh9m_k$() === 0) : false) ? true : !(this.map_1.isEmpty_y1axqb_k$() === this.keySet_1.isEmpty_y1axqb_k$())) {
            throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
          }
          var tmp;
          if (this._get_size__809037418_ddoh9m_k$() > maxSize ? !this.map_1.isEmpty_y1axqb_k$() : false) {
            key = first(this.keySet_1);
            var tmp$ret$0;
            $l$block: {
              var tmp0_get_0_3 = this.map_1;
              var tmp1_get_0_4 = key;
              tmp$ret$0 = (isInterface(tmp0_get_0_3, Map) ? tmp0_get_0_3 : THROW_CCE()).get_1mhr4y_k$(tmp1_get_0_4);
              break $l$block;
            }
            var tmp0_elvis_lhs_2 = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs_2 == null) {
              throw IllegalStateException_init_$Create$('inconsistent state');
            } else {
              tmp_0 = tmp0_elvis_lhs_2;
            }
            value = tmp_0;
            var tmp$ret$1;
            $l$block_0: {
              var tmp2_remove_0_5 = this.map_1;
              var tmp3_remove_0_6 = key;
              tmp$ret$1 = (isInterface(tmp2_remove_0_5, MutableMap) ? tmp2_remove_0_5 : THROW_CCE()).remove_8hbkc0_k$(tmp3_remove_0_6);
              break $l$block_0;
            }
            Unit_getInstance();
            var tmp$ret$2;
            $l$block_1: {
              var tmp4_remove_0_7 = this.keySet_1;
              var tmp5_remove_0_8 = key;
              tmp$ret$2 = (isInterface(tmp4_remove_0_7, MutableCollection) ? tmp4_remove_0_7 : THROW_CCE()).remove_8hbkc6_k$(tmp5_remove_0_8);
              break $l$block_1;
            }
            Unit_getInstance();
            var tmp1_this_9 = this;
            tmp1_this_9.size_1 = tmp1_this_9._get_size__809037418_ddoh9m_k$() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
            var tmp2_this_10 = this;
            var tmp3_11 = tmp2_this_10.evictionCount_1;
            tmp2_this_10.evictionCount_1 = tmp3_11 + 1 | 0;
            tmp = Unit_getInstance();
          }
          tmp$ret$3 = tmp;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.entryRemoved_l91vrc_k$(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  LruCache.prototype.remove_8hbkc0_k$ = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$0;
      $l$block: {
        previous = this.map_1.remove_8hbkc0_k$(key);
        this.keySet_1.remove_8hbkc6_k$(key);
        Unit_getInstance();
        var tmp;
        if (!(previous == null)) {
          var tmp0_this_2 = this;
          tmp0_this_2.size_1 = tmp0_this_2._get_size__809037418_ddoh9m_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (!(previous == null)) {
      this.entryRemoved_l91vrc_k$(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  LruCache.prototype.entryRemoved_l91vrc_k$ = function (evicted, key, oldValue, newValue) {
  };
  LruCache.prototype.create_u3tv48_k$ = function (key) {
    return null;
  };
  LruCache.prototype.sizeOf_xsmc0r_k$ = function (key, value) {
    return 1;
  };
  LruCache.prototype.evictAll_sd7znr_k$ = function () {
    unreachableDeclarationLog();
    this.trimToSize_kob4eq_k$(-1);
  };
  LruCache.prototype.maxSize_dyjl39_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.maxSize_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.hitCount_m9mq4k_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.hitCount_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.missCount_jzozn7_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.missCount_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.createCount_8lc6tp_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.createCount_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.putCount_tak75s_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.putCount_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.evictionCount_nzallc_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_synchronized_0 = this.monitor_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.evictionCount_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  LruCache.prototype.snapshot_4plubo_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$0;
      {
        var linkedHashMap_2 = LinkedHashMap_init_$Create$();
        var tmp0_iterator_3 = this.keySet_1.iterator_jk1svi_k$();
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var key_4 = tmp0_iterator_3.next_20eer_k$();
          linkedHashMap_2.put_3mhbri_k$(key_4, ensureNotNull(this.map_1.get_1mhr4y_k$(key_4)));
          Unit_getInstance();
        }
        return linkedHashMap_2;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block;
    }
  };
  LruCache.prototype.toString = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$0;
      {
        var accesses_2 = this.hitCount_1 + this.missCount_1 | 0;
        var hitPercent_3 = !(accesses_2 === 0) ? imul(100, this.hitCount_1) / accesses_2 | 0 : 0;
        return 'LruCache[maxSize=' + this.maxSize_1 + ',hits=' + this.hitCount_1 + ',misses=' + this.missCount_1 + ',' + ('hitRate=' + hitPercent_3 + '%]');
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block;
    }
  };
  LruCache.prototype.synchronizedValue_9k0sbh_k$ = function (block) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_synchronized_0 = this.monitor_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = block();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  function LruCache() {
    this.monitor_1 = createSynchronizedObject();
    this.size_1 = 0;
    this.maxSize_1 = 0;
    this.putCount_1 = 0;
    this.createCount_1 = 0;
    this.evictionCount_1 = 0;
    this.hitCount_1 = 0;
    this.missCount_1 = 0;
  }
  LruCache.$metadata$ = {
    simpleName: 'LruCache',
    kind: 'class',
    interfaces: []
  };
  function _set_hashes__2894292315($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.hashes_1 = _set____804775014;
  }
  function _get_hashes__2982872143($this) {
    unreachableDeclarationLog();
    return $this.hashes_1;
  }
  function _set_keyValues__1821986180($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.keyValues_1 = _set____804775014;
  }
  function _get_keyValues__3593722384($this) {
    unreachableDeclarationLog();
    return $this.keyValues_1;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.hashes_1 = _get_EMPTY_INTS__2699188501();
      $this.keyValues_1 = _get_EMPTY_OBJECTS__654746927();
    } else {
      $this.hashes_1 = new Int32Array(capacity);
      var tmp = $this;
      var tmp$ret$0;
      $l$block: {
        var tmp0_arrayOfNulls_0 = capacity << 1;
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
        break $l$block;
      }
      tmp.keyValues_1 = tmp$ret$0;
    }
    $this._size_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    unreachableDeclarationLog();
    return SimpleArrayMap_init_$Init$(capacity, Object.create(SimpleArrayMap.prototype));
  }
  function SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 0;
    SimpleArrayMap_init_$Init$(capacity, $this);
    return $this;
  }
  function SimpleArrayMap_init_$Create$_0(capacity, $mask0, $marker) {
    return SimpleArrayMap_init_$Init$_0(capacity, $mask0, $marker, Object.create(SimpleArrayMap.prototype));
  }
  function SimpleArrayMap_init_$Init$_1(map, $this) {
    unreachableDeclarationLog();
    SimpleArrayMap_init_$Init$_0(0, 1, null, $this);
    if (!(map == null)) {
      $this.putAll_jjpgox_k$(map);
    }
    return $this;
  }
  function SimpleArrayMap_init_$Create$_1(map) {
    unreachableDeclarationLog();
    return SimpleArrayMap_init_$Init$_1(map, Object.create(SimpleArrayMap.prototype));
  }
  SimpleArrayMap.prototype._set__size__683328613_v7xj2t_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this._size_1 = _set____804775014;
  };
  SimpleArrayMap.prototype._get__size__3041490673_kqacr3_k$ = function () {
    unreachableDeclarationLog();
    return this._size_1;
  };
  SimpleArrayMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    return this._size_1;
  };
  SimpleArrayMap.prototype.indexOf_37mh4k_k$ = function (key, hash) {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.keyValues_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === hash : false) {
      if (equals(key, this.keyValues_1[end << 1]))
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === hash : false) {
      if (equals(key, this.keyValues_1[i << 1]))
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
      Unit_getInstance();
    }
    return ~end;
  };
  SimpleArrayMap.prototype.indexOfNull_k3dchc_k$ = function () {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.keyValues_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === 0 : false) {
      if (null == this.keyValues_1[end << 1])
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === 0 : false) {
      if (null == this.keyValues_1[i << 1])
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
      Unit_getInstance();
    }
    return ~end;
  };
  SimpleArrayMap.prototype.clear_j9y8zo_k$ = function () {
    unreachableDeclarationLog();
    if (this._size_1 > 0) {
      this.hashes_1 = _get_EMPTY_INTS__2699188501();
      this.keyValues_1 = _get_EMPTY_OBJECTS__654746927();
      this._size_1 = 0;
    }
    if (this._size_1 > 0) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  SimpleArrayMap.prototype.ensureCapacity_ignus8_k$ = function (minimumCapacity) {
    unreachableDeclarationLog();
    var osize = this._size_1;
    if (this.hashes_1.length < minimumCapacity) {
      this.hashes_1 = copyOf(this.hashes_1, minimumCapacity);
      this.keyValues_1 = copyOf_0(this.keyValues_1, minimumCapacity << 1);
    }
    if (!(this._size_1 === osize)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  SimpleArrayMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.indexOfKey_ht9ei1_k$(key) >= 0;
  };
  SimpleArrayMap.prototype.indexOfKey_ht9ei1_k$ = function (key) {
    return key == null ? this.indexOfNull_k3dchc_k$() : this.indexOf_37mh4k_k$(key, hashCode(key));
  };
  SimpleArrayMap.prototype.indexOfValue_26501t_k$ = function (value) {
    unreachableDeclarationLog();
    var N = this._size_1 << 1;
    var array = this.keyValues_1;
    if (value == null) {
      var i = 1;
      while (i < N) {
        if (array[i] == null) {
          return i >> 1;
        }
        i = i + 2 | 0;
      }
    } else {
      var i_0 = 1;
      while (i_0 < N) {
        if (equals(value, array[i_0])) {
          return i_0 >> 1;
        }
        i_0 = i_0 + 2 | 0;
      }
    }
    return -1;
  };
  SimpleArrayMap.prototype.containsValue_5viga1_k$ = function (value) {
    unreachableDeclarationLog();
    return this.indexOfValue_26501t_k$(value) >= 0;
  };
  SimpleArrayMap.prototype.get_1mhr4y_k$ = function (key) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  SimpleArrayMap.prototype.getOrDefault_98tstx_k$ = function (key, defaultValue) {
    unreachableDeclarationLog();
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = defaultValue;
    }
    return tmp;
  };
  SimpleArrayMap.prototype.keyAt_krkslr_k$ = function (index) {
    var tmp = this.keyValues_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.valueAt_mb56gt_k$ = function (index) {
    var tmp = this.keyValues_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SimpleArrayMap.prototype.setValueAt_pzoq2_k$ = function (index, value) {
    unreachableDeclarationLog();
    var actualIndex = (index << 1) + 1 | 0;
    var tmp = this.keyValues_1[actualIndex];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    this.keyValues_1[actualIndex] = value;
    return old;
  };
  SimpleArrayMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this._size_1 <= 0;
  };
  SimpleArrayMap.prototype.put_3mhbri_k$ = function (key, value) {
    var osize = this._size_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.indexOfNull_k3dchc_k$();
    } else {
      hash = hashCode(key);
      index = this.indexOf_37mh4k_k$(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.keyValues_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.keyValues_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.hashes_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.hashes_1.length + ' to ' + n);
      }
      this.hashes_1 = copyOf(this.hashes_1, n);
      this.keyValues_1 = copyOf_0(this.keyValues_1, n << 1);
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_copyInto_0 = this.hashes_1;
        var tmp1_copyInto_0 = this.hashes_1;
        var tmp2_copyInto_0 = index + 1 | 0;
        var tmp3_copyInto_0 = index;
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
        var tmp_0 = tmp$ret$1;
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
        arrayCopy(tmp_0, tmp$ret$3, tmp2_copyInto_0, tmp3_copyInto_0, osize);
        tmp$ret$4 = tmp1_copyInto_0;
        break $l$block_3;
      }
      Unit_getInstance();
      var tmp$ret$5;
      $l$block_4: {
        var tmp4_copyInto_0 = this.keyValues_1;
        var tmp5_copyInto_0 = this.keyValues_1;
        var tmp6_copyInto_0 = (index + 1 | 0) << 1;
        var tmp7_copyInto_0 = index << 1;
        var tmp8_copyInto_0 = this._size_1 << 1;
        arrayCopy(tmp4_copyInto_0, tmp5_copyInto_0, tmp6_copyInto_0, tmp7_copyInto_0, tmp8_copyInto_0);
        tmp$ret$5 = tmp5_copyInto_0;
        break $l$block_4;
      }
      Unit_getInstance();
    }
    {
      if (!(osize === this._size_1) ? true : index >= this.hashes_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    this.hashes_1[index] = hash;
    this.keyValues_1[index << 1] = key;
    this.keyValues_1[(index << 1) + 1 | 0] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this._size_1;
    tmp0_this._size_1 = tmp1 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  SimpleArrayMap.prototype.putAll_jjpgox_k$ = function (array) {
    unreachableDeclarationLog();
    var N = array._size_1;
    this.ensureCapacity_ignus8_k$(this._size_1 + N | 0);
    if (this._size_1 === 0) {
      if (N > 0) {
        var tmp$ret$4;
        $l$block_3: {
          var tmp0_copyInto_0 = array.hashes_1;
          var tmp1_copyInto_0 = this.hashes_1;
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
          arrayCopy(tmp, tmp$ret$3, 0, 0, N);
          tmp$ret$4 = tmp1_copyInto_0;
          break $l$block_3;
        }
        Unit_getInstance();
        var tmp$ret$5;
        $l$block_4: {
          var tmp2_copyInto_0 = array.keyValues_1;
          var tmp3_copyInto_0 = this.keyValues_1;
          var tmp4_copyInto_0 = N << 1;
          arrayCopy(tmp2_copyInto_0, tmp3_copyInto_0, 0, 0, tmp4_copyInto_0);
          tmp$ret$5 = tmp3_copyInto_0;
          break $l$block_4;
        }
        Unit_getInstance();
        this._size_1 = N;
      }
    } else {
      var inductionVariable = 0;
      if (inductionVariable < N)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.put_3mhbri_k$(array.keyAt_krkslr_k$(i), array.valueAt_mb56gt_k$(i));
          Unit_getInstance();
        }
         while (inductionVariable < N);
    }
  };
  SimpleArrayMap.prototype.putIfAbsent_f5fh1k_k$ = function (key, value) {
    unreachableDeclarationLog();
    var mapValue = this.get_1mhr4y_k$(key);
    if (mapValue == null) {
      mapValue = this.put_3mhbri_k$(key, value);
    }
    return mapValue;
  };
  SimpleArrayMap.prototype.remove_8hbkc0_k$ = function (key) {
    unreachableDeclarationLog();
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.removeAt_qvpkxi_k$(index) : null;
  };
  SimpleArrayMap.prototype.remove_i68l5z_k$ = function (key, value) {
    unreachableDeclarationLog();
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_mb56gt_k$(index);
      if (equals(value, mapValue)) {
        this.removeAt_qvpkxi_k$(index);
        Unit_getInstance();
        return true;
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.removeAt_qvpkxi_k$ = function (index) {
    unreachableDeclarationLog();
    var old = this.keyValues_1[(index << 1) + 1 | 0];
    var osize = this._size_1;
    if (osize <= 1) {
      if (false) {
        println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to 0');
      }
      this.clear_j9y8zo_k$();
    } else {
      var nsize = osize - 1 | 0;
      if (this.hashes_1.length > 8 ? osize < (this.hashes_1.length / 3 | 0) : false) {
        var n = osize > 8 ? osize + (osize >> 1) | 0 : 8;
        if (false) {
          println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to ' + n);
        }
        var ohashes = this.hashes_1;
        var oarray = this.keyValues_1;
        this.hashes_1 = new Int32Array(n);
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
          var tmp0_arrayOfNulls_0 = n << 1;
          tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
          break $l$block;
        }
        tmp.keyValues_1 = tmp$ret$0;
        if (!(osize === this._size_1)) {
          throw ConcurrentModificationException_init_$Create$();
        }
        if (index > 0) {
          if (false) {
            println('SimpleArrayMap remove: copy from 0-' + index + ' to 0');
          }
          var tmp$ret$5;
          $l$block_4: {
            var tmp1_copyInto_0 = this.hashes_1;
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                tmp$ret$1 = ohashes;
                break $l$block_0;
              }
              tmp$ret$2 = tmp$ret$1;
              break $l$block_1;
            }
            var tmp_0 = tmp$ret$2;
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                tmp$ret$3 = tmp1_copyInto_0;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            arrayCopy(tmp_0, tmp$ret$4, 0, 0, index);
            tmp$ret$5 = tmp1_copyInto_0;
            break $l$block_4;
          }
          Unit_getInstance();
          var tmp$ret$6;
          $l$block_5: {
            var tmp2_copyInto_0 = this.keyValues_1;
            var tmp3_copyInto_0 = index << 1;
            arrayCopy(oarray, tmp2_copyInto_0, 0, 0, tmp3_copyInto_0);
            tmp$ret$6 = tmp2_copyInto_0;
            break $l$block_5;
          }
          Unit_getInstance();
        }
        if (index < nsize) {
          if (false) {
            println('SimpleArrayMap remove: copy from ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          }
          var tmp$ret$11;
          $l$block_10: {
            var tmp4_copyInto_0 = this.hashes_1;
            var tmp5_copyInto_0 = index + 1 | 0;
            var tmp6_copyInto_0 = nsize + 1 | 0;
            var tmp$ret$8;
            $l$block_7: {
              var tmp$ret$7;
              $l$block_6: {
                tmp$ret$7 = ohashes;
                break $l$block_6;
              }
              tmp$ret$8 = tmp$ret$7;
              break $l$block_7;
            }
            var tmp_1 = tmp$ret$8;
            var tmp$ret$10;
            $l$block_9: {
              var tmp$ret$9;
              $l$block_8: {
                tmp$ret$9 = tmp4_copyInto_0;
                break $l$block_8;
              }
              tmp$ret$10 = tmp$ret$9;
              break $l$block_9;
            }
            arrayCopy(tmp_1, tmp$ret$10, index, tmp5_copyInto_0, tmp6_copyInto_0);
            tmp$ret$11 = tmp4_copyInto_0;
            break $l$block_10;
          }
          Unit_getInstance();
          var tmp$ret$12;
          $l$block_11: {
            var tmp7_copyInto_0 = this.keyValues_1;
            var tmp8_copyInto_0 = index << 1;
            var tmp9_copyInto_0 = (index + 1 | 0) << 1;
            var tmp10_copyInto_0 = (nsize + 1 | 0) << 1;
            arrayCopy(oarray, tmp7_copyInto_0, tmp8_copyInto_0, tmp9_copyInto_0, tmp10_copyInto_0);
            tmp$ret$12 = tmp7_copyInto_0;
            break $l$block_11;
          }
          Unit_getInstance();
        }
      } else {
        if (index < nsize) {
          if (false)
            println('SimpleArrayMap remove: move ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          var tmp$ret$17;
          $l$block_16: {
            var tmp11_copyInto_0 = this.hashes_1;
            var tmp12_copyInto_0 = this.hashes_1;
            var tmp13_copyInto_0 = index + 1 | 0;
            var tmp14_copyInto_0 = nsize + 1 | 0;
            var tmp$ret$14;
            $l$block_13: {
              var tmp$ret$13;
              $l$block_12: {
                tmp$ret$13 = tmp11_copyInto_0;
                break $l$block_12;
              }
              tmp$ret$14 = tmp$ret$13;
              break $l$block_13;
            }
            var tmp_2 = tmp$ret$14;
            var tmp$ret$16;
            $l$block_15: {
              var tmp$ret$15;
              $l$block_14: {
                tmp$ret$15 = tmp12_copyInto_0;
                break $l$block_14;
              }
              tmp$ret$16 = tmp$ret$15;
              break $l$block_15;
            }
            arrayCopy(tmp_2, tmp$ret$16, index, tmp13_copyInto_0, tmp14_copyInto_0);
            tmp$ret$17 = tmp12_copyInto_0;
            break $l$block_16;
          }
          Unit_getInstance();
          var tmp$ret$18;
          $l$block_17: {
            var tmp15_copyInto_0 = this.keyValues_1;
            var tmp16_copyInto_0 = this.keyValues_1;
            var tmp17_copyInto_0 = index << 1;
            var tmp18_copyInto_0 = (index + 1 | 0) << 1;
            var tmp19_copyInto_0 = (nsize + 1 | 0) << 1;
            arrayCopy(tmp15_copyInto_0, tmp16_copyInto_0, tmp17_copyInto_0, tmp18_copyInto_0, tmp19_copyInto_0);
            tmp$ret$18 = tmp16_copyInto_0;
            break $l$block_17;
          }
          Unit_getInstance();
        }
        this.keyValues_1[nsize << 1] = null;
        this.keyValues_1[(nsize << 1) + 1 | 0] = null;
      }
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this._size_1 = nsize;
    }
    return (old == null ? true : isObject(old)) ? old : THROW_CCE();
  };
  SimpleArrayMap.prototype.replace_74alw7_k$ = function (key, value) {
    unreachableDeclarationLog();
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.setValueAt_pzoq2_k$(index, value) : null;
  };
  SimpleArrayMap.prototype.replace_mod94e_k$ = function (key, oldValue, newValue) {
    unreachableDeclarationLog();
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_mb56gt_k$(index);
      if (mapValue === oldValue) {
        this.setValueAt_pzoq2_k$(index, newValue);
        Unit_getInstance();
        return true;
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this._size_1 === map._size_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this._size_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.keyAt_krkslr_k$(i);
            var mine = this.valueAt_mb56gt_k$(i);
            var theirs = map.get_1mhr4y_k$(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.containsKey_wgk31w_k$(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this._size_1 === map_0._get_size__809037418_ddoh9m_k$())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this._size_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.keyAt_krkslr_k$(i_0);
              var mine_0 = this.valueAt_mb56gt_k$(i_0);
              var tmp$ret$0;
              $l$block: {
                var tmp0_get_0 = map_0;
                tmp$ret$0 = (isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()).get_1mhr4y_k$(key_0);
                break $l$block;
              }
              var theirs_0 = tmp$ret$0;
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  var tmp$ret$1;
                  $l$block_0: {
                    var tmp1_containsKey_0 = map_0;
                    tmp$ret$1 = (isInterface(tmp1_containsKey_0, Map) ? tmp1_containsKey_0 : THROW_CCE()).containsKey_wgk31w_k$(key_0);
                    break $l$block_0;
                  }
                  tmp = !tmp$ret$1;
                }
                if (tmp) {
                  return false;
                } else {
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        } else {
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
      } else {
        if ($p instanceof ClassCastException) {
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return false;
  };
  SimpleArrayMap.prototype.hashCode = function () {
    var hashes = this.hashes_1;
    var array = this.keyValues_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this._size_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      Unit_getInstance();
      v = v + 2 | 0;
    }
    return result;
  };
  SimpleArrayMap.prototype.toString = function () {
    if (this.isEmpty_y1axqb_k$()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this._size_1, 28));
    buffer.append_t8oh9e_k$(_Char___init__impl__380027157(123));
    Unit_getInstance();
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.append_ssq29y_k$(', ');
          Unit_getInstance();
        }
        var key = this.keyAt_krkslr_k$(i);
        if (!(key === this)) {
          buffer.append_t8pm91_k$(key);
          Unit_getInstance();
        } else {
          buffer.append_ssq29y_k$('(this Map)');
          Unit_getInstance();
        }
        buffer.append_t8oh9e_k$(_Char___init__impl__380027157(61));
        Unit_getInstance();
        var value = this.valueAt_mb56gt_k$(i);
        if (!(value === this)) {
          buffer.append_t8pm91_k$(value);
          Unit_getInstance();
        } else {
          buffer.append_ssq29y_k$('(this Map)');
          Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    buffer.append_t8oh9e_k$(_Char___init__impl__380027157(125));
    Unit_getInstance();
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this._size_1 = 0;
  }
  SimpleArrayMap.$metadata$ = {
    simpleName: 'SimpleArrayMap',
    kind: 'class',
    interfaces: []
  };
  function _get_CONCURRENT_MODIFICATION_EXCEPTIONS__121302892() {
    unreachableDeclarationLog();
    return CONCURRENT_MODIFICATION_EXCEPTIONS;
  }
  var CONCURRENT_MODIFICATION_EXCEPTIONS;
  function _get_BASE_SIZE__3913046914() {
    unreachableDeclarationLog();
    return BASE_SIZE;
  }
  var BASE_SIZE;
  function _get_DEBUG__2224823294() {
    unreachableDeclarationLog();
    return DEBUG;
  }
  var DEBUG;
  function _get_TAG__856418391() {
    unreachableDeclarationLog();
    return TAG;
  }
  var TAG;
  function ResourceLoader() {
    unreachableDeclarationLog();
  }
  ResourceLoader.$metadata$ = {
    simpleName: 'ResourceLoader',
    kind: 'interface',
    interfaces: []
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.MaximumAsyncTimeout_1 = new Long(15000, 0);
  }
  Companion_3.prototype._get_MaximumAsyncTimeout__643883468_ancnnw_k$ = function () {
    return this.MaximumAsyncTimeout_1;
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Font() {
    unreachableDeclarationLog();
    Companion_getInstance_12();
  }
  Font.$metadata$ = {
    simpleName: 'Font',
    kind: 'interface',
    interfaces: []
  };
  function PlatformFontLoader() {
    unreachableDeclarationLog();
  }
  PlatformFontLoader.$metadata$ = {
    simpleName: 'PlatformFontLoader',
    kind: 'interface',
    interfaces: []
  };
  function toFontFamily(_this__1828080292) {
    unreachableDeclarationLog();
    return FontFamily_0([_this__1828080292]);
  }
  function Resolver() {
    unreachableDeclarationLog();
  }
  Resolver.$metadata$ = {
    simpleName: 'Resolver',
    kind: 'interface',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.Default_1 = new DefaultFontFamily();
    this.SansSerif_1 = new GenericFontFamily('sans-serif');
    this.Serif_1 = new GenericFontFamily('serif');
    this.Monospace_1 = new GenericFontFamily('monospace');
    this.Cursive_1 = new GenericFontFamily('cursive');
  }
  Companion_4.prototype._get_Default__2834936080_o59jao_k$ = function () {
    return this.Default_1;
  };
  Companion_4.prototype._get_SansSerif__224362247_3pkv0n_k$ = function () {
    return this.SansSerif_1;
  };
  Companion_4.prototype._get_Serif__2685263380_qmdjho_k$ = function () {
    return this.Serif_1;
  };
  Companion_4.prototype._get_Monospace__3539616462_chpsfm_k$ = function () {
    return this.Monospace_1;
  };
  Companion_4.prototype._get_Cursive__2767107596_p9nc38_k$ = function () {
    return this.Cursive_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_13();
    this.canLoadSynchronously_1 = canLoadSynchronously;
  }
  FontFamily.prototype._get_canLoadSynchronously__3760437995_8u8tg5_k$ = function () {
    unreachableDeclarationLog();
    return this.canLoadSynchronously_1;
  };
  FontFamily.$metadata$ = {
    simpleName: 'FontFamily',
    kind: 'class',
    interfaces: []
  };
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  SystemFontFamily.$metadata$ = {
    simpleName: 'SystemFontFamily',
    kind: 'class',
    interfaces: []
  };
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  DefaultFontFamily.$metadata$ = {
    simpleName: 'DefaultFontFamily',
    kind: 'class',
    interfaces: []
  };
  function GenericFontFamily(name) {
    SystemFontFamily.call(this);
    this.name_1 = name;
  }
  GenericFontFamily.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  GenericFontFamily.$metadata$ = {
    simpleName: 'GenericFontFamily',
    kind: 'class',
    interfaces: []
  };
  function FileBasedFontFamily() {
    unreachableDeclarationLog();
    FontFamily.call(this, false);
  }
  FileBasedFontFamily.$metadata$ = {
    simpleName: 'FileBasedFontFamily',
    kind: 'class',
    interfaces: []
  };
  function LoadedFontFamily(typeface) {
    unreachableDeclarationLog();
    FontFamily.call(this, true);
    this.typeface_1 = typeface;
  }
  LoadedFontFamily.prototype._get_typeface__2007095828_x6z11w_k$ = function () {
    return this.typeface_1;
  };
  LoadedFontFamily.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof LoadedFontFamily))
      return false;
    else {
    }
    if (!equals(this.typeface_1, other.typeface_1))
      return false;
    return true;
  };
  LoadedFontFamily.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return hashCode(this.typeface_1);
  };
  LoadedFontFamily.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'LoadedFontFamily(typeface=' + this.typeface_1 + ')';
  };
  LoadedFontFamily.$metadata$ = {
    simpleName: 'LoadedFontFamily',
    kind: 'class',
    interfaces: []
  };
  function FontListFontFamily(fonts) {
    unreachableDeclarationLog();
    FileBasedFontFamily.call(this);
    this.$$delegate_0__1 = fonts;
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !fonts.isEmpty_y1axqb_k$();
        break $l$block;
      }
      var tmp0_check_0 = tmp$ret$0;
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'At least one font should be passed to FontFamily';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    this.fonts_1 = ArrayList_init_$Create$_1(fonts);
  }
  FontListFontFamily.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    return this.$$delegate_0__1._get_size__809037418_ddoh9m_k$();
  };
  FontListFontFamily.prototype.contains_m15m86_k$ = function (element) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.contains_2ehdt1_k$(element);
  };
  FontListFontFamily.prototype.contains_2ehdt1_k$ = function (element) {
    unreachableDeclarationLog();
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return false;
    else {
    }
    return this.contains_m15m86_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.containsAll_3sdfdp_k$ = function (elements) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.containsAll_jr3fla_k$(elements);
  };
  FontListFontFamily.prototype.containsAll_jr3fla_k$ = function (elements) {
    unreachableDeclarationLog();
    return this.containsAll_3sdfdp_k$(elements);
  };
  FontListFontFamily.prototype.get_fkrdnv_k$ = function (index) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.get_fkrdnv_k$(index);
  };
  FontListFontFamily.prototype.indexOf_st0xpg_k$ = function (element) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.indexOf_dcv8dt_k$(element);
  };
  FontListFontFamily.prototype.indexOf_dcv8dt_k$ = function (element) {
    unreachableDeclarationLog();
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    else {
    }
    return this.indexOf_st0xpg_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.isEmpty_y1axqb_k$ = function () {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  FontListFontFamily.prototype.iterator_jk1svi_k$ = function () {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.iterator_jk1svi_k$();
  };
  FontListFontFamily.prototype.lastIndexOf_3okdbi_k$ = function (element) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.lastIndexOf_rzx8t5_k$(element);
  };
  FontListFontFamily.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    unreachableDeclarationLog();
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    else {
    }
    return this.lastIndexOf_3okdbi_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  FontListFontFamily.prototype.listIterator_xjshxw_k$ = function () {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.listIterator_xjshxw_k$();
  };
  FontListFontFamily.prototype.listIterator_5hanv9_k$ = function (index) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.listIterator_5hanv9_k$(index);
  };
  FontListFontFamily.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.subList_d153ha_k$(fromIndex, toIndex);
  };
  FontListFontFamily.prototype._get_fonts__3238344269_hh33jn_k$ = function () {
    return this.fonts_1;
  };
  FontListFontFamily.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof FontListFontFamily))
      return false;
    else {
    }
    if (!equals(this.fonts_1, other.fonts_1))
      return false;
    return true;
  };
  FontListFontFamily.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return hashCode(this.fonts_1);
  };
  FontListFontFamily.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'FontListFontFamily(fonts=' + this.fonts_1 + ')';
  };
  FontListFontFamily.$metadata$ = {
    simpleName: 'FontListFontFamily',
    kind: 'class',
    interfaces: [List]
  };
  function FontFamily_0(fonts) {
    unreachableDeclarationLog();
    return new FontListFontFamily(asList(fonts));
  }
  function _get_GlobalTypefaceRequestCache__4277115742() {
    init_properties_FontFamilyResolver_kt_3822497665();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function _get_GlobalAsyncTypefaceCache__2251892441() {
    init_properties_FontFamilyResolver_kt_3822497665();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function FontFamilyResolverImpl_init_$Init$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      platformResolveInterceptor = Companion_getInstance_14().Default_1;
    if (!(($mask0 & 4) === 0))
      typefaceRequestCache = _get_GlobalTypefaceRequestCache__4277115742();
    if (!(($mask0 & 8) === 0)) {
      var tmp = _get_GlobalAsyncTypefaceCache__2251892441();
      fontListFontFamilyTypefaceAdapter = FontListFontFamilyTypefaceAdapter_init_$Create$(tmp, null, 2, null);
    }
    if (!(($mask0 & 16) === 0))
      platformFamilyTypefaceAdapter = new PlatformFontFamilyTypefaceAdapter();
    FontFamilyResolverImpl.call($this, platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter);
    return $this;
  }
  function FontFamilyResolverImpl_init_$Create$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker) {
    return FontFamilyResolverImpl_init_$Init$(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter, $mask0, $marker, Object.create(FontFamilyResolverImpl.prototype));
  }
  function _get_platformResolveInterceptor__1163908511($this) {
    unreachableDeclarationLog();
    return $this.platformResolveInterceptor_1;
  }
  function _get_typefaceRequestCache__3876696353($this) {
    unreachableDeclarationLog();
    return $this.typefaceRequestCache_1;
  }
  function _get_fontListFontFamilyTypefaceAdapter__3695962041($this) {
    unreachableDeclarationLog();
    return $this.fontListFontFamilyTypefaceAdapter_1;
  }
  function _get_platformFamilyTypefaceAdapter__2974501616($this) {
    unreachableDeclarationLog();
    return $this.platformFamilyTypefaceAdapter_1;
  }
  function _get_createDefaultTypeface__3226433525($this) {
    unreachableDeclarationLog();
    return $this.createDefaultTypeface_1;
  }
  function resolve($this, typefaceRequest) {
    var result = $this.typefaceRequestCache_1.runCached_i96p5x_k$(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.copy$default_jauo7a_k$(null, null, null, null, null, 30, null))._get_value__3683422336_a43j40_k$();
    };
  }
  function FontFamilyResolverImpl$preload$lambda$lambda() {
    unreachableDeclarationLog();
    return function (it) {
      return Unit_getInstance();
    };
  }
  function FontFamilyResolverImpl$preload$lambda$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      return Unit_getInstance();
    };
  }
  function FontFamilyResolverImpl$preload$lambda(this$0) {
    unreachableDeclarationLog();
    return function (typeRequest) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wbzvw9_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda(), this$0.createDefaultTypeface_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = this$0.platformFamilyTypefaceAdapter_1.resolve_wbzvw9_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda_0(), this$0.createDefaultTypeface_1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wbzvw9_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.platformFamilyTypefaceAdapter_1.resolve_wbzvw9_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function $preloadCOROUTINE$0(_this__1828080292, fontFamily, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.fontFamily_1 = fontFamily;
  }
  $preloadCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            var tmp_0 = this.fontFamily_1;
            if (!(tmp_0 instanceof FontListFontFamily))
              return Unit_getInstance();
            else {
            }

            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.fontListFontFamilyTypefaceAdapter_1.preload_5j1p48_k$(this.fontFamily_1, this._this__1828080292__1.platformFontLoader_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_fastMap_0 = this.fontFamily_1._get_fonts__3238344269_hh33jn_k$();
            var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
            var inductionVariable = 0;
            var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index_2_3 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
                var tmp0_plusAssign_0_5_5 = new TypefaceRequest(this._this__1828080292__1.platformResolveInterceptor_1.interceptFontFamily_ok416z_k$(this.fontFamily_1), this._this__1828080292__1.platformResolveInterceptor_1.interceptFontWeight_yj7vf0_k$(item_3_4._get_weight__3515779987_cvworx_k$()), this._this__1828080292__1.platformResolveInterceptor_1.interceptFontStyle_aqbvzf_k$(item_3_4._get_style__3615460416_ope3tj_k$()), Companion_getInstance_18()._get_All__855894832_54xjwk_k$(), this._this__1828080292__1.platformFontLoader_1._get_cacheKey__927973358_fchotq_k$());
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
               while (inductionVariable <= last);
            var typeRequests = target_1;
            this._this__1828080292__1.typefaceRequestCache_1.preWarmCache_a6a4xg_k$(typeRequests, FontFamilyResolverImpl$preload$lambda(this._this__1828080292__1));
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
  $preloadCOROUTINE$0.$metadata$ = {
    simpleName: '$preloadCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    this.platformFontLoader_1 = platformFontLoader;
    this.platformResolveInterceptor_1 = platformResolveInterceptor;
    this.typefaceRequestCache_1 = typefaceRequestCache;
    this.fontListFontFamilyTypefaceAdapter_1 = fontListFontFamilyTypefaceAdapter;
    this.platformFamilyTypefaceAdapter_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.createDefaultTypeface_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  FontFamilyResolverImpl.prototype._get_platformFontLoader__856683542_e61p92_k$ = function () {
    return this.platformFontLoader_1;
  };
  FontFamilyResolverImpl.prototype.preload_i81elv_k$ = function (fontFamily, $cont) {
    unreachableDeclarationLog();
    var tmp = new $preloadCOROUTINE$0(this, fontFamily, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontFamilyResolverImpl.prototype.resolve_3z78ru_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.platformResolveInterceptor_1.interceptFontFamily_ok416z_k$(fontFamily), this.platformResolveInterceptor_1.interceptFontWeight_yj7vf0_k$(fontWeight), this.platformResolveInterceptor_1.interceptFontStyle_aqbvzf_k$(fontStyle), this.platformResolveInterceptor_1.interceptFontSynthesis_3mzb7i_k$(fontSynthesis), this.platformFontLoader_1._get_cacheKey__927973358_fchotq_k$()));
  };
  FontFamilyResolverImpl.$metadata$ = {
    simpleName: 'FontFamilyResolverImpl',
    kind: 'class',
    interfaces: [Resolver]
  };
  function _get_resultCache__1365206220($this) {
    unreachableDeclarationLog();
    return $this.resultCache_1;
  }
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_synchronized_0 = this$0.lock_1;
        var tmp$ret$0;
        $l$block: {
          var tmp;
          if (finalResult._get_cacheable__3017587189_l4iosr_k$()) {
            this$0.resultCache_1.put_3mhbri_k$($typefaceRequest, finalResult);
            tmp = Unit_getInstance();
          } else {
            this$0.resultCache_1.remove_8hbkc0_k$($typefaceRequest);
            tmp = Unit_getInstance();
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.lock_1 = createSynchronizedObject();
    this.resultCache_1 = LruCache_init_$Create$(16);
  }
  TypefaceRequestCache.prototype._get_lock__802729600_d9xa4g_k$ = function () {
    unreachableDeclarationLog();
    return this.lock_1;
  };
  TypefaceRequestCache.prototype.runCached_i96p5x_k$ = function (typefaceRequest, resolveTypeface) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_synchronized_0 = this.lock_1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_safe_receiver_2 = this.resultCache_1.get_1mhr4y_k$(typefaceRequest);
          var tmp;
          if (tmp0_safe_receiver_2 == null) {
            tmp = null;
          } else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              var tmp$ret$0;
              $l$block: {
                var tmp_0;
                if (tmp0_safe_receiver_2._get_cacheable__3017587189_l4iosr_k$()) {
                  return tmp0_safe_receiver_2;
                } else {
                  tmp_0 = this.resultCache_1.remove_8hbkc0_k$(typefaceRequest);
                }
                tmp$ret$0 = tmp_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp = tmp$ret$1;
          }
          tmp$ret$2 = tmp;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    Unit_getInstance();
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        throw IllegalStateException_init_$Create$_0('Could not load font', $p);
      } else {
        {
          throw $p;
        }
      }
      tmp_1 = tmp_2;
    }
    var currentTypefaceResult = tmp_1;
    var tmp$ret$6;
    $l$block_5: {
      var tmp1_synchronized_0 = this.lock_1;
      var tmp$ret$5;
      $l$block_4: {
        var tmp_3;
        if (this.resultCache_1.get_1mhr4y_k$(typefaceRequest) == null ? currentTypefaceResult._get_cacheable__3017587189_l4iosr_k$() : false) {
          this.resultCache_1.put_3mhbri_k$(typefaceRequest, currentTypefaceResult);
          tmp_3 = Unit_getInstance();
        }
        tmp$ret$5 = tmp_3;
        break $l$block_4;
      }
      tmp$ret$6 = tmp$ret$5;
      break $l$block_5;
    }
    return currentTypefaceResult;
  };
  TypefaceRequestCache.prototype.preWarmCache_a6a4xg_k$ = function (typefaceRequests, resolveTypeface) {
    unreachableDeclarationLog();
    var inductionVariable = 0;
    var last = typefaceRequests._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var typeRequest = typefaceRequests.get_fkrdnv_k$(i);
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_synchronized_0 = this.lock_1;
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = this.resultCache_1.get_1mhr4y_k$(typeRequest);
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var prior = tmp$ret$2;
        if (!(prior == null))
          continue $l$loop_0;
        var tmp;
        try {
          tmp = resolveTypeface(typeRequest);
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Exception) {
            throw IllegalStateException_init_$Create$_0('Could not load font', $p);
          } else {
            {
              throw $p;
            }
          }
          tmp = tmp_0;
        }
        var next = tmp;
        if (next instanceof Async)
          continue $l$loop_0;
        else {
        }
        var tmp$ret$5;
        $l$block_4: {
          var tmp1_synchronized_0 = this.lock_1;
          var tmp$ret$4;
          $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = this.resultCache_1.put_3mhbri_k$(typeRequest, next);
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        Unit_getInstance();
      }
       while (inductionVariable <= last);
  };
  TypefaceRequestCache.prototype.get_kfouzs_k$ = function (typefaceRequest) {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.lock_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = this.resultCache_1.get_1mhr4y_k$(typefaceRequest);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  TypefaceRequestCache.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.lock_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = this.resultCache_1._get_size__809037418_ddoh9m_k$();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  TypefaceRequestCache.$metadata$ = {
    simpleName: 'TypefaceRequestCache',
    kind: 'class',
    interfaces: []
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  PlatformResolveInterceptor$Companion$Default$1.$metadata$ = {
    kind: 'class',
    interfaces: [PlatformResolveInterceptor]
  };
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.Default_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  Companion_5.prototype._get_Default__2834936080_o59jao_k$ = function () {
    unreachableDeclarationLog();
    return this.Default_1;
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_14() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
    unreachableDeclarationLog();
    Companion_getInstance_14();
  }
  PlatformResolveInterceptor.$metadata$ = {
    simpleName: 'PlatformResolveInterceptor',
    kind: 'interface',
    interfaces: []
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.fontFamily_1 = fontFamily;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.resourceLoaderCacheKey_1 = resourceLoaderCacheKey;
  }
  TypefaceRequest.prototype._get_fontFamily__3097773656_jss0iw_k$ = function () {
    return this.fontFamily_1;
  };
  TypefaceRequest.prototype._get_fontWeight__1116225988_igklhg_k$ = function () {
    return this.fontWeight_1;
  };
  TypefaceRequest.prototype._get_fontStyle__2152582127_690388_k$ = function () {
    return this.fontStyle_1;
  };
  TypefaceRequest.prototype._get_fontSynthesis__3907866988_y4jemg_k$ = function () {
    return this.fontSynthesis_1;
  };
  TypefaceRequest.prototype._get_resourceLoaderCacheKey__889581677_epmtm5_k$ = function () {
    unreachableDeclarationLog();
    return this.resourceLoaderCacheKey_1;
  };
  TypefaceRequest.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamily_1;
  };
  TypefaceRequest.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.fontWeight_1;
  };
  TypefaceRequest.prototype.component3_phv0lb_k$ = function () {
    unreachableDeclarationLog();
    return this.fontStyle_1;
  };
  TypefaceRequest.prototype.component4_rmvhp9_k$ = function () {
    unreachableDeclarationLog();
    return this.fontSynthesis_1;
  };
  TypefaceRequest.prototype.component5_7eebs8_k$ = function () {
    unreachableDeclarationLog();
    return this.resourceLoaderCacheKey_1;
  };
  TypefaceRequest.prototype.copy_thy6aa_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.copy$default_jauo7a_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 2) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 4) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 8) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 16) === 0))
      resourceLoaderCacheKey = this.resourceLoaderCacheKey_1;
    return this.copy_thy6aa_k$(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  TypefaceRequest.prototype.toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.fontFamily_1 + ', fontWeight=' + this.fontWeight_1 + ', fontStyle=' + new FontStyle(this.fontStyle_1) + ', fontSynthesis=' + new FontSynthesis(this.fontSynthesis_1) + ', resourceLoaderCacheKey=' + toString_0(this.resourceLoaderCacheKey_1) + ')';
  };
  TypefaceRequest.prototype.hashCode = function () {
    var result = this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1);
    result = imul(result, 31) + this.fontWeight_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_467747312(this.fontStyle_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_3998513709(this.fontSynthesis_1) | 0;
    result = imul(result, 31) + (this.resourceLoaderCacheKey_1 == null ? 0 : hashCode(this.resourceLoaderCacheKey_1)) | 0;
    return result;
  };
  TypefaceRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!this.fontWeight_1.equals(tmp0_other_with_cast.fontWeight_1))
      return false;
    if (!(this.fontStyle_1 === tmp0_other_with_cast.fontStyle_1))
      return false;
    if (!(this.fontSynthesis_1 === tmp0_other_with_cast.fontSynthesis_1))
      return false;
    if (!equals(this.resourceLoaderCacheKey_1, tmp0_other_with_cast.resourceLoaderCacheKey_1))
      return false;
    return true;
  };
  TypefaceRequest.$metadata$ = {
    simpleName: 'TypefaceRequest',
    kind: 'class',
    interfaces: []
  };
  function Immutable_init_$Init$(value, cacheable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cacheable = true;
    Immutable.call($this, value, cacheable);
    return $this;
  }
  function Immutable_init_$Create$(value, cacheable, $mask0, $marker) {
    return Immutable_init_$Init$(value, cacheable, $mask0, $marker, Object.create(Immutable.prototype));
  }
  function Immutable(value, cacheable) {
    this.value_1 = value;
    this.cacheable_1 = cacheable;
  }
  Immutable.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  Immutable.prototype._get_cacheable__3017587189_l4iosr_k$ = function () {
    return this.cacheable_1;
  };
  Immutable.$metadata$ = {
    simpleName: 'Immutable',
    kind: 'class',
    interfaces: [TypefaceResult]
  };
  function Async(current) {
    this.current_1 = current;
  }
  Async.prototype._get_current__2701413560_qcrdxk_k$ = function () {
    unreachableDeclarationLog();
    return this.current_1;
  };
  Async.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.current_1._get_value__3683422336_a43j40_k$();
  };
  Async.prototype._get_cacheable__3017587189_l4iosr_k$ = function () {
    return this.current_1._get_cacheable__3017587189_l4iosr_k$();
  };
  Async.$metadata$ = {
    simpleName: 'Async',
    kind: 'class',
    interfaces: [TypefaceResult, State]
  };
  function TypefaceResult() {
    unreachableDeclarationLog();
  }
  TypefaceResult.$metadata$ = {
    simpleName: 'TypefaceResult',
    kind: 'interface',
    interfaces: [State]
  };
  var properties_initialized_FontFamilyResolver_kt_248344997;
  function init_properties_FontFamilyResolver_kt_3822497665() {
    if (!properties_initialized_FontFamilyResolver_kt_248344997) {
      properties_initialized_FontFamilyResolver_kt_248344997 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function FontFamilyTypefaceAdapter() {
    unreachableDeclarationLog();
  }
  FontFamilyTypefaceAdapter.$metadata$ = {
    simpleName: 'FontFamilyTypefaceAdapter',
    kind: 'interface',
    interfaces: []
  };
  function _AsyncTypefaceResult___init__impl__3259260727(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__1251908435(this_0) {
    return this_0;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__1742587786(this_0) {
    return _AsyncTypefaceResult___get_result__impl__1251908435(this_0) == null;
  }
  function AsyncTypefaceResult__toString_impl_1126360561(this_0) {
    return 'AsyncTypefaceResult(result=' + toString_0(this_0) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_4105912738(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function AsyncTypefaceResult__equals_impl_286791806(this_0, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.result_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.result_1 = result;
  }
  AsyncTypefaceResult.prototype.toString = function () {
    return AsyncTypefaceResult__toString_impl_1126360561(this.result_1);
  };
  AsyncTypefaceResult.prototype.hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_4105912738(this.result_1);
  };
  AsyncTypefaceResult.prototype.equals = function (other) {
    return AsyncTypefaceResult__equals_impl_286791806(this.result_1, other);
  };
  AsyncTypefaceResult.$metadata$ = {
    simpleName: 'AsyncTypefaceResult',
    kind: 'class',
    interfaces: []
  };
  function _get_PermanentFailure__3695545647($this) {
    unreachableDeclarationLog();
    return $this.PermanentFailure_1;
  }
  function Key(font, loaderKey) {
    this.font_1 = font;
    this.loaderKey_1 = loaderKey;
  }
  Key.prototype._get_font__797199324_d6mqxo_k$ = function () {
    unreachableDeclarationLog();
    return this.font_1;
  };
  Key.prototype._get_loaderKey__3283714693_gq2ni3_k$ = function () {
    unreachableDeclarationLog();
    return this.loaderKey_1;
  };
  Key.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.font_1;
  };
  Key.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.loaderKey_1;
  };
  Key.prototype.copy_m7n4q9_k$ = function (font, loaderKey) {
    unreachableDeclarationLog();
    return new Key(font, loaderKey);
  };
  Key.prototype.copy$default_7n6yph_k$ = function (font, loaderKey, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      font = this.font_1;
    if (!(($mask0 & 2) === 0))
      loaderKey = this.loaderKey_1;
    return this.copy_m7n4q9_k$(font, loaderKey);
  };
  Key.prototype.toString = function () {
    return 'Key(font=' + this.font_1 + ', loaderKey=' + toString_0(this.loaderKey_1) + ')';
  };
  Key.prototype.hashCode = function () {
    var result = hashCode(this.font_1);
    result = imul(result, 31) + (this.loaderKey_1 == null ? 0 : hashCode(this.loaderKey_1)) | 0;
    return result;
  };
  Key.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.font_1, tmp0_other_with_cast.font_1))
      return false;
    if (!equals(this.loaderKey_1, tmp0_other_with_cast.loaderKey_1))
      return false;
    return true;
  };
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'class',
    interfaces: []
  };
  function _get_resultCache__1365206220_0($this) {
    unreachableDeclarationLog();
    return $this.resultCache_1;
  }
  function _get_permanentCache__2823170327($this) {
    unreachableDeclarationLog();
    return $this.permanentCache_1;
  }
  function _get_cacheLock__2998572068($this) {
    unreachableDeclarationLog();
    return $this.cacheLock_1;
  }
  function $runCachedCOROUTINE$1(_this__1828080292, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.font_1 = font;
    this.platformFontLoader_1 = platformFontLoader;
    this.forever_1 = forever;
    this.block_1 = block;
  }
  $runCachedCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this.key0__1 = new Key(this.font_1, this.platformFontLoader_1._get_cacheKey__927973358_fchotq_k$());
            var tmp_0 = this;
            tmp_0.tmp0_synchronized_01__1 = this._this__1828080292__1.cacheLock_1;
            var tmp_1 = this;
            var tmp0_elvis_lhs_3 = this._this__1828080292__1.resultCache_1.get_1mhr4y_k$(this.key0__1);
            tmp_1.priorResult_22__1 = tmp0_elvis_lhs_3 == null ? this._this__1828080292__1.permanentCache_1.get_1mhr4y_k$(this.key0__1) : tmp0_elvis_lhs_3;
            if (!(this.priorResult_22__1 == null)) {
              return _AsyncTypefaceResult___get_result__impl__1251908435(this.priorResult_22__1.result_1);
            }

            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.block_1(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also_0 = suspendResult;
            var tmp0_synchronized_0_2 = this._this__1828080292__1.cacheLock_1;
            if (tmp1_also_0 == null) {
              this._this__1828080292__1.permanentCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(this._this__1828080292__1.PermanentFailure_1));
              Unit_getInstance();
            } else if (this.forever_1) {
              this._this__1828080292__1.permanentCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__3259260727(tmp1_also_0)));
              Unit_getInstance();
            } else {
              this._this__1828080292__1.resultCache_1.put_3mhbri_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__3259260727(tmp1_also_0)));
              Unit_getInstance();
            }

            return tmp1_also_0;
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
  $runCachedCOROUTINE$1.$metadata$ = {
    simpleName: '$runCachedCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function AsyncTypefaceCache() {
    this.PermanentFailure_1 = _AsyncTypefaceResult___init__impl__3259260727(null);
    this.resultCache_1 = LruCache_init_$Create$(16);
    var tmp = this;
    tmp.permanentCache_1 = SimpleArrayMap_init_$Create$_0(0, 1, null);
    this.cacheLock_1 = createSynchronizedObject();
  }
  AsyncTypefaceCache.prototype.put_z5rljh_k$ = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader._get_cacheKey__927973358_fchotq_k$());
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.cacheLock_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp;
          if (result == null) {
            tmp = this.permanentCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(this.PermanentFailure_1));
          } else if (forever) {
            tmp = this.permanentCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__3259260727(result)));
          } else {
            tmp = this.resultCache_1.put_3mhbri_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__3259260727(result)));
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    Unit_getInstance();
  };
  AsyncTypefaceCache.prototype.put$default_1dy8l2_k$ = function (font, platformFontLoader, result, forever, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      forever = false;
    return this.put_z5rljh_k$(font, platformFontLoader, result, forever);
  };
  AsyncTypefaceCache.prototype.get_q1bm7w_k$ = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader._get_cacheKey__927973358_fchotq_k$());
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_synchronized_0 = this.cacheLock_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_2 = this.resultCache_1.get_1mhr4y_k$(key);
          tmp$ret$0 = tmp0_elvis_lhs_2 == null ? this.permanentCache_1.get_1mhr4y_k$(key) : tmp0_elvis_lhs_2;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  AsyncTypefaceCache.prototype.runCached_dc5hvi_k$ = function (font, platformFontLoader, forever, block, $cont) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AsyncTypefaceCache.prototype.runCachedBlocking_wh48iw_k$ = function (font, platformFontLoader, block) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_synchronized_0 = this.cacheLock_1;
      var tmp$ret$0;
      $l$block: {
        var key_2 = new Key(font, platformFontLoader._get_cacheKey__927973358_fchotq_k$());
        var tmp0_elvis_lhs_4 = this.resultCache_1.get_1mhr4y_k$(key_2);
        var priorResult_3 = tmp0_elvis_lhs_4 == null ? this.permanentCache_1.get_1mhr4y_k$(key_2) : tmp0_elvis_lhs_4;
        var tmp;
        if (!(priorResult_3 == null)) {
          return _AsyncTypefaceResult___get_result__impl__1251908435(priorResult_3.result_1);
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_also_0 = block();
      {
      }
      {
        this.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also_0, false, 8, null);
      }
      tmp$ret$2 = tmp1_also_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  AsyncTypefaceCache.$metadata$ = {
    simpleName: 'AsyncTypefaceCache',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_2832250971() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__1_2832250971.prototype.handleException_2_sk9ji9_k$ = function (context, exception) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1_2832250971.prototype.handleException_w1h9is_k$ = function (context, exception) {
    return this.handleException_2_sk9ji9_k$(context, exception);
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [CoroutineExceptionHandler]
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $item_3_4, resultContinuation) {
    unreachableDeclarationLog();
    this.$resourceLoader_1 = $resourceLoader;
    this.$item_3_4__1 = $item_3_4;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.invoke_cvgqj3_k$ = function ($this$withTimeout, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_b6qu53_k$($this$withTimeout, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$resourceLoader_1.awaitLoad_kuymx_k$(this.$item_3_4__1, this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeout, completion) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda(this.$resourceLoader_1, this.$item_3_4__1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0($resourceLoader, $item_3_4, resultContinuation) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $item_3_4, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_cvgqj3_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($item_3_4, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    this.$item_3_4__1 = $item_3_4;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.invoke_p0bf06_k$ = function ($cont) {
    unreachableDeclarationLog();
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    unreachableDeclarationLog();
    return this.invoke_p0bf06_k$($cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_0 = Companion_getInstance_12()._get_MaximumAsyncTimeout__643883468_ancnnw_k$();
            suspendResult = withTimeout(tmp_0, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0(this.$resourceLoader_1, this.$item_3_4__1, null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof Exception) {
              var cause_11 = this._get_exception__1672948706_ro13he_k$();
              var tmp_2 = this;
              throw IllegalStateException_init_$Create$_0('Unable to load font ' + this.$item_3_4__1, cause_11);
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
            var tmp0_elvis_lhs_9 = this.TRY_RESULT0__1;
            var tmp_3;
            if (tmp0_elvis_lhs_9 == null) {
              throw IllegalStateException_init_$Create$('Unable to load font ' + this.$item_3_4__1);
            } else {
              tmp_3 = tmp0_elvis_lhs_9;
            }

            return tmp_3;
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.prototype.create_lvr374_k$ = function (completion) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda(this.$item_3_4__1, this.$resourceLoader_1, completion);
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0($item_3_4, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($item_3_4, $resourceLoader, resultContinuation);
    var l = function ($cont) {
      return i.invoke_p0bf06_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $item_3_4, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
    this.$item_3_4__1 = $item_3_4;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.invoke_cvgqj3_k$ = function ($this$async, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_b6qu53_k$($this$async, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.this$0__1.asyncTypefaceCache_1.runCached_dc5hvi_k$(this.$item_3_4__1, this.$resourceLoader_1, true, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0(this.$item_3_4__1, this.$resourceLoader_1, null), this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$async, completion) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this.this$0__1, this.$item_3_4__1, this.$resourceLoader_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda$slambda.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this$0, $item_3_4, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $item_3_4, $resourceLoader, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.invoke_cvgqj3_k$($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter_init_$Init$(asyncTypefaceCache, injectedContext, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      asyncTypefaceCache = new AsyncTypefaceCache();
    if (!(($mask0 & 2) === 0))
      injectedContext = EmptyCoroutineContext_getInstance();
    FontListFontFamilyTypefaceAdapter.call($this, asyncTypefaceCache, injectedContext);
    return $this;
  }
  function FontListFontFamilyTypefaceAdapter_init_$Create$(asyncTypefaceCache, injectedContext, $mask0, $marker) {
    return FontListFontFamilyTypefaceAdapter_init_$Init$(asyncTypefaceCache, injectedContext, $mask0, $marker, Object.create(FontListFontFamilyTypefaceAdapter.prototype));
  }
  function _get_asyncTypefaceCache__1817956700($this) {
    unreachableDeclarationLog();
    return $this.asyncTypefaceCache_1;
  }
  function _set_asyncLoadScope__4179649381($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.asyncLoadScope_1 = _set____804775014;
  }
  function _get_asyncLoadScope__1428409945($this) {
    unreachableDeclarationLog();
    return $this.asyncLoadScope_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.fontMatcher_1 = new FontMatcher();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971();
      break $l$block;
    }
    tmp.DropExceptionHandler_1 = tmp$ret$0;
  }
  Companion_6.prototype._get_fontMatcher__1051199502_hduuq6_k$ = function () {
    unreachableDeclarationLog();
    return this.fontMatcher_1;
  };
  Companion_6.prototype._get_DropExceptionHandler__3719911521_9idfvj_k$ = function () {
    unreachableDeclarationLog();
    return this.DropExceptionHandler_1;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_15() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$preload$lambda() {
    unreachableDeclarationLog();
    return function (it) {
      return Unit_getInstance();
    };
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    this.$asyncLoads_1 = $asyncLoads;
    this.this$0__1 = this$0;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_0 = this;
            var set_1 = HashSet_init_$Create$(this.$asyncLoads_1._get_size__809037418_ddoh9m_k$());
            var target_2 = ArrayList_init_$Create$_0(this.$asyncLoads_1._get_size__809037418_ddoh9m_k$());
            var inductionVariable = 0;
            var last = this.$asyncLoads_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index_2_4 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item_3_5 = this.$asyncLoads_1.get_fkrdnv_k$(index_2_4);
                var key_5_6 = item_3_5;
                if (set_1.add_1j60pz_k$(key_5_6)) {
                  target_2.add_1j60pz_k$(item_3_5);
                  Unit_getInstance();
                }
              }
               while (inductionVariable <= last);
            tmp_0.tmp0_fastMap_00__1 = target_2;
            this.target_11__1 = ArrayList_init_$Create$_0(this.tmp0_fastMap_00__1._get_size__809037418_ddoh9m_k$());
            var inductionVariable_0 = 0;
            var last_0 = this.tmp0_fastMap_00__1._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var index_2_3 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var item_3_4 = this.tmp0_fastMap_00__1.get_fkrdnv_k$(index_2_3);
                var tmp0_plusAssign_0_5_5 = async$default(this.$this$coroutineScope_1, null, null, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this.this$0__1, item_3_4, this.$resourceLoader_1, null), 3, null);
                this.target_11__1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
               while (inductionVariable_0 <= last_0);
            suspendResult = joinAll(this.target_11__1, this);
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
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda(this.$asyncLoads_1, this.this$0__1, this.$resourceLoader_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$preload$slambda.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter$preload$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda_0($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    unreachableDeclarationLog();
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.$asyncLoader_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$asyncLoader_1.load_ne61sj_k$(this);
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
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.$asyncLoader_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  FontListFontFamilyTypefaceAdapter$resolve$slambda.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter$resolve$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_15();
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.asyncLoadScope_1 = CoroutineScope_0(Companion_getInstance_15().DropExceptionHandler_1.plus_rgw9wi_k$(injectedContext).plus_rgw9wi_k$(SupervisorJob(injectedContext.get_1pi7hg_k$(Key_getInstance_0()))));
  }
  FontListFontFamilyTypefaceAdapter.prototype.preload_5j1p48_k$ = function (family, resourceLoader, $cont) {
    unreachableDeclarationLog();
    if (!(family instanceof FontListFontFamily))
      return Unit_getInstance();
    else {
    }
    var allFonts = family._get_fonts__3238344269_hh33jn_k$();
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_fastFilter_0 = family._get_fonts__3238344269_hh33jn_k$();
          {
          }
          var target_1 = ArrayList_init_$Create$_0(tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$());
          {
            {
            }
            var inductionVariable = 0;
            var last = tmp0_fastFilter_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index_2_3 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item_3_4 = tmp0_fastFilter_0.get_fkrdnv_k$(index_2_3);
                {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = item_3_4._get_loadingStrategy__881820962_lu88tl_k$() === Companion_getInstance_16()._get_Async__2183081205_vbacas_k$();
                    break $l$block;
                  }
                  if (tmp$ret$0) {
                    target_1.add_1j60pz_k$(item_3_4);
                    Unit_getInstance();
                  } else {
                  }
                }
              }
               while (inductionVariable <= last);
          }
          tmp$ret$1 = target_1;
          break $l$block_0;
        }
        var tmp1_fastMap_0 = tmp$ret$1;
        {
        }
        var target_1_0 = ArrayList_init_$Create$_0(tmp1_fastMap_0._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable_0 = 0;
          var last_0 = tmp1_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_2_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_3_4_0 = tmp1_fastMap_0.get_fkrdnv_k$(index_2_3_0);
              {
                {
                  var tmp$ret$2;
                  $l$block_1: {
                    tmp$ret$2 = to(item_3_4_0._get_weight__3515779987_cvworx_k$(), new FontStyle(item_3_4_0._get_style__3615460416_ope3tj_k$()));
                    break $l$block_1;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$2;
                  target_1_0.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable_0 <= last_0);
        }
        tmp$ret$3 = target_1_0;
        break $l$block_2;
      }
      var tmp2_fastDistinctBy_0 = tmp$ret$3;
      {
      }
      var set_1 = HashSet_init_$Create$(tmp2_fastDistinctBy_0._get_size__809037418_ddoh9m_k$());
      var target_2 = ArrayList_init_$Create$_0(tmp2_fastDistinctBy_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_1 = 0;
        var last_1 = tmp2_fastDistinctBy_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_2_4 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_3_5 = tmp2_fastDistinctBy_0.get_fkrdnv_k$(index_2_4);
            {
              var tmp$ret$4;
              $l$block_3: {
                tmp$ret$4 = item_3_5;
                break $l$block_3;
              }
              var key_5_6 = tmp$ret$4;
              if (set_1.add_1j60pz_k$(key_5_6)) {
                target_2.add_1j60pz_k$(item_3_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_1 <= last_1);
      }
      tmp$ret$5 = target_2;
      break $l$block_4;
    }
    var asyncStyles = tmp$ret$5;
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = ArrayList_init_$Create$();
      break $l$block_5;
    }
    var asyncLoads = tmp$ret$6;
    {
      {
      }
      var inductionVariable_2 = 0;
      var last_2 = asyncStyles._get_size__809037418_ddoh9m_k$() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_3 = asyncStyles.get_fkrdnv_k$(index_2);
          {
            var fontWeight_5 = item_3.component1_7eebsc_k$();
            var fontStyle_6 = item_3.component2_7eebsb_k$().value_1;
            var matched_7 = Companion_getInstance_15().fontMatcher_1.matchFont_7ocsoc_k$(allFonts, fontWeight_5, fontStyle_6);
            var typeRequest_8 = new TypefaceRequest(family, fontWeight_5, fontStyle_6, Companion_getInstance_18()._get_All__855894832_54xjwk_k$(), resourceLoader._get_cacheKey__927973358_fchotq_k$());
            var tmp0_container_9 = firstImmediatelyAvailable(matched_7, typeRequest_8, this.asyncTypefaceCache_1, resourceLoader, FontListFontFamilyTypefaceAdapter$preload$lambda());
            var asyncFontsToLoad_11 = tmp0_container_9.component1_7eebsc_k$();
            if (!(asyncFontsToLoad_11 == null)) {
              asyncLoads.add_1j60pz_k$(first_0(asyncFontsToLoad_11));
              Unit_getInstance();
            }
          }
        }
         while (inductionVariable_2 <= last_2);
    }
    return coroutineScope(FontListFontFamilyTypefaceAdapter$preload$slambda_0(asyncLoads, this, resourceLoader, null), $cont);
  };
  FontListFontFamilyTypefaceAdapter.prototype.resolve_wbzvw9_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest._get_fontFamily__3097773656_jss0iw_k$();
    if (!(tmp instanceof FontListFontFamily))
      return null;
    else {
    }
    var matched = Companion_getInstance_15().fontMatcher_1.matchFont_7ocsoc_k$(typefaceRequest._get_fontFamily__3097773656_jss0iw_k$()._get_fonts__3238344269_hh33jn_k$(), typefaceRequest._get_fontWeight__1116225988_igklhg_k$(), typefaceRequest._get_fontStyle__2152582127_690388_k$());
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.asyncTypefaceCache_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.component1_7eebsc_k$();
    var synthesizedTypeface = tmp0_container.component2_7eebsb_k$();
    if (asyncFontsToLoad == null) {
      return Immutable_init_$Create$(synthesizedTypeface, false, 2, null);
    }
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.asyncTypefaceCache_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.asyncLoadScope_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp_0, null, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null), 1, null);
    Unit_getInstance();
    return new Async(asyncLoader);
  };
  FontListFontFamilyTypefaceAdapter.$metadata$ = {
    simpleName: 'FontListFontFamilyTypefaceAdapter',
    kind: 'class',
    interfaces: [FontFamilyTypefaceAdapter]
  };
  function _get_fontList__4219060190($this) {
    unreachableDeclarationLog();
    return $this.fontList_1;
  }
  function _get_typefaceRequest__2196589849($this) {
    unreachableDeclarationLog();
    return $this.typefaceRequest_1;
  }
  function _get_asyncTypefaceCache__1817956700_0($this) {
    unreachableDeclarationLog();
    return $this.asyncTypefaceCache_1;
  }
  function _get_onCompletion__621515152($this) {
    unreachableDeclarationLog();
    return $this.onCompletion_1;
  }
  function _get_platformFontLoader__856683542($this) {
    unreachableDeclarationLog();
    return $this.platformFontLoader_1;
  }
  function _set_value__1325260276($this, _set____804775014) {
    var tmp0_setValue_0 = value$factory();
    return $this.value$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item_3, resultContinuation) {
    this.this$0__1 = this$0;
    this.$item_3__1 = $item_3;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$load$slambda.prototype.invoke_p0bf06_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader$load$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_p0bf06_k$($cont);
  };
  AsyncFontListLoader$load$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.this$0__1.loadWithTimeoutOrNull_1il4qe_k$(this.$item_3__1, this);
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
  AsyncFontListLoader$load$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new AsyncFontListLoader$load$slambda(this.this$0__1, this.$item_3__1, completion);
    return i;
  };
  AsyncFontListLoader$load$slambda.$metadata$ = {
    simpleName: 'AsyncFontListLoader$load$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $item_3, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item_3, resultContinuation);
    var l = function ($cont) {
      return i.invoke_p0bf06_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.this$0__1 = this$0;
    this.$this_loadWithTimeoutOrNull_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.invoke_cvgqj3_k$ = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.create_b6qu53_k$($this$withTimeoutOrNull, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_cvgqj3_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.this$0__1.platformFontLoader_1.awaitLoad_kuymx_k$(this.$this_loadWithTimeoutOrNull_1, this);
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
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.this$0__1, this.$this_loadWithTimeoutOrNull_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  AsyncFontListLoader$loadWithTimeoutOrNull$slambda.$metadata$ = {
    simpleName: 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.invoke_cvgqj3_k$($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__1828080292, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $loadCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            var tmp_0 = this;
            tmp_0.tmp0_fastForEach_02__1 = this._this__1828080292__1.fontList_1;
            this.tmp0_iterator_13__1 = _get_indices__2241594442(this.tmp0_fastForEach_02__1).iterator_jk1svi_k$();
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            if (!this.tmp0_iterator_13__1.hasNext_bitz1p_k$()) {
              this._set_state__1256591060_i39zdo_k$(9);
              continue $sm;
            }

            this.index_24__1 = this.tmp0_iterator_13__1.next_20eer_k$();
            this.item_35__1 = this.tmp0_fastForEach_02__1.get_fkrdnv_k$(this.index_24__1);
            if (this.item_35__1._get_loadingStrategy__881820962_lu88tl_k$() === Companion_getInstance_16()._get_Async__2183081205_vbacas_k$()) {
              this._set_state__1256591060_i39zdo_k$(4);
              suspendResult = this._this__1828080292__1.asyncTypefaceCache_1.runCached_dc5hvi_k$(this.item_35__1, this._this__1828080292__1.platformFontLoader_1, false, AsyncFontListLoader$load$slambda_0(this._this__1828080292__1, this.item_35__1, null), this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(7);
              continue $sm;
            }

            break;
          case 4:
            this.typeface_56__1 = suspendResult;
            if (!(this.typeface_56__1 == null)) {
              _set_value__1325260276(this._this__1828080292__1, synthesizeTypeface(this._this__1828080292__1.typefaceRequest_1._get_fontSynthesis__3907866988_y4jemg_k$(), this.typeface_56__1, this.item_35__1, this._this__1828080292__1.typefaceRequest_1._get_fontWeight__1116225988_igklhg_k$(), this._this__1828080292__1.typefaceRequest_1._get_fontStyle__2152582127_690388_k$()));
              this.tmp$ret$01__1 = Unit_getInstance();
              this._set_exceptionState__118868437_8fc1n_k$(12);
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(5);
              suspendResult = yield_0(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 5:
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 8:
            var shouldCache = _get_isActive__4035225851(this._get_context__1558698818_ps0bpe_k$());
            this._this__1828080292__1.cacheable_1 = false;
            this._this__1828080292__1.onCompletion_1(new Immutable(this._this__1828080292__1._get_value__3683422336_a43j40_k$(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.tmp$ret$20__1 = Unit_getInstance();
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 10:
            var shouldCache_0 = _get_isActive__4035225851(this._get_context__1558698818_ps0bpe_k$());
            this._this__1828080292__1.cacheable_1 = false;
            this._this__1828080292__1.onCompletion_1(new Immutable(this._this__1828080292__1._get_value__3683422336_a43j40_k$(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            var t = this._get_exception__1672948706_ro13he_k$();
            var shouldCache_1 = _get_isActive__4035225851(this._get_context__1558698818_ps0bpe_k$());
            this._this__1828080292__1.cacheable_1 = false;
            this._this__1828080292__1.onCompletion_1(new Immutable(this._this__1828080292__1._get_value__3683422336_a43j40_k$(), shouldCache_1));
            throw t;
          case 12:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 12) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $loadCOROUTINE$2.$metadata$ = {
    simpleName: '$loadCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__1828080292, _this__1828080292_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this._this__1828080292__2 = _this__1828080292_0;
  }
  $loadWithTimeoutOrNullCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_0 = Companion_getInstance_12()._get_MaximumAsyncTimeout__643883468_ancnnw_k$();
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this._this__1828080292__1, this._this__1828080292__2, null), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof CancellationException) {
              var cancel = this._get_exception__1672948706_ro13he_k$();
              var tmp_2 = this;
              var tmp_3;
              if (_get_isActive__4035225851(this._get_context__1558698818_ps0bpe_k$())) {
                tmp_3 = null;
              } else {
                {
                  throw cancel;
                }
              }
              tmp_2.TRY_RESULT0__1 = tmp_3;
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            } else {
              {
                var tmp_4 = this._get_exception__1672948706_ro13he_k$();
                if (tmp_4 instanceof Exception) {
                  var uncaughtFontLoadException = this._get_exception__1672948706_ro13he_k$();
                  var tmp_5 = this;
                  var tmp0_safe_receiver = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance());
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    tmp0_safe_receiver.handleException_w1h9is_k$(this._get_context__1558698818_ps0bpe_k$(), IllegalStateException_init_$Create$_0('Unable to load font ' + this._this__1828080292__2, uncaughtFontLoadException));
                    Unit_getInstance();
                  }
                  Unit_getInstance();
                  tmp_5.TRY_RESULT0__1 = null;
                  this._set_state__1256591060_i39zdo_k$(4);
                  continue $sm;
                } else {
                  {
                    throw this._get_exception__1672948706_ro13he_k$();
                  }
                }
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
  $loadWithTimeoutOrNullCOROUTINE$3.$metadata$ = {
    simpleName: '$loadWithTimeoutOrNullCOROUTINE$3',
    kind: 'class',
    interfaces: []
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.fontList_1 = fontList;
    this.typefaceRequest_1 = typefaceRequest;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.onCompletion_1 = onCompletion;
    this.platformFontLoader_1 = platformFontLoader;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialType, null, 2, null);
    this.cacheable_1 = true;
  }
  AsyncFontListLoader.prototype._get_value__3683422336_a43j40_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = value$factory_0();
      tmp$ret$0 = this.value$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  AsyncFontListLoader.prototype._set_cacheable__1245850985_8pl8kg_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.cacheable_1 = _set____804775014;
  };
  AsyncFontListLoader.prototype._get_cacheable__3017587189_l4iosr_k$ = function () {
    return this.cacheable_1;
  };
  AsyncFontListLoader.prototype.load_ne61sj_k$ = function ($cont) {
    var tmp = new $loadCOROUTINE$2(this, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader.prototype.loadWithTimeoutOrNull_1il4qe_k$ = function (_this__1828080292, $cont) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__1828080292, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AsyncFontListLoader.$metadata$ = {
    simpleName: 'AsyncFontListLoader',
    kind: 'class',
    interfaces: [State]
  };
  function firstImmediatelyAvailable(_this__1828080292, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__1828080292.get_fkrdnv_k$(idx);
        var tmp1_subject = font._get_loadingStrategy__881820962_lu88tl_k$();
        if (tmp1_subject === Companion_getInstance_16()._get_Blocking__63912470_x0c8df_k$()) {
          var tmp$ret$0;
          $l$block_4: {
            var tmp$ret$2;
            $l$block_1: {
              var tmp0_synchronized_0_1 = asyncTypefaceCache.cacheLock_1;
              var tmp$ret$1;
              $l$block_0: {
                var key_2_2 = new Key(font, platformFontLoader._get_cacheKey__927973358_fchotq_k$());
                var tmp0_elvis_lhs_4_4 = asyncTypefaceCache.resultCache_1.get_1mhr4y_k$(key_2_2);
                var priorResult_3_3 = tmp0_elvis_lhs_4_4 == null ? asyncTypefaceCache.permanentCache_1.get_1mhr4y_k$(key_2_2) : tmp0_elvis_lhs_4_4;
                var tmp;
                if (!(priorResult_3_3 == null)) {
                  tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__1251908435(priorResult_3_3.result_1);
                  break $l$block_4;
                }
                tmp$ret$1 = tmp;
                break $l$block_0;
              }
              tmp$ret$2 = tmp$ret$1;
              break $l$block_1;
            }
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                var tmp_0;
                try {
                  tmp_0 = platformFontLoader.loadBlocking_w5fd92_k$(font);
                } catch ($p) {
                  var tmp_1;
                  if ($p instanceof Exception) {
                    throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, $p);
                  } else {
                    {
                      throw $p;
                    }
                  }
                  tmp_0 = tmp_1;
                }
                tmp$ret$3 = tmp_0;
                break $l$block_2;
              }
              var tmp1_also_0_5 = tmp$ret$3;
              {
              }
              {
                asyncTypefaceCache.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also_0_5, false, 8, null);
              }
              tmp$ret$4 = tmp1_also_0_5;
              break $l$block_3;
            }
            tmp$ret$0 = tmp$ret$4;
            break $l$block_4;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest._get_fontSynthesis__3907866988_y4jemg_k$(), result, font, typefaceRequest._get_fontWeight__1116225988_igklhg_k$(), typefaceRequest._get_fontStyle__2152582127_690388_k$()));
        } else if (tmp1_subject === Companion_getInstance_16()._get_OptionalLocal__2433596006_4nd0j1_k$()) {
          var tmp$ret$5;
          $l$block_15: {
            var tmp$ret$7;
            $l$block_7: {
              var tmp0_synchronized_0_1_0 = asyncTypefaceCache.cacheLock_1;
              var tmp$ret$6;
              $l$block_6: {
                var key_2_2_0 = new Key(font, platformFontLoader._get_cacheKey__927973358_fchotq_k$());
                var tmp0_elvis_lhs_4_4_0 = asyncTypefaceCache.resultCache_1.get_1mhr4y_k$(key_2_2_0);
                var priorResult_3_3_0 = tmp0_elvis_lhs_4_4_0 == null ? asyncTypefaceCache.permanentCache_1.get_1mhr4y_k$(key_2_2_0) : tmp0_elvis_lhs_4_4_0;
                var tmp_3;
                if (!(priorResult_3_3_0 == null)) {
                  tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__1251908435(priorResult_3_3_0.result_1);
                  break $l$block_15;
                }
                tmp$ret$6 = tmp_3;
                break $l$block_6;
              }
              tmp$ret$7 = tmp$ret$6;
              break $l$block_7;
            }
            var tmp$ret$14;
            $l$block_14: {
              var tmp$ret$13;
              $l$block_13: {
                var tmp$ret$12;
                $l$block_12: {
                  var tmp$ret$11;
                  $l$block_11: {
                    var tmp_4;
                    try {
                      var tmp$ret$9;
                      $l$block_9: {
                        var tmp0_success_0_1_8 = Companion_getInstance_3();
                        var tmp$ret$8;
                        $l$block_8: {
                          tmp$ret$8 = platformFontLoader.loadBlocking_w5fd92_k$(font);
                          break $l$block_8;
                        }
                        var tmp1_success_0_2_9 = tmp$ret$8;
                        tmp$ret$9 = _Result___init__impl__2241242780(tmp1_success_0_2_9);
                        break $l$block_9;
                      }
                      tmp_4 = tmp$ret$9;
                    } catch ($p) {
                      var tmp_5;
                      if ($p instanceof Error) {
                        var tmp$ret$10;
                        $l$block_10: {
                          var tmp2_failure_0_4_11 = Companion_getInstance_3();
                          tmp$ret$10 = _Result___init__impl__2241242780(createFailure($p));
                          break $l$block_10;
                        }
                        tmp_5 = tmp$ret$10;
                      } else {
                        {
                          throw $p;
                        }
                      }
                      tmp_4 = tmp_5;
                    }
                    tmp$ret$11 = tmp_4;
                    break $l$block_11;
                  }
                  var tmp0_getOrNull_0_7 = tmp$ret$11;
                  var tmp_6;
                  if (_Result___get_isFailure__impl__3103244073(tmp0_getOrNull_0_7)) {
                    tmp_6 = null;
                  } else {
                    var tmp_7 = _Result___get_value__impl__3597185688(tmp0_getOrNull_0_7);
                    tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
                  }
                  tmp$ret$12 = tmp_6;
                  break $l$block_12;
                }
                tmp$ret$13 = tmp$ret$12;
                break $l$block_13;
              }
              var tmp1_also_0_5_0 = tmp$ret$13;
              {
              }
              {
                asyncTypefaceCache.put$default_1dy8l2_k$(font, platformFontLoader, tmp1_also_0_5_0, false, 8, null);
              }
              tmp$ret$14 = tmp1_also_0_5_0;
              break $l$block_14;
            }
            tmp$ret$5 = tmp$ret$14;
            break $l$block_15;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest._get_fontSynthesis__3907866988_y4jemg_k$(), result_0, font, typefaceRequest._get_fontWeight__1116225988_igklhg_k$(), typefaceRequest._get_fontStyle__2152582127_690388_k$()));
          }
        } else if (tmp1_subject === Companion_getInstance_16()._get_Async__2183081205_vbacas_k$()) {
          var cacheResult = asyncTypefaceCache.get_q1bm7w_k$(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.add_1j60pz_k$(font);
              Unit_getInstance();
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__1742587786(cacheResult.result_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__1251908435(cacheResult.result_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest._get_fontSynthesis__3907866988_y4jemg_k$(), _AsyncTypefaceResult___get_result__impl__1251908435(cacheResult.result_1), font, typefaceRequest._get_fontWeight__1116225988_igklhg_k$(), typefaceRequest._get_fontStyle__2152582127_690388_k$()));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return _set_value__1325260276(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver._get_value__3683422336_a43j40_k$();
    }, function (receiver, value) {
      return _set_value__1325260276(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__1113669255(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__3299300749(this_0) {
    return this_0;
  }
  function FontLoadingStrategy__toString_impl_3332501665(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_16().Blocking_1 ? 'Blocking' : tmp0_subject === Companion_getInstance_16().OptionalLocal_1 ? 'Optional' : tmp0_subject === Companion_getInstance_16().Async_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__3299300749(this_0) + ')';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Blocking_1 = _FontLoadingStrategy___init__impl__1113669255(0);
    this.OptionalLocal_1 = _FontLoadingStrategy___init__impl__1113669255(1);
    this.Async_1 = _FontLoadingStrategy___init__impl__1113669255(2);
  }
  Companion_7.prototype._get_Blocking__63912470_x0c8df_k$ = function () {
    return this.Blocking_1;
  };
  Companion_7.prototype._get_OptionalLocal__2433596006_4nd0j1_k$ = function () {
    return this.OptionalLocal_1;
  };
  Companion_7.prototype._get_Async__2183081205_vbacas_k$ = function () {
    return this.Async_1;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_16() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontLoadingStrategy__hashCode_impl_2017086546(this_0) {
    return this_0;
  }
  function FontLoadingStrategy__equals_impl_356126510(this_0, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FontLoadingStrategy ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  FontLoadingStrategy.prototype.toString = function () {
    return FontLoadingStrategy__toString_impl_3332501665(this.value_1);
  };
  FontLoadingStrategy.prototype.hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_2017086546(this.value_1);
  };
  FontLoadingStrategy.prototype.equals = function (other) {
    return FontLoadingStrategy__equals_impl_356126510(this.value_1, other);
  };
  FontLoadingStrategy.$metadata$ = {
    simpleName: 'FontLoadingStrategy',
    kind: 'class',
    interfaces: []
  };
  function FontMatcher() {
  }
  FontMatcher.prototype.matchFont_7ocsoc_k$ = function (fontList, fontWeight, fontStyle) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var target_1 = ArrayList_init_$Create$_0(fontList._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = fontList._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = fontList.get_fkrdnv_k$(index_2_3);
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = item_3_4._get_weight__3515779987_cvworx_k$().equals(fontWeight) ? item_3_4._get_style__3615460416_ope3tj_k$() === fontStyle : false;
                  break $l$block;
                }
                if (tmp$ret$0) {
                  target_1.add_1j60pz_k$(item_3_4);
                  Unit_getInstance();
                } else {
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$1 = target_1;
        break $l$block_0;
      }
      var tmp0_let_0 = tmp$ret$1;
      {
      }
      var tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = !tmp0_let_0.isEmpty_y1axqb_k$();
        break $l$block_1;
      }
      if (tmp$ret$2) {
        return tmp0_let_0;
      } else {
      }
      tmp$ret$3 = tmp;
      break $l$block_2;
    }
    var tmp$ret$7;
    $l$block_6: {
      var tmp$ret$5;
      $l$block_4: {
        {
        }
        var target_1_0 = ArrayList_init_$Create$_0(fontList._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable_0 = 0;
          var last_0 = fontList._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_2_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_3_4_0 = fontList.get_fkrdnv_k$(index_2_3_0);
              {
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = item_3_4_0._get_style__3615460416_ope3tj_k$() === fontStyle;
                  break $l$block_3;
                }
                if (tmp$ret$4) {
                  target_1_0.add_1j60pz_k$(item_3_4_0);
                  Unit_getInstance();
                } else {
                }
              }
            }
             while (inductionVariable_0 <= last_0);
        }
        tmp$ret$5 = target_1_0;
        break $l$block_4;
      }
      var tmp1_ifEmpty_0 = tmp$ret$5;
      var tmp_0;
      if (tmp1_ifEmpty_0.isEmpty_y1axqb_k$()) {
        var tmp$ret$6;
        $l$block_5: {
          tmp$ret$6 = fontList;
          break $l$block_5;
        }
        tmp_0 = tmp$ret$6;
      } else {
        tmp_0 = tmp1_ifEmpty_0;
      }
      tmp$ret$7 = tmp_0;
      break $l$block_6;
    }
    var fontsToSearch = tmp$ret$7;
    var tmp_1;
    if (fontWeight.compareTo_ag9b1f_k$(Companion_getInstance_19()._get_W400__781527150_cxau7i_k$()) < 0) {
      var tmp$ret$10;
      $l$block_9: {
        var bestWeightAbove_1 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_1 = 0;
        var last_1 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          $l$loop_1: do {
            var index_4 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var font_5 = fontsToSearch.get_fkrdnv_k$(index_4);
            var possibleWeight_6 = font_5._get_weight__3515779987_cvworx_k$();
            if (!(null == null) ? possibleWeight_6.compareTo_ag9b1f_k$(null) < 0 : false) {
              continue $l$loop_1;
            }
            if (!(null == null) ? possibleWeight_6.compareTo_ag9b1f_k$(null) > 0 : false) {
              continue $l$loop_1;
            }
            if (possibleWeight_6.compareTo_ag9b1f_k$(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_6.compareTo_ag9b1f_k$(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_6;
              }
            } else if (possibleWeight_6.compareTo_ag9b1f_k$(fontWeight) > 0) {
              if (bestWeightAbove_1 == null ? true : possibleWeight_6.compareTo_ag9b1f_k$(bestWeightAbove_1) < 0) {
                bestWeightAbove_1 = possibleWeight_6;
              }
            } else {
              bestWeightAbove_1 = possibleWeight_6;
              bestWeightBelow_2 = possibleWeight_6;
              break $l$loop_1;
            }
          }
           while (inductionVariable_1 <= last_1);
        var tmp_2;
        {
          var tmp1_elvis_lhs_8 = bestWeightBelow_2;
          tmp_2 = tmp1_elvis_lhs_8 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_8;
        }
        var bestWeight_7 = tmp_2;
        var tmp$ret$9;
        $l$block_8: {
          {
          }
          var target_1_1 = ArrayList_init_$Create$_0(fontsToSearch._get_size__809037418_ddoh9m_k$());
          {
            {
            }
            var inductionVariable_2 = 0;
            var last_2 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable_2 <= last_2)
              do {
                var index_2_3_1 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var item_3_4_1 = fontsToSearch.get_fkrdnv_k$(index_2_3_1);
                {
                  var tmp$ret$8;
                  $l$block_7: {
                    tmp$ret$8 = item_3_4_1._get_weight__3515779987_cvworx_k$().equals(bestWeight_7);
                    break $l$block_7;
                  }
                  if (tmp$ret$8) {
                    target_1_1.add_1j60pz_k$(item_3_4_1);
                    Unit_getInstance();
                  } else {
                  }
                }
              }
               while (inductionVariable_2 <= last_2);
          }
          tmp$ret$9 = target_1_1;
          break $l$block_8;
        }
        tmp$ret$10 = tmp$ret$9;
        break $l$block_9;
      }
      tmp_1 = tmp$ret$10;
    } else if (fontWeight.compareTo_ag9b1f_k$(Companion_getInstance_19()._get_W500__781556941_cxbh71_k$()) > 0) {
      var tmp$ret$13;
      $l$block_12: {
        var bestWeightAbove_1_0 = null;
        var bestWeightBelow_2_0 = null;
        var inductionVariable_3 = 0;
        var last_3 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_3 <= last_3)
          $l$loop_4: do {
            var index_4_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var font_5_0 = fontsToSearch.get_fkrdnv_k$(index_4_0);
            var possibleWeight_6_0 = font_5_0._get_weight__3515779987_cvworx_k$();
            if (!(null == null) ? possibleWeight_6_0.compareTo_ag9b1f_k$(null) < 0 : false) {
              continue $l$loop_4;
            }
            if (!(null == null) ? possibleWeight_6_0.compareTo_ag9b1f_k$(null) > 0 : false) {
              continue $l$loop_4;
            }
            if (possibleWeight_6_0.compareTo_ag9b1f_k$(fontWeight) < 0) {
              if (bestWeightBelow_2_0 == null ? true : possibleWeight_6_0.compareTo_ag9b1f_k$(bestWeightBelow_2_0) > 0) {
                bestWeightBelow_2_0 = possibleWeight_6_0;
              }
            } else if (possibleWeight_6_0.compareTo_ag9b1f_k$(fontWeight) > 0) {
              if (bestWeightAbove_1_0 == null ? true : possibleWeight_6_0.compareTo_ag9b1f_k$(bestWeightAbove_1_0) < 0) {
                bestWeightAbove_1_0 = possibleWeight_6_0;
              }
            } else {
              bestWeightAbove_1_0 = possibleWeight_6_0;
              bestWeightBelow_2_0 = possibleWeight_6_0;
              break $l$loop_4;
            }
          }
           while (inductionVariable_3 <= last_3);
        var tmp_3;
        if (false) {
          var tmp1_elvis_lhs_8_0 = bestWeightBelow_2_0;
          tmp_3 = tmp1_elvis_lhs_8_0 == null ? bestWeightAbove_1_0 : tmp1_elvis_lhs_8_0;
        } else {
          var tmp2_elvis_lhs_9 = bestWeightAbove_1_0;
          tmp_3 = tmp2_elvis_lhs_9 == null ? bestWeightBelow_2_0 : tmp2_elvis_lhs_9;
        }
        var bestWeight_7_0 = tmp_3;
        var tmp$ret$12;
        $l$block_11: {
          {
          }
          var target_1_2 = ArrayList_init_$Create$_0(fontsToSearch._get_size__809037418_ddoh9m_k$());
          {
            {
            }
            var inductionVariable_4 = 0;
            var last_4 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (inductionVariable_4 <= last_4)
              do {
                var index_2_3_2 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                var item_3_4_2 = fontsToSearch.get_fkrdnv_k$(index_2_3_2);
                {
                  var tmp$ret$11;
                  $l$block_10: {
                    tmp$ret$11 = item_3_4_2._get_weight__3515779987_cvworx_k$().equals(bestWeight_7_0);
                    break $l$block_10;
                  }
                  if (tmp$ret$11) {
                    target_1_2.add_1j60pz_k$(item_3_4_2);
                    Unit_getInstance();
                  } else {
                  }
                }
              }
               while (inductionVariable_4 <= last_4);
          }
          tmp$ret$12 = target_1_2;
          break $l$block_11;
        }
        tmp$ret$13 = tmp$ret$12;
        break $l$block_12;
      }
      tmp_1 = tmp$ret$13;
    } else {
      var tmp$ret$21;
      $l$block_20: {
        var tmp$ret$16;
        $l$block_15: {
          var tmp2_filterByClosestWeight_0 = Companion_getInstance_19()._get_W500__781556941_cxbh71_k$();
          var bestWeightAbove_1_1 = null;
          var bestWeightBelow_2_1 = null;
          var inductionVariable_5 = 0;
          var last_5 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable_5 <= last_5)
            $l$loop_7: do {
              var index_4_1 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              var font_5_1 = fontsToSearch.get_fkrdnv_k$(index_4_1);
              var possibleWeight_6_1 = font_5_1._get_weight__3515779987_cvworx_k$();
              if (!(null == null) ? possibleWeight_6_1.compareTo_ag9b1f_k$(null) < 0 : false) {
                continue $l$loop_7;
              }
              if (!(tmp2_filterByClosestWeight_0 == null) ? possibleWeight_6_1.compareTo_ag9b1f_k$(tmp2_filterByClosestWeight_0) > 0 : false) {
                continue $l$loop_7;
              }
              if (possibleWeight_6_1.compareTo_ag9b1f_k$(fontWeight) < 0) {
                if (bestWeightBelow_2_1 == null ? true : possibleWeight_6_1.compareTo_ag9b1f_k$(bestWeightBelow_2_1) > 0) {
                  bestWeightBelow_2_1 = possibleWeight_6_1;
                }
              } else if (possibleWeight_6_1.compareTo_ag9b1f_k$(fontWeight) > 0) {
                if (bestWeightAbove_1_1 == null ? true : possibleWeight_6_1.compareTo_ag9b1f_k$(bestWeightAbove_1_1) < 0) {
                  bestWeightAbove_1_1 = possibleWeight_6_1;
                }
              } else {
                bestWeightAbove_1_1 = possibleWeight_6_1;
                bestWeightBelow_2_1 = possibleWeight_6_1;
                break $l$loop_7;
              }
            }
             while (inductionVariable_5 <= last_5);
          var tmp_4;
          if (false) {
            var tmp1_elvis_lhs_8_1 = bestWeightBelow_2_1;
            tmp_4 = tmp1_elvis_lhs_8_1 == null ? bestWeightAbove_1_1 : tmp1_elvis_lhs_8_1;
          } else {
            var tmp2_elvis_lhs_9_0 = bestWeightAbove_1_1;
            tmp_4 = tmp2_elvis_lhs_9_0 == null ? bestWeightBelow_2_1 : tmp2_elvis_lhs_9_0;
          }
          var bestWeight_7_1 = tmp_4;
          var tmp$ret$15;
          $l$block_14: {
            {
            }
            var target_1_3 = ArrayList_init_$Create$_0(fontsToSearch._get_size__809037418_ddoh9m_k$());
            {
              {
              }
              var inductionVariable_6 = 0;
              var last_6 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable_6 <= last_6)
                do {
                  var index_2_3_3 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  var item_3_4_3 = fontsToSearch.get_fkrdnv_k$(index_2_3_3);
                  {
                    var tmp$ret$14;
                    $l$block_13: {
                      tmp$ret$14 = item_3_4_3._get_weight__3515779987_cvworx_k$().equals(bestWeight_7_1);
                      break $l$block_13;
                    }
                    if (tmp$ret$14) {
                      target_1_3.add_1j60pz_k$(item_3_4_3);
                      Unit_getInstance();
                    } else {
                    }
                  }
                }
                 while (inductionVariable_6 <= last_6);
            }
            tmp$ret$15 = target_1_3;
            break $l$block_14;
          }
          tmp$ret$16 = tmp$ret$15;
          break $l$block_15;
        }
        var tmp3_ifEmpty_0 = tmp$ret$16;
        var tmp_5;
        if (tmp3_ifEmpty_0.isEmpty_y1axqb_k$()) {
          var tmp$ret$20;
          $l$block_19: {
            var tmp$ret$19;
            $l$block_18: {
              var tmp0_filterByClosestWeight_0_2 = Companion_getInstance_19()._get_W500__781556941_cxbh71_k$();
              var bestWeightAbove_1_3 = null;
              var bestWeightBelow_2_4 = null;
              var inductionVariable_7 = 0;
              var last_7 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
              if (inductionVariable_7 <= last_7)
                $l$loop_10: do {
                  var index_4_6 = inductionVariable_7;
                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                  var font_5_7 = fontsToSearch.get_fkrdnv_k$(index_4_6);
                  var possibleWeight_6_8 = font_5_7._get_weight__3515779987_cvworx_k$();
                  if (!(tmp0_filterByClosestWeight_0_2 == null) ? possibleWeight_6_8.compareTo_ag9b1f_k$(tmp0_filterByClosestWeight_0_2) < 0 : false) {
                    continue $l$loop_10;
                  }
                  if (!(null == null) ? possibleWeight_6_8.compareTo_ag9b1f_k$(null) > 0 : false) {
                    continue $l$loop_10;
                  }
                  if (possibleWeight_6_8.compareTo_ag9b1f_k$(fontWeight) < 0) {
                    if (bestWeightBelow_2_4 == null ? true : possibleWeight_6_8.compareTo_ag9b1f_k$(bestWeightBelow_2_4) > 0) {
                      bestWeightBelow_2_4 = possibleWeight_6_8;
                    }
                  } else if (possibleWeight_6_8.compareTo_ag9b1f_k$(fontWeight) > 0) {
                    if (bestWeightAbove_1_3 == null ? true : possibleWeight_6_8.compareTo_ag9b1f_k$(bestWeightAbove_1_3) < 0) {
                      bestWeightAbove_1_3 = possibleWeight_6_8;
                    }
                  } else {
                    bestWeightAbove_1_3 = possibleWeight_6_8;
                    bestWeightBelow_2_4 = possibleWeight_6_8;
                    break $l$loop_10;
                  }
                }
                 while (inductionVariable_7 <= last_7);
              var tmp_6;
              if (false) {
                var tmp1_elvis_lhs_8_10 = bestWeightBelow_2_4;
                tmp_6 = tmp1_elvis_lhs_8_10 == null ? bestWeightAbove_1_3 : tmp1_elvis_lhs_8_10;
              } else {
                var tmp2_elvis_lhs_9_11 = bestWeightAbove_1_3;
                tmp_6 = tmp2_elvis_lhs_9_11 == null ? bestWeightBelow_2_4 : tmp2_elvis_lhs_9_11;
              }
              var bestWeight_7_9 = tmp_6;
              var tmp$ret$18;
              $l$block_17: {
                {
                }
                var target_1_12 = ArrayList_init_$Create$_0(fontsToSearch._get_size__809037418_ddoh9m_k$());
                {
                  {
                  }
                  var inductionVariable_8 = 0;
                  var last_8 = fontsToSearch._get_size__809037418_ddoh9m_k$() - 1 | 0;
                  if (inductionVariable_8 <= last_8)
                    do {
                      var index_2_3_14 = inductionVariable_8;
                      inductionVariable_8 = inductionVariable_8 + 1 | 0;
                      var item_3_4_15 = fontsToSearch.get_fkrdnv_k$(index_2_3_14);
                      {
                        var tmp$ret$17;
                        $l$block_16: {
                          tmp$ret$17 = item_3_4_15._get_weight__3515779987_cvworx_k$().equals(bestWeight_7_9);
                          break $l$block_16;
                        }
                        if (tmp$ret$17) {
                          target_1_12.add_1j60pz_k$(item_3_4_15);
                          Unit_getInstance();
                        } else {
                        }
                      }
                    }
                     while (inductionVariable_8 <= last_8);
                }
                tmp$ret$18 = target_1_12;
                break $l$block_17;
              }
              tmp$ret$19 = tmp$ret$18;
              break $l$block_18;
            }
            tmp$ret$20 = tmp$ret$19;
            break $l$block_19;
          }
          tmp_5 = tmp$ret$20;
        } else {
          tmp_5 = tmp3_ifEmpty_0;
        }
        tmp$ret$21 = tmp_5;
        break $l$block_20;
      }
      tmp_1 = tmp$ret$21;
    }
    var result = tmp_1;
    return result;
  };
  FontMatcher.prototype.filterByClosestWeight_p3e8ge_k$ = function (_this__1828080292, fontWeight, preferBelow, minSearchRange, maxSearchRange) {
    unreachableDeclarationLog();
    var bestWeightAbove = null;
    var bestWeightBelow = null;
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__1828080292.get_fkrdnv_k$(index);
        var possibleWeight = font._get_weight__3515779987_cvworx_k$();
        if (!(minSearchRange == null) ? possibleWeight.compareTo_ag9b1f_k$(minSearchRange) < 0 : false) {
          continue $l$loop_1;
        }
        if (!(maxSearchRange == null) ? possibleWeight.compareTo_ag9b1f_k$(maxSearchRange) > 0 : false) {
          continue $l$loop_1;
        }
        if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) < 0) {
          if (bestWeightBelow == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightBelow) > 0) {
            bestWeightBelow = possibleWeight;
          }
        } else if (possibleWeight.compareTo_ag9b1f_k$(fontWeight) > 0) {
          if (bestWeightAbove == null ? true : possibleWeight.compareTo_ag9b1f_k$(bestWeightAbove) < 0) {
            bestWeightAbove = possibleWeight;
          }
        } else {
          bestWeightAbove = possibleWeight;
          bestWeightBelow = possibleWeight;
          break $l$loop_1;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (preferBelow) {
      var tmp1_elvis_lhs = bestWeightBelow;
      tmp = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
    } else {
      var tmp2_elvis_lhs = bestWeightAbove;
      tmp = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
    }
    var bestWeight = tmp;
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var target_1 = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4 = _this__1828080292.get_fkrdnv_k$(index_2_3);
            {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = item_3_4._get_weight__3515779987_cvworx_k$().equals(bestWeight);
                break $l$block;
              }
              if (tmp$ret$0) {
                target_1.add_1j60pz_k$(item_3_4);
                Unit_getInstance();
              } else {
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$1 = target_1;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  FontMatcher.prototype.matchFont_g2rquk_k$ = function (fontFamily, fontWeight, fontStyle) {
    unreachableDeclarationLog();
    if (!(fontFamily instanceof FontListFontFamily))
      throw IllegalArgumentException_init_$Create$('Only FontFamily instances that presents a list of Fonts can be used');
    else {
    }
    return this.matchFont_swq5c7_k$(fontFamily, fontWeight, fontStyle);
  };
  FontMatcher.prototype.matchFont_swq5c7_k$ = function (fontFamily, fontWeight, fontStyle) {
    unreachableDeclarationLog();
    return this.matchFont_7ocsoc_k$(fontFamily._get_fonts__3238344269_hh33jn_k$(), fontWeight, fontStyle);
  };
  FontMatcher.$metadata$ = {
    simpleName: 'FontMatcher',
    kind: 'class',
    interfaces: []
  };
  function _FontStyle___init__impl__3124863529(value) {
    return value;
  }
  function _FontStyle___get_value__impl__1023272747(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function FontStyle__toString_impl_1783162431(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_17().Normal_1 ? 'Normal' : tmp0_subject === Companion_getInstance_17().Italic_1 ? 'Italic' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Normal_1 = _FontStyle___init__impl__3124863529(0);
    this.Italic_1 = _FontStyle___init__impl__3124863529(1);
  }
  Companion_8.prototype._get_Normal__1782642404_ybzd8t_k$ = function () {
    return this.Normal_1;
  };
  Companion_8.prototype._get_Italic__1767514811_bdcgyk_k$ = function () {
    return this.Italic_1;
  };
  Companion_8.prototype.values_dmh61q_k$ = function () {
    unreachableDeclarationLog();
    return listOf([new FontStyle(this.Normal_1), new FontStyle(this.Italic_1)]);
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_17() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_467747312(this_0) {
    return this_0;
  }
  function FontStyle__equals_impl_180212812(this_0, other) {
    if (!(other instanceof FontStyle))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FontStyle ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  FontStyle.prototype.toString = function () {
    return FontStyle__toString_impl_1783162431(this.value_1);
  };
  FontStyle.prototype.hashCode = function () {
    return FontStyle__hashCode_impl_467747312(this.value_1);
  };
  FontStyle.prototype.equals = function (other) {
    return FontStyle__equals_impl_180212812(this.value_1, other);
  };
  FontStyle.$metadata$ = {
    simpleName: 'FontStyle',
    kind: 'class',
    interfaces: []
  };
  function _FontSynthesis___init__impl__1396190284(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__2252815080(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function FontSynthesis__toString_impl_1018961532(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_18().None_1 ? 'None' : tmp0_subject === Companion_getInstance_18().All_1 ? 'All' : tmp0_subject === Companion_getInstance_18().Weight_1 ? 'Weight' : tmp0_subject === Companion_getInstance_18().Style_1 ? 'Style' : 'Invalid';
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.None_1 = _FontSynthesis___init__impl__1396190284(0);
    this.All_1 = _FontSynthesis___init__impl__1396190284(1);
    this.Weight_1 = _FontSynthesis___init__impl__1396190284(2);
    this.Style_1 = _FontSynthesis___init__impl__1396190284(3);
  }
  Companion_9.prototype._get_None__775034355_dxz6td_k$ = function () {
    return this.None_1;
  };
  Companion_9.prototype._get_All__855894832_54xjwk_k$ = function () {
    return this.All_1;
  };
  Companion_9.prototype._get_Weight__885465971_fiuvy7_k$ = function () {
    unreachableDeclarationLog();
    return this.Weight_1;
  };
  Companion_9.prototype._get_Style__2699327584_dllz2s_k$ = function () {
    unreachableDeclarationLog();
    return this.Style_1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_18() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function _FontSynthesis___get_isWeightOn__impl__386235268(this_0) {
    unreachableDeclarationLog();
    return this_0 === Companion_getInstance_18().All_1 ? true : this_0 === Companion_getInstance_18().Weight_1;
  }
  function _FontSynthesis___get_isStyleOn__impl__2395538131(this_0) {
    unreachableDeclarationLog();
    return this_0 === Companion_getInstance_18().All_1 ? true : this_0 === Companion_getInstance_18().Style_1;
  }
  function FontSynthesis__hashCode_impl_3998513709(this_0) {
    return this_0;
  }
  function FontSynthesis__equals_impl_2150365129(this_0, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FontSynthesis ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  FontSynthesis.prototype.toString = function () {
    return FontSynthesis__toString_impl_1018961532(this.value_1);
  };
  FontSynthesis.prototype.hashCode = function () {
    return FontSynthesis__hashCode_impl_3998513709(this.value_1);
  };
  FontSynthesis.prototype.equals = function (other) {
    return FontSynthesis__equals_impl_2150365129(this.value_1, other);
  };
  FontSynthesis.$metadata$ = {
    simpleName: 'FontSynthesis',
    kind: 'class',
    interfaces: []
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.W100__1 = new FontWeight(100);
    this.W200__1 = new FontWeight(200);
    this.W300__1 = new FontWeight(300);
    this.W400__1 = new FontWeight(400);
    this.W500__1 = new FontWeight(500);
    this.W600__1 = new FontWeight(600);
    this.W700__1 = new FontWeight(700);
    this.W800__1 = new FontWeight(800);
    this.W900__1 = new FontWeight(900);
    this.Thin_1 = this.W100__1;
    this.ExtraLight_1 = this.W200__1;
    this.Light_1 = this.W300__1;
    this.Normal_1 = this.W400__1;
    this.Medium_1 = this.W500__1;
    this.SemiBold_1 = this.W600__1;
    this.Bold_1 = this.W700__1;
    this.ExtraBold_1 = this.W800__1;
    this.Black_1 = this.W900__1;
    this.values_1 = listOf([this.W100__1, this.W200__1, this.W300__1, this.W400__1, this.W500__1, this.W600__1, this.W700__1, this.W800__1, this.W900__1]);
  }
  Companion_10.prototype._get_W100__781437777_cx8x8x_k$ = function () {
    unreachableDeclarationLog();
    return this.W100__1;
  };
  Companion_10.prototype._get_W200__781467568_cx9k8g_k$ = function () {
    unreachableDeclarationLog();
    return this.W200__1;
  };
  Companion_10.prototype._get_W300__781497359_cxa77z_k$ = function () {
    unreachableDeclarationLog();
    return this.W300__1;
  };
  Companion_10.prototype._get_W400__781527150_cxau7i_k$ = function () {
    return this.W400__1;
  };
  Companion_10.prototype._get_W500__781556941_cxbh71_k$ = function () {
    return this.W500__1;
  };
  Companion_10.prototype._get_W600__781586732_cxc46k_k$ = function () {
    unreachableDeclarationLog();
    return this.W600__1;
  };
  Companion_10.prototype._get_W700__781616523_cxcr63_k$ = function () {
    unreachableDeclarationLog();
    return this.W700__1;
  };
  Companion_10.prototype._get_W800__781646314_cxde5m_k$ = function () {
    unreachableDeclarationLog();
    return this.W800__1;
  };
  Companion_10.prototype._get_W900__781676105_cxe155_k$ = function () {
    unreachableDeclarationLog();
    return this.W900__1;
  };
  Companion_10.prototype._get_Thin__780362418_cwlvhu_k$ = function () {
    unreachableDeclarationLog();
    return this.Thin_1;
  };
  Companion_10.prototype._get_ExtraLight__936352325_fhha2t_k$ = function () {
    unreachableDeclarationLog();
    return this.ExtraLight_1;
  };
  Companion_10.prototype._get_Light__2488225179_tvor51_k$ = function () {
    unreachableDeclarationLog();
    return this.Light_1;
  };
  Companion_10.prototype._get_Normal__1782642404_thc7ok_k$ = function () {
    return this.Normal_1;
  };
  Companion_10.prototype._get_Medium__595818006_9uqg46_k$ = function () {
    unreachableDeclarationLog();
    return this.Medium_1;
  };
  Companion_10.prototype._get_SemiBold__2741234424_pp1vyg_k$ = function () {
    unreachableDeclarationLog();
    return this.SemiBold_1;
  };
  Companion_10.prototype._get_Bold__763950150_cmu3pi_k$ = function () {
    unreachableDeclarationLog();
    return this.Bold_1;
  };
  Companion_10.prototype._get_ExtraBold__1406626396_n9gvvg_k$ = function () {
    unreachableDeclarationLog();
    return this.ExtraBold_1;
  };
  Companion_10.prototype._get_Black__2204520402_yklj5a_k$ = function () {
    unreachableDeclarationLog();
    return this.Black_1;
  };
  Companion_10.prototype._get_values__2516944425_tel787_k$ = function () {
    unreachableDeclarationLog();
    return this.values_1;
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_19() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_19();
    this.weight_1 = weight;
    {
      var containsArg = this.weight_1;
      var tmp0_require_0 = 1 <= containsArg ? containsArg <= 1000 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.weight_1;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  FontWeight.prototype._get_weight__3515779987_cvworx_k$ = function () {
    return this.weight_1;
  };
  FontWeight.prototype.compareTo_ag9b1f_k$ = function (other) {
    return compareTo(this.weight_1, other.weight_1);
  };
  FontWeight.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_ag9b1f_k$(other instanceof FontWeight ? other : THROW_CCE());
  };
  FontWeight.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    else {
    }
    if (!(this.weight_1 === other.weight_1))
      return false;
    return true;
  };
  FontWeight.prototype.hashCode = function () {
    return this.weight_1;
  };
  FontWeight.prototype.toString = function () {
    return 'FontWeight(weight=' + this.weight_1 + ')';
  };
  FontWeight.$metadata$ = {
    simpleName: 'FontWeight',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Typeface() {
    unreachableDeclarationLog();
  }
  Typeface.$metadata$ = {
    simpleName: 'Typeface',
    kind: 'interface',
    interfaces: []
  };
  function EditCommand() {
    unreachableDeclarationLog();
  }
  EditCommand.$metadata$ = {
    simpleName: 'EditCommand',
    kind: 'interface',
    interfaces: []
  };
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    unreachableDeclarationLog();
    CommitTextCommand.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    unreachableDeclarationLog();
    return CommitTextCommand_init_$Init$(text, newCursorPosition, Object.create(CommitTextCommand.prototype));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    unreachableDeclarationLog();
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
  }
  CommitTextCommand.prototype._get_annotatedString__3040968296_kqljtk_k$ = function () {
    unreachableDeclarationLog();
    return this.annotatedString_1;
  };
  CommitTextCommand.prototype._get_newCursorPosition__1536279250_pensnm_k$ = function () {
    unreachableDeclarationLog();
    return this.newCursorPosition_1;
  };
  CommitTextCommand.prototype._get_text__809840318_de5ose_k$ = function () {
    unreachableDeclarationLog();
    return this.annotatedString_1._get_text__809840318_de5ose_k$();
  };
  CommitTextCommand.prototype.applyTo_mffvzj_k$ = function (buffer) {
    unreachableDeclarationLog();
    if (buffer.hasComposition_fjs7rk_k$()) {
      buffer.replace_z6e3jy_k$(buffer._get_compositionStart__2592045299_s5vj0t_k$(), buffer._get_compositionEnd__158698842_2mhgt6_k$(), this._get_text__809840318_de5ose_k$());
    } else {
      buffer.replace_z6e3jy_k$(buffer._get_selectionStart__1554067093_pp91ud_k$(), buffer._get_selectionEnd__778847100_cvpe9o_k$(), this._get_text__809840318_de5ose_k$());
    }
    var newCursor = buffer._get_cursor__3412317813_eli8p7_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this._get_text__809840318_de5ose_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer._set_cursor__3323737985_ad2wkx_k$(coerceIn(newCursorInBuffer, 0, buffer._get_length__2347802853_w7ahp7_k$()));
  };
  CommitTextCommand.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    else {
    }
    if (!(this._get_text__809840318_de5ose_k$() === other._get_text__809840318_de5ose_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  CommitTextCommand.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = getStringHashCode(this._get_text__809840318_de5ose_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  CommitTextCommand.prototype.toString = function () {
    unreachableDeclarationLog();
    return "CommitTextCommand(text='" + this._get_text__809840318_de5ose_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  CommitTextCommand.$metadata$ = {
    simpleName: 'CommitTextCommand',
    kind: 'class',
    interfaces: [EditCommand]
  };
  function Companion_11() {
    unreachableDeclarationLog();
    Companion_instance_11 = this;
    this.NOWHERE_1 = -1;
  }
  Companion_11.prototype._get_NOWHERE__283976747_4p2luz_k$ = function () {
    unreachableDeclarationLog();
    return this.NOWHERE_1;
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_20() {
    unreachableDeclarationLog();
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function _get_gapBuffer__215659099($this) {
    unreachableDeclarationLog();
    return $this.gapBuffer_1;
  }
  function _set_selectionStart__10339233($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.selectionStart_1 = _set____804775014;
  }
  function _set_selectionEnd__4133661576($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.selectionEnd_1 = _set____804775014;
  }
  function _set_compositionStart__833288959($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.compositionStart_1 = _set____804775014;
  }
  function _set_compositionEnd__2909938278($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.compositionEnd_1 = _set____804775014;
  }
  function EditingBuffer_init_$Init$(text, selection, $this) {
    unreachableDeclarationLog();
    EditingBuffer.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection);
    return $this;
  }
  function EditingBuffer_init_$Create$(text, selection) {
    unreachableDeclarationLog();
    return EditingBuffer_init_$Init$(text, selection, Object.create(EditingBuffer.prototype));
  }
  function EditingBuffer(text, selection) {
    unreachableDeclarationLog();
    Companion_getInstance_20();
    this.gapBuffer_1 = new PartialGapBuffer(text._get_text__809840318_de5ose_k$());
    this.selectionStart_1 = _TextRange___get_min__impl__2430166716(selection);
    this.selectionEnd_1 = _TextRange___get_max__impl__4253134698(selection);
    var tmp = this;
    Companion_getInstance_20();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_20();
    tmp_0.compositionEnd_1 = -1;
    var start = _TextRange___get_min__impl__2430166716(selection);
    var end = _TextRange___get_max__impl__4253134698(selection);
    if (start < 0 ? true : start > text._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text._get_length__2347802853_w7ahp7_k$());
    }
    if (end < 0 ? true : end > text._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text._get_length__2347802853_w7ahp7_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
  }
  EditingBuffer.prototype._get_selectionStart__1554067093_pp91ud_k$ = function () {
    unreachableDeclarationLog();
    return this.selectionStart_1;
  };
  EditingBuffer.prototype._get_selectionEnd__778847100_cvpe9o_k$ = function () {
    unreachableDeclarationLog();
    return this.selectionEnd_1;
  };
  EditingBuffer.prototype._get_compositionStart__2592045299_s5vj0t_k$ = function () {
    unreachableDeclarationLog();
    return this.compositionStart_1;
  };
  EditingBuffer.prototype._get_compositionEnd__158698842_2mhgt6_k$ = function () {
    unreachableDeclarationLog();
    return this.compositionEnd_1;
  };
  EditingBuffer.prototype.hasComposition_fjs7rk_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.compositionStart_1;
    Companion_getInstance_20();
    return !(tmp === -1);
  };
  EditingBuffer.prototype._get_composition__1417340199_2qwfcs_k$ = function () {
    unreachableDeclarationLog();
    var tmp;
    if (this.hasComposition_fjs7rk_k$()) {
      tmp = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  EditingBuffer.prototype._get_selection__1331868229_qhfxtx_k$ = function () {
    unreachableDeclarationLog();
    return TextRange_0(this.selectionStart_1, this.selectionEnd_1);
  };
  EditingBuffer.prototype._set_cursor__3323737985_ad2wkx_k$ = function (cursor) {
    unreachableDeclarationLog();
    return this.setSelection_d0tzo9_k$(cursor, cursor);
  };
  EditingBuffer.prototype._get_cursor__3412317813_eli8p7_k$ = function () {
    unreachableDeclarationLog();
    return this.selectionStart_1 === this.selectionEnd_1 ? this.selectionEnd_1 : -1;
  };
  EditingBuffer.prototype.get_a7b70_k$ = function (index) {
    unreachableDeclarationLog();
    return this.gapBuffer_1.get_a7b70_k$(index);
  };
  EditingBuffer.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    unreachableDeclarationLog();
    return this.gapBuffer_1._get_length__2347802853_w7ahp7_k$();
  };
  EditingBuffer.prototype.replace_kdonvp_k$ = function (start, end, text) {
    unreachableDeclarationLog();
    this.replace_z6e3jy_k$(start, end, text._get_text__809840318_de5ose_k$());
  };
  EditingBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    unreachableDeclarationLog();
    if (start < 0 ? true : start > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.gapBuffer_1.replace_z6e3jy_k$(start, end, text);
    this.selectionStart_1 = start + text.length | 0;
    this.selectionEnd_1 = start + text.length | 0;
    var tmp = this;
    Companion_getInstance_20();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_20();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.delete_pnzhq2_k$ = function (start, end) {
    unreachableDeclarationLog();
    var deleteRange = TextRange_0(start, end);
    this.gapBuffer_1.replace_z6e3jy_k$(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.selectionStart_1, this.selectionEnd_1), deleteRange);
    this.selectionStart_1 = _TextRange___get_min__impl__2430166716(newSelection);
    this.selectionEnd_1 = _TextRange___get_max__impl__4253134698(newSelection);
    if (this.hasComposition_fjs7rk_k$()) {
      var compositionRange = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__3538141143(newComposition)) {
        this.commitComposition_8woa5a_k$();
      } else {
        this.compositionStart_1 = _TextRange___get_min__impl__2430166716(newComposition);
        this.compositionEnd_1 = _TextRange___get_max__impl__4253134698(newComposition);
      }
    }
  };
  EditingBuffer.prototype.setSelection_d0tzo9_k$ = function (start, end) {
    unreachableDeclarationLog();
    if (start < 0 ? true : start > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.selectionStart_1 = start;
    this.selectionEnd_1 = end;
  };
  EditingBuffer.prototype.setComposition_3gafav_k$ = function (start, end) {
    unreachableDeclarationLog();
    if (start < 0 ? true : start > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1._get_length__2347802853_w7ahp7_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1._get_length__2347802853_w7ahp7_k$());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.compositionStart_1 = start;
    this.compositionEnd_1 = end;
  };
  EditingBuffer.prototype.cancelComposition_m3imwv_k$ = function () {
    unreachableDeclarationLog();
    this.replace_z6e3jy_k$(this.compositionStart_1, this.compositionEnd_1, '');
    var tmp = this;
    Companion_getInstance_20();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_20();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.commitComposition_8woa5a_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this;
    Companion_getInstance_20();
    tmp.compositionStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_20();
    tmp_0.compositionEnd_1 = -1;
  };
  EditingBuffer.prototype.toString = function () {
    unreachableDeclarationLog();
    return this.gapBuffer_1.toString();
  };
  EditingBuffer.prototype.toAnnotatedString_yesz4e_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.toString();
    return AnnotatedString_init_$Create$_1(tmp, null, null, 6, null);
  };
  EditingBuffer.$metadata$ = {
    simpleName: 'EditingBuffer',
    kind: 'class',
    interfaces: []
  };
  function updateRangeAfterDelete(target, deleted) {
    unreachableDeclarationLog();
    var targetMin = _TextRange___get_min__impl__2430166716(target);
    var targetMax = _TextRange___get_max__impl__4253134698(target);
    if (TextRange__intersects_impl_1360192329(deleted, target)) {
      if (TextRange__contains_impl_1982141246(deleted, target)) {
        targetMin = _TextRange___get_min__impl__2430166716(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_1982141246(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__3827344458(deleted) | 0;
      } else if (TextRange__contains_impl_1982141246_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__2430166716(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__3827344458(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__2430166716(deleted);
      }
    } else {
      if (targetMax <= _TextRange___get_min__impl__2430166716(deleted)) {
      } else {
        targetMin = targetMin - _TextRange___get_length__impl__3827344458(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__3827344458(deleted) | 0;
      }
    }
    return TextRange_0(targetMin, targetMax);
  }
  function Companion_12() {
    unreachableDeclarationLog();
    Companion_instance_12 = this;
    this.BUF_SIZE_1 = 255;
    this.SURROUNDING_SIZE_1 = 64;
    this.NOWHERE_1 = -1;
  }
  Companion_12.prototype._get_BUF_SIZE__763380478_cmhw5a_k$ = function () {
    unreachableDeclarationLog();
    return this.BUF_SIZE_1;
  };
  Companion_12.prototype._get_SURROUNDING_SIZE__2463047855_uaoe35_k$ = function () {
    unreachableDeclarationLog();
    return this.SURROUNDING_SIZE_1;
  };
  Companion_12.prototype._get_NOWHERE__283976747_4p2luz_k$ = function () {
    unreachableDeclarationLog();
    return this.NOWHERE_1;
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_21() {
    unreachableDeclarationLog();
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function _set_buffer__2424755159($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987($this) {
    unreachableDeclarationLog();
    return $this.buffer_1;
  }
  function _set_bufStart__1786879496($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.bufStart_1 = _set____804775014;
  }
  function _get_bufStart__1012748284($this) {
    unreachableDeclarationLog();
    return $this.bufStart_1;
  }
  function _set_bufEnd__2423780271($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.bufEnd_1 = _set____804775014;
  }
  function _get_bufEnd__2512360099($this) {
    unreachableDeclarationLog();
    return $this.bufEnd_1;
  }
  function PartialGapBuffer(text) {
    unreachableDeclarationLog();
    Companion_getInstance_21();
    this.text_1 = text;
    this.buffer_1 = null;
    var tmp = this;
    Companion_getInstance_21();
    tmp.bufStart_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_21();
    tmp_0.bufEnd_1 = -1;
  }
  PartialGapBuffer.prototype._set_text__595223242_f11phk_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.text_1 = _set____804775014;
  };
  PartialGapBuffer.prototype._get_text__809840318_de5ose_k$ = function () {
    unreachableDeclarationLog();
    return this.text_1;
  };
  PartialGapBuffer.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.text_1.length - (this.bufEnd_1 - this.bufStart_1 | 0) | 0) + buffer.length_iap7oa_k$() | 0;
  };
  PartialGapBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    unreachableDeclarationLog();
    var buffer = this.buffer_1;
    if (buffer == null) {
      var tmp$ret$0;
      $l$block: {
        Companion_getInstance_21();
        var tmp0_maxOf_0 = 255;
        var tmp = text.length;
        Companion_getInstance_21();
        var tmp1_maxOf_0 = tmp + imul(2, 64) | 0;
        tmp$ret$0 = Math.max(tmp0_maxOf_0, tmp1_maxOf_0);
        break $l$block;
      }
      var charArray_0 = charArray(tmp$ret$0);
      var tmp$ret$1;
      $l$block_0: {
        Companion_getInstance_21();
        var tmp2_minOf_0 = 64;
        tmp$ret$1 = Math.min(start, tmp2_minOf_0);
        break $l$block_0;
      }
      var leftCopyCount = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp3_minOf_0 = this.text_1.length - end | 0;
        Companion_getInstance_21();
        var tmp4_minOf_0 = 64;
        tmp$ret$2 = Math.min(tmp3_minOf_0, tmp4_minOf_0);
        break $l$block_1;
      }
      var rightCopyCount = tmp$ret$2;
      toCharArray(this.text_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray(this.text_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray$default(text, charArray_0, leftCopyCount, 0, 0, 12, null);
      this.buffer_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.bufStart_1 = start - leftCopyCount | 0;
      this.bufEnd_1 = end + rightCopyCount | 0;
      return Unit_getInstance();
    }
    var bufferStart = start - this.bufStart_1 | 0;
    var bufferEnd = end - this.bufStart_1 | 0;
    if (bufferStart < 0 ? true : bufferEnd > buffer.length_iap7oa_k$()) {
      this.text_1 = this.toString();
      this.buffer_1 = null;
      var tmp_0 = this;
      Companion_getInstance_21();
      tmp_0.bufStart_1 = -1;
      var tmp_1 = this;
      Companion_getInstance_21();
      tmp_1.bufEnd_1 = -1;
      return this.replace_z6e3jy_k$(start, end, text);
    }
    buffer.replace_z6e3jy_k$(bufferStart, bufferEnd, text);
  };
  PartialGapBuffer.prototype.get_a7b70_k$ = function (index) {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return charSequenceGet(this.text_1, index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    if (index < this.bufStart_1) {
      return charSequenceGet(this.text_1, index);
    }
    var gapBufLength = buffer.length_iap7oa_k$();
    if (index < (gapBufLength + this.bufStart_1 | 0)) {
      return buffer.get_a7b70_k$(index - this.bufStart_1 | 0);
    }
    return charSequenceGet(this.text_1, index - ((gapBufLength - this.bufEnd_1 | 0) + this.bufStart_1 | 0) | 0);
  };
  PartialGapBuffer.prototype.toString = function () {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.append_tbojcw_k$(this.text_1, 0, this.bufStart_1);
    Unit_getInstance();
    b.append_oi41kw_k$(sb);
    sb.append_tbojcw_k$(this.text_1, this.bufEnd_1, this.text_1.length);
    Unit_getInstance();
    return sb.toString();
  };
  PartialGapBuffer.$metadata$ = {
    simpleName: 'PartialGapBuffer',
    kind: 'class',
    interfaces: []
  };
  function _set_capacity__153407581($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.capacity_1 = _set____804775014;
  }
  function _get_capacity__3674243665($this) {
    unreachableDeclarationLog();
    return $this.capacity_1;
  }
  function _set_buffer__2424755159_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_0($this) {
    unreachableDeclarationLog();
    return $this.buffer_1;
  }
  function _set_gapStart__1128175659($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.gapStart_1 = _set____804775014;
  }
  function _get_gapStart__354044447($this) {
    unreachableDeclarationLog();
    return $this.gapStart_1;
  }
  function _set_gapEnd__2002983570($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.gapEnd_1 = _set____804775014;
  }
  function _get_gapEnd__2091563398($this) {
    unreachableDeclarationLog();
    return $this.gapEnd_1;
  }
  function gapLength($this) {
    unreachableDeclarationLog();
    return $this.gapEnd_1 - $this.gapStart_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    unreachableDeclarationLog();
    if (requestSize <= gapLength($this)) {
      return Unit_getInstance();
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.capacity_1, 2);
    while ((newCapacity - $this.capacity_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = $this.buffer_1;
      var tmp1_copyInto_0 = $this.gapStart_1;
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
          tmp$ret$2 = newBuffer;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto_0);
      tmp$ret$4 = newBuffer;
      break $l$block_3;
    }
    Unit_getInstance();
    var tailLength = $this.capacity_1 - $this.gapEnd_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    var tmp$ret$9;
    $l$block_8: {
      var tmp2_copyInto_0 = $this.buffer_1;
      var tmp3_copyInto_0 = $this.gapEnd_1;
      var tmp4_copyInto_0 = $this.gapEnd_1 + tailLength | 0;
      var tmp$ret$6;
      $l$block_5: {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_copyInto_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5;
        break $l$block_5;
      }
      var tmp_0 = tmp$ret$6;
      var tmp$ret$8;
      $l$block_7: {
        var tmp$ret$7;
        $l$block_6: {
          tmp$ret$7 = newBuffer;
          break $l$block_6;
        }
        tmp$ret$8 = tmp$ret$7;
        break $l$block_7;
      }
      arrayCopy(tmp_0, tmp$ret$8, newEnd, tmp3_copyInto_0, tmp4_copyInto_0);
      tmp$ret$9 = newBuffer;
      break $l$block_8;
    }
    Unit_getInstance();
    $this.buffer_1 = newBuffer;
    $this.capacity_1 = newCapacity;
    $this.gapEnd_1 = newEnd;
  }
  function delete_0($this, start, end) {
    unreachableDeclarationLog();
    if (start < $this.gapStart_1 ? end <= $this.gapStart_1 : false) {
      var copyLen = $this.gapStart_1 - end | 0;
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_copyInto_0 = $this.buffer_1;
        var tmp1_copyInto_0 = $this.buffer_1;
        var tmp2_copyInto_0 = $this.gapEnd_1 - copyLen | 0;
        var tmp3_copyInto_0 = $this.gapStart_1;
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
        arrayCopy(tmp, tmp$ret$3, tmp2_copyInto_0, end, tmp3_copyInto_0);
        tmp$ret$4 = tmp1_copyInto_0;
        break $l$block_3;
      }
      Unit_getInstance();
      $this.gapStart_1 = start;
      var tmp0_this = $this;
      tmp0_this.gapEnd_1 = tmp0_this.gapEnd_1 - copyLen | 0;
    } else if (start < $this.gapStart_1 ? end >= $this.gapStart_1 : false) {
      $this.gapEnd_1 = end + gapLength($this) | 0;
      $this.gapStart_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.gapEnd_1 | 0;
      var tmp$ret$9;
      $l$block_8: {
        var tmp4_copyInto_0 = $this.buffer_1;
        var tmp5_copyInto_0 = $this.buffer_1;
        var tmp6_copyInto_0 = $this.gapStart_1;
        var tmp7_copyInto_0 = $this.gapEnd_1;
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = tmp4_copyInto_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        var tmp_0 = tmp$ret$6;
        var tmp$ret$8;
        $l$block_7: {
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = tmp5_copyInto_0;
            break $l$block_6;
          }
          tmp$ret$8 = tmp$ret$7;
          break $l$block_7;
        }
        arrayCopy(tmp_0, tmp$ret$8, tmp6_copyInto_0, tmp7_copyInto_0, startInBuffer);
        tmp$ret$9 = tmp5_copyInto_0;
        break $l$block_8;
      }
      Unit_getInstance();
      var tmp1_this = $this;
      tmp1_this.gapStart_1 = tmp1_this.gapStart_1 + copyLen_0 | 0;
      $this.gapEnd_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    unreachableDeclarationLog();
    this.capacity_1 = initBuffer.length;
    this.buffer_1 = initBuffer;
    this.gapStart_1 = initGapStart;
    this.gapEnd_1 = initGapEnd;
  }
  GapBuffer.prototype.get_a7b70_k$ = function (index) {
    unreachableDeclarationLog();
    if (index < this.gapStart_1) {
      return this.buffer_1[index];
    } else {
      return this.buffer_1[(index - this.gapStart_1 | 0) + this.gapEnd_1 | 0];
    }
  };
  GapBuffer.prototype.replace_z6e3jy_k$ = function (start, end, text) {
    unreachableDeclarationLog();
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    var tmp = this.buffer_1;
    var tmp_0 = this.gapStart_1;
    toCharArray$default(text, tmp, tmp_0, 0, 0, 12, null);
    var tmp0_this = this;
    tmp0_this.gapStart_1 = tmp0_this.gapStart_1 + text.length | 0;
  };
  GapBuffer.prototype.append_oi41kw_k$ = function (builder) {
    unreachableDeclarationLog();
    appendPartOfCharArray(builder, this.buffer_1, 0, this.gapStart_1);
    appendPartOfCharArray(builder, this.buffer_1, this.gapEnd_1, this.capacity_1 - this.gapEnd_1 | 0);
  };
  GapBuffer.prototype.length_iap7oa_k$ = function () {
    unreachableDeclarationLog();
    return this.capacity_1 - gapLength(this) | 0;
  };
  GapBuffer.prototype.toString = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = StringBuilder_init_$Create$_0();
      {
      }
      {
        tmp0_apply_0.append_oz4qxs_k$(tmp0_apply_0);
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0.toString();
  };
  GapBuffer.$metadata$ = {
    simpleName: 'GapBuffer',
    kind: 'class',
    interfaces: []
  };
  function toCharArray(_this__1828080292, destination, destinationOffset, startIndex, endIndex) {
    unreachableDeclarationLog();
    var index = startIndex;
    while (index < endIndex) {
      destination[(destinationOffset + index | 0) - startIndex | 0] = charSequenceGet(_this__1828080292, index);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      Unit_getInstance();
    }
  }
  function toCharArray$default(_this__1828080292, destination, destinationOffset, startIndex, endIndex, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      destinationOffset = 0;
    if (!(($mask0 & 4) === 0))
      startIndex = 0;
    if (!(($mask0 & 8) === 0))
      endIndex = _this__1828080292.length;
    return toCharArray(_this__1828080292, destination, destinationOffset, startIndex, endIndex);
  }
  function _ImeAction___init__impl__2460038174(value) {
    unreachableDeclarationLog();
    return value;
  }
  function _get_value__3683422336_0($this) {
    unreachableDeclarationLog();
    return $this;
  }
  function ImeAction__toString_impl_2648412906(this_0) {
    unreachableDeclarationLog();
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_22().None_1 ? 'None' : tmp0_subject === Companion_getInstance_22().Default_1 ? 'Default' : tmp0_subject === Companion_getInstance_22().Go_1 ? 'Go' : tmp0_subject === Companion_getInstance_22().Search_1 ? 'Search' : tmp0_subject === Companion_getInstance_22().Send_1 ? 'Send' : tmp0_subject === Companion_getInstance_22().Previous_1 ? 'Previous' : tmp0_subject === Companion_getInstance_22().Next_1 ? 'Next' : tmp0_subject === Companion_getInstance_22().Done_1 ? 'Done' : 'Invalid';
  }
  function Companion_13() {
    unreachableDeclarationLog();
    Companion_instance_13 = this;
    this.Default_1 = _ImeAction___init__impl__2460038174(1);
    this.None_1 = _ImeAction___init__impl__2460038174(0);
    this.Go_1 = _ImeAction___init__impl__2460038174(2);
    this.Search_1 = _ImeAction___init__impl__2460038174(3);
    this.Send_1 = _ImeAction___init__impl__2460038174(4);
    this.Previous_1 = _ImeAction___init__impl__2460038174(5);
    this.Next_1 = _ImeAction___init__impl__2460038174(6);
    this.Done_1 = _ImeAction___init__impl__2460038174(7);
  }
  Companion_13.prototype._get_Default__2834936080_ig2dml_k$ = function () {
    unreachableDeclarationLog();
    return this.Default_1;
  };
  Companion_13.prototype._get_None__775034355_5xh16_k$ = function () {
    unreachableDeclarationLog();
    return this.None_1;
  };
  Companion_13.prototype._get_Go__1413088643_tiv5ka_k$ = function () {
    unreachableDeclarationLog();
    return this.Go_1;
  };
  Companion_13.prototype._get_Search__1623352899_2odelm_k$ = function () {
    unreachableDeclarationLog();
    return this.Search_1;
  };
  Companion_13.prototype._get_Send__779354019_jzqi8a_k$ = function () {
    unreachableDeclarationLog();
    return this.Send_1;
  };
  Companion_13.prototype._get_Previous__2653471636_x3ep2x_k$ = function () {
    unreachableDeclarationLog();
    return this.Previous_1;
  };
  Companion_13.prototype._get_Next__774746520_bgg16d_k$ = function () {
    unreachableDeclarationLog();
    return this.Next_1;
  };
  Companion_13.prototype._get_Done__765799145_v32hfg_k$ = function () {
    unreachableDeclarationLog();
    return this.Done_1;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_22() {
    unreachableDeclarationLog();
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ImeAction__hashCode_impl_1332997787(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function ImeAction__equals_impl_2514071479(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof ImeAction))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ImeAction ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImeAction(value) {
    unreachableDeclarationLog();
    Companion_getInstance_22();
    this.value_1 = value;
  }
  ImeAction.prototype.toString = function () {
    unreachableDeclarationLog();
    return ImeAction__toString_impl_2648412906(this.value_1);
  };
  ImeAction.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return ImeAction__hashCode_impl_1332997787(this.value_1);
  };
  ImeAction.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return ImeAction__equals_impl_2514071479(this.value_1, other);
  };
  ImeAction.$metadata$ = {
    simpleName: 'ImeAction',
    kind: 'class',
    interfaces: []
  };
  function ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      singleLine = false;
    if (!(($mask0 & 2) === 0))
      capitalization = Companion_getInstance_24()._get_None__775034355_3p2lc0_k$();
    if (!(($mask0 & 4) === 0))
      autoCorrect = true;
    if (!(($mask0 & 8) === 0))
      keyboardType = Companion_getInstance_25()._get_Text__780287646_h3bs9_k$();
    if (!(($mask0 & 16) === 0))
      imeAction = Companion_getInstance_22()._get_Default__2834936080_ig2dml_k$();
    ImeOptions.call($this, singleLine, capitalization, autoCorrect, keyboardType, imeAction);
    return $this;
  }
  function ImeOptions_init_$Create$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker) {
    unreachableDeclarationLog();
    return ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $marker, Object.create(ImeOptions.prototype));
  }
  function Companion_14() {
    unreachableDeclarationLog();
    Companion_instance_14 = this;
    var tmp = this;
    tmp.Default_1 = ImeOptions_init_$Create$(false, null, false, null, null, 31, null);
  }
  Companion_14.prototype._get_Default__2834936080_o59jao_k$ = function () {
    unreachableDeclarationLog();
    return this.Default_1;
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_23() {
    unreachableDeclarationLog();
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    unreachableDeclarationLog();
    Companion_getInstance_23();
    this.singleLine_1 = singleLine;
    this.capitalization_1 = capitalization;
    this.autoCorrect_1 = autoCorrect;
    this.keyboardType_1 = keyboardType;
    this.imeAction_1 = imeAction;
  }
  ImeOptions.prototype._get_singleLine__659068847_awe4rz_k$ = function () {
    unreachableDeclarationLog();
    return this.singleLine_1;
  };
  ImeOptions.prototype._get_capitalization__2990211983_ozhnoc_k$ = function () {
    unreachableDeclarationLog();
    return this.capitalization_1;
  };
  ImeOptions.prototype._get_autoCorrect__1025655094_gyncja_k$ = function () {
    unreachableDeclarationLog();
    return this.autoCorrect_1;
  };
  ImeOptions.prototype._get_keyboardType__1922022826_nr5pbp_k$ = function () {
    unreachableDeclarationLog();
    return this.keyboardType_1;
  };
  ImeOptions.prototype._get_imeAction__522137562_ekf3eb_k$ = function () {
    unreachableDeclarationLog();
    return this.imeAction_1;
  };
  ImeOptions.prototype.copy_nqct7b_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    unreachableDeclarationLog();
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction);
  };
  ImeOptions.prototype.copy$default_pzk5pt_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      singleLine = this.singleLine_1;
    if (!(($mask0 & 2) === 0))
      capitalization = this.capitalization_1;
    if (!(($mask0 & 4) === 0))
      autoCorrect = this.autoCorrect_1;
    if (!(($mask0 & 8) === 0))
      keyboardType = this.keyboardType_1;
    if (!(($mask0 & 16) === 0))
      imeAction = this.imeAction_1;
    return this.copy_nqct7b_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction);
  };
  ImeOptions.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    else {
    }
    if (!(this.singleLine_1 === other.singleLine_1))
      return false;
    if (!(this.capitalization_1 === other.capitalization_1))
      return false;
    if (!(this.autoCorrect_1 === other.autoCorrect_1))
      return false;
    if (!(this.keyboardType_1 === other.keyboardType_1))
      return false;
    if (!(this.imeAction_1 === other.imeAction_1))
      return false;
    return true;
  };
  ImeOptions.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = this.singleLine_1 | 0;
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_3901383791(this.capitalization_1) | 0;
    result = imul(31, result) + (this.autoCorrect_1 | 0) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_2910655153(this.keyboardType_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_1332997787(this.imeAction_1) | 0;
    return result;
  };
  ImeOptions.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'ImeOptions(singleLine=' + this.singleLine_1 + ', capitalization=' + new KeyboardCapitalization(this.capitalization_1) + ', ' + ('autoCorrect=' + this.autoCorrect_1 + ', keyboardType=' + new KeyboardType(this.keyboardType_1) + ', imeAction=' + new ImeAction(this.imeAction_1) + ')');
  };
  ImeOptions.$metadata$ = {
    simpleName: 'ImeOptions',
    kind: 'class',
    interfaces: []
  };
  function _KeyboardCapitalization___init__impl__3350383042(value) {
    unreachableDeclarationLog();
    return value;
  }
  function _KeyboardCapitalization___get_value__impl__2151847730(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function KeyboardCapitalization__toString_impl_921831614(this_0) {
    unreachableDeclarationLog();
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_24().None_1 ? 'None' : tmp0_subject === Companion_getInstance_24().Characters_1 ? 'Characters' : tmp0_subject === Companion_getInstance_24().Words_1 ? 'Words' : tmp0_subject === Companion_getInstance_24().Sentences_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_15() {
    unreachableDeclarationLog();
    Companion_instance_15 = this;
    this.None_1 = _KeyboardCapitalization___init__impl__3350383042(0);
    this.Characters_1 = _KeyboardCapitalization___init__impl__3350383042(1);
    this.Words_1 = _KeyboardCapitalization___init__impl__3350383042(2);
    this.Sentences_1 = _KeyboardCapitalization___init__impl__3350383042(3);
  }
  Companion_15.prototype._get_None__775034355_3p2lc0_k$ = function () {
    unreachableDeclarationLog();
    return this.None_1;
  };
  Companion_15.prototype._get_Characters__4029979457_ooj8lq_k$ = function () {
    unreachableDeclarationLog();
    return this.Characters_1;
  };
  Companion_15.prototype._get_Words__2809010792_pqygcr_k$ = function () {
    unreachableDeclarationLog();
    return this.Words_1;
  };
  Companion_15.prototype._get_Sentences__2995168769_cg9sz6_k$ = function () {
    unreachableDeclarationLog();
    return this.Sentences_1;
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_24() {
    unreachableDeclarationLog();
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function KeyboardCapitalization__hashCode_impl_3901383791(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function KeyboardCapitalization__equals_impl_805014155(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof KeyboardCapitalization))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KeyboardCapitalization ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    unreachableDeclarationLog();
    Companion_getInstance_24();
    this.value_1 = value;
  }
  KeyboardCapitalization.prototype.toString = function () {
    unreachableDeclarationLog();
    return KeyboardCapitalization__toString_impl_921831614(this.value_1);
  };
  KeyboardCapitalization.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return KeyboardCapitalization__hashCode_impl_3901383791(this.value_1);
  };
  KeyboardCapitalization.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return KeyboardCapitalization__equals_impl_805014155(this.value_1, other);
  };
  KeyboardCapitalization.$metadata$ = {
    simpleName: 'KeyboardCapitalization',
    kind: 'class',
    interfaces: []
  };
  function _KeyboardType___init__impl__773498432(value) {
    unreachableDeclarationLog();
    return value;
  }
  function _get_value__3683422336_1($this) {
    unreachableDeclarationLog();
    return $this;
  }
  function KeyboardType__toString_impl_4226070272(this_0) {
    unreachableDeclarationLog();
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_25().Text_1 ? 'Text' : tmp0_subject === Companion_getInstance_25().Ascii_1 ? 'Ascii' : tmp0_subject === Companion_getInstance_25().Number_1 ? 'Number' : tmp0_subject === Companion_getInstance_25().Phone_1 ? 'Phone' : tmp0_subject === Companion_getInstance_25().Uri_1 ? 'Uri' : tmp0_subject === Companion_getInstance_25().Email_1 ? 'Email' : tmp0_subject === Companion_getInstance_25().Password_1 ? 'Password' : tmp0_subject === Companion_getInstance_25().NumberPassword_1 ? 'NumberPassword' : tmp0_subject === Companion_getInstance_25().Decimal_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_16() {
    unreachableDeclarationLog();
    Companion_instance_16 = this;
    this.Text_1 = _KeyboardType___init__impl__773498432(1);
    this.Ascii_1 = _KeyboardType___init__impl__773498432(2);
    this.Number_1 = _KeyboardType___init__impl__773498432(3);
    this.Phone_1 = _KeyboardType___init__impl__773498432(4);
    this.Uri_1 = _KeyboardType___init__impl__773498432(5);
    this.Email_1 = _KeyboardType___init__impl__773498432(6);
    this.Password_1 = _KeyboardType___init__impl__773498432(7);
    this.NumberPassword_1 = _KeyboardType___init__impl__773498432(8);
    this.Decimal_1 = _KeyboardType___init__impl__773498432(9);
  }
  Companion_16.prototype._get_Text__780287646_h3bs9_k$ = function () {
    unreachableDeclarationLog();
    return this.Text_1;
  };
  Companion_16.prototype._get_Ascii__2182421184_oy0v4b_k$ = function () {
    unreachableDeclarationLog();
    return this.Ascii_1;
  };
  Companion_16.prototype._get_Number__1949476034_62nkoj_k$ = function () {
    unreachableDeclarationLog();
    return this.Number_1;
  };
  Companion_16.prototype._get_Phone__2602061891_z6g1de_k$ = function () {
    unreachableDeclarationLog();
    return this.Phone_1;
  };
  Companion_16.prototype._get_Uri__856496325_ad5bps_k$ = function () {
    unreachableDeclarationLog();
    return this.Uri_1;
  };
  Companion_16.prototype._get_Email__2291337173_5h8o68_k$ = function () {
    unreachableDeclarationLog();
    return this.Email_1;
  };
  Companion_16.prototype._get_Password__2557655152_w9uhiz_k$ = function () {
    unreachableDeclarationLog();
    return this.Password_1;
  };
  Companion_16.prototype._get_NumberPassword__2897713511_s1ukhe_k$ = function () {
    unreachableDeclarationLog();
    return this.NumberPassword_1;
  };
  Companion_16.prototype._get_Decimal__2756187648_pnwtzf_k$ = function () {
    unreachableDeclarationLog();
    return this.Decimal_1;
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_25() {
    unreachableDeclarationLog();
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function KeyboardType__hashCode_impl_2910655153(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function KeyboardType__equals_impl_4209566029(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof KeyboardType))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KeyboardType ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function KeyboardType(value) {
    unreachableDeclarationLog();
    Companion_getInstance_25();
    this.value_1 = value;
  }
  KeyboardType.prototype.toString = function () {
    unreachableDeclarationLog();
    return KeyboardType__toString_impl_4226070272(this.value_1);
  };
  KeyboardType.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return KeyboardType__hashCode_impl_2910655153(this.value_1);
  };
  KeyboardType.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return KeyboardType__equals_impl_4209566029(this.value_1, other);
  };
  KeyboardType.$metadata$ = {
    simpleName: 'KeyboardType',
    kind: 'class',
    interfaces: []
  };
  function TextFieldValue$Companion$Saver$lambda() {
    unreachableDeclarationLog();
    return function ($this$Saver, it) {
      return arrayListOf([save_0(it.annotatedString_1, _get_AnnotatedStringSaver__3048893535(), $this$Saver), save_0(new TextRange(it.selection_1), _get_Saver__2681684988_10(Companion_getInstance_10()), $this$Saver)]);
    };
  }
  function TextFieldValue$Companion$Saver$lambda_0() {
    unreachableDeclarationLog();
    return function (it) {
      var list = isInterface(it, List) ? it : THROW_CCE();
      Unit_getInstance();
      var tmp$ret$0;
      $l$block_4: {
        var tmp0_restore_0 = list.get_fkrdnv_k$(0);
        var tmp1_restore_0 = _get_AnnotatedStringSaver__3048893535();
        if (equals(tmp0_restore_0, false)) {
          tmp$ret$0 = null;
          break $l$block_4;
        }
        var tmp0_safe_receiver_1 = tmp0_restore_0;
        var tmp;
        if (tmp0_safe_receiver_1 == null) {
          tmp = null;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                {
                }
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = tmp1_restore_0.restore_uzeo8_k$(tmp0_restore_0);
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_0 = tmp$ret$2;
              tmp$ret$3 = (tmp_0 == null ? true : tmp_0 instanceof AnnotatedString) ? tmp_0 : THROW_CCE();
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp = tmp$ret$4;
        }
        tmp$ret$0 = tmp;
        break $l$block_4;
      }
      var tmp_1 = ensureNotNull(tmp$ret$0);
      var tmp$ret$5;
      $l$block_10: {
        var tmp2_restore_0 = list.get_fkrdnv_k$(1);
        var tmp3_restore_0 = _get_Saver__2681684988_10(Companion_getInstance_10());
        if (equals(tmp2_restore_0, false)) {
          tmp$ret$5 = null;
          break $l$block_10;
        }
        var tmp0_safe_receiver_1_0 = tmp2_restore_0;
        var tmp_2;
        if (tmp0_safe_receiver_1_0 == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$9;
          $l$block_9: {
            {
            }
            var tmp$ret$8;
            $l$block_8: {
              var tmp$ret$7;
              $l$block_7: {
                {
                }
                var tmp$ret$6;
                $l$block_6: {
                  var tmp_3 = tmp3_restore_0.restore_uzeo8_k$(tmp2_restore_0);
                  tmp$ret$6 = tmp_3 == null ? null : tmp_3.packedValue_1;
                  break $l$block_6;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_7;
              }
              var tmp_4 = tmp$ret$7;
              var tmp_5;
              var tmp_6;
              var tmp_7 = tmp_4;
              if ((tmp_7 == null ? null : new TextRange(tmp_7)) == null) {
                tmp_6 = true;
              } else {
                {
                  var tmp_8 = tmp_4;
                  tmp_6 = (tmp_8 == null ? null : new TextRange(tmp_8))instanceof TextRange;
                }
              }
              if (tmp_6) {
                tmp_5 = tmp_4;
              } else {
                {
                  tmp_5 = THROW_CCE();
                }
              }
              tmp$ret$8 = tmp_5;
              break $l$block_8;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_9;
          }
          tmp_2 = tmp$ret$9;
        }
        tmp$ret$5 = tmp_2;
        break $l$block_10;
      }
      var tmp_9 = tmp$ret$5;
      var tmp_10 = ensureNotNull(tmp_9 == null ? null : new TextRange(tmp_9)).packedValue_1;
      return TextFieldValue_init_$Create$(tmp_1, tmp_10, null, 4, null);
    };
  }
  function TextFieldValue_init_$Init$(annotatedString, selection, composition, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      selection = Companion_getInstance_10()._get_Zero__785822851_7e0ohz_k$();
    if (!(($mask0 & 4) === 0))
      composition = null;
    TextFieldValue.call($this, annotatedString, selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(annotatedString, selection, composition, $mask0, $marker) {
    unreachableDeclarationLog();
    return TextFieldValue_init_$Init$(annotatedString, selection, composition, $mask0, $marker, Object.create(TextFieldValue.prototype));
  }
  function TextFieldValue_init_$Init$_0(text, selection, composition, $this) {
    unreachableDeclarationLog();
    TextFieldValue.call($this, AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$_0(text, selection, composition) {
    unreachableDeclarationLog();
    return TextFieldValue_init_$Init$_0(text, selection, composition, Object.create(TextFieldValue.prototype));
  }
  function TextFieldValue_init_$Init$_1(text, selection, composition, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      text = '';
    if (!(($mask0 & 2) === 0))
      selection = Companion_getInstance_10()._get_Zero__785822851_7e0ohz_k$();
    if (!(($mask0 & 4) === 0))
      composition = null;
    TextFieldValue_init_$Init$_0(text, selection, composition, $this);
    return $this;
  }
  function TextFieldValue_init_$Create$_1(text, selection, composition, $mask0, $marker) {
    unreachableDeclarationLog();
    return TextFieldValue_init_$Init$_1(text, selection, composition, $mask0, $marker, Object.create(TextFieldValue.prototype));
  }
  function Companion_17() {
    unreachableDeclarationLog();
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda();
    tmp.Saver_1 = Saver(tmp_0, TextFieldValue$Companion$Saver$lambda_0());
  }
  Companion_17.prototype._get_Saver__2681684988_qoi8lg_k$ = function () {
    unreachableDeclarationLog();
    return this.Saver_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_26() {
    unreachableDeclarationLog();
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    unreachableDeclarationLog();
    Companion_getInstance_26();
    this.annotatedString_1 = annotatedString;
    this.selection_1 = constrain(selection, 0, this._get_text__809840318_de5ose_k$().length);
    var tmp = this;
    var tmp0_safe_receiver = composition;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      {
        tmp_0 = constrain(tmp0_safe_receiver, 0, this._get_text__809840318_de5ose_k$().length);
      }
    }
    tmp.composition_1 = tmp_0;
  }
  TextFieldValue.prototype._get_annotatedString__3040968296_kqljtk_k$ = function () {
    unreachableDeclarationLog();
    return this.annotatedString_1;
  };
  TextFieldValue.prototype._get_text__809840318_de5ose_k$ = function () {
    unreachableDeclarationLog();
    return this.annotatedString_1._get_text__809840318_de5ose_k$();
  };
  TextFieldValue.prototype._get_selection__1331868229_qhfxtx_k$ = function () {
    unreachableDeclarationLog();
    return this.selection_1;
  };
  TextFieldValue.prototype._get_composition__1417340199_2qwfcs_k$ = function () {
    unreachableDeclarationLog();
    return this.composition_1;
  };
  TextFieldValue.prototype.copy_5pnje4_k$ = function (annotatedString, selection, composition) {
    unreachableDeclarationLog();
    return new TextFieldValue(annotatedString, selection, composition);
  };
  TextFieldValue.prototype.copy$default_11resf_k$ = function (annotatedString, selection, composition, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      annotatedString = this.annotatedString_1;
    if (!(($mask0 & 2) === 0))
      selection = this.selection_1;
    if (!(($mask0 & 4) === 0))
      composition = this.composition_1;
    return this.copy_5pnje4_k$(annotatedString, selection, composition);
  };
  TextFieldValue.prototype.copy_cnpmxh_k$ = function (text, selection, composition) {
    unreachableDeclarationLog();
    return new TextFieldValue(AnnotatedString_init_$Create$_1(text, null, null, 6, null), selection, composition);
  };
  TextFieldValue.prototype.copy$default_pjfmp_k$ = function (text, selection, composition, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      selection = this.selection_1;
    if (!(($mask0 & 4) === 0))
      composition = this.composition_1;
    return this.copy_cnpmxh_k$(text, selection, composition);
  };
  TextFieldValue.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    else {
    }
    var tmp;
    var tmp_0;
    if (equals(this.selection_1, other.selection_1)) {
      var tmp_1 = this.composition_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.composition_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.annotatedString_1.equals(other.annotatedString_1);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  TextFieldValue.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = this.annotatedString_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_241384130(this.selection_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.composition_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      {
        tmp_0 = TextRange__hashCode_impl_241384130(tmp0_safe_receiver);
      }
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  TextFieldValue.prototype.toString = function () {
    unreachableDeclarationLog();
    var tmp = 'TextFieldValue(' + ("text='" + this.annotatedString_1 + "', ") + ('selection=' + new TextRange(this.selection_1) + ', ');
    var tmp_0 = this.composition_1;
    return tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  TextFieldValue.$metadata$ = {
    simpleName: 'TextFieldValue',
    kind: 'class',
    interfaces: []
  };
  function _get_platformTextInputService__2538704704($this) {
    unreachableDeclarationLog();
    return $this.platformTextInputService_1;
  }
  function _get__currentInputSession__2550870085($this) {
    unreachableDeclarationLog();
    return $this._currentInputSession_1;
  }
  function TextInputService(platformTextInputService) {
    this.platformTextInputService_1 = platformTextInputService;
    this._currentInputSession_1 = new AtomicReference(null);
  }
  TextInputService.prototype._get_currentInputSession__1834006444_ubx4fg_k$ = function () {
    unreachableDeclarationLog();
    return this._currentInputSession_1.get_26vq_k$();
  };
  TextInputService.prototype.startInput_5hgpy9_k$ = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    unreachableDeclarationLog();
    this.platformTextInputService_1.startInput_uss168_k$(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.platformTextInputService_1);
    this._currentInputSession_1.set_8wdrq0_k$(nextSession);
    return nextSession;
  };
  TextInputService.prototype.stopInput_e0taal_k$ = function (session) {
    unreachableDeclarationLog();
    if (this._currentInputSession_1.compareAndSet_fjyh1e_k$(session, null)) {
      this.platformTextInputService_1.stopInput_mtwgvd_k$();
    }
  };
  TextInputService.prototype.showSoftwareKeyboard_p4xnqy_k$ = function () {
    unreachableDeclarationLog();
    if (!(this._currentInputSession_1.get_26vq_k$() == null)) {
      this.platformTextInputService_1.showSoftwareKeyboard_p4xnqy_k$();
    }
  };
  TextInputService.prototype.hideSoftwareKeyboard_kb3flr_k$ = function () {
    unreachableDeclarationLog();
    return this.platformTextInputService_1.hideSoftwareKeyboard_kb3flr_k$();
  };
  TextInputService.$metadata$ = {
    simpleName: 'TextInputService',
    kind: 'class',
    interfaces: []
  };
  function PlatformTextInputService() {
    unreachableDeclarationLog();
  }
  PlatformTextInputService.$metadata$ = {
    simpleName: 'PlatformTextInputService',
    kind: 'interface',
    interfaces: []
  };
  function _get_textInputService__1574305907($this) {
    unreachableDeclarationLog();
    return $this.textInputService_1;
  }
  function _get_platformTextInputService__2538704704_0($this) {
    unreachableDeclarationLog();
    return $this.platformTextInputService_1;
  }
  function ensureOpenSession($this, block) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = $this._get_isOpen__57724663_yd8mv_k$();
      {
      }
      {
        if (tmp0_also_0) {
          block();
        }
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function TextInputSession(textInputService, platformTextInputService) {
    unreachableDeclarationLog();
    this.textInputService_1 = textInputService;
    this.platformTextInputService_1 = platformTextInputService;
  }
  TextInputSession.prototype._get_isOpen__57724663_yd8mv_k$ = function () {
    unreachableDeclarationLog();
    return equals(this.textInputService_1._get_currentInputSession__1834006444_ubx4fg_k$(), this);
  };
  TextInputSession.prototype.dispose_3n44we_k$ = function () {
    unreachableDeclarationLog();
    this.textInputService_1.stopInput_e0taal_k$(this);
  };
  TextInputSession.prototype.notifyFocusedRect_xqvesm_k$ = function (rect) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0_1 = this._get_isOpen__57724663_yd8mv_k$();
        {
        }
        {
          if (tmp0_also_0_1) {
            {
              this.platformTextInputService_1.notifyFocusedRect_jql0y1_k$(rect);
            }
          }
        }
        tmp$ret$0 = tmp0_also_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  TextInputSession.prototype.updateState_h3q7x3_k$ = function (oldValue, newValue) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0_1 = this._get_isOpen__57724663_yd8mv_k$();
        {
        }
        {
          if (tmp0_also_0_1) {
            {
              this.platformTextInputService_1.updateState_rj03ay_k$(oldValue, newValue);
            }
          }
        }
        tmp$ret$0 = tmp0_also_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  TextInputSession.prototype.showSoftwareKeyboard_6wjho5_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0_1 = this._get_isOpen__57724663_yd8mv_k$();
        {
        }
        {
          if (tmp0_also_0_1) {
            {
              this.platformTextInputService_1.showSoftwareKeyboard_p4xnqy_k$();
            }
          }
        }
        tmp$ret$0 = tmp0_also_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  TextInputSession.prototype.hideSoftwareKeyboard_pwrw8g_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0_1 = this._get_isOpen__57724663_yd8mv_k$();
        {
        }
        {
          if (tmp0_also_0_1) {
            {
              this.platformTextInputService_1.hideSoftwareKeyboard_kb3flr_k$();
            }
          }
        }
        tmp$ret$0 = tmp0_also_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  TextInputSession.$metadata$ = {
    simpleName: 'TextInputSession',
    kind: 'class',
    interfaces: []
  };
  function Companion_18() {
    Companion_instance_18 = this;
  }
  Companion_18.prototype._get_current__2701413560_qcrdxk_k$ = function () {
    unreachableDeclarationLog();
    return new Locale(_get_platformLocaleDelegate__3638864377()._get_current__2701413560_qcrdxk_k$().get_fkrdnv_k$(0));
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_27() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Locale_init_$Init$(languageTag, $this) {
    unreachableDeclarationLog();
    Locale.call($this, _get_platformLocaleDelegate__3638864377().parseLanguageTag_fhwnvy_k$(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    unreachableDeclarationLog();
    return Locale_init_$Init$(languageTag, Object.create(Locale.prototype));
  }
  function Locale(platformLocale) {
    Companion_getInstance_27();
    this.platformLocale_1 = platformLocale;
  }
  Locale.prototype._get_platformLocale__940537598_fjyzge_k$ = function () {
    unreachableDeclarationLog();
    return this.platformLocale_1;
  };
  Locale.prototype._get_language__3000162163_lew619_k$ = function () {
    unreachableDeclarationLog();
    return this.platformLocale_1._get_language__3000162163_lew619_k$();
  };
  Locale.prototype._get_script__4211853216_1dhf8g_k$ = function () {
    unreachableDeclarationLog();
    return this.platformLocale_1._get_script__4211853216_1dhf8g_k$();
  };
  Locale.prototype._get_region__3371447959_f9u82x_k$ = function () {
    unreachableDeclarationLog();
    return this.platformLocale_1._get_region__3371447959_f9u82x_k$();
  };
  Locale.prototype.toLanguageTag_xneel5_k$ = function () {
    return this.platformLocale_1.toLanguageTag_xneel5_k$();
  };
  Locale.prototype.equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    else {
    }
    if (this === other)
      return true;
    return this.toLanguageTag_xneel5_k$() === other.toLanguageTag_xneel5_k$();
  };
  Locale.prototype.hashCode = function () {
    return getStringHashCode(this.toLanguageTag_xneel5_k$());
  };
  Locale.prototype.toString = function () {
    return this.toLanguageTag_xneel5_k$();
  };
  Locale.$metadata$ = {
    simpleName: 'Locale',
    kind: 'class',
    interfaces: []
  };
  function Companion_19() {
    Companion_instance_19 = this;
  }
  Companion_19.prototype._get_current__2701413560_qcrdxk_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fastMap_0 = _get_platformLocaleDelegate__3638864377()._get_current__2701413560_qcrdxk_k$();
      {
      }
      var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable = 0;
        var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
            {
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = new Locale(item_3_4);
                  break $l$block;
                }
                var tmp0_plusAssign_0_5_5 = tmp$ret$0;
                target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = target_1;
      break $l$block_0;
    }
    return new LocaleList(tmp$ret$1);
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_28() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function LocaleList_init_$Init$(languageTags, $this) {
    unreachableDeclarationLog();
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_fastMap_0 = split$default(languageTags, [','], false, 0, 6, null);
        {
        }
        var target_1 = ArrayList_init_$Create$_0(tmp0_fastMap_0._get_size__809037418_ddoh9m_k$());
        {
          {
          }
          var inductionVariable = 0;
          var last = tmp0_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item_3_4 = tmp0_fastMap_0.get_fkrdnv_k$(index_2_3);
              {
                {
                  var tmp$ret$1;
                  $l$block_0: {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = toString(trim(isCharSequence(item_3_4) ? item_3_4 : THROW_CCE()));
                      break $l$block;
                    }
                    tmp$ret$1 = tmp$ret$0;
                    break $l$block_0;
                  }
                  var tmp0_plusAssign_0_5_5 = tmp$ret$1;
                  target_1.add_1j60pz_k$(tmp0_plusAssign_0_5_5);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable <= last);
        }
        tmp$ret$2 = target_1;
        break $l$block_1;
      }
      var tmp1_fastMap_0 = tmp$ret$2;
      {
      }
      var target_1_0 = ArrayList_init_$Create$_0(tmp1_fastMap_0._get_size__809037418_ddoh9m_k$());
      {
        {
        }
        var inductionVariable_0 = 0;
        var last_0 = tmp1_fastMap_0._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_2_3_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_3_4_0 = tmp1_fastMap_0.get_fkrdnv_k$(index_2_3_0);
            {
              {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = Locale_init_$Create$(item_3_4_0);
                  break $l$block_2;
                }
                var tmp0_plusAssign_0_5_5_0 = tmp$ret$3;
                target_1_0.add_1j60pz_k$(tmp0_plusAssign_0_5_5_0);
                Unit_getInstance();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
      tmp$ret$4 = target_1_0;
      break $l$block_3;
    }
    LocaleList.call($this, tmp$ret$4);
    return $this;
  }
  function LocaleList_init_$Create$(languageTags) {
    unreachableDeclarationLog();
    return LocaleList_init_$Init$(languageTags, Object.create(LocaleList.prototype));
  }
  function LocaleList_init_$Init$_0(locales, $this) {
    unreachableDeclarationLog();
    LocaleList.call($this, toList(locales));
    return $this;
  }
  function LocaleList_init_$Create$_0(locales) {
    unreachableDeclarationLog();
    return LocaleList_init_$Init$_0(locales, Object.create(LocaleList.prototype));
  }
  function LocaleList(localeList) {
    Companion_getInstance_28();
    this.localeList_1 = localeList;
    this.size_1 = this.localeList_1._get_size__809037418_ddoh9m_k$();
  }
  LocaleList.prototype._get_localeList__8953203_5bwc3_k$ = function () {
    unreachableDeclarationLog();
    return this.localeList_1;
  };
  LocaleList.prototype.get_fkrdnv_k$ = function (i) {
    unreachableDeclarationLog();
    return this.localeList_1.get_fkrdnv_k$(i);
  };
  LocaleList.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  LocaleList.prototype.contains_9v037n_k$ = function (element) {
    return this.localeList_1.contains_2ehdt1_k$(element);
  };
  LocaleList.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof Locale))
      return false;
    else {
    }
    return this.contains_9v037n_k$(element instanceof Locale ? element : THROW_CCE());
  };
  LocaleList.prototype.containsAll_tbwud6_k$ = function (elements) {
    return this.localeList_1.containsAll_jr3fla_k$(elements);
  };
  LocaleList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_tbwud6_k$(elements);
  };
  LocaleList.prototype.isEmpty_y1axqb_k$ = function () {
    return this.localeList_1.isEmpty_y1axqb_k$();
  };
  LocaleList.prototype.iterator_jk1svi_k$ = function () {
    return this.localeList_1.iterator_jk1svi_k$();
  };
  LocaleList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    else {
    }
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    return true;
  };
  LocaleList.prototype.hashCode = function () {
    return hashCode(this.localeList_1);
  };
  LocaleList.prototype.toString = function () {
    return 'LocaleList(localeList=' + this.localeList_1 + ')';
  };
  LocaleList.$metadata$ = {
    simpleName: 'LocaleList',
    kind: 'class',
    interfaces: [Collection]
  };
  function _get_platformLocaleDelegate__3638864377() {
    init_properties_PlatformLocale_kt_1119530381();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  function PlatformLocale() {
    unreachableDeclarationLog();
  }
  PlatformLocale.$metadata$ = {
    simpleName: 'PlatformLocale',
    kind: 'interface',
    interfaces: []
  };
  function PlatformLocaleDelegate() {
    unreachableDeclarationLog();
  }
  PlatformLocaleDelegate.$metadata$ = {
    simpleName: 'PlatformLocaleDelegate',
    kind: 'interface',
    interfaces: []
  };
  var properties_initialized_PlatformLocale_kt_2073043377;
  function init_properties_PlatformLocale_kt_1119530381() {
    if (!properties_initialized_PlatformLocale_kt_2073043377) {
      properties_initialized_PlatformLocale_kt_2073043377 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__1714094980(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__1601725628(this_0) {
    return this_0;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.Superscript_1 = _BaselineShift___init__impl__1714094980(0.5);
    this.Subscript_1 = _BaselineShift___init__impl__1714094980(-0.5);
    this.None_1 = _BaselineShift___init__impl__1714094980(0.0);
  }
  Companion_20.prototype._get_Superscript__32675435_vq96of_k$ = function () {
    unreachableDeclarationLog();
    return this.Superscript_1;
  };
  Companion_20.prototype._get_Subscript__3760902342_kr190_k$ = function () {
    unreachableDeclarationLog();
    return this.Subscript_1;
  };
  Companion_20.prototype._get_None__775034355_eamnbb_k$ = function () {
    return this.None_1;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_29() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function BaselineShift__toString_impl_2284072516(this_0) {
    return 'BaselineShift(multiplier=' + this_0 + ')';
  }
  function BaselineShift__hashCode_impl_968657397(this_0) {
    return getNumberHashCode(this_0);
  }
  function BaselineShift__equals_impl_4100282769(this_0, other) {
    if (!(other instanceof BaselineShift))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.multiplier_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_29();
    this.multiplier_1 = multiplier;
  }
  BaselineShift.prototype.toString = function () {
    return BaselineShift__toString_impl_2284072516(this.multiplier_1);
  };
  BaselineShift.prototype.hashCode = function () {
    return BaselineShift__hashCode_impl_968657397(this.multiplier_1);
  };
  BaselineShift.prototype.equals = function (other) {
    return BaselineShift__equals_impl_4100282769(this.multiplier_1, other);
  };
  BaselineShift.$metadata$ = {
    simpleName: 'BaselineShift',
    kind: 'class',
    interfaces: []
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  function values_0() {
    unreachableDeclarationLog();
    return [ResolvedTextDirection_Ltr_getInstance(), ResolvedTextDirection_Rtl_getInstance()];
  }
  function valueOf_0(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'Ltr':
        return ResolvedTextDirection_Ltr_getInstance();
      case 'Rtl':
        return ResolvedTextDirection_Rtl_getInstance();
      default:
        ResolvedTextDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ResolvedTextDirection.$metadata$ = {
    simpleName: 'ResolvedTextDirection',
    kind: 'class',
    interfaces: []
  };
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__560850655(value) {
    return value;
  }
  function _TextAlign___get_value__impl__2976785461(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function TextAlign__toString_impl_3903141961(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_30().Left_1 ? 'Left' : tmp0_subject === Companion_getInstance_30().Right_1 ? 'Right' : tmp0_subject === Companion_getInstance_30().Center_1 ? 'Center' : tmp0_subject === Companion_getInstance_30().Justify_1 ? 'Justify' : tmp0_subject === Companion_getInstance_30().Start_1 ? 'Start' : tmp0_subject === Companion_getInstance_30().End_1 ? 'End' : 'Invalid';
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.Left_1 = _TextAlign___init__impl__560850655(1);
    this.Right_1 = _TextAlign___init__impl__560850655(2);
    this.Center_1 = _TextAlign___init__impl__560850655(3);
    this.Justify_1 = _TextAlign___init__impl__560850655(4);
    this.Start_1 = _TextAlign___init__impl__560850655(5);
    this.End_1 = _TextAlign___init__impl__560850655(6);
  }
  Companion_21.prototype._get_Left__772882180_f3kmkv_k$ = function () {
    return this.Left_1;
  };
  Companion_21.prototype._get_Right__2660000085_35qy9s_k$ = function () {
    return this.Right_1;
  };
  Companion_21.prototype._get_Center__320263478_460fjz_k$ = function () {
    return this.Center_1;
  };
  Companion_21.prototype._get_Justify__2111415969_o60p4k_k$ = function () {
    return this.Justify_1;
  };
  Companion_21.prototype._get_Start__2698618831_949u7u_k$ = function () {
    return this.Start_1;
  };
  Companion_21.prototype._get_End__856015670_8qnv0f_k$ = function () {
    return this.End_1;
  };
  Companion_21.prototype.values_dmh61q_k$ = function () {
    unreachableDeclarationLog();
    return listOf([new TextAlign(this.Left_1), new TextAlign(this.Right_1), new TextAlign(this.Center_1), new TextAlign(this.Justify_1), new TextAlign(this.Start_1), new TextAlign(this.End_1)]);
  };
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_30() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function TextAlign__hashCode_impl_2587726842(this_0) {
    return this_0;
  }
  function TextAlign__equals_impl_3006996694(this_0, other) {
    if (!(other instanceof TextAlign))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextAlign ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  TextAlign.prototype.toString = function () {
    return TextAlign__toString_impl_3903141961(this.value_1);
  };
  TextAlign.prototype.hashCode = function () {
    return TextAlign__hashCode_impl_2587726842(this.value_1);
  };
  TextAlign.prototype.equals = function (other) {
    return TextAlign__equals_impl_3006996694(this.value_1, other);
  };
  TextAlign.$metadata$ = {
    simpleName: 'TextAlign',
    kind: 'class',
    interfaces: []
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.None_1 = new TextDecoration(0);
    this.Underline_1 = new TextDecoration(1);
    this.LineThrough_1 = new TextDecoration(2);
  }
  Companion_22.prototype._get_None__775034355_ctfoc3_k$ = function () {
    return this.None_1;
  };
  Companion_22.prototype._get_Underline__3209552165_hy87ob_k$ = function () {
    return this.Underline_1;
  };
  Companion_22.prototype._get_LineThrough__2415377312_v324ww_k$ = function () {
    return this.LineThrough_1;
  };
  Companion_22.prototype.combine_6kxqyc_k$ = function (decorations) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var accumulator_1 = 0;
      {
        {
        }
        var inductionVariable = 0;
        var last = decorations._get_size__809037418_ddoh9m_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_3_4 = decorations.get_fkrdnv_k$(index_2_3);
            {
              var tmp$ret$0;
              $l$block: {
                var tmp0__anonymous__5_2495602525 = accumulator_1;
                tmp$ret$0 = tmp0__anonymous__5_2495602525 | item_3_4.mask_1;
                break $l$block;
              }
              accumulator_1 = tmp$ret$0;
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$1 = accumulator_1;
      break $l$block_0;
    }
    var mask = tmp$ret$1;
    return new TextDecoration(mask);
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_31() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function TextDecoration(mask) {
    Companion_getInstance_31();
    this.mask_1 = mask;
  }
  TextDecoration.prototype._get_mask__803251423_da8grj_k$ = function () {
    unreachableDeclarationLog();
    return this.mask_1;
  };
  TextDecoration.prototype.plus_18b76r_k$ = function (decoration) {
    unreachableDeclarationLog();
    return new TextDecoration(this.mask_1 | decoration.mask_1);
  };
  TextDecoration.prototype.contains_8528ny_k$ = function (other) {
    return (this.mask_1 | other.mask_1) === this.mask_1;
  };
  TextDecoration.prototype.toString = function () {
    if (this.mask_1 === 0) {
      return 'TextDecoration.None';
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var values = tmp$ret$0;
    if (!((this.mask_1 & Companion_getInstance_31().Underline_1.mask_1) === 0)) {
      values.add_1j60pz_k$('Underline');
      Unit_getInstance();
    }
    if (!((this.mask_1 & Companion_getInstance_31().LineThrough_1.mask_1) === 0)) {
      values.add_1j60pz_k$('LineThrough');
      Unit_getInstance();
    }
    if (values._get_size__809037418_ddoh9m_k$() === 1) {
      return 'TextDecoration.' + values.get_fkrdnv_k$(0);
    }
    return 'TextDecoration[' + fastJoinToString$default(values, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  TextDecoration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    else {
    }
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  TextDecoration.prototype.hashCode = function () {
    return this.mask_1;
  };
  TextDecoration.$metadata$ = {
    simpleName: 'TextDecoration',
    kind: 'class',
    interfaces: []
  };
  function _TextDirection___init__impl__1298744921(value) {
    return value;
  }
  function _TextDirection___get_value__impl__3068485883(this_0) {
    unreachableDeclarationLog();
    return this_0;
  }
  function TextDirection__toString_impl_2293122575(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_32().Ltr_1 ? 'Ltr' : tmp0_subject === Companion_getInstance_32().Rtl_1 ? 'Rtl' : tmp0_subject === Companion_getInstance_32().Content_1 ? 'Content' : tmp0_subject === Companion_getInstance_32().ContentOrLtr_1 ? 'ContentOrLtr' : tmp0_subject === Companion_getInstance_32().ContentOrRtl_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.Ltr_1 = _TextDirection___init__impl__1298744921(1);
    this.Rtl_1 = _TextDirection___init__impl__1298744921(2);
    this.Content_1 = _TextDirection___init__impl__1298744921(3);
    this.ContentOrLtr_1 = _TextDirection___init__impl__1298744921(4);
    this.ContentOrRtl_1 = _TextDirection___init__impl__1298744921(5);
  }
  Companion_23.prototype._get_Ltr__856230407_6ruc8o_k$ = function () {
    return this.Ltr_1;
  };
  Companion_23.prototype._get_Rtl__856408967_q5wj5k_k$ = function () {
    return this.Rtl_1;
  };
  Companion_23.prototype._get_Content__1623333336_pqoqw9_k$ = function () {
    return this.Content_1;
  };
  Companion_23.prototype._get_ContentOrLtr__94991581_tuf7ua_k$ = function () {
    return this.ContentOrLtr_1;
  };
  Companion_23.prototype._get_ContentOrRtl__95170141_agd0xe_k$ = function () {
    return this.ContentOrRtl_1;
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_32() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function TextDirection__hashCode_impl_977707456(this_0) {
    return this_0;
  }
  function TextDirection__equals_impl_4086884380(this_0, other) {
    if (!(other instanceof TextDirection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextDirection ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  TextDirection.prototype.toString = function () {
    return TextDirection__toString_impl_2293122575(this.value_1);
  };
  TextDirection.prototype.hashCode = function () {
    return TextDirection__hashCode_impl_977707456(this.value_1);
  };
  TextDirection.prototype.equals = function (other) {
    return TextDirection__equals_impl_4086884380(this.value_1, other);
  };
  TextDirection.$metadata$ = {
    simpleName: 'TextDirection',
    kind: 'class',
    interfaces: []
  };
  function TextGeometricTransform_init_$Init$(scaleX, skewX, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      scaleX = 1.0;
    if (!(($mask0 & 2) === 0))
      skewX = 0.0;
    TextGeometricTransform.call($this, scaleX, skewX);
    return $this;
  }
  function TextGeometricTransform_init_$Create$(scaleX, skewX, $mask0, $marker) {
    unreachableDeclarationLog();
    return TextGeometricTransform_init_$Init$(scaleX, skewX, $mask0, $marker, Object.create(TextGeometricTransform.prototype));
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.None_1 = new TextGeometricTransform(1.0, 0.0);
  }
  Companion_24.prototype._get_None__775034355_ctfoc3_k$ = function () {
    return this.None_1;
  };
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_24;
  function Companion_getInstance_33() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_33();
    this.scaleX_1 = scaleX;
    this.skewX_1 = skewX;
  }
  TextGeometricTransform.prototype._get_scaleX__4196231293_1ms96r_k$ = function () {
    unreachableDeclarationLog();
    return this.scaleX_1;
  };
  TextGeometricTransform.prototype._get_skewX__3606563075_bduw3h_k$ = function () {
    unreachableDeclarationLog();
    return this.skewX_1;
  };
  TextGeometricTransform.prototype.copy_138fzp_k$ = function (scaleX, skewX) {
    unreachableDeclarationLog();
    return new TextGeometricTransform(scaleX, skewX);
  };
  TextGeometricTransform.prototype.copy$default_bbfa40_k$ = function (scaleX, skewX, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      scaleX = this.scaleX_1;
    if (!(($mask0 & 2) === 0))
      skewX = this.skewX_1;
    return this.copy_138fzp_k$(scaleX, skewX);
  };
  TextGeometricTransform.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    else {
    }
    if (!(this.scaleX_1 === other.scaleX_1))
      return false;
    if (!(this.skewX_1 === other.skewX_1))
      return false;
    return true;
  };
  TextGeometricTransform.prototype.hashCode = function () {
    var result = getNumberHashCode(this.scaleX_1);
    result = imul(31, result) + getNumberHashCode(this.skewX_1) | 0;
    return result;
  };
  TextGeometricTransform.prototype.toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.scaleX_1 + ', skewX=' + this.skewX_1 + ')';
  };
  TextGeometricTransform.$metadata$ = {
    simpleName: 'TextGeometricTransform',
    kind: 'class',
    interfaces: []
  };
  function TextIndent_init_$Init$(firstLine, restLine, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      firstLine = _get_sp__1413130958(0);
    if (!(($mask0 & 2) === 0))
      restLine = _get_sp__1413130958(0);
    TextIndent_0.call($this, firstLine, restLine);
    return $this;
  }
  function TextIndent_init_$Create$(firstLine, restLine, $mask0, $marker) {
    return TextIndent_init_$Init$(firstLine, restLine, $mask0, $marker, Object.create(TextIndent_0.prototype));
  }
  function Companion_25() {
    Companion_instance_25 = this;
    var tmp = this;
    tmp.None_1 = TextIndent_init_$Create$(null, null, 3, null);
  }
  Companion_25.prototype._get_None__775034355_ctfoc3_k$ = function () {
    return this.None_1;
  };
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_25;
  function Companion_getInstance_34() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_34();
    this.firstLine_1 = firstLine;
    this.restLine_1 = restLine;
  }
  TextIndent_0.prototype._get_firstLine__2808523789_r5lq8d_k$ = function () {
    return this.firstLine_1;
  };
  TextIndent_0.prototype._get_restLine__3898754787_ntk4gt_k$ = function () {
    return this.restLine_1;
  };
  TextIndent_0.prototype.copy_4au3wb_k$ = function (firstLine, restLine) {
    unreachableDeclarationLog();
    return new TextIndent_0(firstLine, restLine);
  };
  TextIndent_0.prototype.copy$default_b7ckb4_k$ = function (firstLine, restLine, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      firstLine = this.firstLine_1;
    if (!(($mask0 & 2) === 0))
      restLine = this.restLine_1;
    return this.copy_4au3wb_k$(firstLine, restLine);
  };
  TextIndent_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    else {
    }
    if (!equals(this.firstLine_1, other.firstLine_1))
      return false;
    if (!equals(this.restLine_1, other.restLine_1))
      return false;
    return true;
  };
  TextIndent_0.prototype.hashCode = function () {
    var result = TextUnit__hashCode_impl_2674772001(this.firstLine_1);
    result = imul(31, result) + TextUnit__hashCode_impl_2674772001(this.restLine_1) | 0;
    return result;
  };
  TextIndent_0.prototype.toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.firstLine_1) + ', restLine=' + new TextUnit(this.restLine_1) + ')';
  };
  TextIndent_0.$metadata$ = {
    simpleName: 'TextIndent',
    kind: 'class',
    interfaces: []
  };
  function _TextOverflow___init__impl__1470450254(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__1925615142(this_0) {
    return this_0;
  }
  function TextOverflow__toString_impl_61772978(this_0) {
    var tmp0_subject = this_0;
    return tmp0_subject === Companion_getInstance_35().Clip_1 ? 'Clip' : tmp0_subject === Companion_getInstance_35().Ellipsis_1 ? 'Ellipsis' : tmp0_subject === Companion_getInstance_35().Visible_1 ? 'Visible' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.Clip_1 = _TextOverflow___init__impl__1470450254(1);
    this.Ellipsis_1 = _TextOverflow___init__impl__1470450254(2);
    this.Visible_1 = _TextOverflow___init__impl__1470450254(3);
  }
  Companion_26.prototype._get_Clip__764781787_iwu6r1_k$ = function () {
    return this.Clip_1;
  };
  Companion_26.prototype._get_Ellipsis__745658618_zi7du4_k$ = function () {
    return this.Ellipsis_1;
  };
  Companion_26.prototype._get_Visible__3774799103_btm3td_k$ = function () {
    unreachableDeclarationLog();
    return this.Visible_1;
  };
  Companion_26.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_26;
  function Companion_getInstance_35() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function TextOverflow__hashCode_impl_3041325155(this_0) {
    return this_0;
  }
  function TextOverflow__equals_impl_1184007039(this_0, other) {
    if (!(other instanceof TextOverflow))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TextOverflow ? other.value_1 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_35();
    this.value_1 = value;
  }
  TextOverflow.prototype.toString = function () {
    return TextOverflow__toString_impl_61772978(this.value_1);
  };
  TextOverflow.prototype.hashCode = function () {
    return TextOverflow__hashCode_impl_3041325155(this.value_1);
  };
  TextOverflow.prototype.equals = function (other) {
    return TextOverflow__equals_impl_1184007039(this.value_1, other);
  };
  TextOverflow.$metadata$ = {
    simpleName: 'TextOverflow',
    kind: 'class',
    interfaces: []
  };
  function appendPartOfCharArray(_this__1828080292, charArray, offset, len) {
    unreachableDeclarationLog();
    var inductionVariable = offset;
    var last = offset + len | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__1828080292.append_t8oh9e_k$(charArray[i]);
        Unit_getInstance();
      }
       while (inductionVariable < last);
  }
  function createPlatformLocaleDelegate() {
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale(locale) {
    this.locale_1 = locale;
  }
  JsLocale.prototype._get_locale__2623749105_rn007j_k$ = function () {
    unreachableDeclarationLog();
    return this.locale_1;
  };
  JsLocale.prototype._get_language__3000162163_lew619_k$ = function () {
    unreachableDeclarationLog();
    return ensureNotNull(this.locale_1.languageCode);
  };
  JsLocale.prototype._get_script__4211853216_1dhf8g_k$ = function () {
    unreachableDeclarationLog();
    return ensureNotNull(this.locale_1.scriptCode);
  };
  JsLocale.prototype._get_region__3371447959_f9u82x_k$ = function () {
    unreachableDeclarationLog();
    return ensureNotNull(this.locale_1.countryCode);
  };
  JsLocale.prototype.toLanguageTag_xneel5_k$ = function () {
    throw new NotImplementedError('An operation is not implemented: implement native toLanguageTag');
  };
  JsLocale.$metadata$ = {
    simpleName: 'JsLocale',
    kind: 'class',
    interfaces: [PlatformLocale]
  };
  function createPlatformLocaleDelegate$1() {
  }
  createPlatformLocaleDelegate$1.prototype._get_current__2701413560_qcrdxk_k$ = function () {
    return listOf_0(new JsLocale(new Object()));
  };
  createPlatformLocaleDelegate$1.prototype.parseLanguageTag_fhwnvy_k$ = function (languageTag) {
    unreachableDeclarationLog();
    return new JsLocale(new Object());
  };
  createPlatformLocaleDelegate$1.$metadata$ = {
    kind: 'class',
    interfaces: [PlatformLocaleDelegate]
  };
  function _get_GenericFontFamiliesMapping__832234341() {
    init_properties_JsFont_js_kt_1412272853();
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = GenericFontFamiliesMapping$factory();
      tmp$ret$0 = GenericFontFamiliesMapping$delegate._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  var GenericFontFamiliesMapping$delegate;
  function _get_typefacesCache__383216805() {
    unreachableDeclarationLog();
    init_properties_JsFont_js_kt_1412272853();
    return typefacesCache;
  }
  var typefacesCache;
  function Platform$Companion$Current$delegate$lambda() {
    return function () {
      println('TODO: selecting MacOS unconditionally');
      return Platform_MacOS_getInstance();
    };
  }
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_Unknown_instance;
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    tmp.Current$delegate_1 = lazy_0(Platform$Companion$Current$delegate$lambda());
  }
  Companion_27.prototype._get_Current__2766057688_pa9u7c_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = Current$factory();
      tmp$ret$0 = this.Current$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_27.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_27;
  function Companion_getInstance_36() {
    Platform_initEntries();
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function values_1() {
    unreachableDeclarationLog();
    return [Platform_Linux_getInstance(), Platform_Windows_getInstance(), Platform_MacOS_getInstance(), Platform_Unknown_getInstance()];
  }
  function valueOf_1(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'Linux':
        return Platform_Linux_getInstance();
      case 'Windows':
        return Platform_Windows_getInstance();
      case 'MacOS':
        return Platform_MacOS_getInstance();
      case 'Unknown':
        return Platform_Unknown_getInstance();
      default:
        Platform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Linux_instance = new Platform('Linux', 0);
    Platform_Windows_instance = new Platform('Windows', 1);
    Platform_MacOS_instance = new Platform('MacOS', 2);
    Platform_Unknown_instance = new Platform('Unknown', 3);
    Companion_getInstance_36();
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Platform.$metadata$ = {
    simpleName: 'Platform',
    kind: 'class',
    interfaces: []
  };
  function loadFromTypefacesCache(font) {
    init_properties_JsFont_js_kt_1412272853();
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    } else {
    }
    var tmp0_subject = font;
    var tmp;
    if (tmp0_subject instanceof LoadedFont) {
      var tmp_0 = Companion_getInstance_4();
      var tmp_1 = Companion_getInstance_5();
      var tmp_2 = font._get_data__794940385_d5abxd_k$();
      var tmp_3 = tmp_1.makeFromBytes$default_mgrzan_k$(tmp_2, 0, 0, 6, null);
      tmp = tmp_0.makeFromData$default_gyxsbd_k$(tmp_3, 0, 2, null);
    } else {
      {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    return function () {
      var tmp0_subject = Companion_getInstance_36()._get_Current__2766057688_pa9u7c_k$();
      var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
      var tmp;
      switch (tmp0) {
        case 1:
          tmp = mapOf([to(Companion_getInstance_13()._get_SansSerif__224362247_3pkv0n_k$()._get_name__804168992_das4rk_k$(), listOf_0('Arial')), to(Companion_getInstance_13()._get_Serif__2685263380_qmdjho_k$()._get_name__804168992_das4rk_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_13()._get_Monospace__3539616462_chpsfm_k$()._get_name__804168992_das4rk_k$(), listOf_0('Consolas')), to(Companion_getInstance_13()._get_Cursive__2767107596_p9nc38_k$()._get_name__804168992_das4rk_k$(), listOf_0('Comic Sans MS'))]);
          break;
        case 2:
          tmp = mapOf([to(Companion_getInstance_13()._get_SansSerif__224362247_3pkv0n_k$()._get_name__804168992_das4rk_k$(), listOf(['Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_13()._get_Serif__2685263380_qmdjho_k$()._get_name__804168992_das4rk_k$(), listOf_0('Times')), to(Companion_getInstance_13()._get_Monospace__3539616462_chpsfm_k$()._get_name__804168992_das4rk_k$(), listOf_0('Courier')), to(Companion_getInstance_13()._get_Cursive__2767107596_p9nc38_k$()._get_name__804168992_das4rk_k$(), listOf_0('Apple Chancery'))]);
          break;
        case 0:
          tmp = mapOf([to(Companion_getInstance_13()._get_SansSerif__224362247_3pkv0n_k$()._get_name__804168992_das4rk_k$(), listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_13()._get_Serif__2685263380_qmdjho_k$()._get_name__804168992_das4rk_k$(), listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_13()._get_Monospace__3539616462_chpsfm_k$()._get_name__804168992_das4rk_k$(), listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_13()._get_Cursive__2767107596_p9nc38_k$()._get_name__804168992_das4rk_k$(), listOf_0('Comic Sans MS'))]);
          break;
        case 3:
          tmp = mapOf([to(Companion_getInstance_13()._get_SansSerif__224362247_3pkv0n_k$()._get_name__804168992_das4rk_k$(), listOf_0('Arial')), to(Companion_getInstance_13()._get_Serif__2685263380_qmdjho_k$()._get_name__804168992_das4rk_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_13()._get_Monospace__3539616462_chpsfm_k$()._get_name__804168992_das4rk_k$(), listOf_0('Consolas')), to(Companion_getInstance_13()._get_Cursive__2767107596_p9nc38_k$()._get_name__804168992_das4rk_k$(), listOf_0('Comic Sans MS'))]);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function typefacesCache$1() {
  }
  typefacesCache$1.prototype.get_eczep_k$ = function (key, loader) {
    unreachableDeclarationLog();
    throw new NotImplementedError('An operation is not implemented: implement js typefacesCache');
  };
  typefacesCache$1.prototype.get_7qedx8_k$ = function (key, loader) {
    unreachableDeclarationLog();
    return this.get_eczep_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE(), loader);
  };
  typefacesCache$1.$metadata$ = {
    kind: 'class',
    interfaces: [Cache]
  };
  function Platform_Linux_getInstance() {
    unreachableDeclarationLog();
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    unreachableDeclarationLog();
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_Unknown_getInstance() {
    unreachableDeclarationLog();
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return _get_GenericFontFamiliesMapping__832234341();
    }, null);
  }
  function Current$factory() {
    return getPropertyCallableRef('Current', 1, KProperty1, function (receiver) {
      return receiver._get_Current__2766057688_pa9u7c_k$();
    }, null);
  }
  var properties_initialized_JsFont_js_kt_2428573745;
  function init_properties_JsFont_js_kt_1412272853() {
    if (!properties_initialized_JsFont_js_kt_2428573745) {
      properties_initialized_JsFont_js_kt_2428573745 = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda());
      typefacesCache = new typefacesCache$1();
    }
  }
  function contentBasedTextDirection(_this__1828080292) {
    return null;
  }
  function ActualStringDelegate() {
    unreachableDeclarationLog();
    return new NativeStringDelegate();
  }
  function NativeStringDelegate() {
    unreachableDeclarationLog();
  }
  NativeStringDelegate.prototype.toUpperCase_m677z5_k$ = function (string, locale) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = string;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toUpperCase();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NativeStringDelegate.prototype.toLowerCase_gkzuzk_k$ = function (string, locale) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = string;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NativeStringDelegate.prototype.capitalize_4m08za_k$ = function (string, locale) {
    unreachableDeclarationLog();
    return capitalize(string);
  };
  NativeStringDelegate.prototype.decapitalize_81f6p5_k$ = function (string, locale) {
    unreachableDeclarationLog();
    return decapitalize(string);
  };
  NativeStringDelegate.$metadata$ = {
    simpleName: 'NativeStringDelegate',
    kind: 'class',
    interfaces: [PlatformStringDelegate]
  };
  function PlatformFont() {
    unreachableDeclarationLog();
  }
  PlatformFont.prototype._get_cacheKey__927973358_fchotq_k$ = function () {
    println('TODO: implement proper js PlatformFont.cacheKey');
    return this._get_identity__1568188109_pxnpot_k$();
  };
  PlatformFont.$metadata$ = {
    simpleName: 'PlatformFont',
    kind: 'class',
    interfaces: [Font]
  };
  function WeakHashMap() {
  }
  WeakHashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype._get_values__2516944425_tel787_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.containsValue_5viga1_k$ = function (key) {
    unreachableDeclarationLog();
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.clear_1keqml_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.clear_j9y8zo_k$ = function () {
    return this.clear_1keqml_k$();
  };
  WeakHashMap.prototype.get_1mhr4y_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.putAll_mee1c3_k$ = function (from) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.prototype.isEmpty_y1axqb_k$ = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  WeakHashMap.$metadata$ = {
    simpleName: 'WeakHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function getOrPut(_this__1828080292, key, default_0) {
    return default_0(key);
  }
  function Cache() {
    unreachableDeclarationLog();
  }
  Cache.$metadata$ = {
    simpleName: 'Cache',
    kind: 'interface',
    interfaces: []
  };
  function Companion_28() {
    unreachableDeclarationLog();
    Companion_instance_28 = this;
    this.Default_1 = new PlatformParagraphStyle();
  }
  Companion_28.prototype._get_Default__2834936080_o59jao_k$ = function () {
    unreachableDeclarationLog();
    return this.Default_1;
  };
  Companion_28.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_28;
  function Companion_getInstance_37() {
    unreachableDeclarationLog();
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function PlatformParagraphStyle() {
    unreachableDeclarationLog();
    Companion_getInstance_37();
  }
  PlatformParagraphStyle.prototype.merge_phrebc_k$ = function (other) {
    unreachableDeclarationLog();
    return this;
  };
  PlatformParagraphStyle.prototype.lerp_v5ixp4_k$ = function (stop, fraction) {
    unreachableDeclarationLog();
    return this;
  };
  PlatformParagraphStyle.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    else {
    }
    return true;
  };
  PlatformParagraphStyle.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return getObjectHashCode(this);
  };
  PlatformParagraphStyle.$metadata$ = {
    simpleName: 'PlatformParagraphStyle',
    kind: 'class',
    interfaces: []
  };
  function Companion_29() {
    unreachableDeclarationLog();
    Companion_instance_29 = this;
    this.Default_1 = new PlatformSpanStyle();
  }
  Companion_29.prototype._get_Default__2834936080_o59jao_k$ = function () {
    unreachableDeclarationLog();
    return this.Default_1;
  };
  Companion_29.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_29;
  function Companion_getInstance_38() {
    unreachableDeclarationLog();
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function PlatformSpanStyle() {
    unreachableDeclarationLog();
    Companion_getInstance_38();
  }
  PlatformSpanStyle.prototype.merge_o4jtak_k$ = function (other) {
    unreachableDeclarationLog();
    return this;
  };
  PlatformSpanStyle.prototype.lerp_kkxw1m_k$ = function (stop, fraction) {
    unreachableDeclarationLog();
    return this;
  };
  PlatformSpanStyle.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    else {
    }
    return true;
  };
  PlatformSpanStyle.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return getObjectHashCode(this);
  };
  PlatformSpanStyle.$metadata$ = {
    simpleName: 'PlatformSpanStyle',
    kind: 'class',
    interfaces: []
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.spanStyle_1 = spanStyle;
    $this.paragraphStyle_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, Object.create(PlatformTextStyle.prototype));
  }
  PlatformTextStyle.prototype._get_spanStyle__4168634026_237rdi_k$ = function () {
    return this.spanStyle_1;
  };
  PlatformTextStyle.prototype._get_paragraphStyle__860251528_e866bs_k$ = function () {
    return this.paragraphStyle_1;
  };
  PlatformTextStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    else {
    }
    if (!equals(this.paragraphStyle_1, other.paragraphStyle_1))
      return false;
    if (!equals(this.spanStyle_1, other.spanStyle_1))
      return false;
    return true;
  };
  PlatformTextStyle.prototype.hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
  }
  PlatformTextStyle.$metadata$ = {
    simpleName: 'PlatformTextStyle',
    kind: 'class',
    interfaces: []
  };
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontResourceLoader) {
    unreachableDeclarationLog();
    if (!(fontResourceLoader instanceof FontLoader))
      throw IllegalArgumentException_init_$Create$('Unexpected type: ' + fontResourceLoader + ' must be FontLoader');
    else {
    }
    return fontResourceLoader._get_fontFamilyResolver__2595451122_s3uj2m_k$();
  }
  function createFontFamilyResolver_0() {
    var tmp = SkiaFontLoader_init_$Create$(null, 1, null);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function createFontFamilyResolver_1(fontCache) {
    var tmp = new SkiaFontLoader(fontCache);
    return FontFamilyResolverImpl_init_$Create$(tmp, null, null, null, null, 30, null);
  }
  function synthesizeTypeface(_this__1828080292, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  PlatformFontFamilyTypefaceAdapter.prototype.resolve_wbzvw9_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest._get_fontFamily__3097773656_jss0iw_k$();
    if (tmp instanceof FontListFontFamily)
      return null;
    else {
    }
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest._get_fontFamily__3097773656_jss0iw_k$();
    var result = skiaFontLoader.loadPlatformTypes_tevpy8_k$(tmp0_elvis_lhs == null ? Companion_getInstance_13()._get_Default__2834936080_o59jao_k$() : tmp0_elvis_lhs, typefaceRequest._get_fontWeight__1116225988_igklhg_k$(), typefaceRequest._get_fontStyle__2152582127_690388_k$());
    return Immutable_init_$Create$(result, false, 2, null);
  };
  PlatformFontFamilyTypefaceAdapter.$metadata$ = {
    simpleName: 'PlatformFontFamilyTypefaceAdapter',
    kind: 'class',
    interfaces: [FontFamilyTypefaceAdapter]
  };
  function SkiaFontLoader_init_$Init$(fontCache, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      fontCache = new FontCache();
    SkiaFontLoader.call($this, fontCache);
    return $this;
  }
  function SkiaFontLoader_init_$Create$(fontCache, $mask0, $marker) {
    return SkiaFontLoader_init_$Init$(fontCache, $mask0, $marker, Object.create(SkiaFontLoader.prototype));
  }
  function _get_fontCache__1676309566($this) {
    unreachableDeclarationLog();
    return $this.fontCache_1;
  }
  function SkiaFontLoader(fontCache) {
    this.fontCache_1 = fontCache;
    this.cacheKey_1 = this.fontCache_1;
  }
  SkiaFontLoader.prototype._get_fontCollection__1374858078_mqjza6_k$ = function () {
    return this.fontCache_1._get_fonts__3238344269_hh33jn_k$();
  };
  SkiaFontLoader.prototype.loadBlocking_w5fd92_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font._get_loadingStrategy__881820962_lu88tl_k$() === Companion_getInstance_16()._get_OptionalLocal__2433596006_4nd0j1_k$())) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    } else {
    }
    var tmp0_subject = font._get_loadingStrategy__881820962_lu88tl_k$();
    var tmp;
    if (tmp0_subject === Companion_getInstance_16()._get_Blocking__63912470_x0c8df_k$()) {
      tmp = this.fontCache_1.load_oz8zua_k$(font);
    } else if (tmp0_subject === Companion_getInstance_16()._get_OptionalLocal__2433596006_4nd0j1_k$()) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp_0;
          try {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_success_0_1 = Companion_getInstance_3();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = this.fontCache_1.load_oz8zua_k$(font);
                break $l$block;
              }
              var tmp1_success_0_2 = tmp$ret$0;
              tmp$ret$1 = _Result___init__impl__2241242780(tmp1_success_0_2);
              break $l$block_0;
            }
            tmp_0 = tmp$ret$1;
          } catch ($p) {
            var tmp_1;
            if ($p instanceof Error) {
              var tmp$ret$2;
              $l$block_1: {
                var tmp2_failure_0_4 = Companion_getInstance_3();
                tmp$ret$2 = _Result___init__impl__2241242780(createFailure($p));
                break $l$block_1;
              }
              tmp_1 = tmp$ret$2;
            } else {
              {
                throw $p;
              }
            }
            tmp_0 = tmp_1;
          }
          tmp$ret$3 = tmp_0;
          break $l$block_2;
        }
        var tmp0_getOrNull_0 = tmp$ret$3;
        var tmp_2;
        if (_Result___get_isFailure__impl__3103244073(tmp0_getOrNull_0)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__3597185688(tmp0_getOrNull_0);
          tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        }
        tmp$ret$4 = tmp_2;
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else if (tmp0_subject === Companion_getInstance_16()._get_Async__2183081205_vbacas_k$()) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font._get_loadingStrategy__881820962_lu88tl_k$()));
    }
    return tmp;
  };
  SkiaFontLoader.prototype.loadPlatformTypes_tevpy8_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.fontCache_1.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  SkiaFontLoader.prototype.loadPlatformTypes$default_2cpwir_k$ = function (fontFamily, fontWeight, fontStyle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$();
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
    return this.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  SkiaFontLoader.prototype.awaitLoad_hbev9p_k$ = function (font, $cont) {
    return this.loadBlocking_w5fd92_k$(font);
  };
  SkiaFontLoader.prototype.awaitLoad_kuymx_k$ = function (font, $cont) {
    return this.awaitLoad_hbev9p_k$(font, $cont);
  };
  SkiaFontLoader.prototype._get_cacheKey__927973358_fchotq_k$ = function () {
    return this.cacheKey_1;
  };
  SkiaFontLoader.$metadata$ = {
    simpleName: 'SkiaFontLoader',
    kind: 'class',
    interfaces: [PlatformFontLoader]
  };
  function _get_builder__695361238($this) {
    unreachableDeclarationLog();
    return $this.builder_1;
  }
  function _set_para__591403639($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.para_1 = _set____804775014;
  }
  function _get_para__806020715($this) {
    unreachableDeclarationLog();
    return $this.para_1;
  }
  function _set_width__1361038399($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.width_1 = _set____804775014;
  }
  function _get_width__3719200459($this) {
    unreachableDeclarationLog();
    return $this.width_1;
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    var tmp = this;
    tmp.builder_1 = ParagraphBuilder_init_$Create$(fontFamilyResolver, this.text_1, style, null, 0, spanStyles, placeholders, density, textDirection, 24, null);
    this.para_1 = this.builder_1.build_1k0s4u_k$();
    this.width_1 = -1.0;
  }
  ParagraphLayouter.prototype._get_text__809840318_de5ose_k$ = function () {
    unreachableDeclarationLog();
    return this.text_1;
  };
  ParagraphLayouter.prototype._get_defaultHeight__3332221705_fx6z93_k$ = function () {
    unreachableDeclarationLog();
    return this.builder_1._get_defaultHeight__3332221705_fx6z93_k$();
  };
  ParagraphLayouter.prototype._get_defaultFont__980693345_g7vntt_k$ = function () {
    return this.builder_1._get_defaultFont__980693345_g7vntt_k$();
  };
  ParagraphLayouter.prototype._get_paragraphStyle__860251528_e866bs_k$ = function () {
    return this.builder_1._get_paragraphStyle__860251528_e866bs_k$();
  };
  ParagraphLayouter.prototype.layoutParagraph_8yeuwa_k$ = function (width, maxLines, ellipsis, color, shadow, textDecoration) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !equals(_Color___get_value__impl__103472842(color), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = color;
      } else {
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = this.builder_1._get_textStyle__544302669_902aml_k$()._get_color__3152392398_60nqpf_k$();
            break $l$block_0;
          }
          tmp = tmp$ret$1;
        }
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    var actualColor = tmp$ret$2;
    if ((((!(this.builder_1._get_maxLines__694126384_bh9jcg_k$() === maxLines) ? true : !(this.builder_1._get_ellipsis__3036657946_kt5xpi_k$() === ellipsis)) ? true : !equals(this.builder_1._get_textStyle__544302669_902aml_k$()._get_color__3152392398_60nqpf_k$(), actualColor)) ? true : !equals(this.builder_1._get_textStyle__544302669_902aml_k$()._get_shadow__44181995_qaz1n_k$(), shadow)) ? true : !equals(this.builder_1._get_textStyle__544302669_902aml_k$()._get_textDecoration__1911559150_vm3cha_k$(), textDecoration)) {
      this.width_1 = width;
      this.builder_1._set_maxLines__1468257596_j4ehos_k$(maxLines);
      this.builder_1._set_ellipsis__3810789158_8siuj8_k$(ellipsis);
      var tmp_0 = this.builder_1._get_textStyle__544302669_902aml_k$();
      this.builder_1._set_textStyle__3067533761_y4erp3_k$(tmp_0.copy$default_m6tbq3_k$(actualColor, null, null, null, null, null, null, null, null, null, null, null, textDecoration, shadow, null, null, null, null, 249854, null));
      this.para_1 = this.builder_1.build_1k0s4u_k$();
      this.para_1.layout_foik1o_k$(width);
      Unit_getInstance();
    } else if (!(this.width_1 === width)) {
      this.width_1 = width;
      this.para_1.layout_foik1o_k$(width);
      Unit_getInstance();
    }
    return this.para_1;
  };
  ParagraphLayouter.prototype.layoutParagraph$default_batlz_k$ = function (width, maxLines, ellipsis, color, shadow, textDecoration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = this.width_1;
    if (!(($mask0 & 2) === 0))
      maxLines = this.builder_1._get_maxLines__694126384_bh9jcg_k$();
    if (!(($mask0 & 4) === 0))
      ellipsis = this.builder_1._get_ellipsis__3036657946_kt5xpi_k$();
    if (!(($mask0 & 8) === 0))
      color = this.builder_1._get_textStyle__544302669_902aml_k$()._get_color__3152392398_60nqpf_k$();
    if (!(($mask0 & 16) === 0))
      shadow = this.builder_1._get_textStyle__544302669_902aml_k$()._get_shadow__44181995_qaz1n_k$();
    if (!(($mask0 & 32) === 0))
      textDecoration = this.builder_1._get_textStyle__544302669_902aml_k$()._get_textDecoration__1911559150_vm3cha_k$();
    return this.layoutParagraph_8yeuwa_k$(width, maxLines, ellipsis, color, shadow, textDecoration);
  };
  ParagraphLayouter.$metadata$ = {
    simpleName: 'ParagraphLayouter',
    kind: 'class',
    interfaces: []
  };
  function FontLoadResult(typeface, aliases) {
    this.typeface_1 = typeface;
    this.aliases_1 = aliases;
  }
  FontLoadResult.prototype._get_typeface__2007095828_x6z11w_k$ = function () {
    return this.typeface_1;
  };
  FontLoadResult.prototype._get_aliases__3840207827_7ir2nh_k$ = function () {
    return this.aliases_1;
  };
  FontLoadResult.$metadata$ = {
    simpleName: 'FontLoadResult',
    kind: 'class',
    interfaces: []
  };
  function _get_fontProvider__1360307691($this) {
    unreachableDeclarationLog();
    return $this.fontProvider_1;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = _get_GenericFontFamiliesMapping__832234341().get_1mhr4y_k$(generic._get_name__804168992_das4rk_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error_0 = 'Unknown generic font family ' + generic._get_name__804168992_das4rk_k$();
      throw IllegalStateException_init_$Create$(toString(tmp0_error_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_registered__275382857($this) {
    unreachableDeclarationLog();
    return $this.registered_1;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.registered_1.contains_2ehdt1_k$(key)) {
      $this.fontProvider_1.registerTypeface_apdxu9_k$(typeface, key);
      Unit_getInstance();
      $this.registered_1.add_1j60pz_k$(key);
      Unit_getInstance();
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp0_subject = fontFamily;
    var tmp;
    if (tmp0_subject instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (tmp0_subject instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily._get_typeface__2007095828_x6z11w_k$();
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.alias_1;
        var alias = tmp1_elvis_lhs == null ? typeface.nativeTypeface_1._get_familyName__1394039388_n1z3oc_k$() : tmp1_elvis_lhs;
        if (!$this.registered_1.contains_2ehdt1_k$(alias)) {
          $this.fontProvider_1.registerTypeface_apdxu9_k$(typeface.nativeTypeface_1, alias);
          Unit_getInstance();
          $this.registered_1.add_1j60pz_k$(alias);
          Unit_getInstance();
        }
        tmp = listOf_0(alias);
      } else {
        if (tmp0_subject instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(tmp0_subject, Companion_getInstance_13()._get_Default__2834936080_o59jao_k$())) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_13()._get_SansSerif__224362247_3pkv0n_k$());
          } else {
            {
              throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
            }
          }
        }
      }
    }
    return tmp;
  }
  function FontCache() {
    this.fonts_1 = FontCollection_init_$Create$();
    this.fontProvider_1 = new TypefaceFontProvider();
    this.fonts_1.setDefaultFontManager_qraotu_k$(Companion_getInstance_6()._get_default__2770291952_p7r30w_k$());
    Unit_getInstance();
    this.fonts_1.setAssetFontManager_nxzdib_k$(this.fontProvider_1);
    Unit_getInstance();
    this.registered_1 = HashSet_init_$Create$_0();
  }
  FontCache.prototype._get_fonts__3238344269_hh33jn_k$ = function () {
    return this.fonts_1;
  };
  FontCache.prototype.load_oz8zua_k$ = function (font) {
    var typeface = loadFromTypefacesCache(font);
    ensureRegistered(this, typeface, font._get_cacheKey__927973358_fchotq_k$());
    return new FontLoadResult(typeface, listOf_0(font._get_cacheKey__927973358_fchotq_k$()));
  };
  FontCache.prototype.loadPlatformTypes_tevpy8_k$ = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).withWeight_dafbdv_k$(fontWeight._get_weight__3515779987_cvworx_k$());
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray(aliases);
      break $l$block;
    }
    return new FontLoadResult(first_1(this.fonts_1.findTypefaces_6egsg0_k$(tmp$ret$0, style)), aliases);
  };
  FontCache.prototype.loadPlatformTypes$default_2cpwir_k$ = function (fontFamily, fontWeight, fontStyle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      fontWeight = Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$();
    if (!(($mask0 & 4) === 0))
      fontStyle = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
    return this.loadPlatformTypes_tevpy8_k$(fontFamily, fontWeight, fontStyle);
  };
  FontCache.$metadata$ = {
    simpleName: 'FontCache',
    kind: 'class',
    interfaces: []
  };
  function SkiaBackedTypeface(alias, nativeTypeface) {
    unreachableDeclarationLog();
    this.alias_1 = alias;
    this.nativeTypeface_1 = nativeTypeface;
    this.fontFamily_1 = null;
  }
  SkiaBackedTypeface.prototype._get_alias__3092260737_jw26bj_k$ = function () {
    unreachableDeclarationLog();
    return this.alias_1;
  };
  SkiaBackedTypeface.prototype._get_nativeTypeface__3495441917_d80lqb_k$ = function () {
    unreachableDeclarationLog();
    return this.nativeTypeface_1;
  };
  SkiaBackedTypeface.prototype._get_fontFamily__3097773656_jss0iw_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamily_1;
  };
  SkiaBackedTypeface.$metadata$ = {
    simpleName: 'SkiaBackedTypeface',
    kind: 'class',
    interfaces: [Typeface]
  };
  function LoadedFont(identity, data, weight, style) {
    unreachableDeclarationLog();
    PlatformFont.call(this);
    this.identity_1 = identity;
    this.data_1 = data;
    this.weight_1 = weight;
    this.style_1 = style;
    this.loadingStrategy_1 = Companion_getInstance_16()._get_Blocking__63912470_x0c8df_k$();
  }
  LoadedFont.prototype._get_identity__1568188109_pxnpot_k$ = function () {
    unreachableDeclarationLog();
    return this.identity_1;
  };
  LoadedFont.prototype._get_data__794940385_d5abxd_k$ = function () {
    return this.data_1;
  };
  LoadedFont.prototype._get_weight__3515779987_cvworx_k$ = function () {
    unreachableDeclarationLog();
    return this.weight_1;
  };
  LoadedFont.prototype._get_style__3615460416_ope3tj_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  LoadedFont.prototype._get_loadingStrategy__881820962_lu88tl_k$ = function () {
    unreachableDeclarationLog();
    return this.loadingStrategy_1;
  };
  LoadedFont.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof LoadedFont))
      return false;
    else {
    }
    if (!(this.identity_1 === other.identity_1))
      return false;
    if (!contentEquals(this.data_1, other.data_1))
      return false;
    if (!this.weight_1.equals(other.weight_1))
      return false;
    if (!(this.style_1 === other.style_1))
      return false;
    return true;
  };
  LoadedFont.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = getStringHashCode(this.identity_1);
    result = imul(31, result) + contentHashCode(this.data_1) | 0;
    result = imul(31, result) + this.weight_1.hashCode() | 0;
    result = imul(31, result) + FontStyle__hashCode_impl_467747312(this.style_1) | 0;
    return result;
  };
  LoadedFont.prototype.toString = function () {
    unreachableDeclarationLog();
    return "LoadedFont(identity='" + this.identity_1 + "', weight=" + this.weight_1 + ', style=' + new FontStyle(this.style_1) + ')';
  };
  LoadedFont.$metadata$ = {
    simpleName: 'LoadedFont',
    kind: 'class',
    interfaces: []
  };
  function FontLoader() {
    this.fontCache_1 = new FontCache();
    this.fontFamilyResolver_1 = createFontFamilyResolver_1(this.fontCache_1);
  }
  FontLoader.prototype._get_fontCache__1676309566_rq14qm_k$ = function () {
    unreachableDeclarationLog();
    return this.fontCache_1;
  };
  FontLoader.prototype._get_fontFamilyResolver__2595451122_s3uj2m_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamilyResolver_1;
  };
  FontLoader.prototype.load_oj7ae9_k$ = function (font) {
    unreachableDeclarationLog();
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    } else {
    }
    return ensureNotNull(this.fontCache_1.load_oz8zua_k$(font).typeface_1);
  };
  FontLoader.$metadata$ = {
    simpleName: 'FontLoader',
    kind: 'class',
    interfaces: [ResourceLoader]
  };
  function _get_DefaultFontSize__1734892544_0() {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function _get_skTextStylesCache__944186326() {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function toSkFontStyle(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp0_subject = _this__1828080292;
    return tmp0_subject === Companion_getInstance_17()._get_Italic__1767514811_bdcgyk_k$() ? Companion_getInstance_7()._get_ITALIC__820844251_dkpjh7_k$() : Companion_getInstance_7()._get_NORMAL__835971844_dtps04_k$();
  }
  function ComputedStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2048) === 0))
      background = Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$();
    ComputedStyle.call($this, color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
    return $this;
  }
  function ComputedStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker) {
    unreachableDeclarationLog();
    return ComputedStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $marker, Object.create(ComputedStyle.prototype));
  }
  function ComputedStyle_init_$Init$_0(density, spanStyle, $this) {
    var tmp = spanStyle._get_color__3152392398_60nqpf_k$();
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = density.toPx_x7oik4_k$(spanStyle._get_fontSize__4225531099_h9sa57_k$());
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = spanStyle._get_fontWeight__1116225988_igklhg_k$();
    var tmp_2 = spanStyle._get_fontStyle__2152582127_jc9dsp_k$();
    var tmp_3 = spanStyle._get_fontSynthesis__3907866988_7jz8cn_k$();
    var tmp_4 = spanStyle._get_fontFamily__3097773656_jss0iw_k$();
    var tmp_5 = spanStyle._get_fontFeatureSettings__455600871_7j93vr_k$();
    var tmp_6;
    if (_get_isUnspecified__892174020(spanStyle._get_letterSpacing__1544247092_ht41e4_k$())) {
      tmp_6 = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = density.toPx_x7oik4_k$(spanStyle._get_letterSpacing__1544247092_ht41e4_k$());
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp_6 = tmp$ret$3;
    }
    ComputedStyle.call($this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, spanStyle._get_baselineShift__487923508_6kauu1_k$(), spanStyle._get_textGeometricTransform__1727044563_sk8k43_k$(), spanStyle._get_localeList__8953203_5bwc3_k$(), spanStyle._get_background__4060324125_drprdq_k$(), spanStyle._get_textDecoration__1911559150_vm3cha_k$(), spanStyle._get_shadow__44181995_qaz1n_k$());
    return $this;
  }
  function ComputedStyle_init_$Create$_0(density, spanStyle) {
    return ComputedStyle_init_$Init$_0(density, spanStyle, Object.create(ComputedStyle.prototype));
  }
  function ComputedStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    this.color_1 = color;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
  }
  ComputedStyle.prototype._set_color__794230338_2k89d1_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.color_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_color__3152392398_60nqpf_k$ = function () {
    unreachableDeclarationLog();
    return this.color_1;
  };
  ComputedStyle.prototype._set_fontSize__704695015_gt8yy2_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontSize_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontSize__4225531099_15c9b9_k$ = function () {
    unreachableDeclarationLog();
    return this.fontSize_1;
  };
  ComputedStyle.prototype._set_fontWeight__2026978512_mfxtxb_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontWeight_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontWeight__1116225988_igklhg_k$ = function () {
    unreachableDeclarationLog();
    return this.fontWeight_1;
  };
  ComputedStyle.prototype._set_fontStyle__380845923_lajrb5_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontStyle_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontStyle__2152582127_jc9dsp_k$ = function () {
    unreachableDeclarationLog();
    return this.fontStyle_1;
  };
  ComputedStyle.prototype._set_fontSynthesis__532933344_y6jrxb_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontSynthesis_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontSynthesis__3907866988_7jz8cn_k$ = function () {
    unreachableDeclarationLog();
    return this.fontSynthesis_1;
  };
  ComputedStyle.prototype._set_fontFamily__4008526180_ufo68n_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontFamily_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontFamily__3097773656_jss0iw_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamily_1;
  };
  ComputedStyle.prototype._set_fontFeatureSettings__3946487131_dvryr0_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.fontFeatureSettings_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_fontFeatureSettings__455600871_7j93vr_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFeatureSettings_1;
  };
  ComputedStyle.prototype._set_letterSpacing__2464280744_xsabo8_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.letterSpacing_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_letterSpacing__1544247092_pjekok_k$ = function () {
    unreachableDeclarationLog();
    return this.letterSpacing_1;
  };
  ComputedStyle.prototype._set_baselineShift__1407957160_6ybjsv_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.baselineShift_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_baselineShift__487923508_6kauu1_k$ = function () {
    unreachableDeclarationLog();
    return this.baselineShift_1;
  };
  ComputedStyle.prototype._set_textGeometricTransform__381510879_4qrm1b_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.textGeometricTransform_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_textGeometricTransform__1727044563_sk8k43_k$ = function () {
    unreachableDeclarationLog();
    return this.textGeometricTransform_1;
  };
  ComputedStyle.prototype._set_localeList__919705727_xysnot_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.localeList_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_localeList__8953203_5bwc3_k$ = function () {
    unreachableDeclarationLog();
    return this.localeList_1;
  };
  ComputedStyle.prototype._set_background__676109353_wpixq_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.background_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_background__4060324125_drprdq_k$ = function () {
    unreachableDeclarationLog();
    return this.background_1;
  };
  ComputedStyle.prototype._set_textDecoration__367831290_kc53n3_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.textDecoration_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_textDecoration__1911559150_vm3cha_k$ = function () {
    unreachableDeclarationLog();
    return this.textDecoration_1;
  };
  ComputedStyle.prototype._set_shadow__4250569463_1imt3g_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.shadow_1 = _set____804775014;
  };
  ComputedStyle.prototype._get_shadow__44181995_qaz1n_k$ = function () {
    unreachableDeclarationLog();
    return this.shadow_1;
  };
  ComputedStyle.prototype.toSkTextStyle_9a1jf_k$ = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    if (!equals(this.color_1, Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$())) {
      res._set_color__794230338_kejnwy_k$(toArgb(this.color_1));
    }
    var tmp0_safe_receiver = this.fontStyle_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = res._set_fontStyle__380845923_8e9dtd_k$(toSkFontStyle(tmp0_safe_receiver));
          break $l$block;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this.textDecoration_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = res._set_decorationStyle__1824906692_1v2x4f_k$(toSkDecorationStyle(tmp1_safe_receiver, this.color_1));
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!equals(this.background_1, Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$())) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_also_0 = Paint_init_$Create$();
        {
        }
        {
          tmp0_also_0._set_color__794230338_kejnwy_k$(toArgb(this.background_1));
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      res._set_background__676109353_76js1i_k$(tmp$ret$2);
    }
    var tmp2_safe_receiver = this.fontWeight_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        tmp$ret$3 = res._set_fontStyle__380845923_8e9dtd_k$(res._get_fontStyle__2152582127_zfiqz5_k$().withWeight_dafbdv_k$(tmp2_safe_receiver._get_weight__3515779987_cvworx_k$()));
        break $l$block_2;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp3_safe_receiver = this.shadow_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      $l$block_4: {
        {
        }
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = res.addShadow_rsdpq6_k$(toSkShadow(tmp3_safe_receiver));
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
    }
    Unit_getInstance();
    var tmp4_safe_receiver = this.letterSpacing_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      $l$block_5: {
        {
        }
        tmp$ret$6 = res._set_letterSpacing__2464280744_o3o83v_k$(tmp4_safe_receiver);
        break $l$block_5;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    res._set_fontSize__704695015_gt8yy2_k$(this.fontSize_1);
    var tmp5_safe_receiver = this.fontFamily_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$8;
      $l$block_7: {
        {
        }
        var tmp0_elvis_lhs_3 = this.fontWeight_1;
        var tmp_0 = tmp0_elvis_lhs_3 == null ? Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$() : tmp0_elvis_lhs_3;
        var tmp1_elvis_lhs_4 = this.fontStyle_1;
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs_4;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
        } else {
          {
            tmp_1 = tmp1_elvis_lhs_4;
          }
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs_5 = this.fontSynthesis_1;
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs_5;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_18()._get_None__775034355_dxz6td_k$();
        } else {
          {
            tmp_4 = tmp2_elvis_lhs_5;
          }
        }
        var tmp_6 = fontFamilyResolver.resolve_3z78ru_k$(tmp5_safe_receiver, tmp_0, tmp_3, tmp_4)._get_value__3683422336_a43j40_k$();
        var resolved_2 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        var tmp$ret$7;
        $l$block_6: {
          var tmp0_toTypedArray_0_6 = resolved_2._get_aliases__3840207827_7ir2nh_k$();
          tmp$ret$7 = copyToArray(tmp0_toTypedArray_0_6);
          break $l$block_6;
        }
        tmp$ret$8 = res._set_fontFamilies__3902526214_x3pgbq_k$(tmp$ret$7);
        break $l$block_7;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp6_safe_receiver = this.baselineShift_1;
    var tmp_7 = tmp6_safe_receiver;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null)
      null;
    else {
      {
        var tmp$ret$9;
        $l$block_8: {
          {
          }
          var fontMetrics_2 = res._get_fontMetrics__320127645_5alg2l_k$();
          tmp$ret$9 = res._set_baselineShift__1407957160_wyp1it_k$(_BaselineShift___get_multiplier__impl__1601725628(tmp6_safe_receiver) * fontMetrics_2._get_ascent__1565781361_pw84mp_k$());
          break $l$block_8;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    return res;
  };
  ComputedStyle.prototype.merge_y90v2p_k$ = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.fontSize_1, other._get_fontSize__4225531099_h9sa57_k$());
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_isSpecified__0_2655876182 = other._get_color__3152392398_60nqpf_k$();
      tmp$ret$0 = !equals(_Color___get_value__impl__103472842(tmp0__get_isSpecified__0_2655876182), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
      break $l$block;
    }
    if (tmp$ret$0) {
      this.color_1 = other._get_color__3152392398_60nqpf_k$();
    } else {
    }
    var tmp0_safe_receiver = other._get_fontFamily__3097773656_jss0iw_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        this.fontFamily_1 = tmp0_safe_receiver;
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    this.fontSize_1 = fontSize;
    var tmp1_safe_receiver = other._get_fontWeight__1116225988_igklhg_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        this.fontWeight_1 = tmp1_safe_receiver;
        tmp$ret$2 = Unit_getInstance();
        break $l$block_1;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp2_safe_receiver = other._get_fontStyle__2152582127_jc9dsp_k$();
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      {
        var tmp$ret$3;
        $l$block_2: {
          {
          }
          this.fontStyle_1 = tmp2_safe_receiver;
          tmp$ret$3 = Unit_getInstance();
          break $l$block_2;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp3_safe_receiver = other._get_fontSynthesis__3907866988_7jz8cn_k$();
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      {
        var tmp$ret$4;
        $l$block_3: {
          {
          }
          this.fontSynthesis_1 = tmp3_safe_receiver;
          tmp$ret$4 = Unit_getInstance();
          break $l$block_3;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp4_safe_receiver = other._get_fontFeatureSettings__455600871_7j93vr_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      $l$block_4: {
        {
        }
        this.fontFeatureSettings_1 = tmp4_safe_receiver;
        tmp$ret$5 = Unit_getInstance();
        break $l$block_4;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!_get_isUnspecified__892174020(other._get_letterSpacing__1544247092_ht41e4_k$())) {
      if (_TextUnit___get_isEm__impl__3400122295(other._get_letterSpacing__1544247092_ht41e4_k$()))
        this.letterSpacing_1 = fontSize * _TextUnit___get_value__impl__1070471396(other._get_letterSpacing__1544247092_ht41e4_k$());
      else if (_TextUnit___get_isSp__impl__504060002(other._get_letterSpacing__1544247092_ht41e4_k$())) {
        var tmp_1 = this;
        var tmp$ret$7;
        $l$block_6: {
          {
          }
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = density.toPx_x7oik4_k$(other._get_letterSpacing__1544247092_ht41e4_k$());
            break $l$block_5;
          }
          tmp$ret$7 = tmp$ret$6;
          break $l$block_6;
        }
        tmp_1.letterSpacing_1 = tmp$ret$7;
      } else
        throw UnsupportedOperationException_init_$Create$_0();
    }
    var tmp5_safe_receiver = other._get_baselineShift__487923508_6kauu1_k$();
    var tmp_2 = tmp5_safe_receiver;
    if ((tmp_2 == null ? null : new BaselineShift(tmp_2)) == null)
      null;
    else {
      {
        var tmp$ret$8;
        $l$block_7: {
          {
          }
          this.baselineShift_1 = tmp5_safe_receiver;
          tmp$ret$8 = Unit_getInstance();
          break $l$block_7;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp6_safe_receiver = other._get_textGeometricTransform__1727044563_sk8k43_k$();
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      $l$block_8: {
        {
        }
        this.textGeometricTransform_1 = tmp6_safe_receiver;
        tmp$ret$9 = Unit_getInstance();
        break $l$block_8;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp7_safe_receiver = other._get_localeList__8953203_5bwc3_k$();
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      $l$block_9: {
        {
        }
        this.localeList_1 = tmp7_safe_receiver;
        tmp$ret$10 = Unit_getInstance();
        break $l$block_9;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp$ret$11;
    $l$block_10: {
      var tmp1__get_isSpecified__0_2867227095 = other._get_background__4060324125_drprdq_k$();
      tmp$ret$11 = !equals(_Color___get_value__impl__103472842(tmp1__get_isSpecified__0_2867227095), _Color___get_value__impl__103472842(Companion_getInstance()._get_Unspecified__2946689370_rgrx8f_k$()));
      break $l$block_10;
    }
    if (tmp$ret$11) {
      this.background_1 = other._get_background__4060324125_drprdq_k$();
    } else {
    }
    var tmp8_safe_receiver = other._get_textDecoration__1911559150_vm3cha_k$();
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$12;
      $l$block_11: {
        {
        }
        this.textDecoration_1 = tmp8_safe_receiver;
        tmp$ret$12 = Unit_getInstance();
        break $l$block_11;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp9_safe_receiver = other._get_shadow__44181995_qaz1n_k$();
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      $l$block_12: {
        {
        }
        this.shadow_1 = tmp9_safe_receiver;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_12;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  ComputedStyle.prototype.component1_j10ipl_k$ = function () {
    unreachableDeclarationLog();
    return this.color_1;
  };
  ComputedStyle.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.fontSize_1;
  };
  ComputedStyle.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.fontWeight_1;
  };
  ComputedStyle.prototype.component4_aj2by9_k$ = function () {
    unreachableDeclarationLog();
    return this.fontStyle_1;
  };
  ComputedStyle.prototype.component5_8az6xx_k$ = function () {
    unreachableDeclarationLog();
    return this.fontSynthesis_1;
  };
  ComputedStyle.prototype.component6_7eebs7_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamily_1;
  };
  ComputedStyle.prototype.component7_7eebs6_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFeatureSettings_1;
  };
  ComputedStyle.prototype.component8_7eebs5_k$ = function () {
    unreachableDeclarationLog();
    return this.letterSpacing_1;
  };
  ComputedStyle.prototype.component9_mqmaf5_k$ = function () {
    unreachableDeclarationLog();
    return this.baselineShift_1;
  };
  ComputedStyle.prototype.component10_gazzfo_k$ = function () {
    unreachableDeclarationLog();
    return this.textGeometricTransform_1;
  };
  ComputedStyle.prototype.component11_gazzfn_k$ = function () {
    unreachableDeclarationLog();
    return this.localeList_1;
  };
  ComputedStyle.prototype.component12_mt65tv_k$ = function () {
    unreachableDeclarationLog();
    return this.background_1;
  };
  ComputedStyle.prototype.component13_gazzfl_k$ = function () {
    unreachableDeclarationLog();
    return this.textDecoration_1;
  };
  ComputedStyle.prototype.component14_gazzfk_k$ = function () {
    unreachableDeclarationLog();
    return this.shadow_1;
  };
  ComputedStyle.prototype.copy_vmthop_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    unreachableDeclarationLog();
    return new ComputedStyle(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  ComputedStyle.prototype.copy$default_x88l4i_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      color = this.color_1;
    if (!(($mask0 & 2) === 0))
      fontSize = this.fontSize_1;
    if (!(($mask0 & 4) === 0))
      fontWeight = this.fontWeight_1;
    if (!(($mask0 & 8) === 0))
      fontStyle = this.fontStyle_1;
    if (!(($mask0 & 16) === 0))
      fontSynthesis = this.fontSynthesis_1;
    if (!(($mask0 & 32) === 0))
      fontFamily = this.fontFamily_1;
    if (!(($mask0 & 64) === 0))
      fontFeatureSettings = this.fontFeatureSettings_1;
    if (!(($mask0 & 128) === 0))
      letterSpacing = this.letterSpacing_1;
    if (!(($mask0 & 256) === 0))
      baselineShift = this.baselineShift_1;
    if (!(($mask0 & 512) === 0))
      textGeometricTransform = this.textGeometricTransform_1;
    if (!(($mask0 & 1024) === 0))
      localeList = this.localeList_1;
    if (!(($mask0 & 2048) === 0))
      background = this.background_1;
    if (!(($mask0 & 4096) === 0))
      textDecoration = this.textDecoration_1;
    if (!(($mask0 & 8192) === 0))
      shadow = this.shadow_1;
    return this.copy_vmthop_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
  };
  ComputedStyle.prototype.toString = function () {
    var tmp = new Color(this.color_1);
    var tmp_0 = this.fontSize_1;
    var tmp_1 = this.fontWeight_1;
    var tmp_2 = this.fontStyle_1;
    var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
    var tmp_4 = this.fontSynthesis_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = this.fontFamily_1;
    var tmp_7 = this.fontFeatureSettings_1;
    var tmp_8 = this.letterSpacing_1;
    var tmp_9 = this.baselineShift_1;
    return 'ComputedStyle(color=' + tmp + ', fontSize=' + tmp_0 + ', fontWeight=' + tmp_1 + ', fontStyle=' + tmp_3 + ', fontSynthesis=' + tmp_5 + ', fontFamily=' + tmp_6 + ', fontFeatureSettings=' + tmp_7 + ', letterSpacing=' + tmp_8 + ', baselineShift=' + (tmp_9 == null ? null : new BaselineShift(tmp_9)) + ', textGeometricTransform=' + this.textGeometricTransform_1 + ', localeList=' + this.localeList_1 + ', background=' + new Color(this.background_1) + ', textDecoration=' + this.textDecoration_1 + ', shadow=' + this.shadow_1 + ')';
  };
  ComputedStyle.prototype.hashCode = function () {
    var result = Color__hashCode_impl_1907974927(this.color_1);
    result = imul(result, 31) + getNumberHashCode(this.fontSize_1) | 0;
    result = imul(result, 31) + (this.fontWeight_1 == null ? 0 : this.fontWeight_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.fontStyle_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      {
        tmp_0 = FontStyle__hashCode_impl_467747312(this.fontStyle_1);
      }
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.fontSynthesis_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      {
        tmp_3 = FontSynthesis__hashCode_impl_3998513709(this.fontSynthesis_1);
      }
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1)) | 0;
    result = imul(result, 31) + (this.fontFeatureSettings_1 == null ? 0 : getStringHashCode(this.fontFeatureSettings_1)) | 0;
    result = imul(result, 31) + (this.letterSpacing_1 == null ? 0 : getNumberHashCode(this.letterSpacing_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.baselineShift_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      {
        tmp_6 = BaselineShift__hashCode_impl_968657397(this.baselineShift_1);
      }
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.textGeometricTransform_1 == null ? 0 : this.textGeometricTransform_1.hashCode()) | 0;
    result = imul(result, 31) + (this.localeList_1 == null ? 0 : this.localeList_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_1907974927(this.background_1) | 0;
    result = imul(result, 31) + (this.textDecoration_1 == null ? 0 : this.textDecoration_1.hashCode()) | 0;
    result = imul(result, 31) + (this.shadow_1 == null ? 0 : this.shadow_1.hashCode()) | 0;
    return result;
  };
  ComputedStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.fontSize_1, tmp0_other_with_cast.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, tmp0_other_with_cast.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    else {
    }
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    else {
    }
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == tmp0_other_with_cast.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, tmp0_other_with_cast.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    else {
    }
    if (!equals(this.textGeometricTransform_1, tmp0_other_with_cast.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, tmp0_other_with_cast.localeList_1))
      return false;
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.textDecoration_1, tmp0_other_with_cast.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, tmp0_other_with_cast.shadow_1))
      return false;
    return true;
  };
  ComputedStyle.$metadata$ = {
    simpleName: 'ComputedStyle',
    kind: 'class',
    interfaces: []
  };
  function toSkDecorationStyle(_this__1828080292, color) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var underline = _this__1828080292.contains_8528ny_k$(Companion_getInstance_31()._get_Underline__3209552165_hy87ob_k$());
    var overline = false;
    var lineThrough = _this__1828080292.contains_8528ny_k$(Companion_getInstance_31()._get_LineThrough__2415377312_v324ww_k$());
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    return new Shadow_0(toArgb(_this__1828080292._get_color__3152392398_60nqpf_k$()), _Offset___get_x__impl__2048295803(_this__1828080292._get_offset__736931032_tcg964_k$()), _Offset___get_y__impl__3791106138(_this__1828080292._get_offset__736931032_tcg964_k$()), _this__1828080292._get_blurRadius__1084091346_hxfu8i_k$());
  }
  function fontSizeInHierarchy(density, base, other) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp;
    if (_get_isUnspecified__892174020(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__3400122295(other)) {
      tmp = base * _TextUnit___get_value__impl__1070471396(other);
    } else if (_TextUnit___get_isSp__impl__504060002(other)) {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = density.toPx_x7oik4_k$(other);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      throw IllegalStateException_init_$Create$('Unexpected size in fontSizeInHierarchy');
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, width) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, width);
  }
  function _get_ellipsisChar__1314968164($this) {
    unreachableDeclarationLog();
    return $this.ellipsisChar_1;
  }
  function _get_paragraphIntrinsics__1431594485($this) {
    unreachableDeclarationLog();
    return $this.paragraphIntrinsics_1;
  }
  function _get_layouter__107398484($this) {
    unreachableDeclarationLog();
    return $this.layouter_1;
  }
  function _set_para__591403639_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.para_1 = _set____804775014;
  }
  function _get_para__806020715_0($this) {
    unreachableDeclarationLog();
    return $this.para_1;
  }
  function _get_text__809840318_0($this) {
    return $this.paragraphIntrinsics_1._get_text__809840318_de5ose_k$();
  }
  function lineMetricsForOffset($this, offset) {
    unreachableDeclarationLog();
    var metrics = _get_lineMetrics__333443394($this);
    var indexedObject = metrics;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var line = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (offset < line._get_endIncludingNewline__1566875239_pwvko7_k$()) {
        return line;
      }
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = metrics.length === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      return null;
    } else {
    }
    return last_0(metrics);
  }
  function _get_lineMetrics__333443394($this) {
    var tmp;
    if (_get_text__809840318_0($this) === '') {
      var metrics = $this.layouter_1._get_defaultFont__980693345_g7vntt_k$()._get_metrics__1691857582_rzadny_k$();
      var ascent = -metrics._get_ascent__1565781361_pw84mp_k$();
      var descent = metrics._get_descent__3143843223_j1cl0p_k$();
      var baseline = $this.para_1._get_alphabeticBaseline__3788728729_8deg6f_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_with_0 = $this.layouter_1._get_paragraphStyle__860251528_e866bs_k$()._get_strutStyle__814230954_dgrsmi_k$();
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp_0;
          if (((tmp0_with_0._get_isEnabled__3836114554_7l6t1i_k$() ? !tmp0_with_0._get_isHeightForced__507051553_8dvvhd_k$() : false) ? tmp0_with_0._get_isHeightOverridden__1923030182_vsx7l2_k$() : false) ? tmp0_with_0._get_fontSize__4225531099_15c9b9_k$() > 0.0 : false) {
            tmp_0 = tmp0_with_0._get_height__3088126660_jyis70_k$() * tmp0_with_0._get_fontSize__4225531099_15c9b9_k$();
          } else {
            tmp_0 = ascent + descent;
          }
          tmp$ret$0 = tmp_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var height = tmp$ret$1;
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_arrayOf_0 = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_arrayOf_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      var tmp_1 = $this.para_1._get_lineMetrics__333443394_5iiuki_k$();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxForwardByOffset($this, offset) {
    unreachableDeclarationLog();
    var to = offset + 1 | 0;
    while (to <= _get_text__809840318_0($this).length) {
      var box = firstOrNull($this.para_1.getRectsForRange_8yx14g_k$(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    unreachableDeclarationLog();
    var from = offset - 1 | 0;
    while (from >= 0) {
      var box = firstOrNull($this.para_1.getRectsForRange_8yx14g_k$(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (equals(new Char(charSequenceGet(_get_text__809840318_0($this), from)), new Char(_Char___init__impl__380027157(10)))) {
        var bottom = box._get_rect__807973095_dd1o13_k$()._get_bottom__2354915904_w3218g_k$() + box._get_rect__807973095_dd1o13_k$()._get_bottom__2354915904_w3218g_k$() - box._get_rect__807973095_dd1o13_k$()._get_top__857417180_e6hfbw_k$();
        var rect = new Rect_0(0.0, box._get_rect__807973095_dd1o13_k$()._get_bottom__2354915904_w3218g_k$(), 0.0, bottom);
        return new TextBox(rect, box._get_direction__3211647666_hwzary_k$());
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      end = offset;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, width) {
    this.maxLines_1 = maxLines;
    this.ellipsis_1 = ellipsis;
    this.width_1 = width;
    this.ellipsisChar_1 = this.ellipsis_1 ? '\u2026' : '';
    var tmp = this;
    tmp.paragraphIntrinsics_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    this.layouter_1 = this.paragraphIntrinsics_1.layouter_lcs8mh_k$();
    var tmp_0 = this;
    tmp_0.para_1 = this.layouter_1.layoutParagraph$default_batlz_k$(this.width_1, this.maxLines_1, this.ellipsisChar_1, null, null, null, 56, null);
    this.para_1.layout_foik1o_k$(this.width_1);
    Unit_getInstance();
  }
  SkiaParagraph.prototype._get_maxLines__694126384_bh9jcg_k$ = function () {
    unreachableDeclarationLog();
    return this.maxLines_1;
  };
  SkiaParagraph.prototype._get_ellipsis__3036657946_kt5xpi_k$ = function () {
    unreachableDeclarationLog();
    return this.ellipsis_1;
  };
  SkiaParagraph.prototype._get_width__3719200459_9isoj9_k$ = function () {
    unreachableDeclarationLog();
    return this.width_1;
  };
  SkiaParagraph.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.para_1._get_height__3088126660_jyis70_k$();
  };
  SkiaParagraph.prototype._get_minIntrinsicWidth__3368612606_fbizuq_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraphIntrinsics_1._get_minIntrinsicWidth__3368612606_fbizuq_k$();
  };
  SkiaParagraph.prototype._get_maxIntrinsicWidth__321695148_5bj1kc_k$ = function () {
    unreachableDeclarationLog();
    return this.paragraphIntrinsics_1._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
  };
  SkiaParagraph.prototype._get_firstBaseline__4268418652_ft12c_k$ = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__333443394(this));
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
          tmp$ret$0 = tmp0_safe_receiver._get_baseline__3972063782_5c8xy2_k$();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype._get_lastBaseline__435710384_77esa8_k$ = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__333443394(this));
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
          tmp$ret$0 = tmp0_safe_receiver._get_baseline__3972063782_5c8xy2_k$();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype._get_didExceedMaxLines__1693942499_s0j2eb_k$ = function () {
    return this.para_1.didExceedMaxLines_51frgy_k$();
  };
  SkiaParagraph.prototype._get_lineCount__2337839158_wd81qi_k$ = function () {
    var tmp;
    if (_get_text__809840318_0(this) === '') {
      tmp = 1;
    } else {
      tmp = this.para_1._get_lineNumber__795192270_d5fqa6_k$();
    }
    return tmp;
  };
  SkiaParagraph.prototype._get_placeholderRects__1914564847_vnvrov_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = this.para_1._get_rectsForPlaceholders__1765847505_t7c8nl_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(tmp0_map_0.length);
        var indexedObject = tmp0_map_0;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var item_2_3 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = toComposeRect(item_2_3._get_rect__807973095_dd1o13_k$());
            break $l$block;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  SkiaParagraph.prototype.getPathForRange_i163f3_k$ = function (start, end) {
    var boxes = this.para_1.getRectsForRange_8yx14g_k$(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_MAX_getInstance());
    var path = Path();
    var indexedObject = boxes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = asSkiaPath(path);
      var tmp_0 = b._get_rect__807973095_dd1o13_k$();
      tmp.addRect$default_rgvch2_k$(tmp_0, null, 0, 6, null);
      Unit_getInstance();
    }
    return path;
  };
  SkiaParagraph.prototype.getCursorRect_x5c8fl_k$ = function (offset) {
    unreachableDeclarationLog();
    var horizontal = this.getHorizontalPosition_b8vvic_k$(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    return new Rect_1(horizontal, line._get_baseline__3972063782_5c8xy2_k$() - line._get_ascent__1565781361_pw84mp_k$(), horizontal, line._get_baseline__3972063782_5c8xy2_k$() + line._get_descent__3143843223_j1cl0p_k$());
  };
  SkiaParagraph.prototype.getLineLeft_w1obtc_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__333443394(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_left__802434852_d9qyp0_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineRight_bo0e7j_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__333443394(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_right__3576132917_bvz45n_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineTop_8a2w7q_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__333443394(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_floor_0_2 = tmp0_safe_receiver._get_baseline__3972063782_5c8xy2_k$() - tmp0_safe_receiver._get_ascent__1565781361_pw84mp_k$();
            tmp$ret$0 = Math.floor(tmp0_floor_0_2);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineBottom_spjtf0_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__333443394(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_floor_0_2 = tmp0_safe_receiver._get_baseline__3972063782_5c8xy2_k$() + tmp0_safe_receiver._get_descent__3143843223_j1cl0p_k$();
            tmp$ret$0 = Math.floor(tmp0_floor_0_2);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineHeight_ba5d5c_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return _get_lineMetrics__333443394(this)[lineIndex]._get_height__3088126660_jyis70_k$();
  };
  SkiaParagraph.prototype.getLineWidth_ia4jjv_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return _get_lineMetrics__333443394(this)[lineIndex]._get_width__3719200459_9isoj9_k$();
  };
  SkiaParagraph.prototype.getLineStart_504snr_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return _get_lineMetrics__333443394(this)[lineIndex]._get_startIndex__250257659_44zw1n_k$();
  };
  SkiaParagraph.prototype.getLineEnd_7kqxuy_k$ = function (lineIndex, visibleEnd) {
    unreachableDeclarationLog();
    var tmp;
    if (visibleEnd) {
      var metrics = _get_lineMetrics__333443394(this)[lineIndex];
      var tmp_0;
      if (lineIndex > 0 ? metrics._get_startIndex__250257659_44zw1n_k$() < _get_lineMetrics__333443394(this)[lineIndex - 1 | 0]._get_endIndex__2798786036_oqscuk_k$() : false) {
        tmp_0 = metrics._get_endIndex__2798786036_oqscuk_k$();
      } else if (metrics._get_startIndex__250257659_44zw1n_k$() < _get_text__809840318_0(this).length ? equals(new Char(charSequenceGet(_get_text__809840318_0(this), metrics._get_startIndex__250257659_44zw1n_k$())), new Char(_Char___init__impl__380027157(10))) : false) {
        tmp_0 = metrics._get_startIndex__250257659_44zw1n_k$();
      } else {
        tmp_0 = metrics._get_endExcludingWhitespaces__1701269975_s4w4bb_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = _get_lineMetrics__333443394(this)[lineIndex]._get_endIndex__2798786036_oqscuk_k$();
    }
    return tmp;
  };
  SkiaParagraph.prototype.isLineEllipsized_r1ol1o_k$ = function (lineIndex) {
    unreachableDeclarationLog();
    return false;
  };
  SkiaParagraph.prototype.getLineForOffset_9a3vwv_k$ = function (offset) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
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
          tmp$ret$0 = tmp0_safe_receiver._get_lineNumber__795192270_d5fqa6_k$();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  SkiaParagraph.prototype.getLineForVerticalPosition_c1p2r4_k$ = function (vertical) {
    unreachableDeclarationLog();
    return 0;
  };
  SkiaParagraph.prototype.getHorizontalPosition_b8vvic_k$ = function (offset, usePrimaryDirection) {
    unreachableDeclarationLog();
    var prevBox = getBoxBackwardByOffset$default(this, offset, 0, 4, null);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.paragraphIntrinsics_1._get_textDirection__681174591_b9jxof_k$().equals(ResolvedTextDirection_Rtl_getInstance());
    var tmp;
    if (prevBox == null ? nextBox == null : false) {
      tmp = isRtl ? this.width_1 : 0.0;
    } else if (prevBox == null) {
      tmp = cursorHorizontalPosition(ensureNotNull(nextBox), true);
    } else if (nextBox == null) {
      tmp = cursorHorizontalPosition$default(prevBox, false, 1, null);
    } else if (nextBox._get_direction__3211647666_hwzary_k$().equals(prevBox._get_direction__3211647666_hwzary_k$())) {
      tmp = cursorHorizontalPosition(nextBox, true);
    } else if (usePrimaryDirection) {
      tmp = cursorHorizontalPosition$default(prevBox, false, 1, null);
    } else {
      tmp = cursorHorizontalPosition(nextBox, true);
    }
    return tmp;
  };
  SkiaParagraph.prototype.getParagraphDirection_x8sft2_k$ = function (offset) {
    unreachableDeclarationLog();
    return this.paragraphIntrinsics_1._get_textDirection__681174591_b9jxof_k$();
  };
  SkiaParagraph.prototype.getBidiRunDirection_dqdnqj_k$ = function (offset) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_direction__3211647666_hwzary_k$();
    var tmp0 = tmp1_subject == null ? -1 : tmp1_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  SkiaParagraph.prototype.getOffsetForPosition_f04xcw_k$ = function (position) {
    return this.para_1.getGlyphPositionAtCoordinate_iqdtii_k$(_Offset___get_x__impl__2048295803(position), _Offset___get_y__impl__3791106138(position))._get_position__3188952002_iahqv2_k$();
  };
  SkiaParagraph.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__809840318_0(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box._get_rect__807973095_dd1o13_k$());
  };
  SkiaParagraph.prototype.getWordBoundary_qx0177_k$ = function (offset) {
    unreachableDeclarationLog();
    var tmp;
    if (isLetterOrDigit(charSequenceGet(_get_text__809840318_0(this), offset))) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = this.para_1.getWordBoundary_3s8nhz_k$(offset);
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = TextRange_0(tmp0_let_0._get_start__3614751663_b8zdqp_k$(), tmp0_let_0._get_end__856968982_e67thy_k$());
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp0_safe_receiver = getOrNull_0(_get_text__809840318_0(this), offset - 1 | 0);
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        {
          tmp_0 = isLetterOrDigit(tmp0_safe_receiver);
        }
      }
      var tmp1_elvis_lhs = tmp_0;
      if (tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_let_0 = this.para_1.getWordBoundary_3s8nhz_k$(offset - 1 | 0);
          {
          }
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = TextRange_0(tmp1_let_0._get_start__3614751663_b8zdqp_k$(), tmp1_let_0._get_end__856968982_e67thy_k$());
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      } else {
        {
          tmp = TextRange_0(offset, offset);
        }
      }
    }
    return tmp;
  };
  SkiaParagraph.prototype.paint_aoyx3m_k$ = function (canvas, color, shadow, textDecoration) {
    this.para_1 = this.layouter_1.layoutParagraph_8yeuwa_k$(this.width_1, this.maxLines_1, this.ellipsisChar_1, color, shadow, textDecoration);
    this.para_1.paint_86qq3w_k$(_get_nativeCanvas__3628725980(canvas), 0.0, 0.0);
    Unit_getInstance();
  };
  SkiaParagraph.$metadata$ = {
    simpleName: 'SkiaParagraph',
    kind: 'class',
    interfaces: [Paragraph]
  };
  function cursorHorizontalPosition(_this__1828080292, opposite) {
    unreachableDeclarationLog();
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp0_subject = _this__1828080292._get_direction__3211647666_hwzary_k$();
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = opposite ? _this__1828080292._get_rect__807973095_dd1o13_k$()._get_left__802434852_d9qyp0_k$() : _this__1828080292._get_rect__807973095_dd1o13_k$()._get_right__3576132917_bvz45n_k$();
        break;
      case 0:
        tmp = opposite ? _this__1828080292._get_rect__807973095_dd1o13_k$()._get_right__3576132917_bvz45n_k$() : _this__1828080292._get_rect__807973095_dd1o13_k$()._get_left__802434852_d9qyp0_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function cursorHorizontalPosition$default(_this__1828080292, opposite, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      opposite = false;
    return cursorHorizontalPosition(_this__1828080292, opposite);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  StyleAdd.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  StyleAdd.prototype._get_style__3615460416_b8k6v4_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleAdd.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.position_1;
  };
  StyleAdd.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleAdd.prototype.copy_xm3ya_k$ = function (position, style) {
    unreachableDeclarationLog();
    return new StyleAdd(position, style);
  };
  StyleAdd.prototype.copy$default_bxq144_k$ = function (position, style, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_xm3ya_k$(position, style);
  };
  StyleAdd.prototype.toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleAdd.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleAdd.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleAdd.$metadata$ = {
    simpleName: 'StyleAdd',
    kind: 'class',
    interfaces: []
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.cut_1 = cut;
    this.width_1 = width;
    this.height_1 = height;
    this.position$delegate_1 = position$factory(this.cut_1);
  }
  PutPlaceholder.prototype._get_cut__856916623_e66p3j_k$ = function () {
    unreachableDeclarationLog();
    return this.cut_1;
  };
  PutPlaceholder.prototype._set_width__1361038399_n471aa_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.width_1 = _set____804775014;
  };
  PutPlaceholder.prototype._get_width__3719200459_9isoj9_k$ = function () {
    unreachableDeclarationLog();
    return this.width_1;
  };
  PutPlaceholder.prototype._set_height__2999546832_h1e9cd_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.height_1 = _set____804775014;
  };
  PutPlaceholder.prototype._get_height__3088126660_jyis70_k$ = function () {
    unreachableDeclarationLog();
    return this.height_1;
  };
  PutPlaceholder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = position$factory_0();
      tmp$ret$0 = this.position$delegate_1.get();
      break $l$block;
    }
    return tmp$ret$0;
  };
  PutPlaceholder.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.cut_1;
  };
  PutPlaceholder.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.width_1;
  };
  PutPlaceholder.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.height_1;
  };
  PutPlaceholder.prototype.copy_rklg67_k$ = function (cut, width, height) {
    unreachableDeclarationLog();
    return new PutPlaceholder(cut, width, height);
  };
  PutPlaceholder.prototype.copy$default_gzwp8n_k$ = function (cut, width, height, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cut = this.cut_1;
    if (!(($mask0 & 2) === 0))
      width = this.width_1;
    if (!(($mask0 & 4) === 0))
      height = this.height_1;
    return this.copy_rklg67_k$(cut, width, height);
  };
  PutPlaceholder.prototype.toString = function () {
    return 'PutPlaceholder(cut=' + this.cut_1 + ', width=' + this.width_1 + ', height=' + this.height_1 + ')';
  };
  PutPlaceholder.prototype.hashCode = function () {
    var result = this.cut_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.width_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.height_1) | 0;
    return result;
  };
  PutPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    return true;
  };
  PutPlaceholder.$metadata$ = {
    simpleName: 'PutPlaceholder',
    kind: 'class',
    interfaces: []
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.cut_1 = cut;
    this.position$delegate_1 = position$factory_1(this.cut_1);
  }
  EndPlaceholder.prototype._get_cut__856916623_e66p3j_k$ = function () {
    unreachableDeclarationLog();
    return this.cut_1;
  };
  EndPlaceholder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = position$factory_2();
      tmp$ret$0 = this.position$delegate_1.get();
      break $l$block;
    }
    return tmp$ret$0;
  };
  EndPlaceholder.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.cut_1;
  };
  EndPlaceholder.prototype.copy_juie51_k$ = function (cut) {
    unreachableDeclarationLog();
    return new EndPlaceholder(cut);
  };
  EndPlaceholder.prototype.copy$default_ruh0u3_k$ = function (cut, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cut = this.cut_1;
    return this.copy_juie51_k$(cut);
  };
  EndPlaceholder.prototype.toString = function () {
    return 'EndPlaceholder(cut=' + this.cut_1 + ')';
  };
  EndPlaceholder.prototype.hashCode = function () {
    return this.cut_1.hashCode();
  };
  EndPlaceholder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    return true;
  };
  EndPlaceholder.$metadata$ = {
    simpleName: 'EndPlaceholder',
    kind: 'class',
    interfaces: []
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  StyleAdd_0.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  StyleAdd_0.prototype._get_style__3615460416_b8k6v4_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleAdd_0.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.position_1;
  };
  StyleAdd_0.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleAdd_0.prototype.copy_ql720e_k$ = function (position, style) {
    unreachableDeclarationLog();
    return new StyleAdd_0(position, style);
  };
  StyleAdd_0.prototype.copy$default_20n44u_k$ = function (position, style, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_ql720e_k$(position, style);
  };
  StyleAdd_0.prototype.toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleAdd_0.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleAdd_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleAdd_0.$metadata$ = {
    simpleName: 'StyleAdd',
    kind: 'class',
    interfaces: []
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  StyleRemove.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  StyleRemove.prototype._get_style__3615460416_b8k6v4_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleRemove.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.position_1;
  };
  StyleRemove.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.style_1;
  };
  StyleRemove.prototype.copy_ql720e_k$ = function (position, style) {
    unreachableDeclarationLog();
    return new StyleRemove(position, style);
  };
  StyleRemove.prototype.copy$default_20n44u_k$ = function (position, style, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      style = this.style_1;
    return this.copy_ql720e_k$(position, style);
  };
  StyleRemove.prototype.toString = function () {
    return 'StyleRemove(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  StyleRemove.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  StyleRemove.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  StyleRemove.$metadata$ = {
    simpleName: 'StyleRemove',
    kind: 'class',
    interfaces: []
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.position_1 = position;
    this.placeholder_1 = placeholder;
  }
  PutPlaceholder_0.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  PutPlaceholder_0.prototype._get_placeholder__3019956862_l33wci_k$ = function () {
    unreachableDeclarationLog();
    return this.placeholder_1;
  };
  PutPlaceholder_0.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.position_1;
  };
  PutPlaceholder_0.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.placeholder_1;
  };
  PutPlaceholder_0.prototype.copy_893v0i_k$ = function (position, placeholder) {
    unreachableDeclarationLog();
    return new PutPlaceholder_0(position, placeholder);
  };
  PutPlaceholder_0.prototype.copy$default_x7s5ku_k$ = function (position, placeholder, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    if (!(($mask0 & 2) === 0))
      placeholder = this.placeholder_1;
    return this.copy_893v0i_k$(position, placeholder);
  };
  PutPlaceholder_0.prototype.toString = function () {
    return 'PutPlaceholder(position=' + this.position_1 + ', placeholder=' + this.placeholder_1 + ')';
  };
  PutPlaceholder_0.prototype.hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.placeholder_1.hashCode() | 0;
    return result;
  };
  PutPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.placeholder_1.equals(tmp0_other_with_cast.placeholder_1))
      return false;
    return true;
  };
  PutPlaceholder_0.$metadata$ = {
    simpleName: 'PutPlaceholder',
    kind: 'class',
    interfaces: []
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.position_1 = position;
  }
  EndPlaceholder_0.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  EndPlaceholder_0.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.position_1;
  };
  EndPlaceholder_0.prototype.copy_u8zkvg_k$ = function (position) {
    unreachableDeclarationLog();
    return new EndPlaceholder_0(position);
  };
  EndPlaceholder_0.prototype.copy$default_pqo5jh_k$ = function (position, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      position = this.position_1;
    return this.copy_u8zkvg_k$(position);
  };
  EndPlaceholder_0.prototype.toString = function () {
    return 'EndPlaceholder(position=' + this.position_1 + ')';
  };
  EndPlaceholder_0.prototype.hashCode = function () {
    return this.position_1;
  };
  EndPlaceholder_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  EndPlaceholder_0.$metadata$ = {
    simpleName: 'EndPlaceholder',
    kind: 'class',
    interfaces: []
  };
  function ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      ellipsis = '';
    if (!(($mask0 & 16) === 0))
      maxLines = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    ParagraphBuilder_0.call($this, fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection);
    return $this;
  }
  function ParagraphBuilder_init_$Create$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker) {
    return ParagraphBuilder_init_$Init$(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, $mask0, $marker, Object.create(ParagraphBuilder_0.prototype));
  }
  function _set_initialStyle__2942186026($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.initialStyle_1 = _set____804775014;
  }
  function _get_initialStyle__3882338846($this) {
    var tmp = $this.initialStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _set_defaultStyle__4068654951($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.defaultStyle_1 = _set____804775014;
  }
  function _get_defaultStyle__713840475($this) {
    var tmp = $this.defaultStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _set_paragraphStyle__3611490964($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.paragraphStyle_1 = _set____804775014;
  }
  function _set_ops__296156819($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.ops_1 = _set____804775014;
  }
  function _get_ops__857269279($this) {
    var tmp = $this.ops_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  Op.$metadata$ = {
    simpleName: 'Op',
    kind: 'class',
    interfaces: []
  };
  function Cut() {
  }
  Cut.$metadata$ = {
    simpleName: 'Cut',
    kind: 'class',
    interfaces: []
  };
  function makeOps($this, spans, placeholders) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var cuts = tmp$ret$0;
    var tmp0_iterator = spans.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var span = tmp0_iterator.next_20eer_k$();
      cuts.add_1j60pz_k$(new StyleAdd_0(span._get_start__3614751663_b8zdqp_k$(), span._get_item__800109976_d8d4t4_k$()));
      Unit_getInstance();
      cuts.add_1j60pz_k$(new StyleRemove(span._get_end__856968982_e67thy_k$(), span._get_item__800109976_d8d4t4_k$()));
      Unit_getInstance();
    }
    var tmp1_iterator = placeholders.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var placeholder = tmp1_iterator.next_20eer_k$();
      cuts.add_1j60pz_k$(new PutPlaceholder_0(placeholder._get_start__3614751663_b8zdqp_k$(), placeholder._get_item__800109976_d8d4t4_k$()));
      Unit_getInstance();
      cuts.add_1j60pz_k$(new EndPlaceholder_0(placeholder._get_end__856968982_e67thy_k$()));
      Unit_getInstance();
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__713840475($this))]);
    {
      if (cuts._get_size__809037418_ddoh9m_k$() > 1) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp = ParagraphBuilder$makeOps$lambda();
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
          break $l$block_0;
        }
        sortWith(cuts, tmp$ret$1);
      }
    }
    var activeStyles = mutableListOf([_get_initialStyle__3882338846($this)]);
    var tmp2_iterator = cuts.iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var cut = tmp2_iterator.next_20eer_k$();
      if (cut instanceof StyleAdd_0) {
        activeStyles.add_1j60pz_k$(cut.style_1);
        Unit_getInstance();
        var prev = previousStyleAddAtTheSamePosition($this, cut._get_position__3188952002_iahqv2_k$(), ops);
        if (prev == null) {
          var tmp_0 = cut._get_position__3188952002_iahqv2_k$();
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_also_0 = mergeStyles($this, activeStyles);
            {
            }
            {
              tmp0_also_0.merge_y90v2p_k$($this.density_1, cut.style_1);
            }
            tmp$ret$2 = tmp0_also_0;
            break $l$block_1;
          }
          ops.add_1j60pz_k$(new StyleAdd(tmp_0, tmp$ret$2));
          Unit_getInstance();
        } else {
          prev.style_1.merge_y90v2p_k$($this.density_1, cut.style_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.remove_8hbkc6_k$(cut.style_1);
          Unit_getInstance();
          ops.add_1j60pz_k$(new StyleAdd(cut._get_position__3188952002_iahqv2_k$(), mergeStyles($this, activeStyles)));
          Unit_getInstance();
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1._get_width__3719200459_peka7p_k$()), fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1._get_height__3088126660_kqr2ws_k$()));
            ops.add_1j60pz_k$(op);
            Unit_getInstance();
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.add_1j60pz_k$(new EndPlaceholder(cut));
              Unit_getInstance();
            } else {
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$_0($this.density_1, activeStyles.get_fkrdnv_k$(0));
    var inductionVariable = 1;
    var last = activeStyles._get_size__809037418_ddoh9m_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.merge_y90v2p_k$($this.density_1, activeStyles.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var prevOp = tmp0_iterator.next_20eer_k$();
      if (prevOp._get_position__3188952002_iahqv2_k$() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
      else {
      }
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle._set_textStyle__3067533761_b222dn_k$(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style._get_textAlign__21108601_6amoil_k$();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = pStyle._set_alignment__185008194_mpxycz_k$(toSkAlignment(tmp0_safe_receiver));
          break $l$block;
        }
        Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_isSpecified__0_2655876182 = style._get_lineHeight__3598496176_utqlcg_k$();
      tmp$ret$1 = !_get_isUnspecified__892174020(tmp0__get_isSpecified__0_2655876182);
      break $l$block_0;
    }
    if (tmp$ret$1) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle._set_isEnabled__2064378350_1ulqgr_k$(true);
      strutStyle._set_isHeightOverridden__3975302066_s2h43b_k$(true);
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_with_0 = $this.density_1;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_with_0.toPx_x7oik4_k$(orDefaultFontSize(style._get_fontSize__4225531099_h9sa57_k$()));
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var fontSize = tmp$ret$3;
      var tmp_0;
      if (_TextUnit___get_isSp__impl__504060002(style._get_lineHeight__3598496176_utqlcg_k$())) {
        var tmp$ret$5;
        $l$block_4: {
          var tmp2_with_0 = $this.density_1;
          {
          }
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = tmp2_with_0.toPx_x7oik4_k$(style._get_lineHeight__3598496176_utqlcg_k$());
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        tmp_0 = tmp$ret$5;
      } else if (_TextUnit___get_isEm__impl__3400122295(style._get_lineHeight__3598496176_utqlcg_k$())) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__1070471396(style._get_lineHeight__3598496176_utqlcg_k$());
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      var lineHeight = tmp_0;
      strutStyle._set_height__2999546832_h1e9cd_k$(lineHeight / fontSize);
      strutStyle._set_fontSize__704695015_gt8yy2_k$(fontSize);
      pStyle._set_strutStyle__1724983478_9b9vfh_k$(strutStyle);
    } else {
    }
    pStyle._set_direction__1439911462_jhouaz_k$(toSkDirection($this.textDirection_1));
    var tmp1_safe_receiver = $this.textStyle_1._get_textIndent__3512011634_cy5gge_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      $l$block_6: {
        {
        }
        var tmp$ret$6;
        $l$block_5: {
          var tmp0_with_0_2 = $this.density_1;
          {
          }
          tmp$ret$6 = pStyle._set_textIndent__127796862_as48mb_k$(new TextIndent(tmp0_with_0_2.toPx_x7oik4_k$(tmp1_safe_receiver._get_firstLine__2808523789_r5lq8d_k$()), tmp0_with_0_2.toPx_x7oik4_k$(tmp1_safe_receiver._get_restLine__3898754787_ntk4gt_k$())));
          break $l$block_5;
        }
        tmp$ret$7 = tmp$ret$6;
        break $l$block_6;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = _get_skTextStylesCache__944186326();
    return getOrPut(tmp, style, ParagraphBuilder$makeSkTextStyle$lambda(style, $this));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function ParagraphBuilder$makeOps$lambda() {
    return function (a, b) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a._get_position__3188952002_iahqv2_k$();
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = b._get_position__3188952002_iahqv2_k$();
          break $l$block_0;
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
        break $l$block_1;
      }
      return tmp$ret$2;
    };
  }
  function ParagraphBuilder$makeSkTextStyle$lambda($style, this$0) {
    return function (it) {
      return $style.toSkTextStyle_9a1jf_k$(this$0.fontFamilyResolver_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.textStyle_1._get_fontFamily__3097773656_jss0iw_k$();
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
            var tmp0_elvis_lhs_2 = this$0.textStyle_1._get_fontWeight__1116225988_igklhg_k$();
            var tmp_0 = tmp0_elvis_lhs_2 == null ? Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$() : tmp0_elvis_lhs_2;
            var tmp1_elvis_lhs_3 = this$0.textStyle_1._get_fontStyle__2152582127_jc9dsp_k$();
            var tmp_1;
            var tmp_2 = tmp1_elvis_lhs_3;
            if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
              tmp_1 = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
            } else {
              {
                tmp_1 = tmp1_elvis_lhs_3;
              }
            }
            var tmp_3 = tmp_1;
            var tmp2_elvis_lhs_4 = this$0.textStyle_1._get_fontSynthesis__3907866988_7jz8cn_k$();
            var tmp_4;
            var tmp_5 = tmp2_elvis_lhs_4;
            if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
              tmp_4 = Companion_getInstance_18()._get_All__855894832_54xjwk_k$();
            } else {
              {
                tmp_4 = tmp2_elvis_lhs_4;
              }
            }
            var tmp_6 = this$0.fontFamilyResolver_1.resolve_3z78ru_k$(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4)._get_value__3683422336_a43j40_k$();
            tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      Unit_getInstance();
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_typeface__2007095828_x6z11w_k$(), _get_defaultStyle__713840475(this$0).fontSize_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0._get_defaultFont__980693345_g7vntt_k$()._get_metrics__1691857582_rzadny_k$()._get_height__3088126660_jyis70_k$();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, ellipsis, maxLines, spanStyles, placeholders, density, textDirection) {
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.text_1 = text;
    this.textStyle_1 = textStyle;
    this.ellipsis_1 = ellipsis;
    this.maxLines_1 = maxLines;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.textDirection_1 = textDirection;
    var tmp = this;
    tmp.defaultFont$delegate_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.defaultHeight$delegate_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  ParagraphBuilder_0.prototype._get_fontFamilyResolver__2595451122_s3uj2m_k$ = function () {
    unreachableDeclarationLog();
    return this.fontFamilyResolver_1;
  };
  ParagraphBuilder_0.prototype._get_text__809840318_de5ose_k$ = function () {
    unreachableDeclarationLog();
    return this.text_1;
  };
  ParagraphBuilder_0.prototype._set_textStyle__3067533761_y4erp3_k$ = function (_set____804775014) {
    this.textStyle_1 = _set____804775014;
  };
  ParagraphBuilder_0.prototype._get_textStyle__544302669_902aml_k$ = function () {
    return this.textStyle_1;
  };
  ParagraphBuilder_0.prototype._set_ellipsis__3810789158_8siuj8_k$ = function (_set____804775014) {
    this.ellipsis_1 = _set____804775014;
  };
  ParagraphBuilder_0.prototype._get_ellipsis__3036657946_kt5xpi_k$ = function () {
    return this.ellipsis_1;
  };
  ParagraphBuilder_0.prototype._set_maxLines__1468257596_j4ehos_k$ = function (_set____804775014) {
    this.maxLines_1 = _set____804775014;
  };
  ParagraphBuilder_0.prototype._get_maxLines__694126384_bh9jcg_k$ = function () {
    return this.maxLines_1;
  };
  ParagraphBuilder_0.prototype._get_spanStyles__378637631_69finz_k$ = function () {
    unreachableDeclarationLog();
    return this.spanStyles_1;
  };
  ParagraphBuilder_0.prototype._get_placeholders__3424351211_eecbo5_k$ = function () {
    unreachableDeclarationLog();
    return this.placeholders_1;
  };
  ParagraphBuilder_0.prototype._get_density__3015598889_l5pazb_k$ = function () {
    unreachableDeclarationLog();
    return this.density_1;
  };
  ParagraphBuilder_0.prototype._get_textDirection__681174591_b9jxof_k$ = function () {
    unreachableDeclarationLog();
    return this.textDirection_1;
  };
  ParagraphBuilder_0.prototype._get_paragraphStyle__860251528_e866bs_k$ = function () {
    var tmp = this.paragraphStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  ParagraphBuilder_0.prototype.build_1k0s4u_k$ = function () {
    this.initialStyle_1 = withDefaultFontSize(this.textStyle_1.toSpanStyle_l454tw_k$());
    this.defaultStyle_1 = ComputedStyle_init_$Create$_0(this.density_1, _get_initialStyle__3882338846(this));
    this.ops_1 = makeOps(this, this.spanStyles_1, this.placeholders_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.textStyle_1, _get_defaultStyle__713840475(this));
    this.paragraphStyle_1 = ps;
    if (!(this.maxLines_1 === IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$())) {
      ps._set_maxLinesCount__3486996209_hl5lb3_k$(this.maxLines_1);
      ps._set_ellipsis__3810789158_8hrtg7_k$(this.ellipsis_1);
    }
    var tmp = this.fontFamilyResolver_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE())._get_platformFontLoader__856683542_e61p92_k$();
    var tmp0_subject = platformFontLoader;
    var tmp_0;
    if (tmp0_subject instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader._get_fontCollection__1374858078_mqjza6_k$();
    } else {
      {
        throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
      }
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__857269279(this).iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var op = tmp1_iterator.next_20eer_k$();
      if (addText ? pos < op._get_position__3188952002_iahqv2_k$() : false) {
        pb.addText_jamnxp_k$(toString(charSequenceSubSequence(this.text_1, pos, op._get_position__3188952002_iahqv2_k$())));
        Unit_getInstance();
      }
      var tmp2_subject = op;
      if (tmp2_subject instanceof StyleAdd) {
        var tmp_1 = op.style_1.fontFamily_1;
        var tmp3_elvis_lhs = op.style_1.fontWeight_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_19()._get_Normal__1782642404_thc7ok_k$() : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.style_1.fontStyle_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_17()._get_Normal__1782642404_ybzd8t_k$();
        } else {
          {
            tmp_3 = tmp4_elvis_lhs;
          }
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.style_1.fontSynthesis_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_18()._get_All__855894832_54xjwk_k$();
        } else {
          {
            tmp_6 = tmp5_elvis_lhs;
          }
        }
        this.fontFamilyResolver_1.resolve_3z78ru_k$(tmp_1, tmp_2, tmp_5, tmp_6);
        Unit_getInstance();
        pb.pushStyle_ypbmq9_k$(makeSkTextStyle(this, op.style_1));
        Unit_getInstance();
      } else {
        if (tmp2_subject instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.width_1, op.height_1, toSkPlaceholderAlignment(op.cut_1.placeholder_1._get_placeholderVerticalAlign__2574794447_byu6mn_k$()), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.addPlaceholder_xmxrm5_k$(placeholderStyle);
          Unit_getInstance();
          addText = false;
        } else {
          if (tmp2_subject instanceof EndPlaceholder) {
            addText = true;
          } else {
          }
        }
      }
      pos = op._get_position__3188952002_iahqv2_k$();
    }
    if (addText ? pos < this.text_1.length : false) {
      pb.addText_jamnxp_k$(toString(charSequenceSubSequence(this.text_1, pos, this.text_1.length)));
      Unit_getInstance();
    }
    return pb.build_1k0s4u_k$();
  };
  ParagraphBuilder_0.prototype._get_defaultFont__980693345_g7vntt_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = defaultFont$factory();
      tmp$ret$0 = this.defaultFont$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  ParagraphBuilder_0.prototype._get_defaultHeight__3332221705_fx6z93_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = defaultHeight$factory();
      tmp$ret$0 = this.defaultHeight$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  ParagraphBuilder_0.$metadata$ = {
    simpleName: 'ParagraphBuilder',
    kind: 'class',
    interfaces: []
  };
  function withDefaultFontSize(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var fontSize = orDefaultFontSize(_this__1828080292._get_fontSize__4225531099_h9sa57_k$());
    var tmp;
    if (_TextUnit___get_isEm__impl__3400122295(_this__1828080292._get_letterSpacing__1544247092_ht41e4_k$())) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_times_0 = _TextUnit___get_value__impl__1070471396(_this__1828080292._get_letterSpacing__1544247092_ht41e4_k$());
        checkArithmetic(fontSize);
        tmp$ret$0 = pack(_TextUnit___get_rawType__impl__2490641459(fontSize), _TextUnit___get_value__impl__1070471396(fontSize) * tmp0_times_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = _this__1828080292._get_letterSpacing__1544247092_ht41e4_k$();
    }
    var letterSpacing = tmp;
    return _this__1828080292.copy$default_833x4x_k$(null, fontSize, null, null, null, null, null, letterSpacing, null, null, null, null, null, null, 16253, null);
  }
  function toSkPlaceholderAlignment(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject === Companion_getInstance_8()._get_AboveBaseline__722672687_gp8p5d_k$()) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_TextTop__1187021641_bxo6xh_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_TextBottom__3306174899_eb5239_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_TextCenter__3901836489_a0l09h_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_Top__856463868_ev57j2_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_Bottom__4019569184_vhbf5q_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_8()._get_Center__320263478_f82kgo_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid PlaceholderVerticalAlign.');
    }
    return tmp;
  }
  function toSkAlignment(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject === Companion_getInstance_30()._get_Left__772882180_f3kmkv_k$()) {
      tmp = Alignment_LEFT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_30()._get_Right__2660000085_35qy9s_k$()) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_30()._get_Center__320263478_460fjz_k$()) {
      tmp = Alignment_CENTER_getInstance();
    } else if (tmp0_subject === Companion_getInstance_30()._get_Justify__2111415969_o60p4k_k$()) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (tmp0_subject === Companion_getInstance_30()._get_Start__2698618831_949u7u_k$()) {
      tmp = Alignment_START_getInstance();
    } else if (tmp0_subject === Companion_getInstance_30()._get_End__856015670_8qnv0f_k$()) {
      tmp = Alignment_END_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextAlign');
    }
    return tmp;
  }
  function orDefaultFontSize(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp;
    if (_get_isUnspecified__892174020(_this__1828080292)) {
      tmp = _get_DefaultFontSize__1734892544_0();
    } else if (_TextUnit___get_isEm__impl__3400122295(_this__1828080292)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_times_0 = _get_DefaultFontSize__1734892544_0();
        var tmp1_times_0 = _TextUnit___get_value__impl__1070471396(_this__1828080292);
        checkArithmetic(tmp0_times_0);
        tmp$ret$0 = pack(_TextUnit___get_rawType__impl__2490641459(tmp0_times_0), _TextUnit___get_value__impl__1070471396(tmp0_times_0) * tmp1_times_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = _this__1828080292;
    }
    return tmp;
  }
  function toSkDirection(_this__1828080292) {
    init_properties_SkiaParagraph_skiko_kt_333681775();
    var tmp0_subject = _this__1828080292;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver._get_position__3188952002_iahqv2_k$();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver._get_position__3188952002_iahqv2_k$();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver._get_defaultFont__980693345_g7vntt_k$();
    }, null);
  }
  function defaultHeight$factory() {
    unreachableDeclarationLog();
    return getPropertyCallableRef('defaultHeight', 1, KProperty1, function (receiver) {
      return receiver._get_defaultHeight__3332221705_fx6z93_k$();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_1204098763;
  function init_properties_SkiaParagraph_skiko_kt_333681775() {
    if (!properties_initialized_SkiaParagraph_skiko_kt_1204098763) {
      properties_initialized_SkiaParagraph_skiko_kt_1204098763 = true;
      DefaultFontSize_0 = _get_sp__1413130958(16);
      skTextStylesCache = new WeakHashMap();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function _get_style__3615460416($this) {
    unreachableDeclarationLog();
    return $this.style_1;
  }
  function _get_spanStyles__378637631_0($this) {
    unreachableDeclarationLog();
    return $this.spanStyles_1;
  }
  function _get_placeholders__3424351211($this) {
    unreachableDeclarationLog();
    return $this.placeholders_1;
  }
  function _get_density__3015598889($this) {
    unreachableDeclarationLog();
    return $this.density_1;
  }
  function _get_fontFamilyResolver__2595451122_0($this) {
    unreachableDeclarationLog();
    return $this.fontFamilyResolver_1;
  }
  function _set_layouter__881529696($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.layouter_1 = _set____804775014;
  }
  function _get_layouter__107398484_0($this) {
    unreachableDeclarationLog();
    return $this.layouter_1;
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.text_1, $this.textDirection_1, $this.style_1, $this.spanStyles_1, $this.placeholders_1, $this.density_1, $this.fontFamilyResolver_1);
  }
  function _set_minIntrinsicWidth__386773618($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.minIntrinsicWidth_1 = _set____804775014;
  }
  function _set_maxIntrinsicWidth__1634823456($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.maxIntrinsicWidth_1 = _set____804775014;
  }
  function resolveTextDirection_1($this, direction) {
    var tmp0_subject = direction;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_32()._get_Ltr__856230407_6ruc8o_k$()))) {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      if (equals(tmp_1 == null ? null : new TextDirection(tmp_1), new TextDirection(Companion_getInstance_32()._get_Rtl__856408967_q5wj5k_k$()))) {
        tmp = ResolvedTextDirection_Rtl_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        if (equals(tmp_2 == null ? null : new TextDirection(tmp_2), new TextDirection(Companion_getInstance_32()._get_Content__1623333336_pqoqw9_k$()))) {
          var tmp1_elvis_lhs = contentBasedTextDirection_0($this);
          tmp = tmp1_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp1_elvis_lhs;
        } else {
          var tmp_3 = tmp0_subject;
          if (equals(tmp_3 == null ? null : new TextDirection(tmp_3), new TextDirection(Companion_getInstance_32()._get_ContentOrLtr__94991581_tuf7ua_k$()))) {
            var tmp2_elvis_lhs = contentBasedTextDirection_0($this);
            tmp = tmp2_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp2_elvis_lhs;
          } else {
            var tmp_4 = tmp0_subject;
            if (equals(tmp_4 == null ? null : new TextDirection(tmp_4), new TextDirection(Companion_getInstance_32()._get_ContentOrRtl__95170141_agd0xe_k$()))) {
              var tmp3_elvis_lhs = contentBasedTextDirection_0($this);
              tmp = tmp3_elvis_lhs == null ? ResolvedTextDirection_Rtl_getInstance() : tmp3_elvis_lhs;
            } else {
              {
                tmp = ResolvedTextDirection_Ltr_getInstance();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function contentBasedTextDirection_0($this) {
    return contentBasedTextDirection($this.text_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.style_1 = style;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.textDirection_1 = resolveTextDirection_1(this, this.style_1._get_textDirection__681174591_d3hmoh_k$());
    this.layouter_1 = newLayouter(this);
    this.minIntrinsicWidth_1 = 0.0;
    this.maxIntrinsicWidth_1 = 0.0;
    var tmp = ensureNotNull(this.layouter_1);
    var tmp_0 = FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$();
    var para = tmp.layoutParagraph$default_batlz_k$(tmp_0, 0, null, null, null, null, 62, null);
    var tmp_1 = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_ceil_0 = para._get_minIntrinsicWidth__3368612606_fbizuq_k$();
      tmp$ret$0 = Math.ceil(tmp0_ceil_0);
      break $l$block;
    }
    tmp_1.minIntrinsicWidth_1 = tmp$ret$0;
    var tmp_2 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_ceil_0 = para._get_maxIntrinsicWidth__321695148_5bj1kc_k$();
      tmp$ret$1 = Math.ceil(tmp1_ceil_0);
      break $l$block_0;
    }
    tmp_2.maxIntrinsicWidth_1 = tmp$ret$1;
  }
  SkiaParagraphIntrinsics.prototype._get_text__809840318_de5ose_k$ = function () {
    return this.text_1;
  };
  SkiaParagraphIntrinsics.prototype._get_textDirection__681174591_b9jxof_k$ = function () {
    unreachableDeclarationLog();
    return this.textDirection_1;
  };
  SkiaParagraphIntrinsics.prototype.layouter_lcs8mh_k$ = function () {
    var tmp0_elvis_lhs = this.layouter_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.layouter_1 = null;
    return layouter;
  };
  SkiaParagraphIntrinsics.prototype._get_minIntrinsicWidth__3368612606_fbizuq_k$ = function () {
    return this.minIntrinsicWidth_1;
  };
  SkiaParagraphIntrinsics.prototype._get_maxIntrinsicWidth__321695148_5bj1kc_k$ = function () {
    return this.maxIntrinsicWidth_1;
  };
  SkiaParagraphIntrinsics.$metadata$ = {
    simpleName: 'SkiaParagraphIntrinsics',
    kind: 'class',
    interfaces: [ParagraphIntrinsics]
  };
  //region block: post-declaration
  FontFamilyResolverImpl.prototype.resolve$default_g9k5q4_k$ = resolve$default;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontFamily_ok416z_k$ = interceptFontFamily;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontWeight_yj7vf0_k$ = interceptFontWeight;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontStyle_aqbvzf_k$ = interceptFontStyle;
  PlatformResolveInterceptor$Companion$Default$1.prototype.interceptFontSynthesis_3mzb7i_k$ = interceptFontSynthesis;
  _no_name_provided__1_2832250971.prototype.get_1pi7hg_k$ = get;
  _no_name_provided__1_2832250971.prototype.fold_6dbyow_k$ = fold;
  _no_name_provided__1_2832250971.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__1_2832250971.prototype.plus_rgw9wi_k$ = plus_0;
  SkiaParagraph.prototype.getLineEnd$default_prmziz_k$ = getLineEnd$default;
  SkiaParagraph.prototype.paint$default_wa4bwc_k$ = paint$default;
  SkiaParagraphIntrinsics.prototype._get_hasStaleResolvedFonts__4168759652_2352fw_k$ = _get_hasStaleResolvedFonts__4168759652;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  CONCURRENT_MODIFICATION_EXCEPTIONS = true;
  BASE_SIZE = 4;
  DEBUG = false;
  TAG = 'SimpleArrayMap';
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.FontStyle = FontStyle;
  _.$crossModule$.FontSynthesis = FontSynthesis;
  _.$crossModule$.createFontFamilyResolver = createFontFamilyResolver_0;
  _.$crossModule$.ImeAction = ImeAction;
  _.$crossModule$.notifyFocusedRect = notifyFocusedRect;
  _.$crossModule$.PlatformTextInputService = PlatformTextInputService;
  _.$crossModule$.TextInputService = TextInputService;
  _.$crossModule$.FontLoader = FontLoader;
  _.$crossModule$.BaselineShift = BaselineShift;
  _.$crossModule$.TextAlign = TextAlign;
  _.$crossModule$.TextDirection = TextDirection;
  _.$crossModule$.TextOverflow = TextOverflow;
  _.$crossModule$.MultiParagraphIntrinsics = MultiParagraphIntrinsics;
  _.$crossModule$.MultiParagraph = MultiParagraph;
  _.$crossModule$.TextLayoutResult = TextLayoutResult;
  _.$crossModule$.TextRange = TextRange_0;
  _.$crossModule$.TextRange_1 = TextRange;
  _.$crossModule$.resolveDefaults = resolveDefaults;
  _.$crossModule$.CommitTextCommand_init_$Create$ = CommitTextCommand_init_$Create$;
  _.$crossModule$.TextLayoutInput_init_$Create$ = TextLayoutInput_init_$Create$_0;
  _.$crossModule$.AnnotatedString_init_$Create$ = AnnotatedString_init_$Create$_1;
  _.$crossModule$.TextStyle_init_$Create$ = TextStyle_init_$Create$_5;
  _.$crossModule$._TextOverflow___init__impl__1470450254 = _TextOverflow___init__impl__1470450254;
  _.$crossModule$._TextOverflow___get_value__impl__1925615142 = _TextOverflow___get_value__impl__1925615142;
  _.$crossModule$._TextRange___get_collapsed__impl__3538141143 = _TextRange___get_collapsed__impl__3538141143;
  _.$crossModule$._TextRange___get_end__impl__3306702867 = _TextRange___get_end__impl__3306702867;
  _.$crossModule$._TextRange___get_reversed__impl__3410665902 = _TextRange___get_reversed__impl__3410665902;
  _.$crossModule$._TextRange___get_start__impl__2306077420 = _TextRange___get_start__impl__2306077420;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_13;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_19;
  _.$crossModule$.Companion_getInstance_2 = Companion_getInstance_35;
  _.$crossModule$.TextPainter_getInstance = TextPainter_getInstance;
  _.$crossModule$.Companion_getInstance_3 = Companion_getInstance_10;
  _.$crossModule$.Companion_getInstance_4 = Companion_getInstance_11;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_ui_ui_text.js.map