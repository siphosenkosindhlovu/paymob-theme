<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

if (!is_single()) :
  if (!is_sticky()) :
?>
    <div class="mb-4">
      <article class="card h-100">
        <?php if (get_the_post_thumbnail_url(null, 'full')) : ?>
          <img src="<?php get_the_post_thumbnail_url(); ?>" alt="" class="card-img-top">
        <?php endif; ?>
        <?php the_post_thumbnail(array(380, 246), array('class' => 'card-img-top ratio-16x9')); ?>
        <div class="card-body d-flex flex-column">
          <h3 class="article-title fs-4 mb-0">
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
  endif;
else : ?>
  <?php echo "No posts found" ?>
<?php endif; ?>