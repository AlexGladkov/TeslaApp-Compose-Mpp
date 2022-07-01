(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_androidx_compose_ui_ui.js', './kotlin_androidx_compose_foundation_foundation_layout.js', './kotlin_androidx_compose_ui_ui_unit.js', './kotlin_androidx_compose_ui_ui_graphics.js', './kotlin_androidx_compose_ui_ui_text.js', './kotlin_androidx_compose_material_material.js', './kotlin_androidx_compose_foundation_foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_androidx_compose_ui_ui.js'), require('./kotlin_androidx_compose_foundation_foundation_layout.js'), require('./kotlin_androidx_compose_ui_ui_unit.js'), require('./kotlin_androidx_compose_ui_ui_graphics.js'), require('./kotlin_androidx_compose_ui_ui_text.js'), require('./kotlin_androidx_compose_material_material.js'), require('./kotlin_androidx_compose_foundation_foundation.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_foundation_foundation_layout === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_foundation_foundation_layout' was not found. Please, check whether 'kotlin_androidx_compose_foundation_foundation_layout' is loaded prior to 'TeslaApp'.");
    }
    if (typeof kotlin_androidx_compose_ui_ui_unit === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_ui_ui_unit' was not found. Please, check whether 'kotlin_androidx_compose_ui_ui_unit' is loaded prior to 'TeslaApp'.");
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
    if (typeof kotlin_androidx_compose_foundation_foundation === 'undefined') {
      throw new Error("Error loading module 'TeslaApp'. Its dependency 'kotlin_androidx_compose_foundation_foundation' was not found. Please, check whether 'kotlin_androidx_compose_foundation_foundation' is loaded prior to 'TeslaApp'.");
    }
    root.TeslaApp = factory(typeof TeslaApp === 'undefined' ? {} : TeslaApp, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_material_material, kotlin_androidx_compose_foundation_foundation);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_ui_ui, kotlin_androidx_compose_foundation_foundation_layout, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_material_material, kotlin_androidx_compose_foundation_foundation) {
  //region block: imports
  var imul = Math.imul;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventStart;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$crossModule$.isTraceInProgress;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_7;
  var Arrangement_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.Arrangement_getInstance;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_6;
  var columnMeasurePolicy$composable = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.columnMeasurePolicy$composable;
  var _get_LocalDensity__4285485518 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalDensity__4285485518;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var _get_LocalLayoutDirection__930718945 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalLayoutDirection__930718945;
  var _get_LocalViewConfiguration__3377266565 = kotlin_androidx_compose_ui_ui.$crossModule$._get_LocalViewConfiguration__3377266565;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui.$crossModule$.Companion_getInstance_5;
  var composableLambda = kotlin_androidx_compose_runtime_runtime.$crossModule$.composableLambda;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$crossModule$.invalidApplier;
  var Applier = kotlin_androidx_compose_runtime_runtime.$crossModule$.Applier;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var _Updater___init__impl__2643161360 = kotlin_androidx_compose_runtime_runtime.$crossModule$._Updater___init__impl__2643161360;
  var Updater__set_impl_2407782900 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Updater__set_impl_2407782900;
  var _SkippableUpdater___init__impl__268413021 = kotlin_androidx_compose_runtime_runtime.$crossModule$._SkippableUpdater___init__impl__268413021;
  var SkippableUpdater = kotlin_androidx_compose_runtime_runtime.$crossModule$.SkippableUpdater;
  var ComposableLambdaImpl = kotlin_androidx_compose_runtime_runtime.$crossModule$.ComposableLambdaImpl;
  var ColumnScopeInstance_getInstance = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.ColumnScopeInstance_getInstance;
  var _Dp___init__impl__1377471179 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._Dp___init__impl__1377471179;
  var padding = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.padding;
  var _get_sp__1413130958 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._get_sp__1413130958_2;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_graphics.$crossModule$.Companion_getInstance_2;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var _TextUnit___init__impl__2653257936 = kotlin_androidx_compose_ui_ui_unit.$crossModule$._TextUnit___init__impl__2653257936;
  var _TextOverflow___init__impl__1470450254 = kotlin_androidx_compose_ui_ui_text.$crossModule$._TextOverflow___init__impl__1470450254;
  var Text$composable = kotlin_androidx_compose_material_material.$crossModule$.Text$composable;
  var PaddingValues = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.PaddingValues_1;
  var Companion_getInstance_3 = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var LazyColumn$composable = kotlin_androidx_compose_foundation_foundation.$crossModule$.LazyColumn$composable;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventEnd;
  var _SkippableUpdater___get_composer__impl__3883089878 = kotlin_androidx_compose_runtime_runtime.$crossModule$._SkippableUpdater___get_composer__impl__3883089878;
  var materializerOf = kotlin_androidx_compose_ui_ui.$crossModule$.materializerOf;
  var println = kotlin_kotlin.$crossModule$.println;
  var clickable$default = kotlin_androidx_compose_foundation_foundation.$crossModule$.clickable$default;
  var height = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.height;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$crossModule$.Spacer$composable;
  var listOf = kotlin_kotlin.$crossModule$.listOf_1;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$crossModule$.composableLambdaInstance;
  var Window$composable$default = kotlin_androidx_compose_ui_ui.$crossModule$.Window$composable$default;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function TeslaModel(title, subtitle) {
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.$stable_1 = 0;
  }
  TeslaModel.prototype._get_title__3633781881_axnhxj_k$ = function () {
    unreachableDeclarationLog();
    return this.title_1;
  };
  TeslaModel.prototype._get_subtitle__2030909107_xl5fhv_k$ = function () {
    unreachableDeclarationLog();
    return this.subtitle_1;
  };
  TeslaModel.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.title_1;
  };
  TeslaModel.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.subtitle_1;
  };
  TeslaModel.prototype.copy_jxa1ir_k$ = function (title, subtitle) {
    unreachableDeclarationLog();
    return new TeslaModel(title, subtitle);
  };
  TeslaModel.prototype.copy$default_jej4nk_k$ = function (title, subtitle, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      title = this.title_1;
    if (!(($mask0 & 2) === 0))
      subtitle = this.subtitle_1;
    return this.copy_jxa1ir_k$(title, subtitle);
  };
  TeslaModel.prototype.toString = function () {
    return 'TeslaModel(title=' + this.title_1 + ', subtitle=' + this.subtitle_1 + ')';
  };
  TeslaModel.prototype.hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + getStringHashCode(this.subtitle_1) | 0;
    return result;
  };
  TeslaModel.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TeslaModel))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TeslaModel ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.subtitle_1 === tmp0_other_with_cast.subtitle_1))
      return false;
    return true;
  };
  TeslaModel.$metadata$ = {
    simpleName: 'TeslaModel',
    kind: 'class',
    interfaces: []
  };
  function TeslaApp() {
    unreachableDeclarationLog();
    illegalDecoyCallException('TeslaApp');
  }
  function TeslaApp$composable($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress())
      traceEventStart(1691451210, -1, -1, 'TeslaApp$composable (TeslaApp.kt:16)');
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1691451210);
    sourceInformation($composer_0, 'C(TeslaApp$composable)');
    if (!($changed === 0) ? true : !$composer_0._get_skipping__3591855738_bmm4cm_k$()) {
      {
        var tmp0_Column$composable_0 = null;
        var tmp1_Column$composable_0 = null;
        var tmp2_Column$composable_0 = null;
        var tmp3_Column$composable_0 = $composer_0;
        var modifier_1 = tmp0_Column$composable_0;
        var verticalArrangement_2 = tmp1_Column$composable_0;
        var horizontalAlignment_3 = tmp2_Column$composable_0;
        var $composer_4 = tmp3_Column$composable_0;
        $composer_4.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_4, 'C(Column$composable)P(2,3,1)');
        if (!(1 === 0))
          modifier_1 = Companion_getInstance();
        if (!(2 === 0))
          verticalArrangement_2 = Arrangement_getInstance()._get_Top__856463868_e5wzr0_k$();
        if (!(4 === 0))
          horizontalAlignment_3 = Companion_getInstance_0()._get_Start__2698618831_qefacx_k$();
        var measurePolicy_5 = columnMeasurePolicy$composable(verticalArrangement_2, horizontalAlignment_3, $composer_4, 0);
        {
          var tmp0_Layout$composable_0_6 = modifier_1;
          var tmp1_Layout$composable_0_7 = $composer_4;
          var tmp2_Layout$composable_0_8 = 0;
          var modifier_1_9 = {_v: tmp0_Layout$composable_0_6};
          var $composer_2_10 = tmp1_Layout$composable_0_7;
          $composer_2_10.startReplaceableGroup_rp6air_k$(1725976829);
          sourceInformation($composer_2_10, 'C(Layout$composable)P(!1,2)');
          if (!(0 === 0))
            modifier_1_9._v = Companion_getInstance();
          var tmp$ret$0;
          $l$block: {
            var tmp0_$get_current$$composable_0_4_12_3577424201 = _get_LocalDensity__4285485518();
            var tmp1_$get_current$$composable_0_5_13_1393777066 = $composer_2_10;
            var $composer_1_6_14 = tmp1_$get_current$$composable_0_5_13_1393777066;
            var tmp0_2_7_15 = $composer_1_6_14.consume_93tbl1_k$(tmp0_$get_current$$composable_0_4_12_3577424201);
            tmp$ret$0 = tmp0_2_7_15;
            break $l$block;
          }
          var density_3_11 = tmp$ret$0;
          var tmp$ret$1;
          $l$block_0: {
            var tmp2_$get_current$$composable_0_9_17_3505186603 = _get_LocalLayoutDirection__930718945();
            var tmp3_$get_current$$composable_0_10_18_2303350023 = $composer_2_10;
            var $composer_1_11_19 = tmp3_$get_current$$composable_0_10_18_2303350023;
            var tmp0_2_12_20 = $composer_1_11_19.consume_93tbl1_k$(tmp2_$get_current$$composable_0_9_17_3505186603);
            tmp$ret$1 = tmp0_2_12_20;
            break $l$block_0;
          }
          var layoutDirection_8_16 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            var tmp4_$get_current$$composable_0_14_22_3328961211 = _get_LocalViewConfiguration__3377266565();
            var tmp5_$get_current$$composable_0_15_23_59515706 = $composer_2_10;
            var $composer_1_16_24 = tmp5_$get_current$$composable_0_15_23_59515706;
            var tmp0_2_17_25 = $composer_1_16_24.consume_93tbl1_k$(tmp4_$get_current$$composable_0_14_22_3328961211);
            tmp$ret$2 = tmp0_2_17_25;
            break $l$block_1;
          }
          var viewConfiguration_13_21 = tmp$ret$2;
          {
            var tmp6_ReusableComposeNode$composable_0_18_26 = Companion_getInstance_1()._get_Constructor__4117509367_2xnjex_k$();
            var tmp = $composer_2_10;
            var tmp7_ReusableComposeNode$composable_0_19_27 = composableLambda(tmp, 1410142326, true, TeslaApp$composable$lambda_0(modifier_1_9));
            var tmp8_ReusableComposeNode$composable_0_24_32 = $composer_2_10;
            var tmp9_ReusableComposeNode$composable_0_25_33 = 390 | 7168 & tmp2_Layout$composable_0_8 << 9;
            var $composer_1_26_34 = tmp8_ReusableComposeNode$composable_0_24_32;
            var tmp_0 = $composer_1_26_34._get_applier__3305520102_gd3aca_k$();
            if (!isInterface(tmp_0, Applier))
              invalidApplier();
            else {
            }
            $composer_1_26_34.startReusableNode_jk07k2_k$();
            if ($composer_1_26_34._get_inserting__3953988840_5n0cns_k$()) {
              $composer_1_26_34.createNode_13g769_k$(tmp6_ReusableComposeNode$composable_0_18_26);
            } else {
              $composer_1_26_34.useNode_inlzo8_k$();
            }
            $composer_1_26_34.disableReusing_y35tew_k$();
            {
              var tmp10__anonymous__3_27_35_2406412213 = _Updater___init__impl__2643161360($composer_1_26_34);
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_2406412213, measurePolicy_5, Companion_getInstance_1()._get_SetMeasurePolicy__1635018109_r1g41p_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_2406412213, density_3_11, Companion_getInstance_1()._get_SetDensity__2660474629_r14um3_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_2406412213, layoutDirection_8_16, Companion_getInstance_1()._get_SetLayoutDirection__3803499288_84lv54_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_2406412213, viewConfiguration_13_21, Companion_getInstance_1()._get_SetViewConfiguration__2455204860_ufchs4_k$());
            }
            $composer_1_26_34.enableReusing_6k309v_k$();
            var $invokeComposable_dispatchReceiver_2_28_36 = tmp7_ReusableComposeNode$composable_0_19_27;
            if ($invokeComposable_dispatchReceiver_2_28_36 instanceof ComposableLambdaImpl)
              $invokeComposable_dispatchReceiver_2_28_36.invoke_5qf8pc_k$(new SkippableUpdater(_SkippableUpdater___init__impl__268413021($composer_1_26_34)), $composer_1_26_34, 112 & tmp9_ReusableComposeNode$composable_0_25_33 >> 3);
            else {
              $invokeComposable_dispatchReceiver_2_28_36(new SkippableUpdater(_SkippableUpdater___init__impl__268413021($composer_1_26_34)), $composer_1_26_34, 112 & tmp9_ReusableComposeNode$composable_0_25_33 >> 3);
            }
            $composer_1_26_34.startReplaceableGroup_rp6air_k$(2058660585);
            {
              {
                var tmp4__anonymous__37_2307097528 = ColumnScopeInstance_getInstance();
                var tmp_1 = Companion_getInstance();
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = _Dp___init__impl__1377471179(16);
                  break $l$block_2;
                }
                var tmp0_modifier_38 = padding(tmp_1, tmp$ret$3);
                var tmp1_fontSize_39 = _get_sp__1413130958(28);
                var tmp2_color_40 = Companion_getInstance_2()._get_Black__2204520402_og72wn_k$();
                var tmp_2 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_3 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_4 = _TextOverflow___init__impl__1470450254(0);
                Text$composable('Tesla Store', tmp0_modifier_38, tmp2_color_40, tmp1_fontSize_39, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, null, null, $composer_0, 3510, 0, 65520);
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = _Dp___init__impl__1377471179(16);
                  break $l$block_3;
                }
                var tmp3_start_41 = tmp$ret$4;
                var tmp$ret$5;
                $l$block_4: {
                  tmp$ret$5 = _Dp___init__impl__1377471179(16);
                  break $l$block_4;
                }
                var tmp4_end_42 = tmp$ret$5;
                var tmp$ret$6;
                $l$block_5: {
                  tmp$ret$6 = _Dp___init__impl__1377471179(48);
                  break $l$block_5;
                }
                var tmp5_bottom_43 = tmp$ret$6;
                var tmp$ret$7;
                $l$block_6: {
                  tmp$ret$7 = _Dp___init__impl__1377471179(20);
                  break $l$block_6;
                }
                var tmp6_top_44 = tmp$ret$7;
                var tmp_5 = PaddingValues(tmp3_start_41, tmp6_top_44, tmp4_end_42, tmp5_bottom_43);
                var tmp$ret$12;
                $l$block_11: {
                  var tmp0_remember$composable_0_45 = $composer_0;
                  var $composer_1_46 = tmp0_remember$composable_0_45;
                  $composer_1_46.startReplaceableGroup_rp6air_k$(547886695);
                  sourceInformation($composer_1_46, 'C(remember$composable)');
                  var tmp$ret$11;
                  $l$block_10: {
                    var tmp1_cache_0_3_48 = $composer_1_46;
                    var tmp$ret$10;
                    $l$block_9: {
                      var tmp0_let_0_4_49 = tmp1_cache_0_3_48.rememberedValue_4dg93v_k$();
                      {
                      }
                      var tmp$ret$9;
                      $l$block_8: {
                        var tmp_6;
                        if (false ? true : tmp0_let_0_4_49 === Companion_getInstance_3()._get_Empty__2291795012_x4mxmk_k$()) {
                          var tmp$ret$8;
                          $l$block_7: {
                            var tmp0_7_51 = TeslaApp$composable$lambda_1();
                            var tmp0_return_65_109 = tmp0_7_51;
                            tmp$ret$8 = tmp0_return_65_109;
                            break $l$block_7;
                          }
                          var value_2_2_5_50 = tmp$ret$8;
                          tmp1_cache_0_3_48.updateRememberedValue_l1colo_k$(value_2_2_5_50);
                          tmp_6 = value_2_2_5_50;
                        } else {
                          tmp_6 = tmp0_let_0_4_49;
                        }
                        tmp$ret$9 = tmp_6;
                        break $l$block_8;
                      }
                      tmp$ret$10 = tmp$ret$9;
                      break $l$block_9;
                    }
                    var tmp_7 = tmp$ret$10;
                    tmp$ret$11 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
                    break $l$block_10;
                  }
                  var tmp0_2_47 = tmp$ret$11;
                  $composer_1_46.endReplaceableGroup_er37p7_k$();
                  tmp$ret$12 = tmp0_2_47;
                  break $l$block_11;
                }
                LazyColumn$composable(null, null, tmp_5, false, null, null, null, false, tmp$ret$12, $composer_0, 0, 251);
              }
            }
            $composer_1_26_34.endReplaceableGroup_er37p7_k$();
            $composer_1_26_34.endNode_3mkr10_k$();
          }
          $composer_2_10.endReplaceableGroup_er37p7_k$();
        }
        $composer_4.endReplaceableGroup_er37p7_k$();
      }
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
  function TeslaApp$composable$lambda_0($modifier_1_9) {
    return function ($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer, $changed) {
      var $composer_21_29 = $composer;
      Unit_getInstance();
      var $dirty_22_30 = $changed;
      Unit_getInstance();
      var tmp;
      if (($changed & 14) === 0) {
        $dirty_22_30 = $dirty_22_30 | ($composer_21_29.changed_ga7h3f_k$(_SkippableUpdater___get_composer__impl__3883089878($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928.composer_1)) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty_22_30 & 91) === 18) ? true : !$composer_21_29._get_skipping__3591855738_bmm4cm_k$()) {
        var $invokeComposable_dispatchReceiver_23_31 = materializerOf($modifier_1_9._v);
        var tmp_1;
        if ($invokeComposable_dispatchReceiver_23_31 instanceof ComposableLambdaImpl) {
          tmp_1 = $invokeComposable_dispatchReceiver_23_31.invoke_5qf8pc_k$($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer_21_29, 14 & $dirty_22_30);
        } else {
          {
            tmp_1 = $invokeComposable_dispatchReceiver_23_31($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer_21_29, 14 & $dirty_22_30);
          }
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = $composer_21_29.skipToGroupEnd_lhns3f_k$();
      }
      return Unit_getInstance();
    };
  }
  function TeslaApp$composable$lambda$lambda$lambda($element_2_11_55) {
    return function () {
      println($element_2_11_55.title_1 + ' selected');
      return Unit_getInstance();
    };
  }
  function TeslaApp$composable$lambda$lambda$lambda_0($modifier_1_9_28_36_80) {
    return function ($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer, $changed) {
      var $composer_21_29_48_56_100 = $composer;
      Unit_getInstance();
      var $dirty_22_30_49_57_101 = $changed;
      Unit_getInstance();
      var tmp;
      if (($changed & 14) === 0) {
        $dirty_22_30_49_57_101 = $dirty_22_30_49_57_101 | ($composer_21_29_48_56_100.changed_ga7h3f_k$(_SkippableUpdater___get_composer__impl__3883089878($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928.composer_1)) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty_22_30_49_57_101 & 91) === 18) ? true : !$composer_21_29_48_56_100._get_skipping__3591855738_bmm4cm_k$()) {
        var $invokeComposable_dispatchReceiver_23_31_50_58_102 = materializerOf($modifier_1_9_28_36_80._v);
        var tmp_1;
        if ($invokeComposable_dispatchReceiver_23_31_50_58_102 instanceof ComposableLambdaImpl) {
          tmp_1 = $invokeComposable_dispatchReceiver_23_31_50_58_102.invoke_5qf8pc_k$($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer_21_29_48_56_100, 14 & $dirty_22_30_49_57_101);
        } else {
          {
            tmp_1 = $invokeComposable_dispatchReceiver_23_31_50_58_102($extensionReceiver_androidx_compose_runtime_SkippableUpdater_1655868928, $composer_21_29_48_56_100, 14 & $dirty_22_30_49_57_101);
          }
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = $composer_21_29_48_56_100.skipToGroupEnd_lhns3f_k$();
      }
      return Unit_getInstance();
    };
  }
  function TeslaApp$composable$lambda$lambda($element_2_11_55) {
    return function ($this$item, $composer, $changed) {
      var $composer_5_13_57 = $composer;
      Unit_getInstance();
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_5_13_57._get_skipping__3591855738_bmm4cm_k$()) {
        var tmp_0 = Companion_getInstance();
        var tmp$ret$4;
        $l$block_3: {
          var tmp0_remember$composable_0_7_15_59 = $composer_5_13_57;
          var $composer_1_8_16_60 = tmp0_remember$composable_0_7_15_59;
          $composer_1_8_16_60.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_1_8_16_60, 'C(remember$composable)P(1)');
          var tmp$ret$3;
          $l$block_2: {
            var tmp1_cache_0_3_10_18_62 = $composer_1_8_16_60;
            var tmp2_cache_0_4_11_19_63 = $composer_1_8_16_60.changed_ga7h3f_k$($element_2_11_55);
            var tmp$ret$2;
            $l$block_1: {
              var tmp0_let_0_5_12_20_64 = tmp1_cache_0_3_10_18_62.rememberedValue_4dg93v_k$();
              {
              }
              var tmp$ret$1;
              $l$block_0: {
                var tmp_1;
                if (tmp2_cache_0_4_11_19_63 ? true : tmp0_let_0_5_12_20_64 === Companion_getInstance_3()._get_Empty__2291795012_x4mxmk_k$()) {
                  var tmp$ret$0;
                  $l$block: {
                    var tmp0_8_14_22_66 = TeslaApp$composable$lambda$lambda$lambda($element_2_11_55);
                    var tmp0_return_10_16_24_68 = tmp0_8_14_22_66;
                    tmp$ret$0 = tmp0_return_10_16_24_68;
                    break $l$block;
                  }
                  var value_2_2_6_13_21_65 = tmp$ret$0;
                  tmp1_cache_0_3_10_18_62.updateRememberedValue_l1colo_k$(value_2_2_6_13_21_65);
                  tmp_1 = value_2_2_6_13_21_65;
                } else {
                  tmp_1 = tmp0_let_0_5_12_20_64;
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
          var tmp0_2_9_17_61 = tmp$ret$3;
          $composer_1_8_16_60.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0_2_9_17_61;
          break $l$block_3;
        }
        var tmp1_Column$composable_0_6_14_58 = clickable$default(tmp_0, false, null, null, tmp$ret$4, 7, null);
        var tmp2_Column$composable_0_17_25_69 = null;
        var tmp3_Column$composable_0_18_26_70 = null;
        var tmp4_Column$composable_0_19_27_71 = $composer_5_13_57;
        var modifier_1_20_28_72 = tmp1_Column$composable_0_6_14_58;
        var verticalArrangement_2_21_29_73 = tmp2_Column$composable_0_17_25_69;
        var horizontalAlignment_3_22_30_74 = tmp3_Column$composable_0_18_26_70;
        var $composer_4_23_31_75 = tmp4_Column$composable_0_19_27_71;
        $composer_4_23_31_75.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_4_23_31_75, 'C(Column$composable)P(2,3,1)');
        if (!(0 === 0))
          modifier_1_20_28_72 = Companion_getInstance();
        if (!(2 === 0))
          verticalArrangement_2_21_29_73 = Arrangement_getInstance()._get_Top__856463868_e5wzr0_k$();
        if (!(4 === 0))
          horizontalAlignment_3_22_30_74 = Companion_getInstance_0()._get_Start__2698618831_qefacx_k$();
        var measurePolicy_5_24_32_76 = columnMeasurePolicy$composable(verticalArrangement_2_21_29_73, horizontalAlignment_3_22_30_74, $composer_4_23_31_75, 0);
        {
          var tmp0_Layout$composable_0_6_25_33_77 = modifier_1_20_28_72;
          var tmp1_Layout$composable_0_7_26_34_78 = $composer_4_23_31_75;
          var tmp2_Layout$composable_0_8_27_35_79 = 0;
          var modifier_1_9_28_36_80 = {_v: tmp0_Layout$composable_0_6_25_33_77};
          var $composer_2_10_29_37_81 = tmp1_Layout$composable_0_7_26_34_78;
          $composer_2_10_29_37_81.startReplaceableGroup_rp6air_k$(1725976829);
          sourceInformation($composer_2_10_29_37_81, 'C(Layout$composable)P(!1,2)');
          if (!(0 === 0))
            modifier_1_9_28_36_80._v = Companion_getInstance();
          var tmp$ret$5;
          $l$block_4: {
            var tmp0_$get_current$$composable_0_4_12_31_39_83_3314358409 = _get_LocalDensity__4285485518();
            var tmp1_$get_current$$composable_0_5_13_32_40_84_3836674228 = $composer_2_10_29_37_81;
            var $composer_1_6_14_33_41_85 = tmp1_$get_current$$composable_0_5_13_32_40_84_3836674228;
            var tmp0_2_7_15_34_42_86 = $composer_1_6_14_33_41_85.consume_93tbl1_k$(tmp0_$get_current$$composable_0_4_12_31_39_83_3314358409);
            tmp$ret$5 = tmp0_2_7_15_34_42_86;
            break $l$block_4;
          }
          var density_3_11_30_38_82 = tmp$ret$5;
          var tmp$ret$6;
          $l$block_5: {
            var tmp2_$get_current$$composable_0_9_17_36_44_88_1256248023 = _get_LocalLayoutDirection__930718945();
            var tmp3_$get_current$$composable_0_10_18_37_45_89_340913180 = $composer_2_10_29_37_81;
            var $composer_1_11_19_38_46_90 = tmp3_$get_current$$composable_0_10_18_37_45_89_340913180;
            var tmp0_2_12_20_39_47_91 = $composer_1_11_19_38_46_90.consume_93tbl1_k$(tmp2_$get_current$$composable_0_9_17_36_44_88_1256248023);
            tmp$ret$6 = tmp0_2_12_20_39_47_91;
            break $l$block_5;
          }
          var layoutDirection_8_16_35_43_87 = tmp$ret$6;
          var tmp$ret$7;
          $l$block_6: {
            var tmp4_$get_current$$composable_0_14_22_41_49_93_3108576214 = _get_LocalViewConfiguration__3377266565();
            var tmp5_$get_current$$composable_0_15_23_42_50_94_3058122147 = $composer_2_10_29_37_81;
            var $composer_1_16_24_43_51_95 = tmp5_$get_current$$composable_0_15_23_42_50_94_3058122147;
            var tmp0_2_17_25_44_52_96 = $composer_1_16_24_43_51_95.consume_93tbl1_k$(tmp4_$get_current$$composable_0_14_22_41_49_93_3108576214);
            tmp$ret$7 = tmp0_2_17_25_44_52_96;
            break $l$block_6;
          }
          var viewConfiguration_13_21_40_48_92 = tmp$ret$7;
          {
            var tmp6_ReusableComposeNode$composable_0_18_26_45_53_97 = Companion_getInstance_1()._get_Constructor__4117509367_2xnjex_k$();
            var tmp_3 = $composer_2_10_29_37_81;
            var tmp7_ReusableComposeNode$composable_0_19_27_46_54_98 = composableLambda(tmp_3, 1410142326, true, TeslaApp$composable$lambda$lambda$lambda_0(modifier_1_9_28_36_80));
            var tmp8_ReusableComposeNode$composable_0_24_32_51_59_103 = $composer_2_10_29_37_81;
            var tmp9_ReusableComposeNode$composable_0_25_33_52_60_104 = 390 | 7168 & tmp2_Layout$composable_0_8_27_35_79 << 9;
            var $composer_1_26_34_53_61_105 = tmp8_ReusableComposeNode$composable_0_24_32_51_59_103;
            var tmp_4 = $composer_1_26_34_53_61_105._get_applier__3305520102_gd3aca_k$();
            if (!isInterface(tmp_4, Applier))
              invalidApplier();
            else {
            }
            $composer_1_26_34_53_61_105.startReusableNode_jk07k2_k$();
            if ($composer_1_26_34_53_61_105._get_inserting__3953988840_5n0cns_k$()) {
              $composer_1_26_34_53_61_105.createNode_13g769_k$(tmp6_ReusableComposeNode$composable_0_18_26_45_53_97);
            } else {
              $composer_1_26_34_53_61_105.useNode_inlzo8_k$();
            }
            $composer_1_26_34_53_61_105.disableReusing_y35tew_k$();
            {
              var tmp10__anonymous__3_27_35_54_62_106_3660437386 = _Updater___init__impl__2643161360($composer_1_26_34_53_61_105);
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_54_62_106_3660437386, measurePolicy_5_24_32_76, Companion_getInstance_1()._get_SetMeasurePolicy__1635018109_r1g41p_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_54_62_106_3660437386, density_3_11_30_38_82, Companion_getInstance_1()._get_SetDensity__2660474629_r14um3_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_54_62_106_3660437386, layoutDirection_8_16_35_43_87, Companion_getInstance_1()._get_SetLayoutDirection__3803499288_84lv54_k$());
              Updater__set_impl_2407782900(tmp10__anonymous__3_27_35_54_62_106_3660437386, viewConfiguration_13_21_40_48_92, Companion_getInstance_1()._get_SetViewConfiguration__2455204860_ufchs4_k$());
            }
            $composer_1_26_34_53_61_105.enableReusing_6k309v_k$();
            var $invokeComposable_dispatchReceiver_2_28_36_55_63_107 = tmp7_ReusableComposeNode$composable_0_19_27_46_54_98;
            if ($invokeComposable_dispatchReceiver_2_28_36_55_63_107 instanceof ComposableLambdaImpl)
              $invokeComposable_dispatchReceiver_2_28_36_55_63_107.invoke_5qf8pc_k$(new SkippableUpdater(_SkippableUpdater___init__impl__268413021($composer_1_26_34_53_61_105)), $composer_1_26_34_53_61_105, 112 & tmp9_ReusableComposeNode$composable_0_25_33_52_60_104 >> 3);
            else {
              $invokeComposable_dispatchReceiver_2_28_36_55_63_107(new SkippableUpdater(_SkippableUpdater___init__impl__268413021($composer_1_26_34_53_61_105)), $composer_1_26_34_53_61_105, 112 & tmp9_ReusableComposeNode$composable_0_25_33_52_60_104 >> 3);
            }
            $composer_1_26_34_53_61_105.startReplaceableGroup_rp6air_k$(2058660585);
            {
              {
                var tmp5__anonymous__37_56_64_108_318726062 = ColumnScopeInstance_getInstance();
                var tmp_5 = Companion_getInstance();
                var tmp$ret$8;
                $l$block_7: {
                  tmp$ret$8 = _Dp___init__impl__1377471179(8);
                  break $l$block_7;
                }
                Spacer$composable(height(tmp_5, tmp$ret$8), $composer_5_13_57, 6);
                var tmp_6 = Companion_getInstance_2()._get_Black__2204520402_og72wn_k$();
                var tmp_7 = _get_sp__1413130958(20);
                var tmp_8 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_9 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_10 = _TextOverflow___init__impl__1470450254(0);
                Text$composable($element_2_11_55.title_1, null, tmp_6, tmp_7, null, null, null, tmp_8, null, null, tmp_9, tmp_10, false, 0, null, null, $composer_5_13_57, 3456, 0, 65522);
                var tmp_11 = Companion_getInstance();
                var tmp$ret$9;
                $l$block_8: {
                  tmp$ret$9 = _Dp___init__impl__1377471179(8);
                  break $l$block_8;
                }
                Spacer$composable(height(tmp_11, tmp$ret$9), $composer_5_13_57, 6);
                var tmp_12 = Companion_getInstance_2()._get_DarkGray__1611480018_693n9l_k$();
                var tmp_13 = _get_sp__1413130958(14);
                var tmp_14 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_15 = _TextUnit___init__impl__2653257936(new Long(0, 0));
                var tmp_16 = _TextOverflow___init__impl__1470450254(0);
                Text$composable($element_2_11_55.subtitle_1, null, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, null, null, $composer_5_13_57, 3456, 0, 65522);
                var tmp_17 = Companion_getInstance();
                var tmp$ret$10;
                $l$block_9: {
                  tmp$ret$10 = _Dp___init__impl__1377471179(8);
                  break $l$block_9;
                }
                Spacer$composable(height(tmp_17, tmp$ret$10), $composer_5_13_57, 6);
              }
            }
            $composer_1_26_34_53_61_105.endReplaceableGroup_er37p7_k$();
            $composer_1_26_34_53_61_105.endNode_3mkr10_k$();
          }
          $composer_2_10_29_37_81.endReplaceableGroup_er37p7_k$();
        }
        tmp = $composer_4_23_31_75.endReplaceableGroup_er37p7_k$();
      } else {
        tmp = $composer_5_13_57.skipToGroupEnd_lhns3f_k$();
      }
      return Unit_getInstance();
    };
  }
  function TeslaApp$composable$lambda_1() {
    return function ($this$LazyColumn) {
      {
        var tmp0_forEach_0_9_53 = listOf([new TeslaModel('Tesla Y', 'The most cheapest car'), new TeslaModel('Tesla Model 3', 'The fastest car'), new TeslaModel('Tesla X', 'The most beautiful car'), new TeslaModel('Tesla S', 'Red'), new TeslaModel('Tesla Y', 'The most cheapest car'), new TeslaModel('Tesla Model 3', 'The fastest car'), new TeslaModel('Tesla X', 'The most beautiful car'), new TeslaModel('Tesla S', 'Red'), new TeslaModel('Tesla Y', 'The most cheapest car'), new TeslaModel('Tesla Model 3', 'The fastest car'), new TeslaModel('Tesla X', 'The most beautiful car'), new TeslaModel('Tesla S', 'Red')]);
        var tmp0_iterator_1_10_54 = tmp0_forEach_0_9_53.iterator_jk1svi_k$();
        while (tmp0_iterator_1_10_54.hasNext_bitz1p_k$()) {
          var element_2_11_55 = tmp0_iterator_1_10_54.next_20eer_k$();
          {
            $this$LazyColumn.item$composable$default_oh5z2a_k$(null, null, composableLambdaInstance(-1904448417, true, TeslaApp$composable$lambda$lambda(element_2_11_55)), 3, null);
          }
        }
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function TeslaApp$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      TeslaApp$composable$lambda($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
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
    unreachableDeclarationLog();
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