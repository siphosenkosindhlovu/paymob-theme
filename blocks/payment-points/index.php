<?php
function paymob_payment_points_render_callback($block_attributes, $content)
{

  $out = '';
  ob_start();
?>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
    <?php
    $args = array(
      'post_type' => 'payment_points',
      'orderby' => 'date',
      'order' => 'ASC',
    );
    $payment_points = new WP_Query($args);
    if ($payment_points->have_posts()) :
      while ($payment_points->have_posts()) :
        $payment_points->the_post();
    ?>
        <div class="col">
          <button class="card rounded-3 p-0 shadow-none <?php echo $block_attributes['showBackgroundColor'] ? get_field('header_color_class'): '' ; ?> ratio ratio-1x1 mb-5" data-bs-toggle="modal" data-bs-target="#post-<?php the_ID() ?>" style="border: 4px dashed rgba(255, 255, 255, 0.5);">
            <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="card-img rounded-3" height="160">
            <div class="card-img-overlay d-flex justify-content-center pb-0">
              <div class="fs-5 mt-auto" style="white-space: nowrap">
                <?php echo str_replace('For', '', get_the_title()); ?>
              </div>
            </div>
          </button>
        </div>
    <?php
      endwhile;
    endif;
    ?>
  </div>
  <?php

  $out .= ob_get_contents();
  ob_end_clean();

  return $out;
}

register_block_type_from_metadata(
  __DIR__,
  array(
    'render_callback' => 'paymob_payment_points_render_callback'
  )
);
