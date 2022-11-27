!function(){const e=document.querySelector(".root");e.innerHTML='\n  <h1 class="title">G I S T S - M A K E R</h1>\n\n  <div class="token-container">\n    <form class="token-form">\n      <input class="input token-input" name="token" type="password" placeholder="New token" />\n      <button class="token-save button">SAVE</button>\n    </form>\n    <button class="token-delete button">DELETE</button>\n    <a href="http://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank">\n      <button class="token-getnew button">GET NEW</button>\n    </a>\n  </div>\n\n  <form class="form">\n      <input class="input description" name="description" placeholder="Description">\n      <input class="input filename" name="filename" placeholder="Filename including extension">\n      <textarea class="input code" name="code" placeholder="Your code"></textarea>\n\n      <button class="button create">CREATE SECRET GIST</button>\n  </form>\n  ',e.querySelector(".token-form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target,n=new FormData(t),o=Object.fromEntries(n.entries()).token;localStorage.setItem("token",o.toString())})),e.querySelector(".token-delete").addEventListener("click",(()=>{localStorage.removeItem("token")})),e.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target,n=new FormData(t),o=Object.fromEntries(n.entries()),a=localStorage.getItem("token"),r=o.description,s=o.filename,c=o.code;fetch("https://api.github.com/gists",{method:"post",headers:{Authorization:"token "+a,"Content-Type":"application/x-www-form-urlencoded"},body:`{\n      "description": "${r}",  \n      "files":{\n        "${s}":{\n            "content":"${c}"\n        }\n    }\n}\n`}).then((e=>e.json())).then((e=>console.log(e)))}))}();
//# sourceMappingURL=index.7e5dfb0e.js.map
