$(document).ready(function() {

  $("#formMenu select[name='selectPack']").on('change', function() {
    if(this.value == 1) {
      $("#formMenu input[name='txtHarga']").attr("disabled", false);
      $("#formMenu select[name='selectPaket']").attr("disabled", true);
      $("#formMenu select[name='selectKarbo']").attr("disabled", true);
    };

    if(this.value == 2) {
      $("#formMenu input[name='txtHarga']").attr("disabled", true);
      $("#formMenu select[name='selectPaket']").attr("disabled", false);
      $("#formMenu select[name='selectKarbo']").attr("disabled", false);
    };
  });

})