let imdbList = ['list','best-of','search','user'];
loc = location.href;
loc = loc.split('https://www.imdb.com/');
locList = loc[1].split('/')[0];
let imgURL1 = chrome.extension.getURL('rarbg.png');
let imgURL2 = chrome.extension.getURL('tpb.png');

if(Object.values(imdbList).includes(locList)){
    let item = document.getElementsByClassName('lister-item-header');
    for(i=0;i<item.length;i++){
        let str = item[i].getElementsByTagName('a')[0].href;
        let res = str.split("title/"); 
        let id=res[1].split("/")[0];
        item[i].innerHTML +='<span class="lister-item-year text-muted" style="margin-left:10px;margin-right:10px;">'+ '<a href=https://tpblautbay.one/search.php?q=' + id +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+ '<a href=https://rarbgaccess.org/torrents.php?search=' + id +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
    }
} else {
    locId=loc[1].split('/')[1];
    if(document.getElementById('titleYear')){
        let item = document.getElementById('titleYear');
        item.innerHTML +='<span class="lister-item-year text-muted">'+ '<a href=https://tpblautbay.one/search.php?q=' + locId +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+ '<a href=https://rarbgaccess.org/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
    } else {
        let item = document.getElementsByClassName("title_wrapper")[0];
        let h1 = item.getElementsByTagName('h1')[0];
        let node = document.createElement("h1");
        node.innerHTML='<span class="lister-item-year text-muted" style="margin-right:10px;">'+ '<a href=https://tpblautbay.one/search.php?q=' + locId +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+ '<a href=https://rarbgaccess.org/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
        h1.innerHTML+=node.innerHTML;
    }
}
