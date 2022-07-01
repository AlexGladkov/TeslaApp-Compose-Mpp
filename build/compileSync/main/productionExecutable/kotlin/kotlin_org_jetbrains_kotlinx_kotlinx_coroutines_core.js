(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_atomicfu.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_atomicfu === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'. Its dependency 'kotlin_org_jetbrains_kotlinx_atomicfu' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_atomicfu' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var plus = kotlin_kotlin.$crossModule$.plus_2;
  var get = kotlin_kotlin.$crossModule$.get_1;
  var fold = kotlin_kotlin.$crossModule$.fold;
  var minusKey = kotlin_kotlin.$crossModule$.minusKey_1;
  var Continuation = kotlin_kotlin.$crossModule$.Continuation;
  var unreachableDeclarationLog = kotlin_kotlin.$crossModule$.unreachableDeclarationLog;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$crossModule$.EmptyCoroutineContext_getInstance;
  var Key_getInstance = kotlin_kotlin.$crossModule$.Key_getInstance;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var createCoroutineUnintercepted = kotlin_kotlin.$crossModule$.createCoroutineUnintercepted_1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$int$1;
  var intercepted = kotlin_kotlin.$crossModule$.intercepted;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var toString = kotlin_kotlin.$crossModule$.toString_2;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$ref$1;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$boolean$1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$crossModule$.CancellationException_init_$Create$;
  var Result__exceptionOrNull_impl_1523290257 = kotlin_kotlin.$crossModule$.Result__exceptionOrNull_impl_1523290257;
  var _Result___get_value__impl__3597185688 = kotlin_kotlin.$crossModule$._Result___get_value__impl__3597185688;
  var Companion_getInstance = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var _Result___init__impl__2241242780 = kotlin_kotlin.$crossModule$._Result___init__impl__2241242780;
  var createFailure = kotlin_kotlin.$crossModule$.createFailure;
  var AbstractCoroutineContextKey = kotlin_kotlin.$crossModule$.AbstractCoroutineContextKey;
  var AbstractCoroutineContextElement = kotlin_kotlin.$crossModule$.AbstractCoroutineContextElement;
  var get_0 = kotlin_kotlin.$crossModule$.get;
  var minusKey_0 = kotlin_kotlin.$crossModule$.minusKey;
  var ContinuationInterceptor = kotlin_kotlin.$crossModule$.ContinuationInterceptor;
  var Key = kotlin_kotlin.$crossModule$.Key;
  var Element = kotlin_kotlin.$crossModule$.Element;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Create$_1;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var startCoroutine = kotlin_kotlin.$crossModule$.startCoroutine;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var startCoroutine_0 = kotlin_kotlin.$crossModule$.startCoroutine_1;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Companion_getInstance_0 = kotlin_kotlin.$crossModule$.Companion_getInstance;
  var RuntimeException = kotlin_kotlin.$crossModule$.RuntimeException;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Init$;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var Error_0 = kotlin_kotlin.$crossModule$.Error;
  var Error_init_$Init$ = kotlin_kotlin.$crossModule$.Error_init_$Init$;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.CancellationException_init_$Create$_1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$_1;
  var anyToString = kotlin_kotlin.$crossModule$.anyToString;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var CancellationException = kotlin_kotlin.$crossModule$.CancellationException;
  var ArrayList = kotlin_kotlin.$crossModule$.ArrayList;
  var SequenceScope = kotlin_kotlin.$crossModule$.SequenceScope;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_2;
  var sequence = kotlin_kotlin.$crossModule$.sequence;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var UnsupportedOperationException = kotlin_kotlin.$crossModule$.UnsupportedOperationException;
  var CancellationException_init_$Init$ = kotlin_kotlin.$crossModule$.CancellationException_init_$Init$_1;
  var returnIfSuspended = kotlin_kotlin.$crossModule$.returnIfSuspended;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$_1;
  var isSuspendFunction = kotlin_kotlin.$crossModule$.isSuspendFunction;
  var addSuppressed = kotlin_kotlin.$crossModule$.addSuppressed;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var fill = kotlin_kotlin.$crossModule$.fill;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var fill$default = kotlin_kotlin.$crossModule$.fill$default_2;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var NoSuchElementException = kotlin_kotlin.$crossModule$.NoSuchElementException;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$crossModule$.NoSuchElementException_init_$Init$;
  var IllegalStateException = kotlin_kotlin.$crossModule$.IllegalStateException;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Init$;
  var Unit = kotlin_kotlin.$crossModule$.Unit;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var arrayIterator = kotlin_kotlin.$crossModule$.arrayIterator;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_1;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var listOf = kotlin_kotlin.$crossModule$.listOf;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$crossModule$.NoSuchElementException_init_$Create$_1;
  var arrayCopy = kotlin_kotlin.$crossModule$.arrayCopy;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$long$1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomicfu$AtomicRefArray$ofNulls;
  var toLongOrNull = kotlin_kotlin.$crossModule$.toLongOrNull;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$crossModule$.createCoroutineUnintercepted;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$crossModule$.CancellationException_init_$Init$_2;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn_3;
  var HashSet_init_$Create$ = kotlin_kotlin.$crossModule$.HashSet_init_$Create$;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$;
  //endregion
  'use strict';
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_4b7aim_k$(cause) : $handler(cause);
  }
  function cancel() {
    unreachableDeclarationLog();
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    unreachableDeclarationLog();
    return other;
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  $joinAllCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $joinAllCOROUTINE$0.prototype.constructor = $joinAllCOROUTINE$0;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  DispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  DispatchedCoroutine.prototype.constructor = DispatchedCoroutine;
  $awaitCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$1.prototype.constructor = $awaitCOROUTINE$1;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.tryResume_10oxem_k$(value, idempotent) : $handler(value, idempotent);
  }
  function cancel$default_1(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__2671100649.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__2671100649.prototype.constructor = _no_name_provided__2671100649;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  function delay(time, $cont) {
    unreachableDeclarationLog();
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable_2_2);
      }
      tmp$ret$0 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return _get_DefaultDelay__1069114793().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobSupport$_get_children_$slambda_1222912628.prototype = Object.create(CoroutineImpl.prototype);
  JobSupport$_get_children_$slambda_1222912628.prototype.constructor = JobSupport$_get_children_$slambda_1222912628;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  SelectJoinOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectJoinOnCompletion.prototype.constructor = SelectJoinOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  SelectAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectAwaitOnCompletion.prototype.constructor = SelectAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  DisposeOnCompletion.prototype = Object.create(JobNode.prototype);
  DisposeOnCompletion.prototype.constructor = DisposeOnCompletion;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  TimeoutCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  TimeoutCoroutine.prototype.constructor = TimeoutCoroutine;
  $withTimeoutOrNullCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $withTimeoutOrNullCOROUTINE$2.prototype.constructor = $withTimeoutOrNullCOROUTINE$2;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  YieldContext.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  YieldContext.prototype.constructor = YieldContext;
  AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  AbstractAtomicDesc.prototype.constructor = AbstractAtomicDesc;
  RemoveFirstDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  RemoveFirstDesc.prototype.constructor = RemoveFirstDesc;
  TryPollDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  TryPollDesc.prototype.constructor = TryPollDesc;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  function next0($cont) {
    unreachableDeclarationLog();
    var tmp = new $next0COROUTINE$4(this, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveElement.prototype = Object.create(Receive.prototype);
  ReceiveElement.prototype.constructor = ReceiveElement;
  ReceiveElementWithUndeliveredHandler.prototype = Object.create(ReceiveElement.prototype);
  ReceiveElementWithUndeliveredHandler.prototype.constructor = ReceiveElementWithUndeliveredHandler;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  ReceiveSelect.prototype = Object.create(Receive.prototype);
  ReceiveSelect.prototype.constructor = ReceiveSelect;
  function close$default(cause, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.close_9zy44b_k$(cause) : $handler(cause);
  }
  function offer(element) {
    unreachableDeclarationLog();
    var result = this.trySend_3hclq4_k$(element);
    if (_ChannelResult___get_isSuccess__impl__1474238853(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_4223746804(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function cancel$default_2(cause, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_4b7aim_k$(cause) : $handler(cause);
  }
  function cancel_0() {
    unreachableDeclarationLog();
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_3(cause, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  function poll() {
    unreachableDeclarationLog();
    var result = this.tryReceive_5r5v2p_k$();
    if (_ChannelResult___get_isSuccess__impl__1474238853(result))
      return ChannelResult__getOrThrow_impl_1473084064(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_4223746804(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($cont) {
    unreachableDeclarationLog();
    var tmp = new $receiveOrNullCOROUTINE$3(this, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function _get_onReceiveOrNull__3203289763() {
    unreachableDeclarationLog();
    return new ReceiveChannel$onReceiveOrNull$1(this);
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  AddLastDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  AddLastDesc.prototype.constructor = AddLastDesc;
  SendBufferedDesc.prototype = Object.create(AddLastDesc.prototype);
  SendBufferedDesc.prototype.constructor = SendBufferedDesc;
  TryOfferDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  TryOfferDesc.prototype.constructor = TryOfferDesc;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendSelect.prototype = Object.create(Send.prototype);
  SendSelect.prototype.constructor = SendSelect;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  SendElement.prototype = Object.create(Send.prototype);
  SendElement.prototype.constructor = SendElement;
  SendElementWithUndeliveredHandler.prototype = Object.create(SendElement.prototype);
  SendElementWithUndeliveredHandler.prototype.constructor = SendElementWithUndeliveredHandler;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype = Object.create(CoroutineImpl.prototype);
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.constructor = ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159;
  $receiveOrNullCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $receiveOrNullCOROUTINE$3.prototype.constructor = $receiveOrNullCOROUTINE$3;
  $next0COROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $next0COROUTINE$4.prototype.constructor = $next0COROUTINE$4;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ChannelCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ChannelCoroutine.prototype.constructor = ChannelCoroutine;
  $consumeEachCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $consumeEachCOROUTINE$5.prototype.constructor = $consumeEachCOROUTINE$5;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  ProducerCoroutine.prototype = Object.create(ChannelCoroutine.prototype);
  ProducerCoroutine.prototype.constructor = ProducerCoroutine;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  SafeFlow.prototype = Object.create(AbstractFlow.prototype);
  SafeFlow.prototype.constructor = SafeFlow;
  $emitAllImplCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $emitAllImplCOROUTINE$6.prototype.constructor = $emitAllImplCOROUTINE$6;
  $collectCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$7.prototype.constructor = $collectCOROUTINE$7;
  $collectCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$8.prototype.constructor = $collectCOROUTINE$8;
  function fuse$default(context, capacity, onBufferOverflow, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$();
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return $handler == null ? this.fuse_pocnsz_k$(context, capacity, onBufferOverflow) : $handler(context, capacity, onBufferOverflow);
  }
  SharedFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  SharedFlowImpl.prototype.constructor = SharedFlowImpl;
  SharedFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  SharedFlowSlot.prototype.constructor = SharedFlowSlot;
  $collectCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$9.prototype.constructor = $collectCOROUTINE$9;
  StateFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  StateFlowImpl.prototype.constructor = StateFlowImpl;
  StateFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  StateFlowSlot.prototype.constructor = StateFlowSlot;
  SubscriptionCountStateFlow.prototype = Object.create(SharedFlowImpl.prototype);
  SubscriptionCountStateFlow.prototype.constructor = SubscriptionCountStateFlow;
  ChannelFlowOperator.prototype = Object.create(ChannelFlow.prototype);
  ChannelFlowOperator.prototype.constructor = ChannelFlowOperator;
  ChannelFlowOperatorImpl.prototype = Object.create(ChannelFlowOperator.prototype);
  ChannelFlowOperatorImpl.prototype.constructor = ChannelFlowOperatorImpl;
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.constructor = ChannelFlowOperator$collectWithContextUndispatched$slambda;
  $collectCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$10.prototype.constructor = $collectCOROUTINE$10;
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.constructor = ChannelFlow$_get_collectToFun_$slambda_3137526458;
  ChannelFlow$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ChannelFlow$collect$slambda.prototype.constructor = ChannelFlow$collect$slambda;
  UndispatchedContextCollector$emitRef$slambda.prototype = Object.create(CoroutineImpl.prototype);
  UndispatchedContextCollector$emitRef$slambda.prototype.constructor = UndispatchedContextCollector$emitRef$slambda;
  $emit_3_9COROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $emit_3_9COROUTINE$13.prototype.constructor = $emit_3_9COROUTINE$13;
  $collect_2COROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $collect_2COROUTINE$12.prototype.constructor = $collect_2COROUTINE$12;
  $emitCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $emitCOROUTINE$14.prototype.constructor = $emitCOROUTINE$14;
  $collectWhileCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $collectWhileCOROUTINE$11.prototype.constructor = $collectWhileCOROUTINE$11;
  $onSubscriptionCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $onSubscriptionCOROUTINE$15.prototype.constructor = $onSubscriptionCOROUTINE$15;
  $emit_3COROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $emit_3COROUTINE$17.prototype.constructor = $emit_3COROUTINE$17;
  $firstCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $firstCOROUTINE$16.prototype.constructor = $firstCOROUTINE$16;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  LimitedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  LimitedDispatcher.prototype.constructor = LimitedDispatcher;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  function tryLock$default(owner, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    return $handler == null ? this.tryLock_jl1wg7_k$(owner) : $handler(owner);
  }
  function lock$default(owner, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    return $handler == null ? this.lock_25dizd_k$(owner, $cont) : $handler(owner, $cont);
  }
  function unlock$default(owner, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      owner = null;
    return $handler == null ? this.unlock_uksyr8_k$(owner) : $handler(owner);
  }
  PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  PrepareOp.prototype.constructor = PrepareOp;
  TryLockDesc.prototype = Object.create(AtomicDesc.prototype);
  TryLockDesc.prototype.constructor = TryLockDesc;
  LockedQueue.prototype = Object.create(LinkedListHead.prototype);
  LockedQueue.prototype.constructor = LockedQueue;
  LockWaiter.prototype = Object.create(LinkedListNode.prototype);
  LockWaiter.prototype.constructor = LockWaiter;
  LockCont.prototype = Object.create(LockWaiter.prototype);
  LockCont.prototype.constructor = LockCont;
  LockSelect.prototype = Object.create(LockWaiter.prototype);
  LockSelect.prototype.constructor = LockSelect;
  UnlockOp.prototype = Object.create(AtomicOp.prototype);
  UnlockOp.prototype.constructor = UnlockOp;
  $withLockCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $withLockCOROUTINE$18.prototype.constructor = $withLockCOROUTINE$18;
  UndispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  UndispatchedCoroutine.prototype.constructor = UndispatchedCoroutine;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  AbortFlowException.prototype = Object.create(CancellationException.prototype);
  AbortFlowException.prototype.constructor = AbortFlowException;
  PrepareOp_0.prototype = Object.create(OpDescriptor.prototype);
  PrepareOp_0.prototype.constructor = PrepareOp_0;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.initParentJob_4c2lht_k$(parentContext.get_1pi7hg_k$(Key_getInstance_2()));
    this.context_1 = parentContext.plus_rgw9wi_k$(this);
  }
  AbstractCoroutine.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  AbstractCoroutine.prototype._get_coroutineContext__2519429620_td3xn0_k$ = function () {
    return this.context_1;
  };
  AbstractCoroutine.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return JobSupport.prototype._get_isActive__4035225851_4an5s5_k$.call(this);
  };
  AbstractCoroutine.prototype.onCompleted_wmtzyo_k$ = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_oqqex5_k$ = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_a64063_k$ = function () {
    return _get_classSimpleName__3937513404(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_39c1g8_k$ = function (state) {
    if (state instanceof CompletedExceptionally)
      this.onCancelled_oqqex5_k$(state._get_cause__3139734664_j3sn7c_k$(), state._get_handled__2128079701_z704t1_k$());
    else {
      {
        this.onCompleted_wmtzyo_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
      }
    }
  };
  AbstractCoroutine.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState$default(result, null, 1, null));
    if (state === _get_COMPLETING_WAITING_CHILDREN__621847959())
      return Unit_getInstance();
    this.afterResume_ufx9w9_k$(state);
  };
  AbstractCoroutine.prototype.afterResume_ufx9w9_k$ = function (state) {
    return this.afterCompletion_2ogq6g_k$(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_o179kb_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  AbstractCoroutine.prototype.nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = _get_coroutineName__3134708654(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.nameString_cd9e9w_k$.call(this);
  };
  AbstractCoroutine.prototype.start_1ln6k9_k$ = function (start, receiver, block) {
    start.invoke_wxhu2x_k$(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function InternalCoroutinesApi() {
    unreachableDeclarationLog();
  }
  InternalCoroutinesApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  InternalCoroutinesApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  InternalCoroutinesApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  InternalCoroutinesApi.$metadata$ = {
    simpleName: 'InternalCoroutinesApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function FlowPreview() {
    unreachableDeclarationLog();
  }
  FlowPreview.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof FlowPreview))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlowPreview ? other : THROW_CCE();
    return true;
  };
  FlowPreview.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  FlowPreview.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@kotlinx.coroutines.FlowPreview()';
  };
  FlowPreview.$metadata$ = {
    simpleName: 'FlowPreview',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalCoroutinesApi() {
    unreachableDeclarationLog();
  }
  ExperimentalCoroutinesApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalCoroutinesApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  ExperimentalCoroutinesApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  ExperimentalCoroutinesApi.$metadata$ = {
    simpleName: 'ExperimentalCoroutinesApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DelicateCoroutinesApi() {
    unreachableDeclarationLog();
  }
  DelicateCoroutinesApi.prototype.equals = function (other) {
    unreachableDeclarationLog();
    if (!(other instanceof DelicateCoroutinesApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DelicateCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  DelicateCoroutinesApi.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return 0;
  };
  DelicateCoroutinesApi.prototype.toString = function () {
    unreachableDeclarationLog();
    return '@kotlinx.coroutines.DelicateCoroutinesApi()';
  };
  DelicateCoroutinesApi.$metadata$ = {
    simpleName: 'DelicateCoroutinesApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function joinAll(_this__1828080292, $cont) {
    unreachableDeclarationLog();
    var tmp = new $joinAllCOROUTINE$0(_this__1828080292, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $joinAllCOROUTINE$0(_this__1828080292, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $joinAllCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            this.tmp0_iterator_10__1 = this._this__1828080292__1.iterator_jk1svi_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator_10__1.hasNext_bitz1p_k$()) {
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            }

            this.element_21__1 = this.tmp0_iterator_10__1.next_20eer_k$();
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this.element_21__1.join_kbq7u1_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
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
  $joinAllCOROUTINE$0.$metadata$ = {
    simpleName: '$joinAllCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function launch(_this__1828080292, context, start, block) {
    var newContext = newCoroutineContext(_this__1828080292, context);
    var coroutine = start._get_isLazy__54527757_wgpvx_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_1ln6k9_k$(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__1828080292, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__1828080292, context, start, block);
  }
  function withContext(context, block, $cont) {
    {
    }
    var tmp$ret$0;
    $l$block_1: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var oldContext_2 = tmp0__anonymous__1_2495602521._get_context__1558698818_ps0bpe_k$();
      var newContext_3 = oldContext_2.plus_rgw9wi_k$(context);
      ensureActive(newContext_3);
      if (newContext_3 === oldContext_2) {
        var coroutine_4 = new ScopeCoroutine(newContext_3, tmp0__anonymous__1_2495602521);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_4, coroutine_4, block);
        break $l$block_1;
      }
      if (equals(newContext_3.get_1pi7hg_k$(Key_getInstance()), oldContext_2.get_1pi7hg_k$(Key_getInstance()))) {
        var coroutine_5 = new UndispatchedCoroutine(newContext_3, tmp0__anonymous__1_2495602521);
        var tmp$ret$1;
        {
          tmp$ret$0 = startUndispatchedOrReturn(coroutine_5, coroutine_5, block);
          break $l$block_1;
        }
      }
      var coroutine_6 = new DispatchedCoroutine(newContext_3, tmp0__anonymous__1_2495602521);
      startCoroutineCancellable$default(block, coroutine_6, coroutine_6, null, 4, null);
      tmp$ret$0 = coroutine_6.getResult_clfhg3_k$();
      break $l$block_1;
    }
    return tmp$ret$0;
  }
  function async(_this__1828080292, context, start, block) {
    unreachableDeclarationLog();
    var newContext = newCoroutineContext(_this__1828080292, context);
    var coroutine = start._get_isLazy__54527757_wgpvx_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_1ln6k9_k$(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__1828080292, context, start, block, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__1828080292, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.handleJobException_oc4gxk_k$ = function (exception) {
    handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = {
    simpleName: 'StandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function _get_continuation__2061681140($this) {
    unreachableDeclarationLog();
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {
    simpleName: 'LazyStandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function _get__decision__1855699062($this) {
    unreachableDeclarationLog();
    return $this._decision_1;
  }
  function trySuspend($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_1 = atomic$int$1(0);
  }
  DispatchedCoroutine.prototype.afterCompletion_2ogq6g_k$ = function (state) {
    this.afterResume_ufx9w9_k$(state);
  };
  DispatchedCoroutine.prototype.afterResume_ufx9w9_k$ = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    var tmp = intercepted(this._get_uCont__3627170666_b1l76e_k$());
    var tmp_0 = recoverResult(state, this._get_uCont__3627170666_b1l76e_k$());
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  DispatchedCoroutine.prototype.getResult_clfhg3_k$ = function () {
    if (trySuspend(this))
      return _get_COROUTINE_SUSPENDED__2870145053();
    var state = unboxState(this._get_state__3614753120_b8zcm8_k$());
    if (state instanceof CompletedExceptionally)
      throw state._get_cause__3139734664_j3sn7c_k$();
    else {
    }
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedCoroutine.$metadata$ = {
    simpleName: 'DispatchedCoroutine',
    kind: 'class',
    interfaces: []
  };
  function $awaitCOROUTINE$1(_this__1828080292, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $awaitCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$1.$metadata$ = {
    simpleName: '$awaitCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function DeferredCoroutine(parentContext, active) {
    unreachableDeclarationLog();
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.getCompleted_nczk2z_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  DeferredCoroutine.prototype.await_xhs9og_k$ = function ($cont) {
    unreachableDeclarationLog();
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  DeferredCoroutine.prototype._get_onAwait__3119375162_jfx0p2_k$ = function () {
    unreachableDeclarationLog();
    return this;
  };
  DeferredCoroutine.prototype.registerSelectClause1_8z4167_k$ = function (select, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause1Internal_amjpx5_k$(select, block);
  };
  DeferredCoroutine.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause1_8z4167_k$(select, block);
  };
  DeferredCoroutine.$metadata$ = {
    simpleName: 'DeferredCoroutine',
    kind: 'class',
    interfaces: [Deferred, SelectClause1]
  };
  function _get_continuation__2061681140_0($this) {
    unreachableDeclarationLog();
    return $this.continuation_1;
  }
  function LazyDeferredCoroutine(parentContext, block) {
    unreachableDeclarationLog();
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.onStart_qth026_k$ = function () {
    unreachableDeclarationLog();
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  LazyDeferredCoroutine.$metadata$ = {
    simpleName: 'LazyDeferredCoroutine',
    kind: 'class',
    interfaces: []
  };
  function _get_UNDECIDED__1268814222() {
    unreachableDeclarationLog();
    return UNDECIDED;
  }
  var UNDECIDED;
  function _get_SUSPENDED__3501394934() {
    unreachableDeclarationLog();
    return SUSPENDED;
  }
  var SUSPENDED;
  function _get_RESUMED__2572863546() {
    unreachableDeclarationLog();
    return RESUMED;
  }
  var RESUMED;
  function suspendCancellableCoroutine(block, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var cancellable_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_2495602521), _get_MODE_CANCELLABLE__581347323());
      cancellable_2.initCancellability_sh6jkn_k$();
      block(cancellable_2);
      tmp$ret$0 = cancellable_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CancellableContinuation() {
    unreachableDeclarationLog();
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function disposeOnCancellation(_this__1828080292, handle) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new DisposeOnCancel(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return _this__1828080292.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function _get_handle__2978141667($this) {
    unreachableDeclarationLog();
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  DisposeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  DisposeOnCancel.$metadata$ = {
    simpleName: 'DisposeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function suspendCancellableCoroutineReusable(block, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var cancellable_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_2495602521));
      block(cancellable_2);
      tmp$ret$0 = cancellable_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function removeOnCancellation(_this__1828080292, node) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new RemoveOnCancel(node);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return _this__1828080292.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, _get_MODE_CANCELLABLE__581347323());
    } else {
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_safe_receiver.resetStateReusable_a3kq5v_k$();
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, _get_MODE_CANCELLABLE_REUSABLE__29516823());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function _get_node__804577417($this) {
    unreachableDeclarationLog();
    return $this.node_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_1 = node;
  }
  RemoveOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.node_1.remove_fgfybg_k$();
    Unit_getInstance();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.node_1 + ']';
  };
  RemoveOnCancel.$metadata$ = {
    simpleName: 'RemoveOnCancel',
    kind: 'class',
    interfaces: []
  };
  function _get_RESUME_TOKEN__2573897444() {
    init_properties_CancellableContinuationImpl_kt_3124303409();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__1855699062_0($this) {
    unreachableDeclarationLog();
    return $this._decision_1;
  }
  function _get__state__4101327289($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function _set_parentHandle__4275866661($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.parentHandle_1 = _set____804775014;
  }
  function _get_parentHandle__921052185($this) {
    unreachableDeclarationLog();
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__690380284($this) {
    var tmp0_subject = $this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (_get_isReusableMode__1222974867($this._get_resumeMode__2312873755_ws355x_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    unreachableDeclarationLog();
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException($this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume_0($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ChildContinuation($this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var handle = parent.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qdtbew_k$();
    $this.cancel_as6ug7_k$(cancellationCause);
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error_0 = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode__2954248492(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1_4003154330, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelledContinuation) {
              if (tmp1__anonymous__1_4003154330.makeResumed_vjvawn_k$()) {
                var tmp1_safe_receiver_4 = onCancellation;
                if (tmp1_safe_receiver_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = $this.callOnCancellation_adp92k_k$(tmp1_safe_receiver_4, tmp1__anonymous__1_4003154330._get_cause__3139734664_j3sn7c_k$());
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
                return Unit_getInstance();
              }
            } else {
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
      Unit_getInstance();
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1_4003154330, proposedUpdate, $this._get_resumeMode__2312873755_ws355x_k$(), onCancellation, idempotent);
            if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            return _get_RESUME_TOKEN__2573897444();
          } else {
            if (tmp0_subject_2 instanceof CompletedContinuation) {
              var tmp;
              if (!(idempotent == null) ? tmp1__anonymous__1_4003154330.idempotentResume_1 === idempotent : false) {
                {
                }
                tmp = _get_RESUME_TOKEN__2573897444();
              } else {
                tmp = null;
              }
              return tmp;
            } else {
              return null;
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error_0 = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild_qdtbew_k$();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    {
    }
    this.context_1 = this.delegate_1._get_context__1558698818_ps0bpe_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  CancellableContinuationImpl.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    return this.delegate_1;
  };
  CancellableContinuationImpl.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  CancellableContinuationImpl.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this._state_1._get_value__3683422336_a43j40_k$();
  };
  CancellableContinuationImpl.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__3284240752_gprdlc_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype._get_isCancelled__1419818794_nhbn6y_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this._get_isCompleted__3284240752_gprdlc_k$()) {
      handle.dispose_3n44we_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.resetStateReusable_a3kq5v_k$ = function () {
    {
    }
    {
    }
    var state = this._state_1._get_value__3683422336_a43j40_k$();
    {
    }
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    } else {
    }
    this._decision_1._set_value__1325260276_xwdays_k$(0);
    this._state_1._set_value__1325260276_x73o94_k$(Active_getInstance());
    return true;
  };
  CancellableContinuationImpl.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  CancellableContinuationImpl.prototype.getStackTraceElement_um8m53_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  CancellableContinuationImpl.prototype.takeState_olvzuy_k$ = function () {
    return this._get_state__3614753120_b8zcm8_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop_0 = this._state_1;
    while (true) {
      {
        var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
        var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject_2 instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject_2 instanceof CompletedContinuation) {
              {
                var tmp0_check_0_3 = !tmp1__anonymous__1_4003154330._get_cancelled__581563168_9m8x0g_k$();
                {
                }
                if (!tmp0_check_0_3) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Must be called at most once';
                    break $l$block;
                  }
                  var message_1_4 = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message_1_4));
                }
              }
              var update_5 = tmp1__anonymous__1_4003154330.copy$default_x1yew9_k$(null, null, null, null, cause, 15, null);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_5)) {
                tmp1__anonymous__1_4003154330.invokeHandlers_2wd6qe_k$(this, cause);
                return Unit_getInstance();
              }
            } else {
              {
                if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, CompletedContinuation_init_$Create$(tmp1__anonymous__1_4003154330, null, null, null, cause, 14, null))) {
                  return Unit_getInstance();
                } else {
                }
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel_as6ug7_k$ = function (cause) {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(!(tmp1__anonymous__1_4003154330 == null) ? isInterface(tmp1__anonymous__1_4003154330, NotCompleted) : false))
            return false;
          else {
          }
          var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1_4003154330 instanceof CancelHandler);
          if (!this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_2)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver_3 = tmp1__anonymous__1_4003154330 instanceof CancelHandler ? tmp1__anonymous__1_4003154330 : null;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              tmp$ret$1 = this.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver_3, cause);
              break $l$block_0;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
          detachChildIfNonResuable(this);
          dispatchResume(this, this._get_resumeMode__2312873755_ws355x_k$());
          return true;
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  CancellableContinuationImpl.prototype.getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.parentHandle_1 == null) {
        installParentHandle(this);
        Unit_getInstance();
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return _get_COROUTINE_SUSPENDED__2870145053();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this._get_state__3614753120_b8zcm8_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._get_cause__3139734664_j3sn7c_k$(), this);
    else {
    }
    if (_get_isCancellableMode__2954248492(this._get_resumeMode__2312873755_ws355x_k$())) {
      var job = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__4035225851_4an5s5_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_gdkv2w_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__2312873755_ws355x_k$();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this._get_resumeMode__2312873755_ws355x_k$(), onCancellation);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Active) {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
            else {
              if (tmp0_subject_2 instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__1_4003154330.makeHandled_ws9oq6_k$())
                  multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
                if (tmp1__anonymous__1_4003154330 instanceof CancelledContinuation) {
                  var tmp1_safe_receiver_3 = tmp1__anonymous__1_4003154330 instanceof CompletedExceptionally ? tmp1__anonymous__1_4003154330 : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._get_cause__3139734664_j3sn7c_k$());
                } else {
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject_2 instanceof CompletedContinuation) {
                  if (!(tmp1__anonymous__1_4003154330.cancelHandler_1 == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  else {
                  }
                  if (tmp1__anonymous__1_4003154330._get_cancelled__581563168_9m8x0g_k$()) {
                    callCancelHandler(this, handler, tmp1__anonymous__1_4003154330.cancelCause_1);
                    return Unit_getInstance();
                  }
                  var update_4 = tmp1__anonymous__1_4003154330.copy$default_x1yew9_k$(null, cancelHandler, null, null, null, 29, null);
                  if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_4))
                    return Unit_getInstance();
                } else {
                  {
                    if (cancelHandler instanceof BeforeResumeCancelHandler)
                      return Unit_getInstance();
                    else {
                    }
                    var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1_4003154330, cancelHandler, null, null, null, 28, null);
                    if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_5))
                      return Unit_getInstance();
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.completeResume_fu4ex_k$ = function (token) {
    {
    }
    dispatchResume(this, this._get_resumeMode__2312873755_ws355x_k$());
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_re4yxz_k$ = function (_this__1828080292, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_dispatcher__3474623172_dketks_k$()) === _this__1828080292) {
      tmp_0 = _get_MODE_UNDISPATCHED__3658117635();
    } else {
      {
        tmp_0 = this._get_resumeMode__2312873755_ws355x_k$();
      }
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_xuy3rd_k$ = function (_this__1828080292, exception) {
    unreachableDeclarationLog();
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
    var tmp_1;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_dispatcher__3474623172_dketks_k$()) === _this__1828080292) {
      tmp_1 = _get_MODE_UNDISPATCHED__3658117635();
    } else {
      {
        tmp_1 = this._get_resumeMode__2312873755_ws355x_k$();
      }
    }
    var tmp_2 = tmp_1;
    resumeImpl$default(this, tmp_0, tmp_2, null, 8, null);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_bnge6_k$.call(this, state);
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
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__690380284(this) + '}@' + _get_hexAddress__2831015762(this);
  };
  CancellableContinuationImpl.prototype.nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function _get_UNDECIDED__1268814222_0() {
    unreachableDeclarationLog();
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
    unreachableDeclarationLog();
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  CompletedContinuation.prototype._get_result__3382885006_f31376_k$ = function () {
    unreachableDeclarationLog();
    return this.result_1;
  };
  CompletedContinuation.prototype._get_cancelHandler__2891103073_n7tokf_k$ = function () {
    unreachableDeclarationLog();
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype._get_onCancellation__3868581321_71uxiv_k$ = function () {
    unreachableDeclarationLog();
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype._get_idempotentResume__2151918277_zfwz7f_k$ = function () {
    unreachableDeclarationLog();
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype._get_cancelCause__3654494562_albjxa_k$ = function () {
    unreachableDeclarationLog();
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype._get_cancelled__581563168_9m8x0g_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  CompletedContinuation.prototype.invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.result_1;
  };
  CompletedContinuation.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype.component3_7eebsa_k$ = function () {
    unreachableDeclarationLog();
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype.component4_7eebs9_k$ = function () {
    unreachableDeclarationLog();
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype.component5_7eebs8_k$ = function () {
    unreachableDeclarationLog();
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype.copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.copy$default_x1yew9_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.cancelHandler_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.onCancellation_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.idempotentResume_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.cancelCause_1;
    return this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function _get_SUSPENDED__3501394934_0() {
    unreachableDeclarationLog();
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function _get_RESUMED__2572863546_0() {
    unreachableDeclarationLog();
    return RESUMED_0;
  }
  var RESUMED_0;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function _get_handler__2128080135($this) {
    unreachableDeclarationLog();
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + _get_classSimpleName__3937513404(this.handler_1) + '@' + _get_hexAddress__2831015762(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_CancellableContinuationImpl_kt_2249227405;
  function init_properties_CancellableContinuationImpl_kt_3124303409() {
    if (!properties_initialized_CancellableContinuationImpl_kt_2249227405) {
      properties_initialized_CancellableContinuationImpl_kt_2249227405 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableJob() {
    unreachableDeclarationLog();
  }
  CompletableJob.$metadata$ = {
    simpleName: 'CompletableJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function _get__handled__1574420846($this) {
    unreachableDeclarationLog();
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype._get_cause__3139734664_j3sn7c_k$ = function () {
    return this.cause_1;
  };
  CompletedExceptionally.prototype._get_handled__2128079701_z704t1_k$ = function () {
    return this._handled_1._get_value__3683422336_a43j40_k$();
  };
  CompletedExceptionally.prototype.makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '[' + this.cause_1 + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function _get__resumed__1236577843($this) {
    unreachableDeclarationLog();
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this__1828080292, caller) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl_1523290257(_this__1828080292);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl__3597185688(_this__1828080292);
          var tmp0__anonymous__2_2495602522 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__2_2495602522;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp_1 = recoverStackTrace(exception_1, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__1828080292, onCancellation) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl_1523290257(_this__1828080292);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl__3597185688(_this__1828080292);
          var tmp0__anonymous__2_2495602522 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2_2495602522, onCancellation) : tmp0__anonymous__2_2495602522;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__1828080292, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__1828080292, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  CompletedWithCancellation.prototype._get_result__3382885006_f31376_k$ = function () {
    unreachableDeclarationLog();
    return this.result_1;
  };
  CompletedWithCancellation.prototype._get_onCancellation__3868581321_71uxiv_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.component1_7eebsc_k$ = function () {
    unreachableDeclarationLog();
    return this.result_1;
  };
  CompletedWithCancellation.prototype.component2_7eebsb_k$ = function () {
    unreachableDeclarationLog();
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.copy_eadg01_k$ = function (result, onCancellation) {
    unreachableDeclarationLog();
    return new CompletedWithCancellation(result, onCancellation);
  };
  CompletedWithCancellation.prototype.copy$default_lzs7jj_k$ = function (result, onCancellation, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      onCancellation = this.onCancellation_1;
    return this.copy_eadg01_k$(result, onCancellation);
  };
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance();
        var tmp1_failure_0 = recoverStackTrace(state.cause_1, uCont);
        tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_failure_0));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp2_success_0 = Companion_getInstance();
          var tmp3_success_0 = (state == null ? true : isObject(state)) ? state : THROW_CCE();
          tmp$ret$1 = _Result___init__impl__2241242780(tmp3_success_0);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_3655722671() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_3655722671());
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  CoroutineDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  CoroutineDispatcher.prototype.interceptContinuation_pbrjat_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  CoroutineDispatcher.prototype.plus_jld99k_k$ = function (other) {
    unreachableDeclarationLog();
    return other;
  };
  CoroutineDispatcher.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_1pi7hg_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
          return Unit_getInstance();
        }
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
    unreachableDeclarationLog();
    Key_getInstance_1();
  }
  CoroutineExceptionHandler.$metadata$ = {
    simpleName: 'CoroutineExceptionHandler',
    kind: 'interface',
    interfaces: [Element]
  };
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    unreachableDeclarationLog();
    return new _no_name_provided__2671100649(handler);
  }
  function _no_name_provided__2671100649($handler) {
    unreachableDeclarationLog();
    this.$handler_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__2671100649.prototype.handleException_w1h9is_k$ = function (context, exception) {
    unreachableDeclarationLog();
    return this.$handler_1(context, exception);
  };
  _no_name_provided__2671100649.$metadata$ = {
    kind: 'class',
    interfaces: [CoroutineExceptionHandler]
  };
  function CoroutineScope() {
    unreachableDeclarationLog();
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.get_1pi7hg_k$(Key_getInstance_2()) == null)) {
      tmp = context;
    } else {
      tmp = context.plus_rgw9wi_k$(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function coroutineScope(block, $cont) {
    {
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var coroutine_2 = new ScopeCoroutine(tmp0__anonymous__1_2495602521._get_context__1558698818_ps0bpe_k$(), tmp0__anonymous__1_2495602521);
      tmp$ret$0 = startUndispatchedOrReturn(coroutine_2, coroutine_2, block);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function currentCoroutineContext($cont) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = $cont._get_context__1558698818_ps0bpe_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_isActive__4035225851(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292._get_coroutineContext__2519429620_td3xn0_k$().get_1pi7hg_k$(Key_getInstance_2());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isActive__4035225851_4an5s5_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel_1(_this__1828080292, cause) {
    var tmp0_elvis_lhs = _this__1828080292._get_coroutineContext__2519429620_td3xn0_k$().get_1pi7hg_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error_0 = 'Scope cannot be cancelled because it does not have a job: ' + _this__1828080292;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_4b7aim_k$(cause);
  }
  function cancel$default_4(_this__1828080292, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel_1(_this__1828080292, cause);
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype._get_coroutineContext__2519429620_td3xn0_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = {
    simpleName: 'GlobalScope',
    kind: 'object',
    interfaces: [CoroutineScope]
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    unreachableDeclarationLog();
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_1otqlm_k$ = function (block, completion) {
    unreachableDeclarationLog();
    var tmp0_subject = this;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable_0(block, completion);
        break;
      case 2:
        tmp = startCoroutine(block, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched(block, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.invoke_wxhu2x_k$ = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        break;
      case 2:
        tmp = startCoroutine_0(block, receiver, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched_0(block, receiver, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype._get_isLazy__54527757_wgpvx_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = {
    simpleName: 'CoroutineStart',
    kind: 'class',
    interfaces: []
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    unreachableDeclarationLog();
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
    unreachableDeclarationLog();
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function Deferred() {
    unreachableDeclarationLog();
  }
  Deferred.$metadata$ = {
    simpleName: 'Deferred',
    kind: 'interface',
    interfaces: [Job]
  };
  function Delay() {
    unreachableDeclarationLog();
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function _get_delay__3171773102(_this__1828080292) {
    var tmp = _this__1828080292.get_1pi7hg_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? _get_DefaultDelay__1069114793() : tmp0_elvis_lhs;
  }
  function delay_0(timeMillis, $cont) {
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        if (timeMillis.compareTo_n4fqi2_k$(Companion_getInstance_0()._get_MAX_VALUE__3201573499_i2z81x_k$()) < 0) {
          _get_delay__3171773102(cancellable_2_2._get_context__1558698818_ps0bpe_k$()).scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, cancellable_2_2);
        }
      }
      tmp$ret$0 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_DISPOSED_TASK__1345598802() {
    unreachableDeclarationLog();
    init_properties_EventLoop_common_kt_2044663103();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function _get_CLOSED_EMPTY__1975255025() {
    unreachableDeclarationLog();
    init_properties_EventLoop_common_kt_2044663103();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__1264733967($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.useCount_1 = _set____804775014;
  }
  function _get_useCount__490602755($this) {
    unreachableDeclarationLog();
    return $this.useCount_1;
  }
  function _set_shared__4250976338($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.shared_1 = _set____804775014;
  }
  function _get_shared__44588870($this) {
    unreachableDeclarationLog();
    return $this.shared_1;
  }
  function _set_unconfinedQueue__2631724085($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.unconfinedQueue_1 = _set____804775014;
  }
  function _get_unconfinedQueue__3242647489($this) {
    unreachableDeclarationLog();
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  EventLoop.prototype.processNextEvent_jmndfc_k$ = function () {
    unreachableDeclarationLog();
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance_0()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return new Long(0, 0);
  };
  EventLoop.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    return this._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$();
  };
  EventLoop.prototype._get_nextTime__2688576363_qkej6d_k$ = function () {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_0()._get_MAX_VALUE__3201573499_i2z81x_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue._get_isEmpty__1500737838_oti0q6_k$() ? Companion_getInstance_0()._get_MAX_VALUE__3201573499_i2z81x_k$() : new Long(0, 0);
  };
  EventLoop.prototype.processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  EventLoop.prototype.shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  EventLoop.prototype.dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new ArrayQueue();
        {
        }
        {
          this.unconfinedQueue_1 = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_xhfl3v_k$(task);
  };
  EventLoop.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    unreachableDeclarationLog();
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__1254651510_kqzjau_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__1500737838_oti0q6_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_ocukpa_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  EventLoop.prototype.incrementUseCount$default_ig8muj_k$ = function (unconfined, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.incrementUseCount_ocukpa_k$(unconfined);
  };
  EventLoop.prototype.decrementUseCount_saho26_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  EventLoop.prototype.decrementUseCount$default_h3ug27_k$ = function (unconfined, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.decrementUseCount_saho26_k$(unconfined);
  };
  EventLoop.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    checkParallelism(parallelism);
    return this;
  };
  EventLoop.prototype.shutdown_cq5p8b_k$ = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function _get_ref__857347678($this) {
    unreachableDeclarationLog();
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop__3953864115_5n30wd_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also_0);
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.prototype.currentOrNull_z5p8mb_k$ = function () {
    unreachableDeclarationLog();
    return this.ref_1.get_26vq_k$();
  };
  ThreadLocalEventLoop.prototype.resetEventLoop_a6lzlu_k$ = function () {
    unreachableDeclarationLog();
    this.ref_1.set_hda1d2_k$(null);
  };
  ThreadLocalEventLoop.prototype.setEventLoop_d3g3n0_k$ = function (eventLoop) {
    unreachableDeclarationLog();
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_3542618211;
  function init_properties_EventLoop_common_kt_2044663103() {
    unreachableDeclarationLog();
    if (!properties_initialized_EventLoop_common_kt_3542618211) {
      properties_initialized_EventLoop_common_kt_3542618211 = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
    unreachableDeclarationLog();
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_2() {
    Key_instance_1 = this;
    initializeDefaultExceptionHandlers();
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
    unreachableDeclarationLog();
    Key_getInstance_2();
  }
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element]
  };
  function ChildJob() {
    unreachableDeclarationLog();
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
    unreachableDeclarationLog();
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
    unreachableDeclarationLog();
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return null;
  };
  NonDisposableHandle.prototype.dispose_3n44we_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292.get_1pi7hg_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function ensureActive_0(_this__1828080292) {
    if (!_this__1828080292._get_isActive__4035225851_4an5s5_k$())
      throw _this__1828080292.getCancellationException_8i1q6u_k$();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function _get_job__857118836(_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292.get_1pi7hg_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error_0 = "Current context doesn't contain Job in it: " + _this__1828080292;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__1828080292, $cont) {
    _this__1828080292.cancel$default_bm1z3z_k$(null, 1, null);
    return _this__1828080292.join_kbq7u1_k$($cont);
  }
  function _get_isActive__4035225851_0(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292.get_1pi7hg_k$(Key_getInstance_2());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isActive__4035225851_4an5s5_k$()) === true;
  }
  function disposeOnCompletion(_this__1828080292, handle) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new DisposeOnCompletion(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return _this__1828080292.invokeOnCompletion_t2apld_k$(tmp$ret$1);
  }
  function cancel_2(_this__1828080292, message, cause) {
    return _this__1828080292.cancel_4b7aim_k$(CancellationException_init_$Create$_0(message, cause));
  }
  function cancel$default_5(_this__1828080292, message, cause, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    return cancel_2(_this__1828080292, message, cause);
  }
  function _get_COMPLETING_ALREADY__1904323772() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function _get_COMPLETING_WAITING_CHILDREN__621847959() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function _get_COMPLETING_RETRY__2730327532() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function _get_TOO_LATE_TO_CANCEL__2262851771() {
    init_properties_JobSupport_kt_3188198472();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function _get_SEALED__676505391() {
    init_properties_JobSupport_kt_3188198472();
    return SEALED;
  }
  var SEALED;
  function _get_EMPTY_NEW__2442515619() {
    init_properties_JobSupport_kt_3188198472();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function _get_EMPTY_ACTIVE__934614515() {
    init_properties_JobSupport_kt_3188198472();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  Empty.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return this.isActive_1;
  };
  Empty.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
    unreachableDeclarationLog();
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return true;
  };
  NodeList.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this;
  };
  NodeList.prototype.getString_xqex6i_k$ = function (state) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply_0_1.append_ssq29y_k$('List{');
          Unit_getInstance();
          tmp0_apply_0_1.append_ssq29y_k$(state);
          Unit_getInstance();
          tmp0_apply_0_1.append_ssq29y_k$('}[');
          Unit_getInstance();
          var first_3 = true;
          {
            var cur_1_4 = this._get__next__3036752447_kt3wsh_k$();
            while (!equals(cur_1_4, this)) {
              if (cur_1_4 instanceof JobNode) {
                var tmp0__anonymous__2_5_1682275472 = cur_1_4;
                if (first_3)
                  first_3 = false;
                else {
                  tmp0_apply_0_1.append_ssq29y_k$(', ');
                  Unit_getInstance();
                }
                tmp0_apply_0_1.append_t8pm91_k$(tmp0__anonymous__2_5_1682275472);
                Unit_getInstance();
              } else {
              }
              cur_1_4 = cur_1_4._get__next__3036752447_kt3wsh_k$();
            }
          }
          tmp0_apply_0_1.append_ssq29y_k$(']');
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return _get_DEBUG__2224823294() ? this.getString_xqex6i_k$('Active') : anyToString(this);
  };
  NodeList.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._set_job__296006376_hrglay_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.job_1 = _set____804775014;
  };
  JobNode.prototype._get_job__857118836_e6b14k_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return true;
  };
  JobNode.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_3n44we_k$ = function () {
    return this._get_job__857118836_e6b14k_k$().removeNode_o3o6t1_k$(this);
  };
  JobNode.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) + '[job@' + _get_hexAddress__2831015762(this._get_job__857118836_e6b14k_k$()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _get__isCompleting__3029381714($this) {
    unreachableDeclarationLog();
    return $this._isCompleting_1;
  }
  function _get__rootCause__1571289699($this) {
    unreachableDeclarationLog();
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__3443708418($this) {
    unreachableDeclarationLog();
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__2496749063($this, value) {
    $this._exceptionsHolder_1._set_value__1325260276_x73o94_k$(value);
  }
  function _get_exceptionsHolder__4255505403($this) {
    return $this._exceptionsHolder_1._get_value__3683422336_a43j40_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__1491962785($this) {
    unreachableDeclarationLog();
    return $this.parent_1;
  }
  function _get_state__3614753120($this) {
    unreachableDeclarationLog();
    return $this.state_1;
  }
  function _get_child__3145835061($this) {
    unreachableDeclarationLog();
    return $this.child_1;
  }
  function _get_proposedUpdate__743239708($this) {
    unreachableDeclarationLog();
    return $this.proposedUpdate_1;
  }
  function _get_job__857118836_0($this) {
    unreachableDeclarationLog();
    return $this.job_1;
  }
  function _get__state__4101327289_0($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function _get__parentHandle__923088288($this) {
    unreachableDeclarationLog();
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    unreachableDeclarationLog();
    while (true) {
      block($this._get_state__3614753120_b8zcm8_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
    var wasCancelling = false;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        wasCancelling = state._get_isCancelling__1064839761_hlz7m9_k$();
        var exceptions_2 = state.sealLocked_11gdw4_k$(proposedException);
        var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
        if (!(finalCause_3 == null))
          addSuppressedExceptions($this, finalCause_3, exceptions_2);
        tmp$ret$0 = finalCause_3;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
        Unit_getInstance();
      }
    }
    if (!wasCancelling)
      $this.onCancelling_bxyn9n_k$(finalException);
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state._get_isCancelling__1064839761_hlz7m9_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_iterator_1 = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !(element_2 instanceof CancellationException);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_2;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_5: {
        var tmp0_iterator_1_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
          var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
          var tmp$ret$3;
          $l$block_3: {
            var tmp;
            if (!(element_2_0 === first)) {
              tmp = element_2_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
            break $l$block_3;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_2_0;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$4 = null;
        break $l$block_5;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__809037418_ddoh9m_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__809037418_ddoh9m_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        {
        }
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__921052185_f8dcex_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp0_safe_receiver.dispose_3n44we_k$();
        tmp$ret$0 = $this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_cause__3139734664_j3sn7c_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__802566509_d9tsa5_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    {
      var exception_1 = null;
      {
        var cur_1 = list._get__next__3036752447_kt3wsh_k$();
        while (!equals(cur_1, list)) {
          if (cur_1 instanceof JobCancellingNode) {
            var tmp0__anonymous__2_2_1682275469 = cur_1;
            try {
              tmp0__anonymous__2_2_1682275469.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_5_5 = exception_1;
                var tmp;
                if (tmp0_safe_receiver_5_5 == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  $l$block: {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver_5_5;
                    break $l$block;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs_4_4 = tmp;
                if (tmp1_elvis_lhs_4_4 == null) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    exception_1 = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__2_2_1682275469 + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                } else
                  tmp1_elvis_lhs_4_4;
                Unit_getInstance();
              } else {
                {
                  throw $p;
                }
              }
            }
          } else {
          }
          cur_1 = cur_1._get__next__3036752447_kt3wsh_k$();
        }
      }
      var tmp0_safe_receiver_8 = exception_1;
      if (tmp0_safe_receiver_8 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          tmp$ret$2 = $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_8);
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__175864179_2wpdo3_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__921052185_f8dcex_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__1828080292, $this, cause) {
    var exception_1 = null;
    {
      var cur_1 = _this__1828080292._get__next__3036752447_kt3wsh_k$();
      while (!equals(cur_1, _this__1828080292)) {
        if (cur_1 instanceof JobNode) {
          var tmp0__anonymous__2_2_1682275469 = cur_1;
          try {
            tmp0__anonymous__2_2_1682275469.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver_5_5 = exception_1;
              var tmp;
              if (tmp0_safe_receiver_5_5 == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver_5_5;
                  break $l$block;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs_4_4 = tmp;
              if (tmp1_elvis_lhs_4_4 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  {
                  }
                  exception_1 = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__2_2_1682275469 + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                  break $l$block_0;
                }
                Unit_getInstance();
              } else
                tmp1_elvis_lhs_4_4;
              Unit_getInstance();
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        cur_1 = cur_1._get__next__3036752447_kt3wsh_k$();
      }
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        tmp$ret$2 = $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_8);
        break $l$block_1;
      }
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, _get_EMPTY_ACTIVE__934614515()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this._get_state__3614753120_b8zcm8_k$() === expect;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = state._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var list = tmp$ret$0;
    $this._state_1.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function joinInternal($this) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false))
            return false;
          else {
          }
          if (startInternal($this, tmp0__anonymous__1_2495602521) >= 0)
            return true;
        }
      }
      Unit_getInstance();
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__get_asHandler__0_4_3156268537 = new ResumeOnCompletion(cancellable_2_2);
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0__get_asHandler__0_4_3156268537;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        disposeOnCancellation(cancellable_2_2, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
      }
      tmp$ret$2 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          var tmp;
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            tmp = true;
          } else {
            {
              var tmp_0;
              if (tmp0__anonymous__1_2495602521 instanceof Finishing) {
                tmp_0 = tmp0__anonymous__1_2495602521._get_isCompleting__3027345611_kypj5h_k$();
              } else {
                {
                  tmp_0 = false;
                }
              }
              tmp = tmp_0;
            }
          }
          if (tmp) {
            return _get_COMPLETING_ALREADY__1904323772();
          } else {
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1_2495602521, proposedUpdate_2);
          if (!(finalState_3 === _get_COMPLETING_RETRY__2730327532()))
            return finalState_3;
        }
      }
      Unit_getInstance();
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block_6: {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof Finishing) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                if (tmp0__anonymous__1_2495602521._get_isSealed__2870207333_nk9jtn_k$())
                  return _get_TOO_LATE_TO_CANCEL__2262851771();
                var wasCancelling_2_4 = tmp0__anonymous__1_2495602521._get_isCancelling__1064839761_hlz7m9_k$();
                if (!(cause == null) ? true : !wasCancelling_2_4) {
                  var tmp0_elvis_lhs_4_6 = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs_4_6 == null) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_also_0_5_7 = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also_0_5_7;
                      }
                      tmp$ret$0 = tmp0_also_0_5_7;
                      break $l$block;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs_4_6;
                  }
                  var causeException_3_5 = tmp;
                  tmp0__anonymous__1_2495602521.addExceptionLocked_jeuhbd_k$(causeException_3_5);
                }
                var tmp$ret$2;
                $l$block_1: {
                  var tmp1_takeIf_0_6_8 = tmp0__anonymous__1_2495602521._get_rootCause__1061504650_hjzq8a_k$();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = !wasCancelling_2_4;
                    break $l$block_0;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf_0_6_8;
                  } else {
                    {
                      tmp_0 = null;
                    }
                  }
                  tmp$ret$2 = tmp_0;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            var notifyRootCause_3 = tmp$ret$4;
            var tmp1_safe_receiver_9 = notifyRootCause_3;
            if (tmp1_safe_receiver_9 == null)
              null;
            else {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__1_2495602521.list_1, tmp1_safe_receiver_9);
                break $l$block_4;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
            return _get_COMPLETING_ALREADY__1904323772();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var tmp2_elvis_lhs_11 = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs_11 == null) {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_also_0_12 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0_12;
                  }
                  tmp$ret$6 = tmp0_also_0_12;
                  break $l$block_5;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs_11;
              }
              var causeException_10 = tmp_1;
              if (tmp0__anonymous__1_2495602521._get_isActive__4035225851_4an5s5_k$()) {
                if (tryMakeCancelling($this, tmp0__anonymous__1_2495602521, causeException_10))
                  return _get_COMPLETING_ALREADY__1904323772();
              } else {
                var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1_2495602521, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
                if (finalState_13 === _get_COMPLETING_ALREADY__1904323772()) {
                  var tmp1_error_0_14 = 'Cannot happen in ' + toString(tmp0__anonymous__1_2495602521);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_14));
                } else if (finalState_13 === _get_COMPLETING_RETRY__2730327532()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block_6;
                } else
                  return finalState_13;
              }
            } else {
              return _get_TOO_LATE_TO_CANCEL__2262851771();
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__802566509_d9tsa5_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return _get_COMPLETING_ALREADY__1904323772();
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return _get_COMPLETING_RETRY__2730327532();
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return _get_COMPLETING_RETRY__2730327532();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    $l$block_2: {
      if (finishing._get_isCompleting__3027345611_kypj5h_k$())
        return _get_COMPLETING_ALREADY__1904323772();
      finishing._set_isCompleting__2087192791_wiracy_k$(true);
      if (!(finishing === state)) {
        if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
          return _get_COMPLETING_RETRY__2730327532();
      }
      {
      }
      var wasCancelling_2 = finishing._get_isCancelling__1064839761_hlz7m9_k$();
      var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver_3._get_cause__3139734664_j3sn7c_k$());
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_takeIf_0_4 = finishing._get_rootCause__1061504650_hjzq8a_k$();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !wasCancelling_2;
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf_0_4;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$2 = tmp_0;
        break $l$block_1;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
      break $l$block_2;
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
        break $l$block_3;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return _get_COMPLETING_WAITING_CHILDREN__621847959();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__671063032(_this__1828080292, $this) {
    var tmp0_safe_receiver = _this__1828080292 instanceof CompletedExceptionally ? _this__1828080292 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__802566509_d9tsa5_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0_1201048388 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var handle = child_1.childJob_1.invokeOnCompletion$default_7q548c_k$(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__1828080292, $this) {
    var cur = _this__1828080292;
    $l$loop: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_isRemoved__0_1344361830 = cur;
        tmp$ret$0 = tmp0__get_isRemoved__0_1344361830._get__removed__1059529930_hiteiy_k$();
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_prevNode__0_2635487596 = cur;
        tmp$ret$1 = tmp1__get_prevNode__0_2635487596._get__prev__3038968575_krsetd_k$();
        break $l$block_0;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2__get_nextNode__0_24509131 = cur;
        tmp$ret$2 = tmp2__get_nextNode__0_24509131._get__next__3036752447_kt3wsh_k$();
        break $l$block_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        var tmp3__get_isRemoved__0_3105913513 = cur;
        tmp$ret$3 = tmp3__get_isRemoved__0_3105913513._get__removed__1059529930_hiteiy_k$();
        break $l$block_2;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling__1064839761_hlz7m9_k$() ? 'Cancelling' : state._get_isCompleting__3027345611_kypj5h_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__4035225851_4an5s5_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  Finishing.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this.list_1;
  };
  Finishing.prototype._set_isCompleting__2087192791_wiracy_k$ = function (value) {
    this._isCompleting_1._set_value__1325260276_9lpcvp_k$(value);
  };
  Finishing.prototype._get_isCompleting__3027345611_kypj5h_k$ = function () {
    return this._isCompleting_1._get_value__3683422336_a43j40_k$();
  };
  Finishing.prototype._set_rootCause__3584735742_ay25nq_k$ = function (value) {
    this._rootCause_1._set_value__1325260276_x73o94_k$(value);
  };
  Finishing.prototype._get_rootCause__1061504650_hjzq8a_k$ = function () {
    return this._rootCause_1._get_value__3683422336_a43j40_k$();
  };
  Finishing.prototype._get_isSealed__2870207333_nk9jtn_k$ = function () {
    return _get_exceptionsHolder__4255505403(this) === _get_SEALED__676505391();
  };
  Finishing.prototype._get_isCancelling__1064839761_hlz7m9_k$ = function () {
    return !(this._get_rootCause__1061504650_hjzq8a_k$() == null);
  };
  Finishing.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return this._get_rootCause__1061504650_hjzq8a_k$() == null;
  };
  Finishing.prototype.sealLocked_11gdw4_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__4255505403(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0 = allocateList(this);
          {
          }
          {
            tmp0_also_0.add_1j60pz_k$(eh);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_also_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = 'State is ' + toString(eh);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause__1061504650_hjzq8a_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = list.add_ydlf05_k$(0, tmp0_safe_receiver);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
      Unit_getInstance();
    }
    _set_exceptionsHolder__2496749063(this, _get_SEALED__676505391());
    return list;
  };
  Finishing.prototype.addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this._get_rootCause__1061504650_hjzq8a_k$();
    if (rootCause == null) {
      this._set_rootCause__3584735742_ay25nq_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__4255505403(this);
    if (eh == null)
      _set_exceptionsHolder__2496749063(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = allocateList(this);
          {
          }
          {
            tmp0_apply_0.add_1j60pz_k$(eh);
            Unit_getInstance();
            tmp0_apply_0.add_1j60pz_k$(exception);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        _set_exceptionsHolder__2496749063(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = 'State is ' + toString(eh);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this._get_isCancelling__1064839761_hlz7m9_k$() + ', completing=' + this._get_isCompleting__3027345611_kypj5h_k$() + ', rootCause=' + this._get_rootCause__1061504650_hjzq8a_k$() + ', exceptions=' + toString(_get_exceptionsHolder__4255505403(this)) + ', list=' + this.list_1 + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function _get_isCancelling__1064839761(_this__1828080292, $this) {
    unreachableDeclarationLog();
    var tmp;
    if (_this__1828080292 instanceof Finishing) {
      tmp = _this__1828080292._get_isCancelling__1064839761_hlz7m9_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function AwaitContinuation(delegate, job) {
    unreachableDeclarationLog();
    CancellableContinuationImpl.call(this, delegate, _get_MODE_CANCELLABLE__581347323());
    this.job_1 = job;
  }
  AwaitContinuation.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    unreachableDeclarationLog();
    var state = this.job_1._get_state__3614753120_b8zcm8_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__1061504650_hjzq8a_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          return tmp0_safe_receiver;
        }
      }
      Unit_getInstance();
    } else {
    }
    if (state instanceof CompletedExceptionally)
      return state._get_cause__3139734664_j3sn7c_k$();
    else {
    }
    return parent.getCancellationException_8i1q6u_k$();
  };
  AwaitContinuation.prototype.nameString_cd9e9w_k$ = function () {
    unreachableDeclarationLog();
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = {
    simpleName: 'AwaitContinuation',
    kind: 'class',
    interfaces: []
  };
  function awaitSuspend($this, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var cont_2 = new AwaitContinuation(intercepted(tmp0__anonymous__1_2495602521), $this);
      cont_2.initCancellability_sh6jkn_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0_3_3156268536 = new ResumeAwaitOnCompletion(cont_2);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0_3_3156268536;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      disposeOnCancellation(cont_2, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
      tmp$ret$2 = cont_2.getResult_clfhg3_k$();
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function JobSupport$_get_children_$slambda_1222912628(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JobSupport$_get_children_$slambda_1222912628.prototype.invoke_6hwafz_k$ = function ($this$sequence, $cont) {
    var tmp = this.create_d86qwy_k$($this$sequence, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(8);
            this.state0__1 = this.this$0__1._get_state__3614753120_b8zcm8_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this._set_state__1256591060_i39zdo_k$(6);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                var tmp_1 = this.state0__1;
                if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                  this.tmp0_safe_receiver1__1 = this.state0__1._get_list__802566509_d9tsa5_k$();
                  if (this.tmp0_safe_receiver1__1 == null) {
                    this.WHEN_RESULT2__1 = null;
                    this._set_state__1256591060_i39zdo_k$(5);
                    continue $sm;
                  } else {
                    this.cur_1_23__1 = this.tmp0_safe_receiver1__1._get__next__3036752447_kt3wsh_k$();
                    this._set_state__1256591060_i39zdo_k$(1);
                    continue $sm;
                  }
                } else {
                  {
                    this._set_state__1256591060_i39zdo_k$(7);
                    continue $sm;
                  }
                }
              }
            }

            break;
          case 1:
            if (!!equals(this.cur_1_23__1, this.tmp0_safe_receiver1__1)) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            var tmp_2 = this.cur_1_23__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0__anonymous__2_34_610932070__1 = this.cur_1_23__1;
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0__anonymous__2_34_610932070__1.childJob_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(3);
                continue $sm;
              }
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this.cur_1_23__1 = this.cur_1_23__1._get__next__3036752447_kt3wsh_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this._get_exception__1672948706_ro13he_k$();
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
  JobSupport$_get_children_$slambda_1222912628.prototype.create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_1222912628(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  JobSupport$_get_children_$slambda_1222912628.$metadata$ = {
    simpleName: 'JobSupport$<get-children>$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function JobSupport$_get_children_$slambda_1222912628_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_1222912628(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.invoke_6hwafz_k$($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? _get_EMPTY_ACTIVE__934614515() : _get_EMPTY_NEW__2442515619());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  JobSupport.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__4275866661_guhd0s_k$ = function (value) {
    this._parentHandle_1._set_value__1325260276_x73o94_k$(value);
  };
  JobSupport.prototype._get_parentHandle__921052185_f8dcex_k$ = function () {
    return this._parentHandle_1._get_value__3683422336_a43j40_k$();
  };
  JobSupport.prototype.initParentJob_4c2lht_k$ = function (parent) {
    {
    }
    if (parent == null) {
      this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    Unit_getInstance();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this._set_parentHandle__4275866661_guhd0s_k$(handle);
    if (this._get_isCompleted__3284240752_gprdlc_k$()) {
      handle.dispose_3n44we_k$();
      this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 instanceof OpDescriptor))
            return tmp1__anonymous__1_4003154330;
          else {
          }
          tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__4035225851_4an5s5_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__3284240752_gprdlc_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype._get_isCancelled__1419818794_nhbn6y_k$ = function () {
    unreachableDeclarationLog();
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state._get_isCancelling__1064839761_hlz7m9_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        tmp = tmp_0;
      }
    }
    return tmp;
  };
  JobSupport.prototype.start_1tchgi_k$ = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1_2495602521);
          if (tmp0_subject_2 === 0)
            return false;
          else if (tmp0_subject_2 === 1)
            return true;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.onStart_qth026_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_8i1q6u_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__1061504650_hjzq8a_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, _get_classSimpleName__3937513404(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = state._get_cause__3139734664_j3sn7c_k$();
          tmp = this.toCancellationException$default_c99ojs_k$(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException(_get_classSimpleName__3937513404(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_8ve25p_k$ = function (_this__1828080292, message) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof CancellationException ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, _this__1828080292, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_c99ojs_k$ = function (_this__1828080292, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_8ve25p_k$(_this__1828080292, message);
  };
  JobSupport.prototype._get_completionCause__4234865604_zs6rg_k$ = function () {
    unreachableDeclarationLog();
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state._get_rootCause__1061504650_hjzq8a_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state._get_cause__3139734664_j3sn7c_k$();
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_completionCauseHandled__811476572_df4rbw_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this._get_state__3614753120_b8zcm8_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (tmp0_let_0 instanceof CompletedExceptionally) {
          tmp = tmp0_let_0._get_handled__2128079701_z704t1_k$();
        } else {
          {
            tmp = false;
          }
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  JobSupport.prototype.invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof Empty) {
            if (tmp0__anonymous__1_2495602521.isActive_1) {
              if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__1_2495602521, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__1_2495602521);
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var list_3 = tmp0__anonymous__1_2495602521._get_list__802566509_d9tsa5_k$();
              if (list_3 == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__1_2495602521 instanceof JobNode ? tmp0__anonymous__1_2495602521 : THROW_CCE());
              } else {
                var rootCause_4 = null;
                var handle_5 = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__1_2495602521 instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  $l$block_1: {
                    rootCause_4 = tmp0__anonymous__1_2495602521._get_rootCause__1061504650_hjzq8a_k$();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause_4 == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      $l$block: {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                        break $l$block;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__1_2495602521._get_isCompleting__3027345611_kypj5h_k$();
                      } else {
                        {
                          tmp_2 = false;
                        }
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__1_2495602521, list_3, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block_0;
                      }
                      if (rootCause_4 == null)
                        return node;
                      handle_5 = node;
                      tmp_0 = Unit_getInstance();
                    } else {
                    }
                    tmp$ret$2 = tmp_0;
                    break $l$block_1;
                  }
                } else {
                }
                if (!(rootCause_4 == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause_4);
                  return handle_5;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__1_2495602521, list_3, node))
                    return node;
                }
              }
            } else {
              {
                if (invokeImmediately) {
                  var tmp1_safe_receiver_6 = tmp0__anonymous__1_2495602521 instanceof CompletedExceptionally ? tmp0__anonymous__1_2495602521 : null;
                  invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._get_cause__3139734664_j3sn7c_k$());
                }
                return NonDisposableHandle_getInstance();
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.join_kbq7u1_k$ = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $cont._get_context__1558698818_ps0bpe_k$();
        break $l$block;
      }
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype._get_onJoin__939990146_fjn91e_k$ = function () {
    unreachableDeclarationLog();
    return this;
  };
  JobSupport.prototype.registerSelectClause0_h2wst5_k$ = function (select, block) {
    unreachableDeclarationLog();
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          if (select._get_isSelected__1871115078_uy0hmu_k$())
            return Unit_getInstance();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            if (select.trySelect_1ivjiv_k$()) {
              startCoroutineUnintercepted(block, select._get_completion__2811226159_ojdpzl_k$());
            }
            return Unit_getInstance();
          } else {
          }
          if (startInternal(this, tmp0__anonymous__1_2495602521) === 0) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0__get_asHandler__0_2_3156268535 = new SelectJoinOnCompletion(select, block);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0__get_asHandler__0_2_3156268535;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
            return Unit_getInstance();
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.removeNode_o3o6t1_k$ = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof JobNode) {
            if (!(tmp0__anonymous__1_2495602521 === node))
              return Unit_getInstance();
            if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__1_2495602521, _get_EMPTY_ACTIVE__934614515()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              if (!(tmp0__anonymous__1_2495602521._get_list__802566509_d9tsa5_k$() == null)) {
                node.remove_fgfybg_k$();
                Unit_getInstance();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_onCancelComplete__560530297_99q3y1_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancel_4b7aim_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  JobSupport.prototype.cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.cancel_as6ug7_k$ = function (cause) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = this.toCancellationException$default_c99ojs_k$(tmp0_safe_receiver, null, 1, null);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp_0);
    return true;
  };
  JobSupport.prototype.cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
    Unit_getInstance();
  };
  JobSupport.prototype.parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_5ls1mt_k$(cause) ? this._get_handlesException__2187079175_yuzcvt_k$() : false;
  };
  JobSupport.prototype.cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  JobSupport.prototype.cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = _get_COMPLETING_ALREADY__1904323772();
    if (this._get_onCancelComplete__560530297_99q3y1_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === _get_COMPLETING_WAITING_CHILDREN__621847959())
        return true;
    }
    if (finalState === _get_COMPLETING_ALREADY__1904323772()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === _get_COMPLETING_ALREADY__1904323772()) {
      tmp = true;
    } else if (finalState === _get_COMPLETING_WAITING_CHILDREN__621847959()) {
      tmp = true;
    } else if (finalState === _get_TOO_LATE_TO_CANCEL__2262851771()) {
      tmp = false;
    } else {
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.defaultCancellationException_lkdizi_k$ = function (message, cause) {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause__1061504650_hjzq8a_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._get_cause__3139734664_j3sn7c_k$();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1_2495602521, proposedUpdate);
          if (finalState_2 === _get_COMPLETING_ALREADY__1904323772())
            return false;
          else if (finalState_2 === _get_COMPLETING_WAITING_CHILDREN__621847959())
            return true;
          else if (finalState_2 === _get_COMPLETING_RETRY__2730327532()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            this.afterCompletion_2ogq6g_k$(finalState_2);
            return true;
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1_2495602521, proposedUpdate);
          if (finalState_2 === _get_COMPLETING_ALREADY__1904323772())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__671063032(proposedUpdate, this));
          else if (finalState_2 === _get_COMPLETING_RETRY__2730327532()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState_2;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_children__1387553196_my42wc_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_1222912628_0(this, null));
  };
  JobSupport.prototype.attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ChildHandleNode(child);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp = this.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_bxyn9n_k$ = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__175864179_2wpdo3_k$ = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__2187079175_yuzcvt_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_39c1g8_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_2ogq6g_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + _get_hexAddress__2831015762(this);
  };
  JobSupport.prototype.toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this._get_state__3614753120_b8zcm8_k$()) + '}';
  };
  JobSupport.prototype.nameString_cd9e9w_k$ = function () {
    return _get_classSimpleName__3937513404(this);
  };
  JobSupport.prototype._get_isCompletedExceptionally__2915561861_mt9g1n_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return tmp instanceof CompletedExceptionally;
  };
  JobSupport.prototype.getCompletionExceptionOrNull_snuvbb_k$ = function () {
    unreachableDeclarationLog();
    var state = this._get_state__3614753120_b8zcm8_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
      }
    }
    return _get_exceptionOrNull__671063032(state, this);
  };
  JobSupport.prototype.getCompletedInternal_26f4i6_k$ = function () {
    unreachableDeclarationLog();
    var state = this._get_state__3614753120_b8zcm8_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
      }
    }
    if (state instanceof CompletedExceptionally)
      throw state._get_cause__3139734664_j3sn7c_k$();
    else {
    }
    return unboxState(state);
  };
  JobSupport.prototype.awaitInternal_pz51jj_k$ = function ($cont) {
    unreachableDeclarationLog();
    $l$loop: while (true) {
      var state = this._get_state__3614753120_b8zcm8_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          {
            var tmp0_recoverAndThrow_0 = state._get_cause__3139734664_j3sn7c_k$();
            throw tmp0_recoverAndThrow_0;
          }
        } else {
        }
        return unboxState(state);
      } else {
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.prototype.registerSelectClause1Internal_amjpx5_k$ = function (select, block) {
    unreachableDeclarationLog();
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          if (select._get_isSelected__1871115078_uy0hmu_k$())
            return Unit_getInstance();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            if (select.trySelect_1ivjiv_k$()) {
              if (tmp0__anonymous__1_2495602521 instanceof CompletedExceptionally) {
                select.resumeSelectWithException_xs2ljz_k$(tmp0__anonymous__1_2495602521._get_cause__3139734664_j3sn7c_k$());
              } else {
                {
                  var tmp = unboxState(tmp0__anonymous__1_2495602521);
                  startCoroutineUnintercepted_0(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select._get_completion__2811226159_ojdpzl_k$());
                }
              }
            }
            return Unit_getInstance();
          } else {
          }
          if (startInternal(this, tmp0__anonymous__1_2495602521) === 0) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0__get_asHandler__0_2_3156268535 = new SelectAwaitOnCompletion(select, block);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0__get_asHandler__0_2_3156268535;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
            return Unit_getInstance();
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.selectAwaitCompletion_tgh7vz_k$ = function (select, block) {
    unreachableDeclarationLog();
    var state = this._get_state__3614753120_b8zcm8_k$();
    if (state instanceof CompletedExceptionally)
      select.resumeSelectWithException_xs2ljz_k$(state._get_cause__3139734664_j3sn7c_k$());
    else {
      {
        var tmp = unboxState(state);
        var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        var tmp_1 = select._get_completion__2811226159_ojdpzl_k$();
        startCoroutineCancellable$default(block, tmp_0, tmp_1, null, 4, null);
      }
    }
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this__1828080292) {
    init_properties_JobSupport_kt_3188198472();
    var tmp;
    if (!(_this__1828080292 == null) ? isInterface(_this__1828080292, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__1828080292);
    } else {
      {
        tmp = _this__1828080292;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function _get_FALSE__2278683438() {
    unreachableDeclarationLog();
    return FALSE;
  }
  var FALSE;
  function _get_TRUE__779686525() {
    unreachableDeclarationLog();
    return TRUE;
  }
  var TRUE;
  function _get_RETRY__2626165321() {
    unreachableDeclarationLog();
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  InactiveNodeList.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this.list_1;
  };
  InactiveNodeList.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return _get_DEBUG__2224823294() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  ChildHandleNode.prototype._get_childJob__1386370794_mxeqju_k$ = function () {
    unreachableDeclarationLog();
    return this.childJob_1;
  };
  ChildHandleNode.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return this._get_job__857118836_e6b14k_k$();
  };
  ChildHandleNode.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this._get_job__857118836_e6b14k_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return this._get_job__857118836_e6b14k_k$().childCancelled_fdoq8t_k$(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function _get_handler__2128080135_0($this) {
    unreachableDeclarationLog();
    return $this.handler_1;
  }
  function _get__invoked__2209039294($this) {
    unreachableDeclarationLog();
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function _get_handler__2128080135_1($this) {
    unreachableDeclarationLog();
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_continuation__2061681140_1($this) {
    unreachableDeclarationLog();
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = this.continuation_1;
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_s3a3yh_k$(tmp$ret$0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeOnCompletion.$metadata$ = {
    simpleName: 'ResumeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_select__4263438735($this) {
    unreachableDeclarationLog();
    return $this.select_1;
  }
  function _get_block__3121070308($this) {
    unreachableDeclarationLog();
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    unreachableDeclarationLog();
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectJoinOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    unreachableDeclarationLog();
    if (this.select_1.trySelect_1ivjiv_k$())
      startCoroutineCancellable_0(this.block_1, this.select_1._get_completion__2811226159_ojdpzl_k$());
  };
  SelectJoinOnCompletion.prototype.invoke = function (cause) {
    unreachableDeclarationLog();
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectJoinOnCompletion.$metadata$ = {
    simpleName: 'SelectJoinOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function unboxState(_this__1828080292) {
    init_properties_JobSupport_kt_3188198472();
    var tmp0_safe_receiver = _this__1828080292 instanceof IncompleteStateBox ? _this__1828080292 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__1828080292 : tmp1_elvis_lhs;
  }
  function _get_continuation__2061681140_2($this) {
    unreachableDeclarationLog();
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    unreachableDeclarationLog();
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    unreachableDeclarationLog();
    var state = this._get_job__857118836_e6b14k_k$()._get_state__3614753120_b8zcm8_k$();
    {
    }
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_resumeWithException_0 = this.continuation_1;
        var tmp1_resumeWithException_0 = state._get_cause__3139734664_j3sn7c_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp0_failure_0_1 = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_resumeWithException_0));
          break $l$block;
        }
        tmp$ret$1 = tmp0_resumeWithException_0.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
    } else {
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp2_resume_0 = this.continuation_1;
          var tmp = unboxState(state);
          var tmp3_resume_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__2241242780(tmp3_resume_0);
            break $l$block_1;
          }
          tmp$ret$3 = tmp2_resume_0.resumeWith_s3a3yh_k$(tmp$ret$2);
          break $l$block_2;
        }
      }
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    unreachableDeclarationLog();
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = {
    simpleName: 'ResumeAwaitOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_select__4263438735_0($this) {
    unreachableDeclarationLog();
    return $this.select_1;
  }
  function _get_block__3121070308_0($this) {
    unreachableDeclarationLog();
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    unreachableDeclarationLog();
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    unreachableDeclarationLog();
    if (this.select_1.trySelect_1ivjiv_k$())
      this._get_job__857118836_e6b14k_k$().selectAwaitCompletion_tgh7vz_k$(this.select_1, this.block_1);
  };
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    unreachableDeclarationLog();
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectAwaitOnCompletion.$metadata$ = {
    simpleName: 'SelectAwaitOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  IncompleteStateBox.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    unreachableDeclarationLog();
    return this.state_1;
  };
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  ChildContinuation.prototype._get_child__3145835061_j05w3v_k$ = function () {
    unreachableDeclarationLog();
    return this.child_1;
  };
  ChildContinuation.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this._get_job__857118836_e6b14k_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function handlesException($this) {
    var tmp = $this._get_parentHandle__921052185_f8dcex_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_job__857118836_e6b14k_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob._get_handlesException__2187079175_yuzcvt_k$())
        return true;
      var tmp_1 = parentJob._get_parentHandle__921052185_f8dcex_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_job__857118836_e6b14k_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  JobImpl.prototype._get_onCancelComplete__560530297_99q3y1_k$ = function () {
    return true;
  };
  JobImpl.prototype._get_handlesException__2187079175_yuzcvt_k$ = function () {
    return this.handlesException_1;
  };
  JobImpl.prototype.complete_9ww6vb_k$ = function () {
    unreachableDeclarationLog();
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  JobImpl.prototype.completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = {
    simpleName: 'JobImpl',
    kind: 'class',
    interfaces: [CompletableJob]
  };
  function _get_handle__2978141667_0($this) {
    unreachableDeclarationLog();
    return $this.handle_1;
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.handle_1 = handle;
  }
  DisposeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  DisposeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  DisposeOnCompletion.$metadata$ = {
    simpleName: 'DisposeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_JobSupport_kt_333787756;
  function init_properties_JobSupport_kt_3188198472() {
    if (!properties_initialized_JobSupport_kt_333787756) {
      properties_initialized_JobSupport_kt_333787756 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    checkParallelism(parallelism);
    return this;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance()._get_Main__773689234_csmufm_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main._get_immediate__3483316416_df8hts_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = {
    simpleName: 'SupervisorJobImpl',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, Object.create(TimeoutCancellationException.prototype));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.coroutine_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  TimeoutCancellationException.prototype._get_coroutine__1953794681_wb8lmh_k$ = function () {
    return this.coroutine_1;
  };
  TimeoutCancellationException.prototype.createCopy_mmw9ld_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_elvis_lhs = this.message;
      var tmp0_also_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
      {
      }
      {
        initCause(tmp0_also_0, this);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function withTimeout(timeMillis, block, $cont) {
    {
    }
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      throw TimeoutCancellationException_init_$Create$('Timed out immediately');
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      tmp$ret$0 = setupTimeout(new TimeoutCoroutine(timeMillis, tmp0__anonymous__1_2495602521), block);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function withTimeoutOrNull(timeMillis, block, $cont) {
    var tmp = new $withTimeoutOrNullCOROUTINE$2(timeMillis, block, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine._get_uCont__3627170666_b1l76e_k$();
    var context = cont._get_context__1558698818_ps0bpe_k$();
    disposeOnCompletion(coroutine, _get_delay__3171773102(context).invokeOnTimeout_sx2bqq_k$(coroutine.time_1, coroutine, coroutine._get_context__1558698818_ps0bpe_k$()));
    Unit_getInstance();
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont._get_context__1558698818_ps0bpe_k$(), uCont);
    this.time_1 = time;
  }
  TimeoutCoroutine.prototype._get_time__809948446_de807y_k$ = function () {
    unreachableDeclarationLog();
    return this.time_1;
  };
  TimeoutCoroutine.prototype.run_mw4iiu_k$ = function () {
    this.cancelCoroutine_dy4tw5_k$(TimeoutCancellationException_0(this.time_1, this));
    Unit_getInstance();
  };
  TimeoutCoroutine.prototype.nameString_cd9e9w_k$ = function () {
    return ScopeCoroutine.prototype.nameString_cd9e9w_k$.call(this) + '(timeMillis=' + toString_0(this.time_1) + ')';
  };
  TimeoutCoroutine.$metadata$ = {
    simpleName: 'TimeoutCoroutine',
    kind: 'class',
    interfaces: [Runnable]
  };
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$2(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.timeMillis_1 = timeMillis;
    this.block_1 = block;
  }
  $withTimeoutOrNullCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            if (this.timeMillis_1.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
              return null;
            this.coroutine0__1 = {_v: null};
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            var tmp_0 = this;
            tmp_0.tmp0__anonymous__11_54266872__1 = this;
            this.timeoutCoroutine_22__1 = new TimeoutCoroutine(this.timeMillis_1, this.tmp0__anonymous__11_54266872__1);
            this.coroutine0__1._v = this.timeoutCoroutine_22__1;
            suspendResult = returnIfSuspended(setupTimeout(this.timeoutCoroutine_22__1, this.block_1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof TimeoutCancellationException) {
              var e = this._get_exception__1672948706_ro13he_k$();
              if (e.coroutine_1 === this.coroutine0__1._v) {
                return null;
              }
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
  $withTimeoutOrNullCOROUTINE$2.$metadata$ = {
    simpleName: '$withTimeoutOrNullCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  Unconfined.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_1pi7hg_k$(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.dispatcherWasUnconfined_1 = false;
  }
  YieldContext.prototype._set_dispatcherWasUnconfined__3961136706_3p78gp_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.dispatcherWasUnconfined_1 = _set____804775014;
  };
  YieldContext.prototype._get_dispatcherWasUnconfined__2723007950_pzwjle_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  YieldContext.$metadata$ = {
    simpleName: 'YieldContext',
    kind: 'class',
    interfaces: []
  };
  function yield_0($cont) {
    var tmp$ret$0;
    $l$block_1: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var context_2 = tmp0__anonymous__1_2495602521._get_context__1558698818_ps0bpe_k$();
      ensureActive(context_2);
      var tmp = intercepted(tmp0__anonymous__1_2495602521);
      var tmp0_elvis_lhs_4 = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs_4 == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      } else {
        tmp_0 = tmp0_elvis_lhs_4;
      }
      var cont_3 = tmp_0;
      if (cont_3._get_dispatcher__3474623172_dketks_k$().isDispatchNeeded_fmz9vn_k$(context_2)) {
        cont_3.dispatchYield_r38es3_k$(context_2, Unit_getInstance());
      } else {
        var yieldContext_5 = new YieldContext();
        cont_3.dispatchYield_r38es3_k$(context_2.plus_rgw9wi_k$(yieldContext_5), Unit_getInstance());
        if (yieldContext_5._get_dispatcherWasUnconfined__2723007950_pzwjle_k$()) {
          tmp$ret$0 = yieldUndispatched(cont_3) ? _get_COROUTINE_SUSPENDED__2870145053() : Unit_getInstance();
          break $l$block_1;
        }
      }
      tmp$ret$0 = _get_COROUTINE_SUSPENDED__2870145053();
      break $l$block_1;
    }
    return tmp$ret$0;
  }
  function _get_EMPTY__2261257284() {
    init_properties_AbstractChannel_kt_2931858707();
    return EMPTY;
  }
  var EMPTY;
  function _get_OFFER_SUCCESS__1078998001() {
    init_properties_AbstractChannel_kt_2931858707();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function _get_OFFER_FAILED__676838827() {
    init_properties_AbstractChannel_kt_2931858707();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function _get_POLL_FAILED__3177529460() {
    init_properties_AbstractChannel_kt_2931858707();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function _get_ENQUEUE_FAILED__2229156375() {
    unreachableDeclarationLog();
    init_properties_AbstractChannel_kt_2931858707();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function _get_HANDLER_INVOKED__4230551610() {
    init_properties_AbstractChannel_kt_2931858707();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function _get_receive__1317291150($this) {
    unreachableDeclarationLog();
    return $this.receive_1;
  }
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.closeCause_1 == null))
        throw recoverStackTrace_0(result._get_receiveException__3346508703_foorc1_k$());
      return false;
    } else {
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    $l$block_6: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1_1682274507));
      var tmp$ret$0;
      $l$block_5: {
        var receive_4 = new ReceiveHasNext($this, cancellable_2_2);
        while (true) {
          if (enqueueReceive($this.channel_1, receive_4)) {
            removeReceiveOnCancel($this.channel_1, cancellable_2_2, receive_4);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_5;
          }
          var result_5 = $this.channel_1.pollInternal_ml771g_k$();
          $this.result_1 = result_5;
          if (result_5 instanceof Closed) {
            if (result_5.closeCause_1 == null) {
              var tmp$ret$2;
              $l$block_1: {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_success_0_1_6 = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__2241242780(false);
                  break $l$block_0;
                }
                tmp$ret$2 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$1);
                break $l$block_1;
              }
            } else {
              var tmp$ret$4;
              $l$block_3: {
                var tmp0_resumeWithException_0_7 = result_5._get_receiveException__3346508703_foorc1_k$();
                var tmp$ret$3;
                $l$block_2: {
                  var tmp0_failure_0_1_8 = Companion_getInstance();
                  tmp$ret$3 = _Result___init__impl__2241242780(createFailure(tmp0_resumeWithException_0_7));
                  break $l$block_2;
                }
                tmp$ret$4 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$3);
                break $l$block_3;
              }
            }
            tmp$ret$0 = Unit_getInstance();
            break $l$block_5;
          } else {
          }
          if (!(result_5 === _get_POLL_FAILED__3177529460())) {
            var tmp0_safe_receiver_9 = $this.channel_1._get_onUndeliveredElement__2967995291_ly1m5h_k$();
            var tmp;
            if (tmp0_safe_receiver_9 == null) {
              tmp = null;
            } else {
              tmp = bindCancellationFun(tmp0_safe_receiver_9, (result_5 == null ? true : isObject(result_5)) ? result_5 : THROW_CCE(), cancellable_2_2._get_context__1558698818_ps0bpe_k$());
            }
            cancellable_2_2.resume_l1w5in_k$(true, tmp);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_5;
          }
        }
      }
      tmp$ret$5 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_6;
    }
    return tmp$ret$5;
  }
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    $l$block_2: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1_1682274507));
      var tmp$ret$0;
      $l$block_1: {
        var tmp;
        if ($this._get_onUndeliveredElement__2967995291_ly1m5h_k$() == null) {
          tmp = new ReceiveElement(isInterface(cancellable_2_2, CancellableContinuation) ? cancellable_2_2 : THROW_CCE(), receiveMode);
        } else {
          tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable_2_2, CancellableContinuation) ? cancellable_2_2 : THROW_CCE(), receiveMode, $this._get_onUndeliveredElement__2967995291_ly1m5h_k$());
        }
        var receive_4 = tmp;
        while (true) {
          if (enqueueReceive($this, receive_4)) {
            removeReceiveOnCancel($this, cancellable_2_2, receive_4);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          var result_5 = $this.pollInternal_ml771g_k$();
          if (result_5 instanceof Closed) {
            receive_4.resumeReceiveClosed_ep2qlw_k$(result_5);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          } else {
          }
          if (!(result_5 === _get_POLL_FAILED__3177529460())) {
            var tmp_0 = receive_4.resumeValue_nsekne_k$((result_5 == null ? true : isObject(result_5)) ? result_5 : THROW_CCE());
            cancellable_2_2.resume_l1w5in_k$(tmp_0, receive_4.resumeOnCancellationFun_ya26h6_k$((result_5 == null ? true : isObject(result_5)) ? result_5 : THROW_CCE()));
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      tmp$ret$1 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_2;
    }
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = $this.enqueueReceiveInternal_rxtsl7_k$(receive);
      {
      }
      {
        if (tmp0_also_0)
          $this.onReceiveEnqueued_xu1a6p_k$();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function TryPollDesc(queue) {
    unreachableDeclarationLog();
    RemoveFirstDesc.call(this, queue);
  }
  TryPollDesc.prototype.failure_mowj19_k$ = function (affected) {
    unreachableDeclarationLog();
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!(tmp0_subject instanceof Send)) {
        tmp = _get_POLL_FAILED__3177529460();
      } else {
        {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  TryPollDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    unreachableDeclarationLog();
    var tmp = prepareOp._get_affected__2948029399_m9xjxl_k$();
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeSend_93c6it_k$(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return _get_REMOVE_PREPARED__1435037049();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === _get_RETRY_ATOMIC__2660021705())
      return _get_RETRY_ATOMIC__2660021705();
    {
    }
    return null;
  };
  TryPollDesc.prototype.onRemoved_gagg6z_k$ = function (affected) {
    unreachableDeclarationLog();
    (affected instanceof Send ? affected : THROW_CCE()).undeliveredElement_djsee8_k$();
  };
  TryPollDesc.$metadata$ = {
    simpleName: 'TryPollDesc',
    kind: 'class',
    interfaces: []
  };
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    unreachableDeclarationLog();
    while (true) {
      if (select._get_isSelected__1871115078_uy0hmu_k$())
        return Unit_getInstance();
      if ($this._get_isEmptyImpl__2745789166_pmc9hu_k$()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.pollSelectInternal_puj25v_k$(select);
        if (pollResult === _get_ALREADY_SELECTED__454812745())
          return Unit_getInstance();
        else if (pollResult === _get_POLL_FAILED__3177529460()) {
        } else if (pollResult === _get_RETRY_ATOMIC__2660021705()) {
        } else
          tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
      }
    }
  }
  function tryStartBlockUnintercepted(_this__1828080292, $this, select, receiveMode, value) {
    unreachableDeclarationLog();
    var tmp0_subject = value;
    if (tmp0_subject instanceof Closed) {
      var tmp1_subject = receiveMode;
      if (tmp1_subject === 0) {
        throw recoverStackTrace_0(value._get_receiveException__3346508703_foorc1_k$());
      } else if (tmp1_subject === 1) {
        if (!select.trySelect_1ivjiv_k$())
          return Unit_getInstance();
        startCoroutineUnintercepted_0(_this__1828080292, new ChannelResult(Companion_getInstance_1().closed_o16byb_k$(value.closeCause_1)), select._get_completion__2811226159_ojdpzl_k$());
      }
    } else {
      {
        if (receiveMode === 1) {
          var tmp$ret$0;
          $l$block: {
            var tmp;
            if (value instanceof Closed) {
              tmp = Companion_getInstance_1().closed_o16byb_k$(value.closeCause_1);
            } else {
              {
                var tmp_0 = Companion_getInstance_1();
                tmp = tmp_0.success_prl0f3_k$((value == null ? true : isObject(value)) ? value : THROW_CCE());
              }
            }
            tmp$ret$0 = tmp;
            break $l$block;
          }
          startCoroutineUnintercepted_0(_this__1828080292, new ChannelResult(tmp$ret$0), select._get_completion__2811226159_ojdpzl_k$());
        } else {
          startCoroutineUnintercepted_0(_this__1828080292, value, select._get_completion__2811226159_ojdpzl_k$());
        }
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    unreachableDeclarationLog();
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result)
      select.disposeOnSelect_lrl426_k$(node);
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new RemoveReceiveOnCancel($this, receive);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return cont.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.receive_1.remove_fgfybg_k$())
      this.$this_1.onReceiveDequeued_4wpjax_k$();
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = {
    simpleName: 'RemoveReceiveOnCancel',
    kind: 'class',
    interfaces: []
  };
  function Itr(channel) {
    this.channel_1 = channel;
    this.result_1 = _get_POLL_FAILED__3177529460();
  }
  Itr.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    unreachableDeclarationLog();
    return this.channel_1;
  };
  Itr.prototype._set_result__3294305178_pdhepi_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.result_1 = _set____804775014;
  };
  Itr.prototype._get_result__3382885006_f31376_k$ = function () {
    unreachableDeclarationLog();
    return this.result_1;
  };
  Itr.prototype.hasNext_4tgia2_k$ = function ($cont) {
    if (!(this.result_1 === _get_POLL_FAILED__3177529460()))
      return hasNextResult(this, this.result_1);
    this.result_1 = this.channel_1.pollInternal_ml771g_k$();
    if (!(this.result_1 === _get_POLL_FAILED__3177529460()))
      return hasNextResult(this, this.result_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.next_20eer_k$ = function () {
    var result = this.result_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result._get_receiveException__3346508703_foorc1_k$());
    else {
    }
    if (!(result === _get_POLL_FAILED__3177529460())) {
      this.result_1 = _get_POLL_FAILED__3177529460();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = {
    simpleName: 'Itr',
    kind: 'class',
    interfaces: [ChannelIterator]
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont_1 = cont;
    this.receiveMode_1 = receiveMode;
  }
  ReceiveElement.prototype._get_cont__794428761_d4zd5l_k$ = function () {
    return this.cont_1;
  };
  ReceiveElement.prototype._get_receiveMode__865773355_ebgizv_k$ = function () {
    unreachableDeclarationLog();
    return this.receiveMode_1;
  };
  ReceiveElement.prototype.resumeValue_nsekne_k$ = function (value) {
    var tmp0_subject = this.receiveMode_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().success_prl0f3_k$(value)) : value;
  };
  ReceiveElement.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.resumeValue_nsekne_k$(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_desc__795058650_d5cv6i_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
    return _get_RESUME_TOKEN__2573897444();
  };
  ReceiveElement.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    return this.cont_1.completeResume_fu4ex_k$(_get_RESUME_TOKEN__2573897444());
  };
  ReceiveElement.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (this.receiveMode_1 === 1) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_resume_0 = this.cont_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Companion_getInstance_1().closed_o16byb_k$(closed.closeCause_1);
          break $l$block;
        }
        var tmp1_resume_0 = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_success_0_1 = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__2241242780(new ChannelResult(tmp1_resume_0));
          break $l$block_0;
        }
        tmp$ret$2 = tmp0_resume_0.resumeWith_s3a3yh_k$(tmp$ret$1);
        break $l$block_1;
      }
    } else {
      var tmp$ret$4;
      $l$block_3: {
        var tmp2_resumeWithException_0 = this.cont_1;
        var tmp3_resumeWithException_0 = closed._get_receiveException__3346508703_foorc1_k$();
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_failure_0_1 = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__2241242780(createFailure(tmp3_resumeWithException_0));
          break $l$block_2;
        }
        tmp$ret$4 = tmp2_resumeWithException_0.resumeWith_s3a3yh_k$(tmp$ret$3);
        break $l$block_3;
      }
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + _get_hexAddress__2831015762(this) + '[receiveMode=' + this.receiveMode_1 + ']';
  };
  ReceiveElement.$metadata$ = {
    simpleName: 'ReceiveElement',
    kind: 'class',
    interfaces: []
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype._get_onUndeliveredElement__2967995291_ly1m5h_k$ = function () {
    unreachableDeclarationLog();
    return this.onUndeliveredElement_1;
  };
  ReceiveElementWithUndeliveredHandler.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement_1, value, this._get_cont__794428761_d4zd5l_k$()._get_context__1558698818_ps0bpe_k$());
  };
  ReceiveElementWithUndeliveredHandler.$metadata$ = {
    simpleName: 'ReceiveElementWithUndeliveredHandler',
    kind: 'class',
    interfaces: []
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator_1 = iterator;
    this.cont_1 = cont;
  }
  ReceiveHasNext.prototype._get_iterator__3780642077_8i7rvn_k$ = function () {
    unreachableDeclarationLog();
    return this.iterator_1;
  };
  ReceiveHasNext.prototype._get_cont__794428761_d4zd5l_k$ = function () {
    unreachableDeclarationLog();
    return this.cont_1;
  };
  ReceiveHasNext.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_desc__795058650_d5cv6i_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
    return _get_RESUME_TOKEN__2573897444();
  };
  ReceiveHasNext.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    this.iterator_1.result_1 = value;
    this.cont_1.completeResume_fu4ex_k$(_get_RESUME_TOKEN__2573897444());
  };
  ReceiveHasNext.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    var tmp;
    if (closed.closeCause_1 == null) {
      tmp = this.cont_1.tryResume$default_sti3on_k$(false, null, 2, null);
    } else {
      tmp = this.cont_1.tryResumeWithException_3icka9_k$(closed._get_receiveException__3346508703_foorc1_k$());
    }
    var token = tmp;
    if (!(token == null)) {
      this.iterator_1.result_1 = closed;
      this.cont_1.completeResume_fu4ex_k$(token);
    }
  };
  ReceiveHasNext.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.iterator_1.channel_1._get_onUndeliveredElement__2967995291_ly1m5h_k$();
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.cont_1._get_context__1558698818_ps0bpe_k$());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + _get_hexAddress__2831015762(this);
  };
  ReceiveHasNext.$metadata$ = {
    simpleName: 'ReceiveHasNext',
    kind: 'class',
    interfaces: []
  };
  function ReceiveSelect(channel, select, block, receiveMode) {
    unreachableDeclarationLog();
    Receive.call(this);
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
    this.receiveMode_1 = receiveMode;
  }
  ReceiveSelect.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    unreachableDeclarationLog();
    return this.channel_1;
  };
  ReceiveSelect.prototype._get_select__4263438735_irrld_k$ = function () {
    unreachableDeclarationLog();
    return this.select_1;
  };
  ReceiveSelect.prototype._get_block__3121070308_jewopo_k$ = function () {
    unreachableDeclarationLog();
    return this.block_1;
  };
  ReceiveSelect.prototype._get_receiveMode__865773355_ebgizv_k$ = function () {
    unreachableDeclarationLog();
    return this.receiveMode_1;
  };
  ReceiveSelect.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    unreachableDeclarationLog();
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  ReceiveSelect.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    unreachableDeclarationLog();
    startCoroutineCancellable(this.block_1, this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_prl0f3_k$(value)) : value, this.select_1._get_completion__2811226159_ojdpzl_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
  };
  ReceiveSelect.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    unreachableDeclarationLog();
    if (!this.select_1.trySelect_1ivjiv_k$())
      return Unit_getInstance();
    var tmp0_subject = this.receiveMode_1;
    if (tmp0_subject === 0)
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed._get_receiveException__3346508703_foorc1_k$());
    else if (tmp0_subject === 1) {
      var tmp = new ChannelResult(Companion_getInstance_1().closed_o16byb_k$(closed.closeCause_1));
      var tmp_0 = this.select_1._get_completion__2811226159_ojdpzl_k$();
      startCoroutineCancellable$default(this.block_1, tmp, tmp_0, null, 4, null);
    }
  };
  ReceiveSelect.prototype.dispose_3n44we_k$ = function () {
    unreachableDeclarationLog();
    if (this.remove_fgfybg_k$())
      this.channel_1.onReceiveDequeued_4wpjax_k$();
  };
  ReceiveSelect.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = this.channel_1._get_onUndeliveredElement__2967995291_ly1m5h_k$();
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.select_1._get_completion__2811226159_ojdpzl_k$()._get_context__1558698818_ps0bpe_k$());
  };
  ReceiveSelect.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'ReceiveSelect@' + _get_hexAddress__2831015762(this) + '[' + this.select_1 + ',receiveMode=' + this.receiveMode_1 + ']';
  };
  ReceiveSelect.$metadata$ = {
    simpleName: 'ReceiveSelect',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function AbstractChannel$onReceive$1(this$0) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
  }
  AbstractChannel$onReceive$1.prototype.registerSelectClause1_letqps_k$ = function (select, block) {
    unreachableDeclarationLog();
    registerSelectReceiveMode(this.this$0__1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  AbstractChannel$onReceive$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause1_letqps_k$(select, block);
  };
  AbstractChannel$onReceive$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectClause1]
  };
  function AbstractChannel$onReceiveCatching$1(this$0) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
  }
  AbstractChannel$onReceiveCatching$1.prototype.registerSelectClause1_a8859q_k$ = function (select, block) {
    unreachableDeclarationLog();
    registerSelectReceiveMode(this.this$0__1, select, 1, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  AbstractChannel$onReceiveCatching$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause1_a8859q_k$(select, block);
  };
  AbstractChannel$onReceiveCatching$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectClause1]
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.pollInternal_ml771g_k$ = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return _get_POLL_FAILED__3177529460();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_93c6it_k$(null);
      if (!(token == null)) {
        {
        }
        send.completeResumeSend_upvqar_k$();
        return send._get_pollResult__2751014735_pj89f5_k$();
      }
      send.undeliveredElement_djsee8_k$();
    }
  };
  AbstractChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    unreachableDeclarationLog();
    var pollOp = this.describeTryPoll_k2m4a9_k$();
    var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp._get_result__3382885006_f31376_k$();
    send.completeResumeSend_upvqar_k$();
    return pollOp._get_result__3382885006_f31376_k$()._get_pollResult__2751014735_pj89f5_k$();
  };
  AbstractChannel.prototype._get_hasReceiveOrClosed__2582139731_sbru7h_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = this._get_queue__3558538464_c6g84g_k$();
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return isInterface(tmp, ReceiveOrClosed);
  };
  AbstractChannel.prototype._get_isClosedForReceive__1553697755_pp14uz_k$ = function () {
    return !(this._get_closedForReceive__439029541_79dxd1_k$() == null) ? this._get_isBufferEmpty__1598887886_qfxpse_k$() : false;
  };
  AbstractChannel.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    return this._get_isEmptyImpl__2745789166_pmc9hu_k$();
  };
  AbstractChannel.prototype._get_isEmptyImpl__2745789166_pmc9hu_k$ = function () {
    unreachableDeclarationLog();
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = this._get_queue__3558538464_c6g84g_k$();
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    if (!(tmp_0 instanceof Send)) {
      tmp = this._get_isBufferEmpty__1598887886_qfxpse_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AbstractChannel.prototype.receive_ihhf9g_k$ = function ($cont) {
    var result = this.pollInternal_ml771g_k$();
    var tmp;
    if (!(result === _get_POLL_FAILED__3177529460())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    } else {
    }
    return receiveSuspend(this, 0, $cont);
  };
  AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp;
    if (this._get_isBufferAlwaysEmpty__2600692989_s0q6f7_k$()) {
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_addLastIfPrev_0 = this._get_queue__3558538464_c6g84g_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_addLastIfPrev_0._get__prev__3038968575_krsetd_k$();
          tmp$ret$0 = !(tmp1__anonymous__1_4003154330 instanceof Send);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
        }
        tmp0_addLastIfPrev_0.addLast_uyctnf_k$(receive);
        tmp$ret$1 = true;
        break $l$block_1;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_6: {
        var tmp2_addLastIfPrevAndIf_0 = this._get_queue__3558538464_c6g84g_k$();
        var tmp$ret$2;
        $l$block_2: {
          var tmp3__anonymous__1_2723290652 = tmp2_addLastIfPrevAndIf_0._get__prev__3038968575_krsetd_k$();
          tmp$ret$2 = !(tmp3__anonymous__1_2723290652 instanceof Send);
          break $l$block_2;
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_6;
        } else {
        }
        var tmp$ret$4;
        $l$block_4: {
          tmp$ret$4 = this._get_isBufferEmpty__1598887886_qfxpse_k$();
          break $l$block_4;
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_6;
        } else {
        }
        tmp2_addLastIfPrevAndIf_0.addLast_uyctnf_k$(receive);
        tmp$ret$3 = true;
        break $l$block_6;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.receiveCatching_wrys2l_k$ = function ($cont) {
    unreachableDeclarationLog();
    var result = this.pollInternal_ml771g_k$();
    if (!(result === _get_POLL_FAILED__3177529460())) {
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_o16byb_k$(result.closeCause_1);
        } else {
          {
            var tmp_0 = Companion_getInstance_1();
            tmp = tmp_0.success_prl0f3_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
          }
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $cont);
    if (tmp_1 === _get_COROUTINE_SUSPENDED__2870145053())
      return tmp_1;
    return new ChannelResult(tmp_1.holder_1);
  };
  AbstractChannel.prototype.tryReceive_5r5v2p_k$ = function () {
    var result = this.pollInternal_ml771g_k$();
    if (result === _get_POLL_FAILED__3177529460())
      return Companion_getInstance_1().failure_qsocya_k$();
    if (result instanceof Closed)
      return Companion_getInstance_1().closed_o16byb_k$(result.closeCause_1);
    else {
    }
    var tmp = Companion_getInstance_1();
    return tmp.success_prl0f3_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  AbstractChannel.prototype.cancel_as6ug7_k$ = function (cause) {
    unreachableDeclarationLog();
    return this.cancelInternal_vex9ac_k$(cause);
  };
  AbstractChannel.prototype.cancel_4b7aim_k$ = function (cause) {
    if (this._get_isClosedForReceive__1553697755_pp14uz_k$())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.cancelInternal_vex9ac_k$(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(_get_classSimpleName__3937513404(this) + ' was cancelled') : tmp0_elvis_lhs);
    Unit_getInstance();
  };
  AbstractChannel.prototype.cancelInternal_vex9ac_k$ = function (cause) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = this.close_9zy44b_k$(cause);
      {
      }
      {
        this.onCancelIdempotent_1zp8pj_k$(tmp0_also_0);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var tmp0_elvis_lhs = this._get_closedForSend__3129148556_ja3jhw_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__4235777494_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = closed._get__prev__3038968575_krsetd_k$();
        break $l$block;
      }
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      } else {
      }
      {
      }
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_2853164860(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.onCancelIdempotentList_icdvp_k$(list, closed);
  };
  AbstractChannel.prototype.onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject_1 = _get_holder__3377096415(list);
      if (tmp0_subject_1 == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject_1 instanceof ArrayList)) {
          var tmp = _get_holder__3377096415(list);
          var tmp0__anonymous__5_2495602525 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__5_2495602525.resumeSendClosed_r0hgr7_k$(closed);
        } else {
          {
            var tmp_0 = _get_holder__3377096415(list);
            var list_2 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
            var inductionVariable = list_2._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (0 <= inductionVariable)
              do {
                var i_4 = inductionVariable;
                inductionVariable = inductionVariable + -1 | 0;
                {
                  var tmp1__anonymous__5_4003154334 = list_2.get_fkrdnv_k$(i_4);
                  tmp1__anonymous__5_4003154334.resumeSendClosed_r0hgr7_k$(closed);
                }
              }
               while (0 <= inductionVariable);
          }
        }
      }
    }
  };
  AbstractChannel.prototype.iterator_jk1svi_k$ = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.describeTryPoll_k2m4a9_k$ = function () {
    unreachableDeclarationLog();
    return new TryPollDesc(this._get_queue__3558538464_c6g84g_k$());
  };
  AbstractChannel.prototype._get_onReceive__653459149_at1wb1_k$ = function () {
    unreachableDeclarationLog();
    return new AbstractChannel$onReceive$1(this);
  };
  AbstractChannel.prototype._get_onReceiveCatching__2662833478_qzqaii_k$ = function () {
    unreachableDeclarationLog();
    return new AbstractChannel$onReceiveCatching$1(this);
  };
  AbstractChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$.call(this);
      {
      }
      {
        var tmp;
        if (!(tmp0_also_0 == null)) {
          tmp = !(tmp0_also_0 instanceof Closed);
        } else {
          tmp = false;
        }
        if (tmp)
          this.onReceiveDequeued_4wpjax_k$();
        else {
        }
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.onReceiveEnqueued_xu1a6p_k$ = function () {
  };
  AbstractChannel.prototype.onReceiveDequeued_4wpjax_k$ = function () {
  };
  AbstractChannel.$metadata$ = {
    simpleName: 'AbstractChannel',
    kind: 'class',
    interfaces: [Channel]
  };
  function _get_onCloseHandler__1215537786($this) {
    unreachableDeclarationLog();
    return $this.onCloseHandler_1;
  }
  function SendBufferedDesc(queue, element) {
    unreachableDeclarationLog();
    AddLastDesc.call(this, queue, new SendBuffered(element));
  }
  SendBufferedDesc.prototype.failure_mowj19_k$ = function (affected) {
    unreachableDeclarationLog();
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = _get_OFFER_FAILED__676838827();
      } else {
        {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  SendBufferedDesc.$metadata$ = {
    simpleName: 'SendBufferedDesc',
    kind: 'class',
    interfaces: []
  };
  function _get_isFullImpl__1889575698($this) {
    unreachableDeclarationLog();
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = $this.queue_1;
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this._get_isBufferFull__1576755378_q2rc8i_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed._get_sendException__1338625034_m4zdoq_k$();
  }
  function helpCloseAndGetSendException_0($this, element, closed) {
    unreachableDeclarationLog();
    helpClose($this, closed);
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        addSuppressed(tmp1_safe_receiver, closed._get_sendException__1338625034_m4zdoq_k$());
        throw tmp1_safe_receiver;
      }
    }
    Unit_getInstance();
    return closed._get_sendException__1338625034_m4zdoq_k$();
  }
  function sendSuspend($this, element, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$3;
    $l$block_5: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1_1682274507));
      var tmp$ret$0;
      $l$block_4: {
        loop: while (true) {
          if (_get_isFullImpl__1889575698($this)) {
            var send_4 = $this.onUndeliveredElement_1 == null ? new SendElement(element, cancellable_2_2) : new SendElementWithUndeliveredHandler(element, cancellable_2_2, $this.onUndeliveredElement_1);
            var enqueueResult_5 = $this.enqueueSend_9ksp3t_k$(send_4);
            if (enqueueResult_5 == null) {
              removeOnCancellation(cancellable_2_2, send_4);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_4;
            } else {
              if (enqueueResult_5 instanceof Closed) {
                helpCloseAndResumeWithSendException(cancellable_2_2, $this, element, enqueueResult_5);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_4;
              } else {
                if (enqueueResult_5 === _get_ENQUEUE_FAILED__2229156375()) {
                } else {
                  if (enqueueResult_5 instanceof Receive) {
                  } else {
                    {
                      var tmp0_error_0_6 = 'enqueueSend returned ' + toString(enqueueResult_5);
                      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_6));
                    }
                  }
                }
              }
            }
          }
          var offerResult_7 = $this.offerInternal_tuzlq7_k$(element);
          if (offerResult_7 === _get_OFFER_SUCCESS__1078998001()) {
            var tmp$ret$2;
            $l$block_2: {
              var tmp$ret$1;
              $l$block_1: {
                var tmp0_success_0_1_8 = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__2241242780(Unit_getInstance());
                break $l$block_1;
              }
              tmp$ret$2 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$1);
              break $l$block_2;
            }
            tmp$ret$0 = Unit_getInstance();
            break $l$block_4;
          } else {
            if (offerResult_7 === _get_OFFER_FAILED__676838827())
              continue loop;
            else {
              if (offerResult_7 instanceof Closed) {
                helpCloseAndResumeWithSendException(cancellable_2_2, $this, element, offerResult_7);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_4;
              } else {
                {
                  var tmp1_error_0_9 = 'offerInternal returned ' + toString_0(offerResult_7);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_9));
                }
              }
            }
          }
        }
      }
      tmp$ret$3 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_5;
    }
    return tmp$ret$3;
  }
  function helpCloseAndResumeWithSendException(_this__1828080292, $this, element, closed) {
    unreachableDeclarationLog();
    helpClose($this, closed);
    var sendException = closed._get_sendException__1338625034_m4zdoq_k$();
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        addSuppressed(tmp1_safe_receiver, sendException);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_1_2 = Companion_getInstance();
            tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_safe_receiver));
            break $l$block;
          }
          tmp$ret$1 = _this__1828080292.resumeWith_s3a3yh_k$(tmp$ret$0);
          break $l$block_0;
        }
        return Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp$ret$4;
    $l$block_2: {
      var tmp$ret$3;
      $l$block_1: {
        var tmp0_failure_0_1 = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__2241242780(createFailure(sendException));
        break $l$block_1;
      }
      tmp$ret$4 = _this__1828080292.resumeWith_s3a3yh_k$(tmp$ret$3);
      break $l$block_2;
    }
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.onCloseHandler_1._get_value__3683422336_a43j40_k$();
    if ((!(handler === null) ? !(handler === _get_HANDLER_INVOKED__4230551610()) : false) ? $this.onCloseHandler_1.atomicfu$compareAndSet(handler, _get_HANDLER_INVOKED__4230551610()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__4235777494_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = closed._get__prev__3038968575_krsetd_k$();
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_2853164860(closedList, previous);
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_forEachReversed_0 = closedList;
      var tmp0_subject_1 = _get_holder__3377096415(tmp0_forEachReversed_0);
      if (tmp0_subject_1 == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      } else {
        if (!(tmp0_subject_1 instanceof ArrayList)) {
          var tmp_1 = _get_holder__3377096415(tmp0_forEachReversed_0);
          var tmp1__anonymous__5_4003154334 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__5_4003154334.resumeReceiveClosed_ep2qlw_k$(closed);
        } else {
          {
            var tmp_2 = _get_holder__3377096415(tmp0_forEachReversed_0);
            var list_2 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
            var inductionVariable = list_2._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (0 <= inductionVariable)
              do {
                var i_4 = inductionVariable;
                inductionVariable = inductionVariable + -1 | 0;
                {
                  var tmp2__anonymous__5_1215738847 = list_2.get_fkrdnv_k$(i_4);
                  tmp2__anonymous__5_1215738847.resumeReceiveClosed_ep2qlw_k$(closed);
                }
              }
               while (0 <= inductionVariable);
          }
        }
      }
    }
    $this.onClosedIdempotent_57xn14_k$(closed);
  }
  function TryOfferDesc(element, queue) {
    unreachableDeclarationLog();
    RemoveFirstDesc.call(this, queue);
    this.element_1 = element;
  }
  TryOfferDesc.prototype._get_element__2117671829_z0t21h_k$ = function () {
    unreachableDeclarationLog();
    return this.element_1;
  };
  TryOfferDesc.prototype.failure_mowj19_k$ = function (affected) {
    unreachableDeclarationLog();
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = _get_OFFER_FAILED__676838827();
      } else {
        {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  TryOfferDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    unreachableDeclarationLog();
    var tmp = prepareOp._get_affected__2948029399_m9xjxl_k$();
    var affected = isInterface(tmp, ReceiveOrClosed) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeReceive_mpjrre_k$(this.element_1, prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return _get_REMOVE_PREPARED__1435037049();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === _get_RETRY_ATOMIC__2660021705())
      return _get_RETRY_ATOMIC__2660021705();
    {
    }
    return null;
  };
  TryOfferDesc.$metadata$ = {
    simpleName: 'TryOfferDesc',
    kind: 'class',
    interfaces: []
  };
  function registerSelectSend($this, select, element, block) {
    unreachableDeclarationLog();
    while (true) {
      if (select._get_isSelected__1871115078_uy0hmu_k$())
        return Unit_getInstance();
      if (_get_isFullImpl__1889575698($this)) {
        var node = new SendSelect(element, $this, select, block);
        var enqueueResult = $this.enqueueSend_9ksp3t_k$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_lrl426_k$(node);
          return Unit_getInstance();
        } else {
          if (enqueueResult instanceof Closed)
            throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, enqueueResult));
          else {
            if (enqueueResult === _get_ENQUEUE_FAILED__2229156375()) {
            } else {
              if (enqueueResult instanceof Receive) {
              } else {
                {
                  var tmp0_error_0 = 'enqueueSend returned ' + toString(enqueueResult) + ' ';
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
                }
              }
            }
          }
        }
      }
      var offerResult = $this.offerSelectInternal_lspj9s_k$(element, select);
      if (offerResult === _get_ALREADY_SELECTED__454812745())
        return Unit_getInstance();
      else {
        if (offerResult === _get_OFFER_FAILED__676838827()) {
        } else {
          if (offerResult === _get_RETRY_ATOMIC__2660021705()) {
          } else {
            if (offerResult === _get_OFFER_SUCCESS__1078998001()) {
              startCoroutineUnintercepted_0(block, $this, select._get_completion__2811226159_ojdpzl_k$());
              return Unit_getInstance();
            } else {
              if (offerResult instanceof Closed)
                throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, offerResult));
              else {
                {
                  var tmp1_error_0 = 'offerSelectInternal returned ' + toString_0(offerResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
                }
              }
            }
          }
        }
      }
    }
  }
  function _get_queueDebugStateString__1221992177($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = $this.queue_1;
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var head = tmp$ret$0;
    if (head === $this.queue_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          {
            tmp = 'UNEXPECTED:' + head;
          }
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp1__get_prevNode__0_2635487596 = $this.queue_1;
      tmp$ret$1 = tmp1__get_prevNode__0_2635487596._get__prev__3038968575_krsetd_k$();
      break $l$block_0;
    }
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
      else {
      }
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    {
      var tmp0_forEach_0 = $this.queue_1;
      var cur_1 = tmp0_forEach_0._get__next__3036752447_kt3wsh_k$();
      while (!equals(cur_1, tmp0_forEach_0)) {
        if (cur_1 instanceof LinkedListNode) {
          var tmp1__anonymous__2_4003154331 = cur_1;
          var tmp0_3 = size;
          size = tmp0_3 + 1 | 0;
          Unit_getInstance();
        } else {
        }
        cur_1 = cur_1._get__next__3036752447_kt3wsh_k$();
      }
    }
    return size;
  }
  function SendSelect(pollResult, channel, select, block) {
    unreachableDeclarationLog();
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
  }
  SendSelect.prototype._get_pollResult__2751014735_pj89f5_k$ = function () {
    unreachableDeclarationLog();
    return this.pollResult_1;
  };
  SendSelect.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    unreachableDeclarationLog();
    return this.channel_1;
  };
  SendSelect.prototype._get_select__4263438735_irrld_k$ = function () {
    unreachableDeclarationLog();
    return this.select_1;
  };
  SendSelect.prototype._get_block__3121070308_jewopo_k$ = function () {
    unreachableDeclarationLog();
    return this.block_1;
  };
  SendSelect.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    unreachableDeclarationLog();
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  SendSelect.prototype.completeResumeSend_upvqar_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.select_1._get_completion__2811226159_ojdpzl_k$();
    startCoroutineCancellable$default(this.block_1, this.channel_1, tmp, null, 4, null);
  };
  SendSelect.prototype.dispose_3n44we_k$ = function () {
    unreachableDeclarationLog();
    if (!this.remove_fgfybg_k$())
      return Unit_getInstance();
    this.undeliveredElement_djsee8_k$();
  };
  SendSelect.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    unreachableDeclarationLog();
    if (this.select_1.trySelect_1ivjiv_k$())
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed._get_sendException__1338625034_m4zdoq_k$());
  };
  SendSelect.prototype.undeliveredElement_djsee8_k$ = function () {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, this.pollResult_1, this.select_1._get_completion__2811226159_ojdpzl_k$()._get_context__1558698818_ps0bpe_k$());
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  SendSelect.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'SendSelect@' + _get_hexAddress__2831015762(this) + '(' + this.pollResult_1 + ')[' + this.channel_1 + ', ' + this.select_1 + ']';
  };
  SendSelect.$metadata$ = {
    simpleName: 'SendSelect',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function SendBuffered(element) {
    Send.call(this);
    this.element_1 = element;
  }
  SendBuffered.prototype._get_element__2117671829_z0t21h_k$ = function () {
    return this.element_1;
  };
  SendBuffered.prototype._get_pollResult__2751014735_pj89f5_k$ = function () {
    return this.element_1;
  };
  SendBuffered.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = _get_RESUME_TOKEN__2573897444();
      {
      }
      {
        var tmp0_safe_receiver_2 = otherOp;
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          tmp0_safe_receiver_2.finishPrepare_o9c8d9_k$();
          Unit_getInstance();
        }
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  SendBuffered.prototype.completeResumeSend_upvqar_k$ = function () {
  };
  SendBuffered.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    {
    }
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + _get_hexAddress__2831015762(this) + '(' + this.element_1 + ')';
  };
  SendBuffered.$metadata$ = {
    simpleName: 'SendBuffered',
    kind: 'class',
    interfaces: []
  };
  function AbstractSendChannel$onSend$1(this$0) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
  }
  AbstractSendChannel$onSend$1.prototype.registerSelectClause2_tx9czq_k$ = function (select, param, block) {
    unreachableDeclarationLog();
    registerSelectSend(this.this$0__1, select, param, block);
  };
  AbstractSendChannel$onSend$1.prototype.registerSelectClause2_2icbei_k$ = function (select, param, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause2_tx9czq_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  AbstractSendChannel$onSend$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectClause2]
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_1 = onUndeliveredElement;
    this.queue_1 = new LinkedListHead();
    this.onCloseHandler_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype._get_onUndeliveredElement__2967995291_ly1m5h_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  AbstractSendChannel.prototype._get_queue__3558538464_c6g84g_k$ = function () {
    return this.queue_1;
  };
  AbstractSendChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return _get_OFFER_FAILED__676838827();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_mpjrre_k$(element, null);
      if (!(token == null)) {
        {
        }
        receive.completeResumeReceive_1cyi5u_k$(element);
        return receive._get_offerResult__3337311000_fu5wbs_k$();
      }
    }
  };
  AbstractSendChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    unreachableDeclarationLog();
    var offerOp = this.describeTryOffer_6o0iky_k$(element);
    var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
    if (!(failure == null))
      return failure;
    var receive = offerOp._get_result__3382885006_f31376_k$();
    receive.completeResumeReceive_1cyi5u_k$(element);
    return receive._get_offerResult__3337311000_fu5wbs_k$();
  };
  AbstractSendChannel.prototype._get_closedForSend__3129148556_ja3jhw_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_prevNode__0_3632559949 = this.queue_1;
      tmp$ret$0 = tmp0__get_prevNode__0_3632559949._get__prev__3038968575_krsetd_k$();
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
        break $l$block_0;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype._get_closedForReceive__439029541_79dxd1_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = this.queue_1;
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
        break $l$block_0;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.takeFirstSendOrPeekClosed_h7sgez_k$ = function () {
    var tmp$ret$0;
    $l$block_4: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf_0 = this.queue_1;
      var next_1 = tmp1_removeFirstIfIsInstanceOfOrPeekIf_0._get__next__3036752447_kt3wsh_k$();
      if (next_1 === tmp1_removeFirstIfIsInstanceOfOrPeekIf_0) {
        tmp$ret$0 = null;
        break $l$block_4;
      }
      if (!(next_1 instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_4;
      } else {
      }
      var tmp$ret$1;
      $l$block_1: {
        var tmp2__anonymous__3_1215738845 = next_1;
        tmp$ret$1 = tmp2__anonymous__3_1215738845 instanceof Closed;
        break $l$block_1;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next_1;
        break $l$block_4;
      } else {
      }
      {
        var tmp0_check_0 = next_1.removeImpl_i5v938_k$();
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$2;
          $l$block_3: {
            tmp$ret$2 = 'Should remove';
            break $l$block_3;
          }
          var message_1 = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message_1));
        }
      }
      tmp$ret$0 = next_1;
      break $l$block_4;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.sendBuffered_4b6ooj_k$ = function (element) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_addLastIfPrev_0 = this.queue_1;
      var tmp1_addLastIfPrev_0 = new SendBuffered(element);
      var tmp$ret$0;
      $l$block: {
        var tmp2__anonymous__1_1215738843 = tmp0_addLastIfPrev_0._get__prev__3038968575_krsetd_k$();
        if (isInterface(tmp2__anonymous__1_1215738843, ReceiveOrClosed))
          return tmp2__anonymous__1_1215738843;
        else {
        }
        tmp$ret$0 = true;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      tmp0_addLastIfPrev_0.addLast_uyctnf_k$(tmp1_addLastIfPrev_0);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    Unit_getInstance();
    return null;
  };
  AbstractSendChannel.prototype.describeSendBuffered_gmw7y0_k$ = function (element) {
    unreachableDeclarationLog();
    return new SendBufferedDesc(this.queue_1, element);
  };
  AbstractSendChannel.prototype._get_isClosedForSend__3422860182_ef8a5m_k$ = function () {
    unreachableDeclarationLog();
    return !(this._get_closedForSend__3129148556_ja3jhw_k$() == null);
  };
  AbstractSendChannel.prototype.send_4idxxh_k$ = function (element, $cont) {
    unreachableDeclarationLog();
    if (this.offerInternal_tuzlq7_k$(element) === _get_OFFER_SUCCESS__1078998001())
      return Unit_getInstance();
    return sendSuspend(this, element, $cont);
  };
  AbstractSendChannel.prototype.offer_pm4fdq_k$ = function (element) {
    unreachableDeclarationLog();
    try {
      return offer.call(this, element);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_safe_receiver = this.onUndeliveredElement_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
        }
        var tmp1_safe_receiver = tmp;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            addSuppressed(tmp1_safe_receiver, $p);
            throw tmp1_safe_receiver;
          }
        }
        Unit_getInstance();
        throw $p;
      } else {
        {
          throw $p;
        }
      }
    }
  };
  AbstractSendChannel.prototype.trySend_3hclq4_k$ = function (element) {
    var result = this.offerInternal_tuzlq7_k$(element);
    var tmp;
    if (result === _get_OFFER_SUCCESS__1078998001()) {
      tmp = Companion_getInstance_1().success_prl0f3_k$(Unit_getInstance());
    } else {
      if (result === _get_OFFER_FAILED__676838827()) {
        var tmp0_elvis_lhs = this._get_closedForSend__3129148556_ja3jhw_k$();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().failure_qsocya_k$();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().closed_o16byb_k$(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_o16byb_k$(helpCloseAndGetSendException(this, result));
        } else {
          {
            var tmp0_error_0 = 'trySend returned ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
          }
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.enqueueSend_9ksp3t_k$ = function (send) {
    unreachableDeclarationLog();
    if (this._get_isBufferAlwaysFull__916335011_f5k8mb_k$()) {
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_addLastIfPrev_0 = this.queue_1;
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_addLastIfPrev_0._get__prev__3038968575_krsetd_k$();
          if (isInterface(tmp1__anonymous__1_4003154330, ReceiveOrClosed))
            return tmp1__anonymous__1_4003154330;
          else {
          }
          tmp$ret$0 = true;
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
        }
        tmp0_addLastIfPrev_0.addLast_uyctnf_k$(send);
        tmp$ret$1 = true;
        break $l$block_1;
      }
      Unit_getInstance();
    } else {
      var tmp$ret$3;
      $l$block_6: {
        var tmp2_addLastIfPrevAndIf_0 = this.queue_1;
        var tmp$ret$2;
        $l$block_2: {
          var tmp3__anonymous__1_2723290652 = tmp2_addLastIfPrevAndIf_0._get__prev__3038968575_krsetd_k$();
          if (isInterface(tmp3__anonymous__1_2723290652, ReceiveOrClosed))
            return tmp3__anonymous__1_2723290652;
          else {
          }
          tmp$ret$2 = true;
          break $l$block_2;
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_6;
        } else {
        }
        var tmp$ret$4;
        $l$block_4: {
          tmp$ret$4 = this._get_isBufferFull__1576755378_q2rc8i_k$();
          break $l$block_4;
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_6;
        } else {
        }
        tmp2_addLastIfPrevAndIf_0.addLast_uyctnf_k$(send);
        tmp$ret$3 = true;
        break $l$block_6;
      }
      if (!tmp$ret$3)
        return _get_ENQUEUE_FAILED__2229156375();
      else {
      }
    }
    return null;
  };
  AbstractSendChannel.prototype.close_9zy44b_k$ = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_addLastIfPrev_0 = this.queue_1;
      var tmp$ret$0;
      $l$block: {
        var tmp1__anonymous__1_4003154330 = tmp0_addLastIfPrev_0._get__prev__3038968575_krsetd_k$();
        tmp$ret$0 = !(tmp1__anonymous__1_4003154330 instanceof Closed);
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      tmp0_addLastIfPrev_0.addLast_uyctnf_k$(closed);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      $l$block_2: {
        var tmp2__get_prevNode__0_1638415243 = this.queue_1;
        tmp$ret$2 = tmp2__get_prevNode__0_1638415243._get__prev__3038968575_krsetd_k$();
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded)
      invokeOnCloseHandler(this, cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.invokeOnClose_88rhe6_k$ = function (handler) {
    unreachableDeclarationLog();
    if (!this.onCloseHandler_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_1._get_value__3683422336_a43j40_k$();
      if (value === _get_HANDLER_INVOKED__4230551610()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this._get_closedForSend__3129148556_ja3jhw_k$();
      if (!(closedToken == null) ? this.onCloseHandler_1.atomicfu$compareAndSet(handler, _get_HANDLER_INVOKED__4230551610()) : false) {
        handler(closedToken.closeCause_1);
      }
    }
  };
  AbstractSendChannel.prototype.onClosedIdempotent_57xn14_k$ = function (closed) {
  };
  AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block_4: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf_0 = this.queue_1;
      var next_1 = tmp1_removeFirstIfIsInstanceOfOrPeekIf_0._get__next__3036752447_kt3wsh_k$();
      if (next_1 === tmp1_removeFirstIfIsInstanceOfOrPeekIf_0) {
        tmp$ret$0 = null;
        break $l$block_4;
      }
      if (!isInterface(next_1, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_4;
      } else {
      }
      var tmp$ret$1;
      $l$block_1: {
        var tmp2__anonymous__3_1215738845 = next_1;
        tmp$ret$1 = tmp2__anonymous__3_1215738845 instanceof Closed;
        break $l$block_1;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next_1;
        break $l$block_4;
      } else {
      }
      {
        var tmp0_check_0 = next_1.removeImpl_i5v938_k$();
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$2;
          $l$block_3: {
            tmp$ret$2 = 'Should remove';
            break $l$block_3;
          }
          var message_1 = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message_1));
        }
      }
      tmp$ret$0 = next_1;
      break $l$block_4;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.describeTryOffer_6o0iky_k$ = function (element) {
    unreachableDeclarationLog();
    return new TryOfferDesc(element, this.queue_1);
  };
  AbstractSendChannel.prototype._get_onSend__948008420_fof3z8_k$ = function () {
    unreachableDeclarationLog();
    return new AbstractSendChannel$onSend$1(this);
  };
  AbstractSendChannel.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) + '{' + _get_queueDebugStateString__1221992177(this) + '}' + this._get_bufferDebugString__2237999085_y0nytv_k$();
  };
  AbstractSendChannel.prototype._get_bufferDebugString__2237999085_y0nytv_k$ = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = {
    simpleName: 'AbstractSendChannel',
    kind: 'class',
    interfaces: [SendChannel]
  };
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.undeliveredElement_djsee8_k$ = function () {
  };
  Send.$metadata$ = {
    simpleName: 'Send',
    kind: 'class',
    interfaces: []
  };
  function ReceiveOrClosed() {
    unreachableDeclarationLog();
  }
  ReceiveOrClosed.$metadata$ = {
    simpleName: 'ReceiveOrClosed',
    kind: 'interface',
    interfaces: []
  };
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause_1 = closeCause;
  }
  Closed.prototype._get_closeCause__2106153306_yty6ai_k$ = function () {
    unreachableDeclarationLog();
    return this.closeCause_1;
  };
  Closed.prototype._get_sendException__1338625034_m4zdoq_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(_get_DEFAULT_CLOSE_MESSAGE__1418404655()) : tmp0_elvis_lhs;
  };
  Closed.prototype._get_receiveException__3346508703_foorc1_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(_get_DEFAULT_CLOSE_MESSAGE__1418404655()) : tmp0_elvis_lhs;
  };
  Closed.prototype._get_offerResult__3337311000_fu5wbs_k$ = function () {
    return this;
  };
  Closed.prototype._get_pollResult__2751014735_pj89f5_k$ = function () {
    return this;
  };
  Closed.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = _get_RESUME_TOKEN__2573897444();
      {
      }
      {
        var tmp0_safe_receiver_2 = otherOp;
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          tmp0_safe_receiver_2.finishPrepare_o9c8d9_k$();
          Unit_getInstance();
        }
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Closed.prototype.completeResumeSend_upvqar_k$ = function () {
  };
  Closed.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = _get_RESUME_TOKEN__2573897444();
      {
      }
      {
        var tmp0_safe_receiver_2 = otherOp;
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          tmp0_safe_receiver_2.finishPrepare_o9c8d9_k$();
          Unit_getInstance();
        }
        Unit_getInstance();
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Closed.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
  };
  Closed.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + _get_hexAddress__2831015762(this) + '[' + this.closeCause_1 + ']';
  };
  Closed.$metadata$ = {
    simpleName: 'Closed',
    kind: 'class',
    interfaces: [ReceiveOrClosed]
  };
  function _get_RECEIVE_THROWS_ON_CLOSE__3946962723() {
    unreachableDeclarationLog();
    return RECEIVE_THROWS_ON_CLOSE;
  }
  var RECEIVE_THROWS_ON_CLOSE;
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype._get_offerResult__3337311000_fu5wbs_k$ = function () {
    return _get_OFFER_SUCCESS__1078998001();
  };
  Receive.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return null;
  };
  Receive.$metadata$ = {
    simpleName: 'Receive',
    kind: 'class',
    interfaces: [ReceiveOrClosed]
  };
  function toResult(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_AbstractChannel_kt_2931858707();
    var tmp;
    if (_this__1828080292 instanceof Closed) {
      tmp = Companion_getInstance_1().closed_o16byb_k$(_this__1828080292.closeCause_1);
    } else {
      {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.success_prl0f3_k$((_this__1828080292 == null ? true : isObject(_this__1828080292)) ? _this__1828080292 : THROW_CCE());
      }
    }
    return tmp;
  }
  function _get_RECEIVE_RESULT__1744657426() {
    unreachableDeclarationLog();
    return RECEIVE_RESULT;
  }
  var RECEIVE_RESULT;
  function toResult_0(_this__1828080292) {
    unreachableDeclarationLog();
    init_properties_AbstractChannel_kt_2931858707();
    return Companion_getInstance_1().closed_o16byb_k$(_this__1828080292.closeCause_1);
  }
  function SendElement(pollResult, cont) {
    unreachableDeclarationLog();
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.cont_1 = cont;
  }
  SendElement.prototype._get_pollResult__2751014735_pj89f5_k$ = function () {
    unreachableDeclarationLog();
    return this.pollResult_1;
  };
  SendElement.prototype._get_cont__794428761_d4zd5l_k$ = function () {
    unreachableDeclarationLog();
    return this.cont_1;
  };
  SendElement.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    unreachableDeclarationLog();
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_10oxem_k$(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_desc__795058650_d5cv6i_k$());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
    return _get_RESUME_TOKEN__2573897444();
  };
  SendElement.prototype.completeResumeSend_upvqar_k$ = function () {
    unreachableDeclarationLog();
    return this.cont_1.completeResume_fu4ex_k$(_get_RESUME_TOKEN__2573897444());
  };
  SendElement.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resumeWithException_0 = this.cont_1;
      var tmp1_resumeWithException_0 = closed._get_sendException__1338625034_m4zdoq_k$();
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0_1 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_resumeWithException_0));
        break $l$block;
      }
      tmp$ret$1 = tmp0_resumeWithException_0.resumeWith_s3a3yh_k$(tmp$ret$0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  SendElement.prototype.toString = function () {
    unreachableDeclarationLog();
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) + '(' + this._get_pollResult__2751014735_pj89f5_k$() + ')';
  };
  SendElement.$metadata$ = {
    simpleName: 'SendElement',
    kind: 'class',
    interfaces: []
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    unreachableDeclarationLog();
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype._get_onUndeliveredElement__2967995291_ly1m5h_k$ = function () {
    unreachableDeclarationLog();
    return this.onUndeliveredElement_1;
  };
  SendElementWithUndeliveredHandler.prototype.remove_fgfybg_k$ = function () {
    unreachableDeclarationLog();
    if (!SendElement.prototype.remove_fgfybg_k$.call(this))
      return false;
    this.undeliveredElement_djsee8_k$();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.undeliveredElement_djsee8_k$ = function () {
    unreachableDeclarationLog();
    callUndeliveredElement(this.onUndeliveredElement_1, this._get_pollResult__2751014735_pj89f5_k$(), this._get_cont__794428761_d4zd5l_k$()._get_context__1558698818_ps0bpe_k$());
  };
  SendElementWithUndeliveredHandler.$metadata$ = {
    simpleName: 'SendElementWithUndeliveredHandler',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_AbstractChannel_kt_2425990511;
  function init_properties_AbstractChannel_kt_2931858707() {
    if (!properties_initialized_AbstractChannel_kt_2425990511) {
      properties_initialized_AbstractChannel_kt_2425990511 = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function _get_capacity__3674243665($this) {
    unreachableDeclarationLog();
    return $this.capacity_1;
  }
  function _get_onBufferOverflow__4024079050($this) {
    unreachableDeclarationLog();
    return $this.onBufferOverflow_1;
  }
  function _get_lock__802729600($this) {
    unreachableDeclarationLog();
    return $this.lock_1;
  }
  function _set_buffer__2424755159($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987($this) {
    unreachableDeclarationLog();
    return $this.buffer_1;
  }
  function _set_head__584118391($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.head_1 = _set____804775014;
  }
  function _get_head__798735467($this) {
    unreachableDeclarationLog();
    return $this.head_1;
  }
  function _get_size__809037418($this) {
    unreachableDeclarationLog();
    return $this.size_1;
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.capacity_1) {
      $this.size_1._set_value__1325260276_xwdays_k$(currentSize + 1 | 0);
      return null;
    }
    var tmp0_subject = $this.onBufferOverflow_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = _get_OFFER_FAILED__676838827();
        break;
      case 2:
        tmp = _get_OFFER_SUCCESS__1078998001();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.capacity_1) {
      ensureCapacity($this, currentSize);
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length] = element;
    } else {
      {
      }
      $this.buffer_1[$this.head_1 % $this.buffer_1.length] = null;
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length] = element;
      $this.head_1 = ($this.head_1 + 1 | 0) % $this.buffer_1.length;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.buffer_1.length) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_min_0 = imul($this.buffer_1.length, 2);
        var tmp1_min_0 = $this.capacity_1;
        tmp$ret$0 = Math.min(tmp0_min_0, tmp1_min_0);
        break $l$block;
      }
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
        break $l$block_0;
      }
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.buffer_1[($this.head_1 + i | 0) % $this.buffer_1.length];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, _get_EMPTY__2261257284(), currentSize, newSize);
      $this.buffer_1 = newBuffer;
      $this.head_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    {
      var tmp0_require_0 = this.capacity_1 >= 1;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_1 + ' was specified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message_1));
      }
    }
    this.lock_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_min_0 = this.capacity_1;
          tmp$ret$1 = Math.min(tmp0_min_0, 8);
          break $l$block_0;
        }
        var tmp1_arrayOfNulls_0 = tmp$ret$1;
        tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls_0), null);
        break $l$block_1;
      }
      var tmp2_apply_0 = tmp$ret$2;
      {
      }
      {
        var tmp_0 = _get_EMPTY__2261257284();
        fill$default(tmp2_apply_0, tmp_0, 0, 0, 6, null);
      }
      tmp$ret$3 = tmp2_apply_0;
      break $l$block_2;
    }
    tmp.buffer_1 = tmp$ret$3;
    this.head_1 = 0;
    this.size_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype._get_isBufferAlwaysEmpty__2600692989_s0q6f7_k$ = function () {
    return false;
  };
  ArrayChannel.prototype._get_isBufferEmpty__1598887886_qfxpse_k$ = function () {
    return this.size_1._get_value__3683422336_a43j40_k$() === 0;
  };
  ArrayChannel.prototype._get_isBufferAlwaysFull__916335011_f5k8mb_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  ArrayChannel.prototype._get_isBufferFull__1576755378_q2rc8i_k$ = function () {
    unreachableDeclarationLog();
    return this.size_1._get_value__3683422336_a43j40_k$() === this.capacity_1 ? this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  ArrayChannel.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_isEmptyImpl__2745789166_pmc9hu_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype._get_isClosedForReceive__1553697755_pp14uz_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = AbstractChannel.prototype._get_isClosedForReceive__1553697755_pp14uz_k$.call(this);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$2;
      $l$block: {
        var size_2 = this.size_1._get_value__3683422336_a43j40_k$();
        var tmp0_safe_receiver_3 = this._get_closedForSend__3129148556_ja3jhw_k$();
        if (tmp0_safe_receiver_3 == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            return tmp0_safe_receiver_3;
          }
        }
        Unit_getInstance();
        var tmp1_safe_receiver_4 = updateBufferSize(this, size_2);
        if (tmp1_safe_receiver_4 == null)
          null;
        else {
          var tmp$ret$1;
          {
            {
            }
            return tmp1_safe_receiver_4;
          }
        }
        Unit_getInstance();
        if (size_2 === 0) {
          loop: while (true) {
            var tmp2_elvis_lhs_5 = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
            var tmp;
            if (tmp2_elvis_lhs_5 == null) {
              break loop;
            } else {
              tmp = tmp2_elvis_lhs_5;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              this.size_1._set_value__1325260276_xwdays_k$(size_2);
              return ensureNotNull(receive);
            } else {
            }
            var token_6 = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
            if (!(token_6 == null)) {
              {
              }
              this.size_1._set_value__1325260276_xwdays_k$(size_2);
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        enqueueElement(this, size_2, element);
        return _get_OFFER_SUCCESS__1078998001();
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_0;
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive)._get_offerResult__3337311000_fu5wbs_k$();
  };
  ArrayChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    unreachableDeclarationLog();
    var receive = null;
    var tmp$ret$3;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$2;
      $l$block: {
        var size_2 = this.size_1._get_value__3683422336_a43j40_k$();
        var tmp0_safe_receiver_3 = this._get_closedForSend__3129148556_ja3jhw_k$();
        if (tmp0_safe_receiver_3 == null)
          null;
        else {
          var tmp$ret$0;
          {
            {
            }
            return tmp0_safe_receiver_3;
          }
        }
        Unit_getInstance();
        var tmp1_safe_receiver_4 = updateBufferSize(this, size_2);
        if (tmp1_safe_receiver_4 == null)
          null;
        else {
          var tmp$ret$1;
          {
            {
            }
            return tmp1_safe_receiver_4;
          }
        }
        Unit_getInstance();
        if (size_2 === 0) {
          loop: while (true) {
            var offerOp_5 = this.describeTryOffer_6o0iky_k$(element);
            var failure_6 = select.performAtomicTrySelect_9r1u91_k$(offerOp_5);
            if (failure_6 == null) {
              this.size_1._set_value__1325260276_xwdays_k$(size_2);
              receive = offerOp_5._get_result__3382885006_f31376_k$();
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            } else {
              if (failure_6 === _get_OFFER_FAILED__676838827())
                break loop;
              else {
                if (failure_6 === _get_RETRY_ATOMIC__2660021705()) {
                } else {
                  var tmp;
                  if (failure_6 === _get_ALREADY_SELECTED__454812745()) {
                    tmp = true;
                  } else {
                    tmp = failure_6 instanceof Closed;
                  }
                  if (tmp) {
                    this.size_1._set_value__1325260276_xwdays_k$(size_2);
                    return failure_6;
                  } else {
                    {
                      var tmp0_error_0_7 = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure_6);
                      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_7));
                    }
                  }
                }
              }
            }
          }
        }
        if (!select.trySelect_1ivjiv_k$()) {
          this.size_1._set_value__1325260276_xwdays_k$(size_2);
          return _get_ALREADY_SELECTED__454812745();
        }
        enqueueElement(this, size_2, element);
        return _get_OFFER_SUCCESS__1078998001();
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_0;
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive)._get_offerResult__3337311000_fu5wbs_k$();
  };
  ArrayChannel.prototype.enqueueSend_9ksp3t_k$ = function (send) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = AbstractChannel.prototype.enqueueSend_9ksp3t_k$.call(this, send);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.pollInternal_ml771g_k$ = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      var size_2 = this.size_1._get_value__3683422336_a43j40_k$();
      if (size_2 === 0) {
        var tmp0_elvis_lhs_3 = this._get_closedForSend__3129148556_ja3jhw_k$();
        return tmp0_elvis_lhs_3 == null ? _get_POLL_FAILED__3177529460() : tmp0_elvis_lhs_3;
      }
      result = this.buffer_1[this.head_1];
      this.buffer_1[this.head_1] = null;
      this.size_1._set_value__1325260276_xwdays_k$(size_2 - 1 | 0);
      var replacement_4 = _get_POLL_FAILED__3177529460();
      if (size_2 === this.capacity_1) {
        loop: while (true) {
          var tmp1_elvis_lhs_5 = this.takeFirstSendOrPeekClosed_h7sgez_k$();
          var tmp;
          if (tmp1_elvis_lhs_5 == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs_5;
          }
          send = tmp;
          var token_6 = ensureNotNull(send).tryResumeSend_93c6it_k$(null);
          if (!(token_6 == null)) {
            {
            }
            resumed = true;
            replacement_4 = ensureNotNull(send)._get_pollResult__2751014735_pj89f5_k$();
            break loop;
          }
          ensureNotNull(send).undeliveredElement_djsee8_k$();
        }
      }
      var tmp_0;
      if (!(replacement_4 === _get_POLL_FAILED__3177529460())) {
        tmp_0 = !(replacement_4 instanceof Closed);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.size_1._set_value__1325260276_xwdays_k$(size_2);
        this.buffer_1[(this.head_1 + size_2 | 0) % this.buffer_1.length] = replacement_4;
      } else {
      }
      this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length;
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    if (resumed)
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    return result;
  };
  ArrayChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    unreachableDeclarationLog();
    var send = null;
    var success = false;
    var result = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      var size_2 = this.size_1._get_value__3683422336_a43j40_k$();
      if (size_2 === 0) {
        var tmp0_elvis_lhs_3 = this._get_closedForSend__3129148556_ja3jhw_k$();
        return tmp0_elvis_lhs_3 == null ? _get_POLL_FAILED__3177529460() : tmp0_elvis_lhs_3;
      }
      result = this.buffer_1[this.head_1];
      this.buffer_1[this.head_1] = null;
      this.size_1._set_value__1325260276_xwdays_k$(size_2 - 1 | 0);
      var replacement_4 = _get_POLL_FAILED__3177529460();
      if (size_2 === this.capacity_1) {
        loop: while (true) {
          var pollOp_5 = this.describeTryPoll_k2m4a9_k$();
          var failure_6 = select.performAtomicTrySelect_9r1u91_k$(pollOp_5);
          if (failure_6 == null) {
            send = pollOp_5._get_result__3382885006_f31376_k$();
            success = true;
            replacement_4 = ensureNotNull(send)._get_pollResult__2751014735_pj89f5_k$();
            break loop;
          } else {
            if (failure_6 === _get_POLL_FAILED__3177529460())
              break loop;
            else {
              if (failure_6 === _get_RETRY_ATOMIC__2660021705()) {
              } else {
                if (failure_6 === _get_ALREADY_SELECTED__454812745()) {
                  this.size_1._set_value__1325260276_xwdays_k$(size_2);
                  this.buffer_1[this.head_1] = result;
                  return failure_6;
                } else {
                  if (failure_6 instanceof Closed) {
                    send = failure_6;
                    success = true;
                    replacement_4 = failure_6;
                    break loop;
                  } else {
                    {
                      var tmp0_error_0_7 = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure_6);
                      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_7));
                    }
                  }
                }
              }
            }
          }
        }
      }
      var tmp;
      if (!(replacement_4 === _get_POLL_FAILED__3177529460())) {
        tmp = !(replacement_4 instanceof Closed);
      } else {
        tmp = false;
      }
      if (tmp) {
        this.size_1._set_value__1325260276_xwdays_k$(size_2);
        this.buffer_1[(this.head_1 + size_2 | 0) % this.buffer_1.length] = replacement_4;
      } else {
        {
          if (!select.trySelect_1ivjiv_k$()) {
            this.size_1._set_value__1325260276_xwdays_k$(size_2);
            this.buffer_1[this.head_1] = result;
            return _get_ALREADY_SELECTED__454812745();
          }
        }
      }
      this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length;
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    if (success)
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    return result;
  };
  ArrayChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var onUndeliveredElement = this._get_onUndeliveredElement__2967995291_ly1m5h_k$();
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      {
        var tmp0_repeat_0_2 = this.size_1._get_value__3683422336_a43j40_k$();
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0_2)
          do {
            var index_2_4 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var value_4_5 = this.buffer_1[this.head_1];
              if (!(onUndeliveredElement == null) ? !(value_4_5 === _get_EMPTY__2261257284()) : false) {
                undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value_4_5 == null ? true : isObject(value_4_5)) ? value_4_5 : THROW_CCE(), undeliveredElementException);
              }
              this.buffer_1[this.head_1] = _get_EMPTY__2261257284();
              this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length;
            }
          }
           while (inductionVariable < tmp0_repeat_0_2);
      }
      tmp$ret$0 = this.size_1._set_value__1325260276_xwdays_k$(0);
      break $l$block;
    }
    AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
  };
  ArrayChannel.prototype._get_bufferDebugString__2237999085_y0nytv_k$ = function () {
    return '(buffer:capacity=' + this.capacity_1 + ',size=' + this.size_1._get_value__3683422336_a43j40_k$() + ')';
  };
  ArrayChannel.$metadata$ = {
    simpleName: 'ArrayChannel',
    kind: 'class',
    interfaces: []
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    unreachableDeclarationLog();
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    unreachableDeclarationLog();
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = {
    simpleName: 'BufferOverflow',
    kind: 'class',
    interfaces: []
  };
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    unreachableDeclarationLog();
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.prototype._get_UNLIMITED__1868210608_uwa8j4_k$ = function () {
    return this.UNLIMITED_1;
  };
  Factory.prototype._get_RENDEZVOUS__3184199030_idbma2_k$ = function () {
    unreachableDeclarationLog();
    return this.RENDEZVOUS_1;
  };
  Factory.prototype._get_CONFLATED__90124247_1hnobb_k$ = function () {
    return this.CONFLATED_1;
  };
  Factory.prototype._get_BUFFERED__34970316_ktj9o_k$ = function () {
    unreachableDeclarationLog();
    return this.BUFFERED_1;
  };
  Factory.prototype._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$ = function () {
    unreachableDeclarationLog();
    return this.OPTIONAL_CHANNEL_1;
  };
  Factory.prototype._get_DEFAULT_BUFFER_PROPERTY_NAME__448501111_7f0xo7_k$ = function () {
    unreachableDeclarationLog();
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  Factory.prototype._get_CHANNEL_DEFAULT_CAPACITY__4067385175_3rhvhl_k$ = function () {
    unreachableDeclarationLog();
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  Factory.$metadata$ = {
    simpleName: 'Factory',
    kind: 'object',
    interfaces: []
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
    unreachableDeclarationLog();
    Factory_getInstance();
  }
  Channel.$metadata$ = {
    simpleName: 'Channel',
    kind: 'interface',
    interfaces: [SendChannel, ReceiveChannel]
  };
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        {
          var tmp0_require_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
          {
          }
          if (!tmp0_require_0) {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
              break $l$block;
            }
            var message_1 = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message_1));
          }
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            {
              tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
            }
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function _get_failed__1198748270($this) {
    unreachableDeclarationLog();
    return $this.failed_1;
  }
  function _ChannelResult___init__impl__1724816391(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__2745919412(this_0) {
    return this_0;
  }
  function _ChannelResult___get_isSuccess__impl__1474238853(this_0) {
    unreachableDeclarationLog();
    var tmp = _ChannelResult___get_holder__impl__2745919412(this_0);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isFailure__impl__2845159966(this_0) {
    unreachableDeclarationLog();
    var tmp = _ChannelResult___get_holder__impl__2745919412(this_0);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__2937483946(this_0) {
    unreachableDeclarationLog();
    var tmp = _ChannelResult___get_holder__impl__2745919412(this_0);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrNull_impl_916044173(this_0) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__2745919412(this_0);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__2745919412(this_0);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_1473084064(this_0) {
    unreachableDeclarationLog();
    var tmp = _ChannelResult___get_holder__impl__2745919412(this_0);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__2745919412(this_0);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__2745919412(this_0);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__2745919412(this_0).cause_1 == null);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__2745919412(this_0).cause_1;
    else {
    }
    {
      var tmp0_error_0 = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__2745919412(this_0));
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    }
  }
  function ChannelResult__exceptionOrNull_impl_4223746804(this_0) {
    unreachableDeclarationLog();
    var tmp = _ChannelResult___get_holder__impl__2745919412(this_0);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = {
    simpleName: 'Failed',
    kind: 'class',
    interfaces: []
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  Closed_0.prototype._get_cause__3139734664_j3sn7c_k$ = function () {
    unreachableDeclarationLog();
    return this.cause_1;
  };
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_hashCode_0 = this.cause_1;
      var tmp0_safe_receiver_2 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$0 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  Closed_0.$metadata$ = {
    simpleName: 'Closed',
    kind: 'class',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  Companion.prototype.success_prl0f3_k$ = function (value) {
    return _ChannelResult___init__impl__1724816391(value);
  };
  Companion.prototype.failure_qsocya_k$ = function () {
    return _ChannelResult___init__impl__1724816391(this.failed_1);
  };
  Companion.prototype.closed_o16byb_k$ = function (cause) {
    return _ChannelResult___init__impl__1724816391(new Closed_0(cause));
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_2616436257(this_0) {
    var tmp0_subject = _ChannelResult___get_holder__impl__2745919412(this_0);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__2745919412(this_0));
    } else {
      {
        tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__2745919412(this_0)) + ')';
      }
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_1301021138(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function ChannelResult__equals_impl_914039982(this_0, other) {
    if (!(other instanceof ChannelResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.holder_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_2616436257(this.holder_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_1301021138(this.holder_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_914039982(this.holder_1, other);
  };
  ChannelResult.$metadata$ = {
    simpleName: 'ChannelResult',
    kind: 'class',
    interfaces: []
  };
  function SendChannel() {
    unreachableDeclarationLog();
  }
  SendChannel.$metadata$ = {
    simpleName: 'SendChannel',
    kind: 'interface',
    interfaces: []
  };
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159($block, resultContinuation) {
    unreachableDeclarationLog();
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.invoke_xgbiie_k$ = function (it, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_vaj3v6_k$(it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_xgbiie_k$(p1 instanceof ChannelResult ? p1.holder_1 : THROW_CCE(), $cont);
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_4223746804(this.it_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$block_1(ChannelResult__getOrNull_impl_916044173(this.it_1), this);
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
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.create_vaj3v6_k$ = function (it, completion) {
    unreachableDeclarationLog();
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159(this.$block_1, completion);
    i.it_1 = it;
    return i;
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_vaj3v6_k$(value instanceof ChannelResult ? value.holder_1 : THROW_CCE(), completion);
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159.$metadata$ = {
    simpleName: 'ReceiveChannel$<get-onReceiveOrNull>$o$registerSelectClause1$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159_0($block, resultContinuation) {
    unreachableDeclarationLog();
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159($block, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_xgbiie_k$(it.holder_1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ReceiveChannel$onReceiveOrNull$1(this$0) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
  }
  ReceiveChannel$onReceiveOrNull$1.prototype.registerSelectClause1_6lfp5b_k$ = function (select, block) {
    unreachableDeclarationLog();
    var tmp = this.this$0__1._get_onReceiveCatching__2662833478_qzqaii_k$();
    tmp.registerSelectClause1_bb3j78_k$(select, ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_2930864159_0(block, null));
  };
  ReceiveChannel$onReceiveOrNull$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause1_6lfp5b_k$(select, block);
  };
  ReceiveChannel$onReceiveOrNull$1.$metadata$ = {
    kind: 'class',
    interfaces: [SelectClause1]
  };
  function $receiveOrNullCOROUTINE$3(_this__1828080292, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $receiveOrNullCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_916044173(ARGUMENT);
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
  $receiveOrNullCOROUTINE$3.$metadata$ = {
    simpleName: '$receiveOrNullCOROUTINE$3',
    kind: 'class',
    interfaces: []
  };
  function ReceiveChannel() {
    unreachableDeclarationLog();
  }
  ReceiveChannel.$metadata$ = {
    simpleName: 'ReceiveChannel',
    kind: 'interface',
    interfaces: []
  };
  function $next0COROUTINE$4(_this__1828080292, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $next0COROUTINE$4.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.hasNext_4tgia2_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(_get_DEFAULT_CLOSE_MESSAGE__1418404655());
            } else {
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return this._this__1828080292__1.next_20eer_k$();
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
  $next0COROUTINE$4.$metadata$ = {
    simpleName: '$next0COROUTINE$4',
    kind: 'class',
    interfaces: []
  };
  function ChannelIterator() {
    unreachableDeclarationLog();
  }
  ChannelIterator.$metadata$ = {
    simpleName: 'ChannelIterator',
    kind: 'interface',
    interfaces: []
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = {
    simpleName: 'ClosedReceiveChannelException',
    kind: 'class',
    interfaces: []
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = {
    simpleName: 'ClosedSendChannelException',
    kind: 'class',
    interfaces: []
  };
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    unreachableDeclarationLog();
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_1 = _channel;
  }
  ChannelCoroutine.prototype._get__channel__3004978311_lc0xvd_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1;
  };
  ChannelCoroutine.prototype._get_isClosedForReceive__1553697755_pp14uz_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_isClosedForReceive__1553697755_pp14uz_k$();
  };
  ChannelCoroutine.prototype._get_isClosedForSend__3422860182_ef8a5m_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_isClosedForSend__3422860182_ef8a5m_k$();
  };
  ChannelCoroutine.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_isEmpty__1500737838_oti0q6_k$();
  };
  ChannelCoroutine.prototype._get_onReceive__653459149_at1wb1_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_onReceive__653459149_at1wb1_k$();
  };
  ChannelCoroutine.prototype._get_onReceiveCatching__2662833478_qzqaii_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_onReceiveCatching__2662833478_qzqaii_k$();
  };
  ChannelCoroutine.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_onReceiveOrNull__3203289763_i1yfrx_k$();
  };
  ChannelCoroutine.prototype._get_onSend__948008420_fof3z8_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1._get_onSend__948008420_fof3z8_k$();
  };
  ChannelCoroutine.prototype.close_9zy44b_k$ = function (cause) {
    unreachableDeclarationLog();
    return this._channel_1.close_9zy44b_k$(cause);
  };
  ChannelCoroutine.prototype.invokeOnClose_88rhe6_k$ = function (handler) {
    unreachableDeclarationLog();
    this._channel_1.invokeOnClose_88rhe6_k$(handler);
  };
  ChannelCoroutine.prototype.iterator_jk1svi_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1.iterator_jk1svi_k$();
  };
  ChannelCoroutine.prototype.offer_pm4fdq_k$ = function (element) {
    unreachableDeclarationLog();
    return this._channel_1.offer_pm4fdq_k$(element);
  };
  ChannelCoroutine.prototype.poll_21vi7_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1.poll_21vi7_k$();
  };
  ChannelCoroutine.prototype.receive_ihhf9g_k$ = function ($cont) {
    unreachableDeclarationLog();
    return this._channel_1.receive_ihhf9g_k$($cont);
  };
  ChannelCoroutine.prototype.receiveCatching_wrys2l_k$ = function ($cont) {
    unreachableDeclarationLog();
    var tmp = this._channel_1.receiveCatching_wrys2l_k$($cont);
    if (tmp === _get_COROUTINE_SUSPENDED__2870145053())
      return tmp;
    return new ChannelResult(tmp.holder_1);
  };
  ChannelCoroutine.prototype.receiveOrNull_5cvr9l_k$ = function ($cont) {
    unreachableDeclarationLog();
    return this._channel_1.receiveOrNull_5cvr9l_k$($cont);
  };
  ChannelCoroutine.prototype.send_4idxxh_k$ = function (element, $cont) {
    unreachableDeclarationLog();
    return this._channel_1.send_4idxxh_k$(element, $cont);
  };
  ChannelCoroutine.prototype.tryReceive_5r5v2p_k$ = function () {
    unreachableDeclarationLog();
    return this._channel_1.tryReceive_5r5v2p_k$();
  };
  ChannelCoroutine.prototype.trySend_3hclq4_k$ = function (element) {
    unreachableDeclarationLog();
    return this._channel_1.trySend_3hclq4_k$(element);
  };
  ChannelCoroutine.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    unreachableDeclarationLog();
    return this;
  };
  ChannelCoroutine.prototype.cancel_2kogtl_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_elvis_lhs_1 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
      break $l$block;
    }
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
  };
  ChannelCoroutine.prototype.cancel_as6ug7_k$ = function (cause) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_elvis_lhs_1 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
      break $l$block;
    }
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
    return true;
  };
  ChannelCoroutine.prototype.cancel_4b7aim_k$ = function (cause) {
    unreachableDeclarationLog();
    if (this._get_isCancelled__1419818794_nhbn6y_k$())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  ChannelCoroutine.prototype.cancelInternal_wqrppy_k$ = function (cause) {
    unreachableDeclarationLog();
    var exception = this.toCancellationException$default_c99ojs_k$(cause, null, 1, null);
    this._channel_1.cancel_4b7aim_k$(exception);
    this.cancelCoroutine_dy4tw5_k$(exception);
    Unit_getInstance();
  };
  ChannelCoroutine.$metadata$ = {
    simpleName: 'ChannelCoroutine',
    kind: 'class',
    interfaces: [Channel]
  };
  function consumeEach(_this__1828080292, action, $cont) {
    unreachableDeclarationLog();
    var tmp = new $consumeEachCOROUTINE$5(_this__1828080292, action, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function _get_DEFAULT_CLOSE_MESSAGE__1418404655() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function consume(_this__1828080292, block) {
    unreachableDeclarationLog();
    {
    }
    var cause = null;
    try {
      return block(_this__1828080292);
    } catch ($p) {
      if ($p instanceof Error) {
        cause = $p;
        throw $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      cancelConsumed(_this__1828080292, cause);
    }
  }
  function cancelConsumed(_this__1828080292, cause) {
    var tmp0_safe_receiver = cause;
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
          var tmp0_elvis_lhs_2 = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
          tmp$ret$0 = tmp0_elvis_lhs_2 == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs_2;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    _this__1828080292.cancel_4b7aim_k$(tmp);
  }
  function $consumeEachCOROUTINE$5(_this__1828080292, action, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.action_1 = action;
  }
  $consumeEachCOROUTINE$5.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(10);
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this.cause_21__1 = null;
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            this._set_exceptionState__118868437_8fc1n_k$(8);
            this.tmp0_iterator_54__1 = this._this__1828080292__1.iterator_jk1svi_k$();
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_state__1256591060_i39zdo_k$(5);
            suspendResult = this.tmp0_iterator_54__1.hasNext_4tgia2_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this._set_state__1256591060_i39zdo_k$(6);
              continue $sm;
            }

            var e_6 = this.tmp0_iterator_54__1.next_20eer_k$();
            this.action_1(e_6);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 6:
            this.tmp$ret$03__1 = Unit_getInstance();
            this._set_exceptionState__118868437_8fc1n_k$(10);
            this._set_state__1256591060_i39zdo_k$(7);
            var tmp_0 = this;
            continue $sm;
          case 7:
            var tmp_1 = this;
            tmp_1.tmp$ret$40__1 = cancelConsumed(this._this__1828080292__1, this.cause_21__1);
            this._set_state__1256591060_i39zdo_k$(12);
            continue $sm;
          case 8:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            var tmp_2 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_2 instanceof Error) {
              var e_3 = this._get_exception__1672948706_ro13he_k$();
              var tmp_3 = this;
              this.cause_21__1 = e_3;
              throw e_3;
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 9:
            this._set_exceptionState__118868437_8fc1n_k$(10);
            var t = this._get_exception__1672948706_ro13he_k$();
            cancelConsumed(this._this__1828080292__1, this.cause_21__1);
            throw t;
          case 10:
            throw this._get_exception__1672948706_ro13he_k$();
          case 11:
            cancelConsumed(this._this__1828080292__1, this.cause_21__1);
            if (false) {
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(12);
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 10) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $consumeEachCOROUTINE$5.$metadata$ = {
    simpleName: '$consumeEachCOROUTINE$5',
    kind: 'class',
    interfaces: []
  };
  function _get_lock__802729600_0($this) {
    unreachableDeclarationLog();
    return $this.lock_1;
  }
  function _set_value__1325260276($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.value_1 = _set____804775014;
  }
  function _get_value__3683422336($this) {
    unreachableDeclarationLog();
    return $this.value_1;
  }
  function updateValueLocked($this, element) {
    var old = $this.value_1;
    var tmp;
    if (old === _get_EMPTY__2261257284()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this._get_onUndeliveredElement__2967995291_ly1m5h_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.value_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_1 = new NoOpLock();
    this.value_1 = _get_EMPTY__2261257284();
  }
  ConflatedChannel.prototype._get_isBufferAlwaysEmpty__2600692989_s0q6f7_k$ = function () {
    return false;
  };
  ConflatedChannel.prototype._get_isBufferEmpty__1598887886_qfxpse_k$ = function () {
    return this.value_1 === _get_EMPTY__2261257284();
  };
  ConflatedChannel.prototype._get_isBufferAlwaysFull__916335011_f5k8mb_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  ConflatedChannel.prototype._get_isBufferFull__1576755378_q2rc8i_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  ConflatedChannel.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_isEmptyImpl__2745789166_pmc9hu_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$1;
      $l$block: {
        var tmp0_safe_receiver_2 = this._get_closedForSend__3129148556_ja3jhw_k$();
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
        if (this.value_1 === _get_EMPTY__2261257284()) {
          loop: while (true) {
            var tmp1_elvis_lhs_3 = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
            var tmp;
            if (tmp1_elvis_lhs_3 == null) {
              break loop;
            } else {
              tmp = tmp1_elvis_lhs_3;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              return ensureNotNull(receive);
            } else {
            }
            var token_4 = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
            if (!(token_4 == null)) {
              {
              }
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        var tmp2_safe_receiver_5 = updateValueLocked(this, element);
        if (tmp2_safe_receiver_5 == null)
          null;
        else {
          var tmp$ret$2;
          {
            {
            }
            throw tmp2_safe_receiver_5;
          }
        }
        Unit_getInstance();
        return _get_OFFER_SUCCESS__1078998001();
      }
      tmp$ret$3 = tmp$ret$1;
      break $l$block_0;
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive)._get_offerResult__3337311000_fu5wbs_k$();
  };
  ConflatedChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    unreachableDeclarationLog();
    var receive = null;
    var tmp$ret$3;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$1;
      $l$block: {
        var tmp0_safe_receiver_2 = this._get_closedForSend__3129148556_ja3jhw_k$();
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
        if (this.value_1 === _get_EMPTY__2261257284()) {
          loop: while (true) {
            var offerOp_3 = this.describeTryOffer_6o0iky_k$(element);
            var failure_4 = select.performAtomicTrySelect_9r1u91_k$(offerOp_3);
            if (failure_4 == null) {
              receive = offerOp_3._get_result__3382885006_f31376_k$();
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            } else {
              if (failure_4 === _get_OFFER_FAILED__676838827())
                break loop;
              else {
                if (failure_4 === _get_RETRY_ATOMIC__2660021705()) {
                } else {
                  var tmp;
                  if (failure_4 === _get_ALREADY_SELECTED__454812745()) {
                    tmp = true;
                  } else {
                    tmp = failure_4 instanceof Closed;
                  }
                  if (tmp)
                    return failure_4;
                  else {
                    {
                      var tmp0_error_0_5 = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure_4);
                      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_5));
                    }
                  }
                }
              }
            }
          }
        }
        if (!select.trySelect_1ivjiv_k$()) {
          return _get_ALREADY_SELECTED__454812745();
        }
        var tmp1_safe_receiver_6 = updateValueLocked(this, element);
        if (tmp1_safe_receiver_6 == null)
          null;
        else {
          var tmp$ret$2;
          {
            {
            }
            throw tmp1_safe_receiver_6;
          }
        }
        Unit_getInstance();
        return _get_OFFER_SUCCESS__1078998001();
      }
      tmp$ret$3 = tmp$ret$1;
      break $l$block_0;
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive)._get_offerResult__3337311000_fu5wbs_k$();
  };
  ConflatedChannel.prototype.pollInternal_ml771g_k$ = function () {
    var result = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      if (this.value_1 === _get_EMPTY__2261257284()) {
        var tmp0_elvis_lhs_2 = this._get_closedForSend__3129148556_ja3jhw_k$();
        return tmp0_elvis_lhs_2 == null ? _get_POLL_FAILED__3177529460() : tmp0_elvis_lhs_2;
      }
      result = this.value_1;
      this.value_1 = _get_EMPTY__2261257284();
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    return result;
  };
  ConflatedChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    unreachableDeclarationLog();
    var result = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      if (this.value_1 === _get_EMPTY__2261257284()) {
        var tmp0_elvis_lhs_2 = this._get_closedForSend__3129148556_ja3jhw_k$();
        return tmp0_elvis_lhs_2 == null ? _get_POLL_FAILED__3177529460() : tmp0_elvis_lhs_2;
      }
      if (!select.trySelect_1ivjiv_k$())
        return _get_ALREADY_SELECTED__454812745();
      result = this.value_1;
      this.value_1 = _get_EMPTY__2261257284();
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    return result;
  };
  ConflatedChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_withLock_0 = this.lock_1;
      undeliveredElementException = updateValueLocked(this, _get_EMPTY__2261257284());
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
  };
  ConflatedChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withLock_0 = this.lock_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype._get_bufferDebugString__2237999085_y0nytv_k$ = function () {
    return '(value=' + toString(this.value_1) + ')';
  };
  ConflatedChannel.$metadata$ = {
    simpleName: 'ConflatedChannel',
    kind: 'class',
    interfaces: []
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype._get_isBufferAlwaysEmpty__2600692989_s0q6f7_k$ = function () {
    return true;
  };
  LinkedListChannel.prototype._get_isBufferEmpty__1598887886_qfxpse_k$ = function () {
    return true;
  };
  LinkedListChannel.prototype._get_isBufferAlwaysFull__916335011_f5k8mb_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  LinkedListChannel.prototype._get_isBufferFull__1576755378_q2rc8i_k$ = function () {
    unreachableDeclarationLog();
    return false;
  };
  LinkedListChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_tuzlq7_k$.call(this, element);
      if (result === _get_OFFER_SUCCESS__1078998001())
        return _get_OFFER_SUCCESS__1078998001();
      else {
        if (result === _get_OFFER_FAILED__676838827()) {
          var sendResult = this.sendBuffered_4b6ooj_k$(element);
          if (sendResult == null)
            return _get_OFFER_SUCCESS__1078998001();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
            else {
            }
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            {
              var tmp0_error_0 = 'Invalid offerInternal result ' + toString_0(result);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
            }
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    unreachableDeclarationLog();
    while (true) {
      var tmp;
      if (this._get_hasReceiveOrClosed__2582139731_sbru7h_k$()) {
        tmp = AbstractChannel.prototype.offerSelectInternal_lspj9s_k$.call(this, element, select);
      } else {
        var tmp0_elvis_lhs = select.performAtomicTrySelect_9r1u91_k$(this.describeSendBuffered_gmw7y0_k$(element));
        tmp = tmp0_elvis_lhs == null ? _get_OFFER_SUCCESS__1078998001() : tmp0_elvis_lhs;
      }
      var result = tmp;
      if (result === _get_ALREADY_SELECTED__454812745())
        return _get_ALREADY_SELECTED__454812745();
      else {
        if (result === _get_OFFER_SUCCESS__1078998001())
          return _get_OFFER_SUCCESS__1078998001();
        else {
          if (result === _get_OFFER_FAILED__676838827()) {
          } else {
            if (result === _get_RETRY_ATOMIC__2660021705()) {
            } else {
              if (result instanceof Closed)
                return result;
              else {
                {
                  var tmp0_error_0 = 'Invalid result ' + toString_0(result);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
                }
              }
            }
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject_1 = _get_holder__3377096415(list);
      if (tmp0_subject_1 == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject_1 instanceof ArrayList)) {
          var tmp = _get_holder__3377096415(list);
          var tmp0__anonymous__5_2495602525 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_6 = tmp0__anonymous__5_2495602525;
          if (tmp0_subject_6 instanceof SendBuffered) {
            var tmp1_safe_receiver_7 = this._get_onUndeliveredElement__2967995291_ly1m5h_k$();
            var tmp_0;
            if (tmp1_safe_receiver_7 == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__5_2495602525._get_element__2117671829_z0t21h_k$();
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver_7, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__5_2495602525.resumeSendClosed_r0hgr7_k$(closed);
          }
        } else {
          {
            var tmp_2 = _get_holder__3377096415(list);
            var list_2 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
            var inductionVariable = list_2._get_size__809037418_ddoh9m_k$() - 1 | 0;
            if (0 <= inductionVariable)
              do {
                var i_4 = inductionVariable;
                inductionVariable = inductionVariable + -1 | 0;
                {
                  var tmp1__anonymous__5_4003154334 = list_2.get_fkrdnv_k$(i_4);
                  var tmp0_subject_6_0 = tmp1__anonymous__5_4003154334;
                  if (tmp0_subject_6_0 instanceof SendBuffered) {
                    var tmp1_safe_receiver_7_0 = this._get_onUndeliveredElement__2967995291_ly1m5h_k$();
                    var tmp_3;
                    if (tmp1_safe_receiver_7_0 == null) {
                      tmp_3 = null;
                    } else {
                      var tmp_4 = tmp1__anonymous__5_4003154334._get_element__2117671829_z0t21h_k$();
                      tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_7_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                    }
                    undeliveredElementException = tmp_3;
                  } else {
                    tmp1__anonymous__5_4003154334.resumeSendClosed_r0hgr7_k$(closed);
                  }
                }
              }
               while (0 <= inductionVariable);
          }
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
  };
  LinkedListChannel.$metadata$ = {
    simpleName: 'LinkedListChannel',
    kind: 'class',
    interfaces: []
  };
  function ProducerScope() {
    unreachableDeclarationLog();
  }
  ProducerScope.$metadata$ = {
    simpleName: 'ProducerScope',
    kind: 'interface',
    interfaces: [CoroutineScope, SendChannel]
  };
  function produce(_this__1828080292, context, capacity, onBufferOverflow, start, onCompletion, block) {
    unreachableDeclarationLog();
    var channel = Channel$default(capacity, onBufferOverflow, null, 4, null);
    var newContext = newCoroutineContext(_this__1828080292, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_t2apld_k$(onCompletion);
      Unit_getInstance();
    }
    coroutine.start_1ln6k9_k$(start, coroutine, block);
    return coroutine;
  }
  function produce$default(_this__1828080292, context, capacity, onBufferOverflow, start, onCompletion, block, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 8) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    if (!(($mask0 & 16) === 0))
      onCompletion = null;
    return produce(_this__1828080292, context, capacity, onBufferOverflow, start, onCompletion, block);
  }
  function ProducerCoroutine(parentContext, channel) {
    unreachableDeclarationLog();
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  ProducerCoroutine.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    unreachableDeclarationLog();
    return ChannelCoroutine.prototype._get_isActive__4035225851_4an5s5_k$.call(this);
  };
  ProducerCoroutine.prototype.onCompleted_pxpqwj_k$ = function (value) {
    unreachableDeclarationLog();
    var tmp = this._get__channel__3004978311_lc0xvd_k$();
    tmp.close$default_jao18g_k$(null, 1, null);
    Unit_getInstance();
  };
  ProducerCoroutine.prototype.onCompleted_wmtzyo_k$ = function (value) {
    unreachableDeclarationLog();
    return this.onCompleted_pxpqwj_k$(value instanceof Unit ? value : THROW_CCE());
  };
  ProducerCoroutine.prototype.onCancelled_oqqex5_k$ = function (cause, handled) {
    unreachableDeclarationLog();
    var processed = this._get__channel__3004978311_lc0xvd_k$().close_9zy44b_k$(cause);
    if (!processed ? !handled : false)
      handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), cause);
  };
  ProducerCoroutine.$metadata$ = {
    simpleName: 'ProducerCoroutine',
    kind: 'class',
    interfaces: [ProducerScope]
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype._get_isBufferAlwaysEmpty__2600692989_s0q6f7_k$ = function () {
    return true;
  };
  RendezvousChannel.prototype._get_isBufferEmpty__1598887886_qfxpse_k$ = function () {
    return true;
  };
  RendezvousChannel.prototype._get_isBufferAlwaysFull__916335011_f5k8mb_k$ = function () {
    unreachableDeclarationLog();
    return true;
  };
  RendezvousChannel.prototype._get_isBufferFull__1576755378_q2rc8i_k$ = function () {
    unreachableDeclarationLog();
    return true;
  };
  RendezvousChannel.$metadata$ = {
    simpleName: 'RendezvousChannel',
    kind: 'class',
    interfaces: []
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function _get_block__3121070308_1($this) {
    unreachableDeclarationLog();
    return $this.block_1;
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.block_1 = block;
  }
  SafeFlow.prototype.collectSafely_b70wvn_k$ = function (collector, $cont) {
    return this.block_1(collector, $cont);
  };
  SafeFlow.$metadata$ = {
    simpleName: 'SafeFlow',
    kind: 'class',
    interfaces: []
  };
  function emitAll(_this__1828080292, channel, $cont) {
    unreachableDeclarationLog();
    return emitAllImpl(_this__1828080292, channel, true, $cont);
  }
  function emitAllImpl(_this__1828080292, channel, consume, $cont) {
    unreachableDeclarationLog();
    var tmp = new $emitAllImplCOROUTINE$6(_this__1828080292, channel, consume, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitAllImplCOROUTINE$6(_this__1828080292, channel, consume, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.channel_1 = channel;
    this.consume_1 = consume;
  }
  $emitAllImplCOROUTINE$6.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            ensureActive_1(this._this__1828080292__1);
            this.cause0__1 = null;
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            this._set_exceptionState__118868437_8fc1n_k$(8);
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(7);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(3);
            suspendResult = this.channel_1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 3:
            this.unboxed2__1 = suspendResult.holder_1;
            suspendResult = new ChannelResult(this.unboxed2__1);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this.result3__1 = suspendResult.holder_1;
            if (_ChannelResult___get_isClosed__impl__2937483946(this.result3__1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_4223746804(this.result3__1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              Unit_getInstance();
              this._set_state__1256591060_i39zdo_k$(7);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(5);
              continue $sm;
            }

            break;
          case 5:
            this._set_state__1256591060_i39zdo_k$(6);
            suspendResult = this._this__1828080292__1.emit_1fbrsb_k$(ChannelResult__getOrThrow_impl_1473084064(this.result3__1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 7:
            this.tmp$ret$01__1 = Unit_getInstance();
            this._set_exceptionState__118868437_8fc1n_k$(11);
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 8:
            this._set_exceptionState__118868437_8fc1n_k$(9);
            var tmp_0 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_0 instanceof Error) {
              var e = this._get_exception__1672948706_ro13he_k$();
              var tmp_1 = this;
              this.cause0__1 = e;
              throw e;
            } else {
              {
                throw this._get_exception__1672948706_ro13he_k$();
              }
            }

            break;
          case 9:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            var t = this._get_exception__1672948706_ro13he_k$();
            if (this.consume_1)
              cancelConsumed(this.channel_1, this.cause0__1);
            throw t;
          case 10:
            if (this.consume_1)
              cancelConsumed(this.channel_1, this.cause0__1);
            return Unit_getInstance();
          case 11:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 11) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $emitAllImplCOROUTINE$6.$metadata$ = {
    simpleName: '$emitAllImplCOROUTINE$6',
    kind: 'class',
    interfaces: []
  };
  function Flow() {
    unreachableDeclarationLog();
  }
  Flow.$metadata$ = {
    simpleName: 'Flow',
    kind: 'interface',
    interfaces: []
  };
  function $collectCOROUTINE$7(_this__1828080292, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this.collector_1, this._get_context__1558698818_ps0bpe_k$());
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.collectSafely_b70wvn_k$(this.safeCollector0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this._set_exceptionState__118868437_8fc1n_k$(5);
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            return Unit_getInstance();
          case 4:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            var t = this._get_exception__1672948706_ro13he_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            throw t;
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
  $collectCOROUTINE$7.$metadata$ = {
    simpleName: '$collectCOROUTINE$7',
    kind: 'class',
    interfaces: []
  };
  function AbstractFlow() {
  }
  AbstractFlow.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AbstractFlow.$metadata$ = {
    simpleName: 'AbstractFlow',
    kind: 'class',
    interfaces: [Flow, CancellableFlow]
  };
  function FlowCollector() {
    unreachableDeclarationLog();
  }
  FlowCollector.$metadata$ = {
    simpleName: 'FlowCollector',
    kind: 'interface',
    interfaces: []
  };
  function _get_NO_VALUE__3415357656() {
    init_properties_SharedFlow_kt_350587591();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
    unreachableDeclarationLog();
  }
  MutableSharedFlow.$metadata$ = {
    simpleName: 'MutableSharedFlow',
    kind: 'interface',
    interfaces: [SharedFlow, FlowCollector]
  };
  function SharedFlow() {
    unreachableDeclarationLog();
  }
  SharedFlow.$metadata$ = {
    simpleName: 'SharedFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function fuseSharedFlow(_this__1828080292, context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    init_properties_SharedFlow_kt_350587591();
    if ((capacity === Factory_getInstance()._get_RENDEZVOUS__3184199030_idbma2_k$() ? true : capacity === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$()) ? onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) : false) {
      return _this__1828080292;
    }
    return new ChannelFlowOperatorImpl(_this__1828080292, context, capacity, onBufferOverflow);
  }
  function _get_replay__3379835908($this) {
    unreachableDeclarationLog();
    return $this.replay_1;
  }
  function _get_bufferCapacity__84752433($this) {
    unreachableDeclarationLog();
    return $this.bufferCapacity_1;
  }
  function _get_onBufferOverflow__4024079050_0($this) {
    unreachableDeclarationLog();
    return $this.onBufferOverflow_1;
  }
  function _set_buffer__2424755159_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_0($this) {
    unreachableDeclarationLog();
    return $this.buffer_1;
  }
  function _set_replayIndex__1840806970($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.replayIndex_1 = _set____804775014;
  }
  function _get_replayIndex__3672249798($this) {
    unreachableDeclarationLog();
    return $this.replayIndex_1;
  }
  function _set_minCollectorIndex__1849007726($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.minCollectorIndex_1 = _set____804775014;
  }
  function _get_minCollectorIndex__535879418($this) {
    unreachableDeclarationLog();
    return $this.minCollectorIndex_1;
  }
  function _set_bufferSize__2283048790($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.bufferSize_1 = _set____804775014;
  }
  function _get_bufferSize__1372296266($this) {
    unreachableDeclarationLog();
    return $this.bufferSize_1;
  }
  function _set_queueSize__3125837651($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.queueSize_1 = _set____804775014;
  }
  function _get_queueSize__602606559($this) {
    unreachableDeclarationLog();
    return $this.queueSize_1;
  }
  function _get_head__798735467_0($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_minOf_0 = $this.minCollectorIndex_1;
      var tmp1_minOf_0 = $this.replayIndex_1;
      tmp$ret$0 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp1_minOf_0) <= 0 ? tmp0_minOf_0 : tmp1_minOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_replaySize__3452702979($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _get_head__798735467_0($this);
      var tmp1_plus_0 = $this.bufferSize_1;
      tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
      break $l$block;
    }
    return tmp$ret$0.minus_llf5ei_k$($this.replayIndex_1).toInt_1tsl84_k$();
  }
  function _get_totalSize__2270409100($this) {
    return $this.bufferSize_1 + $this.queueSize_1 | 0;
  }
  function _get_bufferEndIndex__3504262100($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _get_head__798735467_0($this);
      var tmp1_plus_0 = $this.bufferSize_1;
      tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_queueEndIndex__278819049($this) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_plus_0 = _get_head__798735467_0($this);
        var tmp1_plus_0 = $this.bufferSize_1;
        tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
        break $l$block;
      }
      var tmp2_plus_0 = tmp$ret$0;
      var tmp3_plus_0 = $this.queueSize_1;
      tmp$ret$1 = tmp2_plus_0.plus_u6jwas_k$(toLong(tmp3_plus_0));
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this._get_nCollectors__2195348349_yq24cj_k$() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.bufferSize_1 >= $this.bufferCapacity_1 ? $this.minCollectorIndex_1.compareTo_n4fqi2_k$($this.replayIndex_1) <= 0 : false) {
      var tmp0_subject = $this.onBufferOverflow_1;
      var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.bufferSize_1;
    tmp1_this.bufferSize_1 = tmp2 + 1 | 0;
    Unit_getInstance();
    if ($this.bufferSize_1 > $this.bufferCapacity_1)
      dropOldestLocked($this);
    if (_get_replaySize__3452702979($this) > $this.replay_1) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_plus_0 = $this.replayIndex_1;
        tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(new Long(1, 0));
        break $l$block;
      }
      updateBufferLocked($this, tmp$ret$0, $this.minCollectorIndex_1, _get_bufferEndIndex__3504262100($this), _get_queueEndIndex__278819049($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    {
    }
    if ($this.replay_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.bufferSize_1;
    tmp0_this.bufferSize_1 = tmp1 + 1 | 0;
    Unit_getInstance();
    if ($this.bufferSize_1 > $this.replay_1)
      dropOldestLocked($this);
    var tmp = $this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _get_head__798735467_0($this);
      var tmp1_plus_0 = $this.bufferSize_1;
      tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
      break $l$block;
    }
    tmp.minCollectorIndex_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.buffer_1), _get_head__798735467_0($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.bufferSize_1;
    tmp0_this.bufferSize_1 = tmp1 - 1 | 0;
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _get_head__798735467_0($this);
      tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(new Long(1, 0));
      break $l$block;
    }
    var newHead = tmp$ret$0;
    if ($this.replayIndex_1.compareTo_n4fqi2_k$(newHead) < 0)
      $this.replayIndex_1 = newHead;
    if ($this.minCollectorIndex_1.compareTo_n4fqi2_k$(newHead) < 0)
      correctCollectorIndexesOnDropOldest($this, newHead);
    {
    }
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      if ($this._get_nCollectors__2195348349_yq24cj_k$() === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver_1 = $this._get_slots__3607782460_bd4r7o_k$();
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        {
          var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver_1);
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_1.next_20eer_k$();
            {
              if (!(element_2 == null)) {
                if (element_2.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element_2.index_1.compareTo_n4fqi2_k$(newHead) < 0 : false) {
                  element_2.index_1 = newHead;
                }
              }
            }
          }
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    $this.minCollectorIndex_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__2270409100($this);
    var curBuffer = $this.buffer_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = _get_head__798735467_0($this);
      tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(curSize));
      break $l$block;
    }
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    {
      var tmp0_check_0 = newSize > 0;
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Buffer size overflow';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
        break $l$block_0;
      }
      var tmp1_also_0 = tmp$ret$1;
      {
      }
      {
        $this.buffer_1 = tmp1_also_0;
      }
      tmp$ret$2 = tmp1_also_0;
      break $l$block_1;
    }
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__798735467_0($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = head.plus_u6jwas_k$(toLong(i));
          break $l$block_2;
        }
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = head.plus_u6jwas_k$(toLong(i));
          break $l$block_3;
        }
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $cont) {
    var tmp$ret$9;
    $l$block_9: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        var resumes_4 = _get_EMPTY_RESUMES__228476573();
        var tmp$ret$5;
        $l$block_5: {
          var tmp$ret$2;
          $l$block_4: {
            if (tryEmitLocked($this, value)) {
              var tmp$ret$1;
              $l$block_0: {
                var tmp$ret$0;
                $l$block: {
                  var tmp0_success_0_1_2_6 = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
                  break $l$block;
                }
                tmp$ret$1 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$0);
                break $l$block_0;
              }
              resumes_4 = findSlotsToResumeLocked($this, resumes_4);
              tmp$ret$2 = null;
              break $l$block_4;
            }
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_plus_0_4_8 = _get_head__798735467_0($this);
                var tmp1_plus_0_5_9 = _get_totalSize__2270409100($this);
                tmp$ret$3 = tmp0_plus_0_4_8.plus_u6jwas_k$(toLong(tmp1_plus_0_5_9));
                break $l$block_2;
              }
              var tmp2_also_0_3_7 = new Emitter($this, tmp$ret$3, value, cancellable_2_2);
              {
              }
              {
                enqueueLocked($this, tmp2_also_0_3_7);
                var tmp0_this_2_6_10 = $this;
                var tmp1_3_7_11 = tmp0_this_2_6_10.queueSize_1;
                tmp0_this_2_6_10.queueSize_1 = tmp1_3_7_11 + 1 | 0;
                Unit_getInstance();
                if ($this.bufferCapacity_1 === 0)
                  resumes_4 = findSlotsToResumeLocked($this, resumes_4);
              }
              tmp$ret$4 = tmp2_also_0_3_7;
              break $l$block_3;
            }
            tmp$ret$2 = tmp$ret$4;
            break $l$block_4;
          }
          tmp$ret$5 = tmp$ret$2;
          break $l$block_5;
        }
        var emitter_5 = tmp$ret$5;
        var tmp0_safe_receiver_12 = emitter_5;
        if (tmp0_safe_receiver_12 == null)
          null;
        else {
          var tmp$ret$6;
          $l$block_6: {
            {
            }
            tmp$ret$6 = disposeOnCancellation(cancellable_2_2, tmp0_safe_receiver_12);
            break $l$block_6;
          }
          Unit_getInstance();
        }
        Unit_getInstance();
        var indexedObject = resumes_4;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var r_14 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp2_safe_receiver_15 = r_14;
          if (tmp2_safe_receiver_15 == null)
            null;
          else {
            var tmp$ret$8;
            $l$block_8: {
              var tmp$ret$7;
              $l$block_7: {
                var tmp0_success_0_1_16 = Companion_getInstance();
                tmp$ret$7 = _Result___init__impl__2241242780(Unit_getInstance());
                break $l$block_7;
              }
              tmp$ret$8 = tmp2_safe_receiver_15.resumeWith_s3a3yh_k$(tmp$ret$7);
              break $l$block_8;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
        }
      }
      tmp$ret$9 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_9;
    }
    return tmp$ret$9;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    $l$block: {
      if (emitter.index_1.compareTo_n4fqi2_k$(_get_head__798735467_0($this)) < 0)
        return Unit_getInstance();
      var buffer_2 = ensureNotNull($this.buffer_1);
      if (!(getBufferAt(buffer_2, emitter.index_1) === emitter))
        return Unit_getInstance();
      setBufferAt(buffer_2, emitter.index_1, _get_NO_VALUE__3415357656());
      tmp$ret$0 = cleanupTailLocked($this);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = newMinCollectorIndex.compareTo_n4fqi2_k$(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
      break $l$block;
    }
    var newHead = tmp$ret$0;
    {
    }
    var inductionVariable = _get_head__798735467_0($this);
    var step = new Long(1, 0);
    if (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.plus_u6jwas_k$(step);
        setBufferAt(ensureNotNull($this.buffer_1), index, null);
      }
       while (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0);
    $this.replayIndex_1 = newReplayIndex;
    $this.minCollectorIndex_1 = newMinCollectorIndex;
    $this.bufferSize_1 = newBufferEndIndex.minus_llf5ei_k$(newHead).toInt_1tsl84_k$();
    $this.queueSize_1 = newQueueEndIndex.minus_llf5ei_k$(newBufferEndIndex).toInt_1tsl84_k$();
    {
    }
    {
    }
    {
    }
  }
  function cleanupTailLocked($this) {
    if ($this.bufferCapacity_1 === 0 ? $this.queueSize_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.queueSize_1 > 0) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_plus_0 = _get_head__798735467_0($this);
            var tmp1_plus_0 = _get_totalSize__2270409100($this);
            tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
            break $l$block;
          }
          var tmp2_minus_0 = tmp$ret$0;
          tmp$ret$1 = tmp2_minus_0.minus_llf5ei_k$(new Long(1, 0));
          break $l$block_0;
        }
        tmp = getBufferAt(buffer, tmp$ret$1) === _get_NO_VALUE__3415357656();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.queueSize_1;
      tmp0_this.queueSize_1 = tmp1 - 1 | 0;
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp3_plus_0 = _get_head__798735467_0($this);
        var tmp4_plus_0 = _get_totalSize__2270409100($this);
        tmp$ret$2 = tmp3_plus_0.plus_u6jwas_k$(toLong(tmp4_plus_0));
        break $l$block_1;
      }
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = _get_EMPTY_RESUMES__228476573();
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var index_2 = tryPeekLocked($this, slot);
        var tmp;
        if (index_2.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
          tmp = _get_NO_VALUE__3415357656();
        } else {
          var oldIndex_3 = slot.index_1;
          var newValue_4 = getPeekedValueLockedAt($this, index_2);
          var tmp_0 = slot;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = index_2.plus_u6jwas_k$(new Long(1, 0));
            break $l$block;
          }
          tmp_0.index_1 = tmp$ret$0;
          resumes = $this.updateCollectorIndexLocked_lspmte_k$(oldIndex_3);
          tmp = newValue_4;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$3;
          $l$block_2: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_2;
          }
          tmp$ret$4 = tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$3);
          break $l$block_3;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.index_1;
    if (index.compareTo_n4fqi2_k$(_get_bufferEndIndex__3504262100($this)) < 0)
      return index;
    if ($this.bufferCapacity_1 > 0)
      return new Long(-1, -1);
    if (index.compareTo_n4fqi2_k$(_get_head__798735467_0($this)) > 0)
      return new Long(-1, -1);
    if ($this.queueSize_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.buffer_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.value_1;
    } else {
      {
        tmp = item;
      }
    }
    return tmp;
  }
  function awaitValue($this, slot, $cont) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var index_2_4 = tryPeekLocked($this, slot);
            if (index_2_4.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
              slot.cont_1 = cancellable_2_2;
            } else {
              var tmp$ret$1;
              $l$block_0: {
                var tmp$ret$0;
                $l$block: {
                  var tmp0_success_0_1_3_5 = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
                  break $l$block;
                }
                tmp$ret$1 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$0);
                break $l$block_0;
              }
              tmp$ret$2 = Unit_getInstance();
              break $l$block_1;
            }
            slot.cont_1 = cancellable_2_2;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
      }
      tmp$ret$4 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      if ($this._get_nCollectors__2195348349_yq24cj_k$() === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver_1 = $this._get_slots__3607782460_bd4r7o_k$();
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        {
          var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver_1);
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_1.next_20eer_k$();
            {
              if (!(element_2 == null)) {
                var tmp$ret$1;
                $l$block_1: {
                  var tmp0_elvis_lhs_5 = element_2.cont_1;
                  var tmp;
                  if (tmp0_elvis_lhs_5 == null) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_1;
                  } else {
                    tmp = tmp0_elvis_lhs_5;
                  }
                  var cont_4 = tmp;
                  if (tryPeekLocked($this, element_2).compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_1;
                  }
                  if (resumeCount >= resumes.length) {
                    var tmp_0 = resumes;
                    var tmp$ret$2;
                    $l$block_2: {
                      var tmp0_maxOf_0_6 = imul(2, resumes.length);
                      tmp$ret$2 = Math.max(2, tmp0_maxOf_0_6);
                      break $l$block_2;
                    }
                    resumes = copyOf(tmp_0, tmp$ret$2);
                  }
                  var tmp_1 = resumes;
                  var tmp1_7 = resumeCount;
                  resumeCount = tmp1_7 + 1 | 0;
                  tmp_1[tmp1_7] = cont_4;
                  element_2.cont_1 = null;
                }
              }
            }
          }
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.flow_1 = flow;
    this.index_1 = index;
    this.value_1 = value;
    this.cont_1 = cont;
  }
  Emitter.prototype._get_flow__797111005_d6kusd_k$ = function () {
    unreachableDeclarationLog();
    return this.flow_1;
  };
  Emitter.prototype._set_index__964833971_wweqgk_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.index_1 = _set____804775014;
  };
  Emitter.prototype._get_index__3322996031_g2optt_k$ = function () {
    unreachableDeclarationLog();
    return this.index_1;
  };
  Emitter.prototype._get_value__3683422336_a43j40_k$ = function () {
    unreachableDeclarationLog();
    return this.value_1;
  };
  Emitter.prototype._get_cont__794428761_d4zd5l_k$ = function () {
    unreachableDeclarationLog();
    return this.cont_1;
  };
  Emitter.prototype.dispose_3n44we_k$ = function () {
    return cancelEmitter(this.flow_1, this);
  };
  Emitter.$metadata$ = {
    simpleName: 'Emitter',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function $collectCOROUTINE$8(_this__1828080292, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$8.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this.slot0__1 = this._this__1828080292__1.allocateSlot_67zie3_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(3);
                continue $sm;
              }
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(10);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            }

            this.newValue3__1 = tryTakeValue(this._this__1828080292__1, this.slot0__1);
            if (!(this.newValue3__1 === _get_NO_VALUE__3415357656())) {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(6);
              continue $sm;
            }

            break;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            suspendResult = awaitValue(this._this__1828080292__1, this.slot0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
              Unit_getInstance();
            }

            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(9);
            var tmp_2 = this.newValue3__1;
            suspendResult = this.collector_1.emit_1fbrsb_k$((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 10:
            this.tmp$ret$01__1 = Unit_getInstance();
            this._set_exceptionState__118868437_8fc1n_k$(13);
            this._set_state__1256591060_i39zdo_k$(11);
            continue $sm;
          case 11:
            this._this__1828080292__1.freeSlot_w9jsdv_k$(this.slot0__1);
            return Unit_getInstance();
          case 12:
            this._set_exceptionState__118868437_8fc1n_k$(13);
            var t = this._get_exception__1672948706_ro13he_k$();
            this._this__1828080292__1.freeSlot_w9jsdv_k$(this.slot0__1);
            throw t;
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
  $collectCOROUTINE$8.$metadata$ = {
    simpleName: '$collectCOROUTINE$8',
    kind: 'class',
    interfaces: []
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.replay_1 = replay;
    this.bufferCapacity_1 = bufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.buffer_1 = null;
    this.replayIndex_1 = new Long(0, 0);
    this.minCollectorIndex_1 = new Long(0, 0);
    this.bufferSize_1 = 0;
    this.queueSize_1 = 0;
  }
  SharedFlowImpl.prototype._get_replayCache__3488441622_dc6n6y_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var replaySize_2 = _get_replaySize__3452702979(this);
        if (replaySize_2 === 0)
          return emptyList();
        var result_3 = ArrayList_init_$Create$(replaySize_2);
        var buffer_4 = ensureNotNull(this.buffer_1);
        var inductionVariable = 0;
        if (inductionVariable < replaySize_2)
          do {
            var i_6 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp$ret$0;
              $l$block: {
                var tmp0_plus_0_8 = this.replayIndex_1;
                tmp$ret$0 = tmp0_plus_0_8.plus_u6jwas_k$(toLong(i_6));
                break $l$block;
              }
              var tmp = getBufferAt(buffer_4, tmp$ret$0);
              var tmp1_plusAssign_0_7 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
              result_3.add_1j60pz_k$(tmp1_plusAssign_0_7);
              Unit_getInstance();
            }
          }
           while (inductionVariable < replaySize_2);
        tmp$ret$1 = result_3;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  SharedFlowImpl.prototype._get_lastReplayedLocked__70213285_15swx1_k$ = function () {
    var tmp = ensureNotNull(this.buffer_1);
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_plus_0 = this.replayIndex_1;
        var tmp1_plus_0 = _get_replaySize__3452702979(this);
        tmp$ret$0 = tmp0_plus_0.plus_u6jwas_k$(toLong(tmp1_plus_0));
        break $l$block;
      }
      var tmp2_minus_0 = tmp$ret$0;
      tmp$ret$1 = tmp2_minus_0.minus_llf5ei_k$(new Long(1, 0));
      break $l$block_0;
    }
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  SharedFlowImpl.prototype.collect_4rdebi_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$8(this, collector, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SharedFlowImpl.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_4rdebi_k$(collector, $cont);
  };
  SharedFlowImpl.prototype.tryEmit_4zef7h_k$ = function (value) {
    var resumes = _get_EMPTY_RESUMES__228476573();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (tryEmitLocked(this, value)) {
          resumes = findSlotsToResumeLocked(this, resumes);
          tmp = true;
        } else {
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_1;
          }
          tmp$ret$3 = tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$2);
          break $l$block_2;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    return emitted;
  };
  SharedFlowImpl.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    if (this.tryEmit_4zef7h_k$(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $cont);
  };
  SharedFlowImpl.prototype.updateNewCollectorIndexLocked_xl3tlm_k$ = function () {
    var index = this.replayIndex_1;
    if (index.compareTo_n4fqi2_k$(this.minCollectorIndex_1) < 0)
      this.minCollectorIndex_1 = index;
    return index;
  };
  SharedFlowImpl.prototype.updateCollectorIndexLocked_lspmte_k$ = function (oldIndex) {
    {
    }
    if (oldIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) > 0)
      return _get_EMPTY_RESUMES__228476573();
    var head = _get_head__798735467_0(this);
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = this.bufferSize_1;
      tmp$ret$0 = head.plus_u6jwas_k$(toLong(tmp0_plus_0));
      break $l$block;
    }
    var newMinCollectorIndex = tmp$ret$0;
    if (this.bufferCapacity_1 === 0 ? this.queueSize_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.inc_28ke_k$();
      Unit_getInstance();
    }
    var tmp$ret$1;
    $l$block_0: {
      if (this._get_nCollectors__2195348349_yq24cj_k$() === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      var tmp0_safe_receiver_1 = this._get_slots__3607782460_bd4r7o_k$();
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        {
          var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver_1);
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_1.next_20eer_k$();
            {
              if (!(element_2 == null)) {
                if (element_2.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element_2.index_1.compareTo_n4fqi2_k$(newMinCollectorIndex) < 0 : false)
                  newMinCollectorIndex = element_2.index_1;
              }
            }
          }
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    {
    }
    if (newMinCollectorIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) <= 0)
      return _get_EMPTY_RESUMES__228476573();
    var newBufferEndIndex = _get_bufferEndIndex__3504262100(this);
    var tmp;
    if (this._get_nCollectors__2195348349_yq24cj_k$() > 0) {
      var newBufferSize0 = newBufferEndIndex.minus_llf5ei_k$(newMinCollectorIndex).toInt_1tsl84_k$();
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_minOf_0 = this.queueSize_1;
        var tmp2_minOf_0 = this.bufferCapacity_1 - newBufferSize0 | 0;
        tmp$ret$2 = Math.min(tmp1_minOf_0, tmp2_minOf_0);
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = this.queueSize_1;
    }
    var maxResumeCount = tmp;
    var resumes = _get_EMPTY_RESUMES__228476573();
    var tmp$ret$3;
    $l$block_2: {
      var tmp3_plus_0 = newBufferEndIndex;
      var tmp4_plus_0 = this.queueSize_1;
      tmp$ret$3 = tmp3_plus_0.plus_u6jwas_k$(toLong(tmp4_plus_0));
      break $l$block_2;
    }
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
        break $l$block_3;
      }
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.buffer_1);
      var inductionVariable = newBufferEndIndex;
      var step = new Long(1, 0);
      if (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.plus_u6jwas_k$(step);
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === _get_NO_VALUE__3415357656())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            Unit_getInstance();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.cont_1;
            setBufferAt(buffer, curEmitterIndex, _get_NO_VALUE__3415357656());
            setBufferAt(buffer, newBufferEndIndex, emitter.value_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.inc_28ke_k$();
            Unit_getInstance();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.minus_llf5ei_k$(head).toInt_1tsl84_k$();
    if (this._get_nCollectors__2195348349_yq24cj_k$() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    $l$block_6: {
      var tmp8_maxOf_0 = this.replayIndex_1;
      var tmp$ret$6;
      $l$block_5: {
        var tmp6_minus_0 = newBufferEndIndex;
        var tmp$ret$5;
        $l$block_4: {
          var tmp5_minOf_0 = this.replay_1;
          tmp$ret$5 = Math.min(tmp5_minOf_0, newBufferSize1);
          break $l$block_4;
        }
        var tmp7_minus_0 = tmp$ret$5;
        tmp$ret$6 = tmp6_minus_0.minus_llf5ei_k$(toLong(tmp7_minus_0));
        break $l$block_5;
      }
      var tmp9_maxOf_0 = tmp$ret$6;
      tmp$ret$7 = tmp8_maxOf_0.compareTo_n4fqi2_k$(tmp9_maxOf_0) >= 0 ? tmp8_maxOf_0 : tmp9_maxOf_0;
      break $l$block_6;
    }
    var newReplayIndex = tmp$ret$7;
    if ((this.bufferCapacity_1 === 0 ? newReplayIndex.compareTo_n4fqi2_k$(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.buffer_1), newReplayIndex), _get_NO_VALUE__3415357656()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.inc_28ke_k$();
      Unit_getInstance();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.inc_28ke_k$();
      Unit_getInstance();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    $l$block_8: {
      var tmp10_isNotEmpty_0 = resumes;
      var tmp$ret$8;
      $l$block_7: {
        tmp$ret$8 = tmp10_isNotEmpty_0.length === 0;
        break $l$block_7;
      }
      tmp$ret$9 = !tmp$ret$8;
      break $l$block_8;
    }
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    else {
    }
    return resumes;
  };
  SharedFlowImpl.prototype.createSlot_mn6f4q_k$ = function () {
    return new SharedFlowSlot();
  };
  SharedFlowImpl.prototype.createSlotArray_n47sjm_k$ = function (size) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(size), null);
      break $l$block;
    }
    return tmp$ret$0;
  };
  SharedFlowImpl.prototype.resetReplayCache_tzw4vv_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = updateBufferLocked(this, _get_bufferEndIndex__3504262100(this), this.minCollectorIndex_1, _get_bufferEndIndex__3504262100(this), _get_queueEndIndex__278819049(this));
      break $l$block;
    }
    return tmp$ret$0;
  };
  SharedFlowImpl.prototype.fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  SharedFlowImpl.$metadata$ = {
    simpleName: 'SharedFlowImpl',
    kind: 'class',
    interfaces: [MutableSharedFlow, CancellableFlow, FusibleFlow]
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
  }
  SharedFlowSlot.prototype._set_index__964833971_wweqgk_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.index_1 = _set____804775014;
  };
  SharedFlowSlot.prototype._get_index__3322996031_g2optt_k$ = function () {
    unreachableDeclarationLog();
    return this.index_1;
  };
  SharedFlowSlot.prototype._set_cont__579811685_m1m10w_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.cont_1 = _set____804775014;
  };
  SharedFlowSlot.prototype._get_cont__794428761_d4zd5l_k$ = function () {
    unreachableDeclarationLog();
    return this.cont_1;
  };
  SharedFlowSlot.prototype.allocateLocked_qtt5lr_k$ = function (flow) {
    if (this.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0)
      return false;
    this.index_1 = flow.updateNewCollectorIndexLocked_xl3tlm_k$();
    return true;
  };
  SharedFlowSlot.prototype.allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_qtt5lr_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.prototype.freeLocked_o4dpjk_k$ = function (flow) {
    {
    }
    var oldIndex = this.index_1;
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
    return flow.updateCollectorIndexLocked_lspmte_k$(oldIndex);
  };
  SharedFlowSlot.prototype.freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_o4dpjk_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  SharedFlowSlot.$metadata$ = {
    simpleName: 'SharedFlowSlot',
    kind: 'class',
    interfaces: []
  };
  function getBufferAt(_this__1828080292, index) {
    init_properties_SharedFlow_kt_350587591();
    return _this__1828080292[index.toInt_1tsl84_k$() & (_this__1828080292.length - 1 | 0)];
  }
  function setBufferAt(_this__1828080292, index, item) {
    init_properties_SharedFlow_kt_350587591();
    return _this__1828080292[index.toInt_1tsl84_k$() & (_this__1828080292.length - 1 | 0)] = item;
  }
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    init_properties_SharedFlow_kt_350587591();
    {
      var tmp0_require_0 = replay >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message_1));
      }
    }
    {
      var tmp1_require_0 = extraBufferCapacity >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_0(message_1_0));
      }
    }
    {
      var tmp2_require_0 = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
      {
      }
      if (!tmp2_require_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
          break $l$block_1;
        }
        var message_1_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString_0(message_1_1));
      }
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function MutableSharedFlow$default(replay, extraBufferCapacity, onBufferOverflow, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      replay = 0;
    if (!(($mask0 & 2) === 0))
      extraBufferCapacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    return MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_1791144171;
  function init_properties_SharedFlow_kt_350587591() {
    if (!properties_initialized_SharedFlow_kt_1791144171) {
      properties_initialized_SharedFlow_kt_1791144171 = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function _get_NONE__774049299() {
    init_properties_StateFlow_kt_422687541();
    return NONE;
  }
  var NONE;
  function _get_PENDING__3223254138() {
    init_properties_StateFlow_kt_422687541();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
    unreachableDeclarationLog();
  }
  MutableStateFlow.$metadata$ = {
    simpleName: 'MutableStateFlow',
    kind: 'interface',
    interfaces: [StateFlow, MutableSharedFlow]
  };
  function MutableStateFlow_0(value) {
    init_properties_StateFlow_kt_422687541();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? _get_NULL__774226340() : tmp0_elvis_lhs);
  }
  function StateFlow() {
    unreachableDeclarationLog();
  }
  StateFlow.$metadata$ = {
    simpleName: 'StateFlow',
    kind: 'interface',
    interfaces: [SharedFlow]
  };
  function _get__state__4101327289_1($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function _set_sequence__1142279734($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.sequence_1 = _set____804775014;
  }
  function _get_sequence__368148522($this) {
    unreachableDeclarationLog();
    return $this.sequence_1;
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this._get_slots__3607782460_bd4r7o_k$();
    var tmp$ret$0;
    $l$block: {
      var oldState_2 = $this._state_1._get_value__3683422336_a43j40_k$();
      if (!(expectedState == null) ? !equals(oldState_2, expectedState) : false)
        return false;
      if (equals(oldState_2, newState))
        return true;
      $this._state_1._set_value__1325260276_x73o94_k$(newState);
      curSequence = $this.sequence_1;
      if ((curSequence & 1) === 0) {
        var tmp0_3 = curSequence;
        curSequence = tmp0_3 + 1 | 0;
        Unit_getInstance();
        $this.sequence_1 = curSequence;
      } else {
        $this.sequence_1 = curSequence + 2 | 0;
        return true;
      }
      curSlots = $this._get_slots__3607782460_bd4r7o_k$();
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver);
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_1.next_20eer_k$();
            {
              var tmp0_safe_receiver_4 = element_2;
              if (tmp0_safe_receiver_4 == null)
                null;
              else {
                tmp0_safe_receiver_4.makePending_e81oco_k$();
                Unit_getInstance();
              }
              Unit_getInstance();
            }
          }
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        if ($this.sequence_1 === curSequence) {
          $this.sequence_1 = curSequence + 1 | 0;
          return true;
        }
        curSequence = $this.sequence_1;
        curSlots = $this._get_slots__3607782460_bd4r7o_k$();
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
    }
  }
  function $collectCOROUTINE$9(_this__1828080292, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$9.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this.slot0__1 = this._this__1828080292__1.allocateSlot_67zie3_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(11);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(3);
                continue $sm;
              }
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
            this.oldState3__1 = null;
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this._set_state__1256591060_i39zdo_k$(9);
              continue $sm;
            }

            this.newState4__1 = this._this__1828080292__1._state_1._get_value__3683422336_a43j40_k$();
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
              Unit_getInstance();
            }

            Unit_getInstance();
            if (this.oldState3__1 == null ? true : !equals(this.oldState3__1, this.newState4__1)) {
              this._set_state__1256591060_i39zdo_k$(5);
              var tmp_2 = this;
              tmp_2.tmp0_unbox_05__1 = _get_NULL__774226340();
              var tmp_3;
              if (this.newState4__1 === this.tmp0_unbox_05__1) {
                tmp_3 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_4 = this.newState4__1;
                tmp_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
              }
              suspendResult = this.collector_1.emit_1fbrsb_k$(tmp_3, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(6);
              continue $sm;
            }

            break;
          case 5:
            this.oldState3__1 = this.newState4__1;
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 6:
            if (!this.slot0__1.takePending_f3q49c_k$()) {
              this._set_state__1256591060_i39zdo_k$(7);
              suspendResult = this.slot0__1.awaitPending_yebmnm_k$(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            }

            break;
          case 7:
            this._set_state__1256591060_i39zdo_k$(8);
            continue $sm;
          case 8:
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 9:
            this.tmp$ret$01__1 = Unit_getInstance();
            this._set_exceptionState__118868437_8fc1n_k$(12);
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 10:
            this._this__1828080292__1.freeSlot_w9jsdv_k$(this.slot0__1);
            return Unit_getInstance();
          case 11:
            this._set_exceptionState__118868437_8fc1n_k$(12);
            var t = this._get_exception__1672948706_ro13he_k$();
            this._this__1828080292__1.freeSlot_w9jsdv_k$(this.slot0__1);
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
  $collectCOROUTINE$9.$metadata$ = {
    simpleName: '$collectCOROUTINE$9',
    kind: 'class',
    interfaces: []
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this._state_1 = atomic$ref$1(initialState);
    this.sequence_1 = 0;
  }
  StateFlowImpl.prototype._set_value__1325260276_x73o94_k$ = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? _get_NULL__774226340() : tmp0_elvis_lhs);
    Unit_getInstance();
  };
  StateFlowImpl.prototype._get_value__3683422336_a43j40_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unbox_0 = _get_NULL__774226340();
      var tmp1_unbox_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var tmp;
      if (tmp1_unbox_0 === tmp0_unbox_0) {
        tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
      } else {
        tmp = isObject(tmp1_unbox_0) ? tmp1_unbox_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.compareAndSet_fjyiiu_k$ = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? _get_NULL__774226340() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? _get_NULL__774226340() : tmp1_elvis_lhs);
  };
  StateFlowImpl.prototype._get_replayCache__3488441622_dc6n6y_k$ = function () {
    unreachableDeclarationLog();
    return listOf(this._get_value__3683422336_a43j40_k$());
  };
  StateFlowImpl.prototype.tryEmit_4zef7h_k$ = function (value) {
    this._set_value__1325260276_x73o94_k$(value);
    return true;
  };
  StateFlowImpl.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    this._set_value__1325260276_x73o94_k$(value);
    return Unit_getInstance();
  };
  StateFlowImpl.prototype.resetReplayCache_tzw4vv_k$ = function () {
    unreachableDeclarationLog();
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  StateFlowImpl.prototype.collect_4rdebi_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$9(this, collector, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  StateFlowImpl.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_4rdebi_k$(collector, $cont);
  };
  StateFlowImpl.prototype.createSlot_mn6f4q_k$ = function () {
    return new StateFlowSlot();
  };
  StateFlowImpl.prototype.createSlotArray_n47sjm_k$ = function (size) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(size), null);
      break $l$block;
    }
    return tmp$ret$0;
  };
  StateFlowImpl.prototype.fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  StateFlowImpl.$metadata$ = {
    simpleName: 'StateFlowImpl',
    kind: 'class',
    interfaces: [MutableStateFlow, CancellableFlow, FusibleFlow]
  };
  function _get__state__4101327289_2($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this._state_1 = atomic$ref$1(null);
  }
  StateFlowSlot.prototype.allocateLocked_v1uryr_k$ = function (flow) {
    if (!(this._state_1._get_value__3683422336_a43j40_k$() == null))
      return false;
    this._state_1._set_value__1325260276_x73o94_k$(_get_NONE__774049299());
    return true;
  };
  StateFlowSlot.prototype.allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_v1uryr_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.freeLocked_l01cri_k$ = function (flow) {
    this._state_1._set_value__1325260276_x73o94_k$(null);
    return _get_EMPTY_RESUMES__228476573();
  };
  StateFlowSlot.prototype.freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_l01cri_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.makePending_e81oco_k$ = function () {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330 == null)
            return Unit_getInstance();
          else if (tmp1__anonymous__1_4003154330 === _get_PENDING__3223254138())
            return Unit_getInstance();
          else if (tmp1__anonymous__1_4003154330 === _get_NONE__774049299()) {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, _get_PENDING__3223254138()))
              return Unit_getInstance();
          } else {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, _get_NONE__774049299())) {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_resume_0_2 = tmp1__anonymous__1_4003154330 instanceof CancellableContinuationImpl ? tmp1__anonymous__1_4003154330 : THROW_CCE();
                var tmp$ret$0;
                $l$block: {
                  var tmp0_success_0_1_3 = Companion_getInstance();
                  tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
                  break $l$block;
                }
                tmp$ret$1 = tmp0_resume_0_2.resumeWith_s3a3yh_k$(tmp$ret$0);
                break $l$block_0;
              }
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  StateFlowSlot.prototype.takePending_f3q49c_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_let_0 = ensureNotNull(this._state_1.atomicfu$getAndSet(_get_NONE__774049299()));
      {
      }
      {
      }
      return tmp0_let_0 === _get_PENDING__3223254138();
    }
    return tmp$ret$0;
  };
  StateFlowSlot.prototype.awaitPending_yebmnm_k$ = function ($cont) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      var tmp$ret$0;
      $l$block: {
        {
        }
        if (this._state_1.atomicfu$compareAndSet(_get_NONE__774049299(), cancellable_2_2)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_success_0_1_4 = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_0;
          }
          tmp$ret$2 = cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$1);
          break $l$block_1;
        }
      }
      tmp$ret$3 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  StateFlowSlot.$metadata$ = {
    simpleName: 'StateFlowSlot',
    kind: 'class',
    interfaces: []
  };
  function fuseStateFlow(_this__1828080292, context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    init_properties_StateFlow_kt_422687541();
    {
    }
    if (((0 <= capacity ? capacity <= 1 : false) ? true : capacity === Factory_getInstance()._get_BUFFERED__34970316_ktj9o_k$()) ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) {
      return _this__1828080292;
    }
    return fuseSharedFlow(_this__1828080292, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_1438988433;
  function init_properties_StateFlow_kt_422687541() {
    if (!properties_initialized_StateFlow_kt_1438988433) {
      properties_initialized_StateFlow_kt_1438988433 = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function _get_EMPTY_RESUMES__228476573() {
    init_properties_AbstractSharedFlow_kt_3415088837();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function _set_slots__1249620400($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.slots_1 = _set____804775014;
  }
  function _set_nCollectors__363905521($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.nCollectors_1 = _set____804775014;
  }
  function _set_nextIndex__3954150406($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.nextIndex_1 = _set____804775014;
  }
  function _get_nextIndex__1430919314($this) {
    unreachableDeclarationLog();
    return $this.nextIndex_1;
  }
  function _set__subscriptionCount__3012572548($this, _set____804775014) {
    unreachableDeclarationLog();
    $this._subscriptionCount_1 = _set____804775014;
  }
  function _get__subscriptionCount__960300664($this) {
    unreachableDeclarationLog();
    return $this._subscriptionCount_1;
  }
  function AbstractSharedFlow() {
    this.slots_1 = null;
    this.nCollectors_1 = 0;
    this.nextIndex_1 = 0;
    this._subscriptionCount_1 = null;
  }
  AbstractSharedFlow.prototype._get_slots__3607782460_bd4r7o_k$ = function () {
    return this.slots_1;
  };
  AbstractSharedFlow.prototype._get_nCollectors__2195348349_yq24cj_k$ = function () {
    return this.nCollectors_1;
  };
  AbstractSharedFlow.prototype._get_subscriptionCount__356203423_5w2obj_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_elvis_lhs_2 = this._subscriptionCount_1;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_also_0_3 = new SubscriptionCountStateFlow(this.nCollectors_1);
            {
            }
            {
              this._subscriptionCount_1 = tmp0_also_0_3;
            }
            tmp$ret$0 = tmp0_also_0_3;
            break $l$block;
          }
          tmp = tmp$ret$0;
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  AbstractSharedFlow.prototype.allocateSlot_67zie3_k$ = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$3;
      $l$block_2: {
        var curSlots_3 = this.slots_1;
        var tmp;
        if (curSlots_3 == null) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_also_0_4 = this.createSlotArray_n47sjm_k$(2);
            {
            }
            {
              this.slots_1 = tmp0_also_0_4;
            }
            tmp$ret$0 = tmp0_also_0_4;
            break $l$block;
          }
          tmp = tmp$ret$0;
        } else {
          var tmp_0;
          if (this.nCollectors_1 >= curSlots_3.length) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp1_also_0_5 = copyOf(curSlots_3, imul(2, curSlots_3.length));
              {
              }
              {
                this.slots_1 = tmp1_also_0_5;
              }
              tmp$ret$1 = tmp1_also_0_5;
              break $l$block_0;
            }
            tmp_0 = tmp$ret$1;
          } else {
            tmp_0 = curSlots_3;
          }
          tmp = tmp_0;
        }
        var slots_2 = tmp;
        var index_6 = this.nextIndex_1;
        var slot_7;
        $l$loop: while (true) {
          var tmp0_elvis_lhs_8 = slots_2[index_6];
          var tmp_1;
          if (tmp0_elvis_lhs_8 == null) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp2_also_0_9 = this.createSlot_mn6f4q_k$();
              {
              }
              {
                slots_2[index_6] = tmp2_also_0_9;
              }
              tmp$ret$2 = tmp2_also_0_9;
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          } else {
            tmp_1 = tmp0_elvis_lhs_8;
          }
          slot_7 = tmp_1;
          var tmp1_10 = index_6;
          index_6 = tmp1_10 + 1 | 0;
          Unit_getInstance();
          if (index_6 >= slots_2.length)
            index_6 = 0;
          if ((slot_7 instanceof AbstractSharedFlowSlot ? slot_7 : THROW_CCE()).allocateLocked_8qz7hq_k$(this))
            break $l$loop;
          else {
          }
        }
        this.nextIndex_1 = index_6;
        var tmp2_this_11 = this;
        var tmp3_12 = tmp2_this_11.nCollectors_1;
        tmp2_this_11.nCollectors_1 = tmp3_12 + 1 | 0;
        Unit_getInstance();
        subscriptionCount = this._subscriptionCount_1;
        tmp$ret$3 = slot_7;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    var slot = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.increment_t15t82_k$(1);
    Unit_getInstance();
    return slot;
  };
  AbstractSharedFlow.prototype.freeSlot_w9jsdv_k$ = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_this_2 = this;
        var tmp1_3 = tmp0_this_2.nCollectors_1;
        tmp0_this_2.nCollectors_1 = tmp1_3 - 1 | 0;
        Unit_getInstance();
        subscriptionCount = this._subscriptionCount_1;
        if (this.nCollectors_1 === 0)
          this.nextIndex_1 = 0;
        tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_l0ao83_k$(this);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$2 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_1;
          }
          tmp$ret$3 = tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$2);
          break $l$block_2;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.increment_t15t82_k$(-1);
    Unit_getInstance();
  };
  AbstractSharedFlow.prototype.forEachSlotLocked_fx14oo_k$ = function (block) {
    unreachableDeclarationLog();
    if (this.nCollectors_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.slots_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      {
        var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_2 = tmp0_iterator_1.next_20eer_k$();
          {
            if (!(element_2 == null))
              block(element_2);
          }
        }
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  AbstractSharedFlow.$metadata$ = {
    simpleName: 'AbstractSharedFlow',
    kind: 'class',
    interfaces: []
  };
  function AbstractSharedFlowSlot() {
  }
  AbstractSharedFlowSlot.$metadata$ = {
    simpleName: 'AbstractSharedFlowSlot',
    kind: 'class',
    interfaces: []
  };
  function SubscriptionCountStateFlow(initialValue) {
    unreachableDeclarationLog();
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$(), BufferOverflow_DROP_OLDEST_getInstance());
    this.tryEmit_4zef7h_k$(initialValue);
    Unit_getInstance();
  }
  SubscriptionCountStateFlow.prototype._get_value__3683422336_a43j40_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_lastReplayedLocked__70213285_15swx1_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  SubscriptionCountStateFlow.prototype.increment_t15t82_k$ = function (delta) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this.tryEmit_4zef7h_k$(this._get_lastReplayedLocked__70213285_15swx1_k$() + delta | 0);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  SubscriptionCountStateFlow.$metadata$ = {
    simpleName: 'SubscriptionCountStateFlow',
    kind: 'class',
    interfaces: [StateFlow]
  };
  var properties_initialized_AbstractSharedFlow_kt_4135903465;
  function init_properties_AbstractSharedFlow_kt_3415088837() {
    if (!properties_initialized_AbstractSharedFlow_kt_4135903465) {
      properties_initialized_AbstractSharedFlow_kt_4135903465 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function FusibleFlow() {
    unreachableDeclarationLog();
  }
  FusibleFlow.$metadata$ = {
    simpleName: 'FusibleFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    unreachableDeclarationLog();
    if (!(($mask0 & 2) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 4) === 0))
      capacity = Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$();
    if (!(($mask0 & 8) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    ChannelFlowOperatorImpl.call($this, flow, context, capacity, onBufferOverflow);
    return $this;
  }
  function ChannelFlowOperatorImpl_init_$Create$(flow, context, capacity, onBufferOverflow, $mask0, $marker) {
    unreachableDeclarationLog();
    return ChannelFlowOperatorImpl_init_$Init$(flow, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(ChannelFlowOperatorImpl.prototype));
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  ChannelFlowOperatorImpl.prototype.create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    return new ChannelFlowOperatorImpl(this._get_flow__797111005_d6kusd_k$(), context, capacity, onBufferOverflow);
  };
  ChannelFlowOperatorImpl.prototype.dropChannelOperators_b7m5cr_k$ = function () {
    unreachableDeclarationLog();
    return this._get_flow__797111005_d6kusd_k$();
  };
  ChannelFlowOperatorImpl.prototype.flowCollect_ltb8cl_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    return this._get_flow__797111005_d6kusd_k$().collect_llpwvh_k$(collector, $cont);
  };
  ChannelFlowOperatorImpl.$metadata$ = {
    simpleName: 'ChannelFlowOperatorImpl',
    kind: 'class',
    interfaces: []
  };
  function collectWithContextUndispatched($this, collector, newContext, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = $cont._get_context__1558698818_ps0bpe_k$();
      break $l$block;
    }
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched$default(newContext, originalContextCollector, null, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $cont, 4, null);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.invoke_i6lhpd_k$ = function (it, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_w91w5e_k$(it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_i6lhpd_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.this$0__1.flowCollect_ltb8cl_k$(this.it_1, this);
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
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.create_w91w5e_k$ = function (it, completion) {
    unreachableDeclarationLog();
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_w91w5e_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  ChannelFlowOperator$collectWithContextUndispatched$slambda.$metadata$ = {
    simpleName: 'ChannelFlowOperator$collectWithContextUndispatched$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    unreachableDeclarationLog();
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_i6lhpd_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__1828080292, collector, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$10.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            if (this._this__1828080292__1._get_capacity__3674243665_a9k9f3_k$() === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$()) {
              var tmp_0 = this;
              tmp_0.collectContext0__1 = this._get_context__1558698818_ps0bpe_k$();
              this.newContext1__1 = this.collectContext0__1.plus_rgw9wi_k$(this._this__1828080292__1._get_context__1558698818_ps0bpe_k$());
              if (equals(this.newContext1__1, this.collectContext0__1)) {
                this._set_state__1256591060_i39zdo_k$(6);
                suspendResult = this._this__1828080292__1.flowCollect_ltb8cl_k$(this.collector_1, this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this._set_state__1256591060_i39zdo_k$(1);
                continue $sm;
              }
            } else {
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            }

            break;
          case 1:
            if (equals(this.newContext1__1.get_1pi7hg_k$(Key_getInstance()), this.collectContext0__1.get_1pi7hg_k$(Key_getInstance()))) {
              this._set_state__1256591060_i39zdo_k$(5);
              suspendResult = collectWithContextUndispatched(this._this__1828080292__1, this.collector_1, this.newContext1__1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this._set_state__1256591060_i39zdo_k$(4);
            suspendResult = ChannelFlow.prototype.collect_llpwvh_k$.call(this._this__1828080292__1, this.collector_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
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
  $collectCOROUTINE$10.$metadata$ = {
    simpleName: '$collectCOROUTINE$10',
    kind: 'class',
    interfaces: []
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.flow_1 = flow;
  }
  ChannelFlowOperator.prototype._get_flow__797111005_d6kusd_k$ = function () {
    unreachableDeclarationLog();
    return this.flow_1;
  };
  ChannelFlowOperator.prototype.collectTo_cxc1tf_k$ = function (scope, $cont) {
    unreachableDeclarationLog();
    return this.flowCollect_ltb8cl_k$(new SendingCollector(scope), $cont);
  };
  ChannelFlowOperator.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ChannelFlowOperator.prototype.toString = function () {
    unreachableDeclarationLog();
    return '' + this.flow_1 + ' -> ' + ChannelFlow.prototype.toString.call(this);
  };
  ChannelFlowOperator.$metadata$ = {
    simpleName: 'ChannelFlowOperator',
    kind: 'class',
    interfaces: []
  };
  function ChannelFlow$_get_collectToFun_$slambda_3137526458(this$0, resultContinuation) {
    unreachableDeclarationLog();
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.invoke_7587ie_k$ = function (it, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_xnm1el_k$(it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_7587ie_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.this$0__1.collectTo_cxc1tf_k$(this.it_1, this);
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
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.create_xnm1el_k$ = function (it, completion) {
    unreachableDeclarationLog();
    var i = new ChannelFlow$_get_collectToFun_$slambda_3137526458(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  ChannelFlow$_get_collectToFun_$slambda_3137526458.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_xnm1el_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  ChannelFlow$_get_collectToFun_$slambda_3137526458.$metadata$ = {
    simpleName: 'ChannelFlow$<get-collectToFun>$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function ChannelFlow$_get_collectToFun_$slambda_3137526458_0(this$0, resultContinuation) {
    unreachableDeclarationLog();
    var i = new ChannelFlow$_get_collectToFun_$slambda_3137526458(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_7587ie_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    unreachableDeclarationLog();
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  ChannelFlow$collect$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ChannelFlow$collect$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ChannelFlow$collect$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = emitAll(this.$collector_1, this.this$0__1.produceImpl_3l1x6h_k$(this.$this$coroutineScope_1), this);
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
  ChannelFlow$collect$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    unreachableDeclarationLog();
    var i = new ChannelFlow$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  ChannelFlow$collect$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  ChannelFlow$collect$slambda.$metadata$ = {
    simpleName: 'ChannelFlow$collect$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    unreachableDeclarationLog();
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    this.context_1 = context;
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    {
    }
  }
  ChannelFlow.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    unreachableDeclarationLog();
    return this.context_1;
  };
  ChannelFlow.prototype._get_capacity__3674243665_a9k9f3_k$ = function () {
    unreachableDeclarationLog();
    return this.capacity_1;
  };
  ChannelFlow.prototype._get_onBufferOverflow__4024079050_4ha2pi_k$ = function () {
    unreachableDeclarationLog();
    return this.onBufferOverflow_1;
  };
  ChannelFlow.prototype._get_collectToFun__2611193489_ruh46n_k$ = function () {
    unreachableDeclarationLog();
    return ChannelFlow$_get_collectToFun_$slambda_3137526458_0(this, null);
  };
  ChannelFlow.prototype._get_produceCapacity__3418368407_ehwk15_k$ = function () {
    unreachableDeclarationLog();
    return this.capacity_1 === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$() ? Factory_getInstance()._get_BUFFERED__34970316_ktj9o_k$() : this.capacity_1;
  };
  ChannelFlow.prototype.dropChannelOperators_b7m5cr_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  ChannelFlow.prototype.fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    unreachableDeclarationLog();
    {
    }
    var newContext = context.plus_rgw9wi_k$(this.context_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.capacity_1 === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$()) {
        tmp = this.capacity_1;
      } else if (this.capacity_1 === Factory_getInstance()._get_BUFFERED__34970316_ktj9o_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance()._get_BUFFERED__34970316_ktj9o_k$()) {
        tmp = this.capacity_1;
      } else {
        {
        }
        {
        }
        var sum = this.capacity_1 + capacity | 0;
        tmp = sum >= 0 ? sum : Factory_getInstance()._get_UNLIMITED__1868210608_uwa8j4_k$();
      }
      newCapacity = tmp;
      newOverflow = this.onBufferOverflow_1;
    }
    if ((equals(newContext, this.context_1) ? newCapacity === this.capacity_1 : false) ? newOverflow.equals(this.onBufferOverflow_1) : false)
      return this;
    return this.create_ne139a_k$(newContext, newCapacity, newOverflow);
  };
  ChannelFlow.prototype.produceImpl_3l1x6h_k$ = function (scope) {
    unreachableDeclarationLog();
    var tmp = this._get_produceCapacity__3418368407_ehwk15_k$();
    var tmp_0 = CoroutineStart_ATOMIC_getInstance();
    return produce$default(scope, this.context_1, tmp, this.onBufferOverflow_1, tmp_0, null, this._get_collectToFun__2611193489_ruh46n_k$(), 16, null);
  };
  ChannelFlow.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $cont);
  };
  ChannelFlow.prototype.additionalToStringProps_j3cp6l_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  ChannelFlow.prototype.toString = function () {
    unreachableDeclarationLog();
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.additionalToStringProps_j3cp6l_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = props.add_1j60pz_k$(tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
    }
    Unit_getInstance();
    if (!(this.context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_1j60pz_k$('context=' + this.context_1);
      Unit_getInstance();
    }
    if (!(this.capacity_1 === Factory_getInstance()._get_OPTIONAL_CHANNEL__3501258823_d4jxdl_k$())) {
      props.add_1j60pz_k$('capacity=' + this.capacity_1);
      Unit_getInstance();
    }
    if (!this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_1j60pz_k$('onBufferOverflow=' + this.onBufferOverflow_1);
      Unit_getInstance();
    }
    var tmp = _get_classSimpleName__3937513404(this);
    return tmp + '[' + joinToString$default(props, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  ChannelFlow.$metadata$ = {
    simpleName: 'ChannelFlow',
    kind: 'class',
    interfaces: [FusibleFlow]
  };
  function withUndispatchedContextCollector(_this__1828080292, emitContext) {
    unreachableDeclarationLog();
    var tmp0_subject = _this__1828080292;
    var tmp;
    var tmp_0;
    if (tmp0_subject instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = tmp0_subject instanceof NopCollector;
      }
    }
    if (tmp_0) {
      tmp = _this__1828080292;
    } else {
      {
        tmp = new UndispatchedContextCollector(_this__1828080292, emitContext);
      }
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $cont) {
    unreachableDeclarationLog();
    var tmp$ret$4;
    $l$block_3: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_startCoroutineUninterceptedOrReturn_0_2_2 = new StackFrameContinuation(tmp0__anonymous__1_2495602521, newContext);
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = block;
              break $l$block;
            }
            var a_1_3_3 = tmp$ret$0;
            tmp$ret$1 = typeof a_1_3_3 === 'function' ? a_1_3_3(value, tmp0_startCoroutineUninterceptedOrReturn_0_2_2) : block.invoke_5zdxxo_k$(value, tmp0_startCoroutineUninterceptedOrReturn_0_2_2);
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  function withContextUndispatched$default(newContext, value, countOrElement, block, $cont, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      countOrElement = threadContextElements(newContext);
    return withContextUndispatched(newContext, value, countOrElement, block, $cont);
  }
  function _get_emitContext__339389109($this) {
    unreachableDeclarationLog();
    return $this.emitContext_1;
  }
  function _get_countOrElement__2919327745($this) {
    unreachableDeclarationLog();
    return $this.countOrElement_1;
  }
  function _get_emitRef__3125581649($this) {
    unreachableDeclarationLog();
    return $this.emitRef_1;
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    unreachableDeclarationLog();
    this.$downstream_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  UndispatchedContextCollector$emitRef$slambda.prototype.invoke_tr8wvu_k$ = function (it, $cont) {
    unreachableDeclarationLog();
    var tmp = this.create_aq37ol_k$(it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    unreachableDeclarationLog();
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this.$downstream_1.emit_1fbrsb_k$(this.it_1, this);
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
  UndispatchedContextCollector$emitRef$slambda.prototype.create_aq37ol_k$ = function (it, completion) {
    unreachableDeclarationLog();
    var i = new UndispatchedContextCollector$emitRef$slambda(this.$downstream_1, completion);
    i.it_1 = it;
    return i;
  };
  UndispatchedContextCollector$emitRef$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    unreachableDeclarationLog();
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  UndispatchedContextCollector$emitRef$slambda.$metadata$ = {
    simpleName: 'UndispatchedContextCollector$emitRef$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    unreachableDeclarationLog();
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_tr8wvu_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    unreachableDeclarationLog();
    this.emitContext_1 = emitContext;
    this.countOrElement_1 = threadContextElements(this.emitContext_1);
    var tmp = this;
    tmp.emitRef_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  UndispatchedContextCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return withContextUndispatched(this.emitContext_1, value, this.countOrElement_1, this.emitRef_1, $cont);
  };
  UndispatchedContextCollector.$metadata$ = {
    simpleName: 'UndispatchedContextCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function _get_uCont__3627170666($this) {
    unreachableDeclarationLog();
    return $this.uCont_1;
  }
  function StackFrameContinuation(uCont, context) {
    unreachableDeclarationLog();
    this.uCont_1 = uCont;
    this.context_1 = context;
  }
  StackFrameContinuation.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    unreachableDeclarationLog();
    return this.context_1;
  };
  StackFrameContinuation.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  StackFrameContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    unreachableDeclarationLog();
    this.uCont_1.resumeWith_s3a3yh_k$(result);
  };
  StackFrameContinuation.prototype.getStackTraceElement_um8m53_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  StackFrameContinuation.$metadata$ = {
    simpleName: 'StackFrameContinuation',
    kind: 'class',
    interfaces: [Continuation, CoroutineStackFrame]
  };
  function checkOwnership(_this__1828080292, owner) {
    unreachableDeclarationLog();
    if (!(_this__1828080292._get_owner__3503380350_d3agea_k$() === owner))
      throw _this__1828080292;
  }
  function NopCollector() {
    unreachableDeclarationLog();
    NopCollector_instance = this;
  }
  NopCollector.prototype.emit_pisoht_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return Unit_getInstance();
  };
  NopCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  NopCollector.$metadata$ = {
    simpleName: 'NopCollector',
    kind: 'object',
    interfaces: [FlowCollector]
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    unreachableDeclarationLog();
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function _get_NULL__774226340() {
    init_properties_NullSurrogate_kt_3789141955();
    return NULL;
  }
  var NULL;
  function _get_UNINITIALIZED__1009105334() {
    unreachableDeclarationLog();
    init_properties_NullSurrogate_kt_3789141955();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function _get_DONE__764814089() {
    unreachableDeclarationLog();
    init_properties_NullSurrogate_kt_3789141955();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_4096995103;
  function init_properties_NullSurrogate_kt_3789141955() {
    if (!properties_initialized_NullSurrogate_kt_4096995103) {
      properties_initialized_NullSurrogate_kt_4096995103 = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    unreachableDeclarationLog();
    return new _no_name_provided__2671100649_0(block);
  }
  function checkContext(_this__1828080292, currentContext) {
    var result = currentContext.fold_6dbyow_k$(0, checkContext$lambda(_this__1828080292));
    if (!(result === _this__1828080292._get_collectContextSize__2324965765_wkvywr_k$())) {
      {
        var tmp0_error_0 = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__1828080292._get_collectContext__2677071238_qr94l6_k$() + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      }
    }
  }
  function transitiveCoroutineParent(_this__1828080292, collectJob) {
    var $this = _this__1828080292;
    var collectJob_0 = collectJob;
    while (true) {
      var $this_0 = $this;
      var collectJob_1 = collectJob_0;
      if ($this_0 === null)
        return null;
      if ($this_0 === collectJob_1)
        return $this_0;
      if (!($this_0 instanceof ScopeCoroutine))
        return $this_0;
      else {
      }
      var tmp0 = $this_0._get_parent__1491962785_oo9xup_k$();
      var tmp1 = collectJob_1;
      $this = tmp0;
      collectJob_0 = tmp1;
      continue;
    }
  }
  function _no_name_provided__2671100649_0($block) {
    unreachableDeclarationLog();
    this.$block_1 = $block;
  }
  _no_name_provided__2671100649_0.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    return this.$block_1(collector, $cont);
  };
  _no_name_provided__2671100649_0.$metadata$ = {
    kind: 'class',
    interfaces: [Flow]
  };
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element._get_key__857139730_e6bh8y_k$();
      Unit_getInstance();
      var collectElement = $this_checkContext._get_collectContext__2677071238_qr94l6_k$().get_1pi7hg_k$(key);
      Unit_getInstance();
      var tmp;
      if (!(key === Key_getInstance_2())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$() : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      Unit_getInstance();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      Unit_getInstance();
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error_0 = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function _get_channel__3558637166($this) {
    unreachableDeclarationLog();
    return $this.channel_1;
  }
  function SendingCollector(channel) {
    unreachableDeclarationLog();
    this.channel_1 = channel;
  }
  SendingCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.channel_1.send_4idxxh_k$(value, $cont);
  };
  SendingCollector.$metadata$ = {
    simpleName: 'SendingCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function CancellableFlow() {
    unreachableDeclarationLog();
  }
  CancellableFlow.$metadata$ = {
    simpleName: 'CancellableFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function _get_defaultKeySelector__3745859790() {
    unreachableDeclarationLog();
    init_properties_Distinct_kt_2113607454();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function _get_defaultAreEquivalent__3297369294() {
    unreachableDeclarationLog();
    init_properties_Distinct_kt_2113607454();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda() {
    unreachableDeclarationLog();
    return function (it) {
      return it;
    };
  }
  function defaultAreEquivalent$lambda() {
    unreachableDeclarationLog();
    return function (old, new_0) {
      return equals(old, new_0);
    };
  }
  var properties_initialized_Distinct_kt_2423486018;
  function init_properties_Distinct_kt_2113607454() {
    unreachableDeclarationLog();
    if (!properties_initialized_Distinct_kt_2423486018) {
      properties_initialized_Distinct_kt_2423486018 = true;
      defaultKeySelector = defaultKeySelector$lambda();
      defaultAreEquivalent = defaultAreEquivalent$lambda();
    }
  }
  function ensureActive_1(_this__1828080292) {
    unreachableDeclarationLog();
    if (_this__1828080292 instanceof ThrowingCollector)
      throw _this__1828080292.e_1;
    else {
    }
  }
  function ThrowingCollector(e) {
    unreachableDeclarationLog();
    this.e_1 = e;
  }
  ThrowingCollector.prototype._get_e__461226380_7mlojw_k$ = function () {
    unreachableDeclarationLog();
    return this.e_1;
  };
  ThrowingCollector.prototype.emit_pisoht_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    throw this.e_1;
  };
  ThrowingCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  ThrowingCollector.$metadata$ = {
    simpleName: 'ThrowingCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function takeWhile(_this__1828080292, predicate) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971(_this__1828080292, predicate);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function collectWhile(_this__1828080292, predicate, $cont) {
    unreachableDeclarationLog();
    var tmp = new $collectWhileCOROUTINE$11(_this__1828080292, predicate, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emit_3_9COROUTINE$13(_this__1828080292, value, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.value_1 = value;
  }
  $emit_3_9COROUTINE$13.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.$predicate_1(this.value_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = this._this__1828080292__1.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.WHEN_RESULT0__1 = false;
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.WHEN_RESULT0__1 = true;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__1828080292__1);
            } else {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            Unit_getInstance();
            break;
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
  $emit_3_9COROUTINE$13.$metadata$ = {
    simpleName: '$emit_3_9COROUTINE$13',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2_8_3078888725($predicate, $collector) {
    unreachableDeclarationLog();
    this.$predicate_1 = $predicate;
    this.$collector_1 = $collector;
  }
  _no_name_provided__2_8_3078888725.prototype.emit_3_9_4w7j0d_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    var tmp = new $emit_3_9COROUTINE$13(this, value, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__2_8_3078888725.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.emit_3_9_4w7j0d_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__2_8_3078888725.$metadata$ = {
    simpleName: '<no name provided>_2_8',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2COROUTINE$12(_this__1828080292, collector, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.collector_1 = collector;
  }
  $collect_2COROUTINE$12.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_0 = this;
            tmp_0.collector_1_70__1 = new _no_name_provided__2_8_3078888725(this._this__1828080292__1.$predicate_1, this.collector_1);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.$this_takeWhile_1.collect_llpwvh_k$(this.collector_1_70__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e_7_13 = this._get_exception__1672948706_ro13he_k$();
              checkOwnership(e_7_13, this.collector_1_70__1);
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
  $collect_2COROUTINE$12.$metadata$ = {
    simpleName: '$collect_2COROUTINE$12',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_2832250971($this_takeWhile, $predicate) {
    unreachableDeclarationLog();
    this.$this_takeWhile_1 = $this_takeWhile;
    this.$predicate_1 = $predicate;
  }
  _no_name_provided__1_2832250971.prototype.collect_2_gyp8be_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    var tmp = new $collect_2COROUTINE$12(this, collector, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__1_2832250971.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    unreachableDeclarationLog();
    return this.collect_2_gyp8be_k$(collector, $cont);
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function $emitCOROUTINE$14(_this__1828080292, value, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.value_1 = value;
  }
  $emitCOROUTINE$14.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.$predicate_1(this.value_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__1828080292__1);
            } else {
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
  $emitCOROUTINE$14.$metadata$ = {
    simpleName: '$emitCOROUTINE$14',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2671100649_1($predicate) {
    unreachableDeclarationLog();
    this.$predicate_1 = $predicate;
  }
  _no_name_provided__2671100649_1.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    var tmp = new $emitCOROUTINE$14(this, value, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__2671100649_1.$metadata$ = {
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collectWhileCOROUTINE$11(_this__1828080292, predicate, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.predicate_1 = predicate;
  }
  $collectWhileCOROUTINE$11.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__2671100649_1(this.predicate_1);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this._get_exception__1672948706_ro13he_k$();
              checkOwnership(e, this.collector0__1);
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
  $collectWhileCOROUTINE$11.$metadata$ = {
    simpleName: '$collectWhileCOROUTINE$11',
    kind: 'class',
    interfaces: []
  };
  function _get_DEFAULT_CONCURRENCY__1705117404() {
    unreachableDeclarationLog();
    init_properties_Merge_kt_1855583292();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function _get_DEFAULT_CONCURRENCY_PROPERTY_NAME__758326374() {
    unreachableDeclarationLog();
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_815695768;
  function init_properties_Merge_kt_1855583292() {
    unreachableDeclarationLog();
    if (!properties_initialized_Merge_kt_815695768) {
      properties_initialized_Merge_kt_815695768 = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$());
    }
  }
  function _get_collector__1245886308($this) {
    unreachableDeclarationLog();
    return $this.collector_1;
  }
  function _get_action__1123534741($this) {
    unreachableDeclarationLog();
    return $this.action_1;
  }
  function $onSubscriptionCOROUTINE$15(_this__1828080292, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
  }
  $onSubscriptionCOROUTINE$15.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this._this__1828080292__1.collector_1, this._get_context__1558698818_ps0bpe_k$());
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(6);
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__1.action_1(this.safeCollector0__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this._set_exceptionState__118868437_8fc1n_k$(7);
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            var tmp_1 = this._this__1828080292__1.collector_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this._set_state__1256591060_i39zdo_k$(4);
              suspendResult = this._this__1828080292__1.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(5);
                continue $sm;
              }
            }

            break;
          case 4:
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this._set_exceptionState__118868437_8fc1n_k$(7);
            var t = this._get_exception__1672948706_ro13he_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            throw t;
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
  $onSubscriptionCOROUTINE$15.$metadata$ = {
    simpleName: '$onSubscriptionCOROUTINE$15',
    kind: 'class',
    interfaces: []
  };
  function SubscribedFlowCollector(collector, action) {
    unreachableDeclarationLog();
    this.collector_1 = collector;
    this.action_1 = action;
  }
  SubscribedFlowCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.collector_1.emit_1fbrsb_k$(value, $cont);
  };
  SubscribedFlowCollector.prototype.onSubscription_igsb49_k$ = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$15(this, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SubscribedFlowCollector.$metadata$ = {
    simpleName: 'SubscribedFlowCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function collect(_this__1828080292, $cont) {
    unreachableDeclarationLog();
    return _this__1828080292.collect_llpwvh_k$(NopCollector_getInstance(), $cont);
  }
  function first(_this__1828080292, predicate, $cont) {
    unreachableDeclarationLog();
    var tmp = new $firstCOROUTINE$16(_this__1828080292, predicate, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emit_3COROUTINE$17(_this__1828080292, value, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.value_1 = value;
  }
  $emit_3COROUTINE$17.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.$predicate_1(this.value_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this._this__1828080292__1.$result_1._v = this.value_1;
              tmp_0.WHEN_RESULT0__1 = false;
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT0__1 = true;
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__1828080292__1);
            } else {
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            }

            Unit_getInstance();
            break;
          case 3:
            return Unit_getInstance();
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
  $emit_3COROUTINE$17.$metadata$ = {
    simpleName: '$emit_3COROUTINE$17',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2_2832250972($predicate, $result) {
    unreachableDeclarationLog();
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  _no_name_provided__2_2832250972.prototype.emit_3_z87y47_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    var tmp = new $emit_3COROUTINE$17(this, value, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__2_2832250972.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    unreachableDeclarationLog();
    return this.emit_3_z87y47_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__2_2832250972.$metadata$ = {
    simpleName: '<no name provided>_2',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $firstCOROUTINE$16(_this__1828080292, predicate, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.predicate_1 = predicate;
  }
  $firstCOROUTINE$16.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this.result0__1 = {_v: _get_NULL__774226340()};
            var tmp_0 = this;
            tmp_0.collector_11__1 = new _no_name_provided__2_2832250972(this.predicate_1, this.result0__1);
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.collect_llpwvh_k$(this.collector_11__1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 2:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            var tmp_1 = this._get_exception__1672948706_ro13he_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e_7 = this._get_exception__1672948706_ro13he_k$();
              checkOwnership(e_7, this.collector_11__1);
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
            if (this.result0__1._v === _get_NULL__774226340())
              throw NoSuchElementException_init_$Create$('Expected at least one element matching the predicate ' + this.predicate_1);
            var tmp_2 = this.result0__1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
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
  $firstCOROUTINE$16.$metadata$ = {
    simpleName: '$firstCOROUTINE$16',
    kind: 'class',
    interfaces: []
  };
  function _set_elements__1997450176($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.elements_1 = _set____804775014;
  }
  function _get_elements__1223318964($this) {
    unreachableDeclarationLog();
    return $this.elements_1;
  }
  function _set_head__584118391_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.head_1 = _set____804775014;
  }
  function _get_head__798735467_1($this) {
    unreachableDeclarationLog();
    return $this.head_1;
  }
  function _set_tail__595089415($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.tail_1 = _set____804775014;
  }
  function _get_tail__809706491($this) {
    unreachableDeclarationLog();
    return $this.tail_1;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      break $l$block;
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyInto_0 = $this.elements_1;
      var tmp1_copyInto_0 = $this.head_1;
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      arrayCopy(tmp0_copyInto_0, newElements, 0, tmp1_copyInto_0, tmp2_copyInto_0);
      tmp$ret$1 = newElements;
      break $l$block_0;
    }
    Unit_getInstance();
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_copyInto_0 = $this.elements_1;
      var tmp4_copyInto_0 = $this.elements_1.length - $this.head_1 | 0;
      var tmp5_copyInto_0 = $this.head_1;
      arrayCopy(tmp3_copyInto_0, newElements, tmp4_copyInto_0, 0, tmp5_copyInto_0);
      tmp$ret$2 = newElements;
      break $l$block_1;
    }
    Unit_getInstance();
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(16), null);
      break $l$block;
    }
    tmp.elements_1 = tmp$ret$0;
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  ArrayQueue.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  ArrayQueue.prototype.addLast_xhfl3v_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1)
      ensureCapacity_0(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.prototype.clear_j9y8zo_k$ = function () {
    unreachableDeclarationLog();
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = this.elements_1.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    tmp.elements_1 = tmp$ret$0;
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function _get_NO_DECISION__267590711() {
    init_properties_Atomic_kt_4084920911();
    return NO_DECISION;
  }
  var NO_DECISION;
  function _get_RETRY_ATOMIC__2660021705() {
    unreachableDeclarationLog();
    init_properties_Atomic_kt_4084920911();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this);
  };
  OpDescriptor.prototype.isEarlierThan_b5adjh_k$ = function (that) {
    unreachableDeclarationLog();
    var tmp0_elvis_lhs = this._get_atomicOp__1209215967_jzxp0f_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that._get_atomicOp__1209215967_jzxp0f_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp._get_opSequence__871165961_eeo3yh_k$().compareTo_n4fqi2_k$(thatOp._get_opSequence__871165961_eeo3yh_k$()) < 0;
  };
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  function _get__consensus__2874017939($this) {
    unreachableDeclarationLog();
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(_get_NO_DECISION__267590711());
  }
  AtomicOp.prototype._get_consensus__2364232890_vxic7a_k$ = function () {
    unreachableDeclarationLog();
    return this._consensus_1._get_value__3683422336_a43j40_k$();
  };
  AtomicOp.prototype._get_isDecided__2759190303_ped141_k$ = function () {
    unreachableDeclarationLog();
    return !(this._consensus_1._get_value__3683422336_a43j40_k$() === _get_NO_DECISION__267590711());
  };
  AtomicOp.prototype._get_opSequence__871165961_eeo3yh_k$ = function () {
    unreachableDeclarationLog();
    return new Long(0, 0);
  };
  AtomicOp.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    unreachableDeclarationLog();
    return this;
  };
  AtomicOp.prototype.decide_ydi1rd_k$ = function (decision) {
    {
    }
    var current = this._consensus_1._get_value__3683422336_a43j40_k$();
    if (!(current === _get_NO_DECISION__267590711()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(_get_NO_DECISION__267590711(), decision))
      return decision;
    return this._consensus_1._get_value__3683422336_a43j40_k$();
  };
  AtomicOp.prototype.perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1._get_value__3683422336_a43j40_k$();
    if (decision === _get_NO_DECISION__267590711()) {
      decision = this.decide_ydi1rd_k$(this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {
    simpleName: 'AtomicOp',
    kind: 'class',
    interfaces: []
  };
  function AtomicDesc() {
    unreachableDeclarationLog();
  }
  AtomicDesc.prototype._set_atomicOp__1983347179_2tavyi_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.atomicOp_1 = _set____804775014;
  };
  AtomicDesc.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
  };
  AtomicDesc.$metadata$ = {
    simpleName: 'AtomicDesc',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_Atomic_kt_1913178739;
  function init_properties_Atomic_kt_4084920911() {
    if (!properties_initialized_Atomic_kt_1913178739) {
      properties_initialized_Atomic_kt_1913178739 = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function _get_CLOSED__3869857567() {
    unreachableDeclarationLog();
    init_properties_ConcurrentLinkedList_kt_1817414892();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_3030537744;
  function init_properties_ConcurrentLinkedList_kt_1817414892() {
    unreachableDeclarationLog();
    if (!properties_initialized_ConcurrentLinkedList_kt_3030537744) {
      properties_initialized_ConcurrentLinkedList_kt_3030537744 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function _get_UNDEFINED__1354999585() {
    init_properties_DispatchedContinuation_kt_2588858602();
    return UNDEFINED;
  }
  var UNDEFINED;
  function _get_REUSABLE_CLAIMED__1637142852() {
    init_properties_DispatchedContinuation_kt_2588858602();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__1828080292, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_2588858602();
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith_0 = _this__1828080292;
      var state_1 = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith_0.dispatcher_1.isDispatchNeeded_fmz9vn_k$(tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$())) {
        tmp1_resumeCancellableWith_0._state_1 = state_1;
        tmp1_resumeCancellableWith_0._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
        tmp_0 = tmp1_resumeCancellableWith_0.dispatcher_1.dispatch_o98ux7_k$(tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$(), tmp1_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        $l$block_5: {
          var tmp0_executeUnconfined_0 = _get_MODE_CANCELLABLE__581347323();
          {
          }
          var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
          if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          var tmp_1;
          if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
            tmp1_resumeCancellableWith_0._state_1 = state_1;
            tmp1_resumeCancellableWith_0._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
            eventLoop_2.dispatchUnconfined_do6j6f_k$(tmp1_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            {
              eventLoop_2.incrementUseCount_ocukpa_k$(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_3: {
                    var job_1_4 = tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
                    if (!(job_1_4 == null) ? !job_1_4._get_isActive__4035225851_4an5s5_k$() : false) {
                      var cause_2_5 = job_1_4.getCancellationException_8i1q6u_k$();
                      tmp1_resumeCancellableWith_0.cancelCompletedResult_tweln2_k$(state_1, cause_2_5);
                      var tmp$ret$2;
                      $l$block_1: {
                        var tmp$ret$1;
                        $l$block_0: {
                          var tmp0_failure_0_1_6 = Companion_getInstance();
                          tmp$ret$1 = _Result___init__impl__2241242780(createFailure(cause_2_5));
                          break $l$block_0;
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith_0.resumeWith_s3a3yh_k$(tmp$ret$1);
                        break $l$block_1;
                      }
                      tmp$ret$3 = true;
                      break $l$block_3;
                    }
                    tmp$ret$3 = false;
                    break $l$block_3;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      $l$block_4: {
                        var tmp0_withContinuationContext_0_7 = tmp1_resumeCancellableWith_0.continuation_1;
                        var tmp1_withContinuationContext_0_8 = tmp1_resumeCancellableWith_0.countOrElement_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith_0.continuation_1.resumeWith_s3a3yh_k$(result);
                        break $l$block_4;
                      }
                    }
                  } else {
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith_0.handleFatalException_56zdfo_k$($p, null);
                } else {
                  {
                    throw $p;
                  }
                }
              }
              finally {
                eventLoop_2.decrementUseCount_saho26_k$(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
          break $l$block_5;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this__1828080292.resumeWith_s3a3yh_k$(result);
      }
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__1828080292, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__1828080292, result, onCancellation);
  }
  function _get__reusableCancellableContinuation__4264171442($this) {
    unreachableDeclarationLog();
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__588561561($this) {
    var tmp = $this._reusableCancellableContinuation_1._get_value__3683422336_a43j40_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, _get_MODE_UNINITIALIZED__2647465612());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = _get_UNDEFINED__1354999585();
    this.countOrElement_1 = threadContextElements(this._get_context__1558698818_ps0bpe_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype._get_dispatcher__3474623172_dketks_k$ = function () {
    return this.dispatcher_1;
  };
  DispatchedContinuation.prototype._get_continuation__2061681140_y3gzck_k$ = function () {
    return this.continuation_1;
  };
  DispatchedContinuation.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.continuation_1._get_context__1558698818_ps0bpe_k$();
  };
  DispatchedContinuation.prototype._set__state__4012747461_cx6lu3_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this._state_1 = _set____804775014;
  };
  DispatchedContinuation.prototype._get__state__4101327289_37adl3_k$ = function () {
    unreachableDeclarationLog();
    return this._state_1;
  };
  DispatchedContinuation.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  DispatchedContinuation.prototype.getStackTraceElement_um8m53_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  DispatchedContinuation.prototype._get_countOrElement__2919327745_mr0q9r_k$ = function () {
    return this.countOrElement_1;
  };
  DispatchedContinuation.prototype.isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1._get_value__3683422336_a43j40_k$() == null);
  };
  DispatchedContinuation.prototype.awaitReusability_itz0u_k$ = function () {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()))
            return Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__588561561(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.claimReusableCancellableContinuation_oatv30_k$ = function () {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330 === null) {
            this._reusableCancellableContinuation_1._set_value__1325260276_x73o94_k$(_get_REUSABLE_CLAIMED__1637142852());
            return null;
          } else {
            if (tmp1__anonymous__1_4003154330 instanceof CancellableContinuationImpl) {
              if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, _get_REUSABLE_CLAIMED__1637142852())) {
                return tmp1__anonymous__1_4003154330 instanceof CancellableContinuationImpl ? tmp1__anonymous__1_4003154330 : THROW_CCE();
              }
            } else {
              if (tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()) {
              } else {
                if (tmp1__anonymous__1_4003154330 instanceof Error) {
                } else {
                  {
                    var tmp0_error_0_2 = 'Inconsistent state ' + toString(tmp1__anonymous__1_4003154330);
                    throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_2));
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()) {
            if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED__1637142852(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__1_4003154330 instanceof Error) {
              {
                var tmp0_require_0_2 = this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require_0_2) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Failed requirement.';
                      break $l$block;
                    }
                    var message_2_1_3 = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message_2_1_3));
                  }
                }
              }
              return tmp1__anonymous__1_4003154330;
            } else {
              {
                var tmp1_error_0_4 = 'Inconsistent state ' + toString(tmp1__anonymous__1_4003154330);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_4));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_723ard_k$ = function (cause) {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (equals(tmp0_subject_2, _get_REUSABLE_CLAIMED__1637142852())) {
            if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED__1637142852(), cause))
              return true;
          } else {
            if (tmp0_subject_2 instanceof Error)
              return true;
            else {
              {
                if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, null))
                  return false;
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    {
    }
    this._state_1 = _get_UNDEFINED__1354999585();
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1._get_context__1558698818_ps0bpe_k$();
    var state = toState$default(result, null, 1, null);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_ATOMIC__241678890());
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block_1: {
        var tmp0_executeUnconfined_0 = _get_MODE_ATOMIC__241678890();
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_1;
        }
        var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
          this._state_1 = state;
          this._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_ocukpa_k$(true);
            try {
              {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_withCoroutineContext_0_4 = this._get_context__1558698818_ps0bpe_k$();
                  var tmp1_withCoroutineContext_0_5 = this.countOrElement_1;
                  tmp$ret$1 = this.continuation_1.resumeWith_s3a3yh_k$(result);
                  break $l$block_0;
                }
              }
              $l$loop: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_56zdfo_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_saho26_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_1;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    unreachableDeclarationLog();
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this._get_context__1558698818_ps0bpe_k$())) {
      this._state_1 = state;
      this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
      this.dispatcher_1.dispatch_o98ux7_k$(this._get_context__1558698818_ps0bpe_k$(), this);
    } else {
      var tmp$ret$0;
      $l$block_5: {
        var tmp0_executeUnconfined_0 = _get_MODE_CANCELLABLE__581347323();
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
          this._state_1 = state;
          this._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_ocukpa_k$(true);
            try {
              {
                var tmp$ret$3;
                $l$block_3: {
                  var job_1_4 = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
                  if (!(job_1_4 == null) ? !job_1_4._get_isActive__4035225851_4an5s5_k$() : false) {
                    var cause_2_5 = job_1_4.getCancellationException_8i1q6u_k$();
                    this.cancelCompletedResult_tweln2_k$(state, cause_2_5);
                    var tmp$ret$2;
                    $l$block_1: {
                      var tmp$ret$1;
                      $l$block_0: {
                        var tmp0_failure_0_1_6 = Companion_getInstance();
                        tmp$ret$1 = _Result___init__impl__2241242780(createFailure(cause_2_5));
                        break $l$block_0;
                      }
                      tmp$ret$2 = this.resumeWith_s3a3yh_k$(tmp$ret$1);
                      break $l$block_1;
                    }
                    tmp$ret$3 = true;
                    break $l$block_3;
                  }
                  tmp$ret$3 = false;
                  break $l$block_3;
                }
                if (!tmp$ret$3) {
                  {
                    var tmp$ret$4;
                    $l$block_4: {
                      var tmp0_withContinuationContext_0_7 = this.continuation_1;
                      var tmp1_withContinuationContext_0_8 = this.countOrElement_1;
                      tmp$ret$4 = this.continuation_1.resumeWith_s3a3yh_k$(result);
                      break $l$block_4;
                    }
                  }
                } else {
                }
              }
              $l$loop: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_56zdfo_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_saho26_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_5;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._get_onCancellation__3868581321_71uxiv_k$()(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.resumeCancelled_vc1wm3_k$ = function (state) {
    unreachableDeclarationLog();
    var job = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
    if (!(job == null) ? !job._get_isActive__4035225851_4an5s5_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_failure_0_1 = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__2241242780(createFailure(cause));
          break $l$block;
        }
        tmp$ret$1 = this.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.resumeUndispatchedWith_xz834r_k$ = function (result) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_withContinuationContext_0 = this.continuation_1;
      var tmp1_withContinuationContext_0 = this.countOrElement_1;
      tmp$ret$0 = this.continuation_1.resumeWith_s3a3yh_k$(result);
      break $l$block;
    }
  };
  DispatchedContinuation.prototype.dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function executeUnconfined(_this__1828080292, contState, mode, doYield, block) {
    unreachableDeclarationLog();
    init_properties_DispatchedContinuation_kt_2588858602();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
    if (doYield ? eventLoop._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false)
      return false;
    var tmp;
    if (eventLoop._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
      _this__1828080292._state_1 = contState;
      _this__1828080292._set_resumeMode__3223626279_v0m0nr_k$(mode);
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__1828080292);
      tmp = true;
    } else {
      {
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__1828080292.handleFatalException_56zdfo_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  function yieldUndispatched(_this__1828080292) {
    init_properties_DispatchedContinuation_kt_2588858602();
    var tmp$ret$0;
    $l$block_0: {
      var tmp0_executeUnconfined_0 = _get_MODE_CANCELLABLE__581347323();
      {
      }
      var eventLoop_1 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
      if (eventLoop_1._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$()) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp;
      if (eventLoop_1._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
        _this__1828080292._state_1 = Unit_getInstance();
        _this__1828080292._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
        eventLoop_1.dispatchUnconfined_do6j6f_k$(_this__1828080292);
        tmp = true;
      } else {
        {
          eventLoop_1.incrementUseCount_ocukpa_k$(true);
          try {
            {
              _this__1828080292.run_mw4iiu_k$();
            }
            $l$loop: while (true) {
              if (!eventLoop_1.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              _this__1828080292.handleFatalException_56zdfo_k$($p, null);
            } else {
              {
                throw $p;
              }
            }
          }
          finally {
            eventLoop_1.decrementUseCount_saho26_k$(true);
          }
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
      break $l$block_0;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_168814862;
  function init_properties_DispatchedContinuation_kt_2588858602() {
    if (!properties_initialized_DispatchedContinuation_kt_168814862) {
      properties_initialized_DispatchedContinuation_kt_168814862 = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function _get_MODE_CANCELLABLE__581347323() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__3223626279_v0m0nr_k$ = function (_set____804775014) {
    this.resumeMode_1 = _set____804775014;
  };
  DispatchedTask.prototype._get_resumeMode__2312873755_ws355x_k$ = function () {
    return this.resumeMode_1;
  };
  DispatchedTask.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
  };
  DispatchedTask.prototype.run_mw4iiu_k$ = function () {
    {
    }
    var taskContext = _get_taskContext__3781262951(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__1111020262_idh0py_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._get_continuation__2061681140_y3gzck_k$();
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_withContinuationContext_0 = delegate._get_countOrElement__2919327745_mr0q9r_k$();
        var context_2 = continuation._get_context__1558698818_ps0bpe_k$();
        var state_3 = this.takeState_olvzuy_k$();
        var exception_4 = this.getExceptionalResult_bnge6_k$(state_3);
        var job_5 = (exception_4 == null ? _get_isCancellableMode__2954248492(this.resumeMode_1) : false) ? context_2.get_1pi7hg_k$(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job_5 == null) ? !job_5._get_isActive__4035225851_4an5s5_k$() : false) {
          var cause_6 = job_5.getCancellationException_8i1q6u_k$();
          this.cancelCompletedResult_tweln2_k$(state_3, cause_6);
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_7 = Companion_getInstance();
            var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
            tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_failure_0_8));
            break $l$block;
          }
          tmp_0 = continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception_4 == null)) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_failure_0_1_9 = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__2241242780(createFailure(exception_4));
                break $l$block_0;
              }
              tmp$ret$2 = continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_resume_0_10 = this.getSuccessfulResult_gdkv2w_k$(state_3);
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_success_0_1_11 = Companion_getInstance();
                tmp$ret$3 = _Result___init__impl__2241242780(tmp2_resume_0_10);
                break $l$block_2;
              }
              tmp$ret$4 = continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
              break $l$block_3;
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp$ret$8;
      $l$block_7: {
        var tmp_2;
        try {
          var tmp$ret$6;
          $l$block_5: {
            var tmp0_success_0_1 = Companion_getInstance();
            var tmp1_success_0_2 = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_5;
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            $l$block_6: {
              var tmp2_failure_0_4 = Companion_getInstance();
              tmp$ret$7 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_6;
            }
            tmp_3 = tmp$ret$7;
          } else {
            {
              throw $p;
            }
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
        break $l$block_7;
      }
      var result = tmp$ret$8;
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_1523290257(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__1111020262_idh0py_k$()._get_context__1558698818_ps0bpe_k$(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_MODE_UNINITIALIZED__2647465612() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function _get_isReusableMode__1222974867(_this__1828080292) {
    return _this__1828080292 === 2;
  }
  function _get_MODE_CANCELLABLE_REUSABLE__29516823() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function _get_isCancellableMode__2954248492(_this__1828080292) {
    return _this__1828080292 === 1 ? true : _this__1828080292 === 2;
  }
  function dispatch(_this__1828080292, mode) {
    {
    }
    var delegate = _this__1828080292._get_delegate__1111020262_idh0py_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode__2954248492(mode) === _get_isCancellableMode__2954248492(_this__1828080292.resumeMode_1);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._get_dispatcher__3474623172_dketks_k$();
      var context = delegate._get_context__1558698818_ps0bpe_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__1828080292);
      } else {
        resumeUnconfined(_this__1828080292);
      }
    } else {
      {
        resume(_this__1828080292, delegate, undispatched);
      }
    }
  }
  function _get_MODE_UNDISPATCHED__3658117635() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function _get_MODE_ATOMIC__241678890() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__1828080292, eventLoop, block) {
    unreachableDeclarationLog();
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__1828080292.handleFatalException_56zdfo_k$($p, null);
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function resumeWithStackTrace(_this__1828080292, exception) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      var tmp0_failure_0 = Companion_getInstance();
      var tmp1_failure_0 = recoverStackTrace(exception, _this__1828080292);
      tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_failure_0));
      break $l$block;
    }
    _this__1828080292.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__1828080292) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
    if (eventLoop._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__1828080292);
    } else {
      {
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          {
            resume(_this__1828080292, _this__1828080292._get_delegate__1111020262_idh0py_k$(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__1828080292.handleFatalException_56zdfo_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
      }
    }
  }
  function resume(_this__1828080292, delegate, undispatched) {
    var state = _this__1828080292.takeState_olvzuy_k$();
    var exception = _this__1828080292.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(createFailure(exception));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_success_0 = Companion_getInstance();
        var tmp2_success_0 = _this__1828080292.getSuccessfulResult_gdkv2w_k$(state);
        tmp$ret$1 = _Result___init__impl__2241242780(tmp2_success_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._get_continuation__2061681140_y3gzck_k$();
        var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._get_countOrElement__2919327745_mr0q9r_k$();
        tmp$ret$2 = tmp3_resumeUndispatchedWith_0._get_continuation__2061681140_y3gzck_k$().resumeWith_s3a3yh_k$(result);
        break $l$block_1;
      }
    } else
      delegate.resumeWith_s3a3yh_k$(result);
  }
  function _InlineList___init__impl__4235777494(holder) {
    return holder;
  }
  function _InlineList___init__impl__4235777494_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__4235777494(holder);
    return tmp;
  }
  function _get_holder__3377096415($this) {
    return $this;
  }
  function InlineList__plus_impl_2853164860(this_0, element) {
    {
    }
    var tmp0_subject = _get_holder__3377096415(this_0);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__4235777494(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__3377096415(this_0);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_1j60pz_k$(element);
        Unit_getInstance();
        tmp = _InlineList___init__impl__4235777494(_get_holder__3377096415(this_0));
      } else {
        {
          var list = ArrayList_init_$Create$(4);
          var tmp_1 = _get_holder__3377096415(this_0);
          list.add_1j60pz_k$((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
          Unit_getInstance();
          list.add_1j60pz_k$(element);
          Unit_getInstance();
          tmp = _InlineList___init__impl__4235777494(list);
        }
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_3114483864(this_0, action) {
    unreachableDeclarationLog();
    var tmp0_subject = _get_holder__3377096415(this_0);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__3377096415(this_0);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        {
          var tmp_0 = _get_holder__3377096415(this_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list._get_size__809037418_ddoh9m_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              action(list.get_fkrdnv_k$(i));
            }
             while (0 <= inductionVariable);
        }
      }
    }
  }
  function InlineList__toString_impl_4217026858(this_0) {
    unreachableDeclarationLog();
    return 'InlineList(holder=' + toString(this_0) + ')';
  }
  function InlineList__hashCode_impl_2901611739(this_0) {
    unreachableDeclarationLog();
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function InlineList__equals_impl_2305648119(this_0, other) {
    unreachableDeclarationLog();
    if (!(other instanceof InlineList))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    unreachableDeclarationLog();
    this.holder_1 = holder;
  }
  InlineList.prototype.toString = function () {
    unreachableDeclarationLog();
    return InlineList__toString_impl_4217026858(this.holder_1);
  };
  InlineList.prototype.hashCode = function () {
    unreachableDeclarationLog();
    return InlineList__hashCode_impl_2901611739(this.holder_1);
  };
  InlineList.prototype.equals = function (other) {
    unreachableDeclarationLog();
    return InlineList__equals_impl_2305648119(this.holder_1, other);
  };
  InlineList.$metadata$ = {
    simpleName: 'InlineList',
    kind: 'class',
    interfaces: []
  };
  function checkParallelism(_this__1828080292) {
    unreachableDeclarationLog();
    var tmp0_require_0 = _this__1828080292 >= 1;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 'Expected positive parallelism level, but got ' + _this__1828080292;
        break $l$block;
      }
      var message_1 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    return tmp;
  }
  function _get_dispatcher__3474623172($this) {
    unreachableDeclarationLog();
    return $this.dispatcher_1;
  }
  function _get_parallelism__4164420597($this) {
    unreachableDeclarationLog();
    return $this.parallelism_1;
  }
  function _set_runningWorkers__775011297($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.runningWorkers_1 = _set____804775014;
  }
  function _get_runningWorkers__2318739157($this) {
    unreachableDeclarationLog();
    return $this.runningWorkers_1;
  }
  function _get_queue__3558538464($this) {
    unreachableDeclarationLog();
    return $this.queue_1;
  }
  function dispatchInternal($this, block, dispatch) {
    unreachableDeclarationLog();
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = isObject($this) ? $this : THROW_CCE();
      if ($this.runningWorkers_1 >= $this.parallelism_1)
        return false;
      var tmp0_this_2 = $this;
      tmp0_this_2.runningWorkers_1 = tmp0_this_2.runningWorkers_1 + 1 | 0;
      Unit_getInstance();
      return true;
    }
  }
  function addAndTryDispatching($this, block) {
    unreachableDeclarationLog();
    $this.queue_1.addLast_3l8aar_k$(block);
    Unit_getInstance();
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    unreachableDeclarationLog();
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? _get_DefaultDelay__1069114793() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
  }
  LimitedDispatcher.prototype.delay_sw4t2e_k$ = function (time, $cont) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.delay_sw4t2e_k$(time, $cont);
  };
  LimitedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    unreachableDeclarationLog();
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  LimitedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    unreachableDeclarationLog();
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  LimitedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return CoroutineDispatcher.prototype.limitedParallelism_glrman_k$.call(this, parallelism);
  };
  LimitedDispatcher.prototype.run_mw4iiu_k$ = function () {
    unreachableDeclarationLog();
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mw4iiu_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            handleCoroutineException(EmptyCoroutineContext_getInstance(), $p);
          } else {
            {
              throw $p;
            }
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this);
        } else {
          {
            tmp = false;
          }
        }
        if (tmp) {
          this.dispatcher_1.dispatch_o98ux7_k$(this, this);
          return Unit_getInstance();
        } else {
        }
        continue $l$loop;
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_synchronized_0 = isObject(this) ? this : THROW_CCE();
        var tmp0_this_2 = this;
        tmp0_this_2.runningWorkers_1 = tmp0_this_2.runningWorkers_1 - 1 | 0;
        Unit_getInstance();
        if (this.queue_1._get_size__809037418_ddoh9m_k$() === 0)
          return Unit_getInstance();
        var tmp1_this_3 = this;
        tmp1_this_3.runningWorkers_1 = tmp1_this_3.runningWorkers_1 + 1 | 0;
        Unit_getInstance();
        fairnessCounter = 0;
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
    }
  };
  LimitedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block_0: {
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      {
        this.dispatcher_1.dispatch_o98ux7_k$(this, this);
      }
    }
  };
  LimitedDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block_0: {
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      {
        this.dispatcher_1.dispatchYield_ww21f6_k$(this, this);
      }
    }
  };
  LimitedDispatcher.$metadata$ = {
    simpleName: 'LimitedDispatcher',
    kind: 'class',
    interfaces: [Runnable, Delay]
  };
  function _get_REMOVE_PREPARED__1435037049() {
    unreachableDeclarationLog();
    init_properties_LockFreeLinkedList_common_kt_867744553();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_665716869;
  function init_properties_LockFreeLinkedList_common_kt_867744553() {
    unreachableDeclarationLog();
    if (!properties_initialized_LockFreeLinkedList_common_kt_665716869) {
      properties_initialized_LockFreeLinkedList_common_kt_665716869 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__790383850($this) {
    unreachableDeclarationLog();
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    unreachableDeclarationLog();
    var tmp = this;
    Companion_getInstance_2();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  LockFreeTaskQueue.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    return this._cur_1._get_value__3683422336_a43j40_k$()._get_isEmpty__1500737838_oti0q6_k$();
  };
  LockFreeTaskQueue.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    return this._cur_1._get_value__3683422336_a43j40_k$()._get_size__809037418_ddoh9m_k$();
  };
  LockFreeTaskQueue.prototype.close_ymq55z_k$ = function () {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330.close_1keygo_k$())
            return Unit_getInstance();
          this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.addLast_3l8aar_k$ = function (element) {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330.addLast_3l8aar_k$(element);
          Companion_getInstance_2();
          if (tmp0_subject_2 === 0)
            return true;
          else {
            Companion_getInstance_2();
            if (tmp0_subject_2 === 2)
              return false;
            else {
              Companion_getInstance_2();
              if (tmp0_subject_2 === 1) {
                this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
                Unit_getInstance();
              } else {
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var result_2 = tmp1__anonymous__1_4003154330.removeFirstOrNull_eges3a_k$();
          if (!(result_2 === Companion_getInstance_2().REMOVE_FROZEN_1)) {
            return (result_2 == null ? true : isObject(result_2)) ? result_2 : THROW_CCE();
          }
          this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.map_cey4p6_k$ = function (transform) {
    unreachableDeclarationLog();
    return this._cur_1._get_value__3683422336_a43j40_k$().map_cey4p6_k$(transform);
  };
  LockFreeTaskQueue.prototype.isClosed_baxhhm_k$ = function () {
    unreachableDeclarationLog();
    return this._cur_1._get_value__3683422336_a43j40_k$().isClosed_baxhhm_k$();
  };
  LockFreeTaskQueue.$metadata$ = {
    simpleName: 'LockFreeTaskQueue',
    kind: 'class',
    interfaces: []
  };
  function _get_capacity__3674243665_0($this) {
    unreachableDeclarationLog();
    return $this.capacity_1;
  }
  function _get_singleConsumer__4039395693($this) {
    unreachableDeclarationLog();
    return $this.singleConsumer_1;
  }
  function _get_mask__803251423($this) {
    unreachableDeclarationLog();
    return $this.mask_1;
  }
  function _get__next__3036752447($this) {
    unreachableDeclarationLog();
    return $this._next_1;
  }
  function _get__state__4101327289_3($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function _get_array__3098070168($this) {
    unreachableDeclarationLog();
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    unreachableDeclarationLog();
    var old = $this.array_1.atomicfu$get(index & $this.mask_1)._get_value__3683422336_a43j40_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1)._set_value__1325260276_x73o94_k$(element);
      return $this;
    } else {
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp$ret$0;
          $l$block: {
            var tmp0_withState_0_2 = Companion_getInstance_2();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            {
            }
            Companion_getInstance_2();
            if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
              return $this.next_20eer_k$();
            } else {
            }
            var tmp;
            if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__1_4003154330, newHead))) {
              $this.array_1.atomicfu$get(head_1_3 & $this.mask_1)._set_value__1325260276_x73o94_k$(null);
              return null;
            }
            tmp$ret$0 = tmp;
            break $l$block;
          }
        }
      }
      Unit_getInstance();
    }
  }
  function markFrozen($this) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_updateAndGet_0 = $this._state_1;
      while (true) {
        var cur_1 = tmp0_updateAndGet_0._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          Companion_getInstance_2();
          if (!cur_1.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return cur_1;
          else {
          }
          Companion_getInstance_2();
          tmp$ret$0 = cur_1.or_s401rn_k$(new Long(0, 268435456));
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_updateAndGet_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = upd_2;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = $this._next_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 == null))
            return tmp1__anonymous__1_4003154330;
          $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  }
  function allocateNextCopy($this, state) {
    unreachableDeclarationLog();
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    var tmp$ret$0;
    $l$block: {
      var tmp0_withState_0 = Companion_getInstance_2();
      var head_1 = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var index_4 = head_1;
      while (!((index_4 & $this.mask_1) === (tail_2 & $this.mask_1))) {
        var tmp0_elvis_lhs_6 = $this.array_1.atomicfu$get(index_4 & $this.mask_1)._get_value__3683422336_a43j40_k$();
        var value_5 = tmp0_elvis_lhs_6 == null ? new Placeholder(index_4) : tmp0_elvis_lhs_6;
        next.array_1.atomicfu$get(index_4 & next.mask_1)._set_value__1325260276_x73o94_k$(value_5);
        var tmp1_7 = index_4;
        index_4 = tmp1_7 + 1 | 0;
        Unit_getInstance();
      }
      var tmp = Companion_getInstance_2();
      Companion_getInstance_2();
      tmp$ret$0 = next._state_1._set_value__1325260276_gu2jlf_k$(tmp.wo_iscla2_k$(state, new Long(0, 268435456)));
      break $l$block;
    }
    return next;
  }
  function Placeholder(index) {
    unreachableDeclarationLog();
    this.index_1 = index;
  }
  Placeholder.prototype._get_index__3322996031_g2optt_k$ = function () {
    unreachableDeclarationLog();
    return this.index_1;
  };
  Placeholder.$metadata$ = {
    simpleName: 'Placeholder',
    kind: 'class',
    interfaces: []
  };
  function Companion_0() {
    unreachableDeclarationLog();
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  Companion_0.prototype._get_INITIAL_CAPACITY__758248950_cjfwmu_k$ = function () {
    unreachableDeclarationLog();
    return this.INITIAL_CAPACITY_1;
  };
  Companion_0.prototype._get_CAPACITY_BITS__1472178374_ochw3q_k$ = function () {
    unreachableDeclarationLog();
    return this.CAPACITY_BITS_1;
  };
  Companion_0.prototype._get_MAX_CAPACITY_MASK__1319736955_ltqjjv_k$ = function () {
    unreachableDeclarationLog();
    return this.MAX_CAPACITY_MASK_1;
  };
  Companion_0.prototype._get_HEAD_SHIFT__3087680424_jyscig_k$ = function () {
    unreachableDeclarationLog();
    return this.HEAD_SHIFT_1;
  };
  Companion_0.prototype._get_HEAD_MASK__1894977990_vc7ydi_k$ = function () {
    unreachableDeclarationLog();
    return this.HEAD_MASK_1;
  };
  Companion_0.prototype._get_TAIL_SHIFT__3268001592_gzfft4_k$ = function () {
    unreachableDeclarationLog();
    return this.TAIL_SHIFT_1;
  };
  Companion_0.prototype._get_TAIL_MASK__2039342134_xq66gm_k$ = function () {
    unreachableDeclarationLog();
    return this.TAIL_MASK_1;
  };
  Companion_0.prototype._get_FROZEN_SHIFT__1138150312_itmieg_k$ = function () {
    unreachableDeclarationLog();
    return this.FROZEN_SHIFT_1;
  };
  Companion_0.prototype._get_FROZEN_MASK__1970637254_wl9lfq_k$ = function () {
    unreachableDeclarationLog();
    return this.FROZEN_MASK_1;
  };
  Companion_0.prototype._get_CLOSED_SHIFT__2371223388_vtcias_k$ = function () {
    unreachableDeclarationLog();
    return this.CLOSED_SHIFT_1;
  };
  Companion_0.prototype._get_CLOSED_MASK__3257339794_h5ryi6_k$ = function () {
    unreachableDeclarationLog();
    return this.CLOSED_MASK_1;
  };
  Companion_0.prototype._get_MIN_ADD_SPIN_CAPACITY__1071151941_hpqi4l_k$ = function () {
    unreachableDeclarationLog();
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  Companion_0.prototype._get_REMOVE_FROZEN__2680114550_qpfwcq_k$ = function () {
    unreachableDeclarationLog();
    return this.REMOVE_FROZEN_1;
  };
  Companion_0.prototype._get_ADD_SUCCESS__2163417100_z92ino_k$ = function () {
    unreachableDeclarationLog();
    return this.ADD_SUCCESS_1;
  };
  Companion_0.prototype._get_ADD_FROZEN__927379501_fc4ylp_k$ = function () {
    unreachableDeclarationLog();
    return this.ADD_FROZEN_1;
  };
  Companion_0.prototype._get_ADD_CLOSED__2387852001_vjg3kv_k$ = function () {
    unreachableDeclarationLog();
    return this.ADD_CLOSED_1;
  };
  Companion_0.prototype.wo_iscla2_k$ = function (_this__1828080292, other) {
    unreachableDeclarationLog();
    return _this__1828080292.and_jhajnj_k$(other.inv_28kx_k$());
  };
  Companion_0.prototype.updateHead_eajy5c_k$ = function (_this__1828080292, newHead) {
    unreachableDeclarationLog();
    return this.wo_iscla2_k$(_this__1828080292, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  Companion_0.prototype.updateTail_fwivqo_k$ = function (_this__1828080292, newTail) {
    unreachableDeclarationLog();
    return this.wo_iscla2_k$(_this__1828080292, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  Companion_0.prototype.withState_s3n57v_k$ = function (_this__1828080292, block) {
    unreachableDeclarationLog();
    var head = _this__1828080292.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__1828080292.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  Companion_0.prototype.addFailReason_gc2gzp_k$ = function (_this__1828080292) {
    unreachableDeclarationLog();
    return !_this__1828080292.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    unreachableDeclarationLog();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    unreachableDeclarationLog();
    Companion_getInstance_2();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    {
      Companion_getInstance_2();
      var tmp0_check_0 = this.mask_1 <= 1073741823;
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
          throw IllegalStateException_init_$Create$(toString_0(message_2_1));
        }
      }
    }
    {
      var tmp1_check_0 = (this.capacity_1 & this.mask_1) === 0;
      {
      }
      {
        {
        }
        if (!tmp1_check_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Check failed.';
            break $l$block_0;
          }
          var message_2_1_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString_0(message_2_1_0));
        }
      }
    }
  }
  LockFreeTaskQueueCore.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withState_0 = Companion_getInstance_2();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = head_1 === tail_2;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype._get_size__809037418_ddoh9m_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withState_0 = Companion_getInstance_2();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var tmp$ret$0;
      $l$block: {
        var tmp = tail_2 - head_1 | 0;
        Companion_getInstance_2();
        tmp$ret$0 = tmp & 1073741823;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype.close_1keygo_k$ = function () {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_update_0 = this._state_1;
      while (true) {
        var cur_1 = tmp0_update_0._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          Companion_getInstance_2();
          if (!cur_1.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
            return true;
          else {
          }
          Companion_getInstance_2();
          if (!cur_1.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return false;
          else {
          }
          Companion_getInstance_2();
          tmp$ret$0 = cur_1.or_s401rn_k$(new Long(0, 536870912));
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_update_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block_0;
        }
      }
    }
    return true;
  };
  LockFreeTaskQueueCore.prototype.addLast_3l8aar_k$ = function (element) {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          Companion_getInstance_2();
          var tmp = new Long(0, 268435456);
          Companion_getInstance_2();
          if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
            return Companion_getInstance_2().addFailReason_gc2gzp_k$(tmp1__anonymous__1_4003154330);
          else {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_withState_0_2 = Companion_getInstance_2();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            var mask_4_5 = this.mask_1;
            if (((tail_2_4 + 2 | 0) & mask_4_5) === (head_1_3 & mask_4_5)) {
              Companion_getInstance_2();
              return 1;
            }
            if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail_2_4 & mask_4_5)._get_value__3683422336_a43j40_k$() == null) : false) {
              var tmp_0;
              Companion_getInstance_2();
              if (this.capacity_1 < 1024) {
                tmp_0 = true;
              } else {
                {
                  var tmp_1 = tail_2_4 - head_1_3 | 0;
                  Companion_getInstance_2();
                  tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
                }
              }
              if (tmp_0) {
                Companion_getInstance_2();
                return 1;
              } else {
              }
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            var tmp_2 = tail_2_4 + 1 | 0;
            Companion_getInstance_2();
            var newTail_5_6 = tmp_2 & 1073741823;
            var tmp_3;
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_2().updateTail_fwivqo_k$(tmp1__anonymous__1_4003154330, newTail_5_6))) {
              this.array_1.atomicfu$get(tail_2_4 & mask_4_5)._set_value__1325260276_x73o94_k$(element);
              var cur_6_7 = this;
              $l$loop_0: while (true) {
                var tmp_4 = cur_6_7._state_1._get_value__3683422336_a43j40_k$();
                Companion_getInstance_2();
                if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
                  break $l$loop_0;
                else {
                }
                var tmp0_elvis_lhs_7_8 = fillPlaceholder(cur_6_7.next_20eer_k$(), tail_2_4, element);
                var tmp_5;
                if (tmp0_elvis_lhs_7_8 == null) {
                  break $l$loop_0;
                } else {
                  tmp_5 = tmp0_elvis_lhs_7_8;
                }
                cur_6_7 = tmp_5;
              }
              Companion_getInstance_2();
              return 0;
            }
            tmp$ret$1 = tmp_3;
            break $l$block_0;
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueueCore.prototype.removeFirstOrNull_eges3a_k$ = function () {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block_0: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          Companion_getInstance_2();
          if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return Companion_getInstance_2().REMOVE_FROZEN_1;
          else {
          }
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_withState_0_2 = Companion_getInstance_2();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            if ((tail_2_4 & this.mask_1) === (head_1_3 & this.mask_1))
              return null;
            var element_4_5 = this.array_1.atomicfu$get(head_1_3 & this.mask_1)._get_value__3683422336_a43j40_k$();
            if (element_4_5 == null) {
              if (this.singleConsumer_1)
                return null;
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            if (element_4_5 instanceof Placeholder)
              return null;
            else {
            }
            var tmp = head_1_3 + 1 | 0;
            Companion_getInstance_2();
            var newHead_5_6 = tmp & 1073741823;
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__1_4003154330, newHead_5_6))) {
              this.array_1.atomicfu$get(head_1_3 & this.mask_1)._set_value__1325260276_x73o94_k$(null);
              return element_4_5;
            }
            if (!this.singleConsumer_1) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var cur_6_7 = this;
            while (true) {
              var tmp0_elvis_lhs_7_8 = removeSlowPath(cur_6_7, head_1_3, newHead_5_6);
              var tmp_0;
              if (tmp0_elvis_lhs_7_8 == null) {
                return element_4_5;
              } else {
                tmp_0 = tmp0_elvis_lhs_7_8;
              }
              cur_6_7 = tmp_0;
            }
            tmp$ret$1 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueueCore.prototype.next_20eer_k$ = function () {
    unreachableDeclarationLog();
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  LockFreeTaskQueueCore.prototype.map_cey4p6_k$ = function (transform) {
    unreachableDeclarationLog();
    var res = ArrayList_init_$Create$(this.capacity_1);
    var tmp$ret$0;
    $l$block: {
      var tmp0_withState_0 = Companion_getInstance_2();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var index_4 = head_1;
      while (!((index_4 & this.mask_1) === (tail_2 & this.mask_1))) {
        var element_5 = this.array_1.atomicfu$get(index_4 & this.mask_1)._get_value__3683422336_a43j40_k$();
        var tmp;
        if (!(element_5 == null)) {
          tmp = !(element_5 instanceof Placeholder);
        } else {
          tmp = false;
        }
        if (tmp) {
          res.add_1j60pz_k$(transform(isObject(element_5) ? element_5 : THROW_CCE()));
          Unit_getInstance();
        } else {
        }
        var tmp0_6 = index_4;
        index_4 = tmp0_6 + 1 | 0;
        Unit_getInstance();
      }
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    return res;
  };
  LockFreeTaskQueueCore.prototype.isClosed_baxhhm_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this._state_1._get_value__3683422336_a43j40_k$();
    Companion_getInstance_2();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  LockFreeTaskQueueCore.$metadata$ = {
    simpleName: 'LockFreeTaskQueueCore',
    kind: 'class',
    interfaces: []
  };
  function bindCancellationFun(_this__1828080292, element, context) {
    return bindCancellationFun$lambda(_this__1828080292, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = {
    simpleName: 'UndeliveredElementException',
    kind: 'class',
    interfaces: []
  };
  function callUndeliveredElementCatchingException(_this__1828080292, element, undeliveredElementException) {
    try {
      _this__1828080292(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          {
          }
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__1828080292, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__1828080292, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__1828080292, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__1828080292, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = handleCoroutineException(context, tmp0_safe_receiver);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__2695192052) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  ContextScope.prototype._get_coroutineContext__2519429620_td3xn0_k$ = function () {
    return this.coroutineContext_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  ContextScope.$metadata$ = {
    simpleName: 'ContextScope',
    kind: 'class',
    interfaces: [CoroutineScope]
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  ScopeCoroutine.prototype._get_uCont__3627170666_b1l76e_k$ = function () {
    return this.uCont_1;
  };
  ScopeCoroutine.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  ScopeCoroutine.prototype.getStackTraceElement_um8m53_k$ = function () {
    unreachableDeclarationLog();
    return null;
  };
  ScopeCoroutine.prototype._get_isScopedCoroutine__175864179_2wpdo3_k$ = function () {
    return true;
  };
  ScopeCoroutine.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    var tmp0_safe_receiver = this._get_parentHandle__921052185_f8dcex_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_parent__1491962785_oo9xup_k$();
  };
  ScopeCoroutine.prototype.afterCompletion_2ogq6g_k$ = function (state) {
    var tmp = intercepted(this.uCont_1);
    var tmp_0 = recoverResult(state, this.uCont_1);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.afterResume_ufx9w9_k$ = function (state) {
    this.uCont_1.resumeWith_s3a3yh_k$(recoverResult(state, this.uCont_1));
  };
  ScopeCoroutine.$metadata$ = {
    simpleName: 'ScopeCoroutine',
    kind: 'class',
    interfaces: [CoroutineStackFrame]
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  Symbol.prototype._get_symbol__541899891_8ymsmr_k$ = function () {
    unreachableDeclarationLog();
    return this.symbol_1;
  };
  Symbol.prototype.toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  Symbol.prototype.unbox_eumklp_k$ = function (value) {
    unreachableDeclarationLog();
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp$default(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      minValue = 1;
    if (!(($mask0 & 8) === 0))
      maxValue = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return systemProp(propertyName, defaultValue, minValue, maxValue);
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error_0 = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
      {
        var tmp1_error_0 = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      }
    }
    return parsed;
  }
  function systemProp$default_0(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    unreachableDeclarationLog();
    if (!(($mask0 & 4) === 0))
      minValue = new Long(1, 0);
    if (!(($mask0 & 8) === 0))
      maxValue = Companion_getInstance_0()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return systemProp_0(propertyName, defaultValue, minValue, maxValue);
  }
  function startCoroutineCancellable(_this__1828080292, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__1828080292, receiver, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__1828080292, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__1828080292, receiver, completion, onCancellation);
  }
  function startCoroutineCancellable_0(_this__1828080292, completion) {
    unreachableDeclarationLog();
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__1828080292, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    unreachableDeclarationLog();
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_failure_0 = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__2241242780(createFailure(e));
      break $l$block;
    }
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__1828080292, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__1828080292);
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$glj1hg(fatalCompletion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__1828080292, completion) {
    unreachableDeclarationLog();
    var tmp$ret$6;
    $l$block_5: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = _this__1828080292;
              break $l$block_0;
            }
            var a_1_5 = tmp$ret$1;
            tmp$ret$2 = typeof a_1_5 === 'function' ? a_1_5(actualCompletion_1) : _this__1828080292.invoke_34if6s_k$(actualCompletion_1);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp0_failure_0_1 = Companion_getInstance();
              tmp$ret$4 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_3;
            }
            tmp$ret$5 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$4);
            break $l$block_4;
          }
          tmp$ret$6 = Unit_getInstance();
          break $l$block_5;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$8;
        $l$block_7: {
          var tmp0_resume_0 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$7;
          $l$block_6: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$7 = _Result___init__impl__2241242780(tmp0_resume_0);
            break $l$block_6;
          }
          tmp$ret$8 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$7);
          break $l$block_7;
        }
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__1828080292, receiver, completion) {
    unreachableDeclarationLog();
    var tmp$ret$6;
    $l$block_5: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = _this__1828080292;
              break $l$block_0;
            }
            var a_1_5 = tmp$ret$1;
            tmp$ret$2 = typeof a_1_5 === 'function' ? a_1_5(receiver, actualCompletion_1) : _this__1828080292.invoke_5zdxxo_k$(receiver, actualCompletion_1);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp0_failure_0_1 = Companion_getInstance();
              tmp$ret$4 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_3;
            }
            tmp$ret$5 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$4);
            break $l$block_4;
          }
          tmp$ret$6 = Unit_getInstance();
          break $l$block_5;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$8;
        $l$block_7: {
          var tmp0_resume_0 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$7;
          $l$block_6: {
            var tmp0_success_0_1 = Companion_getInstance();
            tmp$ret$7 = _Result___init__impl__2241242780(tmp0_resume_0);
            break $l$block_6;
          }
          tmp$ret$8 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$7);
          break $l$block_7;
        }
      }
    }
  }
  function startDirect(completion, block) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = completion;
      break $l$block;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_failure_0_1 = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__2241242780(createFailure($p));
            break $l$block_0;
          }
          tmp$ret$2 = actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
          break $l$block_1;
        }
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === _get_COROUTINE_SUSPENDED__2870145053())) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_resume_0 = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_success_0_1 = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__2241242780(tmp0_resume_0);
          break $l$block_2;
        }
        tmp$ret$4 = actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
        break $l$block_3;
      }
    }
  }
  function startUndispatchedOrReturn(_this__1828080292, receiver, block) {
    var tmp$ret$3;
    $l$block_5: {
      var tmp;
      try {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = block;
              break $l$block;
            }
            var a_1_5 = tmp$ret$0;
            tmp$ret$1 = typeof a_1_5 === 'function' ? a_1_5(receiver, _this__1828080292) : block.invoke_5zdxxo_k$(receiver, _this__1828080292);
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var result_1 = tmp;
      if (result_1 === _get_COROUTINE_SUSPENDED__2870145053()) {
        tmp$ret$3 = _get_COROUTINE_SUSPENDED__2870145053();
        break $l$block_5;
      }
      var state_3 = _this__1828080292.makeCompletingOnce_b13xy2_k$(result_1);
      if (state_3 === _get_COMPLETING_WAITING_CHILDREN__621847959()) {
        tmp$ret$3 = _get_COROUTINE_SUSPENDED__2870145053();
        break $l$block_5;
      }
      var tmp_1;
      if (state_3 instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        $l$block_4: {
          var tmp0__anonymous__6_2495602526 = state_3._get_cause__3139734664_j3sn7c_k$();
          tmp$ret$4 = true;
          break $l$block_4;
        }
        if (tmp$ret$4) {
          throw recoverStackTrace(state_3._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
        } else {
          if (result_1 instanceof CompletedExceptionally) {
            throw recoverStackTrace(result_1._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
          } else {
            {
              tmp_2 = result_1;
            }
          }
        }
        tmp_1 = tmp_2;
      } else {
        {
          tmp_1 = unboxState(state_3);
        }
      }
      tmp$ret$3 = tmp_1;
      break $l$block_5;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__1828080292, receiver, block) {
    var tmp$ret$3;
    $l$block_5: {
      var tmp;
      try {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = block;
              break $l$block;
            }
            var a_1_5 = tmp$ret$0;
            tmp$ret$1 = typeof a_1_5 === 'function' ? a_1_5(receiver, _this__1828080292) : block.invoke_5zdxxo_k$(receiver, _this__1828080292);
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var result_1 = tmp;
      if (result_1 === _get_COROUTINE_SUSPENDED__2870145053()) {
        tmp$ret$3 = _get_COROUTINE_SUSPENDED__2870145053();
        break $l$block_5;
      }
      var state_3 = _this__1828080292.makeCompletingOnce_b13xy2_k$(result_1);
      if (state_3 === _get_COMPLETING_WAITING_CHILDREN__621847959()) {
        tmp$ret$3 = _get_COROUTINE_SUSPENDED__2870145053();
        break $l$block_5;
      }
      var tmp_1;
      if (state_3 instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        $l$block_4: {
          var tmp0__anonymous__6_2495602526 = state_3._get_cause__3139734664_j3sn7c_k$();
          var tmp_3;
          if (tmp0__anonymous__6_2495602526 instanceof TimeoutCancellationException) {
            tmp_3 = tmp0__anonymous__6_2495602526._get_coroutine__1953794681_wb8lmh_k$() === _this__1828080292;
          } else {
            {
              tmp_3 = false;
            }
          }
          tmp$ret$4 = !tmp_3;
          break $l$block_4;
        }
        if (tmp$ret$4) {
          throw recoverStackTrace(state_3._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
        } else {
          if (result_1 instanceof CompletedExceptionally) {
            throw recoverStackTrace(result_1._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
          } else {
            {
              tmp_2 = result_1;
            }
          }
        }
        tmp_1 = tmp_2;
      } else {
        {
          tmp_1 = unboxState(state_3);
        }
      }
      tmp$ret$3 = tmp_1;
      break $l$block_5;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__1828080292, completion) {
    unreachableDeclarationLog();
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_withCoroutineContext_0_8 = completion._get_context__1558698818_ps0bpe_k$();
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = _this__1828080292;
                  break $l$block_0;
                }
                var a_1_2_9 = tmp$ret$1;
                tmp$ret$2 = typeof a_1_2_9 === 'function' ? a_1_2_9(actualCompletion_1) : _this__1828080292.invoke_34if6s_k$(actualCompletion_1);
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
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          $l$block_6: {
            var tmp$ret$6;
            $l$block_5: {
              var tmp0_failure_0_1_4 = Companion_getInstance();
              tmp$ret$6 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_5;
            }
            tmp$ret$7 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$6);
            break $l$block_6;
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block_7;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$10;
        $l$block_9: {
          var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$9;
          $l$block_8: {
            var tmp0_success_0_1_6 = Companion_getInstance();
            tmp$ret$9 = _Result___init__impl__2241242780(tmp0_resume_0_5);
            break $l$block_8;
          }
          tmp$ret$10 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$9);
          break $l$block_9;
        }
      }
    }
  }
  function startCoroutineUndispatched_0(_this__1828080292, receiver, completion) {
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_withCoroutineContext_0_8 = completion._get_context__1558698818_ps0bpe_k$();
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = _this__1828080292;
                  break $l$block_0;
                }
                var a_1_2_9 = tmp$ret$1;
                tmp$ret$2 = typeof a_1_2_9 === 'function' ? a_1_2_9(receiver, actualCompletion_1) : _this__1828080292.invoke_5zdxxo_k$(receiver, actualCompletion_1);
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
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          $l$block_6: {
            var tmp$ret$6;
            $l$block_5: {
              var tmp0_failure_0_1_4 = Companion_getInstance();
              tmp$ret$6 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_5;
            }
            tmp$ret$7 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$6);
            break $l$block_6;
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block_7;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$10;
        $l$block_9: {
          var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$9;
          $l$block_8: {
            var tmp0_success_0_1_6 = Companion_getInstance();
            tmp$ret$9 = _Result___init__impl__2241242780(tmp0_resume_0_5);
            break $l$block_8;
          }
          tmp$ret$10 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$9);
          break $l$block_9;
        }
      }
    }
  }
  function undispatchedResult(_this__1828080292, shouldThrow, startBlock) {
    unreachableDeclarationLog();
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = CompletedExceptionally_init_$Create$($p, false, 2, null);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === _get_COROUTINE_SUSPENDED__2870145053())
      return _get_COROUTINE_SUSPENDED__2870145053();
    var state = _this__1828080292.makeCompletingOnce_b13xy2_k$(result);
    if (state === _get_COMPLETING_WAITING_CHILDREN__621847959())
      return _get_COROUTINE_SUSPENDED__2870145053();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state._get_cause__3139734664_j3sn7c_k$())) {
        throw recoverStackTrace(state._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result._get_cause__3139734664_j3sn7c_k$(), _this__1828080292._get_uCont__3627170666_b1l76e_k$());
        } else {
          {
            tmp_2 = result;
          }
        }
      }
      tmp_1 = tmp_2;
    } else {
      {
        tmp_1 = unboxState(state);
      }
    }
    return tmp_1;
  }
  function _get_NOT_SELECTED__3193472900() {
    unreachableDeclarationLog();
    init_properties_Select_kt_2641548766();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function _get_ALREADY_SELECTED__454812745() {
    unreachableDeclarationLog();
    init_properties_Select_kt_2641548766();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function _get_UNDECIDED__1268814222_1() {
    unreachableDeclarationLog();
    init_properties_Select_kt_2641548766();
    return UNDECIDED_1;
  }
  var UNDECIDED_1;
  function _get_RESUMED__2572863546_1() {
    unreachableDeclarationLog();
    init_properties_Select_kt_2641548766();
    return RESUMED_1;
  }
  var RESUMED_1;
  function _get_selectOpSequenceNumber__3051689508() {
    unreachableDeclarationLog();
    init_properties_Select_kt_2641548766();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
    unreachableDeclarationLog();
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function SelectInstance() {
    unreachableDeclarationLog();
  }
  SelectInstance.$metadata$ = {
    simpleName: 'SelectInstance',
    kind: 'interface',
    interfaces: []
  };
  function _get_number__284822754($this) {
    unreachableDeclarationLog();
    return $this.number_1;
  }
  function SeqNumber() {
    unreachableDeclarationLog();
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  SeqNumber.prototype.next_20eer_k$ = function () {
    unreachableDeclarationLog();
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  SeqNumber.$metadata$ = {
    simpleName: 'SeqNumber',
    kind: 'class',
    interfaces: []
  };
  function SelectClause1() {
    unreachableDeclarationLog();
  }
  SelectClause1.$metadata$ = {
    simpleName: 'SelectClause1',
    kind: 'interface',
    interfaces: []
  };
  function SelectClause2() {
    unreachableDeclarationLog();
  }
  SelectClause2.$metadata$ = {
    simpleName: 'SelectClause2',
    kind: 'interface',
    interfaces: []
  };
  var properties_initialized_Select_kt_469806594;
  function init_properties_Select_kt_2641548766() {
    unreachableDeclarationLog();
    if (!properties_initialized_Select_kt_469806594) {
      properties_initialized_Select_kt_469806594 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_1 = new Symbol('UNDECIDED');
      RESUMED_1 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function _get_LOCK_FAIL__1315986143() {
    unreachableDeclarationLog();
    init_properties_Mutex_kt_3226717589();
    return LOCK_FAIL;
  }
  var LOCK_FAIL;
  function _get_UNLOCK_FAIL__3936780664() {
    init_properties_Mutex_kt_3226717589();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function _get_LOCKED__3342022977() {
    init_properties_Mutex_kt_3226717589();
    return LOCKED;
  }
  var LOCKED;
  function _get_UNLOCKED__2023965000() {
    init_properties_Mutex_kt_3226717589();
    return UNLOCKED;
  }
  var UNLOCKED;
  function _get_EMPTY_LOCKED__2435113583() {
    init_properties_Mutex_kt_3226717589();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function _get_EMPTY_UNLOCKED__2362398454() {
    init_properties_Mutex_kt_3226717589();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked_1 = locked;
  }
  Empty_0.prototype._get_locked__2624040257_rmtrjz_k$ = function () {
    unreachableDeclarationLog();
    return this.locked_1;
  };
  Empty_0.prototype.toString = function () {
    return 'Empty[' + toString_0(this.locked_1) + ']';
  };
  Empty_0.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: []
  };
  function Mutex() {
    unreachableDeclarationLog();
  }
  Mutex.$metadata$ = {
    simpleName: 'Mutex',
    kind: 'interface',
    interfaces: []
  };
  function Mutex_0(locked) {
    init_properties_Mutex_kt_3226717589();
    return new MutexImpl(locked);
  }
  function Mutex$default(locked, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      locked = false;
    return Mutex_0(locked);
  }
  function withLock(_this__1828080292, owner, action, $cont) {
    unreachableDeclarationLog();
    var tmp = new $withLockCOROUTINE$18(_this__1828080292, owner, action, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function PrepareOp($outer, atomicOp) {
    unreachableDeclarationLog();
    this.$this_1 = $outer;
    OpDescriptor.call(this);
    this.atomicOp_1 = atomicOp;
  }
  PrepareOp.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    unreachableDeclarationLog();
    return this.atomicOp_1;
  };
  PrepareOp.prototype.perform_8emi3i_k$ = function (affected) {
    unreachableDeclarationLog();
    var update = this.atomicOp_1._get_isDecided__2759190303_ped141_k$() ? _get_EMPTY_UNLOCKED__2362398454() : this.atomicOp_1;
    (affected instanceof MutexImpl ? affected : THROW_CCE())._state_1.atomicfu$compareAndSet(this, update);
    Unit_getInstance();
    return null;
  };
  PrepareOp.$metadata$ = {
    simpleName: 'PrepareOp',
    kind: 'class',
    interfaces: []
  };
  function _get_isTaken__1918929140($this) {
    unreachableDeclarationLog();
    return $this.isTaken_1;
  }
  function _get_cont__794428761($this) {
    unreachableDeclarationLog();
    return $this.cont_1;
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1._get_owner__3503380350_d3agea_k$());
      return Unit_getInstance();
    };
  }
  function MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this$0, this$1) {
    unreachableDeclarationLog();
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1._get_owner__3503380350_d3agea_k$());
      return Unit_getInstance();
    };
  }
  function _get__state__4101327289_4($this) {
    unreachableDeclarationLog();
    return $this._state_1;
  }
  function lockSuspend($this, owner, $cont) {
    var tmp$ret$3;
    $l$block_3: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1_1682274507));
      var tmp$ret$0;
      $l$block_1: {
        var waiter_4 = new LockCont($this, owner, cancellable_2_2);
        {
          var tmp0_loop_0_5 = $this._state_1;
          while (true) {
            var tmp$ret$2;
            $l$block_2: {
              var tmp1__anonymous__1_6_3035584209 = tmp0_loop_0_5._get_value__3683422336_a43j40_k$();
              var tmp0_subject_2_7 = tmp1__anonymous__1_6_3035584209;
              if (tmp0_subject_2_7 instanceof Empty_0) {
                if (!(tmp1__anonymous__1_6_3035584209.locked_1 === _get_UNLOCKED__2023965000())) {
                  $this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_6_3035584209, new LockedQueue(tmp1__anonymous__1_6_3035584209.locked_1));
                  Unit_getInstance();
                } else {
                  var update_3_8 = owner == null ? _get_EMPTY_LOCKED__2435113583() : new Empty_0(owner);
                  if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_6_3035584209, update_3_8)) {
                    cancellable_2_2.resume_l1w5in_k$(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                    tmp$ret$0 = Unit_getInstance();
                    break $l$block_1;
                  }
                }
              } else {
                if (tmp0_subject_2_7 instanceof LockedQueue) {
                  var curOwner_5_10 = tmp1__anonymous__1_6_3035584209.owner_1;
                  {
                    var tmp0_check_0_6_11 = !(curOwner_5_10 === owner);
                    {
                    }
                    if (!tmp0_check_0_6_11) {
                      var tmp$ret$1;
                      $l$block_0: {
                        tmp$ret$1 = 'Already locked by ' + toString(owner);
                        break $l$block_0;
                      }
                      var message_1_7_12 = tmp$ret$1;
                      throw IllegalStateException_init_$Create$(toString_0(message_1_7_12));
                    }
                  }
                  tmp1__anonymous__1_6_3035584209.addLast_uyctnf_k$(waiter_4);
                  if ($this._state_1._get_value__3683422336_a43j40_k$() === tmp1__anonymous__1_6_3035584209 ? true : !waiter_4.take_2451j_k$()) {
                    removeOnCancellation(cancellable_2_2, waiter_4);
                    tmp$ret$0 = Unit_getInstance();
                    break $l$block_1;
                  }
                  waiter_4 = new LockCont($this, owner, cancellable_2_2);
                  tmp$ret$2 = Unit_getInstance();
                  break $l$block_2;
                } else {
                  if (tmp0_subject_2_7 instanceof OpDescriptor) {
                    tmp1__anonymous__1_6_3035584209.perform_8emi3i_k$($this);
                    Unit_getInstance();
                  } else {
                    {
                      var tmp1_error_0_8_13 = 'Illegal state ' + toString(tmp1__anonymous__1_6_3035584209);
                      throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_8_13));
                    }
                  }
                }
              }
            }
          }
          Unit_getInstance();
        }
      }
      tmp$ret$3 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_3;
    }
    return tmp$ret$3;
  }
  function TryLockDesc(mutex, owner) {
    unreachableDeclarationLog();
    AtomicDesc.call(this);
    this.mutex_1 = mutex;
    this.owner_1 = owner;
  }
  TryLockDesc.prototype._get_mutex__3444453938_e2dgb2_k$ = function () {
    unreachableDeclarationLog();
    return this.mutex_1;
  };
  TryLockDesc.prototype._get_owner__3503380350_d3agea_k$ = function () {
    unreachableDeclarationLog();
    return this.owner_1;
  };
  TryLockDesc.prototype.prepare_lz7jjr_k$ = function (op) {
    unreachableDeclarationLog();
    var prepare = new PrepareOp(this, op);
    if (!this.mutex_1._state_1.atomicfu$compareAndSet(_get_EMPTY_UNLOCKED__2362398454(), prepare))
      return _get_LOCK_FAIL__1315986143();
    return prepare.perform_8emi3i_k$(this.mutex_1);
  };
  TryLockDesc.prototype.complete_b09hpj_k$ = function (op, failure) {
    unreachableDeclarationLog();
    var tmp;
    if (!(failure == null)) {
      tmp = _get_EMPTY_UNLOCKED__2362398454();
    } else {
      tmp = this.owner_1 == null ? _get_EMPTY_LOCKED__2435113583() : new Empty_0(this.owner_1);
    }
    var update = tmp;
    this.mutex_1._state_1.atomicfu$compareAndSet(op, update);
    Unit_getInstance();
  };
  TryLockDesc.$metadata$ = {
    simpleName: 'TryLockDesc',
    kind: 'class',
    interfaces: []
  };
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.owner_1 = owner;
  }
  LockedQueue.prototype._set_owner__1145218290_av20e3_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this.owner_1 = _set____804775014;
  };
  LockedQueue.prototype._get_owner__3503380350_d3agea_k$ = function () {
    unreachableDeclarationLog();
    return this.owner_1;
  };
  LockedQueue.prototype.toString = function () {
    return 'LockedQueue[' + toString_0(this.owner_1) + ']';
  };
  LockedQueue.$metadata$ = {
    simpleName: 'LockedQueue',
    kind: 'class',
    interfaces: []
  };
  function LockWaiter($outer, owner) {
    this.$this_1 = $outer;
    LinkedListNode.call(this);
    this.owner_1 = owner;
    this.isTaken_1 = atomic$boolean$1(false);
  }
  LockWaiter.prototype._get_owner__3503380350_d3agea_k$ = function () {
    return this.owner_1;
  };
  LockWaiter.prototype.take_2451j_k$ = function () {
    return this.isTaken_1.atomicfu$compareAndSet(false, true);
  };
  LockWaiter.prototype.dispose_3n44we_k$ = function () {
    this.remove_fgfybg_k$();
    Unit_getInstance();
  };
  LockWaiter.$metadata$ = {
    simpleName: 'LockWaiter',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function LockCont($outer, owner, cont) {
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.cont_1 = cont;
  }
  LockCont.prototype.tryResumeLockWaiter_ic8017_k$ = function () {
    if (!this.take_2451j_k$())
      return false;
    return !(this.cont_1.tryResume_93jc0s_k$(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.$this_2, this)) == null);
  };
  LockCont.prototype.completeResumeLockWaiter_9lh6gy_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(_get_RESUME_TOKEN__2573897444());
  };
  LockCont.prototype.toString = function () {
    return 'LockCont[' + toString(this._get_owner__3503380350_d3agea_k$()) + ', ' + this.cont_1 + '] for ' + this.$this_2;
  };
  LockCont.$metadata$ = {
    simpleName: 'LockCont',
    kind: 'class',
    interfaces: []
  };
  function LockSelect($outer, owner, select, block) {
    unreachableDeclarationLog();
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.select_1 = select;
    this.block_1 = block;
  }
  LockSelect.prototype._get_select__4263438735_irrld_k$ = function () {
    unreachableDeclarationLog();
    return this.select_1;
  };
  LockSelect.prototype._get_block__3121070308_jewopo_k$ = function () {
    unreachableDeclarationLog();
    return this.block_1;
  };
  LockSelect.prototype.tryResumeLockWaiter_ic8017_k$ = function () {
    unreachableDeclarationLog();
    return this.take_2451j_k$() ? this.select_1.trySelect_1ivjiv_k$() : false;
  };
  LockSelect.prototype.completeResumeLockWaiter_9lh6gy_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this.select_1._get_completion__2811226159_ojdpzl_k$();
    startCoroutineCancellable(this.block_1, this.$this_2, tmp, MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this.$this_2, this));
  };
  LockSelect.prototype.toString = function () {
    unreachableDeclarationLog();
    return 'LockSelect[' + toString(this._get_owner__3503380350_d3agea_k$()) + ', ' + this.select_1 + '] for ' + this.$this_2;
  };
  LockSelect.$metadata$ = {
    simpleName: 'LockSelect',
    kind: 'class',
    interfaces: []
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.queue_1 = queue;
  }
  UnlockOp.prototype._get_queue__3558538464_c6g84g_k$ = function () {
    unreachableDeclarationLog();
    return this.queue_1;
  };
  UnlockOp.prototype.prepare_qor5c_k$ = function (affected) {
    return this.queue_1._get_isEmpty__1500737838_oti0q6_k$() ? null : _get_UNLOCK_FAIL__3936780664();
  };
  UnlockOp.prototype.prepare_gq68ys_k$ = function (affected) {
    return this.prepare_qor5c_k$(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  UnlockOp.prototype.complete_fo0qwe_k$ = function (affected, failure) {
    var update = failure == null ? _get_EMPTY_UNLOCKED__2362398454() : this.queue_1;
    affected._state_1.atomicfu$compareAndSet(this, update);
    Unit_getInstance();
  };
  UnlockOp.prototype.complete_fye4ce_k$ = function (affected, failure) {
    return this.complete_fo0qwe_k$(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  UnlockOp.$metadata$ = {
    simpleName: 'UnlockOp',
    kind: 'class',
    interfaces: []
  };
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.unlock_uksyr8_k$($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this._state_1 = atomic$ref$1(locked ? _get_EMPTY_LOCKED__2435113583() : _get_EMPTY_UNLOCKED__2362398454());
  }
  MutexImpl.prototype._get_isLocked__1240757623_kipqpj_k$ = function () {
    unreachableDeclarationLog();
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Empty_0)
            return !(tmp1__anonymous__1_4003154330.locked_1 === _get_UNLOCKED__2023965000());
          else {
            if (tmp0_subject_2 instanceof LockedQueue)
              return true;
            else {
              if (tmp0_subject_2 instanceof OpDescriptor) {
                tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
                Unit_getInstance();
              } else {
                {
                  var tmp0_error_0_3 = 'Illegal state ' + toString(tmp1__anonymous__1_4003154330);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_3));
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  MutexImpl.prototype._get_isLockedEmptyQueueState__3077003384_k556yw_k$ = function () {
    unreachableDeclarationLog();
    var state = this._state_1._get_value__3683422336_a43j40_k$();
    var tmp;
    if (state instanceof LockedQueue) {
      tmp = state._get_isEmpty__1500737838_oti0q6_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  MutexImpl.prototype.tryLock_jl1wg7_k$ = function (owner) {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Empty_0) {
            if (!(tmp1__anonymous__1_4003154330.locked_1 === _get_UNLOCKED__2023965000()))
              return false;
            var update_3 = owner == null ? _get_EMPTY_LOCKED__2435113583() : new Empty_0(owner);
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_3))
              return true;
          } else {
            if (tmp0_subject_2 instanceof LockedQueue) {
              {
                var tmp0_check_0_4 = !(tmp1__anonymous__1_4003154330.owner_1 === owner);
                {
                }
                if (!tmp0_check_0_4) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Already locked by ' + toString(owner);
                    break $l$block;
                  }
                  var message_1_5 = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message_1_5));
                }
              }
              return false;
            } else {
              if (tmp0_subject_2 instanceof OpDescriptor) {
                tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
                Unit_getInstance();
              } else {
                {
                  var tmp1_error_0_6 = 'Illegal state ' + toString(tmp1__anonymous__1_4003154330);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_6));
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  MutexImpl.prototype.lock_25dizd_k$ = function (owner, $cont) {
    if (this.tryLock_jl1wg7_k$(owner))
      return Unit_getInstance();
    return lockSuspend(this, owner, $cont);
  };
  MutexImpl.prototype._get_onLock__941831329_fkqppd_k$ = function () {
    unreachableDeclarationLog();
    return this;
  };
  MutexImpl.prototype.registerSelectClause2_wnuzpd_k$ = function (select, owner, block) {
    unreachableDeclarationLog();
    while (true) {
      if (select._get_isSelected__1871115078_uy0hmu_k$())
        return Unit_getInstance();
      var state = this._state_1._get_value__3683422336_a43j40_k$();
      if (state instanceof Empty_0) {
        if (!(state.locked_1 === _get_UNLOCKED__2023965000())) {
          this._state_1.atomicfu$compareAndSet(state, new LockedQueue(state.locked_1));
          Unit_getInstance();
        } else {
          var failure = select.performAtomicTrySelect_9r1u91_k$(new TryLockDesc(this, owner));
          if (failure == null) {
            startCoroutineUnintercepted_0(block, this, select._get_completion__2811226159_ojdpzl_k$());
            return Unit_getInstance();
          } else if (failure === _get_ALREADY_SELECTED__454812745())
            return Unit_getInstance();
          else if (failure === _get_LOCK_FAIL__1315986143()) {
          } else if (failure === _get_RETRY_ATOMIC__2660021705()) {
          } else {
            var tmp0_error_0 = 'performAtomicTrySelect(TryLockDesc) returned ' + toString(failure);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
          }
        }
      } else {
        if (state instanceof LockedQueue) {
          {
            var tmp1_check_0 = !(state.owner_1 === owner);
            {
            }
            if (!tmp1_check_0) {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = 'Already locked by ' + toString(owner);
                break $l$block;
              }
              var message_1 = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message_1));
            }
          }
          var node = new LockSelect(this, owner, select, block);
          state.addLast_uyctnf_k$(node);
          if (this._state_1._get_value__3683422336_a43j40_k$() === state ? true : !node.take_2451j_k$()) {
            select.disposeOnSelect_lrl426_k$(node);
            return Unit_getInstance();
          }
        } else {
          if (state instanceof OpDescriptor) {
            state.perform_8emi3i_k$(this);
            Unit_getInstance();
          } else {
            {
              var tmp2_error_0 = 'Illegal state ' + toString(state);
              throw IllegalStateException_init_$Create$(toString_0(tmp2_error_0));
            }
          }
        }
      }
    }
  };
  MutexImpl.prototype.registerSelectClause2_2icbei_k$ = function (select, param, block) {
    unreachableDeclarationLog();
    return this.registerSelectClause2_wnuzpd_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  MutexImpl.prototype.holdsLock_9pqa81_k$ = function (owner) {
    unreachableDeclarationLog();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this._state_1._get_value__3683422336_a43j40_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_subject_2 = tmp0_let_0;
        var tmp;
        if (tmp0_subject_2 instanceof Empty_0) {
          tmp = tmp0_let_0.locked_1 === owner;
        } else {
          if (tmp0_subject_2 instanceof LockedQueue) {
            tmp = tmp0_let_0.owner_1 === owner;
          } else {
            {
              tmp = false;
            }
          }
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MutexImpl.prototype.unlock_uksyr8_k$ = function (owner) {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Empty_0) {
            if (owner == null) {
              var tmp0_check_0_3 = !(tmp1__anonymous__1_4003154330.locked_1 === _get_UNLOCKED__2023965000());
              {
              }
              if (!tmp0_check_0_3) {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = 'Mutex is not locked';
                  break $l$block;
                }
                var message_1_4 = tmp$ret$0;
                throw IllegalStateException_init_$Create$(toString_0(message_1_4));
              }
            } else {
              var tmp1_check_0_5 = tmp1__anonymous__1_4003154330.locked_1 === owner;
              {
              }
              if (!tmp1_check_0_5) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__1_4003154330.locked_1) + ' but expected ' + toString(owner);
                  break $l$block_0;
                }
                var message_1_6 = tmp$ret$1;
                throw IllegalStateException_init_$Create$(toString_0(message_1_6));
              }
            }
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, _get_EMPTY_UNLOCKED__2362398454()))
              return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof OpDescriptor) {
              tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
              Unit_getInstance();
            } else {
              if (tmp0_subject_2 instanceof LockedQueue) {
                if (!(owner == null)) {
                  var tmp2_check_0_7 = tmp1__anonymous__1_4003154330.owner_1 === owner;
                  {
                  }
                  if (!tmp2_check_0_7) {
                    var tmp$ret$2;
                    $l$block_1: {
                      tmp$ret$2 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__1_4003154330.owner_1) + ' but expected ' + toString(owner);
                      break $l$block_1;
                    }
                    var message_1_8 = tmp$ret$2;
                    throw IllegalStateException_init_$Create$(toString_0(message_1_8));
                  }
                }
                var waiter_9 = tmp1__anonymous__1_4003154330.removeFirstOrNull_eges3a_k$();
                if (waiter_9 == null) {
                  var op_10 = new UnlockOp(tmp1__anonymous__1_4003154330);
                  if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, op_10) ? op_10.perform_8emi3i_k$(this) == null : false)
                    return Unit_getInstance();
                } else {
                  if ((waiter_9 instanceof LockWaiter ? waiter_9 : THROW_CCE()).tryResumeLockWaiter_ic8017_k$()) {
                    var tmp = tmp1__anonymous__1_4003154330;
                    var tmp1_elvis_lhs_11 = waiter_9.owner_1;
                    tmp.owner_1 = tmp1_elvis_lhs_11 == null ? _get_LOCKED__3342022977() : tmp1_elvis_lhs_11;
                    waiter_9.completeResumeLockWaiter_9lh6gy_k$();
                    return Unit_getInstance();
                  } else {
                  }
                }
              } else {
                {
                  var tmp3_error_0_12 = 'Illegal state ' + toString(tmp1__anonymous__1_4003154330);
                  throw IllegalStateException_init_$Create$(toString_0(tmp3_error_0_12));
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  MutexImpl.prototype.toString = function () {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Empty_0)
            return 'Mutex[' + toString_0(tmp1__anonymous__1_4003154330.locked_1) + ']';
          else {
            if (tmp0_subject_2 instanceof OpDescriptor) {
              tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
              Unit_getInstance();
            } else {
              if (tmp0_subject_2 instanceof LockedQueue)
                return 'Mutex[' + toString_0(tmp1__anonymous__1_4003154330.owner_1) + ']';
              else {
                {
                  var tmp0_error_0_3 = 'Illegal state ' + toString(tmp1__anonymous__1_4003154330);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_3));
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  MutexImpl.$metadata$ = {
    simpleName: 'MutexImpl',
    kind: 'class',
    interfaces: [Mutex, SelectClause2]
  };
  function $withLockCOROUTINE$18(_this__1828080292, owner, action, resultContinuation) {
    unreachableDeclarationLog();
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.owner_1 = owner;
    this.action_1 = action;
  }
  $withLockCOROUTINE$18.prototype.doResume_5yljmg_k$ = function () {
    unreachableDeclarationLog();
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = this._this__1828080292__1.lock_25dizd_k$(this.owner_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$2;
            l$ret$3: do {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  tmp$ret$0 = this.action_1();
                  break l$ret$1;
                } catch ($p) {
                  var tmp_1;
                  {
                    this._this__1828080292__1.unlock_uksyr8_k$(this.owner_1);
                    throw $p;
                  }
                  tmp_0 = tmp_1;
                }
                tmp$ret$0 = tmp_0;
              }
               while (false);
              var tmp_2 = tmp$ret$0;
              this._this__1828080292__1.unlock_uksyr8_k$(this.owner_1);
              return tmp_2;
            }
             while (false);
            this._this__1828080292__1.unlock_uksyr8_k$(this.owner_1);
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
  $withLockCOROUTINE$18.$metadata$ = {
    simpleName: '$withLockCOROUTINE$18',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_Mutex_kt_2186830065;
  function init_properties_Mutex_kt_3226717589() {
    if (!properties_initialized_Mutex_kt_2186830065) {
      properties_initialized_Mutex_kt_2186830065 = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(_get_LOCKED__3342022977());
      EMPTY_UNLOCKED = new Empty_0(_get_UNLOCKED__2023965000());
    }
  }
  function _get_MAX_SPIN_CYCLES__922226050() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function _get_PERMIT__2324695632() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return PERMIT;
  }
  var PERMIT;
  function _get_TAKEN__2679448586() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return TAKEN;
  }
  var TAKEN;
  function _get_BROKEN__3153890774() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return BROKEN;
  }
  var BROKEN;
  function _get_CANCELLED__1066655552() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return CANCELLED;
  }
  var CANCELLED;
  function _get_SEGMENT_SIZE__3167309118() {
    unreachableDeclarationLog();
    init_properties_Semaphore_kt_1420408880();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_2436709772;
  function init_properties_Semaphore_kt_1420408880() {
    unreachableDeclarationLog();
    if (!properties_initialized_Semaphore_kt_2436709772) {
      properties_initialized_Semaphore_kt_2436709772 = true;
      MAX_SPIN_CYCLES = systemProp$default('kotlinx.coroutines.semaphore.maxSpinCycles', 100, 0, 0, 12, null);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp$default('kotlinx.coroutines.semaphore.segmentSize', 16, 0, 0, 12, null);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this__1828080292, cause) {
    var tmp0_subject = typeof _this__1828080292;
    if (tmp0_subject === 'function')
      _this__1828080292(cause);
    else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function _get_asHandler__3768099481(_this__1828080292) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_asHandler__3768099481_0(_this__1828080292) {
    unreachableDeclarationLog();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this__1828080292) {
    return toString_0(_this__1828080292);
  }
  function withCoroutineContext(context, countOrElement, block) {
    unreachableDeclarationLog();
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    unreachableDeclarationLog();
    return block();
  }
  function _get_DefaultDelay__1069114793() {
    var tmp = Dispatchers_getInstance()._get_Default__2834936080_o59jao_k$();
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = window;
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp1_asDynamic_0 = window;
          tmp$ret$1 = tmp1_asDynamic_0;
          break $l$block_0;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        {
          tmp_0 = false;
        }
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          {
            tmp = NodeDispatcher_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function _get_UNDEFINED__1354999585_0() {
    unreachableDeclarationLog();
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__1828080292, context) {
    var combined = _this__1828080292._get_coroutineContext__2519429620_td3xn0_k$().plus_rgw9wi_k$(context);
    return (!(combined === Dispatchers_getInstance()._get_Default__2834936080_o59jao_k$()) ? combined.get_1pi7hg_k$(Key_getInstance()) == null : false) ? combined.plus_rgw9wi_k$(Dispatchers_getInstance()._get_Default__2834936080_o59jao_k$()) : combined;
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  UndispatchedCoroutine.prototype.afterResume_ufx9w9_k$ = function (state) {
    return this._get_uCont__3627170666_b1l76e_k$().resumeWith_s3a3yh_k$(recoverResult(state, this._get_uCont__3627170666_b1l76e_k$()));
  };
  UndispatchedCoroutine.$metadata$ = {
    simpleName: 'UndispatchedCoroutine',
    kind: 'class',
    interfaces: []
  };
  function _get_coroutineName__3134708654(_this__1828080292) {
    return null;
  }
  function initializeDefaultExceptionHandlers() {
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function _set_counter__3302982921(_set____804775014) {
    unreachableDeclarationLog();
    counter = _set____804775014;
  }
  function _get_counter__1753990293() {
    unreachableDeclarationLog();
    return counter;
  }
  var counter;
  function _get_DEBUG__2224823294() {
    return DEBUG;
  }
  var DEBUG;
  function _get_classSimpleName__3937513404(_this__1828080292) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__1828080292)._get_simpleName__973554894_g3mnri_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress__2831015762(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this__1828080292;
        break $l$block_0;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
    unreachableDeclarationLog();
  }
  function _get_mainDispatcher__1730257099($this) {
    unreachableDeclarationLog();
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__3747074247($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.injectedMainDispatcher_1 = _set____804775014;
  }
  function _get_injectedMainDispatcher__797640635($this) {
    unreachableDeclarationLog();
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  Dispatchers.prototype._get_Default__2834936080_o59jao_k$ = function () {
    return this.Default_1;
  };
  Dispatchers.prototype._get_Main__773689234_csmufm_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  Dispatchers.prototype._get_Unconfined__3340736842_fs4gxi_k$ = function () {
    return this.Unconfined_1;
  };
  Dispatchers.prototype.injectMain_isae1a_k$ = function (dispatcher) {
    unreachableDeclarationLog();
    this.injectedMainDispatcher_1 = dispatcher;
  };
  Dispatchers.prototype.resetInjectedMain_6cv6vt_k$ = function () {
    unreachableDeclarationLog();
    this.injectedMainDispatcher_1 = null;
  };
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__1567610539($this) {
    unreachableDeclarationLog();
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  JsMainDispatcher.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    unreachableDeclarationLog();
    return this.delegate_1;
  };
  JsMainDispatcher.prototype._get_immediate__3483316416_df8hts_k$ = function () {
    return this.immediate_1;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  JsMainDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  JsMainDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function _get_RECOVER_STACK_TRACES__1107292075() {
    unreachableDeclarationLog();
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.job_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype._get_job__857118836_e6b14k_k$ = function () {
    unreachableDeclarationLog();
    return this.job_1;
  };
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function addSuppressedThrowable(_this__1828080292, other) {
    unreachableDeclarationLog();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this._get_messageQueue__2421032257_uzoxj3_k$().processQueue_1);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this._get_messageQueue__2421032257_uzoxj3_k$().processQueue_1, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype._get_processQueue__1005172137_gmgbs9_k$ = function () {
    unreachableDeclarationLog();
    return this.processQueue_1;
  };
  ScheduledMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  ScheduledMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__2421032257_uzoxj3_k$ = function () {
    return this.messageQueue_1;
  };
  SetTimeoutBasedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    unreachableDeclarationLog();
    checkParallelism(parallelism);
    return this;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  SetTimeoutBasedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ClearTimeout(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _set_scheduled__528399032($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.scheduled_1 = _set____804775014;
  }
  function _get_scheduled__2300135236($this) {
    unreachableDeclarationLog();
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  MessageQueue.prototype._get_yieldEvery__2586046141_s9g403_k$ = function () {
    unreachableDeclarationLog();
    return this.yieldEvery_1;
  };
  MessageQueue.prototype.enqueue_w6uc33_k$ = function (element) {
    this.addLast_xhfl3v_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  MessageQueue.prototype.process_mza50i_k$ = function () {
    try {
      {
        var tmp0_repeat_0 = this.yieldEvery_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs_5 = this.removeFirstOrNull_eges3a_k$();
              var tmp;
              if (tmp0_elvis_lhs_5 == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs_5;
              }
              var element_4 = tmp;
              element_4.run_mw4iiu_k$();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }finally {
      if (this._get_isEmpty__1500737838_oti0q6_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__2978141667_1($this) {
    unreachableDeclarationLog();
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  ClearTimeout.prototype.dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  ClearTimeout.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  ClearTimeout.$metadata$ = {
    simpleName: 'ClearTimeout',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function _get_MAX_DELAY__2689924265() {
    unreachableDeclarationLog();
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__3634831643($this) {
    unreachableDeclarationLog();
    return $this.window_1;
  }
  function _get_queue__3558538464_0($this) {
    unreachableDeclarationLog();
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.dispose_3n44we_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  WindowDispatcher$invokeOnTimeout$1.$metadata$ = {
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  WindowDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    Unit_getInstance();
  };
  WindowDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _get_window__3634831643_0($this) {
    unreachableDeclarationLog();
    return $this.window_1;
  }
  function _get_messageName__351833247($this) {
    unreachableDeclarationLog();
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        tmp = this$0.process_mza50i_k$();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function Runnable() {
    unreachableDeclarationLog();
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext__3781262951(_this__1828080292) {
    return Unit_getInstance();
  }
  function afterTask(_this__1828080292) {
    unreachableDeclarationLog();
  }
  function asCoroutineDispatcher(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_also_0 = new WindowDispatcher(_this__1828080292);
        {
        }
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _this__1828080292;
            break $l$block_0;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also_0;
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    unreachableDeclarationLog();
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    this.owner_1 = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.prototype._get_owner__3503380350_d3agea_k$ = function () {
    unreachableDeclarationLog();
    return this.owner_1;
  };
  AbortFlowException.$metadata$ = {
    simpleName: 'AbortFlowException',
    kind: 'class',
    interfaces: []
  };
  function _set_lastEmissionContext__48101011($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.lastEmissionContext_1 = _set____804775014;
  }
  function _get_lastEmissionContext__852182047($this) {
    unreachableDeclarationLog();
    return $this.lastEmissionContext_1;
  }
  function SafeCollector$collectContextSize$lambda() {
    return function (count, _anonymous_parameter_1__2695192083) {
      return count + 1 | 0;
    };
  }
  function SafeCollector(collector, collectContext) {
    this.collector_1 = collector;
    this.collectContext_1 = collectContext;
    var tmp = this;
    tmp.collectContextSize_1 = this.collectContext_1.fold_6dbyow_k$(0, SafeCollector$collectContextSize$lambda());
    this.lastEmissionContext_1 = null;
  }
  SafeCollector.prototype._get_collector__1245886308_klro10_k$ = function () {
    unreachableDeclarationLog();
    return this.collector_1;
  };
  SafeCollector.prototype._get_collectContext__2677071238_qr94l6_k$ = function () {
    return this.collectContext_1;
  };
  SafeCollector.prototype._get_collectContextSize__2324965765_wkvywr_k$ = function () {
    return this.collectContextSize_1;
  };
  SafeCollector.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $cont._get_context__1558698818_ps0bpe_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.lastEmissionContext_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lastEmissionContext_1 = currentContext;
    }
    return this.collector_1.emit_1fbrsb_k$(value, $cont);
  };
  SafeCollector.prototype.releaseIntercepted_5cexvt_k$ = function () {
  };
  SafeCollector.$metadata$ = {
    simpleName: 'SafeCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.prototype.tryLock_hapj0a_k$ = function () {
    unreachableDeclarationLog();
    return true;
  };
  NoOpLock.prototype.unlock_85cgkz_k$ = function () {
    unreachableDeclarationLog();
  };
  NoOpLock.$metadata$ = {
    simpleName: 'NoOpLock',
    kind: 'class',
    interfaces: []
  };
  function withLock_0(_this__1828080292, action) {
    unreachableDeclarationLog();
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this._get__next__3036752447_kt3wsh_k$() === this;
  };
  LinkedListHead.prototype.remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  LinkedListNode.prototype._set__next__678590387_e2vm1_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this._next_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__next__3036752447_kt3wsh_k$ = function () {
    return this._next_1;
  };
  LinkedListNode.prototype._set__prev__680806515_d4288n_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this._prev_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__prev__3038968575_krsetd_k$ = function () {
    return this._prev_1;
  };
  LinkedListNode.prototype._set__removed__1833661142_s8t2nh_k$ = function (_set____804775014) {
    unreachableDeclarationLog();
    this._removed_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__removed__1059529930_hiteiy_k$ = function () {
    return this._removed_1;
  };
  LinkedListNode.prototype._get_nextNode__2683205334_qnlnhm_k$ = function () {
    unreachableDeclarationLog();
    return this._next_1;
  };
  LinkedListNode.prototype._get_prevNode__624551830_abub9y_k$ = function () {
    unreachableDeclarationLog();
    return this._prev_1;
  };
  LinkedListNode.prototype._get_isRemoved__1681100091_rsvt4r_k$ = function () {
    unreachableDeclarationLog();
    return this._removed_1;
  };
  LinkedListNode.prototype.addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  LinkedListNode.prototype.remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  LinkedListNode.prototype.removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIf_h8xph4_k$ = function (node, condition) {
    unreachableDeclarationLog();
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    unreachableDeclarationLog();
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    unreachableDeclarationLog();
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.helpRemove_v3vfak_k$ = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    {
      var tmp0_check_0 = next.removeImpl_i5v938_k$();
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Should remove';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      }
    }
    return next;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function PrepareOp_0(affected, desc, atomicOp) {
    unreachableDeclarationLog();
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  PrepareOp_0.prototype._get_affected__2948029399_m9xjxl_k$ = function () {
    unreachableDeclarationLog();
    return this.affected_1;
  };
  PrepareOp_0.prototype._get_desc__795058650_d5cv6i_k$ = function () {
    unreachableDeclarationLog();
    return this.desc_1;
  };
  PrepareOp_0.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    unreachableDeclarationLog();
    return this.atomicOp_1;
  };
  PrepareOp_0.prototype.perform_8emi3i_k$ = function (affected) {
    unreachableDeclarationLog();
    return null;
  };
  PrepareOp_0.prototype.finishPrepare_o9c8d9_k$ = function () {
    unreachableDeclarationLog();
  };
  PrepareOp_0.$metadata$ = {
    simpleName: 'PrepareOp',
    kind: 'class',
    interfaces: []
  };
  function AbstractAtomicDesc() {
    unreachableDeclarationLog();
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    unreachableDeclarationLog();
    this.finishPrepare_kkga2x_k$(prepareOp);
    return null;
  };
  AbstractAtomicDesc.prototype.onRemoved_gagg6z_k$ = function (affected) {
    unreachableDeclarationLog();
  };
  AbstractAtomicDesc.prototype.prepare_lz7jjr_k$ = function (op) {
    unreachableDeclarationLog();
    var affected = this._get_affectedNode__192743797_36r62d_k$();
    var failure = this.failure_mowj19_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_soaf0c_k$(new PrepareOp_0(affected, this, op));
  };
  AbstractAtomicDesc.prototype.complete_b09hpj_k$ = function (op, failure) {
    unreachableDeclarationLog();
    return this.onComplete_9ma4gp_k$();
  };
  AbstractAtomicDesc.prototype.failure_mowj19_k$ = function (affected) {
    unreachableDeclarationLog();
    return null;
  };
  AbstractAtomicDesc.prototype.retry_84e02v_k$ = function (affected, next) {
    unreachableDeclarationLog();
    return false;
  };
  AbstractAtomicDesc.$metadata$ = {
    simpleName: 'AbstractAtomicDesc',
    kind: 'class',
    interfaces: []
  };
  function RemoveFirstDesc(queue) {
    unreachableDeclarationLog();
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_nextNode__0_2018653837 = this.queue_1;
      tmp$ret$0 = tmp0__get_nextNode__0_2018653837._next_1;
      break $l$block;
    }
    tmp.affectedNode_1 = tmp$ret$0;
  }
  RemoveFirstDesc.prototype._get_queue__3558538464_c6g84g_k$ = function () {
    unreachableDeclarationLog();
    return this.queue_1;
  };
  RemoveFirstDesc.prototype._get_result__3382885006_f31376_k$ = function () {
    unreachableDeclarationLog();
    var tmp = this._get_affectedNode__192743797_36r62d_k$();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  RemoveFirstDesc.prototype._get_affectedNode__192743797_36r62d_k$ = function () {
    unreachableDeclarationLog();
    return this.affectedNode_1;
  };
  RemoveFirstDesc.prototype.finishPrepare_kkga2x_k$ = function (prepareOp) {
    unreachableDeclarationLog();
  };
  RemoveFirstDesc.prototype.onComplete_9ma4gp_k$ = function () {
    unreachableDeclarationLog();
    this.queue_1.removeFirstOrNull_eges3a_k$();
    Unit_getInstance();
  };
  RemoveFirstDesc.prototype.finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    unreachableDeclarationLog();
    return Unit_getInstance();
  };
  RemoveFirstDesc.$metadata$ = {
    simpleName: 'RemoveFirstDesc',
    kind: 'class',
    interfaces: []
  };
  function AddLastDesc(queue, node) {
    unreachableDeclarationLog();
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
  }
  AddLastDesc.prototype._get_queue__3558538464_c6g84g_k$ = function () {
    unreachableDeclarationLog();
    return this.queue_1;
  };
  AddLastDesc.prototype._get_node__804577417_db0vwp_k$ = function () {
    unreachableDeclarationLog();
    return this.node_1;
  };
  AddLastDesc.prototype._get_affectedNode__192743797_36r62d_k$ = function () {
    unreachableDeclarationLog();
    return this.queue_1._prev_1;
  };
  AddLastDesc.prototype.finishPrepare_kkga2x_k$ = function (prepareOp) {
    unreachableDeclarationLog();
  };
  AddLastDesc.prototype.onComplete_9ma4gp_k$ = function () {
    unreachableDeclarationLog();
    return this.queue_1.addLast_uyctnf_k$(this.node_1);
  };
  AddLastDesc.prototype.finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    unreachableDeclarationLog();
    return Unit_getInstance();
  };
  AddLastDesc.$metadata$ = {
    simpleName: 'AddLastDesc',
    kind: 'class',
    interfaces: []
  };
  function probeCoroutineCreated(completion) {
    unreachableDeclarationLog();
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $cont) {
    unreachableDeclarationLog();
    throw exception;
  }
  function initCause(_this__1828080292, cause) {
    unreachableDeclarationLog();
  }
  function CoroutineStackFrame() {
    unreachableDeclarationLog();
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    unreachableDeclarationLog();
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__1325260276_0($this, _set____804775014) {
    unreachableDeclarationLog();
    $this.value_1 = _set____804775014;
  }
  function _get_value__3683422336_0($this) {
    unreachableDeclarationLog();
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  CommonThreadLocal.prototype.get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  //region block: post-declaration
  JobSupport.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  JobSupport.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  JobSupport.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  JobSupport.prototype.cancel_2kogtl_k$ = cancel;
  JobSupport.prototype.plus_ee14jq_k$ = plus_0;
  JobSupport.prototype.plus_rgw9wi_k$ = plus;
  JobSupport.prototype.get_1pi7hg_k$ = get;
  JobSupport.prototype.fold_6dbyow_k$ = fold;
  JobSupport.prototype.minusKey_y21q55_k$ = minusKey;
  AbstractCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  AbstractCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  AbstractCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  AbstractCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  AbstractCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  AbstractCoroutine.prototype.plus_rgw9wi_k$ = plus;
  AbstractCoroutine.prototype.get_1pi7hg_k$ = get;
  AbstractCoroutine.prototype.fold_6dbyow_k$ = fold;
  AbstractCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  StandaloneCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  StandaloneCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  StandaloneCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  StandaloneCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  StandaloneCoroutine.prototype.plus_rgw9wi_k$ = plus;
  StandaloneCoroutine.prototype.get_1pi7hg_k$ = get;
  StandaloneCoroutine.prototype.fold_6dbyow_k$ = fold;
  StandaloneCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  LazyStandaloneCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  LazyStandaloneCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  LazyStandaloneCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  LazyStandaloneCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  LazyStandaloneCoroutine.prototype.plus_rgw9wi_k$ = plus;
  LazyStandaloneCoroutine.prototype.get_1pi7hg_k$ = get;
  LazyStandaloneCoroutine.prototype.fold_6dbyow_k$ = fold;
  LazyStandaloneCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  ScopeCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  ScopeCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  ScopeCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  ScopeCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  ScopeCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  ScopeCoroutine.prototype.plus_rgw9wi_k$ = plus;
  ScopeCoroutine.prototype.get_1pi7hg_k$ = get;
  ScopeCoroutine.prototype.fold_6dbyow_k$ = fold;
  ScopeCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  DispatchedCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  DispatchedCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  DispatchedCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  DispatchedCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  DispatchedCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  DispatchedCoroutine.prototype.plus_rgw9wi_k$ = plus;
  DispatchedCoroutine.prototype.get_1pi7hg_k$ = get;
  DispatchedCoroutine.prototype.fold_6dbyow_k$ = fold;
  DispatchedCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  DeferredCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  DeferredCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  DeferredCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  DeferredCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  DeferredCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  DeferredCoroutine.prototype.plus_rgw9wi_k$ = plus;
  DeferredCoroutine.prototype.get_1pi7hg_k$ = get;
  DeferredCoroutine.prototype.fold_6dbyow_k$ = fold;
  DeferredCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  LazyDeferredCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  LazyDeferredCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  LazyDeferredCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  LazyDeferredCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  LazyDeferredCoroutine.prototype.plus_rgw9wi_k$ = plus;
  LazyDeferredCoroutine.prototype.get_1pi7hg_k$ = get;
  LazyDeferredCoroutine.prototype.fold_6dbyow_k$ = fold;
  LazyDeferredCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  CancellableContinuationImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  CancellableContinuationImpl.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  CoroutineDispatcher.prototype.get_1pi7hg_k$ = get_0;
  CoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  CoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  CoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  _no_name_provided__2671100649.prototype.get_1pi7hg_k$ = get;
  _no_name_provided__2671100649.prototype.fold_6dbyow_k$ = fold;
  _no_name_provided__2671100649.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__2671100649.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.get_1pi7hg_k$ = get_0;
  EventLoop.prototype.fold_6dbyow_k$ = fold;
  EventLoop.prototype.minusKey_y21q55_k$ = minusKey_0;
  AwaitContinuation.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  AwaitContinuation.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  JobImpl.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  JobImpl.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  JobImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  JobImpl.prototype.cancel_2kogtl_k$ = cancel;
  JobImpl.prototype.plus_ee14jq_k$ = plus_0;
  JobImpl.prototype.plus_rgw9wi_k$ = plus;
  JobImpl.prototype.get_1pi7hg_k$ = get;
  JobImpl.prototype.fold_6dbyow_k$ = fold;
  JobImpl.prototype.minusKey_y21q55_k$ = minusKey;
  MainCoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  MainCoroutineDispatcher.prototype.get_1pi7hg_k$ = get_0;
  MainCoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  MainCoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SupervisorJobImpl.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  SupervisorJobImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  SupervisorJobImpl.prototype.cancel_2kogtl_k$ = cancel;
  SupervisorJobImpl.prototype.plus_ee14jq_k$ = plus_0;
  SupervisorJobImpl.prototype.plus_rgw9wi_k$ = plus;
  SupervisorJobImpl.prototype.get_1pi7hg_k$ = get;
  SupervisorJobImpl.prototype.fold_6dbyow_k$ = fold;
  SupervisorJobImpl.prototype.minusKey_y21q55_k$ = minusKey;
  TimeoutCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  TimeoutCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  TimeoutCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  TimeoutCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  TimeoutCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  TimeoutCoroutine.prototype.plus_rgw9wi_k$ = plus;
  TimeoutCoroutine.prototype.get_1pi7hg_k$ = get;
  TimeoutCoroutine.prototype.fold_6dbyow_k$ = fold;
  TimeoutCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  Unconfined.prototype.plus_rgw9wi_k$ = plus;
  Unconfined.prototype.get_1pi7hg_k$ = get_0;
  Unconfined.prototype.fold_6dbyow_k$ = fold;
  Unconfined.prototype.minusKey_y21q55_k$ = minusKey_0;
  YieldContext.prototype.get_1pi7hg_k$ = get;
  YieldContext.prototype.fold_6dbyow_k$ = fold;
  YieldContext.prototype.minusKey_y21q55_k$ = minusKey;
  YieldContext.prototype.plus_rgw9wi_k$ = plus;
  Itr.prototype.next0_nshvhy_k$ = next0;
  AbstractSendChannel.prototype.close$default_jao18g_k$ = close$default;
  AbstractChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  AbstractChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  AbstractChannel.prototype.close$default_jao18g_k$ = close$default;
  AbstractChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  AbstractChannel.prototype.poll_21vi7_k$ = poll;
  AbstractChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  AbstractChannel.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = _get_onReceiveOrNull__3203289763;
  ArrayChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  ArrayChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  ArrayChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  ArrayChannel.prototype.close$default_jao18g_k$ = close$default;
  ArrayChannel.prototype.poll_21vi7_k$ = poll;
  ArrayChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  ArrayChannel.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = _get_onReceiveOrNull__3203289763;
  ChannelCoroutine.prototype.close$default_jao18g_k$ = close$default;
  ChannelCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  ChannelCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  ChannelCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  ChannelCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  ChannelCoroutine.prototype.plus_rgw9wi_k$ = plus;
  ChannelCoroutine.prototype.get_1pi7hg_k$ = get;
  ChannelCoroutine.prototype.fold_6dbyow_k$ = fold;
  ChannelCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  ConflatedChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  ConflatedChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  ConflatedChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  ConflatedChannel.prototype.close$default_jao18g_k$ = close$default;
  ConflatedChannel.prototype.poll_21vi7_k$ = poll;
  ConflatedChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  ConflatedChannel.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = _get_onReceiveOrNull__3203289763;
  LinkedListChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  LinkedListChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  LinkedListChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  LinkedListChannel.prototype.close$default_jao18g_k$ = close$default;
  LinkedListChannel.prototype.poll_21vi7_k$ = poll;
  LinkedListChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  LinkedListChannel.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = _get_onReceiveOrNull__3203289763;
  ProducerCoroutine.prototype.close$default_jao18g_k$ = close$default;
  ProducerCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  ProducerCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  ProducerCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  ProducerCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  ProducerCoroutine.prototype.plus_rgw9wi_k$ = plus;
  ProducerCoroutine.prototype.get_1pi7hg_k$ = get;
  ProducerCoroutine.prototype.fold_6dbyow_k$ = fold;
  ProducerCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  RendezvousChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  RendezvousChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  RendezvousChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  RendezvousChannel.prototype.close$default_jao18g_k$ = close$default;
  RendezvousChannel.prototype.poll_21vi7_k$ = poll;
  RendezvousChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  RendezvousChannel.prototype._get_onReceiveOrNull__3203289763_i1yfrx_k$ = _get_onReceiveOrNull__3203289763;
  SharedFlowImpl.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  StateFlowImpl.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  SubscriptionCountStateFlow.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  ChannelFlow.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  ChannelFlowOperator.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  ChannelFlowOperatorImpl.prototype.fuse$default_lvn7bu_k$ = fuse$default;
  LimitedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  LimitedDispatcher.prototype.get_1pi7hg_k$ = get_0;
  LimitedDispatcher.prototype.fold_6dbyow_k$ = fold;
  LimitedDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  MutexImpl.prototype.tryLock$default_1wxz6m_k$ = tryLock$default;
  MutexImpl.prototype.lock$default_1z4sss_k$ = lock$default;
  MutexImpl.prototype.unlock$default_sxv53j_k$ = unlock$default;
  UndispatchedCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  UndispatchedCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  UndispatchedCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  UndispatchedCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  UndispatchedCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  UndispatchedCoroutine.prototype.plus_rgw9wi_k$ = plus;
  UndispatchedCoroutine.prototype.get_1pi7hg_k$ = get;
  UndispatchedCoroutine.prototype.fold_6dbyow_k$ = fold;
  UndispatchedCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  JsMainDispatcher.prototype.plus_rgw9wi_k$ = plus;
  JsMainDispatcher.prototype.get_1pi7hg_k$ = get_0;
  JsMainDispatcher.prototype.fold_6dbyow_k$ = fold;
  JsMainDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  UnconfinedEventLoop.prototype.plus_rgw9wi_k$ = plus;
  UnconfinedEventLoop.prototype.get_1pi7hg_k$ = get_0;
  UnconfinedEventLoop.prototype.fold_6dbyow_k$ = fold;
  UnconfinedEventLoop.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutBasedDispatcher.prototype.get_1pi7hg_k$ = get_0;
  SetTimeoutBasedDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutBasedDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.delay_sw4t2e_k$ = delay;
  NodeDispatcher.prototype.plus_rgw9wi_k$ = plus;
  NodeDispatcher.prototype.get_1pi7hg_k$ = get_0;
  NodeDispatcher.prototype.fold_6dbyow_k$ = fold;
  NodeDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  NodeDispatcher.prototype.delay_sw4t2e_k$ = delay;
  SetTimeoutDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutDispatcher.prototype.get_1pi7hg_k$ = get_0;
  SetTimeoutDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutDispatcher.prototype.delay_sw4t2e_k$ = delay;
  WindowDispatcher.prototype.plus_rgw9wi_k$ = plus;
  WindowDispatcher.prototype.get_1pi7hg_k$ = get_0;
  WindowDispatcher.prototype.fold_6dbyow_k$ = fold;
  WindowDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  WindowDispatcher.prototype.delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.BufferOverflow_DROP_OLDEST_getInstance = BufferOverflow_DROP_OLDEST_getInstance;
  _.$crossModule$.CoroutineStart_UNDISPATCHED_getInstance = CoroutineStart_UNDISPATCHED_getInstance;
  _.$crossModule$.collect = collect;
  _.$crossModule$.first = first;
  _.$crossModule$.cancelAndJoin = cancelAndJoin;
  _.$crossModule$.coroutineScope = coroutineScope;
  _.$crossModule$.delay = delay_0;
  _.$crossModule$.joinAll = joinAll;
  _.$crossModule$.withContext = withContext;
  _.$crossModule$.withTimeoutOrNull = withTimeoutOrNull;
  _.$crossModule$.withTimeout = withTimeout;
  _.$crossModule$.yield = yield_0;
  _.$crossModule$.Channel$default = Channel$default;
  _.$crossModule$.MutableSharedFlow$default = MutableSharedFlow$default;
  _.$crossModule$.Mutex$default = Mutex$default;
  _.$crossModule$.Job$default = Job$default;
  _.$crossModule$.async$default = async$default;
  _.$crossModule$.cancel$default = cancel$default_4;
  _.$crossModule$.cancel$default_1 = cancel$default_5;
  _.$crossModule$.launch$default = launch$default;
  _.$crossModule$.ChannelResult__getOrNull_impl_916044173 = ChannelResult__getOrNull_impl_916044173;
  _.$crossModule$.Factory_getInstance = Factory_getInstance;
  _.$crossModule$.Key_getInstance = Key_getInstance_1;
  _.$crossModule$.Dispatchers_getInstance = Dispatchers_getInstance;
  _.$crossModule$.GlobalScope_getInstance = GlobalScope_getInstance;
  _.$crossModule$.Key_getInstance_1 = Key_getInstance_2;
  _.$crossModule$.cancelConsumed = cancelConsumed;
  _.$crossModule$.FlowCollector = FlowCollector;
  _.$crossModule$.MutableStateFlow = MutableStateFlow_0;
  _.$crossModule$.flow = flow;
  _.$crossModule$.takeWhile = takeWhile;
  _.$crossModule$.Mutex = Mutex_0;
  _.$crossModule$.CancellableContinuationImpl = CancellableContinuationImpl;
  _.$crossModule$.CoroutineDispatcher = CoroutineDispatcher;
  _.$crossModule$.CoroutineExceptionHandler = CoroutineExceptionHandler;
  _.$crossModule$.CoroutineScope = CoroutineScope_0;
  _.$crossModule$.CoroutineScope_1 = CoroutineScope;
  _.$crossModule$.Job = Job_0;
  _.$crossModule$._get_MODE_CANCELLABLE__581347323 = _get_MODE_CANCELLABLE__581347323;
  _.$crossModule$.SupervisorJob = SupervisorJob;
  _.$crossModule$.TimeoutCancellationException = TimeoutCancellationException;
  _.$crossModule$._get_isActive__4035225851 = _get_isActive__4035225851_0;
  _.$crossModule$._get_isActive__4035225851_1 = _get_isActive__4035225851;
  _.$crossModule$._get_job__857118836 = _get_job__857118836;
  _.$crossModule$.launch = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js.map