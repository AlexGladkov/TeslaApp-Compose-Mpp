(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_animation_animation_core.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_runtime_runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_animation_animation_core.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_runtime_runtime.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material_ripple'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_material_material_ripple'.");
    }
    if (typeof kotlin_androidx_compose_animation_animation_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material_ripple'. Its dependency 'kotlin_androidx_compose_animation_animation_core' was not found. Please, check whether 'kotlin_androidx_compose_animation_animation_core' is loaded prior to 'kotlin_androidx_compose_material_material_ripple'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material_ripple'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'kotlin_androidx_compose_material_material_ripple'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material_ripple'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'kotlin_androidx_compose_material_material_ripple'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_material_material_ripple'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_material_material_ripple'.");
    }
    root.kotlin_androidx_compose_material_material_ripple = factory(typeof kotlin_androidx_compose_material_material_ripple === 'undefined' ? {} : kotlin_androidx_compose_material_material_ripple, kotlin_kotlin, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime) {
  //region block: imports
  var imul = Math.imul;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var _get_LinearEasing__2697834107 = kotlin_androidx_compose_animation_animation_core.$crossModule$._get_LinearEasing__2697834107;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$crossModule$.TweenSpec_init_$Create$;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$crossModule$.Dp;
  var luminance = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.luminance;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.staticCompositionLocalOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_DefaultTweenSpec__4030401478() {
    unreachableDeclarationLog();
    init_properties_Ripple_kt_2408142890();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  var properties_initialized_Ripple_kt_236400718;
  function init_properties_Ripple_kt_2408142890() {
    unreachableDeclarationLog();
    if (!properties_initialized_Ripple_kt_236400718) {
      properties_initialized_Ripple_kt_236400718 = true;
      DefaultTweenSpec = TweenSpec_init_$Create$(15, 0, _get_LinearEasing__2697834107(), 2, null);
    }
  }
  function _get_BoundedRippleExtraRadius__3372641526() {
    unreachableDeclarationLog();
    init_properties_RippleAnimation_kt_780114816();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  var properties_initialized_RippleAnimation_kt_274246620;
  function init_properties_RippleAnimation_kt_780114816() {
    unreachableDeclarationLog();
    if (!properties_initialized_RippleAnimation_kt_274246620) {
      properties_initialized_RippleAnimation_kt_274246620 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(10);
        break $l$block;
      }
      BoundedRippleExtraRadius = tmp$ret$0;
      new Dp(Unit_getInstance());
    }
  }
  function _get_LocalRippleTheme__4249309021() {
    unreachableDeclarationLog();
    init_properties_RippleTheme_kt_3918077339();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function _get_LightThemeHighContrastRippleAlpha__3852855418() {
    unreachableDeclarationLog();
    init_properties_RippleTheme_kt_3918077339();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function _get_LightThemeLowContrastRippleAlpha__3345012512() {
    unreachableDeclarationLog();
    init_properties_RippleTheme_kt_3918077339();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function _get_DarkThemeRippleAlpha__1814031472() {
    unreachableDeclarationLog();
    init_properties_RippleTheme_kt_3918077339();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    unreachableDeclarationLog();
    Companion_instance = this;
  }
  Companion.prototype.defaultRippleColor_f5ayyv_k$ = function (contentColor, lightTheme) {
    unreachableDeclarationLog();
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance()._get_White__2802292968_ol52dp_k$();
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  Companion.prototype.defaultRippleAlpha_46jx2p_k$ = function (contentColor, lightTheme) {
    unreachableDeclarationLog();
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = _get_LightThemeHighContrastRippleAlpha__3852855418();
      } else {
        tmp_0 = _get_LightThemeLowContrastRippleAlpha__3345012512();
      }
      tmp = tmp_0;
    } else {
      tmp = _get_DarkThemeRippleAlpha__1814031472();
    }
    return tmp;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    unreachableDeclarationLog();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RippleTheme() {
    unreachableDeclarationLog();
    Companion_getInstance_0();
  }
  RippleTheme.$metadata$ = {
    simpleName: 'RippleTheme',
    kind: 'interface',
    interfaces: []
  };
  function DebugRippleTheme() {
    unreachableDeclarationLog();
    DebugRippleTheme_instance = this;
  }
  DebugRippleTheme.prototype.defaultColor_r8g18n_k$ = function () {
    unreachableDeclarationLog();
    illegalDecoyCallException('defaultColor');
  };
  DebugRippleTheme.prototype.rippleAlpha_cuqqk2_k$ = function () {
    unreachableDeclarationLog();
    illegalDecoyCallException('rippleAlpha');
  };
  DebugRippleTheme.prototype.defaultColor$composable_3q39e6_k$ = function ($composer, $changed) {
    unreachableDeclarationLog();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable)');
    var tmp0 = Companion_getInstance_0().defaultRippleColor_f5ayyv_k$(Companion_getInstance()._get_Black__2204520402_og72wn_k$(), true);
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DebugRippleTheme.prototype.rippleAlpha$composable_ezucwt_k$ = function ($composer, $changed) {
    unreachableDeclarationLog();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable)');
    var tmp0 = Companion_getInstance_0().defaultRippleAlpha_46jx2p_k$(Companion_getInstance()._get_Black__2204520402_og72wn_k$(), true);
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DebugRippleTheme.$metadata$ = {
    simpleName: 'DebugRippleTheme',
    kind: 'object',
    interfaces: [RippleTheme]
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    unreachableDeclarationLog();
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    unreachableDeclarationLog();
    this.draggedAlpha_1 = draggedAlpha;
    this.focusedAlpha_1 = focusedAlpha;
    this.hoveredAlpha_1 = hoveredAlpha;
    this.pressedAlpha_1 = pressedAlpha;
  }
  RippleAlpha.prototype._get_draggedAlpha__4284270559_6d9nl_k$ = function () {
    unreachableDeclarationLog();
    return this.draggedAlpha_1;
  };
  RippleAlpha.prototype._get_focusedAlpha__1045474820_hag5j8_k$ = function () {
    unreachableDeclarationLog();
    return this.focusedAlpha_1;
  };
  RippleAlpha.prototype._get_hoveredAlpha__1333034600_m1nk2w_k$ = function () {
    unreachableDeclarationLog();
    return this.hoveredAlpha_1;
  };
  RippleAlpha.prototype._get_pressedAlpha__3887751791_6qg1ht_k$ = function () {
    unreachableDeclarationLog();
    return this.pressedAlpha_1;
  };
  RippleAlpha.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    else {
    }
    if (!(this.draggedAlpha_1 === other.draggedAlpha_1))
      return false;
    if (!(this.focusedAlpha_1 === other.focusedAlpha_1))
      return false;
    if (!(this.hoveredAlpha_1 === other.hoveredAlpha_1))
      return false;
    if (!(this.pressedAlpha_1 === other.pressedAlpha_1))
      return false;
    return true;
  };
  RippleAlpha.prototype.hashCode = function () {
    unreachableDeclarationLog();
    var result = getNumberHashCode(this.draggedAlpha_1);
    result = imul(31, result) + getNumberHashCode(this.focusedAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hoveredAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pressedAlpha_1) | 0;
    return result;
  };
  RippleAlpha.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'RippleAlpha(draggedAlpha=' + this.draggedAlpha_1 + ', focusedAlpha=' + this.focusedAlpha_1 + ', ' + ('hoveredAlpha=' + this.hoveredAlpha_1 + ', pressedAlpha=' + this.pressedAlpha_1 + ')');
  };
  RippleAlpha.$metadata$ = {
    simpleName: 'RippleAlpha',
    kind: 'class',
    interfaces: []
  };
  function LocalRippleTheme$lambda() {
    unreachableDeclarationLog();
    return function () {
      return DebugRippleTheme_getInstance();
    };
  }
  var properties_initialized_RippleTheme_kt_1330691063;
  function init_properties_RippleTheme_kt_3918077339() {
    unreachableDeclarationLog();
    if (!properties_initialized_RippleTheme_kt_1330691063) {
      properties_initialized_RippleTheme_kt_1330691063 = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda());
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_material_material_ripple.js.map