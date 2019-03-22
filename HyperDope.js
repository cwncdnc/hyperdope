
//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape.
    app.SetOrientation( "Portrait" );
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	    //Create and run a local web server.
    //(This is so the game's ajax calls work)
	serv = app.CreateWebServer( 8080 );
	serv.SetFolder( app.GetAppPath() );
	serv.Start();
	
	//Create a web control.
	web = app.CreateWebView( 1, 1, "IgnoreErrors" );
	web.SetBackColor( "#000000" );
	lay.AddChild( web );
	//Add layouts to app.	
	app.AddLayout( lay );
	
	//Load the game using our local web server.
	web.LoadUrl( "index.html" );	

        svc = app.CreateService( "this","this", OnServiceReady );
        svc.SetOnMessage( OnServiceMessage );

};

   
    function OnServiceReady()
    {
       
    }

    //Called when messages comes from our service.
    function OnServiceMessage( msg )
    {
    }