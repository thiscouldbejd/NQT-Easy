<script>

  var __display, __populate, __token, __organisation, __user, __defaults, __status, __debug;
  var addTarget, addEvidence, getDataFromForm, updateFormFromData, updateFormFromDefaults, showPreviousData;
  
  $(function() {
    
    // -- Data Methods -- //
    addEvidence = function(target, id, name, url, icon, prefix) {
		
		var _listItem = $("<div />").addClass("evidence-list-item").appendTo(target);
						_listItem.append($("<span />").addClass("label label-default").text("Evidence"));
						if (icon) _listItem.append($("<img />").addClass("pad-left file-icon").attr("src", icon));
						_listItem.append($("<a />").addClass("pad-left").data("id", id).data("for", prefix).data("type", "Evidence").attr("target", "_blank").attr("href", url).text(name));
						_listItem.append($("<a />").attr("href", "#").attr("title", "Remove Evidence").addClass("pad-left").append($("<span />").addClass("glyphicon glyphicon-remove delete-icon")).click(function(e) {e.preventDefault(); $(this).parent().remove(); return true;}));
		
	}
    
    addTarget = function(details, _this) {
		
		var _target = $("#targets");
			
		if (_target.length === 0) {
			_target = $("<div />").attr("id", "targets").addClass("well well-sm").appendTo($(_this).closest(".input-group").parent());
			$("#has_Targets").prop("checked", true);
		}
			
		var _targetItem = $("<div />").addClass("target-list-item").appendTo(_target);
		_targetItem.append($("<span />").addClass("label label-primary").text("Target"));
		_targetItem.append($("<p />").data("for", "has_Targets").data("type", "Target").addClass("pad-left").text(details));
		_targetItem.append($("<a />").attr("href", "#").attr("title", "Remove Evidence").addClass("pad-left").append($("<span />").addClass("glyphicon glyphicon-remove delete-icon")).click(
			function(e) {
				e.preventDefault();
				$(this).parent().remove();
				if ($("#targets").children().length === 0) {
					$("#targets").remove();
					$("#has_Targets").prop("checked", false);
				}
			}
		));
	}
    
    getDataFromForm = function(form) {

      var _return = {};
	
      // -- Iterate through all the Input, Select & Text Area Elements of the Form -- //
	  form.find("input, select, textarea").each(function() {
		_this = $(this);
		if (_this.data("for") && _return[_this.data("for")]) {
			if (!_return[_this.data("for")][_this.data("type")]) _return[_this.data("for")][_this.data("type")] = [];
			_return[_this.data("for")][_this.data("type")].push({
				Field : _this.data("field") ? _this.data("field") : _this.attr("name"),
				Value : (this.type == "checkbox" || this.type == "radio") ? _this.prop("checked") : _this.val(),
				Label : _this.data("label") ? _this.data("label") : "",
                Display : _this.data("display") ? true : false,
			});
		} else if (_this.attr("name")) {
			_return[_this.attr("name")] = {
				Field : _this.data("field"),
				Value : (this.type == "checkbox" || this.type == "radio") ? _this.prop("checked") : _this.val(),
				Label : _this.data("label") ? _this.data("label") : "",
				Order : _this.data("order"),
                Display : _this.data("display") ? true : false,
			};	
		}
      });
	
	  // -- Iterate through all the Evidence List Item Links, tying them up to  -- //
	  form.find(".evidence-list-item a, .target-list-item p").each(function() {
		_this = $(this);
		if (_this.data("for") && _return[_this.data("for")]) {
			// Matched
			var _type = _this.data("type")
			if (!_return[_this.data("for")][_type]) _return[_this.data("for")][_type] = [];
			var _object = {
				Id : _this.data("id"),
				Url : _this.attr("href"),
				Value : _this.text(),
			}
			var _imgs = _this.siblings("img.file-icon");
			if (_imgs.length == 1) _object.Icon = _imgs.prop("src");
			_return[_this.data("for")][_type].push(_object);
		}
	  });
	
	  return _return;
      
    }

    updateFormFromDefaults = function(form, defaults) {
    
      if (__debug) {console.log("DEFAULTS:"); console.log(defaults);}
      
      Object.keys(defaults).map(function(key) {
        
        var _val = defaults[key];
        var _input = $("input[data-field='" + key + "'], textarea[data-field='" + key + "']")
        if (_input.length > 0 && !_input.val()) _input.val(_val);
        
      });
    
    }
    
    updateFormFromData = function(form, data) {
    
      // -- Targets - bit of a hack but field magically disappears :( -- //
      if (data.has_Targets && data.has_Targets.Target && data.has_Targets.Target.length > 0) {
        if (__debug) console.log("TARGETS: " + JSON.stringify(data.has_Targets.Target));
        var __this = $("#add_Target")
        for (var i = 0; i < data.has_Targets.Target.length; i++) {
          addTarget(data.has_Targets.Target[i].Value, __this);
        }	
	  }

      // -- Iterate through all the Input, Select & Text Area Elements of the Form -- //
      form.find("input, select, textarea").each(function() {
						
        _this = $(this);
						
        var _field = _this.data("field");
        var _for = _this.data("for");
        var _type = _this.data("type");
        var _val, _label;
						
        if (_field || (_for && _type)) {

          if (__debug) console.log("Form Input: Id=" + this.id + "; Type=" + this.type + "; Data-Field=" + _field + "; Data-For=" + _for + "; Data-Type=" + _type);
							
          if (_field && data[this.id]) {
								
            _val = data[this.id].Value;
			if (data[this.id].Label) _label = data[this.id].Label;
			if (__debug) console.log("Found ID Match. Value=" + _val + ";Object Type=" + typeof _val);

		  } else if (_for && data[_for]) {

			_val = data[_for][_type];
			if (__debug) console.log("Found FOR/TYPE Match. Value=" + JSON.stringify(_val) + ";Object Type=" + typeof _val);
			if (data[_for].Evidence && data[_for].Evidence.length > 0) { // Add Evidence if applicable
			  for (var i = 0;i < data[_for].Evidence.length; i++) {
				var _e = data[_for].Evidence[i];
				addEvidence(_this.parent().parent(), _e.Id, _e.Value, _e.Url, _e.Icon, _for);
			  }	
			}
							
	      }
							
		  if (_val) {
								
			if (Object.prototype.toString.call(_val) === "[object Array]" &&  _val.length == 1) _val = _val[0];
								
			if (_val.Value || _val.Value === "") {
			  _val = _val.Value;
			  if (_val.Label) _label = _val.Label;
            } 
								
			if ($("input[data-target='" + this.id + "']").length > 0) {
			  var _inputs = $("input[data-target='" + this.id + "'][data-value='" + _val + "']");
			  if (_inputs.length > 0) _inputs.parent().addClass("active");
			}
								
			if (this.type == "checkbox" || this.type == "radio") {
			  _this.prop("checked", _val);
			   if (_this.data("reveal")) $("#" + _this.data("reveal")).slideToggle();
               
			} else {
            
              if (_this.hasClass("resizable")) { // Trigger the resize update!
                autosize.update(_this.val(_val));
              } else {
			   _this.val(_val);
              }
             
			  if (_this.hasClass("resizable")) { // Trigger the resize update!
				var evt = document.createEvent("Event");
				evt.initEvent("autosize:update", true, false);
				this.dispatchEvent(evt);
			  }			
			}
			
            if (_label) _this.data("label", _label);
								
		  }
						
		}
						
      });
      
    }
    
    showPreviousData = function(parent, data) {
    
      var _holder = $("<div />", {class : "panel-body previous"});
      
      Object.keys(data.Data).map(function(key) {
         var _value = data.Data[key];
         
         var _val = _value.Value;
         
         if (_val === true && (_value.Details || _value.Target || _value.Evidence)) {
           
           _val = "YES";
           
           if (_value.Details && Object.prototype.toString.call(_value.Details) === "[object Array]") {
             for (var i = 0; i < _value.Details.length; i++) {
               if (_value.Details[i].Value) _val = _val + (_val ? (_val == "YES" ? ": " : "; ") : "") + _value.Details[i].Value;
             }
           }
           
           if (_value.Target && Object.prototype.toString.call(_value.Target) === "[object Array]") {
             for (var i = 0; i < _value.Target.length; i++) {
               if (_value.Target[i].Value) _val = _val + (_val ? (_val == "YES" ? ": " : "; ") : "") + _value.Target[i].Value;
             }
           }
           
         } else if (_val === true) {
           
           _val = "YES";
           
         } else if (_val === false) {
        
           _val = "NO";
           
         }
         
         if (_val) {
           $("<div />", {class : "form-group"}).append(
             $("<label />", {class : "col-md-3 control-label", for : key, text : _value.Field})
           ).append(
             $("<div />", {class : "col-md-9"}).append(
               $("<textarea />", {name : key, type : "text", class : "form-control input-md resizable", rows : 1, readonly : "readonly", disabled : "disabled", placeholder : _val})
             ).append(
               $("<i />", {class : "form-control-feedback glyphicon glyphicon-lock previous-lock"})
             ).append(
               $("<span />", {class : "help-block", text : ""})
             )
           ).appendTo(_holder)
         }
      
      });
      
      // -- Add appropriate context elements and header -- //
      $("<div />", {class : "row"}).append(
        $("<div />", {class : "col-md-9"}).append(
          $("<div />", {class : "panel panel-info"}).append(
            $("<div />", {class : "panel-heading"}).append(
              $("<h4 />", {class : "panel-title"}).append(
                $("<span />", {class : "glyphicon glyphicon-check", style : "padding-right: 0.6em;"})
              ).html("Data Previously Submitted: <strong>" + data.Title + "</strong>")
            )
          ).append(_holder)
        )
      ).appendTo(parent);
      
    
    }
    // -- Data Methods -- //
    
    
    // Hack to remove Overflow-Y scrollbar in Chrome
    // See - https://code.google.com/p/google-apps-script-issues/issues/detail?id=5164
    parent.document.getElementById("userHtmlFrame").style.overflowY = "hidden";
    
    // Show Description is required.
    if ($("#description p").text()) $("#description").fadeIn("slow");
    
    // -- Disable Saving / Submission -- //
    $("#submission .action").prop("disabled", true).addClass("high-dim");
    
    // -- Get Passed Parameters from Server -- //
    __display = $("#__data_display").text();
    if (__display) __display = JSON.parse(__display);
    
    __populate = $("#__data_populate").text();
    if (__populate) __populate = JSON.parse(__populate);
    
    __token = $("#__data_token").text();
    __organisation = $("#__data_organisation").text();
    __user = $("#__data_user").text();
    
    __defaults = $("#__data_defaults").text();
    if (__defaults) __defaults = JSON.parse(__defaults);
    
    __status = $("#__data_status").text();
    
    __debug = $("#__data_debug").text() ? true : false;
    // -- Get Passed Parameters from Server -- //
    
    
    // -- Change | Update Methods -- //
    $("form ul.colour_selector li a").click(function(e) {
      e.preventDefault();
      var _this = $(this);
      $("#" + _this.parent().parent().data("target")).css("background-color", _this.data("value")).val(_this.data("value"));
      _this.parents(".dropdown-menu").find("li").removeClass("active");
      _this.parent("li").addClass("active");
	});
    
    $("form input[type='radio'], form input[type='checkbox']").change(function() {
		var _this = $(this);
		if (_this.data("target") && (_this.data("value") || _this.data("value") === "")) {
			if (_this.prop("checked")) {
				autosize.update($("#" + _this.data("target")).val(_this.data("value")));
			} else {
				autosize.update($("#" + _this.data("target")).val(""));
			}
		}
	});
	
	$("form a.dropdown-selector").click(function(e) {
		var _this = $(this);
		if (_this.data("target") && _this.data("value")) {
			e.preventDefault();
			$("#" + _this.data("target")).css("color", "#000").text(_this.data("value"));
		}
	})
    
    $("form input.reveal").change(function() {$("#" + $(this).data("reveal")).toggleClass("hidden");});
    
    $(".alter-numerical").click(function(e) {
        var _this = $(this);
		if (_this.data("target") && _this.data("value")) {
			var _target = $("#" + _this.data("target"));
			var _min = 0;
			if (_target.data("min")) _min = Number(_target.data("min"));
			var _max = Number.MAX_VALUE;
			if (_target.data("max")) _max = Number(_target.data("max"));
			var _suffix = _target.data("suffix");
			var current_Val = _target.val();
			if (current_Val && _suffix) current_Val = current_Val.split(" ")[0];
			if (current_Val) {
				current_Val = Number(current_Val);
			} else {
				current_Val = 0;
			}
			if (current_Val + Number(_this.data("value")) <= _max) current_Val += Number(_this.data("value"));
			if (current_Val <= _min) {
				_target.val("");
			} else if (_suffix) {
				_target.val(current_Val + " " + _suffix);
			} else {
				_target.val(current_Val);
			}
		}
	});
    // -- Change | Update Methods -- //
    
    // -- Update Reject List -- //
    var _reject_List = $("#reject_form").empty();
    if (__display && __display.length > 0) {
      for (var i = 0; i < __display.length; i++) {
        _reject_List.append($("<option />", {value : __display[i].Key, text : __display[i].Title}));
      }
    } else {
      _reject_List.append($("<option />", {value : "NONE", text : "N/A - Reject Process"}));
    }
    
    // -- Only show Submission if Status Allows it -- //
    if (__status == "SENT" || __status == "RETURNED" || __status == "ACCEPTED") $("#submission").fadeIn();
    
  });

</script>