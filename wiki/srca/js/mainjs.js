
    var aaa = document.getElementById("cload");
    var ifrm = window.document.getElementById("control");
    var clikn;
    var lastClick = document.getElementById(localStorage.targo);
    var dnr = "text-orange-600";
    var ddr = "dark:text-orange-600";
    var ars = "dark:text-gray-100";
    var sun = document.getElementById('tenho');
    var lun = document.getElementById('leuna');
    // var target = "welcome"
        function play(){
            
            setTimeout(function(){aaa.classList.add("inv");},550)
            setTimeout(function(){ifrm.classList.remove("inv");},650)

        }

        function brplay(){
            setTimeout(function(){ifrm.classList.add("inv");},0)
            setTimeout(function(){aaa.classList.remove("inv");},150)
        }

    function ctar(target){

        var kont = document.getElementById("control");
        var to = './content/'+target+".html";
        localStorage.targo = target;

        
        clikn = document.getElementById(target);

        if(lastClick!=null) { lastClick.classList.remove(dnr);lastClick.classList.remove(ddr);lastClick.classList.add(ars); } else {clikn = document.getElementById("welcome");} 
        lastClick = clikn;
        clikn.classList.add(dnr);clikn.classList.add(ddr);clikn.classList.remove(ars);

        kont.src = to;
        brplay();
        setTimeout(function(){florem();},150)
        play();
        

    }
    
    window.onload = function reload(){
        console.log('Welcome!');
        if(localStorage.targo==undefined || localStorage.targo==null){
            ctar('welcome')
        }else ctar(localStorage.targo);

        lorem();

        play();
    }

    function lorem(){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            if(localStorage.theme == 'dark'){
                lagdark();
            }else if(localStorage.theme == 'light'){
                laglight();
            }else{
                lagdark();
            }

        }else{
            if(localStorage.theme == 'dark'){
                lagdark();
            }else if(localStorage.theme == 'light'){
                laglight();
            }else{
                laglight();
            }
            
        }

    }

    function florem(){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            if(localStorage.theme == 'dark'){
                gdark();
            }else if(localStorage.theme == 'light'){
                glight();
            }else{
                gdark();
            }

        }else{
            if(localStorage.theme == 'dark'){
                gdark();
            }else if(localStorage.theme == 'light'){
                glight();
            }else{
                glight();
            }
            
        }

    }

    function overhook(){
        localStorage.removeItem('theme');
        location.reload();
    }

    function lagdark(){
        document.documentElement.classList.add('dark');
        //localStorage.theme = 'light';
        stm();
        setTimeout(function(){window.i.switcher(0);},640)

    }

    function laglight(){
        document.documentElement.classList.remove('dark');
        //localStorage.theme = 'dark';
        mts();
        setTimeout(function(){window.i.switcher(1);},640)

    }

// aa

    function gdark(){
        document.documentElement.classList.add('dark');
        //localStorage.theme = 'light';
        stm();
        window.i.switcher(0);

    }

    function glight(){
        document.documentElement.classList.remove('dark');
        //localStorage.theme = 'dark';
        mts();
        window.i.switcher(1);

    }



    function button(){
        if(localStorage.theme == 'dark'){
            localStorage.theme = 'light';
            locher();//关闭
        }else{
            localStorage.theme = 'dark';
            locher();
        }
        
    }

    function locher(){
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.documentElement.classList.add('dark');
            window.i.switcher(0);
            stm();

        }else {
            document.documentElement.classList.remove('dark');
            window.i.switcher(1);
            mts();

        }

    }

    function stm(){
        sun.classList.add('inv');
        lun.classList.remove('inv');
    }

    function mts(){
        lun.classList.add('inv');
        sun.classList.remove('inv');
    }
    // function dmode(){
    //     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark');
    //         window.i.switcher(0);
    //         status = true;
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         window.i.switcher(1);
    //         status = false ; 
    //     }

    // }
// 
    
        //else if (typeof media.addListener === 'function') {
        //media.addListener(callback);}
