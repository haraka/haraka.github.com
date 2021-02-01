__NUXT_JSONP__("/plugins/bounce", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{document:{slug:s,title:s,position:41,category:"Plugins",toc:[{id:t,depth:u,text:v},{id:w,depth:u,text:x},{id:m,depth:k,text:m},{id:n,depth:k,text:n},{id:o,depth:k,text:o},{id:p,depth:k,text:p},{id:q,depth:k,text:q}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Provide options for bounce processing."}]},{type:a,value:c},{type:b,tag:y,props:{id:t},children:[{type:b,tag:e,props:{href:"#configuration",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Each feature can be enabled\u002Fdisabled with a true\u002Ffalse toggle in the [check]\nsection of "},{type:b,tag:r,props:{},children:[{type:a,value:"config\u002Fbounce.ini"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some features can have rejections disabled in the [reject] section."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"[check]\nreject_all=false\nsingle_recipient=true\nempty_return_path=true\nbad_rcpt=true\nbounce_spf=true\nnon_local_msgid=true\n\n[reject]\nsingle_recipient=true\nempty_return_path=true\nbounce_spf=false\nnon_local_msgid=false\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:w},children:[{type:b,tag:e,props:{href:"#features",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:l,props:{id:m},children:[{type:b,tag:e,props:{href:"#reject_all",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When enabled, blocks all bounce messages using the simple rule of checking\nfor "},{type:b,tag:r,props:{},children:[{type:a,value:"MAIL FROM:\u003C\u003E"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It is generally a bad idea to block all bounces. This option can be useful\nfor mail servers at domains with frequent spoofing and few or no human users."}]},{type:a,value:c},{type:b,tag:l,props:{id:n},children:[{type:b,tag:e,props:{href:"#single_recipient",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Valid bounces have a single recipient. Assure that the message really is a\nbounce by enforcing bounces to be addressed to a single recipient."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This check is skipped for relays or hosts with a private IP, this is because\nMicrosoft Exchange distribution lists will send messages to list members with\na null return-path when the 'Do not send delivery reports' option is enabled\n(yes, really...)."}]},{type:a,value:c},{type:b,tag:l,props:{id:o},children:[{type:b,tag:e,props:{href:"#empty_return_path",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Valid bounces should have an empty return path. Test for the presence of the\nReturn-Path header in bounces and disallow."}]},{type:a,value:c},{type:b,tag:l,props:{id:p},children:[{type:b,tag:e,props:{href:"#bad_rcpt",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Disallow bounces to email addresses listed in "},{type:b,tag:r,props:{},children:[{type:a,value:"config\u002Fbounce_bad_rcpt"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Include email addresses in that file that should "},{type:b,tag:"em",props:{},children:[{type:a,value:"never"}]},{type:a,value:" receive bounce\nmessages. Examples of email addresses that should be listed are:\nautoresponders, "},{type:b,tag:e,props:{href:"mailto:do-not-reply@example.com"},children:[{type:a,value:"do-not-reply@example.com"}]},{type:a,value:", "},{type:b,tag:e,props:{href:"mailto:dmarc-feedback@example.com"},children:[{type:a,value:"dmarc-feedback@example.com"}]},{type:a,value:", and\nany other email addresses used solely for machine generated messages."}]},{type:a,value:c},{type:b,tag:l,props:{id:q},children:[{type:b,tag:e,props:{href:"#bounce_spf",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Parses the message body and any MIME parts for Received: headers and\nstrips out the IP addresses of each Received hop and then checks what\nthe SPF result would have been if bounced message had been sent by that\nhop."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If no 'Pass' result is found, then this test will fail.\nIf SPF returns 'None', 'TempError' or 'PermError' then the test will\nbe skipped."}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fbounce",extension:".md",createdAt:A,updatedAt:A,to:"\u002Fplugins\u002Fbounce"},prev:{slug:"connect.fcrdns",title:"connect.fcrdns - Forward Confirmed Reverse DNS",to:"\u002Fplugins\u002Fconnect.fcrdns"},next:{slug:"connect.asn",title:"connect.asn - get AS number of remote",to:"\u002Fplugins\u002Fconnect.asn"}}],fetch:[],mutations:[]}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",3,"h3","reject_all","single_recipient","empty_return_path","bad_rcpt","bounce_spf","code","bounce","configuration",2,"Configuration","features","Features","h2",".","2021-02-01T00:51:19.922Z")));