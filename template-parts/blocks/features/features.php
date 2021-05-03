<?php
$heading = get_field('heading');
$heading = get_field('leading_paragraph');
$features = get_field('features');
$colours = get_field('colours');
$font_sizes = get_field('font_sizes');

if( !empty($block['className']) ) {
  $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
  $className .= ' text-' . $block['align'];
}
?>

<div class="page-section">
  <div class="container">
    <div class="row justify-content-between row-cols-md-4">
      <?php
        foreach($features as $feature):
          ?>
          <div class="text-center">
            <img src="<?php echo $feature['image']['url'];?>" alt="<?php echo $feature['image']['alt'];?>" class="img-fluid mb-4">
            <h3 class="mb-1"><?php echo ($feature['label']);?></h3>
            <p>
              <?php echo $feature['description']; ?>
            </p>
          </div>
          <?php
        endforeach;
      ?>
    </div>
  </div>
</div>