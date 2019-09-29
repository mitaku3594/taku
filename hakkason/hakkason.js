$(function() {
    // ［検索］ボタンクリックで検索開始
    $('#submit').click(function() {
      // .phpファイルへのアクセス
      $.ajax(
        {
          url: 'https://devltqzil.cybozu.com/k/4/?fbclid=IwAR1FAYIz1o_FWqZSWpoW8amwoiyy0eJ_c8YVqWaeOQ7bCCaIclHV1fTgdOI',
          type: 'get',
          data: {'key':'rea','value':'time'},
          dataType: 'xml',
          headers:{
          'key':'X-Cybozu-API-Token',
          'value':'vGT9DZVrZf0hY8sGcNIJers9u3ybQImloxRG0iiX","description":"","type":"text","enabled":true'
          }
        }
      )
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
      .fail(function() {
        window.alert('正しい結果を得られませんでした。');
      });
    });
  });