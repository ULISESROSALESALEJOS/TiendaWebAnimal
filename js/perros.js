
$(document).ready(function () {
  $.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    method: "GET",
    dataType: "JSON",
    success: function (data) {
      var messageArray = data.message;
      for (var breed in messageArray) {
        var breedItem = $("<li>").text(breed);
        $("#").append(breedItem);

        var subBreedList = messageArray[breed];
        if (subBreedList.length > 0) {
          var subBreedListContainer = $("<ul>");
          for (var i = 0; i < subBreedList.length; i++) {
            var subBreedItem = $("<li>").text(subBreedList[i]);
            subBreedListContainer.append(subBreedItem);
          }
          $("#").append(subBreedListContainer);
        }
      }
    },
    error: function (errorThrown) {
      console.error(errorThrown);
    },
  });
});