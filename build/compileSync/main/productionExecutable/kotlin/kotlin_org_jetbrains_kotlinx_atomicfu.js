(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_atomicfu'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_atomicfu'.");
    }
    root.kotlin_org_jetbrains_kotlinx_atomicfu = factory(typeof kotlin_org_jetbrains_kotlinx_atomicfu === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_2;
  //endregion
  'use strict';
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__1828080292, action) {
    unreachableDeclarationLog();
    while (true) {
      action(_this__1828080292._get_value__3683422336_a43j40_k$());
    }
  }
  function loop_0(_this__1828080292, action) {
    unreachableDeclarationLog();
    while (true) {
      action(_this__1828080292._get_value__3683422336_a43j40_k$());
    }
  }
  function _get_array__3098070168($this) {
    unreachableDeclarationLog();
    return $this.array_1;
  }
  function atomicfu$AtomicRefArray$ref(size) {
    unreachableDeclarationLog();
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = size;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
      break $l$block;
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = atomic$ref$1(null);
        break $l$block_0;
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.array_1 = tmp_2;
  }
  atomicfu$AtomicRefArray$ref.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    return this.array_1.length;
  };
  atomicfu$AtomicRefArray$ref.prototype.atomicfu$get = function (index) {
    unreachableDeclarationLog();
    return this.array_1[index];
  };
  atomicfu$AtomicRefArray$ref.$metadata$ = {
    simpleName: 'AtomicArray',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(atomicfu$AtomicRefArray$ref.prototype, 'atomicfu$size', {
    configurable: true,
    get: atomicfu$AtomicRefArray$ref.prototype._get_size__809037418_ddoh9m_k$
  });
  function atomicfu$AtomicRefArray$ofNulls(size) {
    unreachableDeclarationLog();
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function update(_this__1828080292, function_0) {
    unreachableDeclarationLog();
    while (true) {
      var cur = _this__1828080292._get_value__3683422336_a43j40_k$();
      var upd = function_0(cur);
      if (_this__1828080292.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function loop_1(_this__1828080292, action) {
    unreachableDeclarationLog();
    while (true) {
      action(_this__1828080292._get_value__3683422336_a43j40_k$());
    }
  }
  function updateAndGet(_this__1828080292, function_0) {
    unreachableDeclarationLog();
    while (true) {
      var cur = _this__1828080292._get_value__3683422336_a43j40_k$();
      var upd = function_0(cur);
      if (_this__1828080292.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.prototype.invoke_pyr0m4_k$ = function (event) {
    unreachableDeclarationLog();
    this.atomicfu$Trace$append$1(event());
  };
  atomicfu$TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function atomicfu$TraceFormat() {
    unreachableDeclarationLog();
  }
  atomicfu$TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    unreachableDeclarationLog();
    return '' + index + ': ' + toString(event);
  };
  atomicfu$TraceFormat.$metadata$ = {
    simpleName: 'TraceFormat',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this.value_1 = value;
  }
  AtomicRef.prototype._set_value__1325260276_x73o94_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  AtomicRef.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AtomicRef.prototype.getValue_1h979_k$ = function (thisRef, property) {
    unreachableDeclarationLog();
    return this.value_1;
  };
  AtomicRef.prototype.setValue_o0pjfh_k$ = function (thisRef, property, value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicRef.prototype.lazySet_9mpar2_k$ = function (value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this.value_1);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__3683422336_a43j40_k$,
    set: AtomicRef.prototype._set_value__1325260276_x73o94_k$
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.value_1 = value;
  }
  AtomicBoolean.prototype._set_value__1325260276_9lpcvp_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  AtomicBoolean.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AtomicBoolean.prototype.getValue_1h979_k$ = function (thisRef, property) {
    unreachableDeclarationLog();
    return this.value_1;
  };
  AtomicBoolean.prototype.setValue_yjn1ii_k$ = function (thisRef, property, value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicBoolean.prototype.lazySet_lh19sr_k$ = function (value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__3683422336_a43j40_k$,
    set: AtomicBoolean.prototype._set_value__1325260276_9lpcvp_k$
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.value_1 = value;
  }
  AtomicInt.prototype._set_value__1325260276_xwdays_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  AtomicInt.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AtomicInt.prototype.getValue_1h979_k$ = function (thisRef, property) {
    unreachableDeclarationLog();
    return this.value_1;
  };
  AtomicInt.prototype.setValue_3xckvl_k$ = function (thisRef, property, value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicInt.prototype.lazySet_emoqzm_k$ = function (value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.value_1;
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + delta | 0;
    return this.value_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + 1 | 0;
    return tmp0_this.value_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 - 1 | 0;
    return tmp0_this.value_1;
  };
  AtomicInt.prototype.plusAssign_mcu86f_k$ = function (delta) {
    unreachableDeclarationLog();
    this.atomicfu$getAndAdd(delta);
    Unit_getInstance();
  };
  AtomicInt.prototype.minusAssign_8s6p5d_k$ = function (delta) {
    unreachableDeclarationLog();
    this.atomicfu$getAndAdd(-delta | 0);
    Unit_getInstance();
  };
  AtomicInt.prototype.toString = function () {
    return this.value_1.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__3683422336_a43j40_k$,
    set: AtomicInt.prototype._set_value__1325260276_xwdays_k$
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  }
  AtomicLong.prototype._set_value__1325260276_gu2jlf_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.value_1 = _set____804775014;
  };
  AtomicLong.prototype._get_value__3683422336_a43j40_k$ = function () {
    unreachableDeclarationLog();
    return this.value_1;
  };
  AtomicLong.prototype.getValue_1h979_k$ = function (thisRef, property) {
    unreachableDeclarationLog();
    return this.value_1;
  };
  AtomicLong.prototype.setValue_j9ezy0_k$ = function (thisRef, property, value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicLong.prototype.lazySet_42o0gp_k$ = function (value) {
    unreachableDeclarationLog();
    this.value_1 = value;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    unreachableDeclarationLog();
    if (!this.value_1.equals(expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    unreachableDeclarationLog();
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    unreachableDeclarationLog();
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1.inc_28ke_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    unreachableDeclarationLog();
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1.dec_24n6_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    unreachableDeclarationLog();
    var oldValue = this.value_1;
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.plus_u6jwas_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.plus_u6jwas_k$(delta);
    return this.value_1;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.inc_28ke_k$();
    return tmp0_this.value_1;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    unreachableDeclarationLog();
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.dec_24n6_k$();
    return tmp0_this.value_1;
  };
  AtomicLong.prototype.plusAssign_mcpmgy_k$ = function (delta) {
    unreachableDeclarationLog();
    this.atomicfu$getAndAdd$long(delta);
    Unit_getInstance();
  };
  AtomicLong.prototype.minusAssign_rr4kew_k$ = function (delta) {
    unreachableDeclarationLog();
    this.atomicfu$getAndAdd$long(delta.unaryMinus_6uz0qp_k$());
    Unit_getInstance();
  };
  AtomicLong.prototype.toString = function () {
    unreachableDeclarationLog();
    return this.value_1.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__3683422336_a43j40_k$,
    set: AtomicLong.prototype._set_value__1325260276_gu2jlf_k$
  });
  function atomic$long$1(initial) {
    unreachableDeclarationLog();
    return atomic_2(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    unreachableDeclarationLog();
    return atomic(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic$default(initial, trace, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic(initial, trace);
  }
  function atomic$boolean$(initial, trace) {
    unreachableDeclarationLog();
    return atomic_0(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic$default_0(initial, trace, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_0(initial, trace);
  }
  function atomic$int$(initial, trace) {
    unreachableDeclarationLog();
    return atomic_1(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic$default_1(initial, trace, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_1(initial, trace);
  }
  function atomic$long$(initial, trace) {
    unreachableDeclarationLog();
    return atomic_2(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_2(initial, trace) {
    unreachableDeclarationLog();
    return new AtomicLong(initial);
  }
  function atomic$default_2(initial, trace, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_2(initial, trace);
  }
  function _get_traceFormatDefault__1281407782() {
    unreachableDeclarationLog();
    init_properties_Trace_kt_3627577359();
    return traceFormatDefault;
  }
  var traceFormatDefault;
  var properties_initialized_Trace_kt_2587689835;
  function init_properties_Trace_kt_3627577359() {
    unreachableDeclarationLog();
    if (!properties_initialized_Trace_kt_2587689835) {
      properties_initialized_Trace_kt_2587689835 = true;
      traceFormatDefault = new atomicfu$TraceFormat();
    }
  }
  function _get_Lock__773176928() {
    unreachableDeclarationLog();
    init_properties_Synchronized_kt_2395828358();
    return Lock;
  }
  var Lock;
  function ReentrantLock() {
    unreachableDeclarationLog();
  }
  ReentrantLock.prototype.lock_folzoa_k$ = function () {
    unreachableDeclarationLog();
  };
  ReentrantLock.prototype.tryLock_hapj0a_k$ = function () {
    unreachableDeclarationLog();
    return true;
  };
  ReentrantLock.prototype.unlock_85cgkz_k$ = function () {
    unreachableDeclarationLog();
  };
  ReentrantLock.$metadata$ = {
    simpleName: 'ReentrantLock',
    kind: 'class',
    interfaces: []
  };
  function synchronized(lock, block) {
    unreachableDeclarationLog();
    init_properties_Synchronized_kt_2395828358();
    return block();
  }
  var properties_initialized_Synchronized_kt_3791232426;
  function init_properties_Synchronized_kt_2395828358() {
    unreachableDeclarationLog();
    if (!properties_initialized_Synchronized_kt_3791232426) {
      properties_initialized_Synchronized_kt_3791232426 = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.atomicfu$AtomicRefArray$ofNulls = atomicfu$AtomicRefArray$ofNulls;
  _.$crossModule$.atomic$boolean$1 = atomic$boolean$1;
  _.$crossModule$.atomic$long$1 = atomic$long$1;
  _.$crossModule$.atomic$ref$1 = atomic$ref$1;
  _.$crossModule$.atomic$int$1 = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_atomicfu.js.map