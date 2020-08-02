var imdbList=['list','best-of','search','user'];
loc=location.href;
loc=loc.split('https://www.imdb.com/');
locList=loc[1].split('/')[0];
var imgURL1 = chrome.extension.getURL('rarbg.png');
var imgURL2 = chrome.extension.getURL('tpb.png');
var imgURL3 = chrome.extension.getURL('tg.png');
var imgURL4 = chrome.extension.getURL('zooqle.png');
var imgURL5 = chrome.extension.getURL('snahpit.png');
var imgURL6 = chrome.extension.getURL('wsmmirror.png');
if(Object.values(imdbList).includes(locList)){
    var item= document.getElementsByClassName('lister-item-header');
    for(i=0;i<item.length;i++){
        var str=item[i].getElementsByTagName('a')[0].href;
        var res=str.split("title/"); 
        var id=res[1].split("/")[0];
        item[i].innerHTML +='<span class="lister-item-year text-muted" style="margin-left:10px;margin-right:10px;">'+'<a href=https://wsmmirror.info/Movies/' + id +' target="_blank">'+'<img src='+imgURL6+' alt="wsmmirror">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://snahp.it/?s=' + id +' target="_blank">'+'<img src='+imgURL5+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://zooqle.com/search?q=' + id +' target="_blank">'+'<img src='+imgURL4+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://tpblautbay.one/search.php?q=' + id +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://torrentgalaxy.to/torrents.php?search=' + id +' target="_blank">'+'<img src='+imgURL3+' alt="tg">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://rarbgaccess.org/torrents.php?search=' + id +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
    }
}
else{
    locId=loc[1].split('/')[1];
    if(document.getElementById('titleYear')){
        var item=document.getElementById('titleYear');
        item.innerHTML +='<span class="lister-item-year text-muted">'+'<a href=https://wsmmirror.info/Movies/' + locId +' target="_blank">'+'<img src='+imgURL6+' alt="wsmmirror">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://snahp.it/?s=' + locId +' target="_blank">'+'<img src='+imgURL5+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://zooqle.com/search?q=' + locId +' target="_blank">'+'<img src='+imgURL4+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://tpblautbay.one/search.php?q=' + locId +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://torrentgalaxy.to/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL3+' alt="tg">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://rarbgaccess.org/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
    }
    else{
        var item= document.getElementsByClassName("title_wrapper")[0];
        var h1= item.getElementsByTagName('h1')[0];
        var node = document.createElement("h1");
        node.innerHTML='<span class="lister-item-year text-muted" style="margin-right:10px;">'+'<a href=https://wsmmirror.info/Movies/' + locId +' target="_blank">'+'<img src='+imgURL6+' alt="wsmmirror">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://snahp.it/?s=' + locId +' target="_blank">'+'<img src='+imgURL5+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://zooqle.com/search?q=' + locId +' target="_blank">'+'<img src='+imgURL4+' alt="zooqle">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://tpblautbay.one/search.php?q=' + locId +' target="_blank">'+'<img src='+imgURL2+' alt="TPB">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">'+'<a href=https://torrentgalaxy.to/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL3+' alt="tg">'+'</a>'+'</span>'+'<span class="lister-item-year text-muted">' + '<a href=https://rarbgaccess.org/torrents.php?search=' + locId +' target="_blank">'+'<img src='+imgURL1+' alt="RARBG">'+'</a>'+'</span>';
        h1.innerHTML+=node.innerHTML;
    }
}
