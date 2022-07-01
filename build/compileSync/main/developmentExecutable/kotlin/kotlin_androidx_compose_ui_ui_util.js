(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_androidx_compose_ui_ui_util'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_androidx_compose_ui_ui_util'.");
    }
    root.kotlin_androidx_compose_ui_ui_util = factory(typeof kotlin_androidx_compose_ui_ui_util === 'undefined' ? {} : kotlin_androidx_compose_ui_ui_util, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var Long = kotlin_kotlin.$crossModule$.Long;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var floatFromBits = kotlin_kotlin.$crossModule$.floatFromBits;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toBits = kotlin_kotlin.$crossModule$.toBits;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function unpackInt1(value) {
    return value.shr_wjue3g_k$(32).toInt_1tsl84_k$();
  }
  function unpackInt2(value) {
    return value.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function packInts(val1, val2) {
    return toLong(val1).shl_po5ip6_k$(32).or_s401rn_k$(toLong(val2).and_jhajnj_k$(new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_fromBits_0 = FloatCompanionObject_getInstance();
      var tmp1_fromBits_0 = value.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      tmp$ret$0 = floatFromBits(tmp1_fromBits_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function unpackFloat2(value) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_fromBits_0 = FloatCompanionObject_getInstance();
      var tmp1_fromBits_0 = value.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
      tmp$ret$0 = floatFromBits(tmp1_fromBits_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toBits(val1));
    var v2 = toLong(toBits(val2));
    return v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
  }
  function fastForEach(_this__1828080292, action) {
    {
    }
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__1828080292.get_fkrdnv_k$(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastMap(_this__1828080292, transform) {
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
            {
              var tmp0_plusAssign_0_5 = transform(item_3);
              target.add_1j60pz_k$(tmp0_plusAssign_0_5);
              Unit_getInstance();
            }
          }
        }
         while (inductionVariable <= last);
    }
    return target;
  }
  function fastFirstOrNull(_this__1828080292, predicate) {
    {
    }
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
            if (predicate(item_3))
              return item_3;
          }
        }
         while (inductionVariable <= last);
    }
    return null;
  }
  function fastForEachIndexed(_this__1828080292, action) {
    {
    }
    var inductionVariable = 0;
    var last = _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__1828080292.get_fkrdnv_k$(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastAny(_this__1828080292, predicate) {
    {
    }
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
            if (predicate(item_3))
              return true;
          }
        }
         while (inductionVariable <= last);
    }
    return false;
  }
  function fastMaxBy(_this__1828080292, selector) {
    {
    }
    if (_this__1828080292.isEmpty_y1axqb_k$())
      return null;
    var maxElem = _this__1828080292.get_fkrdnv_k$(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = _get_lastIndex__339712501(_this__1828080292);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__1828080292.get_fkrdnv_k$(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastAll(_this__1828080292, predicate) {
    {
    }
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
            if (!predicate(item_3))
              return false;
          }
        }
         while (inductionVariable <= last);
    }
    return true;
  }
  return _;
}));

//# sourceMappingURL=kotlin_androidx_compose_ui_ui_util.js.map