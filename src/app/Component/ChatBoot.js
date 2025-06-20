"use client";
import { useEffect } from "react";
const TawkTo = () => {
  useEffect(() => {
    const loadTawkScript = () => {
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/66e6daff50c10f7a00aa54b0/1i7qsetol";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    };
    if (window.attachEvent) {
      window.attachEvent("onload", loadTawkScript);
    } else {
      window.addEventListener("load", loadTawkScript);
    }
  }, []);
  return null;
};
export default TawkTo;
