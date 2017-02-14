var createCats = function(name, favFood){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');

  var listName = document.createElement('li');
  var listFavFood = document.createElement('li');

  listName.innerText = ("Name: " + name);
  listFavFood.innerText = ("Favourite Food: " + favFood);
  newCat.appendChild(listName);
  newCat.appendChild(listFavFood);

  return newCat;
}

var createImage = function (url) {
  var img = document.createElement('img');

  img.src = url;
  img.width = 500;
  return img;
}

var appendElements = function (cats, img, listing){
  listing.appendChild(img);
  cats.appendChild(listing);
}

var addCat = function(name, favFood, url){
  var image = createImage(url);
  var listing = createCats(name, favFood);

  var cats = document.getElementById('cats');
  appendElements(cats, image, listing);
}

var app = function() {

  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "https://pbs.twimg.com/media/C1hFLZaWEAYjIwb.jpg:large");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  addCat("Charlie", "Whatever he can get", "http://i.dailymail.co.uk/i/newpix/2016/09/27/10/38D5F89300000578-3809468-image-a-9_1474969870437.jpg");
  addCat("Sparky", "The flesh of the weak", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUbcbjDlqWJk0GRqw2bmGTThSj-K-NL2bV6Ra0b3Au6K7xiPX");
}

window.onload = app;
