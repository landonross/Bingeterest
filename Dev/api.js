// function ratings() {
//     $.ajax({
//         url: "https://api.themoviedb.org/3/tv/top_rated?api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&page=1",
//         data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
//         header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
//         dataType: "json",
//         method: "GET",
//     }).then(function (topRated) {
//         console.log(topRated);
//         })

// }   
// ratings();


//     function newShows(){
//         $.ajax({
//         url: "https://api.themoviedb.org/3/tv/85271/images?api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US",
//         data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
//         header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
//         dataType: "json",
//         method: "GET",
//     }).then(function (newShows) {
//         console.log(newShows);
//         })
//     }
//     newShows()


function searchShow() {
  var tvName = "Family Guy"
  $.ajax({
    url: "https://api.themoviedb.org/3/search/tv?query=" + tvName + "&api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&page=1&include_adult=false",
    data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
    dataType: "json",
    method: "GET",
  }).then(function (tvShow) {
    console.log(tvShow);

    for (let i = 0; i < tvShow.results.length; i++) {

      $("#cardContainer").append(`
            <div class="col m4">
            <div class="card small" style="width: 200px;">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w500//${tvShow.results[i].poster_path}">
                <span class="card-title">${tvShow.results[i].original_name}</span>
              </div>
              <div class="card-content">
                <p>${tvShow.results[i].overview}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
            `)

      // $.ajax({
      //     url:"https://api.themoviedb.org/3/tv/"+tvShow.results[i].id+"/images?api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US",
      //     data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
      //    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
      //    dataType: "json",
      //    method: "GET",
      // }).then(function(images){
      //     console.log(images)
      // })
    }


  })
}
searchShow()

//popular 
var TMDBtvPopqueryURL = "";
var TMDBresponseTV = "";
var popTVList = [];
var TMBpopTV = [];
//Genre
var TMDBtvGenrequeryURL = "";
var TMDBresponseTVg = "";
var genreList = [];
var TMDBnameid = [];


//on page load items
$(document).ready()
{
  buildGenreQueryTMDB()
  buildTVPopQueryTMDB()
  $('select').formSelect();
  // $("select").material_select();
  $("select").click(function () {
    // 1) setup listener for custom event to re-initialize on change
    $(this).material_select('update');
  });

};


//function to build the URL used to make the API request for genera ID's and names.
function buildGenreQueryTMDB() {
  // Set the API key
  var APIKey = "7c2207b398a6d440727425799edd2f6f";

  var queryParams = "&language=en-US&page=1";

  // queryURL query the API
  TMDBtvGenrequeryURL = "https://api.themoviedb.org/3/genre/tv/list?api_key=7c2207b398a6d440727425799edd2f6f" + queryParams;

  // UVURLquery()
  return TMDBtvGenrequeryURL;
};

//function to build URL for Popular TV shows
function buildTVPopQueryTMDB() {
  // Set the API key
  var APIKey = "7c2207b398a6d440727425799edd2f6f";

  var queryParams = "&language=en-US&page=1";

  // queryURL query the API
  TMDBtvPopqueryURL = "https://api.themoviedb.org/3/tv/popular?api_key=7c2207b398a6d440727425799edd2f6f" + queryParams;

  // UVURLquery()
  return TMDBtvPopqueryURL;
};

//function to query TMBD genre API
function genreTVURLquery() {
  $.ajax({
    url: TMDBtvGenrequeryURL,
    data: { "api_key": "7c2207b398a6d440727425799edd2f6f" },
    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
    dataType: "json",
    method: "GET",
  }).then(function (TMDBresponseTVg) {
    console.log(TMDBresponseTVg);
    // pushes the response into array genrelist
    var TMBgenre = TMDBresponseTVg.genres
    for (let i = 0; i < TMDBresponseTVg.genres.length; i++) {
      genreList.push(TMBgenre[i]);

    }
  })
}

$('.dropdown-trigger').dropdown();

function createTVCard() {
  var TVID = "";
  var TVName = "";
  var posterPath = "";
  var showGenre = [];
  var showOverview = "";
  var tvStreamURL = "";
  for (let i = 0; i < popTVList.length; i++) {
    TVID = popTVList[i].id;
    TVName = popTVList[i].name;
    posterPath = popTVList[i].poster_path;
    showGenre.push(popTVList[i].genre_ids);
    showOverview = popTVList[i].overview;
    xGenre = showGenre.toString()

    $("#cardContainer").append(`
            <div class="col m2">
            <div id="${TVID}" data-genre="${xGenre}" class="card small" style="width: 200px;">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w500//${posterPath}">
                <span class="card-title">${TVName}</span>
              </div>
              <div class="card-content">
                <p>${showOverview}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            `)
            showGenre.splice(0, showGenre.length)
  }

}

//Function to grab and store Popular TV items
function TVURLquery() {
  $.ajax({
    url: TMDBtvPopqueryURL,
    data: { "api_key": "7c2207b398a6d440727425799edd2f6f" },
    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
    dataType: "json",
    method: "GET",
  }).then(function (TMDBresponseTV) {
    console.log(TMDBresponseTV);
    // pushes the response into array genrelist
    var TMBpopTV = TMDBresponseTV.results
    for (let i = 0; i < TMDBresponseTV.results.length; i++) {
      popTVList.push(TMBpopTV[i]);

    }
  })
}
TVURLquery()


