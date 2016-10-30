webpackJsonp([124],{133:function(t,d,e){t.exports=e(281)},154:function(t,d){t.exports="<section><h1>Message box</h1> <blockquote> <p>弹出式提示框，有多种交互形式。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { MessageBox } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n</code></pre> <h2>例子</h2> <p>以标题与内容字符串为参数进行调用</p> <pre><code class=language-javascript>MessageBox(<span class=hljs-string>'提示'</span>, <span class=hljs-string>'操作成功'</span>);\n</code></pre> <p>或者传入一个对象</p> <pre><code class=language-javascript>MessageBox({\n  title: <span class=hljs-string>'提示'</span>,\n  message: <span class=hljs-string>'确定执行此操作?'</span>,\n  showCancelButton: <span class=hljs-literal>true</span>\n});\n</code></pre> <p>此外，<code>MessageBox</code> 还提供了 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code> 三个方法，它们都返回一个 Promise</p> <pre><code class=language-javascript>MessageBox.alert(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.alert(<span class=hljs-string>'操作成功'</span>).then(action =&gt; {\n  ...\n});\n</code></pre> <pre><code class=language-javascript>MessageBox.confirm(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.confirm(<span class=hljs-string>'确定执行此操作?'</span>).then(action =&gt; {\n  ...\n});\n</code></pre> <pre><code class=language-javascript>MessageBox.prompt(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.prompt(<span class=hljs-string>'请输入姓名'</span>).then(({ value, action }) =&gt; {\n  ...\n});\n</code></pre> <p>在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected</p> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>title</td> <td>提示框的标题</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>message</td> <td>提示框的内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>showConfirmButton</td> <td>是否显示确认按钮</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>showCancelButton</td> <td>是否显示取消按钮</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>confirmButtonText</td> <td>确认按钮的文本</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>confirmButtonHighlight</td> <td>是否将确认按钮的文本加粗显示</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>confirmButtonClass</td> <td>确认按钮的类名</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>cancelButtonText</td> <td>取消按钮的文本</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>cancelButtonHighlight</td> <td>是否将取消按钮的文本加粗显示</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>cancelButtonClass</td> <td>取消按钮的类名</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>showInput</td> <td>是否显示一个输入框</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>inputType</td> <td>输入框的类型</td> <td>String</td> <td></td> <td>'text'</td> </tr> <tr> <td>inputValue</td> <td>输入框的值</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>inputPlaceholder</td> <td>输入框的占位符</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div></section>"},281:function(t,d,e){var s,a,n={};a=e(154),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(o.template=a),o.computed||(o.computed={}),Object.keys(n).forEach(function(t){var d=n[t];o.computed[t]=function(){return d}})}});