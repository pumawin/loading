$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $loading = $('.loading');

  // 로딩이 완료되면 (load)
  $window.on('load', function () {
    // 너무빨리 사라지므로 조금 있다가 사라지게끔
    // setTimeout(동작, 시간)
    setTimeout(function () {
      $loading.fadeOut();
    }, 1000);
  });
});
