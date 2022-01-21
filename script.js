function makePlaceHolderImage(width,height,id){
  document.getElementById(id).outerHTML = '<img src=https://via.placeholder.com/'+width.toString()+'x'+height.toString()+' </img>';
}
makePlaceHolderImage(window.innerWidth,300,'1');