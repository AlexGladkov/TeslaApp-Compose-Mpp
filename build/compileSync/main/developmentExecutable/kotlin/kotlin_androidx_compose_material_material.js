(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_kotlin.js', './kotlin_androidx_compose_foundation_foundation_layout.js', './kotlin_androidx_compose_animation_animation_core.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_foundation_foundation.js', './kotlin_androidx_compose_ui_ui_text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_foundation_foundation_layout.js'), require('./kotlin_androidx_compose_animation_animation_core.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_foundation_foundation.js'), require('./kotlin_androidx_compose_ui_ui_text.js'));
  else {
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_foundation_foundation_layout === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_foundation_foundation_layout' was not found. Please, check whether 'kotlin_androidx_compose_foundation_foundation_layout' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_animation_animation_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_animation_animation_core' was not found. Please, check whether 'kotlin_androidx_compose_animation_animation_core' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_foundation_foundation === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_foundation_foundation' was not found. Please, check whether 'kotlin_androidx_compose_foundation_foundation' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_text === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material'. Its dependency 'kotlin_androidx_compose_ui_ui_text' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_text' is loaded prior to 'kotlin_androidx_compose_material_material'.");
    }
    root.kotlin_androidx_compose_material_material = factory(typeof kotlin_androidx_compose_material_material === 'undefined' ? {} : kotlin_androidx_compose_material_material, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_foundation_foundation, kotlin_androidx_compose_ui_ui_text);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_foundation_foundation, kotlin_androidx_compose_ui_ui_text) {
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_4;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var padding$default = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.padding$default;
  var _get_sp__1413130958 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_sp__1413130958_1;
  var TextUnit = kotlin_androidx_compose_ui_ui_unit.$crossModule$.TextUnit_1;
  var _Dp___get_value__impl__3303478217 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___get_value__impl__3303478217;
  var width = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.width;
  var fillMaxHeight$default = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.fillMaxHeight$default;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp;
  var _get_FastOutSlowInEasing__2117326030 = kotlin_androidx_compose_animation_animation_core.$crossModule$._get_FastOutSlowInEasing__2117326030;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$crossModule$.TweenSpec_init_$Create$;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_2;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.structuralEqualityPolicy;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.mutableStateOf;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color_1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var _Color___get_value__impl__103472842 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$._Color___get_value__impl__103472842;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var KMutableProperty1 = kotlin_kotlin.$crossModule$.KMutableProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.staticCompositionLocalOf;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$crossModule$.compositionLocalOf$default;
  var CubicBezierEasing = kotlin_androidx_compose_animation_animation_core.$crossModule$.CubicBezierEasing;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var Dp__compareTo_impl_1789541913 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp__compareTo_impl_1789541913;
  var compositeOver = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.compositeOver;
  var Color__copy$default_impl_868080376 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Color__copy$default_impl_868080376;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var size = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.size;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$crossModule$.Spring_getInstance;
  var SpringSpec = kotlin_androidx_compose_animation_animation_core.$crossModule$.SpringSpec;
  var RoundedCornerShape = kotlin_androidx_compose_foundation_foundation.$crossModule$.RoundedCornerShape;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var widthIn$default = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.widthIn$default;
  var heightIn$default = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.heightIn$default;
  var tween$default = kotlin_androidx_compose_animation_animation_core.$crossModule$.tween$default;
  var FontStyle = kotlin_androidx_compose_ui_ui_text.$crossModule$.FontStyle;
  var TextAlign = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextAlign;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextOverflow;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventStart;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$crossModule$.isTraceInProgress;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var _ULong___get_data__impl__934646663 = kotlin_kotlin.$crossModule$._ULong___get_data__impl__934646663;
  var _TextUnit___get_packedValue__impl__3157586172 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___get_packedValue__impl__3157586172;
  var _TextOverflow___get_value__impl__1925615142 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextOverflow___get_value__impl__1925615142;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Companion_getInstance_7;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var Companion_getInstance_3 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var TextStyle_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$crossModule$.TextStyle_init_$Create$;
  var BasicText$composable = kotlin_androidx_compose_foundation_foundation.$crossModule$.BasicText$composable;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventEnd;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_4;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.compositionLocalOf;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Constraints;
  var defaultMinSize = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.defaultMinSize;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_text.$crossModule$.Companion_getInstance_1;
  var _get_sp__1413130958_0 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_sp__1413130958;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_TitlePadding__2464650674() {
    init_properties_AlertDialog_kt_791962992();
    return TitlePadding;
  }
  var TitlePadding;
  function _get_TextPadding__2323546125() {
    init_properties_AlertDialog_kt_791962992();
    return TextPadding;
  }
  var TextPadding;
  function _get_TitleBaselineDistanceFromTop__1097212210() {
    init_properties_AlertDialog_kt_791962992();
    return TitleBaselineDistanceFromTop;
  }
  var TitleBaselineDistanceFromTop;
  function _get_TextBaselineDistanceFromTitle__3608265706() {
    init_properties_AlertDialog_kt_791962992();
    return TextBaselineDistanceFromTitle;
  }
  var TextBaselineDistanceFromTitle;
  function _get_TextBaselineDistanceFromTop__1045099917() {
    init_properties_AlertDialog_kt_791962992();
    return TextBaselineDistanceFromTop;
  }
  var TextBaselineDistanceFromTop;
  var properties_initialized_AlertDialog_kt_2499544012;
  function init_properties_AlertDialog_kt_791962992() {
    if (!properties_initialized_AlertDialog_kt_2499544012) {
      properties_initialized_AlertDialog_kt_2499544012 = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(24);
        break $l$block;
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _Dp___init__impl__1377471179(24);
        break $l$block_0;
      }
      var tmp_1 = tmp$ret$1;
      TitlePadding = padding$default(tmp, tmp_0, null, tmp_1, null, 10, null);
      var tmp_2 = Companion_getInstance();
      var tmp$ret$0_0;
      $l$block_1: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(24);
        break $l$block_1;
      }
      var tmp_3 = tmp$ret$0_0;
      var tmp$ret$1_0;
      $l$block_2: {
        tmp$ret$1_0 = _Dp___init__impl__1377471179(24);
        break $l$block_2;
      }
      var tmp_4 = tmp$ret$1_0;
      var tmp$ret$2;
      $l$block_3: {
        tmp$ret$2 = _Dp___init__impl__1377471179(28);
        break $l$block_3;
      }
      TextPadding = padding$default(tmp_2, tmp_3, null, tmp_4, tmp$ret$2, 2, null);
      TitleBaselineDistanceFromTop = _get_sp__1413130958(40);
      TextBaselineDistanceFromTitle = _get_sp__1413130958(36);
      TextBaselineDistanceFromTop = _get_sp__1413130958(38);
      new TextUnit(Unit_getInstance());
    }
  }
  function _get_AppBarHeight__4290709074() {
    init_properties_AppBar_kt_1058155752();
    return AppBarHeight;
  }
  var AppBarHeight;
  function _get_AppBarHorizontalPadding__3703564630() {
    init_properties_AppBar_kt_1058155752();
    return AppBarHorizontalPadding;
  }
  var AppBarHorizontalPadding;
  function _get_TitleInsetWithoutIcon__1042137845() {
    init_properties_AppBar_kt_1058155752();
    return TitleInsetWithoutIcon;
  }
  var TitleInsetWithoutIcon;
  function _get_TitleIconModifier__4071472009() {
    init_properties_AppBar_kt_1058155752();
    return TitleIconModifier;
  }
  var TitleIconModifier;
  function _get_BottomAppBarCutoutOffset__2475431631() {
    init_properties_AppBar_kt_1058155752();
    return BottomAppBarCutoutOffset;
  }
  var BottomAppBarCutoutOffset;
  function _get_BottomAppBarRoundedEdgeRadius__2916379218() {
    init_properties_AppBar_kt_1058155752();
    return BottomAppBarRoundedEdgeRadius;
  }
  var BottomAppBarRoundedEdgeRadius;
  var properties_initialized_AppBar_kt_3181380876;
  function init_properties_AppBar_kt_1058155752() {
    if (!properties_initialized_AppBar_kt_3181380876) {
      properties_initialized_AppBar_kt_3181380876 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(56);
        break $l$block;
      }
      AppBarHeight = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(4);
        break $l$block_0;
      }
      AppBarHorizontalPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$1;
      $l$block_2: {
        var tmp$ret$0_1;
        $l$block_1: {
          tmp$ret$0_1 = _Dp___init__impl__1377471179(16);
          break $l$block_1;
        }
        var tmp0_minus_0 = tmp$ret$0_1;
        var tmp1_minus_0 = _get_AppBarHorizontalPadding__3703564630();
        tmp$ret$1 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_minus_0) - _Dp___get_value__impl__3303478217(tmp1_minus_0));
        break $l$block_2;
      }
      TitleInsetWithoutIcon = width(tmp, tmp$ret$1);
      var tmp_0 = Companion_getInstance();
      var tmp_1 = fillMaxHeight$default(tmp_0, 0.0, 1, null);
      var tmp$ret$1_0;
      $l$block_4: {
        var tmp$ret$0_2;
        $l$block_3: {
          tmp$ret$0_2 = _Dp___init__impl__1377471179(72);
          break $l$block_3;
        }
        var tmp0_minus_0_0 = tmp$ret$0_2;
        var tmp1_minus_0_0 = _get_AppBarHorizontalPadding__3703564630();
        tmp$ret$1_0 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_minus_0_0) - _Dp___get_value__impl__3303478217(tmp1_minus_0_0));
        break $l$block_4;
      }
      TitleIconModifier = width(tmp_1, tmp$ret$1_0);
      var tmp$ret$0_3;
      $l$block_5: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(8);
        break $l$block_5;
      }
      BottomAppBarCutoutOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_6: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(4);
        break $l$block_6;
      }
      BottomAppBarRoundedEdgeRadius = tmp$ret$0_4;
      new Dp(Unit_getInstance());
    }
  }
  function _get_AnimationSlideOffset__2448792747() {
    init_properties_BackdropScaffold_kt_311293614();
    return AnimationSlideOffset;
  }
  var AnimationSlideOffset;
  var properties_initialized_BackdropScaffold_kt_1809248722;
  function init_properties_BackdropScaffold_kt_311293614() {
    if (!properties_initialized_BackdropScaffold_kt_1809248722) {
      properties_initialized_BackdropScaffold_kt_1809248722 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(20);
        break $l$block;
      }
      AnimationSlideOffset = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_BadgeRadius__1981047356() {
    init_properties_Badge_kt_208683249();
    return BadgeRadius;
  }
  var BadgeRadius;
  function _get_BadgeWithContentRadius__1992022857() {
    init_properties_Badge_kt_208683249();
    return BadgeWithContentRadius;
  }
  var BadgeWithContentRadius;
  function _get_BadgeContentFontSize__2190933637() {
    init_properties_Badge_kt_208683249();
    return BadgeContentFontSize;
  }
  var BadgeContentFontSize;
  function _get_BadgeWithContentHorizontalPadding__3103002900() {
    init_properties_Badge_kt_208683249();
    return BadgeWithContentHorizontalPadding;
  }
  var BadgeWithContentHorizontalPadding;
  function _get_BadgeWithContentHorizontalOffset__3930091108() {
    init_properties_Badge_kt_208683249();
    return BadgeWithContentHorizontalOffset;
  }
  var BadgeWithContentHorizontalOffset;
  function _get_BadgeHorizontalOffset__2789155223() {
    init_properties_Badge_kt_208683249();
    return BadgeHorizontalOffset;
  }
  var BadgeHorizontalOffset;
  var properties_initialized_Badge_kt_3463763021;
  function init_properties_Badge_kt_208683249() {
    if (!properties_initialized_Badge_kt_3463763021) {
      properties_initialized_Badge_kt_3463763021 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(4);
        break $l$block;
      }
      BadgeRadius = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(8);
        break $l$block_0;
      }
      BadgeWithContentRadius = tmp$ret$0_0;
      BadgeContentFontSize = _get_sp__1413130958(10);
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(4);
        break $l$block_1;
      }
      BadgeWithContentHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_3: {
        var tmp$ret$0_2;
        $l$block_2: {
          tmp$ret$0_2 = _Dp___init__impl__1377471179(6);
          break $l$block_2;
        }
        var tmp0_unaryMinus_0 = tmp$ret$0_2;
        tmp$ret$1 = _Dp___init__impl__1377471179(-_Dp___get_value__impl__3303478217(tmp0_unaryMinus_0));
        break $l$block_3;
      }
      BadgeWithContentHorizontalOffset = tmp$ret$1;
      var tmp$ret$1_0;
      $l$block_5: {
        var tmp$ret$0_3;
        $l$block_4: {
          tmp$ret$0_3 = _Dp___init__impl__1377471179(4);
          break $l$block_4;
        }
        var tmp0_unaryMinus_0_0 = tmp$ret$0_3;
        tmp$ret$1_0 = _Dp___init__impl__1377471179(-_Dp___get_value__impl__3303478217(tmp0_unaryMinus_0_0));
        break $l$block_5;
      }
      BadgeHorizontalOffset = tmp$ret$1_0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_BottomNavigationAnimationSpec__802852337() {
    init_properties_BottomNavigation_kt_3195520411();
    return BottomNavigationAnimationSpec;
  }
  var BottomNavigationAnimationSpec;
  function _get_BottomNavigationHeight__2438095109() {
    init_properties_BottomNavigation_kt_3195520411();
    return BottomNavigationHeight;
  }
  var BottomNavigationHeight;
  function _get_BottomNavigationItemHorizontalPadding__779763766() {
    init_properties_BottomNavigation_kt_3195520411();
    return BottomNavigationItemHorizontalPadding;
  }
  var BottomNavigationItemHorizontalPadding;
  function _get_CombinedItemTextBaseline__1394135169() {
    init_properties_BottomNavigation_kt_3195520411();
    return CombinedItemTextBaseline;
  }
  var CombinedItemTextBaseline;
  var properties_initialized_BottomNavigation_kt_398508223;
  function init_properties_BottomNavigation_kt_3195520411() {
    if (!properties_initialized_BottomNavigation_kt_398508223) {
      properties_initialized_BottomNavigation_kt_398508223 = true;
      BottomNavigationAnimationSpec = TweenSpec_init_$Create$(300, 0, _get_FastOutSlowInEasing__2117326030(), 2, null);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(56);
        break $l$block;
      }
      BottomNavigationHeight = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(12);
        break $l$block_0;
      }
      BottomNavigationItemHorizontalPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(12);
        break $l$block_1;
      }
      CombinedItemTextBaseline = tmp$ret$0_1;
      new Dp(Unit_getInstance());
    }
  }
  function _get_FabEndSpacing__3044001154() {
    init_properties_BottomSheetScaffold_kt_2623869546();
    return FabEndSpacing;
  }
  var FabEndSpacing;
  var properties_initialized_BottomSheetScaffold_kt_3494286534;
  function init_properties_BottomSheetScaffold_kt_2623869546() {
    if (!properties_initialized_BottomSheetScaffold_kt_3494286534) {
      properties_initialized_BottomSheetScaffold_kt_3494286534 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(16);
        break $l$block;
      }
      FabEndSpacing = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_CheckboxRippleRadius__2080611974() {
    init_properties_Checkbox_kt_1226318071();
    return CheckboxRippleRadius;
  }
  var CheckboxRippleRadius;
  function _get_CheckboxDefaultPadding__1620642328() {
    init_properties_Checkbox_kt_1226318071();
    return CheckboxDefaultPadding;
  }
  var CheckboxDefaultPadding;
  function _get_CheckboxSize__834639687() {
    init_properties_Checkbox_kt_1226318071();
    return CheckboxSize;
  }
  var CheckboxSize;
  function _get_StrokeWidth__1334997251() {
    init_properties_Checkbox_kt_1226318071();
    return StrokeWidth;
  }
  var StrokeWidth;
  function _get_RadiusSize__1291241240() {
    init_properties_Checkbox_kt_1226318071();
    return RadiusSize;
  }
  var RadiusSize;
  var properties_initialized_Checkbox_kt_1536196635;
  function init_properties_Checkbox_kt_1226318071() {
    if (!properties_initialized_Checkbox_kt_1536196635) {
      properties_initialized_Checkbox_kt_1536196635 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(24);
        break $l$block;
      }
      CheckboxRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(2);
        break $l$block_0;
      }
      CheckboxDefaultPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(20);
        break $l$block_1;
      }
      CheckboxSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(2);
        break $l$block_2;
      }
      StrokeWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(2);
        break $l$block_3;
      }
      RadiusSize = tmp$ret$0_3;
      new Dp(Unit_getInstance());
    }
  }
  function _get_HorizontalPadding__1271774660() {
    init_properties_Chip_kt_2207852878();
    return HorizontalPadding;
  }
  var HorizontalPadding;
  function _get_LeadingIconStartSpacing__2768897393() {
    init_properties_Chip_kt_2207852878();
    return LeadingIconStartSpacing;
  }
  var LeadingIconStartSpacing;
  function _get_LeadingIconEndSpacing__3500856810() {
    init_properties_Chip_kt_2207852878();
    return LeadingIconEndSpacing;
  }
  var LeadingIconEndSpacing;
  function _get_TrailingIconSpacing__3870806179() {
    init_properties_Chip_kt_2207852878();
    return TrailingIconSpacing;
  }
  var TrailingIconSpacing;
  function _get_SelectedIconContainerSize__370881379() {
    init_properties_Chip_kt_2207852878();
    return SelectedIconContainerSize;
  }
  var SelectedIconContainerSize;
  var properties_initialized_Chip_kt_927382130;
  function init_properties_Chip_kt_2207852878() {
    if (!properties_initialized_Chip_kt_927382130) {
      properties_initialized_Chip_kt_927382130 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(12);
        break $l$block;
      }
      HorizontalPadding = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(4);
        break $l$block_0;
      }
      LeadingIconStartSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(8);
        break $l$block_1;
      }
      LeadingIconEndSpacing = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(8);
        break $l$block_2;
      }
      TrailingIconSpacing = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(24);
        break $l$block_3;
      }
      SelectedIconContainerSize = tmp$ret$0_3;
      new Dp(Unit_getInstance());
    }
  }
  function _get_LocalColors__1336186966() {
    init_properties_Colors_kt_2044397802();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.primary$delegate_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.primaryVariant$delegate_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.secondary$delegate_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.secondaryVariant$delegate_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.background$delegate_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.surface$delegate_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.error$delegate_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.onPrimary$delegate_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.onSecondary$delegate_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.onBackground$delegate_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.onSurface$delegate_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.onError$delegate_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.isLight$delegate_1 = mutableStateOf(isLight, structuralEqualityPolicy());
  }
  Colors.prototype._set_primary__2507197891_eu7qkk_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = primary$factory();
    return this.primary$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_primary__958205263_ey3ecs_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = primary$factory_0();
      tmp$ret$0 = this.primary$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_primaryVariant__1859798868_sbt98z_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = primaryVariant$factory();
    return this.primaryVariant$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_primaryVariant__3403526728_69907n_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = primaryVariant$factory_0();
      tmp$ret$0 = this.primaryVariant$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_secondary__1639719633_uyl5ze_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = secondary$factory();
    return this.secondary$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_secondary__3411455837_izd74y_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = secondary$factory_0();
      tmp$ret$0 = this.secondary$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_secondaryVariant__3127232134_wmc49t_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = secondaryVariant$factory();
    return this.secondaryVariant$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_secondaryVariant__591021178_s9yh29_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = secondaryVariant$factory_0();
      tmp$ret$0 = this.secondaryVariant$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_background__676109353_wpixq_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = background$factory();
    return this.background$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_background__4060324125_drprdq_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = background$factory_0();
      tmp$ret$0 = this.background$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_surface__2059388024_fk8h3l_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = surface$factory();
    return this.surface$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_surface__510395396_vr6crb_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = surface$factory_0();
      tmp$ret$0 = this.surface$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_error__854437949_m74m16_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = error$factory();
    return this.error$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_error__3212600009_fko66m_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = error$factory_0();
      tmp$ret$0 = this.error$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_onPrimary__2817604354_ton8m3_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = onPrimary$factory();
    return this.onPrimary$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_onPrimary__294373262_46hw0d_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = onPrimary$factory_0();
      tmp$ret$0 = this.onPrimary$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_onSecondary__3587587152_d7eown_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = onSecondary$factory();
    return this.onSecondary$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_onSecondary__1124062684_4tw3sv_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = onSecondary$factory_0();
      tmp$ret$0 = this.onSecondary$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_onBackground__930460298_khg2zh_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = onBackground$factory();
    return this.onBackground$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_onBackground__1870613118_tdif8j_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = onBackground$factory_0();
      tmp$ret$0 = this.onBackground$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_onSurface__2369794487_ay0low_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = onSurface$factory();
    return this.onSurface$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_onSurface__4141530691_kzkuew_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = onSurface$factory_0();
      tmp$ret$0 = this.onSurface$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_onError__483811644_ib3dwr_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = onError$factory();
    return this.onError$delegate_1._set_value__1325260276_x73o94_k$(new Color(_set____804775014));
  };
  Colors.prototype._get_onError__3229786312_esjsnn_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = onError$factory_0();
      tmp$ret$0 = this.onError$delegate_1._get_value__3683422336_a43j40_k$().value_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype._set_isLight__3246160633_90ftu8_k$ = function (_set____804775014) {
    var tmp0_setValue_0 = isLight$factory();
    return this.isLight$delegate_1._set_value__1325260276_x73o94_k$(_set____804775014);
  };
  Colors.prototype._get_isLight__1697168005_s2g77p_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = isLight$factory_0();
      tmp$ret$0 = this.isLight$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Colors.prototype.copy_nlygth_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.copy$default_kg4nwy_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = this._get_primary__958205263_ey3ecs_k$();
    if (!(($mask0 & 2) === 0))
      primaryVariant = this._get_primaryVariant__3403526728_69907n_k$();
    if (!(($mask0 & 4) === 0))
      secondary = this._get_secondary__3411455837_izd74y_k$();
    if (!(($mask0 & 8) === 0))
      secondaryVariant = this._get_secondaryVariant__591021178_s9yh29_k$();
    if (!(($mask0 & 16) === 0))
      background = this._get_background__4060324125_drprdq_k$();
    if (!(($mask0 & 32) === 0))
      surface = this._get_surface__510395396_vr6crb_k$();
    if (!(($mask0 & 64) === 0))
      error = this._get_error__3212600009_fko66m_k$();
    if (!(($mask0 & 128) === 0))
      onPrimary = this._get_onPrimary__294373262_46hw0d_k$();
    if (!(($mask0 & 256) === 0))
      onSecondary = this._get_onSecondary__1124062684_4tw3sv_k$();
    if (!(($mask0 & 512) === 0))
      onBackground = this._get_onBackground__1870613118_tdif8j_k$();
    if (!(($mask0 & 1024) === 0))
      onSurface = this._get_onSurface__4141530691_kzkuew_k$();
    if (!(($mask0 & 2048) === 0))
      onError = this._get_onError__3229786312_esjsnn_k$();
    if (!(($mask0 & 4096) === 0))
      isLight = this._get_isLight__1697168005_s2g77p_k$();
    return this.copy_nlygth_k$(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  Colors.prototype.toString = function () {
    return 'Colors(' + ('primary=' + new Color(this._get_primary__958205263_ey3ecs_k$()) + ', ') + ('primaryVariant=' + new Color(this._get_primaryVariant__3403526728_69907n_k$()) + ', ') + ('secondary=' + new Color(this._get_secondary__3411455837_izd74y_k$()) + ', ') + ('secondaryVariant=' + new Color(this._get_secondaryVariant__591021178_s9yh29_k$()) + ', ') + ('background=' + new Color(this._get_background__4060324125_drprdq_k$()) + ', ') + ('surface=' + new Color(this._get_surface__510395396_vr6crb_k$()) + ', ') + ('error=' + new Color(this._get_error__3212600009_fko66m_k$()) + ', ') + ('onPrimary=' + new Color(this._get_onPrimary__294373262_46hw0d_k$()) + ', ') + ('onSecondary=' + new Color(this._get_onSecondary__1124062684_4tw3sv_k$()) + ', ') + ('onBackground=' + new Color(this._get_onBackground__1870613118_tdif8j_k$()) + ', ') + ('onSurface=' + new Color(this._get_onSurface__4141530691_kzkuew_k$()) + ', ') + ('onError=' + new Color(this._get_onError__3229786312_esjsnn_k$()) + ', ') + ('isLight=' + this._get_isLight__1697168005_s2g77p_k$()) + ')';
  };
  Colors.$metadata$ = {
    simpleName: 'Colors',
    kind: 'class',
    interfaces: []
  };
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    init_properties_Colors_kt_2044397802();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function lightColors$default(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      primary = Color_0(new Long(-10354450, 0));
    if (!(($mask0 & 2) === 0))
      primaryVariant = Color_0(new Long(-13172557, 0));
    if (!(($mask0 & 4) === 0))
      secondary = Color_0(new Long(-16524602, 0));
    if (!(($mask0 & 8) === 0))
      secondaryVariant = Color_0(new Long(-16676986, 0));
    if (!(($mask0 & 16) === 0))
      background = Companion_getInstance_0()._get_White__2802292968_ol52dp_k$();
    if (!(($mask0 & 32) === 0))
      surface = Companion_getInstance_0()._get_White__2802292968_ol52dp_k$();
    if (!(($mask0 & 64) === 0))
      error = Color_0(new Long(-5242848, 0));
    if (!(($mask0 & 128) === 0))
      onPrimary = Companion_getInstance_0()._get_White__2802292968_ol52dp_k$();
    if (!(($mask0 & 256) === 0))
      onSecondary = Companion_getInstance_0()._get_Black__2204520402_og72wn_k$();
    if (!(($mask0 & 512) === 0))
      onBackground = Companion_getInstance_0()._get_Black__2204520402_og72wn_k$();
    if (!(($mask0 & 1024) === 0))
      onSurface = Companion_getInstance_0()._get_Black__2204520402_og72wn_k$();
    if (!(($mask0 & 2048) === 0))
      onError = Companion_getInstance_0()._get_White__2802292968_ol52dp_k$();
    return lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    init_properties_Colors_kt_2044397802();
    var $composer_0 = $composer;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_takeOrElse_0 = contentColorFor(MaterialTheme_getInstance().$get_colors$$composable_1703166968_pawxfy_k$($composer_0, 6), backgroundColor);
      var tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !equals(_Color___get_value__impl__103472842(tmp0_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance_0()._get_Unspecified__2946689370_rgrx8f_k$()));
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = tmp0_takeOrElse_0;
      } else {
        {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_$get_current$$composable_0_3_4163171862 = _get_LocalContentColor__2125971612();
              var tmp1_$get_current$$composable_0_4_4174487990 = $composer_0;
              var $composer_1_5 = tmp1_$get_current$$composable_0_4_4174487990;
              var tmp0_2_6 = $composer_1_5.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3_4163171862);
              tmp$ret$1 = tmp0_2_6.value_1;
              break $l$block_0;
            }
            var tmp0_return_2 = tmp$ret$1;
            tmp$ret$2 = tmp0_return_2;
            break $l$block_1;
          }
          tmp = tmp$ret$2;
        }
      }
      tmp$ret$3 = tmp;
      break $l$block_2;
    }
    var tmp1_group = tmp$ret$3;
    var tmp0 = tmp1_group;
    return tmp0;
  }
  function contentColorFor(_this__1828080292, backgroundColor) {
    init_properties_Colors_kt_2044397802();
    var tmp0_subject = backgroundColor;
    return equals(tmp0_subject, _this__1828080292._get_primary__958205263_ey3ecs_k$()) ? _this__1828080292._get_onPrimary__294373262_46hw0d_k$() : equals(tmp0_subject, _this__1828080292._get_primaryVariant__3403526728_69907n_k$()) ? _this__1828080292._get_onPrimary__294373262_46hw0d_k$() : equals(tmp0_subject, _this__1828080292._get_secondary__3411455837_izd74y_k$()) ? _this__1828080292._get_onSecondary__1124062684_4tw3sv_k$() : equals(tmp0_subject, _this__1828080292._get_secondaryVariant__591021178_s9yh29_k$()) ? _this__1828080292._get_onSecondary__1124062684_4tw3sv_k$() : equals(tmp0_subject, _this__1828080292._get_background__4060324125_drprdq_k$()) ? _this__1828080292._get_onBackground__1870613118_tdif8j_k$() : equals(tmp0_subject, _this__1828080292._get_surface__510395396_vr6crb_k$()) ? _this__1828080292._get_onSurface__4141530691_kzkuew_k$() : equals(tmp0_subject, _this__1828080292._get_error__3212600009_fko66m_k$()) ? _this__1828080292._get_onError__3229786312_esjsnn_k$() : Companion_getInstance_0()._get_Unspecified__2946689370_rgrx8f_k$();
  }
  function LocalColors$lambda() {
    return function () {
      return lightColors$default(null, null, null, null, null, null, null, null, null, null, null, null, 4095, null);
    };
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_primary__958205263_ey3ecs_k$());
    }, function (receiver, value) {
      return receiver._set_primary__2507197891_eu7qkk_k$(value.value_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_primary__958205263_ey3ecs_k$());
    }, function (receiver, value) {
      return receiver._set_primary__2507197891_eu7qkk_k$(value.value_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_primaryVariant__3403526728_69907n_k$());
    }, function (receiver, value) {
      return receiver._set_primaryVariant__1859798868_sbt98z_k$(value.value_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_primaryVariant__3403526728_69907n_k$());
    }, function (receiver, value) {
      return receiver._set_primaryVariant__1859798868_sbt98z_k$(value.value_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_secondary__3411455837_izd74y_k$());
    }, function (receiver, value) {
      return receiver._set_secondary__1639719633_uyl5ze_k$(value.value_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_secondary__3411455837_izd74y_k$());
    }, function (receiver, value) {
      return receiver._set_secondary__1639719633_uyl5ze_k$(value.value_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_secondaryVariant__591021178_s9yh29_k$());
    }, function (receiver, value) {
      return receiver._set_secondaryVariant__3127232134_wmc49t_k$(value.value_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_secondaryVariant__591021178_s9yh29_k$());
    }, function (receiver, value) {
      return receiver._set_secondaryVariant__3127232134_wmc49t_k$(value.value_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_background__4060324125_drprdq_k$());
    }, function (receiver, value) {
      return receiver._set_background__676109353_wpixq_k$(value.value_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_background__4060324125_drprdq_k$());
    }, function (receiver, value) {
      return receiver._set_background__676109353_wpixq_k$(value.value_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_surface__510395396_vr6crb_k$());
    }, function (receiver, value) {
      return receiver._set_surface__2059388024_fk8h3l_k$(value.value_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_surface__510395396_vr6crb_k$());
    }, function (receiver, value) {
      return receiver._set_surface__2059388024_fk8h3l_k$(value.value_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_error__3212600009_fko66m_k$());
    }, function (receiver, value) {
      return receiver._set_error__854437949_m74m16_k$(value.value_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_error__3212600009_fko66m_k$());
    }, function (receiver, value) {
      return receiver._set_error__854437949_m74m16_k$(value.value_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onPrimary__294373262_46hw0d_k$());
    }, function (receiver, value) {
      return receiver._set_onPrimary__2817604354_ton8m3_k$(value.value_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onPrimary__294373262_46hw0d_k$());
    }, function (receiver, value) {
      return receiver._set_onPrimary__2817604354_ton8m3_k$(value.value_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onSecondary__1124062684_4tw3sv_k$());
    }, function (receiver, value) {
      return receiver._set_onSecondary__3587587152_d7eown_k$(value.value_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onSecondary__1124062684_4tw3sv_k$());
    }, function (receiver, value) {
      return receiver._set_onSecondary__3587587152_d7eown_k$(value.value_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onBackground__1870613118_tdif8j_k$());
    }, function (receiver, value) {
      return receiver._set_onBackground__930460298_khg2zh_k$(value.value_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onBackground__1870613118_tdif8j_k$());
    }, function (receiver, value) {
      return receiver._set_onBackground__930460298_khg2zh_k$(value.value_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onSurface__4141530691_kzkuew_k$());
    }, function (receiver, value) {
      return receiver._set_onSurface__2369794487_ay0low_k$(value.value_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onSurface__4141530691_kzkuew_k$());
    }, function (receiver, value) {
      return receiver._set_onSurface__2369794487_ay0low_k$(value.value_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onError__3229786312_esjsnn_k$());
    }, function (receiver, value) {
      return receiver._set_onError__483811644_ib3dwr_k$(value.value_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver._get_onError__3229786312_esjsnn_k$());
    }, function (receiver, value) {
      return receiver._set_onError__483811644_ib3dwr_k$(value.value_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isLight__1697168005_s2g77p_k$();
    }, function (receiver, value) {
      return receiver._set_isLight__3246160633_90ftu8_k$(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver._get_isLight__1697168005_s2g77p_k$();
    }, function (receiver, value) {
      return receiver._set_isLight__3246160633_90ftu8_k$(value);
    });
  }
  var properties_initialized_Colors_kt_4167622926;
  function init_properties_Colors_kt_2044397802() {
    if (!properties_initialized_Colors_kt_4167622926) {
      properties_initialized_Colors_kt_4167622926 = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda());
    }
  }
  function _get_LocalContentAlpha__2066054657() {
    init_properties_ContentAlpha_kt_1106343829();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function LocalContentAlpha$lambda() {
    return function () {
      return 1.0;
    };
  }
  var properties_initialized_ContentAlpha_kt_2501747897;
  function init_properties_ContentAlpha_kt_1106343829() {
    if (!properties_initialized_ContentAlpha_kt_2501747897) {
      properties_initialized_ContentAlpha_kt_2501747897 = true;
      LocalContentAlpha = compositionLocalOf$default(null, LocalContentAlpha$lambda(), 1, null);
    }
  }
  function _get_LocalContentColor__2125971612() {
    init_properties_ContentColor_kt_2851962736();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    return function () {
      return new Color(Companion_getInstance_0()._get_Black__2204520402_og72wn_k$());
    };
  }
  var properties_initialized_ContentColor_kt_4247366804;
  function init_properties_ContentColor_kt_2851962736() {
    if (!properties_initialized_ContentColor_kt_4247366804) {
      properties_initialized_ContentColor_kt_4247366804 = true;
      LocalContentColor = compositionLocalOf$default(null, LocalContentColor$lambda(), 1, null);
    }
  }
  function _get_mouseSlop__3983686130() {
    init_properties_DragGestureDetectorCopy_kt_1362924996();
    return mouseSlop;
  }
  var mouseSlop;
  function _get_defaultTouchSlop__1834675507() {
    init_properties_DragGestureDetectorCopy_kt_1362924996();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function _get_mouseToTouchSlopRatio__3328561215() {
    init_properties_DragGestureDetectorCopy_kt_1362924996();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  var properties_initialized_DragGestureDetectorCopy_kt_3650980384;
  function init_properties_DragGestureDetectorCopy_kt_1362924996() {
    if (!properties_initialized_DragGestureDetectorCopy_kt_3650980384) {
      properties_initialized_DragGestureDetectorCopy_kt_3650980384 = true;
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
  function _get_EndDrawerPadding__1845935750() {
    init_properties_Drawer_kt_214798793();
    return EndDrawerPadding;
  }
  var EndDrawerPadding;
  function _get_DrawerVelocityThreshold__1572816308() {
    init_properties_Drawer_kt_214798793();
    return DrawerVelocityThreshold;
  }
  var DrawerVelocityThreshold;
  function _get_AnimationSpec__2359952242() {
    init_properties_Drawer_kt_214798793();
    return AnimationSpec;
  }
  var AnimationSpec;
  var properties_initialized_Drawer_kt_2338023917;
  function init_properties_Drawer_kt_214798793() {
    if (!properties_initialized_Drawer_kt_2338023917) {
      properties_initialized_Drawer_kt_2338023917 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(56);
        break $l$block;
      }
      EndDrawerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(400);
        break $l$block_0;
      }
      DrawerVelocityThreshold = tmp$ret$0_0;
      AnimationSpec = TweenSpec_init_$Create$(256, 0, null, 6, null);
    }
  }
  function _get_DefaultIncomingSpec__3042800911() {
    init_properties_Elevation_kt_3703244151();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function _get_DefaultOutgoingSpec__3954726281() {
    init_properties_Elevation_kt_3703244151();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function _get_HoveredOutgoingSpec__3877306159() {
    init_properties_Elevation_kt_3703244151();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  var properties_initialized_Elevation_kt_424577747;
  function init_properties_Elevation_kt_3703244151() {
    if (!properties_initialized_Elevation_kt_424577747) {
      properties_initialized_Elevation_kt_424577747 = true;
      DefaultIncomingSpec = TweenSpec_init_$Create$(120, 0, _get_FastOutSlowInEasing__2117326030(), 2, null);
      DefaultOutgoingSpec = TweenSpec_init_$Create$(150, 0, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0), 2, null);
      HoveredOutgoingSpec = TweenSpec_init_$Create$(120, 0, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0), 2, null);
    }
  }
  function _get_LocalElevationOverlay__2388658419() {
    init_properties_ElevationOverlay_kt_755521671();
    return LocalElevationOverlay;
  }
  var LocalElevationOverlay;
  function _get_LocalAbsoluteElevation__959721936() {
    init_properties_ElevationOverlay_kt_755521671();
    return LocalAbsoluteElevation;
  }
  var LocalAbsoluteElevation;
  function ElevationOverlay() {
  }
  ElevationOverlay.$metadata$ = {
    simpleName: 'ElevationOverlay',
    kind: 'interface',
    interfaces: []
  };
  function DefaultElevationOverlay() {
    DefaultElevationOverlay_instance = this;
  }
  DefaultElevationOverlay.prototype.apply_e856lp_k$ = function (color, elevation) {
    illegalDecoyCallException('apply');
  };
  DefaultElevationOverlay.prototype.apply$composable_pd3zbm_k$ = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    var colors = MaterialTheme_getInstance().$get_colors$$composable_1703166968_pawxfy_k$($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(0);
      break $l$block;
    }
    if (Dp__compareTo_impl_1789541913(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors._get_isLight__1697168005_s2g77p_k$();
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var foregroundColor = calculateForegroundColor$composable(color, elevation, $composer_0, 14 & $changed | 112 & $changed);
      tmp = compositeOver(foregroundColor, color);
    } else {
      {
        tmp = color;
      }
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    return tmp0;
  };
  DefaultElevationOverlay.$metadata$ = {
    simpleName: 'DefaultElevationOverlay',
    kind: 'object',
    interfaces: [ElevationOverlay]
  };
  var DefaultElevationOverlay_instance;
  function DefaultElevationOverlay_getInstance() {
    if (DefaultElevationOverlay_instance == null)
      new DefaultElevationOverlay();
    return DefaultElevationOverlay_instance;
  }
  function calculateForegroundColor$composable(backgroundColor, elevation, $composer, $changed) {
    init_properties_ElevationOverlay_kt_755521671();
    var $composer_0 = $composer;
    var tmp$ret$0;
    $l$block: {
      var tmp0_ln_0 = _Dp___get_value__impl__3303478217(elevation) + 1;
      tmp$ret$0 = Math.log(tmp0_ln_0);
      break $l$block;
    }
    var alpha = (4.5 * tmp$ret$0 + 2.0) / 100.0;
    var baseForegroundColor = contentColorFor$composable(backgroundColor, $composer_0, 14 & $changed);
    var tmp0 = Color__copy$default_impl_868080376(baseForegroundColor, alpha, 0.0, 0.0, 0.0, 14, null);
    return tmp0;
  }
  function LocalElevationOverlay$lambda() {
    return function () {
      return DefaultElevationOverlay_getInstance();
    };
  }
  function LocalAbsoluteElevation$lambda() {
    return function () {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(0);
        break $l$block;
      }
      return new Dp(tmp$ret$0);
    };
  }
  var properties_initialized_ElevationOverlay_kt_2253476779;
  function init_properties_ElevationOverlay_kt_755521671() {
    if (!properties_initialized_ElevationOverlay_kt_2253476779) {
      properties_initialized_ElevationOverlay_kt_2253476779 = true;
      LocalElevationOverlay = staticCompositionLocalOf(LocalElevationOverlay$lambda());
      LocalAbsoluteElevation = compositionLocalOf$default(null, LocalAbsoluteElevation$lambda(), 1, null);
    }
  }
  function ExperimentalMaterialApi() {
  }
  ExperimentalMaterialApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalMaterialApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalMaterialApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalMaterialApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalMaterialApi.prototype.toString = function () {
    return '@androidx.compose.material.ExperimentalMaterialApi()';
  };
  ExperimentalMaterialApi.$metadata$ = {
    simpleName: 'ExperimentalMaterialApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _get_FabSize__2642751625() {
    init_properties_FloatingActionButton_kt_2691145772();
    return FabSize;
  }
  var FabSize;
  function _get_ExtendedFabSize__3383629282() {
    init_properties_FloatingActionButton_kt_2691145772();
    return ExtendedFabSize;
  }
  var ExtendedFabSize;
  function _get_ExtendedFabIconPadding__3127253185() {
    init_properties_FloatingActionButton_kt_2691145772();
    return ExtendedFabIconPadding;
  }
  var ExtendedFabIconPadding;
  function _get_ExtendedFabTextPadding__1224813941() {
    init_properties_FloatingActionButton_kt_2691145772();
    return ExtendedFabTextPadding;
  }
  var ExtendedFabTextPadding;
  var properties_initialized_FloatingActionButton_kt_3904268624;
  function init_properties_FloatingActionButton_kt_2691145772() {
    if (!properties_initialized_FloatingActionButton_kt_3904268624) {
      properties_initialized_FloatingActionButton_kt_3904268624 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(56);
        break $l$block;
      }
      FabSize = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(48);
        break $l$block_0;
      }
      ExtendedFabSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(12);
        break $l$block_1;
      }
      ExtendedFabIconPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(20);
        break $l$block_2;
      }
      ExtendedFabTextPadding = tmp$ret$0_2;
      new Dp(Unit_getInstance());
    }
  }
  function _get_DefaultIconSizeModifier__2729170431() {
    init_properties_Icon_kt_3100243457();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  var properties_initialized_Icon_kt_1819772709;
  function init_properties_Icon_kt_3100243457() {
    if (!properties_initialized_Icon_kt_1819772709) {
      properties_initialized_Icon_kt_1819772709 = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(24);
        break $l$block;
      }
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function _get_RippleRadius__2821739145() {
    init_properties_IconButton_kt_541405679();
    return RippleRadius;
  }
  var RippleRadius;
  var properties_initialized_IconButton_kt_1981962259;
  function init_properties_IconButton_kt_541405679() {
    if (!properties_initialized_IconButton_kt_1981962259) {
      properties_initialized_IconButton_kt_1981962259 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(24);
        break $l$block;
      }
      RippleRadius = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.$stable_1 = 0;
  }
  MaterialTheme.prototype._get_colors__3234885531_hj58bp_k$ = function () {
    illegalDecoyCallException('<get-colors>');
  };
  MaterialTheme.prototype._get_typography__1999733052_x2l7wc_k$ = function () {
    illegalDecoyCallException('<get-typography>');
  };
  MaterialTheme.prototype._get_shapes__44529753_qifdl_k$ = function () {
    illegalDecoyCallException('<get-shapes>');
  };
  MaterialTheme.prototype.$get_colors$$composable_1703166968_pawxfy_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    var tmp$ret$0;
    $l$block: {
      var tmp0_$get_current$$composable_0_3888126690 = _get_LocalColors__1336186966();
      var tmp1_$get_current$$composable_0_3633390145 = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_0_3633390145;
      var tmp0_2 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3888126690);
      tmp$ret$0 = tmp0_2;
      break $l$block;
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  };
  MaterialTheme.prototype.$get_typography$$composable_3494141879_fm42xb_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    var tmp$ret$0;
    $l$block: {
      var tmp0_$get_current$$composable_0_3888126690 = _get_LocalTypography__3120354423();
      var tmp1_$get_current$$composable_0_3633390145 = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_0_3633390145;
      var tmp0_2 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3888126690);
      tmp$ret$0 = tmp0_2;
      break $l$block;
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  };
  MaterialTheme.prototype.$get_shapes$$composable_2857433210_4kixjg_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    var tmp$ret$0;
    $l$block: {
      var tmp0_$get_current$$composable_0_3888126690 = _get_LocalShapes__2440798484();
      var tmp1_$get_current$$composable_0_3633390145 = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_0_3633390145;
      var tmp0_2 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3888126690);
      tmp$ret$0 = tmp0_2;
      break $l$block;
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  };
  MaterialTheme.$metadata$ = {
    simpleName: 'MaterialTheme',
    kind: 'object',
    interfaces: []
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function _get_MenuElevation__4065075443() {
    init_properties_Menu_kt_2411834203();
    return MenuElevation;
  }
  var MenuElevation;
  function _get_MenuVerticalMargin__3015181256() {
    init_properties_Menu_kt_2411834203();
    return MenuVerticalMargin;
  }
  var MenuVerticalMargin;
  function _get_DropdownMenuItemHorizontalPadding__2669710695() {
    init_properties_Menu_kt_2411834203();
    return DropdownMenuItemHorizontalPadding;
  }
  var DropdownMenuItemHorizontalPadding;
  function _get_DropdownMenuVerticalPadding__3673457798() {
    init_properties_Menu_kt_2411834203();
    return DropdownMenuVerticalPadding;
  }
  var DropdownMenuVerticalPadding;
  function _get_DropdownMenuItemDefaultMinWidth__1169150783() {
    init_properties_Menu_kt_2411834203();
    return DropdownMenuItemDefaultMinWidth;
  }
  var DropdownMenuItemDefaultMinWidth;
  function _get_DropdownMenuItemDefaultMaxWidth__396672209() {
    init_properties_Menu_kt_2411834203();
    return DropdownMenuItemDefaultMaxWidth;
  }
  var DropdownMenuItemDefaultMaxWidth;
  function _get_DropdownMenuItemDefaultMinHeight__1345998032() {
    init_properties_Menu_kt_2411834203();
    return DropdownMenuItemDefaultMinHeight;
  }
  var DropdownMenuItemDefaultMinHeight;
  var properties_initialized_Menu_kt_1131363455;
  function init_properties_Menu_kt_2411834203() {
    if (!properties_initialized_Menu_kt_1131363455) {
      properties_initialized_Menu_kt_1131363455 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(8);
        break $l$block;
      }
      MenuElevation = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(48);
        break $l$block_0;
      }
      MenuVerticalMargin = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(16);
        break $l$block_1;
      }
      DropdownMenuItemHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(8);
        break $l$block_2;
      }
      DropdownMenuVerticalPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(112);
        break $l$block_3;
      }
      DropdownMenuItemDefaultMinWidth = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(280);
        break $l$block_4;
      }
      DropdownMenuItemDefaultMaxWidth = tmp$ret$0_4;
      var tmp$ret$0_5;
      $l$block_5: {
        tmp$ret$0_5 = _Dp___init__impl__1377471179(48);
        break $l$block_5;
      }
      DropdownMenuItemDefaultMinHeight = tmp$ret$0_5;
      new Dp(Unit_getInstance());
    }
  }
  function _get_NavigationRailAnimationSpec__360097688() {
    init_properties_NavigationRail_kt_3490909140();
    return NavigationRailAnimationSpec;
  }
  var NavigationRailAnimationSpec;
  function _get_NavigationRailItemSize__2305991825() {
    init_properties_NavigationRail_kt_3490909140();
    return NavigationRailItemSize;
  }
  var NavigationRailItemSize;
  function _get_NavigationRailItemCompactSize__3600190534() {
    init_properties_NavigationRail_kt_3490909140();
    return NavigationRailItemCompactSize;
  }
  var NavigationRailItemCompactSize;
  function _get_NavigationRailPadding__1748385254() {
    init_properties_NavigationRail_kt_3490909140();
    return NavigationRailPadding;
  }
  var NavigationRailPadding;
  function _get_HeaderPadding__1819028653() {
    init_properties_NavigationRail_kt_3490909140();
    return HeaderPadding;
  }
  var HeaderPadding;
  function _get_ItemLabelBaselineBottomOffset__4070413485() {
    init_properties_NavigationRail_kt_3490909140();
    return ItemLabelBaselineBottomOffset;
  }
  var ItemLabelBaselineBottomOffset;
  function _get_ItemIconTopOffset__1409693045() {
    init_properties_NavigationRail_kt_3490909140();
    return ItemIconTopOffset;
  }
  var ItemIconTopOffset;
  var properties_initialized_NavigationRail_kt_149454840;
  function init_properties_NavigationRail_kt_3490909140() {
    if (!properties_initialized_NavigationRail_kt_149454840) {
      properties_initialized_NavigationRail_kt_149454840 = true;
      NavigationRailAnimationSpec = TweenSpec_init_$Create$(300, 0, _get_FastOutSlowInEasing__2117326030(), 2, null);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(72);
        break $l$block;
      }
      NavigationRailItemSize = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(56);
        break $l$block_0;
      }
      NavigationRailItemCompactSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(8);
        break $l$block_1;
      }
      NavigationRailPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(8);
        break $l$block_2;
      }
      HeaderPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(16);
        break $l$block_3;
      }
      ItemLabelBaselineBottomOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(14);
        break $l$block_4;
      }
      ItemIconTopOffset = tmp$ret$0_4;
      new Dp(Unit_getInstance());
    }
  }
  function _get_OutlinedTextFieldInnerPadding__3557340587() {
    init_properties_OutlinedTextField_kt_1821213321();
    return OutlinedTextFieldInnerPadding;
  }
  var OutlinedTextFieldInnerPadding;
  function _get_OutlinedTextFieldTopPadding__1752650666() {
    init_properties_OutlinedTextField_kt_1821213321();
    return OutlinedTextFieldTopPadding;
  }
  var OutlinedTextFieldTopPadding;
  var properties_initialized_OutlinedTextField_kt_1013181413;
  function init_properties_OutlinedTextField_kt_1821213321() {
    if (!properties_initialized_OutlinedTextField_kt_1013181413) {
      properties_initialized_OutlinedTextField_kt_1013181413 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(4);
        break $l$block;
      }
      OutlinedTextFieldInnerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(8);
        break $l$block_0;
      }
      OutlinedTextFieldTopPadding = tmp$ret$0_0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_LinearIndicatorHeight__4008727008() {
    init_properties_ProgressIndicator_kt_1142034002();
    return LinearIndicatorHeight;
  }
  var LinearIndicatorHeight;
  function _get_LinearIndicatorWidth__2224876591() {
    init_properties_ProgressIndicator_kt_1142034002();
    return LinearIndicatorWidth;
  }
  var LinearIndicatorWidth;
  function _get_CircularIndicatorDiameter__1909375284() {
    init_properties_ProgressIndicator_kt_1142034002();
    return CircularIndicatorDiameter;
  }
  var CircularIndicatorDiameter;
  function _get_FirstLineHeadEasing__1162356610() {
    init_properties_ProgressIndicator_kt_1142034002();
    return FirstLineHeadEasing;
  }
  var FirstLineHeadEasing;
  function _get_FirstLineTailEasing__1342677778() {
    init_properties_ProgressIndicator_kt_1142034002();
    return FirstLineTailEasing;
  }
  var FirstLineTailEasing;
  function _get_SecondLineHeadEasing__424472248() {
    init_properties_ProgressIndicator_kt_1142034002();
    return SecondLineHeadEasing;
  }
  var SecondLineHeadEasing;
  function _get_SecondLineTailEasing__604793416() {
    init_properties_ProgressIndicator_kt_1142034002();
    return SecondLineTailEasing;
  }
  var SecondLineTailEasing;
  function _get_CircularEasing__2632331905() {
    init_properties_ProgressIndicator_kt_1142034002();
    return CircularEasing;
  }
  var CircularEasing;
  function ProgressIndicatorDefaults() {
    ProgressIndicatorDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _Dp___init__impl__1377471179(4);
      break $l$block;
    }
    tmp.StrokeWidth_1 = tmp$ret$0;
    this.IndicatorBackgroundOpacity_1 = 0.24;
    this.ProgressAnimationSpec_1 = new SpringSpec(Spring_getInstance()._get_DampingRatioNoBouncy__4171516389_21hzbv_k$(), Spring_getInstance()._get_StiffnessVeryLow__3949833356_5phf1w_k$(), 1 / 1000.0);
    this.$stable_1 = 0;
  }
  ProgressIndicatorDefaults.prototype._get_StrokeWidth__1334997251_qmxlxa_k$ = function () {
    return this.StrokeWidth_1;
  };
  ProgressIndicatorDefaults.prototype._get_IndicatorBackgroundOpacity__1864591229_uu4nst_k$ = function () {
    return this.IndicatorBackgroundOpacity_1;
  };
  ProgressIndicatorDefaults.prototype._get_ProgressAnimationSpec__3757661183_8vwc1t_k$ = function () {
    return this.ProgressAnimationSpec_1;
  };
  ProgressIndicatorDefaults.$metadata$ = {
    simpleName: 'ProgressIndicatorDefaults',
    kind: 'object',
    interfaces: []
  };
  var ProgressIndicatorDefaults_instance;
  function ProgressIndicatorDefaults_getInstance() {
    if (ProgressIndicatorDefaults_instance == null)
      new ProgressIndicatorDefaults();
    return ProgressIndicatorDefaults_instance;
  }
  var properties_initialized_ProgressIndicator_kt_334002094;
  function init_properties_ProgressIndicator_kt_1142034002() {
    if (!properties_initialized_ProgressIndicator_kt_334002094) {
      properties_initialized_ProgressIndicator_kt_334002094 = true;
      LinearIndicatorHeight = ProgressIndicatorDefaults_getInstance().StrokeWidth_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(240);
        break $l$block;
      }
      LinearIndicatorWidth = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(40);
        break $l$block_0;
      }
      CircularIndicatorDiameter = tmp$ret$0_0;
      FirstLineHeadEasing = new CubicBezierEasing(0.2, 0.0, 0.8, 1.0);
      FirstLineTailEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      SecondLineHeadEasing = new CubicBezierEasing(0.0, 0.0, 0.65, 1.0);
      SecondLineTailEasing = new CubicBezierEasing(0.1, 0.0, 0.45, 1.0);
      CircularEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    }
  }
  function _get_RadioButtonRippleRadius__2567108738() {
    init_properties_RadioButton_kt_2531783559();
    return RadioButtonRippleRadius;
  }
  var RadioButtonRippleRadius;
  function _get_RadioButtonPadding__3345205159() {
    init_properties_RadioButton_kt_2531783559();
    return RadioButtonPadding;
  }
  var RadioButtonPadding;
  function _get_RadioButtonSize__893824323() {
    init_properties_RadioButton_kt_2531783559();
    return RadioButtonSize;
  }
  var RadioButtonSize;
  function _get_RadioRadius__679696100() {
    init_properties_RadioButton_kt_2531783559();
    return RadioRadius;
  }
  var RadioRadius;
  function _get_RadioButtonDotSize__3888845294() {
    init_properties_RadioButton_kt_2531783559();
    return RadioButtonDotSize;
  }
  var RadioButtonDotSize;
  function _get_RadioStrokeWidth__515509656() {
    init_properties_RadioButton_kt_2531783559();
    return RadioStrokeWidth;
  }
  var RadioStrokeWidth;
  var properties_initialized_RadioButton_kt_4239364579;
  function init_properties_RadioButton_kt_2531783559() {
    if (!properties_initialized_RadioButton_kt_4239364579) {
      properties_initialized_RadioButton_kt_4239364579 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(24);
        break $l$block;
      }
      RadioButtonRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(2);
        break $l$block_0;
      }
      RadioButtonPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(20);
        break $l$block_1;
      }
      RadioButtonSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        var tmp0_div_0 = _get_RadioButtonSize__893824323();
        tmp$ret$0_2 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_div_0) / 2);
        break $l$block_2;
      }
      RadioRadius = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(12);
        break $l$block_3;
      }
      RadioButtonDotSize = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(2);
        break $l$block_4;
      }
      RadioStrokeWidth = tmp$ret$0_4;
      new Dp(Unit_getInstance());
    }
  }
  function _get_LocalFabPlacement__126399976() {
    init_properties_Scaffold_kt_3322043364();
    return LocalFabPlacement;
  }
  var LocalFabPlacement;
  function _get_FabSpacing__369530031() {
    init_properties_Scaffold_kt_3322043364();
    return FabSpacing;
  }
  var FabSpacing;
  function FabPlacement(isDocked, left, width, height) {
    this.isDocked_1 = isDocked;
    this.left_1 = left;
    this.width_1 = width;
    this.height_1 = height;
  }
  FabPlacement.prototype._get_isDocked__2730662767_pvch3l_k$ = function () {
    return this.isDocked_1;
  };
  FabPlacement.prototype._get_left__802434852_d9qyp0_k$ = function () {
    return this.left_1;
  };
  FabPlacement.prototype._get_width__3719200459_9isoj9_k$ = function () {
    return this.width_1;
  };
  FabPlacement.prototype._get_height__3088126660_jyis70_k$ = function () {
    return this.height_1;
  };
  FabPlacement.$metadata$ = {
    simpleName: 'FabPlacement',
    kind: 'class',
    interfaces: []
  };
  function LocalFabPlacement$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_Scaffold_kt_3631921928;
  function init_properties_Scaffold_kt_3322043364() {
    if (!properties_initialized_Scaffold_kt_3631921928) {
      properties_initialized_Scaffold_kt_3631921928 = true;
      LocalFabPlacement = staticCompositionLocalOf(LocalFabPlacement$lambda());
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(16);
        break $l$block;
      }
      FabSpacing = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_LocalShapes__2440798484() {
    init_properties_Shapes_kt_2719144488();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes_init_$Init$(small, medium, large, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(4);
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      small = RoundedCornerShape(tmp$ret$0);
    }
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(4);
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      medium = RoundedCornerShape(tmp$ret$0_1);
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(0);
        tmp$ret$2 = Unit_getInstance();
        break $l$block_1;
      }
      large = RoundedCornerShape(tmp$ret$0_2);
    }
    Shapes.call($this, small, medium, large);
    return $this;
  }
  function Shapes_init_$Create$(small, medium, large, $mask0, $marker) {
    return Shapes_init_$Init$(small, medium, large, $mask0, $marker, Object.create(Shapes.prototype));
  }
  function Shapes(small, medium, large) {
    this.small_1 = small;
    this.medium_1 = medium;
    this.large_1 = large;
  }
  Shapes.prototype._get_small__3608281002_bcu2ja_k$ = function () {
    return this.small_1;
  };
  Shapes.prototype._get_medium__3226132022_hocukq_k$ = function () {
    return this.medium_1;
  };
  Shapes.prototype._get_large__3397296118_eug7ii_k$ = function () {
    return this.large_1;
  };
  Shapes.prototype.copy_w6gorw_k$ = function (small, medium, large) {
    return new Shapes(small, medium, large);
  };
  Shapes.prototype.copy$default_phj8z2_k$ = function (small, medium, large, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      small = this.small_1;
    if (!(($mask0 & 2) === 0))
      medium = this.medium_1;
    if (!(($mask0 & 4) === 0))
      large = this.large_1;
    return this.copy_w6gorw_k$(small, medium, large);
  };
  Shapes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    else {
    }
    if (!equals(this.small_1, other.small_1))
      return false;
    if (!equals(this.medium_1, other.medium_1))
      return false;
    if (!equals(this.large_1, other.large_1))
      return false;
    return true;
  };
  Shapes.prototype.hashCode = function () {
    var result = hashCode(this.small_1);
    result = imul(31, result) + hashCode(this.medium_1) | 0;
    result = imul(31, result) + hashCode(this.large_1) | 0;
    return result;
  };
  Shapes.prototype.toString = function () {
    return 'Shapes(small=' + this.small_1 + ', medium=' + this.medium_1 + ', large=' + this.large_1 + ')';
  };
  Shapes.$metadata$ = {
    simpleName: 'Shapes',
    kind: 'class',
    interfaces: []
  };
  function LocalShapes$lambda() {
    return function () {
      return Shapes_init_$Create$(null, null, null, 7, null);
    };
  }
  var properties_initialized_Shapes_kt_547402316;
  function init_properties_Shapes_kt_2719144488() {
    if (!properties_initialized_Shapes_kt_547402316) {
      properties_initialized_Shapes_kt_547402316 = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda());
    }
  }
  function _get_ThumbRadius__2376760489() {
    init_properties_Slider_kt_3561933785();
    return ThumbRadius;
  }
  var ThumbRadius;
  function _get_ThumbRippleRadius__1704937113() {
    init_properties_Slider_kt_3561933785();
    return ThumbRippleRadius;
  }
  var ThumbRippleRadius;
  function _get_ThumbDefaultElevation__1973158175() {
    init_properties_Slider_kt_3561933785();
    return ThumbDefaultElevation;
  }
  var ThumbDefaultElevation;
  function _get_ThumbPressedElevation__3632968128() {
    init_properties_Slider_kt_3561933785();
    return ThumbPressedElevation;
  }
  var ThumbPressedElevation;
  function _get_TrackHeight__456478111() {
    init_properties_Slider_kt_3561933785();
    return TrackHeight;
  }
  var TrackHeight;
  function _get_SliderHeight__1455473859() {
    init_properties_Slider_kt_3561933785();
    return SliderHeight;
  }
  var SliderHeight;
  function _get_SliderMinWidth__464963062() {
    init_properties_Slider_kt_3561933785();
    return SliderMinWidth;
  }
  var SliderMinWidth;
  function _get_DefaultSliderConstraints__4171574743() {
    init_properties_Slider_kt_3561933785();
    return DefaultSliderConstraints;
  }
  var DefaultSliderConstraints;
  function _get_SliderToTickAnimation__4165484230() {
    init_properties_Slider_kt_3561933785();
    return SliderToTickAnimation;
  }
  var SliderToTickAnimation;
  var properties_initialized_Slider_kt_1390191613;
  function init_properties_Slider_kt_3561933785() {
    if (!properties_initialized_Slider_kt_1390191613) {
      properties_initialized_Slider_kt_1390191613 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(10);
        break $l$block;
      }
      ThumbRadius = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(24);
        break $l$block_0;
      }
      ThumbRippleRadius = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(1);
        break $l$block_1;
      }
      ThumbDefaultElevation = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(6);
        break $l$block_2;
      }
      ThumbPressedElevation = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(4);
        break $l$block_3;
      }
      TrackHeight = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(48);
        break $l$block_4;
      }
      SliderHeight = tmp$ret$0_4;
      var tmp$ret$0_5;
      $l$block_5: {
        tmp$ret$0_5 = _Dp___init__impl__1377471179(144);
        break $l$block_5;
      }
      SliderMinWidth = tmp$ret$0_5;
      var tmp = Companion_getInstance();
      var tmp_0 = _get_SliderMinWidth__464963062();
      var tmp_1 = widthIn$default(tmp, tmp_0, null, 2, null);
      DefaultSliderConstraints = heightIn$default(tmp_1, null, _get_SliderHeight__1455473859(), 1, null);
      SliderToTickAnimation = TweenSpec_init_$Create$(100, 0, null, 6, null);
    }
  }
  function _get_HeightToFirstLine__3075429583() {
    init_properties_Snackbar_kt_4282528885();
    return HeightToFirstLine;
  }
  var HeightToFirstLine;
  function _get_HorizontalSpacing__2546080722() {
    init_properties_Snackbar_kt_4282528885();
    return HorizontalSpacing;
  }
  var HorizontalSpacing;
  function _get_HorizontalSpacingButtonSide__2050015273() {
    init_properties_Snackbar_kt_4282528885();
    return HorizontalSpacingButtonSide;
  }
  var HorizontalSpacingButtonSide;
  function _get_SeparateButtonExtraY__2714349837() {
    init_properties_Snackbar_kt_4282528885();
    return SeparateButtonExtraY;
  }
  var SeparateButtonExtraY;
  function _get_SnackbarVerticalPadding__2430220283() {
    init_properties_Snackbar_kt_4282528885();
    return SnackbarVerticalPadding;
  }
  var SnackbarVerticalPadding;
  function _get_TextEndExtraSpacing__464005424() {
    init_properties_Snackbar_kt_4282528885();
    return TextEndExtraSpacing;
  }
  var TextEndExtraSpacing;
  function _get_LongButtonVerticalOffset__1900841076() {
    init_properties_Snackbar_kt_4282528885();
    return LongButtonVerticalOffset;
  }
  var LongButtonVerticalOffset;
  function _get_SnackbarMinHeightOneLine__3194363941() {
    init_properties_Snackbar_kt_4282528885();
    return SnackbarMinHeightOneLine;
  }
  var SnackbarMinHeightOneLine;
  function _get_SnackbarMinHeightTwoLines__2879191690() {
    init_properties_Snackbar_kt_4282528885();
    return SnackbarMinHeightTwoLines;
  }
  var SnackbarMinHeightTwoLines;
  var properties_initialized_Snackbar_kt_297440153;
  function init_properties_Snackbar_kt_4282528885() {
    if (!properties_initialized_Snackbar_kt_297440153) {
      properties_initialized_Snackbar_kt_297440153 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(30);
        break $l$block;
      }
      HeightToFirstLine = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(16);
        break $l$block_0;
      }
      HorizontalSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(8);
        break $l$block_1;
      }
      HorizontalSpacingButtonSide = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(2);
        break $l$block_2;
      }
      SeparateButtonExtraY = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(6);
        break $l$block_3;
      }
      SnackbarVerticalPadding = tmp$ret$0_3;
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(8);
        break $l$block_4;
      }
      TextEndExtraSpacing = tmp$ret$0_4;
      var tmp$ret$0_5;
      $l$block_5: {
        tmp$ret$0_5 = _Dp___init__impl__1377471179(12);
        break $l$block_5;
      }
      LongButtonVerticalOffset = tmp$ret$0_5;
      var tmp$ret$0_6;
      $l$block_6: {
        tmp$ret$0_6 = _Dp___init__impl__1377471179(48);
        break $l$block_6;
      }
      SnackbarMinHeightOneLine = tmp$ret$0_6;
      var tmp$ret$0_7;
      $l$block_7: {
        tmp$ret$0_7 = _Dp___init__impl__1377471179(68);
        break $l$block_7;
      }
      SnackbarMinHeightTwoLines = tmp$ret$0_7;
      new Dp(Unit_getInstance());
    }
  }
  function _get_TrackWidth__1140456592() {
    init_properties_Switch_kt_1713932454();
    return TrackWidth;
  }
  var TrackWidth;
  function _get_TrackStrokeWidth__2817290984() {
    init_properties_Switch_kt_1713932454();
    return TrackStrokeWidth;
  }
  var TrackStrokeWidth;
  function _get_ThumbDiameter__1468635342() {
    init_properties_Switch_kt_1713932454();
    return ThumbDiameter;
  }
  var ThumbDiameter;
  function _get_ThumbRippleRadius__1704937113_0() {
    init_properties_Switch_kt_1713932454();
    return ThumbRippleRadius_0;
  }
  var ThumbRippleRadius_0;
  function _get_DefaultSwitchPadding__3584519727() {
    init_properties_Switch_kt_1713932454();
    return DefaultSwitchPadding;
  }
  var DefaultSwitchPadding;
  function _get_SwitchWidth__3165324543() {
    init_properties_Switch_kt_1713932454();
    return SwitchWidth;
  }
  var SwitchWidth;
  function _get_SwitchHeight__3097842448() {
    init_properties_Switch_kt_1713932454();
    return SwitchHeight;
  }
  var SwitchHeight;
  function _get_ThumbPathLength__2852651632() {
    init_properties_Switch_kt_1713932454();
    return ThumbPathLength;
  }
  var ThumbPathLength;
  function _get_AnimationSpec__2359952242_0() {
    init_properties_Switch_kt_1713932454();
    return AnimationSpec_0;
  }
  var AnimationSpec_0;
  function _get_ThumbDefaultElevation__1973158175_0() {
    init_properties_Switch_kt_1713932454();
    return ThumbDefaultElevation_0;
  }
  var ThumbDefaultElevation_0;
  function _get_ThumbPressedElevation__3632968128_0() {
    init_properties_Switch_kt_1713932454();
    return ThumbPressedElevation_0;
  }
  var ThumbPressedElevation_0;
  var properties_initialized_Switch_kt_3837157578;
  function init_properties_Switch_kt_1713932454() {
    if (!properties_initialized_Switch_kt_3837157578) {
      properties_initialized_Switch_kt_3837157578 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(34);
        break $l$block;
      }
      TrackWidth = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(14);
        break $l$block_0;
      }
      TrackStrokeWidth = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(20);
        break $l$block_1;
      }
      ThumbDiameter = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(24);
        break $l$block_2;
      }
      ThumbRippleRadius_0 = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(2);
        break $l$block_3;
      }
      DefaultSwitchPadding = tmp$ret$0_3;
      SwitchWidth = _get_TrackWidth__1140456592();
      SwitchHeight = _get_ThumbDiameter__1468635342();
      var tmp$ret$0_4;
      $l$block_4: {
        var tmp0_minus_0 = _get_TrackWidth__1140456592();
        var tmp1_minus_0 = _get_ThumbDiameter__1468635342();
        tmp$ret$0_4 = _Dp___init__impl__1377471179(_Dp___get_value__impl__3303478217(tmp0_minus_0) - _Dp___get_value__impl__3303478217(tmp1_minus_0));
        break $l$block_4;
      }
      ThumbPathLength = tmp$ret$0_4;
      AnimationSpec_0 = TweenSpec_init_$Create$(100, 0, null, 6, null);
      var tmp$ret$0_5;
      $l$block_5: {
        tmp$ret$0_5 = _Dp___init__impl__1377471179(1);
        break $l$block_5;
      }
      ThumbDefaultElevation_0 = tmp$ret$0_5;
      var tmp$ret$0_6;
      $l$block_6: {
        tmp$ret$0_6 = _Dp___init__impl__1377471179(6);
        break $l$block_6;
      }
      ThumbPressedElevation_0 = tmp$ret$0_6;
      new Dp(Unit_getInstance());
    }
  }
  function _get_SmallTabHeight__882366646() {
    init_properties_Tab_kt_1798107903();
    return SmallTabHeight;
  }
  var SmallTabHeight;
  function _get_LargeTabHeight__3341602282() {
    init_properties_Tab_kt_1798107903();
    return LargeTabHeight;
  }
  var LargeTabHeight;
  function _get_HorizontalTextPadding__71980689() {
    init_properties_Tab_kt_1798107903();
    return HorizontalTextPadding;
  }
  var HorizontalTextPadding;
  function _get_SingleLineTextBaselineWithIcon__1789119486() {
    init_properties_Tab_kt_1798107903();
    return SingleLineTextBaselineWithIcon;
  }
  var SingleLineTextBaselineWithIcon;
  function _get_DoubleLineTextBaselineWithIcon__2720411797() {
    init_properties_Tab_kt_1798107903();
    return DoubleLineTextBaselineWithIcon;
  }
  var DoubleLineTextBaselineWithIcon;
  function _get_IconDistanceFromBaseline__2711999118() {
    init_properties_Tab_kt_1798107903();
    return IconDistanceFromBaseline;
  }
  var IconDistanceFromBaseline;
  function _get_TextDistanceFromLeadingIcon__3084593182() {
    init_properties_Tab_kt_1798107903();
    return TextDistanceFromLeadingIcon;
  }
  var TextDistanceFromLeadingIcon;
  var properties_initialized_Tab_kt_1756802395;
  function init_properties_Tab_kt_1798107903() {
    if (!properties_initialized_Tab_kt_1756802395) {
      properties_initialized_Tab_kt_1756802395 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(48);
        break $l$block;
      }
      SmallTabHeight = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(72);
        break $l$block_0;
      }
      LargeTabHeight = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(16);
        break $l$block_1;
      }
      HorizontalTextPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      $l$block_2: {
        tmp$ret$0_2 = _Dp___init__impl__1377471179(14);
        break $l$block_2;
      }
      SingleLineTextBaselineWithIcon = tmp$ret$0_2;
      var tmp$ret$0_3;
      $l$block_3: {
        tmp$ret$0_3 = _Dp___init__impl__1377471179(6);
        break $l$block_3;
      }
      DoubleLineTextBaselineWithIcon = tmp$ret$0_3;
      IconDistanceFromBaseline = _get_sp__1413130958(20);
      var tmp$ret$0_4;
      $l$block_4: {
        tmp$ret$0_4 = _Dp___init__impl__1377471179(8);
        break $l$block_4;
      }
      TextDistanceFromLeadingIcon = tmp$ret$0_4;
      new Dp(Unit_getInstance());
    }
  }
  function _get_ScrollableTabRowMinimumTabWidth__3716133726() {
    init_properties_TabRow_kt_1634903093();
    return ScrollableTabRowMinimumTabWidth;
  }
  var ScrollableTabRowMinimumTabWidth;
  function _get_ScrollableTabRowScrollSpec__1887811863() {
    init_properties_TabRow_kt_1634903093();
    return ScrollableTabRowScrollSpec;
  }
  var ScrollableTabRowScrollSpec;
  var properties_initialized_TabRow_kt_3758128217;
  function init_properties_TabRow_kt_1634903093() {
    if (!properties_initialized_TabRow_kt_3758128217) {
      properties_initialized_TabRow_kt_3758128217 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(90);
        break $l$block;
      }
      ScrollableTabRowMinimumTabWidth = tmp$ret$0;
      ScrollableTabRowScrollSpec = tween$default(250, 0, _get_FastOutSlowInEasing__2117326030(), 2, null);
    }
  }
  function _get_LocalTextStyle__1134641074() {
    init_properties_Text_kt_43630797();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    init_properties_Text_kt_43630797();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    if (isTraceInProgress())
      traceEventStart(2085819656, -1, -1, 'androidx.compose.material.Text$composable (Text.kt:90)');
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2085819656);
    sourceInformation($composer_0, 'C(Text$composable)P(13,8,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,15,14:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,10:c#ui.text.style.TextOverflow,11)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
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
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__934646663(_Color___get_value__impl__103472842(color_0._v.value_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__3157586172(fontSize_0._v.packedValue_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__3157586172(letterSpacing_0._v.packedValue_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__3157586172(lineHeight_0._v.packedValue_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__1925615142(overflow_0._v.value_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 2048 : 1024);
    if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ((($default & 16384) === 0 ? $composer_0.changed_ga7h3f_k$(onTextLayout_0._v) : false) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(style_0._v) : false) ? 131072 : 65536);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 374491) === 74898)) ? true : !$composer_0._get_skipping__3591855738_bmm4cm_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0._get_defaultsInvalid__1114573164_ifl65o_k$()) {
        if (!(($default & 2) === 0))
          modifier_0._v = Companion_getInstance();
        if (!(($default & 4) === 0))
          color_0._v = new Color(Companion_getInstance_0()._get_Unspecified__2946689370_rgrx8f_k$());
        if (!(($default & 8) === 0))
          fontSize_0._v = new TextUnit(Companion_getInstance_1()._get_Unspecified__2946689370_3oyroa_k$());
        if (!(($default & 16) === 0))
          fontStyle_0._v = null;
        if (!(($default & 32) === 0))
          fontWeight_0._v = null;
        if (!(($default & 64) === 0))
          fontFamily_0._v = null;
        if (!(($default & 128) === 0))
          letterSpacing_0._v = new TextUnit(Companion_getInstance_1()._get_Unspecified__2946689370_3oyroa_k$());
        if (!(($default & 256) === 0))
          textDecoration_0._v = null;
        if (!(($default & 512) === 0))
          textAlign_0._v = null;
        if (!(($default & 1024) === 0))
          lineHeight_0._v = new TextUnit(Companion_getInstance_1()._get_Unspecified__2946689370_3oyroa_k$());
        if (!(($default & 2048) === 0))
          overflow_0._v = new TextOverflow(Companion_getInstance_2()._get_Clip__764781787_iwu6r1_k$());
        if (!(($default & 4096) === 0))
          softWrap_0._v = true;
        if (!(($default & 8192) === 0))
          maxLines_0._v = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
        if (!(($default & 16384) === 0)) {
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
                  var tmp_1;
                  if (false ? true : tmp0_let_0_4 === Companion_getInstance_3()._get_Empty__2291795012_x4mxmk_k$()) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_7 = Text$composable$lambda_0();
                      var tmp0_return_9 = tmp0_7;
                      tmp$ret$0 = tmp0_return_9;
                      break $l$block;
                    }
                    var value_2_2_5 = tmp$ret$0;
                    tmp1_cache_0_3.updateRememberedValue_l1colo_k$(value_2_2_5);
                    tmp_1 = value_2_2_5;
                  } else {
                    tmp_1 = tmp0_let_0_4;
                  }
                  tmp$ret$1 = tmp_1;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              var tmp_2 = tmp$ret$2;
              tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
              break $l$block_2;
            }
            var tmp0_2 = tmp$ret$3;
            $composer_1.endReplaceableGroup_er37p7_k$();
            tmp$ret$4 = tmp0_2;
            break $l$block_3;
          }
          onTextLayout_0._v = tmp$ret$4;
          $dirty1 = $dirty1 & -57345;
        }
        if (!(($default & 32768) === 0)) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp1_$get_current$$composable_0_3633390145 = _get_LocalTextStyle__1134641074();
            var tmp2_$get_current$$composable_0_3378653600 = $composer_0;
            var $composer_1_0 = tmp2_$get_current$$composable_0_3378653600;
            var tmp0_2_0 = $composer_1_0.consume_93tbl1_k$(tmp1_$get_current$$composable_0_3633390145);
            tmp$ret$5 = tmp0_2_0;
            break $l$block_4;
          }
          style_0._v = tmp$ret$5;
          $dirty1 = $dirty1 & -458753;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
      }
      $composer_0.endDefaults_b0883g_k$();
      $composer_0.startReplaceableGroup_rp6air_k$(1330678101);
      var tmp$ret$13;
      $l$block_12: {
        var tmp3_takeOrElse_0 = color_0._v.value_1;
        var tmp_3;
        var tmp$ret$6;
        $l$block_5: {
          tmp$ret$6 = !equals(_Color___get_value__impl__103472842(tmp3_takeOrElse_0), _Color___get_value__impl__103472842(Companion_getInstance_0()._get_Unspecified__2946689370_rgrx8f_k$()));
          break $l$block_5;
        }
        if (tmp$ret$6) {
          tmp_3 = tmp3_takeOrElse_0;
        } else {
          {
            var tmp$ret$12;
            $l$block_11: {
              var tmp$ret$11;
              $l$block_10: {
                var tmp0_takeOrElse_0_4 = style_0._v._get_color__3152392398_60nqpf_k$();
                var tmp_4;
                var tmp$ret$7;
                $l$block_6: {
                  tmp$ret$7 = !equals(_Color___get_value__impl__103472842(tmp0_takeOrElse_0_4), _Color___get_value__impl__103472842(Companion_getInstance_0()._get_Unspecified__2946689370_rgrx8f_k$()));
                  break $l$block_6;
                }
                if (tmp$ret$7) {
                  tmp_4 = tmp0_takeOrElse_0_4;
                } else {
                  {
                    var tmp$ret$10;
                    $l$block_9: {
                      var tmp$ret$8;
                      $l$block_7: {
                        var tmp0_$get_current$$composable_0_3_6_2193609805 = _get_LocalContentColor__2125971612();
                        var tmp1_$get_current$$composable_0_4_7_183506926 = $composer_0;
                        var $composer_1_5_8 = tmp1_$get_current$$composable_0_4_7_183506926;
                        var tmp0_2_6_9 = $composer_1_5_8.consume_93tbl1_k$(tmp0_$get_current$$composable_0_3_6_2193609805);
                        tmp$ret$8 = tmp0_2_6_9.value_1;
                        break $l$block_7;
                      }
                      var tmp_5 = tmp$ret$8;
                      var tmp$ret$9;
                      $l$block_8: {
                        var tmp2_$get_current$$composable_0_7_10_3505127014 = _get_LocalContentAlpha__2066054657();
                        var tmp3_$get_current$$composable_0_8_11_1321479879 = $composer_0;
                        var $composer_1_9_12 = tmp3_$get_current$$composable_0_8_11_1321479879;
                        var tmp0_2_10_13 = $composer_1_9_12.consume_93tbl1_k$(tmp2_$get_current$$composable_0_7_10_3505127014);
                        tmp$ret$9 = tmp0_2_10_13;
                        break $l$block_8;
                      }
                      var tmp_6 = tmp$ret$9;
                      var tmp0_return_2_5 = Color__copy$default_impl_868080376(tmp_5, tmp_6, 0.0, 0.0, 0.0, 14, null);
                      tmp$ret$10 = tmp0_return_2_5;
                      break $l$block_9;
                    }
                    tmp_4 = tmp$ret$10;
                  }
                }
                tmp$ret$11 = tmp_4;
                break $l$block_10;
              }
              var tmp0_group_3 = tmp$ret$11;
              var tmp1_return_2 = tmp0_group_3;
              tmp$ret$12 = tmp1_return_2;
              break $l$block_11;
            }
            tmp_3 = tmp$ret$12;
          }
        }
        tmp$ret$13 = tmp_3;
        break $l$block_12;
      }
      var tmp0_group = tmp$ret$13;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var textColor = tmp0_group;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.packedValue_1;
      var tmp_10 = fontWeight_0._v;
      var tmp_11 = fontStyle_0._v;
      var tmp_12 = tmp_11 == null ? null : tmp_11.value_1;
      var tmp_13 = fontFamily_0._v;
      var tmp_14 = letterSpacing_0._v;
      var tmp_15 = tmp_14 == null ? null : tmp_14.packedValue_1;
      var tmp_16 = textDecoration_0._v;
      var tmp_17 = textAlign_0._v;
      var tmp_18 = tmp_17 == null ? null : tmp_17.value_1;
      var tmp_19 = lineHeight_0._v;
      var tmp_20 = tmp_19 == null ? null : tmp_19.packedValue_1;
      var mergedStyle = tmp_7.merge_axh15w_k$(TextStyle_init_$Create$(textColor, tmp_9, tmp_10, tmp_12, null, tmp_13, null, tmp_15, null, null, null, null, tmp_16, null, tmp_18, null, tmp_20, null, 175952, null));
      BasicText$composable(text, modifier_0._v, mergedStyle, onTextLayout_0._v, overflow_0._v.value_1, softWrap_0._v, maxLines_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 3 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9, 0);
    } else
      $composer_0.skipToGroupEnd_lhns3f_k$();
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Text$composable$lambda$ref(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
    if (isTraceInProgress())
      traceEventEnd();
  }
  function Text$composable$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default, $composer, $force) {
    var tmp = $modifier._v;
    var tmp_0 = $color._v.value_1;
    var tmp_1 = $fontSize._v.packedValue_1;
    var tmp_2 = $fontStyle._v;
    var tmp_3 = tmp_2 == null ? null : tmp_2.value_1;
    var tmp_4 = $fontWeight._v;
    var tmp_5 = $fontFamily._v;
    var tmp_6 = $letterSpacing._v.packedValue_1;
    var tmp_7 = $textDecoration._v;
    var tmp_8 = $textAlign._v;
    return Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.value_1, $lineHeight._v.packedValue_1, $overflow._v.value_1, $softWrap._v, $maxLines._v, $onTextLayout._v, $style._v, $composer, $$changed | 1, $$changed1, $$default);
  }
  function LocalTextStyle$lambda() {
    return function () {
      return Companion_getInstance_4()._get_Default__2834936080_o59jao_k$();
    };
  }
  function Text$composable$lambda_0() {
    return function (it) {
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda$ref($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function (p0, p1) {
      Text$composable$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_3058127345;
  function init_properties_Text_kt_43630797() {
    if (!properties_initialized_Text_kt_3058127345) {
      properties_initialized_Text_kt_3058127345 = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda());
    }
  }
  function _get_FirstBaselineOffset__634671529() {
    init_properties_TextField_kt_4112965127();
    return FirstBaselineOffset;
  }
  var FirstBaselineOffset;
  function _get_TextFieldBottomPadding__2169390962() {
    init_properties_TextField_kt_4112965127();
    return TextFieldBottomPadding;
  }
  var TextFieldBottomPadding;
  function _get_TextFieldTopPadding__3296675624() {
    init_properties_TextField_kt_4112965127();
    return TextFieldTopPadding;
  }
  var TextFieldTopPadding;
  var properties_initialized_TextField_kt_834298723;
  function init_properties_TextField_kt_4112965127() {
    if (!properties_initialized_TextField_kt_834298723) {
      properties_initialized_TextField_kt_834298723 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(20);
        break $l$block;
      }
      FirstBaselineOffset = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(10);
        break $l$block_0;
      }
      TextFieldBottomPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(4);
        break $l$block_1;
      }
      TextFieldTopPadding = tmp$ret$0_1;
      new Dp(Unit_getInstance());
    }
  }
  function _get_ZeroConstraints__3147223939() {
    init_properties_TextFieldImpl_kt_3264604103();
    return ZeroConstraints;
  }
  var ZeroConstraints;
  function _get_TextFieldPadding__4056649639() {
    init_properties_TextFieldImpl_kt_3264604103();
    return TextFieldPadding;
  }
  var TextFieldPadding;
  function _get_HorizontalIconPadding__1974419933() {
    init_properties_TextFieldImpl_kt_3264604103();
    return HorizontalIconPadding;
  }
  var HorizontalIconPadding;
  function _get_IconDefaultSizeModifier__1291470737() {
    init_properties_TextFieldImpl_kt_3264604103();
    return IconDefaultSizeModifier;
  }
  var IconDefaultSizeModifier;
  var properties_initialized_TextFieldImpl_kt_3572457251;
  function init_properties_TextFieldImpl_kt_3264604103() {
    if (!properties_initialized_TextFieldImpl_kt_3572457251) {
      properties_initialized_TextFieldImpl_kt_3572457251 = true;
      ZeroConstraints = Constraints(0, 0, 0, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(16);
        break $l$block;
      }
      TextFieldPadding = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = _Dp___init__impl__1377471179(12);
        break $l$block_0;
      }
      HorizontalIconPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = _Dp___init__impl__1377471179(48);
        break $l$block_1;
      }
      var tmp_0 = tmp$ret$0_1;
      var tmp$ret$1;
      $l$block_2: {
        tmp$ret$1 = _Dp___init__impl__1377471179(48);
        break $l$block_2;
      }
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function _get_LocalMinimumTouchTargetEnforcement__1215924568() {
    init_properties_TouchTarget_kt_2347645444();
    return LocalMinimumTouchTargetEnforcement;
  }
  var LocalMinimumTouchTargetEnforcement;
  function LocalMinimumTouchTargetEnforcement$lambda() {
    return function () {
      return true;
    };
  }
  var properties_initialized_TouchTarget_kt_4055226464;
  function init_properties_TouchTarget_kt_2347645444() {
    if (!properties_initialized_TouchTarget_kt_4055226464) {
      properties_initialized_TouchTarget_kt_4055226464 = true;
      LocalMinimumTouchTargetEnforcement = staticCompositionLocalOf(LocalMinimumTouchTargetEnforcement$lambda());
    }
  }
  function _get_LocalTypography__3120354423() {
    init_properties_Typography_kt_3562138443();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, Object.create(Typography.prototype));
  }
  function Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      defaultFontFamily = Companion_getInstance_5()._get_Default__2834936080_o59jao_k$();
    if (!(($mask0 & 2) === 0)) {
      var tmp0_fontWeight = Companion_getInstance_6()._get_Light__2488225179_tvor51_k$();
      var tmp1_fontSize = _get_sp__1413130958(96);
      var tmp2_letterSpacing = _get_sp__1413130958_0(-1.5);
      h1 = TextStyle_init_$Create$(null, tmp1_fontSize, tmp0_fontWeight, null, null, null, null, tmp2_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4) === 0)) {
      var tmp3_fontWeight = Companion_getInstance_6()._get_Light__2488225179_tvor51_k$();
      var tmp4_fontSize = _get_sp__1413130958(60);
      var tmp5_letterSpacing = _get_sp__1413130958_0(-0.5);
      h2 = TextStyle_init_$Create$(null, tmp4_fontSize, tmp3_fontWeight, null, null, null, null, tmp5_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp6_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp7_fontSize = _get_sp__1413130958(48);
      var tmp8_letterSpacing = _get_sp__1413130958(0);
      h3 = TextStyle_init_$Create$(null, tmp7_fontSize, tmp6_fontWeight, null, null, null, null, tmp8_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 16) === 0)) {
      var tmp9_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp10_fontSize = _get_sp__1413130958(34);
      var tmp11_letterSpacing = _get_sp__1413130958_0(0.25);
      h4 = TextStyle_init_$Create$(null, tmp10_fontSize, tmp9_fontWeight, null, null, null, null, tmp11_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 32) === 0)) {
      var tmp12_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp13_fontSize = _get_sp__1413130958(24);
      var tmp14_letterSpacing = _get_sp__1413130958(0);
      h5 = TextStyle_init_$Create$(null, tmp13_fontSize, tmp12_fontWeight, null, null, null, null, tmp14_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 64) === 0)) {
      var tmp15_fontWeight = Companion_getInstance_6()._get_Medium__595818006_9uqg46_k$();
      var tmp16_fontSize = _get_sp__1413130958(20);
      var tmp17_letterSpacing = _get_sp__1413130958_0(0.15);
      h6 = TextStyle_init_$Create$(null, tmp16_fontSize, tmp15_fontWeight, null, null, null, null, tmp17_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 128) === 0)) {
      var tmp18_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp19_fontSize = _get_sp__1413130958(16);
      var tmp20_letterSpacing = _get_sp__1413130958_0(0.15);
      subtitle1 = TextStyle_init_$Create$(null, tmp19_fontSize, tmp18_fontWeight, null, null, null, null, tmp20_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 256) === 0)) {
      var tmp21_fontWeight = Companion_getInstance_6()._get_Medium__595818006_9uqg46_k$();
      var tmp22_fontSize = _get_sp__1413130958(14);
      var tmp23_letterSpacing = _get_sp__1413130958_0(0.1);
      subtitle2 = TextStyle_init_$Create$(null, tmp22_fontSize, tmp21_fontWeight, null, null, null, null, tmp23_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 512) === 0)) {
      var tmp24_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp25_fontSize = _get_sp__1413130958(16);
      var tmp26_letterSpacing = _get_sp__1413130958_0(0.5);
      body1 = TextStyle_init_$Create$(null, tmp25_fontSize, tmp24_fontWeight, null, null, null, null, tmp26_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 1024) === 0)) {
      var tmp27_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp28_fontSize = _get_sp__1413130958(14);
      var tmp29_letterSpacing = _get_sp__1413130958_0(0.25);
      body2 = TextStyle_init_$Create$(null, tmp28_fontSize, tmp27_fontWeight, null, null, null, null, tmp29_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 2048) === 0)) {
      var tmp30_fontWeight = Companion_getInstance_6()._get_Medium__595818006_9uqg46_k$();
      var tmp31_fontSize = _get_sp__1413130958(14);
      var tmp32_letterSpacing = _get_sp__1413130958_0(1.25);
      button = TextStyle_init_$Create$(null, tmp31_fontSize, tmp30_fontWeight, null, null, null, null, tmp32_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 4096) === 0)) {
      var tmp33_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp34_fontSize = _get_sp__1413130958(12);
      var tmp35_letterSpacing = _get_sp__1413130958_0(0.4);
      caption = TextStyle_init_$Create$(null, tmp34_fontSize, tmp33_fontWeight, null, null, null, null, tmp35_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    if (!(($mask0 & 8192) === 0)) {
      var tmp36_fontWeight = Companion_getInstance_6()._get_Normal__1782642404_thc7ok_k$();
      var tmp37_fontSize = _get_sp__1413130958(10);
      var tmp38_letterSpacing = _get_sp__1413130958_0(1.5);
      overline = TextStyle_init_$Create$(null, tmp37_fontSize, tmp36_fontWeight, null, null, null, null, tmp38_letterSpacing, null, null, null, null, null, null, null, null, null, null, 262009, null);
    }
    Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this);
    return $this;
  }
  function Typography_init_$Create$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker) {
    return Typography_init_$Init$_0(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $marker, Object.create(Typography.prototype));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.h1__1 = h1;
    this.h2__1 = h2;
    this.h3__1 = h3;
    this.h4__1 = h4;
    this.h5__1 = h5;
    this.h6__1 = h6;
    this.subtitle1__1 = subtitle1;
    this.subtitle2__1 = subtitle2;
    this.body1__1 = body1;
    this.body2__1 = body2;
    this.button_1 = button;
    this.caption_1 = caption;
    this.overline_1 = overline;
  }
  Typography.prototype._get_h1__1413118434_ndc15u_k$ = function () {
    return this.h1__1;
  };
  Typography.prototype._get_h2__1413118465_ndc16p_k$ = function () {
    return this.h2__1;
  };
  Typography.prototype._get_h3__1413118496_ndc17k_k$ = function () {
    return this.h3__1;
  };
  Typography.prototype._get_h4__1413118527_ndc18f_k$ = function () {
    return this.h4__1;
  };
  Typography.prototype._get_h5__1413118558_ndc19a_k$ = function () {
    return this.h5__1;
  };
  Typography.prototype._get_h6__1413118589_ndc1a5_k$ = function () {
    return this.h6__1;
  };
  Typography.prototype._get_subtitle1__2828639832_o90hig_k$ = function () {
    return this.subtitle1__1;
  };
  Typography.prototype._get_subtitle2__2828639863_o90hhl_k$ = function () {
    return this.subtitle2__1;
  };
  Typography.prototype._get_body1__3123532514_jdfwv2_k$ = function () {
    return this.body1__1;
  };
  Typography.prototype._get_body2__3123532545_jdfwu7_k$ = function () {
    return this.body2__1;
  };
  Typography.prototype._get_button__2526690841_t8sauf_k$ = function () {
    return this.button_1;
  };
  Typography.prototype._get_caption__2075917803_yby4ff_k$ = function () {
    return this.caption_1;
  };
  Typography.prototype._get_overline__726332931_c0fu2r_k$ = function () {
    return this.overline_1;
  };
  Typography.prototype.copy_9bikh2_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return new Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  Typography.prototype.copy$default_5pd5y4_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      h1 = this.h1__1;
    if (!(($mask0 & 2) === 0))
      h2 = this.h2__1;
    if (!(($mask0 & 4) === 0))
      h3 = this.h3__1;
    if (!(($mask0 & 8) === 0))
      h4 = this.h4__1;
    if (!(($mask0 & 16) === 0))
      h5 = this.h5__1;
    if (!(($mask0 & 32) === 0))
      h6 = this.h6__1;
    if (!(($mask0 & 64) === 0))
      subtitle1 = this.subtitle1__1;
    if (!(($mask0 & 128) === 0))
      subtitle2 = this.subtitle2__1;
    if (!(($mask0 & 256) === 0))
      body1 = this.body1__1;
    if (!(($mask0 & 512) === 0))
      body2 = this.body2__1;
    if (!(($mask0 & 1024) === 0))
      button = this.button_1;
    if (!(($mask0 & 2048) === 0))
      caption = this.caption_1;
    if (!(($mask0 & 4096) === 0))
      overline = this.overline_1;
    return this.copy_9bikh2_k$(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  Typography.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    else {
    }
    if (!this.h1__1.equals(other.h1__1))
      return false;
    if (!this.h2__1.equals(other.h2__1))
      return false;
    if (!this.h3__1.equals(other.h3__1))
      return false;
    if (!this.h4__1.equals(other.h4__1))
      return false;
    if (!this.h5__1.equals(other.h5__1))
      return false;
    if (!this.h6__1.equals(other.h6__1))
      return false;
    if (!this.subtitle1__1.equals(other.subtitle1__1))
      return false;
    if (!this.subtitle2__1.equals(other.subtitle2__1))
      return false;
    if (!this.body1__1.equals(other.body1__1))
      return false;
    if (!this.body2__1.equals(other.body2__1))
      return false;
    if (!this.button_1.equals(other.button_1))
      return false;
    if (!this.caption_1.equals(other.caption_1))
      return false;
    if (!this.overline_1.equals(other.overline_1))
      return false;
    return true;
  };
  Typography.prototype.hashCode = function () {
    var result = this.h1__1.hashCode();
    result = imul(31, result) + this.h2__1.hashCode() | 0;
    result = imul(31, result) + this.h3__1.hashCode() | 0;
    result = imul(31, result) + this.h4__1.hashCode() | 0;
    result = imul(31, result) + this.h5__1.hashCode() | 0;
    result = imul(31, result) + this.h6__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle1__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle2__1.hashCode() | 0;
    result = imul(31, result) + this.body1__1.hashCode() | 0;
    result = imul(31, result) + this.body2__1.hashCode() | 0;
    result = imul(31, result) + this.button_1.hashCode() | 0;
    result = imul(31, result) + this.caption_1.hashCode() | 0;
    result = imul(31, result) + this.overline_1.hashCode() | 0;
    return result;
  };
  Typography.prototype.toString = function () {
    return 'Typography(h1=' + this.h1__1 + ', h2=' + this.h2__1 + ', h3=' + this.h3__1 + ', h4=' + this.h4__1 + ', h5=' + this.h5__1 + ', h6=' + this.h6__1 + ', ' + ('subtitle1=' + this.subtitle1__1 + ', subtitle2=' + this.subtitle2__1 + ', body1=' + this.body1__1 + ', ') + ('body2=' + this.body2__1 + ', button=' + this.button_1 + ', caption=' + this.caption_1 + ', overline=' + this.overline_1 + ')');
  };
  Typography.$metadata$ = {
    simpleName: 'Typography',
    kind: 'class',
    interfaces: []
  };
  function withDefaultFontFamily(_this__1828080292, default_0) {
    init_properties_Typography_kt_3562138443();
    var tmp;
    if (!(_this__1828080292._get_fontFamily__3097773656_jss0iw_k$() == null)) {
      tmp = _this__1828080292;
    } else {
      tmp = _this__1828080292.copy$default_m6tbq3_k$(null, null, null, null, null, default_0, null, null, null, null, null, null, null, null, null, null, null, null, 262111, null);
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    return function () {
      return Typography_init_$Create$_0(null, null, null, null, null, null, null, null, null, null, null, null, null, null, 16383, null);
    };
  }
  var properties_initialized_Typography_kt_707727727;
  function init_properties_Typography_kt_3562138443() {
    if (!properties_initialized_Typography_kt_707727727) {
      properties_initialized_Typography_kt_707727727 = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda());
    }
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Text$composable = Text$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_material_material.js.map