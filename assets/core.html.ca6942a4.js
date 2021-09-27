import{r as e,o as s,c as a,a as t,F as n,b as o,d as l}from"./app.c1e4c4ba.js";const r={},i=o('<h1 id="asdf" tabindex="-1"><a class="header-anchor" href="#asdf" aria-hidden="true">#</a> asdf</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p><code>asdf</code> core contribution guide.</p><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial Setup</h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>\n<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>\n<span class="line"></span></code></pre></div><p>The tools for core development are in this repo&#39;s <code>.tool-versions</code>. If you wish to manage with <code>asdf</code> itself, add the plugins:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add bats https://github.com/timgluz/asdf-bats.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shellcheck https://github.com/luizm/asdf-shellcheck.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shfmt https://github.com/luizm/asdf-shfmt.git</span></span>\n<span class="line"></span></code></pre></div><p>Install the versions to develop <code>asdf</code> with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>\n<span class="line"></span></code></pre></div><p>It <em>may</em> be useful to not use <code>asdf</code> to manage the tools during development on your local machine as you may need to break functionality which would then break your dev tooling. Here&#39;s the raw list of tools:</p>',11),c={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},p=l("bats-core"),d=l(": Bash Automated Testing System, for unit testing Bash or POSIX compliant scripts."),h={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},u=l("shellcheck"),m=l(": Static analysis tool for shell scripts."),f={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},g=l("shfmt"),b=l(": A shell parser, formatter, and interpreter with bash support; includes shfmt"),y=o('<h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2><p>If you want to try out your changes without making change to your installed <code>asdf</code>, you can set the <code>$ASDF_DIR</code> variable to the path where you cloned the repository, and temporarily prepend the <code>bin</code> and <code>shims</code> directory of the directory to your path.</p><p>It is best to format, lint and test your code locally before you commit or push to the remote. Use the following scripts/commands:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># Shellcheck</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shellcheck.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># Format</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shfmt.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># Test: all tests</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/</span></span>\n<span class="line"><span style="color:#88846F;"># Test: for specific command</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/list_commands.bash</span></span>\n<span class="line"></span></code></pre></div>',4),F={class:"custom-container tip"},k=t("p",{class:"custom-container-title"},"TIP",-1),v=t("strong",null,"Add tests!",-1),w=l(" - Tests are "),x=t("strong",null,"required",-1),q=l(" for new features and speed up review of bug fixes. Please cover new code paths before you create a Pull Request. See "),T={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},_=l("bats-core documentation"),I=t("h2",{id:"bats-testing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bats-testing","aria-hidden":"true"},"#"),l(" Bats Testing")],-1),P=l("It is "),S=t("strong",null,"strongly encouraged",-1),D=l(" to examine the existing test suite and the "),C={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},B=l("bats-core documentation"),E=l(" before writing tests."),R=o('<p>Bats debugging can be difficult at times. Using the TAP output with <code>-t</code> flag will enable you to print outputs with the special file descriptor <code>&gt;&amp;3</code> during test execution, simplifying debugging. As an example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># test/some_tests.bats</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&amp;3</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),A=l("This is further documented in bats-core "),G={href:"https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal",target:"_blank",rel:"noopener noreferrer"},H=l("Printing to the Terminal"),U=l("."),z=t("h2",{id:"pull-requests-releases-conventional-commits",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pull-requests-releases-conventional-commits","aria-hidden":"true"},"#"),l(" Pull Requests, Releases & Conventional Commits")],-1),V=t("code",null,"asdf",-1),j=l(" is using an automated release tool called "),O={href:"https://github.com/googleapis/release-please",target:"_blank",rel:"noopener noreferrer"},L=l("Release Please"),W=l(" to automatically bump the "),N={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},X=l("SemVer"),Y=l(" version and generate the "),$={href:"https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},J=l("Changelog"),K=l(". This information is determined by reading the commit history since the last release."),M={href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"},Q=l("Conventional Commit messages"),Z=l(" define the format of the Pull Request Title which becomes the commit message format on the default branch. This is enforced with GitHub Action "),ee={href:"https://github.com/amannn/action-semantic-pull-request",target:"_blank",rel:"noopener noreferrer"},se=t("code",null,"amannn/action-semantic-pull-request",-1),ae=l("."),te=o('<p>Conventional Commit follows this format:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;\n\n&lt;!-- examples --&gt;\nfix: some fix\nfeat: a new feature\ndocs: some documentation update\ndocs(website): some change for the website\nfeat!: feature with breaking change\n</span></span></code></pre></div><p>The full list of <code>&lt;types&gt;</code> are: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>perf</code>, <code>test</code>, <code>build</code>, <code>ci</code>, <code>chore</code>, <code>revert</code>.</p><p>The <code>!</code> indicates a breaking change.</p><p><code>fix</code>: will create a new SemVer <code>patch</code><code>feat</code>: will create a new SemVer <code>minor</code><code>&lt;type&gt;!</code>: will create a new SemVer <code>major</code></p><p>The Pull Request Title must follow this format.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Use Conventional Commit message format for your Pull Request Title.</p></div><h2 id="docker-images" tabindex="-1"><a class="header-anchor" href="#docker-images" aria-hidden="true">#</a> Docker Images</h2>',8),ne=l("The "),oe={href:"https://github.com/vic/asdf-alpine",target:"_blank",rel:"noopener noreferrer"},le=l("asdf-alpine"),re=l(" and "),ie={href:"https://github.com/vic/asdf-ubuntu",target:"_blank",rel:"noopener noreferrer"},ce=l("asdf-ubuntu"),pe=l(" projects are an ongoing effort to provide Dockerized images of some asdf tools. You can use these docker images as base for your development servers, or for running your production apps.");r.render=function(o,l){const r=e("OutboundLink");return s(),a(n,null,[i,t("ul",null,[t("li",null,[t("a",c,[p,t(r)]),d]),t("li",null,[t("a",h,[u,t(r)]),m]),t("li",null,[t("a",f,[g,t(r)]),b])]),y,t("div",F,[k,t("p",null,[v,w,x,q,t("a",T,[_,t(r)])])]),I,t("p",null,[P,S,D,t("a",C,[B,t(r)]),E]),R,t("p",null,[A,t("a",G,[H,t(r)]),U]),z,t("p",null,[V,j,t("a",O,[L,t(r)]),W,t("a",N,[X,t(r)]),Y,t("a",$,[J,t(r)]),K]),t("p",null,[t("a",M,[Q,t(r)]),Z,t("a",ee,[se,t(r)]),ae]),te,t("p",null,[ne,t("a",oe,[le,t(r)]),re,t("a",ie,[ce,t(r)]),pe])],64)};export default r;
