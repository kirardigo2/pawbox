var div = document.getElementById('sidebar1');
var display = 0;

function hideShow(){
    if (display==1){
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display=1;
    }
}