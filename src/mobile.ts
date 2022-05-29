export {};
declare var WURFL: any;
if (WURFL.is_mobile === true && WURFL.form_factor === "Smartphone") {
  document.documentElement.style.cssText = `--size: 0.9`;
}
