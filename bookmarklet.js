//
// Works in Google Chrome and IE. NOTE: "a.hostname" needed for IE instead of "a.host"
//

// Open new window
javascript:a=document.createElement('a');a.href=location.href;void(open("http://0-"+a.hostname+".aupac.lib.athabascau.ca/"+a.pathname+a.search,"AU",%20'toolbar=yes,width=700,height=600'));

// Redirect current page
javascript:a=document.createElement('a');a.href=location.href;u="http://0-"+a.hostname+".aupac.lib.athabascau.ca/"+a.pathname+a.search;window.location.href=u;
