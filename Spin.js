<script>

  // == Spinner Options == //
  var spin_small = {
    lines: 9 // The number of lines to draw
    , length: 10 // The length of each line
    , width: 5 // The line thickness
    , radius: 5 // The radius of the inner circle
    , scale: 0.8 // Scales overall size of the spinner
    , corners: 0.5 // Corner roundness (0..1)
    , color: "#222" // #rgb or #rrggbb or array of colors
    , opacity: 0.2 // Opacity of the lines
    , rotate: 7 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 0.8 // Rounds per second
    , trail: 71 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: "spinner" // The CSS class to assign to the spinner
    , top: "50%" // Top position relative to parent
    , left: "50%" // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: true // Whether to use hardware acceleration
    , position: "absolute" // Element positioning
  }

  var spin_large = {
    lines: 18 // The number of lines to draw
    , length: 200 // The length of each line
    , width: 30 // The line thickness
    , radius: 100 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 0.5 // Corner roundness (0..1)
    , color: "#222" // #rgb or #rrggbb or array of colors
    , opacity: 0.2 // Opacity of the lines
    , rotate: 7 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 0.8 // Rounds per second
    , trail: 71 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: "spinner" // The CSS class to assign to the spinner
    , top: "25%" // Top position relative to parent
    , left: "50%" // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: true // Whether to use hardware acceleration
    , position: "absolute" // Element positioning
  }
  // == Spinner Options == //

</script>