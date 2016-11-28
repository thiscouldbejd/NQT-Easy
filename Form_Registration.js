<!--
// ** GitScript **
// GitScript.Repo: NQT-Easy
// ** GitScript **
-->

<script>

  $(function() {
  
    // -- Populate Form -- //
    var _form = $("form");
    if (__populate || __status != "SENT") { // Loaded Data
      if ($("#control").is(":visible")) $("#control").slideToggle();
      $("#submission .action").prop("disabled", false).removeClass("high-dim");
      if (__populate) updateFormFromData(_form, __populate);
    }
    if (__defaults) { // Defaults
      updateFormFromDefaults(_form, __defaults);
    }
    
    // -- Make sure everything is appropriately sized -- //
    autosize($("textarea.resizable"));
    // -- Populate Form -- //
    
  });

</script>