$("#submit").on("click", function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();

  let titleh2 = $("<h2>").text(title);
  let ratingh2 = $("<h2>").text(rating);
  let deletebtn = $("<button>").text("-").addClass("deletebtn");
  let movierating = $("<div>").append(titleh2, ratingh2, deletebtn);
  $("#moviebody").append(movierating);
});

$("#moviebody").on("click", ".deletebtn", function (e) {
  $(e.target).closest("div").remove();
});
