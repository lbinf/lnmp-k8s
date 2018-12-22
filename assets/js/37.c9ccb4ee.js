(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"kubelet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubelet","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubelet")]),e._v(" "),s("h2",{attrs:{id:"自动-approved-证书失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动-approved-证书失败","aria-hidden":"true"}},[e._v("#")]),e._v(" 自动 Approved 证书失败")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/326")])]),e._v(" "),s("li",[s("p",[e._v("状态： 正在排查")])])]),e._v(" "),s("h3",{attrs:{id:"错误详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误详情","aria-hidden":"true"}},[e._v("#")]),e._v(" 错误详情")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bootstrap.go:65"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Using bootstrap kubeconfig to generate TLS client cert, key and kubeconfig "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\n\nbootstrap.go:96"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" No valid private key and/or certificate found, reusing existing private key or creating a new one\n")])])]),s("h3",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决办法")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl get csr\n\nNAME                                                   AGE     REQUESTOR                 CONDITION\ncsr-4gzpq                                              4m20s   system:node:node1         Pending\ncsr-62qp7                                              50m     system:node:node1         Pending\ncsr-6ml4w                                              12m     system:node:node1         Pending\ncsr-8nvc2                                              63m     system:node:node1         Pending\ncsr-f6gbd                                              38m     system:node:node1         Pending\ncsr-sjthd                                              25m     system:node:node1         Pending\ncsr-sxjxf                                              2m41s   system:node:node1         Pending\nnode-csr-j1Ja8wpP3FxFBMnEVNsrwYosgWk_-796bWmRg9cnFTE   63m     system:bootstrap:fp7k2i   Approved,Issued\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# approve 倒数第二个，例如")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $ kubectl certificate approve csr-sxjxf")]),e._v("\n$ kubectl certificate approve CSR_NAME\n\n$ kubectl describe csr CSR_NAME\n")])])])])}],!1,null,null,null);a.options.__file="kubelet.md";t.default=a.exports}}]);