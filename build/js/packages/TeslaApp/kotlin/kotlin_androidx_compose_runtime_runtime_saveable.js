(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_androidx_compose_runtime_runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_androidx_compose_runtime_runtime.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_runtime_runtime_saveable'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_runtime_runtime_saveable'.");
    }
    if (typeof kotlin_androidx_compose_runtime_runtime === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_runtime_runtime_saveable'. Its dependency 'kotlin_androidx_compose_runtime_runtime' was not found. Please, check whether 'kotlin_androidx_compose_runtime_runtime' is loaded prior to 'kotlin_androidx_compose_runtime_runtime_saveable'.");
    }
    root.kotlin_androidx_compose_runtime_runtime_saveable = factory(typeof kotlin_androidx_compose_runtime_runtime_saveable === 'undefined' ? {} : kotlin_androidx_compose_runtime_runtime_saveable, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_2;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$crossModule$.sourceInformation;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var $get_currentCompositeKeyHash$$composable_2474481297 = kotlin_androidx_compose_runtime_runtime.$crossModule$.$get_currentCompositeKeyHash$$composable_2474481297;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_1;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$crossModule$.Companion_getInstance_1;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.rememberUpdatedState$composable;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.DisposableEffect$composable;
  var toString_1 = kotlin_kotlin.$crossModule$.toString_2;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.referentialEqualityPolicy;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.structuralEqualityPolicy;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$crossModule$.neverEqualPolicy;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$crossModule$.SnapshotMutableState;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$crossModule$.DisposableEffectResult;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var toMutableMap = kotlin_kotlin.$crossModule$.toMutableMap;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$crossModule$.illegalDecoyCallException;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventStart;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$crossModule$.isTraceInProgress;
  var _get_reuseKey__1372351968 = kotlin_androidx_compose_runtime_runtime.$crossModule$._get_reuseKey__1372351968;
  var CompositionLocalProvider$composable = kotlin_androidx_compose_runtime_runtime.$crossModule$.CompositionLocalProvider$composable;
  var DisposableEffect$composable_0 = kotlin_androidx_compose_runtime_runtime.$crossModule$.DisposableEffect$composable_1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$crossModule$.traceEventEnd;
  var isBlank = kotlin_kotlin.$crossModule$.isBlank;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var arrayListOf = kotlin_kotlin.$crossModule$.arrayListOf;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$crossModule$.staticCompositionLocalOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      Unit_getInstance();
      var inductionVariable = 0;
      var last = list._get_size__809037418_ddoh9m_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.get_fkrdnv_k$(index);
          if (!(item == null)) {
            {
              var tmp0_require_0 = $this$Saver.canBeSaved_nnajrq_k$(item);
              {
              }
              {
                {
                }
                if (!tmp0_require_0) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Failed requirement.';
                    break $l$block;
                  }
                  var message_2_1 = tmp$ret$0;
                  throw IllegalArgumentException_init_$Create$(toString(message_2_1));
                }
              }
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = !list.isEmpty_y1axqb_k$();
        break $l$block_0;
      }
      if (tmp$ret$1) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        {
          tmp_0 = null;
        }
      }
      return tmp_0;
    };
  }
  function _get_MaxSupportedRadix__3595729975() {
    unreachableDeclarationLog();
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
        tmp = toString_0($get_currentCompositeKeyHash$$composable_2474481297($composer_0, 0), MaxSupportedRadix);
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
          tmp_0 = 'MutableState containing ' + toString_1(value._get_value__3683422336_a43j40_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        {
          tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
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
  function SaveableStateHolder() {
    unreachableDeclarationLog();
  }
  SaveableStateHolder.$metadata$ = {
    simpleName: 'SaveableStateHolder',
    kind: 'interface',
    interfaces: []
  };
  function rememberSaveableStateHolder$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1658217662);
    sourceInformation($composer_0, 'C(rememberSaveableStateHolder$composable)');
    var tmp$ret$1;
    $l$block_0: {
      var tmp = Companion_getInstance_0().Saver_1;
      var tmp0_apply_0 = rememberSaveable$composable([], tmp, null, rememberSaveableStateHolder$composable$lambda(), $composer_0, 8, 4);
      {
      }
      {
        var tmp_0 = tmp0_apply_0;
        var tmp$ret$0;
        $l$block: {
          var tmp0_$get_current$$composable_0_2_4163171861 = _get_LocalSaveableStateRegistry__845043135();
          var tmp1_$get_current$$composable_0_3_4174487989 = $composer_0;
          var $composer_1_4 = tmp1_$get_current$$composable_0_3_4174487989;
          var tmp0_2_5 = $composer_1_4.consume_93tbl1_k$(tmp0_$get_current$$composable_0_2_4163171861);
          tmp$ret$0 = tmp0_2_5;
          break $l$block;
        }
        tmp_0.parentSaveableStateRegistry_1 = tmp$ret$0;
      }
      tmp$ret$1 = tmp0_apply_0;
      break $l$block_0;
    }
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.parentSaveableStateRegistry_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda() {
    return function ($this$Saver, it) {
      return saveAll(it);
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0() {
    return function (it) {
      return new SaveableStateHolderImpl(it);
    };
  }
  function SaveableStateHolderImpl_init_$Init$(savedStates, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      savedStates = tmp$ret$0;
    }
    SaveableStateHolderImpl.call($this, savedStates);
    return $this;
  }
  function SaveableStateHolderImpl_init_$Create$(savedStates, $mask0, $marker) {
    return SaveableStateHolderImpl_init_$Init$(savedStates, $mask0, $marker, Object.create(SaveableStateHolderImpl.prototype));
  }
  function _get_savedStates__3774988104($this) {
    unreachableDeclarationLog();
    return $this.savedStates_1;
  }
  function _get_registryHolders__3544514567($this) {
    unreachableDeclarationLog();
    return $this.registryHolders_1;
  }
  function saveAll($this) {
    var map = toMutableMap($this.savedStates_1);
    {
      var tmp0_forEach_0 = $this.registryHolders_1._get_values__2516944425_tel787_k$();
      var tmp0_iterator_1 = tmp0_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          element_2.saveTo_j93loz_k$(map);
        }
      }
    }
    return map;
  }
  function RegistryHolder($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.shouldSave_1 = true;
    var tmp = this;
    var tmp_0 = this.$this_1.savedStates_1.get_1mhr4y_k$(this.key_1);
    tmp.registry_1 = SaveableStateRegistry_0(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.$this_1));
  }
  RegistryHolder.prototype._get_key__857139730_e6bh8y_k$ = function () {
    unreachableDeclarationLog();
    return this.key_1;
  };
  RegistryHolder.prototype._set_shouldSave__2860993479_qw16bm_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.shouldSave_1 = _set____804775014;
  };
  RegistryHolder.prototype._get_shouldSave__1950240955_w94fjv_k$ = function () {
    unreachableDeclarationLog();
    return this.shouldSave_1;
  };
  RegistryHolder.prototype._get_registry__1560074030_pststq_k$ = function () {
    unreachableDeclarationLog();
    return this.registry_1;
  };
  RegistryHolder.prototype.saveTo_j93loz_k$ = function (map) {
    if (this.shouldSave_1) {
      {
        var tmp0_set_0 = this.key_1;
        var tmp1_set_0 = this.registry_1.performSave_ohn24i_k$();
        map.put_3mhbri_k$(tmp0_set_0, tmp1_set_0);
        Unit_getInstance();
      }
    }
  };
  RegistryHolder.$metadata$ = {
    simpleName: 'RegistryHolder',
    kind: 'class',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda();
    tmp.Saver_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0());
  }
  Companion.prototype._get_Saver__2681684988_qoi8lg_k$ = function () {
    unreachableDeclarationLog();
    return this.Saver_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SaveableStateProvider$composable$lambda($tmp0_rcvr, $key, $content, $$changed, $composer, $force) {
    return $tmp0_rcvr.SaveableStateProvider$composable_n5yi3h_k$($key, $content, $composer, $$changed | 1);
  }
  function _no_name_provided__1_23_956240037($registryHolder_3, this$0, $key) {
    this.$registryHolder_3__1 = $registryHolder_3;
    this.this$0__1 = this$0;
    this.$key_1 = $key;
  }
  _no_name_provided__1_23_956240037.prototype.dispose_2_24_y5bbuq_k$ = function () {
    {
      this.$registryHolder_3__1.saveTo_j93loz_k$(this.this$0__1.savedStates_1);
      var tmp0_this_7_25 = this.this$0__1;
      {
        var tmp0_minusAssign_0_8_26 = tmp0_this_7_25.registryHolders_1;
        tmp0_minusAssign_0_8_26.remove_8hbkc0_k$(this.$key_1);
        Unit_getInstance();
      }
    }
  };
  _no_name_provided__1_23_956240037.prototype.dispose_3n44we_k$ = function () {
    return this.dispose_2_24_y5bbuq_k$();
  };
  _no_name_provided__1_23_956240037.$metadata$ = {
    simpleName: '<no name provided>_1_23',
    kind: 'class',
    interfaces: [DisposableEffectResult]
  };
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this$0, $key, $registryHolder_3) {
    return function ($this$DisposableEffect) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0_18 = this$0.registryHolders_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0_18, Map) ? tmp0_contains_0_18 : THROW_CCE()).containsKey_wgk31w_k$($key);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp1_require_0_17 = !tmp$ret$1;
      {
      }
      var tmp;
      if (!tmp1_require_0_17) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = 'Key ' + toString($key) + ' was used multiple times ';
          break $l$block_1;
        }
        var message_1_19 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1_19));
      }
      var tmp0_this_20 = this$0;
      var tmp2_minusAssign_0_21 = tmp0_this_20.savedStates_1;
      tmp2_minusAssign_0_21.remove_8hbkc0_k$($key);
      Unit_getInstance();
      var tmp3_set_0_22 = this$0.registryHolders_1;
      tmp3_set_0_22.put_3mhbri_k$($key, $registryHolder_3);
      Unit_getInstance();
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = new _no_name_provided__1_23_956240037($registryHolder_3, this$0, $key);
        break $l$block_2;
      }
      return tmp$ret$3;
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda$ref($tmp0_rcvr, $key, $content, $$changed) {
    return function (p0, p1) {
      SaveableStateProvider$composable$lambda($tmp0_rcvr, $key, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    this.savedStates_1 = savedStates;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp.registryHolders_1 = tmp$ret$1;
    this.parentSaveableStateRegistry_1 = null;
  }
  SaveableStateHolderImpl.prototype._set_parentSaveableStateRegistry__1146693976_alp7m_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.parentSaveableStateRegistry_1 = _set____804775014;
  };
  SaveableStateHolderImpl.prototype._get_parentSaveableStateRegistry__3793103588_8asoik_k$ = function () {
    unreachableDeclarationLog();
    return this.parentSaveableStateRegistry_1;
  };
  SaveableStateHolderImpl.prototype.SaveableStateProvider_2masgx_k$ = function (key, content) {
    unreachableDeclarationLog();
    illegalDecoyCallException('SaveableStateProvider');
  };
  SaveableStateHolderImpl.prototype.removeState_5vvsww_k$ = function (key) {
    unreachableDeclarationLog();
    var registryHolder = this.registryHolders_1.get_1mhr4y_k$(key);
    if (!(registryHolder == null)) {
      registryHolder.shouldSave_1 = false;
    } else {
      var tmp0_this = this;
      {
        var tmp0_minusAssign_0 = tmp0_this.savedStates_1;
        tmp0_minusAssign_0.remove_8hbkc0_k$(key);
        Unit_getInstance();
      }
    }
  };
  SaveableStateHolderImpl.prototype.SaveableStateProvider$composable_n5yi3h_k$ = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress())
      traceEventStart(1898146948, -1, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable (SaveableStateHolder.kt:74)');
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1898146948);
    sourceInformation($composer_0, 'C(SaveableStateProvider$composable)P(1)');
    var $dirty = $changed;
    {
      var tmp0_ReusableContent$composable_0 = $composer_0;
      var tmp1_ReusableContent$composable_0 = 14 & $dirty;
      var $composer_1 = tmp0_ReusableContent$composable_0;
      $composer_1.startReplaceableGroup_rp6air_k$(1346827672);
      sourceInformation($composer_1, 'C(ReusableContent$composable)P(1)');
      $composer_1.startReusableGroup_2z9l41_k$(_get_reuseKey__1372351968(), key);
      {
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_remember$composable_0_4 = $composer_0;
          var $composer_1_5 = tmp0_remember$composable_0_4;
          $composer_1_5.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1_5, 'C(remember$composable)');
          var tmp$ret$4;
          $l$block_3: {
            var tmp1_cache_0_3_7 = $composer_1_5;
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_let_0_4_8 = tmp1_cache_0_3_7.rememberedValue_4dg93v_k$();
              {
              }
              var tmp$ret$2;
              $l$block_1: {
                var tmp;
                if (false ? true : tmp0_let_0_4_8 === Companion_getInstance()._get_Empty__2291795012_x4mxmk_k$()) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                      var tmp0_safe_receiver_9_12 = this.parentSaveableStateRegistry_1;
                      var tmp1_elvis_lhs_8_11 = tmp0_safe_receiver_9_12 == null ? null : tmp0_safe_receiver_9_12.canBeSaved_nnajrq_k$(key);
                      var tmp0_require_0_7_10 = tmp1_elvis_lhs_8_11 == null ? true : tmp1_elvis_lhs_8_11;
                      {
                      }
                      if (!tmp0_require_0_7_10) {
                        var tmp$ret$0;
                        $l$block: {
                          var tmp0_return_3_11_14 = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
                          tmp$ret$0 = tmp0_return_3_11_14;
                          break $l$block;
                        }
                        var message_1_10_13 = tmp$ret$0;
                        throw IllegalArgumentException_init_$Create$(toString(message_1_10_13));
                      }
                    }
                    var tmp0_return_12_15 = new RegistryHolder(this, key);
                    tmp$ret$1 = tmp0_return_12_15;
                    break $l$block_0;
                  }
                  var value_2_2_5_9 = tmp$ret$1;
                  tmp1_cache_0_3_7.updateRememberedValue_l1colo_k$(value_2_2_5_9);
                  tmp = value_2_2_5_9;
                } else {
                  tmp = tmp0_let_0_4_8;
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
          var tmp0_2_6 = tmp$ret$4;
          $composer_1_5.endReplaceableGroup_er37p7_k$();
          tmp$ret$5 = tmp0_2_6;
          break $l$block_4;
        }
        var registryHolder_3 = tmp$ret$5;
        CompositionLocalProvider$composable([_get_LocalSaveableStateRegistry__845043135().provides_3e53yf_k$(registryHolder_3.registry_1)], content, $composer_0, 112 & $dirty);
        DisposableEffect$composable_0(Unit_getInstance(), SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this, key, registryHolder_3), $composer_0, 6);
      }
      $composer_1.endReusableGroup_jxruvs_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(SaveableStateHolderImpl$SaveableStateProvider$composable$lambda$ref(tmp0_rcvr, key, content, $changed));
    }
    if (isTraceInProgress())
      traceEventEnd();
  };
  SaveableStateHolderImpl.$metadata$ = {
    simpleName: 'SaveableStateHolderImpl',
    kind: 'class',
    interfaces: [SaveableStateHolder]
  };
  function rememberSaveableStateHolder$composable$lambda() {
    return function () {
      return SaveableStateHolderImpl_init_$Create$(null, 1, null);
    };
  }
  function _get_LocalSaveableStateRegistry__845043135() {
    init_properties_SaveableStateRegistry_kt_1326311741();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function Entry() {
    unreachableDeclarationLog();
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function SaveableStateRegistry() {
    unreachableDeclarationLog();
  }
  SaveableStateRegistry.$metadata$ = {
    simpleName: 'SaveableStateRegistry',
    kind: 'interface',
    interfaces: []
  };
  function SaveableStateRegistry_0(restoredValues, canBeSaved) {
    init_properties_SaveableStateRegistry_kt_1326311741();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function _get_canBeSaved__2740011255($this) {
    unreachableDeclarationLog();
    return $this.canBeSaved_1;
  }
  function _get_restored__3931337461($this) {
    unreachableDeclarationLog();
    return $this.restored_1;
  }
  function _get_valueProviders__798020090($this) {
    unreachableDeclarationLog();
    return $this.valueProviders_1;
  }
  function SaveableStateRegistryImpl$registerProvider$3(this$0, $key, $valueProvider) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$valueProvider_1 = $valueProvider;
  }
  SaveableStateRegistryImpl$registerProvider$3.prototype.unregister_ibszrp_k$ = function () {
    var list = this.this$0__1.valueProviders_1.remove_8hbkc0_k$(this.$key_1);
    var tmp0_safe_receiver = list;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.remove_8hbkc6_k$(this.$valueProvider_1);
    Unit_getInstance();
    var tmp;
    if (!(list == null)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !list.isEmpty_y1axqb_k$();
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      {
        var tmp0_set_0 = this.this$0__1.valueProviders_1;
        tmp0_set_0.put_3mhbri_k$(this.$key_1, list);
        Unit_getInstance();
      }
    } else {
    }
  };
  SaveableStateRegistryImpl$registerProvider$3.$metadata$ = {
    kind: 'class',
    interfaces: [Entry]
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.canBeSaved_1 = canBeSaved;
    var tmp = this;
    var tmp0_safe_receiver = restored;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toMutableMap(tmp0_safe_receiver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.restored_1 = tmp_0;
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
      break $l$block_0;
    }
    tmp_1.valueProviders_1 = tmp$ret$1;
  }
  SaveableStateRegistryImpl.prototype.canBeSaved_nnajrq_k$ = function (value) {
    return this.canBeSaved_1(value);
  };
  SaveableStateRegistryImpl.prototype.consumeRestored_kptfch_k$ = function (key) {
    var list = this.restored_1.remove_8hbkc0_k$(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !list.isEmpty_y1axqb_k$();
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list._get_size__809037418_ddoh9m_k$() > 1) {
        {
          var tmp0_set_0 = this.restored_1;
          var tmp1_set_0 = list.subList_d153ha_k$(1, list._get_size__809037418_ddoh9m_k$());
          tmp0_set_0.put_3mhbri_k$(key, tmp1_set_0);
          Unit_getInstance();
        }
      }
      tmp = list.get_fkrdnv_k$(0);
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  };
  SaveableStateRegistryImpl.prototype.registerProvider_h94pml_k$ = function (key, valueProvider) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !isBlank(key);
        break $l$block;
      }
      var tmp0_require_0 = tmp$ret$0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Registered key is empty or blank';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp$ret$4;
    $l$block_3: {
      var tmp1_getOrPut_0 = this.valueProviders_1;
      var value_1 = tmp1_getOrPut_0.get_1mhr4y_k$(key);
      var tmp;
      if (value_1 == null) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = ArrayList_init_$Create$_0();
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        var answer_2 = tmp$ret$3;
        tmp1_getOrPut_0.put_3mhbri_k$(key, answer_2);
        Unit_getInstance();
        tmp = answer_2;
      } else {
        tmp = value_1;
      }
      tmp$ret$4 = tmp;
      break $l$block_3;
    }
    tmp$ret$4.add_1j60pz_k$(valueProvider);
    Unit_getInstance();
    return new SaveableStateRegistryImpl$registerProvider$3(this, key, valueProvider);
  };
  SaveableStateRegistryImpl.prototype.performSave_ohn24i_k$ = function () {
    var map = toMutableMap(this.restored_1);
    {
      var tmp0_forEach_0 = this.valueProviders_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_forEach_0._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
        break $l$block;
      }
      var tmp0_iterator_1 = tmp$ret$0;
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = element_2._get_key__857139730_e6bh8y_k$();
            break $l$block_0;
          }
          var key_4 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = element_2._get_value__3683422336_a43j40_k$();
            break $l$block_1;
          }
          var list_5 = tmp$ret$2;
          if (list_5._get_size__809037418_ddoh9m_k$() === 1) {
            var value_6 = list_5.get_fkrdnv_k$(0)();
            if (!(value_6 == null)) {
              {
                var tmp0_check_0_7 = this.canBeSaved_nnajrq_k$(value_6);
                {
                }
                {
                  {
                  }
                  if (!tmp0_check_0_7) {
                    var tmp$ret$3;
                    $l$block_2: {
                      tmp$ret$3 = 'Check failed.';
                      break $l$block_2;
                    }
                    var message_2_1_8 = tmp$ret$3;
                    throw IllegalStateException_init_$Create$(toString(message_2_1_8));
                  }
                }
              }
              {
                var tmp1_set_0_9 = arrayListOf([value_6]);
                map.put_3mhbri_k$(key_4, tmp1_set_0_9);
                Unit_getInstance();
              }
            }
          } else {
            {
              var tmp$ret$7;
              $l$block_6: {
                var tmp2_List_0_11 = list_5._get_size__809037418_ddoh9m_k$();
                var tmp$ret$6;
                $l$block_5: {
                  var list_1_1_12 = ArrayList_init_$Create$_1(tmp2_List_0_11);
                  {
                    {
                    }
                    var inductionVariable = 0;
                    if (inductionVariable < tmp2_List_0_11)
                      do {
                        var index_3_3_14 = inductionVariable;
                        inductionVariable = inductionVariable + 1 | 0;
                        {
                          var tmp$ret$5;
                          $l$block_4: {
                            var value_5_15 = list_5.get_fkrdnv_k$(index_3_3_14)();
                            if (!(value_5_15 == null)) {
                              {
                                var tmp0_check_0_6_16 = this.canBeSaved_nnajrq_k$(value_5_15);
                                {
                                }
                                {
                                  {
                                  }
                                  if (!tmp0_check_0_6_16) {
                                    var tmp$ret$4;
                                    $l$block_3: {
                                      tmp$ret$4 = 'Check failed.';
                                      break $l$block_3;
                                    }
                                    var message_2_1_7_17 = tmp$ret$4;
                                    throw IllegalStateException_init_$Create$(toString(message_2_1_7_17));
                                  }
                                }
                              }
                            }
                            tmp$ret$5 = value_5_15;
                            break $l$block_4;
                          }
                          list_1_1_12.add_1j60pz_k$(tmp$ret$5);
                          Unit_getInstance();
                        }
                      }
                       while (inductionVariable < tmp2_List_0_11);
                  }
                  tmp$ret$6 = list_1_1_12;
                  break $l$block_5;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_6;
              }
              var tmp3_set_0_10 = tmp$ret$7;
              map.put_3mhbri_k$(key_4, tmp3_set_0_10);
              Unit_getInstance();
            }
          }
        }
      }
    }
    return map;
  };
  SaveableStateRegistryImpl.$metadata$ = {
    simpleName: 'SaveableStateRegistryImpl',
    kind: 'class',
    interfaces: [SaveableStateRegistry]
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
    unreachableDeclarationLog();
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
    unreachableDeclarationLog();
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
  _.$crossModule$.listSaver = listSaver;
  _.$crossModule$.rememberSaveable$composable = rememberSaveable$composable;
  _.$crossModule$.rememberSaveableStateHolder$composable = rememberSaveableStateHolder$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_runtime_runtime_saveable.js.map