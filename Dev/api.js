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
 
        var tvName = "Family Guy"
        var movieName = "IronMan"
    function searchShow(){
        
        $.ajax({
        url: "https://api.themoviedb.org/3/search/tv?query="+tvName+"&api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&page=1&include_adult=false",
        data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
        header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
        dataType: "json",
        method: "GET",
    }).then(function (tvShow) {
        console.log(tvShow);

          for (let i = 0; i < tvShow.results.length; i++) {
            
            $(".cardDisplay").append(`
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
    searchShow();
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


    };


    $("#genraDropDown").on("change", function () {
        //Getting Value
        var selValue = $("#genraDropDown").val();
        //Setting Value
        // $("#").val(selValue);
        console.log("YOU selected value:    " + selValue)
    });

    //function to build the URL used to make the API request for genera ID's and names.
    function buildGenreQueryTMDB() {
        // Set the API key
        var APIKey = "7c2207b398a6d440727425799edd2f6f";

        var queryParams = "&language=en-US&page=1";

        // queryURL query the API
        // movieGenreURL = https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
        // tvByIDURL = https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
        // TMDBtvqueryURL = "https://api.themoviedb.org/3/tv/TV-14/content_ratings?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US";
        // popularURL = "https://api.themoviedb.org/3/tv/popular?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US&page=1"
        // contentRatingsURL = "https://api.themoviedb.org/3/tv/69050/content_ratings?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US&page=1"
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
        // movieGenreURL = https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
        // tvByIDURL = https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
        // TMDBtvqueryURL = "https://api.themoviedb.org/3/tv/TV-14/content_ratings?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US";
        // popularURL = "https://api.themoviedb.org/3/tv/popular?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US&page=1"
        // contentRatingsURL = "https://api.themoviedb.org/3/tv/69050/content_ratings?api_key=7c2207b398a6d440727425799edd2f6f&language=en-US&page=1"
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

            //create li to view ID and Name for each genre
            for (let i = 0; i < genreList.length; i++) {
                var TMDBid = genreList[i].id;
                var TMDBname = genreList[i].name;
                var idName = TMDBid + ":  " + TMDBname;
                TMDBnameid.push(idName);
                $("#dropdown1").append('<li value="dd' + TMDBid + '">' + TMDBname + '</li>');
                //create drop down, id for each, and value for each item in drop down.
                // $("#genraDropDown").append("<option id=dd" + i + " value=" + TMDBid + "></option>")
            }

            //create drop down list of names base don the dd# id created.
            // for (let i = 0; i < genreList.length; i++) {
            //     var TMDBname = genreList[i].name;
            //     $("#dd" + i).text(TMDBname);
            // }
        })
    }

    //create li to view ID and Name for each genre
    for (let i = 0; i < genreList.length; i++) {
      var TMDBid = genreList[i].id;
      var TMDBname = genreList[i].name;
      var idName = TMDBid + ":  " + TMDBname;
      TMDBnameid.push(idName);
      $("#dropdown1").append('<li value="aa' + TMDBid + '">' + TMDBname + '</li>');
      $("#dropdown2").append('<li value="bb' + TMDBid + '">' + TMDBname + '</li>');
      //create drop down, id for each, and value for each item in drop down.
      // $("#genraDropDown").append("<option id=dd" + i + " value=" + TMDBid + "></option>")
    }

  

genreTVURLquery();

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


    function searchMovie(){
        
      $.ajax({
      url: "https://api.themoviedb.org/3/search/tv?query="+movieName+"&api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&page=1&include_adult=false",
      data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
      header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
      dataType: "json",
      method: "GET",
  }).then(function (searchMovie) {
      console.log(searchMovie);

        for (let i = 0; i < movieName.results; i++) {
          
          $(".movieDisplay").append(`
          <div class="col m4">
          <div class="card small" style="width: 200px;">
            <div class="card-image">
              <img src="https://image.tmdb.org/t/p/w500//${results[i].poster_path}">
              <span class="card-title">${results[i].original_name}</span>
            </div>
            <div class="card-content">
              <p>${results[i].overview}</p>
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
  searchMovie()