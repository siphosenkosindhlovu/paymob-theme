<?php
$heading = get_sub_field('heading');
$image = get_sub_field('image');
$content = get_sub_field('media');
$colours = get_sub_field('colours');
$bg_colour = $colours['bg-colour'];
$heading_colour = $colours['heading_colour'];
$text_colour = $colours['text_colour'];

?>
<section class="container-fluid bg-blue-light-1 page-section text-<?php echo esc_attr($text_colour); ?>">

  <h2 class="text-<?php echo esc_attr($heading_colour); ?>"><?php echo $heading; ?></h2>
  <?php echo $content; ?>
  <div class="container">
    <div class="w-md-75 mx-auto">

      <div class="embed mb-3">
        <iframe width="677" height="381" src="https://www.youtube.com/embed/3d5dIpVZwxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div class="text-center">
    <a href="#" class="btn btn-accent">Request Demo</a>
  </div>
</section>