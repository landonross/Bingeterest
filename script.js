// // $.ajax({
// //     type: "GET",
// //     url: "https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&sort_by=created_at.asc&page=1",
// //     data: "Ratings",
// //     dataType: "json",
// //     success: function (data) {
        

// //         console.log(data)
// //     }
// });


// function ratings() {
//     $.ajax({
//         url: "https://api.themoviedb.org/3/account/%7Baccount_id%7D/rated/movies?api_key=9266330c9fa3cd2229ad670d2a3881bc&language=en-US&sort_by=created_at.asc&page=1&Ratings",
//         data: { "api_key": "9266330c9fa3cd2229ad670d2a3881bc" },
//         header: "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIyMDdiMzk4YTZkNDQwNzI3NDI1Nzk5ZWRkMmY2ZiIsInN1YiI6IjYwMGM2Y2RmYzg2YjNhMDA0MWJmMWU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyUUTkXtbl96uQ3VP8STmbmtCvYBt-RrCuyo2O91og",
//         dataType: "json",
//         method: "GET",
//     }).then(function (ratings) {
//         console.log(ratings);
//         })

// }   
// ratings()

  $('.dropdown-trigger').dropdown();