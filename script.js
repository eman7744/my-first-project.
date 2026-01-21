// المتطلب 10: استدعاء محتوى الـ Modal بواسطة AJAX
function loadcontent(page) {
    $.ajax({
        url: page,
        success: function(response) {
            // توحيد الـ ID ليطابق الموجود في صفحة HTML الخاصة بك
            $('#modalgata').html(response); 
            var myModal = new bootstrap.Modal(document.getElementById('ajaxmoooodal'));
            myModal.show();
        },
        error: function() {
            // المتطلب 9: تنبيه في حالة الخطأ
            toastr.error('خطأ في تحميل البيانات');
        }
    });
}

// المتطلب 9: إشعار النجاح عند إرسال النموذج
$(document).ready(function() {
    $('#contactform').on('submit', function(e) {
        if (this.checkValidity()) {
            e.preventDefault();
            toastr.success('تم استلام رسالتك بنجاح', 'بين السطور');
        } else {
            e.preventDefault();
            e.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
});