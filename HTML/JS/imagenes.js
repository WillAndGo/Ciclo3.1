function verAlbum(){
    var listaralbum=[
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          },
          {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
          },
          {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
          },
          {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
          },
          {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
          },
          {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
          },
          {
            "albumId": 1,
            "id": 9,
            "title": "qui eius qui autem sed",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
          },
          {
            "albumId": 1,
            "id": 10,
            "title": "beatae et provident et ut vel",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://via.placeholder.com/150/810b14"
          },
    ];

    var info="<table class='table table-hover'>";
    info=info + "<tr>"
    info=info + "<th>Id</th>"
    info=info + "<th>User ID</th>"
    info=info + "<th>Titulo</th>"
    info=info + "<th>Imagen</th>"
    info=info + "</tr>"

for(var i=0;i<listaralbum.length;i++){
    info=info + "<tr>"
    info=info + "<td>"+listaralbum[i]["id"] +"</td>"
    info=info + "<td>"+listaralbum[i]["albumId"] +"</td>"
    info=info + "<td>"+listaralbum[i]["title"] +"</td>"
    info=info + "<td><img src='"+listaralbum[i]["thumbnailUrl"] +"'></td>"
    info=info + "</tr>"
}

info=info + "</table>"

document.getElementById("información").innerHTML=info;

}

function limpiarTabla(){
    var info="<h1>No hay información</h1>";
    document.getElementById("información").innerHTML=info;
}

function consultaImgURL(){

    var listaralbum;
    const url="https://jsonplaceholder.typicode.com/photos";
    fetch(url)
    .then(Response=>Response.json())
    .then((data)=>
    {
        listaralbum=data;
        var info="<table class='table table-hover'>";
    info=info + "<tr>"
    info=info + "<th>Id</th>"
    info=info + "<th>User ID</th>"
    info=info + "<th>Titulo</th>"
    info=info + "<th>Imagen</th>"
    info=info + "</tr>"

for(var i=0;i<listaralbum.length;i++){
    info=info + "<tr>"
    info=info + "<td>"+listaralbum[i]["id"] +"</td>"
    info=info + "<td>"+listaralbum[i]["albumId"] +"</td>"
    info=info + "<td>"+listaralbum[i]["title"] +"</td>"
    info=info + "<td><img src='"+listaralbum[i]["thumbnailUrl"] +"'></td>"
    info=info + "</tr>"
}

info=info + "</table>"

document.getElementById("información").innerHTML=info;
        
    }
    )
}