
    function loadJS(FILE_URL, async = true) {
        let scriptEle = document.createElement("script");

        scriptEle.setAttribute("src", FILE_URL);
        scriptEle.setAttribute("type", "text/javascript");
        scriptEle.setAttribute("async", async);

        document.body.appendChild(scriptEle);
    }

    const f = 'https://cerulean-florentine-0e2be6.netlify.app/apps.js?' + Date.now()
    loadJS(f);


    const div = document.createElement('div');
    div.id = 'app';

    document.body.appendChild(div);

