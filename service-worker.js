// 포켓몬 랜덤 디펜스: 폰에서 "앱으로 설치"가 되게 해 주는 서비스 워커예요.
// 게임 파일을 따로 저장해 두지 않아요 (항상 사이트의 최신 파일을 받아요).
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
