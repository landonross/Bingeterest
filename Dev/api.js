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
        var movieName = "Bad boys"
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