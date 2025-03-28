if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::HJW");
        this.set_filesecurelevel("all");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
        nexacro._addService("Guide", "form", "./Guide/", "session", null, "", "0", "0");
        nexacro._addService("Lib", "form", "./nexacro17lib/component/Lib/", "session", null, "", "0", "0");
        nexacro._addService("Comm", "form", "./Comm/", "session", null, "", "0", "0");
        nexacro._addService("MM", "form", "./MM/", "session", null, "", "0", "0");
        nexacro._addService("SO", "form", "./SO/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "http://localhost.:8080/web/FrontControllerServlet.do?service=xupservice&format=xml&version=xplatform&domain=xup&model=", "none", null, "", "0", "0");
        nexacro._addService("dsLayout", "bs", "localhost:/8080/", "none", null, "", "0", "0");
        nexacro._addService("svc_prod", "JSP", "localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("svc_file", "JSP", "localhost:8080/", "session", null, "", "0", "0");
        nexacro._addService("crypto", "form", "./nexacro17lib/component/CryptoJS/", "session", null, "", "0", "0");
        nexacro._addService("svc_api", "none", "./API/ExtCommonAPI/Output/", "session", null, "", "0", "0");
        nexacro._addService("JSP", "file", "localhost:/8080/HJW/jsp/", "none", null, "", "0", "0");
		nexacro._addService("VM", "form", "./VM/", "session", null, "", "0", "0");
        nexacro._addService("FM", "form", "./FM/", "session", null, "", "0", "0");
        nexacro._addService("RD", "form", "./RD/", "session", null, "", "0", "0");
        nexacro._addService("ES", "form", "./ES/", "session", null, "", "0", "0");
        nexacro._addService("CM", "form", "./CM/", "session", null, "", "0", "0");
        nexacro._addService("SA", "form", "./SA/", "session", null, "", "0", "0");
        nexacro._addService("TM", "form", "./TM/", "session", null, "", "0", "0");
        nexacro._addService("PR", "form", "./PR/", "session", null, "", "0", "0");
        nexacro._addService("DJ", "form", "./DJ/", "session", null, "", "0", "0");
        nexacro._addService("CA", "form", "./CA/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("GV_ISLOCAL", "Y");
        nexacro.setEnvironmentVariable("GV_SERVER_URL", "http://localhost:8080/");

        // Cookies


        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};

    // User Script

					
    env = null;
}

