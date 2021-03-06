//Funciton to search by TV series Name
function searchShow() {
  $("#searchBtn").click(function () {
    hideAllItemsByIDs()
    var tvShow = $("#icon_prefix2").val();

    var tvName = ""
    $.ajax({
      url: "https://api.themoviedb.org/3/search/tv?query=" + tvShow + "&api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&page=1&include_adult=false",
      data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
      header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
      dataType: "json",
      method: "GET",
    }).then(function (tvShow) {
      // console.log(tvShow);

      for (let i = 0; i < tvShow.results.length; i++) {

        $("#cardContainer").append(`
            <div class="col m2" style="display: table;">
            <div class="card small" style="width: 200px;">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w500//${tvShow.results[i].poster_path}">
                <span class="card-title"></span>
              </div>
              <ul class="collapsible">
              <li>
                <div class="collapsible-header">${tvShow.results[i].original_name}</div>
                <div class="collapsible-body"><span>${tvShow.results[i].overview}</span></div>
              </li>
              </ul>
            </div>
          </div>
            `)

      }
    })

  })
}

searchShow()

//popular 
var TMDBtvPopqueryURL = "";
var TMDBtvPopqueryURL2 = "";
var TMDBresponseTV = "";
var TMDBresponseTV2 = "";
var popTVList = [];
var TMBpopTV = [];
var allTVIDs = [];
//Genre
var TMDBtvGenrequeryURL = "";
var TMDBresponseTVg = "";
var genreList = [];
var TMDBnameid = [];

//HTML selected items
var genreSelectionArray = [];
var selectResult = [];
var unHideSelectedTV = [];


//on page load items
$(document).ready()
{
  buildGenreQueryTMDB()
  buildTVPopQueryTMDB()
  buildTVPopQueryTMDB2()
  //materialize recommended
  $('select').formSelect();
  $('select').select();

  $("select").click(function () {
    // 1) setup listener for custom event to re-initialize on change
    $(this).material_select('update');
  });
  genreSelectionArray.splice(0, genreSelectionArray.length)

};

//Button Listeners
// function searchShow() {
$("#genreBtn").click(function () {
  // console.log("clicked");
  if (genreSelectionArray[0].length <= 4) {
    hideAllItemsByIDs();
    searchArryObject();
  } else {
    //Future alert Function.
  }
})
// }

//Drop down listener
$('.dropdown-trigger').dropdown();
//Genre selection submit
$("select").on("change", function () {
  // console.log($('select#genreSelection').val());
  genreSelectionArray.shift();
  genreSelectionArray.push($('select#genreSelection').val());
  var $selectDropdown = $("#genreSelection");
  $selectDropdown.trigger('contentChanged');


  // unHideItemsWithIDs(toString(genreSelectionArray));

})

//function to hide items
function hideAllItemsByIDs() {
  for (let i = 0; i < popTVList.length; i++) {
    allTVIDs.push(popTVList[i].id);

  }
  for (let i = 0; i < allTVIDs.length; i++) {
    var tvlist = "#" + allTVIDs[i];
    // console.log(tvlist);
    $(tvlist).addClass("hide");
  }

}
//|| popTVList[i].genre_ids[i] == genreSelectionArray[1])
function searchArryObject() {
  unHideSelectedTV = [];
  for (let i = 0; i < popTVList.length; i++) {
    for (let x = 0; x < popTVList[i].genre_ids.length; x++) {
      if (popTVList[i].genre_ids[x] == genreSelectionArray[0][0]) {
        unHideSelectedTV.push(popTVList[i].id);
        // console.log("1st found tvID:  " + popTVList[i].id);
      }
    }
    for (let x = 0; x < popTVList[i].genre_ids.length; x++) {
      if (popTVList[i].genre_ids[x] == genreSelectionArray[0][1]) {
        unHideSelectedTV.push(popTVList[i].id);
        // console.log("2nd found tvID:  " + popTVList[i].id);

      }
    }
    for (let x = 0; x < popTVList[i].genre_ids.length; x++) {
      if (popTVList[i].genre_ids[x] == genreSelectionArray[0][2]) {
        unHideSelectedTV.push(popTVList[i].id);
        // console.log("2nd found tvID:  " + popTVList[i].id);

      }
    }
    for (let x = 0; x < popTVList[i].genre_ids.length; x++) {
      if (popTVList[i].genre_ids[x] == genreSelectionArray[0][3]) {
        unHideSelectedTV.push(popTVList[i].id);
        // console.log("2nd found tvID:  " + popTVList[i].id);

      }
    }
  }
  for (let i = 0; i < unHideSelectedTV.length; i++) {
    var unhideTVID = "#" + unHideSelectedTV[i];
    // console.log("unhide ID:  " + unhideTVID);
    $(unhideTVID).removeClass("hide");
  }
}


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

  var queryParams = "&language=en-US&page=1&include_adult=false";

  // queryURL query the API
  TMDBtvPopqueryURL = "https://api.themoviedb.org/3/tv/popular?api_key=7c2207b398a6d440727425799edd2f6f" + queryParams;

  // UVURLquery()
  return TMDBtvPopqueryURL;
};

