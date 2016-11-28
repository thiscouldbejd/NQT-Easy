<script>

  $(function() {

    // -- Global Variables -- //
    var colour = net.brehaut.Color;


    // Populate Teachers' Standards
    var createStandard = function(standard, previous, parentColour) {
		
        // -- Set up names, safe names and return object -- //
		var _standard = (previous ? String(previous) : "") + String(standard.number);
		var _safeStandard = _standard.split(".").join("_");
		var _return = $("<li />").addClass("list-group-item dim");
		_return.click(function() {var _this = $(this); _this.parent().children("li").addClass("dim"); _this.removeClass("dim")});
		// -- Set up names, safe names and return object -- //
        
        
		// -- Handle Colour -- //
		var _colour;
		if (standard.colour) {
			_colour = standard.colour;
		} else if (parentColour) {
			_colour = colour(parentColour).lightenByRatio((Math.floor(Math.random() * 8) + 4) / 100).desaturateByRatio((Math.floor(Math.random() * 40) + 10) / 100).toCSS();
		}
		if (_colour) _return.css("background-color", _colour);
		// -- Handle Colour -- //
		
        
        // -- Add Label -- //
        var _label = $("<div />").addClass("material-switch-label").text(standard.details).prepend($("<h4 />").text(_standard + ") " + (standard.name ? standard.name + "  " : "")).addClass("number-label"));
		_return.append(_label);
		
        
        // -- Add Toggle if required -- //
        var _panel = $("<div />").attr("id", "panel_" + _safeStandard);
        if (standard.toggle === true) {
          _return.append($("<div />").addClass("pull-right")
			.append($("<input />").attr("id", "standard_" + _safeStandard).attr("name", "standard_" + _safeStandard).attr("hidden", "hidden")
				.attr("type", "checkbox").attr("for", (standard.evidence && standard.evidence === true) ? "evidence_" + _safeStandard : "childStandards_" + _safeStandard)
							.data("reveal", "panel_" + _safeStandard)
				.data("field", "Standard " + _standard).data("order", Number("5" + _standard)).data("display", true).change(function() {$("#" + $(this).data("reveal")).slideToggle();}))
		  .append($("<label />").addClass("material-switch").attr("for", "standard_" + _safeStandard)));
          _panel.css("display", "none");
          _label.addClass("shorten");
        }
        // -- Add Toggle if required -- //
        
        
        // -- Add Comment / Evidence if required -- //
		if (standard.evidence === true || standard.comment === true) {
			var _holder = $("<div />").attr("id", "evidence_" + _safeStandard).addClass("evidence-holder");
			var _input = $("<div />").addClass("input-group evidence").data("for", "standard_" + _safeStandard).appendTo(_holder);
			_input.append($("<textarea />").data("for", "standard_" + _safeStandard).data("type", "Details").data("order", Number("5" + _standard)).attr("name", "evidenceDetails_" + _safeStandard).attr("rows", 1).attr("placeholder", "Further details").css("width", "100%").css("max-width", "100%").css("resize", "vertical").addClass("form-control optional resizable"));
			if (standard.evidence === true) {
              _input.append($("<div />").addClass("input-group-btn bottom-align").attr("id", "evidenceButton_" + _safeStandard)
				.append($("<button />").attr("type", "button").addClass("btn btn-primary dropdown-toggle").attr("data-toggle", "dropdown").attr("aria-haspopup", "true")
								.attr("aria-expanded", "false").text("Evidence ").append($("<span />").addClass("caret")).dropdown())
				.append($("<ul />").addClass("dropdown-menu dropdown-menu-right")
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-drive google dim").attr("disabled", "disabled").text("From Google Drive")))
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-classroom google dim").attr("disabled", "disabled").text("From Google Classroom")))
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-mail google dim").attr("disabled", "disabled").text("From Google Gmail")))
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-file google dim").attr("disabled", "disabled").text("From File")))
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-web google dim").attr("disabled", "disabled").text("From Web")))
								.append($("<li />").attr("role", "separator").addClass("divider"))
								.append($("<li />").append($("<a />").attr("href", "#").addClass("g-offline google dim").attr("disabled", "disabled").text("Offline / Paper")))
				));
            } else {
             _input.css("width", "100%");
            }
			_panel.append(_holder);
		}
        // -- Add Comment / Evidence if required -- //


        // -- Add Child Standards if Required -- //
		if (standard.children && standard.children.length > 0) {
			var _container = $("<ul />").addClass("list-group").attr("id", "childStandards_" + _safeStandard).css("margin-top", "1em");
			for (var i = 0; i < standard.children.length; i++) {
                if (standard.children[i].hide !== true) _container.append(createStandard(standard.children[i], _standard + ".", _colour));
            }
			_panel.append(_container);
		}
        // -- Add Child Standards if Required -- //


        // -- Add the sub-panel if it has children then return -- //
        if (_panel.children().length > 0) _return.append(_panel);
        return _return;
        
	}
    
    var _standards = $("form").find("#standards");
    if (standards && _standards && _standards.children().length === 0) {
      for (var i = 0; i < standards.length; i++) {
        _standards.append(createStandard(standards[i]), "");
      }
    }
    
	$("#add_Target").click(function(e) {
    
		if ($("#target_Details").val()) {
		
			addTarget($("#target_Details").val() + ($("#target_EvidenceType").text() == "Evidence Type" ? "" : " [Evidenced By: " + $("#target_EvidenceType").text()  + "]"), this);
			$("#target_Details").val("");
			$("#target_EvidenceType").text("Evidence Type");
            
		}
		
	});
    
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
    if (__display) { // Previous
      for (var i = 0; i < __display.length; i++) {
        showPreviousData($("#previous_Forms"), __display[i]);
      }
    }
    
    // -- Make sure everything is appropriately sized -- //
    autosize($("textarea.resizable"));
    // -- Populate Form -- //
    
  });

</script>