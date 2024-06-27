$(document).ready(function() {

  $("#formMenu select[name='jenisPack']").on('change', function() {
    if(this.value == 1) {
      $("#formMenu input[name='hargaMenu']").attr("disabled", false);
      $("#formMenu select[name='paketMenu']").attr("disabled", true);
      $("#formMenu select[name='jenisKarbo']").attr("disabled", true);
    };

    if(this.value == 2) {
      $("#formMenu input[name='hargaMenu']").attr("disabled", true);
      $("#formMenu select[name='paketMenu']").attr("disabled", false);
      $("#formMenu select[name='jenisKarbo']").attr("disabled", false);
    };
  });

})