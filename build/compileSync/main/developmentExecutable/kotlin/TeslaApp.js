(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_kotlin.js', './kotlin_androidx_compose_foundation_foundation_layout.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_ui_ui_text.js', './kotlin_androidx_compose_material_material.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_foundation_foundation_layout.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_ui_ui_text.js'), require('./kotlin_androidx_compose_material_material.js'));
  else {
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_foundation_foundation_layout === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_foundation_foundation_layout' was not found. Please, check whether 'kotlin_androidx_compose_foundation_foundation_layout' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_graphics === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui_graphics' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_graphics' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_text === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui_text' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_text' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_material_material === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_material_material' was not found. Please, check whether 'kotlin_androidx_compose_material_material' is loaded prior to 'TeslaApp'.");
    }
    root.TeslaApp = factory(typeof TeslaApp === 'undefined' ? {} : TeslaApp, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_material_material);
  }
}(this, function (_, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_material_material) {
  //region block: imports
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventStart;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$crossModule$.isTraceInProgress;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_4;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var padding = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.padding;
  var _get_sp__1413130958 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_sp__1413130958_1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var _TextUnit___init__impl__2653257936 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___init__impl__2653257936;
  var _TextOverflow___init__impl__1470450254 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextOverflow___init__impl__1470450254;
  var Text$composable = kotlin_androidx_compose_material_material.$crossModule$.Text$composable;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventEnd;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$crossModule$.composableLambdaInstance;
  var Window$composable$default = kotlin_androidx_compose_ui_ui.$crossModule$.Window$composable$default;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function TeslaApp() {
    illegalDecoyCallException('TeslaApp');
  }
  function TeslaApp$composable($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress())
      traceEventStart(1691451210, -1, -1, 'TeslaApp$composable (TeslaApp.kt:9)');
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1691451210);
    sourceInformation($composer_0, 'C(TeslaApp$composable)');
    if (!($changed === 0) ? true : !$composer_0._get_skipping__3591855738_bmm4cm_k$()) {
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _Dp___init__impl__1377471179(16);
        break $l$block;
      }
      var tmp0_modifier = padding(tmp, tmp$ret$0);
      var tmp1_text = 'Hello, ' + (new Platform()).getPlatformName_tgw2dw_k$();
      var tmp2_fontSize = _get_sp__1413130958(28);
      var tmp3_color = Companion_getInstance_0()._get_Black__2204520402_og72wn_k$();
      var tmp_0 = _TextUnit___init__impl__2653257936(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__2653257936(new Long(0, 0));
      var tmp_2 = _TextOverflow___init__impl__1470450254(0);
      Text$composable(tmp1_text, tmp0_modifier, tmp3_color, tmp2_fontSize, null, null, null, tmp_0, null, null, tmp_1, tmp_2, false, 0, null, null, $composer_0, 3504, 0, 65520);
    } else
      $composer_0.skipToGroupEnd_lhns3f_k$();
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(TeslaApp$composable$lambda$ref($changed));
    }
    if (isTraceInProgress())
      traceEventEnd();
  }
  function TeslaApp$composable$lambda($$changed, $composer, $force) {
    return TeslaApp$composable($composer, $$changed | 1);
  }
  function TeslaApp$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      TeslaApp$composable$lambda($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Platform() {
    this.$stable_1 = 0;
  }
  Platform.prototype.getPlatformName_tgw2dw_k$ = function () {
    return 'Js';
  };
  Platform.$metadata$ = {
    simpleName: 'Platform',
    kind: 'class',
    interfaces: []
  };
  function main() {
    onWasmReady(main$lambda());
  }
  function ComposableSingletons$Main_jsKt$lambda_1$lambda_1526165605() {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      Unit_getInstance();
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0._get_skipping__3591855738_bmm4cm_k$()) {
        tmp = TeslaApp$composable($composer_0, 0);
      } else {
        tmp = $composer_0.skipToGroupEnd_lhns3f_k$();
      }
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$Main_jsKt() {
    ComposableSingletons$Main_jsKt_instance = this;
    var tmp = this;
    tmp.lambda_1_2647622571__1 = composableLambdaInstance(586046614, false, ComposableSingletons$Main_jsKt$lambda_1$lambda_1526165605());
  }
  ComposableSingletons$Main_jsKt.prototype._get_lambda_1__1953755520_wb7reo_k$ = function () {
    return this.lambda_1_2647622571__1;
  };
  ComposableSingletons$Main_jsKt.$metadata$ = {
    simpleName: 'ComposableSingletons$Main_jsKt',
    kind: 'object',
    interfaces: []
  };
  var ComposableSingletons$Main_jsKt_instance;
  function ComposableSingletons$Main_jsKt_getInstance() {
    if (ComposableSingletons$Main_jsKt_instance == null)
      new ComposableSingletons$Main_jsKt();
    return ComposableSingletons$Main_jsKt_instance;
  }
  function main$lambda() {
    return function () {
      Window$composable$default(null, ComposableSingletons$Main_jsKt_getInstance().lambda_1_2647622571__1, 1, null);
      return Unit_getInstance();
    };
  }
  main();
  return _;
}));

//# sourceMappingURL=TeslaApp.js.map