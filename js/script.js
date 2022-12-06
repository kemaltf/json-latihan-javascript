$(document).ready(function (res) {
  $.getJSON("data/donuts.json", function (result) {
    let menus = result.menu;
    $.each(menus, function (index, menu) {
      $("#list-menu").append(`
        <div class="col-sm-3 text-center mt-2">
            <div class="card">
                <div class="card-header">
			        ${menu.nama}
		        </div>
                <div class="card-body">
			        <img src="images/${menu.gambar}" alt="${menu.nama}" width="200">
			        <p><strong class="badge badge-warning"><h5>${menu.kategori}</h5></strong></p>
			        <p class="card-text">${menu.deskripsi}</p>
			        <a href="#" class="btn btn-primary">See detail</a>
	            </div>
            </div>
        </div>
      `);
    });
  });
});
