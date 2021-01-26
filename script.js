$.ajax({
    type: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=9266330c9fa3cd2229ad670d2a3881bc",
    data: "movies",
    dataType: "json",
    success: function (data) {
        

        console.log(data)
    }
});