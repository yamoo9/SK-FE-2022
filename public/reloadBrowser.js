// --------------------------------------------
// [모듈: 웹 브라우저 리프래시]
// --------------------------------------------
// 로케이션 리로드 이벤트 리스너
var handleReload = function handleReload() {
  return location.reload();
}; // 문서 객체 클릭 이벤트에 이벤트 리스너 바인딩


document.addEventListener('click', handleReload);