$(function() {
    // ［検索］ボタンクリックで検索開始
    $('#submit').click(function() {
      // .phpファイルへのアクセス
      var settings = {
        "url": "https://indigo-whippet-9588.twil.io/kintone-push",
        "method": "GET"
      }
      $.ajax(settings)
      // 検索成功時にはページに結果を反映
      .done(function(data) {
        // 結果リストをクリア
        $('#result').empty();
        // <Question>要素（個々の質問情報）を順番に処理
        $('Question', data).each(function() {
          // <Url>（詳細ページ）、<Content>（質問本文）を基にリンクリストを生成
          $('#result').append(
            $('<li></li>').append(
              $('<a></a>')
                .attr({
                  href: $('Url', this).text(),
                  target: '_blank'
                })
                .text($('Content', this).text().substring(0, 255) + '...')
            )
          );
        });
      })
      // 検索失敗時には、その旨をダイアログ表示
      .fail(function(data, rea, time ) {
        window.alert('正しい結果を得られませんでした。');
      });
    });
  });