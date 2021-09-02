<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

if (!is_single()) :
  if (is_sticky()) : ?>
    <div class="mb-4 w-100">
      <article class="card sticky-article">
        <div class="row row-cols-md-2 g-0">
          <div class="d-flex">
            <div style="flex: 1">
              <?php if (get_the_post_thumbnail_url(null, 'full')) : ?>
                <?php the_post_thumbnail(array(380, 246), array('class' => '')); ?>
            </div>
          </div>
        <?php endif; ?>
        <div class="card-body d-flex flex-column">
          <a href="<?php echo get_permalink(); ?>" class="stretched-link text-decoration-none"">
          <h3 class="fs-3md mb-0">
              <?php the_title(); ?>
            </h3>
          </a>
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
        </div>
      </article>
    </div>
  <?
  endif;
  if (!is_sticky()) :
  ?>
    <div class="mb-4">
      <article class="card h-100">
        <div class="ratio ratio-16x9">
          <?php if (get_the_post_thumbnail_url(null, 'full')) : ?>
            <?php the_post_thumbnail(array(380, 246), array('class' => 'card-img-top ratio-16x9')); ?>
        </div>
      <?php endif; ?>
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