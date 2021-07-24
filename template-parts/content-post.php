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
          <h3 class="article-title fs-4">
            <a href="<?php echo get_permalink(); ?>" class="stretched-link">
              <?php the_title(); ?>
            </a>
          </h3>
          <div class="card-text mt-auto">
            <div class="d-flex align-items-center">
              <?php
              $author_ID = get_the_author_meta('ID');
              if (get_avatar_url($author_ID)) :
              ?>
                <img src="<?php echo get_avatar_url($author_ID); ?>" class="article-author-thumb-md rounded-circle">
              <?php
              endif;
              ?>
              <div class="fs-sm ms-4">
                <div class="fw-bold"><?php the_author(); ?></div>
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