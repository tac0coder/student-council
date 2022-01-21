function makePlaceHolderImage(width,height,id){
  document.getElementById(id).outerHTML = '<img src=via.placeholder.com/'+width.toString()+'x'+height.toString()+' </img>';
}
makePlaceHolderImage(window.innerWidth,window.innerHeight,'1');