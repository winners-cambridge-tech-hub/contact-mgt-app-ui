//import ApexCharts from 'apexcharts'
//import $ from 'jquery'

export default {
    methods: {
        loadScript(url) {
            const body = document.body;
            const script = document.createElement("script");
            script.innerHTML = "";
            script.src = url;
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        },
        loadScriptData(newData) {
            const body = document.body;
            const script = document.createElement("script");
            script.innerHTML = newData;
            body.appendChild(script);
        },
        footerScript() {
            this.loadScript(`${this.cdn}/lib/jquery/jquery.min.js`)
            this.loadScript(`${this.cdn}/lib/bootstrap/js/bootstrap.bundle.min.js`)
            this.loadScript(`${this.cdn}/lib/feather-icons/feather.min.js`)
            this.loadScript(`${this.cdn}/lib/ionicons/ionicons/ionicons.esm.js" type="module`)
            this.loadScript(`${this.cdn}/lib/perfect-scrollbar/perfect-scrollbar.min.js`)
            this.loadScript(`${this.cdn}/assets/js/dashforge.js`)
            this.loadScript(`${this.cdn}/lib/js-cookie/js.cookie.js`);
            this.loadScript(`${this.cdn}/assets/js/off-canvas.js`);
        },
        contactScript() {
            this.loadScript(`${this.cdn}/assets/js/dashforge.contacts.js`);
        },
        mixinFileTableScript() {
            this.loadScript(`${this.cdn}/assets/js/dashforge.filemgr.js`);
        }
    },
    mount() {

    },
};


