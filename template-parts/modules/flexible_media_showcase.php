<?php

/**
 * Layout: Media Showcase
 * 
 * @property string $heading
 * @property string $image
 * @property mixed $content
 * @property array $call_to_action
 * @property mixed $name
 * 
 * 
 */

$heading = get_sub_field('heading');
$image = get_sub_field('media');
$content = get_sub_field('content');
$colours = get_sub_field('colours');
$layout = get_sub_field('layout');
$alignment = get_sub_field('alignment');
$bg_colour = $colours['bg-colour'];
$heading_colour = $colours['heading_colour'];
$text_colour = $colours['text_colour'];
$direction_class = $alignment == "left" ? "" : "flex-md-row-reverse";
$layout_classes = array(
  "first" => $layout == "2x1" ? "col-12 col-md-4 col-lg-3" : "col-12 col-md-6",
  "second" => $layout == "2x1" ? "col-12 col-md-8 col-lg-9" : "col-12 col-md-6"
);
?>
<div class="page-section bg-<?php echo esc_attr($bg_colour) ?>">
  <div class="container">
    <div class="row <?php echo esc_attr($direction_class); ?>">
      <div class="<?php echo esc_attr($layout_classes['first']); ?>">
        <?php if ($image) :
          echo "<img src=" . esc_attr($image) . " class='img-fluid'>";
        endif;
        ?>
      </div>
      <div class="<?php echo esc_attr($layout_classes['second']); ?>">
        <h2 class="text-<?php echo esc_attr($heading_colour);?>"><?php echo $heading;?></h2>
        <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>