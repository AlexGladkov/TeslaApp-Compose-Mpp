(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_androidx_compose_runtime_runtime.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_androidx_compose_runtime_runtime.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_runtime_runtime_saveable'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_runtime_runtime_saveable'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_runtime_runtime_saveable'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_runtime_runtime_saveable'.");
    }
    root.kotlin_androidx_compose_runtime_runtime_saveable = factory(typeof kotlin_androidx_compose_runtime_runtime_saveable === 'undefined' ? {} : kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin);
  }
}(this, function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin) {
  //region block: imports
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var $get_currentCompositeKeyHash$$composable_2474481297 = kotlin_androidx_compose_runtime_runtime.$crossModule$.$get_currentCompositeKeyHash$$composable_2474481297;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.rememberUpdatedState$composable;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.DisposableEffect$composable;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_2;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.referentialEqualityPolicy;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.structuralEqualityPolicy;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.neverEqualPolicy;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$crossModule$.SnapshotMutableState;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$crossModule$.DisposableEffectResult;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.staticCompositionLocalOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_MaxSupportedRadix__3595729975() {
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = saver;
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)');
    if (!(($default & 2) === 0))
      saver_0 = autoSaver();
    if (!(($default & 4) === 0))
      key_0 = null;
    $composer_0.startReplaceableGroup_rp6air_k$(1790924732);
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNullOrEmpty_0 = key_0;
      {
      }
      tmp$ret$0 = tmp0_isNullOrEmpty_0 == null ? true : charSequenceLength(tmp0_isNullOrEmpty_0) === 0;
      break $l$block;
    }
    if (!tmp$ret$0) {
      tmp = key_0;
    } else {
      {
        tmp = toString($get_currentCompositeKeyHash$$composable_2474481297($composer_0, 0), MaxSupportedRadix);
      }
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var finalKey = tmp1_group;
    if (!(saver_0 == null) ? isInterface(saver_0, Saver) : false)
      saver_0;
    else
      THROW_CCE();
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_$get_current$$composable_0_3633390145 = _get_LocalSaveableStateRegistry__845043135();
      var tmp2_$get_current$$composable_0_3378653600 = $composer_0;
      var $composer_1 = tmp2_$get_current$$composable_0_3378653600;
      var tmp0_2 = $composer_1.consume_93tbl1_k$(tmp1_$get_current$$composable_0_3633390145);
      tmp$ret$1 = tmp0_2;
      break $l$block_0;
    }
    var registry = tmp$ret$1;
    var tmp$ret$8;
    $l$block_7: {
      var tmp3_remember$composable_0 = inputs.slice();
      var tmp4_remember$composable_0 = $composer_0;
      var $composer_1_0 = tmp4_remember$composable_0;
      $composer_1_0.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_1_0, 'C(remember$composable)P(1)');
      var invalid_2 = false;
      var indexedObject = tmp3_remember$composable_0;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key_4 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid_2 = !!(invalid_2 | $composer_1_0.changed_ga7h3f_k$(key_4));
      }
      var tmp$ret$7;
      $l$block_6: {
        var tmp1_cache_0_6 = $composer_1_0;
        var tmp2_cache_0_7 = invalid_2;
        var tmp$ret$6;
        $l$block_5: {
          var tmp0_let_0_8 = tmp1_cache_0_6.rememberedValue_4dg93v_k$();
          {
          }
          var tmp$ret$5;
          $l$block_4: {
            var tmp_0;
            if (tmp2_cache_0_7 ? true : tmp0_let_0_8 === Companion_getInstance()._get_Empty__2291795012_x4mxmk_k$()) {
              var tmp$ret$4;
              $l$block_3: {
                var tmp0_safe_receiver_13 = registry;
                var tmp1_safe_receiver_12 = tmp0_safe_receiver_13 == null ? null : tmp0_safe_receiver_13.consumeRestored_kptfch_k$(finalKey);
                var tmp_1;
                if (tmp1_safe_receiver_12 == null) {
                  tmp_1 = null;
                } else {
                  var tmp$ret$3;
                  $l$block_2: {
                    {
                    }
                    var tmp$ret$2;
                    $l$block_1: {
                      var tmp0_return_2_14 = saver_0.restore_uzeo8_k$(tmp1_safe_receiver_12);
                      tmp$ret$2 = tmp0_return_2_14;
                      break $l$block_1;
                    }
                    tmp$ret$3 = tmp$ret$2;
                    break $l$block_2;
                  }
                  tmp_1 = tmp$ret$3;
                }
                var restored_11 = tmp_1;
                var tmp2_elvis_lhs_16 = restored_11;
                var tmp0_return_15 = tmp2_elvis_lhs_16 == null ? init() : tmp2_elvis_lhs_16;
                tmp$ret$4 = tmp0_return_15;
                break $l$block_3;
              }
              var value_2_2_9 = tmp$ret$4;
              tmp1_cache_0_6.updateRememberedValue_l1colo_k$(value_2_2_9);
              tmp_0 = value_2_2_9;
            } else {
              tmp_0 = tmp0_let_0_8;
            }
            tmp$ret$5 = tmp_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        var tmp_2 = tmp$ret$6;
        tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        break $l$block_6;
      }
      var tmp0_5 = tmp$ret$7;
      $composer_1_0.endReplaceableGroup_er37p7_k$();
      tmp$ret$8 = tmp0_5;
      break $l$block_7;
    }
    var value = tmp$ret$8;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    var tmp0 = value;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function requireCanBeSaved(_this__1828080292, value) {
    if (!(value == null) ? !_this__1828080292.canBeSaved_nnajrq_k$(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value._get_policy__1887338521_v7o7q1_k$() === neverEqualPolicy()) ? !(value._get_policy__1887338521_v7o7q1_k$() === structuralEqualityPolicy()) : false) ? !(value._get_policy__1887338521_v7o7q1_k$() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_0(value._get_value__3683422336_a43j40_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        {
          tmp = toString_0(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
        }
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_runtime_saveable_SaverScope$0.prototype.canBeSaved_nnajrq_k$ = function (value) {
    return this.function_1(value);
  };
  sam$androidx_compose_runtime_saveable_SaverScope$0.$metadata$ = {
    simpleName: 'sam$androidx_compose_runtime_saveable_SaverScope$0',
    kind: 'class',
    interfaces: [SaverScope]
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.canBeSaved_nnajrq_k$(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_with_0 = $saverState._get_value__3683422336_a43j40_k$();
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
          tmp$ret$0 = tmp0_with_0.save_ef702r_k$(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState._get_value__3683422336_a43j40_k$());
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    };
  }
  function _no_name_provided__1_2832250971($entry) {
    this.$entry_1 = $entry;
  }
  _no_name_provided__1_2832250971.prototype.dispose_2_9dpg3l_k$ = function () {
    {
      this.$entry_1.unregister_ibszrp_k$();
    }
  };
  _no_name_provided__1_2832250971.prototype.dispose_3n44we_k$ = function () {
    return this.dispose_2_9dpg3l_k$();
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [DisposableEffectResult]
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      Unit_getInstance();
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.registerProvider_h94pml_k$($finalKey, valueProvider);
      Unit_getInstance();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = new _no_name_provided__1_2832250971(entry);
        break $l$block;
      }
      return tmp$ret$0;
    };
  }
  function _get_LocalSaveableStateRegistry__845043135() {
    init_properties_SaveableStateRegistry_kt_1326311741();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function SaveableStateRegistry() {
  }
  SaveableStateRegistry.$metadata$ = {
    simpleName: 'SaveableStateRegistry',
    kind: 'interface',
    interfaces: []
  };
  function LocalSaveableStateRegistry$lambda() {
    return function () {
      return null;
    };
  }
  var properties_initialized_SaveableStateRegistry_kt_278414489;
  function init_properties_SaveableStateRegistry_kt_1326311741() {
    if (!properties_initialized_SaveableStateRegistry_kt_278414489) {
      properties_initialized_SaveableStateRegistry_kt_278414489 = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda());
    }
  }
  function _get_AutoSaver__285588747() {
    init_properties_Saver_kt_285552831();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  Saver.$metadata$ = {
    simpleName: 'Saver',
    kind: 'interface',
    interfaces: []
  };
  function Saver_0(save, restore) {
    init_properties_Saver_kt_285552831();
    return new Saver$1(save, restore);
  }
  function SaverScope() {
  }
  SaverScope.$metadata$ = {
    simpleName: 'SaverScope',
    kind: 'interface',
    interfaces: []
  };
  function autoSaver() {
    init_properties_Saver_kt_285552831();
    var tmp = _get_AutoSaver__285588747();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda() {
    return function ($this$Saver, it) {
      return it;
    };
  }
  function AutoSaver$lambda_0() {
    return function (it) {
      return it;
    };
  }
  function Saver$1($save, $restore) {
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  Saver$1.prototype.save_ef702r_k$ = function (_this__1828080292, value) {
    return this.$save_1(_this__1828080292, value);
  };
  Saver$1.prototype.restore_uzeo8_k$ = function (value) {
    return this.$restore_1(value);
  };
  Saver$1.$metadata$ = {
    kind: 'class',
    interfaces: [Saver]
  };
  var properties_initialized_Saver_kt_3540632603;
  function init_properties_Saver_kt_285552831() {
    if (!properties_initialized_Saver_kt_3540632603) {
      properties_initialized_Saver_kt_3540632603 = true;
      var tmp = AutoSaver$lambda();
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0());
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Saver = Saver_0;
  _.$crossModule$.rememberSaveable$composable = rememberSaveable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_runtime_runtime_saveable.js.map