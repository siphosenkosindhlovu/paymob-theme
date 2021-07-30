<?php
function paymob_latest_posts_render_callback($block_attributes, $content)
{
  $display_featured_image = $block_attributes["displayFeaturedImage"];
  $out = '';
  ob_start();
?>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <?php
    $args = array(
      'post_type' => 'post',
      'posts_per_page' => $block_attributes['postsToShow'],
    );
    $steps = new WP_Query($args);
    if ($steps->have_posts()) :
      while ($steps->have_posts()) :
        $steps->the_post();
    ?>
        <div class="mb-4">
          <article class="card h-100">
            <?php if ($display_featured_image === true) : ?>
              <div class="ratio ratio-16x9">
                <?php the_post_thumbnail(array(380, 246), array('class' => 'card-img-top ratio ratio-16x9')); ?>
              </div>
            <?php endif; ?>
            <div class="card-body d-flex flex-column">
              <h3 class="article-title fs-4">
                <a href="<?php echo get_permalink(); ?>" class="stretched-link fw-normal text-blue">
                  <?php the_title(); ?>
                </a>
              </h3>
              <div class="card-text mt-auto">
                <div class="d-flex align-items-center">
                  <div class="fs-sm">
                    <div><?php echo implode(', ', wp_get_post_categories(get_the_ID(), array('fields' => 'names'))); ?></div>
                    <div class="text-accent">
                      <?php the_date('F j, Y'); ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

    <?php
      endwhile;
    else :
      echo 'No posts';
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
    'render_callback' => 'paymob_latest_posts_render_callback'
  )
);
