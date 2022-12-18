document.getElementsByClassName('btn')[0].classList.remove('btn');

document.getElementsByClassName('fa-filter')[0].parentElement.style.display = 'none';

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
   
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
        swal("", "\nBạn Đã Xóa Thành công", "success");
        $(".add-new").removeAttr("disabled");
    });
});

jQuery(function () {
    jQuery(".cog").click(function () {
        swal("Sorry!", "Tính Năng Này Chưa Có", "error");
    });
});