timeBreak = function(e){
    e.classList.remove('clock')
}

// document.getElementsByClassName('btn')[1].classList.toggle('btn');



    document.getElementsByClassName('fa-filter')[0].parentElement.style.display = 'none';

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="manv" id="manv" value="" placeholder="Nhập Mã quản lý"></td>' +
            '<td><input type="text" class="form-control" name="name" id="name" placeholder="Nhập Tên"></td>' +
            '<td><input type="text" class="form-control" name="chucvu" id="chucvu" value="" placeholder="Nhập Chức Vụ"></td>' +
            '<td><input type="text" class="form-control" name="captrn" id="gioitinh" placeholder="Nhập Đơn vị"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    //Add Hàng
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                swal("", "Dữ Liệu Trống Vui Lòng Kiểm Tra", "error");
                empty = true;
            } else {
                $(this).removeClass("error");
                swal("", "Bạn Chưa Nhập Dữ Liệu", "error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());
                swal("", "\nBạn Đã Cập Nhật Thành công", "success");
            });
            $(this).parents("tr").find(".edit").toggle();
            $(".add-new").removeAttr("disabled");

        }
    });
    // Edit Hàng
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
            $(this).html('<input type="text" class="form-control" value="' + $(this)
                .text() + '">');
        });
        $(this).parents("tr").find(".edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    jQuery(function () {
        jQuery(".add").click(function () {
            swal("", "\nBạn Đã Sửa Thành công", "success");
        });
    });
    // Delete Hàng
    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
        swal("ABC", "\nBạn Đã Xóa Thành công", "success");
        $(".add-new").removeAttr("disabled");
    });
});

jQuery(function () {
    jQuery(".cog").click(function () {
        swal("Sorry!", "Tính Năng Này Chưa Có", "error");
    });
});