$("#submit").on("click", async function(evt) {
    evt.preventDefault();

    //using axios to get gif data from the user inputted term
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            //query is the term inputted by user
            q: $("#term").val(),
            api_key: "zzDbLScdhLD05cURcZ7z0ZFpWwL07kfp"
        }
    });
    $("#term").val("");

    getData(response.data);
});

function getData(res) {
    const results = res.data.length;

    if (results) {
        const randIndex = Math.floor(Math.random() * results);
        const $col = $("<div>", { class: "col-md-4 col-12 mb-4" });
        const $gif = $("<img>", {
            src: res.data[randIndex].images.original.url,
            class: "w-100"
        });
        $col.append($gif);
        $("#imageContainer").append($col);
    }
}

$("#remove").click(function() {
    $("#imageContainer").empty();
});