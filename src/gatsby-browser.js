exports.onClientEntry = (options, pluginOptions) => {
  const { 
    appId = '', 
    enableOnDevMode = false
  } = pluginOptions;
  const isEnabled = (process.env.NODE_ENV === 'production' || enableOnDevMode) && appId;

  if (!isEnabled) return;
  
  // Load the library and attach to `window.heap`.
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};

  // Initialize the library with your `appId`.
  heap.load(appId);
};
