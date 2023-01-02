
function image(){
    // https://api.unsplash.com/photos/?client_id=0CqLcPvEZI8UoThFgLoNgPHhyhpT71J3MNtbQGBYVEs;
    var id = document.getElementById("simple-search").value;
    // console.log(id);
    let uri = 'https://api.unsplash.com/photos/random?client_id=FNfHk5Ph6UG_JzkfovWLHVR34euueg4sLK64Wfc2Xl8&query='+id;
    //563492ad6f91700001000001d96e8036e841401cba7b516033011b86
    console.log(uri);
    var imgcontainer = document.getElementById("img-container");
    imgcontainer.innerHTML = "";
    for(i=0;i<10;i++){
    axios({
        method: 'get',
        url: uri,
        responseType: 'stream'
    })
      .then(function (response) {
       data=JSON.parse(response.data);
        //  console.log(data);
        
           
            imgcontainer.innerHTML += '<img src="'+data.urls.small+'">';
            // document.getElementById("img").setAttribute("src", data.urls.small);
        
        // document.getElementById("img").setAttribute("src", data.urls.small);
      });
    }
}