import React from "react";
import { Linking, Platform, ScrollView, View } from "react-native";
import WebView from "react-native-webview";

type Props = {};

export default function EnsWebview({}: Props) {
  return (
    <View style={{ width: "100%", height: "90%" }}>
      <WebView
        bounces={false}
        javaScriptEnabled
        source={{ uri: "https://app.ens.domains/" }}
        style={{ resizeMode: "cover", width: "100%", height: "90%" }}
        onShouldStartLoadWithRequest={(event) => {
          const isHttp = event.url.startsWith("http");
          if (!isHttp) {
            Linking.openURL(event.url);
            return false;
          } else {
            return true;
          }
        }}
        injectedJavaScript={
          `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);` +
          `!function(){var e=function(e,n,t){if(n=n.replace(/^on/g,""),"addEventListener"in window)e.addEventListener(n,t,!1);else if("attachEvent"in window)e.attachEvent("on"+n,t);else{var o=e["on"+n];e["on"+n]=o?function(e){o(e),t(e)}:t}return e},n=document.querySelectorAll("a[href]");if(n)for(var t in n)n.hasOwnProperty(t)&&e(n[t],"onclick",function(e){new RegExp("^https?://"+location.host,"gi").test(this.href)||(e.preventDefault(),window.postMessage(JSON.stringify({external_url_open:this.href})))})}();`
        }
        scalesPageToFit={false}
      />
    </View>
  );
}
