webpackJsonp([114],{160:function(s,n){var a,t,l={};s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var n=l[s];p.computed[s]=function(){return n}})},30:function(s,n,a){s.exports=a(160),'<h1>Checklist</h1>\n<blockquote>\n<p>Checkbox list, depends on <a v-link="{path:\'/\' + $route.language + \'/cell\'}">cell</a>.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Checklist } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Checklist.name, Checklist);\n</code></pre>\n<h2>Usage</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"checkbox list"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"[\'optionA\', \'optionB\', \'optionC\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Can be disabled</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">this</span>.options = [\n  {\n    label: <span class="hljs-string">\'disabled option\'</span>,\n    value: <span class="hljs-string">\'valueF\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'checked disabled\'</span>,\n    value: <span class="hljs-string">\'valueE\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'optionA\'</span>,\n    value: <span class="hljs-string">\'valueA\'</span>\n  },\n  {\n    label: <span class="hljs-string">\'optionB\'</span>,\n    value: <span class="hljs-string">\'valueB\'</span>\n  }\n];\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Configure the maximum amount of checked options</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">:max</span>=<span class="hljs-string">"2"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Alignment of the check box</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>array of options(string or object)</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>array of checked options</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the list</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>maximum amount of checked options</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>align</td>\n<td>alignment of the check box</td>\n<td>String</td>\n<td>left, right</td>\n<td>left</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Checklist</h1>\n<blockquote>\n<p>Checkbox list, depends on <a v-link="{path:\'/\' + $route.language + \'/cell\'}">cell</a>.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Checklist } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Checklist.name, Checklist);\n</code></pre>\n<h2>Usage</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"checkbox list"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"[\'optionA\', \'optionB\', \'optionC\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Can be disabled</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">this</span>.options = [\n  {\n    label: <span class="hljs-string">\'disabled option\'</span>,\n    value: <span class="hljs-string">\'valueF\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'checked disabled\'</span>,\n    value: <span class="hljs-string">\'valueE\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'optionA\'</span>,\n    value: <span class="hljs-string">\'valueA\'</span>\n  },\n  {\n    label: <span class="hljs-string">\'optionB\'</span>,\n    value: <span class="hljs-string">\'valueB\'</span>\n  }\n];\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Configure the maximum amount of checked options</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">:max</span>=<span class="hljs-string">"2"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<p>Alignment of the check box</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-checklist</span>\n  <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-checklist</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>array of options(string or object)</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>array of checked options</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the list</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>maximum amount of checked options</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>align</td>\n<td>alignment of the check box</td>\n<td>String</td>\n<td>left, right</td>\n<td>left</td>\n</tr>\n</tbody>\n</table></div>')}});