//function to build URL for Popular TV shows
function buildTVPopQueryTMDB2() {
  // Set the API key
  var APIKey = "7c2207b398a6d440727425799edd2f6f";

  var queryParams = "&language=en-US&page=2&include_adult=false";

  // queryURL query the API
  TMDBtvPopqueryURL2 = "https://api.themoviedb.org/3/tv/popular?api_key=7c2207b398a6d440727425799edd2f6f" + queryParams;

  // UVURLquery()
  return TMDBtvPopqueryURL2;
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
    // console.log(TMDBresponseTVg);
    // pushes the response into array genrelist
    var TMBgenre = TMDBresponseTVg.genres
    for (let i = 0; i < TMDBresponseTVg.genres.length; i++) {
      genreList.push(TMBgenre[i].id);

    }
  })
}
genreTVURLquery()

//Function to grab and store Popular TV items page 1
function TVURLquery() {
  $.ajax({
    url: TMDBtvPopqueryURL,
    data: { "api_key": "7c2207b398a6d440727425799edd2f6f" },
    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
    dataType: "json",
    method: "GET",
  }).then(function (TMDBresponseTV) {
    // console.log(TMDBresponseTV);
    // pushes the response into array genrelist
    var TMBpopTV = TMDBresponseTV.results
    for (let i = 0; i < TMDBresponseTV.results.length; i++) {
      popTVList.push(TMBpopTV[i]);

    }
    // createTVCard()
  });
}
TVURLquery()

//Function to grab and store Popular TV items page 2
function TVURLquery2() {
  $.ajax({
    url: TMDBtvPopqueryURL2,
    data: { "api_key": "7c2207b398a6d440727425799edd2f6f" },
    header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
    dataType: "json",
    method: "GET",
  }).then(function (TMDBresponseTV2) {
    // console.log(TMDBresponseTV2);
    // pushes the response into array genrelist
    var TMBpopTV = TMDBresponseTV2.results
    for (let i = 0; i < TMDBresponseTV2.results.length; i++) {
      popTVList.push(TMBpopTV[i]);

    }
    createTVCard()
  });
}
TVURLquery2()

//creates the Cards from the popular API
function createTVCard() {
  var TVID = "";
  var TVName = "";
  var posterPath = "";
  var showGenre = [];
  var showOverview = "";
  // var tvStreamURL = "";
  for (let i = 0; i < popTVList.length; i++) {
    TVID = popTVList[i].id;
    TVName = popTVList[i].name;
    posterPath = popTVList[i].poster_path;
    showGenre.push(popTVList[i].genre_ids);
    showOverview = popTVList[i].overview;
    xGenre = showGenre.toString()
    //Card template
    $("#cardContainer").append(`

            <div class="col m2" id="${TVID}" style="display: table;">
            <div data-genre="${xGenre}" class="card small" style="width: 200px;">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w500//${posterPath}">
                <span class="card-title"></span>
              </div>
              <ul class="collapsible">
              <li>
                <div class="collapsible-header">${TVName}</div>
                <div class="collapsible-body"><span>${showOverview}</span></div>
              </li>
              </ul>
            </div>
            </div>
            `)
    showGenre.splice(0, showGenre.length)

    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
  }

}
