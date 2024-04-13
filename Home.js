//Class to create/show the home pag
class Home extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
        var dir = app.GetInternalFolder();
        app.Alert( dir );
        
    }

    show()
    {
        //If layout not created yet.
        if( !this.lay )
        {
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear",  "fillxy,vcenter" )
            this.lay.setChildMargins( .02, .02, .02, .01 )

            //Add icon
            this.txtIcon = ui.addText( this.lay, "home", "Primary,Icon")
            this.txtIcon.textSize = "3em"

            //Add some text.
            var s = "<div style=\"padding:20px; background:blue;\">s</div>This is your <strong style=\"color:yellow\">home page</strong>."
            this.txtHome = ui.addText( this.lay, s, "Multiline,Html" )
            this.txtHome.textSize = "1.2em"
        }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}