
// live preview color function

var color;
function changecolor() {
    color = document.getElementById("playercolor").value;
    document.getElementById("xtrackname").style.color = "#" + color;
    document.getElementById("pbar1").style.background = "#" + color;
    document.getElementById("pbar2").style.background = "#" + color;
    document.getElementById("xplay").style.borderLeft = "7px solid " + "#" + color;
    document.getElementById("sk1").style.borderLeft = "5px solid " + "#" + color;
    document.getElementById("sk2").style.borderLeft = "5px solid " + "#" + color;
}

// turn autoplay on or off function

var autos = "off";
function auto() {
    if ( autos == "off" ) {
        autos = "on";
        document.getElementById("abutton").style.background = "#2FEDA3";
        document.getElementById("abutton").value = "autoplay is on";
    }
    else if ( autos == "on" ) {
        autos = "off";
        document.getElementById("abutton").style.background = "#FF0054";
        document.getElementById("abutton").value = "autoplay is off";
    }
    else {}
}

// generate user code function

function generate() {

    // hide customisation interface and show codebox

    document.getElementById("index-color-select").style.display = "none";
    document.getElementById("codebox").style.display = "block";
    document.getElementById("desc").style.textAlign = "center";
    document.getElementById("desc").innerHTML = "Copy & paste the code below into your blog or website's HTML:"

    // declare variables for multi-info and multi-names spans

    var oneinfo = "#" + color + " " + autos + " ";
    var twoinfo = "0,0,";

    // add spaces after valid urls and commas after valid titles in form

    var aa, bb, cc, dd, i;

    for (i=1; i < 10; i++) {
        aa = "trackurl" + i;
        cc = "trackname" + i;
        bb = document.getElementById(aa);
        dd = document.getElementById(cc);
        if ( bb.value != "" ) {
            bb.value += " ";
            oneinfo += bb.value;
        }
        if ( dd.value != "" ) {
            dd.value += ",";
            twoinfo += dd.value;
        }
    }

    (function() {

        // delete the last index in info strings so they don't end in space or comma

        var oneinfolength = oneinfo.length - 1;
        var oneinfonew = oneinfo.slice(0,oneinfolength);
        var twoinfolength = twoinfo.length - 1;
        var twoinfonew = twoinfo.slice(0,twoinfolength);

        // generate user code in text area

        document.getElementById("codebox").innerHTML = "<!-- code forked at https://cinness.github.io/multitune-medium.js&quot;&gt;&lt;&sol;script&gt;&lt;div id&equals;&quot;mtplayer&quot;&gt;&lt;span id&equals;&quot;multi-info&quot; style&equals;&quot;display:none;&quot;&gt;" + oneinfonew + "&lt;&sol;span&gt;&lt;span id&equals;&quot;multi-names&quot; style&equals;&quot;display:none;&quot;&gt;" + twoinfonew + "&lt;&sol;span&gt;&lt;&sol;div&gt;";

    })();
}