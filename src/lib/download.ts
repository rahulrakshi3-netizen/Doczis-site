const APK_URL = "/Doczis.apk";

export function downloadApk() {
  const a = document.createElement("a");
  a.href = APK_URL;
  a.download = "Doczis.apk";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
