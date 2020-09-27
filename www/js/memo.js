///// Return list of memo
/*ストレージにあるメモリストを取得。
リストが新規だったら新しい配列を取得。
そうでなければ（既存リストであれば）、リストを返す。*/
function getMemoList() {
    var list = localStorage.getItem("memo_list");
    if (list == null) {
        return new Array();
    } else {
        return JSON.parse(list);
    }
}

///// Save memo
/*ローカルストレージにメモリストを保存。
失敗したらアラートを出す。*/
function saveMemoList(list) {
    try {
        localStorage.setItem("memo_list", JSON.stringify(list));
    } catch (e) {
        alert('Error saving to storage.');
        throw e;
    }
}

///// Add memo
/*新しいリストを取得。
文字列と時間をリストに書き込み、saveMemoListを呼び出す。*/
function addMemo(text) {
  var list = getMemoList();
  var time = new Date().getTime();
  list.push({ id: time, page:1,time: time, text: text });
  saveMemoList(list);
}

/////Plus Page
/*リストを獲得。
ページを追加するメモのIDを参照。
二次元配列としてページを追加する。
セーブ。*/
function plusPage(id,text){
  var list = getMemoList();
  for(var i in list){
    if(list[i].id == id){
      break;
    }
  }
  
  var j=0;

  while(list[i][j] != null){
    j++;
  }
  list[i][j].push({id:time,page:page,text:text});
  saveMemoList(list);
}

///// Delete specified memo
/*IDのリストを探す。
合致すれば、取り除いて終了。
その状態のリストを保存。*/
function deleteMemo(id) {
    var list = getMemoList();
    for (var i in list) {
        if (list[i].id == id) {
            list.splice(i, 1);
            break;  // Quit for loop when found
        }
    }
    saveMemoList(list);
}