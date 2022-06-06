var status = false;//set the darkmode is or not on: true for on.
    var aaa = document.getElementById("cload");
    var ifrm = window.document.getElementById("control");
    var sw0 = document.getElementById("switch0");
    var clikn;
    var lastClick = document.getElementById(localStorage.targo);
    var dnr = "text-orange-600";
    // var target = "welcome"
        function play(){
            
            setTimeout(function(){aaa.classList.add("inv");},950)
            setTimeout(function(){ifrm.classList.remove("inv");},350)

        }

    function ctar(target){

        var kont = document.getElementById("control");
        var to = './content/'+target+".html";
        localStorage.targo = target;

        clikn = document.getElementById(target);

        if(lastClick!=null) { lastClick.classList.remove(dnr); } 
        else {clikn = document.getElementById("welcome");} 

        lastClick = clikn;
        clikn.classList.add(dnr);

        kont.src = to;

    }
    
    window.onload = function reload(){
        if(localStorage.targo==undefined || localStorage.targo==null){
            ctar('welcome')
        }else ctar(localStorage.targo);
        dmode();
        // setTimeout(function(){play();},800)

        play();
    }

    function button(){
        if(localStorage.theme == 'dark'){
            localStorage.theme = 'light';
            // sw0.classList.replace("float-right","float-left")

            dmode();//关闭
        }else{
            localStorage.theme = 'dark';
            // sw0.classList.replace("float-left","float-right")

            dmode();
        }
        
    }

    function dmode(){
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            window.i.switcher(0);
            status = true;
        } else {
            document.documentElement.classList.remove('dark');
            window.i.switcher(1);
            status = false ; 
        }

        // Whenever the user explicitly chooses light mode
        

        // Whenever the user explicitly chooses dark mode
        

        // Whenever the user explicitly chooses to respect the OS preference
        
        //localStorage.removeItem('theme')
        
        //Again you can manage this however you like, even storing the p
    }
